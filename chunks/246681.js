a.d(n, { WrappedUnifiedPaymentModal: () => C });
var t = a(627968),
    o = a(64700),
    l = a(688810),
    i = a(937008),
    r = a(834252),
    s = a(546042),
    d = a(551892),
    u = a(679374),
    c = a(818348);
let p = (e) => {
        let {
                skuId: n,
                applicationId: a,
                returnRef: i,
                onComplete: r,
                onClose: u,
                renderHeader: c,
                transitionState: p,
                modalOnClose: y,
                paymentModalVersion: C = "v2",
            } = e,
            { customPaymentModalProps: m } = (0, d.u)(),
            h = o.useCallback(
                (e, n) => {
                    y(), null != u && u(e, n);
                },
                [y, u],
            ),
            I = m?.onClose ?? h,
            { analyticsLocations: P } = (0, l.Ay)();
        return (0, t.jsx)(s.PaymentModal, {
            transitionState: p,
            returnRef: i,
            applicationId: a,
            onComplete: r,
            skuId: n,
            renderHeader: c,
            initialPlanId: null,
            analyticsLocations: P,
            paymentModalVersion: C,
            ...m,
            onClose: I,
        });
    },
    y = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(r.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                discoverySessionId: a,
                onOrderCreated: r,
                skuId: s,
                analyticsSourceLocation: d,
                analyticsLocations: C,
                applicationId: m,
                giftContextProps: h,
                additionalOptions: I,
                onComplete: P,
                onClose: k,
                renderModalProps: x,
                checkoutFlow: f,
                checkoutFlowConfiguration: j,
                tenantCheckoutFlowConfig: M,
                renderHeader: S,
                stepConfigs: v,
            } = e,
            { purchaseType: w } = j,
            {
                CustomTenantProvider: _,
                tenantProvidesPaymentContext: O,
                overrideAnalyticParams: b,
                tenantAnalyticsLocation: G,
            } = M.TENANT_PROVIDER_CONFIGS,
            R = o.useMemo(() => (null != G ? [...C, G] : C), [C, G]),
            V = null != h ? i.dX : i.Mq,
            E = {
                applicationId: m,
                unifiedCheckoutFlow: f,
                skuId: s,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: a,
                stepConfigs: v,
                purchaseType: w,
                analyticsLocations: R,
                paymentGateway: b?.payment_gateway,
                isGift: h?.isGift,
                excludeSubscriptionPlansBySKU: w === c.VV.ONE_TIME,
            },
            L = (0, t.jsx)(_, {
                ...E,
                analyticsSourceLocation: d,
                additionalOptions: I,
                overrideAnalyticParams: b,
                renderModalProps: x,
                onComplete: P,
                onClose: k,
                children: (0, t.jsx)(V, {
                    ...h,
                    children: (0, t.jsx)(p, {
                        applicationId: m,
                        skuId: s,
                        renderHeader: S,
                        onComplete: P,
                        onClose: k,
                        modalOnClose: x.onClose,
                        transitionState: x.transitionState,
                        returnRef: x.returnRef,
                    }),
                }),
            });
        return (0, t.jsx)(l.f5, {
            value: R,
            children: (0, t.jsx)(u.rV, {
                skuIDs: null != s ? [s] : [],
                paymentGateway: b?.payment_gateway,
                loadId: n,
                onOrderCreated: r,
                renderModalProps: x,
                children: O ? L : (0, t.jsx)(y, { ...E, children: L }),
            }),
        });
    };
