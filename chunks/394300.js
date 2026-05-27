i.d(e, { A: () => a, P: () => n });
var r = i(32731),
    l = i(520606),
    s = i(652215);
let n = (t) => t instanceof a;
class a extends l.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = s.EZt.PREMIUM), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = r.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new a({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new a({ sku_id: t.id, sku_product_line: s.EZt.PREMIUM, sku_name: t.name, sku: t });
    }
}
