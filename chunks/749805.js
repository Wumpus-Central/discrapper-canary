"use strict";
r.d(t, { A: () => o });
var n = r(29583),
    a = r(576103),
    s = r(216803),
    i = r(618027);
function o(e) {
    (0, i.A)(1, arguments);
    var t = (0, n.default)(e);
    return (
        Math.round(
            ((0, a.A)(t).getTime() -
                (function (e) {
                    (0, i.A)(1, arguments);
                    var t = (0, s.A)(e),
                        r = new Date(0);
                    return r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0), (0, a.A)(r);
                })(t).getTime()) /
                6048e5,
        ) + 1
    );
}
