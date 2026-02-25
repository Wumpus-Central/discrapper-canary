o.d(n, { WrappedUnifiedPaymentModal: () => C });
var t = o(627968),
    a = o(64700),
    i = o(937008),
    l = o(156312),
    s = o(546042),
    d = o(285871),
    r = o(736843),
    c = o(818348);
let p = (e) => {
        let {
                skuId: n,
                applicationId: o,
                analyticsLocations: i,
                returnRef: l,
                onComplete: d,
                onClose: c,
                renderHeader: p,
                transitionState: u,
                modalOnClose: C,
                paymentModalVersion: h = "v2",
            } = e,
            { paymentModalProps: y } = (0, r.jP)(),
            I = a.useCallback(
                (e, n) => {
                    C(), null != c && c(e, n);
                },
                [C, c],
            ),
            k = y?.onClose ?? I;
        return (0, t.jsx)(s.PaymentModal, {
            transitionState: u,
            returnRef: l,
            applicationId: o,
            onComplete: d,
            hideShadow: !0,
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
        return (0, t.jsx)(l.PaymentContextProvider, { ...e, skuIDs: null != n ? [n] : [], children: e.children });
    },
    C = (e) => {
        let {
                loadId: n,
                skuId: o,
                applicationId: a,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                giftContextProps: r,
                flowSpecificOptions: C,
                onComplete: h,
                onClose: y,
                renderModalProps: I,
                checkoutFlow: k,
                checkoutFlowConfiguration: f,
                tenantCheckoutFlowConfig: m,
                renderHeader: P,
                stepConfigs: S,
            } = e,
            { purchaseType: x } = f,
            { CustomPaymentContextProvider: R = u, UnifiedCheckoutContextProvider: j } = m,
            w = null != r ? i.dX : i.Mq;
        return (0, t.jsx)(R, {
            applicationId: a,
            unifiedCheckoutFlow: k,
            skuId: o,
            activeSubscription: null,
            loadId: n,
            stepConfigs: S,
            purchaseType: x,
            analyticsLocations: l,
            paymentGateway: k === d.C.ORB_CHECKOUT ? c.kM.VIRTUAL_CURRENCY : void 0,
            isGift: r?.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: k === d.C.ORB_CHECKOUT,
            children: (0, t.jsx)(w, {
                ...r,
                children: (0, t.jsx)(j, {
                    applicationId: a,
                    skuId: o,
                    loadId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: s,
                    onComplete: h,
                    onClose: y,
                    renderModalProps: I,
                    flowSpecificOptions: C,
                    children: (0, t.jsx)(p, {
                        applicationId: a,
                        skuId: o,
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
