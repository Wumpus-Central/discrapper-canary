"use strict";
n.d(t, { Ky: () => S, _i: () => v, eR: () => y, wD: () => O });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(289873),
    u = n(228366),
    d = n(942340),
    c = n(550238),
    _ = n(648335),
    h = n(211528),
    f = n(783327),
    E = n(166532),
    p = n(38405),
    m = n(240248),
    g = n(891640),
    A = n(818348),
    I = n(235301);
let T = [E.pn.PAYMENT_ELEMENT],
    S = [
        E.pn.PAYPAL_INFORMATION,
        E.pn.VENMO_INFORMATION,
        E.pn.CASH_APP_INFORMATION,
        E.pn.EPS_INFORMATION,
        E.pn.PRZELEWY24_INFORMATION,
        E.pn.IDEAL_INFORMATION,
    ],
    N = new Set([E.pn.PAYMENT_ELEMENT, ...S]);
function C(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: l,
            stripeAddressElementProps: u,
            stripeElementsRef: d,
            paymentElementSelectedType: c,
            paymentMethodOrder: _,
            addressElementKey: f,
            analyticsContext: p,
            paymentElementFooter: m,
        } = e,
        N = (0, s.useElements)();
    r.useEffect(() => {
        d.current = N;
    }, [N, d]);
    let {
            shouldShowPaymentElement: C,
            shouldShowAddressElement: y,
            excludeBodySpacing: v,
        } = r.useMemo(
            () => ({
                shouldShowPaymentElement: T.includes(t),
                shouldShowAddressElement: t === E.pn.ADDRESS,
                excludeBodySpacing: S.includes(t),
            }),
            [t],
        ),
        R = r.useMemo(() => {
            if (null == c) return !1;
            if ((0, g.i)(c)) {
                let { renderAddressElementInStandaloneMode: e } = g.F[c];
                return e ?? !1;
            }
        }, [c]);
    return (0, i.jsxs)("div", {
        className: o()(I.kL, { [I.rf]: !v }),
        children: [
            (0, i.jsxs)("div", {
                className: o()(C ? I.RK : [I.R, I.$u], {
                    [I.df]: null == c,
                    [I._m]: c === A.he.CARD,
                    [I.JD]: c === A.he.PAYPAL,
                }),
                children: [
                    (0, i.jsx)(h.Wf, {
                        ...l,
                        paymentMethodOrder: _,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: p,
                    }),
                    C && m,
                ],
            }),
            (0, i.jsx)("div", {
                className: o()(I.K_, y ? I.RK : [I.R, I.vg]),
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
function y() {
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
        } = (0, d.p)({ onSetupError: t }),
        c = (0, f.S)();
    return a || null != o || null == c
        ? (0, i.jsx)(y, {})
        : (0, i.jsx)(s.Elements, {
              stripe: c,
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
            continueSessionToInitialStep: d,
        } = e,
        f = r.useRef(null),
        g = r.useRef(null),
        [I, T] = r.useState(!1),
        [S, C] = r.useState(!1),
        [y, v] = r.useState(d === E.pn.CREDIT_CARD_INFORMATION ? A.he.CARD : null),
        [O, b] = r.useState(!1),
        [L, D] = r.useState(void 0),
        P = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: i } = e;
            return !!n && (N.has(t) || (t === E.pn.ADDRESS && null != i));
        })({ step: t, paymentElementsEnabled: i, paymentElementSelectedType: y }),
        w = r.useCallback(() => {
            D(Date.now().toString());
        }, []);
    r.useEffect(() => {
        t === E.pn.PAYMENT_ELEMENT && (g.current = null);
    }, [t]);
    let M = r.useMemo(
            () => ({
                onChange: (e, t) => {
                    l && null != a && a.log("PaymentElements onChange event:", e), T(e.complete), v(t);
                },
                onReady: () => {
                    C(!0);
                },
                wallets: R,
            }),
            [a, l],
        ),
        x = r.useMemo(
            () => ({
                addressElementOnChangeFired: O,
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
                            addressElementOnChangeFired: O,
                            isAddressSubstantial: r,
                        }),
                        b(!0);
                    let s = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, c.Qd)(s);
                    !t ||
                        u ||
                        c.im.has(n.country) ||
                        p.A.captureMessage(
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
            [o, l, a, O, b],
        ),
        U = r.useCallback(() => {
            let e;
            o({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(s.AddressElement);
                        if (null != t) return t;
                    })(f.current)) && e.clear();
        }, [f, o]),
        k = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && v(e), n(E.pn.PAYMENT_ELEMENT, t), b(!1), null != y && (0, _.R8)(y) && U();
            },
            [n, U, y],
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
            k(void 0);
        }
    }, [k, i]);
    let G = r.useCallback(() => {
        v(null);
    }, []);
    return {
        shouldRenderPaymentElement: P,
        stripePaymentElementProps: M,
        stripeAddressElementProps: x,
        stripeElementsRef: f,
        lastConfirmedSetupIntentRef: g,
        paymentElementReady: I,
        paymentElementLoaded: S,
        paymentElementSelectedType: y,
        setPaymentElementSelectedType: v,
        returnToPaymentElementStep: k,
        onBackFromPaymentElement: G,
        addressElementKey: L,
        remountAddressElement: w,
        clearAddressElement: U,
    };
}
