!(function (e, r) {
    r(t, n(64700));
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
        return c(e) || u(e, t) || d(e, t) || p();
    }
    function c(e) {
        if (Array.isArray(e)) return e;
    }
    function u(e, t) {
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
    function p() {
        throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
    }
    function _(e) {
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
    var O = _(b.exports),
        A = function (e, n, r) {
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
        S = function (e) {
            return null !== e && "object" === i(e);
        },
        I = function (e) {
            return S(e) && "function" == typeof e.then;
        },
        T = function (e) {
            return (
                S(e) &&
                "function" == typeof e.elements &&
                "function" == typeof e.createToken &&
                "function" == typeof e.createPaymentMethod &&
                "function" == typeof e.confirmCardPayment
            );
        },
        C = "[object Object]",
        N = function e(t, n) {
            if (!S(t) || !S(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === C;
            if (i !== (Object.prototype.toString.call(n) === C)) return !1;
            if (!i && !r) return t === n;
            var a = Object.keys(t),
                s = Object.keys(n);
            if (a.length !== s.length) return !1;
            for (var o = {}, l = 0; l < a.length; l += 1) o[a[l]] = !0;
            for (var c = 0; c < s.length; c += 1) o[s[c]] = !0;
            var u = Object.keys(o);
            if (u.length !== a.length) return !1;
            var d = t,
                f = n,
                p = function (t) {
                    return e(d[t], f[t]);
                };
            return u.every(p);
        },
        R = function (e, t, n) {
            return S(e)
                ? Object.keys(e).reduce(function (i, s) {
                      var o = !S(t) || !N(e[s], t[s]);
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
        w =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        P = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            if (null === e || T(e)) return e;
            throw Error(t);
        },
        D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            if (I(e))
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return P(e, t);
                    }),
                };
            var n = P(e, t);
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
    var j = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find Elements context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <Elements> provider.",
                    ),
                );
            return e;
        },
        M = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return D(n);
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
                c = s[1];
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
            var u = v(n);
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
            var d = v(r);
            return (
                t.useEffect(
                    function () {
                        if (o.elements) {
                            var e = R(r, d, ["clientSecret", "fonts"]);
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
                t.createElement(L.Provider, { value: o }, i)
            );
        };
    M.propTypes = {
        stripe: O.any,
        options: O.object,
    };
    var k = function (e) {
            return j(t.useContext(L), e);
        },
        U = function () {
            return k("calls useElements()").elements;
        },
        G = function (e) {
            return (0, e.children)(k("mounts <ElementsConsumer>"));
        };
    G.propTypes = { children: O.func.isRequired };
    var V = ["on", "session"],
        F = t.createContext(null);
    F.displayName = "CheckoutSdkContext";
    var B = function (e, t) {
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
            var n = o(e, V);
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
                        return D(n, W);
                    },
                    [n],
                ),
                s = l(t.useState(null), 2),
                o = s[0],
                c = s[1],
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
                p = function (e, t) {
                    f(function (n) {
                        return n.stripe && n.checkoutSdk
                            ? n
                            : {
                                  stripe: e,
                                  checkoutSdk: t,
                              };
                    });
                },
                _ = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        "async" !== a.tag || d.stripe
                            ? "sync" === a.tag &&
                              a.stripe &&
                              !_.current &&
                              ((_.current = !0),
                              a.stripe.initCheckout(r).then(function (e) {
                                  e && (p(a.stripe, e), e.on("change", c));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !_.current &&
                                      ((_.current = !0),
                                      t.initCheckout(r).then(function (e) {
                                          e && (p(t, e), e.on("change", c));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, d, r, c],
            );
            var h = v(n);
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
            var m = v(r),
                g = v(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == m || null == (e = m.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            a = !N(i, n),
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
                ? t.createElement(F.Provider, { value: d }, t.createElement(H.Provider, { value: E }, i))
                : null;
        };
    K.propTypes = {
        stripe: O.any,
        options: O.shape({
            fetchClientSecret: O.func.isRequired,
            elementsOptions: O.object,
        }).isRequired,
    };
    var z = function (e) {
            return B(t.useContext(F), e);
        },
        q = function (e) {
            var n = t.useContext(F),
                r = t.useContext(L);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? B(n, e) : j(r, e);
        },
        X = function () {
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
        $ = function (e, n) {
            var r = "".concat(Q(e), "Element"),
                i = function (n) {
                    var i,
                        a = n.id,
                        s = n.className,
                        c = n.options,
                        u = void 0 === c ? {} : c,
                        d = n.onBlur,
                        f = n.onFocus,
                        p = n.onReady,
                        _ = n.onChange,
                        h = n.onEscape,
                        m = n.onClick,
                        g = n.onLoadError,
                        E = n.onLoaderStart,
                        b = n.onNetworksChange,
                        y = n.onConfirm,
                        O = n.onCancel,
                        S = n.onShippingAddressChange,
                        I = n.onShippingRateChange,
                        T = q("mounts <".concat(r, ">")),
                        C = "elements" in T ? T.elements : null,
                        N = "checkoutSdk" in T ? T.checkoutSdk : null,
                        w = l(t.useState(null), 2),
                        P = w[0],
                        D = w[1],
                        x = t.useRef(null),
                        L = t.useRef(null);
                    A(P, "blur", d),
                        A(P, "focus", f),
                        A(P, "escape", h),
                        A(P, "click", m),
                        A(P, "loaderror", g),
                        A(P, "loaderstart", E),
                        A(P, "networkschange", b),
                        A(P, "confirm", y),
                        A(P, "cancel", O),
                        A(P, "shippingaddresschange", S),
                        A(P, "shippingratechange", I),
                        A(P, "change", _),
                        p &&
                            (i =
                                "expressCheckout" === e
                                    ? p
                                    : function () {
                                          p(P);
                                      }),
                        A(P, "ready", i),
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
                                                        i = o(u, Z);
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
                                    (x.current = t), D(t), t && t.mount(L.current);
                                }
                            },
                            [C, N, u],
                        );
                    var j = v(u);
                    return (
                        t.useEffect(
                            function () {
                                if (x.current) {
                                    var e = R(u, j, ["paymentRequest"]);
                                    e && "update" in x.current && x.current.update(e);
                                }
                            },
                            [u, j],
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
                            className: s,
                            ref: L,
                        })
                    );
                },
                a = function (e) {
                    q("mounts <".concat(r, ">"));
                    var n = e.id,
                        i = e.className;
                    return t.createElement("div", {
                        id: n,
                        className: i,
                    });
                },
                s = n ? a : i;
            return (
                (s.propTypes = {
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
                        return D(n, en);
                    },
                    [n],
                ),
                s = t.useRef(null),
                o = t.useRef(null),
                c = l(t.useState({ embeddedCheckout: null }), 2),
                u = c[0],
                d = c[1];
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
                [a, r, u, o],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            u.embeddedCheckout
                                ? ((s.current = null), u.embeddedCheckout.destroy())
                                : s.current &&
                                  s.current.then(function () {
                                      (s.current = null), u.embeddedCheckout && u.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [u.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        x(o);
                    },
                    [o],
                );
            var f = v(n);
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
            var p = v(r);
            return (
                t.useEffect(
                    function () {
                        if (null != p) {
                            if (null == r)
                                return void console.warn(
                                    "Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.",
                                );
                            void 0 === r.clientSecret &&
                                void 0 === r.fetchClientSecret &&
                                console.warn(
                                    "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                                ),
                                null != p.clientSecret &&
                                    r.clientSecret !== p.clientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != p.fetchClientSecret &&
                                    r.fetchClientSecret !== p.fetchClientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != p.onComplete &&
                                    r.onComplete !== p.onComplete &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.",
                                    ),
                                null != p.onShippingDetailsChange &&
                                    r.onShippingDetailsChange !== p.onShippingDetailsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.",
                                    ),
                                null != p.onLineItemsChange &&
                                    r.onLineItemsChange !== p.onLineItemsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.",
                                    );
                        }
                    },
                    [p, r],
                ),
                t.createElement(ee.Provider, { value: u }, i)
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
                t.createElement("div", {
                    ref: s,
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
        es = J ? ea : ei,
        eo = function () {
            return q("calls useStripe()").stripe;
        },
        el = $("auBankAccount", J),
        ec = $("card", J),
        eu = $("cardNumber", J),
        ed = $("cardExpiry", J),
        ef = $("cardCvc", J),
        ep = $("fpxBank", J),
        e_ = $("iban", J),
        eh = $("idealBank", J),
        em = $("p24Bank", J),
        eg = $("epsBank", J),
        eE = $("payment", J),
        eb = $("expressCheckout", J),
        ey = $("currencySelector", J),
        eO = $("paymentRequestButton", J),
        eA = $("linkAuthentication", J),
        ev = $("address", J),
        eS = $("shippingAddress", J),
        eI = $("paymentMethodMessaging", J),
        eT = $("affirmMessage", J),
        eC = $("afterpayClearpayMessage", J);
    (e.AddressElement = ev),
        (e.AffirmMessageElement = eT),
        (e.AfterpayClearpayMessageElement = eC),
        (e.AuBankAccountElement = el),
        (e.CardCvcElement = ef),
        (e.CardElement = ec),
        (e.CardExpiryElement = ed),
        (e.CardNumberElement = eu),
        (e.CheckoutProvider = K),
        (e.CurrencySelectorElement = ey),
        (e.Elements = M),
        (e.ElementsConsumer = G),
        (e.EmbeddedCheckout = es),
        (e.EmbeddedCheckoutProvider = er),
        (e.EpsBankElement = eg),
        (e.ExpressCheckoutElement = eb),
        (e.FpxBankElement = ep),
        (e.IbanElement = e_),
        (e.IdealBankElement = eh),
        (e.LinkAuthenticationElement = eA),
        (e.P24BankElement = em),
        (e.PaymentElement = eE),
        (e.PaymentMethodMessagingElement = eI),
        (e.PaymentRequestButtonElement = eO),
        (e.ShippingAddressElement = eS),
        (e.useCheckout = X),
        (e.useElements = U),
        (e.useStripe = eo);
});
