(n.d(t, { W: () => I }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(704215),
    a = n(535278),
    o = n(246965),
    s = n(431),
    c = n(74538),
    u = n(706140),
    d = n(921944),
    _ = n(981631),
    E = n(474936);
let p = (e) =>
        i.useMemo(() => {
            switch (e) {
                case _.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                    let t = s.Z.getAlmostExpiringTrialOffers([E.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(t[0]) };
                case _.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let n = s.Z.getAlmostExpiringDiscountOffers([E.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(n[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [e]),
    I = (e) => {
        let { dismissibleContent: t, noticeType: n } = e,
            i = p(n),
            [s, c] = (0, u.Tt)(t, i, d.R.NOTICE_BAR);
        if (null == s) return null;
        if (s === l.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
            if (n === _.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, r.jsx)(o.Z, {
                    dismissCurrentNotice: () => c(d.L.USER_DISMISS),
                    subscriptionTier: E.Si.TIER_2
                });
            if (n === _.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, r.jsx)(a.Z, {
                    dismissCurrentNotice: () => c(d.L.USER_DISMISS),
                    subscriptionTier: E.Si.TIER_2
                });
        }
    };
