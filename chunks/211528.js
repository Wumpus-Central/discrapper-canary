"use strict";
n.d(t, { KS: () => b, Wf: () => R, e4: () => w, eR: () => L, wD: () => x });
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
    E = n(116673),
    g = n(942340),
    A = n(550238),
    I = n(648335),
    T = n(652215),
    S = n(818348),
    y = n(311701);
let v = [_.pn.PAYMENT_ELEMENT],
    N = [
        _.pn.PAYPAL_INFORMATION,
        _.pn.VENMO_INFORMATION,
        _.pn.CASH_APP_INFORMATION,
        _.pn.EPS_INFORMATION,
        _.pn.PRZELEWY24_INFORMATION,
        _.pn.IDEAL_INFORMATION,
    ],
    C = new Set([_.pn.PAYMENT_ELEMENT, ...N, _.pn.ADDRESS]),
    R = i.memo(function (e) {
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
                    let t = (0, I.Wn)(e.value.type, n);
                    if ((null != u && u(e, t), null != a)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = a,
                            s = null != t && t !== S.he.PAYMENT_REQUEST ? I.mr[t] : e.value.type;
                        p.default.track(T.HAw.PAYMENT_ELEMENT_CHANGED, {
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
            A = { billingDetails: { ...(null != h && { email: h }), ...(null != m && { name: m }) } };
        return (0, r.jsx)(s.PaymentElement, {
            id: "stripe-payment-element",
            options: { layout: { type: "tabs" }, wallets: g, defaultValues: A, ...o },
            onChange: E,
            ...d,
        });
    }),
    O = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, g.E)(),
            a = (0, m.PU)();
        return (0, r.jsx)(s.Elements, {
            stripe: n,
            options: { appearance: i, locale: a, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    b = i.memo(function (e) {
        let { options: t, renderAsStandaloneElement: n, billingAddressInfo: a, internalKey: o, ...l } = e,
            u = (0, E.z)(),
            c = i.useMemo(() => {
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
            d = i.useMemo(() => (null != u && u.length > 0 ? u : void 0), [u]),
            _ = i.useMemo(
                () =>
                    (0, r.jsx)(
                        s.AddressElement,
                        { options: { mode: "billing", defaultValues: c, allowedCountries: d, ...t }, ...l },
                        o,
                    ),
                [c, d, t, l, o],
            );
        return n
            ? (0, r.jsxs)(O, {
                  children: [
                      (0, r.jsx)("div", {
                          className: y.R,
                          children: (0, r.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      _,
                  ],
              })
            : _;
    }),
    D = (e) => {
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
        let {
            shouldShowPaymentElement: m,
            shouldShowAddressElement: E,
            excludeBodySpacing: g,
        } = i.useMemo(
            () => ({
                shouldShowPaymentElement: v.includes(t),
                shouldShowAddressElement: t === _.pn.ADDRESS,
                excludeBodySpacing: N.includes(t),
            }),
            [t],
        );
        return (0, r.jsxs)("div", {
            className: o()(y.kL, { [y.rf]: !g }),
            children: [
                (0, r.jsx)("div", {
                    className: o()(m ? y.RK : [y.R, y.$u], {
                        [y.df]: null == d,
                        [y._m]: d === S.he.CARD,
                        [y.JD]: d === S.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(R, {
                        ...l,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: p,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(y.K_, E ? y.RK : [y.R, y.vg]),
                    children: (0, r.jsx)(b, {
                        ...u,
                        internalKey: f,
                        renderAsStandaloneElement: d === S.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    L = () =>
        (0, r.jsx)("div", {
            className: o()(y.kL, y.rf, y.g4),
            children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }),
        }),
    w = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: a,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, g.p)({ onSetupError: t }),
            { stripe: u } = (0, d.P5)();
        return a || null != o || null == u
            ? (0, r.jsx)(L, {})
            : (0, r.jsx)(s.Elements, {
                  stripe: u,
                  options: { ...i },
                  children: (0, r.jsx)(D, { ...n, customPaymentMethodIdsToSourceTypes: l }),
              });
    },
    M = ["applePay", "googlePay", "link"],
    x = (e) => {
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
            [h, m] = i.useState(l === _.pn.CREDIT_CARD_INFORMATION ? S.he.CARD : null),
            E = r && C.has(t);
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let g = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != s && s.log("PaymentElements onChange event:", e), p(e.complete), m(t);
                    },
                    wallets: M,
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
                                A.V.every((e) => {
                                    let t = i[e];
                                    return null != t && "" !== t;
                                }) && t;
                        a(i, s);
                    },
                }),
                [a],
            ),
            T = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && m(e), n(_.pn.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                T(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [T, r]);
        let y = i.useCallback(() => {
                m(null);
            }, []),
            [v, N] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: g,
            stripeAddressElementProps: I,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: T,
            onBackFromPaymentElement: y,
            addressElementKey: v,
            remountAddressElement: i.useCallback(() => {
                N(Date.now().toString());
            }, []),
        };
    };
