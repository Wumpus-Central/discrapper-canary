n.d(t, { Z: () => _ });
var r = n(991656),
    i = n(70597),
    o = n(991998),
    a = n(896662),
    s = n(573347),
    l = n(536403),
    c = n(188650),
    u = n(291750),
    d = n(528734),
    f = n(951516);
function _(e) {
    (0, f.Z)(1, arguments);
    var t = (0, d.default)(e.start),
        n = (0, d.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError('Start Date is invalid');
    if (isNaN(n.getTime())) throw RangeError('End Date is invalid');
    var _ = {};
    _.years = Math.abs((0, u.Z)(n, t));
    var p = (0, r.Z)(n, t),
        h = (0, i.Z)(t, { years: p * _.years });
    _.months = Math.abs((0, l.Z)(n, h));
    var m = (0, i.Z)(h, { months: p * _.months });
    _.days = Math.abs((0, o.Z)(n, m));
    var g = (0, i.Z)(m, { days: p * _.days });
    _.hours = Math.abs((0, a.Z)(n, g));
    var E = (0, i.Z)(g, { hours: p * _.hours });
    _.minutes = Math.abs((0, s.Z)(n, E));
    var b = (0, i.Z)(E, { minutes: p * _.minutes });
    return (_.seconds = Math.abs((0, c.Z)(n, b))), _;
}
