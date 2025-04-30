var r = n(46015),
    i = n(88996),
    o = n(880181),
    a = n(796138),
    s = n(382698),
    l = r([].push);
e.exports = function (e) {
    if (o(e)) return e;
    if (i(e)) {
        for (var t = e.length, n = [], r = 0; r < t; r++) {
            var c = e[r];
            'string' == typeof c ? l(n, c) : ('number' == typeof c || 'Number' === a(c) || 'String' === a(c)) && l(n, s(c));
        }
        var u = n.length,
            d = !0;
        return function (e, t) {
            if (d) return (d = !1), t;
            if (i(this)) return t;
            for (var r = 0; r < u; r++) if (n[r] === e) return t;
        };
    }
};
