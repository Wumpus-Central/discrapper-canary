n.d(t, { $: () => I });
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(554146),
    o = n(135099),
    d = n(380786),
    c = n(916768),
    u = n(617108),
    h = n(745299),
    A = n(816733),
    _ = n(927578),
    m = n(160761),
    p = n(49999),
    g = n(652215),
    f = n(788868),
    E = n(985018),
    x = n(873494);
let I = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        s = l.useMemo(() => {
            switch (n) {
                case g.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = A.A.getAlmostExpiringTrialOffersForReminder([f.pe.TIER_2]);
                    return { cooldownDurationMs: (0, _.e1)(e[0]) };
                case g.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = A.A.getAlmostExpiringDiscountOffersForReminder([f.pe.TIER_2]);
                    return { cooldownDurationMs: (0, _.e1)(t[0]) };
                case g.kqX.RIOT_MIGRATION:
                case g.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
                    return { cooldownDurationMs: 6048e5 };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        I = a()().add(5, "days").toDate(),
        [C, N] = (0, m.Bo)(t, s, p.m.NOTICE_BAR);
    if (null == C) return null;
    switch (C) {
        case r.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === g.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(h.A, {
                    dismissCurrentNotice: () => {
                        N(p.i.USER_DISMISS), (0, c.w)(I);
                    },
                    subscriptionTier: f.pe.TIER_2,
                });
            if (n === g.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(u.A, {
                    dismissCurrentNotice: () => {
                        N(p.i.USER_DISMISS), (0, c.w)(I);
                    },
                    subscriptionTier: f.pe.TIER_2,
                });
            break;
        case r.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(o.A, { markAsDismissed: N, applicationName: E.intl.string(x.default["1S6oAo"]) });
        case r.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(d.A, { markAsDismissed: () => N(p.i.USER_DISMISS) });
    }
};
