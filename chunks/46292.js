r.d(t, { PremiumResubscribeModal: () => S });
var a = r(627968),
    n = r(64700),
    i = r(284009),
    o = r.n(i),
    s = r(688810),
    l = r(937008),
    d = r(156312),
    c = r(166532),
    _ = r(639289),
    p = r(674619),
    u = r(927578),
    m = r(480254),
    b = r(232392),
    C = r(190269),
    x = r(788868);
let S = (e) => {
    let { analyticsLocations: t, premiumSubscription: r } = e,
        i = (0, u.EL)(r)?.planId,
        S = null != i ? (0, u.m6)(i) : null;
    o()(null != S, "Should not be resubscribing Nitro without premiumType");
    let g = S === x.PremiumTypes.TIER_0,
        [h, y] = n.useState(b.g.CONFIRM),
        I = n.useCallback(() => {
            switch (h) {
                case b.g.CONFIRM:
                    return (0, a.jsx)(m.m, { ...e, setStep: y });
                case b.g.SUCCESS:
                    return (0, a.jsx)(C.B, { ...e, premiumType: S });
                default:
                    return (0, a.jsx)(m.m, { ...e, setStep: y });
            }
        }, [h, e, S]);
    return (0, a.jsx)(s.f5, {
        value: t,
        children: (0, a.jsx)(d.PaymentContextProvider, {
            activeSubscription: r,
            stepConfigs: (0, p.E)(),
            skuIDs: [],
            breadcrumbs: [c.pn.CONFIRM],
            children: (0, a.jsx)(l.Mq, {
                children: (0, a.jsx)(_.A, {
                    isConfirmationStep: h === b.g.SUCCESS,
                    isEligibleForWowMoment: !g,
                    shouldPrefetchWowMoment: !g,
                    children: I(),
                }),
            }),
        }),
    });
};
