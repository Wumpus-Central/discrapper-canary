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
    p = t(793574),
    m = t(669815),
    A = t(708146),
    E = t(942340),
    P = t(626584),
    y = t(97352),
    C = t(67480),
    M = t(949192),
    T = t(448645),
    g = t(580630),
    x = t(558740),
    _ = t(120700),
    I = t(822764),
    v = t(56763),
    R = t(682689),
    S = t(783327),
    f = t(705822),
    L = t(652215),
    k = t(682901),
    H = t(818348),
    D = t(379912),
    N = t(792996),
    b = t(969933);
let O = new P.A("StripeExpressCheckout.tsx"),
    j = { [k.WT.DAY]: "day", [k.WT.MONTH]: "month", [k.WT.YEAR]: "year" };
function w(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: o, className: E } = e,
        P = (0, r.useElements)(),
        g = (0, S.S)(),
        L = n.useRef(a),
        k = n.useRef(null),
        [w, U] = n.useState(null),
        Z = n.useRef(null),
        G = n.useRef(null),
        {
            checkoutInvoicePreview: Y,
            checkoutPaymentSources: B,
            expressCheckoutLoading: K,
            setExpressCheckoutStatus: F,
            markExpressCheckoutReady: W,
            shouldMountExpressCheckoutElement: V,
            setPurchaseError: X,
            contextMetadata: z,
            unifiedCheckoutFlow: J,
        } = (0, R.t4)((e) => {
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
        $ = z.loadId,
        q = n.useCallback(
            (e) => {
                let { availablePaymentMethods: t } = e,
                    l = null != t && Object.values(t).some(Boolean);
                ((0, I.FY)(
                    { loadId: $, checkoutFlow: J, expressCheckoutType: a, availablePaymentMethods: t },
                    p.A.EXPRESS_CHECKOUT,
                ),
                    W(l));
            },
            [W, $, J, a],
        ),
        Q = n.useCallback(
            (e) => {
                let { error: a } = e;
                O.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, I.PD)(
                    {
                        loadId: $,
                        checkoutFlow: J,
                        error: a,
                        errorMessage: a.message ?? "Express Checkout Element failed to load",
                    },
                    p.A.EXPRESS_CHECKOUT,
                );
                (A.r.report({ site: "express_checkout_load", extra: t }, a), F(f.i.UNAVAILABLE));
            },
            [$, J, F],
        ),
        ee = null != g && null != P && null != Y && V;
    n.useEffect(() => {
        if (ee) return () => F(f.i.INITIALIZING);
    }, [ee, F]);
    let ea = n.useCallback(
            (e) => {
                (o(e), F(e ? f.i.SUBMITTING : f.i.READY));
            },
            [o, F],
        ),
        et = n.useCallback(() => {
            (U(null), (Z.current = null), ea(!1));
        }, [ea]),
        el = n.useCallback(
            async (e) => {
                try {
                    (null != t && (await t(e)), ea(!1));
                } catch (e) {
                    ea(!1);
                }
            },
            [t, ea],
        ),
        en = n.useCallback(() => {
            let e = L.current;
            if (null == w || null == B || null == Y) return;
            let a = B.find((e) => e.id === w.id);
            if (null != a) {
                if (Z.current === w.id) return;
                Z.current = w.id;
                let t = null != a.relocationCountry,
                    l = Y.getAmountDue(),
                    n = G.current !== l,
                    { autoPurchaseSkipReason: r, shouldSkipAutoPurchase: s } = (function (e) {
                        let { willRelocateStoreCountry: a, isVaultOnlyMode: t, amountHasChanged: l } = e;
                        return t
                            ? { autoPurchaseSkipReason: "vault_only", shouldSkipAutoPurchase: !0 }
                            : a
                              ? { autoPurchaseSkipReason: "store_relocation", shouldSkipAutoPurchase: !0 }
                              : l
                                ? { autoPurchaseSkipReason: "amount_changed", shouldSkipAutoPurchase: !0 }
                                : { shouldSkipAutoPurchase: !1, autoPurchaseSkipReason: null };
                    })({ willRelocateStoreCountry: t, amountHasChanged: n, isVaultOnlyMode: "vault_only" === e }),
                    i = { loadId: $, checkoutFlow: J, expressCheckoutType: e, expressPaymentType: k.current };
                (n &&
                    (0, I.ik)(
                        { ...i, displayedAmount: G.current, updatedAmount: l, currency: Y.currency },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                    (0, I.Y2)({ ...i, paymentSource: w, autoPurchaseSkipReason: r }, p.A.EXPRESS_CHECKOUT),
                    s
                        ? ((0, u.P0)({
                              text: n ? N.intl.string(D.default.cxwOJN) : N.intl.string(D.default["302Ck/"]),
                              variant: "success",
                          }),
                          ea(!1))
                        : el(w));
            }
        }, [w, B, Y, el, ea, $, J]),
        er = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: n } = a;
                function r(a) {
                    let t = a instanceof d.Ey || (0, M.Lt)(a) ? a : void 0,
                        l = (function (e) {
                            if (null == e) return N.intl.string(D.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : N.intl.string(D.default["6zCzw1"]);
                        })(t),
                        n = t instanceof d.Ey ? t : null,
                        r = (0, I.c)(
                            {
                                loadId: $,
                                paymentSourceType: H.he.CARD,
                                error: t,
                                errorMessage: l,
                                expressPaymentType: e.expressPaymentType,
                            },
                            p.A.EXPRESS_CHECKOUT,
                        ),
                        s = {};
                    (null != e.expressPaymentType && (s.express_payment_type = e.expressPaymentType),
                        null != e.billingDetails && (s.country = e.billingDetails.address.country),
                        A.r.report(
                            { site: "express_checkout_vault", isStripeWallet: !0, tags: s, extra: { ...r, ...s } },
                            a,
                        ),
                        et(),
                        X(n ?? new d.Ey(l)),
                        e.paymentFailed({ reason: "invalid_payment_data", message: l }));
                }
                try {
                    (ea(!0), X(null), (0, c.ET)(), (G.current = n));
                    let { error: a } = await l.submit();
                    if (null != a) {
                        (O.error("elements.submit failed: ", a), r(a));
                        return;
                    }
                    let { paymentMethod: s, error: i } = await t.createPaymentMethod({ elements: l });
                    if (null == s) {
                        (O.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: s,
                            error: i,
                        }),
                            r(i));
                        return;
                    }
                    let { billingAddressInfo: h } = (0, x.uK)(s),
                        u = s.id,
                        o = await (0, m.IC)({ stripePaymentMethodId: u, billingAddress: h });
                    ((0, I.lO)(
                        { loadId: $, paymentSource: o, expressPaymentType: e.expressPaymentType },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                        U(o));
                } catch (e) {
                    (O.error("handleExpressCheckoutConfirm failed: ", e), r(e));
                }
            },
            [ea, U, et, X, $],
        ),
        es = (function (e) {
            let {
                    checkoutInvoicePreview: a,
                    renewalInvoicePreview: t,
                    selectedSkuId: l,
                    unifiedCheckoutFlow: r,
                } = (0, R.t4)((e) => ({
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
                    d = a.hasGiftCardBalanceApplied ? [{ name: N.intl.string(D.default.bdF0KJ), amount: -o }] : [],
                    p = n > 0 ? [{ name: N.intl.string(N.t.jiRvC7), amount: n }] : [];
                function m(e) {
                    return c > 0 ? [{ name: e, amount: u }, ...d, ...p] : [];
                }
                if (r === _.C.PREMIUM_CHECKOUT || r === _.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = y.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = j[t.interval],
                            n = t.intervalCount;
                        return {
                            planDisplayName: (0, T.Mn)(t.id),
                            recurringPaymentIntervalUnit: l,
                            recurringPaymentIntervalCount: n,
                        };
                    })(a);
                    if (null == e) return null;
                    let { planDisplayName: l, recurringPaymentIntervalUnit: n, recurringPaymentIntervalCount: r } = e,
                        s = null != t ? t.total : i;
                    return {
                        lineItems: m(l),
                        applePay: {
                            recurringPaymentRequest: {
                                paymentDescription: l,
                                managementURL: `${location.protocol}${window.GLOBAL_ENV.WEBAPP_ENDPOINT}`,
                                regularBilling: {
                                    amount: s,
                                    label: l,
                                    recurringPaymentIntervalUnit: n,
                                    recurringPaymentIntervalCount: r,
                                },
                            },
                        },
                    };
                }
                return { lineItems: null != s ? m(s) : [] };
            }, [a, t, s, e, r]);
        })(a),
        ei = n.useCallback(
            (e) => {
                ((L.current = a),
                    (k.current = e.expressPaymentType),
                    (0, I.dE)(
                        {
                            loadId: $,
                            checkoutFlow: J,
                            expressCheckoutType: a,
                            expressPaymentType: e.expressPaymentType,
                        },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                    e.resolve(es ?? void 0));
            },
            [a, es, $, J],
        ),
        eh = n.useCallback(() => {
            ((0, I.dJ)(
                { loadId: $, checkoutFlow: J, expressCheckoutType: L.current, expressPaymentType: k.current },
                p.A.EXPRESS_CHECKOUT,
            ),
                et());
        }, [et, $, J]);
    n.useEffect(() => {
        null != w && en();
    }, [w, en]);
    let eu = n.useMemo(() => {
        if (null == Y || null == es) return {};
        let { lineItems: e, applePay: a } = es;
        return {
            paymentMethodOrder: ["applePay", "googlePay", "card"],
            billingAddressRequired: !0,
            layout: { overflow: "never" },
            buttonHeight: 40,
            buttonType: { googlePay: "plain", applePay: "plain" },
            lineItems: e,
            applePay: a,
        };
    }, [Y, es]);
    if (null == g || null == P || null == Y || !ee) return null;
    let eo = s || K;
    return (0, l.jsxs)("div", {
        className: i()(b.Pr, E),
        children: [
            eo && (0, l.jsx)(v.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [b.lX]: eo }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onLoadError: Q,
                    onReady: q,
                    onClick: ei,
                    onConfirm: (e) => er(e, { stripe: g, elements: P, currentAmountDue: Y.getAmountDue() }),
                    onCancel: eh,
                    options: eu,
                }),
            }),
        ],
    });
}
function U() {
    return (0, l.jsxs)("div", {
        className: b.ps,
        children: [
            (0, l.jsx)("span", { className: b.ao, "aria-hidden": "true" }),
            (0, l.jsx)(o.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: N.intl.string(D.default.N4EAHm),
            }),
            (0, l.jsx)("span", { className: b.ao, "aria-hidden": "true" }),
        ],
    });
}
t.d(
    a,
    {},
    {
        E1: function (e) {
            let a = (0, S.S)(),
                { elementsAppearance: t } = (0, E.E)(),
                s = (0, x.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: h } = (0, R.t4)((e) => ({
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
                      children: (0, l.jsx)(w, { ...e, type: o, makePurchase: c, disablePurchase: u }),
                  });
        },
        Zr: function (e) {
            let { stripeExpressCheckoutComponent: a, fallbackComponent: t, showDividerBelow: n = !1 } = e,
                { shouldExpressCheckoutBeVisible: r } = (0, R.t4)((e) => ({
                    shouldExpressCheckoutBeVisible:
                        e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
                }));
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: i()(b.n2, { [b.lX]: !r }),
                        children: [a, n ? (0, l.jsx)(U, {}) : null],
                    }),
                    !r && t,
                ],
            });
        },
        rI: function () {
            let e = (0, R.t4)((e) => e.checkoutInvoicePreview),
                a = n.useMemo(
                    () =>
                        null != e && e.hasGiftCardBalanceApplied
                            ? N.intl.format(D.default.BMVyQO, { amount: (0, g.$g)(e.getAmountDue(), e.currency) })
                            : N.intl.string(D.default.gVM8va),
                    [e],
                );
            return (0, l.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", className: b.OJ, children: a });
        },
    },
);
