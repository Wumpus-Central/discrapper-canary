var e = n(96403),
    o = n(952256),
    i = n(735471),
    u = n(726433),
    s = n(342545),
    c = e([].push);
t.exports = function (t) {
    if (i(t)) return t;
    if (o(t)) {
        for (var r = t.length, n = [], e = 0; e < r; e++) {
            var f = t[e];
            'string' == typeof f ? c(n, f) : ('number' == typeof f || 'Number' === u(f) || 'String' === u(f)) && c(n, s(f));
        }
        var a = n.length,
            p = !0;
        return function (t, r) {
            if (p) return (p = !1), r;
            if (o(this)) return r;
            for (var e = 0; e < a; e++) if (n[e] === t) return r;
        };
    }
};
