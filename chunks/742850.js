var e = r(46015),
    o = Error,
    i = e(''.replace),
    u = String(new o('zxcasd').stack),
    c = /\n\s*at [^:]*:[^\n]*/,
    a = c.test(u);
t.exports = function (t, n) {
    if (a && 'string' == typeof t && !o.prepareStackTrace) for (; n--; ) t = i(t, c, '');
    return t;
};
