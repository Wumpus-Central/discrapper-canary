"use strict";
n.d(t, { H: () => u, V: () => l });
var r = n(311907),
    i = n(696451),
    s = n(71393),
    a = n(287809),
    o = n(709977);
function l(e) {
    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, a.default, i.Ay];
    if (null == e) return !1;
    let l = t.getGuild(e),
        u = n.getCurrentUser(),
        c = !1;
    return null != u && (c = r.getMember(e, u.id)?.isPending ?? !1), c && !!(0, o.Qd)(l);
}
function u(e) {
    return (0, r.bG)([s.A, a.default, i.Ay], () => null != e && l(e, [s.A, a.default, i.Ay]), [e]);
}
