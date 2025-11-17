n.d(t, { W: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(704215),
    o = n(535278),
    s = n(246965),
    l = n(431),
    c = n(74538),
    u = n(706140),
    d = n(921944),
    f = n(981631),
    _ = n(474936);
let p = (e) =>
        i.useMemo(() => {
            switch (e) {
                case f.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
                    let t = l.Z.getAlmostExpiringTrialOffers([_.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(t[0]) };
                case f.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING:
                    let n = l.Z.getAlmostExpiringDiscountOffers([_.Si.TIER_2]);
                    return { cooldownDurationMs: (0, c.yg)(n[0]) };
                default:
                    return { cooldownDurationMs: 1 / 0 };
            }
        }, [e]),
    h = (e) => {
        let { dismissibleContent: t, noticeType: n } = e,
            i = p(n),
            [l, c] = (0, u.Tt)(t, i, d.R.NOTICE_BAR);
        if (null == l) return null;
        if (l === a.z.NAGBAR_NOTICE_OFFER_EXPIRING) {
            if (n === f.kVF.PREMIUM_TIER_2_TRIAL_ENDING)
                return (0, r.jsx)(s.Z, {
                    dismissCurrentNotice: () => c(d.L.USER_DISMISS),
                    subscriptionTier: _.Si.TIER_2,
                });
            if (n === f.kVF.PREMIUM_TIER_2_DISCOUNT_ENDING)
                return (0, r.jsx)(o.Z, {
                    dismissCurrentNotice: () => c(d.L.USER_DISMISS),
                    subscriptionTier: _.Si.TIER_2,
                });
        }
    };
