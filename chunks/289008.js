!(function (e, r) {
    r(t, n(647438));
})(0, function (e, t) {
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
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n),
            e
        );
    }
    function o(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
    }
    function s(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = o(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
        return i;
    }
    function l(e, t) {
        return c(e) || u(e, t) || d(e, t) || _();
    }
    function c(e) {
        if (Array.isArray(e)) return e;
    }
    function u(e, t) {
        var n,
            r,
            i = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
        if (null != i) {
            var a = [],
                o = !0,
                s = !1;
            try {
                for (i = i.call(e); !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t); o = !0);
            } catch (e) {
                (s = !0), (r = e);
            } finally {
                try {
                    o || null == i.return || i.return();
                } finally {
                    if (s) throw r;
                }
            }
            return a;
        }
    }
    function d(e, t) {
        if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
        }
    }
    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function _() {
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
        b = { exports: {} };
    function y() {
        return m ? h : ((m = 1), (h = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
    }
    b.exports = (function () {
        if (E) return g;
        E = 1;
        var e = y();
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (g = function () {
                function r(t, n, r, i, a, o) {
                    if (o !== e) {
                        var s = Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                        );
                        throw ((s.name = "Invariant Violation"), s);
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
    var O = p(b.exports),
        v = function (e, n, r) {
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
        I = function (e) {
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
        T = function (e) {
            return null !== e && "object" === i(e);
        },
        S = function (e) {
            return T(e) && "function" == typeof e.then;
        },
        A = function (e) {
            return (
                T(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment
            );
        },
        C = "[object Object]",
        N = function e(t, n) {
            if (!T(t) || !T(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === C;
            if (i !== (Object.prototype.toString.call(n) === C)) return !1;
            if (!i && !r) return t === n;
            var a = Object.keys(t),
                o = Object.keys(n);
            if (a.length !== o.length) return !1;
            for (var s = {}, l = 0; l < a.length; l += 1) s[a[l]] = !0;
            for (var c = 0; c < o.length; c += 1) s[o[c]] = !0;
            var u = Object.keys(s);
            if (u.length !== a.length) return !1;
            var d = t,
                f = n,
                _ = function (t) {
                    return e(d[t], f[t]);
                };
            return u.every(_);
        },
        R = function (e, t, n) {
            return T(e)
                ? Object.keys(e).reduce(function (i, o) {
                      var s = !T(t) || !N(e[o], t[o]);
                      return n.includes(o)
                          ? (s &&
                                console.warn(
                                    "Unsupported prop change: options.".concat(o, " is not a mutable property."),
                                ),
                            i)
                          : s
                            ? r(r({}, i || {}), {}, a({}, o, e[o]))
                            : i;
                  }, null)
                : null;
        },
        P =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
            if (null === e || A(e)) return e;
            throw Error(t);
        },
        w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
            if (S(e))
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return D(e, t);
                    }),
                };
            var n = D(e, t);
            return null === n
                ? { tag: "empty" }
                : {
                      tag: "sync",
                      stripe: n,
                  };
        },
        x = function (e) {
            e &&
                e._registerWrapper &&
                e.registerAppInfo &&
                (e._registerWrapper({
                    name: "react-stripe-js",
                    version: "3.7.0",
                }),
                e.registerAppInfo({
                    name: "react-stripe-js",
                    version: "3.7.0",
                    url: "https://stripe.com/docs/stripe-js/react",
                }));
        },
        L = t.createContext(null);
    L.displayName = "ElementsContext";
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
        j = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return w(n);
                    },
                    [n],
                ),
                o = l(
                    t.useState(function () {
                        return {
                            stripe: "sync" === a.tag ? a.stripe : null,
                            elements: "sync" === a.tag ? a.stripe.elements(r) : null,
                        };
                    }),
                    2,
                ),
                s = o[0],
                c = o[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            c(function (t) {
                                return t.stripe
                                    ? t
                                    : {
                                          stripe: e,
                                          elements: e.elements(r),
                                      };
                            });
                        };
                    return (
                        "async" !== a.tag || s.stripe
                            ? "sync" !== a.tag || s.stripe || t(a.stripe)
                            : a.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, s, r],
            );
            var u = I(n);
            t.useEffect(
                function () {
                    null !== u &&
                        u !== n &&
                        console.warn(
                            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [u, n],
            );
            var d = I(r);
            return (
                t.useEffect(
                    function () {
                        if (s.elements) {
                            var e = R(r, d, ["clientSecret", "fonts"]);
                            e && s.elements.update(e);
                        }
                    },
                    [r, d, s.elements],
                ),
                t.useEffect(
                    function () {
                        x(s.stripe);
                    },
                    [s.stripe],
                ),
                t.createElement(L.Provider, { value: s }, i)
            );
        };
    j.propTypes = {
        stripe: O.any,
        options: O.object,
    };
    var k = function (e) {
            return M(t.useContext(L), e);
        },
        U = function () {
            return k("calls useElements()").elements;
        },
        G = function (e) {
            return (0, e.children)(k("mounts <ElementsConsumer>"));
        };
    G.propTypes = { children: O.func.isRequired };
    var B = ["on", "session"],
        Z = t.createContext(null);
    Z.displayName = "CheckoutSdkContext";
    var F = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        V = t.createContext(null);
    V.displayName = "CheckoutContext";
    var H = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = s(e, B);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        Y =
            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        W = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return w(n, Y);
                    },
                    [n],
                ),
                o = l(t.useState(null), 2),
                s = o[0],
                c = o[1],
                u = l(
                    t.useState(function () {
                        return {
                            stripe: "sync" === a.tag ? a.stripe : null,
                            checkoutSdk: null,
                        };
                    }),
                    2,
                ),
                d = u[0],
                f = u[1],
                _ = function (e, t) {
                    f(function (n) {
                        return n.stripe && n.checkoutSdk
                            ? n
                            : {
                                  stripe: e,
                                  checkoutSdk: t,
                              };
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
                                  e && (_(a.stripe, e), e.on("change", c));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !p.current &&
                                      ((p.current = !0),
                                      t.initCheckout(r).then(function (e) {
                                          e && (_(t, e), e.on("change", c));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, d, r, c],
            );
            var h = I(n);
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
            var m = I(r),
                g = I(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == m || null == (e = m.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            a = !N(i, n),
                            o = !g && d.checkoutSdk;
                        i && (a || o) && d.checkoutSdk.changeAppearance(i);
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
                    return H(d.checkoutSdk, s);
                },
                [d.checkoutSdk, s],
            );
            return d.checkoutSdk
                ? t.createElement(Z.Provider, { value: d }, t.createElement(V.Provider, { value: E }, i))
                : null;
        };
    W.propTypes = {
        stripe: O.any,
        options: O.shape({
            fetchClientSecret: O.func.isRequired,
            elementsOptions: O.object,
        }).isRequired,
    };
    var K = function (e) {
            return F(t.useContext(Z), e);
        },
        z = function (e) {
            var n = t.useContext(Z),
                r = t.useContext(L);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? F(n, e) : M(r, e);
        },
        q = function () {
            K("calls useCheckout()");
            var e = t.useContext(V);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        },
        X = ["mode"],
        Q = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        J = function (e, n) {
            var r = "".concat(Q(e), "Element"),
                i = function (n) {
                    var i,
                        a = n.id,
                        o = n.className,
                        c = n.options,
                        u = void 0 === c ? {} : c,
                        d = n.onBlur,
                        f = n.onFocus,
                        _ = n.onReady,
                        p = n.onChange,
                        h = n.onEscape,
                        m = n.onClick,
                        g = n.onLoadError,
                        E = n.onLoaderStart,
                        b = n.onNetworksChange,
                        y = n.onConfirm,
                        O = n.onCancel,
                        T = n.onShippingAddressChange,
                        S = n.onShippingRateChange,
                        A = z("mounts <".concat(r, ">")),
                        C = "elements" in A ? A.elements : null,
                        N = "checkoutSdk" in A ? A.checkoutSdk : null,
                        P = l(t.useState(null), 2),
                        D = P[0],
                        w = P[1],
                        x = t.useRef(null),
                        L = t.useRef(null);
                    v(D, "blur", d),
                        v(D, "focus", f),
                        v(D, "escape", h),
                        v(D, "click", m),
                        v(D, "loaderror", g),
                        v(D, "loaderstart", E),
                        v(D, "networkschange", b),
                        v(D, "confirm", y),
                        v(D, "cancel", O),
                        v(D, "shippingaddresschange", T),
                        v(D, "shippingratechange", S),
                        v(D, "change", p),
                        _ &&
                            (i =
                                "expressCheckout" === e
                                    ? _
                                    : function () {
                                          _(D);
                                      }),
                        v(D, "ready", i),
                        t.useLayoutEffect(
                            function () {
                                if (null === x.current && null !== L.current && (C || N)) {
                                    var t = null;
                                    if (N)
                                        switch (e) {
                                            case "payment":
                                                t = N.createPaymentElement(u);
                                                break;
                                            case "address":
                                                if ("mode" in u) {
                                                    var n = u.mode,
                                                        i = s(u, X);
                                                    if ("shipping" === n) t = N.createShippingAddressElement(i);
                                                    else if ("billing" === n) t = N.createBillingAddressElement(i);
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
                                                t = N.createExpressCheckoutElement(u);
                                                break;
                                            case "currencySelector":
                                                t = N.createCurrencySelectorElement();
                                                break;
                                            default:
                                                throw Error(
                                                    "Invalid Element type ".concat(
                                                        r,
                                                        ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                    ),
                                                );
                                        }
                                    else C && (t = C.create(e, u));
                                    (x.current = t), w(t), t && t.mount(L.current);
                                }
                            },
                            [C, N, u],
                        );
                    var M = I(u);
                    return (
                        t.useEffect(
                            function () {
                                if (x.current) {
                                    var e = R(u, M, ["paymentRequest"]);
                                    e && "update" in x.current && x.current.update(e);
                                }
                            },
                            [u, M],
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (x.current && "function" == typeof x.current.destroy)
                                    try {
                                        x.current.destroy(), (x.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement("div", {
                            id: a,
                            className: o,
                            ref: L,
                        })
                    );
                },
                a = function (e) {
                    z("mounts <".concat(r, ">"));
                    var n = e.id,
                        i = e.className;
                    return t.createElement("div", {
                        id: n,
                        className: i,
                    });
                },
                o = n ? a : i;
            return (
                (o.propTypes = {
                    id: O.string,
                    className: O.string,
                    onChange: O.func,
                    onBlur: O.func,
                    onFocus: O.func,
                    onReady: O.func,
                    onEscape: O.func,
                    onClick: O.func,
                    onLoadError: O.func,
                    onLoaderStart: O.func,
                    onNetworksChange: O.func,
                    onConfirm: O.func,
                    onCancel: O.func,
                    onShippingAddressChange: O.func,
                    onShippingRateChange: O.func,
                    options: O.object,
                }),
                (o.displayName = r),
                (o.__elementType = e),
                o
            );
        },
        $ = "undefined" == typeof window,
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
                o = t.useRef(null),
                s = t.useRef(null),
                c = l(t.useState({ embeddedCheckout: null }), 2),
                u = c[0],
                d = c[1];
            t.useEffect(
                function () {
                    if (!s.current && !o.current) {
                        var e = function (e) {
                            s.current ||
                                o.current ||
                                ((s.current = e),
                                (o.current = s.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        "async" === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret)
                            ? a.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === a.tag && !s.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
                    }
                },
                [a, r, u, s],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            u.embeddedCheckout
                                ? ((o.current = null), u.embeddedCheckout.destroy())
                                : o.current &&
                                  o.current.then(function () {
                                      (o.current = null), u.embeddedCheckout && u.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [u.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        x(s);
                    },
                    [s],
                );
            var f = I(n);
            t.useEffect(
                function () {
                    null !== f &&
                        f !== n &&
                        console.warn(
                            "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [f, n],
            );
            var _ = I(r);
            return (
                t.useEffect(
                    function () {
                        if (null != _) {
                            if (null == r)
                                return void console.warn(
                                    "Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.",
                                );
                            void 0 === r.clientSecret &&
                                void 0 === r.fetchClientSecret &&
                                console.warn(
                                    "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                                ),
                                null != _.clientSecret &&
                                    r.clientSecret !== _.clientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != _.fetchClientSecret &&
                                    r.fetchClientSecret !== _.fetchClientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != _.onComplete &&
                                    r.onComplete !== _.onComplete &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.",
                                    ),
                                null != _.onShippingDetailsChange &&
                                    r.onShippingDetailsChange !== _.onShippingDetailsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.",
                                    ),
                                null != _.onLineItemsChange &&
                                    r.onLineItemsChange !== _.onLineItemsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.",
                                    );
                        }
                    },
                    [_, r],
                ),
                t.createElement(ee.Provider, { value: u }, i)
            );
        },
        ei = function (e) {
            var n = e.id,
                r = e.className,
                i = et().embeddedCheckout,
                a = t.useRef(!1),
                o = t.useRef(null);
            return (
                t.useLayoutEffect(
                    function () {
                        return (
                            !a.current && i && null !== o.current && (i.mount(o.current), (a.current = !0)),
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
                t.createElement("div", {
                    ref: o,
                    id: n,
                    className: r,
                })
            );
        },
        ea = function (e) {
            var n = e.id,
                r = e.className;
            return (
                et(),
                t.createElement("div", {
                    id: n,
                    className: r,
                })
            );
        },
        eo = $ ? ea : ei,
        es = function () {
            return z("calls useStripe()").stripe;
        },
        el = J("auBankAccount", $),
        ec = J("card", $),
        eu = J("cardNumber", $),
        ed = J("cardExpiry", $),
        ef = J("cardCvc", $),
        e_ = J("fpxBank", $),
        ep = J("iban", $),
        eh = J("idealBank", $),
        em = J("p24Bank", $),
        eg = J("epsBank", $),
        eE = J("payment", $),
        eb = J("expressCheckout", $),
        ey = J("currencySelector", $),
        eO = J("paymentRequestButton", $),
        ev = J("linkAuthentication", $),
        eI = J("address", $),
        eT = J("shippingAddress", $),
        eS = J("paymentMethodMessaging", $),
        eA = J("affirmMessage", $),
        eC = J("afterpayClearpayMessage", $);
    (e.AddressElement = eI),
        (e.AffirmMessageElement = eA),
        (e.AfterpayClearpayMessageElement = eC),
        (e.AuBankAccountElement = el),
        (e.CardCvcElement = ef),
        (e.CardElement = ec),
        (e.CardExpiryElement = ed),
        (e.CardNumberElement = eu),
        (e.CheckoutProvider = W),
        (e.CurrencySelectorElement = ey),
        (e.Elements = j),
        (e.ElementsConsumer = G),
        (e.EmbeddedCheckout = eo),
        (e.EmbeddedCheckoutProvider = er),
        (e.EpsBankElement = eg),
        (e.ExpressCheckoutElement = eb),
        (e.FpxBankElement = e_),
        (e.IbanElement = ep),
        (e.IdealBankElement = eh),
        (e.LinkAuthenticationElement = ev),
        (e.P24BankElement = em),
        (e.PaymentElement = eE),
        (e.PaymentMethodMessagingElement = eS),
        (e.PaymentRequestButtonElement = eO),
        (e.ShippingAddressElement = eT),
        (e.useCheckout = q),
        (e.useElements = U),
        (e.useStripe = es);
});
