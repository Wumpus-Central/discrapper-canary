n.d(t, {
    ZM: () => _,
    gx: () => d,
    mN: () => h,
    re: () => m,
}),
    n(539854),
    n(388685);
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
    p = (e) => {
        let {
                cards: t,
                perksCards: n,
                showProfileWidgets: r,
                showDisplayNameStyles: i,
                recurring3PPromotionExperiment: a,
                premiumGroupExperiment: o,
            } = e,
            s = null != n.tenureBadge ? [n.tenureBadge] : [],
            l = f - s.length,
            c = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            };
        return (
            o && c({ card: n.premiumGroup }),
            a && c({ card: n.recurring3PPromotions }),
            r && c({ card: n.profileWidgets }),
            i && c({ card: n.displayNameStyles }),
            c({ card: n.customThemes }),
            c({ card: n.permadecos }),
            c({ card: n.newAppStylesUpdateJune2024 }),
            t.push(...s),
            t
        );
    },
    _ = (e) => {
        let {
                perksCards: t,
                variant: n,
                hideCardsOnNarrowScreen: r,
                isPremiumSubscriber: i,
                fractionalState: a,
                isInReverseTrial: o,
                showProfileWidgets: s,
                showDisplayNameStyles: u,
                recurring3PPromotionExperiment: d,
                premiumGroupExperiment: f,
            } = e,
            _ = [];
        switch (n) {
            case l.gM.PERKS_DISCOVERABILITY:
                _ =
                    !1 === i
                        ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                        : a === c.a$.FP_ONLY
                          ? [t.profiles, t.clientThemes, t.hdVideo]
                          : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case l.gM.WHATS_NEW:
                _ = p({
                    cards: _,
                    perksCards: t,
                    showProfileWidgets: s,
                    showDisplayNameStyles: u,
                    recurring3PPromotionExperiment: d,
                    premiumGroupExperiment: f,
                });
                break;
            case l.gM.CARD_CAROUSEL_FIRST_ROW:
                _ =
                    !1 === i
                        ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                        : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case l.gM.CARD_CAROUSEL_SECOND_ROW:
                _ =
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
                _ =
                    a === c.a$.FP_ONLY
                        ? o
                            ? [t.entranceSoundsSeeAllVariation]
                            : [t.entranceSoundsSeeAllVariation, t.greyBadge]
                        : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return r && (_ = _.filter((e) => !e.hideOnNarrowScreen)), _;
    },
    m = (e) => {
        let t = (0, r.e7)([o.Z], () => o.Z.getPremiumTypeSubscription()),
            n = null != t ? s.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? s.ZP.getSkuIdForPlan(n.planId) : null) === c.Si.TIER_2;
        return e
            ? i
                ? {
                      title: u.intl.string(u.t.Aw5DRm),
                      subtitle: u.intl.string(u.t.aHdO6o),
                  }
                : {
                      title: u.intl.string(u.t.N30YE4),
                      subtitle: u.intl.string(u.t.GTUdNf),
                  }
            : {
                  title: u.intl.string(u.t["Uh3+CA"]),
                  subtitle: u.intl.string(u.t["5TFEXv"]),
              };
    },
    h = () => {
        let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
        return (0, s.I5)(e);
    };
