"use strict";
n.d(t, { A: () => s });
var i = n(29583),
    r = n(618027);
function s(e, t) {
    (0, r.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, i.default)(t),
        a = n.getTime() - s.getTime();
    return a < 0 ? -1 : a > 0 ? 1 : a;
}
