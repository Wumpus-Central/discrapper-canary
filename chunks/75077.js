n.d(t, {
    ZM: () => _,
    gx: () => d,
    mN: () => m,
    re: () => h,
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
        let { cards: t, perksCards: n, recurring3PPromotionExperiment: r, showPremiumGroup: i } = e,
            a = null != n.tenureBadge ? [n.tenureBadge] : [],
            o = f - a.length,
            s = (e) => {
                let { card: n } = e;
                t.length < o && t.push(n);
            };
        return (
            i && s({ card: n.premiumGroup }),
            r && s({ card: n.recurring3PPromotions }),
            s({ card: n.displayNameStyles }),
            s({ card: n.customThemes }),
            s({ card: n.permadecos }),
            s({ card: n.newAppStylesUpdateJune2024 }),
            t.push(...a),
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
                recurring3PPromotionExperiment: s,
                showPremiumGroup: u,
                isPremiumGroupMember: d,
            } = e,
            f = [];
        switch (n) {
            case l.gM.PERKS_DISCOVERABILITY:
                f =
                    !1 === i
                        ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                        : a === c.a$.FP_ONLY || d
                          ? [t.profiles, t.clientThemes, t.hdVideo]
                          : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case l.gM.WHATS_NEW:
                f = p({
                    cards: f,
                    perksCards: t,
                    recurring3PPromotionExperiment: s,
                    showPremiumGroup: u,
                });
                break;
            case l.gM.CARD_CAROUSEL_FIRST_ROW:
                f =
                    !1 === i
                        ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                        : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case l.gM.CARD_CAROUSEL_SECOND_ROW:
                f =
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
                f =
                    a === c.a$.FP_ONLY
                        ? o
                            ? [t.entranceSoundsSeeAllVariation]
                            : [t.entranceSoundsSeeAllVariation, t.greyBadge]
                        : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return r && (f = f.filter((e) => !e.hideOnNarrowScreen)), f;
    },
    h = (e) => {
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
    m = () => {
        let e = (0, r.e7)([a.default], () => a.default.getCurrentUser());
        return (0, s.I5)(e);
    };
