"use strict";
r.d(t, { NE: () => A, WJ: () => C });
var a = r(225191),
    n = r(198812),
    o = r(840456),
    s = r(988042),
    i = r(274331),
    l = r.n(i),
    c = r(213841),
    u = r.n(c),
    f = r(773299);
function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
            (a = a.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, a);
    }
    return r;
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? b(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : b(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var d = s.default,
    p = Object.keys(d),
    m = function (e) {
        var t = l()(e),
            r = (0, f.o)(t.array()),
            a = (0, o.A)(r, 3),
            n = a[0],
            s = a[1],
            i = a[2],
            c = (0, f.I)([n < 0.25 ? 1 : n < 0.5 ? 0.9 - n : 1.1 - n, s, i]);
        return l().rgb(c).hex();
    },
    g = function (e) {
        return function (t) {
            return {
                className: [t.className, e.className].filter(Boolean).join(" "),
                style: h(h({}, t.style || {}), e.style || {}),
            };
        };
    },
    y = function (e, t) {
        if (void 0 === e) return t;
        if (void 0 === t) return e;
        var r = (0, a.A)(e),
            n = (0, a.A)(t);
        switch (r) {
            case "string":
                switch (n) {
                    case "string":
                        return [t, e].filter(Boolean).join(" ");
                    case "object":
                        return g({ className: e, style: t });
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return g({ className: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "object":
                switch (n) {
                    case "string":
                        return g({ className: t, style: e });
                    case "object":
                        return h(h({}, t), e);
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return g({ style: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "function":
                switch (n) {
                    case "string":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [g(r)({ className: t })].concat(n));
                        };
                    case "object":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [g(r)({ style: t })].concat(n));
                        };
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
                                n[o - 1] = arguments[o];
                            return e.apply(void 0, [t.apply(void 0, [r].concat(n))].concat(n));
                        };
                }
        }
    },
    v = function (e, t) {
        var r = Object.keys(t);
        for (var a in e) -1 === r.indexOf(a) && r.push(a);
        return r.reduce(function (r, a) {
            return (r[a] = y(e[a], t[a])), r;
        }, {});
    },
    w = function (e, t) {
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
        if (null === t) return e;
        Array.isArray(t) || (t = [t]);
        var s = t
            .map(function (t) {
                return e[t];
            })
            .filter(Boolean)
            .reduce(
                function (e, t) {
                    return (
                        "string" == typeof t
                            ? (e.className = [e.className, t].filter(Boolean).join(" "))
                            : "object" === (0, a.A)(t)
                              ? (e.style = h(h({}, e.style), t))
                              : "function" == typeof t && (e = h(h({}, e), t.apply(void 0, [e].concat(n)))),
                        e
                    );
                },
                { className: "", style: {} },
            );
        return s.className || delete s.className, 0 === Object.keys(s.style).length && delete s.style, s;
    },
    M = function (e) {
        return Object.keys(e).reduce(function (t, r) {
            return (t[r] = /^base/.test(r) ? m(e[r]) : "scheme" === r ? e[r] + ":inverted" : e[r]), t;
        }, {});
    },
    A = u()(function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = t.defaultBase16,
            n = void 0 === a ? d : a,
            o = t.base16Themes,
            s = k(r, void 0 === o ? null : o);
        s && (r = h(h({}, s), r));
        for (
            var i = p.reduce(function (e, t) {
                    return (e[t] = r[t] || n[t]), e;
                }, {}),
                l = v(
                    Object.keys(r).reduce(function (e, t) {
                        return -1 === p.indexOf(t) && (e[t] = r[t]), e;
                    }, {}),
                    e(i),
                ),
                c = arguments.length,
                f = Array(c > 3 ? c - 3 : 0),
                b = 3;
            b < c;
            b++
        )
            f[b - 3] = arguments[b];
        return u()(w, 2).apply(void 0, [l].concat(f));
    }, 3),
    O = function (e) {
        return !!e.extend;
    },
    k = function (e, t) {
        if ((e && O(e) && e.extend && (e = e.extend), "string" == typeof e)) {
            var r = e.split(":"),
                a = (0, o.A)(r, 2),
                n = a[0],
                i = a[1];
            (e = t ? t[n] : s[n]), "inverted" === i && (e = M(e));
        }
        return e && Object.prototype.hasOwnProperty.call(e, "base00") ? e : void 0;
    },
    C = function (e) {
        return "string" == typeof e
            ? "".concat(e, ":inverted")
            : e && O(e) && e.extend
              ? "string" == typeof e.extend
                  ? h(h({}, e), {}, { extend: "".concat(e.extend, ":inverted") })
                  : h(h({}, e), {}, { extend: M(e.extend) })
              : e
                ? M(e)
                : e;
    };
