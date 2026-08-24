n.d(t, { eR: () => b, Ky: () => _, wD: () => M, _i: () => j });
var l = n(477900),
    i = n(582128),
    r = n(643909),
    a = n(503698),
    s = n.n(a),
    o = n(289873),
    u = n(228366),
    c = n(942340),
    d = n(997101);
let m = ["country", "city", "line1"],
    p = new Set([d.d.PR, d.d.AE, d.d.KY, d.d.NR, d.d.SG, d.d.MO, d.d.GI]),
    C = new Set([d.d.ID, d.d.CO, d.d.HK, d.d.AG, d.d.SM, d.d.VG]);
var h = n(648335),
    f = n(211528),
    E = n(87725),
    S = n(783327),
    y = n(166532),
    I = n(38405),
    A = n(240248),
    g = n(891640),
    P = n(818348),
    v = n(400400);
let x = [y.pn.PAYMENT_ELEMENT],
    _ = [
        y.pn.PAYPAL_INFORMATION,
        y.pn.VENMO_INFORMATION,
        y.pn.CASH_APP_INFORMATION,
        y.pn.EPS_INFORMATION,
        y.pn.PRZELEWY24_INFORMATION,
    ],
    T = new Set([y.pn.PAYMENT_ELEMENT, ..._]);
function N(e) {
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
            paymentElementFooter: h,
        } = e,
        E = (0, r.useElements)();
    i.useEffect(() => {
        c.current = E;
    }, [E, c]);
    let {
            shouldShowPaymentElement: S,
            shouldShowAddressElement: I,
            excludeBodySpacing: A,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: x.includes(t),
                shouldShowAddressElement: t === y.pn.ADDRESS,
                excludeBodySpacing: _.includes(t),
            }),
            [t],
        ),
        T = i.useMemo(() => {
            if (null == d) return !1;
            if ((0, g.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = g.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, l.jsxs)("div", {
        className: s()(v.kL, { [v.rf]: !A }),
        children: [
            (0, l.jsxs)("div", {
                className: s()(S ? v.RK : [v.R, v.$u], {
                    [v.df]: null == d,
                    [v._m]: d === P.he.CARD,
                    [v.JD]: d === P.he.PAYPAL,
                }),
                children: [
                    (0, l.jsx)(f.Wf, {
                        ...o,
                        paymentMethodOrder: m,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: C,
                    }),
                    S && h,
                ],
            }),
            (0, l.jsx)("div", {
                className: s()(v.K_, I ? v.RK : [v.R, v.vg]),
                children: (0, l.jsx)(f.KS, {
                    ...u,
                    internalKey: p,
                    renderAsStandaloneElement: T,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function b() {
    return (0, l.jsx)("div", {
        className: s()(v.kL, v.rf, v.g4),
        children: (0, l.jsx)(o.y, { type: o.y.Type.PULSING_ELLIPSIS }),
    });
}
function j(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: i,
            isLoading: a,
            setupError: s,
            customPaymentMethodIdsToSourceTypes: o,
            paymentMethodOrder: u,
        } = (0, c.p)({ onSetupError: t }),
        d = (0, S.S)();
    return a || null != s || null == d
        ? (0, l.jsx)(b, {})
        : (0, l.jsx)(r.Elements, {
              stripe: d,
              options: i,
              children: (0, l.jsx)(N, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
          });
}
let R = ["applePay", "googlePay", "link"];
function M(e) {
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
        [S, g] = i.useState(!1),
        [v, x] = i.useState(!1),
        _ = o === y.pn.CREDIT_CARD_INFORMATION || o === y.pn.PAYMENT_ELEMENT,
        [N, b] = i.useState(_ ? P.he.CARD : null),
        [j, M] = i.useState(!1),
        [O, L] = i.useState(void 0),
        k = (function (e) {
            let { step: t, paymentElementSelectedType: n } = e;
            return T.has(t) || (t === y.pn.ADDRESS && null != n);
        })({ step: t, paymentElementSelectedType: N }),
        w = i.useCallback(() => {
            L(Date.now().toString());
        }, []);
    i.useEffect(() => {
        t === y.pn.PAYMENT_ELEMENT && (d.current = null);
    }, [t]);
    let U = (0, E.t4)((e) => e.linkWalletEnabled),
        D = i.useMemo(() => (U ? R : R.filter((e) => "link" !== e)), [U]),
        G = i.useMemo(
            () => ({
                onChange: (e, t) => {
                    s && null != l && l.log("PaymentElements onChange event:", e), g(e.complete), b(t);
                },
                onReady: () => {
                    x(!0);
                },
                wallets: D,
            }),
            [l, s, D],
        ),
        F = i.useMemo(
            () => ({
                addressElementOnChangeFired: j,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = (0, f.ZB)(n);
                    s &&
                        null != l &&
                        l.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: j,
                            isAddressSubstantial: r,
                        }),
                        M(!0);
                    let o = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = m.every((e) => {
                            if ("city" === e && p.has(o.country)) return !0;
                            let t = o[e];
                            return null != t && "" !== t;
                        });
                    !t ||
                        u ||
                        C.has(n.country) ||
                        I.A.captureMessage(
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
            [a, s, l, j, M],
        ),
        B = i.useCallback(() => {
            let e;
            a({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(r.AddressElement);
                        if (null != t) return t;
                    })(c.current)) && e.clear();
        }, [c, a]),
        H = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && b(e), n(y.pn.PAYMENT_ELEMENT, t), M(!1), null != N && (0, h.R8)(N) && B();
            },
            [n, B, N],
        );
    i.useEffect(() => {
        function e() {
            H(void 0);
        }
        return (
            u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
            () => {
                u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
            }
        );
    }, [H]);
    let W = i.useCallback(() => {
        b(null);
    }, []);
    return {
        shouldRenderPaymentElement: k,
        stripePaymentElementProps: G,
        stripeAddressElementProps: F,
        stripeElementsRef: c,
        lastConfirmedSetupIntentRef: d,
        paymentElementReady: S,
        paymentElementLoaded: v,
        paymentElementSelectedType: N,
        setPaymentElementSelectedType: b,
        returnToPaymentElementStep: H,
        onBackFromPaymentElement: W,
        addressElementKey: O,
        remountAddressElement: w,
        clearAddressElement: B,
    };
}
