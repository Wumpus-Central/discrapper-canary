var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(289873),
    u = n(73153),
    c = n(380034),
    d = n(942340),
    m = n(550238),
    p = n(648335),
    h = n(211528),
    C = n(316363),
    f = n(783327),
    E = n(856383),
    S = n(240248),
    g = n(166532),
    I = n(676230),
    y = n(818348),
    A = n(400400);
let P = [g.pn.PAYMENT_ELEMENT],
    v = [
        g.pn.PAYPAL_INFORMATION,
        g.pn.VENMO_INFORMATION,
        g.pn.CASH_APP_INFORMATION,
        g.pn.EPS_INFORMATION,
        g.pn.PRZELEWY24_INFORMATION,
    ],
    x = new Set([g.pn.PAYMENT_ELEMENT, ...v]);
function _(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: o,
            stripeAddressElementProps: u,
            stripeElementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: m,
            addressElementKey: p,
            analyticsContext: C,
            paymentElementFooter: f,
            layout: E,
        } = e,
        S = (0, r.useElements)();
    i.useEffect(() => {
        c.current = S;
    }, [S, c]);
    let {
            shouldShowPaymentElement: x,
            shouldShowAddressElement: _,
            excludeBodySpacing: T,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: P.includes(t),
                shouldShowAddressElement: t === g.pn.ADDRESS,
                excludeBodySpacing: v.includes(t),
            }),
            [t],
        ),
        b = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, I.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = I.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(A.kL, { [A.rf]: !T }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(x ? A.RK : [A.R, A.$u], {
                    [A.df]: null == d,
                    [A._m]: d === y.he.CARD,
                    [A.JD]: d === y.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(h.Wf, {
                        ...o,
                        paymentMethodOrder: m,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        layout: E,
                        analyticsContext: C,
                    }),
                    x && f,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(A.K_, _ ? A.RK : [A.R, A.vg]),
                children: (0, l.jsx)(h.KS, {
                    ...u,
                    internalKey: p,
                    renderAsStandaloneElement: b,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function T() {
    return (0, l.jsx)("div", {
        className: s()(A.kL, A.rf, A.g4),
        children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }),
    });
}
let b = ["applePay", "googlePay", "link"];
n.d(
    t,
    {},
    {
        Ky: v,
        _i: function (e) {
            let { onSetupError: t, ...n } = e,
                { layout: i, compact: a } = (0, c.EH)(),
                {
                    elementsOptions: s,
                    isLoading: o,
                    setupError: u,
                    customPaymentMethodIdsToSourceTypes: m,
                    paymentMethodOrder: p,
                } = (0, d.p)({ onSetupError: t, elementsAppearanceOptions: { compact: a } }),
                h = (0, f.S)();
            return o || null != u || null == h
                ? (0, l.jsx)(T, {})
                : (0, l.jsx)(r.Elements, {
                      stripe: h,
                      options: s,
                      children: (0, l.jsx)(_, {
                          ...n,
                          customPaymentMethodIdsToSourceTypes: m,
                          paymentMethodOrder: p,
                          layout: i,
                      }),
                  });
        },
        eR: T,
        wD: function (e) {
            let {
                    step: t,
                    handleStepChange: n,
                    logger: l,
                    onBillingAddressChange: a,
                    shouldLogOnChangeEvents: s,
                    continueSessionToInitialStep: o,
                } = e,
                c = i.useRef(null),
                d = i.useRef(null),
                [f, I] = i.useState(!1),
                [A, P] = i.useState(!1),
                v = o === g.pn.CREDIT_CARD_INFORMATION || o === g.pn.PAYMENT_ELEMENT,
                [_, T] = i.useState(v ? y.he.CARD : null),
                [N, j] = i.useState(!1),
                [R, O] = i.useState(void 0),
                M = (function (e) {
                    let { step: t, paymentElementSelectedType: n } = e;
                    return x.has(t) || (t === g.pn.ADDRESS && null != n);
                })({ step: t, paymentElementSelectedType: _ }),
                L = i.useCallback(() => {
                    O(Date.now().toString());
                }, []);
            i.useEffect(() => {
                t === g.pn.PAYMENT_ELEMENT && (d.current = null);
            }, [t]);
            let k = (0, C.t4)((e) => e.linkWalletEnabled),
                w = i.useMemo(() => (k ? b : b.filter((e) => "link" !== e)), [k]),
                D = i.useMemo(
                    () => ({
                        onChange: (e, t) => {
                            (s && null != l && l.log("PaymentElements onChange event:", e), I(e.complete), T(t));
                        },
                        onReady: () => {
                            P(!0);
                        },
                        wallets: w,
                    }),
                    [l, s, w],
                ),
                U = i.useMemo(
                    () => ({
                        addressElementOnChangeFired: N,
                        onChange: (e) => {
                            let {
                                    complete: t,
                                    value: { address: n, name: i },
                                    ...r
                                } = e,
                                o = r.isNewAddress,
                                u = (0, h.ZB)(n);
                            (s &&
                                null != l &&
                                l.log("AddressElement onChange event:", {
                                    stripeComplete: t,
                                    stripeIsNewAddress: o,
                                    address: n,
                                    name: i,
                                    addressElementOnChangeFired: N,
                                    isAddressSubstantial: u,
                                }),
                                j(!0));
                            let c = {
                                    name: i,
                                    country: n.country,
                                    city: n.city,
                                    line1: n.line1,
                                    line2: n.line2 ?? "",
                                    state: n.state,
                                    postalCode: n.postal_code,
                                },
                                d = (0, m.Qd)(c);
                            (!t ||
                                d ||
                                m.im.has(n.country) ||
                                E.A.captureMessage(
                                    "Unexpected AddressElement validity mismatch: Stripe complete but address was computed invalid",
                                    {
                                        tags: { app_context: "billing", billing_context: "payment_element" },
                                        extra: {
                                            isValidComputed: d,
                                            stripeIsNewAddress: o,
                                            stripeComplete: t,
                                            country: n.country,
                                            emptyFields: Object.entries(c)
                                                .filter((e) => {
                                                    let [, t] = e;
                                                    return (0, S.uJ)(t);
                                                })
                                                .map((e) => {
                                                    let [t] = e;
                                                    return t;
                                                }),
                                        },
                                    },
                                ),
                                a(c, d && t));
                        },
                    }),
                    [a, s, l, N, j],
                ),
                G = i.useCallback(() => {
                    let e;
                    (a({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                        null !=
                            (e = (function (e) {
                                if (null == e) return;
                                let t = e.getElement(r.AddressElement);
                                if (null != t) return t;
                            })(c.current)) && e.clear());
                }, [c, a]),
                F = i.useCallback(
                    function (e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                        (void 0 !== e && T(e), n(g.pn.PAYMENT_ELEMENT, t), j(!1), null != _ && (0, p.R8)(_) && G());
                    },
                    [n, G, _],
                );
            i.useEffect(() => {
                function e() {
                    F(void 0);
                }
                return (
                    u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                    () => {
                        u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                    }
                );
            }, [F]);
            let B = i.useCallback(() => {
                T(null);
            }, []);
            return {
                shouldRenderPaymentElement: M,
                stripePaymentElementProps: D,
                stripeAddressElementProps: U,
                stripeElementsRef: c,
                lastConfirmedSetupIntentRef: d,
                paymentElementReady: f,
                paymentElementLoaded: A,
                paymentElementSelectedType: _,
                setPaymentElementSelectedType: T,
                returnToPaymentElementStep: F,
                onBackFromPaymentElement: B,
                addressElementKey: R,
                remountAddressElement: L,
                clearAddressElement: G,
            };
        },
    },
);
