n.d(t, {
    Dp: () => g,
    Gw: () => h,
    Op: () => E,
    gx: () => b,
    iG: () => f,
    mN: () => C,
    oo: () => p,
    sP: () => x
}),
    n(539854);
var i = n(442837),
    r = n(780384),
    s = n(442933),
    l = n(594174),
    a = n(78839),
    o = n(74538),
    c = n(391110),
    d = n(474936),
    u = n(735825),
    m = n(388032);
let g = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.intl.string(m.t['9o4F4+']);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.intl.string(m.t['3R9pPD']);
            default:
                return '';
        }
    },
    p = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.intl.string(m.t.nlcs6O);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.intl.string(m.t.F915ra);
            default:
                return;
        }
    },
    h = (e) => {
        switch (e) {
            case u.EB.PENDING:
                return m.intl.string(m.t.LAFMBQ);
            case u.EB.REDEEMABLE:
            case u.EB.REDEEMED:
                return m.intl.string(m.t['4cCWPT']);
            default:
                return;
        }
    };
function f(e, t) {
    switch (e) {
        case u.EB.PENDING:
            return null != t ? m.intl.formatToPlainString(m.t.a1eKDg, { days: t }) : '';
        case u.EB.REDEEMABLE:
            return m.intl.string(m.t.B9eJyc);
        case u.EB.REDEEMED:
            return m.intl.string(m.t.hpy7PD);
        default:
            return '';
    }
}
let b = (e, t, n) => ((0, r.wj)(e) ? t : n),
    _ = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r } = e,
            l = i ? 3 : 2,
            a = s.e.getCurrentConfig({ location: 'NitroHome' }).canPurchase,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                o({ card: n.specialShopPerks });
            },
            d = j();
        return a && o({ card: n.nameplates }), null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), o({ card: n.permadecos }), i && d ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !d && (o({ card: n.referralProgram }), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), a || c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    x = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, showTenureCard: r, isPremiumSubscriber: s, fractionalState: l, isInReverseTrial: a } = e,
            o = [];
        switch (n) {
            case c.R0.PERKS_DISCOVERABILITY:
                o = !1 === s ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : l === d.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case c.R0.WHATS_NEW:
                o = _({
                    cards: o,
                    perksCards: t,
                    isFullScreen: i,
                    showTenureCard: r
                });
                break;
            case c.R0.CARD_CAROUSEL_FIRST_ROW:
                o = !1 === s ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case c.R0.CARD_CAROUSEL_SECOND_ROW:
                o = !1 === s ? [t.customSoundsEverywhere, t.specialStickerAccess] : l === d.a$.FP_ONLY ? (a ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]) : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case c.R0.CARD_CAROUSEL_THIRD_ROW:
                o = l === d.a$.FP_ONLY ? (a ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]) : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return i || (o = o.filter((e) => !e.hideOnNarrowScreen)), o;
    },
    E = (e) => {
        let t = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === d.Si.TIER_2;
        return e
            ? r
                ? {
                      title: m.intl.string(m.t.Aw5DRk),
                      subtitle: m.intl.string(m.t.aHdO6u)
                  }
                : {
                      title: m.intl.string(m.t.N30YEx),
                      subtitle: m.intl.string(m.t.GTUdNT)
                  }
            : {
                  title: m.intl.string(m.t['Uh3+CA']),
                  subtitle: m.intl.string(m.t['5TFEXl'])
              };
    },
    C = () => {
        let e = (0, i.e7)([l.default], () => l.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    j = () => {
        let e = l.default.getCurrentUser();
        return (0, o.M5)(e, d.p9.TIER_2);
    };
