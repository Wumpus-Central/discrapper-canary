var r = n(444675),
    i = n(670575),
    a = n(165593);
if (n(738146)() || n(247131)()) {
    var o = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[o] ? e[o]() : i(e) ? Array.prototype[o].call(e) : void 0;
    };
} else {
    var s = n(189612),
        l = n(934660),
        c = n(745872),
        u = c('%Map%', !0),
        d = c('%Set%', !0),
        f = n(887937),
        _ = f('Array.prototype.push'),
        p = f('String.prototype.charCodeAt'),
        h = f('String.prototype.slice'),
        m = function (e, t) {
            if (t + 1 >= e.length) return t + 1;
            var n = p(e, t);
            if (n < 55296 || n > 56319) return t + 1;
            var r = p(e, t + 1);
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
                            value: n
                        }
                    );
                }
            };
        },
        E = function (e, t) {
            if (s(e) || i(e)) return g(e);
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
                                value: r
                            }
                        );
                    }
                };
            }
            if (t && void 0 !== e['_es6-shim iterator_']) return e['_es6-shim iterator_']();
        };
    if (u || d) {
        var b = n(913306),
            y = n(282702),
            v = f('Map.prototype.forEach', !0),
            O = f('Set.prototype.forEach', !0);
        if (void 0 === r || !r.versions || !r.versions.node)
            var I = f('Map.prototype.iterator', !0),
                S = f('Set.prototype.iterator', !0);
        var T = f('Map.prototype.@@iterator', !0) || f('Map.prototype._es6-shim iterator_', !0),
            A = f('Set.prototype.@@iterator', !0) || f('Set.prototype._es6-shim iterator_', !0),
            N = function (e) {
                if (b(e)) {
                    if (I) return a(I(e));
                    if (T) return T(e);
                    if (v) {
                        var t = [];
                        return (
                            v(e, function (e, n) {
                                _(t, [n, e]);
                            }),
                            g(t)
                        );
                    }
                }
                if (y(e)) {
                    if (S) return a(S(e));
                    if (A) return A(e);
                    if (O) {
                        var n = [];
                        return (
                            O(e, function (e) {
                                _(n, e);
                            }),
                            g(n)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return N(e) || E(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return E(e, !0);
        };
}
