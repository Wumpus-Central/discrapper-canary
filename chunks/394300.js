s.d(e, { A: () => a, P: () => l });
var r = s(32731),
    i = s(520606),
    n = s(652215);
let l = (t) => t instanceof a;
class a extends i.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = n.EZt.PREMIUM), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = r.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new a({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new a({ sku_id: t.id, sku_product_line: n.EZt.PREMIUM, sku_name: t.name, sku: t });
    }
}
