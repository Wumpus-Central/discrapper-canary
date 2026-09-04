r.d(e, { A: () => l });
var i = r(315069),
    n = r(32731);
class l extends i.A {
    skuId;
    skuProductLine;
    skuName;
    isOwned;
    gifterUserId;
    sku;
    constructor(t) {
        super(),
            (this.skuId = t.sku_id),
            (this.skuProductLine = t.sku_product_line),
            (this.skuName = t.sku_name),
            (this.isOwned = t.is_owned),
            (this.gifterUserId = t.gifter_user_id),
            (this.sku = t.sku);
    }
    static fromServer(t) {
        let { sku_id: e, sku_product_line: r, sku_name: i, is_owned: s, gifter_user_id: u, sku: a, ...o } = t;
        return new l({
            ...o,
            sku_id: e,
            sku_product_line: r,
            sku_name: i,
            is_owned: s,
            gifter_user_id: u,
            sku: null != a ? n.A.createFromServer(a) : void 0,
        });
    }
}
