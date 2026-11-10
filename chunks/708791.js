var l = t(477900),
    r = t(582128),
    n = t(643909),
    s = t(503698),
    i = t.n(s),
    h = t(164636),
    u = t(858899),
    o = t(834730),
    c = t(391048),
    d = t(627784),
    p = t(793574),
    m = t(669815),
    A = t(942340),
    E = t(626584),
    P = t(97352),
    C = t(67480),
    y = t(949192),
    M = t(448645),
    T = t(580630),
    g = t(558740),
    _ = t(120700),
    x = t(822764),
    I = t(56763),
    S = t(316363),
    f = t(783327),
    v = t(705822),
    R = t(652215),
    L = t(682901),
    k = t(818348),
    H = t(379912),
    D = t(792996),
    N = t(969933);
let b = new E.A("StripeExpressCheckout.tsx"),
    O = { [L.WT.DAY]: "day", [L.WT.MONTH]: "month", [L.WT.YEAR]: "year" };
function j(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: o, className: A } = e,
        E = (0, n.useElements)(),
        T = (0, f.S)(),
        R = r.useRef(a),
        L = r.useRef(null),
        [j, w] = r.useState(null),
        U = r.useRef(null),
        Z = r.useRef(null),
        {
            checkoutInvoicePreview: G,
            checkoutPaymentSources: Y,
            expressCheckoutLoading: B,
            setExpressCheckoutStatus: K,
            markExpressCheckoutReady: F,
            shouldMountExpressCheckoutElement: W,
            setPurchaseError: V,
            contextMetadata: X,
            unifiedCheckoutFlow: z,
        } = (0, S.t4)((e) => {
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
        $ = X.loadId,
        J = r.useCallback(
            (e) => {
                let { availablePaymentMethods: t } = e,
                    l = null != t && Object.values(t).some(Boolean);
                ((0, x.FY)(
                    { loadId: $, checkoutFlow: z, expressCheckoutType: a, availablePaymentMethods: t },
                    p.A.EXPRESS_CHECKOUT,
                ),
                    F(l));
            },
            [F, $, z, a],
        ),
        q = r.useCallback(
            (e) => {
                let { error: a } = e;
                b.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, x.PD)(
                    {
                        loadId: $,
                        checkoutFlow: z,
                        error: a,
                        errorMessage: a.message ?? "Express Checkout Element failed to load",
                    },
                    p.A.EXPRESS_CHECKOUT,
                );
                if ((0, y.Sz)(a)) {
                    let e = Error(t.error_message);
                    ((e.name = `ExpressCheckoutLoadError[${a.type}]`),
                        (0, y.pM)(e, {
                            tags: { source: "express_checkout", stripe_error_type: a.type },
                            extra: t,
                            fingerprint: ["express_checkout_load_error", a.type],
                        }));
                }
                K(v.i.UNAVAILABLE);
            },
            [$, z, K],
        ),
        Q = null != T && null != E && null != G && W;
    r.useEffect(() => {
        if (Q) return () => K(v.i.INITIALIZING);
    }, [Q, K]);
    let ee = r.useCallback(
            (e) => {
                (o(e), K(e ? v.i.SUBMITTING : v.i.READY));
            },
            [o, K],
        ),
        ea = r.useCallback(() => {
            (w(null), (U.current = null), ee(!1));
        }, [ee]),
        et = r.useCallback(
            async (e) => {
                try {
                    (null != t && (await t(e)), ee(!1));
                } catch (e) {
                    ee(!1);
                }
            },
            [t, ee],
        ),
        el = r.useCallback(() => {
            let e = R.current;
            if (null == j || null == Y || null == G) return;
            let a = Y.find((e) => e.id === j.id);
            if (null != a) {
                if (U.current === j.id) return;
                U.current = j.id;
                let t = null != a.relocationCountry,
                    l = G.getAmountDue(),
                    r = Z.current !== l,
                    { autoPurchaseSkipReason: n, shouldSkipAutoPurchase: s } = (function (e) {
                        let { willRelocateStoreCountry: a, isVaultOnlyMode: t, amountHasChanged: l } = e;
                        return t
                            ? { autoPurchaseSkipReason: "vault_only", shouldSkipAutoPurchase: !0 }
                            : a
                              ? { autoPurchaseSkipReason: "store_relocation", shouldSkipAutoPurchase: !0 }
                              : l
                                ? { autoPurchaseSkipReason: "amount_changed", shouldSkipAutoPurchase: !0 }
                                : { shouldSkipAutoPurchase: !1, autoPurchaseSkipReason: null };
                    })({ willRelocateStoreCountry: t, amountHasChanged: r, isVaultOnlyMode: "vault_only" === e }),
                    i = { loadId: $, checkoutFlow: z, expressCheckoutType: e, expressPaymentType: L.current };
                (r &&
                    (0, x.ik)(
                        { ...i, displayedAmount: Z.current, updatedAmount: l, currency: G.currency },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                    (0, x.Y2)({ ...i, paymentSource: j, autoPurchaseSkipReason: n }, p.A.EXPRESS_CHECKOUT),
                    s
                        ? ((0, u.P0)({
                              text: r ? D.intl.string(H.default.cxwOJN) : D.intl.string(H.default["302Ck/"]),
                              variant: "success",
                          }),
                          ee(!1))
                        : et(j));
            }
        }, [j, Y, G, et, ee, $, z]),
        er = r.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: r } = a;
                function n(a) {
                    let t = a instanceof d.Ey || (0, y.Lt)(a) ? a : void 0,
                        l = (function (e) {
                            if (null == e) return D.intl.string(H.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : D.intl.string(H.default["6zCzw1"]);
                        })(t),
                        r = t instanceof d.Ey ? t : null,
                        n = (0, x.c)(
                            {
                                loadId: $,
                                paymentSourceType: k.he.CARD,
                                error: t,
                                errorMessage: l,
                                expressPaymentType: e.expressPaymentType,
                            },
                            p.A.EXPRESS_CHECKOUT,
                        );
                    if ((0, y.Sz)(a)) {
                        let e = (0, y.Lt)(a) ? a.type : null,
                            t =
                                null != e
                                    ? e
                                    : null == r
                                      ? "unknown"
                                      : r.code > 0
                                        ? String(r.code)
                                        : Object.keys(r.fields).length > 0
                                          ? "field_error"
                                          : null != r.status
                                            ? `http_${r.status}`
                                            : "unknown",
                            l = Error(n.error_message);
                        ((l.name = `ExpressCheckoutAddPaymentMethodError[${t}]`),
                            (0, y.pM)(l, {
                                tags: {
                                    source: "express_checkout",
                                    error_key: t,
                                    ...(null != r && null != r.status ? { http_status: String(r.status) } : {}),
                                },
                                extra: { ...n, raw_error: a },
                                fingerprint: ["express_checkout_add_payment_method_error", t],
                            }));
                    }
                    (ea(), V(r ?? new d.Ey(l)), e.paymentFailed({ reason: "invalid_payment_data", message: l }));
                }
                try {
                    (ee(!0), V(null), (0, c.ET)(), (Z.current = r));
                    let { error: a } = await l.submit();
                    if (null != a) {
                        (b.error("elements.submit failed: ", a), n(a));
                        return;
                    }
                    let { paymentMethod: s, error: i } = await t.createPaymentMethod({ elements: l });
                    if (null == s) {
                        (b.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: s,
                            error: i,
                        }),
                            n(i));
                        return;
                    }
                    let { billingAddressInfo: h } = (0, g.uK)(s),
                        u = s.id,
                        o = await (0, m.IC)({ stripePaymentMethodId: u, billingAddress: h });
                    ((0, x.lO)(
                        { loadId: $, paymentSource: o, expressPaymentType: e.expressPaymentType },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                        w(o));
                } catch (e) {
                    (b.error("handleExpressCheckoutConfirm failed: ", e), n(e));
                }
            },
            [ee, w, ea, V, $],
        ),
        en = (function (e) {
            let {
                    checkoutInvoicePreview: a,
                    renewalInvoicePreview: t,
                    selectedSkuId: l,
                    unifiedCheckoutFlow: n,
                } = (0, S.t4)((e) => ({
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
            return r.useMemo(() => {
                if (null == a) return null;
                if ("vault_only" === e) return { lineItems: [], applePay: void 0 };
                let { subtotal: l, tax: r, total: i, taxInclusive: h } = a,
                    u = h ? i - r : l,
                    o = a.getWalletAmount(),
                    c = a.getAmountDue(),
                    d = a.hasGiftCardBalanceApplied ? [{ name: D.intl.string(H.default.bdF0KJ), amount: -o }] : [],
                    p = r > 0 ? [{ name: D.intl.string(D.t.jiRvC7), amount: r }] : [];
                function m(e) {
                    return c > 0 ? [{ name: e, amount: u }, ...d, ...p] : [];
                }
                if (n === _.C.PREMIUM_CHECKOUT || n === _.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = P.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = O[t.interval],
                            r = t.intervalCount;
                        return {
                            planDisplayName: (0, M.Mn)(t.id),
                            recurringPaymentIntervalUnit: l,
                            recurringPaymentIntervalCount: r,
                        };
                    })(a);
                    if (null == e) return null;
                    let { planDisplayName: l, recurringPaymentIntervalUnit: r, recurringPaymentIntervalCount: n } = e,
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
                                    recurringPaymentIntervalUnit: r,
                                    recurringPaymentIntervalCount: n,
                                },
                            },
                        },
                    };
                }
                return { lineItems: null != s ? m(s) : [] };
            }, [a, t, s, e, n]);
        })(a),
        es = r.useCallback(
            (e) => {
                ((R.current = a),
                    (L.current = e.expressPaymentType),
                    (0, x.dE)(
                        {
                            loadId: $,
                            checkoutFlow: z,
                            expressCheckoutType: a,
                            expressPaymentType: e.expressPaymentType,
                        },
                        p.A.EXPRESS_CHECKOUT,
                    ),
                    e.resolve(en ?? void 0));
            },
            [a, en, $, z],
        ),
        ei = r.useCallback(() => {
            ((0, x.dJ)(
                { loadId: $, checkoutFlow: z, expressCheckoutType: R.current, expressPaymentType: L.current },
                p.A.EXPRESS_CHECKOUT,
            ),
                ea());
        }, [ea, $, z]);
    r.useEffect(() => {
        null != j && el();
    }, [j, el]);
    let eh = r.useMemo(() => {
        if (null == G || null == en) return {};
        let { lineItems: e, applePay: a } = en;
        return {
            paymentMethodOrder: ["applePay", "googlePay", "card"],
            billingAddressRequired: !0,
            layout: { overflow: "never" },
            buttonHeight: 40,
            buttonType: { googlePay: "plain", applePay: "plain" },
            lineItems: e,
            applePay: a,
        };
    }, [G, en]);
    if (null == T || null == E || null == G || !Q) return null;
    let eu = s || B;
    return (0, l.jsxs)("div", {
        className: i()(N.Pr, A),
        children: [
            eu && (0, l.jsx)(I.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [N.lX]: eu }),
                children: (0, l.jsx)(n.ExpressCheckoutElement, {
                    onLoadError: q,
                    onReady: J,
                    onClick: es,
                    onConfirm: (e) => er(e, { stripe: T, elements: E, currentAmountDue: G.getAmountDue() }),
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
            let a = (0, f.S)(),
                { elementsAppearance: t } = (0, A.E)(),
                s = (0, g.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: h } = (0, S.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    isPurchaseDisabled: e.getIsPurchaseDisabled(),
                })),
                u = e.disablePurchase || h,
                { expressCheckoutType: o, makePurchase: c } = r.useMemo(
                    () => ({ expressCheckoutType: u ? "vault_only" : e.type, makePurchase: e.makePurchase ?? R.tEg }),
                    [e.makePurchase, e.type, u],
                ),
                d = r.useMemo(() => {
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
                : (0, l.jsx)(n.Elements, {
                      stripe: a,
                      options: d,
                      children: (0, l.jsx)(j, { ...e, type: o, makePurchase: c, disablePurchase: u }),
                  });
        },
        Zr: function (e) {
            let { stripeExpressCheckoutComponent: a, fallbackComponent: t, showDividerBelow: r = !1 } = e,
                { shouldExpressCheckoutBeVisible: n } = (0, S.t4)((e) => ({
                    shouldExpressCheckoutBeVisible:
                        e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
                }));
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsxs)("div", {
                        className: i()(N.n2, { [N.lX]: !n }),
                        children: [a, r ? (0, l.jsx)(w, {}) : null],
                    }),
                    !n && t,
                ],
            });
        },
        rI: function () {
            let e = (0, S.t4)((e) => e.checkoutInvoicePreview),
                a = r.useMemo(
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
