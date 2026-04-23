r.d(t, { PremiumResubscribeModal: () => S });
var o = r(627968),
    n = r(64700),
    a = r(284009),
    i = r.n(a),
    _ = r(915220),
    s = r(688810),
    l = r(937008),
    c = r(156312),
    d = r(166532),
    p = r(639289),
    u = r(674619),
    m = r(927578),
    b = r(480254),
    C = r(232392),
    h = r(190269),
    g = r(788868);
let x = (0, _.A)((0, u.E)()),
    f = [d.pn.CONFIRM],
    S = (e) => {
        let { analyticsLocations: t, premiumSubscription: r } = e,
            a = (0, m.EL)(r)?.planId,
            _ = null != a ? (0, m.m6)(a) : null;
        i()(null != _, "Should not be resubscribing Nitro without premiumType");
        let d = _ === g.PremiumTypes.TIER_0,
            [u, S] = n.useState(C.g.CONFIRM),
            I = n.useCallback(() => {
                switch (u) {
                    case C.g.CONFIRM:
                        return (0, o.jsx)(b.m, { ...e, setStep: S });
                    case C.g.SUCCESS:
                        return (0, o.jsx)(h.B, { ...e, premiumType: _ });
                    default:
                        return (0, o.jsx)(b.m, { ...e, setStep: S });
                }
            }, [u, e, _]);
        return (0, o.jsx)(s.f5, {
            value: t,
            children: (0, o.jsx)(c.PaymentContextProvider, {
                activeSubscription: r,
                stepConfigs: x,
                skuIDs: [],
                breadcrumbs: f,
                children: (0, o.jsx)(l.Mq, {
                    children: (0, o.jsx)(p.A, {
                        isConfirmationStep: u === C.g.SUCCESS,
                        isEligibleForWowMoment: !d,
                        shouldPrefetchWowMoment: !d,
                        children: I(),
                    }),
                }),
            }),
        });
    };
