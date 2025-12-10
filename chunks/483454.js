n.d(t, {
    MM: () => M,
    Q5: () => P,
    hn: () => L,
    p7: () => x,
    wk: () => D,
}),
    n(467055),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(563132),
    f = n(409813),
    p = n(594174),
    _ = n(626135),
    m = n(622999),
    h = n(476365),
    g = n(720452),
    E = n(637286),
    b = n(981631),
    y = n(231338),
    O = n(26973);
function v(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = [f.h8.PAYMENT_ELEMENT],
    P = i.memo(function (e) {
        var {
                wallets: t = [],
                customPaymentMethodIdsToSourceTypes: n,
                analyticsContext: o,
                options: s,
                onChange: c,
                step: u,
            } = e,
            d = C(e, [
                "wallets",
                "customPaymentMethodIdsToSourceTypes",
                "analyticsContext",
                "options",
                "onChange",
                "step",
            ]);
        let m = (0, l.e7)([p.default], () => {
                let e = p.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            h = (0, l.e7)([p.default], () => {
                let e = p.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = i.useCallback(
                (e) => {
                    if (u !== f.h8.PAYMENT_ELEMENT) return;
                    let t = (0, E.hR)(e.value.type, n);
                    if ((null != c && c(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = o,
                            a = null != t && t !== y.He.PAYMENT_REQUEST ? E.Ho[t] : e.value.type;
                        _.default.track(b.rMx.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: r,
                            location: i.location,
                            payment_element_selected_method: a,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [c, o, u, n],
            ),
            O = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            v = { billingDetails: S({}, null != m && { email: m }, null != h && { name: h }) };
        return (0, r.jsx)(
            a.PaymentElement,
            S(
                {
                    id: "stripe-payment-element",
                    options: S(
                        {
                            layout: { type: "tabs" },
                            wallets: O,
                            defaultValues: v,
                        },
                        s,
                    ),
                    onChange: g,
                },
                d,
            ),
        );
    }),
    R = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.JL)(),
            { elementsAppearance: i } = (0, h.M)();
        return (0, r.jsx)(a.Elements, {
            stripe: n,
            options: {
                appearance: i,
                mode: "setup",
                currency: "usd",
            },
            children: t,
        });
    },
    D = i.memo(function (e) {
        var { options: t, renderAsStandaloneElement: n, billingAddressInfo: o, internalKey: s } = e,
            l = C(e, ["options", "renderAsStandaloneElement", "billingAddressInfo", "internalKey"]);
        let c = i.useMemo(() => {
                let { name: e, address: t } = (0, m.XZ)(o);
                return S(
                    { name: null != e ? e : null },
                    null != t && {
                        address: Object.fromEntries(
                            Object.entries(t).filter((e) => {
                                let [t, n] = e;
                                return void 0 !== n;
                            }),
                        ),
                    },
                );
            }, [o]),
            u = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        S(
                            {
                                options: S(
                                    {
                                        mode: "billing",
                                        defaultValues: c,
                                    },
                                    t,
                                ),
                            },
                            l,
                        ),
                        s,
                    ),
                [c, t, l, s],
            );
        return n
            ? (0, r.jsxs)(R, {
                  children: [
                      (0, r.jsx)("div", {
                          className: O.hidden,
                          children: (0, r.jsx)(a.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      u,
                  ],
              })
            : u;
    }),
    w = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: o,
                stripePaymentElementProps: l,
                stripeAddressElementProps: c,
                elementsRef: u,
                paymentElementSelectedType: d,
                addressElementKey: p,
                analyticsContext: _,
            } = e,
            m = (0, a.useElements)();
        i.useEffect(() => {
            u.current = m;
        }, [m, u]);
        let h = N.includes(t),
            g = t === f.h8.ADDRESS;
        return (0, r.jsxs)("div", {
            className: O.body,
            children: [
                (0, r.jsx)("div", {
                    className: s()(h ? O.visible : [O.hidden, O.leftToRightEntry], {
                        [O.defaultPaymentElementContainer]: null == d,
                        [O.cardElementContainer]: d === y.He.CARD,
                        [O.customPaymentElementContainer]: d === y.He.PAYPAL,
                    }),
                    children: (0, r.jsx)(
                        P,
                        T(S({}, l), {
                            customPaymentMethodIdsToSourceTypes: o,
                            step: t,
                            analyticsContext: _,
                        }),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: s()(O.addressElementContainer, g ? O.visible : [O.hidden, O.rightToLeftEntry]),
                    children: (0, r.jsx)(
                        D,
                        T(S({}, c), {
                            internalKey: p,
                            renderAsStandaloneElement: d === y.He.PAYMENT_REQUEST,
                            billingAddressInfo: n,
                        }),
                    ),
                }),
            ],
        });
    },
    x = () =>
        (0, r.jsx)("div", {
            className: O.loadingContainer,
            children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS }),
        }),
    L = (e) => {
        var { onSetupError: t } = e,
            n = C(e, ["onSetupError"]);
        let {
                elementsOptions: i,
                isLoading: o,
                setupError: s,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, h.S)({ onSetupError: t }),
            { stripe: c } = (0, d.JL)();
        return o || null != s || null == c
            ? (0, r.jsx)(x, {})
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  options: S({}, i),
                  children: (0, r.jsx)(w, T(S({}, n), { customPaymentMethodIdsToSourceTypes: l })),
              });
    },
    j = ["applePay", "googlePay", "link"],
    M = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: o,
                shouldLogOnChangeEvents: s,
                continueSessionToInitialStep: l,
            } = e,
            c = i.useRef(null),
            d = i.useRef(null),
            [p, _] = i.useState(!1),
            [m, h] = i.useState(l === f.h8.CREDIT_CARD_INFORMATION ? y.He.CARD : null),
            E = r && (t === f.h8.PAYMENT_ELEMENT || (t === f.h8.ADDRESS && null != m));
        i.useEffect(() => {
            t === f.h8.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let b = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        s && null != a && a.log("PaymentElements onChange event:", e), _(e.complete), h(t);
                    },
                    wallets: j,
                }),
                [a, s],
            ),
            O = i.useMemo(
                () => ({
                    onChange: (e) => {
                        var t;
                        let {
                                complete: n,
                                value: { address: r, name: i },
                            } = e,
                            a = {
                                name: i,
                                country: r.country,
                                city: r.city,
                                line1: r.line1,
                                line2: null != (t = r.line2) ? t : "",
                                state: r.state,
                                postalCode: r.postal_code,
                            },
                            s =
                                g._.every((e) => {
                                    let t = a[e];
                                    return null != t && "" !== t;
                                }) && n;
                        o(a, s);
                    },
                }),
                [o],
            ),
            v = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && h(e), n(f.h8.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                v(void 0);
            };
            return (
                u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [v, r]);
        let S = i.useCallback(() => {
                h(null);
            }, []),
            [I, T] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: b,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: c,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: p,
            paymentElementSelectedType: m,
            setPaymentElementSelectedType: h,
            handlePaymentElementStep: v,
            onBackFromPaymentElement: S,
            addressElementKey: I,
            remountAddressElement: i.useCallback(() => {
                T(Date.now().toString());
            }, []),
        };
    };
