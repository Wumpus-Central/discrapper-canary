n.d(t, {
    MM: () => x,
    hn: () => D,
}),
    n(467055),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(563132),
    f = n(409813),
    _ = n(594174),
    p = n(626135),
    h = n(622999),
    m = n(878836),
    g = n(720452),
    E = n(561448),
    b = n(981631),
    y = n(231338),
    O = n(26973);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = [f.h8.PAYMENT_ELEMENT],
    R = i.memo(function (e) {
        var { wallets: t = [], analyticsContext: n, options: o, onChange: s, step: c } = e,
            u = A(e, ["wallets", "analyticsContext", "options", "onChange", "step"]);
        let d = (0, l.e7)([_.default], () => {
                let e = _.default.getCurrentUser();
                return null != e ? e.email : null;
            }),
            h = i.useCallback(
                (e) => {
                    if (c === f.h8.PAYMENT_ELEMENT && (null != s && s(e), null != n)) {
                        let { contextMetadata: t, activitySessionId: r, analyticsData: i } = n,
                            a = (0, E.hR)(e.value.type),
                            o = null != a ? E.Ho[a] : e.value.type;
                        p.default.track(b.rMx.PAYMENT_ELEMENT_CHANGED, {
                            load_id: t.loadId,
                            activity_session_id: r,
                            location: i.location,
                            payment_element_selected_method: o,
                            payment_source_type: a,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [s, n, c],
            ),
            m = i.useMemo(
                () => ({
                    applePay: t.includes("applePay") ? "auto" : "never",
                    googlePay: t.includes("googlePay") ? "auto" : "never",
                    link: t.includes("link") ? "auto" : "never",
                }),
                [t],
            );
        return (0, r.jsx)(
            a.PaymentElement,
            I(
                {
                    id: "stripe-payment-element",
                    options: I(
                        {
                            layout: { type: "tabs" },
                            wallets: m,
                            defaultValues: { billingDetails: I({}, null != d && { email: d }) },
                        },
                        o,
                    ),
                    onChange: h,
                },
                u,
            ),
        );
    }),
    P = i.memo(function (e) {
        var { options: t, renderWithoutElement: n, billingAddressInfo: o } = e,
            s = A(e, ["options", "renderWithoutElement", "billingAddressInfo"]);
        let l = i.useMemo(() => {
                let { name: e, address: t } = (0, h.XZ)(o);
                return I(
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
            }, [o]),
            { stripe: c } = (0, d.JL)(),
            u = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        I(
                            {
                                options: I(
                                    {
                                        mode: "billing",
                                        defaultValues: l,
                                    },
                                    t,
                                ),
                            },
                            s,
                        ),
                    ),
                [l, t, s],
            );
        return n
            ? u
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  children: u,
              });
    }),
    w = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                stripePaymentElementProps: o,
                stripeAddressElementProps: l,
                elementsRef: c,
                paymentElementSelectedType: u,
                analyticsContext: d,
            } = e,
            _ = (0, a.useElements)();
        i.useEffect(() => {
            c.current = _;
        }, [_, c]);
        let p = N.includes(t),
            h = t === f.h8.ADDRESS;
        return (0, r.jsxs)("div", {
            className: O.body,
            children: [
                (0, r.jsx)("div", {
                    className: s()(p ? O.visible : [O.hidden, O.leftToRightEntry], {
                        [O.defaultPaymentElementContainer]: null == u,
                        [O.cardElementContainer]: u === y.He.CARD,
                        [O.customPaymentElementContainer]: u === y.He.PAYPAL,
                    }),
                    children: (0, r.jsx)(
                        R,
                        S(I({}, o), {
                            step: t,
                            analyticsContext: d,
                        }),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: s()(O.addressElementContainer, h ? O.visible : [O.hidden, O.rightToLeftEntry]),
                    children: (0, r.jsx)(
                        P,
                        S(I({}, l), {
                            renderWithoutElement: !0,
                            billingAddressInfo: n,
                        }),
                    ),
                }),
            ],
        });
    },
    D = (e) => {
        var { onSetupError: t } = e,
            n = A(e, ["onSetupError"]);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, m.S)({ onSetupError: t }),
            { stripe: l } = (0, d.JL)();
        return o || null != s || null == l
            ? (0, r.jsx)("div", {
                  className: O.loadingContainer,
                  children: (0, r.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS }),
              })
            : (0, r.jsx)(a.Elements, {
                  stripe: l,
                  options: I({}, i),
                  children: (0, r.jsx)(w, I({}, n)),
              });
    },
    L = ["link"],
    x = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: o,
                shouldLogOnChangeEvents: s,
                continueSessionToInitialStep: l,
            } = e,
            c = i.useRef(null),
            [d, _] = i.useState(!1),
            [p, h] = i.useState(l === f.h8.CREDIT_CARD_INFORMATION ? y.He.CARD : null),
            m = r && (t === f.h8.PAYMENT_ELEMENT || (t === f.h8.ADDRESS && null != p)),
            b = i.useMemo(
                () => ({
                    onChange: (e) => {
                        s && null != a && a.log("PaymentElements onChange event:", e),
                            _(e.complete),
                            h((0, E.hR)(e.value.type));
                    },
                    wallets: L,
                }),
                [a, s],
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
                            s =
                                g._.every((e) => {
                                    let t = a[e];
                                    return null != t && "" !== t;
                                }) && n;
                        o(a, s);
                    },
                }),
                [o],
            ),
            v = i.useCallback(
                function (e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    void 0 !== e && h(e), n(f.h8.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                v(void 0);
            };
            return (
                u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [v, r]);
        let I = i.useCallback(() => {
            h(null);
        }, []);
        return {
            shouldRenderPaymentElement: m,
            stripePaymentElementProps: b,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: c,
            paymentElementReady: d,
            paymentElementSelectedType: p,
            setPaymentElementSelectedType: h,
            handlePaymentElementStep: v,
            onBackFromPaymentElement: I,
        };
    };
