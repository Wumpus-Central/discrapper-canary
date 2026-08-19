"use strict";
n.d(t, { A: () => l });
var i = n(439372),
    r = n(913612),
    a = n(935671);
class s extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen, LOGOUT: this.handleLogout };
    handlePostConnectionOpen() {
        (0, r.C)(), (0, a.Tn)("startup");
    }
    handleLogout() {
        (0, a.AV)();
    }
}
let l = new s();
