"use strict";
var i = n(72290),
    r = n(626800),
    s = n(171463);
if (n(912877)() || n(640847)()) {
    var a = Symbol.iterator;
    e.exports = function (e) {
        return null != e && void 0 !== e[a] ? e[a]() : r(e) ? Array.prototype[a].call(e) : void 0;
    };
} else {
    var o = n(425344),
        l = n(400696),
        u = n(439619),
        c = u("%Map%", !0),
        d = u("%Set%", !0),
        _ = n(616380),
        h = _("Array.prototype.push"),
        f = _("String.prototype.charCodeAt"),
        p = _("String.prototype.slice"),
        E = function (e, t) {
            if (t + 1 >= e.length) return t + 1;
            var n = f(e, t);
            if (n < 55296 || n > 56319) return t + 1;
            var i = f(e, t + 1);
            return i < 56320 || i > 57343 ? t + 1 : t + 2;
        },
        m = function (e) {
            var t = 0;
            return {
                next: function () {
                    var n,
                        i = t >= e.length;
                    return i || ((n = e[t]), (t += 1)), { done: i, value: n };
                },
            };
        },
        g = function (e, t) {
            if (o(e) || r(e)) return m(e);
            if (l(e)) {
                var n = 0;
                return {
                    next: function () {
                        var t = E(e, n),
                            i = p(e, n, t);
                        return (n = t), { done: t > e.length, value: i };
                    },
                };
            }
            if (t && void 0 !== e["_es6-shim iterator_"]) return e["_es6-shim iterator_"]();
        };
    if (c || d) {
        var A = n(232258),
            I = n(551306),
            T = _("Map.prototype.forEach", !0),
            S = _("Set.prototype.forEach", !0);
        if (void 0 === i || !i.versions || !i.versions.node)
            var y = _("Map.prototype.iterator", !0),
                C = _("Set.prototype.iterator", !0);
        var N = _("Map.prototype.@@iterator", !0) || _("Map.prototype._es6-shim iterator_", !0),
            v = _("Set.prototype.@@iterator", !0) || _("Set.prototype._es6-shim iterator_", !0),
            R = function (e) {
                if (A(e)) {
                    if (y) return s(y(e));
                    if (N) return N(e);
                    if (T) {
                        var t = [];
                        return (
                            T(e, function (e, n) {
                                h(t, [n, e]);
                            }),
                            m(t)
                        );
                    }
                }
                if (I(e)) {
                    if (C) return s(C(e));
                    if (v) return v(e);
                    if (S) {
                        var n = [];
                        return (
                            S(e, function (e) {
                                h(n, e);
                            }),
                            m(n)
                        );
                    }
                }
            };
        e.exports = function (e) {
            return R(e) || g(e);
        };
    } else
        e.exports = function (e) {
            if (null != e) return g(e, !0);
        };
}
