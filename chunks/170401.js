n.d(t, { Z: () => l }), n(388685), n(539854);
var i = n(658722),
    r = n.n(i);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class l {
    search(e) {
        return new Promise((t) => {
            t(this.getMatchingSettings(e));
        });
    }
    getMatchingSettings(e) {
        let t = this.cache[e];
        if (null != t) return t;
        {
            let t = [];
            return (
                this.terms.forEach((n) => {
                    let [i, s] = n;
                    for (let n of s)
                        if (r()(e.toLowerCase(), n.toLowerCase())) {
                            t.push(i);
                            break;
                        }
                }),
                (this.cache[e] = t),
                t
            );
        }
    }
    constructor(e) {
        s(this, 'terms', void 0), s(this, 'cache', void 0), (this.terms = e), (this.cache = {});
    }
}
