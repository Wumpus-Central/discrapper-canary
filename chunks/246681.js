o.d(n, { WrappedUnifiedPaymentModal: () => C });
var t = o(627968),
    i = o(64700),
    a = o(937008),
    l = o(156312),
    s = o(546042),
    r = o(285871),
    d = o(736843),
    c = o(818348);
let p = (e) => {
        let {
                skuId: n,
                applicationId: o,
                analyticsLocations: a,
                returnRef: l,
                onComplete: r,
                onClose: c,
                renderHeader: p,
                transitionState: u,
                modalOnClose: C,
                paymentModalVersion: y = "v2",
            } = e,
            { paymentModalProps: I } = (0, d.jP)(),
            h = i.useCallback(
                (e, n) => {
                    C(), null != c && c(e, n);
                },
                [C, c],
            ),
            k = I?.onClose ?? h;
        return (0, t.jsx)(s.PaymentModal, {
            transitionState: u,
            returnRef: l,
            applicationId: o,
            onComplete: r,
            skuId: n,
            renderHeader: p,
            initialPlanId: null,
            analyticsLocations: a,
            paymentModalVersion: y,
            ...I,
            onClose: k,
        });
    },
    u = (e) => {
        let { skuId: n } = e;
        return (0, t.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                discoverySessionId: o,
                skuId: i,
                applicationId: l,
                analyticsLocations: s,
                analyticsSourceLocation: d,
                giftContextProps: C,
                flowSpecificOptions: y,
                onComplete: I,
                onClose: h,
                renderModalProps: k,
                checkoutFlow: f,
                checkoutFlowConfiguration: m,
                tenantCheckoutFlowConfig: P,
                renderHeader: S,
                stepConfigs: x,
            } = e,
            { purchaseType: R } = m,
            { CustomPaymentContextProvider: j = u, UnifiedCheckoutContextProvider: v } = P,
            U = null != C ? a.dX : a.Mq;
        return (0, t.jsx)(j, {
            applicationId: l,
            unifiedCheckoutFlow: f,
            skuId: i,
            activeSubscription: null,
            loadId: n,
            discoverySessionId: o,
            stepConfigs: x,
            purchaseType: R,
            analyticsLocations: s,
            paymentGateway: f === r.C.ORB_CHECKOUT ? c.kM.VIRTUAL_CURRENCY : void 0,
            isGift: C?.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: f === r.C.ORB_CHECKOUT,
            children: (0, t.jsx)(U, {
                ...C,
                children: (0, t.jsx)(v, {
                    applicationId: l,
                    skuId: i,
                    loadId: n,
                    analyticsLocations: s,
                    analyticsSourceLocation: d,
                    onComplete: I,
                    onClose: h,
                    renderModalProps: k,
                    flowSpecificOptions: y,
                    children: (0, t.jsx)(p, {
                        applicationId: l,
                        skuId: i,
                        renderHeader: S,
                        analyticsLocations: s,
                        onComplete: I,
                        onClose: h,
                        modalOnClose: k.onClose,
                        transitionState: k.transitionState,
                        returnRef: k.returnRef,
                    }),
                }),
            }),
        });
    };
