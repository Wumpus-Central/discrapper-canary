n.d(t, { l: () => u });
var i = n(311907),
    l = n(321404),
    a = n(195443),
    s = n(287809),
    r = n(349435),
    o = n(963555),
    c = n(840387),
    d = n(168447);
function u(e) {
    let t = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, a.z)(e),
        u = (0, l.O)(e),
        h = (0, o.F)(e, r._j.STRANGER_DANGER),
        m = (0, c.Z)(),
        A = t?.isStaff() !== !0,
        g = (0, d.Y)(e).length > 0;
    if (!(!m && A) && !n && !u && !g) return h;
}
