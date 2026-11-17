var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    u = t(164636),
    o = t(858899),
    c = t(834730),
    h = t(391048),
    d = t(627784),
    m = t(793574),
    p = t(669815),
    A = t(708146),
    E = t(942340),
    y = t(626584),
    C = t(97352),
    P = t(67480),
    x = t(949192),
    g = t(448645),
    f = t(580630),
    T = t(558740),
    v = t(120700),
    M = t(822764),
    _ = t(56763),
    I = t(316363),
    S = t(783327),
    N = t(705822),
    R = t(652215),
    j = t(682901),
    L = t(818348),
    b = t(379912),
    k = t(792996),
    O = t(969933);
let D = new y.A("StripeExpressCheckout.tsx"),
    H = { [j.WT.DAY]: "day", [j.WT.MONTH]: "month", [j.WT.YEAR]: "year" };
function w(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: c, className: E } = e,
        y = (0, r.useElements)(),
        f = (0, S.S)(),
        R = n.useRef(a),
        j = n.useRef(null),
        [w, U] = n.useState(null),
        G = n.useRef(null),
        Z = n.useRef(null),
        {
            checkoutInvoicePreview: Y,
            checkoutPaymentSources: F,
            expressCheckoutLoading: B,
            setExpressCheckoutStatus: K,
            markExpressCheckoutReady: W,
            shouldMountExpressCheckoutElement: V,
            setPurchaseError: X,
            contextMetadata: J,
            unifiedCheckoutFlow: z,
        } = (0, I.t4)((e) => {
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
        $ = J.loadId,
        q = n.useCallback(
            (e) => {
                let { availablePaymentMethods: t } = e,
                    l = null != t && Object.values(t).some(Boolean);
                ((0, M.FY)(
                    { loadId: $, checkoutFlow: z, expressCheckoutType: a, availablePaymentMethods: t },
                    m.A.EXPRESS_CHECKOUT,
                ),
                    W(l));
            },
            [W, $, z, a],
        ),
        Q = n.useCallback(
            (e) => {
                let { error: a } = e;
                D.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, M.PD)(
                    {
                        loadId: $,
                        checkoutFlow: z,
                        error: a,
                        errorMessage: a.message ?? "Express Checkout Element failed to load",
                    },
                    m.A.EXPRESS_CHECKOUT,
                );
                (A.r.report({ site: "express_checkout_load", extra: t }, a), K(N.i.UNAVAILABLE));
            },
            [$, z, K],
        ),
        ee = null != f && null != y && null != Y && V;
    n.useEffect(() => {
        if (ee) return () => K(N.i.INITIALIZING);
    }, [ee, K]);
    let ea = n.useCallback(
            (e) => {
                (c(e), K(e ? N.i.SUBMITTING : N.i.READY));
            },
            [c, K],
        ),
        et = n.useCallback(() => {
            (U(null), (G.current = null), ea(!1));
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
            let e = R.current;
            if (null == w || null == F || null == Y) return;
            let a = F.find((e) => e.id === w.id);
            if (null != a) {
                if (G.current === w.id) return;
                G.current = w.id;
                let t = null != a.relocationCountry,
                    l = Y.getAmountDue(),
                    n = Z.current !== l,
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
                    i = { loadId: $, checkoutFlow: z, expressCheckoutType: e, expressPaymentType: j.current };
                (n &&
                    (0, M.ik)(
                        { ...i, displayedAmount: Z.current, updatedAmount: l, currency: Y.currency },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    (0, M.Y2)({ ...i, paymentSource: w, autoPurchaseSkipReason: r }, m.A.EXPRESS_CHECKOUT),
                    s
                        ? ((0, o.P0)({
                              text: n ? k.intl.string(b.default.cxwOJN) : k.intl.string(b.default["302Ck/"]),
                              variant: "success",
                          }),
                          ea(!1))
                        : el(w));
            }
        }, [w, F, Y, el, ea, $, z]),
        er = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: n } = a;
                function r(a) {
                    let t = a instanceof d.Ey || (0, x.Lt)(a) ? a : void 0,
                        l = (function (e) {
                            if (null == e) return k.intl.string(b.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : k.intl.string(b.default["6zCzw1"]);
                        })(t),
                        n = t instanceof d.Ey ? t : null,
                        r = (0, M.c)(
                            {
                                loadId: $,
                                paymentSourceType: L.he.CARD,
                                error: t,
                                errorMessage: l,
                                expressPaymentType: e.expressPaymentType,
                            },
                            m.A.EXPRESS_CHECKOUT,
                        ),
                        s = {};
                    (null != e.expressPaymentType && (s.express_payment_type = e.expressPaymentType),
                        null != e.billingDetails && (s.country = e.billingDetails.address.country),
                        A.r.report({ site: "express_checkout_vault", tags: s, extra: { ...r, ...s } }, a),
                        et(),
                        X(n ?? new d.Ey(l)),
                        e.paymentFailed({ reason: "invalid_payment_data", message: l }));
                }
                try {
                    (ea(!0), X(null), (0, h.ET)(), (Z.current = n));
                    let { error: a } = await l.submit();
                    if (null != a) {
                        (D.error("elements.submit failed: ", a), r(a));
                        return;
                    }
                    let { paymentMethod: s, error: i } = await t.createPaymentMethod({ elements: l });
                    if (null == s) {
                        (D.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: s,
                            error: i,
                        }),
                            r(i));
                        return;
                    }
                    let { billingAddressInfo: u } = (0, T.uK)(s),
                        o = s.id,
                        c = await (0, p.IC)({ stripePaymentMethodId: o, billingAddress: u });
                    ((0, M.lO)(
                        { loadId: $, paymentSource: c, expressPaymentType: e.expressPaymentType },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                        U(c));
                } catch (e) {
                    (D.error("handleExpressCheckoutConfirm failed: ", e), r(e));
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
                } = (0, I.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    renewalInvoicePreview: e.renewalInvoicePreview,
                    selectedSkuId: e.selectedSkuId,
                    unifiedCheckoutFlow: e.unifiedCheckoutFlow,
                })),
                s = (0, u.bG)(
                    [P.A],
                    () => {
                        let e = null != l ? P.A.get(l) : null;
                        return null != e ? e.name : null;
                    },
                    [l],
                );
            return n.useMemo(() => {
                if (null == a) return null;
                if ("vault_only" === e) return { lineItems: [], applePay: void 0 };
                let { subtotal: l, tax: n, total: i, taxInclusive: u } = a,
                    o = u ? i - n : l,
                    c = a.getWalletAmount(),
                    h = a.getAmountDue(),
                    d = a.hasGiftCardBalanceApplied ? [{ name: k.intl.string(b.default.bdF0KJ), amount: -c }] : [],
                    m = n > 0 ? [{ name: k.intl.string(k.t.jiRvC7), amount: n }] : [];
                function p(e) {
                    return h > 0 ? [{ name: e, amount: o }, ...d, ...m] : [];
                }
                if (r === v.C.PREMIUM_CHECKOUT || r === v.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = C.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = H[t.interval],
                            n = t.intervalCount;
                        return {
                            planDisplayName: (0, g.Mn)(t.id),
                            recurringPaymentIntervalUnit: l,
                            recurringPaymentIntervalCount: n,
                        };
                    })(a);
                    if (null == e) return null;
                    let { planDisplayName: l, recurringPaymentIntervalUnit: n, recurringPaymentIntervalCount: r } = e,
                        s = null != t ? t.total : i;
                    return {
                        lineItems: p(l),
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
                return { lineItems: null != s ? p(s) : [] };
            }, [a, t, s, e, r]);
        })(a),
        ei = n.useCallback(
            (e) => {
                ((R.current = a),
                    (j.current = e.expressPaymentType),
                    (0, M.dE)(
                        {
                            loadId: $,
                            checkoutFlow: z,
                            expressCheckoutType: a,
                            expressPaymentType: e.expressPaymentType,
                        },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    e.resolve(es ?? void 0));
            },
            [a, es, $, z],
        ),
        eu = n.useCallback(() => {
            ((0, M.dJ)(
                { loadId: $, checkoutFlow: z, expressCheckoutType: R.current, expressPaymentType: j.current },
                m.A.EXPRESS_CHECKOUT,
            ),
                et());
        }, [et, $, z]);
    n.useEffect(() => {
        null != w && en();
    }, [w, en]);
    let eo = n.useMemo(() => {
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
    if (null == f || null == y || null == Y || !ee) return null;
    let ec = s || B;
    return (0, l.jsxs)("div", {
        className: i()(O.Pr, E),
        children: [
            ec && (0, l.jsx)(_.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [O.lX]: ec }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onLoadError: Q,
                    onReady: q,
                    onClick: ei,
                    onConfirm: (e) => er(e, { stripe: f, elements: y, currentAmountDue: Y.getAmountDue() }),
                    onCancel: eu,
                    options: eo,
                }),
            }),
        ],
    });
}
function U() {
    return (0, l.jsxs)("div", {
        className: O.ps,
        children: [
            (0, l.jsx)("span", { className: O.ao, "aria-hidden": "true" }),
            (0, l.jsx)(c.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: k.intl.string(b.default.N4EAHm),
            }),
            (0, l.jsx)("span", { className: O.ao, "aria-hidden": "true" }),
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
                s = (0, T.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: u } = (0, I.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    isPurchaseDisabled: e.getIsPurchaseDisabled(),
                })),
                o = e.disablePurchase || u,
                { expressCheckoutType: c, makePurchase: h } = n.useMemo(
                    () => ({ expressCheckoutType: o ? "vault_only" : e.type, makePurchase: e.makePurchase ?? R.tEg }),
                    [e.makePurchase, e.type, o],
                ),
                d = n.useMemo(() => {
                    if (null == i) return null;
                    let e = i.getAmountDue();
                    return {
                        paymentMethodCreation: "manual",
                        ...("vault_only" === c || e <= 0 ? { mode: "setup" } : { mode: "payment", amount: e }),
                        currency: String(i.currency).toLowerCase(),
                        locale: s,
                        appearance: { ...t, variables: { ...t.variables, borderRadius: "8px" } },
                    };
                }, [i, t, c, s]);
            return null == a || null == d
                ? null
                : (0, l.jsx)(r.Elements, {
                      stripe: a,
                      options: d,
                      children: (0, l.jsx)(w, { ...e, type: c, makePurchase: h, disablePurchase: o }),
                  });
        },
        Zr: function (e) {
            let { stripeExpressCheckoutComponent: a, fallbackComponent: t, showDividerBelow: n = !1 } = e,
                { shouldExpressCheckoutBeVisible: r } = (0, I.t4)((e) => ({
                    shouldExpressCheckoutBeVisible:
                        e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
                }));
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: i()(O.n2, { [O.lX]: !r }),
                        children: [a, n ? (0, l.jsx)(U, {}) : null],
                    }),
                    !r && t,
                ],
            });
        },
        rI: function () {
            let e = (0, I.t4)((e) => e.checkoutInvoicePreview),
                a = n.useMemo(
                    () =>
                        null != e && e.hasGiftCardBalanceApplied
                            ? k.intl.format(b.default.BMVyQO, { amount: (0, f.$g)(e.getAmountDue(), e.currency) })
                            : k.intl.string(b.default.gVM8va),
                    [e],
                );
            return (0, l.jsx)(c.E, { variant: "body-sm/normal", color: "text-muted", className: O.OJ, children: a });
        },
    },
);
