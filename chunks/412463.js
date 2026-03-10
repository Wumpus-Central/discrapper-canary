l.d(t, { dL: () => T, eO: () => j, n1: () => S, ud: () => E });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(635358),
    s = l(417597),
    o = l(397927),
    u = l(73153),
    c = l(830382),
    d = l(73825),
    p = l(793574),
    m = l(688810),
    h = l(937008),
    x = l(156312),
    b = l(491057),
    g = l(546042),
    y = l(97352),
    f = l(67480),
    v = l(582658);
let E = (e) => {
        let { skuId: t, isGift: l, applicationId: a } = e,
            { analyticsLocations: o } = (0, m.Ay)(p.A.PAYMENT_FLOW_TEST_PAGE),
            u = n.useRef(null),
            d = n.useRef(null),
            [h, x] = n.useState(() => (0, r.A)());
        n.useEffect(() => {
            (u.current !== t || d.current !== l) && (x((0, r.A)()), (u.current = t), (d.current = l));
        }, [t, l]);
        let [b, g] = (0, s.yK)([f.A], () => [f.A.isFetching(t), f.A.get(t)]);
        return (
            n.useEffect(() => {
                null != g || b || (0, c.EX)(a, t, i.g.VARIANTS_GROUP).catch((e) => {});
            }, [a, t, g, b]),
            {
                loadId: h,
                analyticsLocations: o,
                handleClose: n.useCallback((e) => {}, []),
                handleComplete: n.useCallback(() => {}, []),
                isFetching: b,
                sku: g,
                skuId: t,
                isGift: l,
            }
        );
    },
    S = (e) => {
        let { subscriptionPlanId: t } = e;
        n.useEffect(() => {
            y.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, d.zS)());
        }, []);
        let l = (0, s.bG)([y.A], () => (null != t ? y.A.get(t) : null));
        return { isLoadedForPremiumSKUs: (0, s.bG)([y.A], () => y.A.isLoadedForPremiumSKUs()), selectedPlan: l };
    },
    j = (e) =>
        (0, a.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, a.jsx)(o.Text, { variant: "text-md/normal", children: e.text }),
                (0, a.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, a.jsx)(o.MzZ, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "← Go Back",
                    }),
                }),
            ],
        }),
    T = (e) => {
        let {
                analyticsLocations: t,
                applicationId: l,
                skuId: n,
                isGift: r,
                onClose: i,
                onComplete: s,
                initialPlanId: u,
                purchaseType: c,
                stepConfigs: d,
                loadId: p,
                excludeSubscriptionPlansBySKU: m,
                renderHeader: y,
                hideErrors: f,
                disablePurchases: E,
                paymentContextOverrides: S,
            } = e,
            j = f ? { purchasePreviewError: null, purchaseError: null, ...S } : { ...S };
        E && (j.disablePurchasesForStorybook = !0);
        let T = `${n}-${r}-${p}`;
        return (0, a.jsx)(
            x.PaymentContextProvider,
            {
                stepConfigs: d,
                applicationId: l,
                skuIDs: null != n ? [n] : [],
                isGift: r,
                activeSubscription: null,
                purchaseType: c,
                excludeSubscriptionPlansBySKU: m,
                children: (0, a.jsx)(v.Y, {
                    ...j,
                    children: (0, a.jsx)(b.Qt, {
                        children: (0, a.jsx)(h.dX, {
                            isGift: r,
                            children: (0, a.jsx)(
                                g.PaymentModal,
                                {
                                    transitionState: o.ip4.ENTERED,
                                    onClose: i,
                                    onComplete: s,
                                    applicationId: l,
                                    skuId: n,
                                    initialPlanId: u,
                                    analyticsLocations: t,
                                    renderHeader: y,
                                },
                                T,
                            ),
                        }),
                    }),
                }),
            },
            T,
        );
    };
