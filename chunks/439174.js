"use strict";
n.d(t, { Xr: () => o, cZ: () => l, e0: () => s });
var i = n(536637),
    r = n.n(i),
    a = n(202541);
function s(e) {
    return a.VD[e];
}
function l(e) {
    return null == s(e) ? null : e;
}
function o(e, t) {
    if (null == t) return null;
    let n = s(e);
    if (null == n) return null;
    let i = r()(t);
    return i.add(n.tenureReqNumMonths, "months"), i.add(1, "days"), i.toDate();
}
