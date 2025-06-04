n.d(t, {
    ZM: () => p,
    gx: () => m,
    mN: () => f,
    re: () => h
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
    u = n(388032);
let m = (e, t, n) => ((0, r.wj)(e) ? t : n),
    g = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i } = e,
            r = i ? 3 : 2,
            l = s.e.getCurrentConfig({ location: 'NitroHome' }).canPurchase,
            a = (e) => {
                let { card: n } = e;
                t.length < r && t.push(n);
            },
            o = () => {
                a({ card: n.specialShopPerks });
            },
            c = b();
        return l && a({ card: n.nameplates }), null != n.tenureBadge && a({ card: n.tenureBadge }), a({ card: n.permadecos }), i && c ? (0 === t.length && o(), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })) : i && !c && (a({ card: n.referralProgram }), a({ card: n.newAppStylesUpdateJune2024 }), a({ card: n.serverProfiles })), a({ card: n.earlyAccess }), l || o(), a({ card: n.unlimitedSuperReactions }), t;
    },
    p = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, isPremiumSubscriber: r, fractionalState: s, isInReverseTrial: l } = e,
            a = [];
        switch (n) {
            case c.gM.PERKS_DISCOVERABILITY:
                a = !1 === r ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : s === d.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case c.gM.WHATS_NEW:
                a = g({
                    cards: a,
                    perksCards: t,
                    isFullScreen: i
                });
                break;
            case c.gM.CARD_CAROUSEL_FIRST_ROW:
                a = !1 === r ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case c.gM.CARD_CAROUSEL_SECOND_ROW:
                a = !1 === r ? [t.customSoundsEverywhere, t.specialStickerAccess] : s === d.a$.FP_ONLY ? (l ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]) : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case c.gM.CARD_CAROUSEL_THIRD_ROW:
                a = s === d.a$.FP_ONLY ? (l ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]) : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return i || (a = a.filter((e) => !e.hideOnNarrowScreen)), a;
    },
    h = (e) => {
        let t = (0, i.e7)([a.ZP], () => a.ZP.getPremiumTypeSubscription()),
            n = null != t ? o.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? o.ZP.getSkuIdForPlan(n.planId) : null) === d.Si.TIER_2;
        return e
            ? r
                ? {
                      title: u.intl.string(u.t.Aw5DRk),
                      subtitle: u.intl.string(u.t.aHdO6u)
                  }
                : {
                      title: u.intl.string(u.t.N30YEx),
                      subtitle: u.intl.string(u.t.GTUdNT)
                  }
            : {
                  title: u.intl.string(u.t['Uh3+CA']),
                  subtitle: u.intl.string(u.t['5TFEXl'])
              };
    },
    f = () => {
        let e = (0, i.e7)([l.default], () => l.default.getCurrentUser());
        return (0, o.I5)(e);
    },
    b = () => {
        let e = l.default.getCurrentUser();
        return (0, o.M5)(e, d.p9.TIER_2);
    };
