"use strict";
n.d(t, { e: () => a });
var r = n(243399),
    i = n(206311);
n(632459);
var s = n(19061);
function a(e) {
    let t = (0, s.T)(e);
    for (let n of i.B) {
        let i = e[n];
        if (((0, r.V1)(isFinite(Number(i)), `${n} is not finite`), (i < 0 && t > 0) || (i > 0 && t < 0))) return !1;
    }
    return !0;
}
