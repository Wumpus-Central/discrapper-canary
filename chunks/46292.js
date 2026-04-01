r.d(t, { PremiumResubscribeModal: () => f });
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
    x = r(788868);
let g = (0, _.A)((0, u.E)()),
    S = [d.pn.CONFIRM],
    f = (e) => {
        let { analyticsLocations: t, premiumSubscription: r } = e,
            a = (0, m.EL)(r)?.planId,
            _ = null != a ? (0, m.m6)(a) : null;
        i()(null != _, "Should not be resubscribing Nitro without premiumType");
        let d = _ === x.PremiumTypes.TIER_0,
            [u, f] = n.useState(C.g.CONFIRM),
            I = n.useCallback(() => {
                switch (u) {
                    case C.g.CONFIRM:
                        return (0, o.jsx)(b.m, { ...e, setStep: f });
                    case C.g.SUCCESS:
                        return (0, o.jsx)(h.B, { ...e, premiumType: _ });
                    default:
                        return (0, o.jsx)(b.m, { ...e, setStep: f });
                }
            }, [u, e, _]);
        return (0, o.jsx)(s.f5, {
            value: t,
            children: (0, o.jsx)(c.PaymentContextProvider, {
                activeSubscription: r,
                stepConfigs: g,
                skuIDs: [],
                breadcrumbs: S,
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
