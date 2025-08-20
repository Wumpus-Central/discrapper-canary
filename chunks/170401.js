n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(658722),
    i = n.n(r);
function a(e, t, n) {
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
class o {
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
                    let [r, a] = n;
                    for (let n of a)
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
        a(this, "terms", void 0), a(this, "cache", void 0), (this.terms = e), (this.cache = {});
    }
}
