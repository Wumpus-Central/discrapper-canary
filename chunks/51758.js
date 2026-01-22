n.d(t, {
    H: () => c,
    V: () => l,
}),
    n(896048);
var r = n(311907),
    i = n(696451),
    a = n(71393),
    s = n(287809),
    o = n(709977);

function l(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, s.default, i.Ay];
    if (null == e) return !1;
    let l = t.getGuild(e),
        c = n.getCurrentUser(),
        u = !1;
    if (null != c) {
        var d, f;
        u = null != (d = null == (f = r.getMember(e, c.id)) ? void 0 : f.isPending) && d;
    }
    return u && !!(0, o.Qd)(l);
}

function c(e) {
    return (0, r.bG)([a.A, s.default, i.Ay], () => null != e && l(e, [a.A, s.default, i.Ay]), [e]);
}
