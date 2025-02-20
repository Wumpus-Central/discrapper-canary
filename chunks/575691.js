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
n.d(t, { Z: () => i });
class i {
    constructor(e, t) {
        r(this, 'skuId', void 0), r(this, 'skuFeatures', void 0), (this.skuId = e), (this.skuFeatures = t);
    }
}
