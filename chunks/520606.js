"use strict";
n.d(t, { A: () => s });
var l = n(315069),
    i = n(32731);
class s extends l.A {
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
        let { sku_id: t, sku_product_line: n, sku_name: l, is_owned: r, gifter_user_id: a, sku: o, ...u } = e;
        return new s({
            ...u,
            sku_id: t,
            sku_product_line: n,
            sku_name: l,
            is_owned: r,
            gifter_user_id: a,
            sku: null != o ? i.A.createFromServer(o) : void 0,
        });
    }
}
