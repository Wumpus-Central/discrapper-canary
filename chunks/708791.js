t.d(a, { E: () => H, Z: () => N });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    h = t(702841),
    c = t(858899),
    u = t(391048),
    o = t(913122),
    d = t(277984),
    m = t(942340),
    A = t(626584),
    p = t(97352),
    E = t(67480),
    P = t(158045),
    M = t(71532),
    C = t(120700),
    T = t(56763),
    y = t(123816),
    I = t(783327),
    _ = t(705822),
    g = t(202541),
    x = t(649975),
    v = t(105292),
    L = t(969933);
let R = new A.A("StripeExpressCheckout.tsx"),
    f = { [g.WT.DAY]: "day", [g.WT.MONTH]: "month", [g.WT.YEAR]: "year" };
function S(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: m, className: A } = e,
        g = (0, r.useElements)(),
        S = (0, I.S)(),
        [H, N] = n.useState(null),
        D = n.useRef(null),
        j = n.useRef(null),
        {
            checkoutInvoicePreview: Z,
            checkoutPaymentSources: O,
            expressCheckoutLoading: b,
            setExpressCheckoutStatus: w,
            markExpressCheckoutReady: k,
            shouldMountExpressCheckoutElement: U,
            setPurchaseError: Y,
        } = (0, y.t4)((e) => {
            let a = e.getExpressCheckoutVisibilityState();
            return {
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                expressCheckoutLoading: a.isLoading,
                setExpressCheckoutStatus: e.setExpressCheckoutStatus,
                markExpressCheckoutReady: e.markExpressCheckoutReady,
                shouldMountExpressCheckoutElement: a.shouldMountExpressCheckoutElement,
                setPurchaseError: e.setPurchaseError,
            };
        }),
        G = n.useCallback(
            (e) => {
                let { availablePaymentMethods: a } = e;
                k(null != a && Object.values(a).some(Boolean));
            },
            [k],
        ),
        B = null != S && null != g && null != Z && U;
    n.useEffect(() => {
        if (B) return () => w(_.i.INITIALIZING);
    }, [B, w]);
    let W = n.useCallback(
            (e) => {
                (m(e), w(e ? _.i.SUBMITTING : _.i.READY));
            },
            [m, w],
        ),
        K = n.useCallback(() => {
            (N(null), (D.current = null), W(!1));
        }, [W]),
        F = n.useCallback(
            async (e) => {
                try {
                    (null != t && (await t(e)), W(!1));
                } catch (e) {
                    W(!1);
                }
            },
            [t, W],
        ),
        V = n.useCallback(() => {
            if (null != H && null != O && null != Z && O.some((e) => e.id === H.id)) {
                if (D.current !== H.id)
                    ((D.current = H.id),
                        "vault_only" === a || j.current !== Z.total
                            ? ("purchase_if_possible" === a &&
                                  (0, c.P0)({ text: v.intl.string(x.default.N2e4Tl), variant: "success" }),
                              W(!1))
                            : F(H));
            }
        }, [H, O, Z, F, W, a]),
        z = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentInvoiceTotal: n } = a;
                function r(a) {
                    let t = (function (e) {
                        if (null == e) return v.intl.string(x.default["6zCzw1"]);
                        let a = e.message;
                        return null != a && "" !== a ? a : v.intl.string(x.default["6zCzw1"]);
                    })(a);
                    (K(),
                        Y(a instanceof o.Ey ? a : new o.Ey(t)),
                        e.paymentFailed({ reason: "invalid_payment_data", message: t }));
                }
                try {
                    (W(!0), Y(null), (0, u.ET)(), (j.current = n));
                    let { error: e } = await l.submit();
                    if (null != e) {
                        (R.error("elements.submit failed: ", e), r(e));
                        return;
                    }
                    let { paymentMethod: a, error: s } = await t.createPaymentMethod({ elements: l });
                    if (null == a) {
                        (R.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: a,
                            error: s,
                        }),
                            r(s));
                        return;
                    }
                    let { billingAddressInfo: i } = (0, M.uK)(a),
                        h = a.id,
                        c = await (0, d.IC)({ stripePaymentMethodId: h, billingAddress: i });
                    N(c);
                } catch (e) {
                    (R.error("handleExpressCheckoutConfirm failed: ", e), r(e instanceof o.Ey ? e : void 0));
                }
            },
            [W, N, K, Y],
        ),
        X = (function (e) {
            let {
                    checkoutInvoicePreview: a,
                    renewalInvoicePreview: t,
                    selectedSkuId: l,
                    unifiedCheckoutFlow: r,
                } = (0, y.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    selectedSkuId: e.selectedSkuId,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                s = (0, h.bG)(
                    [E.A],
                    () => {
                        let e = null != l ? E.A.get(l) : null;
                        return null != e ? e.name : null;
                    },
                    [l],
                );
            return n.useMemo(() => {
                if (null == a) return null;
                if ("vault_only" === e) return { lineItems: [], applePay: void 0 };
                let { subtotal: l, tax: n, total: i, taxInclusive: h } = a,
                    c = h ? i - n : l,
                    u = n > 0 ? [{ name: v.intl.string(v.t.jiRvC7), amount: n }] : [];
                function o(e) {
                    return i > 0 ? [{ name: e, amount: c }, ...u] : [];
                }
                if (r === C.C.PREMIUM_CHECKOUT || r === C.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = p.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = f[t.interval],
                            n = t.intervalCount;
                        return {
                            planDisplayName: (0, P.Mn)(t.id),
                            recurringPaymentIntervalUnit: l,
                            recurringPaymentIntervalCount: n,
                        };
                    })(a);
                    if (null == e) return null;
                    let { planDisplayName: n, recurringPaymentIntervalUnit: r, recurringPaymentIntervalCount: s } = e,
                        i = null != t ? t.subtotal : l;
                    return {
                        lineItems: o(n),
                        applePay: {
                            recurringPaymentRequest: {
                                paymentDescription: n,
                                managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                                regularBilling: {
                                    amount: i,
                                    label: n,
                                    recurringPaymentIntervalUnit: r,
                                    recurringPaymentIntervalCount: s,
                                },
                            },
                        },
                    };
                }
                return { lineItems: null != s ? o(s) : [] };
            }, [a, t, s, e, r]);
        })(a);
    n.useEffect(() => {
        null != H && V();
    }, [H, V]);
    let $ = n.useMemo(() => {
        if (null == Z || null == X) return {};
        let { lineItems: e, applePay: a } = X;
        return { billingAddressRequired: !0, lineItems: e, applePay: a };
    }, [Z, X]);
    if (null == S || null == g || null == Z || !B) return null;
    let q = s || b;
    return (0, l.jsxs)("div", {
        className: i()(L.Pr, A),
        children: [
            q && (0, l.jsx)(T.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [L.lX]: q }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onReady: G,
                    onConfirm: (e) => z(e, { stripe: S, elements: g, currentInvoiceTotal: Z.total }),
                    onCancel: K,
                    options: $,
                }),
            }),
        ],
    });
}
function H(e) {
    let a = (0, I.S)(),
        { elementsAppearance: t } = (0, m.E)(),
        s = (0, y.t4)((e) => e.checkoutInvoicePreview),
        i = n.useMemo(
            () =>
                null == s
                    ? null
                    : {
                          paymentMethodCreation: "manual",
                          ...("vault_only" === e.type || s.total <= 0
                              ? { mode: "setup" }
                              : { mode: "payment", amount: s.total }),
                          currency: String(s.currency).toLowerCase(),
                          appearance: t,
                      },
            [s, t, e.type],
        );
    return null == a || null == i
        ? null
        : (0, l.jsx)(r.Elements, { stripe: a, options: i, children: (0, l.jsx)(S, { ...e }) });
}
function N(e) {
    let { stripeExpressCheckoutComponent: a, fallbackComponent: t } = e,
        { shouldExpressCheckoutBeVisible: n } = (0, y.t4)((e) => ({
            shouldExpressCheckoutBeVisible: e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
        }));
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: i()(L.n2, { [L.lX]: !n }), children: a }), !n && t],
    });
}
