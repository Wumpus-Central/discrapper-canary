n.d(t, { l: () => l });
var r = n(17928),
    i = n(321404),
    a = n(195443),
    s = n(287809),
    u = n(349435),
    A = n(963555),
    f = n(840387),
    p = n(168447);
function l(e) {
    let t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        n = (0, a.z)(e),
        l = (0, i.O)(e),
        d = (0, A.F)(e, u._j.STRANGER_DANGER),
        R = (0, f.Z)(),
        _ = t?.isStaff() !== !0,
        c = (0, p.Y)(e).length > 0;
    if (!(!R && _) && !n && !l && !c) return d;
}
