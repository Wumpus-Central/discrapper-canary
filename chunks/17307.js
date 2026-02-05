n.d(t, { G4: () => m, LQ: () => A, t4: () => u, vx: () => _ }), n(321073);
var i = n(311907),
    s = n(582754),
    r = n(287809),
    a = n(166403),
    l = n(927578),
    o = n(322631),
    c = n(788868),
    d = n(985018);
let u = (e, t, n) => ((0, s.Mw)(e) ? t : n),
    _ = (e) => {
        let {
                perksCards: t,
                variant: n,
                hideCardsOnNarrowScreen: i,
                isPremiumSubscriber: s,
                fractionalState: r,
                isInReverseTrial: a,
                recurring3PPromotionExperiment: l,
                showPremiumGroup: d,
                isPremiumGroupMember: u,
            } = e,
            _ = [];
        switch (n) {
            case o.cJ.PERKS_DISCOVERABILITY:
                _ =
                    !1 === s
                        ? [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]
                        : r === c.xc.FP_ONLY || u
                          ? [t.profiles, t.clientThemes, t.hdVideo]
                          : [t.profiles, t.clientThemes, t.serverBoosts];
                break;
            case o.cJ.WHATS_NEW:
                _ = ((e) => {
                    let { cards: t, perksCards: n, recurring3PPromotionExperiment: i, showPremiumGroup: s } = e,
                        r = null != n.tenureBadge ? [n.tenureBadge] : [],
                        a = 3 - r.length,
                        l = (e) => {
                            let { card: n } = e;
                            t.length < a && t.push(n);
                        };
                    return (
                        s && l({ card: n.premiumGroup }),
                        i && l({ card: n.recurring3PPromotions }),
                        l({ card: n.displayNameStyles }),
                        l({ card: n.customThemes }),
                        l({ card: n.permadecos }),
                        l({ card: n.newAppStylesUpdateJune2024 }),
                        t.push(...r),
                        t
                    );
                })({ cards: _, perksCards: t, recurring3PPromotionExperiment: l, showPremiumGroup: d });
                break;
            case o.cJ.CARD_CAROUSEL_FIRST_ROW:
                _ =
                    !1 === s
                        ? [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]
                        : [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess];
                break;
            case o.cJ.CARD_CAROUSEL_SECOND_ROW:
                _ =
                    !1 === s
                        ? [t.customSoundsEverywhere, t.specialStickerAccess]
                        : r === c.xc.FP_ONLY
                          ? a
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
                    r === c.xc.FP_ONLY
                        ? a
                            ? [t.entranceSoundsSeeAllVariation]
                            : [t.entranceSoundsSeeAllVariation, t.greyBadge]
                        : [t.entranceSoundsSeeAllVariation, t.badge];
        }
        return i && (_ = _.filter((e) => !e.hideOnNarrowScreen)), _;
    },
    m = (e) => {
        let t = (0, i.bG)([a.A], () => a.A.getPremiumTypeSubscription()),
            n = null != t ? l.Ay.getPremiumPlanItem(t) : null,
            s = (null != n ? l.Ay.getSkuIdForPlan(n.planId) : null) === c.pe.TIER_2;
        return e
            ? s
                ? { title: d.intl.string(d.t.Aw5DRm), subtitle: d.intl.string(d.t.aHdO6o) }
                : { title: d.intl.string(d.t.N30YE4), subtitle: d.intl.string(d.t.GTUdNf) }
            : { title: d.intl.string(d.t["Uh3+CA"]), subtitle: d.intl.string(d.t["5TFEXv"]) };
    },
    A = () => {
        let e = (0, i.bG)([r.default], () => r.default.getCurrentUser());
        return (0, l.TW)(e);
    };
