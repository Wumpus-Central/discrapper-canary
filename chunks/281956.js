n.d(t, {
    J: () => c,
    n: () => l
}),
    n(388685);
var r = n(442837),
    i = n(271383),
    o = n(430824),
    a = n(594174),
    s = n(983736);
function l(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z, a.default, i.ZP];
    if (null == e) return !1;
    let l = t.getGuild(e),
        c = n.getCurrentUser(),
        u = !1;
    if (null != c) {
        var d, f;
        u = null != (f = null == (d = r.getMember(e, c.id)) ? void 0 : d.isPending) && f;
    }
    return u && !!(0, s.Dc)(l);
}
function c(e) {
    return (0, r.e7)([o.Z, a.default, i.ZP], () => null != e && l(e, [o.Z, a.default, i.ZP]), [e]);
}
