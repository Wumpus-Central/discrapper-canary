n.d(t, { $: () => p });
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(554146),
    o = n(916768),
    d = n(617108),
    c = n(745299),
    u = n(816733),
    h = n(927578),
    A = n(160761),
    _ = n(49999),
    m = n(652215),
    g = n(788868);
let p = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        s = l.useMemo(() => {
            switch (n) {
                case m.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = u.A.getAlmostExpiringTrialOffersForReminder([g.pe.TIER_2]);
                    return { cooldownDurationMs: (0, h.e1)(e[0]) };
                case m.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = u.A.getAlmostExpiringDiscountOffersForReminder([g.pe.TIER_2]);
                    return { cooldownDurationMs: (0, h.e1)(t[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        p = a()().add(5, "days").toDate(),
        [f, x] = (0, A.Bo)(t, s, _.m.NOTICE_BAR);
    if (null == f) return null;
    if (f === r.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === m.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
            return (0, i.jsx)(c.A, {
                dismissCurrentNotice: () => {
                    x(_.i.USER_DISMISS), (0, o.w)(p);
                },
                subscriptionTier: g.pe.TIER_2,
            });
        if (n === m.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
            return (0, i.jsx)(d.A, {
                dismissCurrentNotice: () => {
                    x(_.i.USER_DISMISS), (0, o.w)(p);
                },
                subscriptionTier: g.pe.TIER_2,
            });
    }
};
