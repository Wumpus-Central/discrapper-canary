a.d(e, { UnifiedCheckoutInstance: () => h });
var t = a(627968),
    l = a(64700),
    o = a(688810),
    r = a(951305),
    s = a(424171),
    i = a(171835),
    u = a(815379),
    d = a(818348);
function c(n) {
    return (0, t.jsx)(s.q, { ...n });
}
function p(n) {
    let {
            TenantPaymentModalRenderer: e,
            renderModalProps: a,
            paymentModalVersion: r = "v2",
            paymentModalOnClose: i,
            tenantParams: u,
            ...d
        } = n,
        p = a.onClose,
        P = l.useCallback(() => {
            p();
        }, [p]),
        { analyticsLocations: h } = (0, o.Ay)(),
        m = l.useMemo(
            () => ({
                analyticsLocations: h,
                initialPlanId: null,
                onClose: null != i ? i : P,
                ...d,
                paymentModalVersion: r,
            }),
            [h, r, P, d, i],
        );
    return null != e
        ? (0, t.jsx)(e, { originalPaymentModalProps: m, renderPaymentModal: c, renderModalProps: a, tenantParams: u })
        : (0, t.jsx)(s.q, { ...m });
}
function P(n) {
    let { skuId: e } = n;
    return (0, t.jsx)(i.M, { ...n, skuIDs: null != e ? [e] : [], children: n.children });
}
function h(n) {
    let {
            skuId: e,
            applicationId: a,
            tenantParams: s,
            loadId: i,
            discoverySessionId: c,
            onOrderCreated: h,
            checkoutFlow: m,
            checkoutFlowConfiguration: y,
            tenantCheckoutFlowConfig: C,
            renderHeader: M,
            stepConfigs: f,
            activeSubscription: k,
            analyticsLocations: x,
            giftContextProps: I,
            onComplete: j,
            onClose: S,
            renderModalProps: v,
            analyticsSourceLocation: w,
            ..._
        } = n,
        { purchaseType: L } = y,
        {
            CustomTenantProvider: R,
            TenantPaymentModalRenderer: T,
            tenantProvidesCheckoutRoot: b,
            overrideAnalyticParams: E,
            tenantAnalyticsLocation: G,
        } = C.TENANT_PROVIDER_CONFIGS,
        N = l.useMemo(() => (null != G ? [...x, G] : x), [x, G]),
        O = null != I ? r.dX : r.Mq,
        V = null != I && I.isGift,
        g = null != E ? E.payment_gateway : void 0,
        q = l.useMemo(() => (null != m && null != s ? { [m]: s } : {}), [m, s]),
        A = {
            unifiedCheckoutFlow: m,
            skuId: e ?? null,
            loadId: i,
            applicationId: a,
            discoverySessionId: c,
            stepConfigs: f,
            activeSubscription: k,
            purchaseType: L,
            analyticsLocations: N,
            paymentGateway: g,
            isGift: V,
            excludeSubscriptionPlansBySKU: L === d.VV.ONE_TIME,
            tenantParamsMap: q,
        },
        D = (0, t.jsx)(R, {
            ...A,
            tenantParams: s,
            giftContextProps: I,
            analyticsSourceLocation: w,
            overrideAnalyticParams: E,
            renderModalProps: v,
            onComplete: j,
            onClose: S,
            children: (0, t.jsx)(O, {
                ...I,
                children: (0, t.jsx)(p, {
                    ..._,
                    tenantParams: s,
                    renderModalProps: v,
                    TenantPaymentModalRenderer: T,
                    transitionState: v.transitionState,
                    returnRef: v.returnRef,
                    applicationId: a,
                    analyticsSourceLocation: w,
                    skuId: e,
                    onComplete: j,
                    renderHeader: M,
                }),
            }),
        });
    return (0, t.jsx)(o.f5, {
        value: N,
        children: (0, t.jsx)(u.rV, {
            skuIDs: null != e ? [e] : [],
            applicationId: a,
            paymentGateway: g,
            checkoutFlow: m,
            isGift: V,
            loadId: i,
            onOrderCreated: h,
            renderModalProps: v,
            children: b ? D : (0, t.jsx)(P, { ...A, children: D }),
        }),
    });
}
