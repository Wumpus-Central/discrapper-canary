n.d(t, { Z: () => d }), n(47120);
var o = n(209739),
    c = n.n(o),
    r = n(358085);
let i = { [r.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function d(e) {
    let t = i[(0, r.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let o = e[n],
            r = t[n];
        if (null == o || null == r || null != o.error) continue;
        let i = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(o);
        if (!c().satisfies(i, r)) return !0;
    }
    return !1;
}
