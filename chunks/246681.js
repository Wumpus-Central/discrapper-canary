a.d(n, { WrappedUnifiedPaymentModal: () => C });
var t = a(627968),
    o = a(64700),
    i = a(937008),
    l = a(156312),
    s = a(546042),
    r = a(285871),
    d = a(736843),
    c = a(818348);
let p = (e) => {
        let {
                skuId: n,
                applicationId: a,
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
            I = o.useCallback(
                (e, n) => {
                    C(), null != c && c(e, n);
                },
                [C, c],
            ),
            k = y?.onClose ?? I;
        return (0, t.jsx)(s.PaymentModal, {
            transitionState: u,
            returnRef: l,
            applicationId: a,
            onComplete: r,
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
                skuId: a,
                applicationId: o,
                analyticsLocations: l,
                analyticsSourceLocation: s,
                giftContextProps: d,
                flowSpecificOptions: C,
                onComplete: h,
                onClose: y,
                renderModalProps: I,
                checkoutFlow: k,
                checkoutFlowConfiguration: m,
                tenantCheckoutFlowConfig: P,
                renderHeader: S,
                stepConfigs: f,
            } = e,
            { purchaseType: x } = m,
            { CustomPaymentContextProvider: R = u, UnifiedCheckoutContextProvider: j } = P,
            U = null != d ? i.dX : i.Mq;
        return (0, t.jsx)(R, {
            applicationId: o,
            skuId: a,
            activeSubscription: null,
            loadId: n,
            stepConfigs: f,
            purchaseType: x,
            analyticsLocations: l,
            paymentGateway: k === r.C.ORB_CHECKOUT ? c.kM.VIRTUAL_CURRENCY : void 0,
            isGift: d?.isGift,
            excludeSubscriptionPlansBySKU: !0,
            excludeSKUPurchasePreviews: k === r.C.ORB_CHECKOUT,
            children: (0, t.jsx)(U, {
                ...d,
                children: (0, t.jsx)(j, {
                    applicationId: o,
                    skuId: a,
                    loadId: n,
                    analyticsLocations: l,
                    analyticsSourceLocation: s,
                    onComplete: h,
                    onClose: y,
                    renderModalProps: I,
                    flowSpecificOptions: C,
                    children: (0, t.jsx)(p, {
                        applicationId: o,
                        skuId: a,
                        renderHeader: S,
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
