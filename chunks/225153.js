"use strict";
n.d(t, { A: () => u });
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
function u(e, t) {
    if (((0, s.A)(2, arguments), !t || "object" !== l(t))) return new Date(NaN);
    var n = t.years ? (0, o.A)(t.years) : 0,
        u = t.months ? (0, o.A)(t.months) : 0,
        c = t.weeks ? (0, o.A)(t.weeks) : 0,
        d = t.days ? (0, o.A)(t.days) : 0,
        _ = t.hours ? (0, o.A)(t.hours) : 0,
        f = t.minutes ? (0, o.A)(t.minutes) : 0,
        p = t.seconds ? (0, o.A)(t.seconds) : 0,
        h = (0, a.default)(e),
        m = u || n ? (0, i.default)(h, u + 12 * n) : h,
        g = d || c ? (0, r.default)(m, d + 7 * c) : m,
        E = 1e3 * (p + 60 * (f + 60 * _));
    return new Date(g.getTime() + E);
}
