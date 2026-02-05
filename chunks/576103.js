"use strict";
n.d(t, { A: () => a });
var r = n(29583),
    i = n(618027);
function a(e) {
    (0, i.A)(1, arguments);
    var t = 1,
        n = (0, r.default)(e),
        a = n.getUTCDay(),
        s = 7 * (a < t) + a - t;
    return n.setUTCDate(n.getUTCDate() - s), n.setUTCHours(0, 0, 0, 0), n;
}
