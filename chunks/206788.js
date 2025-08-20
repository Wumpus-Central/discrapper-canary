n.d(t, { C: () => o });
var r = n(549616),
    i = n(863611);
function a(e, t, n) {
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
class o {
    static fromServer(e) {
        return new o(e);
    }
    constructor(e) {
        var t;
        a(this, "categories", void 0),
            a(this, "userDiscounts", void 0),
            (this.categories = e.categories.map((e) => r.Z.fromServer(e))),
            (this.userDiscounts = null == (t = e.user_discounts) ? void 0 : t.map((e) => i.h.fromServer(e)));
    }
}
