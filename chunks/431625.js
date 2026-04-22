"use strict";
n.r(t), n.d(t, { default: () => a });
var r = n(464831),
    i = n(84776),
    s = n(618027);
function a(e, t, n) {
    (0, s.A)(2, arguments);
    var a = (0, r.default)(e, n),
        o = (0, r.default)(t, n);
    return Math.round((a.getTime() - (0, i.A)(a) - (o.getTime() - (0, i.A)(o))) / 6048e5);
}
