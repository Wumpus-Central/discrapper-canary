n.d(t, { KS: () => L, Ky: () => g, Wf: () => v, e4: () => O, eR: () => j, wD: () => w });
var l = n(627968),
    a = n(64700),
    i = n(342393),
    r = n(503698),
    s = n.n(r),
    o = n(17928),
    u = n(289873),
    c = n(228366),
    d = n(156312),
    p = n(166532),
    m = n(287809),
    h = n(954571),
    A = n(38405),
    C = n(240248),
    _ = n(71532),
    E = n(116673),
    y = n(942340),
    f = n(550238),
    P = n(648335),
    S = n(652215),
    T = n(818348),
    x = n(235301);
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
    v = a.memo(function (e) {
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
            C = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            _ = (0, o.bG)([m.default], () => {
                let e = m.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            E = a.useCallback(
                (e) => {
                    if (d !== p.pn.PAYMENT_ELEMENT) return;
                    let t = (0, P.Wn)(e.value.type, r);
                    if ((null != c && c(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: l, analyticsData: a } = s,
                            i = null != t && t !== T.he.PAYMENT_REQUEST ? P.mr[t] : e.value.type;
                        h.default.track(S.HAw.PAYMENT_ELEMENT_CHANGED, {
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
            y = a.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            f = a.useMemo(
                () => ({ billingDetails: { ...(null != C && { email: C }), ...(null != _ && { name: _ }) } }),
                [C, _],
            ),
            x = a.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: y, defaultValues: f, paymentMethodOrder: t, ...u },
                    onChange: E,
                    ...A,
                }),
                [y, f, u, A, E, t],
            );
        return (0, l.jsx)(i.PaymentElement, { ...x });
    }),
    b = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: a } = (0, y.E)(),
            r = (0, _.PU)();
        return (0, l.jsx)(i.Elements, {
            stripe: n,
            options: { appearance: a, locale: r, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    M = (e) => null != e && null != e && (!(0, C.uJ)(e.line1) || !(0, C.uJ)(e.city)),
    L = a.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: r,
                billingAddressInfo: s,
                internalKey: o,
                ...u
            } = e,
            c = (0, E.z)(),
            d = null != c && c.length > 0 ? c[0] : (0, C.uJ)(s.country) ? "" : s.country,
            p = a.useMemo(() => {
                let { name: e, address: t } = (0, _._Z)({ ...s, country: d });
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
            ? (0, l.jsxs)(b, {
                  children: [
                      (0, l.jsx)("div", {
                          className: x.R,
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
                analyticsContext: A,
                paymentElementFooter: C,
            } = e,
            _ = (0, i.useElements)();
        a.useEffect(() => {
            c.current = _;
        }, [_, c]);
        let {
            shouldShowPaymentElement: E,
            shouldShowAddressElement: y,
            excludeBodySpacing: f,
        } = a.useMemo(
            () => ({
                shouldShowPaymentElement: N.includes(t),
                shouldShowAddressElement: t === p.pn.ADDRESS,
                excludeBodySpacing: g.includes(t),
            }),
            [t],
        );
        return (0, l.jsxs)("div", {
            className: s()(x.kL, { [x.rf]: !f }),
            children: [
                (0, l.jsxs)("div", {
                    className: s()(E ? x.RK : [x.R, x.$u], {
                        [x.df]: null == d,
                        [x._m]: d === T.he.CARD,
                        [x.JD]: d === T.he.PAYPAL,
                    }),
                    children: [
                        (0, l.jsx)(v, {
                            ...o,
                            paymentMethodOrder: m,
                            customPaymentMethodIdsToSourceTypes: r,
                            step: t,
                            analyticsContext: A,
                        }),
                        E && C,
                    ],
                }),
                (0, l.jsx)("div", {
                    className: s()(x.K_, y ? x.RK : [x.R, x.vg]),
                    children: (0, l.jsx)(L, {
                        ...u,
                        internalKey: h,
                        renderAsStandaloneElement: d === T.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    j = () =>
        (0, l.jsx)("div", {
            className: s()(x.kL, x.rf, x.g4),
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
            } = (0, y.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return r || null != s || null == c
            ? (0, l.jsx)(j, {})
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
            [h, _] = a.useState(!1),
            [E, y] = a.useState(u === p.pn.CREDIT_CARD_INFORMATION ? T.he.CARD : null),
            S = l && I.has(t),
            [x, N] = a.useState(!1),
            [g, v] = a.useState(void 0),
            b = a.useCallback(() => {
                v(Date.now().toString());
            }, []);
        a.useEffect(() => {
            t === p.pn.PAYMENT_ELEMENT && (m.current = null);
        }, [t]);
        let L = a.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != r && r.log("PaymentElements onChange event:", e), _(e.complete), y(t);
                    },
                    wallets: D,
                }),
                [r, o],
            ),
            R = a.useMemo(
                () => ({
                    addressElementOnChangeFired: x,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: l },
                            } = e,
                            a = M(n);
                        o &&
                            null != r &&
                            r.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: l,
                                addressElementOnChangeFired: x,
                                isAddressSubstantial: a,
                            }),
                            N(!0);
                        let i = {
                                name: l,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u = (0, f.Q)(i);
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
                                        emptyFields: Object.entries(i)
                                            .filter((e) => {
                                                let [, t] = e;
                                                return (0, C.uJ)(t);
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
                [s, o, r, x, N],
            ),
            j = a.useCallback(() => {
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
                    void 0 !== e && y(e), n(p.pn.PAYMENT_ELEMENT, t), N(!1), null != E && (0, P.R8)(E) && j();
                },
                [n, j, E],
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
            y(null);
        }, []);
        return {
            shouldRenderPaymentElement: S,
            stripePaymentElementProps: L,
            stripeAddressElementProps: R,
            combinedStripeElementsRef: d,
            lastConfirmedSetupIntentRef: m,
            paymentElementReady: h,
            paymentElementSelectedType: E,
            setPaymentElementSelectedType: y,
            returnToPaymentElementStep: O,
            onBackFromPaymentElement: w,
            addressElementKey: g,
            remountAddressElement: b,
            clearAddressElement: j,
        };
    };
