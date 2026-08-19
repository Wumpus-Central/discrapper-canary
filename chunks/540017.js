"use strict";
var n =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    o = (function () {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                    (n.configurable = !0),
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n);
            }
        }
        return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
        };
    })(),
    i = r(297920),
    a = r(284009),
    s = function (e) {
        return e;
    },
    l = (function () {
        function e() {
            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        }
        return (
            o(e, null, [
                {
                    key: "create",
                    value: function (e) {
                        if (e.outputRange && "string" == typeof e.outputRange[0]) {
                            var t, r, o, i, p;
                            return (
                                a((r = (t = e).outputRange).length >= 2, "Bad output range"),
                                (function (e) {
                                    for (var t = e[0].replace(c, ""), r = 1; r < e.length; ++r)
                                        a(t === e[r].replace(c, ""), "invalid pattern " + e[0] + " and " + e[r]);
                                })((r = r.map(u))),
                                (o = r[0].match(c).map(function () {
                                    return [];
                                })),
                                r.forEach(function (e) {
                                    e.match(c).forEach(function (e, t) {
                                        o[t].push(+e);
                                    });
                                }),
                                (i = r[0].match(c).map(function (e, r) {
                                    return l.create(n({}, t, { outputRange: o[r] }));
                                })),
                                (p = /^rgb/.test(r[0])),
                                function (e) {
                                    var t = 0;
                                    return r[0].replace(c, function () {
                                        var r = i[t++](e);
                                        return String(p && t < 4 ? Math.round(r) : r);
                                    });
                                }
                            );
                        }
                        var d = e.outputRange;
                        f("outputRange", d);
                        var h = e.inputRange;
                        f("inputRange", h),
                            (function (e) {
                                a(e.length >= 2, "inputRange must have at least 2 elements");
                                for (var t = 1; t < e.length; ++t)
                                    a(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e);
                            })(h),
                            a(
                                h.length === d.length,
                                "inputRange (" +
                                    h.length +
                                    ") and outputRange (" +
                                    d.length +
                                    ") must have the same length",
                            );
                        var m = e.easing || s,
                            v = "extend";
                        void 0 !== e.extrapolateLeft
                            ? (v = e.extrapolateLeft)
                            : void 0 !== e.extrapolate && (v = e.extrapolate);
                        var y = "extend";
                        return (
                            void 0 !== e.extrapolateRight
                                ? (y = e.extrapolateRight)
                                : void 0 !== e.extrapolate && (y = e.extrapolate),
                            function (e) {
                                a("number" == typeof e, "Cannot interpolation an input which is not a number");
                                var t = (function (e, t) {
                                    for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
                                    return r - 1;
                                })(e, h);
                                return (function (e, t, r, n, o, i, a, s) {
                                    var l = e;
                                    if (l < t)
                                        if ("identity" === a) return l;
                                        else "clamp" === a && (l = t);
                                    if (l > r)
                                        if ("identity" === s) return l;
                                        else "clamp" === s && (l = r);
                                    return n === o
                                        ? n
                                        : t === r
                                          ? e <= t
                                              ? n
                                              : o
                                          : (t === -1 / 0 ? (l = -l) : r === 1 / 0 ? (l -= t) : (l = (l - t) / (r - t)),
                                            (l = i(l)),
                                            n === -1 / 0 ? (l = -l) : o === 1 / 0 ? (l += n) : (l = l * (o - n) + n),
                                            l);
                                })(e, h[t], h[t + 1], d[t], d[t + 1], m, v, y);
                            }
                        );
                    },
                },
            ]),
            e
        );
    })();
function u(e) {
    var t = i(e);
    return null === t
        ? e
        : "rgba(" +
              ((0xff000000 & (t = t || 0)) >>> 24) +
              ", " +
              ((0xff0000 & t) >>> 16) +
              ", " +
              ((65280 & t) >>> 8) +
              ", " +
              (255 & t) / 255 +
              ")";
}
var c = /[0-9\.-]+/g;
function f(e, t) {
    a(t.length >= 2, e + " must have at least 2 elements"),
        a(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t);
}
e.exports = l;
