"use strict";
n.d(t, { Ky: () => S, _i: () => v, eR: () => N, wD: () => O });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(289873),
    u = n(228366),
    c = n(942340),
    d = n(550238),
    _ = n(648335),
    h = n(211528),
    f = n(783327),
    p = n(166532),
    E = n(38405),
    m = n(240248),
    g = n(891640),
    A = n(818348),
    I = n(492453);
let T = [p.pn.PAYMENT_ELEMENT],
    S = [
        p.pn.PAYPAL_INFORMATION,
        p.pn.VENMO_INFORMATION,
        p.pn.CASH_APP_INFORMATION,
        p.pn.EPS_INFORMATION,
        p.pn.PRZELEWY24_INFORMATION,
        p.pn.IDEAL_INFORMATION,
    ],
    y = new Set([p.pn.PAYMENT_ELEMENT, ...S]);
function C(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: l,
            stripeAddressElementProps: u,
            stripeElementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: _,
            addressElementKey: f,
            analyticsContext: E,
            paymentElementFooter: m,
        } = e,
        y = (0, s.useElements)();
    r.useEffect(() => {
        c.current = y;
    }, [y, c]);
    let {
            shouldShowPaymentElement: C,
            shouldShowAddressElement: N,
            excludeBodySpacing: v,
        } = r.useMemo(
            () => ({
                shouldShowPaymentElement: T.includes(t),
                shouldShowAddressElement: t === p.pn.ADDRESS,
                excludeBodySpacing: S.includes(t),
            }),
            [t],
        ),
        R = r.useMemo(() => {
            if (null == d) return !1;
            if ((0, g.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = g.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, i.jsxs)("div", {
        className: o()(I.kL, { [I.rf]: !v }),
        children: [
            (0, i.jsxs)("div", {
                className: o()(C ? I.RK : [I.R, I.$u], {
                    [I.df]: null == d,
                    [I._m]: d === A.he.CARD,
                    [I.JD]: d === A.he.PAYPAL,
                }),
                children: [
                    (0, i.jsx)(h.Wf, {
                        ...l,
                        paymentMethodOrder: _,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: E,
                    }),
                    C && m,
                ],
            }),
            (0, i.jsx)("div", {
                className: o()(I.K_, N ? I.RK : [I.R, I.vg]),
                children: (0, i.jsx)(h.KS, {
                    ...u,
                    internalKey: f,
                    renderAsStandaloneElement: R,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function N() {
    return (0, i.jsx)("div", {
        className: o()(I.kL, I.rf, I.g4),
        children: (0, i.jsx)(l.y, { type: l.y.Type.PULSING_ELLIPSIS }),
    });
}
function v(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: r,
            isLoading: a,
            setupError: o,
            customPaymentMethodIdsToSourceTypes: l,
            paymentMethodOrder: u,
        } = (0, c.p)({ onSetupError: t }),
        d = (0, f.S)();
    return a || null != o || null == d
        ? (0, i.jsx)(N, {})
        : (0, i.jsx)(s.Elements, {
              stripe: d,
              options: r,
              children: (0, i.jsx)(C, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
          });
}
let R = ["applePay", "googlePay", "link"];
function O(e) {
    let {
            step: t,
            handleStepChange: n,
            paymentElementsEnabled: i,
            logger: a,
            onBillingAddressChange: o,
            shouldLogOnChangeEvents: l,
            continueSessionToInitialStep: c,
        } = e,
        f = r.useRef(null),
        g = r.useRef(null),
        [I, T] = r.useState(!1),
        [S, C] = r.useState(c === p.pn.CREDIT_CARD_INFORMATION ? A.he.CARD : null),
        [N, v] = r.useState(!1),
        [O, b] = r.useState(void 0),
        D = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: i } = e;
            return !!n && (y.has(t) || (t === p.pn.ADDRESS && null != i));
        })({ step: t, paymentElementsEnabled: i, paymentElementSelectedType: S }),
        L = r.useCallback(() => {
            b(Date.now().toString());
        }, []);
    r.useEffect(() => {
        t === p.pn.PAYMENT_ELEMENT && (g.current = null);
    }, [t]);
    let w = r.useMemo(
            () => ({
                onChange: (e, t) => {
                    l && null != a && a.log("PaymentElements onChange event:", e), T(e.complete), C(t);
                },
                wallets: R,
            }),
            [a, l],
        ),
        M = r.useMemo(
            () => ({
                addressElementOnChangeFired: N,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = (0, h.ZB)(n);
                    l &&
                        null != a &&
                        a.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: N,
                            isAddressSubstantial: r,
                        }),
                        v(!0);
                    let s = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, d.Qd)(s);
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
                                    emptyFields: Object.entries(s)
                                        .filter((e) => {
                                            let [, t] = e;
                                            return (0, m.uJ)(t);
                                        })
                                        .map((e) => {
                                            let [t] = e;
                                            return t;
                                        }),
                                },
                            },
                        ),
                        o(s, u && t);
                },
            }),
            [o, l, a, N, v],
        ),
        P = r.useCallback(() => {
            let e;
            o({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(s.AddressElement);
                        if (null != t) return t;
                    })(f.current)) && e.clear();
        }, [f, o]),
        x = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && C(e), n(p.pn.PAYMENT_ELEMENT, t), v(!1), null != S && (0, _.R8)(S) && P();
            },
            [n, P, S],
        );
    r.useEffect(() => {
        if (i)
            return (
                u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        function e() {
            x(void 0);
        }
    }, [x, i]);
    let k = r.useCallback(() => {
        C(null);
    }, []);
    return {
        shouldRenderPaymentElement: D,
        stripePaymentElementProps: w,
        stripeAddressElementProps: M,
        stripeElementsRef: f,
        lastConfirmedSetupIntentRef: g,
        paymentElementReady: I,
        paymentElementSelectedType: S,
        setPaymentElementSelectedType: C,
        returnToPaymentElementStep: x,
        onBackFromPaymentElement: k,
        addressElementKey: O,
        remountAddressElement: L,
        clearAddressElement: P,
    };
}
