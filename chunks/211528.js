"use strict";
n.d(t, { KS: () => L, Ky: () => v, Wf: () => O, e4: () => P, eR: () => M, wD: () => k });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    u = n(289873),
    c = n(228366),
    d = n(783327),
    _ = n(166532),
    h = n(287809),
    f = n(174459),
    p = n(38405),
    E = n(240248),
    m = n(71532),
    g = n(116673),
    A = n(942340),
    I = n(550238),
    T = n(648335),
    S = n(652215),
    y = n(818348),
    C = n(235301);
let N = [_.pn.PAYMENT_ELEMENT],
    v = [
        _.pn.PAYPAL_INFORMATION,
        _.pn.VENMO_INFORMATION,
        _.pn.CASH_APP_INFORMATION,
        _.pn.EPS_INFORMATION,
        _.pn.PRZELEWY24_INFORMATION,
        _.pn.IDEAL_INFORMATION,
    ],
    R = new Set([_.pn.PAYMENT_ELEMENT, ...v]),
    O = r.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: a,
                analyticsContext: o,
                options: u,
                onChange: c,
                step: d,
                ...p
            } = e,
            E = (0, l.bG)([h.default], () => {
                let e = h.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            m = (0, l.bG)([h.default], () => {
                let e = h.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = r.useCallback(
                (e) => {
                    if (d !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, T.Wn)(e.value.type, a);
                    if ((null != c && c(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: i, analyticsData: r } = o,
                            s = null != t && t !== y.he.PAYMENT_REQUEST ? T.mr[t] : e.value.type;
                        f.default.track(S.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: i,
                            payment_element_selected_method: s,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                            ...("string" == typeof r.location ? { location: r.location } : void 0),
                        });
                    }
                },
                [c, o, d, a],
            ),
            A = r.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            I = r.useMemo(
                () => ({ billingDetails: { ...(null != E && { email: E }), ...(null != m && { name: m }) } }),
                [E, m],
            ),
            C = r.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: I, paymentMethodOrder: t, ...u },
                    onChange: g,
                    ...p,
                }),
                [A, I, u, p, g, t],
            );
        return (0, i.jsx)(s.PaymentElement, { ...C });
    });
function b(e) {
    let { children: t } = e,
        n = (0, d.S)(),
        { elementsAppearance: r } = (0, A.E)(),
        a = (0, m.PU)();
    return (0, i.jsx)(s.Elements, {
        stripe: n,
        options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
        children: t,
    });
}
function D(e) {
    return null != e && null != e && (!(0, E.uJ)(e.line1) || !(0, E.uJ)(e.city));
}
let L = r.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: a,
            billingAddressInfo: o,
            internalKey: l,
            ...u
        } = e,
        c = (0, g.z)(),
        d = null != c && c.length > 0 ? c[0] : (0, E.uJ)(o.country) ? "" : o.country,
        _ = r.useMemo(() => {
            let { name: e, address: t } = (0, m._Z)({ ...o, country: d });
            return null != t && D(t)
                ? {
                      ...(null != e && "" !== e && { name: e }),
                      address: Object.fromEntries(
                          Object.entries(t).filter((e) => {
                              let [t, n] = e;
                              return void 0 !== n;
                          }),
                      ),
                  }
                : null != e && "" !== e
                  ? { name: e }
                  : null != t && null != t.country && a
                    ? { address: { country: d } }
                    : void 0;
        }, [o, a, d]),
        h = r.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
        f = r.useMemo(
            () =>
                (0, i.jsx)(
                    s.AddressElement,
                    { options: { mode: "billing", defaultValues: _, allowedCountries: h, ...t }, ...u },
                    l,
                ),
            [_, h, t, u, l],
        );
    return n
        ? (0, i.jsxs)(b, {
              children: [
                  (0, i.jsx)("div", {
                      className: C.R,
                      children: (0, i.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  f,
              ],
          })
        : f;
});
function w(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: l,
            stripeAddressElementProps: u,
            elementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: h,
            addressElementKey: f,
            analyticsContext: p,
            paymentElementFooter: E,
        } = e,
        m = (0, s.useElements)();
    r.useEffect(() => {
        c.current = m;
    }, [m, c]);
    let {
        shouldShowPaymentElement: g,
        shouldShowAddressElement: A,
        excludeBodySpacing: I,
    } = r.useMemo(
        () => ({
            shouldShowPaymentElement: N.includes(t),
            shouldShowAddressElement: t === _.pn.ADDRESS,
            excludeBodySpacing: v.includes(t),
        }),
        [t],
    );
    return (0, i.jsxs)("div", {
        className: o()(C.kL, { [C.rf]: !I }),
        children: [
            (0, i.jsxs)("div", {
                className: o()(g ? C.RK : [C.R, C.$u], {
                    [C.df]: null == d,
                    [C._m]: d === y.he.CARD,
                    [C.JD]: d === y.he.PAYPAL,
                }),
                children: [
                    (0, i.jsx)(O, {
                        ...l,
                        paymentMethodOrder: h,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: p,
                    }),
                    g && E,
                ],
            }),
            (0, i.jsx)("div", {
                className: o()(C.K_, A ? C.RK : [C.R, C.vg]),
                children: (0, i.jsx)(L, {
                    ...u,
                    internalKey: f,
                    renderAsStandaloneElement: d === y.he.PAYMENT_REQUEST,
                    billingAddressInfo: n,
                }),
            }),
        ],
    });
}
function M() {
    return (0, i.jsx)("div", {
        className: o()(C.kL, C.rf, C.g4),
        children: (0, i.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
    });
}
function P(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: r,
            isLoading: a,
            setupError: o,
            customPaymentMethodIdsToSourceTypes: l,
            paymentMethodOrder: u,
        } = (0, A.p)({ onSetupError: t }),
        c = (0, d.S)();
    return a || null != o || null == c
        ? (0, i.jsx)(M, {})
        : (0, i.jsx)(s.Elements, {
              stripe: c,
              options: r,
              children: (0, i.jsx)(w, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
          });
}
let x = ["applePay", "googlePay", "link"];
function k(e) {
    let {
            step: t,
            handleStepChange: n,
            paymentElementsEnabled: i,
            logger: a,
            onBillingAddressChange: o,
            shouldLogOnChangeEvents: l,
            continueSessionToInitialStep: u,
        } = e,
        d = r.useRef(null),
        h = r.useRef(null),
        [f, m] = r.useState(!1),
        [g, A] = r.useState(u === _.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
        [S, C] = r.useState(!1),
        [N, v] = r.useState(void 0),
        O = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: i } = e;
            return !!n && (R.has(t) || (t === _.pn.ADDRESS && null != i));
        })({ step: t, paymentElementsEnabled: i, paymentElementSelectedType: g }),
        b = r.useCallback(() => {
            v(Date.now().toString());
        }, []);
    r.useEffect(() => {
        t === _.pn.PAYMENT_ELEMENT && (h.current = null);
    }, [t]);
    let L = r.useMemo(
            () => ({
                onChange: (e, t) => {
                    l && null != a && a.log("PaymentElements onChange event:", e), m(e.complete), A(t);
                },
                wallets: x,
            }),
            [a, l],
        ),
        w = r.useMemo(
            () => ({
                addressElementOnChangeFired: S,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = D(n);
                    l &&
                        null != a &&
                        a.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: S,
                            isAddressSubstantial: r,
                        }),
                        C(!0);
                    let s = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, I.Qd)(s);
                    !t ||
                        u ||
                        I.im.has(n.country) ||
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
                                            return (0, E.uJ)(t);
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
            [o, l, a, S, C],
        ),
        M = r.useCallback(() => {
            let e;
            o({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                null !=
                    (e = (function (e) {
                        if (null == e) return;
                        let t = e.getElement(s.AddressElement);
                        if (null != t) return t;
                    })(d.current)) && e.clear();
        }, [d, o]),
        P = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                void 0 !== e && A(e), n(_.pn.PAYMENT_ELEMENT, t), C(!1), null != g && (0, T.R8)(g) && M();
            },
            [n, M, g],
        );
    r.useEffect(() => {
        if (i)
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        function e() {
            P(void 0);
        }
    }, [P, i]);
    let k = r.useCallback(() => {
        A(null);
    }, []);
    return {
        shouldRenderPaymentElement: O,
        stripePaymentElementProps: L,
        stripeAddressElementProps: w,
        combinedStripeElementsRef: d,
        lastConfirmedSetupIntentRef: h,
        paymentElementReady: f,
        paymentElementSelectedType: g,
        setPaymentElementSelectedType: A,
        returnToPaymentElementStep: P,
        onBackFromPaymentElement: k,
        addressElementKey: N,
        remountAddressElement: b,
        clearAddressElement: M,
    };
}
