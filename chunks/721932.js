"use strict";
n.d(t, { $: () => s, A: () => a });
var r = n(260811),
    i = n(520606);
let s = (e) => e instanceof a;
class a extends i.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = e.sku.productLine), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = r.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new a({ ...e, sku: t });
    }
    static fromSKU(e) {
        return null == e ? null : new a({ sku_id: e.id, sku_product_line: e.productLine, sku_name: e.name, sku: e });
    }
}
