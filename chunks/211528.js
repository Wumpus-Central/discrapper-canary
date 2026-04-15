"use strict";
n.d(t, { KS: () => P, Ky: () => C, Wf: () => O, e4: () => U, eR: () => k, wD: () => F });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(311907),
    u = n(397927),
    c = n(73153),
    d = n(156312),
    _ = n(166532),
    f = n(287809),
    p = n(954571),
    h = n(728458),
    m = n(240248),
    E = n(71532),
    g = n(116673),
    A = n(942340),
    I = n(550238),
    T = n(648335),
    S = n(652215),
    y = n(818348),
    v = n(311701);
let N = [_.pn.PAYMENT_ELEMENT],
    C = [
        _.pn.PAYPAL_INFORMATION,
        _.pn.VENMO_INFORMATION,
        _.pn.CASH_APP_INFORMATION,
        _.pn.EPS_INFORMATION,
        _.pn.PRZELEWY24_INFORMATION,
        _.pn.IDEAL_INFORMATION,
    ],
    R = new Set([_.pn.PAYMENT_ELEMENT, ...C, _.pn.ADDRESS]),
    O = i.memo(function (e) {
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
            m = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            E = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = i.useCallback(
                (e) => {
                    if (d !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, T.Wn)(e.value.type, a);
                    if ((null != c && c(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = o,
                            s = null != t && t !== y.he.PAYMENT_REQUEST ? T.mr[t] : e.value.type;
                        p.default.track(S.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: r,
                            location: i.location,
                            payment_element_selected_method: s,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [c, o, d, a],
            ),
            A = i.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            I = i.useMemo(
                () => ({ billingDetails: { ...(null != m && { email: m }), ...(null != E && { name: E }) } }),
                [m, E],
            ),
            v = i.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: I, paymentMethodOrder: t, ...u },
                    onChange: g,
                    ...h,
                }),
                [A, I, u, h, g, t],
            );
        return (0, r.jsx)(s.PaymentElement, { ...v });
    }),
    b = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, A.E)(),
            a = (0, E.PU)();
        return (0, r.jsx)(s.Elements, {
            stripe: n,
            options: { appearance: i, locale: a, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    D = (e) => {
        let t = L(e);
        null != t && t.clear();
    },
    L = (e) => {
        if (null == e) return;
        let t = e.getElement(s.AddressElement);
        if (null != t) return t;
    },
    w = (e, t) => (null != t && t.length > 0 ? t[0] : (0, m.uJ)(e.country) ? "" : e.country),
    M = (e) => null != e && null != e && (!(0, m.uJ)(e.line1) || !(0, m.uJ)(e.city)),
    P = i.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: a,
                billingAddressInfo: o,
                internalKey: l,
                ...u
            } = e,
            c = (0, g.z)(),
            d = w(o, c),
            _ = i.useMemo(() => {
                let { name: e, address: t } = (0, E._Z)({ ...o, country: d });
                return null != t && M(t)
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
            f = i.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
            p = i.useMemo(
                () =>
                    (0, r.jsx)(
                        s.AddressElement,
                        { options: { mode: "billing", defaultValues: _, allowedCountries: f, ...t }, ...u },
                        l,
                    ),
                [_, f, t, u, l],
            );
        return n
            ? (0, r.jsxs)(b, {
                  children: [
                      (0, r.jsx)("div", {
                          className: v.R,
                          children: (0, r.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      p,
                  ],
              })
            : p;
    }),
    x = (e) => {
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
                analyticsContext: h,
            } = e,
            m = (0, s.useElements)();
        i.useEffect(() => {
            c.current = m;
        }, [m, c]);
        let {
            shouldShowPaymentElement: E,
            shouldShowAddressElement: g,
            excludeBodySpacing: A,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: N.includes(t),
                shouldShowAddressElement: t === _.pn.ADDRESS,
                excludeBodySpacing: C.includes(t),
            }),
            [t],
        );
        return (0, r.jsxs)("div", {
            className: o()(v.kL, { [v.rf]: !A }),
            children: [
                (0, r.jsx)("div", {
                    className: o()(E ? v.RK : [v.R, v.$u], {
                        [v.df]: null == d,
                        [v._m]: d === y.he.CARD,
                        [v.JD]: d === y.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(O, {
                        ...l,
                        paymentMethodOrder: f,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: h,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(v.K_, g ? v.RK : [v.R, v.vg]),
                    children: (0, r.jsx)(P, {
                        ...u,
                        internalKey: p,
                        renderAsStandaloneElement: d === y.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    k = () =>
        (0, r.jsx)("div", {
            className: o()(v.kL, v.rf, v.g4),
            children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }),
        }),
    U = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: a,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
                paymentMethodOrder: u,
            } = (0, A.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return a || null != o || null == c
            ? (0, r.jsx)(k, {})
            : (0, r.jsx)(s.Elements, {
                  stripe: c,
                  options: { ...i },
                  children: (0, r.jsx)(x, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
              });
    },
    G = ["applePay", "googlePay", "link"],
    F = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: s,
                onBillingAddressChange: a,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: l,
            } = e,
            u = i.useRef(null),
            d = i.useRef(null),
            [f, p] = i.useState(!1),
            [E, g] = i.useState(l === _.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
            A = r && R.has(t),
            [S, v] = i.useState(!1),
            [N, C] = i.useState(void 0),
            O = i.useCallback(() => {
                C(Date.now().toString());
            }, []);
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let b = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != s && s.log("PaymentElements onChange event:", e), p(e.complete), g(t);
                    },
                    wallets: G,
                }),
                [s, o],
            ),
            L = i.useMemo(
                () => ({
                    addressElementOnChangeFired: S,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: r },
                            } = e,
                            i = M(n);
                        o &&
                            null != s &&
                            s.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: r,
                                addressElementOnChangeFired: S,
                                isAddressSubstantial: i,
                            }),
                            v(!0);
                        let l = {
                                name: r,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u = (0, I.Q)(l);
                        t &&
                            !u &&
                            h.A.captureMessage(
                                "AddressElement validity mismatch: Stripe complete but computed invalid",
                                {
                                    tags: { app_context: "billing", billing_context: "payment_element" },
                                    extra: {
                                        isValidComputed: u,
                                        stripeComplete: t,
                                        country: n.country,
                                        emptyFields: Object.entries(l)
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
                            a(l, u && t);
                    },
                }),
                [a, o, s, S, v],
            ),
            w = i.useCallback(() => {
                a({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    D(u.current);
            }, [u, a]),
            P = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && g(e), n(_.pn.PAYMENT_ELEMENT, t), v(!1), null != E && (0, T.R8)(E) && w();
                },
                [n, w, E],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                P(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [P, r]);
        let x = i.useCallback(() => {
            g(null);
        }, []);
        return {
            shouldRenderPaymentElement: A,
            stripePaymentElementProps: b,
            stripeAddressElementProps: L,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: E,
            setPaymentElementSelectedType: g,
            returnToPaymentElementStep: P,
            onBackFromPaymentElement: x,
            addressElementKey: N,
            remountAddressElement: O,
            clearAddressElement: w,
        };
    };
