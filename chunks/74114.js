n.d(t, { l: () => u });
var a = n(17928),
    i = n(321404),
    l = n(195443),
    r = n(287809),
    o = n(349435),
    s = n(963555),
    d = n(840387),
    c = n(168447);
function u(e) {
    let t = (0, a.bG)([r.default], () => r.default.getCurrentUser()),
        n = (0, l.z)(e),
        u = (0, i.O)(e),
        _ = (0, s.F)(e, o._j.STRANGER_DANGER),
        f = (0, d.Z)(),
        p = t?.isStaff() !== !0,
        A = (0, c.Y)(e).length > 0;
    if (!(!f && p) && !n && !u && !A) return _;
}
