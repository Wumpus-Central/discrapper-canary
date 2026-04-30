"use strict";
n.d(t, { A: () => a });
var i = n(426983),
    r = n(176128);
let s = new Set([i._.PARTNERED, i._.VERIFIED, i._.VERIFIED_AND_PARTNERED, i._.COMMUNITY, i._.DISCOVERABLE]);
function a(e) {
    if (null == e) return !1;
    let t = (0, r.Jp)(e),
        n = (0, i.K)(t);
    return s.has(n);
}
