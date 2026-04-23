"use strict";
r.r(t), r.d(t, { default: () => o });
var n = r(29583),
    a = r(464831),
    s = r(618027);
function i(e) {
    return (0, s.A)(1, arguments), (0, a.default)(e, { weekStartsOn: 1 });
}
function o(e) {
    (0, s.A)(1, arguments);
    var t = (0, n.default)(e);
    return (
        Math.round(
            (i(t).getTime() -
                (function (e) {
                    (0, s.A)(1, arguments);
                    var t = (function (e) {
                            (0, s.A)(1, arguments);
                            var t = (0, n.default)(e),
                                r = t.getFullYear(),
                                a = new Date(0);
                            a.setFullYear(r + 1, 0, 4), a.setHours(0, 0, 0, 0);
                            var o = i(a),
                                l = new Date(0);
                            l.setFullYear(r, 0, 4), l.setHours(0, 0, 0, 0);
                            var u = i(l);
                            return t.getTime() >= o.getTime() ? r + 1 : t.getTime() >= u.getTime() ? r : r - 1;
                        })(e),
                        r = new Date(0);
                    return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), i(r);
                })(t).getTime()) /
                6048e5,
        ) + 1
    );
}
