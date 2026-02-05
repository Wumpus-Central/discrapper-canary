"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    a = n(209489),
    s = n(652215);
let o = s.wY_.UNKNOWN,
    l = s.NKC.UNKNOWN,
    u = null;
function c(e) {
    (o = null != e.type ? e.type : s.wY_.UNKNOWN),
        (l = e.effectiveSpeed ?? s.NKC.UNKNOWN),
        (u = e.serviceProvider),
        _.emitChange();
}
class d extends r.Ay.Store {
    static displayName = "NetworkStore";
    initialize() {
        a.A.getNetworkInformation().then(c), a.A.addChangeCallback(c);
    }
    getType() {
        return o;
    }
    getEffectiveConnectionSpeed() {
        return l;
    }
    getServiceProvider() {
        return u;
    }
}
let _ = new d(i.h, {}),
    f = _;
