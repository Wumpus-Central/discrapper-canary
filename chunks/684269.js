n.d(t, { Z: () => i }), n(230036);
var r = n(695346),
    l = n(875425);
let a = Object.values(l.FO)
    .filter((e) => 'number' == typeof e)
    .sort((e, t) => e - t);
function i() {
    var e;
    let t = r.Ok.getSetting();
    if (null == t || '' === t.expiresAtMs) return l.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return l.FO.TODAY;
    if (0 === n) return l.FO.DONT_CLEAR;
    let i = new Date(),
        o = new Date(n);
    if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate()) return l.FO.TODAY;
    let s = Number(n) - Date.now();
    return null != (e = a.find((e) => s <= e)) ? e : l.FO.TODAY;
}
