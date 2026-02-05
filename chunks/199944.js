"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(913612),
    a = n(942405);
class s extends r.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen, LOGOUT: this.handleLogout };
    handlePostConnectionOpen() {
        (0, i.C)(), (0, a.Tn)("startup");
    }
    handleLogout() {
        (0, a.AV)();
    }
}
let o = new s();
