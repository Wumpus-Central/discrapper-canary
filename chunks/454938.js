"use strict";
n.d(t, { A: () => a });
var r = n(426983),
    i = n(176128);
let s = new Set([r._.PARTNERED, r._.VERIFIED, r._.VERIFIED_AND_PARTNERED, r._.COMMUNITY, r._.DISCOVERABLE]);
function a(e) {
    if (null == e) return !1;
    let t = (0, i.Jp)(e),
        n = (0, r.K)(t);
    return s.has(n);
}
