(n.d(t, {
    M: () => D,
    h: () => R
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
    u = n(563132),
    d = n(409813),
    f = n(626135),
    _ = n(622999),
    p = n(878836),
    h = n(561448),
    m = n(981631),
    g = n(231338),
    E = n(528157);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = T(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let S = [d.h8.PAYMENT_ELEMENT],
    A = i.memo(function (e) {
        var { originalPaymentType: t, wallets: n = [], analyticsContext: o, options: s, onChange: l, step: c } = e,
            u = I(e, ['originalPaymentType', 'wallets', 'analyticsContext', 'options', 'onChange', 'step']);
        let p = i.useMemo(() => {
                if (null == t || !(0, h.qH)(t)) return;
                let e = (0, _.rI)();
                if ((0, h.Ko)(t)) {
                    let n = (0, h.ZK)(t, e);
                    return null != n ? [n] : [];
                }
                return [h.zK[t]];
            }, [t]),
            g = i.useCallback(
                (e) => {
                    if (c === d.h8.PAYMENT_ELEMENT && (null != l && l(e), null != o)) {
                        let { contextMetadata: t, activitySessionId: n, analyticsData: r } = o,
                            i = (0, h.hR)(e.value.type),
                            a = null != i ? h.Ho[i] : e.value.type;
                        f.default.track(m.rMx.PAYMENT_ELEMENT_CHANGED, {
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
            ),
            E = i.useMemo(
                () => ({
                    applePay: n.includes('applePay') ? 'auto' : 'never',
                    googlePay: n.includes('googlePay') ? 'auto' : 'never',
                    link: n.includes('link') ? 'auto' : 'never'
                }),
                [n]
            );
        return (0, r.jsx)(
            a.PaymentElement,
            y(
                {
                    id: 'stripe-payment-element',
                    options: y(
                        v(y({}, null != p && { paymentMethodOrder: p }), {
                            layout: { type: 'tabs' },
                            wallets: E
                        }),
                        s
                    ),
                    onChange: g
                },
                u
            )
        );
    }),
    N = i.memo(function (e) {
        var { options: t, renderWithoutElement: n, billingAddressInfo: o } = e,
            s = I(e, ['options', 'renderWithoutElement', 'billingAddressInfo']);
        let l = i.useMemo(() => {
                let { name: e, address: t } = (0, _.XZ)(o);
                return y(
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
            { stripe: c } = (0, u.JL)(),
            d = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        y(
                            {
                                options: y(
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
            ? d
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  children: d
              });
    }),
    C = (e) => {
        let { step: t, billingAddressInfo: n, stripePaymentElementProps: o, stripeAddressElementProps: l, elementsRef: c, originalPaymentType: u, paymentElementSelectedType: f, analyticsContext: _ } = e,
            p = (0, a.useElements)();
        i.useEffect(() => {
            c.current = p;
        }, [p, c]);
        let h = S.includes(t) && null != f,
            m = t === d.h8.ADDRESS;
        return (0, r.jsxs)('div', {
            className: E.body,
            children: [
                (0, r.jsx)('div', {
                    className: s()(h ? E.visible : E.hidden, {
                        [E.cardElementContainer]: f === g.He.CARD,
                        [E.customPaymentElementContainer]: f === g.He.PAYPAL
                    }),
                    children: (0, r.jsx)(
                        A,
                        v(y({}, o), {
                            step: t,
                            originalPaymentType: u,
                            analyticsContext: _
                        })
                    )
                }),
                (0, r.jsx)('div', {
                    className: s()(E.addressElementContainer, m ? E.visible : E.hidden),
                    children: (0, r.jsx)(
                        N,
                        v(y({}, l), {
                            renderWithoutElement: !0,
                            billingAddressInfo: n
                        })
                    )
                })
            ]
        });
    },
    R = (e) => {
        var { onSetupError: t } = e,
            n = I(e, ['onSetupError']);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, p.S)({ onSetupError: t }),
            { stripe: c } = (0, u.JL)();
        return o || null != s || null == c
            ? (0, r.jsx)('div', {
                  className: E.loadingContainer,
                  children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE })
              })
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  options: y({}, i),
                  children: (0, r.jsx)(C, y({}, n))
              });
    },
    P = ['city', 'country', 'line1'],
    w = ['link'],
    D = (e) => {
        let { step: t, handleStepChange: n, paymentElementsEnabled: r, logger: a, onBillingAddressChange: o, shouldLogOnChangeEvents: s, continueSessionToInitialStep: l } = e,
            u = i.useRef(null),
            [f, _] = i.useState(!1),
            [p, m] = i.useState(l === d.h8.CREDIT_CARD_INFORMATION ? g.He.CARD : null),
            E = r && (t === d.h8.PAYMENT_ELEMENT || t === d.h8.ADDRESS),
            b = i.useMemo(
                () => ({
                    onChange: (e) => {
                        (s && null != a && a.log('PaymentElements onChange event:', e), _(e.complete), m((0, h.hR)(e.value.type)));
                    },
                    wallets: w
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
                                P.every((e) => {
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
                    (void 0 !== e && m(e), n(d.h8.PAYMENT_ELEMENT, t));
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
            (m(null), n(d.h8.PAYMENT_TYPE));
        }, [n]);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: b,
            stripeAddressElementProps: y,
            combinedStripeElementsRef: u,
            paymentElementReady: f,
            paymentElementSelectedType: p,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: O,
            onBackPaymentElement: v
        };
    };
