"use strict";
n.d(t, { Xr: () => l, cZ: () => o, e0: () => a });
var i = n(989349),
    r = n.n(i),
    s = n(788868);
function a(e) {
    return s.VD[e];
}
function o(e) {
    return null == a(e) ? null : e;
}
function l(e, t) {
    if (null == t) return null;
    let n = a(e);
    if (null == n) return null;
    let i = r()(t);
    return i.add(n.tenureReqNumMonths, "months"), i.add(1, "days"), i.toDate();
}
