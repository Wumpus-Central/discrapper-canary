!(function (e, t) {
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
    function o(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
            })(e, t);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
                (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
        return i;
    }
    function s(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n,
                    r,
                    i = e && (("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                if (null != i) {
                    var a = [],
                        o = !0,
                        s = !1;
                    try {
                        for (
                            i = i.call(e);
                            !(o = (n = i.next()).done) && (a.push(n.value), !t || a.length !== t);
                            o = !0
                        );
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
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n))
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                }
            })(e, t) ||
            (function () {
                throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
            })()
        );
    }
    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    var u,
        c,
        d,
        f,
        p,
        h = { exports: {} };
    h.exports = (function () {
        if (p) return f;
        p = 1;
        var e = d ? c : ((d = 1), (c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (f = function () {
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
    var m = (u = h.exports) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u,
        g = function (e, n, r) {
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
        y = function (e) {
            return null !== e && "object" === i(e);
        },
        b = "[object Object]",
        _ = function e(t, n) {
            if (!y(t) || !y(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === b;
            if (i !== (Object.prototype.toString.call(n) === b)) return !1;
            if (!i && !r) return t === n;
            var a = Object.keys(t),
                o = Object.keys(n);
            if (a.length !== o.length) return !1;
            for (var s = {}, l = 0; l < a.length; l += 1) s[a[l]] = !0;
            for (var u = 0; u < o.length; u += 1) s[o[u]] = !0;
            var c = Object.keys(s);
            return (
                c.length === a.length &&
                c.every(function (r) {
                    return e(t[r], n[r]);
                })
            );
        },
        w = function (e, t, n) {
            return y(e)
                ? Object.keys(e).reduce(function (i, o) {
                      var s = !y(t) || !_(e[o], t[o]);
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
        x =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        E = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
            if (
                null === e ||
                (y(e) &&
                    "function" == typeof e.elements &&
                    "function" == typeof e.createToken &&
                    "function" == typeof e.createPaymentMethod &&
                    "function" == typeof e.confirmCardPayment)
            )
                return e;
            throw Error(t);
        },
        S = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
            if (y(e) && "function" == typeof e.then)
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return E(e, t);
                    }),
                };
            var n = E(e, t);
            return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
        },
        k = function (e) {
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
        T = t.createContext(null);
    T.displayName = "ElementsContext";
    var C = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find Elements context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <Elements> provider.",
                    ),
                );
            return e;
        },
        P = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return S(n);
                    },
                    [n],
                ),
                o = s(
                    t.useState(function () {
                        return {
                            stripe: "sync" === a.tag ? a.stripe : null,
                            elements: "sync" === a.tag ? a.stripe.elements(r) : null,
                        };
                    }),
                    2,
                ),
                l = o[0],
                u = o[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            u(function (t) {
                                return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                            });
                        };
                    return (
                        "async" !== a.tag || l.stripe
                            ? "sync" !== a.tag || l.stripe || t(a.stripe)
                            : a.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, l, r],
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
                        if (l.elements) {
                            var e = w(r, d, ["clientSecret", "fonts"]);
                            e && l.elements.update(e);
                        }
                    },
                    [r, d, l.elements],
                ),
                t.useEffect(
                    function () {
                        k(l.stripe);
                    },
                    [l.stripe],
                ),
                t.createElement(T.Provider, { value: l }, i)
            );
        };
    P.propTypes = { stripe: m.any, options: m.object };
    var A = function (e) {
            return C(t.useContext(T), e);
        },
        M = function (e) {
            return (0, e.children)(A("mounts <ElementsConsumer>"));
        };
    M.propTypes = { children: m.func.isRequired };
    var R = ["on", "session"],
        I = t.createContext(null);
    I.displayName = "CheckoutSdkContext";
    var L = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        O = t.createContext(null);
    O.displayName = "CheckoutContext";
    var D = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = o(e, R);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        F = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return S(
                            n,
                            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [n],
                ),
                o = s(t.useState(null), 2),
                l = o[0],
                u = o[1],
                c = s(
                    t.useState(function () {
                        return { stripe: "sync" === a.tag ? a.stripe : null, checkoutSdk: null };
                    }),
                    2,
                ),
                d = c[0],
                f = c[1],
                p = function (e, t) {
                    f(function (n) {
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
                                  e && (p(a.stripe, e), e.on("change", u));
                              }))
                            : a.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !h.current &&
                                      ((h.current = !0),
                                      t.initCheckout(r).then(function (e) {
                                          e && (p(t, e), e.on("change", u));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [a, d, r, u],
            );
            var m = v(n);
            t.useEffect(
                function () {
                    null !== m &&
                        m !== n &&
                        console.warn(
                            "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [m, n],
            );
            var g = v(r),
                y = v(d.checkoutSdk);
            t.useEffect(
                function () {
                    if (d.checkoutSdk) {
                        var e,
                            t,
                            n = null == g || null == (e = g.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            a = !_(i, n),
                            o = !y && d.checkoutSdk;
                        i && (a || o) && d.checkoutSdk.changeAppearance(i);
                    }
                },
                [r, g, d.checkoutSdk, y],
            ),
                t.useEffect(
                    function () {
                        k(d.stripe);
                    },
                    [d.stripe],
                );
            var b = t.useMemo(
                function () {
                    return D(d.checkoutSdk, l);
                },
                [d.checkoutSdk, l],
            );
            return d.checkoutSdk
                ? t.createElement(I.Provider, { value: d }, t.createElement(O.Provider, { value: b }, i))
                : null;
        };
    F.propTypes = {
        stripe: m.any,
        options: m.shape({ fetchClientSecret: m.func.isRequired, elementsOptions: m.object }).isRequired,
    };
    var N = function (e) {
            var n = t.useContext(I),
                r = t.useContext(T);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? L(n, e) : C(r, e);
        },
        V = ["mode"],
        j = function (e, n) {
            var r = "".concat(e.charAt(0).toUpperCase() + e.slice(1), "Element"),
                i = n
                    ? function (e) {
                          N("mounts <".concat(r, ">"));
                          var n = e.id,
                              i = e.className;
                          return t.createElement("div", { id: n, className: i });
                      }
                    : function (n) {
                          var i,
                              a = n.id,
                              l = n.className,
                              u = n.options,
                              c = void 0 === u ? {} : u,
                              d = n.onBlur,
                              f = n.onFocus,
                              p = n.onReady,
                              h = n.onChange,
                              m = n.onEscape,
                              y = n.onClick,
                              b = n.onLoadError,
                              _ = n.onLoaderStart,
                              x = n.onNetworksChange,
                              E = n.onConfirm,
                              S = n.onCancel,
                              k = n.onShippingAddressChange,
                              T = n.onShippingRateChange,
                              C = N("mounts <".concat(r, ">")),
                              P = "elements" in C ? C.elements : null,
                              A = "checkoutSdk" in C ? C.checkoutSdk : null,
                              M = s(t.useState(null), 2),
                              R = M[0],
                              I = M[1],
                              L = t.useRef(null),
                              O = t.useRef(null);
                          g(R, "blur", d),
                              g(R, "focus", f),
                              g(R, "escape", m),
                              g(R, "click", y),
                              g(R, "loaderror", b),
                              g(R, "loaderstart", _),
                              g(R, "networkschange", x),
                              g(R, "confirm", E),
                              g(R, "cancel", S),
                              g(R, "shippingaddresschange", k),
                              g(R, "shippingratechange", T),
                              g(R, "change", h),
                              p &&
                                  (i =
                                      "expressCheckout" === e
                                          ? p
                                          : function () {
                                                p(R);
                                            }),
                              g(R, "ready", i),
                              t.useLayoutEffect(
                                  function () {
                                      if (null === L.current && null !== O.current && (P || A)) {
                                          var t = null;
                                          if (A)
                                              switch (e) {
                                                  case "payment":
                                                      t = A.createPaymentElement(c);
                                                      break;
                                                  case "address":
                                                      if ("mode" in c) {
                                                          var n = c.mode,
                                                              i = o(c, V);
                                                          if ("shipping" === n) t = A.createShippingAddressElement(i);
                                                          else if ("billing" === n)
                                                              t = A.createBillingAddressElement(i);
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
                                                      t = A.createExpressCheckoutElement(c);
                                                      break;
                                                  case "currencySelector":
                                                      t = A.createCurrencySelectorElement();
                                                      break;
                                                  default:
                                                      throw Error(
                                                          "Invalid Element type ".concat(
                                                              r,
                                                              ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                          ),
                                                      );
                                              }
                                          else P && (t = P.create(e, c));
                                          (L.current = t), I(t), t && t.mount(O.current);
                                      }
                                  },
                                  [P, A, c],
                              );
                          var D = v(c);
                          return (
                              t.useEffect(
                                  function () {
                                      if (L.current) {
                                          var e = w(c, D, ["paymentRequest"]);
                                          e && "update" in L.current && L.current.update(e);
                                      }
                                  },
                                  [c, D],
                              ),
                              t.useLayoutEffect(function () {
                                  return function () {
                                      if (L.current && "function" == typeof L.current.destroy)
                                          try {
                                              L.current.destroy(), (L.current = null);
                                          } catch (e) {}
                                  };
                              }, []),
                              t.createElement("div", { id: a, className: l, ref: O })
                          );
                      };
            return (
                (i.propTypes = {
                    id: m.string,
                    className: m.string,
                    onChange: m.func,
                    onBlur: m.func,
                    onFocus: m.func,
                    onReady: m.func,
                    onEscape: m.func,
                    onClick: m.func,
                    onLoadError: m.func,
                    onLoaderStart: m.func,
                    onNetworksChange: m.func,
                    onConfirm: m.func,
                    onCancel: m.func,
                    onShippingAddressChange: m.func,
                    onShippingRateChange: m.func,
                    options: m.object,
                }),
                (i.displayName = r),
                (i.__elementType = e),
                i
            );
        },
        B = "u" < typeof window,
        U = t.createContext(null);
    U.displayName = "EmbeddedCheckoutProviderContext";
    var K = function () {
            var e = t.useContext(U);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e;
        },
        $ = B
            ? function (e) {
                  var n = e.id,
                      r = e.className;
                  return K(), t.createElement("div", { id: n, className: r });
              }
            : function (e) {
                  var n = e.id,
                      r = e.className,
                      i = K().embeddedCheckout,
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
                      t.createElement("div", { ref: o, id: n, className: r })
                  );
              },
        z = j("auBankAccount", B),
        W = j("card", B),
        G = j("cardNumber", B),
        H = j("cardExpiry", B),
        q = j("cardCvc", B),
        Y = j("fpxBank", B),
        X = j("iban", B),
        J = j("idealBank", B),
        Z = j("p24Bank", B),
        Q = j("epsBank", B),
        ee = j("payment", B),
        et = j("expressCheckout", B),
        en = j("currencySelector", B),
        er = j("paymentRequestButton", B),
        ei = j("linkAuthentication", B),
        ea = j("address", B),
        eo = j("shippingAddress", B),
        es = j("paymentMethodMessaging", B),
        el = j("affirmMessage", B),
        eu = j("afterpayClearpayMessage", B);
    (e.AddressElement = ea),
        (e.AffirmMessageElement = el),
        (e.AfterpayClearpayMessageElement = eu),
        (e.AuBankAccountElement = z),
        (e.CardCvcElement = q),
        (e.CardElement = W),
        (e.CardExpiryElement = H),
        (e.CardNumberElement = G),
        (e.CheckoutProvider = F),
        (e.CurrencySelectorElement = en),
        (e.Elements = P),
        (e.ElementsConsumer = M),
        (e.EmbeddedCheckout = $),
        (e.EmbeddedCheckoutProvider = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                a = t.useMemo(
                    function () {
                        return S(
                            n,
                            "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [n],
                ),
                o = t.useRef(null),
                l = t.useRef(null),
                u = s(t.useState({ embeddedCheckout: null }), 2),
                c = u[0],
                d = u[1];
            t.useEffect(
                function () {
                    if (!l.current && !o.current) {
                        var e = function (e) {
                            l.current ||
                                o.current ||
                                ((l.current = e),
                                (o.current = l.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        "async" === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret)
                            ? a.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === a.tag && !l.current && (r.clientSecret || r.fetchClientSecret) && e(a.stripe);
                    }
                },
                [a, r, c, l],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            c.embeddedCheckout
                                ? ((o.current = null), c.embeddedCheckout.destroy())
                                : o.current &&
                                  o.current.then(function () {
                                      (o.current = null), c.embeddedCheckout && c.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [c.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        k(l);
                    },
                    [l],
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
                t.createElement(U.Provider, { value: c }, i)
            );
        }),
        (e.EpsBankElement = Q),
        (e.ExpressCheckoutElement = et),
        (e.FpxBankElement = Y),
        (e.IbanElement = X),
        (e.IdealBankElement = J),
        (e.LinkAuthenticationElement = ei),
        (e.P24BankElement = Z),
        (e.PaymentElement = ee),
        (e.PaymentMethodMessagingElement = es),
        (e.PaymentRequestButtonElement = er),
        (e.ShippingAddressElement = eo),
        (e.useCheckout = function () {
            L(t.useContext(I), "calls useCheckout()");
            var e = t.useContext(O);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        }),
        (e.useElements = function () {
            return A("calls useElements()").elements;
        }),
        (e.useStripe = function () {
            return N("calls useStripe()").stripe;
        });
})(t, n(582128));
