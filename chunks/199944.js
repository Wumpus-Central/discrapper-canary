n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(439372),
    i = n(913612),
    a = n(942405);

function s(e, t, n) {
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
class o extends r.A {
    handlePostConnectionOpen() {
        (0, i.C)(), (0, a.Tn)("startup");
    }
    handleLogout() {
        (0, a.AV)();
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                LOGOUT: this.handleLogout,
            });
    }
}
let l = new o();
