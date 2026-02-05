"use strict";
n.d(t, { A: () => l });
var r = n(439372),
    i = n(966597),
    a = n(216623);
function s() {
    i.A.getCurrentConfig({ location: "saved_messages_manager" }, { autoTrackExposure: !1 }).enabled && (0, a.AX)();
}
class o extends r.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        s();
    };
}
let l = new o();
