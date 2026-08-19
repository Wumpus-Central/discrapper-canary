"use strict";
n.d(t, { A: () => r });
var i = n(384726);
class r {
    prices;
    type;
    premiumType;
    name;
    skuId;
    summary;
    constructor(e) {
        (this.prices = e.prices),
            (this.type = e.type),
            (this.premiumType = e.premiumType),
            (this.name = e.name),
            (this.skuId = e.skuId),
            (this.summary = e.summary);
    }
    static fromServer(e) {
        let { prices: t, type: n, premium_type: a, name: s, sku_id: l, summary: o } = e;
        return new r({ prices: (0, i.A)(t), type: n, premiumType: a, name: s, skuId: l, summary: o });
    }
}
