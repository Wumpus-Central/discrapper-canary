n.d(t, { P: () => en });
var l = n(627968),
    i = n(64700),
    r = n(132500),
    a = n(444927),
    s = n(38405),
    o = n(120700),
    u = n(17928),
    c = n(228366),
    d = n(277984),
    p = n(67480),
    m = n(202475),
    h = n(316915);
function C(e) {
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
let E = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: l,
            eligiblePaymentGateways: r,
            hasFetchedPaymentSources: a,
            paymentSources: s,
        } = e,
        { setPaymentSourceId: o, setPendingPaymentSourceId: u } = (0, h.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
        })),
        p = i.useCallback(() => {
            o(
                C({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: l,
                    eligiblePaymentGateways: r,
                    paymentSources: s,
                }),
            );
        }, [t, n, l, r, o]);
    i.useEffect(() => {
        a ? p() : (0, d.$o)();
    }, [a, p]);
    let m = i.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            u(t.id), o(t.id);
        },
        [o, u],
    );
    return (
        i.useEffect(
            () => (
                c.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", m),
                () => {
                    c.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", m);
                }
            ),
            [m],
        ),
        null
    );
};
var f = n(531260);
function A(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: r,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: o,
        } = (0, h.t4)((e) => ({
            startedPaymentFlowWithPaymentSources: e.startedPaymentFlowWithPaymentSources,
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
            captureStartingPaymentFlowWithPaymentSources: e.captureStartingPaymentFlowWithPaymentSources,
        }));
    i.useEffect(() => {
        t && null == r && o(n);
    }, [t, n, o, r]),
        i.useEffect(() => {
            null != l && a(l.planId);
        }, [l, a]);
    let { endsAt: u } = (0, f.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var S = n(800342),
    y = n(328968),
    P = n(202541);
function I() {
    let e = (0, h.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !P.oz.includes(e)), [e]),
        n = (0, u.bG)([y.A], () => t.filter((e) => null == y.A.getForSKU(e) && !y.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, S.QB)(e);
        }, [n]),
        null
    );
}
var _ = n(566980),
    T = n(120992),
    g = n(830382),
    x = n(543767),
    v = n(570221),
    N = n(666646);
function R() {
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
            selectedSkuId: d,
            paymentSourceId: p,
            setPurchasePreviewError: m,
        } = (0, h.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        C = u === _.h.PURCHASING || u === _.h.COMPLETED;
    (0, T.c)({ applicationId: s, skuIDs: o });
    let [E, f] =
        ((e = i.useMemo(
            () => ({
                applicationId: s,
                skuId: d,
                paymentSourceId: p,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: C,
            }),
            [s, d, p, a, c, C],
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
            let r = await (0, g.NY)(i);
            return null != r ? v.A.createFromOTPPreview(r) : null;
        }, [l])),
        (0, x.$n)(e, r, void 0));
    return (
        (0, N.F0)(E, f),
        i.useEffect(() => {
            m(f);
        }, [f, m]),
        null
    );
}
var M = n(166532),
    b = n(883645);
function j(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function O(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function L(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function k(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.YV)(t, n),
        { setRenewalInvoicePreview: a } = (0, h.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function w() {
    let e = (0, b.Ay)((e) => e.step),
        t = i.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: r,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, h.t4)((e) => ({
            setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
            setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
            fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
            fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
        }));
    return (i.useEffect(() => {
        let n = t.current;
        (t.current = e), n === M.pn.REVIEW && e !== M.pn.REVIEW && (a(null), s(null));
    }, [e, a, s]),
    null == n && null == r)
        ? null
        : (null != r && r.type,
          (0, l.jsxs)(l.Fragment, {
              children: [
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(j, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(O, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(L, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(k, { fetchParams: r.params }),
              ],
          }));
}
var D = n(10716),
    U = n(795816),
    G = n(627363),
    F = n(20015),
    H = n(885386),
    B = n(652215);
function Y() {
    let e = (0, h.t4)((e) => e.applicationId),
        { data: t } = (0, G.YY)(e),
        n = H.Q_.useSetting(),
        l = (0, u.bG)([D.A], () => D.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, F.n)(t, B.gfo.EMBEDDED) && n && null == l && (0, U.SE)();
        }, [t, n, l]),
        null
    );
}
var W = n(624210),
    V = n(739508),
    K = n(818348);
class Z {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== K.kM.VIRTUAL_CURRENCY;
    }
    persistedPaymentSourceId(e) {
        let t = e.billing_facet;
        return null == t || null == t.payment_source_id ? null : t.payment_source_id;
    }
    pendingOrderUpdates(e, t) {
        let n = {};
        return (
            null != t.paymentSourceId &&
                this.persistedPaymentSourceId(e) !== t.paymentSourceId &&
                (n.paymentSourceId = t.paymentSourceId),
            Object.keys(n).length > 0 ? n : null
        );
    }
    async syncOrder(e) {
        let { order: t, orderUpdates: n, orderSyncError: l } = e;
        if (null == t || !this.shouldPatchOrder(t) || null != l) return;
        let i = this.pendingOrderUpdates(t, n);
        if (null == i || this.isPatchingRef.current) return;
        let { setOrder: r, setIsOrderSyncing: a, setOrderSyncError: s } = this.checkoutStore.getState();
        (this.isPatchingRef.current = !0), a(!0);
        try {
            let e = await (0, W.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e && (r(e), null != this.pendingOrderUpdates(e, i))) {
                let e = Error("Order patch was not applied");
                (0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, V.gr)(n) || (0, V.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
        } finally {
            (this.isPatchingRef.current = !1), a(!1);
        }
    }
}
function q() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: n,
    } = (0, h.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, h.Q9)(),
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new Z(t, n), [t]),
                { order: r, orderSyncError: a } = (0, h.t4)((e) => ({
                    order: e.order,
                    orderSyncError: e.orderSyncError,
                }));
            (0, i.useEffect)(() => {
                l.syncOrder({ order: r, orderUpdates: e, orderSyncError: a });
            }, [l, r, e, a]);
        })(i.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: n.loadId }), [e, t, n.loadId])),
        null
    );
}
var z = n(83617),
    Q = n(655857);
function $() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: r,
        } = (0, h.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = i.useMemo(() => (0, Q._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, Q.ow)({
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
                    n.length > 0 && !r && (await (0, z.c_)(t, n));
                } catch (e) {
                    if (e.code !== z.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(B.tEg);
        }, [t, u, r, e, s, o, l]),
        null
    );
}
var J = n(741923),
    X = n(504275);
function ee() {
    return (
        !(function () {
            let e = (0, b.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, h.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, M.zT)(e, t, n);
        })(),
        null
    );
}
let et = [
    o.C.PREMIUM_CHECKOUT,
    o.C.GUILD_ROLE_CHECKOUT,
    o.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    o.C.GUILD_BOOST_CHECKOUT,
];
function en(e) {
    var t, n;
    let { checkoutInitParameters: c = X.r, loadId: d, discoverySessionId: f, children: S } = e,
        y = (0, J._5)(),
        P = (0, a.A)(() => {
            let e = y?.id ?? d ?? (0, r.A)();
            return (
                s.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: f, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: _,
            defaultPaymentSourceId: T,
            eligiblePaymentGateways: g,
            hasFetchedPaymentSources: x,
            paymentSources: v,
            hasPaymentSources: N,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l } = e,
                r = (0, u.bG)([p.A], () => p.A.get(t), [t]),
                a = null != r ? r.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: s,
                    paymentSources: o,
                    hasFetchedPaymentSources: c,
                    hasPaymentSources: d,
                } = (0, m.jm)();
            return {
                initialCheckoutPaymentSourceId: i.useMemo(
                    () =>
                        C({
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: s,
                            eligiblePaymentGateways: a,
                            paymentSources: o,
                        }) ?? null,
                    [n, l, s, a, o],
                ),
                defaultPaymentSourceId: s,
                eligiblePaymentGateways: a,
                hasFetchedPaymentSources: c,
                paymentSources: o,
                hasPaymentSources: d,
            };
        })({ skuId: c.skuIds[0], isGift: c.isGift, activeSubscription: c.activeSubscription }),
        [M] = i.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != c.activeSubscription ? c.activeSubscription?.planId : null,
            };
            return (
                x && (e.startedPaymentFlowWithPaymentSources = N),
                (0, h.y$)({
                    checkoutInitParameters: c,
                    startingValues: e,
                    contextMetadata: P,
                    order: y,
                    initialPaymentSourceId: _,
                    initialCurrency: (0, Q.el)({
                        activeSubscription: c.activeSubscription,
                        skuIds: c.skuIds,
                        paymentSourceId: _,
                        isGift: c.isGift,
                    }),
                })
            );
        }),
        b = i.useRef(null != y);
    i.useEffect(() => {
        b.current || null == y || (M.getState().setOrder(y), (b.current = !0));
    }, [y, M]),
        i.useEffect(() => {
            M.getState().setCheckoutInitParameters(c);
        }, [M, c]);
    let j = ((t = c.purchaseType), null != (n = c.unifiedCheckoutFlow) && t === B.VVm.SUBSCRIPTION && et.includes(n)),
        O = c.unifiedCheckoutFlow === o.C.GUILD_ROLE_CHECKOUT,
        L = c.purchaseType === B.VVm.ONE_TIME && c.unifiedCheckoutFlow !== o.C.ORB_CHECKOUT;
    return (0, l.jsxs)(h.Ni, {
        value: M,
        children: [
            (0, l.jsx)(A, { hasFetchedPaymentSources: x, hasPaymentSources: N }),
            (0, l.jsx)(ee, {}),
            (0, l.jsx)(Y, {}),
            (0, l.jsx)($, {}),
            (0, l.jsx)(q, {}),
            (0, l.jsx)(E, {
                isGift: c.isGift,
                activeSubscription: c.activeSubscription,
                defaultPaymentSourceId: T,
                eligiblePaymentGateways: g,
                hasFetchedPaymentSources: x,
                paymentSources: v,
            }),
            j && (0, l.jsx)(w, {}),
            O && (0, l.jsx)(I, {}),
            L && (0, l.jsx)(R, {}),
            S,
        ],
    });
}
