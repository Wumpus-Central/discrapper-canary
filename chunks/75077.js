n.d(t, {
    BS: () => b,
    Dp: () => x,
    Gw: () => v,
    Op: () => A,
    gx: () => I,
    iG: () => N,
    k3: () => h,
    mN: () => P,
    oo: () => C,
    sP: () => S,
    t2: () => T,
    vZ: () => E
}),
    n(653041),
    n(627341);
var i = n(278074),
    r = n(442837),
    a = n(780384),
    s = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    m = n(650032),
    g = n(391110),
    _ = n(474936),
    p = n(735825),
    f = n(388032);
let h = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return f.intl.string(f.t.fhK8ho);
            case p.EB.REDEEMABLE:
                return f.intl.string(f.t['084A8/']);
            case p.EB.REDEEMED:
                return f.intl.string(f.t['5kxiMz']);
            default:
                return '';
        }
    },
    x = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return f.intl.string(f.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return f.intl.string(f.t['3R9pPD']);
            default:
                return '';
        }
    },
    E = (e, t, n) => {
        switch (e) {
            case p.EB.PENDING:
                return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? f.intl.string(f.t.hnbagI) : f.intl.string(f.t['73+DnJ']);
            case p.EB.REDEEMABLE:
                if (t === p.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? f.intl.string(f.t.RrwI8f) : f.intl.string(f.t.P1Xqqa);
                return f.intl.string(f.t.K687hI);
            case p.EB.REDEEMED:
                return f.intl.string(f.t['QvW/MT']);
            default:
                return;
        }
    },
    C = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return f.intl.string(f.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return f.intl.string(f.t.F915ra);
            default:
                return;
        }
    },
    b = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return f.intl.string(f.t.tncFsb);
            case p.EB.REDEEMABLE:
                return;
            case p.EB.REDEEMED:
                return f.intl.string(f.t.OcdQND);
            default:
                return;
        }
    },
    v = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return f.intl.string(f.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return f.intl.string(f.t['4cCWPT']);
            default:
                return;
        }
    };
function T(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? f.intl.formatToPlainString(f.t.FULtam, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return f.intl.string(f.t['+zx47e']);
        case p.EB.REDEEMED:
            return f.intl.string(f.t['5kxiMz']);
        default:
            return '';
    }
}
function N(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? f.intl.formatToPlainString(f.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return f.intl.string(f.t.B9eJyc);
        case p.EB.REDEEMED:
            return f.intl.string(f.t.hpy7PD);
        default:
            return '';
    }
}
let I = (e, t, n) => ((0, a.wj)(e) ? t : n),
    R = 'getWhatsNewRow',
    j = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r, shopMarketingVariation: a } = e,
            l = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                a !== s.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: g } = m._.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            { enabled: _ } = u.r.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            { enabled: p } = d.C.getCurrentConfig({ location: R }, { autoTrackExposure: !1 }),
            f = g && !_ && !p,
            h = Z();
        return null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), null != n.freeBoost && !0 === r && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), i && h ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !h && (f || null != n.shyProject ? f && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    S = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: r, isFullScreen: a, showTenureCard: s, isPremiumSubscriber: l, fractionalState: o, isInReverseTrial: c } = e,
            d = [];
        switch (n) {
            case g.R0.PERKS_DISCOVERABILITY:
                d = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: _.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case g.R0.WHATS_NEW:
                d = j({
                    cards: d,
                    perksCards: t,
                    isFullScreen: a,
                    showTenureCard: s,
                    shopMarketingVariation: r
                });
                break;
            case g.R0.CARD_CAROUSEL_FIRST_ROW:
                d = (0, i.EQ)({ isPremiumSubscriber: l })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case g.R0.CARD_CAROUSEL_SECOND_ROW:
                d = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: _.a$.FP_ONLY }, () => (c ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case g.R0.CARD_CAROUSEL_THIRD_ROW:
                d = (0, i.EQ)({ fractionalState: o })
                    .with({ fractionalState: _.a$.FP_ONLY }, () => (c ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return a || (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    A = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === _.Si.TIER_2;
        return e
            ? i
                ? {
                      title: f.intl.string(f.t.Aw5DRk),
                      subtitle: f.intl.string(f.t.aHdO6u)
                  }
                : {
                      title: f.intl.string(f.t.N30YEx),
                      subtitle: f.intl.string(f.t.GTUdNT)
                  }
            : {
                  title: f.intl.string(f.t['Uh3+CA']),
                  subtitle: f.intl.string(f.t['5TFEXl'])
              };
    },
    P = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    Z = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, _.p9.TIER_2);
    };
