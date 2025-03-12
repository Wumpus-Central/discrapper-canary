n.d(t, {
    Dp: () => h,
    Gw: () => b,
    Op: () => C,
    gx: () => x,
    iG: () => N,
    mN: () => O,
    oo: () => f,
    sP: () => j
}),
    n(653041),
    n(627341);
var r = n(278074),
    i = n(442837),
    s = n(780384),
    a = n(594174),
    l = n(78839),
    o = n(74538),
    c = n(331119),
    d = n(575595),
    u = n(391110),
    m = n(474936),
    p = n(735825),
    g = n(388032);
let h = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return g.NW.string(g.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return g.NW.string(g.t['3R9pPD']);
            default:
                return '';
        }
    },
    f = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return g.NW.string(g.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return g.NW.string(g.t.F915ra);
            default:
                return;
        }
    },
    b = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return g.NW.string(g.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return g.NW.string(g.t['4cCWPT']);
            default:
                return;
        }
    };
function N(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? g.NW.formatToPlainString(g.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return g.NW.string(g.t.B9eJyc);
        case p.EB.REDEEMED:
            return g.NW.string(g.t.hpy7PD);
        default:
            return '';
    }
}
let x = (e, t, n) => ((0, s.wj)(e) ? t : n),
    _ = 'getWhatsNewRow',
    E = (e) => {
        let { cards: t, perksCards: n, isFullScreen: r, showTenureCard: i } = e,
            s = r ? 3 : 2,
            a = (e) => {
                let { card: n } = e;
                t.length < s && t.push(n);
            },
            l = () => {
                a({ card: n.specialShopPerks });
            },
            { enabled: o } = d.r.getCurrentConfig({ location: _ }, { autoTrackExposure: !1 }),
            { enabled: u } = c.C.getCurrentConfig({ location: _ }, { autoTrackExposure: !1 }),
            m = v();
        return null != n.collectibleDeco && a({ card: n.collectibleDeco }), null != n.tenureBadge && a({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === i && a({ card: n.tenureRewardCollectible }), r && m ? (0 === t.length && l(), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })) : r && !m && (o || u || a({ card: n.referralProgram }), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })), a({ card: n.earlyAccess }), l(), a({ card: n.unlimitedSuperReactions }), t;
    },
    j = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, showTenureCard: s, isPremiumSubscriber: a, fractionalState: l, isInReverseTrial: o } = e,
            c = [];
        switch (n) {
            case u.R0.PERKS_DISCOVERABILITY:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: m.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case u.R0.WHATS_NEW:
                c = E({
                    cards: c,
                    perksCards: t,
                    isFullScreen: i,
                    showTenureCard: s
                });
                break;
            case u.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, r.EQ)({ isPremiumSubscriber: a })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case u.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: m.a$.FP_ONLY }, () => (o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case u.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, r.EQ)({ fractionalState: l })
                    .with({ fractionalState: m.a$.FP_ONLY }, () => (o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return i || (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    C = (e) => {
        let t = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === m.Si.TIER_2;
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
    O = () => {
        let e = (0, i.e7)([a.default], () => a.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    v = () => {
        let e = a.default.getCurrentUser();
        return (0, o.M5)(e, m.p9.TIER_2);
    };
