"use strict";
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
        u = n(439619),
        c = u("%Map%", !0),
        d = u("%Set%", !0),
        _ = n(616380),
        f = _("Array.prototype.push"),
        p = _("String.prototype.charCodeAt"),
        h = _("String.prototype.slice"),
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
                    return r || ((n = e[t]), (t += 1)), { done: r, value: n };
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
                        return (n = t), { done: t > e.length, value: r };
                    },
                };
            }
            if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]();
        };
    if (c || d) {
        var A = n(232258),
            I = n(551306),
            T = _("Map.prototype.forEach", !0),
            y = _("Set.prototype.forEach", !0);
        if (void 0 === r || !r.versions || !r.versions.node)
            var S = _("Map.prototype.iterator", !0),
                v = _("Set.prototype.iterator", !0);
        var C = _("Map.prototype.@@iterator", !0) || _("Map.prototype._es6-shim iterator_", !0),
            b = _("Set.prototype.@@iterator", !0) || _("Set.prototype._es6-shim iterator_", !0),
            N = function (e) {
                if (A(e)) {
                    if (S) return a(S(e));
                    if (C) return C(e);
                    if (T) {
                        var t = [];
                        return (
                            T(e, function (e, n) {
                                f(t, [n, e]);
                            }),
                            g(t)
                        );
                    }
                }
                if (I(e)) {
                    if (v) return a(v(e));
                    if (b) return b(e);
                    if (y) {
                        var n = [];
                        return (
                            y(e, function (e) {
                                f(n, e);
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
