r.d(t, {
    NE: () => O,
    WJ: () => x,
});
var a = r(225191),
    n = r(198812),
    s = r(840456),
    o = r(988042),
    i = r(274331),
    c = r.n(i),
    l = r(213841),
    u = r.n(l),
    b = r(773299);
function f(e, t) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? f(Object(r), !0).forEach(function (t) {
                  (0, n.A)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : f(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var h = o.default,
    p = Object.keys(h),
    y = function (e) {
        var t = c()(e),
            r = (0, b.o)(t.array()),
            a = (0, s.A)(r, 3),
            n = a[0],
            o = a[1],
            i = a[2],
            l = (0, b.I)([n < 0.25 ? 1 : n < 0.5 ? 0.9 - n : 1.1 - n, o, i]);
        return c().rgb(l).hex();
    },
    g = function (e) {
        return function (t) {
            return {
                className: [t.className, e.className].filter(Boolean).join(" "),
                style: d(d({}, t.style || {}), e.style || {}),
            };
        };
    },
    v = function (e, t) {
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
                        return g({
                            className: e,
                            style: t,
                        });
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                                n[s - 1] = arguments[s];
                            return g({ className: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "object":
                switch (n) {
                    case "string":
                        return g({
                            className: t,
                            style: e,
                        });
                    case "object":
                        return d(d({}, t), e);
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                                n[s - 1] = arguments[s];
                            return g({ style: e })(t.apply(void 0, [r].concat(n)));
                        };
                }
                break;
            case "function":
                switch (n) {
                    case "string":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                                n[s - 1] = arguments[s];
                            return e.apply(void 0, [g(r)({ className: t })].concat(n));
                        };
                    case "object":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                                n[s - 1] = arguments[s];
                            return e.apply(void 0, [g(r)({ style: t })].concat(n));
                        };
                    case "function":
                        return function (r) {
                            for (var a = arguments.length, n = Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
                                n[s - 1] = arguments[s];
                            return e.apply(void 0, [t.apply(void 0, [r].concat(n))].concat(n));
                        };
                }
        }
    },
    m = function (e, t) {
        var r = Object.keys(t);
        for (var a in e) -1 === r.indexOf(a) && r.push(a);
        return r.reduce(function (r, a) {
            return (r[a] = v(e[a], t[a])), r;
        }, {});
    },
    A = function (e, t) {
        for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
        if (null === t) return e;
        Array.isArray(t) || (t = [t]);
        var o = t
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
                              ? (e.style = d(d({}, e.style), t))
                              : "function" == typeof t && (e = d(d({}, e), t.apply(void 0, [e].concat(n)))),
                        e
                    );
                },
                {
                    className: "",
                    style: {},
                },
            );
        return o.className || delete o.className, 0 === Object.keys(o.style).length && delete o.style, o;
    },
    w = function (e) {
        return Object.keys(e).reduce(function (t, r) {
            return (t[r] = /^base/.test(r) ? y(e[r]) : "scheme" === r ? e[r] + ":inverted" : e[r]), t;
        }, {});
    },
    O = u()(function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            a = t.defaultBase16,
            n = void 0 === a ? h : a,
            s = t.base16Themes,
            o = E(r, void 0 === s ? null : s);
        o && (r = d(d({}, o), r));
        for (
            var i = p.reduce(function (e, t) {
                    return (e[t] = r[t] || n[t]), e;
                }, {}),
                c = m(
                    Object.keys(r).reduce(function (e, t) {
                        return -1 === p.indexOf(t) && (e[t] = r[t]), e;
                    }, {}),
                    e(i),
                ),
                l = arguments.length,
                b = Array(l > 3 ? l - 3 : 0),
                f = 3;
            f < l;
            f++
        )
            b[f - 3] = arguments[f];
        return u()(A, 2).apply(void 0, [c].concat(b));
    }, 3),
    k = function (e) {
        return !!e.extend;
    },
    E = function (e, t) {
        if ((e && k(e) && e.extend && (e = e.extend), "string" == typeof e)) {
            var r = e.split(":"),
                a = (0, s.A)(r, 2),
                n = a[0],
                i = a[1];
            (e = t ? t[n] : o[n]), "inverted" === i && (e = w(e));
        }
        return e && Object.prototype.hasOwnProperty.call(e, "base00") ? e : void 0;
    },
    x = function (e) {
        return "string" == typeof e
            ? "".concat(e, ":inverted")
            : e && k(e) && e.extend
              ? "string" == typeof e.extend
                  ? d(d({}, e), {}, { extend: "".concat(e.extend, ":inverted") })
                  : d(d({}, e), {}, { extend: w(e.extend) })
              : e
                ? w(e)
                : e;
    };
