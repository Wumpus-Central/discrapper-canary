"use strict";
n.d(t, { KS: () => M, Ky: () => N, Wf: () => R, e4: () => k, eR: () => P, wD: () => G });
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
                    let t = (0, I.Wn)(e.value.type, a);
                    if ((null != c && c(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = o,
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
            y = i.useMemo(
                () => ({ billingDetails: { ...(null != m && { email: m }), ...(null != E && { name: E }) } }),
                [m, E],
            ),
            v = i.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: y, paymentMethodOrder: t, ...u },
                    onChange: g,
                    ...h,
                }),
                [A, y, u, h, g, t],
            );
        return (0, r.jsx)(s.PaymentElement, { ...v });
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
    b = (e) => {
        let t = D(e);
        null != t && t.clear();
    },
    D = (e) => {
        if (null == e) return;
        let t = e.getElement(s.AddressElement);
        if (null != t) return t;
    },
    L = (e, t) => (null != t && t.length > 0 ? t[0] : (0, h.uJ)(e.country) ? "" : e.country),
    w = (e) => null != e && null != e && (!(0, h.uJ)(e.line1) || !(0, h.uJ)(e.city)),
    M = i.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: a,
                billingAddressInfo: o,
                internalKey: l,
                ...u
            } = e,
            c = (0, E.z)(),
            d = L(o, c),
            _ = i.useMemo(() => {
                let { name: e, address: t } = (0, m._Z)({ ...o, country: d });
                return null != t && w(t)
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
            ? (0, r.jsxs)(O, {
                  children: [
                      (0, r.jsx)("div", {
                          className: y.R,
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
                shouldShowPaymentElement: v.includes(t),
                shouldShowAddressElement: t === _.pn.ADDRESS,
                excludeBodySpacing: N.includes(t),
            }),
            [t],
        );
        return (0, r.jsxs)("div", {
            className: o()(y.kL, { [y.rf]: !A }),
            children: [
                (0, r.jsx)("div", {
                    className: o()(E ? y.RK : [y.R, y.$u], {
                        [y.df]: null == d,
                        [y._m]: d === S.he.CARD,
                        [y.JD]: d === S.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(R, {
                        ...l,
                        paymentMethodOrder: f,
                        customPaymentMethodIdsToSourceTypes: a,
                        step: t,
                        analyticsContext: h,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: o()(y.K_, g ? y.RK : [y.R, y.vg]),
                    children: (0, r.jsx)(M, {
                        ...u,
                        internalKey: p,
                        renderAsStandaloneElement: d === S.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    P = () =>
        (0, r.jsx)("div", {
            className: o()(y.kL, y.rf, y.g4),
            children: (0, r.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS }),
        }),
    k = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: i,
                isLoading: a,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
                paymentMethodOrder: u,
            } = (0, g.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return a || null != o || null == c
            ? (0, r.jsx)(P, {})
            : (0, r.jsx)(s.Elements, {
                  stripe: c,
                  options: { ...i },
                  children: (0, r.jsx)(x, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: u }),
              });
    },
    U = ["applePay", "googlePay", "link"],
    G = (e) => {
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
            E = r && C.has(t),
            [g, T] = i.useState(!1),
            [y, v] = i.useState(void 0),
            N = i.useCallback(() => {
                v(Date.now().toString());
            }, []);
        i.useEffect(() => {
            t === _.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let R = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != s && s.log("PaymentElements onChange event:", e), p(e.complete), m(t);
                    },
                    wallets: U,
                }),
                [s, o],
            ),
            O = i.useMemo(
                () => ({
                    addressElementOnChangeFired: g,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: r },
                            } = e,
                            i = w(n);
                        o &&
                            null != s &&
                            s.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: r,
                                addressElementOnChangeFired: g,
                                isAddressSubstantial: i,
                            }),
                            T(!0);
                        let l = {
                                name: r,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            u =
                                A.V.every((e) => {
                                    let t = l[e];
                                    return null != t && "" !== t;
                                }) && t;
                        a(l, u);
                    },
                }),
                [a, o, s, g, T],
            ),
            D = i.useCallback(() => {
                a({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    b(u.current);
            }, [u, a]),
            L = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && m(e), n(_.pn.PAYMENT_ELEMENT, t), T(!1), null != h && (0, I.R8)(h) && D();
                },
                [n, D, h],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                L(void 0);
            };
            return (
                c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [L, r]);
        let M = i.useCallback(() => {
            m(null);
        }, []);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: R,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: f,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            returnToPaymentElementStep: L,
            onBackFromPaymentElement: M,
            addressElementKey: y,
            remountAddressElement: N,
            clearAddressElement: D,
        };
    };
