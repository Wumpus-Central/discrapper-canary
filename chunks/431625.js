"use strict";
n.r(t), n.d(t, { default: () => a });
var i = n(464831),
    r = n(84776),
    s = n(618027);
function a(e, t, n) {
    (0, s.A)(2, arguments);
    var a = (0, i.default)(e, n),
        o = (0, i.default)(t, n);
    return Math.round((a.getTime() - (0, r.A)(a) - (o.getTime() - (0, r.A)(o))) / 6048e5);
}
