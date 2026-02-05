"use strict";
n.d(t, { A: () => d });
var r = n(439372),
    i = n(961350),
    a = n(287809),
    s = n(917136),
    o = n(976910),
    l = n(652215);
let u = !1;
class c extends r.A {
    actions = {
        POST_CONNECTION_OPEN: this.handlePossibleCredentialFetch,
        LOGIN_RESET: this.handleLogout,
        LOGOUT: this.handleLogout,
    };
    stores = new Map()
        .set(i.default, this.handlePossibleCredentialFetch)
        .set(a.default, this.handlePossibleCredentialFetch)
        .set(o.A, this.handlePossibleCredentialFetch);
    handlePossibleCredentialFetch() {
        if (!(u || __OVERLAY__) && i.default.getLoginStatus() === l.aUe.NONE) {
            if (o.A.hasFetchedCredentials()) {
                u = !0;
                return;
            }
            void 0 !== a.default.getCurrentUser() && ((u = !0), (0, s.JQ)());
        }
    }
    handleLogout() {
        u = !1;
    }
}
let d = new c();
