n.d(t, { Z: () => d });
var r = n(112419),
    i = n(675717),
    o = n(906024),
    a = 0 / 0,
    s = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    u = parseInt;
let d = function (e) {
    if ('number' == typeof e) return e;
    if ((0, o.Z)(e)) return a;
    if ((0, i.Z)(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = (0, i.Z)(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = (0, r.Z)(e);
    var n = l.test(e);
    return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? a : +e;
};
