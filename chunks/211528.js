"use strict";
n.d(t, { KS: () => C, Lw: () => D, Wf: () => S, e4: () => R, eR: () => N });
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(503698),
    o = n.n(s),
    l = n(311907),
    u = n(397927),
    c = n(73153),
    d = n(156312),
    _ = n(166532),
    f = n(287809),
    p = n(954571),
    h = n(71532),
    m = n(942340),
    g = n(550238),
    E = n(648335),
    A = n(652215),
    I = n(818348),
    T = n(571882);
let y = [_.pn.PAYMENT_ELEMENT],
    S = i.memo(function (e) {
        let {
                wallets: t = [],
                customPaymentMethodIdsToSourceTypes: n,
                analyticsContext: s,
                options: o,
                onChange: u,
                step: c,
                ...d
            } = e,
            h = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            m = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = i.useCallback(
                (e) => {
                    if (c !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, E.Wn)(e.value.type, n);
                    if ((null != u && u(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = s,
                            a = null != t && t !== I.he.PAYMENT_REQUEST ? E.mr[t] : e.value.type;
                        p.default.track(A.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: r,
                            location: i.location,
                            payment_element_selected_method: a,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [u, s, c, n],
            ),
            T = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            y = { billingDetails: { ...(null != h && { email: h }), ...(null != m && { name: m }) } };
        return (0, r.jsx)(a.PaymentElement, {
            id: "stripe-payment-element",
            options: { layout: { type: "tabs" }, wallets: T, defaultValues: y, ...o },
            onChange: g,
            ...d,
        });
    }),
    v = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, m.E)();
        return (0, r.jsx)(a.Elements, {
            stripe: n,
            options: { appearance: i, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    C = i.memo(function (e) {
        let { options: t, renderAsStandaloneElement: n, billingAddressInfo: s, internalKey: o, ...l } = e,
            u = i.useMemo(() => {
                let { name: e, address: t } = (0, h._Z)(s);
                return {
                    name: e ?? null,
                    ...(null != t && {
                        address: Object.fromEntries(
                            Object.entries(t).filter((e) => {
                                let [t, n] = e;
                                return void 0 !== n;
                            }),
                        ),
                    }),
                };
            }, [s]),
            c = i.useMemo(
                () => (0, r.jsx)(a.AddressElement, { options: { mode: "billing", defaultValues: u, ...t }, ...l }, o),
                [u, t, l, o],
            );
        return n
            ? (0, r.jsxs)(v, {
                  children: [
                      (0, r.jsx)("div", {
                          className: T.R,
                          children: (0, r.jsx)(a.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      c,
                  ],
              })
            : c;
    }),
    b = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: s,
                stripePaymentElementProps: l,
                stripeAddressElementProps: u,
                elementsRef: c,
                paymentElementSelectedType: d,
                addressElementKey: f,
                analyticsContext: p,
            } = e,
            h = (0, a.useElements)();
        i.useEffect(() => {
            c.current = h;
        }, [h, c]);
        let m = y.includes(t),
            g = t === _.pn.ADDRESS;
        return (0, r.jsxs)("div", {
            className: T.rf,
            children: [
                (0, r.jsx)("div", {
                    className: o()(m ? T.RK : [T.R, T.$u], {
                        [T.df]: null == d,
                        [T._m]: d === I.he.CARD,
                        [T.JD]: d === I.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(S, {
                        ...l,
                        customPaymentMethodIdsToSourceTypes: s,
                        step: t,
                        analyticsContext: p,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(T.K_, g ? T.RK : [T.R, T.vg]),
                    children: (0, r.jsx)(C, {
                        ...u,
                        internalKey: f,
                        renderAsStandaloneElement: d === I.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    N = () =>
        (0, r.jsx)("div", { className: T.g4, children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }) }),
    R = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: s,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, m.p)({ onSetupError: t }),
            { stripe: u } = (0, d.P5)();
        return s || null != o || null == u
            ? (0, r.jsx)(N, {})
            : (0, r.jsx)(a.Elements, {
                  stripe: u,
                  options: { ...i },
                  children: (0, r.jsx)(b, { ...n, customPaymentMethodIdsToSourceTypes: l }),
              });
    },
    O = ["applePay", "googlePay", "link"],
    D = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: s,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: l,
            } = e,
            u = i.useRef(null),
            d = i.useRef(null),
            [f, p] = i.useState(!1),
            [h, m] = i.useState(l === _.pn.CREDIT_CARD_INFORMATION ? I.he.CARD : null),
            E = r && (t === _.pn.PAYMENT_ELEMENT || (t === _.pn.ADDRESS && null != h));
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let A = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != a && a.log("PaymentElements onChange event:", e), p(e.complete), m(t);
                    },
                    wallets: O,
                }),
                [a, o],
            ),
            T = i.useMemo(
                () => ({
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: r },
                            } = e,
                            i = {
                                name: r,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            a =
                                g.V.every((e) => {
                                    let t = i[e];
                                    return null != t && "" !== t;
                                }) && t;
                        s(i, a);
                    },
                }),
                [s],
            ),
            y = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && m(e), n(_.pn.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                y(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [y, r]);
        let S = i.useCallback(() => {
                m(null);
            }, []),
            [v, C] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: A,
            stripeAddressElementProps: T,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: y,
            onBackFromPaymentElement: S,
            addressElementKey: v,
            remountAddressElement: i.useCallback(() => {
                C(Date.now().toString());
            }, []),
        };
    };
