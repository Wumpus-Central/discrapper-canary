"use strict";
n.d(t, { A: () => s });
var r = n(29583),
    i = n(618027),
    a = n(998280);
function s(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, a.A)(t);
    n % 7 == 0 && (n -= 7);
    var s = 1,
        o = (0, r.default)(e),
        l = 7 * (((n % 7) + 7) % 7 < s) + n - o.getUTCDay();
    return o.setUTCDate(o.getUTCDate() + l), o;
}
