"use strict";
n.d(t, { H: () => d, V: () => l });
var i = n(17928),
    r = n(696451),
    s = n(71393),
    a = n(287809),
    o = n(709977);
function l(e) {
    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.A, a.default, r.Ay];
    if (null == e) return !1;
    let l = t.getGuild(e),
        d = n.getCurrentUser(),
        _ = !1;
    return null != d && (_ = i.getMember(e, d.id)?.isPending ?? !1), _ && !!(0, o.Qd)(l);
}
function d(e) {
    return (0, i.bG)([s.A, a.default, r.Ay], () => null != e && l(e, [s.A, a.default, r.Ay]), [e]);
}
