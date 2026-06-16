i.d(e, { A: () => l });
var r = i(315069),
    s = i(32731);
class l extends r.A {
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
        let { sku_id: e, sku_product_line: i, sku_name: r, is_owned: n, gifter_user_id: a, sku: u, ...o } = t;
        return new l({
            ...o,
            sku_id: e,
            sku_product_line: i,
            sku_name: r,
            is_owned: n,
            gifter_user_id: a,
            sku: null != u ? s.A.createFromServer(u) : void 0,
        });
    }
}
