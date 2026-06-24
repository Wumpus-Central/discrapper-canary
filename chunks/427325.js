a.d(e, { UnifiedCheckoutInstance: () => h });
var t = a(627968),
    r = a(64700),
    l = a(688810),
    o = a(937008),
    s = a(829850),
    i = a(171835),
    d = a(741923),
    u = a(818348);
function c(n) {
    return (0, t.jsx)(s.q, { ...n });
}
function p(n) {
    let {
            TenantPaymentModalRenderer: e,
            renderModalProps: a,
            paymentModalVersion: o = "v2",
            paymentModalOnClose: i,
            tenantParams: d,
            ...u
        } = n,
        p = a.onClose,
        P = r.useCallback(() => {
            p();
        }, [p]),
        { analyticsLocations: h } = (0, l.Ay)(),
        y = r.useMemo(
            () => ({
                analyticsLocations: h,
                initialPlanId: null,
                onClose: null != i ? i : P,
                ...u,
                paymentModalVersion: o,
            }),
            [h, o, P, u, i],
        );
    return null != e
        ? (0, t.jsx)(e, { originalPaymentModalProps: y, renderPaymentModal: c, renderModalProps: a, tenantParams: d })
        : (0, t.jsx)(s.q, { ...y });
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
            checkoutFlow: y,
            checkoutFlowConfiguration: m,
            tenantCheckoutFlowConfig: C,
            renderHeader: f,
            stepConfigs: k,
            activeSubscription: x,
            analyticsLocations: I,
            giftContextProps: M,
            onComplete: j,
            onClose: S,
            renderModalProps: v,
            analyticsSourceLocation: w,
            ..._
        } = n,
        { purchaseType: L } = m,
        {
            CustomTenantProvider: R,
            TenantPaymentModalRenderer: T,
            tenantProvidesCheckoutRoot: b,
            overrideAnalyticParams: E,
            tenantAnalyticsLocation: G,
        } = C.TENANT_PROVIDER_CONFIGS,
        N = r.useMemo(() => (null != G ? [...I, G] : I), [I, G]),
        O = null != M ? o.dX : o.Mq,
        V = null != M && M.isGift,
        g = null != E ? E.payment_gateway : void 0,
        q = {
            unifiedCheckoutFlow: y,
            skuId: e ?? null,
            loadId: i,
            applicationId: a,
            discoverySessionId: c,
            stepConfigs: k,
            activeSubscription: x,
            purchaseType: L,
            analyticsLocations: N,
            paymentGateway: g,
            isGift: V,
            excludeSubscriptionPlansBySKU: L === u.VV.ONE_TIME,
        },
        A = (0, t.jsx)(R, {
            ...q,
            tenantParams: s,
            giftContextProps: M,
            analyticsSourceLocation: w,
            overrideAnalyticParams: E,
            renderModalProps: v,
            onComplete: j,
            onClose: S,
            children: (0, t.jsx)(O, {
                ...M,
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
                    renderHeader: f,
                }),
            }),
        });
    return (0, t.jsx)(l.f5, {
        value: N,
        children: (0, t.jsx)(d.rV, {
            skuIDs: null != e ? [e] : [],
            applicationId: a,
            paymentGateway: g,
            checkoutFlow: y,
            isGift: V,
            loadId: i,
            onOrderCreated: h,
            renderModalProps: v,
            children: b ? A : (0, t.jsx)(P, { ...q, children: A }),
        }),
    });
}
