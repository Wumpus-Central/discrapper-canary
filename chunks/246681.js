a.d(n, { UnifiedCheckoutInstance: () => m });
var t = a(627968),
    l = a(64700),
    o = a(688810),
    r = a(937008),
    i = a(314671),
    s = a(197510),
    d = a(679374),
    c = a(818348);
let u = (e) => (0, t.jsx)(i.PaymentModal, { ...e }),
    y = (e) => {
        let { modalOnClose: n, paymentModalVersion: a = "v2", TenantPaymentModalRenderer: r, ...s } = e,
            d = l.useCallback(() => {
                n();
            }, [n]),
            { analyticsLocations: c } = (0, o.Ay)(),
            y = l.useMemo(
                () => ({ analyticsLocations: c, initialPlanId: null, paymentModalVersion: a, onClose: d, ...s }),
                [c, a, d, s],
            );
        return null != r
            ? (0, t.jsx)(r, { originalPaymentModalProps: y, renderPaymentModal: u })
            : (0, t.jsx)(i.PaymentModal, { ...y });
    },
    p = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(s.CheckoutRootProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    m = (e) => {
        let {
                skuId: n,
                applicationId: a,
                tenantParams: i,
                loadId: s,
                discoverySessionId: u,
                onOrderCreated: m,
                checkoutFlow: h,
                checkoutFlowConfiguration: P,
                tenantCheckoutFlowConfig: C,
                renderHeader: k,
                stepConfigs: x,
                activeSubscription: M,
                analyticsLocations: j,
                giftContextProps: I,
                onComplete: v,
                onClose: w,
                renderModalProps: S,
                additionalOptions: _,
                analyticsSourceLocation: f,
                ...O
            } = e,
            { purchaseType: R } = P,
            {
                CustomTenantProvider: L,
                TenantPaymentModalRenderer: T,
                tenantProvidesCheckoutRoot: b,
                overrideAnalyticParams: E,
                tenantAnalyticsLocation: G,
            } = C.TENANT_PROVIDER_CONFIGS,
            N = l.useMemo(() => (null != G ? [...j, G] : j), [j, G]),
            V = null != I ? r.dX : r.Mq,
            g = null != I && I.isGift,
            A = {
                unifiedCheckoutFlow: h,
                loadId: s,
                discoverySessionId: u,
                stepConfigs: x,
                applicationId: a,
                skuId: n,
                activeSubscription: M,
                purchaseType: R,
                analyticsLocations: N,
                paymentGateway: null != E ? E.payment_gateway : void 0,
                isGift: g,
                excludeSubscriptionPlansBySKU: R === c.VV.ONE_TIME,
            },
            D = (0, t.jsx)(L, {
                ...A,
                tenantParams: i,
                analyticsSourceLocation: f,
                additionalOptions: _,
                overrideAnalyticParams: E,
                renderModalProps: S,
                onComplete: v,
                onClose: w,
                children: (0, t.jsx)(V, {
                    ...I,
                    children: (0, t.jsx)(y, {
                        ...O,
                        TenantPaymentModalRenderer: T,
                        modalOnClose: S.onClose,
                        transitionState: S.transitionState,
                        returnRef: S.returnRef,
                        applicationId: a,
                        analyticsSourceLocation: f,
                        skuId: n,
                        onComplete: v,
                        renderHeader: k,
                    }),
                }),
            });
        return (0, t.jsx)(o.f5, {
            value: N,
            children: (0, t.jsx)(d.rV, {
                skuIDs: null != n ? [n] : [],
                paymentGateway: E?.payment_gateway,
                loadId: s,
                onOrderCreated: m,
                renderModalProps: S,
                children: b ? D : (0, t.jsx)(p, { ...A, children: D }),
            }),
        });
    };
