n.d(t, { Z: () => r }), n(47120), n(653041);
var i = n(658722),
    s = n.n(i);
function l(e, t, n) {
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
class r {
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
                    let [i, l] = n;
                    for (let n of l)
                        if (s()(e.toLowerCase(), n.toLowerCase())) {
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
        l(this, 'terms', void 0), l(this, 'cache', void 0), (this.terms = e), (this.cache = {});
    }
}
