n.d(t, { Ky: () => g, _i: () => x, eR: () => T, wD: () => b });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(289873),
    u = n(228366),
    c = n(942340),
    d = n(550238),
    p = n(648335),
    m = n(211528),
    h = n(87725),
    C = n(783327),
    f = n(166532),
    E = n(38405),
    S = n(240248),
    y = n(891640),
    A = n(818348),
    P = n(426125);
let I = [f.pn.PAYMENT_ELEMENT],
    g = [
        f.pn.PAYPAL_INFORMATION,
        f.pn.VENMO_INFORMATION,
        f.pn.CASH_APP_INFORMATION,
        f.pn.EPS_INFORMATION,
        f.pn.PRZELEWY24_INFORMATION,
        f.pn.IDEAL_INFORMATION,
    ],
    v = new Set([f.pn.PAYMENT_ELEMENT, ...g]);
function _(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: o,
            stripeAddressElementProps: u,
            stripeElementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: p,
            addressElementKey: h,
            analyticsContext: C,
            paymentElementFooter: E,
        } = e,
        S = (0, r.useElements)();
    i.useEffect(() => {
        c.current = S;
    }, [S, c]);
    let {
            shouldShowPaymentElement: v,
            shouldShowAddressElement: _,
            excludeBodySpacing: T,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: I.includes(t),
                shouldShowAddressElement: t === f.pn.ADDRESS,
                excludeBodySpacing: g.includes(t),
            }),
            [t],
        ),
        x = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, y.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = y.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(P.kL, { [P.rf]: !T }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(v ? P.RK : [P.R, P.$u], {
                    [P.df]: null == d,
                    [P._m]: d === A.he.CARD,
                    [P.JD]: d === A.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(m.Wf, {
                        ...o,
                        paymentMethodOrder: p,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: C,
                    }),
                    v && E,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(P.K_, _ ? P.RK : [P.R, P.vg]),
                children: (0, l.jsx)(m.KS, {
                    ...u,
                    internalKey: h,
                    renderAsStandaloneElement: x,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function T() {
    return (0, l.jsx)("div", {
        className: s()(P.kL, P.rf, P.g4),
        children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }),
    });
}
function x(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: i,
            isLoading: a,
            setupError: s,
            customPaymentMethodIdsToSourceTypes: o,
            paymentMethodOrder: u,
        } = (0, c.p)({ onSetupError: t }),
        d = (0, C.S)();
    return a || null != s || null == d
        ? (0, l.jsx)(T, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(_, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let N = ["applePay", "googlePay", "link"];
function b(e) {
    let {
            step: t,
            handleStepChange: n,
            logger: l,
            onBillingAddressChange: a,
            shouldLogOnChangeEvents: s,
            continueSessionToInitialStep: o,
        } = e,
        c = i.useRef(null),
        C = i.useRef(null),
        [y, P] = i.useState(!1),
        [I, g] = i.useState(!1),
        [_, T] = i.useState(o === f.pn.CREDIT_CARD_INFORMATION ? A.he.CARD : null),
        [x, b] = i.useState(!1),
        [R, j] = i.useState(void 0),
        M = (function (e) {
            let { step: t, paymentElementSelectedType: n } = e;
            return v.has(t) || (t === f.pn.ADDRESS && null != n);
        })({ step: t, paymentElementSelectedType: _ }),
        O = i.useCallback(() => {
            j(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === f.pn.PAYMENT_ELEMENT && (C.current = null);
    }, [t]);
    let L = (0, h.t4)((e) => e.linkWalletEnabled),
        k = i.useMemo(() => (L ? N : N.filter((e) => "link" !== e)), [L]),
        w = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    s && null != l && l.log("PaymentElements onChange event:", e), P(e.complete), T(t);
                },
                onReady: () => {
                    g(!0);
                },
                wallets: k,
            }),
            [l, s, k],
        ),
        U = i.useMemo(
            () => ({
                addressElementOnChangeFired: x,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = (0, m.ZB)(n);
                    s &&
                        null != l &&
                        l.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: x,
                            isAddressSubstantial: r,
                        }),
                        b(!0);
                    let o = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, d.Qd)(o);
                    !t ||
                        u ||
                        d.im.has(n.country) ||
                        E.A.captureMessage(
                            "Unexpected AddressElement validity mismatch: Stripe complete but address was computed invalid",
                            {
                                tags: { app_context: "billing", billing_context: "payment_element" },
                                extra: {
                                    isValidComputed: u,
                                    stripeComplete: t,
                                    country: n.country,
                                    emptyFields: Object.entries(o)
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
                        a(o, u && t);
                },
            }),
            [a, s, l, x, b],
        ),
        D = i.useCallback(() => {
            let e;
            a({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(r.AddressElement);
                        if (null != t) return t;
                    })(c.current)) && e.clear();
        }, [c, a]),
        G = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && T(e), n(f.pn.PAYMENT_ELEMENT, t), b(!1), null != _ && (0, p.R8)(_) && D();
            },
            [n, D, _],
        );
    i.useEffect(() => {
        function e() {
            G(void 0);
        }
        return (
            u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
            () => {
                u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
            }
        );
    }, [G]);
    let F = i.useCallback(() => {
        T(null);
    }, []);
    return {
        shouldRenderPaymentElement: M,
        stripePaymentElementProps: w,
        stripeAddressElementProps: U,
        stripeElementsRef: c,
        lastConfirmedSetupIntentRef: C,
        paymentElementReady: y,
        paymentElementLoaded: I,
        paymentElementSelectedType: _,
        setPaymentElementSelectedType: T,
        returnToPaymentElementStep: G,
        onBackFromPaymentElement: F,
        addressElementKey: R,
        remountAddressElement: O,
        clearAddressElement: D,
    };
}
