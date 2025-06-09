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
        let { cards: t, perksCards: n, isFullScreen: i, showVoiceFiltersCard: r } = e,
            l = i ? 3 : 2,
            a = s.e.getCurrentConfig({ location: 'NitroHome' }).canPurchase,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                o({ card: n.specialShopPerks });
            },
            d = b();
        return r ? o({ card: n.voiceFilters }) : a && o({ card: n.nameplates }), null != n.tenureBadge && o({ card: n.tenureBadge }), o({ card: n.permadecos }), i && d ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !d && (o({ card: n.referralProgram }), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), a || c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    p = (e) => {
        let { perksCards: t, variant: n, isFullScreen: i, isPremiumSubscriber: r, fractionalState: s, isInReverseTrial: l, showVoiceFiltersCard: a } = e,
            o = [];
        switch (n) {
            case c.gM.PERKS_DISCOVERABILITY:
                o = !1 === r ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : s === d.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case c.gM.WHATS_NEW:
                o = g({
                    cards: o,
                    perksCards: t,
                    isFullScreen: i,
                    showVoiceFiltersCard: a
                });
                break;
            case c.gM.CARD_CAROUSEL_FIRST_ROW:
                o = !1 === r ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case c.gM.CARD_CAROUSEL_SECOND_ROW:
                o = !1 === r ? [t.customSoundsEverywhere, t.specialStickerAccess] : s === d.a$.FP_ONLY ? (l ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]) : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case c.gM.CARD_CAROUSEL_THIRD_ROW:
                o = s === d.a$.FP_ONLY ? (l ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]) : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return i || (o = o.filter((e) => !e.hideOnNarrowScreen)), o;
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
