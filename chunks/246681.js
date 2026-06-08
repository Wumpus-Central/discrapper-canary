a.d(n, { WrappedUnifiedPaymentModal: () => m });
var t = a(627968),
    l = a(64700),
    o = a(688810),
    r = a(937008),
    i = a(314671),
    s = a(197510),
    d = a(679374),
    c = a(818348);
let u = (e) => (0, t.jsx)(i.PaymentModal, { ...e }),
    p = (e) => {
        let {
                skuId: n,
                applicationId: a,
                analyticsObject: r,
                analyticsSourceLocation: s,
                returnRef: d,
                onComplete: c,
                renderHeader: p,
                transitionState: y,
                modalOnClose: m,
                paymentModalVersion: P = "v2",
                TenantPaymentModalRenderer: C,
            } = e,
            h = l.useCallback(() => {
                m();
            }, [m]),
            { analyticsLocations: M } = (0, o.Ay)(),
            j = l.useMemo(
                () => ({
                    transitionState: y,
                    returnRef: d,
                    applicationId: a,
                    analyticsObject: r,
                    analyticsSourceLocation: s,
                    analyticsLocations: M,
                    initialPlanId: null,
                    skuId: n,
                    renderHeader: p,
                    paymentModalVersion: P,
                    onComplete: c,
                    onClose: h,
                }),
                [y, d, a, r, s, M, n, p, P, c, h],
            );
        return null != C
            ? (0, t.jsx)(C, { originalPaymentModalProps: j, renderPaymentModal: u })
            : (0, t.jsx)(i.PaymentModal, { ...j });
    },
    y = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(s.CheckoutRootProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    m = (e) => {
        let {
                loadId: n,
                discoverySessionId: a,
                onOrderCreated: i,
                skuId: s,
                tenantParams: u,
                analyticsObject: m,
                analyticsSourceLocation: P,
                analyticsLocations: C,
                applicationId: h,
                giftContextProps: M,
                additionalOptions: j,
                onComplete: x,
                onClose: k,
                renderModalProps: I,
                checkoutFlow: v,
                checkoutFlowConfiguration: S,
                tenantCheckoutFlowConfig: w,
                renderHeader: O,
                stepConfigs: _,
            } = e,
            { purchaseType: b } = S,
            {
                CustomTenantProvider: f,
                TenantPaymentModalRenderer: R,
                tenantProvidesCheckoutRoot: L,
                overrideAnalyticParams: T,
                tenantAnalyticsLocation: E,
            } = w.TENANT_PROVIDER_CONFIGS,
            G = l.useMemo(() => (null != E ? [...C, E] : C), [C, E]),
            N = null != M ? r.dX : r.Mq,
            V = null != M && M.isGift,
            g = {
                unifiedCheckoutFlow: v,
                loadId: n,
                discoverySessionId: a,
                stepConfigs: _,
                applicationId: h,
                skuId: s,
                activeSubscription: null,
                purchaseType: b,
                analyticsLocations: G,
                paymentGateway: null != T ? T.payment_gateway : void 0,
                isGift: V,
                excludeSubscriptionPlansBySKU: b === c.VV.ONE_TIME,
            },
            A = (0, t.jsx)(f, {
                ...g,
                tenantParams: u,
                analyticsSourceLocation: P,
                additionalOptions: j,
                overrideAnalyticParams: T,
                renderModalProps: I,
                onComplete: x,
                onClose: k,
                children: (0, t.jsx)(N, {
                    ...M,
                    children: (0, t.jsx)(p, {
                        applicationId: h,
                        analyticsObject: m,
                        analyticsSourceLocation: P,
                        skuId: s,
                        renderHeader: O,
                        onComplete: x,
                        modalOnClose: I.onClose,
                        transitionState: I.transitionState,
                        returnRef: I.returnRef,
                        TenantPaymentModalRenderer: R,
                    }),
                }),
            });
        return (0, t.jsx)(o.f5, {
            value: G,
            children: (0, t.jsx)(d.rV, {
                skuIDs: null != s ? [s] : [],
                paymentGateway: T?.payment_gateway,
                loadId: n,
                onOrderCreated: i,
                renderModalProps: I,
                children: L ? A : (0, t.jsx)(y, { ...g, children: A }),
            }),
        });
    };
