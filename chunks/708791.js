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
    A = t(942340),
    E = t(626584),
    y = t(97352),
    C = t(67480),
    P = t(949192),
    g = t(448645),
    x = t(580630),
    f = t(558740),
    T = t(120700),
    _ = t(822764),
    M = t(56763),
    v = t(316363),
    S = t(783327),
    I = t(705822),
    N = t(652215),
    R = t(682901),
    j = t(818348),
    L = t(379912),
    k = t(792996),
    b = t(969933);
let O = new E.A("StripeExpressCheckout.tsx"),
    H = { [R.WT.DAY]: "day", [R.WT.MONTH]: "month", [R.WT.YEAR]: "year" };
function D(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: c, className: A } = e,
        E = (0, r.useElements)(),
        x = (0, S.S)(),
        N = n.useRef(a),
        R = n.useRef(null),
        [D, w] = n.useState(null),
        U = n.useRef(null),
        G = n.useRef(null),
        {
            checkoutInvoicePreview: Z,
            checkoutPaymentSources: Y,
            expressCheckoutLoading: F,
            setExpressCheckoutStatus: B,
            markExpressCheckoutReady: K,
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
                    K(l));
            },
            [K, J, z, a],
        ),
        q = n.useCallback(
            (e) => {
                let { error: a } = e;
                O.error("ExpressCheckoutElement failed to load: ", a);
                let t = (0, _.PD)(
                    {
                        loadId: J,
                        checkoutFlow: z,
                        error: a,
                        errorMessage: a.message ?? "Express Checkout Element failed to load",
                    },
                    m.A.EXPRESS_CHECKOUT,
                );
                if ((0, P.Sz)(a)) {
                    let e = Error(t.error_message);
                    ((e.name = `ExpressCheckoutLoadError[${a.type}]`),
                        (0, P.pM)(e, {
                            tags: { source: "express_checkout", stripe_error_type: a.type },
                            extra: t,
                            fingerprint: ["express_checkout_load_error", a.type],
                        }));
                }
                B(I.i.UNAVAILABLE);
            },
            [J, z, B],
        ),
        Q = null != x && null != E && null != Z && W;
    n.useEffect(() => {
        if (Q) return () => B(I.i.INITIALIZING);
    }, [Q, B]);
    let ee = n.useCallback(
            (e) => {
                (c(e), B(e ? I.i.SUBMITTING : I.i.READY));
            },
            [c, B],
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
            let e = N.current;
            if (null == D || null == Y || null == Z) return;
            let a = Y.find((e) => e.id === D.id);
            if (null != a) {
                if (U.current === D.id) return;
                U.current = D.id;
                let t = null != a.relocationCountry,
                    l = Z.getAmountDue(),
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
                    i = { loadId: J, checkoutFlow: z, expressCheckoutType: e, expressPaymentType: R.current };
                (n &&
                    (0, _.ik)(
                        { ...i, displayedAmount: G.current, updatedAmount: l, currency: Z.currency },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                    (0, _.Y2)({ ...i, paymentSource: D, autoPurchaseSkipReason: r }, m.A.EXPRESS_CHECKOUT),
                    s
                        ? ((0, o.P0)({
                              text: n ? k.intl.string(L.default.cxwOJN) : k.intl.string(L.default["302Ck/"]),
                              variant: "success",
                          }),
                          ee(!1))
                        : et(D));
            }
        }, [D, Y, Z, et, ee, J, z]),
        en = n.useCallback(
            async (e, a) => {
                let { stripe: t, elements: l, currentAmountDue: n } = a;
                function r(a) {
                    let t = a instanceof d.Ey || (0, P.Lt)(a) ? a : void 0,
                        l = (function (e) {
                            if (null == e) return k.intl.string(L.default["6zCzw1"]);
                            let a = e.message;
                            return null != a && "" !== a ? a : k.intl.string(L.default["6zCzw1"]);
                        })(t),
                        n = t instanceof d.Ey ? t : null,
                        r = (0, _.c)(
                            {
                                loadId: J,
                                paymentSourceType: j.he.CARD,
                                error: t,
                                errorMessage: l,
                                expressPaymentType: e.expressPaymentType,
                            },
                            m.A.EXPRESS_CHECKOUT,
                        );
                    if ((0, P.Sz)(a)) {
                        let e = (0, P.Lt)(a) ? a.type : null,
                            t =
                                null != e
                                    ? e
                                    : null == n
                                      ? "unknown"
                                      : n.code > 0
                                        ? String(n.code)
                                        : Object.keys(n.fields).length > 0
                                          ? "field_error"
                                          : null != n.status
                                            ? `http_${n.status}`
                                            : "unknown",
                            l = Error(r.error_message);
                        ((l.name = `ExpressCheckoutAddPaymentMethodError[${t}]`),
                            (0, P.pM)(l, {
                                tags: {
                                    source: "express_checkout",
                                    error_key: t,
                                    ...(null != n && null != n.status ? { http_status: String(n.status) } : {}),
                                },
                                extra: { ...r, raw_error: a },
                                fingerprint: ["express_checkout_add_payment_method_error", t],
                            }));
                    }
                    (ea(), V(n ?? new d.Ey(l)), e.paymentFailed({ reason: "invalid_payment_data", message: l }));
                }
                try {
                    (ee(!0), V(null), (0, h.ET)(), (G.current = n));
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
                    let { billingAddressInfo: u } = (0, f.uK)(s),
                        o = s.id,
                        c = await (0, p.IC)({ stripePaymentMethodId: o, billingAddress: u });
                    ((0, _.lO)(
                        { loadId: J, paymentSource: c, expressPaymentType: e.expressPaymentType },
                        m.A.EXPRESS_CHECKOUT,
                    ),
                        w(c));
                } catch (e) {
                    (O.error("handleExpressCheckoutConfirm failed: ", e), r(e));
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
                s = (0, u.bG)(
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
                let { subtotal: l, tax: n, total: i, taxInclusive: u } = a,
                    o = u ? i - n : l,
                    c = a.getWalletAmount(),
                    h = a.getAmountDue(),
                    d = a.hasGiftCardBalanceApplied ? [{ name: k.intl.string(L.default.bdF0KJ), amount: -c }] : [],
                    m = n > 0 ? [{ name: k.intl.string(k.t.jiRvC7), amount: n }] : [];
                function p(e) {
                    return h > 0 ? [{ name: e, amount: o }, ...d, ...m] : [];
                }
                if (r === T.C.PREMIUM_CHECKOUT || r === T.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = y.A.get(a.subscriptionPlanId);
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
        es = n.useCallback(
            (e) => {
                ((N.current = a),
                    (R.current = e.expressPaymentType),
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
                { loadId: J, checkoutFlow: z, expressCheckoutType: N.current, expressPaymentType: R.current },
                m.A.EXPRESS_CHECKOUT,
            ),
                ea());
        }, [ea, J, z]);
    n.useEffect(() => {
        null != D && el();
    }, [D, el]);
    let eu = n.useMemo(() => {
        if (null == Z || null == er) return {};
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
    }, [Z, er]);
    if (null == x || null == E || null == Z || !Q) return null;
    let eo = s || F;
    return (0, l.jsxs)("div", {
        className: i()(b.Pr, A),
        children: [
            eo && (0, l.jsx)(M.I, {}),
            (0, l.jsx)("div", {
                className: i()({ [b.lX]: eo }),
                children: (0, l.jsx)(r.ExpressCheckoutElement, {
                    onLoadError: q,
                    onReady: $,
                    onClick: es,
                    onConfirm: (e) => en(e, { stripe: x, elements: E, currentAmountDue: Z.getAmountDue() }),
                    onCancel: ei,
                    options: eu,
                }),
            }),
        ],
    });
}
function w() {
    return (0, l.jsxs)("div", {
        className: b.ps,
        children: [
            (0, l.jsx)("span", { className: b.ao, "aria-hidden": "true" }),
            (0, l.jsx)(c.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                children: k.intl.string(L.default.N4EAHm),
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
                { elementsAppearance: t } = (0, A.E)(),
                s = (0, f.PU)(),
                { checkoutInvoicePreview: i, isPurchaseDisabled: u } = (0, v.t4)((e) => ({
                    checkoutInvoicePreview: e.checkoutInvoicePreview,
                    isPurchaseDisabled: e.getIsPurchaseDisabled(),
                })),
                o = e.disablePurchase || u,
                { expressCheckoutType: c, makePurchase: h } = n.useMemo(
                    () => ({ expressCheckoutType: o ? "vault_only" : e.type, makePurchase: e.makePurchase ?? N.tEg }),
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
                      children: (0, l.jsx)(D, { ...e, type: c, makePurchase: h, disablePurchase: o }),
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
                        className: i()(b.n2, { [b.lX]: !r }),
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
                            ? k.intl.format(L.default.BMVyQO, { amount: (0, x.$g)(e.getAmountDue(), e.currency) })
                            : k.intl.string(L.default.gVM8va),
                    [e],
                );
            return (0, l.jsx)(c.E, { variant: "body-sm/normal", color: "text-muted", className: b.OJ, children: a });
        },
    },
);
