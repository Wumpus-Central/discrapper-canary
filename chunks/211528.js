"use strict";
n.d(t, { KS: () => b, Lw: () => L, Wf: () => v, e4: () => O, eR: () => R });
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
    h = n(954571),
    p = n(71532),
    g = n(942340),
    E = n(550238),
    A = n(648335),
    I = n(652215),
    T = n(818348),
    y = n(571882);
let S = [_.pn.PAYMENT_ELEMENT],
    v = i.memo(function (e) {
        let {
                wallets: t = [],
                customPaymentMethodIdsToSourceTypes: n,
                analyticsContext: s,
                options: o,
                onChange: u,
                step: c,
                ...d
            } = e,
            p = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            g = (0, l.bG)([f.default], () => {
                let e = f.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            E = i.useCallback(
                (e) => {
                    if (c !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, A.Wn)(e.value.type, n);
                    if ((null != u && u(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = s,
                            a = null != t && t !== T.he.PAYMENT_REQUEST ? A.mr[t] : e.value.type;
                        h.default.track(I.HAw.PAYMENT_ELEMENT_CHANGED, {
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
            y = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            S = { billingDetails: { ...(null != p && { email: p }), ...(null != g && { name: g }) } };
        return (0, r.jsx)(a.PaymentElement, {
            id: "stripe-payment-element",
            options: { layout: { type: "tabs" }, wallets: y, defaultValues: S, ...o },
            onChange: E,
            ...d,
        });
    }),
    C = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, g.E)();
        return (0, r.jsx)(a.Elements, {
            stripe: n,
            options: { appearance: i, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    b = i.memo(function (e) {
        let { options: t, renderAsStandaloneElement: n, billingAddressInfo: s, internalKey: o, ...l } = e,
            u = i.useMemo(() => {
                let { name: e, address: t } = (0, p._Z)(s);
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
            ? (0, r.jsxs)(C, {
                  children: [
                      (0, r.jsx)("div", {
                          className: y.R,
                          children: (0, r.jsx)(a.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      c,
                  ],
              })
            : c;
    }),
    N = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: s,
                stripePaymentElementProps: l,
                stripeAddressElementProps: u,
                elementsRef: c,
                paymentElementSelectedType: d,
                addressElementKey: f,
                analyticsContext: h,
            } = e,
            p = (0, a.useElements)();
        i.useEffect(() => {
            c.current = p;
        }, [p, c]);
        let g = S.includes(t),
            E = t === _.pn.ADDRESS;
        return (0, r.jsxs)("div", {
            className: o()(y.kL, y.rf),
            children: [
                (0, r.jsx)("div", {
                    className: o()(g ? y.RK : [y.R, y.$u], {
                        [y.df]: null == d,
                        [y._m]: d === T.he.CARD,
                        [y.JD]: d === T.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(v, {
                        ...l,
                        customPaymentMethodIdsToSourceTypes: s,
                        step: t,
                        analyticsContext: h,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(y.K_, E ? y.RK : [y.R, y.vg]),
                    children: (0, r.jsx)(b, {
                        ...u,
                        internalKey: f,
                        renderAsStandaloneElement: d === T.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    R = () =>
        (0, r.jsx)("div", {
            className: o()(y.kL, y.rf, y.g4),
            children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }),
        }),
    O = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: s,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, g.p)({ onSetupError: t }),
            { stripe: u } = (0, d.P5)();
        return s || null != o || null == u
            ? (0, r.jsx)(R, {})
            : (0, r.jsx)(a.Elements, {
                  stripe: u,
                  options: { ...i },
                  children: (0, r.jsx)(N, { ...n, customPaymentMethodIdsToSourceTypes: l }),
              });
    },
    D = ["applePay", "googlePay", "link"],
    L = (e) => {
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
            [f, h] = i.useState(!1),
            [p, g] = i.useState(l === _.pn.CREDIT_CARD_INFORMATION ? T.he.CARD : null),
            A = r && (t === _.pn.PAYMENT_ELEMENT || (t === _.pn.ADDRESS && null != p));
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let I = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != a && a.log("PaymentElements onChange event:", e), h(e.complete), g(t);
                    },
                    wallets: D,
                }),
                [a, o],
            ),
            y = i.useMemo(
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
                                E.V.every((e) => {
                                    let t = i[e];
                                    return null != t && "" !== t;
                                }) && t;
                        s(i, a);
                    },
                }),
                [s],
            ),
            S = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && g(e), n(_.pn.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                S(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [S, r]);
        let v = i.useCallback(() => {
                g(null);
            }, []),
            [C, b] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: A,
            stripePaymentElementProps: I,
            stripeAddressElementProps: y,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: p,
            setPaymentElementSelectedType: g,
            handlePaymentElementStep: S,
            onBackFromPaymentElement: v,
            addressElementKey: C,
            remountAddressElement: i.useCallback(() => {
                b(Date.now().toString());
            }, []),
        };
    };
