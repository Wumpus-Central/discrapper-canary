"use strict";
n.d(t, { A: () => a, P: () => r });
var l = n(32731),
    i = n(520606),
    s = n(652215);
function r(e) {
    return e instanceof a;
}
class a extends i.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = s.EZt.PREMIUM), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = l.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new a({ ...e, sku: t });
    }
    static fromSKU(e) {
        return null == e ? null : new a({ sku_id: e.id, sku_product_line: s.EZt.PREMIUM, sku_name: e.name, sku: e });
    }
}
