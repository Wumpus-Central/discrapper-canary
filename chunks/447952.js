n.d(t, { Ky: () => T, _i: () => x, eR: () => g, wD: () => N });
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
    C = n(783327),
    h = n(166532),
    E = n(38405),
    A = n(240248),
    f = n(891640),
    y = n(818348),
    S = n(492453);
let P = [h.pn.PAYMENT_ELEMENT],
    T = [
        h.pn.PAYPAL_INFORMATION,
        h.pn.VENMO_INFORMATION,
        h.pn.CASH_APP_INFORMATION,
        h.pn.EPS_INFORMATION,
        h.pn.PRZELEWY24_INFORMATION,
        h.pn.IDEAL_INFORMATION,
    ],
    I = new Set([h.pn.PAYMENT_ELEMENT, ...T]);
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
            addressElementKey: C,
            analyticsContext: E,
            paymentElementFooter: A,
        } = e,
        I = (0, r.useElements)();
    i.useEffect(() => {
        c.current = I;
    }, [I, c]);
    let {
            shouldShowPaymentElement: _,
            shouldShowAddressElement: g,
            excludeBodySpacing: x,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: P.includes(t),
                shouldShowAddressElement: t === h.pn.ADDRESS,
                excludeBodySpacing: T.includes(t),
            }),
            [t],
        ),
        v = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, f.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = f.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(S.kL, { [S.rf]: !x }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(_ ? S.RK : [S.R, S.$u], {
                    [S.df]: null == d,
                    [S._m]: d === y.he.CARD,
                    [S.JD]: d === y.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(m.Wf, {
                        ...o,
                        paymentMethodOrder: p,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: E,
                    }),
                    _ && A,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(S.K_, g ? S.RK : [S.R, S.vg]),
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
function g() {
    return (0, l.jsx)("div", {
        className: s()(S.kL, S.rf, S.g4),
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
        ? (0, l.jsx)(g, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(_, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let v = ["applePay", "googlePay", "link"];
function N(e) {
    let {
            step: t,
            handleStepChange: n,
            paymentElementsEnabled: l,
            logger: a,
            onBillingAddressChange: s,
            shouldLogOnChangeEvents: o,
            continueSessionToInitialStep: c,
        } = e,
        C = i.useRef(null),
        f = i.useRef(null),
        [S, P] = i.useState(!1),
        [T, _] = i.useState(!1),
        [g, x] = i.useState(c === h.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
        [N, b] = i.useState(!1),
        [R, M] = i.useState(void 0),
        O = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: l } = e;
            return !!n && (I.has(t) || (t === h.pn.ADDRESS && null != l));
        })({ step: t, paymentElementsEnabled: l, paymentElementSelectedType: g }),
        j = i.useCallback(() => {
            M(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === h.pn.PAYMENT_ELEMENT && (f.current = null);
    }, [t]);
    let L = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    o && null != a && a.log("PaymentElements onChange event:", e), P(e.complete), x(t);
                },
                onReady: () => {
                    _(!0);
                },
                wallets: v,
            }),
            [a, o],
        ),
        w = i.useMemo(
            () => ({
                addressElementOnChangeFired: N,
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
                            addressElementOnChangeFired: N,
                            isAddressSubstantial: i,
                        }),
                        b(!0);
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
                        E.A.captureMessage(
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
                                            return (0, A.uJ)(t);
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
            [s, o, a, N, b],
        ),
        D = i.useCallback(() => {
            let e;
            s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(r.AddressElement);
                        if (null != t) return t;
                    })(C.current)) && e.clear();
        }, [C, s]),
        k = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && x(e), n(h.pn.PAYMENT_ELEMENT, t), b(!1), null != g && (0, p.R8)(g) && D();
            },
            [n, D, g],
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
            k(void 0);
        }
    }, [k, l]);
    let U = i.useCallback(() => {
        x(null);
    }, []);
    return {
        shouldRenderPaymentElement: O,
        stripePaymentElementProps: L,
        stripeAddressElementProps: w,
        stripeElementsRef: C,
        lastConfirmedSetupIntentRef: f,
        paymentElementReady: S,
        paymentElementLoaded: T,
        paymentElementSelectedType: g,
        setPaymentElementSelectedType: x,
        returnToPaymentElementStep: k,
        onBackFromPaymentElement: U,
        addressElementKey: R,
        remountAddressElement: j,
        clearAddressElement: D,
    };
}
