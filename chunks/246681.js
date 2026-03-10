t.d(n, { WrappedUnifiedPaymentModal: () => C });
var o = t(627968),
    a = t(64700),
    i = t(937008),
    l = t(156312),
    s = t(546042),
    r = t(285871),
    d = t(736843),
    c = t(818348);
let p = (e) => {
        let {
                skuId: n,
                applicationId: t,
                analyticsLocations: i,
                returnRef: l,
                onComplete: r,
                onClose: c,
                renderHeader: p,
                transitionState: u,
                modalOnClose: C,
                paymentModalVersion: h = "v2",
            } = e,
            { paymentModalProps: y } = (0, d.jP)(),
            I = a.useCallback(
                (e, n) => {
                    C(), null != c && c(e, n);
                },
                [C, c],
            ),
            k = y?.onClose ?? I;
        return (0, o.jsx)(s.PaymentModal, {
            transitionState: u,
            returnRef: l,
            applicationId: t,
            onComplete: r,
            skuId: n,
            renderHeader: p,
            initialPlanId: null,
            analyticsLocations: i,
            paymentModalVersion: h,
            ...y,
            onClose: k,
        });
    },
    u = (e) => {
        let { skuId: n } = e;
        return (0, o.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                skuId: t,
                applicationId: a,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                giftContextProps: d,
                flowSpecificOptions: C,
                onComplete: h,
                onClose: y,
                renderModalProps: I,
                checkoutFlow: k,
                checkoutFlowConfiguration: f,
                tenantCheckoutFlowConfig: m,
                renderHeader: P,
                stepConfigs: x,
            } = e,
            { purchaseType: S } = f,
            { CustomPaymentContextProvider: R = u, UnifiedCheckoutContextProvider: j } = m,
            U = null != d ? i.dX : i.Mq;
        return (0, o.jsx)(R, {
            applicationId: a,
            unifiedCheckoutFlow: k,
            skuId: t,
            activeSubscription: null,
            loadId: n,
            stepConfigs: x,
            purchaseType: S,
            analyticsLocations: l,
            paymentGateway: k === r.C.ORB_CHECKOUT ? c.kM.VIRTUAL_CURRENCY : void 0,
            isGift: d?.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: k === r.C.ORB_CHECKOUT,
            children: (0, o.jsx)(U, {
                ...d,
                children: (0, o.jsx)(j, {
                    applicationId: a,
                    skuId: t,
                    loadId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: s,
                    onComplete: h,
                    onClose: y,
                    renderModalProps: I,
                    flowSpecificOptions: C,
                    children: (0, o.jsx)(p, {
                        applicationId: a,
                        skuId: t,
                        renderHeader: P,
                        analyticsLocations: l,
                        onComplete: h,
                        onClose: y,
                        modalOnClose: I.onClose,
                        transitionState: I.transitionState,
                        returnRef: I.returnRef,
                    }),
                }),
            }),
        });
    };
