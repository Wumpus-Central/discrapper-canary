n.d(t, { A: () => u });
var i = n(439372),
    r = n(280450),
    a = n(287809),
    s = n(917136),
    l = n(976910),
    o = n(652215);
let d = !1;
class c extends i.A {
    actions = {
        POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
        LOGIN_RESET: this.handleLogout,
        LOGOUT: this.handleLogout,
    };
    stores = new Map()
        .set(r.default, this.handlePossibleCredentialFetch)
        .set(a.default, this.handlePossibleCredentialFetch)
        .set(l.A, this.handlePossibleCredentialFetch);
    handlePossibleCredentialFetch() {
        if (!(d || __OVERLAY__) && r.default.getLoginStatus() === o.aUe.NONE) {
            if (l.A.hasFetchedCredentials()) {
                d = !0;
                return;
            }
            void 0 !== a.default.getCurrentUser() && ((d = !0), (0, s.JQ)());
        }
    }
    handleLogout() {
        d = !1;
    }
}
let u = new c();
