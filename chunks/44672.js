n.d(t, { P: () => el });
var l = n(477900),
    i = n(582128),
    r = n(132500),
    a = n(444927),
    s = n(38405),
    o = n(120700),
    u = n(17928),
    c = n(228366),
    d = n(277984),
    p = n(67480),
    m = n(202475),
    C = n(316915);
function h(e, t) {
    let { paymentSources: n, eligiblePaymentGateways: l } = t;
    return !!(null != e && e in n && (null == l || 0 === l.length || l.includes(n[e].paymentGateway)));
}
function E(e) {
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
let f = (e) => {
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
            setPendingPaymentSourceId: p,
            setHasAddedPaymentSourceThisSession: m,
        } = (0, C.t4)((e) => ({
            setPaymentSourceId: e.setPaymentSourceId,
            setPendingPaymentSourceId: e.setPendingPaymentSourceId,
            setHasAddedPaymentSourceThisSession: e.setHasAddedPaymentSourceThisSession,
        })),
        f = i.useRef(!1),
        A = i.useRef(!1),
        S = i.useCallback(() => {
            if (!f.current && !A.current) {
                if (h(o, { paymentSources: s, eligiblePaymentGateways: r })) {
                    u(o), (f.current = !0);
                    return;
                }
                u(
                    E({
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
        a ? S() : (0, d.$o)();
    }, [a, S]);
    let y = i.useCallback(
        (e) => {
            let { paymentSource: t } = e;
            (A.current = !0), m(), p(t.id), u(t.id);
        },
        [u, p, m],
    );
    return (
        i.useEffect(
            () => (
                c.h.subscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", y),
                () => {
                    c.h.unsubscribe("BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", y);
                }
            ),
            [y],
        ),
        null
    );
};
var A = n(531260);
function S(e) {
    let { hasFetchedPaymentSources: t, hasPaymentSources: n } = e,
        {
            activeSubscription: l,
            startedPaymentFlowWithPaymentSources: r,
            captureStartingPremiumSubscriptionPlanId: a,
            captureStartingFractionalPremiumEndsAt: s,
            captureStartingPaymentFlowWithPaymentSources: o,
        } = (0, C.t4)((e) => ({
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
    let { endsAt: u } = (0, A.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        i.useEffect(() => {
            null != u && 0 !== u.valueOf() && s(u);
        }, [u, s]),
        null
    );
}
var y = n(800342),
    P = n(328968),
    I = n(202541);
function _() {
    let e = (0, C.t4)((e) => e.skuIds),
        t = i.useMemo(() => e.filter((e) => !I.oz.includes(e)), [e]),
        n = (0, u.bG)([P.A], () => t.filter((e) => null == P.A.getForSKU(e) && !P.A.isFetchingForSKU(e)), [t]);
    return (
        i.useEffect(() => {
            for (let e of n) (0, y.QB)(e);
        }, [n]),
        null
    );
}
var T = n(566980),
    g = n(120992),
    v = n(830382),
    x = n(543767),
    N = n(570221),
    R = n(666646);
function b() {
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
        } = (0, C.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        h = u === T.h.PURCHASING || u === T.h.COMPLETED;
    (0, g.c)({ applicationId: s, skuIDs: o });
    let [E, f] =
        ((e = i.useMemo(
            () => ({
                applicationId: s,
                skuId: d,
                paymentSourceId: p,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: h,
            }),
            [s, d, p, a, c, h],
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
            let r = await (0, v.NY)(i);
            return null != r ? N.A.createFromOTPPreview(r) : null;
        }, [l])),
        (0, x.$n)(e, r, void 0));
    return (
        (0, R.F0)(E, f),
        i.useEffect(() => {
            m(f);
        }, [f, m]),
        null
    );
}
var M = n(166532),
    j = n(883645);
function O(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.YV)(t, n),
        { setCheckoutInvoicePreview: a } = (0, C.t4)((e) => ({
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
        [l, r] = (0, x.C8)(t, n),
        { setCheckoutInvoicePreview: a } = (0, C.t4)((e) => ({
            setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
        }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function w(e) {
    let { fetchParams: t, refetchKey: n } = e,
        [l, r] = (0, x.QQ)(t, n),
        { setCheckoutInvoicePreview: a } = (0, C.t4)((e) => ({
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
        { setRenewalInvoicePreview: a } = (0, C.t4)((e) => ({ setRenewalInvoicePreview: e.setRenewalInvoicePreview }));
    return (
        i.useEffect(() => {
            a(l, r);
        }, [l, r, a]),
        null
    );
}
function U() {
    let e = (0, j.Ay)((e) => e.step),
        t = i.useRef(e),
        {
            fetchCheckoutInvoicePreviewRequest: n,
            fetchRenewalInvoicePreviewRequest: r,
            setFetchCheckoutInvoicePreviewRequest: a,
            setFetchRenewalInvoicePreviewRequest: s,
        } = (0, C.t4)((e) => ({
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
                  null != n && "subscription_checkout_invoice" === n.type && (0, l.jsx)(O, { fetchParams: n.params }),
                  null != n &&
                      "subscription_checkout_invoice_get_request" === n.type &&
                      (0, l.jsx)(L, { fetchParams: n.params }),
                  null != n &&
                      "premium_one_time_gift_purchase_invoice" === n.type &&
                      (0, l.jsx)(w, { fetchParams: n.params }),
                  null != r && (0, l.jsx)(k, { fetchParams: r.params }),
              ],
          }));
}
var D = n(10716),
    G = n(795816),
    F = n(627363),
    H = n(20015),
    B = n(885386),
    Y = n(652215);
function W() {
    let e = (0, C.t4)((e) => e.applicationId),
        { data: t } = (0, F.YY)(e),
        n = B.Q_.useSetting(),
        l = (0, u.bG)([D.A], () => D.A.getFetchState());
    return (
        i.useEffect(() => {
            null != t && (0, H.n)(t, Y.gfo.EMBEDDED) && n && null == l && (0, G.SE)();
        }, [t, n, l]),
        null
    );
}
var V = n(624210),
    K = n(739508),
    Z = n(818348);
class q {
    checkoutStore;
    isPatchingRef;
    constructor(e, t) {
        (this.checkoutStore = e), (this.isPatchingRef = t);
    }
    shouldPatchOrder(e) {
        let t = e.billing_facet;
        return null == t || t.payment_gateway !== Z.kM.VIRTUAL_CURRENCY;
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
            let e = await (0, V.iY)({ orderId: t.id, updates: i, expectedRevision: t.revision });
            if (null != e && (r(e), null != this.pendingOrderUpdates(e, i))) {
                let e = Error("Order patch was not applied");
                (0, K.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
            }
        } catch (n) {
            let e = n instanceof Error ? n : Error(String(n));
            (0, K.gr)(n) || (0, K.pM)(e, { tags: { source: "order_sync" }, extra: { orderId: t.id } }), s(e);
        } finally {
            (this.isPatchingRef.current = !1), a(!1);
        }
    }
}
function z() {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: n,
    } = (0, C.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = (0, C.Q9)(),
                n = (0, i.useRef)(!1),
                l = (0, i.useMemo)(() => new q(t, n), [t]),
                { order: r, orderSyncError: a } = (0, C.t4)((e) => ({
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
var Q = n(83617),
    $ = n(655857);
function J() {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: l,
            excludeSubscriptionPlansBySKU: r,
        } = (0, C.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = i.useMemo(() => (0, $._r)(n), [n]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: o } = (0, $.ow)({
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
                    n.length > 0 && !r && (await (0, Q.c_)(t, n));
                } catch (e) {
                    if (e.code !== Q.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })().catch(Y.tEg);
        }, [t, u, r, e, s, o, l]),
        null
    );
}
var X = n(741923),
    ee = n(504275);
function et() {
    return (
        !(function () {
            let e = (0, j.s2)(),
                { purchaseState: t, setPurchaseState: n } = (0, C.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, M.zT)(e, t, n);
        })(),
        null
    );
}
let en = [
    o.C.PREMIUM_CHECKOUT,
    o.C.GUILD_ROLE_CHECKOUT,
    o.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    o.C.GUILD_BOOST_CHECKOUT,
    o.C.GAME_SERVER_SUBSCRIPTION_CHECKOUT,
];
function el(e) {
    var t, n;
    let { checkoutInitParameters: c = ee.r, loadId: d, discoverySessionId: A, children: y } = e,
        P = (0, X._5)(),
        I = (0, a.A)(() => {
            let e = P?.id ?? d ?? (0, r.A)();
            return (
                s.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: A, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: T,
            defaultPaymentSourceId: g,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: x,
            paymentSources: N,
            hasPaymentSources: R,
        } = (function (e) {
            let { skuId: t, isGift: n, activeSubscription: l, initialPaymentSourceId: r } = e,
                a = (0, u.bG)([p.A], () => p.A.get(t), [t]),
                s = null != a ? a.eligiblePaymentGateways : null,
                {
                    defaultPaymentSourceId: o,
                    paymentSources: c,
                    hasFetchedPaymentSources: d,
                    hasPaymentSources: C,
                } = (0, m.jm)();
            return {
                initialCheckoutPaymentSourceId: i.useMemo(() => {
                    var e;
                    return h(
                        (e = {
                            isGift: n,
                            activeSubscription: l,
                            defaultPaymentSourceId: o,
                            eligiblePaymentGateways: s,
                            paymentSources: c,
                            initialPaymentSourceId: r,
                        }).initialPaymentSourceId,
                        e,
                    )
                        ? (e.initialPaymentSourceId ?? null)
                        : (E(e) ?? null);
                }, [n, l, o, s, c, r]),
                defaultPaymentSourceId: o,
                eligiblePaymentGateways: s,
                hasFetchedPaymentSources: d,
                paymentSources: c,
                hasPaymentSources: C,
            };
        })({
            skuId: c.skuIds[0],
            isGift: c.isGift,
            activeSubscription: c.activeSubscription,
            initialPaymentSourceId: c.initialPaymentSourceId,
        }),
        [M] = i.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: null,
                startingPremiumSubscriptionPlanId: null != c.activeSubscription ? c.activeSubscription?.planId : null,
            };
            return (
                x && (e.startedPaymentFlowWithPaymentSources = R),
                (0, C.y$)({
                    checkoutInitParameters: c,
                    startingValues: e,
                    contextMetadata: I,
                    order: P,
                    initialPaymentSourceId: T,
                    initialCurrency: (0, $.el)({
                        activeSubscription: c.activeSubscription,
                        skuIds: c.skuIds,
                        paymentSourceId: T,
                        isGift: c.isGift,
                    }),
                })
            );
        }),
        j = i.useRef(null != P);
    i.useEffect(() => {
        j.current || null == P || (M.getState().setOrder(P), (j.current = !0));
    }, [P, M]),
        i.useEffect(() => {
            M.getState().setCheckoutInitParameters(c);
        }, [M, c]);
    let O = ((t = c.purchaseType), null != (n = c.unifiedCheckoutFlow) && t === Y.VVm.SUBSCRIPTION && en.includes(n)),
        L = c.unifiedCheckoutFlow === o.C.GUILD_ROLE_CHECKOUT,
        w = c.purchaseType === Y.VVm.ONE_TIME && c.unifiedCheckoutFlow !== o.C.ORB_CHECKOUT;
    return (0, l.jsxs)(C.Ni, {
        value: M,
        children: [
            (0, l.jsx)(S, { hasFetchedPaymentSources: x, hasPaymentSources: R }),
            (0, l.jsx)(et, {}),
            (0, l.jsx)(W, {}),
            (0, l.jsx)(J, {}),
            (0, l.jsx)(z, {}),
            (0, l.jsx)(f, {
                isGift: c.isGift,
                activeSubscription: c.activeSubscription,
                defaultPaymentSourceId: g,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: x,
                paymentSources: N,
                initialPaymentSourceId: c.initialPaymentSourceId,
            }),
            O && (0, l.jsx)(U, {}),
            L && (0, l.jsx)(_, {}),
            w && (0, l.jsx)(b, {}),
            y,
        ],
    });
}
