l.d(t, { v: () => m });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(793574),
    o = l(688810),
    s = l(166532),
    d = l(735305),
    c = l(412463),
    u = l(652215);
let p = [
        {
            key: s.pn.ADD_PAYMENT_STEPS,
            renderStep: (e) => (0, a.jsx)(d.x, { ...e, breadcrumbSteps: [s.pn.ADD_PAYMENT_STEPS], onReturn: () => {} }),
            options: { renderHeader: !0 },
        },
        {
            key: s.pn.REVIEW,
            renderStep: (e) =>
                (0, a.jsx)(c.eO, { ...e, originStep: s.pn.ADD_PAYMENT_STEPS, text: "Review Step Placeholder" }),
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
                        { analyticsLocations: l } = (0, o.Ay)(i.A.PAYMENT_FLOW_TEST_PAGE),
                        s = n.useMemo(() => (0, r.A)(), []),
                        d = n.useCallback(() => {}, []);
                    return (0, a.jsx)(
                        c.dL,
                        {
                            stepConfigs: p,
                            analyticsLocations: l,
                            applicationId: u.FYj,
                            initialPlanId: void 0,
                            skuId: null,
                            isGift: !1,
                            hideErrors: !1,
                            loadId: s,
                            purchaseType: u.VVm.ONE_TIME,
                            disablePurchases: !0,
                            excludeSubscriptionPlansBySKU: !0,
                            renderHeader: () => null,
                            onClose: d,
                            onComplete: () => {},
                            paymentContextOverrides: { paymentElementsEnabled: t },
                        },
                        `${s}-${t}`,
                    );
                },
                controls: { useStripeElements: { label: "Use Stripe Elements", type: "boolean", defaultValue: !1 } },
            },
        ],
    };
