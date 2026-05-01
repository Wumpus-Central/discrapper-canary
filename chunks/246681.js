t.d(n, { WrappedUnifiedPaymentModal: () => C });
var o = t(627968),
    i = t(64700),
    l = t(937008),
    a = t(156312),
    s = t(546042),
    r = t(285871),
    d = t(551892),
    c = t(818348);
let u = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: l,
                returnRef: a,
                onComplete: r,
                onClose: c,
                renderHeader: u,
                transitionState: p,
                modalOnClose: C,
                paymentModalVersion: h = "v2",
            } = e,
            { customPaymentModalProps: k } = (0, d.u)(),
            m = i.useCallback(
                (e, n) => {
                    C(), null != c && c(e, n);
                },
                [C, c],
            ),
            y = k?.onClose ?? m;
        return (0, o.jsx)(s.PaymentModal, {
            transitionState: p,
            returnRef: a,
            applicationId: t,
            onComplete: r,
            skuId: n,
            renderHeader: u,
            initialPlanId: null,
            analyticsLocations: l,
            paymentModalVersion: h,
            ...k,
            onClose: y,
        });
    },
    p = (e) => {
        let { skuId: n } = e;
        return (0, o.jsx)(a.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                discoverySessionId: t,
                skuId: i,
                analyticsSourceLocation: a,
                analyticsLocations: s,
                applicationId: d,
                giftContextProps: C,
                flowSpecificOptions: h,
                additionalOptions: k,
                onComplete: m,
                onClose: y,
                renderModalProps: f,
                checkoutFlow: x,
                checkoutFlowConfiguration: P,
                tenantCheckoutFlowConfig: S,
                renderHeader: I,
                stepConfigs: O,
            } = e,
            { purchaseType: R } = P,
            { UnifiedCheckoutTenantProvider: M, tenantProvidesPaymentContext: U } = S,
            j = null != C ? l.dX : l.Mq,
            v = {
                applicationId: d,
                unifiedCheckoutFlow: x,
                skuId: i,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: t,
                stepConfigs: O,
                purchaseType: R,
                analyticsLocations: s,
                paymentGateway: x === r.C.ORB_CHECKOUT ? c.kM.VIRTUAL_CURRENCY : void 0,
                isGift: C?.isGift,
                excludeSubscriptionPlansBySKU: R === c.VV.ONE_TIME,
                excludeSKUPurchasePreviews: x === r.C.ORB_CHECKOUT,
            },
            w = (0, o.jsx)(M, {
                ...v,
                analyticsSourceLocation: a,
                flowSpecificOptions: h,
                additionalOptions: k,
                renderModalProps: f,
                onComplete: m,
                onClose: y,
                children: (0, o.jsx)(j, {
                    ...C,
                    children: (0, o.jsx)(u, {
                        applicationId: d,
                        skuId: i,
                        renderHeader: I,
                        analyticsLocations: s,
                        onComplete: m,
                        onClose: y,
                        modalOnClose: f.onClose,
                        transitionState: f.transitionState,
                        returnRef: f.returnRef,
                    }),
                }),
            });
        return U ? w : (0, o.jsx)(p, { ...v, children: w });
    };
