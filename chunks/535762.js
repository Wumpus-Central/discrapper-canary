n.d(t, { A: () => u }), n(896048), n(321073), n(733351), n(747238);
var r = n(91871),
    i = n.n(r),
    a = n(18108);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = 1,
    l = 0.95,
    c = 0.8;
class u {
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
                    let [r, a] = n;
                    for (let n of a)
                        if (i()(e.toLowerCase(), n.toLowerCase())) {
                            t.push(r);
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
        let r = [];
        return (
            this.preprocessed.forEach((e) => {
                let [n, { normalizedTokens: i, normalizedSearchTerms: s }] = e,
                    u = 0;
                s.some((e) => e === t)
                    ? (u = o)
                    : i.some((e) => e.startsWith(t))
                      ? (u = l)
                      : s.forEach((e) => {
                            let n = 0,
                                r = (0, a.g)(t, e);
                            r >= c && (n = r), (u = Math.max(u, n));
                        }),
                    u > 0 &&
                        r.push({
                            setting: n,
                            score: u,
                        });
            }),
            this.cacheScored.set(t, r),
            r
        );
    }
    constructor(e) {
        s(this, "terms", void 0),
            s(this, "cache", void 0),
            s(this, "cacheScored", void 0),
            s(this, "preprocessed", void 0),
            (this.terms = e),
            (this.cache = new Map()),
            (this.cacheScored = new Map()),
            (this.preprocessed = []),
            e.forEach((e) => {
                let [t, n] = e,
                    r = [],
                    i = [],
                    a = new Set();
                n.forEach((e) => {
                    r.push(e.toLocaleLowerCase()),
                        e.includes(" ") &&
                            e.split(/\s+/).forEach((e) => {
                                let t = e.toLocaleLowerCase();
                                a.has(t) || (i.push(t), a.add(t));
                            });
                }),
                    this.preprocessed.push([
                        t,
                        {
                            normalizedSearchTerms: r,
                            normalizedTokens: i,
                        },
                    ]);
            });
    }
}
