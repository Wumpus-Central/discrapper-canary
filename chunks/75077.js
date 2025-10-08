n.d(t, {
    ZM: () => p,
    gx: () => d,
    mN: () => m,
    re: () => h,
}),
    n(539854);
var r = n(442837),
    i = n(780384),
    a = n(594174),
    o = n(78839),
    s = n(74538),
    l = n(391110),
    c = n(474936),
    u = n(388032);
let d = (e, t, n) => ((0, i.wj)(e) ? t : n),
    f = 3,
    _ = (e) => {
        let { cards: t, perksCards: n, showVoiceFiltersCard: r, showCustomThemesCard: i } = e,
            a = f,
            o = (e) => {
                let { card: n } = e;
                t.length < a && t.push(n);
            },
            s = () => {
                o({ card: n.specialShopPerks });
            },
            l = g();
        return (
            r ? o({ card: n.voiceFilters }) : i ? o({ card: n.customThemes }) : o({ card: n.nameplates }),
            null != n.tenureBadge && o({ card: n.tenureBadge }),
            o({ card: n.permadecos }),
            l ? 0 === t.length && s() : o({ card: n.referralProgram }),
            o({ card: n.newAppStylesUpdateJune2024 }),
            o({ card: n.serverProfiles }),
            o({ card: n.earlyAccess }),
            o({ card: n.unlimitedSuperReactions }),
            t
        );
    },
    p = (e) => {
        let {
                perksCards: t,
                variant: n,
                hideCardsOnNarrowScreen: r,
                isPremiumSubscriber: i,
                fractionalState: a,
                isInReverseTrial: o,
                showVoiceFiltersCard: s,
                showCustomThemesCard: u,
            } = e,
            d = [];
        switch (n) {
            case l.gM.PERKS_DISCOVERABILITY:
                d =
                    !1 === i
                        ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                        : a === c.a$.FP_ONLY
                          ? [t.profiles, t.clientThemes, t.hdVideo]
                          : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case l.gM.WHATS_NEW:
                d = _({
                    cards: d,
                    perksCards: t,
                    showVoiceFiltersCard: s,
                    showCustomThemesCard: u,
                });
                break;
            case l.gM.CARD_CAROUSEL_FIRST_ROW:
                d =
                    !1 === i
                        ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                        : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case l.gM.CARD_CAROUSEL_SECOND_ROW:
                d =
                    !1 === i
                        ? [t.customSoundsEverywhere, t.specialStickerAccess]
                        : a === c.a$.FP_ONLY
                          ? o
                              ? [
                                    t.earlyAccessSeeAllVariant,
                                    t.specialMemberPricingSeeAllVariant,
                                    t.largeUploads,
                                    t.hdVideo,
                                    t.superReactions,
                                ]
                              : [
                                    t.greyServerBoosts,
                                    t.earlyAccessSeeAllVariant,
                                    t.specialMemberPricingSeeAllVariant,
                                    t.largeUploads,
                                    t.hdVideo,
                                    t.superReactions,
                                ]
                          : [
                                t.earlyAccessSeeAllVariant,
                                t.specialMemberPricingSeeAllVariant,
                                t.largeUploads,
                                t.hdVideo,
                                t.superReactions,
                            ];
                break;
            case l.gM.CARD_CAROUSEL_THIRD_ROW:
                d =
                    a === c.a$.FP_ONLY
                        ? o
                            ? [t.entranceSoundsSeeAllVariation]
                            : [t.entranceSoundsSeeAllVariation, t.greyBadge]
                        : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return r && (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    h = (e) => {
        let t = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
            n = null != t ? s.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? s.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
        return e
            ? i
                ? {
                      title: u.intl.string(u.t.Aw5DRk),
                      subtitle: u.intl.string(u.t.aHdO6u),
                  }
                : {
                      title: u.intl.string(u.t.N30YEx),
                      subtitle: u.intl.string(u.t.GTUdNT),
                  }
            : {
                  title: u.intl.string(u.t["Uh3+CA"]),
                  subtitle: u.intl.string(u.t["5TFEXl"]),
              };
    },
    m = () => {
        let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
        return (0, s.I5)(e);
    },
    g = () => {
        let e = a.default.getCurrentUser();
        return (0, s.M5)(e, c.PremiumTypes.TIER_2);
    };
