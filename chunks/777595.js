"use strict";
n.d(t, { e: () => f });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(793574),
    o = n(688810),
    l = n(166532),
    u = n(735305),
    c = n(412463),
    d = n(652215);
let _ = [
        {
            key: l.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, r.jsx)(u.x, { ...e, breadcrumbSteps: [l.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
            options: { renderHeader: !0 },
        },
        {
            key: l.pn.REVIEW,
            renderStep: (e) =>
                (0, r.jsx)(c.eO, { ...e, originStep: l.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
            options: {},
        },
    ],
    f = {
        name: "Add Payment Step",
        id: "add-payment-step",
        component: (e) => {
            let { useStripeElements: t } = e,
                { analyticsLocations: n } = (0, o.Ay)(s.A.PAYMENT_FLOW_TEST_PAGE),
                l = i.useMemo(() => (0, a.A)(), []),
                u = i.useCallback(() => {}, []);
            return (0, r.jsx)(
                c.dL,
                {
                    stepConfigs: _,
                    analyticsLocations: n,
                    applicationId: d.FYj,
                    initialPlanId: void 0,
                    skuId: null,
                    isGift: !1,
                    hideErrors: !1,
                    loadId: l,
                    purchaseType: d.VVm.ONE_TIME,
                    disablePurchases: !0,
                    excludeSubscriptionPlansBySKU: !0,
                    renderHeader: () => null,
                    onClose: u,
                    onComplete: () => {},
                    paymentContextOverrides: { paymentElementsEnabled: t },
                },
                `${l}-${t}`,
            );
        },
        controls: { useStripeElements: { label: "Use Stripe Elements", type: "boolean", defaultValue: !1 } },
    };
