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
                      s(e, n, i[n]);
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
    function s(e, n, r) {
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
    function o(e, n) {
        if (null == e) return {};
        var r,
            i,
            a = {},
            s = Object.keys(e);
        for (i = 0; i < s.length; i++) (r = s[i]), !(n.indexOf(r) >= 0) && (a[r] = e[r]);
        return a;
    }
    function l(e, n) {
        if (null == e) return {};
        var r,
            i,
            a = o(e, n);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            for (i = 0; i < s.length; i++) {
                if (((r = s[i]), !(n.indexOf(r) >= 0))) Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
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
            var s = [],
                o = !0,
                l = !1;
            try {
                for (a = a.call(e); !(o = (r = a.next()).done) && (s.push(r.value), !n || s.length !== n); o = !0);
            } catch (e) {
                (l = !0), (i = e);
            } finally {
                try {
                    !o && null != a.return && a.return();
                } finally {
                    if (l) throw i;
                }
            }
            return s;
        }
    }
    function f(e, n) {
        if (e) {
            if ('string' == typeof e) return _(e, n);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, n);
        }
    }
    function _(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var r = 0, i = Array(n); r < n; r++) i[r] = e[r];
        return i;
    }
    function h() {
        throw TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function p(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
    }
    var m,
        g,
        E,
        v,
        I = { exports: {} };
    function T() {
        return g ? m : ((g = 1), (m = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'));
    }
    function b() {
        if (v) return E;
        v = 1;
        var e = T();
        function n() {}
        function r() {}
        return (
            (r.resetWarningCache = n),
            (E = function () {
                function i(n, r, i, a, s, o) {
                    if (o !== e) {
                        var l = Error('Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types');
                        throw ((l.name = 'Invariant Violation'), l);
                    }
                }
                function a() {
                    return i;
                }
                i.isRequired = i;
                var s = {
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
                return (s.PropTypes = s), s;
            })
        );
    }
    I.exports = b()();
    var y = p(I.exports),
        S = function (e, r, i) {
            var a = !!i,
                s = n.useRef(i);
            n.useEffect(
                function () {
                    s.current = i;
                },
                [i]
            ),
                n.useEffect(
                    function () {
                        if (!a || !e) return function () {};
                        var n = function () {
                            s.current && s.current.apply(s, arguments);
                        };
                        return (
                            e.on(r, n),
                            function () {
                                e.off(r, n);
                            }
                        );
                    },
                    [a, r, e, s]
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
        N = function (e) {
            return null !== e && 'object' === a(e);
        },
        C = function (e) {
            return N(e) && 'function' == typeof e.then;
        },
        R = function (e) {
            return N(e) && 'function' == typeof e.elements && 'function' == typeof e.createToken && 'function' == typeof e.createPaymentMethod && 'function' == typeof e.confirmCardPayment;
        },
        O = '[object Object]',
        D = function e(n, r) {
            if (!N(n) || !N(r)) return n === r;
            var i = Array.isArray(n);
            if (i !== Array.isArray(r)) return !1;
            var a = Object.prototype.toString.call(n) === O;
            if (a !== (Object.prototype.toString.call(r) === O)) return !1;
            if (!a && !i) return n === r;
            var s = Object.keys(n),
                o = Object.keys(r);
            if (s.length !== o.length) return !1;
            for (var l = {}, u = 0; u < s.length; u += 1) l[s[u]] = !0;
            for (var c = 0; c < o.length; c += 1) l[o[c]] = !0;
            var d = Object.keys(l);
            if (d.length !== s.length) return !1;
            var f = n,
                _ = r,
                h = function (n) {
                    return e(f[n], _[n]);
                };
            return d.every(h);
        },
        L = function (e, n, r) {
            return N(e)
                ? Object.keys(e).reduce(function (a, o) {
                      var l = !N(n) || !D(e[o], n[o]);
                      return r.includes(o) ? (l && console.warn('Unsupported prop change: options.'.concat(o, ' is not a mutable property.')), a) : l ? i(i({}, a || {}), {}, s({}, o, e[o])) : a;
                  }, null)
                : null;
        },
        x = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.',
        w = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
            if (null === e || R(e)) return e;
            throw Error(n);
        },
        P = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x;
            if (C(e))
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
                s = n.useMemo(
                    function () {
                        return P(r);
                    },
                    [r]
                ),
                o = u(
                    n.useState(function () {
                        return {
                            stripe: 'sync' === s.tag ? s.stripe : null,
                            elements: 'sync' === s.tag ? s.stripe.elements(i) : null
                        };
                    }),
                    2
                ),
                l = o[0],
                c = o[1];
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
                        'async' !== s.tag || l.stripe
                            ? 'sync' === s.tag && !l.stripe && n(s.stripe)
                            : s.stripePromise.then(function (r) {
                                  r && e && n(r);
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [s, l, i]
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
                            var e = L(i, f, ['clientSecret', 'fonts']);
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
        stripe: y.any,
        options: y.object
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
    F.propTypes = { children: y.func.isRequired };
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
                s = n.useMemo(
                    function () {
                        return P(r, K);
                    },
                    [r]
                ),
                o = u(n.useState(null), 2),
                l = o[0],
                c = o[1],
                d = u(
                    n.useState(function () {
                        return {
                            stripe: 'sync' === s.tag ? s.stripe : null,
                            customCheckoutSdk: null
                        };
                    }),
                    2
                ),
                f = d[0],
                _ = d[1],
                h = function (e, n) {
                    _(function (r) {
                        return r.stripe && r.customCheckoutSdk
                            ? r
                            : {
                                  stripe: e,
                                  customCheckoutSdk: n
                              };
                    });
                },
                p = n.useRef(!1);
            n.useEffect(
                function () {
                    var e = !0;
                    return (
                        'async' !== s.tag || f.stripe
                            ? 'sync' === s.tag &&
                              s.stripe &&
                              !p.current &&
                              ((p.current = !0),
                              s.stripe.initCustomCheckout(i).then(function (e) {
                                  e && (h(s.stripe, e), e.on('change', c));
                              }))
                            : s.stripePromise.then(function (n) {
                                  n &&
                                      e &&
                                      !p.current &&
                                      ((p.current = !0),
                                      n.initCustomCheckout(i).then(function (e) {
                                          e && (h(n, e), e.on('change', c));
                                      }));
                              }),
                        function () {
                            e = !1;
                        }
                    );
                },
                [s, f, i, c]
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
                        i.clientSecret && !N(g) && !D(i.clientSecret, g.clientSecret) && console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
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
        stripe: y.any,
        options: y.shape({
            clientSecret: y.string.isRequired,
            elementsOptions: y.object
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
                        s = r.id,
                        o = r.className,
                        l = r.options,
                        c = void 0 === l ? {} : l,
                        d = r.onBlur,
                        f = r.onFocus,
                        _ = r.onReady,
                        h = r.onChange,
                        p = r.onEscape,
                        m = r.onClick,
                        g = r.onLoadError,
                        E = r.onLoaderStart,
                        v = r.onNetworksChange,
                        I = r.onConfirm,
                        T = r.onCancel,
                        b = r.onShippingAddressChange,
                        y = r.onShippingRateChange,
                        N = Q('mounts <'.concat(i, '>')),
                        C = 'elements' in N ? N.elements : null,
                        R = 'customCheckoutSdk' in N ? N.customCheckoutSdk : null,
                        O = u(n.useState(null), 2),
                        D = O[0],
                        x = O[1],
                        w = n.useRef(null),
                        P = n.useRef(null);
                    S(D, 'blur', d),
                        S(D, 'focus', f),
                        S(D, 'escape', p),
                        S(D, 'click', m),
                        S(D, 'loaderror', g),
                        S(D, 'loaderstart', E),
                        S(D, 'networkschange', v),
                        S(D, 'confirm', I),
                        S(D, 'cancel', T),
                        S(D, 'shippingaddresschange', b),
                        S(D, 'shippingratechange', y),
                        S(D, 'change', h),
                        _ &&
                            (a =
                                'expressCheckout' === e
                                    ? _
                                    : function () {
                                          _(D);
                                      }),
                        S(D, 'ready', a),
                        n.useLayoutEffect(
                            function () {
                                if (null === w.current && null !== P.current && (C || R)) {
                                    var n = null;
                                    R ? (n = R.createElement(e, c)) : C && (n = C.create(e, c)), (w.current = n), x(n), n && n.mount(P.current);
                                }
                            },
                            [C, R, c]
                        );
                    var M = A(c);
                    return (
                        n.useEffect(
                            function () {
                                if (!!w.current) {
                                    var e = L(c, M, ['paymentRequest']);
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
                            id: s,
                            className: o,
                            ref: P
                        })
                    );
                },
                s = function (e) {
                    Q('mounts <'.concat(i, '>'));
                    var r = e.id,
                        a = e.className;
                    return n.createElement('div', {
                        id: r,
                        className: a
                    });
                },
                o = r ? s : a;
            return (
                (o.propTypes = {
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
                    options: y.object
                }),
                (o.displayName = i),
                (o.__elementType = e),
                o
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
                s = n.useMemo(
                    function () {
                        return P(r, er);
                    },
                    [r]
                ),
                o = n.useRef(null),
                l = n.useRef(null),
                c = u(n.useState({ embeddedCheckout: null }), 2),
                d = c[0],
                f = c[1];
            n.useEffect(
                function () {
                    if (!l.current && !o.current) {
                        var e = function (e) {
                            !l.current &&
                                !o.current &&
                                ((l.current = e),
                                (o.current = l.current.initEmbeddedCheckout(i).then(function (e) {
                                    f({ embeddedCheckout: e });
                                })));
                        };
                        'async' === s.tag && !l.current && (i.clientSecret || i.fetchClientSecret)
                            ? s.stripePromise.then(function (n) {
                                  n && e(n);
                              })
                            : 'sync' === s.tag && !l.current && (i.clientSecret || i.fetchClientSecret) && e(s.stripe);
                    }
                },
                [s, i, d, l]
            ),
                n.useEffect(
                    function () {
                        return function () {
                            d.embeddedCheckout
                                ? ((o.current = null), d.embeddedCheckout.destroy())
                                : o.current &&
                                  o.current.then(function () {
                                      (o.current = null), d.embeddedCheckout && d.embeddedCheckout.destroy();
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
            var _ = A(r);
            n.useEffect(
                function () {
                    null !== _ && _ !== r && console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                },
                [_, r]
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
                s = n.useRef(!1),
                o = n.useRef(null);
            return (
                n.useLayoutEffect(
                    function () {
                        return (
                            !s.current && a && null !== o.current && (a.mount(o.current), (s.current = !0)),
                            function () {
                                if (s.current && a)
                                    try {
                                        a.unmount(), (s.current = !1);
                                    } catch (e) {}
                            }
                        );
                    },
                    [a]
                ),
                n.createElement('div', {
                    ref: o,
                    id: r,
                    className: i
                })
            );
        },
        es = function (e) {
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
        eo = ee ? es : ea,
        el = function () {
            return Q('calls useStripe()').stripe;
        },
        eu = $('auBankAccount', ee),
        ec = $('card', ee),
        ed = $('cardNumber', ee),
        ef = $('cardExpiry', ee),
        e_ = $('cardCvc', ee),
        eh = $('fpxBank', ee),
        ep = $('iban', ee),
        em = $('idealBank', ee),
        eg = $('p24Bank', ee),
        eE = $('epsBank', ee),
        ev = $('payment', ee),
        eI = $('expressCheckout', ee),
        eT = $('paymentRequestButton', ee),
        eb = $('linkAuthentication', ee),
        ey = $('address', ee),
        eS = $('shippingAddress', ee),
        eA = $('paymentMethodMessaging', ee),
        eN = $('affirmMessage', ee),
        eC = $('afterpayClearpayMessage', ee);
    (e.AddressElement = ey), (e.AffirmMessageElement = eN), (e.AfterpayClearpayMessageElement = eC), (e.AuBankAccountElement = eu), (e.CardCvcElement = e_), (e.CardElement = ec), (e.CardExpiryElement = ef), (e.CardNumberElement = ed), (e.CustomCheckoutProvider = z), (e.Elements = B), (e.ElementsConsumer = F), (e.EmbeddedCheckout = eo), (e.EmbeddedCheckoutProvider = ei), (e.EpsBankElement = eE), (e.ExpressCheckoutElement = eI), (e.FpxBankElement = eh), (e.IbanElement = ep), (e.IdealBankElement = em), (e.LinkAuthenticationElement = eb), (e.P24BankElement = eg), (e.PaymentElement = ev), (e.PaymentMethodMessagingElement = eA), (e.PaymentRequestButtonElement = eT), (e.ShippingAddressElement = eS), (e.useCustomCheckout = X), (e.useElements = Z), (e.useStripe = el);
});
