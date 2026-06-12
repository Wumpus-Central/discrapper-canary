var i = n(212),
    r = n(509185),
    s = n(168110),
    a = 0 / 0,
    o = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    c = parseInt;
e.exports = function (e) {
    if ("number" == typeof e) return e;
    if (s(e)) return a;
    if (r(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = r(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = i(e);
    var n = l.test(e);
    return n || u.test(e) ? c(e.slice(2), n ? 2 : 8) : o.test(e) ? a : +e;
};
