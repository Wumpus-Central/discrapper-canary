n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var r = n(553813),
    o = n.n(r),
    i = n(358085);
let l = { [i.PlatformTypes.WINDOWS]: { nvidia: '>=397.93.0' } };
function a(e) {
    let t = l[(0, i.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let r = e[n],
            i = t[n];
        if (null == r || null == i || null != r.error) continue;
        let l = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(r);
        if (!o().satisfies(l, i)) return !0;
    }
    return !1;
}
