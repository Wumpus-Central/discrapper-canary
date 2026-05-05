t.d(n, { WrappedUnifiedPaymentModal: () => p });
var a = t(627968),
    o = t(64700),
    i = t(937008),
    l = t(278521),
    r = t(546042),
    s = t(551892),
    d = t(818348);
let u = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: i,
                returnRef: l,
                onComplete: d,
                onClose: u,
                renderHeader: c,
                transitionState: p,
                modalOnClose: C,
                paymentModalVersion: m = "v2",
            } = e,
            { customPaymentModalProps: y } = (0, s.u)(),
            h = o.useCallback(
                (e, n) => {
                    C(), null != u && u(e, n);
                },
                [C, u],
            ),
            P = y?.onClose ?? h;
        return (0, a.jsx)(r.PaymentModal, {
            transitionState: p,
            returnRef: l,
            applicationId: t,
            onComplete: d,
            skuId: n,
            renderHeader: c,
            initialPlanId: null,
            analyticsLocations: i,
            paymentModalVersion: m,
            ...y,
            onClose: P,
        });
    },
    c = (e) => {
        let { skuId: n } = e;
        return (0, a.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    p = (e) => {
        let {
                loadId: n,
                discoverySessionId: t,
                skuId: o,
                analyticsSourceLocation: l,
                analyticsLocations: r,
                applicationId: s,
                giftContextProps: p,
                additionalOptions: C,
                onComplete: m,
                onClose: y,
                renderModalProps: h,
                checkoutFlow: P,
                checkoutFlowConfiguration: k,
                tenantCheckoutFlowConfig: I,
                renderHeader: x,
                stepConfigs: S,
            } = e,
            { purchaseType: f } = k,
            {
                CustomTenantProvider: j,
                tenantProvidesPaymentContext: v,
                overrideAnalyticParams: M,
            } = I.TENANT_PROVIDER_CONFIGS,
            _ = null != p ? i.dX : i.Mq,
            b = {
                applicationId: s,
                unifiedCheckoutFlow: P,
                skuId: o,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: t,
                stepConfigs: S,
                purchaseType: f,
                analyticsLocations: r,
                paymentGateway: M?.payment_gateway,
                isGift: p?.isGift,
                excludeSubscriptionPlansBySKU: f === d.VV.ONE_TIME,
            },
            w = (0, a.jsx)(j, {
                ...b,
                analyticsSourceLocation: l,
                additionalOptions: C,
                overrideAnalyticParams: M,
                renderModalProps: h,
                onComplete: m,
                onClose: y,
                children: (0, a.jsx)(_, {
                    ...p,
                    children: (0, a.jsx)(u, {
                        applicationId: s,
                        skuId: o,
                        renderHeader: x,
                        analyticsLocations: r,
                        onComplete: m,
                        onClose: y,
                        modalOnClose: h.onClose,
                        transitionState: h.transitionState,
                        returnRef: h.returnRef,
                    }),
                }),
            });
        return v ? w : (0, a.jsx)(c, { ...b, children: w });
    };
