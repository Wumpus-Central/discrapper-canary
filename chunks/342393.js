!(function (e) {
    e(t, n(64700));
})(function (e, t) {
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
                      s(e, t, r[t]);
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
    function s(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = n),
            e
        );
    }
    function a(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            s = Object.keys(e);
        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
    }
    function o(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = a(e, t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (r = 0; r < s.length; r++)
                (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
            var s = [],
                a = !0,
                o = !1;
            try {
                for (i = i.call(e); !(a = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t); a = !0);
            } catch (e) {
                (o = !0), (r = e);
            } finally {
                try {
                    a || null == i.return || i.return();
                } finally {
                    if (o) throw r;
                }
            }
            return s;
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
        E,
        g,
        A = { exports: {} };
    function I() {
        return m ? h : ((m = 1), (h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
    }
    A.exports = (function () {
        if (g) return E;
        g = 1;
        var e = I();
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (E = function () {
                function r(t, n, r, i, s, a) {
                    if (a !== e) {
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
                var s = {
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
                return (s.PropTypes = s), s;
            })
        );
    })()();
    var T = p(A.exports),
        S = function (e, n, r) {
            var i = !!r,
                s = t.useRef(r);
            t.useEffect(
                function () {
                    s.current = r;
                },
                [r],
            ),
                t.useEffect(
                    function () {
                        if (!i || !e) return function () {};
                        var t = function () {
                            s.current && s.current.apply(s, arguments);
                        };
                        return (
                            e.on(n, t),
                            function () {
                                e.off(n, t);
                            }
                        );
                    },
                    [i, n, e, s],
                );
        },
        y = function (e) {
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
        N = function (e) {
            return v(e) && "function" == typeof e.then;
        },
        C = function (e) {
            return (
                v(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment
            );
        },
        R = "[object Object]",
        O = function e(t, n) {
            if (!v(t) || !v(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === R;
            if (i !== (Object.prototype.toString.call(n) === R)) return !1;
            if (!i && !r) return t === n;
            var s = Object.keys(t),
                a = Object.keys(n);
            if (s.length !== a.length) return !1;
            for (var o = {}, l = 0; l < s.length; l += 1) o[s[l]] = !0;
            for (var u = 0; u < a.length; u += 1) o[a[u]] = !0;
            var c = Object.keys(o);
            if (c.length !== s.length) return !1;
            var d = t,
                _ = n,
                f = function (t) {
                    return e(d[t], _[t]);
                };
            return c.every(f);
        },
        b = function (e, t, n) {
            return v(e)
                ? Object.keys(e).reduce(function (i, a) {
                      var o = !v(t) || !O(e[a], t[a]);
                      return n.includes(a)
                          ? (o &&
                                console.warn(
                                    "Unsupported prop change: options.".concat(a, " is not a mutable property."),
                                ),
                            i)
                          : o
                            ? r(r({}, i || {}), {}, s({}, a, e[a]))
                            : i;
                  }, null)
                : null;
        },
        D =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        L = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (null === e || C(e)) return e;
            throw Error(t);
        },
        w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : D;
            if (N(e))
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return L(e, t);
                    }),
                };
            var n = L(e, t);
            return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
        },
        M = function (e) {
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
    var x = function (e, t) {
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
                s = t.useMemo(
                    function () {
                        return w(n);
                    },
                    [n],
                ),
                a = l(
                    t.useState(function () {
                        return {
                            stripe: "sync" === s.tag ? s.stripe : null,
                            elements: "sync" === s.tag ? s.stripe.elements(r) : null,
                        };
                    }),
                    2,
                ),
                o = a[0],
                u = a[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            u(function (t) {
                                return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                            });
                        };
                    return (
                        "async" !== s.tag || o.stripe
                            ? "sync" !== s.tag || o.stripe || t(s.stripe)
                            : s.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [s, o, r],
            );
            var c = y(n);
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
            var d = y(r);
            return (
                t.useEffect(
                    function () {
                        if (o.elements) {
                            var e = b(r, d, ["clientSecret", "fonts"]);
                            e && o.elements.update(e);
                        }
                    },
                    [r, d, o.elements],
                ),
                t.useEffect(
                    function () {
                        M(o.stripe);
                    },
                    [o.stripe],
                ),
                t.createElement(P.Provider, { value: o }, i)
            );
        };
    k.propTypes = { stripe: T.any, options: T.object };
    var U = function (e) {
            return x(t.useContext(P), e);
        },
        G = function () {
            return U("calls useElements()").elements;
        },
        F = function (e) {
            return (0, e.children)(U("mounts <ElementsConsumer>"));
        };
    F.propTypes = { children: T.func.isRequired };
    var V = ["on", "session"],
        B = t.createContext(null);
    B.displayName = "CheckoutSdkContext";
    var H = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        j = t.createContext(null);
    j.displayName = "CheckoutContext";
    var Y = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = o(e, V);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        W =
            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        K = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                s = t.useMemo(
                    function () {
                        return w(n, W);
                    },
                    [n],
                ),
                a = l(t.useState(null), 2),
                o = a[0],
                u = a[1],
                c = l(
                    t.useState(function () {
                        return { stripe: "sync" === s.tag ? s.stripe : null, checkoutSdk: null };
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
                        "async" !== s.tag || d.stripe
                            ? "sync" === s.tag &&
                              s.stripe &&
                              !p.current &&
                              ((p.current = !0),
                              s.stripe.initCheckout(r).then(function (e) {
                                  e && (f(s.stripe, e), e.on("change", u));
                              }))
                            : s.stripePromise.then(function (t) {
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
                [s, d, r, u],
            );
            var h = y(n);
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
            var m = y(r),
                E = y(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == m || null == (e = m.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            s = !O(i, n),
                            a = !E && d.checkoutSdk;
                        i && (s || a) && d.checkoutSdk.changeAppearance(i);
                    }
                },
                [r, m, d.checkoutSdk, E],
            ),
                t.useEffect(
                    function () {
                        M(d.stripe);
                    },
                    [d.stripe],
                );
            var g = t.useMemo(
                function () {
                    return Y(d.checkoutSdk, o);
                },
                [d.checkoutSdk, o],
            );
            return d.checkoutSdk
                ? t.createElement(B.Provider, { value: d }, t.createElement(j.Provider, { value: g }, i))
                : null;
        };
    K.propTypes = {
        stripe: T.any,
        options: T.shape({ fetchClientSecret: T.func.isRequired, elementsOptions: T.object }).isRequired,
    };
    var $ = function (e) {
            return H(t.useContext(B), e);
        },
        z = function (e) {
            var n = t.useContext(B),
                r = t.useContext(P);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? H(n, e) : x(r, e);
        },
        q = function () {
            $("calls useCheckout()");
            var e = t.useContext(j);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        },
        Z = ["mode"],
        X = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        Q = function (e, n) {
            var r = "".concat(X(e), "Element"),
                i = function (n) {
                    var i,
                        s = n.id,
                        a = n.className,
                        u = n.options,
                        c = void 0 === u ? {} : u,
                        d = n.onBlur,
                        _ = n.onFocus,
                        f = n.onReady,
                        p = n.onChange,
                        h = n.onEscape,
                        m = n.onClick,
                        E = n.onLoadError,
                        g = n.onLoaderStart,
                        A = n.onNetworksChange,
                        I = n.onConfirm,
                        T = n.onCancel,
                        v = n.onShippingAddressChange,
                        N = n.onShippingRateChange,
                        C = z("mounts <".concat(r, ">")),
                        R = "elements" in C ? C.elements : null,
                        O = "checkoutSdk" in C ? C.checkoutSdk : null,
                        D = l(t.useState(null), 2),
                        L = D[0],
                        w = D[1],
                        M = t.useRef(null),
                        P = t.useRef(null);
                    S(L, "blur", d),
                        S(L, "focus", _),
                        S(L, "escape", h),
                        S(L, "click", m),
                        S(L, "loaderror", E),
                        S(L, "loaderstart", g),
                        S(L, "networkschange", A),
                        S(L, "confirm", I),
                        S(L, "cancel", T),
                        S(L, "shippingaddresschange", v),
                        S(L, "shippingratechange", N),
                        S(L, "change", p),
                        f &&
                            (i =
                                "expressCheckout" === e
                                    ? f
                                    : function () {
                                          f(L);
                                      }),
                        S(L, "ready", i),
                        t.useLayoutEffect(
                            function () {
                                if (null === M.current && null !== P.current && (R || O)) {
                                    var t = null;
                                    if (O)
                                        switch (e) {
                                            case "payment":
                                                t = O.createPaymentElement(c);
                                                break;
                                            case "address":
                                                if ("mode" in c) {
                                                    var n = c.mode,
                                                        i = o(c, Z);
                                                    if ("shipping" === n) t = O.createShippingAddressElement(i);
                                                    else if ("billing" === n) t = O.createBillingAddressElement(i);
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
                                                t = O.createExpressCheckoutElement(c);
                                                break;
                                            case "currencySelector":
                                                t = O.createCurrencySelectorElement();
                                                break;
                                            default:
                                                throw Error(
                                                    "Invalid Element type ".concat(
                                                        r,
                                                        ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                    ),
                                                );
                                        }
                                    else R && (t = R.create(e, c));
                                    (M.current = t), w(t), t && t.mount(P.current);
                                }
                            },
                            [R, O, c],
                        );
                    var x = y(c);
                    return (
                        t.useEffect(
                            function () {
                                if (M.current) {
                                    var e = b(c, x, ["paymentRequest"]);
                                    e && "update" in M.current && M.current.update(e);
                                }
                            },
                            [c, x],
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (M.current && "function" == typeof M.current.destroy)
                                    try {
                                        M.current.destroy(), (M.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement("div", { id: s, className: a, ref: P })
                    );
                },
                s = function (e) {
                    z("mounts <".concat(r, ">"));
                    var n = e.id,
                        i = e.className;
                    return t.createElement("div", { id: n, className: i });
                },
                a = n ? s : i;
            return (
                (a.propTypes = {
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
                (a.displayName = r),
                (a.__elementType = e),
                a
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
                s = t.useMemo(
                    function () {
                        return w(n, en);
                    },
                    [n],
                ),
                a = t.useRef(null),
                o = t.useRef(null),
                u = l(t.useState({ embeddedCheckout: null }), 2),
                c = u[0],
                d = u[1];
            t.useEffect(
                function () {
                    if (!o.current && !a.current) {
                        var e = function (e) {
                            o.current ||
                                a.current ||
                                ((o.current = e),
                                (a.current = o.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        "async" === s.tag && !o.current && (r.clientSecret || r.fetchClientSecret)
                            ? s.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === s.tag && !o.current && (r.clientSecret || r.fetchClientSecret) && e(s.stripe);
                    }
                },
                [s, r, c, o],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            c.embeddedCheckout
                                ? ((a.current = null), c.embeddedCheckout.destroy())
                                : a.current &&
                                  a.current.then(function () {
                                      (a.current = null), c.embeddedCheckout && c.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [c.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        M(o);
                    },
                    [o],
                );
            var _ = y(n);
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
            var f = y(r);
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
                s = t.useRef(!1),
                a = t.useRef(null);
            return (
                t.useLayoutEffect(
                    function () {
                        return (
                            !s.current && i && null !== a.current && (i.mount(a.current), (s.current = !0)),
                            function () {
                                if (s.current && i)
                                    try {
                                        i.unmount(), (s.current = !1);
                                    } catch (e) {}
                            }
                        );
                    },
                    [i],
                ),
                t.createElement("div", { ref: a, id: n, className: r })
            );
        },
        es = function (e) {
            var n = e.id,
                r = e.className;
            return et(), t.createElement("div", { id: n, className: r });
        },
        ea = J ? es : ei,
        eo = function () {
            return z("calls useStripe()").stripe;
        },
        el = Q("auBankAccount", J),
        eu = Q("card", J),
        ec = Q("cardNumber", J),
        ed = Q("cardExpiry", J),
        e_ = Q("cardCvc", J),
        ef = Q("fpxBank", J),
        ep = Q("iban", J),
        eh = Q("idealBank", J),
        em = Q("p24Bank", J),
        eE = Q("epsBank", J),
        eg = Q("payment", J),
        eA = Q("expressCheckout", J),
        eI = Q("currencySelector", J),
        eT = Q("paymentRequestButton", J),
        eS = Q("linkAuthentication", J),
        ey = Q("address", J),
        ev = Q("shippingAddress", J),
        eN = Q("paymentMethodMessaging", J),
        eC = Q("affirmMessage", J),
        eR = Q("afterpayClearpayMessage", J);
    (e.AddressElement = ey),
        (e.AffirmMessageElement = eC),
        (e.AfterpayClearpayMessageElement = eR),
        (e.AuBankAccountElement = el),
        (e.CardCvcElement = e_),
        (e.CardElement = eu),
        (e.CardExpiryElement = ed),
        (e.CardNumberElement = ec),
        (e.CheckoutProvider = K),
        (e.CurrencySelectorElement = eI),
        (e.Elements = k),
        (e.ElementsConsumer = F),
        (e.EmbeddedCheckout = ea),
        (e.EmbeddedCheckoutProvider = er),
        (e.EpsBankElement = eE),
        (e.ExpressCheckoutElement = eA),
        (e.FpxBankElement = ef),
        (e.IbanElement = ep),
        (e.IdealBankElement = eh),
        (e.LinkAuthenticationElement = eS),
        (e.P24BankElement = em),
        (e.PaymentElement = eg),
        (e.PaymentMethodMessagingElement = eN),
        (e.PaymentRequestButtonElement = eT),
        (e.ShippingAddressElement = ev),
        (e.useCheckout = q),
        (e.useElements = G),
        (e.useStripe = eo);
});
