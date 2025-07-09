n.d(e, { Z: () => i });
var l = n(695346),
    a = n(875425);
let r = [a.FO.MINUTES_30, a.FO.HOURS_1, a.FO.HOURS_4];
function i() {
    var t;
    let e = l.Ok.getSetting();
    if (null == e || '' === e.expiresAtMs) return a.FO.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return a.FO.TODAY;
    if (0 === n) return a.FO.DONT_CLEAR;
    let i = new Date(),
        o = new Date(n);
    if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate()) return a.FO.TODAY;
    let s = Number(n) - Date.now();
    return null != (t = r.find((t) => s <= t)) ? t : a.FO.TODAY;
}
