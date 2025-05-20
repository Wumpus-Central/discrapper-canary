var r = n(661233),
    i = n(158698),
    o = 0 / 0,
    a = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    u = parseInt;
e.exports = function (e) {
    if ('number' == typeof e) return e;
    if (i(e)) return o;
    if (r(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(a, '');
    var n = l.test(e);
    return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? o : +e;
};
