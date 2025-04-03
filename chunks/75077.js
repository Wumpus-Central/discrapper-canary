n.d(t, {
    Dp: () => p,
    Gw: () => f,
    Op: () => E,
    gx: () => N,
    iG: () => b,
    mN: () => j,
    oo: () => h,
    sP: () => _
}),
    n(653041),
    n(627341);
var r = n(278074),
    i = n(442837),
    s = n(780384),
    a = n(594174),
    l = n(78839),
    o = n(74538),
    c = n(781320),
    d = n(391110),
    u = n(474936),
    m = n(735825),
    g = n(388032);
let p = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.NW.string(g.t['9o4F4+']);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.NW.string(g.t['3R9pPD']);
            default:
                return '';
        }
    },
    h = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.NW.string(g.t.nlcs6O);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.NW.string(g.t.F915ra);
            default:
                return;
        }
    },
    f = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.NW.string(g.t.LAFMBQ);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.NW.string(g.t['4cCWPT']);
            default:
                return;
        }
    };
function b(e, t) {
    switch (e) {
        case m.EB.PENDING:
            return null != t ? g.NW.formatToPlainString(g.t.a1eKDg, { days: t }) : '';
        case m.EB.REDEEMABLE:
            return g.NW.string(g.t.B9eJyc);
        case m.EB.REDEEMED:
            return g.NW.string(g.t.hpy7PD);
        default:
            return '';
    }
}
let N = (e, t, n) => ((0, s.wj)(e) ? t : n),
    x = (e) => {
        let { cards: t, perksCards: n, isFullScreen: r, showTenureCard: i } = e,
            s = r ? 3 : 2,
            a = (e) => {
                let { card: n } = e;
                t.length < s && t.push(n);
            },
            l = () => {
                a({ card: n.specialShopPerks });
            },
            { enabled: o } = c.G.getCurrentConfig({ location: 'getWhatsNewRow' }, { autoTrackExposure: !1 }),
            d = O();
        return null != n.collectibleDeco && a({ card: n.collectibleDeco }), null != n.tenureBadge && a({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === i && a({ card: n.tenureRewardCollectible }), o && a({ card: n.permadecos }), r && d ? (0 === t.length && l(), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })) : r && !d && (a({ card: n.referralProgram }), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })), a({ card: n.earlyAccess }), l(), a({ card: n.unlimitedSuperReactions }), t;
    },
    _ = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, showTenureCard: s, isPremiumSubscriber: a, fractionalState: l, isInReverseTrial: o } = e,
            c = [];
        switch (n) {
            case d.R0.PERKS_DISCOVERABILITY:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: u.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case d.R0.WHATS_NEW:
                c = x({
                    cards: c,
                    perksCards: t,
                    isFullScreen: i,
                    showTenureCard: s
                });
                break;
            case d.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, r.EQ)({ isPremiumSubscriber: a })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case d.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: u.a$.FP_ONLY }, () => (o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case d.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, r.EQ)({ fractionalState: l })
                    .with({ fractionalState: u.a$.FP_ONLY }, () => (o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return i || (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    E = (e) => {
        let t = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === u.Si.TIER_2;
        return e
            ? r
                ? {
                      title: g.NW.string(g.t.Aw5DRk),
                      subtitle: g.NW.string(g.t.aHdO6u)
                  }
                : {
                      title: g.NW.string(g.t.N30YEx),
                      subtitle: g.NW.string(g.t.GTUdNT)
                  }
            : {
                  title: g.NW.string(g.t['Uh3+CA']),
                  subtitle: g.NW.string(g.t['5TFEXl'])
              };
    },
    j = () => {
        let e = (0, i.e7)([a.default], () => a.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    O = () => {
        let e = a.default.getCurrentUser();
        return (0, o.M5)(e, u.p9.TIER_2);
    };
