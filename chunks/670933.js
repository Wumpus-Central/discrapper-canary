n.r(t), n.d(t, { default: () => a });
var r = n(250327),
    i = n(951516),
    o = n(217224);
function a(e, t) {
    (0, i.Z)(1, arguments);
    var n,
        r,
        a,
        s = (0, o.Z)(null != (n = null == t ? void 0 : t.additionalDigits) ? n : 2);
    if (2 !== s && 1 !== s && 0 !== s) throw RangeError('additionalDigits must be 0, 1 or 2');
    if ('string' != typeof e && '[object String]' !== Object.prototype.toString.call(e)) return new Date(NaN);
    var l = d(e);
    if (l.date) {
        var c = f(l.date, s);
        r = _(c.restDateString, c.year);
    }
    if (!r || isNaN(r.getTime())) return new Date(NaN);
    var u = r.getTime(),
        p = 0;
    if (l.time && isNaN((p = h(l.time)))) return new Date(NaN);
    if (l.timezone) {
        if (isNaN((a = g(l.timezone)))) return new Date(NaN);
    } else {
        var m = new Date(u + p),
            E = new Date(0);
        return E.setFullYear(m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()), E.setHours(m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds(), m.getUTCMilliseconds()), E;
    }
    return new Date(u + p + a);
}
var s = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    c = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    u = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function d(e) {
    var t,
        n = {},
        r = e.split(s.dateTimeDelimiter);
    if (r.length > 2) return n;
    if ((/:/.test(r[0]) ? (t = r[0]) : ((n.date = r[0]), (t = r[1]), s.timeZoneDelimiter.test(n.date) && ((n.date = e.split(s.timeZoneDelimiter)[0]), (t = e.substr(n.date.length, e.length)))), t)) {
        var i = s.timezone.exec(t);
        i ? ((n.time = t.replace(i[1], '')), (n.timezone = i[1])) : (n.time = t);
    }
    return n;
}
function f(e, t) {
    var n = RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + t) + '})|(\\d{2}|[+-]\\d{' + (2 + t) + '})$)'),
        r = e.match(n);
    if (!r)
        return {
            year: NaN,
            restDateString: ''
        };
    var i = r[1] ? parseInt(r[1]) : null,
        o = r[2] ? parseInt(r[2]) : null;
    return {
        year: null === o ? i : 100 * o,
        restDateString: e.slice((r[1] || r[2]).length)
    };
}
function _(e, t) {
    if (null === t) return new Date(NaN);
    var n = e.match(l);
    if (!n) return new Date(NaN);
    var r = !!n[4],
        i = p(n[1]),
        o = p(n[2]) - 1,
        a = p(n[3]),
        s = p(n[4]),
        c = p(n[5]) - 1;
    if (r) return I(t, s, c) ? E(t, s, c) : new Date(NaN);
    var u = new Date(0);
    return v(t, o, a) && O(t, i) ? (u.setUTCFullYear(t, o, Math.max(i, a)), u) : new Date(NaN);
}
function p(e) {
    return e ? parseInt(e) : 1;
}
function h(e) {
    var t = e.match(c);
    if (!t) return NaN;
    var n = m(t[1]),
        i = m(t[2]),
        o = m(t[3]);
    return S(n, i, o) ? n * r.vh + i * r.yJ + 1000 * o : NaN;
}
function m(e) {
    return (e && parseFloat(e.replace(',', '.'))) || 0;
}
function g(e) {
    if ('Z' === e) return 0;
    var t = e.match(u);
    if (!t) return 0;
    var n = '+' === t[1] ? -1 : 1,
        i = parseInt(t[2]),
        o = (t[3] && parseInt(t[3])) || 0;
    return T(i, o) ? n * (i * r.vh + o * r.yJ) : NaN;
}
function E(e, t, n) {
    var r = new Date(0);
    r.setUTCFullYear(e, 0, 4);
    var i = (t - 1) * 7 + n + 1 - (r.getUTCDay() || 7);
    return r.setUTCDate(r.getUTCDate() + i), r;
}
var b = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function y(e) {
    return e % 400 == 0 || (e % 4 == 0 && e % 100 != 0);
}
function v(e, t, n) {
    return t >= 0 && t <= 11 && n >= 1 && n <= (b[t] || (y(e) ? 29 : 28));
}
function O(e, t) {
    return t >= 1 && t <= (y(e) ? 366 : 365);
}
function I(e, t, n) {
    return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function S(e, t, n) {
    return 24 === e ? 0 === t && 0 === n : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function T(e, t) {
    return t >= 0 && t <= 59;
}
