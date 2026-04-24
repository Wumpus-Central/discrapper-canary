"use strict";
r.d(t, { P: () => n });
var i = r(112848),
    a = r(788868);
function n() {
    let e = (0, i.$F)();
    if (null == e) return null;
    if (e.status === i.Wo.UPCOMING) return e;
    let t = a.sp.indexOf(e.id),
        r = a.sp[t + 1];
    return null == r || -1 === t ? null : a.VD[r];
}
