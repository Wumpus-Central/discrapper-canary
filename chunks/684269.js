n.d(e, { Z: () => i });
var a = n(695346),
    l = n(875425);
let s = Object.values(l.F)
    .filter((t) => 'number' == typeof t)
    .sort((t, e) => t - e);
function i() {
    var t;
    let e = a.Ok.getSetting();
    if (null == e || '' === e.expiresAtMs) return l.F.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return l.F.TODAY;
    if (0 === n) return l.F.DONT_CLEAR;
    let i = new Date(),
        r = new Date(n);
    if (i.getFullYear() !== r.getFullYear() || i.getMonth() !== r.getMonth() || i.getDate() !== r.getDate()) return l.F.TODAY;
    let o = Number(n) - Date.now();
    return null !== (t = s.find((t) => o <= t)) && void 0 !== t ? t : l.F.TODAY;
}
