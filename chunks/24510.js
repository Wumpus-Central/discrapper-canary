"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(998280),
    i = n(29583),
    a = n(212604),
    s = n(618027);
function o(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t) - (Math.floor(n.getMonth() / 3) + 1);
    return (0, a.default)(n, n.getMonth() + 3 * o);
}
