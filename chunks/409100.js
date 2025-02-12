n.d(t, { Z: () => h });
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
    m = n(474936),
    g = n(388032),
    _ = n(660166);
let p = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: i, trialDurationCopy: r, isPersistentCTA: a, shouldShowReferralTrialCopy: s, subscriptionTrial: o } = e;
        return t && s
            ? g.intl.string(g.t.bXTClZ)
            : t && (n === m.Si.TIER_2 || a)
              ? (0, l.Rt)({
                    intervalType: null == o ? void 0 : o.interval,
                    intervalCount: null == o ? void 0 : o.interval_count
                })
              : t
                ? g.intl.formatToPlainString(g.t.nTmm2t, { freeTrialText: r })
                : i && n === m.Si.TIER_2
                  ? g.intl.string(g.t.MtTjnZ)
                  : void 0;
    },
    f = (e, t, n, i) => (t || n ? g.intl.string(g.t.fkPGam) : e === m.Si.TIER_2 ? g.intl.formatToPlainString(g.t.bkQ4bG, { percent: i }) : void 0),
    h = (e) => {
        let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: h = !1, isPersistentCTA: x = !1, useShorterCTA: E = !1, ...C } = e,
            b = (0, s.ZP)(),
            v = (0, r.wj)(b) || t,
            T = (0, d.N)(),
            N = null == T ? void 0 : T.subscription_trial,
            I = (0, l.a5)({
                intervalType: null == N ? void 0 : N.interval,
                intervalCount: null == N ? void 0 : N.interval_count
            }),
            R = (0, c.Ng)(),
            j = null != N && n === N.sku_id,
            { enabled: S } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
            A = S && (null == T ? void 0 : T.trial_id) === m.a7,
            P = h
                ? g.intl.string(g.t.J61px8)
                : null != R
                  ? f(n, E, x, R.discount.amount)
                  : p({
                        showTrialCTA: j,
                        subscriptionTier: n,
                        shouldShowUpsells: !1,
                        trialDurationCopy: I,
                        isPersistentCTA: x,
                        shouldShowReferralTrialCopy: A,
                        subscriptionTrial: N
                    });
        return (0, i.jsx)(u.Z, {
            color: v ? a.Ttl.BRAND_INVERTED : a.Ttl.BRAND,
            buttonShineClassName: 'buttonShineClassName' in C ? C.buttonShineClassName : v ? _.brandShine : void 0,
            buttonText: P,
            buttonTextClassName: j ? _.freeTrialText : void 0,
            onlyShineOnHover: !0,
            subscriptionTier: n,
            ...C
        });
    };
