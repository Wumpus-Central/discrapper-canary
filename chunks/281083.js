t.d(n, {
    Z: function () {
        return i;
    }
}),
    t(47120);
var r = t(553813),
    o = t.n(r),
    a = t(358085);
let l = { [a.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function i(e) {
    let n = l[(0, a.getPlatform)()];
    if (null == n) return !1;
    for (let t of Object.keys(e)) {
        let r = e[t],
            a = n[t];
        if (null == r || null == a || null != r.error) continue;
        let l = (function (e) {
            var n, t;
            return ''.concat(null !== (n = e.major) && void 0 !== n ? n : 0, '.').concat(null !== (t = e.minor) && void 0 !== t ? t : 0, '.0');
        })(r);
        if (!o().satisfies(l, a)) return !0;
    }
    return !1;
}
