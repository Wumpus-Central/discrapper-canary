"use strict";
n.d(t, { A: () => o });
var r = n(29583),
    i = n(327922),
    s = n(506647),
    a = n(618027);
function o(e, t) {
    (0, a.A)(1, arguments);
    var n = (0, r.default)(e);
    return Math.round(((0, i.A)(n, t).getTime() - (0, s.A)(n, t).getTime()) / 6048e5) + 1;
}
