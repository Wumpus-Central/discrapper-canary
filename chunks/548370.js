"use strict";
n.d(t, { D$: () => o, s1: () => f, xA: () => l });
var r = n(808180),
    i = n(624694);
let a = 10 * n(927813).A.Millis.SECOND,
    s = 15;
function o() {
    return r.X.isIncomingVideoEnabled() && performance.now() - r.X.lastIncomingVideoEnabledChangeTime() > a;
}
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
        r = i.A.getAccumulatedPerformanceStats(e, t, "short"),
        a = i.A.getAccumulatedPerformanceStats(e, t, "long");
    return null == r || null == a || r.numDatapoints < n || a.numDatapoints < n ? null : { short: r, long: a };
}
let u = 30,
    c = 15,
    d = 8,
    _ = 3;
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? _ : e <= 15 ? d : e <= 30 ? c : u;
}
