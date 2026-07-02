"use strict";
if ((n.d(t, { A: () => p }), !/^(38190|98365)$/.test(n.j))) var r = n(683706);
if (!/^(38190|98365)$/.test(n.j)) var a = n(225153);
if (!/^(38190|98365)$/.test(n.j)) var i = n(194537);
if (!/^(38190|98365)$/.test(n.j)) var o = n(308185);
if (!/^(38190|98365)$/.test(n.j)) var s = n(119219);
if (!/^(38190|98365)$/.test(n.j)) var l = n(174997);
if (!/^(38190|98365)$/.test(n.j)) var c = n(115907);
if (!/^(38190|98365)$/.test(n.j)) var u = n(512884);
if (!/^(38190|98365)$/.test(n.j)) var d = n(29583);
if (!/^(38190|98365)$/.test(n.j)) var _ = n(618027);
function p(e) {
    (0, _.A)(1, arguments);
    var t = (0, d.default)(e.start),
        n = (0, d.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(n.getTime())) throw RangeError("End Date is invalid");
    var p = {};
    p.years = Math.abs((0, u.A)(n, t));
    var m = (0, r.A)(n, t),
        f = (0, a.A)(t, { years: m * p.years });
    p.months = Math.abs((0, l.A)(n, f));
    var g = (0, a.A)(f, { months: m * p.months });
    p.days = Math.abs((0, i.A)(n, g));
    var h = (0, a.A)(g, { days: m * p.days });
    p.hours = Math.abs((0, o.A)(n, h));
    var b = (0, a.A)(h, { hours: m * p.hours });
    p.minutes = Math.abs((0, s.A)(n, b));
    var E = (0, a.A)(b, { minutes: m * p.minutes });
    return (p.seconds = Math.abs((0, c.A)(n, E))), p;
}
