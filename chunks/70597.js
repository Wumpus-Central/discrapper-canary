r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(599582),
    a = r(788613),
    o = r(528734),
    s = r(951516),
    l = r(217224);
function u(e) {
    return (u =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
              })(e);
}
function c(e, n) {
    if (((0, s.Z)(2, arguments), !n || 'object' !== u(n))) return new Date(NaN);
    var r = n.years ? (0, l.Z)(n.years) : 0,
        c = n.months ? (0, l.Z)(n.months) : 0,
        d = n.weeks ? (0, l.Z)(n.weeks) : 0,
        f = n.days ? (0, l.Z)(n.days) : 0,
        p = n.hours ? (0, l.Z)(n.hours) : 0,
        h = n.minutes ? (0, l.Z)(n.minutes) : 0,
        _ = n.seconds ? (0, l.Z)(n.seconds) : 0,
        m = (0, o.default)(e),
        g = c || r ? (0, a.default)(m, c + 12 * r) : m,
        E = f || d ? (0, i.default)(g, f + 7 * d) : g,
        v = 1000 * (_ + 60 * (h + 60 * p));
    return new Date(E.getTime() + v);
}
