"use strict";
n.d(t, { A: () => l });
var i = n(439372),
    r = n(269073),
    a = n(216623);
class s extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen() };
    handlePostConnectionOpen = () => {
        (0, r.A9)("saved_messages_manager") && (0, a.AX)();
    };
}
let l = new s();
