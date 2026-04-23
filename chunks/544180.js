"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(209489),
    a = n(652215);
let o = a.wY_.UNKNOWN,
    l = a.NKC.UNKNOWN,
    d = null;
function _(e) {
    (o = null != e.type ? e.type : a.wY_.UNKNOWN),
        (l = e.effectiveSpeed ?? a.NKC.UNKNOWN),
        (d = e.serviceProvider),
        c.emitChange();
}
class u extends i.Ay.Store {
    static displayName = "NetworkStore";
    initialize() {
        s.A.getNetworkInformation().then(_), s.A.addChangeCallback(_);
    }
    getType() {
        return o;
    }
    getEffectiveConnectionSpeed() {
        return l;
    }
    getServiceProvider() {
        return d;
    }
}
let c = new u(r.h, {}),
    E = c;
