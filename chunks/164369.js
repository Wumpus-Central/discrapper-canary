n.d(t, { Z: () => f });
var r = n(991656),
    i = n(70597),
    a = n(991998),
    o = n(896662),
    s = n(573347),
    l = n(536403),
    c = n(188650),
    u = n(291750),
    d = n(528734),
    _ = n(951516);
function f(e) {
    (0, _.Z)(1, arguments);
    var t = (0, d.default)(e.start),
        n = (0, d.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError('Start Date is invalid');
    if (isNaN(n.getTime())) throw RangeError('End Date is invalid');
    var f = {};
    f.years = Math.abs((0, u.Z)(n, t));
    var p = (0, r.Z)(n, t),
        h = (0, i.Z)(t, { years: p * f.years });
    f.months = Math.abs((0, l.Z)(n, h));
    var m = (0, i.Z)(h, { months: p * f.months });
    f.days = Math.abs((0, a.Z)(n, m));
    var g = (0, i.Z)(m, { days: p * f.days });
    f.hours = Math.abs((0, o.Z)(n, g));
    var E = (0, i.Z)(g, { hours: p * f.hours });
    f.minutes = Math.abs((0, s.Z)(n, E));
    var b = (0, i.Z)(E, { minutes: p * f.minutes });
    return ((f.seconds = Math.abs((0, c.Z)(n, b))), f);
}
