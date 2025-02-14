n.d(t, {
    BS: () => T,
    Dp: () => E,
    Gw: () => N,
    Op: () => O,
    gx: () => b,
    iG: () => I,
    k3: () => p,
    mN: () => R,
    oo: () => f,
    sP: () => A,
    t2: () => S,
    vZ: () => C
}),
    n(653041),
    n(627341);
var i = n(278074),
    s = n(442837),
    r = n(780384),
    l = n(410154),
    a = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    m = n(650032),
    h = n(391110),
    g = n(474936),
    x = n(735825),
    _ = n(388032);
let p = (e) => {
        switch (e) {
            case x.EB.PENDING:
                return _.intl.string(_.t.fhK8ho);
            case x.EB.REDEEMABLE:
                return _.intl.string(_.t['084A8/']);
            case x.EB.REDEEMED:
                return _.intl.string(_.t['5kxiMz']);
            default:
                return '';
        }
    },
    E = (e) => {
        switch (e) {
            case x.EB.PENDING:
                return _.intl.string(_.t['9o4F4+']);
            case x.EB.REDEEMABLE:
            case x.EB.REDEEMED:
                return _.intl.string(_.t['3R9pPD']);
            default:
                return '';
        }
    },
    C = (e, t, n) => {
        switch (e) {
            case x.EB.PENDING:
                return t === x.Ft.FREE_GUILD_BOOST_1_MONTH ? _.intl.string(_.t.hnbagI) : _.intl.string(_.t['73+DnJ']);
            case x.EB.REDEEMABLE:
                if (t === x.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? _.intl.string(_.t.RrwI8f) : _.intl.string(_.t.P1Xqqa);
                return _.intl.string(_.t.K687hI);
            case x.EB.REDEEMED:
                return _.intl.string(_.t['QvW/MT']);
            default:
                return;
        }
    },
    f = (e) => {
        switch (e) {
            case x.EB.PENDING:
                return _.intl.string(_.t.nlcs6O);
            case x.EB.REDEEMABLE:
            case x.EB.REDEEMED:
                return _.intl.string(_.t.F915ra);
            default:
                return;
        }
    },
    T = (e) => {
        switch (e) {
            case x.EB.PENDING:
                return _.intl.string(_.t.tncFsb);
            case x.EB.REDEEMABLE:
                return;
            case x.EB.REDEEMED:
                return _.intl.string(_.t.OcdQND);
            default:
                return;
        }
    },
    N = (e) => {
        switch (e) {
            case x.EB.PENDING:
                return _.intl.string(_.t.LAFMBQ);
            case x.EB.REDEEMABLE:
            case x.EB.REDEEMED:
                return _.intl.string(_.t['4cCWPT']);
            default:
                return;
        }
    };
function S(e, t) {
    switch (e) {
        case x.EB.PENDING:
            return null != t ? _.intl.formatToPlainString(_.t.FULtam, { days: t }) : '';
        case x.EB.REDEEMABLE:
            return _.intl.string(_.t['+zx47e']);
        case x.EB.REDEEMED:
            return _.intl.string(_.t['5kxiMz']);
        default:
            return '';
    }
}
function I(e, t) {
    switch (e) {
        case x.EB.PENDING:
            return null != t ? _.intl.formatToPlainString(_.t.a1eKDg, { days: t }) : '';
        case x.EB.REDEEMABLE:
            return _.intl.string(_.t.B9eJyc);
        case x.EB.REDEEMED:
            return _.intl.string(_.t.hpy7PD);
        default:
            return '';
    }
}
let b = (e, t, n) => ((0, r.wj)(e) ? t : n),
    v = 'getWhatsNewRow',
    j = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: s, shopMarketingVariation: r } = e,
            a = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < a && t.push(n);
            },
            c = () => {
                r !== l.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: h } = m._.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            { enabled: g } = u.r.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            { enabled: x } = d.C.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            _ = h && !g && !x,
            p = P();
        return null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === s && o({ card: n.tenureRewardCollectible }), null != n.freeBoost && !0 === s && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), i && p ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !p && (_ || null != n.shyProject ? _ && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    A = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: s, isFullScreen: r, showTenureCard: l, isPremiumSubscriber: a, fractionalState: o, isInReverseTrial: c } = e,
            d = [];
        switch (n) {
            case h.R0.PERKS_DISCOVERABILITY:
                d = (0, i.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case h.R0.WHATS_NEW:
                d = j({
                    cards: d,
                    perksCards: t,
                    isFullScreen: r,
                    showTenureCard: l,
                    shopMarketingVariation: s
                });
                break;
            case h.R0.CARD_CAROUSEL_FIRST_ROW:
                d = (0, i.EQ)({ isPremiumSubscriber: a })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case h.R0.CARD_CAROUSEL_SECOND_ROW:
                d = (0, i.EQ)({
                    isPremiumSubscriber: a,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (c ? [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions] : [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]))
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case h.R0.CARD_CAROUSEL_THIRD_ROW:
                d = (0, i.EQ)({ fractionalState: o })
                    .with({ fractionalState: g.a$.FP_ONLY }, () => (c ? [t.entranceSoundsSeeAllVariation] : [t.entranceSoundsSeeAllVariation, t.greyBadge]))
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return r || (d = d.filter((e) => !e.hideOnNarrowScreen)), d;
    },
    O = (e) => {
        let t = (0, s.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === g.Si.TIER_2;
        return e
            ? i
                ? {
                      title: _.intl.string(_.t.Aw5DRk),
                      subtitle: _.intl.string(_.t.aHdO6u)
                  }
                : {
                      title: _.intl.string(_.t.N30YEx),
                      subtitle: _.intl.string(_.t.GTUdNT)
                  }
            : {
                  title: _.intl.string(_.t['Uh3+CA']),
                  subtitle: _.intl.string(_.t['5TFEXl'])
              };
    },
    R = () => {
        let e = (0, s.e7)([a.default], () => a.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    P = () => {
        let e = a.default.getCurrentUser();
        return (0, c.M5)(e, g.p9.TIER_2);
    };
