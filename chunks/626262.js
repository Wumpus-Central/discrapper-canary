"use strict";
n.d(t, { $: () => f, D: () => C });
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(554146),
    o = n(135099),
    c = n(380786),
    u = n(916768),
    d = n(617108),
    _ = n(745299),
    E = n(816733),
    A = n(927578),
    m = n(160761),
    I = n(49999),
    T = n(652215),
    N = n(788868),
    g = n(985018),
    p = n(452832);
function C(e) {
    switch (e) {
        case T.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
            let t = E.A.getAlmostExpiringTrialOffersForReminder([N.pe.TIER_2]);
            return { cooldownDurationMs: (0, A.e1)(t[0]) };
        case T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
            let n = E.A.getAlmostExpiringDiscountOffersForReminder([N.pe.TIER_2]);
            return { cooldownDurationMs: (0, A.e1)(n[0]) };
        case T.kqX.RIOT_MIGRATION:
        case T.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return { cooldownDurationMs: 6048e5 };
        default:
            return { cooldownDurationMs: 1 / 0 };
    }
}
let f = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        l = r.useMemo(() => C(n), [n]),
        E = s()().add(5, "days").toDate(),
        [A, f] = (0, m.Bo)(t, l, I.m.NOTICE_BAR);
    if (null == A) return null;
    switch (A) {
        case a.M.NAGBAR_NOTICE_OFFER_EXPIRING:
            if (n === T.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(_.A, {
                    dismissCurrentNotice: () => {
                        f(I.i.USER_DISMISS), (0, u.w)(E);
                    },
                    subscriptionTier: N.pe.TIER_2,
                });
            if (n === T.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(d.A, {
                    dismissCurrentNotice: () => {
                        f(I.i.USER_DISMISS), (0, u.w)(E);
                    },
                    subscriptionTier: N.pe.TIER_2,
                });
            break;
        case a.M.RIOT_CONNECTION_DEPRECATION:
            return (0, i.jsx)(o.A, { markAsDismissed: f, applicationName: g.intl.string(p.default["1S6oAo"]) });
        case a.M.RIOT_CONNECTION_DEPRECATION_ADMIN:
            return (0, i.jsx)(c.A, { markAsDismissed: () => f(I.i.USER_DISMISS) });
    }
};
