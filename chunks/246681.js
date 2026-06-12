n.d(t, { UnifiedCheckoutInstance: () => m });
var l = n(627968),
    r = n(64700),
    i = n(688810),
    s = n(937008),
    a = n(314671),
    o = n(197510),
    u = n(815379),
    c = n(818348);
let d = (e) => (0, l.jsx)(a.q, { ...e }),
    C = (e) => {
        let {
                TenantPaymentModalRenderer: t,
                renderModalProps: n,
                paymentModalVersion: s = "v2",
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
                    paymentModalVersion: s,
                }),
                [m, s, p, c, o],
            );
        return null != t
            ? (0, l.jsx)(t, {
                  originalPaymentModalProps: _,
                  renderPaymentModal: d,
                  renderModalProps: n,
                  tenantParams: u,
              })
            : (0, l.jsx)(a.q, { ..._ });
    },
    p = (e) => {
        let { skuId: t } = e;
        return (0, l.jsx)(o.M, { ...e, skuIDs: null != t ? [t] : [], children: e.children });
    },
    m = (e) => {
        let {
                skuId: t,
                applicationId: n,
                tenantParams: a,
                loadId: o,
                discoverySessionId: d,
                onOrderCreated: m,
                checkoutFlow: _,
                checkoutFlowConfiguration: E,
                tenantCheckoutFlowConfig: T,
                renderHeader: S,
                stepConfigs: I,
                activeSubscription: h,
                analyticsLocations: A,
                giftContextProps: O,
                onComplete: f,
                onClose: g,
                renderModalProps: x,
                additionalOptions: P,
                analyticsSourceLocation: N,
                ...R
            } = e,
            { purchaseType: y } = E,
            {
                CustomTenantProvider: v,
                TenantPaymentModalRenderer: U,
                tenantProvidesCheckoutRoot: j,
                overrideAnalyticParams: L,
                tenantAnalyticsLocation: M,
            } = T.TENANT_PROVIDER_CONFIGS,
            k = r.useMemo(() => (null != M ? [...A, M] : A), [A, M]),
            b = null != O ? s.dX : s.Mq,
            F = null != O && O.isGift,
            D = {
                unifiedCheckoutFlow: _,
                skuId: t ?? null,
                loadId: o,
                applicationId: n,
                discoverySessionId: d,
                stepConfigs: I,
                activeSubscription: h,
                purchaseType: y,
                analyticsLocations: k,
                paymentGateway: null != L ? L.payment_gateway : void 0,
                isGift: F,
                excludeSubscriptionPlansBySKU: y === c.VV.ONE_TIME,
            },
            w = (0, l.jsx)(v, {
                ...D,
                tenantParams: a,
                giftContextProps: O,
                analyticsSourceLocation: N,
                additionalOptions: P,
                overrideAnalyticParams: L,
                renderModalProps: x,
                onComplete: f,
                onClose: g,
                children: (0, l.jsx)(b, {
                    ...O,
                    children: (0, l.jsx)(C, {
                        ...R,
                        tenantParams: a,
                        renderModalProps: x,
                        TenantPaymentModalRenderer: U,
                        transitionState: x.transitionState,
                        returnRef: x.returnRef,
                        applicationId: n,
                        analyticsSourceLocation: N,
                        skuId: t,
                        onComplete: f,
                        renderHeader: S,
                    }),
                }),
            });
        return (0, l.jsx)(i.f5, {
            value: k,
            children: (0, l.jsx)(u.rV, {
                skuIDs: null != t ? [t] : [],
                paymentGateway: L?.payment_gateway,
                loadId: o,
                onOrderCreated: m,
                renderModalProps: x,
                children: j ? w : (0, l.jsx)(p, { ...D, children: w }),
            }),
        });
    };
