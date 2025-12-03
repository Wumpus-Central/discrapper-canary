n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(648358),
    a = n(865066);
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
class s extends r.Z {
    handlePostConnectionOpen() {
        (0, i.J)(), (0, a.Yz)("startup");
    }
    handleLogout() {
        (0, a.wt)();
    }
    constructor(...e) {
        super(...e),
            o(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                LOGOUT: this.handleLogout,
            });
    }
}
let l = new s();
