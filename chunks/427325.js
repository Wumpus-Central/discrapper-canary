a.d(n, { UnifiedCheckoutInstance: () => P });
var t = a(627968),
    l = a(64700),
    r = a(688810),
    o = a(937008),
    s = a(829850),
    i = a(197510),
    d = a(99029),
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
            y = l.useCallback(() => {
                p();
            }, [p]),
            { analyticsLocations: P } = (0, r.Ay)(),
            m = l.useMemo(
                () => ({
                    analyticsLocations: P,
                    initialPlanId: null,
                    onClose: null != i ? i : y,
                    ...u,
                    paymentModalVersion: o,
                }),
                [P, o, y, u, i],
            );
        return null != n
            ? (0, t.jsx)(n, {
                  originalPaymentModalProps: m,
                  renderPaymentModal: c,
                  renderModalProps: a,
                  tenantParams: d,
              })
            : (0, t.jsx)(s.q, { ...m });
    },
    y = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(i.M, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    P = (e) => {
        let {
                skuId: n,
                applicationId: a,
                tenantParams: s,
                loadId: i,
                discoverySessionId: c,
                onOrderCreated: P,
                checkoutFlow: m,
                checkoutFlowConfiguration: h,
                tenantCheckoutFlowConfig: C,
                renderHeader: x,
                stepConfigs: M,
                activeSubscription: k,
                analyticsLocations: I,
                giftContextProps: j,
                onComplete: f,
                onClose: w,
                renderModalProps: S,
                analyticsSourceLocation: _,
                ...v
            } = e,
            { purchaseType: L } = h,
            {
                CustomTenantProvider: R,
                TenantPaymentModalRenderer: T,
                tenantProvidesCheckoutRoot: b,
                overrideAnalyticParams: g,
                tenantAnalyticsLocation: E,
            } = C.TENANT_PROVIDER_CONFIGS,
            G = l.useMemo(() => (null != E ? [...I, E] : I), [I, E]),
            N = null != j ? o.dX : o.Mq,
            O = null != j && j.isGift,
            V = {
                unifiedCheckoutFlow: m,
                skuId: n ?? null,
                loadId: i,
                applicationId: a,
                discoverySessionId: c,
                stepConfigs: M,
                activeSubscription: k,
                purchaseType: L,
                analyticsLocations: G,
                paymentGateway: null != g ? g.payment_gateway : void 0,
                isGift: O,
                excludeSubscriptionPlansBySKU: L === u.VV.ONE_TIME,
            },
            q = (0, t.jsx)(R, {
                ...V,
                tenantParams: s,
                giftContextProps: j,
                analyticsSourceLocation: _,
                overrideAnalyticParams: g,
                renderModalProps: S,
                onComplete: f,
                onClose: w,
                children: (0, t.jsx)(N, {
                    ...j,
                    children: (0, t.jsx)(p, {
                        ...v,
                        tenantParams: s,
                        renderModalProps: S,
                        TenantPaymentModalRenderer: T,
                        transitionState: S.transitionState,
                        returnRef: S.returnRef,
                        applicationId: a,
                        analyticsSourceLocation: _,
                        skuId: n,
                        onComplete: f,
                        renderHeader: x,
                    }),
                }),
            });
        return (0, t.jsx)(r.f5, {
            value: G,
            children: (0, t.jsx)(d.rV, {
                skuIDs: null != n ? [n] : [],
                paymentGateway: g?.payment_gateway,
                loadId: i,
                onOrderCreated: P,
                renderModalProps: S,
                children: b ? q : (0, t.jsx)(y, { ...V, children: q }),
            }),
        });
    };
