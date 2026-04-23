"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(209489),
    a = n(652215);
let o = a.wY_.UNKNOWN,
    l = a.NKC.UNKNOWN,
    u = null;
function c(e) {
    (o = null != e.type ? e.type : a.wY_.UNKNOWN),
        (l = e.effectiveSpeed ?? a.NKC.UNKNOWN),
        (u = e.serviceProvider),
        _.emitChange();
}
class d extends r.Ay.Store {
    static displayName = "NetworkStore";
    initialize() {
        s.A.getNetworkInformation().then(c), s.A.addChangeCallback(c);
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
