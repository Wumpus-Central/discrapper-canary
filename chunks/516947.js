"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(29583),
    i = n(452420),
    s = n(612829),
    a = n(618027);
function o(e) {
    (0, a.A)(1, arguments);
    var t = (0, r.default)(e);
    return Math.round(((0, i.A)(t).getTime() - (0, s.A)(t).getTime()) / 6048e5) + 1;
}
