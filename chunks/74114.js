"use strict";
n.d(t, { l: () => d });
var r = n(311907),
    i = n(321404),
    s = n(195443),
    a = n(287809),
    o = n(349435),
    l = n(963555),
    u = n(840387),
    c = n(168447);
function d(e) {
    let t = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        n = (0, s.z)(e),
        d = (0, i.O)(e),
        _ = (0, l.F)(e, o._j.STRANGER_DANGER),
        f = (0, u.Z)(),
        p = t?.isStaff() !== !0,
        h = (0, c.Y)(e).length > 0;
    if (!(!f && p) && !n && !d && !h) return _;
}
