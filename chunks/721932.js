"use strict";
n.d(t, { $: () => a, A: () => s });
var r = n(731935),
    i = n(520606);
let a = (e) => e instanceof s;
class s extends i.A {
    sku;
    constructor(e) {
        super(e), (this.skuProductLine = e.sku.productLine), (this.sku = e.sku);
    }
    static fromServer(e) {
        let t = r.A.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        return new s({ ...e, sku: t });
    }
}
