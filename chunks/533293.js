function i(e, t, n) {
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
n.d(t, { Z: () => r });
class r {
    constructor(e, t, n) {
        i(this, 'name', void 0),
            i(this, 'description', void 0),
            i(this, 'getFeatureValue', void 0),
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
