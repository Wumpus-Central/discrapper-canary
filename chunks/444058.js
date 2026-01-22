n.d(t, {
    A: () => p,
});
var r = n(683706),
    i = n(225153),
    a = n(194537),
    s = n(308185),
    o = n(119219),
    l = n(174997),
    c = n(115907),
    u = n(512884),
    d = n(29583),
    f = n(618027);

function p(e) {
    (0, f.A)(1, arguments);
    var t = (0, d.default)(e.start),
        n = (0, d.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
    var p = {};
    p.years = Math.abs((0, u.A)(n, t));
    var _ = (0, r.A)(n, t),
        h = (0, i.A)(t, {
            years: _ * p.years,
        });
    p.months = Math.abs((0, l.A)(n, h));
    var m = (0, i.A)(h, {
        months: _ * p.months,
    });
    p.days = Math.abs((0, a.A)(n, m));
    var g = (0, i.A)(m, {
        days: _ * p.days,
    });
    p.hours = Math.abs((0, s.A)(n, g));
    var E = (0, i.A)(g, {
        hours: _ * p.hours,
    });
    p.minutes = Math.abs((0, o.A)(n, E));
    var b = (0, i.A)(E, {
        minutes: _ * p.minutes,
    });
    return (p.seconds = Math.abs((0, c.A)(n, b))), p;
}
