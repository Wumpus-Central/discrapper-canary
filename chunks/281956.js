n.d(t, {
    J: () => c,
    n: () => u
}),
    n(47120);
var i = n(442837),
    r = n(271383),
    a = n(430824),
    s = n(607744),
    o = n(594174),
    l = n(983736);
function u(e) {
    let [t, n, i, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.Z, s.Z, o.default, r.ZP];
    if (null == e) return !1;
    let c = t.getGuild(e),
        { notClaimed: d } = n.getCheck(e),
        f = i.getCurrentUser(),
        _ = !1;
    if (null != f) {
        var p, h;
        _ = null !== (h = null === (p = u.getMember(e, f.id)) || void 0 === p ? void 0 : p.isPending) && void 0 !== h && h;
    }
    return (_ || d) && !!(0, l.Dc)(c);
}
function c(e) {
    return (0, i.e7)([a.Z, s.Z, o.default, r.ZP], () => null != e && u(e, [a.Z, s.Z, o.default, r.ZP]), [e]);
}
