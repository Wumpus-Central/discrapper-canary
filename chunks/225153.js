n.d(t, { A: () => c });
var r = n(410530),
    i = n(228378),
    a = n(29583),
    s = n(618027),
    o = n(998280);
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
    if (((0, s.A)(2, arguments), !t || "object" !== l(t))) return new Date(NaN);
    var n = t.years ? (0, o.A)(t.years) : 0,
        c = t.months ? (0, o.A)(t.months) : 0,
        u = t.weeks ? (0, o.A)(t.weeks) : 0,
        d = t.days ? (0, o.A)(t.days) : 0,
        f = t.hours ? (0, o.A)(t.hours) : 0,
        p = t.minutes ? (0, o.A)(t.minutes) : 0,
        _ = t.seconds ? (0, o.A)(t.seconds) : 0,
        h = (0, a.default)(e),
        m = c || n ? (0, i.default)(h, c + 12 * n) : h,
        g = d || u ? (0, r.default)(m, d + 7 * u) : m,
        E = 1000 * (_ + 60 * (p + 60 * f));
    return new Date(g.getTime() + E);
}
