"use strict";
n.d(t, { $: () => s, A: () => a });
var i = n(32731),
    r = n(520606);
let s = (e) => e instanceof a;
class a extends r.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = e.sku.productLine), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = i.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new a({ ...e, sku: t });
    }
    static fromSKU(e) {
        return null == e ? null : new a({ sku_id: e.id, sku_product_line: e.productLine, sku_name: e.name, sku: e });
    }
}
