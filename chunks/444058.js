"use strict";
n.d(t, { A: () => f });
var r = n(683706),
    i = n(225153),
    a = n(194537),
    s = n(308185),
    o = n(119219),
    l = n(174997),
    u = n(115907),
    c = n(512884),
    d = n(29583),
    _ = n(618027);
function f(e) {
    (0, _.A)(1, arguments);
    var t = (0, d.default)(e.start),
        n = (0, d.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
    var f = {};
    f.years = Math.abs((0, c.A)(n, t));
    var p = (0, r.A)(n, t),
        h = (0, i.A)(t, { years: p * f.years });
    f.months = Math.abs((0, l.A)(n, h));
    var m = (0, i.A)(h, { months: p * f.months });
    f.days = Math.abs((0, a.A)(n, m));
    var g = (0, i.A)(m, { days: p * f.days });
    f.hours = Math.abs((0, s.A)(n, g));
    var E = (0, i.A)(g, { hours: p * f.hours });
    f.minutes = Math.abs((0, o.A)(n, E));
    var A = (0, i.A)(E, { minutes: p * f.minutes });
    return (f.seconds = Math.abs((0, u.A)(n, A))), f;
}
