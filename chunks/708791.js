var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    h = t(164636),
    u = t(858899),
    o = t(834730),
    c = t(391048),
    d = t(627784),
    m = t(793574),
    A = t(781300),
    p = t(942340),
    E = t(626584),
    P = t(97352),
    C = t(67480),
    M = t(739508),
    y = t(722178),
    g = t(580630),
    T = t(558740),
    x = t(120700),
    I = t(822764),
    _ = t(56763),
    v = t(516106),
    f = t(783327),
    R = t(705822),
    L = t(652215),
    S = t(682901),
    H = t(818348),
    k = t(379912),
    D = t(792996),
    N = t(969933);
let b = new E.A("StripeExpressCheckout.tsx"),
    j = { [S.WT.DAY]: "day", [S.WT.MONTH]: "month", [S.WT.YEAR]: "year" };
function O(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: o, className: p } = e,
        E = (0, r.useElements)(),
        g = (0, f.S)(),
        L = n.useRef(a),
        [S, O] = n.useState(null),
        w = n.useRef(null),
        Z = n.useRef(null),
        {
            checkoutInvoicePreview: U,
            checkoutPaymentSources: Y,
            expressCheckoutLoading: B,
            setExpressCheckoutStatus: G,
            markExpressCheckoutReady: K,
            shouldMountExpressCheckoutElement: F,
            setPurchaseError: W,
            contextMetadata: V,
            unifiedCheckoutFlow: X,
        } = (0, v.t4)((e) => {
            let a = e.getExpressCheckoutVisibilityState();
            return {
                checkoutInvoicePreview: e.checkoutInvoicePreview,
                checkoutPaymentSources: e.get("checkoutPaymentSources"),
                expressCheckoutLoading: a.isLoading,
                setExpressCheckoutStatus: e.setExpressCheckoutStatus,
                markExpressCheckoutReady: e.markExpressCheckoutReady,
                shouldMountExpressCheckoutElement: a.shouldMountExpressCheckoutElement,
                setPurchaseError: e.setPurchaseError,
                contextMetadata: e.contextMetadata,
                unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            };
        }),
        z = V.loadId,
        $ = n.useCallback(
            (e) => {
                let { availablePaymentMethods: t } = e,
                    l = null != t && Object.values(t).some(Boolean);
                ((0, I.FY)(
                    { loadId: z, checkoutFlow: X, expressCheckoutType: a, availablePaymentMethods: t },
                    m.A.EXPRESS_CHECKOUT,
                ),
                    K(l));
            },
            [K, z, X, a],
        ),
        J = n.useCallback(
            (e) => {
                let { error: a } = e;
                b.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, I.PD)(
                        {
                            loadId: z,
                            checkoutFlow: X,
                            error: a,
                            errorMessage: a.message ?? "Express Checkout Element failed to load",
                        },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    l = Error(t.error_message);
                ((l.name = "ExpressCheckoutLoadError"),
                    (0, M.pM)(l, { tags: { source: "express_checkout" }, extra: t }));
            },
            [z, X],
        ),
        q = null != g && null != E && null != U && F;
    n.useEffect(() => {
        if (q) return () => G(R.i.INITIALIZING);
    }, [q, G]);
    let Q = n.useCallback(
            (e) => {
                (o(e), G(e ? R.i.SUBMITTING : R.i.READY));
            },
            [o, G],
        ),
        ee = n.useCallback(() => {
            (O(null), (w.current = null), Q(!1));
        }, [Q]),
        ea = n.useCallback(
            async (e) => {
                try {
                    (null != t && (await t(e)), Q(!1));
                } catch (e) {
                    Q(!1);
                }
            },
            [t, Q],
        ),
        et = n.useCallback(() => {
            let e = L.current;
            if (null == S || null == Y || null == U) return;
            let a = Y.find((e) => e.id === S.id);
            if (null != a) {
                if (w.current === S.id) return;
                w.current = S.id;
                let t = null != a.relocationCountry,
                    l = U.getAmountDue(),
                    n = Z.current !== l,
                    r = "vault_only" === e || t || n;
                (n &&
                    (0, I.ik)(
                        {
                            loadId: z,
                            checkoutFlow: X,
                            expressCheckoutType: e,
                            displayedAmount: Z.current,
                            updatedAmount: l,
                            currency: U.currency,
                        },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    r
                        ? ((0, u.P0)({
                              text: n ? D.intl.string(k.default.cxwOJN) : D.intl.string(k.default["302Ck/"]),
                              variant: "success",
                          }),
                          Q(!1))
                        : ea(S));
            }
        }, [S, Y, U, ea, Q, z, X]),
        el = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: n } = a;
                function r(a) {
                    let t = (function (e) {
                            if (null == e) return D.intl.string(k.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : D.intl.string(k.default["6zCzw1"]);
                        })(a),
                        l = a instanceof d.Ey ? a : null,
                        n = (0, I.c)(
                            { loadId: z, paymentSourceType: H.he.CARD, error: a, errorMessage: t },
                            m.A.EXPRESS_CHECKOUT,
                        ),
                        r = Error(n.error_message);
                    ((r.name = "ExpressCheckoutAddPaymentMethodError"),
                        (0, M.pM)(r, { tags: { source: "express_checkout" }, extra: n }),
                        ee(),
                        W(l ?? new d.Ey(t)),
                        e.paymentFailed({ reason: "invalid_payment_data", message: t }));
                }
                try {
                    (Q(!0), W(null), (0, c.ET)(), (Z.current = n));
                    let { error: e } = await l.submit();
                    if (null != e) {
                        (b.error("elements.submit failed: ", e), r(e));
                        return;
                    }
                    let { paymentMethod: a, error: s } = await t.createPaymentMethod({ elements: l });
                    if (null == a) {
                        (b.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: a,
                            error: s,
                        }),
                            r(s));
                        return;
                    }
                    let { billingAddressInfo: i } = (0, T.uK)(a),
                        h = a.id,
                        u = await (0, A.IC)({ stripePaymentMethodId: h, billingAddress: i });
                    ((0, I.lO)({ loadId: z, paymentSource: u }, m.A.EXPRESS_CHECKOUT), O(u));
                } catch (e) {
                    (b.error("handleExpressCheckoutConfirm failed: ", e), r(e instanceof d.Ey ? e : void 0));
                }
            },
            [Q, O, ee, W, z],
        ),
        en = n.useCallback(
            (e) => {
                ((L.current = a), e.resolve());
            },
            [a],
        ),
        er = (function (e) {
            let {
                    checkoutInvoicePreview: a,
                    renewalInvoicePreview: t,
                    selectedSkuId: l,
                    unifiedCheckoutFlow: r,
                } = (0, v.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    selectedSkuId: e.selectedSkuId,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                s = (0, h.bG)(
                    [C.A],
                    () => {
                        let e = null != l ? C.A.get(l) : null;
                        return null != e ? e.name : null;
                    },
                    [l],
                );
            return n.useMemo(() => {
                if (null == a) return null;
                if ("vault_only" === e) return { lineItems: [], applePay: void 0 };
                let { subtotal: l, tax: n, total: i, taxInclusive: h } = a,
                    u = h ? i - n : l,
                    o = a.getWalletAmount(),
                    c = a.getAmountDue(),
                    d = a.hasGiftCardBalanceApplied ? [{ name: D.intl.string(k.default.bdF0KJ), amount: -o }] : [],
                    m = n > 0 ? [{ name: D.intl.string(D.t.jiRvC7), amount: n }] : [];
                function A(e) {
                    return c > 0 ? [{ name: e, amount: u }, ...d, ...m] : [];
                }
                if (r === x.C.PREMIUM_CHECKOUT || r === x.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = P.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = j[t.interval],
                            n = t.intervalCount;
                        return {
                            planDisplayName: (0, y.Mn)(t.id),
                            recurringPaymentIntervalUnit: l,
                            recurringPaymentIntervalCount: n,
                        };
                    })(a);
                    if (null == e) return null;
                    let { planDisplayName: n, recurringPaymentIntervalUnit: r, recurringPaymentIntervalCount: s } = e,
                        i = null != t ? t.subtotal : l;
                    return {
                        lineItems: A(n),
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
                return { lineItems: null != s ? A(s) : [] };
            }, [a, t, s, e, r]);
        })(a);
    n.useEffect(() => {
        null != S && et();
    }, [S, et]);
    let es = n.useMemo(() => {
        if (null == U || null == er) return {};
        let { lineItems: e, applePay: a } = er;
        return {
            paymentMethodOrder: ["applePay", "googlePay", "card"],
            billingAddressRequired: !0,
            layout: { overflow: "never" },
            buttonHeight: 40,
            buttonType: { googlePay: "plain", applePay: "plain" },
            lineItems: e,
            applePay: a,
        };
    }, [U, er]);
    if (null == g || null == E || null == U || !q) return null;
    let ei = s || B;
    return (0, l.jsxs)("div", {
        className: i()(N.Pr, p),
        children: [
            ei && (0, l.jsx)(_.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [N.lX]: ei }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onLoadError: J,
                    onReady: $,
                    onClick: en,
                    onConfirm: (e) => el(e, { stripe: g, elements: E, currentAmountDue: U.getAmountDue() }),
                    onCancel: ee,
                    options: es,
                }),
            }),
        ],
    });
}
function w() {
    return (0, l.jsxs)("div", {
        className: N.ps,
        children: [
            (0, l.jsx)("span", { className: N.ao, "aria-hidden": "true" }),
            (0, l.jsx)(o.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: D.intl.string(k.default.N4EAHm),
            }),
            (0, l.jsx)("span", { className: N.ao, "aria-hidden": "true" }),
        ],
    });
}
t.d(
    a,
    {},
    {
        E1: function (e) {
            let a = (0, f.S)(),
                { elementsAppearance: t } = (0, p.E)(),
                s = (0, T.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: h } = (0, v.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    isPurchaseDisabled: e.getIsPurchaseDisabled(),
                })),
                u = e.disablePurchase || h,
                { expressCheckoutType: o, makePurchase: c } = n.useMemo(
                    () => ({ expressCheckoutType: u ? "vault_only" : e.type, makePurchase: e.makePurchase ?? L.tEg }),
                    [e.makePurchase, e.type, u],
                ),
                d = n.useMemo(() => {
                    if (null == i) return null;
                    let e = i.getAmountDue();
                    return {
                        paymentMethodCreation: "manual",
                        ...("vault_only" === o || e <= 0 ? { mode: "setup" } : { mode: "payment", amount: e }),
                        currency: String(i.currency).toLowerCase(),
                        locale: s,
                        appearance: { ...t, variables: { ...t.variables, borderRadius: "8px" } },
                    };
                }, [i, t, o, s]);
            return null == a || null == d
                ? null
                : (0, l.jsx)(r.Elements, {
                      stripe: a,
                      options: d,
                      children: (0, l.jsx)(O, { ...e, type: o, makePurchase: c, disablePurchase: u }),
                  });
        },
        Zr: function (e) {
            let { stripeExpressCheckoutComponent: a, fallbackComponent: t, showDividerBelow: n = !1 } = e,
                { shouldExpressCheckoutBeVisible: r } = (0, v.t4)((e) => ({
                    shouldExpressCheckoutBeVisible:
                        e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
                }));
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: i()(N.n2, { [N.lX]: !r }),
                        children: [a, n ? (0, l.jsx)(w, {}) : null],
                    }),
                    !r && t,
                ],
            });
        },
        rI: function () {
            let e = (0, v.t4)((e) => e.checkoutInvoicePreview),
                a = n.useMemo(
                    () =>
                        null != e && e.hasGiftCardBalanceApplied
                            ? D.intl.format(k.default.BMVyQO, { amount: (0, g.$g)(e.getAmountDue(), e.currency) })
                            : D.intl.string(k.default.gVM8va),
                    [e],
                );
            return (0, l.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", className: N.OJ, children: a });
        },
    },
);
