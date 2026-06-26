"use strict";
n.d(t, { KS: () => w, Ky: () => R, Wf: () => b, e4: () => x, eR: () => P, wD: () => U });
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
    h = n(891640),
    f = n(287809),
    p = n(174459),
    E = n(38405),
    m = n(240248),
    g = n(71532),
    A = n(116673),
    I = n(942340),
    T = n(550238),
    S = n(648335),
    y = n(652215),
    C = n(818348),
    N = n(492453);
let v = [_.pn.PAYMENT_ELEMENT],
    R = [
        _.pn.PAYPAL_INFORMATION,
        _.pn.VENMO_INFORMATION,
        _.pn.CASH_APP_INFORMATION,
        _.pn.EPS_INFORMATION,
        _.pn.PRZELEWY24_INFORMATION,
        _.pn.IDEAL_INFORMATION,
    ],
    O = new Set([_.pn.PAYMENT_ELEMENT, ...R]),
    b = r.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: a,
                analyticsContext: o,
                options: u,
                onChange: c,
                step: d,
                ...h
            } = e,
            E = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            m = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = r.useCallback(
                (e) => {
                    if (d !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, S.Wn)(e.value.type, a);
                    if ((null != c && c(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: i, analyticsData: r } = o,
                            s = null != t && t !== C.he.PAYMENT_REQUEST ? S.mr[t] : e.value.type;
                        p.default.track(y.HAw.PAYMENT_ELEMENT_CHANGED, {
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
            T = r.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: I, paymentMethodOrder: t, ...u },
                    onChange: g,
                    ...h,
                }),
                [A, I, u, h, g, t],
            );
        return (0, i.jsx)(s.PaymentElement, { ...T });
    });
function D(e) {
    let { children: t } = e,
        n = (0, d.S)(),
        { elementsAppearance: r } = (0, I.E)(),
        a = (0, g.PU)();
    return (0, i.jsx)(s.Elements, {
        stripe: n,
        options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
        children: t,
    });
}
function L(e) {
    return null != e && null != e && (!(0, m.uJ)(e.line1) || !(0, m.uJ)(e.city));
}
let w = r.memo(function (e) {
    let {
            options: t,
            renderAsStandaloneElement: n,
            addressElementOnChangeFired: a,
            billingAddressInfo: o,
            internalKey: l,
            ...u
        } = e,
        c = (0, A.z)(),
        d = null != c && c.length > 0 ? c[0] : (0, m.uJ)(o.country) ? "" : o.country,
        _ = r.useMemo(() => {
            let { name: e, address: t } = (0, g._Z)({ ...o, country: d });
            return null != t && L(t)
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
        ? (0, i.jsxs)(D, {
              children: [
                  (0, i.jsx)("div", {
                      className: N.R,
                      children: (0, i.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                  }),
                  f,
              ],
          })
        : f;
});
function M(e) {
    let {
            step: t,
            billingAddressInfo: n,
            customPaymentMethodIdsToSourceTypes: a,
            stripePaymentElementProps: l,
            stripeAddressElementProps: u,
            elementsRef: c,
            paymentElementSelectedType: d,
            paymentMethodOrder: f,
            addressElementKey: p,
            analyticsContext: E,
            paymentElementFooter: m,
        } = e,
        g = (0, s.useElements)();
    r.useEffect(() => {
        c.current = g;
    }, [g, c]);
    let {
            shouldShowPaymentElement: A,
            shouldShowAddressElement: I,
            excludeBodySpacing: T,
        } = r.useMemo(
            () => ({
                shouldShowPaymentElement: v.includes(t),
                shouldShowAddressElement: t === _.pn.ADDRESS,
                excludeBodySpacing: R.includes(t),
            }),
            [t],
        ),
        S = r.useMemo(() => {
            if (null == d) return !1;
            if ((0, h.i)(d)) {
                let { renderAddressElementInStandaloneMode: e } = h.F[d];
                return e ?? !1;
            }
        }, [d]);
    return (0, i.jsxs)("div", {
        className: o()(N.kL, { [N.rf]: !T }),
        children: [
            (0, i.jsxs)("div", {
                className: o()(A ? N.RK : [N.R, N.$u], {
                    [N.df]: null == d,
                    [N._m]: d === C.he.CARD,
                    [N.JD]: d === C.he.PAYPAL,
                }),
                children: [
                    (0, i.jsx)(b, {
                        ...l,
                        paymentMethodOrder: f,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: E,
                    }),
                    A && m,
                ],
            }),
            (0, i.jsx)("div", {
                className: o()(N.K_, I ? N.RK : [N.R, N.vg]),
                children: (0, i.jsx)(w, { ...u, internalKey: p, renderAsStandaloneElement: S, billingAddressInfo: n }),
            }),
        ],
    });
}
function P() {
    return (0, i.jsx)("div", {
        className: o()(N.kL, N.rf, N.g4),
        children: (0, i.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
    });
}
function x(e) {
    let { onSetupError: t, ...n } = e,
        {
            elementsOptions: r,
            isLoading: a,
            setupError: o,
            customPaymentMethodIdsToSourceTypes: l,
            paymentMethodOrder: u,
        } = (0, I.p)({ onSetupError: t }),
        c = (0, d.S)();
    return a || null != o || null == c
        ? (0, i.jsx)(P, {})
        : (0, i.jsx)(s.Elements, {
              stripe: c,
              options: r,
              children: (0, i.jsx)(M, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
          });
}
let k = ["applePay", "googlePay", "link"];
function U(e) {
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
        [f, p] = r.useState(!1),
        [g, A] = r.useState(u === _.pn.CREDIT_CARD_INFORMATION ? C.he.CARD : null),
        [I, y] = r.useState(!1),
        [N, v] = r.useState(void 0),
        R = (function (e) {
            let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: i } = e;
            return !!n && (O.has(t) || (t === _.pn.ADDRESS && null != i));
        })({ step: t, paymentElementsEnabled: i, paymentElementSelectedType: g }),
        b = r.useCallback(() => {
            v(Date.now().toString());
        }, []);
    r.useEffect(() => {
        t === _.pn.PAYMENT_ELEMENT && (h.current = null);
    }, [t]);
    let D = r.useMemo(
            () => ({
                onChange: (e, t) => {
                    l && null != a && a.log("PaymentElements onChange event:", e), p(e.complete), A(t);
                },
                wallets: k,
            }),
            [a, l],
        ),
        w = r.useMemo(
            () => ({
                addressElementOnChangeFired: I,
                onChange: (e) => {
                    let {
                            complete: t,
                            value: { address: n, name: i },
                        } = e,
                        r = L(n);
                    l &&
                        null != a &&
                        a.log("AddressElement onChange event:", {
                            complete: t,
                            address: n,
                            name: i,
                            addressElementOnChangeFired: I,
                            isAddressSubstantial: r,
                        }),
                        y(!0);
                    let s = {
                            name: i,
                            country: n.country,
                            city: n.city,
                            line1: n.line1,
                            line2: n.line2 ?? "",
                            state: n.state,
                            postalCode: n.postal_code,
                        },
                        u = (0, T.Qd)(s);
                    !t ||
                        u ||
                        T.im.has(n.country) ||
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
            [o, l, a, I, y],
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
                void 0 !== e && A(e), n(_.pn.PAYMENT_ELEMENT, t), y(!1), null != g && (0, S.R8)(g) && M();
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
    let x = r.useCallback(() => {
        A(null);
    }, []);
    return {
        shouldRenderPaymentElement: R,
        stripePaymentElementProps: D,
        stripeAddressElementProps: w,
        combinedStripeElementsRef: d,
        lastConfirmedSetupIntentRef: h,
        paymentElementReady: f,
        paymentElementSelectedType: g,
        setPaymentElementSelectedType: A,
        returnToPaymentElementStep: P,
        onBackFromPaymentElement: x,
        addressElementKey: N,
        remountAddressElement: b,
        clearAddressElement: M,
    };
}
