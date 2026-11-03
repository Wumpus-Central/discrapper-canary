o.d(t, { A: () => l });
var e = o(426983),
    i = o(176128);
let s = new Set([e._.PARTNERED, e._.VERIFIED, e._.VERIFIED_AND_PARTNERED, e._.COMMUNITY, e._.DISCOVERABLE]);
function l(r) {
    if (null == r) return !1;
    let t = (0, i.Jp)(r),
        o = (0, e.K)(t);
    return s.has(o);
}
