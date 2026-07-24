a.d(e, { UnifiedCheckoutInstance: () => h });
var t = a(627968),
    l = a(64700),
    o = a(688810),
    r = a(951305),
    s = a(424171),
    i = a(171835),
    u = a(741923),
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
            initialPaymentSourceId: x,
            analyticsLocations: I,
            giftContextProps: j,
            onComplete: S,
            onClose: v,
            renderModalProps: w,
            analyticsSourceLocation: _,
            ...L
        } = n,
        { purchaseType: R } = y,
        {
            CustomTenantProvider: T,
            TenantPaymentModalRenderer: b,
            tenantProvidesCheckoutRoot: E,
            overrideAnalyticParams: G,
            tenantAnalyticsLocation: N,
        } = C.TENANT_PROVIDER_CONFIGS,
        O = l.useMemo(() => (null != N ? [...I, N] : I), [I, N]),
        V = null != j ? r.dX : r.Mq,
        g = null != j && j.isGift,
        q = null != G ? G.payment_gateway : void 0,
        A = l.useMemo(() => (null != m && null != s ? { [m]: s } : {}), [m, s]),
        D = {
            unifiedCheckoutFlow: m,
            skuId: e ?? null,
            loadId: i,
            applicationId: a,
            discoverySessionId: c,
            stepConfigs: f,
            activeSubscription: k,
            initialPaymentSourceId: x,
            purchaseType: R,
            analyticsLocations: O,
            paymentGateway: q,
            isGift: g,
            excludeSubscriptionPlansBySKU: R === d.VV.ONE_TIME,
            tenantParamsMap: A,
        },
        F = (0, t.jsx)(T, {
            ...D,
            tenantParams: s,
            giftContextProps: j,
            analyticsSourceLocation: _,
            overrideAnalyticParams: G,
            renderModalProps: w,
            onComplete: S,
            onClose: v,
            children: (0, t.jsx)(V, {
                ...j,
                children: (0, t.jsx)(p, {
                    ...L,
                    tenantParams: s,
                    renderModalProps: w,
                    TenantPaymentModalRenderer: b,
                    transitionState: w.transitionState,
                    returnRef: w.returnRef,
                    applicationId: a,
                    analyticsSourceLocation: _,
                    skuId: e,
                    onComplete: S,
                    renderHeader: M,
                }),
            }),
        });
    return (0, t.jsx)(o.f5, {
        value: O,
        children: (0, t.jsx)(u.rV, {
            skuIDs: null != e ? [e] : [],
            applicationId: a,
            paymentGateway: q,
            checkoutFlow: m,
            isGift: g,
            loadId: i,
            onOrderCreated: h,
            renderModalProps: w,
            children: E ? F : (0, t.jsx)(P, { ...D, children: F }),
        }),
    });
}
