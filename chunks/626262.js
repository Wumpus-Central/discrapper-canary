n.d(t, { $: () => h }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(554146),
    s = n(617108),
    o = n(745299),
    l = n(816733),
    c = n(927578),
    u = n(160761),
    d = n(49999),
    f = n(652215),
    p = n(788868);
let _ = (e) =>
        i.useMemo(() => {
            switch (e) {
                case f.kqX.PREMIUM_TIER_2_TRIAL_ENDING:
                    let t = l.A.getAlmostExpiringTrialOffers([p.pe.TIER_2]);
                    return { cooldownDurationMs: (0, c.e1)(t[0]) };
                case f.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let n = l.A.getAlmostExpiringDiscountOffers([p.pe.TIER_2]);
                    return { cooldownDurationMs: (0, c.e1)(n[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [e]),
    h = (e) => {
        let { dismissibleContent: t, noticeType: n } = e,
            i = _(n),
            [l, c] = (0, u.Bo)(t, i, d.m.NOTICE_BAR);
        if (null == l) return null;
        if (l === a.M.NAGBAR_NOTICE_OFFER_EXPIRING) {
            if (n === f.kqX.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, r.jsx)(o.A, {
                    dismissCurrentNotice: () => c(d.i.USER_DISMISS),
                    subscriptionTier: p.pe.TIER_2,
                });
            if (n === f.kqX.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, r.jsx)(s.A, {
                    dismissCurrentNotice: () => c(d.i.USER_DISMISS),
                    subscriptionTier: p.pe.TIER_2,
                });
        }
    };
