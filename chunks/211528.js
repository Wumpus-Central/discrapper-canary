"use strict";
n.d(t, { KS: () => C, Lw: () => L, Wf: () => v, e4: () => b, eR: () => O });
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
    h = n(240248),
    m = n(71532),
    E = n(942340),
    g = n(550238),
    A = n(648335),
    I = n(652215),
    T = n(818348),
    S = n(311701);
let y = [_.pn.PAYMENT_ELEMENT],
    v = i.memo(function (e) {
        let {
                wallets: t = [],
                customPaymentMethodIdsToSourceTypes: n,
                analyticsContext: a,
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
            E = i.useCallback(
                (e) => {
                    if (c !== _.pn.PAYMENT_ELEMENT) return;
                    let t = (0, A.Wn)(e.value.type, n);
                    if ((null != u && u(e, t), null != a)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = a,
                            s = null != t && t !== T.he.PAYMENT_REQUEST ? A.mr[t] : e.value.type;
                        p.default.track(I.HAw.PAYMENT_ELEMENT_CHANGED, {
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
                [u, a, c, n],
            ),
            g = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            S = { billingDetails: { ...(null != h && { email: h }), ...(null != m && { name: m }) } };
        return (0, r.jsx)(s.PaymentElement, {
            id: "stripe-payment-element",
            options: { layout: { type: "tabs" }, wallets: g, defaultValues: S, ...o },
            onChange: E,
            ...d,
        });
    }),
    N = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, E.E)();
        return (0, r.jsx)(s.Elements, {
            stripe: n,
            options: { appearance: i, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    C = i.memo(function (e) {
        let { options: t, renderAsStandaloneElement: n, billingAddressInfo: a, internalKey: o, ...l } = e,
            u = i.useMemo(() => {
                let { name: e, address: t } = (0, m._Z)(a);
                return null == t || ((0, h.uJ)(t.line1) && (0, h.uJ)(t.city))
                    ? null != e && "" !== e
                        ? { name: e }
                        : void 0
                    : {
                          ...(null != e && "" !== e && { name: e }),
                          address: Object.fromEntries(
                              Object.entries(t).filter((e) => {
                                  let [t, n] = e;
                                  return void 0 !== n;
                              }),
                          ),
                      };
            }, [a]),
            c = i.useMemo(
                () => (0, r.jsx)(s.AddressElement, { options: { mode: "billing", defaultValues: u, ...t }, ...l }, o),
                [u, t, l, o],
            );
        return n
            ? (0, r.jsxs)(N, {
                  children: [
                      (0, r.jsx)("div", {
                          className: S.R,
                          children: (0, r.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      c,
                  ],
              })
            : c;
    }),
    R = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: a,
                stripePaymentElementProps: l,
                stripeAddressElementProps: u,
                elementsRef: c,
                paymentElementSelectedType: d,
                addressElementKey: f,
                analyticsContext: p,
            } = e,
            h = (0, s.useElements)();
        i.useEffect(() => {
            c.current = h;
        }, [h, c]);
        let m = y.includes(t),
            E = t === _.pn.ADDRESS;
        return (0, r.jsxs)("div", {
            className: o()(S.kL, S.rf),
            children: [
                (0, r.jsx)("div", {
                    className: o()(m ? S.RK : [S.R, S.$u], {
                        [S.df]: null == d,
                        [S._m]: d === T.he.CARD,
                        [S.JD]: d === T.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(v, {
                        ...l,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: p,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(S.K_, E ? S.RK : [S.R, S.vg]),
                    children: (0, r.jsx)(C, {
                        ...u,
                        internalKey: f,
                        renderAsStandaloneElement: d === T.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    O = () =>
        (0, r.jsx)("div", {
            className: o()(S.kL, S.rf, S.g4),
            children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }),
        }),
    b = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: a,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, E.p)({ onSetupError: t }),
            { stripe: u } = (0, d.P5)();
        return a || null != o || null == u
            ? (0, r.jsx)(O, {})
            : (0, r.jsx)(s.Elements, {
                  stripe: u,
                  options: { ...i },
                  children: (0, r.jsx)(R, { ...n, customPaymentMethodIdsToSourceTypes: l }),
              });
    },
    D = ["applePay", "googlePay", "link"],
    L = (e) => {
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
            [h, m] = i.useState(l === _.pn.CREDIT_CARD_INFORMATION ? T.he.CARD : null),
            E = r && (t === _.pn.PAYMENT_ELEMENT || (t === _.pn.ADDRESS && null != h));
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let A = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != s && s.log("PaymentElements onChange event:", e), p(e.complete), m(t);
                    },
                    wallets: D,
                }),
                [s, o],
            ),
            I = i.useMemo(
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
                            s =
                                g.V.every((e) => {
                                    let t = i[e];
                                    return null != t && "" !== t;
                                }) && t;
                        a(i, s);
                    },
                }),
                [a],
            ),
            S = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && m(e), n(_.pn.PAYMENT_ELEMENT, t);
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
        let y = i.useCallback(() => {
                m(null);
            }, []),
            [v, N] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: A,
            stripeAddressElementProps: I,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: S,
            onBackFromPaymentElement: y,
            addressElementKey: v,
            remountAddressElement: i.useCallback(() => {
                N(Date.now().toString());
            }, []),
        };
    };
