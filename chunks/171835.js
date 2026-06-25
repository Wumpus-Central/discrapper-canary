"use strict";
n.d(t, { M: () => E });
var i = n(627968),
    r = n(64700),
    s = n(688810),
    a = n(795791),
    o = n(615310),
    l = n(669874),
    u = n(426398),
    c = n(21713),
    d = n(46332),
    _ = n(263885),
    h = n(783327),
    f = n(652215),
    p = n(788868);
function E(e) {
    let {
            stepConfigs: t,
            breadcrumbs: n,
            loadId: s,
            discoverySessionId: l,
            purchaseType: u = f.VVm.SUBSCRIPTION,
            overrideCustomCheckoutFlow: c,
            ...d
        } = e,
        h = JSON.stringify(d.skuIDs),
        E = r.useMemo(() => d.skuIDs, [h]),
        g = (0, a.$w)(),
        A = r.useMemo(
            () => ({
                skuIds: E,
                isGift: d.isGift ?? !1,
                referralTrialOfferId: d.referralTrialOfferId ?? null,
                activeSubscription: d.activeSubscription ?? null,
                excludeSubscriptionPlansBySKU: d.excludeSubscriptionPlansBySKU ?? !1,
                purchaseType: u,
                defaultPlanId: d.defaultPlanId,
                referralCode: d.referralCode,
                customCheckoutFlow: c ?? g,
                unifiedCheckoutFlow: d.unifiedCheckoutFlow,
                paymentGateway: d.paymentGateway,
                applicationId: d.applicationId ?? p.tv,
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
                g,
                d.unifiedCheckoutFlow,
                d.paymentGateway,
            ],
        );
    return (0, i.jsx)(o.mz, {
        stepConfigs: t,
        breadcrumbs: n,
        children: (0, i.jsx)(_.P, {
            loadId: s,
            discoverySessionId: l,
            checkoutInitParameters: A,
            children: (0, i.jsx)(m, { ...d, skuIDs: E, purchaseType: u }),
        }),
    });
}
function m(e) {
    let { errorHandlingBehavior: t = "rethrow", onErrorReported: n, skuIDs: a, children: o } = e,
        { paymentSources: _ } = (0, u.jm)(),
        {
            contextMetadata: f,
            unifiedCheckoutFlow: p,
            purchaseType: E,
            isGift: m,
            selectedSkuId: g,
            selectedPlanId: A,
            paymentSourceId: I,
            paymentGateway: T,
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
        S = null != I && null != _[I] ? _[I]?.type : null,
        y = r.useMemo(
            () => ({ payment_source_id: I, payment_gateway: T, payment_source_type: S, checkout_flow: p }),
            [I, T, S, p],
        ),
        C = (0, s.Db)();
    return (0, i.jsx)(c.yv, {
        children: (0, i.jsx)(h.R, {
            children: (0, i.jsx)(l.j, {
                errorHandlingBehavior: t,
                locationStack: C,
                onErrorReported: n,
                loadId: f.loadId,
                selectedSkuId: g ?? null,
                selectedPlanId: A ?? null,
                isGift: m,
                skuIds: a,
                purchaseType: E,
                additionalAnalyticsData: y,
                children: o,
            }),
        }),
    });
}
