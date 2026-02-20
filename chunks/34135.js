"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153),
    s = n(383501),
    a = n(466814);
class o extends r.Ay.Store {
    static displayName = "AudioRouteStore";
    initialize() {
        this.waitFor(s.A);
    }
    getCurrentRouteType() {
        return a.P.UNKNOWN;
    }
    getMultipleRoutesAvailable() {
        return !1;
    }
}
let l = new o(i.h, {});
