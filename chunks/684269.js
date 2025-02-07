n.d(e, { Z: () => s });
var a = n(695346),
    l = n(875425);
let i = Object.values(l.FO)
    .filter((t) => 'number' == typeof t)
    .sort((t, e) => t - e);
function s() {
    var t;
    let e = a.Ok.getSetting();
    if (null == e || '' === e.expiresAtMs) return l.FO.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return l.FO.TODAY;
    if (0 === n) return l.FO.DONT_CLEAR;
    let s = new Date(),
        o = new Date(n);
    if (s.getFullYear() !== o.getFullYear() || s.getMonth() !== o.getMonth() || s.getDate() !== o.getDate()) return l.FO.TODAY;
    let r = Number(n) - Date.now();
    return null !== (t = i.find((t) => r <= t)) && void 0 !== t ? t : l.FO.TODAY;
}
