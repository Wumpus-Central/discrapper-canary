n.d(t, { M: () => E });
var l = n(627968),
    i = n(64700),
    r = n(688810),
    a = n(795791),
    s = n(615310),
    o = n(669874),
    u = n(426398),
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
            discoverySessionId: o,
            purchaseType: u = h.VVm.SUBSCRIPTION,
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
                purchaseType: u,
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
                u,
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
    return (0, l.jsx)(s.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, l.jsx)(p.P, {
            loadId: r,
            discoverySessionId: o,
            checkoutInitParameters: S,
            children: (0, l.jsx)(f, { ...d, skuIDs: E, purchaseType: u }),
        }),
    });
}
function f(e) {
    let { errorHandlingBehavior: t = "rethrow", onErrorReported: n, skuIDs: a, children: s } = e,
        { paymentSources: p } = (0, u.jm)(),
        {
            contextMetadata: h,
            unifiedCheckoutFlow: C,
            purchaseType: E,
            isGift: f,
            selectedSkuId: A,
            selectedPlanId: S,
            paymentSourceId: y,
            paymentGateway: P,
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
        I = null != y && null != p[y] ? p[y]?.type : null,
        _ = i.useMemo(
            () => ({ payment_source_id: y, payment_gateway: P, payment_source_type: I, checkout_flow: C }),
            [y, P, I, C],
        ),
        T = (0, r.Db)();
    return (0, l.jsx)(c.yv, {
        children: (0, l.jsx)(m.R, {
            children: (0, l.jsx)(o.j, {
                errorHandlingBehavior: t,
                locationStack: T,
                onErrorReported: n,
                loadId: h.loadId,
                selectedSkuId: A ?? null,
                selectedPlanId: S ?? null,
                isGift: f,
                skuIds: a,
                purchaseType: E,
                additionalAnalyticsData: _,
                children: s,
            }),
        }),
    });
}
