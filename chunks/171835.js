r.d(t, { M: () => m });
var n = r(627968),
    u = r(64700),
    i = r(688810),
    c = r(795791),
    s = r(615310),
    l = r(669874),
    a = r(426398),
    o = r(21713),
    d = r(6938),
    f = r(864717),
    p = r(783327),
    h = r(652215),
    I = r(202541);
function m(e) {
    let {
            stepConfigs: t,
            breadcrumbs: r,
            loadId: i,
            discoverySessionId: l,
            purchaseType: a = h.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: o,
            ...d
        } = e,
        p = JSON.stringify(d.skuIDs),
        m = u.useMemo(() => d.skuIDs, [p]),
        S = (0, c.$w)(),
        P = u.useMemo(
            () => ({
                skuIds: m,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: a,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: o ?? S,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? I.tv,
            }),
            [
                m,
                a,
                d.isGift,
                d.referralTrialOfferId,
                d.activeSubscription,
                d.excludeSubscriptionPlansBySKU,
                d.applicationId,
                d.defaultPlanId,
                d.referralCode,
                o,
                S,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
            ],
        );
    return (0, n.jsx)(s.mz, {
        stepConfigs: t,
        breadcrumbs: r,
        children: (0, n.jsx)(f.P, {
            loadId: i,
            discoverySessionId: l,
            checkoutInitParameters: P,
            children: (0, n.jsx)(y, { ...d, skuIDs: m, purchaseType: a }),
        }),
    });
}
function y(e) {
    let { errorHandlingBehavior: t = "rethrow", onErrorReported: r, skuIDs: c, children: s } = e,
        { paymentSources: f } = (0, a.jm)(),
        {
            contextMetadata: h,
            unifiedCheckoutFlow: I,
            purchaseType: m,
            isGift: y,
            selectedSkuId: S,
            selectedPlanId: P,
            paymentSourceId: E,
            paymentGateway: v,
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
        C = null != E && null != f[E] ? f[E]?.type : null,
        _ = u.useMemo(
            () => ({ payment_source_id: E, payment_gateway: v, payment_source_type: C, checkout_flow: I }),
            [E, v, C, I],
        ),
        k = (0, i.Db)();
    return (0, n.jsx)(o.yv, {
        children: (0, n.jsx)(p.R, {
            children: (0, n.jsx)(l.j, {
                errorHandlingBehavior: t,
                locationStack: k,
                onErrorReported: r,
                loadId: h.loadId,
                selectedSkuId: S ?? null,
                selectedPlanId: P ?? null,
                isGift: y,
                skuIds: c,
                purchaseType: m,
                additionalAnalyticsData: _,
                children: s,
            }),
        }),
    });
}
