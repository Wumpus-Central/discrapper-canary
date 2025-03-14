n.d(t, {
    Dp: () => f,
    Gw: () => x,
    Op: () => O,
    gx: () => _,
    iG: () => N,
    mN: () => v,
    oo: () => b,
    sP: () => C
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
    u = n(781320),
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
    x = (e) => {
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
function N(e, t) {
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
        let { cards: t, perksCards: n, isFullScreen: r, showTenureCard: i } = e,
            s = r ? 3 : 2,
            a = (e) => {
                let { card: n } = e;
                t.length < s && t.push(n);
            },
            l = () => {
                a({ card: n.specialShopPerks });
            },
            { enabled: o } = d.r.getCurrentConfig({ location: E }, { autoTrackExposure: !1 }),
            { enabled: m } = c.C.getCurrentConfig({ location: E }, { autoTrackExposure: !1 }),
            { enabled: g } = u.G.getCurrentConfig({ location: E }, { autoTrackExposure: !1 }),
            p = S();
        return null != n.collectibleDeco && a({ card: n.collectibleDeco }), null != n.tenureBadge && a({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === i && a({ card: n.tenureRewardCollectible }), g && a({ card: n.permadecos }), r && p ? (0 === t.length && l(), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })) : r && !p && (o || m || a({ card: n.referralProgram }), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })), a({ card: n.earlyAccess }), l(), a({ card: n.unlimitedSuperReactions }), t;
    },
    C = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, showTenureCard: s, isPremiumSubscriber: a, fractionalState: l, isInReverseTrial: o } = e,
            c = [];
        switch (n) {
            case m.R0.PERKS_DISCOVERABILITY:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case m.R0.WHATS_NEW:
                c = j({
                    cards: c,
                    perksCards: t,
                    isFullScreen: i,
                    showTenureCard: s
                });
                break;
            case m.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, r.EQ)({ isPremiumSubscriber: a })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case m.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, r.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: l
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (o ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case m.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, r.EQ)({ fractionalState: l })
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (o ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return i || (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    O = (e) => {
        let t = (0, i.e7)([l.ZP], () => l.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === g.Si.TIER_2;
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
        let e = (0, i.e7)([a.default], () => a.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    S = () => {
        let e = a.default.getCurrentUser();
        return (0, o.M5)(e, g.p9.TIER_2);
    };
