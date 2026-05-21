i.d(e, { $: () => s, A: () => n });
var r = i(32731),
    l = i(520606);
let s = (t) => t instanceof n;
class n extends l.A {
    sku;
    constructor(t) {
        super(t), (this.skuProductLine = t.sku.productLine), (this.sku = t.sku);
    }
    static fromServer(t) {
        let e = r.A.createFromServer(t.sku);
        if (null == e) throw Error("SKU not found");
        return new n({ ...t, sku: e });
    }
    static fromSKU(t) {
        return null == t ? null : new n({ sku_id: t.id, sku_product_line: t.productLine, sku_name: t.name, sku: t });
    }
}
