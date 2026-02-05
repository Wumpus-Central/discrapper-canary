"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(287809),
    a = n(38050);
class s extends r.A {
    actions = { HAVEN_DISCONNECT: (e) => this.handleHavenDisconnect(e) };
    handleHavenDisconnect = (e) => {
        let t = i.default.getCurrentUser();
        e.userId === t?.id && a.n.getState().resetPlayback();
    };
}
let o = new s();
