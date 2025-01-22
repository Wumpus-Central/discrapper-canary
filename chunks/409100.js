var i = n(200651);
n(192379);
var r = n(780384),
    s = n(481060),
    a = n(410030),
    l = n(74538),
    o = n(650032),
    c = n(104494),
    d = n(639119),
    u = n(197115),
    m = n(474936),
    g = n(388032),
    h = n(755904);
let p = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: i, trialDurationCopy: r, isPersistentCTA: s, shouldShowReferralTrialCopy: a, subscriptionTrial: o } = e;
        if (t && a) return g.intl.string(g.t.bXTClZ);
        if (t && (n === m.Si.TIER_2 || s))
            return (0, l.Rt)({
                intervalType: null == o ? void 0 : o.interval,
                intervalCount: null == o ? void 0 : o.interval_count
            });
        if (t) return g.intl.formatToPlainString(g.t.nTmm2t, { freeTrialText: r });
        else if (i && n === m.Si.TIER_2) return g.intl.string(g.t.MtTjnZ);
    },
    x = (e, t, n, i) => (t || n ? g.intl.string(g.t.fkPGam) : e === m.Si.TIER_2 ? g.intl.formatToPlainString(g.t.bkQ4bG, { percent: i }) : void 0);
t.Z = (e) => {
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: f = !1, isPersistentCTA: E = !1, useShorterCTA: _ = !1, ...C } = e,
        T = (0, a.ZP)(),
        S = (0, r.wj)(T) || t,
        b = (0, d.N)(),
        I = null == b ? void 0 : b.subscription_trial,
        N = (0, l.a5)({
            intervalType: null == I ? void 0 : I.interval,
            intervalCount: null == I ? void 0 : I.interval_count
        }),
        v = (0, c.Ng)(),
        A = null != I && n === I.sku_id,
        { enabled: j } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        O = j && (null == b ? void 0 : b.trial_id) === m.a7,
        R = f
            ? g.intl.string(g.t.J61px8)
            : null != v
              ? x(n, _, E, v.discount.amount)
              : p({
                    showTrialCTA: A,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: N,
                    isPersistentCTA: E,
                    shouldShowReferralTrialCopy: O,
                    subscriptionTrial: I
                });
    return (0, i.jsx)(u.Z, {
        color: S ? s.ButtonColors.BRAND_INVERTED : s.ButtonColors.BRAND,
        buttonShineClassName: 'buttonShineClassName' in C ? C.buttonShineClassName : S ? h.brandShine : void 0,
        buttonText: R,
        buttonTextClassName: A ? h.freeTrialText : void 0,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        ...C
    });
};
