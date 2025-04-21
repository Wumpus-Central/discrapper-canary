n.d(t, {
    Dp: () => p,
    Gw: () => f,
    Op: () => j,
    gx: () => _,
    iG: () => b,
    mN: () => C,
    oo: () => h,
    sP: () => E
}),
    n(539854),
    n(314940);
var i = n(278074),
    r = n(442837),
    s = n(780384),
    l = n(442933),
    a = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(391110),
    u = n(474936),
    m = n(735825),
    g = n(388032);
let p = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.intl.string(g.t['9o4F4+']);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.intl.string(g.t['3R9pPD']);
            default:
                return '';
        }
    },
    h = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.intl.string(g.t.nlcs6O);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.intl.string(g.t.F915ra);
            default:
                return;
        }
    },
    f = (e) => {
        switch (e) {
            case m.EB.PENDING:
                return g.intl.string(g.t.LAFMBQ);
            case m.EB.REDEEMABLE:
            case m.EB.REDEEMED:
                return g.intl.string(g.t['4cCWPT']);
            default:
                return;
        }
    };
function b(e, t) {
    switch (e) {
        case m.EB.PENDING:
            return null != t ? g.intl.formatToPlainString(g.t.a1eKDg, { days: t }) : '';
        case m.EB.REDEEMABLE:
            return g.intl.string(g.t.B9eJyc);
        case m.EB.REDEEMED:
            return g.intl.string(g.t.hpy7PD);
        default:
            return '';
    }
}
let _ = (e, t, n) => ((0, s.wj)(e) ? t : n),
    x = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r } = e,
            s = i ? 3 : 2,
            a = l.e.getCurrentConfig({ location: 'NitroHome' }).canPurchase,
            o = (e) => {
                let { card: n } = e;
                t.length < s && t.push(n);
            },
            c = () => {
                o({ card: n.specialShopPerks });
            },
            d = O();
        return a && o({ card: n.nameplates }), null != n.collectibleDeco && o({ card: n.collectibleDeco }), null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), o({ card: n.permadecos }), i && d ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !d && (o({ card: n.referralProgram }), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), a || c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    E = (e) => {
        let { perksCards: t, variant: n, isFullScreen: r, showTenureCard: s, isPremiumSubscriber: l, fractionalState: a, isInReverseTrial: o } = e,
            c = [];
        switch (n) {
            case d.R0.PERKS_DISCOVERABILITY:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: a
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: u.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case d.R0.WHATS_NEW:
                c = x({
                    cards: c,
                    perksCards: t,
                    isFullScreen: r,
                    showTenureCard: s
                });
                break;
            case d.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, i.EQ)({ isPremiumSubscriber: l })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case d.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: a
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: u.a$.FP_ONLY }, () => (o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case d.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, i.EQ)({ fractionalState: a })
                    .with({ fractionalState: u.a$.FP_ONLY }, () => (o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return r || (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    j = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === u.Si.TIER_2;
        return e
            ? i
                ? {
                      title: g.intl.string(g.t.Aw5DRk),
                      subtitle: g.intl.string(g.t.aHdO6u)
                  }
                : {
                      title: g.intl.string(g.t.N30YEx),
                      subtitle: g.intl.string(g.t.GTUdNT)
                  }
            : {
                  title: g.intl.string(g.t['Uh3+CA']),
                  subtitle: g.intl.string(g.t['5TFEXl'])
              };
    },
    C = () => {
        let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    O = () => {
        let e = a.default.getCurrentUser();
        return (0, c.M5)(e, u.p9.TIER_2);
    };
