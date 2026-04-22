a.d(l, { A: () => f });
var t = a(627968);
a(64700);
var s = a(265486),
    i = a(192308),
    n = a(403581),
    c = a(793574),
    h = a(688810),
    r = a(927578),
    o = a(511484),
    d = a(473702),
    v = a(788868),
    g = a(49999),
    p = a(985018),
    m = a(398932);
let f = (e) => {
    let { targetElementRef: l, discountOffer: f, premiumSubscription: w, dismissCoachmark: x, children: u } = e,
        { analyticsLocations: A } = (0, h.Ay)(c.A.CHURN_DISCOUNT_POPOVER),
        I = (0, o.iU)(v.gD.PREMIUM_MONTH_TIER_2, f, w),
        M = (0, t.jsx)(s.h, {
            targetElementRef: l,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: p.intl.format(p.t["3yZP0G"], { percent: f.discount.amount }).toString(),
            body: p.intl.format(p.t["3Q4wCy"], {
                discountedPrice: I,
                billingPeriod: (0, r.Ke)(f.discount.user_usage_limit_interval),
                numMonths: f.discount.user_usage_limit,
            }),
            graphic: { type: "image", src: m.A },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: p.intl.string(p.t.zrCzVB),
                    variant: "expressive",
                    onClick: () => {
                        x(g.i.TAKE_ACTION),
                            (0, i.openModalLazy)(async () => {
                                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                    a.e("41353"),
                                    a.e("35432"),
                                    a.e("72946"),
                                ]).then(a.bind(a, 281439));
                                return (l) =>
                                    (0, t.jsx)(e, {
                                        ...l,
                                        premiumSubscription: w,
                                        analyticsLocations: A,
                                        initialStep: d.g.CONFIRM_DISCOUNT,
                                    });
                            });
                    },
                    icon: n.t,
                },
            ],
            onRequestClose: () => {
                x(g.i.USER_DISMISS);
            },
        });
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("div", { children: u }), M] });
};
