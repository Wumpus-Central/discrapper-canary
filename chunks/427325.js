var t = a(477900),
    o = a(582128),
    r = a(688810),
    l = a(418200),
    s = a(852682),
    i = a(199453),
    u = a(860215),
    d = a(818348);
function c(n) {
    return (0, t.jsx)(s.q, { ...n });
}
function p(n) {
    let {
            TenantPaymentModalRenderer: e,
            renderModalProps: a,
            paymentModalVersion: l = "v2",
            paymentModalOnClose: i,
            tenantParams: u,
            ...d
        } = n,
        p = a.onClose,
        P = o.useCallback(() => {
            p();
        }, [p]),
        { analyticsLocations: h } = (0, r.Ay)(),
        m = o.useMemo(
            () => ({ analyticsLocations: h, onClose: null != i ? i : P, ...d, paymentModalVersion: l }),
            [h, l, P, d, i],
        );
    return null != e
        ? (0, t.jsx)(e, { originalPaymentModalProps: m, renderPaymentModal: c, renderModalProps: a, tenantParams: u })
        : (0, t.jsx)(s.q, { ...m });
}
function P(n) {
    let { skuId: e } = n;
    return (0, t.jsx)(i.M, { ...n, skuIDs: null != e ? [e] : [], children: n.children });
}
a.d(
    e,
    {},
    {
        UnifiedCheckoutInstance: function (n) {
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
                    sharedCheckoutParams: x,
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
                O = o.useMemo(() => (null != N ? [...I, N] : I), [I, N]),
                V = null != j ? l.dX : l.Mq,
                g = null != j && j.isGift,
                q = null != G ? G.payment_gateway : void 0,
                A = o.useMemo(() => (null != m && null != s ? { [m]: s } : {}), [m, s]),
                D = {
                    unifiedCheckoutFlow: m,
                    skuId: e ?? null,
                    loadId: i,
                    applicationId: a,
                    discoverySessionId: c,
                    stepConfigs: f,
                    activeSubscription: k,
                    sharedCheckoutParams: x,
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
            return (0, t.jsx)(r.f5, {
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
        },
    },
);
