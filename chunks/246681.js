t.d(n, { WrappedUnifiedPaymentModal: () => p });
var o = t(627968),
    i = t(64700),
    a = t(937008),
    l = t(902958),
    r = t(546042),
    s = t(75304),
    d = t(551892),
    u = t(818348);
let c = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: a,
                returnRef: l,
                onComplete: s,
                onClose: u,
                renderHeader: c,
                transitionState: C,
                modalOnClose: p,
                paymentModalVersion: h = "v2",
            } = e,
            { customPaymentModalProps: m } = (0, d.u)(),
            P = i.useCallback(
                (e, n) => {
                    p(), null != u && u(e, n);
                },
                [p, u],
            ),
            k = m?.onClose ?? P;
        return (0, o.jsx)(r.PaymentModal, {
            transitionState: C,
            returnRef: l,
            applicationId: t,
            onComplete: s,
            skuId: n,
            renderHeader: c,
            initialPlanId: null,
            analyticsLocations: a,
            paymentModalVersion: h,
            ...m,
            onClose: k,
        });
    },
    C = (e) => {
        let { skuId: n } = e;
        return (0, o.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    p = (e) => {
        let {
                loadId: n,
                discoverySessionId: t,
                skuId: i,
                analyticsSourceLocation: l,
                analyticsLocations: r,
                applicationId: d,
                giftContextProps: p,
                additionalOptions: h,
                onComplete: m,
                onClose: P,
                renderModalProps: k,
                checkoutFlow: y,
                checkoutFlowConfiguration: I,
                tenantCheckoutFlowConfig: R,
                renderHeader: x,
                stepConfigs: O,
            } = e,
            { purchaseType: S } = I,
            { CustomTenantProvider: _, tenantProvidesPaymentContext: f } = R.TENANT_PROVIDER_CONFIGS,
            v = null != p ? a.dX : a.Mq,
            E = {
                applicationId: d,
                unifiedCheckoutFlow: y,
                skuId: i,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: t,
                stepConfigs: O,
                purchaseType: S,
                analyticsLocations: r,
                paymentGateway: y === s.C.ORB_CHECKOUT ? u.kM.VIRTUAL_CURRENCY : void 0,
                isGift: p?.isGift,
                excludeSubscriptionPlansBySKU: S === u.VV.ONE_TIME,
                excludeSKUPurchasePreviews: y === s.C.ORB_CHECKOUT,
            },
            M = (0, o.jsx)(_, {
                ...E,
                analyticsSourceLocation: l,
                additionalOptions: h,
                renderModalProps: k,
                onComplete: m,
                onClose: P,
                children: (0, o.jsx)(v, {
                    ...p,
                    children: (0, o.jsx)(c, {
                        applicationId: d,
                        skuId: i,
                        renderHeader: x,
                        analyticsLocations: r,
                        onComplete: m,
                        onClose: P,
                        modalOnClose: k.onClose,
                        transitionState: k.transitionState,
                        returnRef: k.returnRef,
                    }),
                }),
            });
        return f ? M : (0, o.jsx)(C, { ...E, children: M });
    };
