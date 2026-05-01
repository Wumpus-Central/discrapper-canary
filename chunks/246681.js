t.d(n, { WrappedUnifiedPaymentModal: () => C });
var a = t(627968),
    o = t(64700),
    i = t(937008),
    l = t(902958),
    r = t(546042),
    s = t(75304),
    d = t(551892),
    u = t(818348);
let c = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: i,
                returnRef: l,
                onComplete: s,
                onClose: u,
                renderHeader: c,
                transitionState: p,
                modalOnClose: C,
                paymentModalVersion: m = "v2",
            } = e,
            { customPaymentModalProps: y } = (0, d.u)(),
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
            onComplete: s,
            skuId: n,
            renderHeader: c,
            initialPlanId: null,
            analyticsLocations: i,
            paymentModalVersion: m,
            ...y,
            onClose: P,
        });
    },
    p = (e) => {
        let { skuId: n } = e;
        return (0, a.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                discoverySessionId: t,
                skuId: o,
                analyticsSourceLocation: l,
                analyticsLocations: r,
                applicationId: d,
                giftContextProps: C,
                additionalOptions: m,
                onComplete: y,
                onClose: h,
                renderModalProps: P,
                checkoutFlow: k,
                checkoutFlowConfiguration: x,
                tenantCheckoutFlowConfig: I,
                renderHeader: S,
                stepConfigs: f,
            } = e,
            { purchaseType: v } = x,
            {
                CustomTenantProvider: O,
                tenantProvidesPaymentContext: _,
                overrideAnalyticParams: j,
            } = I.TENANT_PROVIDER_CONFIGS,
            w = null != C ? i.dX : i.Mq,
            M = {
                applicationId: d,
                unifiedCheckoutFlow: k,
                skuId: o,
                activeSubscription: null,
                loadId: n,
                discoverySessionId: t,
                stepConfigs: f,
                purchaseType: v,
                analyticsLocations: r,
                paymentGateway: j?.payment_gateway,
                isGift: C?.isGift,
                excludeSubscriptionPlansBySKU: v === u.VV.ONE_TIME,
                excludeSKUPurchasePreviews: k === s.C.ORB_CHECKOUT,
            },
            R = (0, a.jsx)(O, {
                ...M,
                analyticsSourceLocation: l,
                additionalOptions: m,
                overrideAnalyticParams: j,
                renderModalProps: P,
                onComplete: y,
                onClose: h,
                children: (0, a.jsx)(w, {
                    ...C,
                    children: (0, a.jsx)(c, {
                        applicationId: d,
                        skuId: o,
                        renderHeader: S,
                        analyticsLocations: r,
                        onComplete: y,
                        onClose: h,
                        modalOnClose: P.onClose,
                        transitionState: P.transitionState,
                        returnRef: P.returnRef,
                    }),
                }),
            });
        return _ ? R : (0, a.jsx)(p, { ...M, children: R });
    };
