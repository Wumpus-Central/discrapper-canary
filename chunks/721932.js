var i = r(431955),
    s = r(520606);
class l extends s.A {
    sku;
    constructor(t) {
        (super(t), (this.skuProductLine = t.sku.productLine), (this.sku = t.sku));
    }
    static fromServer(t) {
        let e = i.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new l({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new l({ sku_id: t.id, sku_product_line: t.productLine, sku_name: t.name, sku: t });
    }
}
r.d(
    e,
    {},
    {
        $: function (t) {
            return t instanceof l;
        },
        A: l,
    },
);
