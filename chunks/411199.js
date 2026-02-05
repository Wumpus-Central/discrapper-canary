"use strict";
n.d(t, { A: () => l });
var r = n(247775),
    i = n(73153),
    a = n(272355),
    s = n(723702);
class o extends a.A {
    _initialize() {
        i.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    _terminate() {
        i.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleConnectionOpen = (e) => {
        ((0, s.isWindows)() || (0, s.isMac)()) && r.encryptAndStoreTokens();
    };
}
let l = new o();
