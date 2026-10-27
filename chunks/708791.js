t.d(a, { E1: () => w, Zr: () => U, rI: () => Z });
var l = t(477900),
    n = t(582128),
    r = t(643909),
    s = t(503698),
    i = t.n(s),
    h = t(702841),
    u = t(858899),
    c = t(834730),
    o = t(391048),
    d = t(913122),
    m = t(793574),
    A = t(277984),
    p = t(942340),
    E = t(626584),
    P = t(97352),
    C = t(67480),
    M = t(739508),
    y = t(927578),
    g = t(580630),
    T = t(71532),
    x = t(120700),
    I = t(822764),
    _ = t(56763),
    v = t(123816),
    R = t(783327),
    f = t(705822),
    L = t(652215),
    S = t(202541),
    H = t(818348),
    k = t(583741),
    D = t(105292),
    N = t(969933);
let O = new E.A("StripeExpressCheckout.tsx"),
    b = { [S.WT.DAY]: "day", [S.WT.MONTH]: "month", [S.WT.YEAR]: "year" };
function j(e) {
    let { type: a, makePurchase: t, isSubmitting: s, setIsSubmitting: c, className: p } = e,
        E = (0, r.useElements)(),
        g = (0, R.S)(),
        L = n.useRef(a),
        [S, j] = n.useState(null),
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
                O.error("ExpressCheckoutElement failed to load: ", a);
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
        if (q) return () => G(f.i.INITIALIZING);
    }, [q, G]);
    let Q = n.useCallback(
            (e) => {
                (c(e), G(e ? f.i.SUBMITTING : f.i.READY));
            },
            [c, G],
        ),
        ee = n.useCallback(() => {
            (j(null), (w.current = null), Q(!1));
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
                    (Q(!0), W(null), (0, o.ET)(), (Z.current = n));
                    let { error: e } = await l.submit();
                    if (null != e) {
                        (O.error("elements.submit failed: ", e), r(e));
                        return;
                    }
                    let { paymentMethod: a, error: s } = await t.createPaymentMethod({ elements: l });
                    if (null == a) {
                        (O.error("createPaymentMethod failed to return payment method: ", {
                            paymentMethod: a,
                            error: s,
                        }),
                            r(s));
                        return;
                    }
                    let { billingAddressInfo: i } = (0, T.uK)(a),
                        h = a.id,
                        u = await (0, A.IC)({ stripePaymentMethodId: h, billingAddress: i });
                    ((0, I.lO)({ loadId: z, paymentSource: u }, m.A.EXPRESS_CHECKOUT), j(u));
                } catch (e) {
                    (O.error("handleExpressCheckoutConfirm failed: ", e), r(e instanceof d.Ey ? e : void 0));
                }
            },
            [Q, j, ee, W, z],
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
                    c = a.getWalletAmount(),
                    o = a.getAmountDue(),
                    d = a.hasGiftCardBalanceApplied ? [{ name: D.intl.string(k.default.bdF0KJ), amount: -c }] : [],
                    m = n > 0 ? [{ name: D.intl.string(D.t.jiRvC7), amount: n }] : [];
                function A(e) {
                    return o > 0 ? [{ name: e, amount: u }, ...d, ...m] : [];
                }
                if (r === x.C.PREMIUM_CHECKOUT || r === x.C.INBOUND_PREMIUM_PROMOTION_CHECKOUT) {
                    let e = (function (e) {
                        let a = e.invoiceItems.find((e) => null != e.subscriptionPlanId);
                        if (null == a) return null;
                        let t = P.A.get(a.subscriptionPlanId);
                        if (null == t) return null;
                        let l = b[t.interval],
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
function w(e) {
    let a = (0, R.S)(),
        { elementsAppearance: t } = (0, p.E)(),
        { checkoutInvoicePreview: s, isPurchaseDisabled: i } = (0, v.t4)((e) => ({
            checkoutInvoicePreview: e.checkoutInvoicePreview,
            isPurchaseDisabled: e.getIsPurchaseDisabled(),
        })),
        h = e.disablePurchase || i,
        { expressCheckoutType: u, makePurchase: c } = n.useMemo(
            () => ({ expressCheckoutType: h ? "vault_only" : e.type, makePurchase: e.makePurchase ?? L.tEg }),
            [e.makePurchase, e.type, h],
        ),
        o = n.useMemo(() => {
            if (null == s) return null;
            let e = s.getAmountDue();
            return {
                paymentMethodCreation: "manual",
                ...("vault_only" === u || e <= 0 ? { mode: "setup" } : { mode: "payment", amount: e }),
                currency: String(s.currency).toLowerCase(),
                appearance: { ...t, variables: { ...t.variables, borderRadius: "8px" } },
            };
        }, [s, t, u]);
    return null == a || null == o
        ? null
        : (0, l.jsx)(r.Elements, {
              stripe: a,
              options: o,
              children: (0, l.jsx)(j, { ...e, type: u, makePurchase: c, disablePurchase: h }),
          });
}
function Z() {
    let e = (0, v.t4)((e) => e.checkoutInvoicePreview),
        a = n.useMemo(
            () =>
                null != e && e.hasGiftCardBalanceApplied
                    ? D.intl.format(k.default.BMVyQO, { amount: (0, g.$g)(e.getAmountDue(), e.currency) })
                    : D.intl.string(k.default.gVM8va),
            [e],
        );
    return (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", className: N.OJ, children: a });
}
function U(e) {
    let { stripeExpressCheckoutComponent: a, fallbackComponent: t } = e,
        { shouldExpressCheckoutBeVisible: n } = (0, v.t4)((e) => ({
            shouldExpressCheckoutBeVisible: e.getExpressCheckoutVisibilityState().shouldExpressCheckoutBeVisible,
        }));
    return (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("div", { className: i()(N.n2, { [N.lX]: !n }), children: a }), !n && t],
    });
}
