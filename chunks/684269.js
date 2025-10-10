n.d(t, { Z: () => a });
var r = n(695346),
    i = n(875425);
let l = [i.FO.MINUTES_30, i.FO.HOURS_1, i.FO.HOURS_4];
function a() {
    var e;
    let t = r.Ok.getSetting();
    if (null == t || "" === t.expiresAtMs) return i.FO.TODAY;
    let n = Number(t.expiresAtMs);
    if (isNaN(n)) return i.FO.TODAY;
    if (0 === n) return i.FO.DONT_CLEAR;
    let a = new Date(),
        o = new Date(n);
    if (a.getFullYear() !== o.getFullYear() || a.getMonth() !== o.getMonth() || a.getDate() !== o.getDate())
        return i.FO.TODAY;
    let u = Number(n) - Date.now();
    return null != (e = l.find((e) => u <= e)) ? e : i.FO.TODAY;
}
