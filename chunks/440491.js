t.d(a, {
    AU: () => s,
    D8: () => P,
    E0: () => $,
    Rb: () => D,
    Re: () => c,
    WQ: () => i,
    XH: () => R,
    YP: () => f,
    d_: () => w,
    gt: () => b,
    hZ: () => m,
    ib: () => h,
    tY: () => g,
    xy: () => v,
});
var r = t(376472),
    n = t(142922);
function i(e, a) {
    let t = e.copy(),
        r = "hour" in t ? p(t, a) : 0;
    o(t, a.years || 0),
        t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e),
        (t.month += a.months || 0),
        u(t),
        l(t),
        (t.day += 7 * (a.weeks || 0)),
        (t.day += a.days || 0),
        (t.day += r),
        (function (e) {
            for (; e.day < 1; ) e.month--, u(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, u(e);
        })(t),
        t.calendar.balanceDate && t.calendar.balanceDate(t),
        t.year < 1 && ((t.year = 1), (t.month = 1), (t.day = 1));
    let n = t.calendar.getYearsInEra(t);
    if (t.year > n) {
        var i, s;
        let e = null == (i = (s = t.calendar).isInverseEra) ? void 0 : i.call(s, t);
        (t.year = n), (t.month = e ? 1 : t.calendar.getMonthsInYear(t)), (t.day = e ? 1 : t.calendar.getDaysInMonth(t));
    }
    t.month < 1 && ((t.month = 1), (t.day = 1));
    let d = t.calendar.getMonthsInYear(t);
    return (
        t.month > d && ((t.month = d), (t.day = t.calendar.getDaysInMonth(t))),
        (t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day))),
        t
    );
}
function o(e, a) {
    var t, r;
    (null == (t = (r = e.calendar).isInverseEra) ? void 0 : t.call(r, e)) && (a = -a), (e.year += a);
}
function u(e) {
    for (; e.month < 1; ) o(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let a = 0;
    for (; e.month > (a = e.calendar.getMonthsInYear(e)); ) (e.month -= a), o(e, 1);
}
function l(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
        (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function s(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e),
        (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
        l(e);
}
function d(e) {
    let a = {};
    for (let t in e) "number" == typeof e[t] && (a[t] = -e[t]);
    return a;
}
function c(e, a) {
    return i(e, d(a));
}
function m(e, a) {
    let t = e.copy();
    return (
        null != a.era && (t.era = a.era),
        null != a.year && (t.year = a.year),
        null != a.month && (t.month = a.month),
        null != a.day && (t.day = a.day),
        s(t),
        t
    );
}
function h(e, a) {
    let t = e.copy();
    return (
        null != a.hour && (t.hour = a.hour),
        null != a.minute && (t.minute = a.minute),
        null != a.second && (t.second = a.second),
        null != a.millisecond && (t.millisecond = a.millisecond),
        D(t),
        t
    );
}
function D(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1e3))),
        (e.second = Math.max(0, Math.min(e.second, 59))),
        (e.minute = Math.max(0, Math.min(e.minute, 59))),
        (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function y(e, a) {
    let t = e % a;
    return t < 0 && (t += a), t;
}
function p(e, a) {
    let t;
    return (
        (e.hour += a.hours || 0),
        (e.minute += a.minutes || 0),
        (e.second += a.seconds || 0),
        (e.millisecond += a.milliseconds || 0),
        (e.second += Math.floor(e.millisecond / 1e3)),
        (e.millisecond = y(e.millisecond, 1e3)),
        (e.minute += Math.floor(e.second / 60)),
        (e.second = y(e.second, 60)),
        (e.hour += Math.floor(e.minute / 60)),
        (e.minute = y(e.minute, 60)),
        (t = Math.floor(e.hour / 24)),
        (e.hour = y(e.hour, 24)),
        t
    );
}
function g(e, a) {
    let t = e.copy();
    return p(t, a), t;
}
function f(e, a) {
    return g(e, d(a));
}
function v(e, a, t, r) {
    let n = e.copy();
    switch (a) {
        case "era": {
            let a = e.calendar.getEras(),
                i = a.indexOf(e.era);
            if (i < 0) throw Error("Invalid era: " + e.era);
            (i = A(i, t, 0, a.length - 1, null == r ? void 0 : r.round)), (n.era = a[i]), s(n);
            break;
        }
        case "year":
            var i, o;
            (null == (i = (o = n.calendar).isInverseEra) ? void 0 : i.call(o, n)) && (t = -t),
                (n.year = A(e.year, t, -1 / 0, 9999, null == r ? void 0 : r.round)),
                n.year === -1 / 0 && (n.year = 1),
                n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
            break;
        case "month":
            n.month = A(e.month, t, 1, e.calendar.getMonthsInYear(e), null == r ? void 0 : r.round);
            break;
        case "day":
            n.day = A(e.day, t, 1, e.calendar.getDaysInMonth(e), null == r ? void 0 : r.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(n), s(n), n;
}
function b(e, a, t, r) {
    let n = e.copy();
    switch (a) {
        case "hour": {
            let a = e.hour,
                i = 0,
                o = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let e = a >= 12;
                (i = 12 * !!e), (o = e ? 23 : 11);
            }
            n.hour = A(a, t, i, o, null == r ? void 0 : r.round);
            break;
        }
        case "minute":
            n.minute = A(e.minute, t, 0, 59, null == r ? void 0 : r.round);
            break;
        case "second":
            n.second = A(e.second, t, 0, 59, null == r ? void 0 : r.round);
            break;
        case "millisecond":
            n.millisecond = A(e.millisecond, t, 0, 999, null == r ? void 0 : r.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return n;
}
function A(e, a, t, r, n = !1) {
    if (n) {
        (e += Math.sign(a)) < t && (e = r);
        let n = Math.abs(a);
        (e = a > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n) > r && (e = t);
    } else (e += a) < t ? (e = r - (t - e - 1)) : e > r && (e = t + (e - r - 1));
    return e;
}
function $(e, a) {
    let t;
    if (
        (null != a.years && 0 !== a.years) ||
        (null != a.months && 0 !== a.months) ||
        (null != a.weeks && 0 !== a.weeks) ||
        (null != a.days && 0 !== a.days)
    ) {
        let n = i((0, r.tR)(e), { years: a.years, months: a.months, weeks: a.weeks, days: a.days });
        t = (0, r.Tr)(n, e.timeZone);
    } else t = (0, r.oU)(e) - e.offset;
    (t += a.milliseconds || 0),
        (t += 1e3 * (a.seconds || 0)),
        (t += 6e4 * (a.minutes || 0)),
        (t += 36e5 * (a.hours || 0));
    let n = (0, r.Yd)(t, e.timeZone);
    return (0, r.yP)(n, e.calendar);
}
function w(e, a) {
    return $(e, d(a));
}
function R(e, a, t, i) {
    switch (a) {
        case "hour": {
            let a = 0,
                o = 23;
            if ((null == i ? void 0 : i.hourCycle) === 12) {
                let t = e.hour >= 12;
                (a = 12 * !!t), (o = t ? 23 : 11);
            }
            let u = (0, r.tR)(e),
                l = (0, r.yP)(h(u, { hour: a }), new (0, n.FG)()),
                s = [(0, r.Tr)(l, e.timeZone, "earlier"), (0, r.Tr)(l, e.timeZone, "later")].filter(
                    (a) => (0, r.Yd)(a, e.timeZone).day === l.day,
                )[0],
                d = (0, r.yP)(h(u, { hour: o }), new (0, n.FG)()),
                c = [(0, r.Tr)(d, e.timeZone, "earlier"), (0, r.Tr)(d, e.timeZone, "later")]
                    .filter((a) => (0, r.Yd)(a, e.timeZone).day === d.day)
                    .pop(),
                m = (0, r.oU)(e) - e.offset,
                D = Math.floor(m / 36e5),
                y = m % 36e5;
            return (
                (m = 36e5 * A(D, t, Math.floor(s / 36e5), Math.floor(c / 36e5), null == i ? void 0 : i.round) + y),
                (0, r.yP)((0, r.Yd)(m, e.timeZone), e.calendar)
            );
        }
        case "minute":
        case "second":
        case "millisecond":
            return b(e, a, t, i);
        case "era":
        case "year":
        case "month":
        case "day": {
            let n = v((0, r.tR)(e), a, t, i),
                o = (0, r.Tr)(n, e.timeZone);
            return (0, r.yP)((0, r.Yd)(o, e.timeZone), e.calendar);
        }
        default:
            throw Error("Unsupported field " + a);
    }
}
function P(e, a, t) {
    let n = (0, r.tR)(e),
        i = h(m(n, a), a);
    if (0 === i.compare(n)) return e;
    let o = (0, r.Tr)(i, e.timeZone, t);
    return (0, r.yP)((0, r.Yd)(o, e.timeZone), e.calendar);
}
