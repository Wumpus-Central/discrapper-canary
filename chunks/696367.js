"use strict";
var n = r(72290),
    o = r(626800),
    i = r(171463);
if (r(912877)() || r(640847)()) {
    var a = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[a] ? e[a]() : o(e) ? Array.prototype[a].call(e) : void 0;
    };
} else {
    var s = r(425344),
        l = r(400696),
        u = r(439619),
        c = u("%Map%", !0),
        f = u("%Set%", !0),
        p = r(616380),
        d = p("Array.prototype.push"),
        h = p("String.prototype.charCodeAt"),
        m = p("String.prototype.slice"),
        v = function (e, t) {
            if (t + 1 >= e.length) return t + 1;
            var r = h(e, t);
            if (r < 55296 || r > 56319) return t + 1;
            var n = h(e, t + 1);
            return n < 56320 || n > 57343 ? t + 1 : t + 2;
        },
        y = function (e) {
            var t = 0;
            return {
                next: function () {
                    var r,
                        n = t >= e.length;
                    return n || ((r = e[t]), (t += 1)), { done: n, value: r };
                },
            };
        },
        g = function (e, t) {
            if (s(e) || o(e)) return y(e);
            if (l(e)) {
                var r = 0;
                return {
                    next: function () {
                        var t = v(e, r),
                            n = m(e, r, t);
                        return (r = t), { done: t > e.length, value: n };
                    },
                };
            }
            if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]();
        };
    if (c || f) {
        var b = r(232258),
            w = r(551306),
            _ = p("Map.prototype.forEach", !0),
            S = p("Set.prototype.forEach", !0);
        if (void 0 === n || !n.versions || !n.versions.node)
            var E = p("Map.prototype.iterator", !0),
                x = p("Set.prototype.iterator", !0);
        var k = p("Map.prototype.@@iterator", !0) || p("Map.prototype._es6-shim iterator_", !0),
            C = p("Set.prototype.@@iterator", !0) || p("Set.prototype._es6-shim iterator_", !0),
            T = function (e) {
                if (b(e)) {
                    if (E) return i(E(e));
                    if (k) return k(e);
                    if (_) {
                        var t = [];
                        return (
                            _(e, function (e, r) {
                                d(t, [r, e]);
                            }),
                            y(t)
                        );
                    }
                }
                if (w(e)) {
                    if (x) return i(x(e));
                    if (C) return C(e);
                    if (S) {
                        var r = [];
                        return (
                            S(e, function (e) {
                                d(r, e);
                            }),
                            y(r)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return T(e) || g(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return g(e, !0);
        };
}
