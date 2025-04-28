var e = r(46015),
    o = r(88996),
    i = r(880181),
    u = r(796138),
    c = r(382698),
    a = e([].push);
t.exports = function (t) {
    if (i(t)) return t;
    if (o(t)) {
        for (var n = t.length, r = [], e = 0; e < n; e++) {
            var f = t[e];
            'string' == typeof f ? a(r, f) : ('number' == typeof f || 'Number' === u(f) || 'String' === u(f)) && a(r, c(f));
        }
        var s = r.length,
            l = !0;
        return function (t, n) {
            if (l) return (l = !1), n;
            if (o(this)) return n;
            for (var e = 0; e < s; e++) if (r[e] === t) return n;
        };
    }
};
