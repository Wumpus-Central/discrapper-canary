!(function (e, r) {
    r(t, n(192379));
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
                      o(e, t, r[t]);
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
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  })(e);
    }
    function o(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[t] = n),
            e
        );
    }
    function a(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
    }
    function s(e, t) {
        if (null == e) return {};
        var n,
            r,
            i = a(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
            i = e && (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']);
        if (null != i) {
            var o = [],
                a = !0,
                s = !1;
            try {
                for (i = i.call(e); !(a = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); a = !0);
            } catch (e) {
                (s = !0), (r = e);
            } finally {
                try {
                    a || null == i.return || i.return();
                } finally {
                    if (s) throw r;
                }
            }
            return o;
        }
    }
    function d(e, t) {
        if (e) {
            if ('string' == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if (('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)) return Array.from(e);
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
        }
    }
    function f(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function _() {
        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function p(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var h,
        m,
        g,
        E,
        b = { exports: {} };
    function y() {
        return m ? h : ((m = 1), (h = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
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
                function r(t, n, r, i, o, a) {
                    if (a !== e) {
                        var s = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                        throw ((s.name = 'Invariant Violation'), s);
                    }
                }
                function i() {
                    return r;
                }
                r.isRequired = r;
                var o = {
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
                    resetWarningCache: t
                };
                return (o.PropTypes = o), o;
            })
        );
    })()();
    var v = p(b.exports),
        O = function (e, n, r) {
            var i = !!r,
                o = t.useRef(r);
            t.useEffect(
                function () {
                    o.current = r;
                },
                [r]
            ),
                t.useEffect(
                    function () {
                        if (!i || !e) return function () {};
                        var t = function () {
                            o.current && o.current.apply(o, arguments);
                        };
                        return (
                            e.on(n, t),
                            function () {
                                e.off(n, t);
                            }
                        );
                    },
                    [i, n, e, o]
                );
        },
        I = function (e) {
            var n = t.useRef(e);
            return (
                t.useEffect(
                    function () {
                        n.current = e;
                    },
                    [e]
                ),
                n.current
            );
        },
        S = function (e) {
            return null !== e && 'object' === i(e);
        },
        T = function (e) {
            return S(e) && 'function' == typeof e.then;
        },
        N = function (e) {
            return S(e) && 'function' == typeof e.elements && 'function' == typeof e.createToken && 'function' == typeof e.createPaymentMethod && 'function' == typeof e.confirmCardPayment;
        },
        A = '[object Object]',
        C = function e(t, n) {
            if (!S(t) || !S(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === A;
            if (i !== (Object.prototype.toString.call(n) === A)) return !1;
            if (!i && !r) return t === n;
            var o = Object.keys(t),
                a = Object.keys(n);
            if (o.length !== a.length) return !1;
            for (var s = {}, l = 0; l < o.length; l += 1) s[o[l]] = !0;
            for (var c = 0; c < a.length; c += 1) s[a[c]] = !0;
            var u = Object.keys(s);
            if (u.length !== o.length) return !1;
            var d = t,
                f = n,
                _ = function (t) {
                    return e(d[t], f[t]);
                };
            return u.every(_);
        },
        R = function (e, t, n) {
            return S(e)
                ? Object.keys(e).reduce(function (i, a) {
                      var s = !S(t) || !C(e[a], t[a]);
                      return n.includes(a) ? (s && console.warn('Unsupported prop change: options.'.concat(a, ' is not a mutable property.')), i) : s ? r(r({}, i || {}), {}, o({}, a, e[a])) : i;
                  }, null)
                : null;
        },
        P = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        w = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
            if (null === e || N(e)) return e;
            throw Error(t);
        },
        D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P;
            if (T(e))
                return {
                    tag: 'async',
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return w(e, t);
                    })
                };
            var n = w(e, t);
            return null === n
                ? { tag: 'empty' }
                : {
                      tag: 'sync',
                      stripe: n
                  };
        },
        L = function (e) {
            e &&
                e._registerWrapper &&
                e.registerAppInfo &&
                (e._registerWrapper({
                    name: 'react-stripe-js',
                    version: '2.7.0'
                }),
                e.registerAppInfo({
                    name: 'react-stripe-js',
                    version: '2.7.0',
                    url: 'https://stripe.com/docs/stripe-js/react'
                }));
        },
        x = t.createContext(null);
    x.displayName = 'ElementsContext';
    var M = function (e, t) {
            if (!e) throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(t, ' in an <Elements> provider.'));
            return e;
        },
        k = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return D(n);
                    },
                    [n]
                ),
                a = l(
                    t.useState(function () {
                        return {
                            stripe: 'sync' === o.tag ? o.stripe : null,
                            elements: 'sync' === o.tag ? o.stripe.elements(r) : null
                        };
                    }),
                    2
                ),
                s = a[0],
                c = a[1];
            t.useEffect(
                function () {
                    var e = !0,
                        t = function (e) {
                            c(function (t) {
                                return t.stripe
                                    ? t
                                    : {
                                          stripe: e,
                                          elements: e.elements(r)
                                      };
                            });
                        };
                    return (
                        'async' !== o.tag || s.stripe
                            ? 'sync' !== o.tag || s.stripe || t(o.stripe)
                            : o.stripePromise.then(function (n) {
                                  n && e && t(n);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, s, r]
            );
            var u = I(n);
            t.useEffect(
                function () {
                    null !== u && u !== n && console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
                },
                [u, n]
            );
            var d = I(r);
            return (
                t.useEffect(
                    function () {
                        if (s.elements) {
                            var e = R(r, d, ['clientSecret', 'fonts']);
                            e && s.elements.update(e);
                        }
                    },
                    [r, d, s.elements]
                ),
                t.useEffect(
                    function () {
                        L(s.stripe);
                    },
                    [s.stripe]
                ),
                t.createElement(x.Provider, { value: s }, i)
            );
        };
    k.propTypes = {
        stripe: v.any,
        options: v.object
    };
    var j = function (e) {
            return M(t.useContext(x), e);
        },
        U = function () {
            return j('calls useElements()').elements;
        },
        G = function (e) {
            return (0, e.children)(j('mounts <ElementsConsumer>'));
        };
    G.propTypes = { children: v.func.isRequired };
    var B = ['on', 'session'],
        F = t.createContext(null);
    F.displayName = 'CustomCheckoutSdkContext';
    var V = function (e, t) {
            if (!e) throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(t, ' in an <CustomCheckoutProvider> provider.'));
            return e;
        },
        Z = t.createContext(null);
    Z.displayName = 'CustomCheckoutContext';
    var H = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = s(e, B);
            return t ? r(r({}, n), t) : r(r({}, n), e.session());
        },
        W = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        Y = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return D(n, W);
                    },
                    [n]
                ),
                a = l(t.useState(null), 2),
                s = a[0],
                c = a[1],
                u = l(
                    t.useState(function () {
                        return {
                            stripe: 'sync' === o.tag ? o.stripe : null,
                            customCheckoutSdk: null
                        };
                    }),
                    2
                ),
                d = u[0],
                f = u[1],
                _ = function (e, t) {
                    f(function (n) {
                        return n.stripe && n.customCheckoutSdk
                            ? n
                            : {
                                  stripe: e,
                                  customCheckoutSdk: t
                              };
                    });
                },
                p = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        'async' !== o.tag || d.stripe
                            ? 'sync' === o.tag &&
                              o.stripe &&
                              !p.current &&
                              ((p.current = !0),
                              o.stripe.initCustomCheckout(r).then(function (e) {
                                  e && (_(o.stripe, e), e.on('change', c));
                              }))
                            : o.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !p.current &&
                                      ((p.current = !0),
                                      t.initCustomCheckout(r).then(function (e) {
                                          e && (_(t, e), e.on('change', c));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, d, r, c]
            );
            var h = I(n);
            t.useEffect(
                function () {
                    null !== h && h !== n && console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [h, n]
            );
            var m = I(r);
            t.useEffect(
                function () {
                    if (d.customCheckoutSdk) {
                        !r.clientSecret || S(m) || C(r.clientSecret, m.clientSecret) || console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                        var e,
                            t,
                            n = null == m || null == (e = m.elementsOptions) ? void 0 : e.appearance,
                            i = null == r || null == (t = r.elementsOptions) ? void 0 : t.appearance;
                        i && !C(i, n) && d.customCheckoutSdk.changeAppearance(i);
                    }
                },
                [r, m, d.customCheckoutSdk]
            ),
                t.useEffect(
                    function () {
                        L(d.stripe);
                    },
                    [d.stripe]
                );
            var g = t.useMemo(
                function () {
                    return H(d.customCheckoutSdk, s);
                },
                [d.customCheckoutSdk, s]
            );
            return d.customCheckoutSdk ? t.createElement(F.Provider, { value: d }, t.createElement(Z.Provider, { value: g }, i)) : null;
        };
    Y.propTypes = {
        stripe: v.any,
        options: v.shape({
            clientSecret: v.string.isRequired,
            elementsOptions: v.object
        }).isRequired
    };
    var K = function (e) {
            return V(t.useContext(F), e);
        },
        z = function (e) {
            var n = t.useContext(F),
                r = t.useContext(x);
            if (n && r) throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
            return n ? V(n, e) : M(r, e);
        },
        q = function () {
            K('calls useCustomCheckout()');
            var e = t.useContext(Z);
            if (!e) throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
            return e;
        },
        Q = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        X = function (e, n) {
            var r = ''.concat(Q(e), 'Element'),
                i = function (n) {
                    var i,
                        o = n.id,
                        a = n.className,
                        s = n.options,
                        c = void 0 === s ? {} : s,
                        u = n.onBlur,
                        d = n.onFocus,
                        f = n.onReady,
                        _ = n.onChange,
                        p = n.onEscape,
                        h = n.onClick,
                        m = n.onLoadError,
                        g = n.onLoaderStart,
                        E = n.onNetworksChange,
                        b = n.onConfirm,
                        y = n.onCancel,
                        v = n.onShippingAddressChange,
                        S = n.onShippingRateChange,
                        T = z('mounts <'.concat(r, '>')),
                        N = 'elements' in T ? T.elements : null,
                        A = 'customCheckoutSdk' in T ? T.customCheckoutSdk : null,
                        C = l(t.useState(null), 2),
                        P = C[0],
                        w = C[1],
                        D = t.useRef(null),
                        L = t.useRef(null);
                    O(P, 'blur', u),
                        O(P, 'focus', d),
                        O(P, 'escape', p),
                        O(P, 'click', h),
                        O(P, 'loaderror', m),
                        O(P, 'loaderstart', g),
                        O(P, 'networkschange', E),
                        O(P, 'confirm', b),
                        O(P, 'cancel', y),
                        O(P, 'shippingaddresschange', v),
                        O(P, 'shippingratechange', S),
                        O(P, 'change', _),
                        f &&
                            (i =
                                'expressCheckout' === e
                                    ? f
                                    : function () {
                                          f(P);
                                      }),
                        O(P, 'ready', i),
                        t.useLayoutEffect(
                            function () {
                                if (null === D.current && null !== L.current && (N || A)) {
                                    var t = null;
                                    A ? (t = A.createElement(e, c)) : N && (t = N.create(e, c)), (D.current = t), w(t), t && t.mount(L.current);
                                }
                            },
                            [N, A, c]
                        );
                    var x = I(c);
                    return (
                        t.useEffect(
                            function () {
                                if (D.current) {
                                    var e = R(c, x, ['paymentRequest']);
                                    e && D.current.update(e);
                                }
                            },
                            [c, x]
                        ),
                        t.useLayoutEffect(function () {
                            return function () {
                                if (D.current && 'function' == typeof D.current.destroy)
                                    try {
                                        D.current.destroy(), (D.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        t.createElement('div', {
                            id: o,
                            className: a,
                            ref: L
                        })
                    );
                },
                o = function (e) {
                    z('mounts <'.concat(r, '>'));
                    var n = e.id,
                        i = e.className;
                    return t.createElement('div', {
                        id: n,
                        className: i
                    });
                },
                a = n ? o : i;
            return (
                (a.propTypes = {
                    id: v.string,
                    className: v.string,
                    onChange: v.func,
                    onBlur: v.func,
                    onFocus: v.func,
                    onReady: v.func,
                    onEscape: v.func,
                    onClick: v.func,
                    onLoadError: v.func,
                    onLoaderStart: v.func,
                    onNetworksChange: v.func,
                    onConfirm: v.func,
                    onCancel: v.func,
                    onShippingAddressChange: v.func,
                    onShippingRateChange: v.func,
                    options: v.object
                }),
                (a.displayName = r),
                (a.__elementType = e),
                a
            );
        },
        J = 'undefined' == typeof window,
        $ = t.createContext(null);
    $.displayName = 'EmbeddedCheckoutProviderContext';
    var ee = function () {
            var e = t.useContext($);
            if (!e) throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
            return e;
        },
        et = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        en = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return D(n, et);
                    },
                    [n]
                ),
                a = t.useRef(null),
                s = t.useRef(null),
                c = l(t.useState({ embeddedCheckout: null }), 2),
                u = c[0],
                d = c[1];
            t.useEffect(
                function () {
                    if (!s.current && !a.current) {
                        var e = function (e) {
                            s.current ||
                                a.current ||
                                ((s.current = e),
                                (a.current = s.current.initEmbeddedCheckout(r).then(function (e) {
                                    d({ embeddedCheckout: e });
                                })));
                        };
                        'async' === o.tag && !s.current && (r.clientSecret || r.fetchClientSecret)
                            ? o.stripePromise.then(function (t) {
                                  t && e(t);
                              })
                            : 'sync' === o.tag && !s.current && (r.clientSecret || r.fetchClientSecret) && e(o.stripe);
                    }
                },
                [o, r, u, s]
            ),
                t.useEffect(
                    function () {
                        return function () {
                            u.embeddedCheckout
                                ? ((a.current = null), u.embeddedCheckout.destroy())
                                : a.current &&
                                  a.current.then(function () {
                                      (a.current = null), u.embeddedCheckout && u.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [u.embeddedCheckout]
                ),
                t.useEffect(
                    function () {
                        L(s);
                    },
                    [s]
                );
            var f = I(n);
            t.useEffect(
                function () {
                    null !== f && f !== n && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [f, n]
            );
            var _ = I(r);
            return (
                t.useEffect(
                    function () {
                        if (null != _) {
                            if (null == r) return void console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                            void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != _.clientSecret && r.clientSecret !== _.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != _.fetchClientSecret && r.fetchClientSecret !== _.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != _.onComplete && r.onComplete !== _.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                        }
                    },
                    [_, r]
                ),
                t.createElement($.Provider, { value: u }, i)
            );
        },
        er = function (e) {
            var n = e.id,
                r = e.className,
                i = ee().embeddedCheckout,
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
                    [i]
                ),
                t.createElement('div', {
                    ref: a,
                    id: n,
                    className: r
                })
            );
        },
        ei = function (e) {
            var n = e.id,
                r = e.className;
            return (
                ee(),
                t.createElement('div', {
                    id: n,
                    className: r
                })
            );
        },
        eo = J ? ei : er,
        ea = function () {
            return z('calls useStripe()').stripe;
        },
        es = X('auBankAccount', J),
        el = X('card', J),
        ec = X('cardNumber', J),
        eu = X('cardExpiry', J),
        ed = X('cardCvc', J),
        ef = X('fpxBank', J),
        e_ = X('iban', J),
        ep = X('idealBank', J),
        eh = X('p24Bank', J),
        em = X('epsBank', J),
        eg = X('payment', J),
        eE = X('expressCheckout', J),
        eb = X('paymentRequestButton', J),
        ey = X('linkAuthentication', J),
        ev = X('address', J),
        eO = X('shippingAddress', J),
        eI = X('paymentMethodMessaging', J),
        eS = X('affirmMessage', J),
        eT = X('afterpayClearpayMessage', J);
    (e.AddressElement = ev), (e.AffirmMessageElement = eS), (e.AfterpayClearpayMessageElement = eT), (e.AuBankAccountElement = es), (e.CardCvcElement = ed), (e.CardElement = el), (e.CardExpiryElement = eu), (e.CardNumberElement = ec), (e.CustomCheckoutProvider = Y), (e.Elements = k), (e.ElementsConsumer = G), (e.EmbeddedCheckout = eo), (e.EmbeddedCheckoutProvider = en), (e.EpsBankElement = em), (e.ExpressCheckoutElement = eE), (e.FpxBankElement = ef), (e.IbanElement = e_), (e.IdealBankElement = ep), (e.LinkAuthenticationElement = ey), (e.P24BankElement = eh), (e.PaymentElement = eg), (e.PaymentMethodMessagingElement = eI), (e.PaymentRequestButtonElement = eb), (e.ShippingAddressElement = eO), (e.useCustomCheckout = q), (e.useElements = U), (e.useStripe = ea);
});
