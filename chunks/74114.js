l.d(n, { l: () => u });
var t = l(311907),
    i = l(321404),
    s = l(195443),
    a = l(287809),
    r = l(349435),
    d = l(963555),
    c = l(840387),
    o = l(168447);
function u(e) {
    let n = (0, t.bG)([a.default], () => a.default.getCurrentUser()),
        l = (0, s.z)(e),
        u = (0, i.O)(e),
        p = (0, d.F)(e, r._j.STRANGER_DANGER),
        h = (0, c.Z)(),
        m = n?.isStaff() !== !0,
        A = (0, o.Y)(e).length > 0;
    if (!(!h && m) && !l && !u && !A) return p;
}
