"use strict";
n.d(t, { A: () => h });
var i = n(17928),
    r = n(228366),
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
class d extends i.Ay.Store {
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
let _ = new d(r.h, {}),
    h = _;
