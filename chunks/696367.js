var r = n(72290),
    i = n(626800),
    a = n(171463);
if (n(912877)() || n(640847)()) {
    var s = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[s] ? e[s]() : i(e) ? Array.prototype[s].call(e) : void 0;
    };
} else {
    var o = n(425344),
        l = n(400696),
        c = n(439619),
        u = c("%Map%", !0),
        d = c("%Set%", !0),
        f = n(616380),
        p = f("Array.prototype.push"),
        _ = f("String.prototype.charCodeAt"),
        h = f("String.prototype.slice"),
        m = function (e, t) {
            if (t + 1 >= e.length) return t + 1;
            var n = _(e, t);
            if (n < 55296 || n > 56319) return t + 1;
            var r = _(e, t + 1);
            return r < 56320 || r > 57343 ? t + 1 : t + 2;
        },
        g = function (e) {
            var t = 0;
            return {
                next: function () {
                    var n,
                        r = t >= e.length;
                    return (
                        r || ((n = e[t]), (t += 1)),
                        {
                            done: r,
                            value: n,
                        }
                    );
                },
            };
        },
        E = function (e, t) {
            if (o(e) || i(e)) return g(e);
            if (l(e)) {
                var n = 0;
                return {
                    next: function () {
                        var t = m(e, n),
                            r = h(e, n, t);
                        return (
                            (n = t),
                            {
                                done: t > e.length,
                                value: r,
                            }
                        );
                    },
                };
            }
            if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]();
        };
    if (u || d) {
        var b = n(232258),
            y = n(551306),
            O = f("Map.prototype.forEach", !0),
            A = f("Set.prototype.forEach", !0);
        if (void 0 === r || !r.versions || !r.versions.node)
            var v = f("Map.prototype.iterator", !0),
                S = f("Set.prototype.iterator", !0);
        var I = f("Map.prototype.@@iterator", !0) || f("Map.prototype._es6-shim iterator_", !0),
            T = f("Set.prototype.@@iterator", !0) || f("Set.prototype._es6-shim iterator_", !0),
            C = function (e) {
                if (b(e)) {
                    if (v) return a(v(e));
                    if (I) return I(e);
                    if (O) {
                        var t = [];
                        return (
                            O(e, function (e, n) {
                                p(t, [n, e]);
                            }),
                            g(t)
                        );
                    }
                }
                if (y(e)) {
                    if (S) return a(S(e));
                    if (T) return T(e);
                    if (A) {
                        var n = [];
                        return (
                            A(e, function (e) {
                                p(n, e);
                            }),
                            g(n)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return C(e) || E(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return E(e, !0);
        };
}
