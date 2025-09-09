n.d(t, { Z: () => c }), n(388685);
var r = n(147913),
    i = n(765504),
    a = n(648358),
    o = n(865066);
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
class l extends r.Z {
    handlePostConnectionOpen() {
        (0, a.J)();
        let { enabled: e } = i.Z.getConfig({ location: "can-install" });
        e && (0, o.Yz)("startup");
    }
    handleLogout() {
        (0, o.wt)();
    }
    constructor(...e) {
        super(...e),
            s(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                LOGOUT: this.handleLogout,
            });
    }
}
let c = new l();
