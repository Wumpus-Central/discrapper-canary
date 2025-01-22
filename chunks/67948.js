var i = r(333897),
    a = r(706627),
    o = r(42848),
    s = 0 / 0,
    l = /^[-+]0x[0-9a-f]+$/i,
    u = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    d = parseInt;
function f(e) {
    if ('number' == typeof e) return e;
    if (o(e)) return s;
    if (a(e)) {
        var n = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = a(n) ? n + '' : n;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = i(e);
    var r = u.test(e);
    return r || c.test(e) ? d(e.slice(2), r ? 2 : 8) : l.test(e) ? s : +e;
}
e.exports = f;
