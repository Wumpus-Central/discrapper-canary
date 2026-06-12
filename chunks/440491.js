t.d(a, {
    AU: () => s,
    D8: () => C,
    E0: () => R,
    Rb: () => D,
    Re: () => c,
    WQ: () => i,
    XH: () => P,
    YP: () => f,
    d_: () => w,
    gt: () => b,
    hZ: () => m,
    ib: () => h,
    tY: () => p,
    xy: () => v,
});
var n = t(376472),
    r = t(142922);
function i(e, a) {
    let t = e.copy(),
        n = "hour" in t ? g(t, a) : 0;
    l(t, a.years || 0),
        t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e),
        (t.month += a.months || 0),
        o(t),
        u(t),
        (t.day += 7 * (a.weeks || 0)),
        (t.day += a.days || 0),
        (t.day += n),
        (function (e) {
            for (; e.day < 1; ) e.month--, o(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, o(e);
        })(t),
        t.calendar.balanceDate && t.calendar.balanceDate(t),
        t.year < 1 && ((t.year = 1), (t.month = 1), (t.day = 1));
    let r = t.calendar.getYearsInEra(t);
    if (t.year > r) {
        var i, s;
        let e = null == (i = (s = t.calendar).isInverseEra) ? void 0 : i.call(s, t);
        (t.year = r), (t.month = e ? 1 : t.calendar.getMonthsInYear(t)), (t.day = e ? 1 : t.calendar.getDaysInMonth(t));
    }
    t.month < 1 && ((t.month = 1), (t.day = 1));
    let d = t.calendar.getMonthsInYear(t);
    return (
        t.month > d && ((t.month = d), (t.day = t.calendar.getDaysInMonth(t))),
        (t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day))),
        t
    );
}
function l(e, a) {
    var t, n;
    (null == (t = (n = e.calendar).isInverseEra) ? void 0 : t.call(n, e)) && (a = -a), (e.year += a);
}
function o(e) {
    for (; e.month < 1; ) l(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let a = 0;
    for (; e.month > (a = e.calendar.getMonthsInYear(e)); ) (e.month -= a), l(e, 1);
}
function u(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))),
        (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function s(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e),
        (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))),
        u(e);
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
function g(e, a) {
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
function p(e, a) {
    let t = e.copy();
    return g(t, a), t;
}
function f(e, a) {
    return p(e, d(a));
}
function v(e, a, t, n) {
    let r = e.copy();
    switch (a) {
        case "era": {
            let a = e.calendar.getEras(),
                i = a.indexOf(e.era);
            if (i < 0) throw Error("Invalid era: " + e.era);
            (i = $(i, t, 0, a.length - 1, null == n ? void 0 : n.round)), (r.era = a[i]), s(r);
            break;
        }
        case "year":
            var i, l;
            (null == (i = (l = r.calendar).isInverseEra) ? void 0 : i.call(l, r)) && (t = -t),
                (r.year = $(e.year, t, -1 / 0, 9999, null == n ? void 0 : n.round)),
                r.year === -1 / 0 && (r.year = 1),
                r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e);
            break;
        case "month":
            r.month = $(e.month, t, 1, e.calendar.getMonthsInYear(e), null == n ? void 0 : n.round);
            break;
        case "day":
            r.day = $(e.day, t, 1, e.calendar.getDaysInMonth(e), null == n ? void 0 : n.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(r), s(r), r;
}
function b(e, a, t, n) {
    let r = e.copy();
    switch (a) {
        case "hour": {
            let a = e.hour,
                i = 0,
                l = 23;
            if ((null == n ? void 0 : n.hourCycle) === 12) {
                let e = a >= 12;
                (i = 12 * !!e), (l = e ? 23 : 11);
            }
            r.hour = $(a, t, i, l, null == n ? void 0 : n.round);
            break;
        }
        case "minute":
            r.minute = $(e.minute, t, 0, 59, null == n ? void 0 : n.round);
            break;
        case "second":
            r.second = $(e.second, t, 0, 59, null == n ? void 0 : n.round);
            break;
        case "millisecond":
            r.millisecond = $(e.millisecond, t, 0, 999, null == n ? void 0 : n.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return r;
}
function $(e, a, t, n, r = !1) {
    if (r) {
        (e += Math.sign(a)) < t && (e = n);
        let r = Math.abs(a);
        (e = a > 0 ? Math.ceil(e / r) * r : Math.floor(e / r) * r) > n && (e = t);
    } else (e += a) < t ? (e = n - (t - e - 1)) : e > n && (e = t + (e - n - 1));
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
        let r = i((0, n.tR)(e), { years: a.years, months: a.months, weeks: a.weeks, days: a.days });
        t = (0, n.Tr)(r, e.timeZone);
    } else t = (0, n.oU)(e) - e.offset;
    (t += a.milliseconds || 0),
        (t += 1e3 * (a.seconds || 0)),
        (t += 6e4 * (a.minutes || 0)),
        (t += 36e5 * (a.hours || 0));
    let r = (0, n.Yd)(t, e.timeZone);
    return (0, n.yP)(r, e.calendar);
}
function w(e, a) {
    return R(e, d(a));
}
function P(e, a, t, i) {
    switch (a) {
        case "hour": {
            let a = 0,
                l = 23;
            if ((null == i ? void 0 : i.hourCycle) === 12) {
                let t = e.hour >= 12;
                (a = 12 * !!t), (l = t ? 23 : 11);
            }
            let o = (0, n.tR)(e),
                u = (0, n.yP)(h(o, { hour: a }), new (0, r.FG)()),
                s = [(0, n.Tr)(u, e.timeZone, "earlier"), (0, n.Tr)(u, e.timeZone, "later")].filter(
                    (a) => (0, n.Yd)(a, e.timeZone).day === u.day,
                )[0],
                d = (0, n.yP)(h(o, { hour: l }), new (0, r.FG)()),
                c = [(0, n.Tr)(d, e.timeZone, "earlier"), (0, n.Tr)(d, e.timeZone, "later")]
                    .filter((a) => (0, n.Yd)(a, e.timeZone).day === d.day)
                    .pop(),
                m = (0, n.oU)(e) - e.offset,
                D = Math.floor(m / 36e5),
                y = m % 36e5;
            return (
                (m = 36e5 * $(D, t, Math.floor(s / 36e5), Math.floor(c / 36e5), null == i ? void 0 : i.round) + y),
                (0, n.yP)((0, n.Yd)(m, e.timeZone), e.calendar)
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
            let r = v((0, n.tR)(e), a, t, i),
                l = (0, n.Tr)(r, e.timeZone);
            return (0, n.yP)((0, n.Yd)(l, e.timeZone), e.calendar);
        }
        default:
            throw Error("Unsupported field " + a);
    }
}
function C(e, a, t) {
    let r = (0, n.tR)(e),
        i = h(m(r, a), a);
    if (0 === i.compare(r)) return e;
    let l = (0, n.Tr)(i, e.timeZone, t);
    return (0, n.yP)((0, n.Yd)(l, e.timeZone), e.calendar);
}
