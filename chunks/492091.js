var i = r(96403),
    a = r(952256),
    o = r(735471),
    s = r(726433),
    l = r(342545),
    u = i([].push);
e.exports = function (e) {
    if (o(e)) return e;
    if (a(e)) {
        for (var n = e.length, r = [], i = 0; i < n; i++) {
            var c = e[i];
            'string' == typeof c ? u(r, c) : ('number' == typeof c || 'Number' === s(c) || 'String' === s(c)) && u(r, l(c));
        }
        var d = r.length,
            f = !0;
        return function (e, n) {
            if (f) return (f = !1), n;
            if (a(this)) return n;
            for (var i = 0; i < d; i++) if (r[i] === e) return n;
        };
    }
};
