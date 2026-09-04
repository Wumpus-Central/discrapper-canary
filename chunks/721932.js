r.d(e, { $: () => l, A: () => s });
var i = r(32731),
    n = r(520606);
function l(t) {
    return t instanceof s;
}
class s extends n.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = t.sku.productLine), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = i.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new s({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new s({ sku_id: t.id, sku_product_line: t.productLine, sku_name: t.name, sku: t });
    }
}
