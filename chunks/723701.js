"use strict";
r.d(t, { A: () => y });
var n = r(29583),
    a = r(618027);
function s(e, t) {
    (0, a.A)(2, arguments);
    var r = (0, n.default)(e),
        s = (0, n.default)(t),
        i = r.getTime() - s.getTime();
    return i < 0 ? -1 : i > 0 ? 1 : i;
}
var i = r(410530),
    o = r(228378),
    l = r(998280);
function u(e) {
    return (u =
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
    if (((0, a.A)(2, arguments), !t || "object" !== u(t))) return new Date(NaN);
    var r = t.years ? (0, l.A)(t.years) : 0,
        s = t.months ? (0, l.A)(t.months) : 0,
        c = t.weeks ? (0, l.A)(t.weeks) : 0,
        d = t.days ? (0, l.A)(t.days) : 0,
        f = t.hours ? (0, l.A)(t.hours) : 0,
        p = t.minutes ? (0, l.A)(t.minutes) : 0,
        h = t.seconds ? (0, l.A)(t.seconds) : 0,
        m = (0, n.default)(e),
        _ = s || r ? (0, o.default)(m, s + 12 * r) : m;
    return new Date((d || c ? (0, i.default)(_, d + 7 * c) : _).getTime() + 1e3 * (h + 60 * (p + 60 * f)));
}
var d = r(194537),
    f = r(575223),
    p = r(582972),
    h = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        },
    };
function m(e) {
    return e ? h[e] : h.trunc;
}
var _ = r(992663),
    g = r(290656),
    v = r(514356),
    b = r(918494);
function y(e) {
    (0, a.A)(1, arguments);
    var t = (0, n.default)(e.start),
        r = (0, n.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(r.getTime())) throw RangeError("End Date is invalid");
    var i = {};
    i.years = Math.abs(
        (function (e, t) {
            (0, a.A)(2, arguments);
            var r = (0, n.default)(e),
                i = (0, n.default)(t),
                o = s(r, i),
                l = Math.abs((0, b.default)(r, i));
            r.setFullYear(1584), i.setFullYear(1584);
            var u = s(r, i) === -o,
                c = o * (l - Number(u));
            return 0 === c ? 0 : c;
        })(r, t),
    );
    var o = s(r, t),
        l = c(t, { years: o * i.years });
    i.months = Math.abs(
        (function (e, t) {
            (0, a.A)(2, arguments);
            var r,
                i = (0, n.default)(e),
                o = (0, n.default)(t),
                l = s(i, o),
                u = Math.abs((0, _.default)(i, o));
            if (u < 1) r = 0;
            else {
                1 === i.getMonth() && i.getDate() > 27 && i.setDate(30), i.setMonth(i.getMonth() - l * u);
                var c = s(i, o) === -l;
                (function (e) {
                    (0, a.A)(1, arguments);
                    var t = (0, n.default)(e);
                    return (0, g.default)(t).getTime() === (0, v.default)(t).getTime();
                })((0, n.default)(e)) &&
                    1 === u &&
                    1 === s(e, o) &&
                    (c = !1),
                    (r = l * (u - Number(c)));
            }
            return 0 === r ? 0 : r;
        })(r, l),
    );
    var u = c(l, { months: o * i.months });
    i.days = Math.abs((0, d.A)(r, u));
    var h = c(u, { days: o * i.days });
    i.hours = Math.abs(
        (function (e, t, r) {
            (0, a.A)(2, arguments);
            var n = (0, p.A)(e, t) / f.s0;
            return m(null == r ? void 0 : r.roundingMethod)(n);
        })(r, h),
    );
    var y = c(h, { hours: o * i.hours });
    i.minutes = Math.abs(
        (function (e, t, r) {
            (0, a.A)(2, arguments);
            var n = (0, p.A)(e, t) / f.Cg;
            return m(null == r ? void 0 : r.roundingMethod)(n);
        })(r, y),
    );
    var E = c(y, { minutes: o * i.minutes });
    return (
        (i.seconds = Math.abs(
            (function (e, t, r) {
                (0, a.A)(2, arguments);
                var n = (0, p.A)(e, t) / 1e3;
                return m(null == r ? void 0 : r.roundingMethod)(n);
            })(r, E),
        )),
        i
    );
}
