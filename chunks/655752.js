"use strict";
r.d(t, { P: () => n });
var a = r(112848),
    i = r(788868);
function n() {
    let e = (0, a.$F)();
    if (null == e) return null;
    if (e.status === a.Wo.UPCOMING) return e;
    let t = i.sp.indexOf(e.id),
        r = i.sp[t + 1];
    return null == r || -1 === t ? null : i.VD[r];
}
