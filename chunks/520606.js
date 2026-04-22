i.d(e, { A: () => n });
var r = i(315069),
    s = i(260811);
class n extends r.A {
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
        let { sku_id: e, sku_product_line: i, sku_name: r, is_owned: l, gifter_user_id: a, sku: o, ...u } = t;
        return new n({
            ...u,
            sku_id: e,
            sku_product_line: i,
            sku_name: r,
            is_owned: l,
            gifter_user_id: a,
            sku: null != o ? s.A.createFromServer(o) : void 0,
        });
    }
}
