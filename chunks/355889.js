n.d(t, { x: () => s });
var r = n(510801),
    i = n(419709);
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
class s {
    static fromServer(e) {
        return new s(e);
    }
    constructor(e) {
        var t;
        a(this, "categories", void 0),
            a(this, "userDiscounts", void 0),
            (this.categories = e.categories.map((e) => r.A.fromServer(e))),
            (this.userDiscounts = null == (t = e.user_discounts) ? void 0 : t.map((e) => i.T.fromServer(e)));
    }
}
