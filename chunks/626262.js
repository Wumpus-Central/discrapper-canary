n.d(t, { $: () => p });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    s = n.n(r),
    a = n(554146),
    o = n(916768),
    c = n(617108),
    u = n(745299),
    d = n(816733),
    _ = n(927578),
    E = n(160761),
    T = n(49999),
    A = n(652215),
    I = n(788868);
let p = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => {
            switch (n) {
                case A.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = d.A.getAlmostExpiringTrialOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, _.e1)(e[0]) };
                case A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = d.A.getAlmostExpiringDiscountOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, _.e1)(t[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        p = s()().add(5, "days").toDate(),
        [N, m] = (0, E.Bo)(t, r, T.m.NOTICE_BAR);
    if (null == N) return null;
    if (N === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === A.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
            return (0, i.jsx)(u.A, {
                dismissCurrentNotice: () => {
                    m(T.i.USER_DISMISS), (0, o.w)(p);
                },
                subscriptionTier: I.pe.TIER_2,
            });
        if (n === A.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
            return (0, i.jsx)(c.A, {
                dismissCurrentNotice: () => {
                    m(T.i.USER_DISMISS), (0, o.w)(p);
                },
                subscriptionTier: I.pe.TIER_2,
            });
    }
};
