r.d(t, { Z: () => p });
var n = r(112419),
    o = r(675717),
    a = r(906024),
    i = 0 / 0,
    l = /^[-+]0x[0-9a-f]+$/i,
    s = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    c = parseInt;
let p = function (e) {
    if ('number' == typeof e) return e;
    if ((0, a.Z)(e)) return i;
    if ((0, o.Z)(e)) {
        var t = 'function' == typeof e.valueOf ? e.valueOf() : e;
        e = (0, o.Z)(t) ? t + '' : t;
    }
    if ('string' != typeof e) return 0 === e ? e : +e;
    e = (0, n.Z)(e);
    var r = s.test(e);
    return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : l.test(e) ? i : +e;
};
