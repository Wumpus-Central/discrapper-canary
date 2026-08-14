r.d(e, { $: () => s, A: () => l });
var i = r(32731),
    n = r(520606);
function s(t) {
    return t instanceof l;
}
class l extends n.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = t.sku.productLine), (this.sku = t.sku);
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
