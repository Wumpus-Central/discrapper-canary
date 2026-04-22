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
            i = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = {},
                    s = Object.keys(e);
                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i;
            })(e, t);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (r = 0; r < s.length; r++)
                (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        }
        return i;
    }
    function o(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n,
                    r,
                    i = e && (("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                if (null != i) {
                    var s = [],
                        a = !0,
                        o = !1;
                    try {
                        for (
                            i = i.call(e);
                            !(a = (n = i.next()).done) && (s.push(n.value), !t || s.length !== t);
                            a = !0
                        );
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
        d,
        c,
        _,
        f,
        E = { exports: {} };
    E.exports = (function () {
        if (f) return _;
        f = 1;
        var e = c ? d : ((c = 1), (d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
        function t() {}
        function n() {}
        return (
            (n.resetWarningCache = t),
            (_ = function () {
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
    var h = (u = E.exports) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u,
        p = function (e, n, r) {
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
        m = function (e) {
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
        g = function (e) {
            return null !== e && "object" === i(e);
        },
        A = "[object Object]",
        I = function e(t, n) {
            if (!g(t) || !g(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === A;
            if (i !== (Object.prototype.toString.call(n) === A)) return !1;
            if (!i && !r) return t === n;
            var s = Object.keys(t),
                a = Object.keys(n);
            if (s.length !== a.length) return !1;
            for (var o = {}, l = 0; l < s.length; l += 1) o[s[l]] = !0;
            for (var u = 0; u < a.length; u += 1) o[a[u]] = !0;
            var d = Object.keys(o);
            return (
                d.length === s.length &&
                d.every(function (r) {
                    return e(t[r], n[r]);
                })
            );
        },
        T = function (e, t, n) {
            return g(e)
                ? Object.keys(e).reduce(function (i, a) {
                      var o = !g(t) || !I(e[a], t[a]);
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
        S =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        y = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            if (
                null === e ||
                (g(e) &&
                    "function" == typeof e.elements &&
                    "function" == typeof e.createToken &&
                    "function" == typeof e.createPaymentMethod &&
                    "function" == typeof e.confirmCardPayment)
            )
                return e;
            throw Error(t);
        },
        N = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            if (g(e) && "function" == typeof e.then)
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return y(e, t);
                    }),
                };
            var n = y(e, t);
            return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
        },
        O = function (e) {
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
        R = t.createContext(null);
    R.displayName = "ElementsContext";
    var v = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find Elements context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <Elements> provider.",
                    ),
                );
            return e;
        },
        C = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                s = t.useMemo(
                    function () {
                        return N(n);
                    },
                    [n],
                ),
                a = o(
                    t.useState(function () {
                        return {
                            stripe: "sync" === s.tag ? s.stripe : null,
                            elements: "sync" === s.tag ? s.stripe.elements(r) : null,
                        };
                    }),
                    2,
                ),
                l = a[0],
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
                        "async" !== s.tag || l.stripe
                            ? "sync" !== s.tag || l.stripe || t(s.stripe)
                            : s.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [s, l, r],
            );
            var d = m(n);
            t.useEffect(
                function () {
                    null !== d &&
                        d !== n &&
                        console.warn(
                            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [d, n],
            );
            var c = m(r);
            return (
                t.useEffect(
                    function () {
                        if (l.elements) {
                            var e = T(r, c, ["clientSecret", "fonts"]);
                            e && l.elements.update(e);
                        }
                    },
                    [r, c, l.elements],
                ),
                t.useEffect(
                    function () {
                        O(l.stripe);
                    },
                    [l.stripe],
                ),
                t.createElement(R.Provider, { value: l }, i)
            );
        };
    C.propTypes = { stripe: h.any, options: h.object };
    var b = function (e) {
            return v(t.useContext(R), e);
        },
        D = function (e) {
            return (0, e.children)(b("mounts <ElementsConsumer>"));
        };
    D.propTypes = { children: h.func.isRequired };
    var L = ["on", "session"],
        w = t.createContext(null);
    w.displayName = "CheckoutSdkContext";
    var M = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        P = t.createContext(null);
    P.displayName = "CheckoutContext";
    var U = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = a(e, L);
            return t ? Object.assign(t, n) : Object.assign(e.session(), n);
        },
        k = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                s = t.useMemo(
                    function () {
                        return N(
                            n,
                            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [n],
                ),
                a = o(t.useState(null), 2),
                l = a[0],
                u = a[1],
                d = o(
                    t.useState(function () {
                        return { stripe: "sync" === s.tag ? s.stripe : null, checkoutSdk: null };
                    }),
                    2,
                ),
                c = d[0],
                _ = d[1],
                f = function (e, t) {
                    _(function (n) {
                        return n.stripe && n.checkoutSdk ? n : { stripe: e, checkoutSdk: t };
                    });
                },
                E = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        "async" !== s.tag || c.stripe
                            ? "sync" === s.tag &&
                              s.stripe &&
                              !E.current &&
                              ((E.current = !0),
                              s.stripe.initCheckout(r).then(function (e) {
                                  e && (f(s.stripe, e), e.on("change", u));
                              }))
                            : s.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !E.current &&
                                      ((E.current = !0),
                                      t.initCheckout(r).then(function (e) {
                                          e && (f(t, e), e.on("change", u));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [s, c, r, u],
            );
            var h = m(n);
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
            var p = m(r),
                g = m(c.checkoutSdk);
            t.useEffect(
                function () {
                    if (c.checkoutSdk) {
                        var e,
                            t,
                            n = null == p || null == (e = p.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance,
                            s = !I(i, n),
                            a = !g && c.checkoutSdk;
                        i && (s || a) && c.checkoutSdk.changeAppearance(i);
                    }
                },
                [r, p, c.checkoutSdk, g],
            ),
                t.useEffect(
                    function () {
                        O(c.stripe);
                    },
                    [c.stripe],
                );
            var A = t.useMemo(
                function () {
                    return U(c.checkoutSdk, l);
                },
                [c.checkoutSdk, l],
            );
            return c.checkoutSdk
                ? t.createElement(w.Provider, { value: c }, t.createElement(P.Provider, { value: A }, i))
                : null;
        };
    k.propTypes = {
        stripe: h.any,
        options: h.shape({ fetchClientSecret: h.func.isRequired, elementsOptions: h.object }).isRequired,
    };
    var x = function (e) {
            var n = t.useContext(w),
                r = t.useContext(R);
            if (n && r)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return n ? M(n, e) : v(r, e);
        },
        G = ["mode"],
        V = function (e, n) {
            var r = "".concat(e.charAt(0).toUpperCase() + e.slice(1), "Element"),
                i = n
                    ? function (e) {
                          x("mounts <".concat(r, ">"));
                          var n = e.id,
                              i = e.className;
                          return t.createElement("div", { id: n, className: i });
                      }
                    : function (n) {
                          var i,
                              s = n.id,
                              l = n.className,
                              u = n.options,
                              d = void 0 === u ? {} : u,
                              c = n.onBlur,
                              _ = n.onFocus,
                              f = n.onReady,
                              E = n.onChange,
                              h = n.onEscape,
                              g = n.onClick,
                              A = n.onLoadError,
                              I = n.onLoaderStart,
                              S = n.onNetworksChange,
                              y = n.onConfirm,
                              N = n.onCancel,
                              O = n.onShippingAddressChange,
                              R = n.onShippingRateChange,
                              v = x("mounts <".concat(r, ">")),
                              C = "elements" in v ? v.elements : null,
                              b = "checkoutSdk" in v ? v.checkoutSdk : null,
                              D = o(t.useState(null), 2),
                              L = D[0],
                              w = D[1],
                              M = t.useRef(null),
                              P = t.useRef(null);
                          p(L, "blur", c),
                              p(L, "focus", _),
                              p(L, "escape", h),
                              p(L, "click", g),
                              p(L, "loaderror", A),
                              p(L, "loaderstart", I),
                              p(L, "networkschange", S),
                              p(L, "confirm", y),
                              p(L, "cancel", N),
                              p(L, "shippingaddresschange", O),
                              p(L, "shippingratechange", R),
                              p(L, "change", E),
                              f &&
                                  (i =
                                      "expressCheckout" === e
                                          ? f
                                          : function () {
                                                f(L);
                                            }),
                              p(L, "ready", i),
                              t.useLayoutEffect(
                                  function () {
                                      if (null === M.current && null !== P.current && (C || b)) {
                                          var t = null;
                                          if (b)
                                              switch (e) {
                                                  case "payment":
                                                      t = b.createPaymentElement(d);
                                                      break;
                                                  case "address":
                                                      if ("mode" in d) {
                                                          var n = d.mode,
                                                              i = a(d, G);
                                                          if ("shipping" === n) t = b.createShippingAddressElement(i);
                                                          else if ("billing" === n)
                                                              t = b.createBillingAddressElement(i);
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
                                                      t = b.createExpressCheckoutElement(d);
                                                      break;
                                                  case "currencySelector":
                                                      t = b.createCurrencySelectorElement();
                                                      break;
                                                  default:
                                                      throw Error(
                                                          "Invalid Element type ".concat(
                                                              r,
                                                              ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                          ),
                                                      );
                                              }
                                          else C && (t = C.create(e, d));
                                          (M.current = t), w(t), t && t.mount(P.current);
                                      }
                                  },
                                  [C, b, d],
                              );
                          var U = m(d);
                          return (
                              t.useEffect(
                                  function () {
                                      if (M.current) {
                                          var e = T(d, U, ["paymentRequest"]);
                                          e && "update" in M.current && M.current.update(e);
                                      }
                                  },
                                  [d, U],
                              ),
                              t.useLayoutEffect(function () {
                                  return function () {
                                      if (M.current && "function" == typeof M.current.destroy)
                                          try {
                                              M.current.destroy(), (M.current = null);
                                          } catch (e) {}
                                  };
                              }, []),
                              t.createElement("div", { id: s, className: l, ref: P })
                          );
                      };
            return (
                (i.propTypes = {
                    id: h.string,
                    className: h.string,
                    onChange: h.func,
                    onBlur: h.func,
                    onFocus: h.func,
                    onReady: h.func,
                    onEscape: h.func,
                    onClick: h.func,
                    onLoadError: h.func,
                    onLoaderStart: h.func,
                    onNetworksChange: h.func,
                    onConfirm: h.func,
                    onCancel: h.func,
                    onShippingAddressChange: h.func,
                    onShippingRateChange: h.func,
                    options: h.object,
                }),
                (i.displayName = r),
                (i.__elementType = e),
                i
            );
        },
        F = "u" < typeof window,
        B = t.createContext(null);
    B.displayName = "EmbeddedCheckoutProviderContext";
    var H = function () {
            var e = t.useContext(B);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e;
        },
        Y = F
            ? function (e) {
                  var n = e.id,
                      r = e.className;
                  return H(), t.createElement("div", { id: n, className: r });
              }
            : function (e) {
                  var n = e.id,
                      r = e.className,
                      i = H().embeddedCheckout,
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
        W = V("auBankAccount", F),
        j = V("card", F),
        K = V("cardNumber", F),
        $ = V("cardExpiry", F),
        z = V("cardCvc", F),
        q = V("fpxBank", F),
        X = V("iban", F),
        Q = V("idealBank", F),
        J = V("p24Bank", F),
        Z = V("epsBank", F),
        ee = V("payment", F),
        et = V("expressCheckout", F),
        en = V("currencySelector", F),
        er = V("paymentRequestButton", F),
        ei = V("linkAuthentication", F),
        es = V("address", F),
        ea = V("shippingAddress", F),
        eo = V("paymentMethodMessaging", F),
        el = V("affirmMessage", F),
        eu = V("afterpayClearpayMessage", F);
    (e.AddressElement = es),
        (e.AffirmMessageElement = el),
        (e.AfterpayClearpayMessageElement = eu),
        (e.AuBankAccountElement = W),
        (e.CardCvcElement = z),
        (e.CardElement = j),
        (e.CardExpiryElement = $),
        (e.CardNumberElement = K),
        (e.CheckoutProvider = k),
        (e.CurrencySelectorElement = en),
        (e.Elements = C),
        (e.ElementsConsumer = D),
        (e.EmbeddedCheckout = Y),
        (e.EmbeddedCheckoutProvider = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                s = t.useMemo(
                    function () {
                        return N(
                            n,
                            "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [n],
                ),
                a = t.useRef(null),
                l = t.useRef(null),
                u = o(t.useState({ embeddedCheckout: null }), 2),
                d = u[0],
                c = u[1];
            t.useEffect(
                function () {
                    if (!l.current && !a.current) {
                        var e = function (e) {
                            l.current ||
                                a.current ||
                                ((l.current = e),
                                (a.current = l.current.initEmbeddedCheckout(r).then(function (e) {
                                    c({ embeddedCheckout: e });
                                })));
                        };
                        "async" === s.tag && !l.current && (r.clientSecret || r.fetchClientSecret)
                            ? s.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === s.tag && !l.current && (r.clientSecret || r.fetchClientSecret) && e(s.stripe);
                    }
                },
                [s, r, d, l],
            ),
                t.useEffect(
                    function () {
                        return function () {
                            d.embeddedCheckout
                                ? ((a.current = null), d.embeddedCheckout.destroy())
                                : a.current &&
                                  a.current.then(function () {
                                      (a.current = null), d.embeddedCheckout && d.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [d.embeddedCheckout],
                ),
                t.useEffect(
                    function () {
                        O(l);
                    },
                    [l],
                );
            var _ = m(n);
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
            var f = m(r);
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
                t.createElement(B.Provider, { value: d }, i)
            );
        }),
        (e.EpsBankElement = Z),
        (e.ExpressCheckoutElement = et),
        (e.FpxBankElement = q),
        (e.IbanElement = X),
        (e.IdealBankElement = Q),
        (e.LinkAuthenticationElement = ei),
        (e.P24BankElement = J),
        (e.PaymentElement = ee),
        (e.PaymentMethodMessagingElement = eo),
        (e.PaymentRequestButtonElement = er),
        (e.ShippingAddressElement = ea),
        (e.useCheckout = function () {
            M(t.useContext(w), "calls useCheckout()");
            var e = t.useContext(P);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        }),
        (e.useElements = function () {
            return b("calls useElements()").elements;
        }),
        (e.useStripe = function () {
            return x("calls useStripe()").stripe;
        });
})(t, n(64700));
