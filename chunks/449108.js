"use strict";
n.d(t, { A: () => a });
var r = n(562465),
    i = n(985018);
class s extends r.$F {
    constructor(e, t) {
        super(e, t, i.intl.string(i.t.Mt8yDB));
        const n = this.getFieldErrors("asset");
        null != n && n[0]?.code === "BINARY_TYPE_MAX_SIZE" && (this.message = i.intl.string(i.t.mrlScX));
    }
}
let a = s;
