n.d(t, {
    Dp: () => g,
    Gw: () => h,
    Op: () => x,
    gx: () => b,
    iG: () => f,
    mN: () => E,
    oo: () => p,
    sP: () => N
}),
    n(539854),
    n(314940);
var r = n(278074),
    i = n(442837),
    s = n(780384),
    a = n(594174),
    l = n(78839),
    o = n(74538),
    c = n(391110),
    d = n(474936),
    u = n(735825),
    m = n(388032);
let g = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.NW.string(m.t['9o4F4+']);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.NW.string(m.t['3R9pPD']);
            default:
                return '';
        }
    },
    p = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.NW.string(m.t.nlcs6O);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.NW.string(m.t.F915ra);
            default:
                return;
        }
    },
    h = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.NW.string(m.t.LAFMBQ);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.NW.string(m.t['4cCWPT']);
            default:
                return;
        }
    };
function f(e, t) {
    switch (e) {
        case u.EB.PENDING:
            return null != t ? m.NW.formatToPlainString(m.t.a1eKDg, { days: t }) : '';
        case u.EB.REDEEMABLE:
            return m.NW.string(m.t.B9eJyc);
        case u.EB.REDEEMED:
            return m.NW.string(m.t.hpy7PD);
        default:
            return '';
    }
}
let b = (e, t, n) => ((0, s.wj)(e) ? t : n),
    _ = (e) => {
        let { cards: t, perksCards: n, isFullScreen: r, showTenureCard: i } = e,
            s = r ? 3 : 2,
            a = (e) => {
                let { card: n } = e;
                t.length < s && t.push(n);
            },
            l = () => {
                a({ card: n.specialShopPerks });
            },
            o = j();
        return null != n.collectibleDeco && a({ card: n.collectibleDeco }), null != n.tenureBadge && a({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === i && a({ card: n.tenureRewardCollectible }), a({ card: n.permadecos }), r && o ? (0 === t.length && l(), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })) : r && !o && (a({ card: n.referralProgram }), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })), a({ card: n.earlyAccess }), l(), a({ card: n.unlimitedSuperReactions }), t;
    },
    N = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, showTenureCard: s, isPremiumSubscriber: a, fractionalState: l, isInReverseTrial: o } = e,
            u = [];
        switch (n) {
            case c.R0.PERKS_DISCOVERABILITY:
                u = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: d.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case c.R0.WHATS_NEW:
                u = _({
                    cards: u,
                    perksCards: t,
                    isFullScreen: i,
                    showTenureCard: s
                });
                break;
            case c.R0.CARD_CAROUSEL_FIRST_ROW:
                u = (0, r.EQ)({ isPremiumSubscriber: a })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case c.R0.CARD_CAROUSEL_SECOND_ROW:
                u = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: d.a$.FP_ONLY }, () => (o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case c.R0.CARD_CAROUSEL_THIRD_ROW:
                u = (0, r.EQ)({ fractionalState: l })
                    .with({ fractionalState: d.a$.FP_ONLY }, () => (o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return i || (u = u.filter((e) => !e.hideOnNarrowScreen)), u;
    },
    x = (e) => {
        let t = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === d.Si.TIER_2;
        return e
            ? r
                ? {
                      title: m.NW.string(m.t.Aw5DRk),
                      subtitle: m.NW.string(m.t.aHdO6u)
                  }
                : {
                      title: m.NW.string(m.t.N30YEx),
                      subtitle: m.NW.string(m.t.GTUdNT)
                  }
            : {
                  title: m.NW.string(m.t['Uh3+CA']),
                  subtitle: m.NW.string(m.t['5TFEXl'])
              };
    },
    E = () => {
        let e = (0, i.e7)([a.default], () => a.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    j = () => {
        let e = a.default.getCurrentUser();
        return (0, o.M5)(e, d.p9.TIER_2);
    };
