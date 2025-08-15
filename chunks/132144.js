n.d(t, { W: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(704215),
    a = n(535278),
    o = n(246965),
    c = n(431),
    s = n(74538),
    u = n(706140),
    d = n(921944),
    _ = n(981631),
    E = n(474936);
let I = (e) => {
    let { dismissibleContent: t, noticeType: n } = e,
        I = i.useMemo(() => {
            switch (n) {
                case _.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                    let e = c.Z.getAlmostExpiringTrialOffers([E.Si.TIER_2]);
                    return { cooldownDurationMs: (0, s.yg)(e[0]) };
                case _.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let t = c.Z.getAlmostExpiringDiscountOffers([E.Si.TIER_2]);
                    return { cooldownDurationMs: (0, s.yg)(t[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [n]),
        [T, O] = (0, u.Tt)(t, I, d.R.NOTICE_BAR);
    if (null == T) return null;
    if (T === l.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
        if (n === _.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
            return (0, r.jsx)(o.Z, {
                dismissCurrentNotice: () => O(d.L.USER_DISMISS),
                subscriptionTier: E.Si.TIER_2,
            });
        if (n === _.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
            return (0, r.jsx)(a.Z, {
                dismissCurrentNotice: () => O(d.L.USER_DISMISS),
                subscriptionTier: E.Si.TIER_2,
            });
    }
};
