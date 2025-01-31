n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var s = n(780384),
    r = n(481060),
    l = n(410030),
    a = n(74538),
    o = n(650032),
    c = n(104494),
    d = n(639119),
    u = n(197115),
    m = n(474936),
    h = n(388032),
    g = n(755904);
let _ = (e) => {
        let { showTrialCTA: t, subscriptionTier: n, shouldShowUpsells: i, trialDurationCopy: s, isPersistentCTA: r, shouldShowReferralTrialCopy: l, subscriptionTrial: o } = e;
        return t && l
            ? h.intl.string(h.t.bXTClZ)
            : t && (n === m.Si.TIER_2 || r)
              ? (0, a.Rt)({
                    intervalType: null == o ? void 0 : o.interval,
                    intervalCount: null == o ? void 0 : o.interval_count
                })
              : t
                ? h.intl.formatToPlainString(h.t.nTmm2t, { freeTrialText: s })
                : i && n === m.Si.TIER_2
                  ? h.intl.string(h.t.MtTjnZ)
                  : void 0;
    },
    x = (e, t, n, i) => (t || n ? h.intl.string(h.t.fkPGam) : e === m.Si.TIER_2 ? h.intl.formatToPlainString(h.t.bkQ4bG, { percent: i }) : void 0),
    p = (e) => {
        let { forceInverted: t, subscriptionTier: n, isEligibleForBogoPromotion: p = !1, isPersistentCTA: E = !1, useShorterCTA: C = !1, ...f } = e,
            T = (0, l.ZP)(),
            N = (0, s.wj)(T) || t,
            I = (0, d.N)(),
            S = null == I ? void 0 : I.subscription_trial,
            b = (0, a.a5)({
                intervalType: null == S ? void 0 : S.interval,
                intervalCount: null == S ? void 0 : S.interval_count
            }),
            v = (0, c.Ng)(),
            j = null != S && n === S.sku_id,
            { enabled: A } = o._.useExperiment({ location: 'SubscribeButton' }, { autoTrackExposure: !1 }),
            O = A && (null == I ? void 0 : I.trial_id) === m.a7,
            R = p
                ? h.intl.string(h.t.J61px8)
                : null != v
                  ? x(n, C, E, v.discount.amount)
                  : _({
                        showTrialCTA: j,
                        subscriptionTier: n,
                        shouldShowUpsells: !1,
                        trialDurationCopy: b,
                        isPersistentCTA: E,
                        shouldShowReferralTrialCopy: O,
                        subscriptionTrial: S
                    });
        return (0, i.jsx)(u.Z, {
            color: N ? r.Ttl.BRAND_INVERTED : r.Ttl.BRAND,
            buttonShineClassName: 'buttonShineClassName' in f ? f.buttonShineClassName : N ? g.brandShine : void 0,
            buttonText: R,
            buttonTextClassName: j ? g.freeTrialText : void 0,
            onlyShineOnHover: !0,
            subscriptionTier: n,
            ...f
        });
    };
