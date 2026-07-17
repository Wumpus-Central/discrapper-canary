n.d(t, { M: () => E });
var l = n(627968),
    i = n(64700),
    r = n(688810),
    a = n(795791),
    s = n(669874),
    o = n(426398),
    u = n(883645),
    c = n(21713),
    d = n(316915),
    p = n(864717),
    m = n(783327),
    h = n(652215),
    C = n(202541);
function E(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: r,
            discoverySessionId: s,
            purchaseType: o = h.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        m = JSON.stringify(d.skuIDs),
        E = i.useMemo(() => d.skuIDs, [m]),
        A = (0, a.$w)(),
        S = i.useMemo(
            () => ({
                skuIds: E,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: o,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? A,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? C.tv,
                tenantParamsMap: d.tenantParamsMap ?? {},
            }),
            [
                E,
                o,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                c,
                A,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
                d.tenantParamsMap,
            ],
        );
    return (0, l.jsx)(u.Gf, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(p.P, {
            loadId: r,
            discoverySessionId: s,
            checkoutInitParameters: S,
            children: (0, l.jsx)(f, { ...d, skuIDs: E, purchaseType: o }),
        }),
    });
}
function f(e) {
    let { errorHandlingBehavior: t = "rethrow", onErrorReported: n, skuIDs: a, children: p } = e,
        { paymentSources: h } = (0, o.jm)(),
        {
            contextMetadata: C,
            unifiedCheckoutFlow: E,
            purchaseType: f,
            isGift: A,
            selectedSkuId: S,
            selectedPlanId: y,
            paymentSourceId: P,
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
        _ = null != P && null != h[P] ? h[P]?.type : null,
        T = i.useMemo(
            () => ({ payment_source_id: P, payment_gateway: I, payment_source_type: _, checkout_flow: E }),
            [P, I, _, E],
        ),
        g = (0, r.Db)(),
        x = (0, u.BQ)();
    return (0, l.jsx)(c.yv, {
        children: (0, l.jsx)(m.R, {
            children: (0, l.jsx)(s.j, {
                errorHandlingBehavior: t,
                locationStack: g,
                onErrorReported: n,
                loadId: C.loadId,
                selectedSkuId: S ?? null,
                selectedPlanId: y ?? null,
                isGift: A,
                skuIds: a,
                purchaseType: f,
                checkoutStepsHistory: x,
                additionalAnalyticsData: T,
                children: p,
            }),
        }),
    });
}
