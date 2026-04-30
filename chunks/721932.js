s.d(e, { $: () => n, A: () => l });
var r = s(32731),
    i = s(520606);
let n = (t) => t instanceof l;
class l extends i.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = t.sku.productLine), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = r.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new l({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new l({ sku_id: t.id, sku_product_line: t.productLine, sku_name: t.name, sku: t });
    }
}
