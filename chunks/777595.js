l.d(t, { v: () => m });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(793574),
    s = l(688810),
    o = l(166532),
    u = l(735305),
    c = l(412463),
    d = l(652215);
let p = [
        {
            key: o.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, a.jsx)(u.x, { ...e, breadcrumbSteps: [o.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
            options: { renderHeader: !0 },
        },
        {
            key: o.pn.REVIEW,
            renderStep: (e) =>
                (0, a.jsx)(c.eO, { ...e, originStep: o.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
            options: {},
        },
    ],
    m = {
        title: "Add Payment (Legacy Checkout)",
        stories: [
            {
                name: "Add Payment Step",
                id: "add-payment-step",
                component: (e) => {
                    let { useStripeElements: t } = e,
                        { analyticsLocations: l } = (0, s.Ay)(i.A.PAYMENT_FLOW_TEST_PAGE),
                        o = n.useMemo(() => (0, r.A)(), []),
                        u = n.useCallback(() => {}, []);
                    return (0, a.jsx)(
                        c.dL,
                        {
                            stepConfigs: p,
                            analyticsLocations: l,
                            applicationId: d.FYj,
                            initialPlanId: void 0,
                            skuId: null,
                            isGift: !1,
                            hideErrors: !1,
                            loadId: o,
                            purchaseType: d.VVm.ONE_TIME,
                            disablePurchases: !0,
                            excludeSubscriptionPlansBySKU: !0,
                            renderHeader: () => null,
                            onClose: u,
                            onComplete: () => {},
                            paymentContextOverrides: { paymentElementsEnabled: t },
                        },
                        `${o}-${t}`,
                    );
                },
                controls: { useStripeElements: { label: "Use Stripe Elements", type: "boolean", defaultValue: !1 } },
            },
        ],
    };
