r.d(t, { P: () => X });
var n = r(627968),
    u = r(64700),
    l = r(835245),
    i = r(444927),
    s = r(38405),
    a = r(120700),
    c = r(426398),
    o = r(655857),
    d = r(166532),
    p = r(615310),
    f = r(211159),
    h = r(753390);
let m = (e) => {
    let {
            isGift: t,
            activeSubscription: r,
            defaultPaymentSourceId: n,
            eligiblePaymentGateways: l,
            hasFetchedPaymentSources: i,
            paymentSources: s,
        } = e,
        a = (0, f.t4)((e) => e.setPaymentSourceId),
        o = u.useCallback(() => {
            a(
                (0, c._m)({
                    isGift: t,
                    activeSubscription: r,
                    defaultPaymentSourceId: n,
                    eligiblePaymentGateways: l,
                    paymentSources: s,
                }),
            );
        }, [t, r, n, l, a]);
    return (
        u.useEffect(() => {
            i ? o() : (0, h.$o)();
        }, [i, o]),
        null
    );
};
var I = r(531260);
let y = () => {
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
    let { endsAt: n } = (0, I.A)({ forceFetch: !1, excludeReverseTrial: !0 });
    return (
        u.useEffect(() => {
            null != n && 0 !== n.valueOf() && r(n);
        }, [n, r]),
        null
    );
};
var S = r(17928),
    v = r(800342),
    E = r(328968),
    C = r(788868);
let P = () => {
    let e = (0, f.t4)((e) => e.skuIds),
        t = u.useMemo(() => e.filter((e) => !C.oz.includes(e)), [e]),
        r = (0, S.bG)([E.A], () => t.filter((e) => null == E.A.getForSKU(e) && !E.A.isFetchingForSKU(e)), [t]);
    return (
        u.useEffect(() => {
            for (let e of r) (0, v.QB)(e);
        }, [r]),
        null
    );
};
var k = r(566980),
    w = r(120992),
    _ = r(830382),
    x = r(543767),
    g = r(570221),
    A = r(666646);
let R = () => {
        var e;
        let t,
            r,
            n,
            l,
            {
                isGift: i,
                applicationId: s,
                skuIds: a,
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
            m = c === k.h.PURCHASING || c === k.h.COMPLETED;
        (0, w.c)({ applicationId: s, skuIDs: a });
        let [I, y] =
            ((e = u.useMemo(
                () => ({
                    applicationId: s,
                    skuId: d,
                    paymentSourceId: p,
                    isGift: i,
                    currency: o.loaded ? o.currency : void 0,
                    preventFetch: m,
                }),
                [s, d, p, i, o, m],
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
                let l = await (0, _.NY)(u);
                return null != l ? g.A.createFromOTPPreview(l) : null;
            }, [n])),
            (0, x.$n)(e, l, void 0));
        return (
            (0, A.F0)(I, y),
            u.useEffect(() => {
                h(y);
            }, [y, h]),
            null
        );
    },
    b = (e) => {
        let { fetchParams: t, refetchKey: r } = e,
            [n, l] = (0, x.YV)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
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
            [n, l] = (0, x.C8)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
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
            [n, l] = (0, x.QQ)(t, r),
            { setCheckoutInvoicePreview: i } = (0, f.t4)((e) => ({
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
            [n, l] = (0, x.YV)(t, r),
            { setRenewalInvoicePreview: i } = (0, f.t4)((e) => ({
                setRenewalInvoicePreview: e.setRenewalInvoicePreview,
            }));
        return (
            u.useEffect(() => {
                i(n, l);
            }, [n, l, i]),
            null
        );
    },
    O = () => {
        let e = (0, p.Ay)((e) => e.step),
            t = u.useRef(e),
            {
                fetchCheckoutInvoicePreviewRequest: r,
                fetchRenewalInvoicePreviewRequest: l,
                setFetchCheckoutInvoicePreviewRequest: i,
                setFetchRenewalInvoicePreviewRequest: s,
            } = (0, f.t4)((e) => ({
                setFetchCheckoutInvoicePreviewRequest: e.setFetchCheckoutInvoicePreviewRequest,
                setFetchRenewalInvoicePreviewRequest: e.setFetchRenewalInvoicePreviewRequest,
                fetchCheckoutInvoicePreviewRequest: e.fetchCheckoutInvoicePreviewRequest,
                fetchRenewalInvoicePreviewRequest: e.fetchRenewalInvoicePreviewRequest,
            }));
        return (u.useEffect(() => {
            let r = t.current;
            (t.current = e), r === d.pn.REVIEW && e !== d.pn.REVIEW && (i(null), s(null));
        }, [e, i, s]),
        null == r && null == l)
            ? null
            : (null != l && l.type,
              (0, n.jsxs)(n.Fragment, {
                  children: [
                      null != r && "premium_checkout_invoice" === r.type && (0, n.jsx)(b, { fetchParams: r.params }),
                      null != r &&
                          "premium_checkout_invoice_get_request" === r.type &&
                          (0, n.jsx)(G, { fetchParams: r.params }),
                      null != r &&
                          "premium_one_time_gift_purchase_invoice" === r.type &&
                          (0, n.jsx)(T, { fetchParams: r.params }),
                      null != l && (0, n.jsx)(F, { fetchParams: l.params }),
                  ],
              }));
    };
var j = r(10716),
    M = r(795816),
    U = r(627363),
    B = r(20015),
    D = r(885386),
    H = r(652215);
let K = () => {
    let e = (0, f.t4)((e) => e.applicationId),
        { data: t } = (0, U.YY)(e),
        r = D.Q_.useSetting(),
        n = (0, S.bG)([j.A], () => j.A.getFetchState());
    return (
        u.useEffect(() => {
            null != t && (0, B.n)(t, H.gfo.EMBEDDED) && r && null == n && (0, M.SE)();
        }, [t, r, n]),
        null
    );
};
var V = r(624210),
    N = r(573582),
    L = r(818348);
let q = () => {
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
            let t = N.A.useConfig({ location: "payment_modal" }).enabled,
                { order: r, setOrder: n } = (0, f.t4)((e) => ({ order: e.order, setOrder: e.setOrder }));
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
var W = r(83617);
let Q = () => {
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
        i = u.useMemo(() => (0, o._r)(r), [r]),
        { subscriptionPlanIdForCurrency: s, hasFetchedRelatedSubscriptionPlans: a } = (0, o.ow)({
            skuIDs: i,
            paymentSourceId: t,
            isGift: n,
        }),
        c = JSON.stringify(i),
        d = u.useRef(i);
    return (
        u.useEffect(() => {
            d.current = i;
        }),
        u.useEffect(() => {
            (async () => {
                let { current: r } = d;
                try {
                    r.length > 0 && !l && (await (0, W.c_)(t, r));
                } catch (e) {
                    if (e.code !== W.oy) throw e;
                }
                e({ paymentSourceId: t, currency: void 0, loaded: !0 });
            })();
        }, [t, c, l, e, s, a, n]),
        null
    );
};
var Y = r(815379),
    z = r(504275);
function $() {
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
let J = [a.C.PREMIUM_CHECKOUT, a.C.GUILD_ROLE_CHECKOUT, a.C.PREMIUM_APPS_SUBSCRIPTION_CHECKOUT];
function X(e) {
    var t, r;
    let { checkoutInitParameters: d = z.r, loadId: p, discoverySessionId: h, children: I } = e,
        S = (0, Y._5)(),
        v = (0, i.A)(() => {
            let e = S?.id ?? p ?? (0, l.A)();
            return (
                s.A.addBreadcrumb({ message: `Checkout session ID: ${e}` }),
                { loadId: e, discoverySessionId: h, startTime: Date.now() }
            );
        }),
        {
            initialCheckoutPaymentSourceId: E,
            defaultPaymentSourceId: C,
            eligiblePaymentGateways: k,
            hasFetchedPaymentSources: w,
            paymentSources: _,
            hasPaymentSources: x,
        } = (0, c.mz)({ skuId: d.skuIds[0], isGift: d.isGift, activeSubscription: d.activeSubscription }),
        [g] = u.useState(() => {
            let e = {
                startedPaymentFlowWithPaymentSources: x,
                startingPremiumSubscriptionPlanId: null != d.activeSubscription ? d.activeSubscription?.planId : null,
            };
            return (0, f.y$)({
                checkoutInitParameters: d,
                startingValues: e,
                contextMetadata: v,
                order: S,
                initialPaymentSourceId: E,
                initialCurrency: (0, o.el)({
                    activeSubscription: d.activeSubscription,
                    skuIds: d.skuIds,
                    paymentSourceId: E,
                    isGift: d.isGift,
                }),
            });
        }),
        A = u.useRef(null != S);
    u.useEffect(() => {
        A.current || null == S || (g.setState({ order: S }), (A.current = !0));
    }, [S, g]),
        u.useEffect(() => {
            g.getState().setCheckoutInitParameters(d);
        }, [g, d]);
    let b = ((t = d.purchaseType), null != (r = d.unifiedCheckoutFlow) && t === H.VVm.SUBSCRIPTION && J.includes(r)),
        G = d.unifiedCheckoutFlow === a.C.GUILD_ROLE_CHECKOUT,
        T = d.purchaseType === H.VVm.ONE_TIME && d.unifiedCheckoutFlow !== a.C.ORB_CHECKOUT;
    return (0, n.jsxs)(f.Ni, {
        value: g,
        children: [
            (0, n.jsx)(y, {}),
            (0, n.jsx)($, {}),
            (0, n.jsx)(K, {}),
            (0, n.jsx)(Q, {}),
            (0, n.jsx)(q, {}),
            (0, n.jsx)(m, {
                isGift: d.isGift,
                activeSubscription: d.activeSubscription,
                defaultPaymentSourceId: C,
                eligiblePaymentGateways: k,
                hasFetchedPaymentSources: w,
                paymentSources: _,
            }),
            b && (0, n.jsx)(O, {}),
            G && (0, n.jsx)(P, {}),
            T && (0, n.jsx)(R, {}),
            I,
        ],
    });
}
