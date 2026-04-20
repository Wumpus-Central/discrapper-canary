n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var l = n(43105),
    a = n(397927),
    r = n(793574),
    s = n(688810),
    o = n(927578),
    d = n(511484),
    c = n(473702),
    u = n(788868),
    A = n(49999),
    h = n(985018),
    _ = n(398932);
let m = (e) => {
    let { targetElementRef: t, discountOffer: m, premiumSubscription: g, dismissCoachmark: p, children: E } = e,
        { analyticsLocations: I } = (0, s.Ay)(r.A.CHURN_DISCOUNT_POPOVER),
        f = (0, d.iU)(u.gD.PREMIUM_MONTH_TIER_2, m, g),
        C = (0, i.jsx)(l.h, {
            targetElementRef: t,
            position: "right",
            align: "top",
            size: "md",
            caretConfig: { align: "start" },
            title: h.intl.format(h.t["3yZP0G"], { percent: m.discount.amount }).toString(),
            body: h.intl.format(h.t["3Q4wCy"], {
                discountedPrice: f,
                billingPeriod: (0, o.Ke)(m.discount.user_usage_limit_interval),
                numMonths: m.discount.user_usage_limit,
            }),
            graphic: { type: "image", src: _.A },
            gradientColor: "nitro-pink",
            actions: [
                {
                    text: h.intl.string(h.t.zrCzVB),
                    variant: "expressive",
                    onClick: () => {
                        p(A.i.TAKE_ACTION),
                            (0, a.mMO)(async () => {
                                let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await n
                                    .e("72820")
                                    .then(n.bind(n, 281439));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        premiumSubscription: g,
                                        analyticsLocations: I,
                                        initialStep: c.g.CONFIRM_DISCOUNT,
                                    });
                            });
                    },
                    icon: a.tvc,
                },
            ],
            onRequestClose: () => {
                p(A.i.USER_DISMISS);
            },
        });
    return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("div", { children: E }), C] });
};
