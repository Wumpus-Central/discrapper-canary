n.d(e, { A: () => r });
var i = n(253932),
    l = n(403918);
let a = [l.yt.MINUTES_30, l.yt.HOURS_1, l.yt.HOURS_4];
function r() {
    let t = i.G2.getSetting();
    if (null == t || "" === t.expiresAtMs) return l.yt.TODAY;
    let e = Number(t.expiresAtMs);
    if (isNaN(e)) return l.yt.TODAY;
    if (0 === e) return l.yt.DONT_CLEAR;
    let n = new Date(),
        r = new Date(e);
    if (n.getFullYear() !== r.getFullYear() || n.getMonth() !== r.getMonth() || n.getDate() !== r.getDate())
        return l.yt.TODAY;
    let s = Number(e) - Date.now();
    return a.find((t) => s <= t) ?? l.yt.TODAY;
}
