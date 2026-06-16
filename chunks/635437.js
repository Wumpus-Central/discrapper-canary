"use strict";
n.r(t), n.d(t, { default: () => a });
var i = n(998280),
    r = n(29583),
    s = n(618027);
function a(e, t) {
    (0, s.A)(2, arguments);
    var n = (0, r.default)(e),
        a = (0, i.A)(t),
        o = n.getFullYear(),
        l = n.getDate(),
        u = new Date(0);
    u.setFullYear(o, a, 15), u.setHours(0, 0, 0, 0);
    var c = (function (e) {
        (0, s.A)(1, arguments);
        var t = (0, r.default)(e),
            n = t.getFullYear(),
            i = t.getMonth(),
            a = new Date(0);
        return a.setFullYear(n, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
    })(u);
    return n.setMonth(a, Math.min(l, c)), n;
}
