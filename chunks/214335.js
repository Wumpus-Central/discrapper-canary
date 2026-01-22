n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(299855),
    i = n.n(r),
    l = n(723702);
let a = {
    [l.PlatformTypes.WINDOWS]: {
        nvidia: "<=537.58.0 || >=546.31",
    },
};

function s(e) {
    let t = a[(0, l.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let r = e[n],
            l = t[n];
        if (null == r || null == l || null != r.error) continue;
        let a = (function (e) {
            var t, n;
            return "".concat(null != (t = e.major) ? t : 0, ".").concat(null != (n = e.minor) ? n : 0, ".0");
        })(r);
        if (!i().satisfies(a, l)) return !0;
    }
    return !1;
}
