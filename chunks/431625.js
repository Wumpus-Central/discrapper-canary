"use strict";
n.r(t), n.d(t, { default: () => o });
var r = n(464831),
    i = n(84776),
    a = n(618027),
    s = 6048e5;
function o(e, t, n) {
    (0, a.A)(2, arguments);
    var o = (0, r.default)(e, n),
        l = (0, r.default)(t, n);
    return Math.round((o.getTime() - (0, i.A)(o) - (l.getTime() - (0, i.A)(l))) / s);
}
