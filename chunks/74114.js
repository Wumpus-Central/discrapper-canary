"use strict";
n.d(t, { l: () => d });
var i = n(17928),
    r = n(321404),
    s = n(195443),
    a = n(287809),
    o = n(349435),
    l = n(963555),
    u = n(840387),
    c = n(168447);
function d(e) {
    let t = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, s.z)(e),
        d = (0, r.O)(e),
        _ = (0, l.F)(e, o._j.STRANGER_DANGER),
        f = (0, u.Z)(),
        h = t?.isStaff() !== !0,
        p = (0, c.Y)(e).length > 0;
    if (!(!f && h) && !n && !d && !p) return _;
}
