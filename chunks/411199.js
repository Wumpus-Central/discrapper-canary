"use strict";
n.d(t, { A: () => l });
var r = n(247775),
    i = n(73153),
    s = n(272355),
    a = n(723702);
class o extends s.A {
    _initialize() {
        i.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    _terminate() {
        i.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen);
    }
    handleConnectionOpen = (e) => {
        ((0, a.isWindows)() || (0, a.isMac)()) && r.encryptAndStoreTokens();
    };
}
let l = new o();
