"use strict";
n.d(t, {
    AU: () => d,
    D8: () => R,
    E0: () => C,
    Rb: () => g,
    Re: () => f,
    WQ: () => s,
    XH: () => N,
    YP: () => T,
    d_: () => b,
    gt: () => S,
    hZ: () => p,
    ib: () => h,
    tY: () => I,
    xy: () => y,
});
var r = n(376472),
    i = n(142922);
let a = 36e5;
function s(e, t) {
    let n = e.copy(),
        r = "hour" in n ? A(n, t) : 0;
    o(n, t.years || 0),
        n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e),
        (n.month += t.months || 0),
        l(n),
        c(n),
        (n.day += 7 * (t.weeks || 0)),
        (n.day += t.days || 0),
        (n.day += r),
        u(n),
        n.calendar.balanceDate && n.calendar.balanceDate(n),
        n.year < 1 && ((n.year = 1), (n.month = 1), (n.day = 1));
    let i = n.calendar.getYearsInEra(n);
    if (n.year > i) {
        var a, s;
        let e = null == (a = (s = n.calendar).isInverseEra) ? void 0 : a.call(s, n);
        (n.year = i), (n.month = e ? 1 : n.calendar.getMonthsInYear(n)), (n.day = e ? 1 : n.calendar.getDaysInMonth(n));
    }
    n.month < 1 && ((n.month = 1), (n.day = 1));
    let d = n.calendar.getMonthsInYear(n);
    return (
        n.month > d && ((n.month = d), (n.day = n.calendar.getDaysInMonth(n))),
        (n.day = Math.max(1, Math.min(n.calendar.getDaysInMonth(n), n.day))),
        n
    );
}
function o(e, t) {
    var n, r;
    (null == (n = (r = e.calendar).isInverseEra) ? void 0 : n.call(r, e)) && (t = -t), (e.year += t);
}
function l(e) {
    for (; e.month < 1; ) o(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let t = 0;
    for (; e.month > (t = e.calendar.getMonthsInYear(e)); ) (e.month -= t), o(e, 1);
}
function u(e) {
    for (; e.day < 1; ) e.month--, l(e), (e.day += e.calendar.getDaysInMonth(e));
    for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, l(e);
}
function c(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
        (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function d(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e),
        (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
        c(e);
}
function _(e) {
    let t = {};
    for (let n in e) "number" == typeof e[n] && (t[n] = -e[n]);
    return t;
}
function f(e, t) {
    return s(e, _(t));
}
function p(e, t) {
    let n = e.copy();
    return (
        null != t.era && (n.era = t.era),
        null != t.year && (n.year = t.year),
        null != t.month && (n.month = t.month),
        null != t.day && (n.day = t.day),
        d(n),
        n
    );
}
function h(e, t) {
    let n = e.copy();
    return (
        null != t.hour && (n.hour = t.hour),
        null != t.minute && (n.minute = t.minute),
        null != t.second && (n.second = t.second),
        null != t.millisecond && (n.millisecond = t.millisecond),
        g(n),
        n
    );
}
function m(e) {
    (e.second += Math.floor(e.millisecond / 1e3)),
        (e.millisecond = E(e.millisecond, 1e3)),
        (e.minute += Math.floor(e.second / 60)),
        (e.second = E(e.second, 60)),
        (e.hour += Math.floor(e.minute / 60)),
        (e.minute = E(e.minute, 60));
    let t = Math.floor(e.hour / 24);
    return (e.hour = E(e.hour, 24)), t;
}
function g(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3))),
        (e.second = Math.max(0, Math.min(e.second, 59))),
        (e.minute = Math.max(0, Math.min(e.minute, 59))),
        (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function E(e, t) {
    let n = e % t;
    return n < 0 && (n += t), n;
}
function A(e, t) {
    return (
        (e.hour += t.hours || 0),
        (e.minute += t.minutes || 0),
        (e.second += t.seconds || 0),
        (e.millisecond += t.milliseconds || 0),
        m(e)
    );
}
function I(e, t) {
    let n = e.copy();
    return A(n, t), n;
}
function T(e, t) {
    return I(e, _(t));
}
function y(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case "era": {
            let t = e.calendar.getEras(),
                a = t.indexOf(e.era);
            if (a < 0) throw Error("Invalid era: " + e.era);
            (a = v(a, n, 0, t.length - 1, null == r ? void 0 : r.round)), (i.era = t[a]), d(i);
            break;
        }
        case "year":
            var a, s;
            (null == (a = (s = i.calendar).isInverseEra) ? void 0 : a.call(s, i)) && (n = -n),
                (i.year = v(e.year, n, -1 / 0, 9999, null == r ? void 0 : r.round)),
                i.year === -1 / 0 && (i.year = 1),
                i.calendar.balanceYearMonth && i.calendar.balanceYearMonth(i, e);
            break;
        case "month":
            i.month = v(e.month, n, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case "day":
            i.day = v(e.day, n, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error("Unsupported field " + t);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(i), d(i), i;
}
function S(e, t, n, r) {
    let i = e.copy();
    switch (t) {
        case "hour": {
            let t = e.hour,
                a = 0,
                s = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let e = t >= 12;
                (a = 12 * !!e), (s = e ? 23 : 11);
            }
            i.hour = v(t, n, a, s, null == r ? void 0 : r.round);
            break;
        }
        case "minute":
            i.minute = v(e.minute, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case "second":
            i.second = v(e.second, n, 0, 59, null == r ? void 0 : r.round);
            break;
        case "millisecond":
            i.millisecond = v(e.millisecond, n, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error("Unsupported field " + t);
    }
    return i;
}
function v(e, t, n, r, i = !1) {
    if (i) {
        (e += Math.sign(t)) < n && (e = r);
        let i = Math.abs(t);
        (e = t > 0 ? Math.ceil(e / i) * i : Math.floor(e / i) * i) > r && (e = n);
    } else (e += t) < n ? (e = r - (n - e - 1)) : e > r && (e = n + (e - r - 1));
    return e;
}
function C(e, t) {
    let n;
    if (
        (null != t.years && 0 !== t.years) ||
        (null != t.months && 0 !== t.months) ||
        (null != t.weeks && 0 !== t.weeks) ||
        (null != t.days && 0 !== t.days)
    ) {
        let i = s((0, r.tR)(e), { years: t.years, months: t.months, weeks: t.weeks, days: t.days });
        n = (0, r.Tr)(i, e.timeZone);
    } else n = (0, r.oU)(e) - e.offset;
    (n += t.milliseconds || 0),
        (n += 1e3 * (t.seconds || 0)),
        (n += 6e4 * (t.minutes || 0)),
        (n += 36e5 * (t.hours || 0));
    let i = (0, r.Yd)(n, e.timeZone);
    return (0, r.yP)(i, e.calendar);
}
function b(e, t) {
    return C(e, _(t));
}
function N(e, t, n, s) {
    switch (t) {
        case "hour": {
            let t = 0,
                o = 23;
            if ((null == s ? void 0 : s.hourCycle) === 12) {
                let n = e.hour >= 12;
                (t = 12 * !!n), (o = n ? 23 : 11);
            }
            let l = (0, r.tR)(e),
                u = (0, r.yP)(h(l, { hour: t }), new (0, i.FG)()),
                c = [(0, r.Tr)(u, e.timeZone, "earlier"), (0, r.Tr)(u, e.timeZone, "later")].filter(
                    (t) => (0, r.Yd)(t, e.timeZone).day === u.day,
                )[0],
                d = (0, r.yP)(h(l, { hour: o }), new (0, i.FG)()),
                _ = [(0, r.Tr)(d, e.timeZone, "earlier"), (0, r.Tr)(d, e.timeZone, "later")]
                    .filter((t) => (0, r.Yd)(t, e.timeZone).day === d.day)
                    .pop(),
                f = (0, r.oU)(e) - e.offset,
                p = Math.floor(f / a),
                m = f % a;
            return (
                (f = v(p, n, Math.floor(c / a), Math.floor(_ / a), null == s ? void 0 : s.round) * a + m),
                (0, r.yP)((0, r.Yd)(f, e.timeZone), e.calendar)
            );
        }
        case "minute":
        case "second":
        case "millisecond":
            return S(e, t, n, s);
        case "era":
        case "year":
        case "month":
        case "day": {
            let i = y((0, r.tR)(e), t, n, s),
                a = (0, r.Tr)(i, e.timeZone);
            return (0, r.yP)((0, r.Yd)(a, e.timeZone), e.calendar);
        }
        default:
            throw Error("Unsupported field " + t);
    }
}
function R(e, t, n) {
    let i = (0, r.tR)(e),
        a = h(p(i, t), t);
    if (0 === a.compare(i)) return e;
    let s = (0, r.Tr)(a, e.timeZone, n);
    return (0, r.yP)((0, r.Yd)(s, e.timeZone), e.calendar);
}
