r.d(t, { P: () => J });
var n = r(627968),
    u = r(64700),
    l = r(835245),
    i = r(444927),
    a = r(38405),
    s = r(120700),
    o = r(426398),
    c = r(655857),
    d = r(166532),
    f = r(615310),
    p = r(571878),
    h = r(753390);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: l,
            hasFetchedPaymentSources: i,
            paymentSources: a,
        } = e,
        s = (0, p.t4)((e) => e.setPaymentSourceId),
        c = u.useCallback(() => {
            s(
                (0, o._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: l,
                    paymentSources: a,
                }),
            );
        }, [t, r, n, l, s]);
    return (
        u.useEffect(() => {
            i ? c() : (0, h.$o)();
        }, [i, c]),
        null
    );
};
var y = r(531260);
let I = () => {
    let {
        activeSubscription: e,
        captureStartingPremiumSubscriptionPlanId: t,
        captureStartingFractionalPremiumEndsAt: r,
    } = (0, p.t4)((e) => ({
        activeSubscription: e.activeSubscription,
        captureStartingPremiumSubscriptionPlanId: e.captureStartingPremiumSubscriptionPlanId,
        captureStartingFractionalPremiumEndsAt: e.captureStartingFractionalPremiumEndsAt,
    }));
    u.useEffect(() => {
        null != e && t(e.planId);
    }, [e, t]);
    let { endsAt: n } = (0, y.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        u.useEffect(() => {
            null != n && 0 !== n.valueOf() && r(n);
        }, [n, r]),
        null
    );
};
var S = r(17928),
    E = r(800342),
    v = r(328968),
    C = r(788868);
let _ = () => {
    let e = (0, p.t4)((e) => e.skuIds),
        t = u.useMemo(() => e.filter((e) => !C.oz.includes(e)), [e]),
        r = (0, S.bG)([v.A], () => t.filter((e) => null == v.A.getForSKU(e) && !v.A.isFetchingForSKU(e)), [t]);
    return (
        u.useEffect(() => {
            for (let e of r) (0, E.QB)(e);
        }, [r]),
        null
    );
};
var w = r(566980),
    P = r(120992),
    k = r(830382),
    g = r(543767),
    x = r(570221),
    R = r(666646);
let b = () => {
        var e;
        let t,
            r,
            n,
            l,
            {
                isGift: i,
                applicationId: a,
                skuIds: s,
                purchaseState: o,
                priceOptions: c,
                selectedSkuId: d,
                paymentSourceId: f,
                setPurchasePreviewError: h,
            } = (0, p.t4)((e) => ({
                purchaseState: e.purchaseState,
                applicationId: e.applicationId,
                skuIds: e.skuIds,
                isGift: e.isGift,
                priceOptions: e.checkoutPriceOptions,
                selectedSkuId: e.selectedSkuId,
                paymentSourceId: e.paymentSourceId,
                setPurchasePreviewError: e.setPurchasePreviewError,
            })),
            m = o === w.h.PURCHASING || o === w.h.COMPLETED;
        (0, P.c)({ applicationId: a, skuIDs: s });
        let [y, I] =
            ((e = u.useMemo(
                () => ({
                    applicationId: a,
                    skuId: d,
                    paymentSourceId: f,
                    isGift: i,
                    currency: c.loaded ? c.currency : void 0,
                    preventFetch: m,
                }),
                [a, d, f, i, c, m],
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
                let l = await (0, k.NY)(u);
                return null != l ? x.A.createFromOTPPreview(l) : null;
            }, [n])),
            (0, g.$n)(e, l, void 0));
        return (
            (0, R.F0)(y, I),
            u.useEffect(() => {
                h(I);
            }, [I, h]),
            null
        );
    },
    A = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, g.YV)(t, r),
            { setCheckoutInvoicePreview: i } = (0, p.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    T = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, g.C8)(t, r),
            { setCheckoutInvoicePreview: i } = (0, p.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    G = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, g.QQ)(t, r),
            { setCheckoutInvoicePreview: i } = (0, p.t4)((e) => ({
                setCheckoutInvoicePreview: e.setCheckoutInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    F = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, g.YV)(t, r),
            { setRenewalInvoicePreview: i } = (0, p.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    j = () => {
        let e = (0, f.Ay)((e) => e.step),
            t = u.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: r,
                fetchRenewalInvoicePreviewRequest: l,
                setFetchCheckoutInvoicePreviewRequest: i,
                setFetchRenewalInvoicePreviewRequest: a,
            } = (0, p.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (u.useEffect(() => {
            let r = t.current;
            (t.current = e), r === d.pn.REVIEW && e !== d.pn.REVIEW && (i(null), a(null));
        }, [e, i, a]),
        null == r && null == l)
            ? null
            : (null != l && l.type,
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(A, { fetchParams: r.params }),
                      null != r &&
                          "premium_checkout_invoice_get_request" === r.type &&
                          (0, n.jsx)(T, { fetchParams: r.params }),
                      null != r &&
                          "premium_one_time_gift_purchase_invoice" === r.type &&
                          (0, n.jsx)(G, { fetchParams: r.params }),
                      null != l && (0, n.jsx)(F, { fetchParams: l.params }),
                  ],
              }));
    };
var O = r(10716),
    M = r(795816),
    U = r(627363),
    B = r(20015),
    D = r(885386),
    H = r(652215);
let N = () => {
    let e = (0, p.t4)((e) => e.applicationId),
        { data: t } = (0, U.YY)(e),
        r = D.Q_.useSetting(),
        n = (0, S.bG)([O.A], () => O.A.getFetchState());
    return (
        u.useEffect(() => {
            null != t && (0, B.n)(t, H.gfo.EMBEDDED) && r && null == n && (0, M.SE)();
        }, [t, r, n]),
        null
    );
};
var V = r(624210),
    K = r(573582),
    L = r(818348);
let W = () => {
    let {
        paymentSourceId: e,
        paymentGateway: t,
        contextMetadata: r,
    } = (0, p.t4)((e) => ({
        paymentSourceId: e.paymentSourceId,
        paymentGateway: e.paymentGateway,
        contextMetadata: e.contextMetadata,
    }));
    return (
        !(function (e) {
            let t = K.A.useConfig({ location: "payment_modal" }).enabled,
                { order: r, setOrder: n } = (0, p.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
            (0, u.useEffect)(() => {
                if (!t || null == e.paymentSourceId) return;
                let u = e.paymentSourceId;
                async function l() {
                    if (null == r || r?.billing_facet?.payment_gateway === L.kM.VIRTUAL_CURRENCY) return;
                    let t = await (0, V.iY)({ orderId: r.id, updates: e });
                    null != t && n(t);
                }
                r?.billing_facet?.payment_source_id !== u && l();
            }, [r, n, e.paymentSourceId, t]);
        })(u.useMemo(() => ({ paymentSourceId: e, paymentGateway: t, loadId: r.loadId }), [e, t, r.loadId])),
        null
    );
};
var q = r(83617);
let Y = () => {
    let {
            setCheckoutPriceOptions: e,
            paymentSourceId: t,
            skuIds: r,
            isGift: n,
            excludeSubscriptionPlansBySKU: l,
        } = (0, p.t4)((e) => ({
            setCheckoutPriceOptions: e.setCheckoutPriceOptions,
            paymentSourceId: e.paymentSourceId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            excludeSubscriptionPlansBySKU: e.excludeSubscriptionPlansBySKU,
        })),
        i = u.useMemo(() => (0, c._r)(r), [r]),
        { subscriptionPlanIdForCurrency: a, hasFetchedRelatedSubscriptionPlans: s } = (0, c.ow)({
            skuIDs: i,
            paymentSourceId: t,
            isGift: n,
        }),
        o = JSON.stringify(i),
        d = u.useRef(i);
    return (
        u.useEffect(() => {
            d.current = i;
        }),
        u.useEffect(() => {
            (async () => {
                let { current: r } = d;
                try {
                    r.length > 0 && !l && (await (0, q.c_)(t, r));
                } catch (e) {
                    if (e.code !== q.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, o, l, e, a, s, n]),
        null
    );
};
var Q = r(679374),
    z = r(504275);
function $() {
    return (
        !(function () {
            let e = (0, f.bB)(),
                { purchaseState: t, setPurchaseState: r } = (0, p.t4)((e) => ({
                    purchaseState: e.purchaseState,
                    setPurchaseState: e.setPurchaseState,
                }));
            (0, d.zT)(e, t, r);
        })(),
        null
    );
}
function J(e) {
    let { checkoutInitParameters: t = z.r, loadId: r, discoverySessionId: d, children: f } = e,
        h = (0, Q._5)(),
        y = (0, i.A)(() => {
            let e = h?.id ?? r ?? (0, l.A)();
            return (
                a.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: d, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: S,
            defaultPaymentSourceId: E,
            eligiblePaymentGateways: v,
            hasFetchedPaymentSources: C,
            paymentSources: w,
            hasPaymentSources: P,
        } = (0, o.mz)({ skuId: t.skuIds[0], isGift: t.isGift, activeSubscription: t.activeSubscription }),
        [k] = u.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: P,
                startingPremiumSubscriptionPlanId: null != t.activeSubscription ? t.activeSubscription?.planId : null,
            };
            return (0, p.y$)({
                checkoutInitParameters: t,
                startingValues: e,
                contextMetadata: y,
                order: h,
                initialPaymentSourceId: S,
                initialCurrency: (0, c.el)({
                    activeSubscription: t.activeSubscription,
                    skuIds: t.skuIds,
                    paymentSourceId: S,
                    isGift: t.isGift,
                }),
            });
        }),
        g = u.useRef(null != h);
    u.useEffect(() => {
        g.current || null == h || (k.setState({ order: h }), (g.current = !0));
    }, [h, k]),
        u.useEffect(() => {
            k.getState().setCheckoutInitParameters(t);
        }, [k, t]);
    let x =
            t.purchaseType === H.VVm.SUBSCRIPTION &&
            (t.unifiedCheckoutFlow === s.C.PREMIUM_CHECKOUT || t.unifiedCheckoutFlow === s.C.GUILD_ROLE_CHECKOUT),
        R = t.unifiedCheckoutFlow === s.C.GUILD_ROLE_CHECKOUT,
        A = t.purchaseType === H.VVm.ONE_TIME && t.unifiedCheckoutFlow !== s.C.ORB_CHECKOUT;
    return (0, n.jsxs)(p.Ni, {
        value: k,
        children: [
            (0, n.jsx)(I, {}),
            (0, n.jsx)($, {}),
            (0, n.jsx)(N, {}),
            (0, n.jsx)(Y, {}),
            (0, n.jsx)(W, {}),
            (0, n.jsx)(m, {
                isGift: t.isGift,
                activeSubscription: t.activeSubscription,
                defaultPaymentSourceId: E,
                eligiblePaymentGateways: v,
                hasFetchedPaymentSources: C,
                paymentSources: w,
            }),
            x && (0, n.jsx)(j, {}),
            R && (0, n.jsx)(_, {}),
            A && (0, n.jsx)(b, {}),
            f,
        ],
    });
}
