"use strict";
n.d(t, { A: () => o });
var i = n(29583),
    r = n(576103),
    s = n(216803),
    a = n(618027);
function o(e) {
    (0, a.A)(1, arguments);
    var t = (0, i.default)(e);
    return (
        Math.round(
            ((0, r.A)(t).getTime() -
                (function (e) {
                    (0, a.A)(1, arguments);
                    var t = (0, s.A)(e),
                        n = new Date(0);
                    return n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0), (0, r.A)(n);
                })(t).getTime()) /
                6048e5,
        ) + 1
    );
}
