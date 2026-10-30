e.d(t, { A: () => l });
var o = e(426983),
    i = e(176128);
let s = new Set([o._.PARTNERED, o._.VERIFIED, o._.VERIFIED_AND_PARTNERED, o._.COMMUNITY, o._.DISCOVERABLE]);
function l(r) {
    if (null == r) return !1;
    let t = (0, i.Jp)(r),
        e = (0, o.K)(t);
    return s.has(e);
}
