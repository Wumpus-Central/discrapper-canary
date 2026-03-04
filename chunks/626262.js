n.d(t, { $: () => N });
var i = n(627968),
    l = n(64700),
    r = n(989349),
    a = n.n(r),
    s = n(554146),
    o = n(916768),
    c = n(617108),
    _ = n(745299),
    E = n(816733),
    d = n(927578),
    u = n(160761),
    A = n(49999),
    T = n(652215),
    I = n(788868);
let N = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        r = l.useMemo(() => {
            switch (n) {
                case T.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = E.A.getAlmostExpiringTrialOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, d.e1)(e[0]) };
                case T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = E.A.getAlmostExpiringDiscountOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, d.e1)(t[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        N = a()().add(5, "days").toDate(),
        [R, S] = (0, u.Bo)(t, r, A.m.NOTICE_BAR);
    if (null == R) return null;
    if (R === s.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === T.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
            return (0, i.jsx)(_.A, {
                dismissCurrentNotice: () => {
                    S(A.i.USER_DISMISS), (0, o.w)(N);
                },
                subscriptionTier: I.pe.TIER_2,
            });
        if (n === T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
            return (0, i.jsx)(c.A, {
                dismissCurrentNotice: () => {
                    S(A.i.USER_DISMISS), (0, o.w)(N);
                },
                subscriptionTier: I.pe.TIER_2,
            });
    }
};
