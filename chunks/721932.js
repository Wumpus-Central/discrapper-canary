"use strict";
n.d(t, { $: () => s, A: () => r });
var l = n(32731),
    i = n(520606);
function s(e) {
    return e instanceof r;
}
class r extends i.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = e.sku.productLine), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = l.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new r({ ...e, sku: t });
    }
    static fromSKU(e) {
        return null == e ? null : new r({ sku_id: e.id, sku_product_line: e.productLine, sku_name: e.name, sku: e });
    }
}
