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
        return c(e) || u(e, t) || d(e, t) || p();
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
    function p() {
        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var h,
        m,
        g,
        E,
        v = { exports: {} };
    function b() {
        return m ? h : ((m = 1), (h = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
    }
    function y() {
        if (E) return g;
        E = 1;
        var e = b();
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
    }
    v.exports = y()();
    var O = _(v.exports),
        S = function (e, n, r) {
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
        T = function (e) {
            return null !== e && 'object' === i(e);
        },
        N = function (e) {
            return T(e) && 'function' == typeof e.then;
        },
        A = function (e) {
            return T(e) && 'function' == typeof e.elements && 'function' == typeof e.createToken && 'function' == typeof e.createPaymentMethod && 'function' == typeof e.confirmCardPayment;
        },
        C = '[object Object]',
        R = function e(t, n) {
            if (!T(t) || !T(n)) return t === n;
            var r = Array.isArray(t);
            if (r !== Array.isArray(n)) return !1;
            var i = Object.prototype.toString.call(t) === C;
            if (i !== (Object.prototype.toString.call(n) === C)) return !1;
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
                p = function (t) {
                    return e(d[t], f[t]);
                };
            return u.every(p);
        },
        P = function (e, t, n) {
            return T(e)
                ? Object.keys(e).reduce(function (i, a) {
                      var s = !T(t) || !R(e[a], t[a]);
                      return n.includes(a) ? (s && console.warn('Unsupported prop change: options.'.concat(a, ' is not a mutable property.')), i) : s ? r(r({}, i || {}), {}, o({}, a, e[a])) : i;
                  }, null)
                : null;
        },
        w = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        D = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            if (null === e || A(e)) return e;
            throw Error(t);
        },
        x = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w;
            if (N(e))
                return {
                    tag: 'async',
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return D(e, t);
                    })
                };
            var n = D(e, t);
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
        M = t.createContext(null);
    M.displayName = 'ElementsContext';
    var k = function (e, t) {
            if (!e) throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(t, ' in an <Elements> provider.'));
            return e;
        },
        j = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return x(n);
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
                            var e = P(r, d, ['clientSecret', 'fonts']);
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
                t.createElement(M.Provider, { value: s }, i)
            );
        };
    j.propTypes = {
        stripe: O.any,
        options: O.object
    };
    var U = function (e) {
            return k(t.useContext(M), e);
        },
        G = function () {
            return U('calls useElements()').elements;
        },
        B = function (e) {
            return (0, e.children)(U('mounts <ElementsConsumer>'));
        };
    B.propTypes = { children: O.func.isRequired };
    var Z = ['on', 'session'],
        F = t.createContext(null);
    F.displayName = 'CustomCheckoutSdkContext';
    var V = function (e, t) {
            if (!e) throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(t, ' in an <CustomCheckoutProvider> provider.'));
            return e;
        },
        H = t.createContext(null);
    H.displayName = 'CustomCheckoutContext';
    var W = function (e, t) {
            if (!e) return null;
            e.on, e.session;
            var n = s(e, Z);
            return t ? r(r({}, n), t) : r(r({}, n), e.session());
        },
        Y = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        K = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return x(n, Y);
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
                p = function (e, t) {
                    f(function (n) {
                        return n.stripe && n.customCheckoutSdk
                            ? n
                            : {
                                  stripe: e,
                                  customCheckoutSdk: t
                              };
                    });
                },
                _ = t.useRef(!1);
            t.useEffect(
                function () {
                    var e = !0;
                    return (
                        'async' !== o.tag || d.stripe
                            ? 'sync' === o.tag &&
                              o.stripe &&
                              !_.current &&
                              ((_.current = !0),
                              o.stripe.initCustomCheckout(r).then(function (e) {
                                  e && (p(o.stripe, e), e.on('change', c));
                              }))
                            : o.stripePromise.then(function (t) {
                                  t &&
                                      e &&
                                      !_.current &&
                                      ((_.current = !0),
                                      t.initCustomCheckout(r).then(function (e) {
                                          e && (p(t, e), e.on('change', c));
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
                        !r.clientSecret || T(m) || R(r.clientSecret, m.clientSecret) || console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                        var e,
                            t,
                            n = null == m ? void 0 : null === (e = m.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                            i = null == r ? void 0 : null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                        i && !R(i, n) && d.customCheckoutSdk.changeAppearance(i);
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
                    return W(d.customCheckoutSdk, s);
                },
                [d.customCheckoutSdk, s]
            );
            return d.customCheckoutSdk ? t.createElement(F.Provider, { value: d }, t.createElement(H.Provider, { value: g }, i)) : null;
        };
    K.propTypes = {
        stripe: O.any,
        options: O.shape({
            clientSecret: O.string.isRequired,
            elementsOptions: O.object
        }).isRequired
    };
    var z = function (e) {
            return V(t.useContext(F), e);
        },
        q = function (e) {
            var n = t.useContext(F),
                r = t.useContext(M);
            if (n && r) throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
            return n ? V(n, e) : k(r, e);
        },
        Q = function () {
            z('calls useCustomCheckout()');
            var e = t.useContext(H);
            if (!e) throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
            return e;
        },
        X = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        J = function (e, n) {
            var r = ''.concat(X(e), 'Element'),
                i = function (n) {
                    var i,
                        o = n.id,
                        a = n.className,
                        s = n.options,
                        c = void 0 === s ? {} : s,
                        u = n.onBlur,
                        d = n.onFocus,
                        f = n.onReady,
                        p = n.onChange,
                        _ = n.onEscape,
                        h = n.onClick,
                        m = n.onLoadError,
                        g = n.onLoaderStart,
                        E = n.onNetworksChange,
                        v = n.onConfirm,
                        b = n.onCancel,
                        y = n.onShippingAddressChange,
                        O = n.onShippingRateChange,
                        T = q('mounts <'.concat(r, '>')),
                        N = 'elements' in T ? T.elements : null,
                        A = 'customCheckoutSdk' in T ? T.customCheckoutSdk : null,
                        C = l(t.useState(null), 2),
                        R = C[0],
                        w = C[1],
                        D = t.useRef(null),
                        x = t.useRef(null);
                    S(R, 'blur', u),
                        S(R, 'focus', d),
                        S(R, 'escape', _),
                        S(R, 'click', h),
                        S(R, 'loaderror', m),
                        S(R, 'loaderstart', g),
                        S(R, 'networkschange', E),
                        S(R, 'confirm', v),
                        S(R, 'cancel', b),
                        S(R, 'shippingaddresschange', y),
                        S(R, 'shippingratechange', O),
                        S(R, 'change', p),
                        f &&
                            (i =
                                'expressCheckout' === e
                                    ? f
                                    : function () {
                                          f(R);
                                      }),
                        S(R, 'ready', i),
                        t.useLayoutEffect(
                            function () {
                                if (null === D.current && null !== x.current && (N || A)) {
                                    var t = null;
                                    A ? (t = A.createElement(e, c)) : N && (t = N.create(e, c)), (D.current = t), w(t), t && t.mount(x.current);
                                }
                            },
                            [N, A, c]
                        );
                    var L = I(c);
                    return (
                        t.useEffect(
                            function () {
                                if (D.current) {
                                    var e = P(c, L, ['paymentRequest']);
                                    e && D.current.update(e);
                                }
                            },
                            [c, L]
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
                            ref: x
                        })
                    );
                },
                o = function (e) {
                    q('mounts <'.concat(r, '>'));
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
                    options: O.object
                }),
                (a.displayName = r),
                (a.__elementType = e),
                a
            );
        },
        $ = 'undefined' == typeof window,
        ee = t.createContext(null);
    ee.displayName = 'EmbeddedCheckoutProviderContext';
    var et = function () {
            var e = t.useContext(ee);
            if (!e) throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
            return e;
        },
        en = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        er = function (e) {
            var n = e.stripe,
                r = e.options,
                i = e.children,
                o = t.useMemo(
                    function () {
                        return x(n, en);
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
            var p = I(r);
            return (
                t.useEffect(
                    function () {
                        if (null != p) {
                            if (null == r) {
                                console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                                return;
                            }
                            void 0 === r.clientSecret && void 0 === r.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != p.clientSecret && r.clientSecret !== p.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != p.fetchClientSecret && r.fetchClientSecret !== p.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != p.onComplete && r.onComplete !== p.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                        }
                    },
                    [p, r]
                ),
                t.createElement(ee.Provider, { value: u }, i)
            );
        },
        ei = function (e) {
            var n = e.id,
                r = e.className,
                i = et().embeddedCheckout,
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
        eo = function (e) {
            var n = e.id,
                r = e.className;
            return (
                et(),
                t.createElement('div', {
                    id: n,
                    className: r
                })
            );
        },
        ea = $ ? eo : ei,
        es = function () {
            return q('calls useStripe()').stripe;
        },
        el = J('auBankAccount', $),
        ec = J('card', $),
        eu = J('cardNumber', $),
        ed = J('cardExpiry', $),
        ef = J('cardCvc', $),
        ep = J('fpxBank', $),
        e_ = J('iban', $),
        eh = J('idealBank', $),
        em = J('p24Bank', $),
        eg = J('epsBank', $),
        eE = J('payment', $),
        ev = J('expressCheckout', $),
        eb = J('paymentRequestButton', $),
        ey = J('linkAuthentication', $),
        eO = J('address', $),
        eS = J('shippingAddress', $),
        eI = J('paymentMethodMessaging', $),
        eT = J('affirmMessage', $),
        eN = J('afterpayClearpayMessage', $);
    (e.AddressElement = eO), (e.AffirmMessageElement = eT), (e.AfterpayClearpayMessageElement = eN), (e.AuBankAccountElement = el), (e.CardCvcElement = ef), (e.CardElement = ec), (e.CardExpiryElement = ed), (e.CardNumberElement = eu), (e.CustomCheckoutProvider = K), (e.Elements = j), (e.ElementsConsumer = B), (e.EmbeddedCheckout = ea), (e.EmbeddedCheckoutProvider = er), (e.EpsBankElement = eg), (e.ExpressCheckoutElement = ev), (e.FpxBankElement = ep), (e.IbanElement = e_), (e.IdealBankElement = eh), (e.LinkAuthenticationElement = ey), (e.P24BankElement = em), (e.PaymentElement = eE), (e.PaymentMethodMessagingElement = eI), (e.PaymentRequestButtonElement = eb), (e.ShippingAddressElement = eS), (e.useCustomCheckout = Q), (e.useElements = G), (e.useStripe = es);
});
