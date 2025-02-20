var r = n(333897),
    i = n(706627),
    o = n(42848),
    a = 0 / 0,
    s = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    u = parseInt;
function d(e) {
    if ('number' == typeof e) return e;
    if (o(e)) return a;
    if (i(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = i(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = r(e);
    var n = l.test(e);
    return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e;
}
e.exports = d;
