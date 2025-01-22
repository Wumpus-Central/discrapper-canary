!(function (e, i) {
    i(n, r(192379));
})(0, function (e, n) {
    function r(e, n) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n &&
                (i = i.filter(function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                })),
                r.push.apply(r, i);
        }
        return r;
    }
    function i(e) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2
                ? r(Object(i), !0).forEach(function (n) {
                      o(e, n, i[n]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                  : r(Object(i)).forEach(function (n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(i, n));
                    });
        }
        return e;
    }
    function a(e) {
        return (a =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  })(e);
    }
    function o(e, n, r) {
        return (
            n in e
                ? Object.defineProperty(e, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[n] = r),
            e
        );
    }
    function s(e, n) {
        if (null == e) return {};
        var r,
            i,
            a = {},
            o = Object.keys(e);
        for (i = 0; i < o.length; i++) (r = o[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
        return a;
    }
    function l(e, n) {
        if (null == e) return {};
        var r,
            i,
            a = s(e, n);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (i = 0; i < o.length; i++) {
                if (((r = o[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
        }
        return a;
    }
    function u(e, n) {
        return c(e) || d(e, n) || f(e, n) || h();
    }
    function c(e) {
        if (Array.isArray(e)) return e;
    }
    function d(e, n) {
        var r,
            i,
            a = e && (('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']);
        if (null != a) {
            var o = [],
                s = !0,
                l = !1;
            try {
                for (a = a.call(e); !(s = (r = a.next()).done) && (o.push(r.value), !n || o.length !== n); s = !0);
            } catch (e) {
                (l = !0), (i = e);
            } finally {
                try {
                    !s && null != a.return && a.return();
                } finally {
                    if (l) throw i;
                }
            }
            return o;
        }
    }
    function f(e, n) {
        if (e) {
            if ('string' == typeof e) return p(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, n);
        }
    }
    function p(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
        return i;
    }
    function h() {
        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var m,
        g,
        E,
        v,
        y = { exports: {} };
    function b() {
        return g ? m : ((g = 1), (m = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
    }
    function I() {
        if (v) return E;
        v = 1;
        var e = b();
        function n() {}
        function r() {}
        return (
            (r.resetWarningCache = n),
            (E = function () {
                function i(n, r, i, a, o, s) {
                    if (s !== e) {
                        var l = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                        throw ((l.name = 'Invariant Violation'), l);
                    }
                }
                function a() {
                    return i;
                }
                i.isRequired = i;
                var o = {
                    array: i,
                    bool: i,
                    func: i,
                    number: i,
                    object: i,
                    string: i,
                    symbol: i,
                    any: i,
                    arrayOf: a,
                    element: i,
                    elementType: i,
                    instanceOf: a,
                    node: i,
                    objectOf: a,
                    oneOf: a,
                    oneOfType: a,
                    shape: a,
                    exact: a,
                    checkPropTypes: r,
                    resetWarningCache: n
                };
                return (o.PropTypes = o), o;
            })
        );
    }
    y.exports = I()();
    var T = _(y.exports),
        S = function (e, r, i) {
            var a = !!i,
                o = n.useRef(i);
            n.useEffect(
                function () {
                    o.current = i;
                },
                [i]
            ),
                n.useEffect(
                    function () {
                        if (!a || !e) return function () {};
                        var n = function () {
                            o.current && o.current.apply(o, arguments);
                        };
                        return (
                            e.on(r, n),
                            function () {
                                e.off(r, n);
                            }
                        );
                    },
                    [a, r, e, o]
                );
        },
        A = function (e) {
            var r = n.useRef(e);
            return (
                n.useEffect(
                    function () {
                        r.current = e;
                    },
                    [e]
                ),
                r.current
            );
        },
        C = function (e) {
            return null !== e && 'object' === a(e);
        },
        N = function (e) {
            return C(e) && 'function' == typeof e.then;
        },
        R = function (e) {
            return C(e) && 'function' == typeof e.elements && 'function' == typeof e.createToken && 'function' == typeof e.createPaymentMethod && 'function' == typeof e.confirmCardPayment;
        },
        O = '[object Object]',
        D = function e(n, r) {
            if (!C(n) || !C(r)) return n === r;
            var i = Array.isArray(n);
            if (i !== Array.isArray(r)) return !1;
            var a = Object.prototype.toString.call(n) === O;
            if (a !== (Object.prototype.toString.call(r) === O)) return !1;
            if (!a && !i) return n === r;
            var o = Object.keys(n),
                s = Object.keys(r);
            if (o.length !== s.length) return !1;
            for (var l = {}, u = 0; u < o.length; u += 1) l[o[u]] = !0;
            for (var c = 0; c < s.length; c += 1) l[s[c]] = !0;
            var d = Object.keys(l);
            if (d.length !== o.length) return !1;
            var f = n,
                p = r,
                h = function (n) {
                    return e(f[n], p[n]);
                };
            return d.every(h);
        },
        x = function (e, n, r) {
            return C(e)
                ? Object.keys(e).reduce(function (a, s) {
                      var l = !C(n) || !D(e[s], n[s]);
                      return r.includes(s) ? (l && console.warn('Unsupported prop change: options.'.concat(s, ' is not a mutable property.')), a) : l ? i(i({}, a || {}), {}, o({}, s, e[s])) : a;
                  }, null)
                : null;
        },
        L = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        w = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
            if (null === e || R(e)) return e;
            throw Error(n);
        },
        P = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
            if (N(e))
                return {
                    tag: 'async',
                    stripePromise: Promise.resolve(e).then(function (e) {
                        return w(e, n);
                    })
                };
            var r = w(e, n);
            return null === r
                ? { tag: 'empty' }
                : {
                      tag: 'sync',
                      stripe: r
                  };
        },
        M = function (e) {
            if (!!e && !!e._registerWrapper && !!e.registerAppInfo)
                e._registerWrapper({
                    name: 'react-stripe-js',
                    version: '2.7.0'
                }),
                    e.registerAppInfo({
                        name: 'react-stripe-js',
                        version: '2.7.0',
                        url: 'https://stripe.com/docs/stripe-js/react'
                    });
        },
        k = n.createContext(null);
    k.displayName = 'ElementsContext';
    var U = function (e, n) {
            if (!e) throw Error('Could not find Elements context; You need to wrap the part of your app that '.concat(n, ' in an <Elements> provider.'));
            return e;
        },
        B = function (e) {
            var r = e.stripe,
                i = e.options,
                a = e.children,
                o = n.useMemo(
                    function () {
                        return P(r);
                    },
                    [r]
                ),
                s = u(
                    n.useState(function () {
                        return {
                            stripe: 'sync' === o.tag ? o.stripe : null,
                            elements: 'sync' === o.tag ? o.stripe.elements(i) : null
                        };
                    }),
                    2
                ),
                l = s[0],
                c = s[1];
            n.useEffect(
                function () {
                    var e = !0,
                        n = function (e) {
                            c(function (n) {
                                return n.stripe
                                    ? n
                                    : {
                                          stripe: e,
                                          elements: e.elements(i)
                                      };
                            });
                        };
                    return (
                        'async' !== o.tag || l.stripe
                            ? 'sync' === o.tag && !l.stripe && n(o.stripe)
                            : o.stripePromise.then(function (r) {
                                  r && e && n(r);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, l, i]
            );
            var d = A(r);
            n.useEffect(
                function () {
                    null !== d && d !== r && console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
                },
                [d, r]
            );
            var f = A(i);
            return (
                n.useEffect(
                    function () {
                        if (!!l.elements) {
                            var e = x(i, f, ['clientSecret', 'fonts']);
                            e && l.elements.update(e);
                        }
                    },
                    [i, f, l.elements]
                ),
                n.useEffect(
                    function () {
                        M(l.stripe);
                    },
                    [l.stripe]
                ),
                n.createElement(k.Provider, { value: l }, a)
            );
        };
    B.propTypes = {
        stripe: T.any,
        options: T.object
    };
    var G = function (e) {
            return U(n.useContext(k), e);
        },
        Z = function () {
            return G('calls useElements()').elements;
        },
        F = function (e) {
            return (0, e.children)(G('mounts <ElementsConsumer>'));
        };
    F.propTypes = { children: T.func.isRequired };
    var V = ['on', 'session'],
        j = n.createContext(null);
    j.displayName = 'CustomCheckoutSdkContext';
    var H = function (e, n) {
            if (!e) throw Error('Could not find CustomCheckoutProvider context; You need to wrap the part of your app that '.concat(n, ' in an <CustomCheckoutProvider> provider.'));
            return e;
        },
        Y = n.createContext(null);
    Y.displayName = 'CustomCheckoutContext';
    var W = function (e, n) {
            if (!e) return null;
            e.on, e.session;
            var r = l(e, V);
            return n ? i(i({}, r), n) : i(i({}, r), e.session());
        },
        K = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        z = function (e) {
            var r = e.stripe,
                i = e.options,
                a = e.children,
                o = n.useMemo(
                    function () {
                        return P(r, K);
                    },
                    [r]
                ),
                s = u(n.useState(null), 2),
                l = s[0],
                c = s[1],
                d = u(
                    n.useState(function () {
                        return {
                            stripe: 'sync' === o.tag ? o.stripe : null,
                            customCheckoutSdk: null
                        };
                    }),
                    2
                ),
                f = d[0],
                p = d[1],
                h = function (e, n) {
                    p(function (r) {
                        return r.stripe && r.customCheckoutSdk
                            ? r
                            : {
                                  stripe: e,
                                  customCheckoutSdk: n
                              };
                    });
                },
                _ = n.useRef(!1);
            n.useEffect(
                function () {
                    var e = !0;
                    return (
                        'async' !== o.tag || f.stripe
                            ? 'sync' === o.tag &&
                              o.stripe &&
                              !_.current &&
                              ((_.current = !0),
                              o.stripe.initCustomCheckout(i).then(function (e) {
                                  e && (h(o.stripe, e), e.on('change', c));
                              }))
                            : o.stripePromise.then(function (n) {
                                  n &&
                                      e &&
                                      !_.current &&
                                      ((_.current = !0),
                                      n.initCustomCheckout(i).then(function (e) {
                                          e && (h(n, e), e.on('change', c));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [o, f, i, c]
            );
            var m = A(r);
            n.useEffect(
                function () {
                    null !== m && m !== r && console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [m, r]
            );
            var g = A(i);
            n.useEffect(
                function () {
                    if (!!f.customCheckoutSdk) {
                        i.clientSecret && !C(g) && !D(i.clientSecret, g.clientSecret) && console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                        var e,
                            n,
                            r = null == g ? void 0 : null === (e = g.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                            a = null == i ? void 0 : null === (n = i.elementsOptions) || void 0 === n ? void 0 : n.appearance;
                        a && !D(a, r) && f.customCheckoutSdk.changeAppearance(a);
                    }
                },
                [i, g, f.customCheckoutSdk]
            ),
                n.useEffect(
                    function () {
                        M(f.stripe);
                    },
                    [f.stripe]
                );
            var E = n.useMemo(
                function () {
                    return W(f.customCheckoutSdk, l);
                },
                [f.customCheckoutSdk, l]
            );
            return f.customCheckoutSdk ? n.createElement(j.Provider, { value: f }, n.createElement(Y.Provider, { value: E }, a)) : null;
        };
    z.propTypes = {
        stripe: T.any,
        options: T.shape({
            clientSecret: T.string.isRequired,
            elementsOptions: T.object
        }).isRequired
    };
    var q = function (e) {
            return H(n.useContext(j), e);
        },
        Q = function (e) {
            var r = n.useContext(j),
                i = n.useContext(k);
            if (r && i) throw Error('You cannot wrap the part of your app that '.concat(e, ' in both <CustomCheckoutProvider> and <Elements> providers.'));
            return r ? H(r, e) : U(i, e);
        },
        X = function () {
            q('calls useCustomCheckout()');
            var e = n.useContext(Y);
            if (!e) throw Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
            return e;
        },
        J = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        },
        $ = function (e, r) {
            var i = ''.concat(J(e), 'Element'),
                a = function (r) {
                    var a,
                        o = r.id,
                        s = r.className,
                        l = r.options,
                        c = void 0 === l ? {} : l,
                        d = r.onBlur,
                        f = r.onFocus,
                        p = r.onReady,
                        h = r.onChange,
                        _ = r.onEscape,
                        m = r.onClick,
                        g = r.onLoadError,
                        E = r.onLoaderStart,
                        v = r.onNetworksChange,
                        y = r.onConfirm,
                        b = r.onCancel,
                        I = r.onShippingAddressChange,
                        T = r.onShippingRateChange,
                        C = Q('mounts <'.concat(i, '>')),
                        N = 'elements' in C ? C.elements : null,
                        R = 'customCheckoutSdk' in C ? C.customCheckoutSdk : null,
                        O = u(n.useState(null), 2),
                        D = O[0],
                        L = O[1],
                        w = n.useRef(null),
                        P = n.useRef(null);
                    S(D, 'blur', d),
                        S(D, 'focus', f),
                        S(D, 'escape', _),
                        S(D, 'click', m),
                        S(D, 'loaderror', g),
                        S(D, 'loaderstart', E),
                        S(D, 'networkschange', v),
                        S(D, 'confirm', y),
                        S(D, 'cancel', b),
                        S(D, 'shippingaddresschange', I),
                        S(D, 'shippingratechange', T),
                        S(D, 'change', h),
                        p &&
                            (a =
                                'expressCheckout' === e
                                    ? p
                                    : function () {
                                          p(D);
                                      }),
                        S(D, 'ready', a),
                        n.useLayoutEffect(
                            function () {
                                if (null === w.current && null !== P.current && (N || R)) {
                                    var n = null;
                                    R ? (n = R.createElement(e, c)) : N && (n = N.create(e, c)), (w.current = n), L(n), n && n.mount(P.current);
                                }
                            },
                            [N, R, c]
                        );
                    var M = A(c);
                    return (
                        n.useEffect(
                            function () {
                                if (!!w.current) {
                                    var e = x(c, M, ['paymentRequest']);
                                    e && w.current.update(e);
                                }
                            },
                            [c, M]
                        ),
                        n.useLayoutEffect(function () {
                            return function () {
                                if (w.current && 'function' == typeof w.current.destroy)
                                    try {
                                        w.current.destroy(), (w.current = null);
                                    } catch (e) {}
                            };
                        }, []),
                        n.createElement('div', {
                            id: o,
                            className: s,
                            ref: P
                        })
                    );
                },
                o = function (e) {
                    Q('mounts <'.concat(i, '>'));
                    var r = e.id,
                        a = e.className;
                    return n.createElement('div', {
                        id: r,
                        className: a
                    });
                },
                s = r ? o : a;
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
                    options: T.object
                }),
                (s.displayName = i),
                (s.__elementType = e),
                s
            );
        },
        ee = 'undefined' == typeof window,
        et = n.createContext(null);
    et.displayName = 'EmbeddedCheckoutProviderContext';
    var en = function () {
            var e = n.useContext(et);
            if (!e) throw Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
            return e;
        },
        er = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        ei = function (e) {
            var r = e.stripe,
                i = e.options,
                a = e.children,
                o = n.useMemo(
                    function () {
                        return P(r, er);
                    },
                    [r]
                ),
                s = n.useRef(null),
                l = n.useRef(null),
                c = u(n.useState({ embeddedCheckout: null }), 2),
                d = c[0],
                f = c[1];
            n.useEffect(
                function () {
                    if (!l.current && !s.current) {
                        var e = function (e) {
                            !l.current &&
                                !s.current &&
                                ((l.current = e),
                                (s.current = l.current.initEmbeddedCheckout(i).then(function (e) {
                                    f({ embeddedCheckout: e });
                                })));
                        };
                        'async' === o.tag && !l.current && (i.clientSecret || i.fetchClientSecret)
                            ? o.stripePromise.then(function (n) {
                                  n && e(n);
                              })
                            : 'sync' === o.tag && !l.current && (i.clientSecret || i.fetchClientSecret) && e(o.stripe);
                    }
                },
                [o, i, d, l]
            ),
                n.useEffect(
                    function () {
                        return function () {
                            d.embeddedCheckout
                                ? ((s.current = null), d.embeddedCheckout.destroy())
                                : s.current &&
                                  s.current.then(function () {
                                      (s.current = null), d.embeddedCheckout && d.embeddedCheckout.destroy();
                                  });
                        };
                    },
                    [d.embeddedCheckout]
                ),
                n.useEffect(
                    function () {
                        M(l);
                    },
                    [l]
                );
            var p = A(r);
            n.useEffect(
                function () {
                    null !== p && p !== r && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [p, r]
            );
            var h = A(i);
            return (
                n.useEffect(
                    function () {
                        if (null != h) {
                            if (null == i) {
                                console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                                return;
                            }
                            void 0 === i.clientSecret && void 0 === i.fetchClientSecret && console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.'), null != h.clientSecret && i.clientSecret !== h.clientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != h.fetchClientSecret && i.fetchClientSecret !== h.fetchClientSecret && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.'), null != h.onComplete && i.onComplete !== h.onComplete && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                        }
                    },
                    [h, i]
                ),
                n.createElement(et.Provider, { value: d }, a)
            );
        },
        ea = function (e) {
            var r = e.id,
                i = e.className,
                a = en().embeddedCheckout,
                o = n.useRef(!1),
                s = n.useRef(null);
            return (
                n.useLayoutEffect(
                    function () {
                        return (
                            !o.current && a && null !== s.current && (a.mount(s.current), (o.current = !0)),
                            function () {
                                if (o.current && a)
                                    try {
                                        a.unmount(), (o.current = !1);
                                    } catch (e) {}
                            }
                        );
                    },
                    [a]
                ),
                n.createElement('div', {
                    ref: s,
                    id: r,
                    className: i
                })
            );
        },
        eo = function (e) {
            var r = e.id,
                i = e.className;
            return (
                en(),
                n.createElement('div', {
                    id: r,
                    className: i
                })
            );
        },
        es = ee ? eo : ea,
        el = function () {
            return Q('calls useStripe()').stripe;
        },
        eu = $('auBankAccount', ee),
        ec = $('card', ee),
        ed = $('cardNumber', ee),
        ef = $('cardExpiry', ee),
        ep = $('cardCvc', ee),
        eh = $('fpxBank', ee),
        e_ = $('iban', ee),
        em = $('idealBank', ee),
        eg = $('p24Bank', ee),
        eE = $('epsBank', ee),
        ev = $('payment', ee),
        ey = $('expressCheckout', ee),
        eb = $('paymentRequestButton', ee),
        eI = $('linkAuthentication', ee),
        eT = $('address', ee),
        eS = $('shippingAddress', ee),
        eA = $('paymentMethodMessaging', ee),
        eC = $('affirmMessage', ee),
        eN = $('afterpayClearpayMessage', ee);
    (e.AddressElement = eT), (e.AffirmMessageElement = eC), (e.AfterpayClearpayMessageElement = eN), (e.AuBankAccountElement = eu), (e.CardCvcElement = ep), (e.CardElement = ec), (e.CardExpiryElement = ef), (e.CardNumberElement = ed), (e.CustomCheckoutProvider = z), (e.Elements = B), (e.ElementsConsumer = F), (e.EmbeddedCheckout = es), (e.EmbeddedCheckoutProvider = ei), (e.EpsBankElement = eE), (e.ExpressCheckoutElement = ey), (e.FpxBankElement = eh), (e.IbanElement = e_), (e.IdealBankElement = em), (e.LinkAuthenticationElement = eI), (e.P24BankElement = eg), (e.PaymentElement = ev), (e.PaymentMethodMessagingElement = eA), (e.PaymentRequestButtonElement = eb), (e.ShippingAddressElement = eS), (e.useCustomCheckout = X), (e.useElements = Z), (e.useStripe = el);
});
