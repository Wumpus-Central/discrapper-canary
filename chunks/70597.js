n.d(t, { Z: () => c });
var r = n(599582),
    i = n(788613),
    a = n(528734),
    o = n(951516),
    s = n(217224);
function l(e) {
    return (l =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
function c(e, t) {
    if (((0, o.Z)(2, arguments), !t || "object" !== l(t))) return new Date(NaN);
    var n = t.years ? (0, s.Z)(t.years) : 0,
        c = t.months ? (0, s.Z)(t.months) : 0,
        u = t.weeks ? (0, s.Z)(t.weeks) : 0,
        d = t.days ? (0, s.Z)(t.days) : 0,
        f = t.hours ? (0, s.Z)(t.hours) : 0,
        p = t.minutes ? (0, s.Z)(t.minutes) : 0,
        _ = t.seconds ? (0, s.Z)(t.seconds) : 0,
        m = (0, a.default)(e),
        h = c || n ? (0, i.default)(m, c + 12 * n) : m,
        g = d || u ? (0, r.default)(h, d + 7 * u) : h,
        E = 1000 * (_ + 60 * (p + 60 * f));
    return new Date(g.getTime() + E);
}
