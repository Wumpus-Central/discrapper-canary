t.d(n, { Z: () => i }), t(47120);
var r = t(209739),
    o = t.n(r),
    l = t(358085);
let a = { [l.PlatformTypes.WINDOWS]: { nvidia: '>=397.93.0' } };
function i(e) {
    let n = a[(0, l.getPlatform)()];
    if (null == n) return !1;
    for (let t of Object.keys(e)) {
        let r = e[t],
            l = n[t];
        if (null == r || null == l || null != r.error) continue;
        let a = (function (e) {
            var n, t;
            return ''.concat(null !== (n = e.major) && void 0 !== n ? n : 0, '.').concat(null !== (t = e.minor) && void 0 !== t ? t : 0, '.0');
        })(r);
        if (!o().satisfies(a, l)) return !0;
    }
    return !1;
}
