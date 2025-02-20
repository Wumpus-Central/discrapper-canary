function r(e, t, n) {
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
n.d(t, { Z: () => i }), n(266796);
class i {
    constructor(e, t, n) {
        r(this, 'name', void 0),
            r(this, 'description', void 0),
            r(this, 'getFeatureValue', void 0),
            (this.name = e),
            (this.description = n),
            (this.getFeatureValue = t),
            Object.defineProperty(this, 'getFeatureValue', {
                value: t,
                configurable: !1,
                writable: !1
            });
    }
}
