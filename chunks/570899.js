r.d(n, {
    $X: function () {
        return h;
    },
    Co: function () {
        return N;
    },
    GK: function () {
        return T;
    },
    IH: function () {
        return s;
    },
    U2: function () {
        return I;
    },
    cW: function () {
        return C;
    },
    dW: function () {
        return E;
    },
    jH: function () {
        return f;
    },
    q_: function () {
        return m;
    },
    qr: function () {
        return R;
    },
    t8: function () {
        return _;
    },
    wC: function () {
        return O;
    },
    xC: function () {
        return S;
    },
    yG: function () {
        return b;
    }
});
var i = r(697),
    a = r(165352);
let o = 3600000;
function s(e, n) {
    let r = e.copy(),
        i = 'hour' in r ? y(r, n) : 0;
    l(r, n.years || 0), r.calendar.balanceYearMonth && r.calendar.balanceYearMonth(r, e), (r.month += n.months || 0), u(r), d(r), (r.day += 7 * (n.weeks || 0)), (r.day += n.days || 0), (r.day += i), c(r), r.calendar.balanceDate && r.calendar.balanceDate(r), r.year < 1 && ((r.year = 1), (r.month = 1), (r.day = 1));
    let a = r.calendar.getYearsInEra(r);
    if (r.year > a) {
        var o, s;
        let e = null === (o = (s = r.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(s, r);
        (r.year = a), (r.month = e ? 1 : r.calendar.getMonthsInYear(r)), (r.day = e ? 1 : r.calendar.getDaysInMonth(r));
    }
    r.month < 1 && ((r.month = 1), (r.day = 1));
    let f = r.calendar.getMonthsInYear(r);
    return r.month > f && ((r.month = f), (r.day = r.calendar.getDaysInMonth(r))), (r.day = Math.max(1, Math.min(r.calendar.getDaysInMonth(r), r.day))), r;
}
function l(e, n) {
    var r, i;
    (null === (r = (i = e.calendar).isInverseEra) || void 0 === r ? void 0 : r.call(i, e)) && (n = -n), (e.year += n);
}
function u(e) {
    for (; e.month < 1; ) l(e, -1), (e.month += e.calendar.getMonthsInYear(e));
    let n = 0;
    for (; e.month > (n = e.calendar.getMonthsInYear(e)); ) (e.month -= n), l(e, 1);
}
function c(e) {
    for (; e.day < 1; ) e.month--, u(e), (e.day += e.calendar.getDaysInMonth(e));
    for (; e.day > e.calendar.getDaysInMonth(e); ) (e.day -= e.calendar.getDaysInMonth(e)), e.month++, u(e);
}
function d(e) {
    (e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month))), (e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day)));
}
function f(e) {
    e.calendar.constrainDate && e.calendar.constrainDate(e), (e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year))), d(e);
}
function p(e) {
    let n = {};
    for (let r in e) 'number' == typeof e[r] && (n[r] = -e[r]);
    return n;
}
function h(e, n) {
    return s(e, p(n));
}
function _(e, n) {
    let r = e.copy();
    return null != n.era && (r.era = n.era), null != n.year && (r.year = n.year), null != n.month && (r.month = n.month), null != n.day && (r.day = n.day), f(r), r;
}
function m(e, n) {
    let r = e.copy();
    return null != n.hour && (r.hour = n.hour), null != n.minute && (r.minute = n.minute), null != n.second && (r.second = n.second), null != n.millisecond && (r.millisecond = n.millisecond), E(r), r;
}
function g(e) {
    (e.second += Math.floor(e.millisecond / 1000)), (e.millisecond = v(e.millisecond, 1000)), (e.minute += Math.floor(e.second / 60)), (e.second = v(e.second, 60)), (e.hour += Math.floor(e.minute / 60)), (e.minute = v(e.minute, 60));
    let n = Math.floor(e.hour / 24);
    return (e.hour = v(e.hour, 24)), n;
}
function E(e) {
    (e.millisecond = Math.max(0, Math.min(e.millisecond, 1000))), (e.second = Math.max(0, Math.min(e.second, 59))), (e.minute = Math.max(0, Math.min(e.minute, 59))), (e.hour = Math.max(0, Math.min(e.hour, 23)));
}
function v(e, n) {
    let r = e % n;
    return r < 0 && (r += n), r;
}
function y(e, n) {
    return (e.hour += n.hours || 0), (e.minute += n.minutes || 0), (e.second += n.seconds || 0), (e.millisecond += n.milliseconds || 0), g(e);
}
function b(e, n) {
    let r = e.copy();
    return y(r, n), r;
}
function I(e, n) {
    return b(e, p(n));
}
function T(e, n, r, i) {
    let a = e.copy();
    switch (n) {
        case 'era': {
            let n = e.calendar.getEras(),
                o = n.indexOf(e.era);
            if (o < 0) throw Error('Invalid era: ' + e.era);
            (o = A(o, r, 0, n.length - 1, null == i ? void 0 : i.round)), (a.era = n[o]), f(a);
            break;
        }
        case 'year':
            var o, s;
            (null === (o = (s = a.calendar).isInverseEra) || void 0 === o ? void 0 : o.call(s, a)) && (r = -r), (a.year = A(e.year, r, -1 / 0, 9999, null == i ? void 0 : i.round)), a.year === -1 / 0 && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
            break;
        case 'month':
            a.month = A(e.month, r, 1, e.calendar.getMonthsInYear(e), null == i ? void 0 : i.round);
            break;
        case 'day':
            a.day = A(e.day, r, 1, e.calendar.getDaysInMonth(e), null == i ? void 0 : i.round);
            break;
        default:
            throw Error('Unsupported field ' + n);
    }
    return e.calendar.balanceDate && e.calendar.balanceDate(a), f(a), a;
}
function S(e, n, r, i) {
    let a = e.copy();
    switch (n) {
        case 'hour': {
            let n = e.hour,
                o = 0,
                s = 23;
            if ((null == i ? void 0 : i.hourCycle) === 12) {
                let e = n >= 12;
                (o = e ? 12 : 0), (s = e ? 23 : 11);
            }
            a.hour = A(n, r, o, s, null == i ? void 0 : i.round);
            break;
        }
        case 'minute':
            a.minute = A(e.minute, r, 0, 59, null == i ? void 0 : i.round);
            break;
        case 'second':
            a.second = A(e.second, r, 0, 59, null == i ? void 0 : i.round);
            break;
        case 'millisecond':
            a.millisecond = A(e.millisecond, r, 0, 999, null == i ? void 0 : i.round);
            break;
        default:
            throw Error('Unsupported field ' + n);
    }
    return a;
}
function A(e, n, r, i, a = !1) {
    if (a) {
        (e += Math.sign(n)) < r && (e = i);
        let a = Math.abs(n);
        (e = n > 0 ? Math.ceil(e / a) * a : Math.floor(e / a) * a) > i && (e = r);
    } else (e += n) < r ? (e = i - (r - e - 1)) : e > i && (e = r + (e - i - 1));
    return e;
}
function C(e, n) {
    let r;
    if ((null != n.years && 0 !== n.years) || (null != n.months && 0 !== n.months) || (null != n.weeks && 0 !== n.weeks) || (null != n.days && 0 !== n.days)) {
        let a = s((0, i.IO)(e), {
            years: n.years,
            months: n.months,
            weeks: n.weeks,
            days: n.days
        });
        r = (0, i.xA)(a, e.timeZone);
    } else r = (0, i.ZI)(e) - e.offset;
    r += (n.milliseconds || 0) + 1000 * (n.seconds || 0) + 60000 * (n.minutes || 0) + 3600000 * (n.hours || 0);
    let a = (0, i.FD)(r, e.timeZone);
    return (0, i.Mw)(a, e.calendar);
}
function N(e, n) {
    return C(e, p(n));
}
function R(e, n, r, s) {
    switch (n) {
        case 'hour': {
            let n = 0,
                l = 23;
            if ((null == s ? void 0 : s.hourCycle) === 12) {
                let r = e.hour >= 12;
                (n = r ? 12 : 0), (l = r ? 23 : 11);
            }
            let u = (0, i.IO)(e),
                c = (0, i.Mw)(m(u, { hour: n }), new a.IQ()),
                d = [(0, i.xA)(c, e.timeZone, 'earlier'), (0, i.xA)(c, e.timeZone, 'later')].filter((n) => (0, i.FD)(n, e.timeZone).day === c.day)[0],
                f = (0, i.Mw)(m(u, { hour: l }), new a.IQ()),
                p = [(0, i.xA)(f, e.timeZone, 'earlier'), (0, i.xA)(f, e.timeZone, 'later')].filter((n) => (0, i.FD)(n, e.timeZone).day === f.day).pop(),
                h = (0, i.ZI)(e) - e.offset,
                _ = Math.floor(h / o),
                g = h % o;
            return (h = A(_, r, Math.floor(d / o), Math.floor(p / o), null == s ? void 0 : s.round) * o + g), (0, i.Mw)((0, i.FD)(h, e.timeZone), e.calendar);
        }
        case 'minute':
        case 'second':
        case 'millisecond':
            return S(e, n, r, s);
        case 'era':
        case 'year':
        case 'month':
        case 'day': {
            let a = T((0, i.IO)(e), n, r, s),
                o = (0, i.xA)(a, e.timeZone);
            return (0, i.Mw)((0, i.FD)(o, e.timeZone), e.calendar);
        }
        default:
            throw Error('Unsupported field ' + n);
    }
}
function O(e, n, r) {
    let a = (0, i.IO)(e),
        o = m(_(a, n), n);
    if (0 === o.compare(a)) return e;
    let s = (0, i.xA)(o, e.timeZone, r);
    return (0, i.Mw)((0, i.FD)(s, e.timeZone), e.calendar);
}
