var i = r(96403),
    a = Error,
    o = i(''.replace),
    s = (function (e) {
        return String(new a(e).stack);
    })('zxcasd'),
    l = /\n\s*at [^:]*:[^\n]*/,
    u = l.test(s);
e.exports = function (e, n) {
    if (u && 'string' == typeof e && !a.prepareStackTrace) for (; n--; ) e = o(e, l, '');
    return e;
};
