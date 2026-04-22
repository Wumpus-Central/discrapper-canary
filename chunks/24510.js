"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(998280),
    i = n(29583),
    s = n(212604),
    a = n(618027);
function o(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        o = (0, r.A)(t),
        l = Math.floor(n.getMonth() / 3) + 1;
    return (0, s.default)(n, n.getMonth() + 3 * (o - l));
}
