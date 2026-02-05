"use strict";
n.r(t), n.d(t, { default: () => s });
var r = n(998280),
    i = n(29583),
    a = n(618027);
function s(e, t) {
    (0, a.A)(2, arguments);
    var n = (0, i.default)(e),
        s = (0, r.A)(t);
    if (isNaN(s)) return new Date(NaN);
    if (!s) return n;
    var o = n.getDate(),
        l = new Date(n.getTime());
    return (l.setMonth(n.getMonth() + s + 1, 0), o >= l.getDate())
        ? l
        : (n.setFullYear(l.getFullYear(), l.getMonth(), o), n);
}
