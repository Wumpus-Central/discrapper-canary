n.d(t, { A: () => a }), n(321073);
var i = n(91871),
    s = n.n(i),
    r = n(18108);
class a {
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
                let [t, n] = e,
                    i = [],
                    s = [],
                    r = new Set();
                n.forEach((e) => {
                    i.push(e.toLocaleLowerCase()),
                        e.includes(" ") &&
                            e.split(/\s+/).forEach((e) => {
                                let t = e.toLocaleLowerCase();
                                r.has(t) || (s.push(t), r.add(t));
                            });
                }),
                    this.preprocessed.push([t, { normalizedSearchTerms: i, normalizedTokens: s }]);
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
                this.terms.forEach((n) => {
                    let [i, r] = n;
                    for (let n of r)
                        if (s()(e.toLowerCase(), n.toLowerCase())) {
                            t.push(i);
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
        let n = this.cacheScored.get(t);
        if (null != n) return n;
        let i = [];
        return (
            this.preprocessed.forEach((e) => {
                let [n, { normalizedTokens: s, normalizedSearchTerms: a }] = e,
                    l = 0;
                a.some((e) => e === t)
                    ? (l = 1)
                    : s.some((e) => e.startsWith(t))
                      ? (l = 0.95)
                      : a.forEach((e) => {
                            let n = 0,
                                i = (0, r.g)(t, e);
                            i >= 0.8 && (n = i), (l = Math.max(l, n));
                        }),
                    l > 0 && i.push({ setting: n, score: l });
            }),
            this.cacheScored.set(t, i),
            i
        );
    }
}
