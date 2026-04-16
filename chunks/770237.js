"use strict";
r.d(t, { A: () => i });
var a = r(25701);
function n(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
    return a;
}
function o(e, t, r) {
    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1 / 0;
    if ("Object" === e) {
        var s = Object.getOwnPropertyNames(t);
        r && s.sort(!0 === r ? void 0 : r),
            (i = {
                entries: (s = s.slice(a, o + 1)).map(function (e) {
                    return { key: e, value: t[e] };
                }),
            });
    } else if ("Array" === e)
        i = {
            entries: t.slice(a, o + 1).map(function (e, t) {
                return { key: t + a, value: e };
            }),
        };
    else {
        var i,
            c,
            l = 0,
            u = [],
            f = !0,
            b = "function" == typeof t.set,
            d = (function (e) {
                var t = ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (!t) {
                    if (
                        Array.isArray(e) ||
                        (t = (function (e) {
                            if (e) {
                                if ("string" == typeof e) return n(e, void 0);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                if (
                                    ("Object" === t && e.constructor && (t = e.constructor.name),
                                    "Map" === t || "Set" === t)
                                )
                                    return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                                    return n(e, void 0);
                            }
                        })(e))
                    ) {
                        t && (e = t);
                        var r = 0,
                            a = function () {};
                        return {
                            s: a,
                            n: function () {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                            },
                            e: function (e) {
                                throw e;
                            },
                            f: a,
                        };
                    }
                    throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                    );
                }
                var o,
                    s = !0,
                    i = !1;
                return {
                    s: function () {
                        t = t.call(e);
                    },
                    n: function () {
                        var e = t.next();
                        return (s = e.done), e;
                    },
                    e: function (e) {
                        (i = !0), (o = e);
                    },
                    f: function () {
                        try {
                            s || null == t.return || t.return();
                        } finally {
                            if (i) throw o;
                        }
                    },
                };
            })(t);
        try {
            for (d.s(); !(c = d.n()).done; ) {
                var h = c.value;
                if (l > o) {
                    f = !1;
                    break;
                }
                a <= l &&
                    (b && Array.isArray(h)
                        ? "string" == typeof h[0] || "number" == typeof h[0]
                            ? u.push({ key: h[0], value: h[1] })
                            : u.push({ key: "[entry ".concat(l, "]"), value: { "[key]": h[0], "[value]": h[1] } })
                        : u.push({ key: l, value: h })),
                    l++;
            }
        } catch (e) {
            d.e(e);
        } finally {
            d.f();
        }
        i = { hasMore: !f, entries: u };
    }
    return i;
}
function s(e, t, r) {
    for (var a = []; t - e > r * r; ) r *= r;
    for (var n = e; n <= t; n += r) a.push({ from: n, to: Math.min(t, n + r - 1) });
    return a;
}
function i(e, t, r, n) {
    var i,
        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1 / 0,
        u = o.bind(null, e, t, r);
    if (!n) return u().entries;
    var f = l < 1 / 0,
        b = Math.min(l - c, "Object" === e ? Object.keys(t).length : "Array" === e ? t.length : 1 / 0);
    if ("Iterable" !== e) {
        if (b <= n || n < 7) return u(c, l).entries;
    } else if (b <= n && !f) return u(c, l).entries;
    if ("Iterable" === e) {
        var d = u(c, c + n - 1),
            h = d.hasMore,
            p = d.entries;
        i = h ? [].concat((0, a.A)(p), (0, a.A)(s(c + n, c + 2 * n - 1, n))) : p;
    } else
        i = f
            ? s(c, l, n)
            : [].concat((0, a.A)(u(0, n - 5).entries), (0, a.A)(s(n - 4, b - 5, n)), (0, a.A)(u(b - 4, b - 1).entries));
    return i;
}
