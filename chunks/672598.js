n.d(t, { Z: () => d }), n(47120);
var o = n(209739),
    r = n.n(o),
    i = n(358085);
let c = { [i.PlatformTypes.WINDOWS]: { nvidia: '>=397.93.0' } };
function d(e) {
    let t = c[(0, i.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let o = e[n],
            i = t[n];
        if (null == o || null == i || null != o.error) continue;
        let c = (function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        })(o);
        if (!r().satisfies(c, i)) return !0;
    }
    return !1;
}
