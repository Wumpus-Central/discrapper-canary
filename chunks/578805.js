var r = n(444675),
    i = n(607974),
    o = n(64750);
if (n(322499)() || n(882171)()) {
    var a = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[a] ? e[a]() : i(e) ? Array.prototype[a].call(e) : void 0;
    };
} else {
    var s = n(189612),
        l = n(163494),
        c = n(690244),
        u = c('%Map%', !0),
        d = c('%Set%', !0),
        f = n(192853),
        p = f('Array.prototype.push'),
        _ = f('String.prototype.charCodeAt'),
        h = f('String.prototype.slice'),
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
        var v = n(403006),
            b = n(72859),
            y = f('Map.prototype.forEach', !0),
            O = f('Set.prototype.forEach', !0);
        if (void 0 === r || !r.versions || !r.versions.node)
            var S = f('Map.prototype.iterator', !0),
                I = f('Set.prototype.iterator', !0);
        var T = f('Map.prototype.@@iterator', !0) || f('Map.prototype._es6-shim iterator_', !0),
            N = f('Set.prototype.@@iterator', !0) || f('Set.prototype._es6-shim iterator_', !0),
            A = function (e) {
                if (v(e)) {
                    if (S) return o(S(e));
                    if (T) return T(e);
                    if (y) {
                        var t = [];
                        return (
                            y(e, function (e, n) {
                                p(t, [n, e]);
                            }),
                            g(t)
                        );
                    }
                }
                if (b(e)) {
                    if (I) return o(I(e));
                    if (N) return N(e);
                    if (O) {
                        var n = [];
                        return (
                            O(e, function (e) {
                                p(n, e);
                            }),
                            g(n)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return A(e) || E(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return E(e, !0);
        };
}
