var i = n(96403),
    r = n(952256),
    a = n(735471),
    s = n(726433),
    o = n(342545),
    l = i([].push);
e.exports = function (e) {
    if (a(e)) return e;
    if (r(e)) {
        for (var t = e.length, n = [], i = 0; i < t; i++) {
            var u = e[i];
            'string' == typeof u ? l(n, u) : ('number' == typeof u || 'Number' === s(u) || 'String' === s(u)) && l(n, o(u));
        }
        var c = n.length,
            d = !0;
        return function (e, t) {
            if (d) return (d = !1), t;
            if (r(this)) return t;
            for (var i = 0; i < c; i++) if (n[i] === e) return t;
        };
    }
};
