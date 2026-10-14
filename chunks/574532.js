n.d(t, { M: () => eR });
var r = n(477900),
    l = n(582128),
    i = n(688810),
    s = n(795791),
    a = n(669874),
    u = n(202475),
    c = n(883645),
    o = n(601194),
    d = n(504560),
    f = n(132500),
    h = n(444927),
    p = n(38405),
    m = n(120700),
    C = n(17928),
    E = n(73153),
    y = n(277984),
    I = n(67480);
function S(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: r } = t;
    return !!(null != e && e in n && (null == r || 0 === r.length || r.includes(n[e].paymentGateway)));
}
function g(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: r,
        paymentSources: l,
        eligiblePaymentGateways: i,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != i && i.length > 0) {
        if (null != r && r in l && i.includes(l[r].paymentGateway)) return r;
        for (let e in l) {
            let t = l[e];
            if (i.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return r;
}
let _ = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: r,
            eligiblePaymentGateways: i,
            hasFetchedPaymentSources: s,
            paymentSources: a,
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
        h = l.useRef(!1),
        p = l.useRef(!1),
        m = l.useCallback(() => {
            if (!h.current && !p.current) {
                if (S(u, { paymentSources: a, eligiblePaymentGateways: i })) {
                    (c(u), (h.current = !0));
                    return;
                }
                c(
                    g({
                        isGift: t,
                        activeSubscription: n,
                        defaultPaymentSourceId: r,
                        eligiblePaymentGateways: i,
                        paymentSources: a,
                    }),
                );
            }
        }, [t, n, r, i, c, u]);
    l.useEffect(() => {
        s ? m() : (0, y.$o)();
    }, [s, m]);
    let C = l.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((p.current = !0), f(), o(t.id), c(t.id));
        },
        [c, o, f],
    );
    return (
        l.useEffect(
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
var P = n(531260);
function A(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: r,
            startedPaymentFlowWithPaymentSources: i,
            captureStartingPremiumSubscriptionPlanId: s,
            captureStartingFractionalPremiumEndsAt: a,
            captureStartingPaymentFlowWithPaymentSources: u,
        } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    (l.useEffect(() => {
        t && null == i && u(n);
    }, [t, n, u, i]),
        l.useEffect(() => {
            null != r && s(r.planId);
        }, [r, s]));
    let { endsAt: c } = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        l.useEffect(() => {
            null != c && 0 !== c.valueOf() && a(c);
        }, [c, a]),
        null
    );
}
var x = n(800342),
    v = n(328968),
    R = n(202541);
function M() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = l.useMemo(() => e.filter((e) => !R.oz.includes(e)), [e]),
        n = (0, C.bG)([v.A], () => t.filter((e) => null == v.A.getForSKU(e) && !v.A.isFetchingForSKU(e)), [t]);
    return (
        l.useEffect(() => {
            for (let e of n) (0, x.QB)(e);
        }, [n]),
        null
    );
}
var T = n(459357),
    L = n(566980),
    b = n(830382),
    k = n(543767),
    N = n(570221);
function j(e) {
    return JSON.stringify({ ...e, paymentSourceId: void 0, previousTotal: void 0 });
}
var U = n(666646),
    H = n(813873),
    w = n(11939);
function O(e) {
    let { location: t, currency: n } = e,
        { enabled: r } = (0, H.U)({ location: t }),
        { giftCardCurrency: i } = (0, w.h)(),
        {
            applyWalletBalance: s,
            previewApplyWalletBalance: a,
            setApplyWalletBalance: u,
        } = (0, d.t4)((e) => ({
            applyWalletBalance: e.applyWalletBalance,
            previewApplyWalletBalance: e.checkoutInvoicePreview?.applyWalletBalance,
            setApplyWalletBalance: e.setApplyWalletBalance,
        }));
    l.useEffect(() => {
        r && null == s && null != a && u(a);
    }, [r, s, a, u]);
    let c = r && !0 === s;
    return {
        splitPaymentsEnabled: r,
        applyWalletBalance: r ? (s ?? void 0) : void 0,
        currency: c && null != i ? i : n,
    };
}
function F() {
    var e;
    let t,
        n,
        r,
        i,
        s,
        {
            isGift: a,
            applicationId: u,
            purchaseState: c,
            priceOptions: o,
            selectedSkuId: f,
            setPurchasePreviewError: h,
            invoicePreviewRefetchKey: p,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            setPurchasePreviewError: e.setPurchasePreviewError,
            invoicePreviewRefetchKey: e.invoicePreviewRefetchKey,
        })),
        m = c === L.h.PURCHASING || c === L.h.COMPLETED,
        {
            applyWalletBalance: C,
            currency: E,
            splitPaymentsEnabled: y,
        } = O({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher", currency: o.loaded ? o.currency : void 0 }),
        { enabled: I } = (0, T.c)({ location: "HeadlessCheckoutStoreOTPInvoiceFetcher" }),
        S = (0, d.t4)((e) =>
            e.getEffectivePaymentSourceId({
                isSplitPaymentMode: e.getIsSplitPaymentMode({ splitPaymentsEnabled: y, giftCardsEnabled: I }),
            }),
        ),
        [g, _] =
            ((e = l.useMemo(
                () => ({
                    applicationId: u,
                    skuId: f,
                    paymentSourceId: S,
                    isGift: a,
                    currency: E,
                    preventFetch: m,
                    applyWalletBalance: C,
                }),
                [u, f, S, a, E, m, C],
            )),
            (t = (0, l.useRef)(e)),
            (n = (0, l.useRef)(!1)),
            (r = (0, l.useRef)(new WeakMap())),
            (0, l.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (s = (0, l.useCallback)(
                async (e) => {
                    var l;
                    let i = t.current;
                    if (null == i.skuId) return null;
                    let s = {
                            applicationId: i.applicationId,
                            skuId: i.skuId,
                            paymentSourceId: i.paymentSourceId,
                            isGift: i.isGift,
                            currency: i.currency,
                            applyWalletBalance: i.applyWalletBalance ?? void 0,
                        },
                        a = n.current ? s : { ...s, paymentSourceId: null, applyWalletBalance: void 0 };
                    n.current = !0;
                    let u = (function (e, t, n) {
                            if (null == t) return;
                            let r = e.get(t);
                            if (null != r && r.pricingKey === j(n) && r.paymentSourceId !== n.paymentSourceId)
                                return t.total;
                        })(r.current, e, a),
                        c = await (0, b.NY)({ ...a, previousTotal: u }),
                        o = null != c ? N.A.createFromOTPPreview(c) : null;
                    return (
                        (l = r.current),
                        null != o &&
                            null != a.paymentSourceId &&
                            l.set(o, { paymentSourceId: a.paymentSourceId, pricingKey: j(a) }),
                        o
                    );
                },
                [i],
            )),
            (0, k.$n)(e, s, p));
    return (
        (0, U.F)(g, _),
        l.useEffect(() => {
            h(_);
        }, [_, h]),
        null
    );
}
var B = n(120992);
function D() {
    let { applicationId: e, skuIds: t } = (0, d.t4)((e) => ({ applicationId: e.applicationId, skuIds: e.skuIds }));
    return ((0, B.c)({ applicationId: e, skuIDs: t }), null);
}
var G = n(166532);
function K(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [r, i] = (0, k.YV)(t, n),
        { setCheckoutInvoicePreview: s } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        l.useEffect(() => {
            s(r, i);
        }, [r, i, s]),
        null
    );
}
function Z(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [r, i] = (0, k.C8)(t, n),
        { setCheckoutInvoicePreview: s } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        l.useEffect(() => {
            s(r, i);
        }, [r, i, s]),
        null
    );
}
function W(e) {
    let { fetchParams: t, refetchKey: n } = e,
        { applyWalletBalance: r, currency: i } = O({
            location: "HeadlessFetchPremiumGiftCheckoutInvoicePreview",
            currency: t.currency,
        }),
        [s, a] = (0, k.QQ)({ ...t, currency: i, applyWalletBalance: r }, n),
        { setCheckoutInvoicePreview: u } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        l.useEffect(() => {
            u(s, a);
        }, [s, a, u]),
        null
    );
}
function Y(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [r, i] = (0, k.YV)(t, n),
        { setRenewalInvoicePreview: s } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        l.useEffect(() => {
            s(r, i);
        }, [r, i, s]),
        null
    );
}
function q() {
    let e = (0, c.Ay)((e) => e.step),
        t = l.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: i,
            setFetchCheckoutInvoicePreviewRequest: s,
            setFetchRenewalInvoicePreviewRequest: a,
            invoicePreviewRefetchKey: u,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            invoicePreviewRefetchKey: e.invoicePreviewRefetchKey,
        }));
    return (l.useEffect(() => {
        let n = t.current;
        ((t.current = e), n === G.pn.REVIEW && e !== G.pn.REVIEW && (s(null), a(null)));
    }, [e, s, a]),
    null == n && null == i)
        ? null
        : (null != i && i.type,
          (0, r.jsxs)(r.Fragment, {
              children: [
                  null != n &&
                      "subscription_checkout_invoice" === n.type &&
                      (0, r.jsx)(K, { fetchParams: n.params, refetchKey: u }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, r.jsx)(Z, { fetchParams: n.params, refetchKey: u }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, r.jsx)(W, { fetchParams: n.params, refetchKey: u }),
                  null != i && (0, r.jsx)(Y, { fetchParams: i.params, refetchKey: u }),
              ],
          }));
}
var Q = n(428865),
    z = n(624210),
    V = n(739508);
class X {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        ((this.checkoutStore = e), (this.isPatchingRef = t));
    }
    shouldPatchOrder(e) {
        return !(0, Q.L)(e);
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    persistedCurrency(e) {
        let t = e.billing_facet;
        return null == t || null == t.currency ? null : t.currency;
    }
    pendingOrderUpdates(e, t) {
        let n = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (n.paymentSourceId = t.paymentSourceId),
            null != t.currency && this.persistedCurrency(e) !== t.currency && (n.currency = t.currency),
            Object.keys(n).length > 0 ? n : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: n, orderSyncError: r } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != r) return;
        let l = this.pendingOrderUpdates(t, n);
        if (null == l || this.isPatchingRef.current) return;
        let { setOrder: i, setIsOrderSyncing: s, setOrderSyncError: a } = this.checkoutStore.getState();
        ((this.isPatchingRef.current = !0), s(!0));
        try {
            let e = await (0, z.iY)({ orderId: t.id, updates: l, expectedRevision: t.revision });
            if (null != e) {
                i(e);
                let { currency: n, ...r } = l;
                if (null != this.pendingOrderUpdates(e, r)) {
                    let e = Error("Order patch was not applied");
                    ((0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, V.gr)(n) || (0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), a(e));
        } finally {
            ((this.isPatchingRef.current = !1), s(!1));
        }
    }
}
function $() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        selectedCurrency: n,
        contextMetadata: r,
    } = (0, d.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        selectedCurrency: e.get("checkoutSelectedCurrency"),
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, d.Q9)(),
                n = (0, l.useRef)(!1),
                r = (0, l.useMemo)(() => new X(t, n), [t]),
                { order: i, orderSyncError: s } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, l.useEffect)(() => {
                r.syncOrder({ order: i, orderUpdates: e, orderSyncError: s });
            }, [r, i, e, s]);
        })(
            l.useMemo(
                () => ({ paymentSourceId: e, paymentGateway: t, currency: n, loadId: r.loadId }),
                [e, t, n, r.loadId],
            ),
        ),
        null
    );
}
var J = n(991690),
    ee = n(10716),
    et = n(578983),
    en = n(627363),
    er = n(885386);
function el() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, en.YY)(e),
        n = er.Q_.useSetting(),
        r = (0, C.bG)([ee.A], () => ee.A.getFetchState());
    return (
        l.useEffect(() => {
            null != t && t.supportsEmbeddedSurface(J.U.MAIN) && n && null == r && (0, et.S)();
        }, [t, n, r]),
        null
    );
}
function ei() {
    let {
            orderRecord: e,
            orderSyncError: t,
            setOrderSyncError: n,
            setPaymentSourceId: r,
            setCheckoutCurrency: i,
        } = (0, d.t4)((e) => ({
            orderRecord: e.orderRecord,
            orderSyncError: e.orderSyncError,
            setOrderSyncError: e.setOrderSyncError,
            setPaymentSourceId: e.setPaymentSourceId,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        s = null != e ? e.billingFacetRecord : null,
        a = null != s ? s.paymentSourceId : null,
        u = null != s ? s.fiatCurrency : null;
    return (
        l.useEffect(() => {
            null != e && null != t && (r(a), i(u), n(null));
        }, [e, t, a, u, r, i, n]),
        null
    );
}
var es = n(158317);
function ea() {
    let e = (0, d.Q9)(),
        {
            order: t,
            setOrder: n,
            lastOrderUpdateRevision: r,
        } = (0, d.t4)((e) => ({
            order: e.order,
            setOrder: e.setOrder,
            lastOrderUpdateRevision: e.lastOrderUpdateRevision,
        })),
        i = null != t ? t.id : null,
        s = null != t ? t.revision : 0;
    return (
        l.useEffect(() => {
            if (null == i || r <= s) return;
            let t = !1;
            return (
                (0, es.r$)(i).then((r) => {
                    if (t || null == r) return;
                    let l = e.getState().order;
                    (null != l && l.id === r.id && r.revision <= l.revision) || n(r);
                }),
                () => {
                    t = !0;
                }
            );
        }, [i, r, s, n, e]),
        null
    );
}
function eu() {
    let e = (0, d.t4)((e) => e.handleOrderUpdate);
    return (
        l.useEffect(
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
        handlePaymentAuthenticationCancel: r,
        resetPaymentAuthentication: i,
    } = (0, d.t4)((e) => ({
        handlePaymentFailure: e.handlePaymentFailure,
        handlePaymentUpdate: e.handlePaymentUpdate,
        handlePaymentAuthenticationError: e.handlePaymentAuthenticationError,
        handlePaymentAuthenticationCancel: e.handlePaymentAuthenticationCancel,
        resetPaymentAuthentication: e.resetPaymentAuthentication,
    }));
    return (
        l.useEffect(() => {
            for (let t of ec) E.h.subscribe(t, e);
            for (let e of eo) E.h.subscribe(e, t);
            for (let e of ed) E.h.subscribe(e, i);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", r),
                () => {
                    for (let t of ec) E.h.unsubscribe(t, e);
                    for (let e of eo) E.h.unsubscribe(e, t);
                    for (let e of ed) E.h.unsubscribe(e, i);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", r));
                }
            );
        }, [e, t, n, r, i]),
        null
    );
}
var eh = n(83617),
    ep = n(655857),
    em = n(652215);
function eC() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: r,
            excludeSubscriptionPlansBySKU: i,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        s = l.useMemo(() => (0, ep._r)(n), [n]),
        { subscriptionPlanIdForCurrency: a, hasFetchedRelatedSubscriptionPlans: u } = (0, ep.ow)({
            skuIDs: s,
            paymentSourceId: t,
            isGift: r,
        }),
        c = JSON.stringify(s),
        o = l.useRef(s);
    return (
        l.useEffect(() => {
            o.current = s;
        }),
        l.useEffect(() => {
            (async function () {
                let { current: n } = o;
                try {
                    n.length > 0 && !i && (await (0, eh.c_)(t, n));
                } catch (e) {
                    if (e.code !== eh.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(em.tEg);
        }, [t, c, i, e, a, u, r]),
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
    eI = ["USER_PAYMENT_CLIENT_ADD"];
function eS() {
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
        l.useEffect(() => {
            for (let e of eE) E.h.subscribe(e, n);
            for (let t of ey) E.h.subscribe(t, e);
            for (let e of eI) E.h.subscribe(e, t);
            return () => {
                for (let e of eE) E.h.unsubscribe(e, n);
                for (let t of ey) E.h.unsubscribe(t, e);
                for (let e of eI) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var eg = n(741923),
    e_ = n(504275);
function eP() {
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
let eA = [
    m.C.PREMIUM_CHECKOUT,
    m.C.GUILD_ROLE_CHECKOUT,
    m.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    m.C.GUILD_BOOST_CHECKOUT,
    m.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function ex(e) {
    var t, n;
    let { checkoutInitParameters: i = e_.r, loadId: s, discoverySessionId: a, children: c } = e,
        { order: o, isOrderCreationEnabled: E } = (0, eg._5)(),
        y = (0, h.A)(() => {
            let e = o?.id ?? s ?? (0, f.A)();
            return (
                p.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: a, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: P,
            defaultPaymentSourceId: x,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: R,
            paymentSources: T,
            hasPaymentSources: L,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: r, initialPaymentSourceId: i } = e,
                s = (0, C.bG)([I.A], () => I.A.get(t), [t]),
                a = null != s ? s.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: c,
                    paymentSources: o,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: f,
                } = (0, u.j)();
            return {
                initialCheckoutPaymentSourceId: l.useMemo(() => {
                    var e;
                    return S(
                        (e = {
                            isGift: n,
                            activeSubscription: r,
                            defaultPaymentSourceId: c,
                            eligiblePaymentGateways: a,
                            paymentSources: o,
                            initialPaymentSourceId: i,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (g(e) ?? null);
                }, [n, r, c, a, o, i]),
                defaultPaymentSourceId: c,
                eligiblePaymentGateways: a,
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
        [b] = l.useState(() => {
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
                    initialPaymentSourceId: P,
                    initialCurrency: (0, ep.el)({
                        activeSubscription: i.activeSubscription,
                        skuIds: i.skuIds,
                        paymentSourceId: P,
                        isGift: i.isGift,
                    }),
                })
            );
        }),
        k = l.useRef(null != o);
    (l.useEffect(() => {
        k.current || null == o || (b.getState().setOrder(o), (k.current = !0));
    }, [o, b]),
        l.useEffect(() => {
            b.getState().setCheckoutInitParameters(i);
        }, [b, i]));
    let N = ((t = i.purchaseType), null != (n = i.unifiedCheckoutFlow) && t === em.VVm.SUBSCRIPTION && eA.includes(n)),
        j = i.unifiedCheckoutFlow === m.C.GUILD_ROLE_CHECKOUT,
        U = i.purchaseType === em.VVm.ONE_TIME && i.unifiedCheckoutFlow !== m.C.ORB_CHECKOUT,
        H = !E && U;
    return (0, r.jsxs)(d.Ni, {
        value: b,
        children: [
            (0, r.jsx)(A, { hasFetchedPaymentSources: R, hasPaymentSources: L }),
            (0, r.jsx)(eP, {}),
            (0, r.jsx)(ef, {}),
            i.unifiedCheckoutFlow !== m.C.ORB_CHECKOUT && (0, r.jsx)(eS, {}),
            (0, r.jsx)(el, {}),
            (0, r.jsx)(eC, {}),
            (0, r.jsx)($, {}),
            (0, r.jsx)(ei, {}),
            (0, r.jsx)(eu, {}),
            (0, r.jsx)(ea, {}),
            (0, r.jsx)(_, {
                isGift: i.isGift,
                activeSubscription: i.activeSubscription,
                defaultPaymentSourceId: x,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: R,
                paymentSources: T,
                initialPaymentSourceId: i.initialPaymentSourceId,
            }),
            N && (0, r.jsx)(q, {}),
            j && (0, r.jsx)(M, {}),
            U && (0, r.jsx)(D, {}),
            H && (0, r.jsx)(F, {}),
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
            discoverySessionId: a,
            purchaseType: u = em.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...d
        } = e,
        f = JSON.stringify(d.skuIDs),
        h = l.useMemo(() => d.skuIDs, [f]),
        p = (0, s.$w)(),
        m = l.useMemo(
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
                customCheckoutFlow: o ?? p,
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
                p,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, r.jsx)(c.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, r.jsx)(ex, {
            loadId: i,
            discoverySessionId: a,
            checkoutInitParameters: m,
            children: (0, r.jsx)(eM, { ...d, skuIDs: h, purchaseType: u }),
        }),
    });
}
function eM(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: s, children: f } = e,
        { paymentSources: h } = (0, u.j)(),
        {
            contextMetadata: p,
            unifiedCheckoutFlow: m,
            purchaseType: C,
            isGift: E,
            selectedSkuId: y,
            selectedPlanId: I,
            paymentSourceId: S,
            paymentGateway: g,
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
        _ = null != S && null != h[S] ? h[S]?.type : null,
        P = l.useMemo(
            () => ({ payment_source_id: S, payment_gateway: g, payment_source_type: _, checkout_flow: m, is_gift: E }),
            [S, g, _, m, E],
        ),
        A = (0, i.Db)(),
        x = (0, c.BQ)();
    return (0, r.jsx)(o.yv, {
        children: (0, r.jsx)(ev.R, {
            children: (0, r.jsx)(a.j, {
                errorHandlingBehavior: t,
                locationStack: A,
                onErrorReported: n,
                loadId: p.loadId,
                selectedSkuId: y ?? null,
                selectedPlanId: I ?? null,
                isGift: E,
                skuIds: s,
                purchaseType: C,
                checkoutStepsHistory: x,
                additionalAnalyticsData: P,
                children: f,
            }),
        }),
    });
}
