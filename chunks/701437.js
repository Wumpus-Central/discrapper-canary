n.d(t, { M: () => eg });
var l = n(477900),
    i = n(582128),
    r = n(688810),
    a = n(795791),
    s = n(669874),
    o = n(202475),
    u = n(883645),
    c = n(601194),
    d = n(263532),
    m = n(132500),
    p = n(444927),
    h = n(38405),
    C = n(120700),
    f = n(17928),
    E = n(228366),
    S = n(277984),
    y = n(67480);
function I(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function g(e) {
    let {
        isGift: t,
        activeSubscription: n,
        defaultPaymentSourceId: l,
        paymentSources: i,
        eligiblePaymentGateways: r,
    } = e;
    if (!t && n?.paymentSourceId != null) return n.paymentSourceId;
    if (null != r && r.length > 0) {
        if (null != l && l in i && r.includes(i[l].paymentGateway)) return l;
        for (let e in i) {
            let t = i[e];
            if (r.includes(t.paymentGateway)) return e;
        }
        return null;
    }
    return l;
}
let A = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: r,
            hasFetchedPaymentSources: a,
            paymentSources: s,
            initialPaymentSourceId: o,
        } = e,
        {
            setPaymentSourceId: u,
            setPendingPaymentSourceId: c,
            setHasAddedPaymentSourceThisSession: m,
        } = (0, d.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        p = i.useRef(!1),
        h = i.useRef(!1),
        C = i.useCallback(() => {
            if (!p.current && !h.current) {
                if (I(o, { paymentSources: s, eligiblePaymentGateways: r })) {
                    (u(o), (p.current = !0));
                    return;
                }
                u(
                    g({
                        isGift: t,
                        activeSubscription: n,
                        defaultPaymentSourceId: l,
                        eligiblePaymentGateways: r,
                        paymentSources: s,
                    }),
                );
            }
        }, [t, n, l, r, u, o]);
    i.useEffect(() => {
        a ? C() : (0, S.$o)();
    }, [a, C]);
    let f = i.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            ((h.current = !0), m(), c(t.id), u(t.id));
        },
        [u, c, m],
    );
    return (
        i.useEffect(
            () => (
                E.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", f),
                () => {
                    E.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", f);
                }
            ),
            [f],
        ),
        null
    );
};
var P = n(531260);
function v(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: r,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: o,
        } = (0, d.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    (i.useEffect(() => {
        t && null == r && o(n);
    }, [t, n, o, r]),
        i.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]));
    let { endsAt: u } = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var x = n(800342),
    _ = n(328968),
    T = n(202541);
function N() {
    let e = (0, d.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !T.oz.includes(e)), [e]),
        n = (0, f.bG)([_.A], () => t.filter((e) => null == _.A.getForSKU(e) && !_.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, x.QB)(e);
        }, [n]),
        null
    );
}
var b = n(566980),
    j = n(120992),
    R = n(830382),
    M = n(543767),
    O = n(570221),
    L = n(666646);
function k() {
    var e;
    let t,
        n,
        l,
        r,
        {
            isGift: a,
            applicationId: s,
            skuIds: o,
            purchaseState: u,
            priceOptions: c,
            selectedSkuId: m,
            paymentSourceId: p,
            setPurchasePreviewError: h,
        } = (0, d.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        C = u === b.h.PURCHASING || u === b.h.COMPLETED;
    (0, j.c)({ applicationId: s, skuIDs: o });
    let [f, E] =
        ((e = i.useMemo(
            () => ({
                applicationId: s,
                skuId: m,
                paymentSourceId: p,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: C,
            }),
            [s, m, p, a, c, C],
        )),
        (t = (0, i.useRef)(e)),
        (n = (0, i.useRef)(!1)),
        (0, i.useEffect)(() => {
            t.current = e;
        }),
        (l = JSON.stringify(e)),
        (r = (0, i.useCallback)(async () => {
            let e = t.current;
            if (null == e.skuId) return null;
            let l = {
                    applicationId: e.applicationId,
                    skuId: e.skuId,
                    paymentSourceId: e.paymentSourceId,
                    isGift: e.isGift,
                    currency: e.currency,
                },
                i = n.current ? l : { ...l, paymentSourceId: null };
            n.current = !0;
            let r = await (0, R.NY)(i);
            return null != r ? O.A.createFromOTPPreview(r) : null;
        }, [l])),
        (0, M.$n)(e, r, void 0));
    return (
        (0, L.F)(f, E),
        i.useEffect(() => {
            h(E);
        }, [E, h]),
        null
    );
}
var w = n(166532);
function U(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function D(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function G(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, d.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function F(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, M.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, d.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function B() {
    let e = (0, u.Ay)((e) => e.step),
        t = i.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: r,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, d.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (i.useEffect(() => {
        let n = t.current;
        ((t.current = e), n === w.pn.REVIEW && e !== w.pn.REVIEW && (a(null), s(null)));
    }, [e, a, s]),
    null == n && null == r)
        ? null
        : (null != r && r.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(U, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(D, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(G, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(F, { fetchParams: r.params }),
              ],
          }));
}
var H = n(818348),
    W = n(624210),
    Y = n(739508);
class V {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        ((this.checkoutStore = e), (this.isPatchingRef = t));
    }
    shouldPatchOrder(e) {
        return null == e || null == e.billing_facet || e.billing_facet.payment_gateway !== H.kM.VIRTUAL_CURRENCY;
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
        let { order: t, orderUpdates: n, orderSyncError: l } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != l) return;
        let i = this.pendingOrderUpdates(t, n);
        if (null == i || this.isPatchingRef.current) return;
        let { setOrder: r, setIsOrderSyncing: a, setOrderSyncError: s } = this.checkoutStore.getState();
        ((this.isPatchingRef.current = !0), a(!0));
        try {
            let e = await (0, W.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e) {
                r(e);
                let { currency: n, ...l } = i;
                if (null != this.pendingOrderUpdates(e, l)) {
                    let e = Error("Order patch was not applied");
                    ((0, Y.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
                }
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            ((0, Y.gr)(n) || (0, Y.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e));
        } finally {
            ((this.isPatchingRef.current = !1), a(!1));
        }
    }
}
function K() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        selectedCurrency: n,
        contextMetadata: l,
    } = (0, d.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        selectedCurrency: e.get("checkoutSelectedCurrency"),
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, d.Q9)(),
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new V(t, n), [t]),
                { order: r, orderSyncError: a } = (0, d.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, i.useEffect)(() => {
                l.syncOrder({ order: r, orderUpdates: e, orderSyncError: a });
            }, [l, r, e, a]);
        })(
            i.useMemo(
                () => ({ paymentSourceId: e, paymentGateway: t, currency: n, loadId: l.loadId }),
                [e, t, n, l.loadId],
            ),
        ),
        null
    );
}
var Z = n(10716),
    q = n(795816),
    z = n(627363),
    Q = n(20015),
    $ = n(885386),
    J = n(652215);
function X() {
    let e = (0, d.t4)((e) => e.applicationId),
        { data: t } = (0, z.YY)(e),
        n = $.Q_.useSetting(),
        l = (0, f.bG)([Z.A], () => Z.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, Q.n)(t, J.gfo.EMBEDDED) && n && null == l && (0, q.SE)();
        }, [t, n, l]),
        null
    );
}
function ee() {
    let {
            orderRecord: e,
            orderSyncError: t,
            setOrderSyncError: n,
            setPaymentSourceId: l,
            setCheckoutCurrency: r,
        } = (0, d.t4)((e) => ({
            orderRecord: e.orderRecord,
            orderSyncError: e.orderSyncError,
            setOrderSyncError: e.setOrderSyncError,
            setPaymentSourceId: e.setPaymentSourceId,
            setCheckoutCurrency: e.setCheckoutCurrency,
        })),
        a = null != e ? e.billingFacetRecord : null,
        s = null != a ? a.paymentSourceId : null,
        o = null != a ? a.fiatCurrency : null;
    return (
        i.useEffect(() => {
            null != e && null != t && (l(s), r(o), n(null));
        }, [e, t, s, o, l, r, n]),
        null
    );
}
var et = n(158317);
function en() {
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
        r = null != t ? t.id : null,
        a = null != t ? t.revision : 0;
    return (
        i.useEffect(() => {
            if (null == r || l <= a) return;
            let t = !1;
            return (
                (0, et.r$)(r).then((l) => {
                    if (t || null == l) return;
                    let i = e.getState().order;
                    (null != i && i.id === l.id && l.revision <= i.revision) || n(l);
                }),
                () => {
                    t = !0;
                }
            );
        }, [r, l, a, n, e]),
        null
    );
}
function el() {
    let e = (0, d.t4)((e) => e.handleOrderUpdate);
    return (
        i.useEffect(
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
let ei = [
        "BILLING_SUBSCRIPTION_UPDATE_FAIL",
        "GIFT_CODE_REDEEM_FAILURE",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "SKU_PURCHASE_FAIL",
    ],
    er = ["BILLING_PAYMENT_FETCH_SUCCESS", "PAYMENT_UPDATE"],
    ea = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ];
function es() {
    let {
        handlePaymentFailure: e,
        handlePaymentUpdate: t,
        handlePaymentAuthenticationError: n,
        handlePaymentAuthenticationCancel: l,
        resetPaymentAuthentication: r,
    } = (0, d.t4)((e) => ({
        handlePaymentFailure: e.handlePaymentFailure,
        handlePaymentUpdate: e.handlePaymentUpdate,
        handlePaymentAuthenticationError: e.handlePaymentAuthenticationError,
        handlePaymentAuthenticationCancel: e.handlePaymentAuthenticationCancel,
        resetPaymentAuthentication: e.resetPaymentAuthentication,
    }));
    return (
        i.useEffect(() => {
            for (let t of ei) E.h.subscribe(t, e);
            for (let e of er) E.h.subscribe(e, t);
            for (let e of ea) E.h.subscribe(e, r);
            return (
                E.h.subscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                E.h.subscribe("PAYMENT_AUTHENTICATION_CANCEL", l),
                () => {
                    for (let t of ei) E.h.unsubscribe(t, e);
                    for (let e of er) E.h.unsubscribe(e, t);
                    for (let e of ea) E.h.unsubscribe(e, r);
                    (E.h.unsubscribe("PAYMENT_AUTHENTICATION_ERROR", n),
                        E.h.unsubscribe("PAYMENT_AUTHENTICATION_CANCEL", l));
                }
            );
        }, [e, t, n, l, r]),
        null
    );
}
var eo = n(83617),
    eu = n(655857);
function ec() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: r,
        } = (0, d.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = i.useMemo(() => (0, eu._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, eu.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: l,
        }),
        u = JSON.stringify(a),
        c = i.useRef(a);
    return (
        i.useEffect(() => {
            c.current = a;
        }),
        i.useEffect(() => {
            (async function () {
                let { current: n } = c;
                try {
                    n.length > 0 && !r && (await (0, eo.c_)(t, n));
                } catch (e) {
                    if (e.code !== eo.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(J.tEg);
        }, [t, u, r, e, s, o, l]),
        null
    );
}
let ed = [
        "BILLING_SUBSCRIPTION_UPDATE_START",
        "PAYMENT_AUTHENTICATION_CLEAR_ERROR",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_SUBSCRIBE_START",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
    ],
    em = ["SKU_PURCHASE_FAIL", "PREMIUM_PAYMENT_SUBSCRIBE_FAIL"],
    ep = ["USER_PAYMENT_CLIENT_ADD"];
function eh() {
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
        i.useEffect(() => {
            for (let e of ed) E.h.subscribe(e, n);
            for (let t of em) E.h.subscribe(t, e);
            for (let e of ep) E.h.subscribe(e, t);
            return () => {
                for (let e of ed) E.h.unsubscribe(e, n);
                for (let t of em) E.h.unsubscribe(t, e);
                for (let e of ep) E.h.unsubscribe(e, t);
            };
        }, [n, e, t]),
        null
    );
}
var eC = n(741923),
    ef = n(504275);
function eE() {
    return (
        !(function () {
            let e = (0, u.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, d.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, w.zT)(e, t, n);
        })(),
        null
    );
}
let eS = [
    C.C.PREMIUM_CHECKOUT,
    C.C.GUILD_ROLE_CHECKOUT,
    C.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    C.C.GUILD_BOOST_CHECKOUT,
    C.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function ey(e) {
    var t, n;
    let { checkoutInitParameters: r = ef.r, loadId: a, discoverySessionId: s, children: u } = e,
        c = (0, eC._5)(),
        E = (0, p.A)(() => {
            let e = c?.id ?? a ?? (0, m.A)();
            return (
                h.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: s, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: S,
            defaultPaymentSourceId: P,
            eligiblePaymentGateways: x,
            hasFetchedPaymentSources: _,
            paymentSources: T,
            hasPaymentSources: b,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: r } = e,
                a = (0, f.bG)([y.A], () => y.A.get(t), [t]),
                s = null != a ? a.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: u,
                    paymentSources: c,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: m,
                } = (0, o.j)();
            return {
                initialCheckoutPaymentSourceId: i.useMemo(() => {
                    var e;
                    return I(
                        (e = {
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: u,
                            eligiblePaymentGateways: s,
                            paymentSources: c,
                            initialPaymentSourceId: r,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (g(e) ?? null);
                }, [n, l, u, s, c, r]),
                defaultPaymentSourceId: u,
                eligiblePaymentGateways: s,
                hasFetchedPaymentSources: d,
                paymentSources: c,
                hasPaymentSources: m,
            };
        })({
            skuId: r.skuIds[0],
            isGift: r.isGift,
            activeSubscription: r.activeSubscription,
            initialPaymentSourceId: r.initialPaymentSourceId,
        }),
        [j] = i.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != r.activeSubscription ? r.activeSubscription?.planId : null,
            };
            return (
                _ && (e.startedPaymentFlowWithPaymentSources = b),
                (0, d.y$)({
                    checkoutInitParameters: r,
                    startingValues: e,
                    contextMetadata: E,
                    order: c,
                    initialPaymentSourceId: S,
                    initialCurrency: (0, eu.el)({
                        activeSubscription: r.activeSubscription,
                        skuIds: r.skuIds,
                        paymentSourceId: S,
                        isGift: r.isGift,
                    }),
                })
            );
        }),
        R = i.useRef(null != c);
    (i.useEffect(() => {
        R.current || null == c || (j.getState().setOrder(c), (R.current = !0));
    }, [c, j]),
        i.useEffect(() => {
            j.getState().setCheckoutInitParameters(r);
        }, [j, r]));
    let M = ((t = r.purchaseType), null != (n = r.unifiedCheckoutFlow) && t === J.VVm.SUBSCRIPTION && eS.includes(n)),
        O = r.unifiedCheckoutFlow === C.C.GUILD_ROLE_CHECKOUT,
        L = r.purchaseType === J.VVm.ONE_TIME && r.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT;
    return (0, l.jsxs)(d.Ni, {
        value: j,
        children: [
            (0, l.jsx)(v, { hasFetchedPaymentSources: _, hasPaymentSources: b }),
            (0, l.jsx)(eE, {}),
            (0, l.jsx)(es, {}),
            r.unifiedCheckoutFlow !== C.C.ORB_CHECKOUT && (0, l.jsx)(eh, {}),
            (0, l.jsx)(X, {}),
            (0, l.jsx)(ec, {}),
            (0, l.jsx)(K, {}),
            (0, l.jsx)(ee, {}),
            (0, l.jsx)(el, {}),
            (0, l.jsx)(en, {}),
            (0, l.jsx)(A, {
                isGift: r.isGift,
                activeSubscription: r.activeSubscription,
                defaultPaymentSourceId: P,
                eligiblePaymentGateways: x,
                hasFetchedPaymentSources: _,
                paymentSources: T,
                initialPaymentSourceId: r.initialPaymentSourceId,
            }),
            M && (0, l.jsx)(B, {}),
            O && (0, l.jsx)(N, {}),
            L && (0, l.jsx)(k, {}),
            u,
        ],
    });
}
var eI = n(783327);
function eg(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: r,
            discoverySessionId: s,
            purchaseType: o = J.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        m = JSON.stringify(d.skuIDs),
        p = i.useMemo(() => d.skuIDs, [m]),
        h = (0, a.$w)(),
        C = i.useMemo(
            () => ({
                skuIds: p,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                initialPaymentSourceId: d.initialPaymentSourceId ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? h,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? T.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                p,
                o,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.initialPaymentSourceId,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                c,
                h,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(u.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(ey, {
            loadId: r,
            discoverySessionId: s,
            checkoutInitParameters: C,
            children: (0, l.jsx)(eA, { ...d, skuIDs: p, purchaseType: o }),
        }),
    });
}
function eA(e) {
    let { errorHandlingBehavior: t = "close-and-alert", onErrorReported: n, skuIDs: a, children: m } = e,
        { paymentSources: p } = (0, o.j)(),
        {
            contextMetadata: h,
            unifiedCheckoutFlow: C,
            purchaseType: f,
            isGift: E,
            selectedSkuId: S,
            selectedPlanId: y,
            paymentSourceId: I,
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
        A = null != I && null != p[I] ? p[I]?.type : null,
        P = i.useMemo(
            () => ({ payment_source_id: I, payment_gateway: g, payment_source_type: A, checkout_flow: C, is_gift: E }),
            [I, g, A, C, E],
        ),
        v = (0, r.Db)(),
        x = (0, u.BQ)();
    return (0, l.jsx)(c.yv, {
        children: (0, l.jsx)(eI.R, {
            children: (0, l.jsx)(s.j, {
                errorHandlingBehavior: t,
                locationStack: v,
                onErrorReported: n,
                loadId: h.loadId,
                selectedSkuId: S ?? null,
                selectedPlanId: y ?? null,
                isGift: E,
                skuIds: a,
                purchaseType: f,
                checkoutStepsHistory: x,
                additionalAnalyticsData: P,
                children: m,
            }),
        }),
    });
}
