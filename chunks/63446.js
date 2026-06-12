"use strict";
n.d(t, { A: () => o });
var i = n(439372),
    r = n(287809),
    s = n(38050);
class a extends i.A {
    actions = { HAVEN_DISCONNECT: (e) => this.handleHavenDisconnect(e) };
    handleHavenDisconnect = (e) => {
        let t = r.default.getCurrentUser();
        e.userId === t?.id && s.n.getState().resetPlayback();
    };
}
let o = new a();
