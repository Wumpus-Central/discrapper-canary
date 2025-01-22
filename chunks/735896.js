r.d(n, {
    Hk: function () {
        return d;
    },
    OI: function () {
        return f;
    },
    mr: function () {
        return c;
    },
    p6: function () {
        return u;
    },
    uE: function () {
        return p;
    }
});
var i = r(259630),
    a = r(52948),
    o = r(548097),
    s = ['formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hourCycle', 'dateStyle', 'timeStyle', 'calendar', 'numberingSystem', 'fractionalSecondDigits'];
function l(e, n, r, o) {
    var l = e.locale,
        u = e.formats,
        c = e.onError,
        d = e.timeZone;
    void 0 === o && (o = {});
    var f = o.format,
        p = (0, i.pi)((0, i.pi)({}, d && { timeZone: d }), f && (0, a.TB)(u, n, f, c)),
        h = (0, a.L6)(o, s, p);
    return (
        'time' === n &&
            !h.hour &&
            !h.minute &&
            !h.second &&
            !h.timeStyle &&
            !h.dateStyle &&
            (h = (0, i.pi)((0, i.pi)({}, h), {
                hour: 'numeric',
                minute: 'numeric'
            })),
        r(l, h)
    );
}
function u(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        s = r[1],
        u = void 0 === s ? {} : s,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'date', n, u).format(c);
    } catch (n) {
        e.onError(new o.Qe('Error formatting date.', e.locale, n));
    }
    return String(c);
}
function c(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        s = r[1],
        u = void 0 === s ? {} : s,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'time', n, u).format(c);
    } catch (n) {
        e.onError(new o.Qe('Error formatting time.', e.locale, n));
    }
    return String(c);
}
function d(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var l = r[0],
        u = r[1],
        c = r[2],
        d = void 0 === c ? {} : c,
        f = e.timeZone,
        p = e.locale,
        h = e.onError,
        _ = (0, a.L6)(d, s, f ? { timeZone: f } : {});
    try {
        return n(p, _).formatRange(l, u);
    } catch (n) {
        h(new o.Qe('Error formatting date time range.', e.locale, n));
    }
    return String(l);
}
function f(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        s = r[1],
        u = void 0 === s ? {} : s,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'date', n, u).formatToParts(c);
    } catch (n) {
        e.onError(new o.Qe('Error formatting date.', e.locale, n));
    }
    return [];
}
function p(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = r[0],
        s = r[1],
        u = void 0 === s ? {} : s,
        c = 'string' == typeof a ? new Date(a || 0) : a;
    try {
        return l(e, 'time', n, u).formatToParts(c);
    } catch (n) {
        e.onError(new o.Qe('Error formatting time.', e.locale, n));
    }
    return [];
}
