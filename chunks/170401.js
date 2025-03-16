n.d(t, { Z: () => a }), n(47120), n(653041);
var r = n(658722),
    i = n.n(r);
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
class a {
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
                    let [r, s] = n;
                    for (let n of s)
                        if (i()(e.toLowerCase(), n.toLowerCase())) {
                            t.push(r);
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
