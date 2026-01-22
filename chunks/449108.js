n.d(t, { A: () => s });
var r = n(562465),
    i = n(985018);
class a extends r.$F {
    constructor(e, t) {
        var n;
        super(e, t, i.intl.string(i.t.Mt8yDB));
        const r = this.getFieldErrors("asset");
        null != r &&
            (null == (n = r[0]) ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" &&
            (this.message = i.intl.string(i.t.mrlScX));
    }
}
let s = a;
