r.d(t, { P: () => L });
var n = r(627968),
    u = r(64700),
    l = r(835245),
    a = r(444927),
    i = r(38405),
    s = r(120700),
    o = r(426398),
    c = r(655857),
    d = r(166532),
    p = r(615310),
    f = r(571878),
    h = r(753390);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: l,
            hasFetchedPaymentSources: a,
            paymentSources: i,
        } = e,
        s = (0, f.t4)((e) => e.setPaymentSourceId),
        c = u.useCallback(() => {
            s(
                (0, o._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: l,
                    paymentSources: i,
                }),
            );
        }, [t, r, n, l, s]);
    return (
        u.useEffect(() => {
            a ? c() : (0, h.$o)();
        }, [a, c]),
        null
    );
};
var y = r(566980),
    I = r(120992),
    S = r(830382),
    v = r(543767),
    E = r(570221),
    w = r(666646);
let _ = () => {
    var e;
    let t,
        r,
        n,
        l,
        {
            isGift: a,
            applicationId: i,
            skuIds: s,
            purchaseState: o,
            priceOptions: c,
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
        m = o === y.h.PURCHASING || o === y.h.COMPLETED;
    (0, I.c)({ applicationId: i, skuIDs: s });
    let [_, C] =
        ((e = u.useMemo(
            () => ({
                applicationId: i,
                skuId: d,
                paymentSourceId: p,
                isGift: a,
                currency: c.loaded ? c.currency : void 0,
                preventFetch: m,
            }),
            [i, d, p, a, c, m],
        )),
        (t = (0, u.useRef)(e)),
        (r = (0, u.useRef)(!1)),
        (0, u.useEffect)(() => {
            t.current = e;
        }),
        (n = JSON.stringify(e)),
        (l = (0, u.useCallback)(async () => {
            let e = t.current;
            if (null == e.skuId) return null;
            let n = {
                    applicationId: e.applicationId,
                    skuId: e.skuId,
                    paymentSourceId: e.paymentSourceId,
                    isGift: e.isGift,
                    currency: e.currency,
                },
                u = r.current ? n : { ...n, paymentSourceId: null };
            r.current = !0;
            let l = await (0, S.NY)(u);
            return null != l ? E.A.createFromOTPPreview(l) : null;
        }, [n])),
        (0, v.$n)(e, l, void 0));
    return (
        (0, w.F0)(_, C),
        u.useEffect(() => {
            h(C);
        }, [C, h]),
        null
    );
};
var C = r(531260);
let P = () => {
        let {
            activeSubscription: e,
            captureStartingPremiumSubscriptionPlanId: t,
            captureStartingFractionalPremiumEndsAt: r,
        } = (0, f.t4)((e) => ({
            activeSubscription: e.activeSubscription,
            captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
            captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
        }));
        u.useEffect(() => {
            null != e && t(e.planId);
        }, [e, t]);
        let { endsAt: n } = (0, C.A)({ forceFetch: !1, excludeReverseTrial: !0 });
        return (
            u.useEffect(() => {
                null != n && 0 !== n.valueOf() && r(n);
            }, [n, r]),
            null
        );
    },
    k = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, v.YV)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                a(n, l);
            }, [n, l, a]),
            null
        );
    },
    x = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, v.C8)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                a(n, l);
            }, [n, l, a]),
            null
        );
    },
    g = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, v.QQ)(t, r),
            { setCheckoutInvoicePreview: a } = (0, f.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                a(n, l);
            }, [n, l, a]),
            null
        );
    },
    R = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, v.YV)(t, r),
            { setRenewalInvoicePreview: a } = (0, f.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                a(n, l);
            }, [n, l, a]),
            null
        );
    },
    b = () => {
        let e = (0, p.Ay)((e) => e.step),
            t = u.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: r,
                fetchRenewalInvoicePreviewRequest: l,
                setFetchCheckoutInvoicePreviewRequest: a,
                setFetchRenewalInvoicePreviewRequest: i,
            } = (0, f.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (u.useEffect(() => {
            let r = t.current;
            (t.current = e), r === d.pn.REVIEW && e !== d.pn.REVIEW && (a(null), i(null));
        }, [e, a, i]),
        null == r && null == l)
            ? null
            : (null != l && l.type,
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(k, { fetchParams: r.params }),
                      null != r &&
                          "premium_checkout_invoice_get_request" === r.type &&
                          (0, n.jsx)(x, { fetchParams: r.params }),
                      null != r &&
                          "premium_one_time_gift_purchase_invoice" === r.type &&
                          (0, n.jsx)(g, { fetchParams: r.params }),
                      null != l && (0, n.jsx)(R, { fetchParams: l.params }),
                  ],
              }));
    };
var A = r(17928),
    T = r(10716),
    j = r(795816),
    G = r(627363),
    F = r(20015),
    O = r(885386),
    M = r(652215);
let B = () => {
    let e = (0, f.t4)((e) => e.applicationId),
        { data: t } = (0, G.YY)(e),
        r = O.Q_.useSetting(),
        n = (0, A.bG)([T.A], () => T.A.getFetchState());
    return (
        u.useEffect(() => {
            null != t && (0, F.n)(t, M.gfo.EMBEDDED) && r && null == n && (0, j.SE)();
        }, [t, r, n]),
        null
    );
};
var U = r(624210),
    D = r(573582),
    N = r(818348);
let H = () => {
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
            let t = D.A.useConfig({ location: "payment_modal" }).enabled,
                { order: r, setOrder: n } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, u.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let u = e.paymentSourceId;
                async function l() {
                    if (null == r || r?.billing_facet?.payment_gateway === N.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, U.iY)({ orderId: r.id, updates: e });
                    null != t && n(t);
                }
                r?.billing_facet?.payment_source_id !== u && l();
            }, [r, n, e.paymentSourceId, t]);
        })(u.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: r.loadId }), [e, t, r.loadId])),
        null
    );
};
var V = r(83617);
let W = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: r,
            isGift: n,
            excludeSubscriptionPlansBySKU: l,
        } = (0, f.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        a = u.useMemo(() => (0, c._r)(r), [r]),
        { subscriptionPlanIdForCurrency: i, hasFetchedRelatedSubscriptionPlans: s } = (0, c.ow)({
            skuIDs: a,
            paymentSourceId: t,
            isGift: n,
        }),
        o = JSON.stringify(a),
        d = u.useRef(a);
    return (
        u.useEffect(() => {
            d.current = a;
        }),
        u.useEffect(() => {
            (async () => {
                let { current: r } = d;
                try {
                    r.length > 0 && !l && (await (0, V.c_)(t, r));
                } catch (e) {
                    if (e.code !== V.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, l, e, i, s, n]),
        null
    );
};
var q = r(679374),
    K = r(504275);
function Y() {
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
function L(e) {
    let { checkoutInitParameters: t = K.r, loadId: r, discoverySessionId: d, children: p } = e,
        h = (0, q._5)(),
        y = (0, a.A)(() => {
            let e = h?.id ?? r ?? (0, l.A)();
            return (
                i.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: d, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: I,
            defaultPaymentSourceId: S,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: E,
            paymentSources: w,
            hasPaymentSources: C,
        } = (0, o.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [k] = u.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: C,
                startingPremiumSubscriptionPlanId: null != t.activeSubscription ? t.activeSubscription?.planId : null,
            };
            return (0, f.y$)({
                checkoutInitParameters: t,
                startingValues: e,
                contextMetadata: y,
                order: h,
                initialPaymentSourceId: I,
                initialCurrency: (0, c.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: I,
                    isGift: t.isGift,
                }),
            });
        }),
        x = u.useRef(null != h);
    u.useEffect(() => {
        x.current || null == h || (k.setState({ order: h }), (x.current = !0));
    }, [h, k]),
        u.useEffect(() => {
            k.getState().setCheckoutInitParameters(t);
        }, [k, t]);
    let g = t.purchaseType === M.VVm.SUBSCRIPTION,
        R = t.purchaseType === M.VVm.ONE_TIME && t.unifiedCheckoutFlow !== s.C.ORB_CHECKOUT;
    return (0, n.jsxs)(f.Ni, {
        value: k,
        children: [
            (0, n.jsx)(P, {}),
            (0, n.jsx)(Y, {}),
            (0, n.jsx)(B, {}),
            (0, n.jsx)(W, {}),
            (0, n.jsx)(H, {}),
            (0, n.jsx)(m, {
                isGift: t.isGift,
                activeSubscription: t.activeSubscription,
                defaultPaymentSourceId: S,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: E,
                paymentSources: w,
            }),
            g && (0, n.jsx)(b, {}),
            R && (0, n.jsx)(_, {}),
            p,
        ],
    });
}
