"use strict";
r.d(t, { A: () => _ });
var n = r(29583),
    s = r(618027);
function a(e, t) {
    (0, s.A)(2, arguments);
    var r = (0, n.default)(e),
        a = (0, n.default)(t),
        o = r.getTime() - a.getTime();
    return o < 0 ? -1 : o > 0 ? 1 : o;
}
var o = r(410530),
    i = r(228378),
    u = r(998280);
function c(e) {
    return (c =
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
function l(e, t) {
    if (((0, s.A)(2, arguments), !t || "object" !== c(t))) return new Date(NaN);
    var r = t.years ? (0, u.A)(t.years) : 0,
        a = t.months ? (0, u.A)(t.months) : 0,
        l = t.weeks ? (0, u.A)(t.weeks) : 0,
        d = t.days ? (0, u.A)(t.days) : 0,
        f = t.hours ? (0, u.A)(t.hours) : 0,
        p = t.minutes ? (0, u.A)(t.minutes) : 0,
        h = t.seconds ? (0, u.A)(t.seconds) : 0,
        m = (0, n.default)(e),
        v = a || r ? (0, i.default)(m, a + 12 * r) : m;
    return new Date((d || l ? (0, o.default)(v, d + 7 * l) : v).getTime() + 1e3 * (h + 60 * (p + 60 * f)));
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
var v = r(992663),
    g = r(290656),
    y = r(514356),
    b = r(918494);
function _(e) {
    (0, s.A)(1, arguments);
    var t = (0, n.default)(e.start),
        r = (0, n.default)(e.end);
    if (isNaN(t.getTime())) throw RangeError("Start Date is invalid");
    if (isNaN(r.getTime())) throw RangeError("End Date is invalid");
    var o = {};
    o.years = Math.abs(
        (function (e, t) {
            (0, s.A)(2, arguments);
            var r = (0, n.default)(e),
                o = (0, n.default)(t),
                i = a(r, o),
                u = Math.abs((0, b.default)(r, o));
            r.setFullYear(1584), o.setFullYear(1584);
            var c = a(r, o) === -i,
                l = i * (u - Number(c));
            return 0 === l ? 0 : l;
        })(r, t),
    );
    var i = a(r, t),
        u = l(t, { years: i * o.years });
    o.months = Math.abs(
        (function (e, t) {
            (0, s.A)(2, arguments);
            var r,
                o = (0, n.default)(e),
                i = (0, n.default)(t),
                u = a(o, i),
                c = Math.abs((0, v.default)(o, i));
            if (c < 1) r = 0;
            else {
                1 === o.getMonth() && o.getDate() > 27 && o.setDate(30), o.setMonth(o.getMonth() - u * c);
                var l = a(o, i) === -u;
                (function (e) {
                    (0, s.A)(1, arguments);
                    var t = (0, n.default)(e);
                    return (0, g.default)(t).getTime() === (0, y.default)(t).getTime();
                })((0, n.default)(e)) &&
                    1 === c &&
                    1 === a(e, i) &&
                    (l = !1),
                    (r = u * (c - Number(l)));
            }
            return 0 === r ? 0 : r;
        })(r, u),
    );
    var c = l(u, { months: i * o.months });
    o.days = Math.abs((0, d.A)(r, c));
    var h = l(c, { days: i * o.days });
    o.hours = Math.abs(
        (function (e, t, r) {
            (0, s.A)(2, arguments);
            var n = (0, p.A)(e, t) / f.s0;
            return m(null == r ? void 0 : r.roundingMethod)(n);
        })(r, h),
    );
    var _ = l(h, { hours: i * o.hours });
    o.minutes = Math.abs(
        (function (e, t, r) {
            (0, s.A)(2, arguments);
            var n = (0, p.A)(e, t) / f.Cg;
            return m(null == r ? void 0 : r.roundingMethod)(n);
        })(r, _),
    );
    var x = l(_, { minutes: i * o.minutes });
    return (
        (o.seconds = Math.abs(
            (function (e, t, r) {
                (0, s.A)(2, arguments);
                var n = (0, p.A)(e, t) / 1e3;
                return m(null == r ? void 0 : r.roundingMethod)(n);
            })(r, x),
        )),
        o
    );
}
