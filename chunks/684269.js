n.d(t, { Z: () => i });
var a = n(695346),
    r = n(875425);
let l = [r.FO.MINUTES_30, r.FO.HOURS_1, r.FO.HOURS_4];
function i() {
    var e;
    let t = a.Ok.getSetting();
    if (null == t || '' === t.expiresAtMs) return r.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return r.FO.TODAY;
    if (0 === n) return r.FO.DONT_CLEAR;
    let i = new Date(),
        o = new Date(n);
    if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate()) return r.FO.TODAY;
    let s = Number(n) - Date.now();
    return null != (e = l.find((e) => s <= e)) ? e : r.FO.TODAY;
}
