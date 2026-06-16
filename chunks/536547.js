"use strict";
n.d(t, { P: () => Q });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(444927),
    o = n(38405),
    l = n(120700),
    u = n(426398),
    c = n(655857),
    d = n(166532),
    _ = n(615310),
    h = n(211159),
    f = n(753390);
let p = (e) => {
    let {
            isGift: t,
            activeSubscription: n,
            defaultPaymentSourceId: i,
            eligiblePaymentGateways: s,
            hasFetchedPaymentSources: a,
            paymentSources: o,
        } = e,
        l = (0, h.t4)((e) => e.setPaymentSourceId),
        c = r.useCallback(() => {
            l(
                (0, u._m)({
                    isGift: t,
                    activeSubscription: n,
                    defaultPaymentSourceId: i,
                    eligiblePaymentGateways: s,
                    paymentSources: o,
                }),
            );
        }, [t, n, i, s, l]);
    return (
        r.useEffect(() => {
            a ? c() : (0, f.$o)();
        }, [a, c]),
        null
    );
};
var E = n(531260);
let m = () => {
    let {
        activeSubscription: e,
        captureStartingPremiumSubscriptionPlanId: t,
        captureStartingFractionalPremiumEndsAt: n,
    } = (0, h.t4)((e) => ({
        activeSubscription: e.activeSubscription,
        captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
        captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
    }));
    r.useEffect(() => {
        null != e && t(e.planId);
    }, [e, t]);
    let { endsAt: i } = (0, E.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        r.useEffect(() => {
            null != i && 0 !== i.valueOf() && n(i);
        }, [i, n]),
        null
    );
};
var g = n(17928),
    A = n(800342),
    I = n(328968),
    T = n(788868);
let S = () => {
    let e = (0, h.t4)((e) => e.skuIds),
        t = r.useMemo(() => e.filter((e) => !T.oz.includes(e)), [e]),
        n = (0, g.bG)([I.A], () => t.filter((e) => null == I.A.getForSKU(e) && !I.A.isFetchingForSKU(e)), [t]);
    return (
        r.useEffect(() => {
            for (let e of n) (0, A.QB)(e);
        }, [n]),
        null
    );
};
var y = n(566980),
    C = n(120992),
    N = n(830382),
    v = n(543767),
    R = n(570221),
    O = n(666646);
let b = () => {
        var e;
        let t,
            n,
            i,
            s,
            {
                isGift: a,
                applicationId: o,
                skuIds: l,
                purchaseState: u,
                priceOptions: c,
                selectedSkuId: d,
                paymentSourceId: _,
                setPurchasePreviewError: f,
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
            p = u === y.h.PURCHASING || u === y.h.COMPLETED;
        (0, C.c)({ applicationId: o, skuIDs: l });
        let [E, m] =
            ((e = r.useMemo(
                () => ({
                    applicationId: o,
                    skuId: d,
                    paymentSourceId: _,
                    isGift: a,
                    currency: c.loaded ? c.currency : void 0,
                    preventFetch: p,
                }),
                [o, d, _, a, c, p],
            )),
            (t = (0, r.useRef)(e)),
            (n = (0, r.useRef)(!1)),
            (0, r.useEffect)(() => {
                t.current = e;
            }),
            (i = JSON.stringify(e)),
            (s = (0, r.useCallback)(async () => {
                let e = t.current;
                if (null == e.skuId) return null;
                let i = {
                        applicationId: e.applicationId,
                        skuId: e.skuId,
                        paymentSourceId: e.paymentSourceId,
                        isGift: e.isGift,
                        currency: e.currency,
                    },
                    r = n.current ? i : { ...i, paymentSourceId: null };
                n.current = !0;
                let s = await (0, N.NY)(r);
                return null != s ? R.A.createFromOTPPreview(s) : null;
            }, [i])),
            (0, v.$n)(e, s, void 0));
        return (
            (0, O.F0)(E, m),
            r.useEffect(() => {
                f(m);
            }, [m, f]),
            null
        );
    },
    D = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, v.YV)(t, n),
            { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    L = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, v.C8)(t, n),
            { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    w = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, v.QQ)(t, n),
            { setCheckoutInvoicePreview: a } = (0, h.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    M = (e) => {
        let { fetchParams: t, refetchKey: n } = e,
            [i, s] = (0, v.YV)(t, n),
            { setRenewalInvoicePreview: a } = (0, h.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            r.useEffect(() => {
                a(i, s);
            }, [i, s, a]),
            null
        );
    },
    P = () => {
        let e = (0, _.Ay)((e) => e.step),
            t = r.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: n,
                fetchRenewalInvoicePreviewRequest: s,
                setFetchCheckoutInvoicePreviewRequest: a,
                setFetchRenewalInvoicePreviewRequest: o,
            } = (0, h.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (r.useEffect(() => {
            let n = t.current;
            (t.current = e), n === d.pn.REVIEW && e !== d.pn.REVIEW && (a(null), o(null));
        }, [e, a, o]),
        null == n && null == s)
            ? null
            : (null != s && s.type,
              (0, i.jsxs)(i.Fragment, {
                  children: [
                      null != n && "premium_checkout_invoice" === n.type && (0, i.jsx)(D, { fetchParams: n.params }),
                      null != n &&
                          "premium_checkout_invoice_get_request" === n.type &&
                          (0, i.jsx)(L, { fetchParams: n.params }),
                      null != n &&
                          "premium_one_time_gift_purchase_invoice" === n.type &&
                          (0, i.jsx)(w, { fetchParams: n.params }),
                      null != s && (0, i.jsx)(M, { fetchParams: s.params }),
                  ],
              }));
    };
var x = n(10716),
    k = n(795816),
    U = n(627363),
    G = n(20015),
    F = n(885386),
    V = n(652215);
let B = () => {
    let e = (0, h.t4)((e) => e.applicationId),
        { data: t } = (0, U.YY)(e),
        n = F.Q_.useSetting(),
        i = (0, g.bG)([x.A], () => x.A.getFetchState());
    return (
        r.useEffect(() => {
            null != t && (0, G.n)(t, V.gfo.EMBEDDED) && n && null == i && (0, k.SE)();
        }, [t, n, i]),
        null
    );
};
var j = n(624210),
    H = n(573582),
    Y = n(818348);
let W = () => {
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
            let t = H.A.useConfig({ location: "payment_modal" }).enabled,
                { order: n, setOrder: i } = (0, h.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, r.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let r = e.paymentSourceId;
                async function s() {
                    if (null == n || n?.billing_facet?.payment_gateway === Y.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, j.iY)({ orderId: n.id, updates: e });
                    null != t && i(t);
                }
                n?.billing_facet?.payment_source_id !== r && s();
            }, [n, i, e.paymentSourceId, t]);
        })(r.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: n.loadId }), [e, t, n.loadId])),
        null
    );
};
var K = n(83617);
let $ = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: n,
            isGift: i,
            excludeSubscriptionPlansBySKU: s,
        } = (0, h.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = r.useMemo(() => (0, c._r)(n), [n]),
        { subscriptionPlanIdForCurrency: o, hasFetchedRelatedSubscriptionPlans: l } = (0, c.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: i,
        }),
        u = JSON.stringify(a),
        d = r.useRef(a);
    return (
        r.useEffect(() => {
            d.current = a;
        }),
        r.useEffect(() => {
            (async () => {
                let { current: n } = d;
                try {
                    n.length > 0 && !s && (await (0, K.c_)(t, n));
                } catch (e) {
                    if (e.code !== K.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, u, s, e, o, l, i]),
        null
    );
};
var z = n(679374),
    q = n(504275);
function Z() {
    return (
        !(function () {
            let e = (0, _.bB)(),
                { purchaseState: t, setPurchaseState: n } = (0, h.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, d.zT)(e, t, n);
        })(),
        null
    );
}
let X = [
    l.C.PREMIUM_CHECKOUT,
    l.C.GUILD_ROLE_CHECKOUT,
    l.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT,
    l.C.GUILD_BOOST_CHECKOUT,
];
function Q(e) {
    var t, n;
    let { checkoutInitParameters: d = q.r, loadId: _, discoverySessionId: f, children: E } = e,
        g = (0, z._5)(),
        A = (0, a.A)(() => {
            let e = g?.id ?? _ ?? (0, s.A)();
            return (
                o.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: f, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: I,
            defaultPaymentSourceId: T,
            eligiblePaymentGateways: y,
            hasFetchedPaymentSources: C,
            paymentSources: N,
            hasPaymentSources: v,
        } = (0, u.mz)({ skuId: d.skuIds[0], isGift: d.isGift, activeSubscription: d.activeSubscription }),
        [R] = r.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: v,
                startingPremiumSubscriptionPlanId: null != d.activeSubscription ? d.activeSubscription?.planId : null,
            };
            return (0, h.y$)({
                checkoutInitParameters: d,
                startingValues: e,
                contextMetadata: A,
                order: g,
                initialPaymentSourceId: I,
                initialCurrency: (0, c.el)({
                    activeSubscription: d.activeSubscription,
                    skuIds: d.skuIds,
                    paymentSourceId: I,
                    isGift: d.isGift,
                }),
            });
        }),
        O = r.useRef(null != g);
    r.useEffect(() => {
        O.current || null == g || (R.setState({ order: g }), (O.current = !0));
    }, [g, R]),
        r.useEffect(() => {
            R.getState().setCheckoutInitParameters(d);
        }, [R, d]);
    let D = ((t = d.purchaseType), null != (n = d.unifiedCheckoutFlow) && t === V.VVm.SUBSCRIPTION && X.includes(n)),
        L = d.unifiedCheckoutFlow === l.C.GUILD_ROLE_CHECKOUT,
        w = d.purchaseType === V.VVm.ONE_TIME && d.unifiedCheckoutFlow !== l.C.ORB_CHECKOUT;
    return (0, i.jsxs)(h.Ni, {
        value: R,
        children: [
            (0, i.jsx)(m, {}),
            (0, i.jsx)(Z, {}),
            (0, i.jsx)(B, {}),
            (0, i.jsx)($, {}),
            (0, i.jsx)(W, {}),
            (0, i.jsx)(p, {
                isGift: d.isGift,
                activeSubscription: d.activeSubscription,
                defaultPaymentSourceId: T,
                eligiblePaymentGateways: y,
                hasFetchedPaymentSources: C,
                paymentSources: N,
            }),
            D && (0, i.jsx)(P, {}),
            L && (0, i.jsx)(S, {}),
            w && (0, i.jsx)(b, {}),
            E,
        ],
    });
}
