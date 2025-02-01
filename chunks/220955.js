n.d(t, { Z: () => d });
var i = n(112419),
    r = n(675717),
    a = n(906024),
    s = 0 / 0,
    o = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    c = parseInt;
let d = function (e) {
    if ('number' == typeof e) return e;
    if ((0, a.Z)(e)) return s;
    if ((0, r.Z)(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = (0, r.Z)(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = (0, i.Z)(e);
    var n = l.test(e);
    return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? s : +e;
};
