"use strict";
n.d(t, { $: () => N });
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(554146),
    o = n(916768),
    E = n(617108),
    c = n(745299),
    _ = n(816733),
    d = n(927578),
    A = n(160761),
    u = n(49999),
    T = n(652215),
    I = n(788868);
let N = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        l = r.useMemo(() => {
            switch (n) {
                case T.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = _.A.getAlmostExpiringTrialOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, d.e1)(e[0]) };
                case T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = _.A.getAlmostExpiringDiscountOffersForReminder([I.pe.TIER_2]);
                    return { cooldownDurationMs: (0, d.e1)(t[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        N = s()().add(5, "days").toDate(),
        [R, S] = (0, A.Bo)(t, l, u.m.NOTICE_BAR);
    if (null == R) return null;
    if (R === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === T.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
            return (0, i.jsx)(c.A, {
                dismissCurrentNotice: () => {
                    S(u.i.USER_DISMISS), (0, o.w)(N);
                },
                subscriptionTier: I.pe.TIER_2,
            });
        if (n === T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
            return (0, i.jsx)(E.A, {
                dismissCurrentNotice: () => {
                    S(u.i.USER_DISMISS), (0, o.w)(N);
                },
                subscriptionTier: I.pe.TIER_2,
            });
    }
};
