t.d(n, { WrappedUnifiedPaymentModal: () => C });
var a = t(627968),
    o = t(64700),
    l = t(937008),
    r = t(834252),
    i = t(546042),
    s = t(551892),
    d = t(679374),
    u = t(818348);
let c = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: l,
                returnRef: r,
                onComplete: d,
                onClose: u,
                renderHeader: c,
                transitionState: p,
                modalOnClose: C,
                paymentModalVersion: y = "v2",
            } = e,
            { customPaymentModalProps: m } = (0, s.u)(),
            h = o.useCallback(
                (e, n) => {
                    C(), null != u && u(e, n);
                },
                [C, u],
            ),
            I = m?.onClose ?? h;
        return (0, a.jsx)(i.PaymentModal, {
            transitionState: p,
            returnRef: r,
            applicationId: t,
            onComplete: d,
            skuId: n,
            renderHeader: c,
            initialPlanId: null,
            analyticsLocations: l,
            paymentModalVersion: y,
            ...m,
            onClose: I,
        });
    },
    p = (e) => {
        let { skuId: n } = e;
        return (0, a.jsx)(r.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                discoverySessionId: t,
                onOrderCreated: o,
                skuId: r,
                analyticsSourceLocation: i,
                analyticsLocations: s,
                applicationId: C,
                giftContextProps: y,
                additionalOptions: m,
                onComplete: h,
                onClose: I,
                renderModalProps: P,
                checkoutFlow: k,
                checkoutFlowConfiguration: x,
                tenantCheckoutFlowConfig: S,
                renderHeader: f,
                stepConfigs: j,
            } = e,
            { purchaseType: w } = x,
            {
                CustomTenantProvider: M,
                tenantProvidesPaymentContext: _,
                overrideAnalyticParams: v,
            } = S.TENANT_PROVIDER_CONFIGS,
            O = null != y ? l.dX : l.Mq,
            b = {
                applicationId: C,
                unifiedCheckoutFlow: k,
                skuId: r,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: t,
                stepConfigs: j,
                purchaseType: w,
                analyticsLocations: s,
                paymentGateway: v?.payment_gateway,
                isGift: y?.isGift,
                excludeSubscriptionPlansBySKU: w === u.VV.ONE_TIME,
            },
            G = (0, a.jsx)(M, {
                ...b,
                analyticsSourceLocation: i,
                additionalOptions: m,
                overrideAnalyticParams: v,
                renderModalProps: P,
                onComplete: h,
                onClose: I,
                children: (0, a.jsx)(O, {
                    ...y,
                    children: (0, a.jsx)(c, {
                        applicationId: C,
                        skuId: r,
                        renderHeader: f,
                        analyticsLocations: s,
                        onComplete: h,
                        onClose: I,
                        modalOnClose: P.onClose,
                        transitionState: P.transitionState,
                        returnRef: P.returnRef,
                    }),
                }),
            });
        return (0, a.jsx)(d.rV, {
            skuIDs: null != r ? [r] : [],
            paymentGateway: v?.payment_gateway,
            loadId: n,
            onOrderCreated: o,
            renderModalProps: P,
            children: _ ? G : (0, a.jsx)(p, { ...b, children: G }),
        });
    };
