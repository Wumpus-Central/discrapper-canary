n.r(t), n.d(t, { default: () => s });
var i = n(250327),
    r = n(951516),
    a = n(217224);
function s(e, t) {
    (0, r.Z)(1, arguments);
    var n,
        i,
        s,
        o = (0, a.Z)(null !== (n = null == t ? void 0 : t.additionalDigits) && void 0 !== n ? n : 2);
    if (2 !== o && 1 !== o && 0 !== o) throw RangeError('additionalDigits must be 0, 1 or 2');
    if (!('string' == typeof e || '[object String]' === Object.prototype.toString.call(e))) return new Date(NaN);
    var l = d(e);
    if (l.date) {
        var u = f(l.date, o);
        i = _(u.restDateString, u.year);
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var c = i.getTime(),
        p = 0;
    if (l.time && isNaN((p = h(l.time)))) return new Date(NaN);
    if (l.timezone) {
        if (isNaN((s = g(l.timezone)))) return new Date(NaN);
    } else {
        var m = new Date(c + p),
            E = new Date(0);
        return E.setFullYear(m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()), E.setHours(m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds(), m.getUTCMilliseconds()), E;
    }
    return new Date(c + p + s);
}
var o = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    u = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    c = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function d(e) {
    var t,
        n = {},
        i = e.split(o.dateTimeDelimiter);
    if (i.length > 2) return n;
    if ((/:/.test(i[0]) ? (t = i[0]) : ((n.date = i[0]), (t = i[1]), o.timeZoneDelimiter.test(n.date) && ((n.date = e.split(o.timeZoneDelimiter)[0]), (t = e.substr(n.date.length, e.length)))), t)) {
        var r = o.timezone.exec(t);
        r ? ((n.time = t.replace(r[1], '')), (n.timezone = r[1])) : (n.time = t);
    }
    return n;
}
function f(e, t) {
    var n = RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + t) + '})|(\\d{2}|[+-]\\d{' + (2 + t) + '})$)'),
        i = e.match(n);
    if (!i)
        return {
            year: NaN,
            restDateString: ''
        };
    var r = i[1] ? parseInt(i[1]) : null,
        a = i[2] ? parseInt(i[2]) : null;
    return {
        year: null === a ? r : 100 * a,
        restDateString: e.slice((i[1] || i[2]).length)
    };
}
function _(e, t) {
    if (null === t) return new Date(NaN);
    var n = e.match(l);
    if (!n) return new Date(NaN);
    var i = !!n[4],
        r = p(n[1]),
        a = p(n[2]) - 1,
        s = p(n[3]),
        o = p(n[4]),
        u = p(n[5]) - 1;
    if (i) return T(t, o, u) ? E(t, o, u) : new Date(NaN);
    var c = new Date(0);
    return I(t, a, s) && b(t, r) ? (c.setUTCFullYear(t, a, Math.max(r, s)), c) : new Date(NaN);
}
function p(e) {
    return e ? parseInt(e) : 1;
}
function h(e) {
    var t = e.match(u);
    if (!t) return NaN;
    var n = m(t[1]),
        r = m(t[2]),
        a = m(t[3]);
    return S(n, r, a) ? n * i.vh + r * i.yJ + 1000 * a : NaN;
}
function m(e) {
    return (e && parseFloat(e.replace(',', '.'))) || 0;
}
function g(e) {
    if ('Z' === e) return 0;
    var t = e.match(c);
    if (!t) return 0;
    var n = '+' === t[1] ? -1 : 1,
        r = parseInt(t[2]),
        a = (t[3] && parseInt(t[3])) || 0;
    return A(r, a) ? n * (r * i.vh + a * i.yJ) : NaN;
}
function E(e, t, n) {
    var i = new Date(0);
    i.setUTCFullYear(e, 0, 4);
    var r = (t - 1) * 7 + n + 1 - (i.getUTCDay() || 7);
    return i.setUTCDate(i.getUTCDate() + r), i;
}
var v = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function y(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function I(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (v[t] || (y(e) ? 29 : 28));
}
function b(e, t) {
    return t >= 1 && t <= (y(e) ? 366 : 365);
}
function T(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function S(e, t, n) {
    return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function A(e, t) {
    return t >= 0 && t <= 59;
}
