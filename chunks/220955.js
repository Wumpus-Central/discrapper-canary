var i = r(112419),
    a = r(675717),
    o = r(906024),
    s = 0 / 0,
    l = /^[-+]0x[0-9a-f]+$/i,
    u = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    d = parseInt;
function f(e) {
    if ('number' == typeof e) return e;
    if ((0, o.Z)(e)) return s;
    if ((0, a.Z)(e)) {
        var n = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = (0, a.Z)(n) ? n + '' : n;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = (0, i.Z)(e);
    var r = u.test(e);
    return r || c.test(e) ? d(e.slice(2), r ? 2 : 8) : l.test(e) ? s : +e;
}
n.Z = f;
