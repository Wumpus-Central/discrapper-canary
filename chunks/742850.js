var r = a(46015),
    n = Error,
    _ = r(''.replace),
    o = String(new n('zxcasd').stack),
    i = /\n\s*at [^:]*:[^\n]*/,
    c = i.test(o);
t.exports = function (t, e) {
    if (c && 'string' == typeof t && !n.prepareStackTrace) for (; e--; ) t = _(t, i, '');
    return t;
};
