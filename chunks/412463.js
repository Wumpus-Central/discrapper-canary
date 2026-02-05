"use strict";
n.d(t, { dL: () => v, eO: () => S, n1: () => y, ud: () => T });
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(635358),
    o = n(417597),
    l = n(397927),
    u = n(73153),
    c = n(830382),
    d = n(73825),
    _ = n(793574),
    f = n(688810),
    p = n(937008),
    h = n(156312),
    m = n(491057),
    g = n(546042),
    E = n(97352),
    A = n(67480),
    I = n(582658);
let T = (e) => {
        let { skuId: t, isGift: n, applicationId: r } = e,
            { analyticsLocations: l } = (0, f.Ay)(_.A.PAYMENT_FLOW_TEST_PAGE),
            u = i.useRef(null),
            d = i.useRef(null),
            [p, h] = i.useState(() => (0, a.A)());
        i.useEffect(() => {
            (u.current !== t || d.current !== n) && (h((0, a.A)()), (u.current = t), (d.current = n));
        }, [t, n]);
        let [m, g] = (0, o.yK)([A.A], () => [A.A.isFetching(t), A.A.get(t)]);
        return (
            i.useEffect(() => {
                null != g || m || (0, c.EX)(r, t, s.g.VARIANTS_GROUP).catch((e) => {});
            }, [r, t, g, m]),
            {
                loadId: p,
                analyticsLocations: l,
                handleClose: i.useCallback((e) => {}, []),
                handleComplete: i.useCallback(() => {}, []),
                isFetching: m,
                sku: g,
                skuId: t,
                isGift: n,
            }
        );
    },
    y = (e) => {
        let { subscriptionPlanId: t } = e;
        i.useEffect(() => {
            E.A.isLoadedForPremiumSKUs() || u.h.wait(() => (0, d.zS)());
        }, []);
        let n = (0, o.bG)([E.A], () => (null != t ? E.A.get(t) : null));
        return { isLoadedForPremiumSKUs: (0, o.bG)([E.A], () => E.A.isLoadedForPremiumSKUs()), selectedPlan: n };
    },
    S = (e) =>
        (0, r.jsxs)("div", {
            style: { padding: 20 },
            children: [
                (0, r.jsx)(l.Text, { variant: "text-md/normal", children: e.text }),
                (0, r.jsx)("div", {
                    style: { marginTop: 16 },
                    children: (0, r.jsx)(l.MzZ, {
                        onClick: () => e.handleStepChange(e.originStep),
                        children: "← Go Back",
                    }),
                }),
            ],
        }),
    v = (e) => {
        let {
                analyticsLocations: t,
                applicationId: n,
                skuId: i,
                isGift: a,
                onClose: s,
                onComplete: o,
                initialPlanId: u,
                purchaseType: c,
                stepConfigs: d,
                loadId: _,
                excludeSubscriptionPlansBySKU: f,
                renderHeader: E,
                hideErrors: A,
                disablePurchases: T,
                paymentContextOverrides: y,
            } = e,
            S = A ? { purchasePreviewError: null, purchaseError: null, ...y } : { ...y };
        T && (S.disablePurchasesForStorybook = !0);
        let v = `${i}-${a}-${_}`;
        return (0, r.jsx)(
            h.PaymentContextProvider,
            {
                stepConfigs: d,
                applicationId: n,
                skuIDs: null != i ? [i] : [],
                isGift: a,
                activeSubscription: null,
                purchaseType: c,
                excludeSubscriptionPlansBySKU: f,
                children: (0, r.jsx)(I.Y, {
                    ...S,
                    children: (0, r.jsx)(m.Qt, {
                        children: (0, r.jsx)(p.dX, {
                            isGift: a,
                            children: (0, r.jsx)(
                                g.PaymentModal,
                                {
                                    transitionState: l.ip4.ENTERED,
                                    onClose: s,
                                    onComplete: o,
                                    applicationId: n,
                                    skuId: i,
                                    initialPlanId: u,
                                    analyticsLocations: t,
                                    hideShadow: !0,
                                    renderHeader: E,
                                },
                                v,
                            ),
                        }),
                    }),
                }),
            },
            v,
        );
    };
