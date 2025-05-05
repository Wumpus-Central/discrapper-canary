n.d(t, { Z: () => a });
var r = n(311850);
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
class a {
    static fromServer(e) {
        let { prices: t, type: n, premium_type: i, name: o, sku_id: s, summary: l } = e;
        return new a({
            prices: (0, r.l)(t),
            type: n,
            premiumType: i,
            name: o,
            skuId: s,
            summary: l
        });
    }
    constructor(e) {
        i(this, 'prices', void 0), i(this, 'type', void 0), i(this, 'premiumType', void 0), i(this, 'name', void 0), i(this, 'skuId', void 0), i(this, 'summary', void 0), (this.prices = e.prices), (this.type = e.type), (this.premiumType = e.premiumType), (this.name = e.name), (this.skuId = e.skuId), (this.summary = e.summary);
    }
}
