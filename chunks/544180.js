n.d(t, { A: () => h });
var r,
    i = n(311907),
    a = n(73153),
    s = n(209489),
    o = n(652215);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = o.wY_.UNKNOWN,
    u = o.NKC.UNKNOWN,
    d = null;
function f(e) {
    var t;
    (c = null != e.type ? e.type : o.wY_.UNKNOWN),
        (u = null != (t = e.effectiveSpeed) ? t : o.NKC.UNKNOWN),
        (d = e.serviceProvider),
        _.emitChange();
}
class p extends (r = i.Ay.Store) {
    initialize() {
        s.A.getNetworkInformation().then(f), s.A.addChangeCallback(f);
    }
    getType() {
        return c;
    }
    getEffectiveConnectionSpeed() {
        return u;
    }
    getServiceProvider() {
        return d;
    }
}
l(p, "displayName", "NetworkStore");
let _ = new p(a.h, {}),
    h = _;
