a.d(n, { UnifiedCheckoutInstance: () => P });
var t = a(627968),
    l = a(64700),
    o = a(688810),
    r = a(937008),
    s = a(314671),
    i = a(197510),
    d = a(815379),
    u = a(818348);
let c = (e) => (0, t.jsx)(s.PaymentModal, { ...e }),
    p = (e) => {
        let {
                renderModalProps: n,
                paymentModalVersion: a = "v2",
                paymentModalOnClose: r,
                TenantPaymentModalRenderer: i,
                ...d
            } = e,
            u = n.onClose,
            p = l.useCallback(() => {
                u();
            }, [u]),
            { analyticsLocations: y } = (0, o.Ay)(),
            P = l.useMemo(
                () => ({
                    analyticsLocations: y,
                    initialPlanId: null,
                    onClose: null != r ? r : p,
                    ...d,
                    paymentModalVersion: a,
                }),
                [y, a, p, d, r],
            );
        return null != i
            ? (0, t.jsx)(i, { originalPaymentModalProps: P, renderPaymentModal: c, renderModalProps: n })
            : (0, t.jsx)(s.PaymentModal, { ...P });
    },
    y = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(i.CheckoutRootProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
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
                renderHeader: M,
                stepConfigs: k,
                activeSubscription: x,
                analyticsLocations: I,
                giftContextProps: j,
                onComplete: f,
                onClose: v,
                renderModalProps: w,
                additionalOptions: S,
                analyticsSourceLocation: _,
                ...R
            } = e,
            { purchaseType: L } = h,
            {
                CustomTenantProvider: O,
                TenantPaymentModalRenderer: T,
                tenantProvidesCheckoutRoot: b,
                overrideAnalyticParams: g,
                tenantAnalyticsLocation: E,
            } = C.TENANT_PROVIDER_CONFIGS,
            G = l.useMemo(() => (null != E ? [...I, E] : I), [I, E]),
            N = null != j ? r.dX : r.Mq,
            V = null != j && j.isGift,
            A = {
                unifiedCheckoutFlow: m,
                skuId: n ?? null,
                loadId: i,
                applicationId: a,
                discoverySessionId: c,
                stepConfigs: k,
                activeSubscription: x,
                purchaseType: L,
                analyticsLocations: G,
                paymentGateway: null != g ? g.payment_gateway : void 0,
                isGift: V,
                excludeSubscriptionPlansBySKU: L === u.VV.ONE_TIME,
            },
            D = (0, t.jsx)(O, {
                ...A,
                tenantParams: s,
                giftContextProps: j,
                analyticsSourceLocation: _,
                additionalOptions: S,
                overrideAnalyticParams: g,
                renderModalProps: w,
                onComplete: f,
                onClose: v,
                children: (0, t.jsx)(N, {
                    ...j,
                    children: (0, t.jsx)(p, {
                        ...R,
                        renderModalProps: w,
                        TenantPaymentModalRenderer: T,
                        transitionState: w.transitionState,
                        returnRef: w.returnRef,
                        applicationId: a,
                        analyticsSourceLocation: _,
                        skuId: n,
                        onComplete: f,
                        renderHeader: M,
                    }),
                }),
            });
        return (0, t.jsx)(o.f5, {
            value: G,
            children: (0, t.jsx)(d.rV, {
                skuIDs: null != n ? [n] : [],
                paymentGateway: g?.payment_gateway,
                loadId: i,
                onOrderCreated: P,
                renderModalProps: w,
                children: b ? D : (0, t.jsx)(y, { ...A, children: D }),
            }),
        });
    };
