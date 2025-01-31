var i = n(661233),
    r = n(158698),
    a = 0 / 0,
    s = /^\s+|\s+$/g,
    o = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    c = parseInt;
function d(e) {
    if ('number' == typeof e) return e;
    if (r(e)) return a;
    if (i(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = i(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = e.replace(s, '');
    var n = l.test(e);
    return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? a : +e;
}
e.exports = d;
