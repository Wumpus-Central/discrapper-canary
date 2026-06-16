"use strict";
n.d(t, { A: () => u });
var i,
    r = n(17928),
    s = n(228366),
    a = n(763827),
    o =
        (((i = {}).UNKNOWN = "unknown"),
        (i.BLUETOOTH = "bluetooth"),
        (i.SPEAKER = "speaker"),
        (i.RECEIVER = "receiver"),
        i);
class l extends r.Ay.Store {
    static displayName = "AudioRouteStore";
    initialize() {
        this.waitFor(a.A);
    }
    getCurrentRouteType() {
        return o.UNKNOWN;
    }
    getMultipleRoutesAvailable() {
        return !1;
    }
}
let u = new l(s.h, {});
