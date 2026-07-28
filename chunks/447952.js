n.d(t, { Ky: () => _, _i: () => x, eR: () => v, wD: () => R });
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
    C = n(316915),
    h = n(783327),
    E = n(166532),
    f = n(38405),
    A = n(240248),
    S = n(891640),
    y = n(818348),
    P = n(426125);
let I = [E.pn.PAYMENT_ELEMENT],
    _ = [
        E.pn.PAYPAL_INFORMATION,
        E.pn.VENMO_INFORMATION,
        E.pn.CASH_APP_INFORMATION,
        E.pn.EPS_INFORMATION,
        E.pn.PRZELEWY24_INFORMATION,
        E.pn.IDEAL_INFORMATION,
    ],
    T = new Set([E.pn.PAYMENT_ELEMENT, ..._]);
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
            paymentElementFooter: f,
        } = e,
        A = (0, r.useElements)();
    i.useEffect(() => {
        c.current = A;
    }, [A, c]);
    let {
            shouldShowPaymentElement: T,
            shouldShowAddressElement: g,
            excludeBodySpacing: v,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: I.includes(t),
                shouldShowAddressElement: t === E.pn.ADDRESS,
                excludeBodySpacing: _.includes(t),
            }),
            [t],
        ),
        x = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, S.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = S.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(P.kL, { [P.rf]: !v }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(T ? P.RK : [P.R, P.$u], {
                    [P.df]: null == d,
                    [P._m]: d === y.he.CARD,
                    [P.JD]: d === y.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(m.Wf, {
                        ...o,
                        paymentMethodOrder: p,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: h,
                    }),
                    T && f,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(P.K_, g ? P.RK : [P.R, P.vg]),
                children: (0, l.jsx)(m.KS, {
                    ...u,
                    internalKey: C,
                    renderAsStandaloneElement: x,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function v() {
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
        d = (0, h.S)();
    return a || null != s || null == d
        ? (0, l.jsx)(v, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(g, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let N = ["applePay", "googlePay", "link"];
function R(e) {
    let {
            step: t,
            handleStepChange: n,
            logger: l,
            onBillingAddressChange: a,
            shouldLogOnChangeEvents: s,
            continueSessionToInitialStep: o,
        } = e,
        c = i.useRef(null),
        h = i.useRef(null),
        [S, P] = i.useState(!1),
        [I, _] = i.useState(!1),
        [g, v] = i.useState(o === E.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
        [x, R] = i.useState(!1),
        [b, M] = i.useState(void 0),
        j = (function (e) {
            let { step: t, paymentElementSelectedType: n } = e;
            return T.has(t) || (t === E.pn.ADDRESS && null != n);
        })({ step: t, paymentElementSelectedType: g }),
        O = i.useCallback(() => {
            M(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === E.pn.PAYMENT_ELEMENT && (h.current = null);
    }, [t]);
    let L = (0, C.t4)((e) => e.linkWalletEnabled),
        w = i.useMemo(() => (L ? N : N.filter((e) => "link" !== e)), [L]),
        k = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    s && null != l && l.log("PaymentElements onChange event:", e), P(e.complete), v(t);
                },
                onReady: () => {
                    _(!0);
                },
                wallets: w,
            }),
            [l, s, w],
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
                        R(!0);
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
                        f.A.captureMessage(
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
                                            return (0, A.uJ)(t);
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
            [a, s, l, x, R],
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
                void 0 !== e && v(e), n(E.pn.PAYMENT_ELEMENT, t), R(!1), null != g && (0, p.R8)(g) && D();
            },
            [n, D, g],
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
        v(null);
    }, []);
    return {
        shouldRenderPaymentElement: j,
        stripePaymentElementProps: k,
        stripeAddressElementProps: U,
        stripeElementsRef: c,
        lastConfirmedSetupIntentRef: h,
        paymentElementReady: S,
        paymentElementLoaded: I,
        paymentElementSelectedType: g,
        setPaymentElementSelectedType: v,
        returnToPaymentElementStep: G,
        onBackFromPaymentElement: F,
        addressElementKey: b,
        remountAddressElement: O,
        clearAddressElement: D,
    };
}
