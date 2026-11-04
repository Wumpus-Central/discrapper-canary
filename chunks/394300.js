var i = r(431955),
    l = r(520606),
    s = r(652215);
class n extends l.A {
    sku;
    constructor(t) {
        (super(t), (this.skuProductLine = s.EZt.PREMIUM), (this.sku = t.sku));
    }
    static fromServer(t) {
        let e = i.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new n({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new n({ sku_id: t.id, sku_product_line: s.EZt.PREMIUM, sku_name: t.name, sku: t });
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
