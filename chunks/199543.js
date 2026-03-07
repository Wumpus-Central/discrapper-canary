"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(966597),
    s = n(216623);
function a() {
    let { enabled: e } = i.A.getConfig({ location: "saved_messages_manager" });
    e && (0, s.AX)();
}
class o extends r.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        a();
    };
}
let l = new o();
