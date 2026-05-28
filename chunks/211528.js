n.d(t, { KS: () => b, Ky: () => x, Wf: () => v, e4: () => O, eR: () => L, wD: () => w });
var l = n(627968),
    r = n(64700),
    i = n(342393),
    a = n(503698),
    s = n.n(a),
    o = n(17928),
    u = n(289873),
    c = n(228366),
    d = n(536302),
    p = n(166532),
    m = n(287809),
    h = n(174459),
    C = n(38405),
    A = n(240248),
    E = n(71532),
    y = n(116673),
    P = n(942340),
    S = n(550238),
    f = n(648335),
    _ = n(652215),
    T = n(818348),
    I = n(235301);
let N = [p.pn.PAYMENT_ELEMENT],
    x = [
        p.pn.PAYPAL_INFORMATION,
        p.pn.VENMO_INFORMATION,
        p.pn.CASH_APP_INFORMATION,
        p.pn.EPS_INFORMATION,
        p.pn.PRZELEWY24_INFORMATION,
        p.pn.IDEAL_INFORMATION,
    ],
    g = new Set([p.pn.PAYMENT_ELEMENT, ...x]),
    v = r.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: a,
                analyticsContext: s,
                options: u,
                onChange: c,
                step: d,
                ...C
            } = e,
            A = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            E = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            y = r.useCallback(
                (e) => {
                    if (d !== p.pn.PAYMENT_ELEMENT) return;
                    let t = (0, f.Wn)(e.value.type, a);
                    if ((null != c && c(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: l, analyticsData: r } = s,
                            i = null != t && t !== T.he.PAYMENT_REQUEST ? f.mr[t] : e.value.type;
                        h.default.track(_.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: l,
                            location: r.location,
                            payment_element_selected_method: i,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [c, s, d, a],
            ),
            P = r.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            S = r.useMemo(
                () => ({ billingDetails: { ...(null != A && { email: A }), ...(null != E && { name: E }) } }),
                [A, E],
            ),
            I = r.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: P, defaultValues: S, paymentMethodOrder: t, ...u },
                    onChange: y,
                    ...C,
                }),
                [P, S, u, C, y, t],
            );
        return (0, l.jsx)(i.PaymentElement, { ...I });
    }),
    M = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: r } = (0, P.E)(),
            a = (0, E.PU)();
        return (0, l.jsx)(i.Elements, {
            stripe: n,
            options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    R = (e) => null != e && null != e && (!(0, A.uJ)(e.line1) || !(0, A.uJ)(e.city)),
    b = r.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: a,
                billingAddressInfo: s,
                internalKey: o,
                ...u
            } = e,
            c = (0, y.z)(),
            d = null != c && c.length > 0 ? c[0] : (0, A.uJ)(s.country) ? "" : s.country,
            p = r.useMemo(() => {
                let { name: e, address: t } = (0, E._Z)({ ...s, country: d });
                return null != t && R(t)
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
            }, [s, a, d]),
            m = r.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
            h = r.useMemo(
                () =>
                    (0, l.jsx)(
                        i.AddressElement,
                        { options: { mode: "billing", defaultValues: p, allowedCountries: m, ...t }, ...u },
                        o,
                    ),
                [p, m, t, u, o],
            );
        return n
            ? (0, l.jsxs)(M, {
                  children: [
                      (0, l.jsx)("div", {
                          className: I.R,
                          children: (0, l.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      h,
                  ],
              })
            : h;
    }),
    j = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: a,
                stripePaymentElementProps: o,
                stripeAddressElementProps: u,
                elementsRef: c,
                paymentElementSelectedType: d,
                paymentMethodOrder: m,
                addressElementKey: h,
                analyticsContext: C,
                paymentElementFooter: A,
            } = e,
            E = (0, i.useElements)();
        r.useEffect(() => {
            c.current = E;
        }, [E, c]);
        let {
            shouldShowPaymentElement: y,
            shouldShowAddressElement: P,
            excludeBodySpacing: S,
        } = r.useMemo(
            () => ({
                shouldShowPaymentElement: N.includes(t),
                shouldShowAddressElement: t === p.pn.ADDRESS,
                excludeBodySpacing: x.includes(t),
            }),
            [t],
        );
        return (0, l.jsxs)("div", {
            className: s()(I.kL, { [I.rf]: !S }),
            children: [
                (0, l.jsxs)("div", {
                    className: s()(y ? I.RK : [I.R, I.$u], {
                        [I.df]: null == d,
                        [I._m]: d === T.he.CARD,
                        [I.JD]: d === T.he.PAYPAL,
                    }),
                    children: [
                        (0, l.jsx)(v, {
                            ...o,
                            paymentMethodOrder: m,
                            customPaymentMethodIdsToSourceTypes: a,
                            step: t,
                            analyticsContext: C,
                        }),
                        y && A,
                    ],
                }),
                (0, l.jsx)("div", {
                    className: s()(I.K_, P ? I.RK : [I.R, I.vg]),
                    children: (0, l.jsx)(b, {
                        ...u,
                        internalKey: h,
                        renderAsStandaloneElement: d === T.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    L = () =>
        (0, l.jsx)("div", {
            className: s()(I.kL, I.rf, I.g4),
            children: (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
        }),
    O = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: r,
                isLoading: a,
                setupError: s,
                customPaymentMethodIdsToSourceTypes: o,
                paymentMethodOrder: u,
            } = (0, P.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return a || null != s || null == c
            ? (0, l.jsx)(L, {})
            : (0, l.jsx)(i.Elements, {
                  stripe: c,
                  options: r,
                  children: (0, l.jsx)(j, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
              });
    },
    D = ["applePay", "googlePay", "link"],
    w = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: l,
                logger: a,
                onBillingAddressChange: s,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: u,
            } = e,
            d = r.useRef(null),
            m = r.useRef(null),
            [h, E] = r.useState(!1),
            [y, P] = r.useState(u === p.pn.CREDIT_CARD_INFORMATION ? T.he.CARD : null),
            [_, I] = r.useState(!1),
            [N, x] = r.useState(void 0),
            v = ((e) => {
                let { step: t, paymentElementsEnabled: n, paymentElementSelectedType: l } = e;
                return !!n && (g.has(t) || (t === p.pn.ADDRESS && null != l));
            })({ step: t, paymentElementsEnabled: l, paymentElementSelectedType: y }),
            M = r.useCallback(() => {
                x(Date.now().toString());
            }, []);
        r.useEffect(() => {
            t === p.pn.PAYMENT_ELEMENT && (m.current = null);
        }, [t]);
        let b = r.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != a && a.log("PaymentElements onChange event:", e), E(e.complete), P(t);
                    },
                    wallets: D,
                }),
                [a, o],
            ),
            j = r.useMemo(
                () => ({
                    addressElementOnChangeFired: _,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: l },
                            } = e,
                            r = R(n);
                        o &&
                            null != a &&
                            a.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: l,
                                addressElementOnChangeFired: _,
                                isAddressSubstantial: r,
                            }),
                            I(!0);
                        let i = {
                                name: l,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u = (0, S.Qd)(i);
                        !t ||
                            u ||
                            S.im.has(n.country) ||
                            C.A.captureMessage(
                                "Unexpected AddressElement validity mismatch: Stripe complete but address was computed invalid",
                                {
                                    tags: { app_context: "billing", billing_context: "payment_element" },
                                    extra: {
                                        isValidComputed: u,
                                        stripeComplete: t,
                                        country: n.country,
                                        emptyFields: Object.entries(i)
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
                            s(i, u && t);
                    },
                }),
                [s, o, a, _, I],
            ),
            L = r.useCallback(() => {
                let e;
                s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    null !=
                        (e = ((e) => {
                            if (null == e) return;
                            let t = e.getElement(i.AddressElement);
                            if (null != t) return t;
                        })(d.current)) && e.clear();
            }, [d, s]),
            O = r.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && P(e), n(p.pn.PAYMENT_ELEMENT, t), I(!1), null != y && (0, f.R8)(y) && L();
                },
                [n, L, y],
            );
        r.useEffect(() => {
            if (!l) return;
            let e = () => {
                O(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [O, l]);
        let w = r.useCallback(() => {
            P(null);
        }, []);
        return {
            shouldRenderPaymentElement: v,
            stripePaymentElementProps: b,
            stripeAddressElementProps: j,
            combinedStripeElementsRef: d,
            lastConfirmedSetupIntentRef: m,
            paymentElementReady: h,
            paymentElementSelectedType: y,
            setPaymentElementSelectedType: P,
            returnToPaymentElementStep: O,
            onBackFromPaymentElement: w,
            addressElementKey: N,
            remountAddressElement: M,
            clearAddressElement: L,
        };
    };
