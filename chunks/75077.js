(n.d(t, {
    ZM: () => g,
    gx: () => u,
    mN: () => h,
    re: () => p
}),
    n(539854));
var i = n(442837),
    r = n(780384),
    s = n(594174),
    l = n(78839),
    a = n(74538),
    o = n(391110),
    c = n(474936),
    d = n(388032);
let u = (e, t, n) => ((0, r.wj)(e) ? t : n),
    m = (e) => {
        let { cards: t, perksCards: n, showVoiceFiltersCard: i } = e,
            r = (e) => {
                let { card: n } = e;
                t.length < 3 && t.push(n);
            },
            s = f();
        return (r(i ? { card: n.voiceFilters } : { card: n.nameplates }), null != n.tenureBadge && r({ card: n.tenureBadge }), r({ card: n.permadecos }), s ? 0 === t.length && r({ card: n.specialShopPerks }) : r({ card: n.referralProgram }), r({ card: n.newAppStylesUpdateJune2024 }), r({ card: n.serverProfiles }), r({ card: n.earlyAccess }), r({ card: n.unlimitedSuperReactions }), t);
    },
    g = (e) => {
        let { perksCards: t, variant: n, hideCardsOnNarrowScreen: i, isPremiumSubscriber: r, fractionalState: s, isInReverseTrial: l, showVoiceFiltersCard: a } = e,
            d = [];
        switch (n) {
            case o.gM.PERKS_DISCOVERABILITY:
                d = !1 === r ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons] : s === c.a$.FP_ONLY ? [t.profiles, t.clientThemes, t.hdVideo] : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case o.gM.WHATS_NEW:
                d = m({
                    cards: d,
                    perksCards: t,
                    showVoiceFiltersCard: a
                });
                break;
            case o.gM.CARD_CAROUSEL_FIRST_ROW:
                d = !1 === r ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks] : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case o.gM.CARD_CAROUSEL_SECOND_ROW:
                d = !1 === r ? [t.customSoundsEverywhere, t.specialStickerAccess] : s === c.a$.FP_ONLY ? (l ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]) : [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions];
                break;
            case o.gM.CARD_CAROUSEL_THIRD_ROW:
                d = s === c.a$.FP_ONLY ? (l ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]) : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return (i && (d = d.filter((e) => !e.hideOnNarrowScreen)), d);
    },
    p = (e) => {
        let t = (0, i.e7)([l.Z], () => l.Z.getPremiumTypeSubscription()),
            n = null != t ? a.ZP.getPremiumPlanItem(t) : null,
            r = (null != n ? a.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
        return e
            ? r
                ? {
                      title: d.intl.string(d.t.Aw5DRk),
                      subtitle: d.intl.string(d.t.aHdO6u)
                  }
                : {
                      title: d.intl.string(d.t.N30YEx),
                      subtitle: d.intl.string(d.t.GTUdNT)
                  }
            : {
                  title: d.intl.string(d.t['Uh3+CA']),
                  subtitle: d.intl.string(d.t['5TFEXl'])
              };
    },
    h = () => {
        let e = (0, i.e7)([s.default], () => s.default.getCurrentUser());
        return (0, a.I5)(e);
    },
    f = () => {
        let e = s.default.getCurrentUser();
        return (0, a.M5)(e, c.p9.TIER_2);
    };
