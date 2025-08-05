(n.d(t, { W: () => p }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(704215),
    o = n(535278),
    s = n(246965),
    a = n(431),
    c = n(74538),
    d = n(706140),
    u = n(921944),
    h = n(981631),
    _ = n(474936);
let E = (e) =>
        r.useMemo(() => {
            switch (e) {
                case h.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                    let t = a.Z.getAlmostExpiringTrialOffers([_.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(t[0]) };
                case h.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let n = a.Z.getAlmostExpiringDiscountOffers([_.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(n[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [e]),
    p = (e) => {
        let { dismissibleContent: t, noticeType: n } = e,
            r = E(n),
            [a, c] = (0, d.Tt)(t, r, u.R.NOTICE_BAR);
        if (null == a) return null;
        if (a === l.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
            if (n === h.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, i.jsx)(s.Z, {
                    dismissCurrentNotice: () => c(u.L.USER_DISMISS),
                    subscriptionTier: _.Si.TIER_2
                });
            if (n === h.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, i.jsx)(o.Z, {
                    dismissCurrentNotice: () => c(u.L.USER_DISMISS),
                    subscriptionTier: _.Si.TIER_2
                });
        }
    };
