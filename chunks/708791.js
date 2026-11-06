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
    p = t(781300),
    A = t(942340),
    E = t(626584),
    P = t(97352),
    C = t(67480),
    y = t(739508),
    M = t(722178),
    T = t(580630),
    x = t(558740),
    g = t(120700),
    _ = t(822764),
    I = t(56763),
    v = t(516106),
    R = t(783327),
    S = t(705822),
    f = t(652215),
    L = t(682901),
    k = t(818348),
    H = t(379912),
    D = t(792996),
    N = t(969933);
let b = new E.A("StripeExpressCheckout.tsx"),
    O = { [L.WT.DAY]: "day", [L.WT.MONTH]: "month", [L.WT.YEAR]: "year" };
function j(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: o, className: A } = e,
        E = (0, r.useElements)(),
        T = (0, R.S)(),
        f = n.useRef(a),
        L = n.useRef(null),
        [j, w] = n.useState(null),
        U = n.useRef(null),
        Z = n.useRef(null),
        {
            checkoutInvoicePreview: Y,
            checkoutPaymentSources: B,
            expressCheckoutLoading: G,
            setExpressCheckoutStatus: K,
            markExpressCheckoutReady: F,
            shouldMountExpressCheckoutElement: W,
            setPurchaseError: V,
            contextMetadata: X,
            unifiedCheckoutFlow: z,
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
        J = X.loadId,
        $ = n.useCallback(
            (e) => {
                let { availablePaymentMethods: t } = e,
                    l = null != t && Object.values(t).some(Boolean);
                ((0, _.FY)(
                    { loadId: J, checkoutFlow: z, expressCheckoutType: a, availablePaymentMethods: t },
                    m.A.EXPRESS_CHECKOUT,
                ),
                    F(l));
            },
            [F, J, z, a],
        ),
        q = n.useCallback(
            (e) => {
                let { error: a } = e;
                b.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, _.PD)(
                        {
                            loadId: J,
                            checkoutFlow: z,
                            error: a,
                            errorMessage: a.message ?? "Express Checkout Element failed to load",
                        },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    l = Error(t.error_message);
                ((l.name = "ExpressCheckoutLoadError"),
                    (0, y.pM)(l, { tags: { source: "express_checkout" }, extra: t }),
                    K(S.i.UNAVAILABLE));
            },
            [J, z, K],
        ),
        Q = null != T && null != E && null != Y && W;
    n.useEffect(() => {
        if (Q) return () => K(S.i.INITIALIZING);
    }, [Q, K]);
    let ee = n.useCallback(
            (e) => {
                (o(e), K(e ? S.i.SUBMITTING : S.i.READY));
            },
            [o, K],
        ),
        ea = n.useCallback(() => {
            (w(null), (U.current = null), ee(!1));
        }, [ee]),
        et = n.useCallback(
            async (e) => {
                try {
                    (null != t && (await t(e)), ee(!1));
                } catch (e) {
                    ee(!1);
                }
            },
            [t, ee],
        ),
        el = n.useCallback(() => {
            let e = f.current;
            if (null == j || null == B || null == Y) return;
            let a = B.find((e) => e.id === j.id);
            if (null != a) {
                if (U.current === j.id) return;
                U.current = j.id;
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
                    i = { loadId: J, checkoutFlow: z, expressCheckoutType: e, expressPaymentType: L.current };
                (n &&
                    (0, _.ik)(
                        { ...i, displayedAmount: Z.current, updatedAmount: l, currency: Y.currency },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    (0, _.Y2)({ ...i, paymentSource: j, autoPurchaseSkipReason: r }, m.A.EXPRESS_CHECKOUT),
                    s
                        ? ((0, u.P0)({
                              text: n ? D.intl.string(H.default.cxwOJN) : D.intl.string(H.default["302Ck/"]),
                              variant: "success",
                          }),
                          ee(!1))
                        : et(j));
            }
        }, [j, B, Y, et, ee, J, z]),
        en = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: n } = a;
                function r(a) {
                    let t = (function (e) {
                            if (null == e) return D.intl.string(H.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : D.intl.string(H.default["6zCzw1"]);
                        })(a),
                        l = a instanceof d.Ey ? a : null,
                        n = (0, _.c)(
                            {
                                loadId: J,
                                paymentSourceType: k.he.CARD,
                                error: a,
                                errorMessage: t,
                                expressPaymentType: e.expressPaymentType,
                            },
                            m.A.EXPRESS_CHECKOUT,
                        ),
                        r = Error(n.error_message);
                    ((r.name = "ExpressCheckoutAddPaymentMethodError"),
                        (0, y.pM)(r, { tags: { source: "express_checkout" }, extra: n }),
                        ea(),
                        V(l ?? new d.Ey(t)),
                        e.paymentFailed({ reason: "invalid_payment_data", message: t }));
                }
                try {
                    (ee(!0), V(null), (0, c.ET)(), (Z.current = n));
                    let { error: a } = await l.submit();
                    if (null != a) {
                        (b.error("elements.submit failed: ", a), r(a));
                        return;
                    }
                    let { paymentMethod: s, error: i } = await t.createPaymentMethod({ elements: l });
                    if (null == s) {
                        (b.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: s,
                            error: i,
                        }),
                            r(i));
                        return;
                    }
                    let { billingAddressInfo: h } = (0, x.uK)(s),
                        u = s.id,
                        o = await (0, p.IC)({ stripePaymentMethodId: u, billingAddress: h });
                    ((0, _.lO)(
                        { loadId: J, paymentSource: o, expressPaymentType: e.expressPaymentType },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                        w(o));
                } catch (e) {
                    (b.error("handleExpressCheckoutConfirm failed: ", e), r(e instanceof d.Ey ? e : void 0));
                }
            },
            [ee, w, ea, V, J],
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
                    d = a.hasGiftCardBalanceApplied ? [{ name: D.intl.string(H.default.bdF0KJ), amount: -o }] : [],
                    m = n > 0 ? [{ name: D.intl.string(D.t.jiRvC7), amount: n }] : [];
                function p(e) {
                    return c > 0 ? [{ name: e, amount: u }, ...d, ...m] : [];
                }
                if (r === g.C.PREMIUM_CHECKOUT || r === g.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = P.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = O[t.interval],
                            n = t.intervalCount;
                        return {
                            planDisplayName: (0, M.Mn)(t.id),
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
        es = n.useCallback(
            (e) => {
                ((f.current = a),
                    (L.current = e.expressPaymentType),
                    (0, _.dE)(
                        {
                            loadId: J,
                            checkoutFlow: z,
                            expressCheckoutType: a,
                            expressPaymentType: e.expressPaymentType,
                        },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    e.resolve(er ?? void 0));
            },
            [a, er, J, z],
        ),
        ei = n.useCallback(() => {
            ((0, _.dJ)(
                { loadId: J, checkoutFlow: z, expressCheckoutType: f.current, expressPaymentType: L.current },
                m.A.EXPRESS_CHECKOUT,
            ),
                ea());
        }, [ea, J, z]);
    n.useEffect(() => {
        null != j && el();
    }, [j, el]);
    let eh = n.useMemo(() => {
        if (null == Y || null == er) return {};
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
    }, [Y, er]);
    if (null == T || null == E || null == Y || !Q) return null;
    let eu = s || G;
    return (0, l.jsxs)("div", {
        className: i()(N.Pr, A),
        children: [
            eu && (0, l.jsx)(I.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [N.lX]: eu }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onLoadError: q,
                    onReady: $,
                    onClick: es,
                    onConfirm: (e) => en(e, { stripe: T, elements: E, currentAmountDue: Y.getAmountDue() }),
                    onCancel: ei,
                    options: eh,
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
                children: D.intl.string(H.default.N4EAHm),
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
            let a = (0, R.S)(),
                { elementsAppearance: t } = (0, A.E)(),
                s = (0, x.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: h } = (0, v.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    isPurchaseDisabled: e.getIsPurchaseDisabled(),
                })),
                u = e.disablePurchase || h,
                { expressCheckoutType: o, makePurchase: c } = n.useMemo(
                    () => ({ expressCheckoutType: u ? "vault_only" : e.type, makePurchase: e.makePurchase ?? f.tEg }),
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
                      children: (0, l.jsx)(j, { ...e, type: o, makePurchase: c, disablePurchase: u }),
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
                            ? D.intl.format(H.default.BMVyQO, { amount: (0, T.$g)(e.getAmountDue(), e.currency) })
                            : D.intl.string(H.default.gVM8va),
                    [e],
                );
            return (0, l.jsx)(o.E, { variant: "body-sm/normal", color: "text-muted", className: N.OJ, children: a });
        },
    },
);
