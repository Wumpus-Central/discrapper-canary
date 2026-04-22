n.d(t, { KS: () => M, Ky: () => g, Wf: () => v, e4: () => O, eR: () => L, wD: () => U });
var l = n(627968),
    i = n(64700),
    a = n(342393),
    r = n(503698),
    s = n.n(r),
    o = n(311907),
    u = n(289873),
    c = n(73153),
    d = n(156312),
    p = n(166532),
    m = n(287809),
    h = n(954571),
    A = n(728458),
    _ = n(240248),
    C = n(71532),
    E = n(116673),
    y = n(942340),
    f = n(550238),
    P = n(648335),
    S = n(652215),
    x = n(818348),
    T = n(235301);
let N = [p.pn.PAYMENT_ELEMENT],
    g = [
        p.pn.PAYPAL_INFORMATION,
        p.pn.VENMO_INFORMATION,
        p.pn.CASH_APP_INFORMATION,
        p.pn.EPS_INFORMATION,
        p.pn.PRZELEWY24_INFORMATION,
        p.pn.IDEAL_INFORMATION,
    ],
    I = new Set([p.pn.PAYMENT_ELEMENT, ...g, p.pn.ADDRESS]),
    v = i.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: r,
                analyticsContext: s,
                options: u,
                onChange: c,
                step: d,
                ...A
            } = e,
            _ = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            C = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            E = i.useCallback(
                (e) => {
                    if (d !== p.pn.PAYMENT_ELEMENT) return;
                    let t = (0, P.Wn)(e.value.type, r);
                    if ((null != c && c(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: l, analyticsData: i } = s,
                            a = null != t && t !== x.he.PAYMENT_REQUEST ? P.mr[t] : e.value.type;
                        h.default.track(S.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: l,
                            location: i.location,
                            payment_element_selected_method: a,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [c, s, d, r],
            ),
            y = i.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            f = i.useMemo(
                () => ({ billingDetails: { ...(null != _ && { email: _ }), ...(null != C && { name: C }) } }),
                [_, C],
            ),
            T = i.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: y, defaultValues: f, paymentMethodOrder: t, ...u },
                    onChange: E,
                    ...A,
                }),
                [y, f, u, A, E, t],
            );
        return (0, l.jsx)(a.PaymentElement, { ...T });
    }),
    b = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, y.E)(),
            r = (0, C.PU)();
        return (0, l.jsx)(a.Elements, {
            stripe: n,
            options: { appearance: i, locale: r, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    R = (e) => null != e && null != e && (!(0, _.uJ)(e.line1) || !(0, _.uJ)(e.city)),
    M = i.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: r,
                billingAddressInfo: s,
                internalKey: o,
                ...u
            } = e,
            c = (0, E.z)(),
            d = null != c && c.length > 0 ? c[0] : (0, _.uJ)(s.country) ? "" : s.country,
            p = i.useMemo(() => {
                let { name: e, address: t } = (0, C._Z)({ ...s, country: d });
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
                      : null != t && null != t.country && r
                        ? { address: { country: d } }
                        : void 0;
            }, [s, r, d]),
            m = i.useMemo(() => (null != c && c.length > 0 ? c : void 0), [c]),
            h = i.useMemo(
                () =>
                    (0, l.jsx)(
                        a.AddressElement,
                        { options: { mode: "billing", defaultValues: p, allowedCountries: m, ...t }, ...u },
                        o,
                    ),
                [p, m, t, u, o],
            );
        return n
            ? (0, l.jsxs)(b, {
                  children: [
                      (0, l.jsx)("div", {
                          className: T.R,
                          children: (0, l.jsx)(a.PaymentElement, { id: "stripe-payment-element" }),
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
                customPaymentMethodIdsToSourceTypes: r,
                stripePaymentElementProps: o,
                stripeAddressElementProps: u,
                elementsRef: c,
                paymentElementSelectedType: d,
                paymentMethodOrder: m,
                addressElementKey: h,
                analyticsContext: A,
                paymentElementFooter: _,
            } = e,
            C = (0, a.useElements)();
        i.useEffect(() => {
            c.current = C;
        }, [C, c]);
        let {
            shouldShowPaymentElement: E,
            shouldShowAddressElement: y,
            excludeBodySpacing: f,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: N.includes(t),
                shouldShowAddressElement: t === p.pn.ADDRESS,
                excludeBodySpacing: g.includes(t),
            }),
            [t],
        );
        return (0, l.jsxs)("div", {
            className: s()(T.kL, { [T.rf]: !f }),
            children: [
                (0, l.jsxs)("div", {
                    className: s()(E ? T.RK : [T.R, T.$u], {
                        [T.df]: null == d,
                        [T._m]: d === x.he.CARD,
                        [T.JD]: d === x.he.PAYPAL,
                    }),
                    children: [
                        (0, l.jsx)(v, {
                            ...o,
                            paymentMethodOrder: m,
                            customPaymentMethodIdsToSourceTypes: r,
                            step: t,
                            analyticsContext: A,
                        }),
                        E && _,
                    ],
                }),
                (0, l.jsx)("div", {
                    className: s()(T.K_, y ? T.RK : [T.R, T.vg]),
                    children: (0, l.jsx)(M, {
                        ...u,
                        internalKey: h,
                        renderAsStandaloneElement: d === x.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    L = () =>
        (0, l.jsx)("div", {
            className: s()(T.kL, T.rf, T.g4),
            children: (0, l.jsx)(u.y, { type: u.y.Type.PULSING_ELLIPSIS }),
        }),
    O = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: r,
                setupError: s,
                customPaymentMethodIdsToSourceTypes: o,
                paymentMethodOrder: u,
            } = (0, y.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return r || null != s || null == c
            ? (0, l.jsx)(L, {})
            : (0, l.jsx)(a.Elements, {
                  stripe: c,
                  options: { ...i },
                  children: (0, l.jsx)(j, { ...n, customPaymentMethodIdsToSourceTypes: o, paymentMethodOrder: u }),
              });
    },
    D = ["applePay", "googlePay", "link"],
    U = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: l,
                logger: r,
                onBillingAddressChange: s,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: u,
            } = e,
            d = i.useRef(null),
            m = i.useRef(null),
            [h, C] = i.useState(!1),
            [E, y] = i.useState(u === p.pn.CREDIT_CARD_INFORMATION ? x.he.CARD : null),
            S = l && I.has(t),
            [T, N] = i.useState(!1),
            [g, v] = i.useState(void 0),
            b = i.useCallback(() => {
                v(Date.now().toString());
            }, []);
        i.useEffect(() => {
            t === p.pn.PAYMENT_ELEMENT && (m.current = null);
        }, [t]);
        let M = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != r && r.log("PaymentElements onChange event:", e), C(e.complete), y(t);
                    },
                    wallets: D,
                }),
                [r, o],
            ),
            j = i.useMemo(
                () => ({
                    addressElementOnChangeFired: T,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: l },
                            } = e,
                            i = R(n);
                        o &&
                            null != r &&
                            r.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: l,
                                addressElementOnChangeFired: T,
                                isAddressSubstantial: i,
                            }),
                            N(!0);
                        let a = {
                                name: l,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u = (0, f.Q)(a);
                        t &&
                            !u &&
                            A.A.captureMessage(
                                "AddressElement validity mismatch: Stripe complete but computed invalid",
                                {
                                    tags: { app_context: "billing", billing_context: "payment_element" },
                                    extra: {
                                        isValidComputed: u,
                                        stripeComplete: t,
                                        country: n.country,
                                        emptyFields: Object.entries(a)
                                            .filter((e) => {
                                                let [, t] = e;
                                                return (0, _.uJ)(t);
                                            })
                                            .map((e) => {
                                                let [t] = e;
                                                return t;
                                            }),
                                    },
                                },
                            ),
                            s(a, u && t);
                    },
                }),
                [s, o, r, T, N],
            ),
            L = i.useCallback(() => {
                let e;
                s({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    null !=
                        (e = ((e) => {
                            if (null == e) return;
                            let t = e.getElement(a.AddressElement);
                            if (null != t) return t;
                        })(d.current)) && e.clear();
            }, [d, s]),
            O = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && y(e), n(p.pn.PAYMENT_ELEMENT, t), N(!1), null != E && (0, P.R8)(E) && L();
                },
                [n, L, E],
            );
        i.useEffect(() => {
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
        let U = i.useCallback(() => {
            y(null);
        }, []);
        return {
            shouldRenderPaymentElement: S,
            stripePaymentElementProps: M,
            stripeAddressElementProps: j,
            combinedStripeElementsRef: d,
            lastConfirmedSetupIntentRef: m,
            paymentElementReady: h,
            paymentElementSelectedType: E,
            setPaymentElementSelectedType: y,
            returnToPaymentElementStep: O,
            onBackFromPaymentElement: U,
            addressElementKey: g,
            remountAddressElement: b,
            clearAddressElement: L,
        };
    };
