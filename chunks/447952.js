n.d(t, { Ky: () => P, _i: () => T, eR: () => _, wD: () => b });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(289873),
    u = n(228366),
    c = n(942340),
    d = n(550238),
    m = n(648335),
    p = n(211528),
    h = n(263532),
    C = n(783327),
    f = n(166532),
    E = n(38405),
    S = n(240248),
    I = n(891640),
    y = n(818348),
    g = n(400400);
let A = [f.pn.PAYMENT_ELEMENT],
    P = [
        f.pn.PAYPAL_INFORMATION,
        f.pn.VENMO_INFORMATION,
        f.pn.CASH_APP_INFORMATION,
        f.pn.EPS_INFORMATION,
        f.pn.PRZELEWY24_INFORMATION,
    ],
    v = new Set([f.pn.PAYMENT_ELEMENT, ...P]);
function x(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: o,
            stripeAddressElementProps: u,
            stripeElementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: m,
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
            shouldShowAddressElement: x,
            excludeBodySpacing: _,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: A.includes(t),
                shouldShowAddressElement: t === f.pn.ADDRESS,
                excludeBodySpacing: P.includes(t),
            }),
            [t],
        ),
        T = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, I.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = I.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(g.kL, { [g.rf]: !_ }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(v ? g.RK : [g.R, g.$u], {
                    [g.df]: null == d,
                    [g._m]: d === y.he.CARD,
                    [g.JD]: d === y.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(p.Wf, {
                        ...o,
                        paymentMethodOrder: m,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: C,
                    }),
                    v && E,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(g.K_, x ? g.RK : [g.R, g.vg]),
                children: (0, l.jsx)(p.KS, {
                    ...u,
                    internalKey: h,
                    renderAsStandaloneElement: T,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function _() {
    return (0, l.jsx)("div", {
        className: s()(g.kL, g.rf, g.g4),
        children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }),
    });
}
function T(e) {
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
        ? (0, l.jsx)(_, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(x, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
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
        [I, g] = i.useState(!1),
        [A, P] = i.useState(!1),
        x = o === f.pn.CREDIT_CARD_INFORMATION || o === f.pn.PAYMENT_ELEMENT,
        [_, T] = i.useState(x ? y.he.CARD : null),
        [b, j] = i.useState(!1),
        [R, M] = i.useState(void 0),
        O = (function (e) {
            let { step: t, paymentElementSelectedType: n } = e;
            return v.has(t) || (t === f.pn.ADDRESS && null != n);
        })({ step: t, paymentElementSelectedType: _ }),
        L = i.useCallback(() => {
            M(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === f.pn.PAYMENT_ELEMENT && (C.current = null);
    }, [t]);
    let k = (0, h.t4)((e) => e.linkWalletEnabled),
        w = i.useMemo(() => (k ? N : N.filter((e) => "link" !== e)), [k]),
        U = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    (s && null != l && l.log("PaymentElements onChange event:", e), g(e.complete), T(t));
                },
                onReady: () => {
                    P(!0);
                },
                wallets: w,
            }),
            [l, s, w],
        ),
        D = i.useMemo(
            () => ({
                addressElementOnChangeFired: b,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = (0, p.ZB)(n);
                    (s &&
                        null != l &&
                        l.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: b,
                            isAddressSubstantial: r,
                        }),
                        j(!0));
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
                    (!t ||
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
                        a(o, u && t));
                },
            }),
            [a, s, l, b, j],
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
                (void 0 !== e && T(e), n(f.pn.PAYMENT_ELEMENT, t), j(!1), null != _ && (0, m.R8)(_) && G());
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
        shouldRenderPaymentElement: O,
        stripePaymentElementProps: U,
        stripeAddressElementProps: D,
        stripeElementsRef: c,
        lastConfirmedSetupIntentRef: C,
        paymentElementReady: I,
        paymentElementLoaded: A,
        paymentElementSelectedType: _,
        setPaymentElementSelectedType: T,
        returnToPaymentElementStep: F,
        onBackFromPaymentElement: B,
        addressElementKey: R,
        remountAddressElement: L,
        clearAddressElement: G,
    };
}
