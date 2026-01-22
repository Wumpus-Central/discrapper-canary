n.d(e, { A: () => i });
var l = n(253932),
    a = n(403918);
let r = [a.yt.MINUTES_30, a.yt.HOURS_1, a.yt.HOURS_4];
function i() {
    var t;
    let e = l.G2.getSetting();
    if (null == e || "" === e.expiresAtMs) return a.yt.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return a.yt.TODAY;
    if (0 === n) return a.yt.DONT_CLEAR;
    let i = new Date(),
        o = new Date(n);
    if (i.getFullYear() !== o.getFullYear() || i.getMonth() !== o.getMonth() || i.getDate() !== o.getDate())
        return a.yt.TODAY;
    let s = Number(n) - Date.now();
    return null != (t = r.find((t) => s <= t)) ? t : a.yt.TODAY;
}
