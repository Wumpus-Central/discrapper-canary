r.d(t, { P: () => z });
var n = r(627968),
    l = r(64700),
    u = r(835245),
    a = r(444927),
    i = r(38405),
    s = r(120700),
    c = r(426398),
    o = r(655857),
    d = r(166532),
    p = r(615310),
    f = r(571878),
    h = r(753390);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: u,
            hasFetchedPaymentSources: a,
            paymentSources: i,
        } = e,
        s = (0, f.t4)((e) => e.setPaymentSourceId),
        o = l.useCallback(() => {
            s(
                (0, c._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: u,
                    paymentSources: i,
                }),
            );
        }, [t, r, n, u, s]);
    return (
        l.useEffect(() => {
            a ? o() : (0, h.$o)();
        }, [a, o]),
        null
    );
};
var y = r(566980),
    I = r(120992),
    v = r(830382),
    x = r(543767),
    S = r(570221),
    E = r(666646);
let C = () => {
    var e;
    let t,
        r,
        n,
        u,
        {
            isGift: a,
            applicationId: i,
            skuIds: s,
            purchaseState: c,
            priceOptions: o,
            selectedSkuId: d,
            paymentSourceId: p,
            setPurchasePreviewError: h,
        } = (0, f.t4)((e) => ({
            purchaseState: e.purchaseState,
            applicationId: e.applicationId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            priceOptions: e.checkoutPriceOptions,
            selectedSkuId: e.selectedSkuId,
            paymentSourceId: e.paymentSourceId,
            setPurchasePreviewError: e.setPurchasePreviewError,
        })),
        m = c === y.h.PURCHASING || c === y.h.COMPLETED;
    (0, I.c)({ applicationId: i, skuIDs: s });
    let [C, P] =
        ((e = l.useMemo(
            () => ({
                applicationId: i,
                skuId: d,
                paymentSourceId: p,
                isGift: a,
                currency: o.loaded ? o.currency : void 0,
                preventFetch: m,
            }),
            [i, d, p, a, o, m],
        )),
        (t = (0, l.useRef)(e)),
        (r = (0, l.useRef)(!1)),
        (0, l.useEffect)(() => {
            t.current = e;
        }),
        (n = JSON.stringify(e)),
        (u = (0, l.useCallback)(async () => {
            let e = t.current;
            if (null == e.skuId) return null;
            let n = {
                    applicationId: e.applicationId,
                    skuId: e.skuId,
                    paymentSourceId: e.paymentSourceId,
                    isGift: e.isGift,
                    currency: e.currency,
                },
                l = r.current ? n : { ...n, paymentSourceId: null };
            r.current = !0;
            let u = await (0, v.NY)(l);
            return null != u ? S.A.createFromOTPPreview(u) : null;
        }, [n])),
        (0, x.$n)(e, u, void 0));
    return (
        (0, E.F0)(C, P),
        l.useEffect(() => {
            h(P);
        }, [P, h]),
        null
    );
};
var P = r(531260);
let _ = () => {
        let {
            activeSubscription: e,
            captureStartingPremiumSubscriptionPlanId: t,
            captureStartingFractionalPremiumEndsAt: r,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
        }));
        l.useEffect(() => {
            null != e && t(e.planId);
        }, [e, t]);
        let { endsAt: n } = (0, P.A)({ forceFetch: !1, excludeReverseTrial: !0 });
        return (
            l.useEffect(() => {
                null != n && 0 !== n.valueOf() && r(n);
            }, [n, r]),
            null
        );
    },
    k = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, u] = (0, x.YV)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            l.useEffect(() => {
                a(n, u);
            }, [n, u, a]),
            null
        );
    },
    w = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, u] = (0, x.C8)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            l.useEffect(() => {
                a(n, u);
            }, [n, u, a]),
            null
        );
    },
    j = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, u] = (0, x.QQ)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            l.useEffect(() => {
                a(n, u);
            }, [n, u, a]),
            null
        );
    },
    g = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, u] = (0, x.YV)(t, r),
            { setRenewalInvoicePreview: a } = (0, f.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            l.useEffect(() => {
                a(n, u);
            }, [n, u, a]),
            null
        );
    },
    b = () => {
        let e = (0, p.Ay)((e) => e.step),
            t = l.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: r,
                fetchRenewalInvoicePreviewRequest: u,
                setFetchCheckoutInvoicePreviewRequest: a,
                setFetchRenewalInvoicePreviewRequest: i,
            } = (0, f.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (l.useEffect(() => {
            let r = t.current;
            (t.current = e), r === d.pn.REVIEW && e !== d.pn.REVIEW && (a(null), i(null));
        }, [e, a, i]),
        null == r && null == u)
            ? null
            : (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(k, { fetchParams: r.params }),
                      null != r &&
                          "premium_checkout_invoice_get_request" === r.type &&
                          (0, n.jsx)(w, { fetchParams: r.params }),
                      null != r &&
                          "premium_one_time_gift_purchase_invoice" === r.type &&
                          (0, n.jsx)(j, { fetchParams: r.params }),
                      null != u && "premium_renewal_invoice" === u.type && (0, n.jsx)(g, { fetchParams: u.params }),
                  ],
              });
    };
var R = r(17928),
    A = r(10716),
    T = r(795816),
    G = r(627363),
    B = r(20015),
    M = r(885386),
    O = r(652215);
let F = () => {
    let e = (0, f.t4)((e) => e.applicationId),
        { data: t } = (0, G.YY)(e),
        r = M.Q_.useSetting(),
        n = (0, R.bG)([A.A], () => A.A.getFetchState());
    return (
        l.useEffect(() => {
            null != t && (0, B.n)(t, O.gfo.EMBEDDED) && r && null == n && (0, T.SE)();
        }, [t, r, n]),
        null
    );
};
var N = r(624210),
    U = r(573582),
    D = r(818348);
let V = () => {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: r,
    } = (0, f.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = U.A.useConfig({ location: "payment_modal" }).enabled,
                { order: r, setOrder: n } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, l.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let l = e.paymentSourceId;
                async function u() {
                    if (null == r || r?.billing_facet?.payment_gateway === D.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, N.iY)({ orderId: r.id, updates: e });
                    null != t && n(t);
                }
                r?.billing_facet?.payment_source_id !== l && u();
            }, [r, n, e.paymentSourceId, t]);
        })(l.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: r.loadId }), [e, t, r.loadId])),
        null
    );
};
var H = r(83617);
let K = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: r,
            isGift: n,
            excludeSubscriptionPlansBySKU: u,
        } = (0, f.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = l.useMemo(() => (0, o._r)(r), [r]),
        { subscriptionPlanIdForCurrency: i, hasFetchedRelatedSubscriptionPlans: s } = (0, o.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: n,
        }),
        c = JSON.stringify(a),
        d = l.useRef(a);
    return (
        l.useEffect(() => {
            d.current = a;
        }),
        l.useEffect(() => {
            (async () => {
                let { current: r } = d;
                try {
                    r.length > 0 && !u && (await (0, H.c_)(t, r));
                } catch (e) {
                    if (e.code !== H.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, c, u, e, i, s, n]),
        null
    );
};
var W = r(679374),
    L = r(504275);
function q() {
    return (
        !(function () {
            let e = (0, p.bB)(),
                { purchaseState: t, setPurchaseState: r } = (0, f.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, d.zT)(e, t, r);
        })(),
        null
    );
}
function z(e) {
    let { checkoutInitParameters: t = L.r, loadId: r, discoverySessionId: d, children: p } = e,
        h = (0, W._5)(),
        y = (0, a.A)(() => {
            let e = h?.id ?? r ?? (0, u.A)();
            return (
                i.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: d, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: I,
            defaultPaymentSourceId: v,
            eligiblePaymentGateways: x,
            hasFetchedPaymentSources: S,
            paymentSources: E,
            hasPaymentSources: P,
        } = (0, c.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [k] = l.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: P,
                startingPremiumSubscriptionPlanId: null != t.activeSubscription ? t.activeSubscription?.planId : null,
            };
            return (0, f.y$)({
                checkoutInitParameters: t,
                startingValues: e,
                contextMetadata: y,
                order: h,
                initialPaymentSourceId: I,
                initialCurrency: (0, o.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: I,
                    isGift: t.isGift,
                }),
            });
        }),
        w = l.useRef(null != h);
    l.useEffect(() => {
        w.current || null == h || (k.setState({ order: h }), (w.current = !0));
    }, [h, k]),
        l.useEffect(() => {
            k.getState().setCheckoutInitParameters(t);
        }, [k, t]);
    let j = t.purchaseType === O.VVm.SUBSCRIPTION,
        g = t.purchaseType === O.VVm.ONE_TIME && t.unifiedCheckoutFlow !== s.C.ORB_CHECKOUT;
    return (0, n.jsxs)(f.Ni, {
        value: k,
        children: [
            (0, n.jsx)(_, {}),
            (0, n.jsx)(q, {}),
            (0, n.jsx)(F, {}),
            (0, n.jsx)(K, {}),
            (0, n.jsx)(V, {}),
            (0, n.jsx)(m, {
                isGift: t.isGift,
                activeSubscription: t.activeSubscription,
                defaultPaymentSourceId: v,
                eligiblePaymentGateways: x,
                hasFetchedPaymentSources: S,
                paymentSources: E,
            }),
            j && (0, n.jsx)(b, {}),
            g && (0, n.jsx)(C, {}),
            p,
        ],
    });
}
