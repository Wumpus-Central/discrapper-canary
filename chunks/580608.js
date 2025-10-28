t.d(a, {
    $X: () => c,
    Co: () => B,
    GK: () => v,
    IH: () => r,
    U2: () => g,
    cW: () => x,
    dW: () => h,
    jH: () => s,
    q_: () => D,
    qr: () => E,
    t8: () => m,
    wC: () => F,
    xC: () => b,
    yG: () => p,
});
var u = t(640475),
    n = t(274738);
function r(e, a) {
    let t = e.copy(),
        u = "hour" in t ? y(t, a) : 0;
    i(t, a.years || 0),
        t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e),
        (t.month += a.months || 0),
        o(t),
        l(t),
        (t.day += 7 * (a.weeks || 0)),
        (t.day += a.days || 0),
        (t.day += u),
        (function (e) {
            for (; e.day < 1; ) e.month--, o(e), (e.day += e.calendar.getDaysInMonth(e));
            for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, o(e);
        })(t),
        t.calendar.balanceDate && t.calendar.balanceDate(t),
        t.year < 1 && ((t.year = 1), (t.month = 1), (t.day = 1));
    let n = t.calendar.getYearsInEra(t);
    if (t.year > n) {
        var r, s;
        let e = null == (r = (s = t.calendar).isInverseEra) ? void 0 : r.call(s, t);
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
function i(e, a) {
    var t, u;
    (null == (t = (u = e.calendar).isInverseEra) ? void 0 : t.call(u, e)) && (a = -a), (e.year += a);
}
function o(e) {
    for (; e.month < 1; ) i(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let a = 0;
    for (; e.month > (a = e.calendar.getMonthsInYear(e)); ) (e.month -= a), i(e, 1);
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
    return r(e, d(a));
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
function D(e, a) {
    let t = e.copy();
    return (
        null != a.hour && (t.hour = a.hour),
        null != a.minute && (t.minute = a.minute),
        null != a.second && (t.second = a.second),
        null != a.millisecond && (t.millisecond = a.millisecond),
        h(t),
        t
    );
}
function h(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))),
        (e.second = Math.max(0, Math.min(e.second, 59))),
        (e.minute = Math.max(0, Math.min(e.minute, 59))),
        (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function f(e, a) {
    let t = e % a;
    return t < 0 && (t += a), t;
}
function y(e, a) {
    let t;
    return (
        (e.hour += a.hours || 0),
        (e.minute += a.minutes || 0),
        (e.second += a.seconds || 0),
        (e.millisecond += a.milliseconds || 0),
        (e.second += Math.floor(e.millisecond / 1000)),
        (e.millisecond = f(e.millisecond, 1000)),
        (e.minute += Math.floor(e.second / 60)),
        (e.second = f(e.second, 60)),
        (e.hour += Math.floor(e.minute / 60)),
        (e.minute = f(e.minute, 60)),
        (t = Math.floor(e.hour / 24)),
        (e.hour = f(e.hour, 24)),
        t
    );
}
function p(e, a) {
    let t = e.copy();
    return y(t, a), t;
}
function g(e, a) {
    return p(e, d(a));
}
function v(e, a, t, u) {
    let n = e.copy();
    switch (a) {
        case "era": {
            let a = e.calendar.getEras(),
                r = a.indexOf(e.era);
            if (r < 0) throw Error("Invalid era: " + e.era);
            (r = C(r, t, 0, a.length - 1, null == u ? void 0 : u.round)), (n.era = a[r]), s(n);
            break;
        }
        case "year":
            var r, i;
            (null == (r = (i = n.calendar).isInverseEra) ? void 0 : r.call(i, n)) && (t = -t),
                (n.year = C(e.year, t, -1 / 0, 9999, null == u ? void 0 : u.round)),
                n.year === -1 / 0 && (n.year = 1),
                n.calendar.balanceYearMonth && n.calendar.balanceYearMonth(n, e);
            break;
        case "month":
            n.month = C(e.month, t, 1, e.calendar.getMonthsInYear(e), null == u ? void 0 : u.round);
            break;
        case "day":
            n.day = C(e.day, t, 1, e.calendar.getDaysInMonth(e), null == u ? void 0 : u.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(n), s(n), n;
}
function b(e, a, t, u) {
    let n = e.copy();
    switch (a) {
        case "hour": {
            let a = e.hour,
                r = 0,
                i = 23;
            if ((null == u ? void 0 : u.hourCycle) === 12) {
                let e = a >= 12;
                (r = 12 * !!e), (i = e ? 23 : 11);
            }
            n.hour = C(a, t, r, i, null == u ? void 0 : u.round);
            break;
        }
        case "minute":
            n.minute = C(e.minute, t, 0, 59, null == u ? void 0 : u.round);
            break;
        case "second":
            n.second = C(e.second, t, 0, 59, null == u ? void 0 : u.round);
            break;
        case "millisecond":
            n.millisecond = C(e.millisecond, t, 0, 999, null == u ? void 0 : u.round);
            break;
        default:
            throw Error("Unsupported field " + a);
    }
    return n;
}
function C(e, a, t, u, n = !1) {
    if (n) {
        (e += Math.sign(a)) < t && (e = u);
        let n = Math.abs(a);
        (e = a > 0 ? Math.ceil(e / n) * n : Math.floor(e / n) * n) > u && (e = t);
    } else (e += a) < t ? (e = u - (t - e - 1)) : e > u && (e = t + (e - u - 1));
    return e;
}
function x(e, a) {
    let t;
    if (
        (null != a.years && 0 !== a.years) ||
        (null != a.months && 0 !== a.months) ||
        (null != a.weeks && 0 !== a.weeks) ||
        (null != a.days && 0 !== a.days)
    ) {
        let n = r((0, u.IO)(e), {
            years: a.years,
            months: a.months,
            weeks: a.weeks,
            days: a.days,
        });
        t = (0, u.xA)(n, e.timeZone);
    } else t = (0, u.ZI)(e) - e.offset;
    (t += a.milliseconds || 0),
        (t += 1000 * (a.seconds || 0)),
        (t += 60000 * (a.minutes || 0)),
        (t += 3600000 * (a.hours || 0));
    let n = (0, u.FD)(t, e.timeZone);
    return (0, u.Mw)(n, e.calendar);
}
function B(e, a) {
    return x(e, d(a));
}
function E(e, a, t, r) {
    switch (a) {
        case "hour": {
            let a = 0,
                i = 23;
            if ((null == r ? void 0 : r.hourCycle) === 12) {
                let t = e.hour >= 12;
                (a = 12 * !!t), (i = t ? 23 : 11);
            }
            let o = (0, u.IO)(e),
                l = (0, u.Mw)(D(o, { hour: a }), new (0, n.IQ)()),
                s = [(0, u.xA)(l, e.timeZone, "earlier"), (0, u.xA)(l, e.timeZone, "later")].filter(
                    (a) => (0, u.FD)(a, e.timeZone).day === l.day,
                )[0],
                d = (0, u.Mw)(D(o, { hour: i }), new (0, n.IQ)()),
                c = [(0, u.xA)(d, e.timeZone, "earlier"), (0, u.xA)(d, e.timeZone, "later")]
                    .filter((a) => (0, u.FD)(a, e.timeZone).day === d.day)
                    .pop(),
                m = (0, u.ZI)(e) - e.offset,
                h = Math.floor(m / 3600000),
                f = m % 3600000;
            return (
                (m =
                    3600000 * C(h, t, Math.floor(s / 3600000), Math.floor(c / 3600000), null == r ? void 0 : r.round) +
                    f),
                (0, u.Mw)((0, u.FD)(m, e.timeZone), e.calendar)
            );
        }
        case "minute":
        case "second":
        case "millisecond":
            return b(e, a, t, r);
        case "era":
        case "year":
        case "month":
        case "day": {
            let n = v((0, u.IO)(e), a, t, r),
                i = (0, u.xA)(n, e.timeZone);
            return (0, u.Mw)((0, u.FD)(i, e.timeZone), e.calendar);
        }
        default:
            throw Error("Unsupported field " + a);
    }
}
function F(e, a, t) {
    let n = (0, u.IO)(e),
        r = D(m(n, a), a);
    if (0 === r.compare(n)) return e;
    let i = (0, u.xA)(r, e.timeZone, t);
    return (0, u.Mw)((0, u.FD)(i, e.timeZone), e.calendar);
}
