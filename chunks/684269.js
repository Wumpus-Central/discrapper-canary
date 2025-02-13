n.d(t, { Z: () => s });
var l = n(695346),
    a = n(875425);
let i = Object.values(a.FO)
    .filter((e) => 'number' == typeof e)
    .sort((e, t) => e - t);
function s() {
    var e;
    let t = l.Ok.getSetting();
    if (null == t || '' === t.expiresAtMs) return a.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return a.FO.TODAY;
    if (0 === n) return a.FO.DONT_CLEAR;
    let s = new Date(),
        o = new Date(n);
    if (s.getFullYear() !== o.getFullYear() || s.getMonth() !== o.getMonth() || s.getDate() !== o.getDate()) return a.FO.TODAY;
    let r = Number(n) - Date.now();
    return null !== (e = i.find((e) => r <= e)) && void 0 !== e ? e : a.FO.TODAY;
}
