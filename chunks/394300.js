"use strict";
n.d(t, { A: () => o, P: () => a });
var i = n(32731),
    r = n(520606),
    s = n(652215);
let a = (e) => e instanceof o;
class o extends r.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = s.EZt.PREMIUM), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = i.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new o({ ...e, sku: t });
    }
    static fromSKU(e) {
        return null == e ? null : new o({ sku_id: e.id, sku_product_line: s.EZt.PREMIUM, sku_name: e.name, sku: e });
    }
}
