n.d(t, { Z: () => o });
var r = n(695346),
    a = n(875425);
let i = [a.FO.MINUTES_30, a.FO.HOURS_1, a.FO.HOURS_4];
function o() {
    var e;
    let t = r.Ok.getSetting();
    if (null == t || '' === t.expiresAtMs) return a.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return a.FO.TODAY;
    if (0 === n) return a.FO.DONT_CLEAR;
    let o = new Date(),
        l = new Date(n);
    if (o.getFullYear() !== l.getFullYear() || o.getMonth() !== l.getMonth() || o.getDate() !== l.getDate()) return a.FO.TODAY;
    let s = Number(n) - Date.now();
    return null != (e = i.find((e) => s <= e)) ? e : a.FO.TODAY;
}
