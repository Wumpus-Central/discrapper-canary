"use strict";
n.d(t, { A: () => s });
var r = n(29583),
    i = n(618027);
function s(e) {
    (0, i.A)(1, arguments);
    var t = (0, r.default)(e),
        n = t.getTime();
    return t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0), Math.floor((n - t.getTime()) / 864e5) + 1;
}
