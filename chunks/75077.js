n.d(t, {
    BS: function () {
        return C;
    },
    Dp: function () {
        return x;
    },
    Gw: function () {
        return v;
    },
    Op: function () {
        return A;
    },
    gx: function () {
        return I;
    },
    iG: function () {
        return N;
    },
    k3: function () {
        return h;
    },
    mN: function () {
        return P;
    },
    oo: function () {
        return b;
    },
    sP: function () {
        return j;
    },
    t2: function () {
        return T;
    },
    vZ: function () {
        return E;
    }
}),
    n(653041),
    n(627341);
var i = n(278074),
    r = n(442837),
    a = n(780384),
    s = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    g = n(650032),
    m = n(391110),
    f = n(474936),
    p = n(735825),
    _ = n(388032);
let h = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return _.intl.string(_.t.fhK8ho);
            case p.EB.REDEEMABLE:
                return _.intl.string(_.t['084A8/']);
            case p.EB.REDEEMED:
                return _.intl.string(_.t['5kxiMz']);
            default:
                return '';
        }
    },
    x = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return _.intl.string(_.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return _.intl.string(_.t['3R9pPD']);
            default:
                return '';
        }
    },
    E = (e, t, n) => {
        switch (e) {
            case p.EB.PENDING:
                return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? _.intl.string(_.t.hnbagI) : _.intl.string(_.t['73+DnJ']);
            case p.EB.REDEEMABLE:
                if (t === p.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? _.intl.string(_.t.RrwI8f) : _.intl.string(_.t.P1Xqqa);
                return _.intl.string(_.t.K687hI);
            case p.EB.REDEEMED:
                return _.intl.string(_.t['QvW/MT']);
            default:
                return;
        }
    },
    b = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return _.intl.string(_.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return _.intl.string(_.t.F915ra);
            default:
                return;
        }
    },
    C = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return _.intl.string(_.t.tncFsb);
            case p.EB.REDEEMABLE:
                return;
            case p.EB.REDEEMED:
                return _.intl.string(_.t.OcdQND);
            default:
                return;
        }
    },
    v = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return _.intl.string(_.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return _.intl.string(_.t['4cCWPT']);
            default:
                return;
        }
    };
function T(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? _.intl.formatToPlainString(_.t.FULtam, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return _.intl.string(_.t['+zx47e']);
        case p.EB.REDEEMED:
            return _.intl.string(_.t['5kxiMz']);
        default:
            return '';
    }
}
function N(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? _.intl.formatToPlainString(_.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return _.intl.string(_.t.B9eJyc);
        case p.EB.REDEEMED:
            return _.intl.string(_.t.hpy7PD);
        default:
            return '';
    }
}
let I = (e, t, n) => ((0, a.wj)(e) ? t : n),
    S = 'getWhatsNewRow',
    R = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r, shopMarketingVariation: a } = e,
            l = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                a !== s.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: m } = g._.getCurrentConfig({ location: S }, { autoTrackExposure: !1 }),
            { enabled: f } = u.r.getCurrentConfig({ location: S }, { autoTrackExposure: !1 }),
            { enabled: p } = d.C.getCurrentConfig({ location: S }, { autoTrackExposure: !1 }),
            _ = m && !f && !p,
            h = O();
        return null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), null != n.freeBoost && !0 === r && o({ card: n.freeBoost }), null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.shyProject && o({ card: n.shyProject }), i && h ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !h && (_ || null != n.shyProject ? _ && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    j = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: r, isFullScreen: a, showTenureCard: s, isPremiumSubscriber: l, fractionalState: o } = e,
            c = [];
        switch (n) {
            case m.R0.PERKS_DISCOVERABILITY:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: f.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case m.R0.WHATS_NEW:
                c = R({
                    cards: c,
                    perksCards: t,
                    isFullScreen: a,
                    showTenureCard: s,
                    shopMarketingVariation: r
                });
                break;
            case m.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, i.EQ)({ isPremiumSubscriber: l })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case m.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: f.a$.FP_ONLY }, () => [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions])
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case m.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, i.EQ)({ fractionalState: o })
                    .with({ fractionalState: f.a$.FP_ONLY }, () => [t.entranceSoundsSeeAllVariation, t.greyBadge])
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return !a && (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    A = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === f.Si.TIER_2;
        if (e)
            return i
                ? {
                      title: _.intl.string(_.t.Aw5DRk),
                      subtitle: _.intl.string(_.t.aHdO6u)
                  }
                : {
                      title: _.intl.string(_.t.N30YEx),
                      subtitle: _.intl.string(_.t.GTUdNT)
                  };
        return {
            title: _.intl.string(_.t['Uh3+CA']),
            subtitle: _.intl.string(_.t['5TFEXl'])
        };
    },
    P = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    O = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, f.p9.TIER_2);
    };
