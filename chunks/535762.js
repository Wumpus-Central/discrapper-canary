"use strict";
r.d(t, { A: () => l }), r(321073);
var n = r(91871),
    a = r.n(n),
    i = r(18108);
class l {
    terms;
    cache;
    cacheScored;
    preprocessed;
    constructor(e) {
        (this.terms = e),
            (this.cache = new Map()),
            (this.cacheScored = new Map()),
            (this.preprocessed = []),
            e.forEach((e) => {
                let [t, r] = e,
                    n = [],
                    a = [],
                    i = new Set();
                r.forEach((e) => {
                    n.push(e.toLocaleLowerCase()),
                        e.includes(" ") &&
                            e.split(/\s+/).forEach((e) => {
                                let t = e.toLocaleLowerCase();
                                i.has(t) || (a.push(t), i.add(t));
                            });
                }),
                    this.preprocessed.push([t, { normalizedSearchTerms: n, normalizedTokens: a }]);
            });
    }
    search(e) {
        return new Promise((t) => {
            t(this.getMatchingSettings(e));
        });
    }
    getMatchingSettings(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = [];
            return (
                this.terms.forEach((r) => {
                    let [n, i] = r;
                    for (let r of i)
                        if (a()(e.toLowerCase(), r.toLowerCase())) {
                            t.push(n);
                            break;
                        }
                }),
                this.cache.set(e, t),
                t
            );
        }
    }
    getScoredSearchResults(e) {
        let t = e.trim().toLocaleLowerCase();
        if (0 === t.length) return [];
        let r = this.cacheScored.get(t);
        if (null != r) return r;
        let n = [];
        return (
            this.preprocessed.forEach((e) => {
                let [r, { normalizedTokens: a, normalizedSearchTerms: l }] = e,
                    s = 0;
                l.some((e) => e === t)
                    ? (s = 1)
                    : a.some((e) => e.startsWith(t))
                      ? (s = 0.95)
                      : l.forEach((e) => {
                            let r = 0,
                                n = (0, i.g)(t, e);
                            n >= 0.8 && (r = n), (s = Math.max(s, r));
                        }),
                    s > 0 && n.push({ setting: r, score: s });
            }),
            this.cacheScored.set(t, n),
            n
        );
    }
}
