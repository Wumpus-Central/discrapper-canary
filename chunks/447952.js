n.d(t, { Ky: () => I, _i: () => v, eR: () => x, wD: () => b });
var l = n(627968),
    i = n(64700),
    r = n(342393),
    a = n(503698),
    s = n.n(a),
    o = n(289873),
    u = n(228366),
    c = n(942340),
    d = n(550238),
    p = n(648335),
    m = n(211528),
    C = n(6938),
    h = n(783327),
    E = n(166532),
    A = n(38405),
    f = n(240248),
    y = n(891640),
    S = n(818348),
    P = n(492453);
let T = [E.pn.PAYMENT_ELEMENT],
    I = [
        E.pn.PAYPAL_INFORMATION,
        E.pn.VENMO_INFORMATION,
        E.pn.CASH_APP_INFORMATION,
        E.pn.EPS_INFORMATION,
        E.pn.PRZELEWY24_INFORMATION,
        E.pn.IDEAL_INFORMATION,
    ],
    _ = new Set([E.pn.PAYMENT_ELEMENT, ...I]);
function g(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: o,
            stripeAddressElementProps: u,
            stripeElementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: p,
            addressElementKey: C,
            analyticsContext: h,
            paymentElementFooter: A,
        } = e,
        f = (0, r.useElements)();
    i.useEffect(() => {
        c.current = f;
    }, [f, c]);
    let {
            shouldShowPaymentElement: _,
            shouldShowAddressElement: g,
            excludeBodySpacing: x,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: T.includes(t),
                shouldShowAddressElement: t === E.pn.ADDRESS,
                excludeBodySpacing: I.includes(t),
            }),
            [t],
        ),
        v = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, y.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = y.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(P.kL, { [P.rf]: !x }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(_ ? P.RK : [P.R, P.$u], {
                    [P.df]: null == d,
                    [P._m]: d === S.he.CARD,
                    [P.JD]: d === S.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(m.Wf, {
                        ...o,
                        paymentMethodOrder: p,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: h,
                    }),
                    _ && A,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(P.K_, g ? P.RK : [P.R, P.vg]),
                children: (0, l.jsx)(m.KS, {
                    ...u,
                    internalKey: C,
                    renderAsStandaloneElement: v,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function x() {
    return (0, l.jsx)("div", {
        className: s()(P.kL, P.rf, P.g4),
        children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }),
    });
}
function v(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: i,
            isLoading: a,
            setupError: s,
            customPaymentMethodIdsToSourceTypes: o,
            paymentMethodOrder: u,
        } = (0, c.p)({ onSetupError: t }),
        d = (0, h.S)();
    return a || null != s || null == d
        ? (0, l.jsx)(x, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(g, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let N = ["applePay", "googlePay", "link"];
function b(e) {
    let {
            step: t,
            handleStepChange: n,
            paymentElementsEnabled: l,
            logger: a,
            onBillingAddressChange: s,
            shouldLogOnChangeEvents: o,
            continueSessionToInitialStep: c,
        } = e,
        h = i.useRef(null),
        y = i.useRef(null),
        [P, T] = i.useState(!1),
        [I, g] = i.useState(!1),
        [x, v] = i.useState(c === E.pn.CREDIT_CARD_INFORMATION ? S.he.CARD : null),
        [b, R] = i.useState(!1),
        [M, O] = i.useState(void 0),
        j = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: l } = e;
            return !!n && (_.has(t) || (t === E.pn.ADDRESS && null != l));
        })({ step: t, paymentElementsEnabled: l, paymentElementSelectedType: x }),
        L = i.useCallback(() => {
            O(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === E.pn.PAYMENT_ELEMENT && (y.current = null);
    }, [t]);
    let w = (0, C.t4)((e) => e.linkWalletEnabled),
        D = i.useMemo(() => (w ? N : N.filter((e) => "link" !== e)), [w]),
        k = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    o && null != a && a.log("PaymentElements onChange event:", e), T(e.complete), v(t);
                },
                onReady: () => {
                    g(!0);
                },
                wallets: D,
            }),
            [a, o, D],
        ),
        U = i.useMemo(
            () => ({
                addressElementOnChangeFired: b,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: l },
                        } = e,
                        i = (0, m.ZB)(n);
                    o &&
                        null != a &&
                        a.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: l,
                            addressElementOnChangeFired: b,
                            isAddressSubstantial: i,
                        }),
                        R(!0);
                    let r = {
                            name: l,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, d.Qd)(r);
                    !t ||
                        u ||
                        d.im.has(n.country) ||
                        A.A.captureMessage(
                            "Unexpected AddressElement validity mismatch: Stripe complete but address was computed invalid",
                            {
                                tags: { app_context: "billing", billing_context: "payment_element" },
                                extra: {
                                    isValidComputed: u,
                                    stripeComplete: t,
                                    country: n.country,
                                    emptyFields: Object.entries(r)
                                        .filter((e) => {
                                            let [, t] = e;
                                            return (0, f.uJ)(t);
                                        })
                                        .map((e) => {
                                            let [t] = e;
                                            return t;
                                        }),
                                },
                            },
                        ),
                        s(r, u && t);
                },
            }),
            [s, o, a, b, R],
        ),
        G = i.useCallback(() => {
            let e;
            s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(r.AddressElement);
                        if (null != t) return t;
                    })(h.current)) && e.clear();
        }, [h, s]),
        F = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && v(e), n(E.pn.PAYMENT_ELEMENT, t), R(!1), null != x && (0, p.R8)(x) && G();
            },
            [n, G, x],
        );
    i.useEffect(() => {
        if (l)
            return (
                u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        function e() {
            F(void 0);
        }
    }, [F, l]);
    let B = i.useCallback(() => {
        v(null);
    }, []);
    return {
        shouldRenderPaymentElement: j,
        stripePaymentElementProps: k,
        stripeAddressElementProps: U,
        stripeElementsRef: h,
        lastConfirmedSetupIntentRef: y,
        paymentElementReady: P,
        paymentElementLoaded: I,
        paymentElementSelectedType: x,
        setPaymentElementSelectedType: v,
        returnToPaymentElementStep: F,
        onBackFromPaymentElement: B,
        addressElementKey: M,
        remountAddressElement: L,
        clearAddressElement: G,
    };
}
