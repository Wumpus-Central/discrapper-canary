t.d(a, {
    AU: () => d,
    D8: () => x,
    E0: () => R,
    Rb: () => y,
    Re: () => c,
    WQ: () => i,
    XH: () => w,
    YP: () => D,
    d_: () => P,
    gt: () => b,
    hZ: () => m,
    ib: () => h,
    tY: () => f,
    xy: () => v,
});
var r = t(594247),
    n = t(576463);
function i(e, a) {
    let t = e.copy(),
        r = "hour" in t ? p(t, a) : 0;
    (o(t, a.years || 0),
        t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e),
        (t.month += a.months || 0),
        l(t),
        s(t),
        (t.day += 7 * (a.weeks || 0)),
        (t.day += a.days || 0),
        (t.day += r),
        (function (e) {
            for (; e.day < 1;) (e.month--, l(e), (e.day += e.calendar.getDaysInMonth(e)));
            for (; e.day > e.calendar.getDaysInMonth(e);) ((e.day -= e.calendar.getDaysInMonth(e)), e.month++, l(e));
        })(t),
        t.calendar.balanceDate && t.calendar.balanceDate(t),
        t.year < 1 && ((t.year = 1), (t.month = 1), (t.day = 1)));
    let n = t.calendar.getYearsInEra(t);
    if (t.year > n) {
        let e = t.calendar.isInverseEra?.(t);
        ((t.year = n),
            (t.month = e ? 1 : t.calendar.getMonthsInYear(t)),
            (t.day = e ? 1 : t.calendar.getDaysInMonth(t)));
    }
    t.month < 1 && ((t.month = 1), (t.day = 1));
    let i = t.calendar.getMonthsInYear(t);
    return (
        t.month > i && ((t.month = i), (t.day = t.calendar.getDaysInMonth(t))),
        (t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day))),
        t
    );
}
function o(e, a) {
    (e.calendar.isInverseEra?.(e) && (a = -a), (e.year += a));
}
function l(e) {
    for (; e.month < 1;) (o(e, -1), (e.month += e.calendar.getMonthsInYear(e)));
    let a = 0;
    for (; e.month > (a = e.calendar.getMonthsInYear(e));) ((e.month -= a), o(e, 1));
}
function s(e) {
    ((e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
        (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))));
}
function d(e) {
    (e.calendar.constrainDate && e.calendar.constrainDate(e),
        (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
        s(e));
}
function u(e) {
    let a = {};
    for (let t in e) "number" == typeof e[t] && (a[t] = -e[t]);
    return a;
}
function c(e, a) {
    return i(e, u(a));
}
function m(e, a) {
    let t = e.copy();
    return (
        null != a.era && (t.era = a.era),
        null != a.year && (t.year = a.year),
        null != a.month && (t.month = a.month),
        null != a.day && (t.day = a.day),
        d(t),
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
        y(t),
        t
    );
}
function y(e) {
    ((e.millisecond = Math.max(0, Math.min(e.millisecond, 999))),
        (e.second = Math.max(0, Math.min(e.second, 59))),
        (e.minute = Math.max(0, Math.min(e.minute, 59))),
        (e.hour = Math.max(0, Math.min(e.hour, 23))));
}
function g(e, a) {
    let t = e % a;
    return (t < 0 && (t += a), t);
}
function p(e, a) {
    let t;
    return (
        (e.hour += a.hours || 0),
        (e.minute += a.minutes || 0),
        (e.second += a.seconds || 0),
        (e.millisecond += a.milliseconds || 0),
        (e.second += Math.floor(e.millisecond / 1e3)),
        (e.millisecond = g(e.millisecond, 1e3)),
        (e.minute += Math.floor(e.second / 60)),
        (e.second = g(e.second, 60)),
        (e.hour += Math.floor(e.minute / 60)),
        (e.minute = g(e.minute, 60)),
        (t = Math.floor(e.hour / 24)),
        (e.hour = g(e.hour, 24)),
        t
    );
}
function f(e, a) {
    let t = e.copy();
    return (p(t, a), t);
}
function D(e, a) {
    return f(e, u(a));
}
function v(e, a, t, r) {
    let n = e.copy();
    switch (a) {
        case "era": {
            let a = e.calendar.getEras(),
                i = a.indexOf(e.era);
            if (i < 0) throw Error("Invalid era: " + e.era);
            ((i = $(i, t, 0, a.length - 1, r?.round)), (n.era = a[i]), d(n));
            break;
        }
        case "year":
            (n.calendar.isInverseEra?.(n) && (t = -t),
                (n.year = $(e.year, t, -1 / 0, 9999, r?.round)),
                -1 / 0 === n.year && (n.year = 1),
                n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e));
            break;
        case "month":
            n.month = $(e.month, t, 1, e.calendar.getMonthsInYear(e), r?.round);
            break;
        case "day":
            n.day = $(e.day, t, 1, e.calendar.getDaysInMonth(e), r?.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return (e.calendar.balanceDate && e.calendar.balanceDate(n), d(n), n);
}
function b(e, a, t, r) {
    let n = e.copy();
    switch (a) {
        case "hour": {
            let a = e.hour,
                i = 0,
                o = 23;
            if (r?.hourCycle === 12) {
                let e = a >= 12;
                ((i = 12 * !!e), (o = e ? 23 : 11));
            }
            n.hour = $(a, t, i, o, r?.round);
            break;
        }
        case "minute":
            n.minute = $(e.minute, t, 0, 59, r?.round);
            break;
        case "second":
            n.second = $(e.second, t, 0, 59, r?.round);
            break;
        case "millisecond":
            n.millisecond = $(e.millisecond, t, 0, 999, r?.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return n;
}
function $(e, a, t, r, n = !1) {
    if (n) {
        (e += Math.sign(a)) < t && (e = r);
        let n = Math.abs(a);
        (e = a > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n) > r && (e = t);
    } else (e += a) < t ? (e = r - (t - e - 1)) : e > r && (e = t + (e - r - 1));
    return e;
}
function R(e, a) {
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
    ((t += a.milliseconds || 0),
        (t += 1e3 * (a.seconds || 0)),
        (t += 6e4 * (a.minutes || 0)),
        (t += 36e5 * (a.hours || 0)));
    let n = (0, r.Yd)(t, e.timeZone);
    return (0, r.yP)(n, e.calendar);
}
function P(e, a) {
    return R(e, u(a));
}
function w(e, a, t, i) {
    switch (a) {
        case "hour": {
            let a = 0,
                o = 23;
            if (i?.hourCycle === 12) {
                let t = e.hour >= 12;
                ((a = 12 * !!t), (o = t ? 23 : 11));
            }
            let l = (0, r.tR)(e),
                s = (0, r.yP)(h(l, { hour: a }), new (0, n.FG)()),
                d = [(0, r.Tr)(s, e.timeZone, "earlier"), (0, r.Tr)(s, e.timeZone, "later")].filter(
                    (a) => (0, r.Yd)(a, e.timeZone).day === s.day,
                )[0],
                u = (0, r.yP)(h(l, { hour: o }), new (0, n.FG)()),
                c = [(0, r.Tr)(u, e.timeZone, "earlier"), (0, r.Tr)(u, e.timeZone, "later")]
                    .filter((a) => (0, r.Yd)(a, e.timeZone).day === u.day)
                    .pop(),
                m = (0, r.oU)(e) - e.offset,
                y = Math.floor(m / 36e5),
                g = m % 36e5;
            return (
                (m = 36e5 * $(y, t, Math.floor(d / 36e5), Math.floor(c / 36e5), i?.round) + g),
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
function x(e, a, t) {
    let n = (0, r.tR)(e),
        i = h(m(n, a), a);
    if (0 === i.compare(n)) return e;
    let o = (0, r.Tr)(i, e.timeZone, t);
    return (0, r.yP)((0, r.Yd)(o, e.timeZone), e.calendar);
}
