r.d(e, { A: () => u, P: () => l });
var i = r(32731),
    n = r(520606),
    s = r(652215);
function l(t) {
    return t instanceof u;
}
class u extends n.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = s.EZt.PREMIUM), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = i.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new u({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new u({ sku_id: t.id, sku_product_line: s.EZt.PREMIUM, sku_name: t.name, sku: t });
    }
}
