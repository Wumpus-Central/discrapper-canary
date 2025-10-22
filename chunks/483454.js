n.d(t, {
    M: () => D,
    h: () => P,
}),
    n(467055),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(289008),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(570140),
    u = n(563132),
    d = n(409813),
    f = n(626135),
    _ = n(622999),
    p = n(878836),
    h = n(720452),
    m = n(561448),
    g = n(981631),
    E = n(231338),
    b = n(599695);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let A = [d.h8.PAYMENT_ELEMENT],
    C = i.memo(function (e) {
        var { originalPaymentType: t, wallets: n = [], analyticsContext: o, options: s, onChange: l, step: c } = e,
            u = T(e, ["originalPaymentType", "wallets", "analyticsContext", "options", "onChange", "step"]);
        let p = i.useMemo(() => {
                if (null == t || !(0, m.qH)(t)) return;
                let e = (0, _.rI)();
                if ((0, m.Ko)(t)) {
                    let n = (0, m.ZK)(t, e);
                    return null != n ? [n] : [];
                }
                return [m.zK[t]];
            }, [t]),
            h = i.useCallback(
                (e) => {
                    if (c === d.h8.PAYMENT_ELEMENT && (null != l && l(e), null != o)) {
                        let { contextMetadata: t, activitySessionId: n, analyticsData: r } = o,
                            i = (0, m.hR)(e.value.type),
                            a = null != i ? m.Ho[i] : e.value.type;
                        f.default.track(g.rMx.PAYMENT_ELEMENT_CHANGED, {
                            load_id: t.loadId,
                            activity_session_id: n,
                            location: r.location,
                            payment_element_selected_method: a,
                            payment_source_type: i,
                            complete: e.complete,
                            empty: e.empty,
                        });
                    }
                },
                [l, o, c],
            ),
            E = i.useMemo(
                () => ({
                    applePay: n.includes("applePay") ? "auto" : "never",
                    googlePay: n.includes("googlePay") ? "auto" : "never",
                    link: n.includes("link") ? "auto" : "never",
                }),
                [n],
            );
        return (0, r.jsx)(
            a.PaymentElement,
            O(
                {
                    id: "stripe-payment-element",
                    options: O(
                        I(O({}, null != p && { paymentMethodOrder: p }), {
                            layout: { type: "tabs" },
                            wallets: E,
                        }),
                        s,
                    ),
                    onChange: h,
                },
                u,
            ),
        );
    }),
    N = i.memo(function (e) {
        var { options: t, renderWithoutElement: n, billingAddressInfo: o } = e,
            s = T(e, ["options", "renderWithoutElement", "billingAddressInfo"]);
        let l = i.useMemo(() => {
                let { name: e, address: t } = (0, _.XZ)(o);
                return O(
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
            { stripe: c } = (0, u.JL)(),
            d = i.useMemo(
                () =>
                    (0, r.jsx)(
                        a.AddressElement,
                        O(
                            {
                                options: O(
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
            ? d
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  children: d,
              });
    }),
    R = (e) => {
        let {
                step: t,
                billingAddressInfo: n,
                stripePaymentElementProps: o,
                stripeAddressElementProps: l,
                elementsRef: c,
                originalPaymentType: u,
                paymentElementSelectedType: f,
                analyticsContext: _,
            } = e,
            p = (0, a.useElements)();
        i.useEffect(() => {
            c.current = p;
        }, [p, c]);
        let h = A.includes(t) && null != f,
            m = t === d.h8.ADDRESS;
        return (0, r.jsxs)("div", {
            className: b.body,
            children: [
                (0, r.jsx)("div", {
                    className: s()(h ? b.visible : b.hidden, {
                        [b.cardElementContainer]: f === E.He.CARD,
                        [b.customPaymentElementContainer]: f === E.He.PAYPAL,
                    }),
                    children: (0, r.jsx)(
                        C,
                        I(O({}, o), {
                            step: t,
                            originalPaymentType: u,
                            analyticsContext: _,
                        }),
                    ),
                }),
                (0, r.jsx)("div", {
                    className: s()(b.addressElementContainer, m ? b.visible : b.hidden),
                    children: (0, r.jsx)(
                        N,
                        I(O({}, l), {
                            renderWithoutElement: !0,
                            billingAddressInfo: n,
                        }),
                    ),
                }),
            ],
        });
    },
    P = (e) => {
        var { onSetupError: t } = e,
            n = T(e, ["onSetupError"]);
        let { elementsOptions: i, isLoading: o, setupError: s } = (0, p.S)({ onSetupError: t }),
            { stripe: c } = (0, u.JL)();
        return o || null != s || null == c
            ? (0, r.jsx)("div", {
                  className: b.loadingContainer,
                  children: (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE_SIMPLE }),
              })
            : (0, r.jsx)(a.Elements, {
                  stripe: c,
                  options: O({}, i),
                  children: (0, r.jsx)(R, O({}, n)),
              });
    },
    w = ["link"],
    D = (e) => {
        let {
                step: t,
                handleStepChange: n,
                paymentElementsEnabled: r,
                logger: a,
                onBillingAddressChange: o,
                shouldLogOnChangeEvents: s,
                continueSessionToInitialStep: l,
            } = e,
            u = i.useRef(null),
            [f, _] = i.useState(!1),
            [p, g] = i.useState(l === d.h8.CREDIT_CARD_INFORMATION ? E.He.CARD : null),
            b = r && (t === d.h8.PAYMENT_ELEMENT || t === d.h8.ADDRESS),
            y = i.useMemo(
                () => ({
                    onChange: (e) => {
                        s && null != a && a.log("PaymentElements onChange event:", e),
                            _(e.complete),
                            g((0, m.hR)(e.value.type));
                    },
                    wallets: w,
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
                                h._.every((e) => {
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
                    void 0 !== e && g(e), n(d.h8.PAYMENT_ELEMENT, t);
                },
                [n],
            );
        i.useEffect(() => {
            if (!r) return;
            let e = () => {
                v(void 0);
            };
            return (
                c.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e),
                () => {
                    c.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED", e);
                }
            );
        }, [v, r]);
        let I = i.useCallback(() => {
            g(null), n(d.h8.PAYMENT_TYPE);
        }, [n]);
        return {
            shouldRenderPaymentElement: b,
            stripePaymentElementProps: y,
            stripeAddressElementProps: O,
            combinedStripeElementsRef: u,
            paymentElementReady: f,
            paymentElementSelectedType: p,
            setPaymentElementSelectedType: g,
            handlePaymentElementStep: v,
            onBackPaymentElement: I,
        };
    };
