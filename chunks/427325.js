a.d(n, { UnifiedCheckoutInstance: () => h });
var t = a(627968),
    l = a(64700),
    r = a(688810),
    o = a(937008),
    s = a(829850),
    i = a(171835),
    d = a(741923),
    u = a(818348);
let c = (e) => (0, t.jsx)(s.q, { ...e }),
    p = (e) => {
        let {
                TenantPaymentModalRenderer: n,
                renderModalProps: a,
                paymentModalVersion: o = "v2",
                paymentModalOnClose: i,
                tenantParams: d,
                ...u
            } = e,
            p = a.onClose,
            P = l.useCallback(() => {
                p();
            }, [p]),
            { analyticsLocations: h } = (0, r.Ay)(),
            y = l.useMemo(
                () => ({
                    analyticsLocations: h,
                    initialPlanId: null,
                    onClose: null != i ? i : P,
                    ...u,
                    paymentModalVersion: o,
                }),
                [h, o, P, u, i],
            );
        return null != n
            ? (0, t.jsx)(n, {
                  originalPaymentModalProps: y,
                  renderPaymentModal: c,
                  renderModalProps: a,
                  tenantParams: d,
              })
            : (0, t.jsx)(s.q, { ...y });
    },
    P = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(i.M, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    h = (e) => {
        let {
                skuId: n,
                applicationId: a,
                tenantParams: s,
                loadId: i,
                discoverySessionId: c,
                onOrderCreated: h,
                checkoutFlow: y,
                checkoutFlowConfiguration: m,
                tenantCheckoutFlowConfig: C,
                renderHeader: k,
                stepConfigs: x,
                activeSubscription: M,
                analyticsLocations: I,
                giftContextProps: j,
                onComplete: f,
                onClose: S,
                renderModalProps: v,
                analyticsSourceLocation: w,
                ..._
            } = e,
            { purchaseType: L } = m,
            {
                CustomTenantProvider: R,
                TenantPaymentModalRenderer: T,
                tenantProvidesCheckoutRoot: b,
                overrideAnalyticParams: E,
                tenantAnalyticsLocation: G,
            } = C.TENANT_PROVIDER_CONFIGS,
            N = l.useMemo(() => (null != G ? [...I, G] : I), [I, G]),
            O = null != j ? o.dX : o.Mq,
            V = null != j && j.isGift,
            g = null != E ? E.payment_gateway : void 0,
            q = {
                unifiedCheckoutFlow: y,
                skuId: n ?? null,
                loadId: i,
                applicationId: a,
                discoverySessionId: c,
                stepConfigs: x,
                activeSubscription: M,
                purchaseType: L,
                analyticsLocations: N,
                paymentGateway: g,
                isGift: V,
                excludeSubscriptionPlansBySKU: L === u.VV.ONE_TIME,
            },
            A = (0, t.jsx)(R, {
                ...q,
                tenantParams: s,
                giftContextProps: j,
                analyticsSourceLocation: w,
                overrideAnalyticParams: E,
                renderModalProps: v,
                onComplete: f,
                onClose: S,
                children: (0, t.jsx)(O, {
                    ...j,
                    children: (0, t.jsx)(p, {
                        ..._,
                        tenantParams: s,
                        renderModalProps: v,
                        TenantPaymentModalRenderer: T,
                        transitionState: v.transitionState,
                        returnRef: v.returnRef,
                        applicationId: a,
                        analyticsSourceLocation: w,
                        skuId: n,
                        onComplete: f,
                        renderHeader: k,
                    }),
                }),
            });
        return (0, t.jsx)(r.f5, {
            value: N,
            children: (0, t.jsx)(d.rV, {
                skuIDs: null != n ? [n] : [],
                paymentGateway: g,
                checkoutFlow: y,
                isGift: V,
                loadId: i,
                onOrderCreated: h,
                renderModalProps: v,
                children: b ? A : (0, t.jsx)(P, { ...q, children: A }),
            }),
        });
    };
