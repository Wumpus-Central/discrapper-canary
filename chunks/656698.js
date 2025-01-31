n.d(t, { Z: () => a });
var i = n(81825);
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
class a extends i.Z {
    static fromServer(e) {
        let { sku_id: t, ...n } = e;
        return new a({
            ...n,
            skuId: t
        });
    }
    constructor(e) {
        super(), r(this, 'id', void 0), r(this, 'skuId', void 0), (this.id = e.id), (this.skuId = e.skuId);
    }
}
