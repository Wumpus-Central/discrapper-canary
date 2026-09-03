n.d(t, { A: () => d });
var i,
    r = n(17928),
    a = n(228366),
    s = n(763827),
    l =
        (((i = {}).UNKNOWN = "unknown"),
        (i.BLUETOOTH = "bluetooth"),
        (i.SPEAKER = "speaker"),
        (i.RECEIVER = "receiver"),
        (i.WIRED = "wired"),
        i);
class o extends r.Ay.Store {
    static displayName = "AudioRouteStore";
    initialize() {
        this.waitFor(s.A);
    }
    getCurrentRouteType() {
        return l.UNKNOWN;
    }
    getMultipleRoutesAvailable() {
        return !1;
    }
}
let d = new o(a.h, {});
