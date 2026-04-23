"use strict";
r.r(t), r.d(t, { default: () => i });
var n = r(998280),
    a = r(29583),
    s = r(618027);
function i(e, t) {
    (0, s.A)(2, arguments);
    var r = (0, a.default)(e),
        i = (0, n.A)(t),
        o = r.getFullYear(),
        l = r.getDate(),
        u = new Date(0);
    u.setFullYear(o, i, 15), u.setHours(0, 0, 0, 0);
    var c = (function (e) {
        (0, s.A)(1, arguments);
        var t = (0, a.default)(e),
            r = t.getFullYear(),
            n = t.getMonth(),
            i = new Date(0);
        return i.setFullYear(r, n + 1, 0), i.setHours(0, 0, 0, 0), i.getDate();
    })(u);
    return r.setMonth(i, Math.min(l, c)), r;
}
