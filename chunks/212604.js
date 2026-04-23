"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(998280),
    i = n(29583),
    s = n(95944),
    a = n(618027);
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t),
        l = n.getFullYear(),
        u = n.getDate(),
        c = new Date(0);
    c.setFullYear(l, o, 15), c.setHours(0, 0, 0, 0);
    var d = (0, s.A)(c);
    return n.setMonth(o, Math.min(u, d)), n;
}
