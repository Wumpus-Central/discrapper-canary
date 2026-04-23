"use strict";
n.d(t, { A: () => s });
var r = n(315069),
    i = n(260811);
class s extends r.A {
    skuId;
    skuProductLine;
    skuName;
    isOwned;
    gifterUserId;
    sku;
    constructor(e) {
        super(),
            (this.skuId = e.sku_id),
            (this.skuProductLine = e.sku_product_line),
            (this.skuName = e.sku_name),
            (this.isOwned = e.is_owned),
            (this.gifterUserId = e.gifter_user_id),
            (this.sku = e.sku);
    }
    static fromServer(e) {
        let { sku_id: t, sku_product_line: n, sku_name: r, is_owned: a, gifter_user_id: o, sku: l, ...u } = e;
        return new s({
            ...u,
            sku_id: t,
            sku_product_line: n,
            sku_name: r,
            is_owned: a,
            gifter_user_id: o,
            sku: null != l ? i.A.createFromServer(l) : void 0,
        });
    }
}
