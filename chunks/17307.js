n.d(t, {
    G4: () => p,
    LQ: () => m,
    t4: () => u,
    vx: () => _,
}),
    n(321073),
    n(896048);
var r = n(311907),
    i = n(582754),
    l = n(287809),
    s = n(166403),
    a = n(927578),
    o = n(322631),
    c = n(788868),
    d = n(985018);
let u = (e, t, n) => ((0, i.Mw)(e) ? t : n),
    _ = (e) => {
        let {
                perksCards: t,
                variant: n,
                hideCardsOnNarrowScreen: r,
                isPremiumSubscriber: i,
                fractionalState: l,
                isInReverseTrial: s,
                recurring3PPromotionExperiment: a,
                showPremiumGroup: d,
                isPremiumGroupMember: u,
            } = e,
            _ = [];
        switch (n) {
            case o.cJ.PERKS_DISCOVERABILITY:
                _ =
                    !1 === i
                        ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                        : l === c.xc.FP_ONLY || u
                          ? [t.profiles, t.clientThemes, t.hdVideo]
                          : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case o.cJ.WHATS_NEW:
                _ = ((e) => {
                    let { cards: t, perksCards: n, recurring3PPromotionExperiment: r, showPremiumGroup: i } = e,
                        l = null != n.tenureBadge ? [n.tenureBadge] : [],
                        s = 3 - l.length,
                        a = (e) => {
                            let { card: n } = e;
                            t.length < s && t.push(n);
                        };
                    return (
                        i &&
                            a({
                                card: n.premiumGroup,
                            }),
                        r &&
                            a({
                                card: n.recurring3PPromotions,
                            }),
                        a({
                            card: n.displayNameStyles,
                        }),
                        a({
                            card: n.customThemes,
                        }),
                        a({
                            card: n.permadecos,
                        }),
                        a({
                            card: n.newAppStylesUpdateJune2024,
                        }),
                        t.push(...l),
                        t
                    );
                })({
                    cards: _,
                    perksCards: t,
                    recurring3PPromotionExperiment: a,
                    showPremiumGroup: d,
                });
                break;
            case o.cJ.CARD_CAROUSEL_FIRST_ROW:
                _ =
                    !1 === i
                        ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                        : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case o.cJ.CARD_CAROUSEL_SECOND_ROW:
                _ =
                    !1 === i
                        ? [t.customSoundsEverywhere, t.specialStickerAccess]
                        : l === c.xc.FP_ONLY
                          ? s
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
            case o.cJ.CARD_CAROUSEL_THIRD_ROW:
                _ =
                    l === c.xc.FP_ONLY
                        ? s
                            ? [t.entranceSoundsSeeAllVariation]
                            : [t.entranceSoundsSeeAllVariation, t.greyBadge]
                        : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return r && (_ = _.filter((e) => !e.hideOnNarrowScreen)), _;
    },
    p = (e) => {
        let t = (0, r.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
            n = null != t ? a.Ay.getPremiumPlanItem(t) : null,
            i = (null != n ? a.Ay.getSkuIdForPlan(n.planId) : null) === c.pe.TIER_2;
        return e
            ? i
                ? {
                      title: d.intl.string(d.t.Aw5DRm),
                      subtitle: d.intl.string(d.t.aHdO6o),
                  }
                : {
                      title: d.intl.string(d.t.N30YE4),
                      subtitle: d.intl.string(d.t.GTUdNf),
                  }
            : {
                  title: d.intl.string(d.t["Uh3+CA"]),
                  subtitle: d.intl.string(d.t["5TFEXv"]),
              };
    },
    m = () => {
        let e = (0, r.bG)([l.default], () => l.default.getCurrentUser());
        return (0, a.TW)(e);
    };
