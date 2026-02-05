"use strict";
n.d(t, { A: () => i });
var r = n(935816);
class i {
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
        let { prices: t, type: n, premium_type: a, name: s, sku_id: o, summary: l } = e;
        return new i({ prices: (0, r.m)(t), type: n, premiumType: a, name: s, skuId: o, summary: l });
    }
}
