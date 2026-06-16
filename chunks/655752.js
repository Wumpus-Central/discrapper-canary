"use strict";
n.d(t, { P: () => s });
var i = n(878784),
    r = n(788868);
function s() {
    let e = (0, i.$F)();
    if (null == e) return null;
    if (e.status === i.Wo.UPCOMING) return e;
    let t = r.sp.indexOf(e.id),
        n = r.sp[t + 1];
    return null == n || -1 === t ? null : r.VD[n];
}
