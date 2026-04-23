l.d(t, { A: () => a });
var n = l(253932),
    i = l(403918);
let r = [i.yt.MINUTES_30, i.yt.HOURS_1, i.yt.HOURS_4];
function a() {
    let e = n.G2.getSetting();
    if (null == e || "" === e.expiresAtMs) return i.yt.TODAY;
    let t = Number(e.expiresAtMs);
    if (isNaN(t)) return i.yt.TODAY;
    if (0 === t) return i.yt.DONT_CLEAR;
    let l = new Date(),
        a = new Date(t);
    if (l.getFullYear() !== a.getFullYear() || l.getMonth() !== a.getMonth() || l.getDate() !== a.getDate())
        return i.yt.TODAY;
    let s = Number(t) - Date.now();
    return r.find((e) => s <= e) ?? i.yt.TODAY;
}
