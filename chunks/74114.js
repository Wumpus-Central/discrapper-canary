n.d(t, { l: () => d });
var r = n(311907),
    l = n(321404),
    i = n(195443),
    a = n(287809),
    s = n(349435),
    o = n(963555),
    c = n(840387),
    u = n(168447);
function d(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, i.z)(e),
        d = (0, l.O)(e),
        f = (0, o.F)(e, s._j.STRANGER_DANGER),
        p = (0, c.Z)(),
        h = (null == t ? void 0 : t.isStaff()) !== !0,
        b = (0, u.Y)(e).length > 0;
    if (!(!p && h) && !n && !d && !b) return f;
}
