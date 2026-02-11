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
    function h(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
    }
    var p,
        g,
        E,
        A,
        I = { exports: {} };
    function T() {
        return g ? p : ((g = 1), (p = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
    }
    I.exports = (function () {
        if (A) return E;
        A = 1;
        var e = T();
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (E = function () {
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
    var y = h(I.exports),
        S = function (e, n, r) {
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
        v = function (e) {
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
        C = function (e) {
            return null !== e && "object" === i(e);
        },
        b = function (e) {
            return C(e) && "function" == typeof e.then;
        },
        N = function (e) {
            return (
                C(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment
            );
        },
        R = "[object Object]",
        O = function e(t, n) {
            if (!C(t) || !C(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === R;
            if (i !== (Object.prototype.toString.call(n) === R)) return !1;
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
        D = function (e, t, n) {
            return C(e)
                ? Object.keys(e).reduce(function (i, s) {
                      var o = !C(t) || !O(e[s], t[s]);
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
        L =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
            if (null === e || N(e)) return e;
            throw Error(t);
        },
        x = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
            if (b(e))
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return w(e, t);
                    }),
                };
            var n = w(e, t);
            return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
        },
        P = function (e) {
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
        M = t.createContext(null);
    M.displayName = "ElementsContext";
    var k = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find Elements context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <Elements> provider.",
                    ),
                );
            return e;
        },
        U = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return x(n);
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
            var c = v(n);
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
            var d = v(r);
            return (
                t.useEffect(
                    function () {
                        if (o.elements) {
                            var e = D(r, d, ["clientSecret", "fonts"]);
                            e && o.elements.update(e);
                        }
                    },
                    [r, d, o.elements],
                ),
                t.useEffect(
                    function () {
                        P(o.stripe);
                    },
                    [o.stripe],
                ),
                t.createElement(M.Provider, { value: o }, i)
            );
        };
    U.propTypes = { stripe: y.any, options: y.object };
    var G = function (e) {
            return k(t.useContext(M), e);
        },
        F = function () {
            return G("calls useElements()").elements;
        },
        V = function (e) {
            return (0, e.children)(G("mounts <ElementsConsumer>"));
        };
    V.propTypes = { children: y.func.isRequired };
    var B = ["on", "session"],
        j = t.createContext(null);
    j.displayName = "CheckoutSdkContext";
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
        Y = t.createContext(null);
    Y.displayName = "CheckoutContext";
    var W = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = o(e, B);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        K =
            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        $ = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return x(n, K);
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
                h = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        "async" !== a.tag || d.stripe
                            ? "sync" === a.tag &&
                              a.stripe &&
                              !h.current &&
                              ((h.current = !0),
                              a.stripe.initCheckout(r).then(function (e) {
                                  e && (f(a.stripe, e), e.on("change", u));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !h.current &&
                                      ((h.current = !0),
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
            var p = v(n);
            t.useEffect(
                function () {
                    null !== p &&
                        p !== n &&
                        console.warn(
                            "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [p, n],
            );
            var g = v(r),
                E = v(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == g || null == (e = g.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            a = !O(i, n),
                            s = !E && d.checkoutSdk;
                        i && (a || s) && d.checkoutSdk.changeAppearance(i);
                    }
                },
                [r, g, d.checkoutSdk, E],
            ),
                t.useEffect(
                    function () {
                        P(d.stripe);
                    },
                    [d.stripe],
                );
            var A = t.useMemo(
                function () {
                    return W(d.checkoutSdk, o);
                },
                [d.checkoutSdk, o],
            );
            return d.checkoutSdk
                ? t.createElement(j.Provider, { value: d }, t.createElement(Y.Provider, { value: A }, i))
                : null;
        };
    $.propTypes = {
        stripe: y.any,
        options: y.shape({ fetchClientSecret: y.func.isRequired, elementsOptions: y.object }).isRequired,
    };
    var z = function (e) {
            return H(t.useContext(j), e);
        },
        q = function (e) {
            var n = t.useContext(j),
                r = t.useContext(M);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? H(n, e) : k(r, e);
        },
        X = function () {
            z("calls useCheckout()");
            var e = t.useContext(Y);
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
        J = function (e, n) {
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
                        h = n.onChange,
                        p = n.onEscape,
                        g = n.onClick,
                        E = n.onLoadError,
                        A = n.onLoaderStart,
                        I = n.onNetworksChange,
                        T = n.onConfirm,
                        y = n.onCancel,
                        C = n.onShippingAddressChange,
                        b = n.onShippingRateChange,
                        N = q("mounts <".concat(r, ">")),
                        R = "elements" in N ? N.elements : null,
                        O = "checkoutSdk" in N ? N.checkoutSdk : null,
                        L = l(t.useState(null), 2),
                        w = L[0],
                        x = L[1],
                        P = t.useRef(null),
                        M = t.useRef(null);
                    S(w, "blur", d),
                        S(w, "focus", _),
                        S(w, "escape", p),
                        S(w, "click", g),
                        S(w, "loaderror", E),
                        S(w, "loaderstart", A),
                        S(w, "networkschange", I),
                        S(w, "confirm", T),
                        S(w, "cancel", y),
                        S(w, "shippingaddresschange", C),
                        S(w, "shippingratechange", b),
                        S(w, "change", h),
                        f &&
                            (i =
                                "expressCheckout" === e
                                    ? f
                                    : function () {
                                          f(w);
                                      }),
                        S(w, "ready", i),
                        t.useLayoutEffect(
                            function () {
                                if (null === P.current && null !== M.current && (R || O)) {
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
                                    (P.current = t), x(t), t && t.mount(M.current);
                                }
                            },
                            [R, O, c],
                        );
                    var k = v(c);
                    return (
                        t.useEffect(
                            function () {
                                if (P.current) {
                                    var e = D(c, k, ["paymentRequest"]);
                                    e && "update" in P.current && P.current.update(e);
                                }
                            },
                            [c, k],
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (P.current && "function" == typeof P.current.destroy)
                                    try {
                                        P.current.destroy(), (P.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement("div", { id: a, className: s, ref: M })
                    );
                },
                a = function (e) {
                    q("mounts <".concat(r, ">"));
                    var n = e.id,
                        i = e.className;
                    return t.createElement("div", { id: n, className: i });
                },
                s = n ? a : i;
            return (
                (s.propTypes = {
                    id: y.string,
                    className: y.string,
                    onChange: y.func,
                    onBlur: y.func,
                    onFocus: y.func,
                    onReady: y.func,
                    onEscape: y.func,
                    onClick: y.func,
                    onLoadError: y.func,
                    onLoaderStart: y.func,
                    onNetworksChange: y.func,
                    onConfirm: y.func,
                    onCancel: y.func,
                    onShippingAddressChange: y.func,
                    onShippingRateChange: y.func,
                    options: y.object,
                }),
                (s.displayName = r),
                (s.__elementType = e),
                s
            );
        },
        ee = "u" < typeof window,
        et = t.createContext(null);
    et.displayName = "EmbeddedCheckoutProviderContext";
    var en = function () {
            var e = t.useContext(et);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e;
        },
        er =
            "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        ei = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return x(n, er);
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
                        P(o);
                    },
                    [o],
                );
            var _ = v(n);
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
            var f = v(r);
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
                t.createElement(et.Provider, { value: c }, i)
            );
        },
        ea = function (e) {
            var n = e.id,
                r = e.className,
                i = en().embeddedCheckout,
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
        es = function (e) {
            var n = e.id,
                r = e.className;
            return en(), t.createElement("div", { id: n, className: r });
        },
        eo = ee ? es : ea,
        el = function () {
            return q("calls useStripe()").stripe;
        },
        eu = J("auBankAccount", ee),
        ec = J("card", ee),
        ed = J("cardNumber", ee),
        e_ = J("cardExpiry", ee),
        ef = J("cardCvc", ee),
        eh = J("fpxBank", ee),
        ep = J("iban", ee),
        em = J("idealBank", ee),
        eg = J("p24Bank", ee),
        eE = J("epsBank", ee),
        eA = J("payment", ee),
        eI = J("expressCheckout", ee),
        eT = J("currencySelector", ee),
        ey = J("paymentRequestButton", ee),
        eS = J("linkAuthentication", ee),
        ev = J("address", ee),
        eC = J("shippingAddress", ee),
        eb = J("paymentMethodMessaging", ee),
        eN = J("affirmMessage", ee),
        eR = J("afterpayClearpayMessage", ee);
    (e.AddressElement = ev),
        (e.AffirmMessageElement = eN),
        (e.AfterpayClearpayMessageElement = eR),
        (e.AuBankAccountElement = eu),
        (e.CardCvcElement = ef),
        (e.CardElement = ec),
        (e.CardExpiryElement = e_),
        (e.CardNumberElement = ed),
        (e.CheckoutProvider = $),
        (e.CurrencySelectorElement = eT),
        (e.Elements = U),
        (e.ElementsConsumer = V),
        (e.EmbeddedCheckout = eo),
        (e.EmbeddedCheckoutProvider = ei),
        (e.EpsBankElement = eE),
        (e.ExpressCheckoutElement = eI),
        (e.FpxBankElement = eh),
        (e.IbanElement = ep),
        (e.IdealBankElement = em),
        (e.LinkAuthenticationElement = eS),
        (e.P24BankElement = eg),
        (e.PaymentElement = eA),
        (e.PaymentMethodMessagingElement = eb),
        (e.PaymentRequestButtonElement = ey),
        (e.ShippingAddressElement = eC),
        (e.useCheckout = X),
        (e.useElements = F),
        (e.useStripe = el);
});
