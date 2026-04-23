"use strict";
n.d(t, { KS: () => L, Ky: () => C, Wf: () => R, e4: () => P, eR: () => M, wD: () => k });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(311907),
    u = n(289873),
    c = n(73153),
    d = n(156312),
    _ = n(166532),
    f = n(287809),
    p = n(954571),
    h = n(728458),
    E = n(240248),
    m = n(71532),
    g = n(116673),
    A = n(942340),
    I = n(550238),
    T = n(648335),
    S = n(652215),
    y = n(818348),
    N = n(235301);
let v = [_.pn.PAYMENT_ELEMENT],
    C = [
        _.pn.PAYPAL_INFORMATION,
        _.pn.VENMO_INFORMATION,
        _.pn.CASH_APP_INFORMATION,
        _.pn.EPS_INFORMATION,
        _.pn.PRZELEWY24_INFORMATION,
        _.pn.IDEAL_INFORMATION,
    ],
    O = new Set([_.pn.PAYMENT_ELEMENT, ...C, _.pn.ADDRESS]),
    R = i.memo(function (e) {
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
                () => ({ billingDetails: { ...(null != E && { email: E }), ...(null != m && { name: m }) } }),
                [E, m],
            ),
            N = i.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: I, paymentMethodOrder: t, ...u },
                    onChange: g,
                    ...h,
                }),
                [A, I, u, h, g, t],
            );
        return (0, r.jsx)(s.PaymentElement, { ...N });
    }),
    b = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, A.E)(),
            a = (0, m.PU)();
        return (0, r.jsx)(s.Elements, {
            stripe: n,
            options: { appearance: i, locale: a, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    D = (e) => null != e && null != e && (!(0, E.uJ)(e.line1) || !(0, E.uJ)(e.city)),
    L = i.memo(function (e) {
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
            _ = i.useMemo(() => {
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
                          className: N.R,
                          children: (0, r.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      p,
                  ],
              })
            : p;
    }),
    w = (e) => {
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
                paymentElementFooter: E,
            } = e,
            m = (0, s.useElements)();
        i.useEffect(() => {
            c.current = m;
        }, [m, c]);
        let {
            shouldShowPaymentElement: g,
            shouldShowAddressElement: A,
            excludeBodySpacing: I,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: v.includes(t),
                shouldShowAddressElement: t === _.pn.ADDRESS,
                excludeBodySpacing: C.includes(t),
            }),
            [t],
        );
        return (0, r.jsxs)("div", {
            className: o()(N.kL, { [N.rf]: !I }),
            children: [
                (0, r.jsxs)("div", {
                    className: o()(g ? N.RK : [N.R, N.$u], {
                        [N.df]: null == d,
                        [N._m]: d === y.he.CARD,
                        [N.JD]: d === y.he.PAYPAL,
                    }),
                    children: [
                        (0, r.jsx)(R, {
                            ...l,
                            paymentMethodOrder: f,
                            customPaymentMethodIdsToSourceTypes: a,
                            step: t,
                            analyticsContext: h,
                        }),
                        g && E,
                    ],
                }),
                (0, r.jsx)("div", {
                    className: o()(N.K_, A ? N.RK : [N.R, N.vg]),
                    children: (0, r.jsx)(L, {
                        ...u,
                        internalKey: p,
                        renderAsStandaloneElement: d === y.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    M = () =>
        (0, r.jsx)("div", {
            className: o()(N.kL, N.rf, N.g4),
            children: (0, r.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
        }),
    P = (e) => {
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
            ? (0, r.jsx)(M, {})
            : (0, r.jsx)(s.Elements, {
                  stripe: c,
                  options: { ...i },
                  children: (0, r.jsx)(w, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
              });
    },
    x = ["applePay", "googlePay", "link"],
    k = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: o,
                shouldLogOnChangeEvents: l,
                continueSessionToInitialStep: u,
            } = e,
            d = i.useRef(null),
            f = i.useRef(null),
            [p, m] = i.useState(!1),
            [g, A] = i.useState(u === _.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
            S = r && O.has(t),
            [N, v] = i.useState(!1),
            [C, R] = i.useState(void 0),
            b = i.useCallback(() => {
                R(Date.now().toString());
            }, []);
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (f.current = null);
        }, [t]);
        let L = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        l && null != a && a.log("PaymentElements onChange event:", e), m(e.complete), A(t);
                    },
                    wallets: x,
                }),
                [a, l],
            ),
            w = i.useMemo(
                () => ({
                    addressElementOnChangeFired: N,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: r },
                            } = e,
                            i = D(n);
                        l &&
                            null != a &&
                            a.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: r,
                                addressElementOnChangeFired: N,
                                isAddressSubstantial: i,
                            }),
                            v(!0);
                        let s = {
                                name: r,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u = (0, I.Q)(s);
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
                [o, l, a, N, v],
            ),
            M = i.useCallback(() => {
                let e;
                o({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    null !=
                        (e = ((e) => {
                            if (null == e) return;
                            let t = e.getElement(s.AddressElement);
                            if (null != t) return t;
                        })(d.current)) && e.clear();
            }, [d, o]),
            P = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && A(e), n(_.pn.PAYMENT_ELEMENT, t), v(!1), null != g && (0, T.R8)(g) && M();
                },
                [n, M, g],
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
        let k = i.useCallback(() => {
            A(null);
        }, []);
        return {
            shouldRenderPaymentElement: S,
            stripePaymentElementProps: L,
            stripeAddressElementProps: w,
            combinedStripeElementsRef: d,
            lastConfirmedSetupIntentRef: f,
            paymentElementReady: p,
            paymentElementSelectedType: g,
            setPaymentElementSelectedType: A,
            returnToPaymentElementStep: P,
            onBackFromPaymentElement: k,
            addressElementKey: C,
            remountAddressElement: b,
            clearAddressElement: M,
        };
    };
