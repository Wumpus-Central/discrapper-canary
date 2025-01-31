n.d(e, { Z: () => o });
var a = n(626562),
    l = n(652831),
    i = n(695346),
    s = n(875425);
let r = Object.values(s.F)
    .filter((t) => 'number' == typeof t)
    .sort((t, e) => t - e);
function o() {
    var t;
    let e = i.Ok.getSetting();
    if (null == e || '' === e.expiresAtMs) return (0, l.q)({ location: 'computeInitialClearAfter' }) || (0, a.iv)({ location: 'computeInitialClearAfter' }) ? s.F.DONT_CLEAR : s.F.TODAY;
    let n = Number(e.expiresAtMs);
    if (isNaN(n)) return s.F.TODAY;
    if (0 === n) return s.F.DONT_CLEAR;
    let o = new Date(),
        u = new Date(n);
    if (o.getFullYear() !== u.getFullYear() || o.getMonth() !== u.getMonth() || o.getDate() !== u.getDate()) return s.F.TODAY;
    let d = Number(n) - Date.now();
    return null !== (t = r.find((t) => d <= t)) && void 0 !== t ? t : s.F.TODAY;
}
