t.d(o, { A: () => l });
var e = t(426983),
    s = t(176128);
let i = new Set([e._.PARTNERED, e._.VERIFIED, e._.VERIFIED_AND_PARTNERED, e._.COMMUNITY, e._.DISCOVERABLE]);
function l(r) {
    if (null == r) return !1;
    let o = (0, s.Jp)(r),
        t = (0, e.K)(o);
    return i.has(t);
}
