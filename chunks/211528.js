n.d(t, { KS: () => b, Ky: () => I, Wf: () => v, e4: () => O, eR: () => L, wD: () => w });
var l = n(627968),
    a = n(64700),
    i = n(342393),
    r = n(503698),
    s = n.n(r),
    o = n(17928),
    u = n(289873),
    c = n(228366),
    d = n(902958),
    p = n(166532),
    m = n(287809),
    h = n(174459),
    C = n(38405),
    A = n(240248),
    E = n(71532),
    y = n(116673),
    P = n(942340),
    S = n(550238),
    _ = n(648335),
    T = n(652215),
    f = n(818348),
    N = n(235301);
let x = [p.pn.PAYMENT_ELEMENT],
    I = [
        p.pn.PAYPAL_INFORMATION,
        p.pn.VENMO_INFORMATION,
        p.pn.CASH_APP_INFORMATION,
        p.pn.EPS_INFORMATION,
        p.pn.PRZELEWY24_INFORMATION,
        p.pn.IDEAL_INFORMATION,
    ],
    g = new Set([p.pn.PAYMENT_ELEMENT, ...I, p.pn.ADDRESS]),
    v = a.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: r,
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
            y = a.useCallback(
                (e) => {
                    if (d !== p.pn.PAYMENT_ELEMENT) return;
                    let t = (0, _.Wn)(e.value.type, r);
                    if ((null != c && c(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: l, analyticsData: a } = s,
                            i = null != t && t !== f.he.PAYMENT_REQUEST ? _.mr[t] : e.value.type;
                        h.default.track(T.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: l,
                            location: a.location,
                            payment_element_selected_method: i,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [c, s, d, r],
            ),
            P = a.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            S = a.useMemo(
                () => ({ billingDetails: { ...(null != A && { email: A }), ...(null != E && { name: E }) } }),
                [A, E],
            ),
            N = a.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: P, defaultValues: S, paymentMethodOrder: t, ...u },
                    onChange: y,
                    ...C,
                }),
                [P, S, u, C, y, t],
            );
        return (0, l.jsx)(i.PaymentElement, { ...N });
    }),
    M = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: a } = (0, P.E)(),
            r = (0, E.PU)();
        return (0, l.jsx)(i.Elements, {
            stripe: n,
            options: { appearance: a, locale: r, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    j = (e) => null != e && null != e && (!(0, A.uJ)(e.line1) || !(0, A.uJ)(e.city)),
    b = a.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: r,
                billingAddressInfo: s,
                internalKey: o,
                ...u
            } = e,
            c = (0, y.z)(),
            d = null != c && c.length > 0 ? c[0] : (0, A.uJ)(s.country) ? "" : s.country,
            p = a.useMemo(() => {
                let { name: e, address: t } = (0, E._Z)({ ...s, country: d });
                return null != t && j(t)
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
                      : null != t && null != t.country && r
                        ? { address: { country: d } }
                        : void 0;
            }, [s, r, d]),
            m = a.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
            h = a.useMemo(
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
                          className: N.R,
                          children: (0, l.jsx)(i.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      h,
                  ],
              })
            : h;
    }),
    R = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: r,
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
        a.useEffect(() => {
            c.current = E;
        }, [E, c]);
        let {
            shouldShowPaymentElement: y,
            shouldShowAddressElement: P,
            excludeBodySpacing: S,
        } = a.useMemo(
            () => ({
                shouldShowPaymentElement: x.includes(t),
                shouldShowAddressElement: t === p.pn.ADDRESS,
                excludeBodySpacing: I.includes(t),
            }),
            [t],
        );
        return (0, l.jsxs)("div", {
            className: s()(N.kL, { [N.rf]: !S }),
            children: [
                (0, l.jsxs)("div", {
                    className: s()(y ? N.RK : [N.R, N.$u], {
                        [N.df]: null == d,
                        [N._m]: d === f.he.CARD,
                        [N.JD]: d === f.he.PAYPAL,
                    }),
                    children: [
                        (0, l.jsx)(v, {
                            ...o,
                            paymentMethodOrder: m,
                            customPaymentMethodIdsToSourceTypes: r,
                            step: t,
                            analyticsContext: C,
                        }),
                        y && A,
                    ],
                }),
                (0, l.jsx)("div", {
                    className: s()(N.K_, P ? N.RK : [N.R, N.vg]),
                    children: (0, l.jsx)(b, {
                        ...u,
                        internalKey: h,
                        renderAsStandaloneElement: d === f.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    L = () =>
        (0, l.jsx)("div", {
            className: s()(N.kL, N.rf, N.g4),
            children: (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
        }),
    O = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: a,
                isLoading: r,
                setupError: s,
                customPaymentMethodIdsToSourceTypes: o,
                paymentMethodOrder: u,
            } = (0, P.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return r || null != s || null == c
            ? (0, l.jsx)(L, {})
            : (0, l.jsx)(i.Elements, {
                  stripe: c,
                  options: { ...a },
                  children: (0, l.jsx)(R, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
              });
    },
    D = ["applePay", "googlePay", "link"],
    w = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: l,
                logger: r,
                onBillingAddressChange: s,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: u,
            } = e,
            d = a.useRef(null),
            m = a.useRef(null),
            [h, E] = a.useState(!1),
            [y, P] = a.useState(u === p.pn.CREDIT_CARD_INFORMATION ? f.he.CARD : null),
            T = l && g.has(t),
            [N, x] = a.useState(!1),
            [I, v] = a.useState(void 0),
            M = a.useCallback(() => {
                v(Date.now().toString());
            }, []);
        a.useEffect(() => {
            t === p.pn.PAYMENT_ELEMENT && (m.current = null);
        }, [t]);
        let b = a.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != r && r.log("PaymentElements onChange event:", e), E(e.complete), P(t);
                    },
                    wallets: D,
                }),
                [r, o],
            ),
            R = a.useMemo(
                () => ({
                    addressElementOnChangeFired: N,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: l },
                            } = e,
                            a = j(n);
                        o &&
                            null != r &&
                            r.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: l,
                                addressElementOnChangeFired: N,
                                isAddressSubstantial: a,
                            }),
                            x(!0);
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
                [s, o, r, N, x],
            ),
            L = a.useCallback(() => {
                let e;
                s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    null !=
                        (e = ((e) => {
                            if (null == e) return;
                            let t = e.getElement(i.AddressElement);
                            if (null != t) return t;
                        })(d.current)) && e.clear();
            }, [d, s]),
            O = a.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && P(e), n(p.pn.PAYMENT_ELEMENT, t), x(!1), null != y && (0, _.R8)(y) && L();
                },
                [n, L, y],
            );
        a.useEffect(() => {
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
        let w = a.useCallback(() => {
            P(null);
        }, []);
        return {
            shouldRenderPaymentElement: T,
            stripePaymentElementProps: b,
            stripeAddressElementProps: R,
            combinedStripeElementsRef: d,
            lastConfirmedSetupIntentRef: m,
            paymentElementReady: h,
            paymentElementSelectedType: y,
            setPaymentElementSelectedType: P,
            returnToPaymentElementStep: O,
            onBackFromPaymentElement: w,
            addressElementKey: I,
            remountAddressElement: M,
            clearAddressElement: L,
        };
    };
