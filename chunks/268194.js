n.d(t, { Z: () => f }), n(388685);
var r = n(147913),
    i = n(314897),
    a = n(594174),
    o = n(365007),
    s = n(15980),
    l = n(981631);
function c(e, t, n) {
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
let u = !1;
class d extends r.Z {
    handlePossibleCredentialFetch() {
        if (!(u || __OVERLAY__) && i.default.getLoginStatus() === l.u34.NONE) {
            if (s.Z.hasFetchedCredentials()) {
                u = !0;
                return;
            }
            void 0 !== a.default.getCurrentUser() && ((u = !0), (0, o.hL)());
        }
    }
    handleLogout() {
        u = !1;
    }
    constructor(...e) {
        super(...e),
            c(this, "actions", {
                POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
                LOGIN_RESET: this.handleLogout,
                LOGOUT: this.handleLogout,
            }),
            c(
                this,
                "stores",
                new Map()
                    .set(i.default, this.handlePossibleCredentialFetch)
                    .set(a.default, this.handlePossibleCredentialFetch)
                    .set(s.Z, this.handlePossibleCredentialFetch),
            );
    }
}
let f = new d();
