n.d(e, {
    Z: function () {
        return o;
    }
});
var a = n(652831),
    l = n(695346),
    s = n(875425);
let i = Object.values(s.F)
    .filter((t) => 'number' == typeof t)
    .sort((t, e) => t - e);
function o() {
    var t, e, n;
    let o = l.Ok.getSetting();
    if (null == o || '' === o.expiresAtMs) return (0, a.q)({ location: 'computeInitialClearAfter' }) ? s.F.DONT_CLEAR : s.F.TODAY;
    let r = Number(o.expiresAtMs);
    if (isNaN(r)) return s.F.TODAY;
    if (0 === r) return s.F.DONT_CLEAR;
    let u = new Date(),
        d = new Date(r);
    if (((e = u), (n = d), e.getFullYear() !== n.getFullYear() || e.getMonth() !== n.getMonth() || e.getDate() !== n.getDate())) return s.F.TODAY;
    let c = Number(r) - Date.now();
    return null !== (t = i.find((t) => c <= t)) && void 0 !== t ? t : s.F.TODAY;
}
