n.d(t, {
    Hk: () => c,
    OI: () => d,
    mr: () => u,
    p6: () => l,
    uE: () => f
});
var i = n(259630),
    r = n(52948),
    a = n(548097),
    s = ['formatMatcher', 'timeZone', 'hour12', 'weekday', 'era', 'year', 'month', 'day', 'hour', 'minute', 'second', 'timeZoneName', 'hourCycle', 'dateStyle', 'timeStyle', 'calendar', 'numberingSystem', 'fractionalSecondDigits'];
function o(e, t, n, a) {
    var o = e.locale,
        l = e.formats,
        u = e.onError,
        c = e.timeZone;
    void 0 === a && (a = {});
    var d = a.format,
        f = (0, i.pi)((0, i.pi)({}, c && { timeZone: c }), d && (0, r.TB)(l, t, d, u)),
        _ = (0, r.L6)(a, s, f);
    return (
        'time' !== t ||
            _.hour ||
            _.minute ||
            _.second ||
            _.timeStyle ||
            _.dateStyle ||
            (_ = (0, i.pi)((0, i.pi)({}, _), {
                hour: 'numeric',
                minute: 'numeric'
            })),
        n(o, _)
    );
}
function l(e, t) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    var r = n[0],
        s = n[1],
        l = void 0 === s ? {} : s,
        u = 'string' == typeof r ? new Date(r || 0) : r;
    try {
        return o(e, 'date', t, l).format(u);
    } catch (t) {
        e.onError(new a.Qe('Error formatting date.', e.locale, t));
    }
    return String(u);
}
function u(e, t) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    var r = n[0],
        s = n[1],
        l = void 0 === s ? {} : s,
        u = 'string' == typeof r ? new Date(r || 0) : r;
    try {
        return o(e, 'time', t, l).format(u);
    } catch (t) {
        e.onError(new a.Qe('Error formatting time.', e.locale, t));
    }
    return String(u);
}
function c(e, t) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    var o = n[0],
        l = n[1],
        u = n[2],
        c = void 0 === u ? {} : u,
        d = e.timeZone,
        f = e.locale,
        _ = e.onError,
        p = (0, r.L6)(c, s, d ? { timeZone: d } : {});
    try {
        return t(f, p).formatRange(o, l);
    } catch (t) {
        _(new a.Qe('Error formatting date time range.', e.locale, t));
    }
    return String(o);
}
function d(e, t) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    var r = n[0],
        s = n[1],
        l = void 0 === s ? {} : s,
        u = 'string' == typeof r ? new Date(r || 0) : r;
    try {
        return o(e, 'date', t, l).formatToParts(u);
    } catch (t) {
        e.onError(new a.Qe('Error formatting date.', e.locale, t));
    }
    return [];
}
function f(e, t) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    var r = n[0],
        s = n[1],
        l = void 0 === s ? {} : s,
        u = 'string' == typeof r ? new Date(r || 0) : r;
    try {
        return o(e, 'time', t, l).formatToParts(u);
    } catch (t) {
        e.onError(new a.Qe('Error formatting time.', e.locale, t));
    }
    return [];
}
