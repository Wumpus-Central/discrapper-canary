!(function (e, t) {
    function r(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
        }
        return r;
    }
    function n(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
                ? r(Object(n), !0).forEach(function (t) {
                      o(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : r(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
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
    function o(e, t, r) {
        return (
            t in e
                ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
                : (e[t] = r),
            e
        );
    }
    function a(e, t) {
        if (null == e) return {};
        var r,
            n,
            i = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
            })(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (n = 0; n < o.length; n++)
                (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        }
        return i;
    }
    function s(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var r,
                    n,
                    i = e && (("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                if (null != i) {
                    var o = [],
                        a = !0,
                        s = !1;
                    try {
                        for (
                            i = i.call(e);
                            !(a = (r = i.next()).done) && (o.push(r.value), !t || o.length !== t);
                            a = !0
                        );
                    } catch (e) {
                        (s = !0), (n = e);
                    } finally {
                        try {
                            a || null == i.return || i.return();
                        } finally {
                            if (s) throw n;
                        }
                    }
                    return o;
                }
            })(e, t) ||
            (function (e, t) {
                if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    if (("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r))
                        return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(e, t);
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
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
    }
    var u,
        c,
        f,
        d,
        p,
        h = { exports: {} };
    h.exports = (function () {
        if (p) return d;
        p = 1;
        var e = f ? c : ((f = 1), (c = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
        function t() {}
        function r() {}
        return (
            (r.resetWarningCache = t),
            (d = function () {
                function n(t, r, n, i, o, a) {
                    if (a !== e) {
                        var s = Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                        );
                        throw ((s.name = "Invariant Violation"), s);
                    }
                }
                function i() {
                    return n;
                }
                n.isRequired = n;
                var o = {
                    array: n,
                    bool: n,
                    func: n,
                    number: n,
                    object: n,
                    string: n,
                    symbol: n,
                    any: n,
                    arrayOf: i,
                    element: n,
                    elementType: n,
                    instanceOf: i,
                    node: n,
                    objectOf: i,
                    oneOf: i,
                    oneOfType: i,
                    shape: i,
                    exact: i,
                    checkPropTypes: r,
                    resetWarningCache: t,
                };
                return (o.PropTypes = o), o;
            })
        );
    })()();
    var m = (u = h.exports) && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u,
        v = function (e, r, n) {
            var i = !!n,
                o = t.useRef(n);
            t.useEffect(
                function () {
                    o.current = n;
                },
                [n],
            ),
                t.useEffect(
                    function () {
                        if (!i || !e) return function () {};
                        var t = function () {
                            o.current && o.current.apply(o, arguments);
                        };
                        return (
                            e.on(r, t),
                            function () {
                                e.off(r, t);
                            }
                        );
                    },
                    [i, r, e, o],
                );
        },
        y = function (e) {
            var r = t.useRef(e);
            return (
                t.useEffect(
                    function () {
                        r.current = e;
                    },
                    [e],
                ),
                r.current
            );
        },
        g = function (e) {
            return null !== e && "object" === i(e);
        },
        b = "[object Object]",
        w = function e(t, r) {
            if (!g(t) || !g(r)) return t === r;
            var n = Array.isArray(t);
            if (n !== Array.isArray(r)) return !1;
            var i = Object.prototype.toString.call(t) === b;
            if (i !== (Object.prototype.toString.call(r) === b)) return !1;
            if (!i && !n) return t === r;
            var o = Object.keys(t),
                a = Object.keys(r);
            if (o.length !== a.length) return !1;
            for (var s = {}, l = 0; l < o.length; l += 1) s[o[l]] = !0;
            for (var u = 0; u < a.length; u += 1) s[a[u]] = !0;
            var c = Object.keys(s);
            return (
                c.length === o.length &&
                c.every(function (n) {
                    return e(t[n], r[n]);
                })
            );
        },
        _ = function (e, t, r) {
            return g(e)
                ? Object.keys(e).reduce(function (i, a) {
                      var s = !g(t) || !w(e[a], t[a]);
                      return r.includes(a)
                          ? (s &&
                                console.warn(
                                    "Unsupported prop change: options.".concat(a, " is not a mutable property."),
                                ),
                            i)
                          : s
                            ? n(n({}, i || {}), {}, o({}, a, e[a]))
                            : i;
                  }, null)
                : null;
        },
        S =
            "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
        x = function (e) {
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
        E = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
            if (g(e) && "function" == typeof e.then)
                return {
                    tag: "async",
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return x(e, t);
                    }),
                };
            var r = x(e, t);
            return null === r ? { tag: "empty" } : { tag: "sync", stripe: r };
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
        C = t.createContext(null);
    C.displayName = "ElementsContext";
    var T = function (e, t) {
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
            var r = e.stripe,
                n = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return E(r);
                    },
                    [r],
                ),
                a = s(
                    t.useState(function () {
                        return {
                            stripe: "sync" === o.tag ? o.stripe : null,
                            elements: "sync" === o.tag ? o.stripe.elements(n) : null,
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
                                return t.stripe ? t : { stripe: e, elements: e.elements(n) };
                            });
                        };
                    return (
                        "async" !== o.tag || l.stripe
                            ? "sync" !== o.tag || l.stripe || t(o.stripe)
                            : o.stripePromise.then(function (r) {
                                  r && e && t(r);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, l, n],
            );
            var c = y(r);
            t.useEffect(
                function () {
                    null !== c &&
                        c !== r &&
                        console.warn(
                            "Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [c, r],
            );
            var f = y(n);
            return (
                t.useEffect(
                    function () {
                        if (l.elements) {
                            var e = _(n, f, ["clientSecret", "fonts"]);
                            e && l.elements.update(e);
                        }
                    },
                    [n, f, l.elements],
                ),
                t.useEffect(
                    function () {
                        k(l.stripe);
                    },
                    [l.stripe],
                ),
                t.createElement(C.Provider, { value: l }, i)
            );
        };
    M.propTypes = { stripe: m.any, options: m.object };
    var P = function (e) {
            return T(t.useContext(C), e);
        },
        A = function (e) {
            return (0, e.children)(P("mounts <ElementsConsumer>"));
        };
    A.propTypes = { children: m.func.isRequired };
    var I = ["on", "session"],
        O = t.createContext(null);
    O.displayName = "CheckoutSdkContext";
    var D = function (e, t) {
            if (!e)
                throw Error(
                    "Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(
                        t,
                        " in an <CheckoutProvider> provider.",
                    ),
                );
            return e;
        },
        R = t.createContext(null);
    R.displayName = "CheckoutContext";
    var L = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var r = a(e, I);
            return t ? Object.assign(t, r) : Object.assign(e.session(), r);
        },
        F = function (e) {
            var r = e.stripe,
                n = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return E(
                            r,
                            "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [r],
                ),
                a = s(t.useState(null), 2),
                l = a[0],
                u = a[1],
                c = s(
                    t.useState(function () {
                        return { stripe: "sync" === o.tag ? o.stripe : null, checkoutSdk: null };
                    }),
                    2,
                ),
                f = c[0],
                d = c[1],
                p = function (e, t) {
                    d(function (r) {
                        return r.stripe && r.checkoutSdk ? r : { stripe: e, checkoutSdk: t };
                    });
                },
                h = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        "async" !== o.tag || f.stripe
                            ? "sync" === o.tag &&
                              o.stripe &&
                              !h.current &&
                              ((h.current = !0),
                              o.stripe.initCheckout(n).then(function (e) {
                                  e && (p(o.stripe, e), e.on("change", u));
                              }))
                            : o.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !h.current &&
                                      ((h.current = !0),
                                      t.initCheckout(n).then(function (e) {
                                          e && (p(t, e), e.on("change", u));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, f, n, u],
            );
            var m = y(r);
            t.useEffect(
                function () {
                    null !== m &&
                        m !== r &&
                        console.warn(
                            "Unsupported prop change on CheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [m, r],
            );
            var v = y(n),
                g = y(f.checkoutSdk);
            t.useEffect(
                function () {
                    if (f.checkoutSdk) {
                        var e,
                            t,
                            r = null == v || null == (e = v.elementsOptions) ? void 0 : e.appearance,
                            i = null == n || null == (t = n.elementsOptions) ? void 0 : t.appearance,
                            o = !w(i, r),
                            a = !g && f.checkoutSdk;
                        i && (o || a) && f.checkoutSdk.changeAppearance(i);
                    }
                },
                [n, v, f.checkoutSdk, g],
            ),
                t.useEffect(
                    function () {
                        k(f.stripe);
                    },
                    [f.stripe],
                );
            var b = t.useMemo(
                function () {
                    return L(f.checkoutSdk, l);
                },
                [f.checkoutSdk, l],
            );
            return f.checkoutSdk
                ? t.createElement(O.Provider, { value: f }, t.createElement(R.Provider, { value: b }, i))
                : null;
        };
    F.propTypes = {
        stripe: m.any,
        options: m.shape({ fetchClientSecret: m.func.isRequired, elementsOptions: m.object }).isRequired,
    };
    var N = function (e) {
            var r = t.useContext(O),
                n = t.useContext(C);
            if (r && n)
                throw Error(
                    "You cannot wrap the part of your app that ".concat(
                        e,
                        " in both <CheckoutProvider> and <Elements> providers.",
                    ),
                );
            return r ? D(r, e) : T(n, e);
        },
        j = ["mode"],
        B = function (e, r) {
            var n = "".concat(e.charAt(0).toUpperCase() + e.slice(1), "Element"),
                i = r
                    ? function (e) {
                          N("mounts <".concat(n, ">"));
                          var r = e.id,
                              i = e.className;
                          return t.createElement("div", { id: r, className: i });
                      }
                    : function (r) {
                          var i,
                              o = r.id,
                              l = r.className,
                              u = r.options,
                              c = void 0 === u ? {} : u,
                              f = r.onBlur,
                              d = r.onFocus,
                              p = r.onReady,
                              h = r.onChange,
                              m = r.onEscape,
                              g = r.onClick,
                              b = r.onLoadError,
                              w = r.onLoaderStart,
                              S = r.onNetworksChange,
                              x = r.onConfirm,
                              E = r.onCancel,
                              k = r.onShippingAddressChange,
                              C = r.onShippingRateChange,
                              T = N("mounts <".concat(n, ">")),
                              M = "elements" in T ? T.elements : null,
                              P = "checkoutSdk" in T ? T.checkoutSdk : null,
                              A = s(t.useState(null), 2),
                              I = A[0],
                              O = A[1],
                              D = t.useRef(null),
                              R = t.useRef(null);
                          v(I, "blur", f),
                              v(I, "focus", d),
                              v(I, "escape", m),
                              v(I, "click", g),
                              v(I, "loaderror", b),
                              v(I, "loaderstart", w),
                              v(I, "networkschange", S),
                              v(I, "confirm", x),
                              v(I, "cancel", E),
                              v(I, "shippingaddresschange", k),
                              v(I, "shippingratechange", C),
                              v(I, "change", h),
                              p &&
                                  (i =
                                      "expressCheckout" === e
                                          ? p
                                          : function () {
                                                p(I);
                                            }),
                              v(I, "ready", i),
                              t.useLayoutEffect(
                                  function () {
                                      if (null === D.current && null !== R.current && (M || P)) {
                                          var t = null;
                                          if (P)
                                              switch (e) {
                                                  case "payment":
                                                      t = P.createPaymentElement(c);
                                                      break;
                                                  case "address":
                                                      if ("mode" in c) {
                                                          var r = c.mode,
                                                              i = a(c, j);
                                                          if ("shipping" === r) t = P.createShippingAddressElement(i);
                                                          else if ("billing" === r)
                                                              t = P.createBillingAddressElement(i);
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
                                                      t = P.createExpressCheckoutElement(c);
                                                      break;
                                                  case "currencySelector":
                                                      t = P.createCurrencySelectorElement();
                                                      break;
                                                  default:
                                                      throw Error(
                                                          "Invalid Element type ".concat(
                                                              n,
                                                              ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />.",
                                                          ),
                                                      );
                                              }
                                          else M && (t = M.create(e, c));
                                          (D.current = t), O(t), t && t.mount(R.current);
                                      }
                                  },
                                  [M, P, c],
                              );
                          var L = y(c);
                          return (
                              t.useEffect(
                                  function () {
                                      if (D.current) {
                                          var e = _(c, L, ["paymentRequest"]);
                                          e && "update" in D.current && D.current.update(e);
                                      }
                                  },
                                  [c, L],
                              ),
                              t.useLayoutEffect(function () {
                                  return function () {
                                      if (D.current && "function" == typeof D.current.destroy)
                                          try {
                                              D.current.destroy(), (D.current = null);
                                          } catch (e) {}
                                  };
                              }, []),
                              t.createElement("div", { id: o, className: l, ref: R })
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
                (i.displayName = n),
                (i.__elementType = e),
                i
            );
        },
        K = "u" < typeof window,
        $ = t.createContext(null);
    $.displayName = "EmbeddedCheckoutProviderContext";
    var V = function () {
            var e = t.useContext($);
            if (!e) throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
            return e;
        },
        U = K
            ? function (e) {
                  var r = e.id,
                      n = e.className;
                  return V(), t.createElement("div", { id: r, className: n });
              }
            : function (e) {
                  var r = e.id,
                      n = e.className,
                      i = V().embeddedCheckout,
                      o = t.useRef(!1),
                      a = t.useRef(null);
                  return (
                      t.useLayoutEffect(
                          function () {
                              return (
                                  !o.current && i && null !== a.current && (i.mount(a.current), (o.current = !0)),
                                  function () {
                                      if (o.current && i)
                                          try {
                                              i.unmount(), (o.current = !1);
                                          } catch (e) {}
                                  }
                              );
                          },
                          [i],
                      ),
                      t.createElement("div", { ref: a, id: r, className: n })
                  );
              },
        z = B("auBankAccount", K),
        W = B("card", K),
        H = B("cardNumber", K),
        G = B("cardExpiry", K),
        q = B("cardCvc", K),
        Y = B("fpxBank", K),
        X = B("iban", K),
        J = B("idealBank", K),
        Q = B("p24Bank", K),
        Z = B("epsBank", K),
        ee = B("payment", K),
        et = B("expressCheckout", K),
        er = B("currencySelector", K),
        en = B("paymentRequestButton", K),
        ei = B("linkAuthentication", K),
        eo = B("address", K),
        ea = B("shippingAddress", K),
        es = B("paymentMethodMessaging", K),
        el = B("affirmMessage", K),
        eu = B("afterpayClearpayMessage", K);
    (e.AddressElement = eo),
        (e.AffirmMessageElement = el),
        (e.AfterpayClearpayMessageElement = eu),
        (e.AuBankAccountElement = z),
        (e.CardCvcElement = q),
        (e.CardElement = W),
        (e.CardExpiryElement = G),
        (e.CardNumberElement = H),
        (e.CheckoutProvider = F),
        (e.CurrencySelectorElement = er),
        (e.Elements = M),
        (e.ElementsConsumer = A),
        (e.EmbeddedCheckout = U),
        (e.EmbeddedCheckoutProvider = function (e) {
            var r = e.stripe,
                n = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return E(
                            r,
                            "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                        );
                    },
                    [r],
                ),
                a = t.useRef(null),
                l = t.useRef(null),
                u = s(t.useState({ embeddedCheckout: null }), 2),
                c = u[0],
                f = u[1];
            t.useEffect(
                function () {
                    if (!l.current && !a.current) {
                        var e = function (e) {
                            l.current ||
                                a.current ||
                                ((l.current = e),
                                (a.current = l.current.initEmbeddedCheckout(n).then(function (e) {
                                    f({ embeddedCheckout: e });
                                })));
                        };
                        "async" === o.tag && !l.current && (n.clientSecret || n.fetchClientSecret)
                            ? o.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : "sync" === o.tag && !l.current && (n.clientSecret || n.fetchClientSecret) && e(o.stripe);
                    }
                },
                [o, n, c, l],
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
                        k(l);
                    },
                    [l],
                );
            var d = y(r);
            t.useEffect(
                function () {
                    null !== d &&
                        d !== r &&
                        console.warn(
                            "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.",
                        );
                },
                [d, r],
            );
            var p = y(n);
            return (
                t.useEffect(
                    function () {
                        if (null != p) {
                            if (null == n)
                                return void console.warn(
                                    "Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.",
                                );
                            void 0 === n.clientSecret &&
                                void 0 === n.fetchClientSecret &&
                                console.warn(
                                    "Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.",
                                ),
                                null != p.clientSecret &&
                                    n.clientSecret !== p.clientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != p.fetchClientSecret &&
                                    n.fetchClientSecret !== p.fetchClientSecret &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.",
                                    ),
                                null != p.onComplete &&
                                    n.onComplete !== p.onComplete &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.",
                                    ),
                                null != p.onShippingDetailsChange &&
                                    n.onShippingDetailsChange !== p.onShippingDetailsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.",
                                    ),
                                null != p.onLineItemsChange &&
                                    n.onLineItemsChange !== p.onLineItemsChange &&
                                    console.warn(
                                        "Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.",
                                    );
                        }
                    },
                    [p, n],
                ),
                t.createElement($.Provider, { value: c }, i)
            );
        }),
        (e.EpsBankElement = Z),
        (e.ExpressCheckoutElement = et),
        (e.FpxBankElement = Y),
        (e.IbanElement = X),
        (e.IdealBankElement = J),
        (e.LinkAuthenticationElement = ei),
        (e.P24BankElement = Q),
        (e.PaymentElement = ee),
        (e.PaymentMethodMessagingElement = es),
        (e.PaymentRequestButtonElement = en),
        (e.ShippingAddressElement = ea),
        (e.useCheckout = function () {
            D(t.useContext(O), "calls useCheckout()");
            var e = t.useContext(R);
            if (!e)
                throw Error(
                    "Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.",
                );
            return e;
        }),
        (e.useElements = function () {
            return P("calls useElements()").elements;
        }),
        (e.useStripe = function () {
            return N("calls useStripe()").stripe;
        });
})(t, r(582128));
