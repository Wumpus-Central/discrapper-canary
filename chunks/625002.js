n.d(t, { A: () => s });
var i = n(299855),
    r = n.n(i),
    a = n(723702);
let l = { [a.PlatformTypes.WINDOWS]: { nvidia: ">=397.93.0" } };
function s(e) {
    let t = l[(0, a.getPlatform)()];
    if (null == t) return !1;
    for (let n of Object.keys(e)) {
        let i = e[n],
            a = t[n];
        if (null == i || null == a || null != i.error) continue;
        let l = `${i.major ?? 0}.${i.minor ?? 0}.0`;
        if (!r().satisfies(l, a)) return !0;
    }
    return !1;
}
