var i = r(431955),
    s = r(520606),
    l = r(652215);
class n extends s.A {
    sku;
    constructor(t) {
        (super(t), (this.skuProductLine = l.EZt.PREMIUM), (this.sku = t.sku));
    }
    static fromServer(t) {
        let e = i.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new n({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new n({ sku_id: t.id, sku_product_line: l.EZt.PREMIUM, sku_name: t.name, sku: t });
    }
}
r.d(
    e,
    {},
    {
        A: n,
        P: function (t) {
            return t instanceof n;
        },
    },
);
