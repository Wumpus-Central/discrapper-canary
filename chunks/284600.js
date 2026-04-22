"use strict";
n.d(t, { A: () => a });
var r = n(29583),
    i = n(618027),
    s = n(998280);
function a(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, s.A)(t);
    n % 7 == 0 && (n -= 7);
    var a = (0, r.default)(e),
        o = 7 * (((n % 7) + 7) % 7 < 1) + n - a.getUTCDay();
    return a.setUTCDate(a.getUTCDate() + o), a;
}
