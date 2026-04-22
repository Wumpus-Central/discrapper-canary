"use strict";
n.d(t, { D$: () => a, s1: () => l, xA: () => o });
var r = n(808180),
    i = n(624694);
let s = 10 * n(927813).A.Millis.SECOND;
function a() {
    return r.X.isIncomingVideoEnabled() && performance.now() - r.X.lastIncomingVideoEnabledChangeTime() > s;
}
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
        r = i.A.getAccumulatedPerformanceStats(e, t, "short"),
        s = i.A.getAccumulatedPerformanceStats(e, t, "long");
    return null == r || null == s || r.numDatapoints < n || s.numDatapoints < n ? null : { short: r, long: s };
}
function l() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
    return e <= 5 ? 3 : e <= 15 ? 8 : e <= 30 ? 15 : 30;
}
