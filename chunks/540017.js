"use strict";
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    })(),
    a = n(297920),
    o = n(284009),
    s = function (e) {
        return e;
    },
    l = (function () {
        function e() {
            if (!(this instanceof e)) throw TypeError("Cannot call a class as a function");
        }
        return (
            i(e, null, [
                {
                    key: "create",
                    value: function (e) {
                        if (e.outputRange && "string" == typeof e.outputRange[0]) {
                            var t, n, i, a, f;
                            return (
                                o((n = (t = e).outputRange).length >= 2, "Bad output range"),
                                (function (e) {
                                    for (var t = e[0].replace(c, ""), n = 1; n < e.length; ++n)
                                        o(t === e[n].replace(c, ""), "invalid pattern " + e[0] + " and " + e[n]);
                                })((n = n.map(u))),
                                (i = n[0].match(c).map(function () {
                                    return [];
                                })),
                                n.forEach(function (e) {
                                    e.match(c).forEach(function (e, t) {
                                        i[t].push(+e);
                                    });
                                }),
                                (a = n[0].match(c).map(function (e, n) {
                                    return l.create(r({}, t, { outputRange: i[n] }));
                                })),
                                (f = /^rgb/.test(n[0])),
                                function (e) {
                                    var t = 0;
                                    return n[0].replace(c, function () {
                                        var n = a[t++](e);
                                        return String(f && t < 4 ? Math.round(n) : n);
                                    });
                                }
                            );
                        }
                        var p = e.outputRange;
                        d("outputRange", p);
                        var h = e.inputRange;
                        d("inputRange", h),
                            (function (e) {
                                o(e.length >= 2, "inputRange must have at least 2 elements");
                                for (var t = 1; t < e.length; ++t)
                                    o(e[t] >= e[t - 1], "inputRange must be monotonically increasing " + e);
                            })(h),
                            o(
                                h.length === p.length,
                                "inputRange (" +
                                    h.length +
                                    ") and outputRange (" +
                                    p.length +
                                    ") must have the same length",
                            );
                        var m = e.easing || s,
                            g = "extend";
                        void 0 !== e.extrapolateLeft
                            ? (g = e.extrapolateLeft)
                            : void 0 !== e.extrapolate && (g = e.extrapolate);
                        var v = "extend";
                        return (
                            void 0 !== e.extrapolateRight
                                ? (v = e.extrapolateRight)
                                : void 0 !== e.extrapolate && (v = e.extrapolate),
                            function (e) {
                                o("number" == typeof e, "Cannot interpolation an input which is not a number");
                                var t = (function (e, t) {
                                    for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
                                    return n - 1;
                                })(e, h);
                                return (function (e, t, n, r, i, a, o, s) {
                                    var l = e;
                                    if (l < t)
                                        if ("identity" === o) return l;
                                        else "clamp" === o && (l = t);
                                    if (l > n)
                                        if ("identity" === s) return l;
                                        else "clamp" === s && (l = n);
                                    return r === i
                                        ? r
                                        : t === n
                                          ? e <= t
                                              ? r
                                              : i
                                          : (t === -1 / 0 ? (l = -l) : n === 1 / 0 ? (l -= t) : (l = (l - t) / (n - t)),
                                            (l = a(l)),
                                            r === -1 / 0 ? (l = -l) : i === 1 / 0 ? (l += r) : (l = l * (i - r) + r),
                                            l);
                                })(e, h[t], h[t + 1], p[t], p[t + 1], m, g, v);
                            }
                        );
                    },
                },
            ]),
            e
        );
    })();
function u(e) {
    var t = a(e);
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
function d(e, t) {
    o(t.length >= 2, e + " must have at least 2 elements"),
        o(2 !== t.length || t[0] !== -1 / 0 || t[1] !== 1 / 0, e + "cannot be ]-infinity;+infinity[ " + t);
}
e.exports = l;
