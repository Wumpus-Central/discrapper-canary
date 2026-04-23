n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(763827),
    l = n(466814);
class s extends i.Ay.Store {
    static displayName = "AudioRouteStore";
    initialize() {
        this.waitFor(a.A);
    }
    getCurrentRouteType() {
        return l.P.UNKNOWN;
    }
    getMultipleRoutesAvailable() {
        return !1;
    }
}
let o = new s(r.h, {});
