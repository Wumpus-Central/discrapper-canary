n.d(t, { UnifiedCheckoutInstance: () => m });
var l = n(627968),
    r = n(64700),
    i = n(688810),
    a = n(937008),
    s = n(314671),
    o = n(197510),
    u = n(815379),
    c = n(818348);
let d = (e) => (0, l.jsx)(s.PaymentModal, { ...e }),
    C = (e) => {
        let {
                TenantPaymentModalRenderer: t,
                renderModalProps: n,
                paymentModalVersion: a = "v2",
                paymentModalOnClose: o,
                tenantParams: u,
                ...c
            } = e,
            C = n.onClose,
            p = r.useCallback(() => {
                C();
            }, [C]),
            { analyticsLocations: m } = (0, i.Ay)(),
            _ = r.useMemo(
                () => ({
                    analyticsLocations: m,
                    initialPlanId: null,
                    onClose: null != o ? o : p,
                    ...c,
                    paymentModalVersion: a,
                }),
                [m, a, p, c, o],
            );
        return null != t
            ? (0, l.jsx)(t, {
                  originalPaymentModalProps: _,
                  renderPaymentModal: d,
                  renderModalProps: n,
                  tenantParams: u,
              })
            : (0, l.jsx)(s.PaymentModal, { ..._ });
    },
    p = (e) => {
        let { skuId: t } = e;
        return (0, l.jsx)(o.CheckoutRootProvider, { ...e, skuIDs: null != t ? [t] : [], children: e.children });
    },
    m = (e) => {
        let {
                skuId: t,
                applicationId: n,
                tenantParams: s,
                loadId: o,
                discoverySessionId: d,
                onOrderCreated: m,
                checkoutFlow: _,
                checkoutFlowConfiguration: E,
                tenantCheckoutFlowConfig: T,
                renderHeader: I,
                stepConfigs: S,
                activeSubscription: h,
                analyticsLocations: A,
                giftContextProps: O,
                onComplete: x,
                onClose: f,
                renderModalProps: P,
                additionalOptions: g,
                analyticsSourceLocation: N,
                ...R
            } = e,
            { purchaseType: v } = E,
            {
                CustomTenantProvider: U,
                TenantPaymentModalRenderer: y,
                tenantProvidesCheckoutRoot: j,
                overrideAnalyticParams: M,
                tenantAnalyticsLocation: L,
            } = T.TENANT_PROVIDER_CONFIGS,
            k = r.useMemo(() => (null != L ? [...A, L] : A), [A, L]),
            F = null != O ? a.dX : a.Mq,
            b = null != O && O.isGift,
            w = {
                unifiedCheckoutFlow: _,
                skuId: t ?? null,
                loadId: o,
                applicationId: n,
                discoverySessionId: d,
                stepConfigs: S,
                activeSubscription: h,
                purchaseType: v,
                analyticsLocations: k,
                paymentGateway: null != M ? M.payment_gateway : void 0,
                isGift: b,
                excludeSubscriptionPlansBySKU: v === c.VV.ONE_TIME,
            },
            D = (0, l.jsx)(U, {
                ...w,
                tenantParams: s,
                giftContextProps: O,
                analyticsSourceLocation: N,
                additionalOptions: g,
                overrideAnalyticParams: M,
                renderModalProps: P,
                onComplete: x,
                onClose: f,
                children: (0, l.jsx)(F, {
                    ...O,
                    children: (0, l.jsx)(C, {
                        ...R,
                        tenantParams: s,
                        renderModalProps: P,
                        TenantPaymentModalRenderer: y,
                        transitionState: P.transitionState,
                        returnRef: P.returnRef,
                        applicationId: n,
                        analyticsSourceLocation: N,
                        skuId: t,
                        onComplete: x,
                        renderHeader: I,
                    }),
                }),
            });
        return (0, l.jsx)(i.f5, {
            value: k,
            children: (0, l.jsx)(u.rV, {
                skuIDs: null != t ? [t] : [],
                paymentGateway: M?.payment_gateway,
                loadId: o,
                onOrderCreated: m,
                renderModalProps: P,
                children: j ? D : (0, l.jsx)(p, { ...w, children: D }),
            }),
        });
    };
