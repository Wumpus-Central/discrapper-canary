"use strict";
n.d(t, { A: () => o });
var r = n(998280),
    i = n(29583),
    s = n(655909),
    a = n(618027);
function o(e, t, n) {
    (0, a.A)(2, arguments);
    var o = (0, i.default)(e),
        l = (0, r.A)(t),
        u = (0, s.A)(o, n) - l;
    return o.setUTCDate(o.getUTCDate() - 7 * u), o;
}
