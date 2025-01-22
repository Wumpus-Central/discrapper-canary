var i = r(444675),
    a = r(607974),
    o = r(64750);
if (r(322499)() || r(882171)()) {
    var s = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[s] ? e[s]() : a(e) ? Array.prototype[s].call(e) : void 0;
    };
} else {
    var l = r(189612),
        u = r(163494),
        c = r(690244),
        d = c('%Map%', !0),
        f = c('%Set%', !0),
        p = r(192853),
        h = p('Array.prototype.push'),
        _ = p('String.prototype.charCodeAt'),
        m = p('String.prototype.slice'),
        g = function (e, n) {
            if (n + 1 >= e.length) return n + 1;
            var r = _(e, n);
            if (r < 55296 || r > 56319) return n + 1;
            var i = _(e, n + 1);
            return i < 56320 || i > 57343 ? n + 1 : n + 2;
        },
        E = function (e) {
            var n = 0;
            return {
                next: function () {
                    var r,
                        i = n >= e.length;
                    return (
                        !i && ((r = e[n]), (n += 1)),
                        {
                            done: i,
                            value: r
                        }
                    );
                }
            };
        },
        v = function (e, n) {
            if (l(e) || a(e)) return E(e);
            if (u(e)) {
                var r = 0;
                return {
                    next: function () {
                        var n = g(e, r),
                            i = m(e, r, n);
                        return (
                            (r = n),
                            {
                                done: n > e.length,
                                value: i
                            }
                        );
                    }
                };
            }
            if (n && void 0 !== e['_es6-shim iterator_']) return e['_es6-shim iterator_']();
        };
    if (d || f) {
        var y = r(403006),
            b = r(72859),
            I = p('Map.prototype.forEach', !0),
            T = p('Set.prototype.forEach', !0);
        if (void 0 === i || !i.versions || !i.versions.node) {
            var S = p('Map.prototype.iterator', !0),
                A = p('Set.prototype.iterator', !0);
        }
        var C = p('Map.prototype.@@iterator', !0) || p('Map.prototype._es6-shim iterator_', !0),
            N = p('Set.prototype.@@iterator', !0) || p('Set.prototype._es6-shim iterator_', !0),
            R = function (e) {
                if (y(e)) {
                    if (S) return o(S(e));
                    if (C) return C(e);
                    if (I) {
                        var n = [];
                        return (
                            I(e, function (e, r) {
                                h(n, [r, e]);
                            }),
                            E(n)
                        );
                    }
                }
                if (b(e)) {
                    if (A) return o(A(e));
                    if (N) return N(e);
                    if (T) {
                        var r = [];
                        return (
                            T(e, function (e) {
                                h(r, e);
                            }),
                            E(r)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return R(e) || v(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return v(e, !0);
        };
}
