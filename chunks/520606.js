var i = r(315069),
    l = r(431955);
class s extends i.A {
    skuId;
    skuProductLine;
    skuName;
    isOwned;
    gifterUserId;
    sku;
    addedAt;
    shopExpiresAt;
    constructor(t) {
        (super(),
            (this.skuId = t.sku_id),
            (this.skuProductLine = t.sku_product_line),
            (this.skuName = t.sku_name),
            (this.isOwned = t.is_owned),
            (this.gifterUserId = t.gifter_user_id),
            (this.sku = t.sku),
            (this.addedAt = t.added_at),
            (this.shopExpiresAt = null != t.shop_expires_at ? new Date(t.shop_expires_at) : void 0));
    }
    static fromServer(t) {
        let { sku_id: e, sku_product_line: r, sku_name: i, is_owned: n, gifter_user_id: u, sku: o, ...a } = t;
        return new s({
            ...a,
            sku_id: e,
            sku_product_line: r,
            sku_name: i,
            is_owned: n,
            gifter_user_id: u,
            sku: null != o ? l.A.createFromServer(o) : void 0,
        });
    }
}
r.d(e, {}, { A: s });
