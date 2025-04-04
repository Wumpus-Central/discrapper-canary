n.d(t, {
    J: () => u,
    n: () => c
}),
    n(47120);
var r = n(442837),
    i = n(271383),
    o = n(430824),
    a = n(607744),
    s = n(594174),
    l = n(983736);
function c(e) {
    let [t, n, r, c] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, a.Z, s.default, i.ZP];
    if (null == e) return !1;
    let u = t.getGuild(e),
        { notClaimed: d } = n.getCheck(e),
        f = r.getCurrentUser(),
        _ = !1;
    if (null != f) {
        var p, h;
        _ = null != (h = null == (p = c.getMember(e, f.id)) ? void 0 : p.isPending) && h;
    }
    return (_ || d) && !!(0, l.Dc)(u);
}
function u(e) {
    return (0, r.e7)([o.Z, a.Z, s.default, i.ZP], () => null != e && c(e, [o.Z, a.Z, s.default, i.ZP]), [e]);
}
