"use strict";
n.d(t, { A: () => o });
var r = n(998280),
    i = n(29583),
    s = n(44134),
    a = n(618027);
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t),
        l = (0, s.A)(n) - o;
    return n.setUTCDate(n.getUTCDate() - 7 * l), n;
}
