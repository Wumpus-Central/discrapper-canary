n.d(t, { Z: () => u });
var i = n(599582),
    r = n(788613),
    a = n(528734),
    s = n(951516),
    o = n(217224);
function l(e) {
    return (l =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function u(e, t) {
    if (((0, s.Z)(2, arguments), !t || 'object' !== l(t))) return new Date(NaN);
    var n = t.years ? (0, o.Z)(t.years) : 0,
        u = t.months ? (0, o.Z)(t.months) : 0,
        c = t.weeks ? (0, o.Z)(t.weeks) : 0,
        d = t.days ? (0, o.Z)(t.days) : 0,
        f = t.hours ? (0, o.Z)(t.hours) : 0,
        _ = t.minutes ? (0, o.Z)(t.minutes) : 0,
        p = t.seconds ? (0, o.Z)(t.seconds) : 0,
        h = (0, a.default)(e),
        m = u || n ? (0, r.default)(h, u + 12 * n) : h,
        g = d || c ? (0, i.default)(m, d + 7 * c) : m,
        E = 1000 * (p + 60 * (_ + 60 * f));
    return new Date(g.getTime() + E);
}
