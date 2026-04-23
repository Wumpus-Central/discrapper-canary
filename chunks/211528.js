"use strict";
n.d(t, { KS: () => b, Ky: () => O, Wf: () => v, e4: () => k, eR: () => P, wD: () => U });
var i = n(627968),
    r = n(64700),
    s = n(342393),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    d = n(289873),
    _ = n(228366),
    u = n(156312),
    c = n(166532),
    E = n(287809),
    h = n(954571),
    m = n(38405),
    f = n(240248),
    g = n(71532),
    p = n(116673),
    A = n(942340),
    I = n(550238),
    T = n(648335),
    S = n(652215),
    N = n(818348),
    C = n(235301);
let R = [c.pn.PAYMENT_ELEMENT],
    O = [
        c.pn.PAYPAL_INFORMATION,
        c.pn.VENMO_INFORMATION,
        c.pn.CASH_APP_INFORMATION,
        c.pn.EPS_INFORMATION,
        c.pn.PRZELEWY24_INFORMATION,
        c.pn.IDEAL_INFORMATION,
    ],
    y = new Set([c.pn.PAYMENT_ELEMENT, ...O, c.pn.ADDRESS]),
    v = r.memo(function (e) {
        let {
                paymentMethodOrder: t,
                wallets: n = [],
                customPaymentMethodIdsToSourceTypes: a,
                analyticsContext: o,
                options: d,
                onChange: _,
                step: u,
                ...m
            } = e,
            f = (0, l.bG)([E.default], () => {
                let e = E.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            g = (0, l.bG)([E.default], () => {
                let e = E.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            p = r.useCallback(
                (e) => {
                    if (u !== c.pn.PAYMENT_ELEMENT) return;
                    let t = (0, T.Wn)(e.value.type, a);
                    if ((null != _ && _(e, t), null != o)) {
                        let { contextMetadata: n, activitySessionId: i, analyticsData: r } = o,
                            s = null != t && t !== N.he.PAYMENT_REQUEST ? T.mr[t] : e.value.type;
                        h.default.track(S.HAw.PAYMENT_ELEMENT_CHANGED, {
                            load_id: n.loadId,
                            activity_session_id: i,
                            location: r.location,
                            payment_element_selected_method: s,
                            payment_source_type: t,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [_, o, u, a],
            ),
            A = r.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            ),
            I = r.useMemo(
                () => ({ billingDetails: { ...(null != f && { email: f }), ...(null != g && { name: g }) } }),
                [f, g],
            ),
            C = r.useMemo(
                () => ({
                    id: "stripe-payment-element",
                    options: { layout: { type: "tabs" }, wallets: A, defaultValues: I, paymentMethodOrder: t, ...d },
                    onChange: p,
                    ...m,
                }),
                [A, I, d, m, p, t],
            );
        return (0, i.jsx)(s.PaymentElement, { ...C });
    }),
    D = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, u.P5)(),
            { elementsAppearance: r } = (0, A.E)(),
            a = (0, g.PU)();
        return (0, i.jsx)(s.Elements, {
            stripe: n,
            options: { appearance: r, locale: a, mode: "setup", currency: "usd" },
            children: t,
        });
    },
    L = (e) => null != e && null != e && (!(0, f.uJ)(e.line1) || !(0, f.uJ)(e.city)),
    b = r.memo(function (e) {
        let {
                options: t,
                renderAsStandaloneElement: n,
                addressElementOnChangeFired: a,
                billingAddressInfo: o,
                internalKey: l,
                ...d
            } = e,
            _ = (0, p.z)(),
            u = null != _ && _.length > 0 ? _[0] : (0, f.uJ)(o.country) ? "" : o.country,
            c = r.useMemo(() => {
                let { name: e, address: t } = (0, g._Z)({ ...o, country: u });
                return null != t && L(t)
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
                        ? { address: { country: u } }
                        : void 0;
            }, [o, a, u]),
            E = r.useMemo(() => (null != _ && _.length > 0 ? _ : void 0), [_]),
            h = r.useMemo(
                () =>
                    (0, i.jsx)(
                        s.AddressElement,
                        { options: { mode: "billing", defaultValues: c, allowedCountries: E, ...t }, ...d },
                        l,
                    ),
                [c, E, t, d, l],
            );
        return n
            ? (0, i.jsxs)(D, {
                  children: [
                      (0, i.jsx)("div", {
                          className: C.R,
                          children: (0, i.jsx)(s.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      h,
                  ],
              })
            : h;
    }),
    w = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: a,
                stripePaymentElementProps: l,
                stripeAddressElementProps: d,
                elementsRef: _,
                paymentElementSelectedType: u,
                paymentMethodOrder: E,
                addressElementKey: h,
                analyticsContext: m,
                paymentElementFooter: f,
            } = e,
            g = (0, s.useElements)();
        r.useEffect(() => {
            _.current = g;
        }, [g, _]);
        let {
            shouldShowPaymentElement: p,
            shouldShowAddressElement: A,
            excludeBodySpacing: I,
        } = r.useMemo(
            () => ({
                shouldShowPaymentElement: R.includes(t),
                shouldShowAddressElement: t === c.pn.ADDRESS,
                excludeBodySpacing: O.includes(t),
            }),
            [t],
        );
        return (0, i.jsxs)("div", {
            className: o()(C.kL, { [C.rf]: !I }),
            children: [
                (0, i.jsxs)("div", {
                    className: o()(p ? C.RK : [C.R, C.$u], {
                        [C.df]: null == u,
                        [C._m]: u === N.he.CARD,
                        [C.JD]: u === N.he.PAYPAL,
                    }),
                    children: [
                        (0, i.jsx)(v, {
                            ...l,
                            paymentMethodOrder: E,
                            customPaymentMethodIdsToSourceTypes: a,
                            step: t,
                            analyticsContext: m,
                        }),
                        p && f,
                    ],
                }),
                (0, i.jsx)("div", {
                    className: o()(C.K_, A ? C.RK : [C.R, C.vg]),
                    children: (0, i.jsx)(b, {
                        ...d,
                        internalKey: h,
                        renderAsStandaloneElement: u === N.he.PAYMENT_REQUEST,
                        billingAddressInfo: n,
                    }),
                }),
            ],
        });
    },
    P = () =>
        (0, i.jsx)("div", {
            className: o()(C.kL, C.rf, C.g4),
            children: (0, i.jsx)(d.y, { type: d.y.Type.PULSING_ELLIPSIS }),
        }),
    k = (e) => {
        let { onSetupError: t, ...n } = e,
            {
                elementsOptions: r,
                isLoading: a,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
                paymentMethodOrder: d,
            } = (0, A.p)({ onSetupError: t }),
            { stripe: _ } = (0, u.P5)();
        return a || null != o || null == _
            ? (0, i.jsx)(P, {})
            : (0, i.jsx)(s.Elements, {
                  stripe: _,
                  options: { ...r },
                  children: (0, i.jsx)(w, { ...n, customPaymentMethodIdsToSourceTypes: l, paymentMethodOrder: d }),
              });
    },
    M = ["applePay", "googlePay", "link"],
    U = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: i,
                logger: a,
                onBillingAddressChange: o,
                shouldLogOnChangeEvents: l,
                continueSessionToInitialStep: d,
            } = e,
            u = r.useRef(null),
            E = r.useRef(null),
            [h, g] = r.useState(!1),
            [p, A] = r.useState(d === c.pn.CREDIT_CARD_INFORMATION ? N.he.CARD : null),
            S = i && y.has(t),
            [C, R] = r.useState(!1),
            [O, v] = r.useState(void 0),
            D = r.useCallback(() => {
                v(Date.now().toString());
            }, []);
        r.useEffect(() => {
            t === c.pn.PAYMENT_ELEMENT && (E.current = null);
        }, [t]);
        let b = r.useMemo(
                () => ({
                    onChange: (e, t) => {
                        l && null != a && a.log("PaymentElements onChange event:", e), g(e.complete), A(t);
                    },
                    wallets: M,
                }),
                [a, l],
            ),
            w = r.useMemo(
                () => ({
                    addressElementOnChangeFired: C,
                    onChange: (e) => {
                        let {
                                complete: t,
                                value: { address: n, name: i },
                            } = e,
                            r = L(n);
                        l &&
                            null != a &&
                            a.log("AddressElement onChange event:", {
                                complete: t,
                                address: n,
                                name: i,
                                addressElementOnChangeFired: C,
                                isAddressSubstantial: r,
                            }),
                            R(!0);
                        let s = {
                                name: i,
                                country: n.country,
                                city: n.city,
                                line1: n.line1,
                                line2: n.line2 ?? "",
                                state: n.state,
                                postalCode: n.postal_code,
                            },
                            d = (0, I.Q)(s);
                        t &&
                            !d &&
                            m.A.captureMessage(
                                "AddressElement validity mismatch: Stripe complete but computed invalid",
                                {
                                    tags: { app_context: "billing", billing_context: "payment_element" },
                                    extra: {
                                        isValidComputed: d,
                                        stripeComplete: t,
                                        country: n.country,
                                        emptyFields: Object.entries(s)
                                            .filter((e) => {
                                                let [, t] = e;
                                                return (0, f.uJ)(t);
                                            })
                                            .map((e) => {
                                                let [t] = e;
                                                return t;
                                            }),
                                    },
                                },
                            ),
                            o(s, d && t);
                    },
                }),
                [o, l, a, C, R],
            ),
            P = r.useCallback(() => {
                let e;
                o({ name: "", country: "", city: "", line1: "", line2: "", state: "", postalCode: "" }, !1),
                    null !=
                        (e = ((e) => {
                            if (null == e) return;
                            let t = e.getElement(s.AddressElement);
                            if (null != t) return t;
                        })(u.current)) && e.clear();
            }, [u, o]),
            k = r.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && A(e), n(c.pn.PAYMENT_ELEMENT, t), R(!1), null != p && (0, T.R8)(p) && P();
                },
                [n, P, p],
            );
        r.useEffect(() => {
            if (!i) return;
            let e = () => {
                k(void 0);
            };
            return (
                _.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    _.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [k, i]);
        let U = r.useCallback(() => {
            A(null);
        }, []);
        return {
            shouldRenderPaymentElement: S,
            stripePaymentElementProps: b,
            stripeAddressElementProps: w,
            combinedStripeElementsRef: u,
            lastConfirmedSetupIntentRef: E,
            paymentElementReady: h,
            paymentElementSelectedType: p,
            setPaymentElementSelectedType: A,
            returnToPaymentElementStep: k,
            onBackFromPaymentElement: U,
            addressElementKey: O,
            remountAddressElement: D,
            clearAddressElement: P,
        };
    };
