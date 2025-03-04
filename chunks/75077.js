n.d(t, {
    Dp: () => f,
    Gw: () => N,
    Op: () => O,
    gx: () => _,
    iG: () => x,
    mN: () => v,
    oo: () => b,
    sP: () => C
}),
    n(653041),
    n(627341);
var r = n(278074),
    i = n(442837),
    s = n(780384),
    a = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    m = n(391110),
    g = n(474936),
    p = n(735825),
    h = n(388032);
let f = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.NW.string(h.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.NW.string(h.t['3R9pPD']);
            default:
                return '';
        }
    },
    b = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.NW.string(h.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.NW.string(h.t.F915ra);
            default:
                return;
        }
    },
    N = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return h.NW.string(h.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return h.NW.string(h.t['4cCWPT']);
            default:
                return;
        }
    };
function x(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? h.NW.formatToPlainString(h.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return h.NW.string(h.t.B9eJyc);
        case p.EB.REDEEMED:
            return h.NW.string(h.t.hpy7PD);
        default:
            return '';
    }
}
let _ = (e, t, n) => ((0, s.wj)(e) ? t : n),
    E = 'getWhatsNewRow',
    j = (e) => {
        let { cards: t, perksCards: n, isFullScreen: r, showTenureCard: i, shopMarketingVariation: s } = e,
            l = r ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                s !== a.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: m } = u.r.getCurrentConfig({ location: E }, { autoTrackExposure: !1 }),
            { enabled: g } = d.C.getCurrentConfig({ location: E }, { autoTrackExposure: !1 }),
            p = !m && !g,
            h = S();
        return null != n.collectibleDeco && o({ card: n.collectibleDeco }), null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === i && o({ card: n.tenureRewardCollectible }), null != n.shyProject && o({ card: n.shyProject }), r && h ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : r && !h && (p || null != n.shyProject ? p && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    C = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: i, isFullScreen: s, showTenureCard: a, isPremiumSubscriber: l, fractionalState: o, isInReverseTrial: c } = e,
            d = [];
        switch (n) {
            case m.R0.PERKS_DISCOVERABILITY:
                d = (0, r.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case m.R0.WHATS_NEW:
                d = j({
                    cards: d,
                    perksCards: t,
                    isFullScreen: s,
                    showTenureCard: a,
                    shopMarketingVariation: i
                });
                break;
            case m.R0.CARD_CAROUSEL_FIRST_ROW:
                d = (0, r.EQ)({ isPremiumSubscriber: l })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case m.R0.CARD_CAROUSEL_SECOND_ROW:
                d = (0, r.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (c ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case m.R0.CARD_CAROUSEL_THIRD_ROW:
                d = (0, r.EQ)({ fractionalState: o })
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (c ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return s || (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    O = (e) => {
        let t = (0, i.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === g.Si.TIER_2;
        return e
            ? r
                ? {
                      title: h.NW.string(h.t.Aw5DRk),
                      subtitle: h.NW.string(h.t.aHdO6u)
                  }
                : {
                      title: h.NW.string(h.t.N30YEx),
                      subtitle: h.NW.string(h.t.GTUdNT)
                  }
            : {
                  title: h.NW.string(h.t['Uh3+CA']),
                  subtitle: h.NW.string(h.t['5TFEXl'])
              };
    },
    v = () => {
        let e = (0, i.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    S = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, g.p9.TIER_2);
    };
