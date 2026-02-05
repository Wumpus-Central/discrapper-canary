"use strict";
n.d(t, { VG: () => l, W7: () => u, qH: () => c });
var r = n(734057),
    i = n(222823),
    a = n(531685),
    s = n(365971);
function o(e) {
    let t = i.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (r.A.getChannel(t) ?? null);
}
function l(e) {
    if (null == e) return null;
    let t = (0, s.Q2)(e);
    return null == t ? null : o(t);
}
function u() {
    let e = a.A.getFocusedWindowId();
    return null == e ? null : o(e);
}
function c(e, t) {
    if (null == e || null == t) return !1;
    let n = (0, s.Q2)(e);
    return n === (0, s.Q2)(t) && null != n;
}
