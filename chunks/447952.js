n.d(t, { Ky: () => I, _i: () => v, eR: () => g, wD: () => N });
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
    h = n(783327),
    C = n(166532),
    E = n(38405),
    A = n(240248),
    f = n(891640),
    S = n(818348),
    y = n(235301);
let P = [C.pn.PAYMENT_ELEMENT],
    I = [
        C.pn.PAYPAL_INFORMATION,
        C.pn.VENMO_INFORMATION,
        C.pn.CASH_APP_INFORMATION,
        C.pn.EPS_INFORMATION,
        C.pn.PRZELEWY24_INFORMATION,
        C.pn.IDEAL_INFORMATION,
    ],
    T = new Set([C.pn.PAYMENT_ELEMENT, ...I]);
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
            analyticsContext: E,
            paymentElementFooter: A,
        } = e,
        T = (0, r.useElements)();
    i.useEffect(() => {
        c.current = T;
    }, [T, c]);
    let {
            shouldShowPaymentElement: _,
            shouldShowAddressElement: g,
            excludeBodySpacing: v,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: P.includes(t),
                shouldShowAddressElement: t === C.pn.ADDRESS,
                excludeBodySpacing: I.includes(t),
            }),
            [t],
        ),
        x = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, f.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = f.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(y.kL, { [y.rf]: !v }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(_ ? y.RK : [y.R, y.$u], {
                    [y.df]: null == d,
                    [y._m]: d === S.he.CARD,
                    [y.JD]: d === S.he.PAYPAL,
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
                className: s()(y.K_, g ? y.RK : [y.R, y.vg]),
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
function g() {
    return (0, l.jsx)("div", {
        className: s()(y.kL, y.rf, y.g4),
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
        ? (0, l.jsx)(g, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(_, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let x = ["applePay", "googlePay", "link"];
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
        h = i.useRef(null),
        f = i.useRef(null),
        [y, P] = i.useState(!1),
        [I, _] = i.useState(!1),
        [g, v] = i.useState(c === C.pn.CREDIT_CARD_INFORMATION ? S.he.CARD : null),
        [N, R] = i.useState(!1),
        [b, M] = i.useState(void 0),
        O = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: l } = e;
            return !!n && (T.has(t) || (t === C.pn.ADDRESS && null != l));
        })({ step: t, paymentElementsEnabled: l, paymentElementSelectedType: g }),
        j = i.useCallback(() => {
            M(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === C.pn.PAYMENT_ELEMENT && (f.current = null);
    }, [t]);
    let L = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    o && null != a && a.log("PaymentElements onChange event:", e), P(e.complete), v(t);
                },
                onReady: () => {
                    _(!0);
                },
                wallets: x,
            }),
            [a, o],
        ),
        D = i.useMemo(
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
            [s, o, a, N, R],
        ),
        U = i.useCallback(() => {
            let e;
            s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(r.AddressElement);
                        if (null != t) return t;
                    })(h.current)) && e.clear();
        }, [h, s]),
        w = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && v(e), n(C.pn.PAYMENT_ELEMENT, t), R(!1), null != g && (0, p.R8)(g) && U();
            },
            [n, U, g],
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
            w(void 0);
        }
    }, [w, l]);
    let k = i.useCallback(() => {
        v(null);
    }, []);
    return {
        shouldRenderPaymentElement: O,
        stripePaymentElementProps: L,
        stripeAddressElementProps: D,
        stripeElementsRef: h,
        lastConfirmedSetupIntentRef: f,
        paymentElementReady: y,
        paymentElementLoaded: I,
        paymentElementSelectedType: g,
        setPaymentElementSelectedType: v,
        returnToPaymentElementStep: w,
        onBackFromPaymentElement: k,
        addressElementKey: b,
        remountAddressElement: j,
        clearAddressElement: U,
    };
}
