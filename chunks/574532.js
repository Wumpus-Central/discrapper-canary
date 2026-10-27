n.d(t, { M: () => eR });
var l = n(477900),
    r = n(582128),
    i = n(688810),
    a = n(795791),
    s = n(669874),
    u = n(202475),
    c = n(883645),
    o = n(601194),
    d = n(123816),
    f = n(132500),
    h = n(444927),
    m = n(38405),
    p = n(120700),
    C = n(17928),
    E = n(73153),
    y = n(277984),
    _ = n(67480);
function g(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function I(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: l,
        paymentSources: r,
        eligiblePaymentGateways: i,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != i && i.length > 0) {
        if (null != l && l in r && i.includes(r[l].paymentGateway)) return l;
        for (let e in r) {
            let t = r[e];
            if (i.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return l;
}
let S = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: i,
            hasFetchedPaymentSources: a,
            paymentSources: s,
            initialPaymentSourceId: u,
        } = e,
        {
            setPaymentSourceId: c,
            setPendingPaymentSourceId: o,
            setHasAddedPaymentSourceThisSession: f,
        } = (0, d.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        h = r.useRef(!1),
        m = r.useRef(!1),
        p = r.useCallback(() => {
            if (!h.current && !m.current) {
                if (g(u, { paymentSources: s, eligiblePaymentGateways: i })) {
                    (c(u), (h.current = !0));
                    return;
                }
                c(
                    I({
                        isGift: t,
                        activeSubscription: n,
                        defaultPaymentSourceId: l,
                        eligiblePaymentGateways: i,
                        paymentSources: s,
                    }),
                );
            }
        }, [t, n, l, i, c, u]);
    r.useEffect(() => {
        a ? p() : (0, y.$o)();
    }, [a, p]);
    let C = r.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((m.current = !0), f(), o(t.id), c(t.id));
        },
        [c, o, f],
    );
    return (
        r.useEffect(
            () => (
                E.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", C),
                () => {
                    E.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", C);
                }
            ),
            [C],
        ),
        null
    );
};
var A = n(531260);
function x(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: i,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: u,
        } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    (r.useEffect(() => {
        t && null == i && u(n);
    }, [t, n, u, i]),
        r.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]));
    let { endsAt: c } = (0, A.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        r.useEffect(() => {
            null != c && 0 !== c.valueOf() && s(c);
        }, [c, s]),
        null
    );
}
var P = n(800342),
    v = n(328968),
    R = n(202541);
function M() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = r.useMemo(() => e.filter((e) => !R.oz.includes(e)), [e]),
        n = (0, C.bG)([v.A], () => t.filter((e) => null == v.A.getForSKU(e) && !v.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, P.QB)(e);
        }, [n]),
        null
    );
}
var T = n(459357),
    L = n(566980),
    b = n(830382),
    j = n(543767),
    N = n(570221);
function k(e) {
    return JSON.stringify({ ...e, paymentSourceId: void 0, previousTotal: void 0 });
}
var U = n(666646),
    w = n(813873),
    H = n(11939);
function O(e) {
    let { location: t, currency: n } = e,
        { enabled: l } = (0, w.U)({ location: t }),
        { giftCardCurrency: r } = (0, H.h)(),
        { applyWalletBalance: i, previewApplyWalletBalance: a } = (0, d.t4)((e) => ({
            applyWalletBalance: e.applyWalletBalance,
            previewApplyWalletBalance: e.checkoutInvoicePreview?.applyWalletBalance,
        }));
    return {
        splitPaymentsEnabled: l,
        applyWalletBalance: l ? (i ?? void 0) : void 0,
        currency: l && (i ?? a) === !0 && null != r ? r : n,
    };
}
function F() {
    var e;
    let t,
        n,
        l,
        i,
        a,
        {
            isGift: s,
            applicationId: u,
            purchaseState: c,
            priceOptions: o,
            selectedSkuId: f,
            setPurchasePreviewError: h,
            invoicePreviewRefetchKey: m,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            setPurchasePreviewError: e.setPurchasePreviewError,
            invoicePreviewRefetchKey: e.invoicePreviewRefetchKey,
        })),
        p = c === L.h.PURCHASING || c === L.h.COMPLETED,
        {
            applyWalletBalance: C,
            currency: E,
            splitPaymentsEnabled: y,
        } = O({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher", currency: o.loaded ? o.currency : void 0 }),
        { enabled: _ } = (0, T.c)({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher" }),
        g = (0, d.t4)((e) =>
            e.getEffectivePaymentSourceId({
                isSplitPaymentMode: e.getIsSplitPaymentMode({ splitPaymentsEnabled: y, giftCardsEnabled: _ }),
            }),
        ),
        [I, S] =
            ((e = r.useMemo(
                () => ({
                    applicationId: u,
                    skuId: f,
                    paymentSourceId: g,
                    isGift: s,
                    currency: E,
                    preventFetch: p,
                    applyWalletBalance: C,
                }),
                [u, f, g, s, E, p, C],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (l = (0, r.useRef)(new WeakMap())),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (a = (0, r.useCallback)(
                async (e) => {
                    var r;
                    let i = t.current;
                    if (null == i.skuId) return null;
                    let a = {
                            applicationId: i.applicationId,
                            skuId: i.skuId,
                            paymentSourceId: i.paymentSourceId,
                            isGift: i.isGift,
                            currency: i.currency,
                            applyWalletBalance: i.applyWalletBalance ?? void 0,
                        },
                        s = n.current ? a : { ...a, paymentSourceId: null, applyWalletBalance: void 0 };
                    n.current = !0;
                    let u = (function (e, t, n) {
                            if (null == t) return;
                            let l = e.get(t);
                            if (null != l && l.pricingKey === k(n) && l.paymentSourceId !== n.paymentSourceId)
                                return t.total;
                        })(l.current, e, s),
                        c = await (0, b.NY)({ ...s, previousTotal: u }),
                        o = null != c ? N.A.createFromOTPPreview(c) : null;
                    return (
                        (r = l.current),
                        null != o &&
                            null != s.paymentSourceId &&
                            r.set(o, { paymentSourceId: s.paymentSourceId, pricingKey: k(s) }),
                        o
                    );
                },
                [i],
            )),
            (0, j.$n)(e, a, m));
    return (
        (0, U.F)(I, S),
        r.useEffect(() => {
            h(S);
        }, [S, h]),
        null
    );
}
var D = n(120992);
function B() {
    let { applicationId: e, skuIds: t } = (0, d.t4)((e) => ({ applicationId: e.applicationId, skuIds: e.skuIds }));
    return ((0, D.c)({ applicationId: e, skuIDs: t }), null);
}
var G = n(166532);
function Z(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, j.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(l, i);
        }, [l, i, a]),
        null
    );
}
function K(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, j.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            a(l, i);
        }, [l, i, a]),
        null
    );
}
function W(e) {
    let { fetchParams: t, refetchKey: n } = e,
        { applyWalletBalance: l, currency: i } = O({
            location: "HeadlessFetchPremiumGiftCheckoutInvoicePreview",
            currency: t.currency,
        }),
        [a, s] = (0, j.QQ)({ ...t, currency: i, applyWalletBalance: l }, n),
        { setCheckoutInvoicePreview: u } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        r.useEffect(() => {
            u(a, s);
        }, [a, s, u]),
        null
    );
}
function Y(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, i] = (0, j.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        r.useEffect(() => {
            a(l, i);
        }, [l, i, a]),
        null
    );
}
function q() {
    let e = (0, c.Ay)((e) => e.step),
        t = r.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: i,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
            invoicePreviewRefetchKey: u,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            invoicePreviewRefetchKey: e.invoicePreviewRefetchKey,
        }));
    return (r.useEffect(() => {
        let n = t.current;
        ((t.current = e), n === G.pn.REVIEW && e !== G.pn.REVIEW && (a(null), s(null)));
    }, [e, a, s]),
    null == n && null == i)
        ? null
        : (null != i && i.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n &&
                      "subscription_checkout_invoice" === n.type &&
                      (0, l.jsx)(Z, { fetchParams: n.params, refetchKey: u }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(K, { fetchParams: n.params, refetchKey: u }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(W, { fetchParams: n.params, refetchKey: u }),
                  null != i && (0, l.jsx)(Y, { fetchParams: i.params, refetchKey: u }),
              ],
          }));
}
var z = n(428865),
    Q = n(624210),
    V = n(739508);
class X {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        ((this.checkoutStore = e), (this.isPatchingRef = t));
    }
    shouldPatchOrder(e) {
        return !(0, z.L)(e);
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    persistedCurrency(e) {
        let t = e.billing_facet;
        return null == t || null == t.currency ? null : t.currency;
    }
    persistedApplyWalletBalance(e) {
        let t = e.billing_facet;
        return null == t || null == t.apply_wallet_balance ? null : t.apply_wallet_balance;
    }
    pendingOrderUpdates(e, t) {
        let n = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (n.paymentSourceId = t.paymentSourceId),
            null != t.currency && this.persistedCurrency(e) !== t.currency && (n.currency = t.currency),
            null != t.applyWalletBalance &&
                this.persistedApplyWalletBalance(e) !== t.applyWalletBalance &&
                (n.applyWalletBalance = t.applyWalletBalance),
            Object.keys(n).length > 0 ? n : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: n, orderSyncError: l } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != l) return;
        let r = this.pendingOrderUpdates(t, n);
        if (null == r || this.isPatchingRef.current) return;
        let { setOrder: i, setIsOrderSyncing: a, setOrderSyncError: s } = this.checkoutStore.getState();
        ((this.isPatchingRef.current = !0), a(!0));
        try {
            let e = await (0, Q.iY)({ orderId: t.id, updates: r, expectedRevision: t.revision });
            if (null != e) {
                i(e);
                let { currency: n, ...l } = r;
                if (null != this.pendingOrderUpdates(e, l)) {
                    let e = Error("Order patch was not applied");
                    ((0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, V.gr)(n) || (0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
        } finally {
            ((this.isPatchingRef.current = !1), a(!1));
        }
    }
}
function $() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        selectedCurrency: n,
        applyWalletBalance: l,
        contextMetadata: i,
    } = (0, d.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        selectedCurrency: e.get("checkoutSelectedCurrency"),
        applyWalletBalance: e.applyWalletBalance,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, d.Q9)(),
                n = (0, r.useRef)(!1),
                l = (0, r.useMemo)(() => new X(t, n), [t]),
                { order: i, orderSyncError: a } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, r.useEffect)(() => {
                l.syncOrder({ order: i, orderUpdates: e, orderSyncError: a });
            }, [l, i, e, a]);
        })(
            r.useMemo(
                () => ({ paymentSourceId: e, paymentGateway: t, currency: n, applyWalletBalance: l, loadId: i.loadId }),
                [e, t, n, l, i.loadId],
            ),
        ),
        null
    );
}
var J = n(991690),
    ee = n(10716),
    et = n(578983),
    en = n(627363),
    el = n(885386);
function er() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, en.YY)(e),
        n = el.Q_.useSetting(),
        l = (0, C.bG)([ee.A], () => ee.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && t.supportsEmbeddedSurface(J.U.MAIN) && n && null == l && (0, et.S)();
        }, [t, n, l]),
        null
    );
}
function ei() {
    let {
            orderRecord: e,
            orderSyncError: t,
            setOrderSyncError: n,
            setPaymentSourceId: l,
            setCheckoutCurrency: i,
            setApplyWalletBalance: a,
        } = (0, d.t4)((e) => ({
            orderRecord: e.orderRecord,
            orderSyncError: e.orderSyncError,
            setOrderSyncError: e.setOrderSyncError,
            setPaymentSourceId: e.setPaymentSourceId,
            setCheckoutCurrency: e.setCheckoutCurrency,
            setApplyWalletBalance: e.setApplyWalletBalance,
        })),
        s = null != e ? e.billingFacetRecord : null,
        u = null != s ? s.paymentSourceId : null,
        c = null != s ? s.fiatCurrency : null;
    return (
        r.useEffect(() => {
            null != e && null != t && (l(u), i(c), a(null), n(null));
        }, [e, t, u, c, l, i, a, n]),
        null
    );
}
var ea = n(158317);
function es() {
    let e = (0, d.Q9)(),
        {
            order: t,
            setOrder: n,
            lastOrderUpdateRevision: l,
        } = (0, d.t4)((e) => ({
            order: e.order,
            setOrder: e.setOrder,
            lastOrderUpdateRevision: e.lastOrderUpdateRevision,
        })),
        i = null != t ? t.id : null,
        a = null != t ? t.revision : 0;
    return (
        r.useEffect(() => {
            if (null == i || l <= a) return;
            let t = !1;
            return (
                (0, ea.r$)(i).then((l) => {
                    if (t || null == l) return;
                    let r = e.getState().order;
                    (null != r && r.id === l.id && l.revision <= r.revision) || n(l);
                }),
                () => {
                    t = !0;
                }
            );
        }, [i, l, a, n, e]),
        null
    );
}
function eu() {
    let e = (0, d.t4)((e) => e.handleOrderUpdate);
    return (
        r.useEffect(
            () => (
                E.h.subscribe("ORDER_UPDATE", e),
                () => {
                    E.h.unsubscribe("ORDER_UPDATE", e);
                }
            ),
            [e],
        ),
        null
    );
}
let ec = [
        "BILLING_SUBSCRIPTION_UPDATE_FAIL",
        "GIFT_CODE_REDEEM_FAILURE",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "SKU_PURCHASE_FAIL",
    ],
    eo = ["BILLING_PAYMENT_FETCH_SUCCESS", "PAYMENT_UPDATE"],
    ed = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ];
function ef() {
    let {
        handlePaymentFailure: e,
        handlePaymentUpdate: t,
        handlePaymentAuthenticationError: n,
        handlePaymentAuthenticationCancel: l,
        resetPaymentAuthentication: i,
    } = (0, d.t4)((e) => ({
        handlePaymentFailure: e.handlePaymentFailure,
        handlePaymentUpdate: e.handlePaymentUpdate,
        handlePaymentAuthenticationError: e.handlePaymentAuthenticationError,
        handlePaymentAuthenticationCancel: e.handlePaymentAuthenticationCancel,
        resetPaymentAuthentication: e.resetPaymentAuthentication,
    }));
    return (
        r.useEffect(() => {
            for (let t of ec) E.h.subscribe(t, e);
            for (let e of eo) E.h.subscribe(e, t);
            for (let e of ed) E.h.subscribe(e, i);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", l),
                () => {
                    for (let t of ec) E.h.unsubscribe(t, e);
                    for (let e of eo) E.h.unsubscribe(e, t);
                    for (let e of ed) E.h.unsubscribe(e, i);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", l));
                }
            );
        }, [e, t, n, l, i]),
        null
    );
}
var eh = n(83617),
    em = n(655857),
    ep = n(652215);
function eC() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: i,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = r.useMemo(() => (0, em._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: u } = (0, em.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: l,
        }),
        c = JSON.stringify(a),
        o = r.useRef(a);
    return (
        r.useEffect(() => {
            o.current = a;
        }),
        r.useEffect(() => {
            (async function () {
                let { current: n } = o;
                try {
                    n.length > 0 && !i && (await (0, eh.c_)(t, n));
                } catch (e) {
                    if (e.code !== eh.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(ep.tEg);
        }, [t, c, i, e, s, u, l]),
        null
    );
}
let eE = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ],
    ey = ["SKU_PURCHASE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL"],
    e_ = ["USER_PAYMENT_CLIENT_ADD"];
function eg() {
    let {
        handlePaymentFailureForPurchaseTokenAuth: e,
        handlePurchaseTokenAuth: t,
        resetPurchaseTokenState: n,
    } = (0, d.t4)((e) => ({
        purchaseTokenAuthState: e.purchaseTokenAuthState,
        handlePaymentFailureForPurchaseTokenAuth: e.handlePaymentFailureForPurchaseTokenAuth,
        handlePurchaseTokenAuth: e.handlePurchaseTokenAuth,
        resetPurchaseTokenState: e.resetPurchaseTokenState,
    }));
    return (
        r.useEffect(() => {
            for (let e of eE) E.h.subscribe(e, n);
            for (let t of ey) E.h.subscribe(t, e);
            for (let e of e_) E.h.subscribe(e, t);
            return () => {
                for (let e of eE) E.h.unsubscribe(e, n);
                for (let t of ey) E.h.unsubscribe(t, e);
                for (let e of e_) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var eI = n(741923),
    eS = n(504275);
function eA() {
    return (
        !(function () {
            let e = (0, c.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, G.zT)(e, t, n);
        })(),
        null
    );
}
let ex = [
    p.C.PREMIUM_CHECKOUT,
    p.C.GUILD_ROLE_CHECKOUT,
    p.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    p.C.GUILD_BOOST_CHECKOUT,
    p.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function eP(e) {
    var t, n;
    let { checkoutInitParameters: i = eS.r, loadId: a, discoverySessionId: s, children: c } = e,
        { order: o, isOrderCreationEnabled: E } = (0, eI._5)(),
        y = (0, h.A)(() => {
            let e = o?.id ?? a ?? (0, f.A)();
            return (
                m.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: s, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: A,
            defaultPaymentSourceId: P,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: R,
            paymentSources: T,
            hasPaymentSources: L,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: i } = e,
                a = (0, C.bG)([_.A], () => _.A.get(t), [t]),
                s = null != a ? a.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: c,
                    paymentSources: o,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: f,
                } = (0, u.j)();
            return {
                initialCheckoutPaymentSourceId: r.useMemo(() => {
                    var e;
                    return g(
                        (e = {
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: c,
                            eligiblePaymentGateways: s,
                            paymentSources: o,
                            initialPaymentSourceId: i,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (I(e) ?? null);
                }, [n, l, c, s, o, i]),
                defaultPaymentSourceId: c,
                eligiblePaymentGateways: s,
                hasFetchedPaymentSources: d,
                paymentSources: o,
                hasPaymentSources: f,
            };
        })({
            skuId: i.skuIds[0],
            isGift: i.isGift,
            activeSubscription: i.activeSubscription,
            initialPaymentSourceId: i.initialPaymentSourceId,
        }),
        [b] = r.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != i.activeSubscription ? i.activeSubscription?.planId : null,
            };
            return (
                R && (e.startedPaymentFlowWithPaymentSources = L),
                (0, d.y$)({
                    checkoutInitParameters: i,
                    startingValues: e,
                    contextMetadata: y,
                    order: o,
                    initialPaymentSourceId: A,
                    initialCurrency: (0, em.el)({
                        activeSubscription: i.activeSubscription,
                        skuIds: i.skuIds,
                        paymentSourceId: A,
                        isGift: i.isGift,
                    }),
                })
            );
        }),
        j = r.useRef(null != o);
    (r.useEffect(() => {
        j.current || null == o || (b.getState().setOrder(o), (j.current = !0));
    }, [o, b]),
        r.useEffect(() => {
            b.getState().setCheckoutInitParameters(i);
        }, [b, i]));
    let N = ((t = i.purchaseType), null != (n = i.unifiedCheckoutFlow) && t === ep.VVm.SUBSCRIPTION && ex.includes(n)),
        k = i.unifiedCheckoutFlow === p.C.GUILD_ROLE_CHECKOUT,
        U = i.purchaseType === ep.VVm.ONE_TIME && i.unifiedCheckoutFlow !== p.C.ORB_CHECKOUT,
        w = !E && U;
    return (0, l.jsxs)(d.Ni, {
        value: b,
        children: [
            (0, l.jsx)(x, { hasFetchedPaymentSources: R, hasPaymentSources: L }),
            (0, l.jsx)(eA, {}),
            (0, l.jsx)(ef, {}),
            i.unifiedCheckoutFlow !== p.C.ORB_CHECKOUT && (0, l.jsx)(eg, {}),
            (0, l.jsx)(er, {}),
            (0, l.jsx)(eC, {}),
            (0, l.jsx)($, {}),
            (0, l.jsx)(ei, {}),
            (0, l.jsx)(eu, {}),
            (0, l.jsx)(es, {}),
            (0, l.jsx)(S, {
                isGift: i.isGift,
                activeSubscription: i.activeSubscription,
                defaultPaymentSourceId: P,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: R,
                paymentSources: T,
                initialPaymentSourceId: i.initialPaymentSourceId,
            }),
            N && (0, l.jsx)(q, {}),
            k && (0, l.jsx)(M, {}),
            U && (0, l.jsx)(B, {}),
            w && (0, l.jsx)(F, {}),
            c,
        ],
    });
}
var ev = n(783327);
function eR(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: i,
            discoverySessionId: s,
            purchaseType: u = ep.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...d
        } = e,
        f = JSON.stringify(d.skuIDs),
        h = r.useMemo(() => d.skuIDs, [f]),
        m = (0, a.$w)(),
        p = r.useMemo(
            () => ({
                skuIds: h,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                initialPaymentSourceId: d.initialPaymentSourceId ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: u,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: o ?? m,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? R.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                h,
                u,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.initialPaymentSourceId,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                o,
                m,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(c.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(eP, {
            loadId: i,
            discoverySessionId: s,
            checkoutInitParameters: p,
            children: (0, l.jsx)(eM, { ...d, skuIDs: h, purchaseType: u }),
        }),
    });
}
function eM(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: a, children: f } = e,
        { paymentSources: h } = (0, u.j)(),
        {
            contextMetadata: m,
            unifiedCheckoutFlow: p,
            purchaseType: C,
            isGift: E,
            selectedSkuId: y,
            selectedPlanId: _,
            paymentSourceId: g,
            paymentGateway: I,
        } = (0, d.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            unifiedCheckoutFlow: e.unifiedCheckoutFlow,
            purchaseType: e.purchaseType,
            isGift: e.isGift,
            selectedSkuId: e.selectedSkuId,
            selectedPlanId: e.selectedPlanId,
            paymentSourceId: e.paymentSourceId,
            paymentGateway: e.paymentGateway,
        })),
        S = null != g && null != h[g] ? h[g]?.type : null,
        A = r.useMemo(
            () => ({ payment_source_id: g, payment_gateway: I, payment_source_type: S, checkout_flow: p, is_gift: E }),
            [g, I, S, p, E],
        ),
        x = (0, i.Db)(),
        P = (0, c.BQ)();
    return (0, l.jsx)(o.yv, {
        children: (0, l.jsx)(ev.R, {
            children: (0, l.jsx)(s.j, {
                errorHandlingBehavior: t,
                locationStack: x,
                onErrorReported: n,
                loadId: m.loadId,
                selectedSkuId: y ?? null,
                selectedPlanId: _ ?? null,
                isGift: E,
                skuIds: a,
                purchaseType: C,
                checkoutStepsHistory: P,
                additionalAnalyticsData: A,
                children: f,
            }),
        }),
    });
}
