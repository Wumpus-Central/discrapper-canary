"use strict";
n.d(t, { A: () => s });
var r = n(29583),
    i = n(618027);
function s(e, t) {
    (0, i.A)(2, arguments);
    var n = (0, r.default)(e),
        s = (0, r.default)(t),
        a = n.getTime() - s.getTime();
    return a < 0 ? -1 : a > 0 ? 1 : a;
}
