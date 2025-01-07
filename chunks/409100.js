var i = n(200651);
n(192379);
var r = n(780384),
    a = n(481060),
    s = n(410030),
    l = n(74538),
    o = n(650032),
    c = n(104494),
    d = n(639119),
    u = n(197115),
    g = n(474936),
    m = n(388032),
    f = n(755904);
let p = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: i, trialDurationCopy: r, isPersistentCTA: a, shouldShowReferralTrialCopy: s, subscriptionTrial: o } = e;
        if (t && s) return m.intl.string(m.t.bXTClZ);
        if (t && (n === g.Si.TIER_2 || a))
            return (0, l.Rt)({
                intervalType: null == o ? void 0 : o.interval,
                intervalCount: null == o ? void 0 : o.interval_count
            });
        if (t) return m.intl.formatToPlainString(m.t.nTmm2t, { freeTrialText: r });
        else if (i && n === g.Si.TIER_2) return m.intl.string(m.t.MtTjnZ);
    },
    _ = (e, t, n, i) => (t || n ? m.intl.string(m.t.fkPGam) : e === g.Si.TIER_2 ? m.intl.formatToPlainString(m.t.bkQ4bG, { percent: i }) : void 0);
t.Z = (e) => {
    let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: h = !1, isPersistentCTA: x = !1, useShorterCTA: E = !1, ...b } = e,
        C = (0, s.ZP)(),
        v = (0, r.wj)(C) || t,
        T = (0, d.N)(),
        N = null == T ? void 0 : T.subscription_trial,
        I = (0, l.a5)({
            intervalType: null == N ? void 0 : N.interval,
            intervalCount: null == N ? void 0 : N.interval_count
        }),
        S = (0, c.Ng)(),
        R = null != N && n === N.sku_id,
        { enabled: j } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
        A = j && (null == T ? void 0 : T.trial_id) === g.a7,
        P = h
            ? m.intl.string(m.t.J61px8)
            : null != S
              ? _(n, E, x, S.discount.amount)
              : p({
                    showTrialCTA: R,
                    subscriptionTier: n,
                    shouldShowUpsells: !1,
                    trialDurationCopy: I,
                    isPersistentCTA: x,
                    shouldShowReferralTrialCopy: A,
                    subscriptionTrial: N
                });
    return (0, i.jsx)(u.Z, {
        color: v ? a.ButtonColors.BRAND_INVERTED : a.ButtonColors.BRAND,
        buttonShineClassName: 'buttonShineClassName' in b ? b.buttonShineClassName : v ? f.brandShine : void 0,
        buttonText: P,
        buttonTextClassName: R ? f.freeTrialText : void 0,
        onlyShineOnHover: !0,
        subscriptionTier: n,
        ...b
    });
};
