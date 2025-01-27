n.d(t, {
    BS: function () {
        return T;
    },
    Dp: function () {
        return E;
    },
    Gw: function () {
        return S;
    },
    Op: function () {
        return O;
    },
    gx: function () {
        return N;
    },
    iG: function () {
        return I;
    },
    k3: function () {
        return f;
    },
    mN: function () {
        return R;
    },
    oo: function () {
        return C;
    },
    sP: function () {
        return j;
    },
    t2: function () {
        return b;
    },
    vZ: function () {
        return _;
    }
}),
    n(653041),
    n(627341);
var i = n(278074),
    r = n(442837),
    s = n(780384),
    a = n(410154),
    l = n(594174),
    o = n(78839),
    c = n(74538),
    d = n(331119),
    u = n(575595),
    m = n(650032),
    g = n(391110),
    h = n(474936),
    p = n(735825),
    x = n(388032);
let f = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return x.intl.string(x.t.fhK8ho);
            case p.EB.REDEEMABLE:
                return x.intl.string(x.t['084A8/']);
            case p.EB.REDEEMED:
                return x.intl.string(x.t['5kxiMz']);
            default:
                return '';
        }
    },
    E = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return x.intl.string(x.t['9o4F4+']);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return x.intl.string(x.t['3R9pPD']);
            default:
                return '';
        }
    },
    _ = (e, t, n) => {
        switch (e) {
            case p.EB.PENDING:
                return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? x.intl.string(x.t.hnbagI) : x.intl.string(x.t['73+DnJ']);
            case p.EB.REDEEMABLE:
                if (t === p.Ft.FREE_GUILD_BOOST_1_MONTH) return n ? x.intl.string(x.t.RrwI8f) : x.intl.string(x.t.P1Xqqa);
                return x.intl.string(x.t.K687hI);
            case p.EB.REDEEMED:
                return x.intl.string(x.t['QvW/MT']);
            default:
                return;
        }
    },
    C = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return x.intl.string(x.t.nlcs6O);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return x.intl.string(x.t.F915ra);
            default:
                return;
        }
    },
    T = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return x.intl.string(x.t.tncFsb);
            case p.EB.REDEEMABLE:
                return;
            case p.EB.REDEEMED:
                return x.intl.string(x.t.OcdQND);
            default:
                return;
        }
    },
    S = (e) => {
        switch (e) {
            case p.EB.PENDING:
                return x.intl.string(x.t.LAFMBQ);
            case p.EB.REDEEMABLE:
            case p.EB.REDEEMED:
                return x.intl.string(x.t['4cCWPT']);
            default:
                return;
        }
    };
function b(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? x.intl.formatToPlainString(x.t.FULtam, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return x.intl.string(x.t['+zx47e']);
        case p.EB.REDEEMED:
            return x.intl.string(x.t['5kxiMz']);
        default:
            return '';
    }
}
function I(e, t) {
    switch (e) {
        case p.EB.PENDING:
            return null != t ? x.intl.formatToPlainString(x.t.a1eKDg, { days: t }) : '';
        case p.EB.REDEEMABLE:
            return x.intl.string(x.t.B9eJyc);
        case p.EB.REDEEMED:
            return x.intl.string(x.t.hpy7PD);
        default:
            return '';
    }
}
let N = (e, t, n) => ((0, s.wj)(e) ? t : n),
    v = 'getWhatsNewRow',
    A = (e) => {
        let { cards: t, perksCards: n, isFullScreen: i, showTenureCard: r, shopMarketingVariation: s } = e,
            l = i ? 3 : 2,
            o = (e) => {
                let { card: n } = e;
                t.length < l && t.push(n);
            },
            c = () => {
                s !== a.C5.DEFAULT ? o({ card: n.specialShopPerks }) : o({ card: n.specialMemberPricing });
            },
            { enabled: g } = m._.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            { enabled: h } = u.r.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            { enabled: p } = d.C.getCurrentConfig({ location: v }, { autoTrackExposure: !1 }),
            x = g && !h && !p,
            f = P();
        return null != n.tenureBadge && o({ card: n.tenureBadge }), null != n.tenureRewardCollectible && !0 === r && o({ card: n.tenureRewardCollectible }), null != n.freeBoost && !0 === r && o({ card: n.freeBoost }), null != n.shyProject && o({ card: n.shyProject }), i && f ? (0 === t.length && c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })) : i && !f && (x || null != n.shyProject ? x && o({ card: n.referralProgram }) : c(), o({ card: n.newAppStylesUpdateJune2024 }), o({ card: n.serverProfiles })), o({ card: n.earlyAccess }), c(), o({ card: n.unlimitedSuperReactions }), t;
    },
    j = (e) => {
        let { perksCards: t, variant: n, shopMarketingVariation: r, isFullScreen: s, showTenureCard: a, isPremiumSubscriber: l, fractionalState: o } = e,
            c = [];
        switch (n) {
            case g.R0.PERKS_DISCOVERABILITY:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons])
                    .with({ fractionalState: h.a$.FP_ONLY }, () => [t.profiles, t.clientThemes, t.hdVideo])
                    .otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
                break;
            case g.R0.WHATS_NEW:
                c = A({
                    cards: c,
                    perksCards: t,
                    isFullScreen: s,
                    showTenureCard: a,
                    shopMarketingVariation: r
                });
                break;
            case g.R0.CARD_CAROUSEL_FIRST_ROW:
                c = (0, i.EQ)({ isPremiumSubscriber: l })
                    .with({ isPremiumSubscriber: !1 }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks])
                    .otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
                break;
            case g.R0.CARD_CAROUSEL_SECOND_ROW:
                c = (0, i.EQ)({
                    isPremiumSubscriber: l,
                    fractionalState: o
                })
                    .with({ isPremiumSubscriber: !1 }, () => [t.customSoundsEverywhere, t.specialStickerAccess])
                    .with({ fractionalState: h.a$.FP_ONLY }, () => [t.greyServerBoosts, t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions])
                    .otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
                break;
            case g.R0.CARD_CAROUSEL_THIRD_ROW:
                c = (0, i.EQ)({ fractionalState: o })
                    .with({ fractionalState: h.a$.FP_ONLY }, () => [t.entranceSoundsSeeAllVariation, t.greyBadge])
                    .otherwise(() => [t.entranceSoundsSeeAllVariation, t.badge]);
        }
        return !s && (c = c.filter((e) => !e.hideOnNarrowScreen)), c;
    },
    O = (e) => {
        let t = (0, r.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
            n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
            i = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === h.Si.TIER_2;
        if (e)
            return i
                ? {
                      title: x.intl.string(x.t.Aw5DRk),
                      subtitle: x.intl.string(x.t.aHdO6u)
                  }
                : {
                      title: x.intl.string(x.t.N30YEx),
                      subtitle: x.intl.string(x.t.GTUdNT)
                  };
        return {
            title: x.intl.string(x.t['Uh3+CA']),
            subtitle: x.intl.string(x.t['5TFEXl'])
        };
    },
    R = () => {
        let e = (0, r.e7)([l.default], () => l.default.getCurrentUser());
        return (0, c.I5)(e);
    },
    P = () => {
        let e = l.default.getCurrentUser();
        return (0, c.M5)(e, h.p9.TIER_2);
    };
