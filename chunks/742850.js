var r = n(46015),
    i = Error,
    a = r(''.replace),
    o = (function (e) {
        return String(new i(e).stack);
    })('zxcasd'),
    s = /\n\s*at [^:]*:[^\n]*/,
    l = s.test(o);
e.exports = function (e, t) {
    if (l && 'string' == typeof e && !i.prepareStackTrace) for (; t--; ) e = a(e, s, '');
    return e;
};
