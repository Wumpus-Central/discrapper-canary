n.d(t, { Z: () => i }), n(230036);
var r = n(695346),
    a = n(875425);
let l = Object.values(a.FO)
    .filter((e) => 'number' == typeof e)
    .sort((e, t) => e - t);
function i() {
    var e;
    let t = r.Ok.getSetting();
    if (null == t || '' === t.expiresAtMs) return a.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return a.FO.TODAY;
    if (0 === n) return a.FO.DONT_CLEAR;
    let i = new Date(),
        o = new Date(n);
    if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate()) return a.FO.TODAY;
    let s = Number(n) - Date.now();
    return null !== (e = l.find((e) => s <= e)) && void 0 !== e ? e : a.FO.TODAY;
}
