"use strict";
n.d(t, { A: () => i });
var r = n(315069);
class i extends r.A {
    skuId;
    constructor(e) {
        super(), (this.skuId = e.skuId);
    }
    static fromServer(e) {
        let { sku_id: t, ...n } = e;
        return new i({ ...n, skuId: t });
    }
}
