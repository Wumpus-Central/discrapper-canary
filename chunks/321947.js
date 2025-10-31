n.d(t, {
    F: () => s,
    Z: () => l,
}),
    n(415506);
var r = n(659181),
    i = n(523080),
    a = n(981631);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let s = (e) => e instanceof l;
class l extends i.Z {
    static fromServer(e) {
        return new l(e);
    }
    constructor(e) {
        super(e), o(this, "sku", void 0), (this.skuProductLine = a.POd.SOCIAL_LAYER_GAME_ITEM);
        let t = r.Z.createFromServer(e.sku);
        if (null == t) throw Error("SKU not found");
        this.sku = t;
    }
}
