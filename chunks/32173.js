n.d(t, {
    u: function () {
        return r;
    }
});
var i,
    r,
    s = n(200651);
n(192379);
var a = n(399606),
    l = n(230711),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(975298),
    m = n(779618),
    g = n(832149),
    h = n(300284),
    p = n(703656),
    x = n(547972),
    f = n(131951),
    E = n(594174),
    _ = n(78839),
    C = n(424218),
    T = n(63063),
    S = n(74538),
    b = n(860489),
    I = n(314684),
    N = n(687362),
    v = n(943180),
    A = n(848572),
    j = n(229555),
    O = n(768865),
    R = n(119269),
    P = n(391110),
    D = n(75077),
    y = n(474936),
    B = n(735825),
    Z = n(981631),
    L = n(526761),
    M = n(332325),
    k = n(388032),
    w = n(506829),
    F = n(660372),
    U = n(926433),
    V = n(302036),
    G = n(994554),
    H = n(704565),
    Y = n(393305),
    W = n(338879),
    z = n(609926),
    K = n(766491),
    q = n(193943),
    X = n(707046),
    Q = n(488459),
    J = n(334347),
    $ = n(132015),
    ee = n(355653),
    et = n(607762),
    en = n(474106),
    ei = n(572501),
    er = n(755590),
    es = n(909910),
    ea = n(637810),
    el = n(570423),
    eo = n(912429),
    ec = n(91394),
    ed = n(209672),
    eu = n(698173),
    em = n(926262),
    eg = n(371435),
    eh = n(83663);
((i = r || (r = {})).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        n = (0, C.BU)(y.Uq / 1024, { useKibibytes: !0 }),
        i = (0, a.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        r = null != i ? S.ZP.getPremiumPlanItem(i) : null,
        ep = (null != r ? S.ZP.getSkuIdForPlan(r.planId) : null) === y.Si.TIER_2,
        ex = E.default.getCurrentUser(),
        ef = (0, S.I5)(ex, y.p9.TIER_2),
        eE = (0, S.I5)(ex, y.p9.TIER_0),
        e_ = (0, I.bq)({ showAnimations: !0 }),
        eC = null != e_ ? e_.initialPercentage : void 0,
        eT = null != e_ ? e_.percentage : void 0,
        eS = (0, m.Z)(f.Z),
        eb = (0, N.ZP)(),
        eI = (0, N.aJ)(),
        eN = (0, I.Kb)(B.qY),
        { fractionalState: ev } = (0, u.Z)(),
        eA = ev === y.a$.FP_ONLY,
        ej = (0, h.Z)({
            scrollPosition: L.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eO = () => {
            l.Z.open(Z.oAB.VOICE, L.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eR = () => {
            (0, p.uL)(Z.Z5c.COLLECTIBLES_SHOP);
        },
        eP = () => {
            l.Z.open(Z.oAB.APPEARANCE, null, { scrollPosition: L.h1.CUSTOM_APP_ICONS });
        },
        eD = {
            clientThemes: {
                name: 'clientThemes',
                title: k.intl.string(k.t.kWM48P),
                subtitle: k.intl.string(k.t.CjRASE),
                description: k.intl.string(k.t.jBTTws),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: () => {
                    l.Z.open(Z.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: H
            },
            clips: ef
                ? {
                      name: 'clips',
                      title: k.intl.string(k.t.z2jK6e),
                      subtitle: k.intl.string(k.t['hxy0/f']),
                      description: k.intl.string(k.t.Z6v86e),
                      descriptionCta: eS ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.hvVgAQ),
                      pillText: k.intl.string(k.t.EYxi0t),
                      onCtaClick: eS
                          ? () => {
                                (0, x.Z)(M.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(T.Z.getArticleURL(Z.BhN.CLIPS), '_blank');
                            },
                      perkImage: K
                  }
                : {
                      name: 'clips',
                      title: k.intl.string(k.t.z2jK6e),
                      subtitle: k.intl.string(k.t['hxy0/f']),
                      description: k.intl.string(k.t.X9IeNz),
                      pillText: k.intl.string(k.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: ef
                ? {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: ef
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['+r4vdn']),
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: k.intl.string(k.t.UkLVeH),
                      subtitle: k.intl.string(k.t.xf9ePj),
                      description: k.intl.string(k.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            entranceSounds: ef
                ? {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: ef
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t.mUT8bG),
                      descriptionCta: k.intl.string(k.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: k.intl.string(k.t['f4M+Hx']),
                      subtitle: k.intl.string(k.t['7ZCYvL']),
                      description: k.intl.string(k.t['3smf/f']),
                      perkImage: ee
                  },
            profiles: {
                name: 'profiles',
                title: k.intl.string(k.t.KcyDwM),
                subtitle: k.intl.string(k.t.Mt3U1d),
                description: k.intl.string(k.t.kWcDKy),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: ej,
                perkImage: Y
            },
            remixing: ef
                ? {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.gdA9FB),
                      perkImage: er,
                      pillText: k.intl.string(k.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: k.intl.string(k.t['H+v6eX']),
                      subtitle: k.intl.string(k.t.wmbOAg),
                      description: k.intl.string(k.t.fiLtJi),
                      perkImage: er,
                      pillText: k.intl.string(k.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: k.intl.string(k.t['NyDu//']),
                subtitle: k.intl.string(k.t['4pEwXF']),
                description: eA ? k.intl.format(k.t.uPiIBQ, { link: 'https://discord.com' }) : k.intl.string(k.t.jsyNHh),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eA
                    ? void 0
                    : () => {
                          l.Z.open(Z.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: W,
                hideOnNarrowScreen: !eA,
                imageOverlayText: eA ? k.intl.string(k.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: k.intl.string(k.t['NyDu//']),
                subtitle: k.intl.string(k.t['4pEwXF']),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                perkImage: eg.Z,
                imageOverlayText: k.intl.string(k.t.lcYttb)
            },
            specialMemberPricing: ef
                ? {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  }
                : {
                      name: 'specialMemberPricing',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ea
                  },
            specialMemberPricingSeeAllVariant: ef
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: k.intl.string(k.t['0Mykgo']),
                      subtitle: k.intl.string(k.t.opgqDQ),
                      description: k.intl.string(k.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: ef
                ? {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['t+QZSU']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  }
                : {
                      name: 'specialShopPerks',
                      title: k.intl.string(k.t.U68LpK),
                      subtitle: k.intl.string(k.t.chRZiY),
                      description: k.intl.string(k.t['JE/EWV']),
                      descriptionCta: k.intl.string(k.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  },
            unlimitedSuperReactions: ef
                ? {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t['Cn/z6+']),
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: k.intl.string(k.t.hpgmOz),
                      subtitle: k.intl.string(k.t.Hxujsr),
                      description: k.intl.string(k.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: k.intl.string(k.t['6S7kOz']),
                subtitle: k.intl.string(k.t.kN1JRE),
                description: k.intl.string(k.t.e7FKCg),
                perkImage: ed
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: k.intl.string(k.t.O5R3ho),
                pillText: k.intl.string(k.t.yhEY5O),
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: k.intl.string(k.t.dcFfSE),
                subtitle: k.intl.string(k.t['37MFFh']),
                perkImage: F,
                description: k.intl.string(k.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: k.intl.string(k.t.dcFfSE),
                subtitle: k.intl.string(k.t['37MFFh']),
                perkImage: eh.Z,
                description: k.intl.string(k.t.T1IS4u),
                imageOverlayText: k.intl.string(k.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: k.intl.string(k.t.OuItFh),
                subtitle: k.intl.string(k.t.mPyrEx),
                perkImage: q,
                description: k.intl.string(k.t.e7FKCg),
                descriptionCta: k.intl.string(k.t.jVcuVV),
                onCtaClick: eP
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: k.intl.string(k.t['R2IV/f']),
                subtitle: k.intl.string(k.t.R5Xag4),
                perkImage: J,
                description: k.intl.string(k.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: k.intl.string(k.t.LWsAra),
                subtitle: k.intl.string(k.t.bTzbVl),
                perkImage: (0, D.gx)(t, U, V),
                description: k.intl.string(k.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: k.intl.string(k.t.tzdIwM),
                subtitle: k.intl.string(k.t.FXlU29),
                perkImage: (0, D.gx)(t, G, eo),
                description: k.intl.string(k.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: k.intl.formatToPlainString(k.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: k.intl.formatToPlainString(k.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: em,
                description: k.intl.string(k.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: k.intl.string(k.t.RSXQYG),
                subtitle: k.intl.string(k.t.ymCPxs),
                perkImage: ec,
                description: k.intl.string(k.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: k.intl.string(k.t.XQCSrq),
                subtitle: k.intl.string(k.t.HC5wVV),
                description: k.intl.string(k.t.ee7wQ0),
                descriptionCta: ef || eE ? k.intl.string(k.t.y9TxXV) : k.intl.string(k.t.d8o6lZ),
                isPremiumGetCta: !(ef || eE),
                onCtaClick: ef || eE ? eP : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: k.intl.string(k.t.tPY4o6),
                subtitle: k.intl.string(k.t.JY0grK),
                description: k.intl.format(k.t['2JqTFx'], { helpdeskArticle: T.Z.getArticleURL(Z.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !ep || void 0,
                perkImage: ei
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: k.intl.string(k.t.I9TYMj),
                subtitle: k.intl.string(k.t.HMSHeH),
                descriptionCta: ef ? k.intl.string(k.t.jVcuVV) : k.intl.string(k.t.JST6jo),
                isPremiumGetCta: !ef,
                onCtaClick: ef ? ej : void 0,
                perkImage: es
            }
        };
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: l } = eI,
            o = (0, s.jsx)('div', {
                className: w.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    progressCircleVariation: R.Qo.AVATAR_DECO,
                    avatarDecoAssetId: B.VA,
                    avatarDecoAssetDescription: k.intl.string(k.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: eC
                })
            });
        eD.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                if (null != eN)
                    (0, g.Z)({
                        product: eN,
                        title: k.intl.string(k.t.wRAXra),
                        description: k.intl.string(k.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eb) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: o } = eb,
            c = (0, s.jsx)('div', {
                className: w.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: eC
                })
            });
        eD.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: a,
            onCtaClick: () => {
                l.Z.open(Z.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: o
        };
    }
    let ey = (0, A.kG)(),
        { enabled: eB } = (0, v.D)();
    return (
        null != ey &&
            eB &&
            (eD.tenureBadge = {
                name: 'tenureBadge',
                title: k.intl.string(k.t.rnsqpa),
                pillText: k.intl.string(k.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, s.jsx)(j.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, O.k)(e)
            }),
        (0, b.ZP)('usePerksDiscoverabilityCard') === b.P0.SUMMER_2024 &&
            (eD.shyProject = {
                name: 'shyProject',
                title: k.intl.string(k.t['0Mykgo']),
                subtitle: k.intl.string(k.t.opgqDQ),
                description: ef ? k.intl.string(k.t['t+QZSU']) : k.intl.string(k.t['JE/EWV']),
                descriptionCta: k.intl.string(k.t.dBJVnZ),
                pillText: k.intl.string(k.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: ef ? eR : void 0,
                perkImage: z,
                isPremiumGetCta: !ef
            }),
        eD
    );
};
