l.d(t, { dL: () => T, eO: () => j, n1: () => S, ud: () => C });
var a = l(627968),
    n = l(64700),
    r = l(835245),
    i = l(635358),
    o = l(417597),
    s = l(834730),
    d = l(349288),
    c = l(231723),
    u = l(73153),
    p = l(830382),
    m = l(73825),
    b = l(793574),
    h = l(688810),
    x = l(937008),
    y = l(156312),
    v = l(491057),
    g = l(546042),
    f = l(97352),
    _ = l(67480),
    E = l(582658);
let C = (e) => {
        let { skuId: t, isGift: l, applicationId: a } = e,
            { analyticsLocations: s } = (0, h.Ay)(b.A.PAYMENT_FLOW_TEST_PAGE),
            d = n.useRef(null),
            c = n.useRef(null),
            [u, m] = n.useState(() => (0, r.A)());
        n.useEffect(() => {
            (d.current !== t || c.current !== l) && (m((0, r.A)()), (d.current = t), (c.current = l));
        }, [t, l]);
        let [x, y] = (0, o.yK)([_.A], () => [_.A.isFetching(t), _.A.get(t)]);
        return (
            n.useEffect(() => {
                null != y || x || (0, p.EX)(a, t, i.g.VARIANTS_GROUP).catch((e) => {});
            }, [a, t, y, x]),
            {
                loadId: u,
                analyticsLocations: s,
                handleClose: n.useCallback((e) => {}, []),
                handleComplete: n.useCallback(() => {}, []),
                isFetching: x,
                sku: y,
                skuId: t,
                isGift: l,
            }
        );
    },
    S = (e) => {
        let { subscriptionPlanId: t } = e;
        n.useEffect(() => {
            f.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, m.zS)());
        }, []);
        let l = (0, o.bG)([f.A], () => (null != t ? f.A.get(t) : null));
        return { isLoadedForPremiumSKUs: (0, o.bG)([f.A], () => f.A.isLoadedForPremiumSKUs()), selectedPlan: l };
    },
    j = (e) =>
        (0, a.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, a.jsx)(s.E, { variant: "text-md/normal", children: e.text }),
                (0, a.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, a.jsx)(d.Anchor, {
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
                onComplete: o,
                initialPlanId: s,
                purchaseType: d,
                stepConfigs: u,
                loadId: p,
                excludeSubscriptionPlansBySKU: m,
                renderHeader: b,
                hideErrors: h,
                disablePurchases: f,
                paymentContextOverrides: _,
            } = e,
            C = h ? { purchasePreviewError: null, purchaseError: null, ..._ } : { ..._ };
        f && (C.disablePurchasesForStorybook = !0);
        let S = `${n}-${r}-${p}`;
        return (0, a.jsx)(
            y.PaymentContextProvider,
            {
                stepConfigs: u,
                applicationId: l,
                skuIDs: null != n ? [n] : [],
                isGift: r,
                activeSubscription: null,
                purchaseType: d,
                excludeSubscriptionPlansBySKU: m,
                children: (0, a.jsx)(E.Y, {
                    ...C,
                    children: (0, a.jsx)(v.Qt, {
                        children: (0, a.jsx)(x.dX, {
                            isGift: r,
                            children: (0, a.jsx)(
                                g.PaymentModal,
                                {
                                    transitionState: c.ip.ENTERED,
                                    onClose: i,
                                    onComplete: o,
                                    applicationId: l,
                                    skuId: n,
                                    initialPlanId: s,
                                    analyticsLocations: t,
                                    renderHeader: b,
                                },
                                S,
                            ),
                        }),
                    }),
                }),
            },
            S,
        );
    };
