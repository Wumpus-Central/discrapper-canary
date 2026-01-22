n.d(t, {
    KS: () => P,
    Lw: () => M,
    Wf: () => R,
    e4: () => L,
    eR: () => x,
}),
    n(446912),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(342393),
    s = n(503698),
    o = n.n(s),
    l = n(311907),
    c = n(397927),
    u = n(73153),
    d = n(156312),
    f = n(166532),
    p = n(287809),
    _ = n(954571),
    h = n(71532),
    m = n(942340),
    g = n(550238),
    E = n(648335),
    b = n(652215),
    y = n(818348),
    O = n(571882);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = C(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let N = [f.pn.PAYMENT_ELEMENT],
    R = i.memo(function (e) {
        let {
                wallets: t = [],
                customPaymentMethodIdsToSourceTypes: n,
                analyticsContext: s,
                options: o,
                onChange: c,
                step: u,
            } = e,
            d = T(e, [
                "wallets",
                "customPaymentMethodIdsToSourceTypes",
                "analyticsContext",
                "options",
                "onChange",
                "step",
            ]),
            h = (0, l.bG)([p.default], () => {
                let e = p.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            m = (0, l.bG)([p.default], () => {
                let e = p.default.getCurrentUser();
                return null != e ? e.globalName : null;
            }),
            g = i.useCallback(
                (e) => {
                    if (u !== f.pn.PAYMENT_ELEMENT) return;
                    let t = (0, E.Wn)(e.value.type, n);
                    if ((null != c && c(e, t), null != s)) {
                        let { contextMetadata: n, activitySessionId: r, analyticsData: i } = s,
                            a = null != t && t !== y.he.PAYMENT_REQUEST ? E.mr[t] : e.value.type;
                        _.default.track(b.HAw.PAYMENT_ELEMENT_CHANGED, {
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
                [c, s, u, n],
            ),
            O = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            ),
            A = { billingDetails: v({}, null != h && { email: h }, null != m && { name: m }) };
        return (0, r.jsx)(
            a.PaymentElement,
            v(
                {
                    id: "stripe-payment-element",
                    options: v(
                        {
                            layout: { type: "tabs" },
                            wallets: O,
                            defaultValues: A,
                        },
                        o,
                    ),
                    onChange: g,
                },
                d,
            ),
        );
    }),
    w = (e) => {
        let { children: t } = e,
            { stripe: n } = (0, d.P5)(),
            { elementsAppearance: i } = (0, m.E)();
        return (0, r.jsx)(a.Elements, {
            stripe: n,
            options: {
                appearance: i,
                mode: "setup",
                currency: "usd",
            },
            children: t,
        });
    },
    P = i.memo(function (e) {
        let { options: t, renderAsStandaloneElement: n, billingAddressInfo: s, internalKey: o } = e,
            l = T(e, ["options", "renderAsStandaloneElement", "billingAddressInfo", "internalKey"]),
            c = i.useMemo(() => {
                let { name: e, address: t } = (0, h._Z)(s);
                return v(
                    { name: null != e ? e : null },
                    null != t && {
                        address: Object.fromEntries(
                            Object.entries(t).filter((e) => {
                                let [t, n] = e;
                                return void 0 !== n;
                            }),
                        ),
                    },
                );
            }, [s]),
            u = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        v(
                            {
                                options: v(
                                    {
                                        mode: "billing",
                                        defaultValues: c,
                                    },
                                    t,
                                ),
                            },
                            l,
                        ),
                        o,
                    ),
                [c, t, l, o],
            );
        return n
            ? (0, r.jsxs)(w, {
                  children: [
                      (0, r.jsx)("div", {
                          className: O.R,
                          children: (0, r.jsx)(a.PaymentElement, { id: "stripe-payment-element" }),
                      }),
                      u,
                  ],
              })
            : u;
    }),
    D = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                customPaymentMethodIdsToSourceTypes: s,
                stripePaymentElementProps: l,
                stripeAddressElementProps: c,
                elementsRef: u,
                paymentElementSelectedType: d,
                addressElementKey: p,
                analyticsContext: _,
            } = e,
            h = (0, a.useElements)();
        i.useEffect(() => {
            u.current = h;
        }, [h, u]);
        let m = N.includes(t),
            g = t === f.pn.ADDRESS;
        return (0, r.jsxs)("div", {
            className: O.rf,
            children: [
                (0, r.jsx)("div", {
                    className: o()(m ? O.RK : [O.R, O.$u], {
                        [O.df]: null == d,
                        [O._m]: d === y.he.CARD,
                        [O.JD]: d === y.he.PAYPAL,
                    }),
                    children: (0, r.jsx)(
                        R,
                        I(v({}, l), {
                            customPaymentMethodIdsToSourceTypes: s,
                            step: t,
                            analyticsContext: _,
                        }),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: o()(O.K_, g ? O.RK : [O.R, O.vg]),
                    children: (0, r.jsx)(
                        P,
                        I(v({}, c), {
                            internalKey: p,
                            renderAsStandaloneElement: d === y.he.PAYMENT_REQUEST,
                            billingAddressInfo: n,
                        }),
                    ),
                }),
            ],
        });
    },
    x = () =>
        (0, r.jsx)("div", {
            className: O.g4,
            children: (0, r.jsx)(c.y$y, { type: c.y$y.Type.PULSING_ELLIPSIS }),
        }),
    L = (e) => {
        let { onSetupError: t } = e,
            n = T(e, ["onSetupError"]),
            {
                elementsOptions: i,
                isLoading: s,
                setupError: o,
                customPaymentMethodIdsToSourceTypes: l,
            } = (0, m.p)({ onSetupError: t }),
            { stripe: c } = (0, d.P5)();
        return s || null != o || null == c
            ? (0, r.jsx)(x, {})
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  options: v({}, i),
                  children: (0, r.jsx)(D, I(v({}, n), { customPaymentMethodIdsToSourceTypes: l })),
              });
    },
    j = ["applePay", "googlePay", "link"],
    M = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: s,
                shouldLogOnChangeEvents: o,
                continueSessionToInitialStep: l,
            } = e,
            c = i.useRef(null),
            d = i.useRef(null),
            [p, _] = i.useState(!1),
            [h, m] = i.useState(l === f.pn.CREDIT_CARD_INFORMATION ? y.he.CARD : null),
            E = r && (t === f.pn.PAYMENT_ELEMENT || (t === f.pn.ADDRESS && null != h));
        i.useEffect(() => {
            t === f.pn.PAYMENT_ELEMENT && (d.current = null);
        }, [t]);
        let b = i.useMemo(
                () => ({
                    onChange: (e, t) => {
                        o && null != a && a.log("PaymentElements onChange event:", e), _(e.complete), m(t);
                    },
                    wallets: j,
                }),
                [a, o],
            ),
            O = i.useMemo(
                () => ({
                    onChange: (e) => {
                        var t;
                        let {
                                complete: n,
                                value: { address: r, name: i },
                            } = e,
                            a = {
                                name: i,
                                country: r.country,
                                city: r.city,
                                line1: r.line1,
                                line2: null != (t = r.line2) ? t : "",
                                state: r.state,
                                postalCode: r.postal_code,
                            },
                            o =
                                g.V.every((e) => {
                                    let t = a[e];
                                    return null != t && "" !== t;
                                }) && n;
                        s(a, o);
                    },
                }),
                [s],
            ),
            A = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && m(e), n(f.pn.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                A(void 0);
            };
            return (
                u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [A, r]);
        let v = i.useCallback(() => {
                m(null);
            }, []),
            [S, I] = i.useState(void 0);
        return {
            shouldRenderPaymentElement: E,
            stripePaymentElementProps: b,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: c,
            lastConfirmedSetupIntentRef: d,
            paymentElementReady: p,
            paymentElementSelectedType: h,
            setPaymentElementSelectedType: m,
            handlePaymentElementStep: A,
            onBackFromPaymentElement: v,
            addressElementKey: S,
            remountAddressElement: i.useCallback(() => {
                I(Date.now().toString());
            }, []),
        };
    };
