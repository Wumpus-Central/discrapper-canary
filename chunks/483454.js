(n.d(t, {
    M: () => P,
    h: () => C
}),
    n(467055),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(245364),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(570140),
    u = n(409813),
    d = n(626135),
    f = n(622999),
    _ = n(878836),
    p = n(561448),
    h = n(981631),
    m = n(231338),
    g = n(528157);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = I(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let T = [u.h8.PAYMENT_ELEMENT],
    S = i.memo(function (e) {
        var { originalPaymentType: t, wallets: n = [], analyticsContext: o, options: s, onChange: l, step: c } = e,
            _ = v(e, ['originalPaymentType', 'wallets', 'analyticsContext', 'options', 'onChange', 'step']);
        let m = i.useMemo(() => {
                if (null == t || !(0, p.qH)(t)) return;
                let e = (0, f.rI)();
                if ((0, p.Ko)(t)) {
                    let n = (0, p.ZK)(t, e);
                    return null != n ? [n] : [];
                }
                return [p.zK[t]];
            }, [t]),
            g = i.useCallback(
                (e) => {
                    if (c === u.h8.PAYMENT_ELEMENT && (null != l && l(e), null != o)) {
                        let { contextMetadata: t, activitySessionId: n, analyticsData: r } = o,
                            i = (0, p.hR)(e.value.type),
                            a = null != i ? p.Ho[i] : e.value.type;
                        d.default.track(h.rMx.PAYMENT_ELEMENT_CHANGED, {
                            load_id: t.loadId,
                            activity_session_id: n,
                            location: r.location,
                            payment_element_selected_method: a,
                            payment_source_type: i,
                            complete: e.complete,
                            empty: e.empty
                        });
                    }
                },
                [l, o, c]
            );
        return (0, r.jsx)(
            a.PaymentElement,
            b(
                {
                    id: 'stripe-payment-element',
                    options: b(
                        O(b({}, null != m && { paymentMethodOrder: m }), {
                            layout: { type: 'tabs' },
                            wallets: {
                                applePay: n.includes('applePay') ? 'auto' : 'never',
                                googlePay: n.includes('googlePay') ? 'auto' : 'never'
                            }
                        }),
                        s
                    ),
                    onChange: g
                },
                _
            )
        );
    }),
    A = i.memo(function (e) {
        var { options: t, renderWithoutElement: n, billingAddressInfo: o } = e,
            s = v(e, ['options', 'renderWithoutElement', 'billingAddressInfo']);
        let l = i.useMemo(() => {
                let { name: e, address: t } = (0, f.XZ)(o);
                return b(
                    { name: null != e ? e : null },
                    null != t && {
                        address: Object.fromEntries(
                            Object.entries(t).filter((e) => {
                                let [t, n] = e;
                                return void 0 !== n;
                            })
                        )
                    }
                );
            }, [o]),
            c = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        b(
                            {
                                options: b(
                                    {
                                        mode: 'billing',
                                        defaultValues: l
                                    },
                                    t
                                )
                            },
                            s
                        )
                    ),
                [l, t, s]
            );
        return n
            ? c
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, f.d2)(),
                  children: c
              });
    }),
    N = (e) => {
        let { step: t, billingAddressInfo: n, stripePaymentElementProps: o, stripeAddressElementProps: l, elementsRef: c, originalPaymentType: d, paymentElementSelectedType: f, analyticsContext: _ } = e,
            p = (0, a.useElements)();
        i.useEffect(() => {
            c.current = p;
        }, [p, c]);
        let h = T.includes(t) && null != f,
            E = t === u.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: g.body,
            children: [
                (0, r.jsx)('div', {
                    className: s()(h ? g.visible : g.hidden, {
                        [g.cardElementContainer]: f === m.He.CARD,
                        [g.customPaymentElementContainer]: f === m.He.PAYPAL
                    }),
                    children: (0, r.jsx)(
                        S,
                        O(b({}, o), {
                            step: t,
                            originalPaymentType: d,
                            analyticsContext: _
                        })
                    )
                }),
                (0, r.jsx)('div', {
                    className: s()(g.addressElementContainer, E ? g.visible : g.hidden),
                    children: (0, r.jsx)(
                        A,
                        O(b({}, l), {
                            renderWithoutElement: !0,
                            billingAddressInfo: n
                        })
                    )
                })
            ]
        });
    },
    C = (e) => {
        var { onSetupError: t } = e,
            n = v(e, ['onSetupError']);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, _.S)({ onSetupError: t });
        return o || null != s
            ? (0, r.jsx)('div', {
                  className: g.loadingContainer,
                  children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE })
              })
            : (0, r.jsx)(a.Elements, {
                  stripe: (0, f.d2)(),
                  options: b({}, i),
                  children: (0, r.jsx)(N, b({}, n))
              });
    },
    R = ['city', 'country', 'line1', 'postalCode'],
    P = (e) => {
        let { step: t, handleStepChange: n, paymentElementsEnabled: r, logger: a, onBillingAddressChange: o, shouldLogOnChangeEvents: s, continueSessionToInitialStep: l } = e,
            d = i.useRef(null),
            [f, _] = i.useState(!1),
            [h, g] = i.useState(l === u.h8.CREDIT_CARD_INFORMATION ? m.He.CARD : null),
            E = r && (t === u.h8.PAYMENT_ELEMENT || t === u.h8.ADDRESS),
            b = i.useMemo(
                () => ({
                    onChange: (e) => {
                        (s && null != a && a.log('PaymentElements onChange event:', e), _(e.complete), g((0, p.hR)(e.value.type)));
                    }
                }),
                [a, s]
            ),
            y = i.useMemo(
                () => ({
                    onChange: (e) => {
                        var t;
                        let {
                                complete: n,
                                value: { address: r, name: i }
                            } = e,
                            a = {
                                name: i,
                                country: r.country,
                                city: r.city,
                                line1: r.line1,
                                line2: null != (t = r.line2) ? t : '',
                                state: r.state,
                                postalCode: r.postal_code
                            },
                            s =
                                R.every((e) => {
                                    let t = a[e];
                                    return null != t && '' !== t;
                                }) && n;
                        o(a, s);
                    }
                }),
                [o]
            ),
            O = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    (void 0 !== e && g(e), n(u.h8.PAYMENT_ELEMENT, t));
                },
                [n]
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                O(void 0);
            };
            return (
                c.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e),
                () => {
                    c.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e);
                }
            );
        }, [O, r]);
        let v = i.useCallback(() => {
            (g(null), n(u.h8.PAYMENT_TYPE));
        }, [n]);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: b,
            stripeAddressElementProps: y,
            combinedStripeElementsRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: g,
            handlePaymentElementStep: O,
            onBackPaymentElement: v
        };
    };
