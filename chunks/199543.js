"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(966597),
    s = n(216623);
class a extends r.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        !(function () {
            let { enabled: e } = i.A.getConfig({ location: "saved_messages_manager" });
            e && (0, s.AX)();
        })();
    };
}
let o = new a();
