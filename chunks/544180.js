n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(209489),
    s = n(652215);
let l = s.wY_.UNKNOWN,
    o = s.NKC.UNKNOWN,
    d = null;
function c(e) {
    (l = null != e.type ? e.type : s.wY_.UNKNOWN),
        (o = e.effectiveSpeed ?? s.NKC.UNKNOWN),
        (d = e.serviceProvider),
        _.emitChange();
}
class u extends i.Ay.Store {
    static displayName = "NetworkStore";
    initialize() {
        a.A.getNetworkInformation().then(c), a.A.addChangeCallback(c);
    }
    getType() {
        return l;
    }
    getEffectiveConnectionSpeed() {
        return o;
    }
    getServiceProvider() {
        return d;
    }
}
let _ = new u(r.h, {}),
    E = _;
