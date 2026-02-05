!(function (e, r) {
    r(t, n(64700));
})(0, function (e, t) {
    "use strict";
    function n(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, r);
        }
        return n;
    }
    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? n(Object(r), !0).forEach(function (t) {
                      a(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                  : n(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
        }
        return e;
    }
    function i(e) {
        return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                  })(e);
    }
    function a(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        );
    }
    function s(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
    }
    function o(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = s(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
        return i;
    }
    function l(e, t) {
        return u(e) || c(e, t) || d(e, t) || f();
    }
    function u(e) {
        if (Array.isArray(e)) return e;
    }
    function c(e, t) {
        var n,
            r,
            i = e && (("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
        if (null != i) {
            var a = [],
                s = !0,
                o = !1;
            try {
                for (i = i.call(e); !(s = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); s = !0);
            } catch (e) {
                (o = !0), (r = e);
            } finally {
                try {
                    s || null == i.return || i.return();
                } finally {
                    if (o) throw r;
                }
            }
            return a;
        }
    }
    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return _(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t);
        }
    }
    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function f() {
        throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    function p(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var h,
        m,
        g,
        E,
        A = { exports: {} };
    function I() {
        return m ? h : ((m = 1), (h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
    }
    A.exports = (function () {
        if (E) return g;
        E = 1;
        var e = I();
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (g = function () {
                function r(t, n, r, i, a, s) {
                    if (s !== e) {
                        var o = Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                        );
                        throw ((o.name = "Invariant Violation"), o);
                    }
                }
                function i() {
                    return r;
                }
                r.isRequired = r;
                var a = {
                    array: r,
                    bool: r,
                    func: r,
                    number: r,
                    object: r,
                    string: r,
                    symbol: r,
                    any: r,
                    arrayOf: i,
                    element: r,
                    elementType: r,
                    instanceOf: i,
                    node: r,
                    objectOf: i,
                    oneOf: i,
                    oneOfType: i,
                    shape: i,
                    exact: i,
                    checkPropTypes: n,
                    resetWarningCache: t,
                };
                return (a.PropTypes = a), a;
            })
        );
    })()();
    var T = p(A.exports),
        y = function (e, n, r) {
            var i = !!r,
                a = t.useRef(r);
            t.useEffect(
                function () {
                    a.current = r;
                },
                [r],
            ),
                t.useEffect(
                    function () {
                        if (!i || !e) return function () {};
                        var t = function () {
                            a.current && a.current.apply(a, arguments);
                        };
                        return (
                            e.on(n, t),
                            function () {
                                e.off(n, t);
                            }
                        );
                    },
                    [i, n, e, a],
                );
        },
        S = function (e) {
            var n = t.useRef(e);
            return (
                t.useEffect(
                    function () {
                        n.current = e;
                    },
                    [e],
                ),
                n.current
            );
        },
        v = function (e) {
            return null !== e && "object" === i(e);
        },
        C = function (e) {
            return v(e) && "function" == typeof e.then;
        },
        b = function (e) {
            return (
                v(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment
            );
        },
        N = "[object Object]",
        R = function e(t, n) {
            if (!v(t) || !v(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === N;
            if (i !== (Object.prototype.toString.call(n) === N)) return !1;
            if (!i && !r) return t === n;
            var a = Object.keys(t),
                s = Object.keys(n);
            if (a.length !== s.length) return !1;
            for (var o = {}, l = 0; l < a.length; l += 1) o[a[l]] = !0;
            for (var u = 0; u < s.length; u += 1) o[s[u]] = !0;
            var c = Object.keys(o);
            if (c.length !== a.length) return !1;
            var d = t,
                _ = n,
                f = function (t) {
                    return e(d[t], _[t]);
                };
            return c.every(f);
        },
        O = function (e, t, n) {
            return v(e)
                ? Object.keys(e).reduce(function (i, s) {
                      var o = !v(t) || !R(e[s], t[s]);
                      return n.includes(s)
                          ? (o &&
                                console.warn(
                                    "Unsupported prop change: options.".concat(s, " is not a mutable property."),
                                ),
                            i)
                          : o
                            ? r(r({}, i || {}), {}, a({}, s, e[s]))
                            : i;
                  }, null)
                : null;
        },
        D =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        L = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (null === e || b(e)) return e;
            throw Error(t);
        },
        w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (C(e))
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return L(e, t);
                    }),
                };
            var n = L(e, t);
            return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
        },
        x = function (e) {
            e &&
                e._registerWrapper &&
                e.registerAppInfo &&
                (e._registerWrapper({ name: "react-stripe-js", version: "3.7.0" }),
                e.registerAppInfo({
                    name: "react-stripe-js",
                    version: "3.7.0",
                    url: "https://stripe.com/docs/stripe-js/react",
                }));
        },
        P = t.createContext(null);
    P.displayName = "ElementsContext";
    var M = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find Elements context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <Elements> provider.",
                    ),
                );
            return e;
        },
        k = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return w(n);
                    },
                    [n],
                ),
                s = l(
                    t.useState(function () {
                        return {
                            stripe: "sync" === a.tag ? a.stripe : null,
                            elements: "sync" === a.tag ? a.stripe.elements(r) : null,
                        };
                    }),
                    2,
                ),
                o = s[0],
                u = s[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            u(function (t) {
                                return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                            });
                        };
                    return (
                        "async" !== a.tag || o.stripe
                            ? "sync" !== a.tag || o.stripe || t(a.stripe)
                            : a.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, o, r],
            );
            var c = S(n);
            t.useEffect(
                function () {
                    null !== c &&
                        c !== n &&
                        console.warn(
                            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [c, n],
            );
            var d = S(r);
            return (
                t.useEffect(
                    function () {
                        if (o.elements) {
                            var e = O(r, d, ["clientSecret", "fonts"]);
                            e && o.elements.update(e);
                        }
                    },
                    [r, d, o.elements],
                ),
                t.useEffect(
                    function () {
                        x(o.stripe);
                    },
                    [o.stripe],
                ),
                t.createElement(P.Provider, { value: o }, i)
            );
        };
    k.propTypes = { stripe: T.any, options: T.object };
    var U = function (e) {
            return M(t.useContext(P), e);
        },
        G = function () {
            return U("calls useElements()").elements;
        },
        V = function (e) {
            return (0, e.children)(U("mounts <ElementsConsumer>"));
        };
    V.propTypes = { children: T.func.isRequired };
    var F = ["on", "session"],
        B = t.createContext(null);
    B.displayName = "CheckoutSdkContext";
    var j = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        H = t.createContext(null);
    H.displayName = "CheckoutContext";
    var Y = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = o(e, F);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        W =
            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        K = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return w(n, W);
                    },
                    [n],
                ),
                s = l(t.useState(null), 2),
                o = s[0],
                u = s[1],
                c = l(
                    t.useState(function () {
                        return { stripe: "sync" === a.tag ? a.stripe : null, checkoutSdk: null };
                    }),
                    2,
                ),
                d = c[0],
                _ = c[1],
                f = function (e, t) {
                    _(function (n) {
                        return n.stripe && n.checkoutSdk ? n : { stripe: e, checkoutSdk: t };
                    });
                },
                p = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        "async" !== a.tag || d.stripe
                            ? "sync" === a.tag &&
                              a.stripe &&
                              !p.current &&
                              ((p.current = !0),
                              a.stripe.initCheckout(r).then(function (e) {
                                  e && (f(a.stripe, e), e.on("change", u));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !p.current &&
                                      ((p.current = !0),
                                      t.initCheckout(r).then(function (e) {
                                          e && (f(t, e), e.on("change", u));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, d, r, u],
            );
            var h = S(n);
            t.useEffect(
                function () {
                    null !== h &&
                        h !== n &&
                        console.warn(
                            "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [h, n],
            );
            var m = S(r),
                g = S(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == m || null == (e = m.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            a = !R(i, n),
                            s = !g && d.checkoutSdk;
                        i && (a || s) && d.checkoutSdk.changeAppearance(i);
                    }
                },
                [r, m, d.checkoutSdk, g],
            ),
                t.useEffect(
                    function () {
                        x(d.stripe);
                    },
                    [d.stripe],
                );
            var E = t.useMemo(
                function () {
                    return Y(d.checkoutSdk, o);
                },
                [d.checkoutSdk, o],
            );
            return d.checkoutSdk
                ? t.createElement(B.Provider, { value: d }, t.createElement(H.Provider, { value: E }, i))
                : null;
        };
    K.propTypes = {
        stripe: T.any,
        options: T.shape({ fetchClientSecret: T.func.isRequired, elementsOptions: T.object }).isRequired,
    };
    var z = function (e) {
            return j(t.useContext(B), e);
        },
        $ = function (e) {
            var n = t.useContext(B),
                r = t.useContext(P);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? j(n, e) : M(r, e);
        },
        q = function () {
            z("calls useCheckout()");
            var e = t.useContext(H);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        },
        Z = ["mode"],
        Q = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        X = function (e, n) {
            var r = "".concat(Q(e), "Element"),
                i = function (n) {
                    var i,
                        a = n.id,
                        s = n.className,
                        u = n.options,
                        c = void 0 === u ? {} : u,
                        d = n.onBlur,
                        _ = n.onFocus,
                        f = n.onReady,
                        p = n.onChange,
                        h = n.onEscape,
                        m = n.onClick,
                        g = n.onLoadError,
                        E = n.onLoaderStart,
                        A = n.onNetworksChange,
                        I = n.onConfirm,
                        T = n.onCancel,
                        v = n.onShippingAddressChange,
                        C = n.onShippingRateChange,
                        b = $("mounts <".concat(r, ">")),
                        N = "elements" in b ? b.elements : null,
                        R = "checkoutSdk" in b ? b.checkoutSdk : null,
                        D = l(t.useState(null), 2),
                        L = D[0],
                        w = D[1],
                        x = t.useRef(null),
                        P = t.useRef(null);
                    y(L, "blur", d),
                        y(L, "focus", _),
                        y(L, "escape", h),
                        y(L, "click", m),
                        y(L, "loaderror", g),
                        y(L, "loaderstart", E),
                        y(L, "networkschange", A),
                        y(L, "confirm", I),
                        y(L, "cancel", T),
                        y(L, "shippingaddresschange", v),
                        y(L, "shippingratechange", C),
                        y(L, "change", p),
                        f &&
                            (i =
                                "expressCheckout" === e
                                    ? f
                                    : function () {
                                          f(L);
                                      }),
                        y(L, "ready", i),
                        t.useLayoutEffect(
                            function () {
                                if (null === x.current && null !== P.current && (N || R)) {
                                    var t = null;
                                    if (R)
                                        switch (e) {
                                            case "payment":
                                                t = R.createPaymentElement(c);
                                                break;
                                            case "address":
                                                if ("mode" in c) {
                                                    var n = c.mode,
                                                        i = o(c, Z);
                                                    if ("shipping" === n) t = R.createShippingAddressElement(i);
                                                    else if ("billing" === n) t = R.createBillingAddressElement(i);
                                                    else
                                                        throw Error(
                                                            "Invalid options.mode. mode must be 'billing' or 'shipping'.",
                                                        );
                                                } else
                                                    throw Error(
                                                        "You must supply options.mode. mode must be 'billing' or 'shipping'.",
                                                    );
                                                break;
                                            case "expressCheckout":
                                                t = R.createExpressCheckoutElement(c);
                                                break;
                                            case "currencySelector":
                                                t = R.createCurrencySelectorElement();
                                                break;
                                            default:
                                                throw Error(
                                                    "Invalid Element type ".concat(
                                                        r,
                                                        ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                    ),
                                                );
                                        }
                                    else N && (t = N.create(e, c));
                                    (x.current = t), w(t), t && t.mount(P.current);
                                }
                            },
                            [N, R, c],
                        );
                    var M = S(c);
                    return (
                        t.useEffect(
                            function () {
                                if (x.current) {
                                    var e = O(c, M, ["paymentRequest"]);
                                    e && "update" in x.current && x.current.update(e);
                                }
                            },
                            [c, M],
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (x.current && "function" == typeof x.current.destroy)
                                    try {
                                        x.current.destroy(), (x.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement("div", { id: a, className: s, ref: P })
                    );
                },
                a = function (e) {
                    $("mounts <".concat(r, ">"));
                    var n = e.id,
                        i = e.className;
                    return t.createElement("div", { id: n, className: i });
                },
                s = n ? a : i;
            return (
                (s.propTypes = {
                    id: T.string,
                    className: T.string,
                    onChange: T.func,
                    onBlur: T.func,
                    onFocus: T.func,
                    onReady: T.func,
                    onEscape: T.func,
                    onClick: T.func,
                    onLoadError: T.func,
                    onLoaderStart: T.func,
                    onNetworksChange: T.func,
                    onConfirm: T.func,
                    onCancel: T.func,
                    onShippingAddressChange: T.func,
                    onShippingRateChange: T.func,
                    options: T.object,
                }),
                (s.displayName = r),
                (s.__elementType = e),
                s
            );
        },
        J = "u" < typeof window,
        ee = t.createContext(null);
    ee.displayName = "EmbeddedCheckoutProviderContext";
    var et = function () {
            var e = t.useContext(ee);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e;
        },
        en =
            "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        er = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return w(n, en);
                    },
                    [n],
                ),
                s = t.useRef(null),
                o = t.useRef(null),
                u = l(t.useState({ embeddedCheckout: null }), 2),
                c = u[0],
                d = u[1];
            t.useEffect(
                function () {
                    if (!o.current && !s.current) {
                        var e = function (e) {
                            o.current ||
                                s.current ||
                                ((o.current = e),
                                (s.current = o.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        "async" === a.tag && !o.current && (r.clientSecret || r.fetchClientSecret)
                            ? a.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === a.tag && !o.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
                    }
                },
                [a, r, c, o],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            c.embeddedCheckout
                                ? ((s.current = null), c.embeddedCheckout.destroy())
                                : s.current &&
                                  s.current.then(function () {
                                      (s.current = null), c.embeddedCheckout && c.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [c.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        x(o);
                    },
                    [o],
                );
            var _ = S(n);
            t.useEffect(
                function () {
                    null !== _ &&
                        _ !== n &&
                        console.warn(
                            "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [_, n],
            );
            var f = S(r);
            return (
                t.useEffect(
                    function () {
                        if (null != f) {
                            if (null == r)
                                return void console.warn(
                                    "Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.",
                                );
                            void 0 === r.clientSecret &&
                                void 0 === r.fetchClientSecret &&
                                console.warn(
                                    "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                                ),
                                null != f.clientSecret &&
                                    r.clientSecret !== f.clientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != f.fetchClientSecret &&
                                    r.fetchClientSecret !== f.fetchClientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != f.onComplete &&
                                    r.onComplete !== f.onComplete &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.",
                                    ),
                                null != f.onShippingDetailsChange &&
                                    r.onShippingDetailsChange !== f.onShippingDetailsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.",
                                    ),
                                null != f.onLineItemsChange &&
                                    r.onLineItemsChange !== f.onLineItemsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.",
                                    );
                        }
                    },
                    [f, r],
                ),
                t.createElement(ee.Provider, { value: c }, i)
            );
        },
        ei = function (e) {
            var n = e.id,
                r = e.className,
                i = et().embeddedCheckout,
                a = t.useRef(!1),
                s = t.useRef(null);
            return (
                t.useLayoutEffect(
                    function () {
                        return (
                            !a.current && i && null !== s.current && (i.mount(s.current), (a.current = !0)),
                            function () {
                                if (a.current && i)
                                    try {
                                        i.unmount(), (a.current = !1);
                                    } catch (e) {}
                            }
                        );
                    },
                    [i],
                ),
                t.createElement("div", { ref: s, id: n, className: r })
            );
        },
        ea = function (e) {
            var n = e.id,
                r = e.className;
            return et(), t.createElement("div", { id: n, className: r });
        },
        es = J ? ea : ei,
        eo = function () {
            return $("calls useStripe()").stripe;
        },
        el = X("auBankAccount", J),
        eu = X("card", J),
        ec = X("cardNumber", J),
        ed = X("cardExpiry", J),
        e_ = X("cardCvc", J),
        ef = X("fpxBank", J),
        ep = X("iban", J),
        eh = X("idealBank", J),
        em = X("p24Bank", J),
        eg = X("epsBank", J),
        eE = X("payment", J),
        eA = X("expressCheckout", J),
        eI = X("currencySelector", J),
        eT = X("paymentRequestButton", J),
        ey = X("linkAuthentication", J),
        eS = X("address", J),
        ev = X("shippingAddress", J),
        eC = X("paymentMethodMessaging", J),
        eb = X("affirmMessage", J),
        eN = X("afterpayClearpayMessage", J);
    (e.AddressElement = eS),
        (e.AffirmMessageElement = eb),
        (e.AfterpayClearpayMessageElement = eN),
        (e.AuBankAccountElement = el),
        (e.CardCvcElement = e_),
        (e.CardElement = eu),
        (e.CardExpiryElement = ed),
        (e.CardNumberElement = ec),
        (e.CheckoutProvider = K),
        (e.CurrencySelectorElement = eI),
        (e.Elements = k),
        (e.ElementsConsumer = V),
        (e.EmbeddedCheckout = es),
        (e.EmbeddedCheckoutProvider = er),
        (e.EpsBankElement = eg),
        (e.ExpressCheckoutElement = eA),
        (e.FpxBankElement = ef),
        (e.IbanElement = ep),
        (e.IdealBankElement = eh),
        (e.LinkAuthenticationElement = ey),
        (e.P24BankElement = em),
        (e.PaymentElement = eE),
        (e.PaymentMethodMessagingElement = eC),
        (e.PaymentRequestButtonElement = eT),
        (e.ShippingAddressElement = ev),
        (e.useCheckout = q),
        (e.useElements = G),
        (e.useStripe = eo);
});
