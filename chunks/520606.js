s.d(e, { A: () => n });
var r = s(315069),
    i = s(32731);
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
        let { sku_id: e, sku_product_line: s, sku_name: r, is_owned: l, gifter_user_id: a, sku: o, ...u } = t;
        return new n({
            ...u,
            sku_id: e,
            sku_product_line: s,
            sku_name: r,
            is_owned: l,
            gifter_user_id: a,
            sku: null != o ? i.A.createFromServer(o) : void 0,
        });
    }
}
