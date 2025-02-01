var i = n(96403),
    r = Error,
    a = i(''.replace),
    s = (function (e) {
        return String(new r(e).stack);
    })('zxcasd'),
    o = /\n\s*at [^:]*:[^\n]*/,
    l = o.test(s);
e.exports = function (e, t) {
    if (l && 'string' == typeof e && !r.prepareStackTrace) for (; t--; ) e = a(e, o, '');
    return e;
};
