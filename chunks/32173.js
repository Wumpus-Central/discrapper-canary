n.d(t, {
    Z: () => eT,
    u: () => ev
}),
    n(953529);
var i,
    r = n(200651);
n(192379);
var s = n(399606),
    l = n(704215),
    a = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    p = n(975298),
    g = n(779618),
    h = n(832149),
    f = n(605236),
    b = n(442933),
    _ = n(300284),
    x = n(703656),
    E = n(547972),
    j = n(131951),
    C = n(594174),
    O = n(78839),
    S = n(424218),
    v = n(63063),
    T = n(74538),
    I = n(715037),
    N = n(780525),
    y = n(314684),
    A = n(687362),
    P = n(943180),
    R = n(229555),
    D = n(768865),
    Z = n(119269),
    w = n(740479),
    k = n(391110),
    L = n(75077),
    B = n(474936),
    M = n(735825),
    U = n(981631),
    V = n(215023),
    G = n(921944),
    F = n(526761),
    H = n(332325),
    z = n(388032),
    W = n(344253),
    Y = n(660372),
    K = n(926433),
    q = n(302036),
    X = n(994554),
    Q = n(704565),
    J = n(393305),
    $ = n(338879),
    ee = n(766491),
    et = n(193943),
    en = n(707046),
    ei = n(488459),
    er = n(334347),
    es = n(132015),
    el = n(142416),
    ea = n(498730),
    eo = n(607762),
    ec = n(474106),
    ed = n(572501),
    eu = n(755590),
    em = n(909910),
    ep = n(637810),
    eg = n(570423),
    eh = n(912429),
    ef = n(91394),
    eb = n(209672),
    e_ = n(698173),
    ex = n(926262),
    eE = n(482668),
    ej = n(21504),
    eC = n(371435),
    eO = n(83663),
    eS = n(317194),
    ev = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.COLLECTIBLE_DECO = 'collectibleDeco'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.NAMEPLATES = 'nameplates'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.TENURE_BADGE = 'tenureBadge'), (i.PERMADECOS = 'permadecos'), i);
let eT = () => {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        ev = (0, S.BU)(B.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: eT, isEligibleForReward: eI } = (0, s.cj)([O.ZP], () => ({
            premiumSubscription: O.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: O.ZP.getIsSubscriptionEligibleForReward()
        })),
        eN = null != eT ? T.ZP.getPremiumPlanItem(eT) : null,
        ey = (null != eN ? T.ZP.getSkuIdForPlan(eN.planId) : null) === B.Si.TIER_2,
        eA = C.default.getCurrentUser(),
        eP = (0, T.I5)(eA, B.p9.TIER_2),
        eR = (0, T.I5)(eA, B.p9.TIER_0),
        eD = (0, y.bq)({ showAnimations: !0 }),
        eZ = null != eD ? eD.initialPercentage : void 0,
        ew = null != eD ? eD.percentage : void 0,
        ek = (0, g.Z)(j.Z),
        eL = (0, b.H)('usePerksDiscoverabilityCards'),
        eB = (0, A.a)(),
        eM = (0, y.Kb)(M.qY),
        { isFractionalPremiumActive: eU } = (0, p.Z)(),
        eV = null != eT && eT.hasPremiumAtLeast(B.p9.TIER_2),
        eG = (0, f.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        { enabled: eF } = I.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        eH = (0, _.Z)({
            scrollPosition: F.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ez = () => {
            o.Z.open(U.oAB.VOICE, F.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eW = () => {
            (0, x.uL)(U.Z5c.COLLECTIBLES_SHOP);
        },
        eY = () => {
            o.Z.open(U.oAB.APPEARANCE, null, { scrollPosition: F.h1.CUSTOM_APP_ICONS });
        },
        eK = {
            clientThemes: {
                name: 'clientThemes',
                title: z.intl.string(z.t.kWM48P),
                subtitle: z.intl.string(z.t.CjRASE),
                description: z.intl.string(z.t.jBTTws),
                descriptionCta: z.intl.string(z.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(U.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: Q
            },
            clips: eP
                ? {
                      name: 'clips',
                      title: z.intl.string(z.t.z2jK6e),
                      subtitle: z.intl.string(z.t['hxy0/f']),
                      description: z.intl.string(z.t.Z6v86e),
                      descriptionCta: ek ? z.intl.string(z.t.jVcuVV) : z.intl.string(z.t.hvVgAQ),
                      pillText: z.intl.string(z.t.EYxi0t),
                      onCtaClick: ek
                          ? () => {
                                (0, E.Z)(H.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(v.Z.getArticleURL(U.BhN.CLIPS), '_blank');
                            },
                      perkImage: ee
                  }
                : {
                      name: 'clips',
                      title: z.intl.string(z.t.z2jK6e),
                      subtitle: z.intl.string(z.t['hxy0/f']),
                      description: z.intl.string(z.t.X9IeNz),
                      pillText: z.intl.string(z.t.EYxi0t),
                      perkImage: ee
                  },
            earlyAccess: eP
                ? {
                      name: 'earlyAccess',
                      title: z.intl.string(z.t.UkLVeH),
                      subtitle: z.intl.string(z.t.xf9ePj),
                      description: z.intl.string(z.t['+r4vdn']),
                      perkImage: en
                  }
                : {
                      name: 'earlyAccess',
                      title: z.intl.string(z.t.UkLVeH),
                      subtitle: z.intl.string(z.t.xf9ePj),
                      description: z.intl.string(z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: en
                  },
            earlyAccessSeeAllVariant: eP
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: z.intl.string(z.t.UkLVeH),
                      subtitle: z.intl.string(z.t.xf9ePj),
                      description: z.intl.string(z.t['+r4vdn']),
                      perkImage: ei
                  }
                : {
                      name: 'earlyAccess',
                      title: z.intl.string(z.t.UkLVeH),
                      subtitle: z.intl.string(z.t.xf9ePj),
                      description: z.intl.string(z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ei
                  },
            entranceSounds: eP
                ? {
                      name: 'entranceSounds',
                      title: z.intl.string(z.t['f4M+Hx']),
                      subtitle: z.intl.string(z.t['7ZCYvL']),
                      description: z.intl.string(z.t.mUT8bG),
                      descriptionCta: z.intl.string(z.t.jVcuVV),
                      onCtaClick: ez,
                      perkImage: es
                  }
                : {
                      name: 'entranceSounds',
                      title: z.intl.string(z.t['f4M+Hx']),
                      subtitle: z.intl.string(z.t['7ZCYvL']),
                      description: z.intl.string(z.t['3smf/f']),
                      perkImage: es
                  },
            entranceSoundsSeeAllVariation: eP
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: z.intl.string(z.t['f4M+Hx']),
                      subtitle: z.intl.string(z.t['7ZCYvL']),
                      description: z.intl.string(z.t.mUT8bG),
                      descriptionCta: z.intl.string(z.t.jVcuVV),
                      onCtaClick: ez,
                      perkImage: el
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: z.intl.string(z.t['f4M+Hx']),
                      subtitle: z.intl.string(z.t['7ZCYvL']),
                      description: z.intl.string(z.t['3smf/f']),
                      perkImage: el
                  },
            profiles: {
                name: 'profiles',
                title: z.intl.string(z.t.KcyDwM),
                subtitle: z.intl.string(z.t.Mt3U1d),
                description: z.intl.string(z.t.kWcDKy),
                descriptionCta: z.intl.string(z.t.jVcuVV),
                onCtaClick: eH,
                perkImage: J
            },
            remixing: eP
                ? {
                      name: 'remixing',
                      title: z.intl.string(z.t['H+v6eX']),
                      subtitle: z.intl.string(z.t.wmbOAg),
                      description: z.intl.string(z.t.gdA9FB),
                      perkImage: eu,
                      pillText: z.intl.string(z.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: z.intl.string(z.t['H+v6eX']),
                      subtitle: z.intl.string(z.t.wmbOAg),
                      description: z.intl.string(z.t.fiLtJi),
                      perkImage: eu,
                      pillText: z.intl.string(z.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: z.intl.string(z.t['NyDu//']),
                subtitle: z.intl.string(z.t['4pEwXF']),
                description: eU ? z.intl.format(z.t.uPiIBQ, { link: 'https://discord.com' }) : z.intl.string(z.t.jsyNHh),
                descriptionCta: z.intl.string(z.t.jVcuVV),
                onCtaClick: eU
                    ? void 0
                    : () => {
                          o.Z.open(U.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: $,
                hideOnNarrowScreen: !eU,
                imageOverlayText: eU ? z.intl.string(z.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: z.intl.string(z.t['NyDu//']),
                subtitle: z.intl.string(z.t['4pEwXF']),
                descriptionCta: z.intl.string(z.t.jVcuVV),
                perkImage: eC.Z,
                imageOverlayText: z.intl.string(z.t.lcYttb)
            },
            specialMemberPricing: eL
                ? {
                      name: 'specialMemberPricing',
                      title: z.intl.string(z.t['0Mykgo']),
                      subtitle: z.intl.string(z.t.opgqDQ),
                      description: z.intl.string(z.t['t+QZSU']),
                      descriptionCta: z.intl.string(z.t.dBJVnZ),
                      onCtaClick: eW,
                      perkImage: ea
                  }
                : eP
                  ? {
                        name: 'specialMemberPricing',
                        title: z.intl.string(z.t['0Mykgo']),
                        subtitle: z.intl.string(z.t.opgqDQ),
                        description: z.intl.string(z.t['t+QZSU']),
                        descriptionCta: z.intl.string(z.t.dBJVnZ),
                        onCtaClick: eW,
                        perkImage: ep
                    }
                  : {
                        name: 'specialMemberPricing',
                        title: z.intl.string(z.t['0Mykgo']),
                        subtitle: z.intl.string(z.t.opgqDQ),
                        description: z.intl.string(z.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: ep
                    },
            specialMemberPricingSeeAllVariant: eL
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: z.intl.string(z.t['0Mykgo']),
                      subtitle: z.intl.string(z.t.opgqDQ),
                      description: z.intl.string(z.t['t+QZSU']),
                      descriptionCta: z.intl.string(z.t.dBJVnZ),
                      onCtaClick: eW,
                      perkImage: ea
                  }
                : eP
                  ? {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: z.intl.string(z.t['0Mykgo']),
                        subtitle: z.intl.string(z.t.opgqDQ),
                        description: z.intl.string(z.t['t+QZSU']),
                        descriptionCta: z.intl.string(z.t.dBJVnZ),
                        onCtaClick: eW,
                        perkImage: eg
                    }
                  : {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: z.intl.string(z.t['0Mykgo']),
                        subtitle: z.intl.string(z.t.opgqDQ),
                        description: z.intl.string(z.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: eg
                    },
            specialShopPerks: eL
                ? {
                      name: 'specialShopPerks',
                      title: z.intl.string(z.t.U68LpK),
                      subtitle: z.intl.string(z.t.chRZiY),
                      description: z.intl.string(z.t['t+QZSU']),
                      descriptionCta: z.intl.string(z.t.dBJVnZ),
                      onCtaClick: eW,
                      perkImage: ea
                  }
                : eP
                  ? {
                        name: 'specialShopPerks',
                        title: z.intl.string(z.t.U68LpK),
                        subtitle: z.intl.string(z.t.chRZiY),
                        description: z.intl.string(z.t['t+QZSU']),
                        descriptionCta: z.intl.string(z.t.dBJVnZ),
                        onCtaClick: eW,
                        perkImage: ep
                    }
                  : {
                        name: 'specialShopPerks',
                        title: z.intl.string(z.t.U68LpK),
                        subtitle: z.intl.string(z.t.chRZiY),
                        description: z.intl.string(z.t['JE/EWV']),
                        descriptionCta: z.intl.string(z.t.dBJVnZ),
                        onCtaClick: eW,
                        perkImage: ep
                    },
            unlimitedSuperReactions: eP
                ? {
                      name: 'unlimitedSuperReactions',
                      title: z.intl.string(z.t.hpgmOz),
                      subtitle: z.intl.string(z.t.Hxujsr),
                      description: z.intl.string(z.t['Cn/z6+']),
                      perkImage: e_,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: z.intl.string(z.t.hpgmOz),
                      subtitle: z.intl.string(z.t.Hxujsr),
                      description: z.intl.string(z.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: e_,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: z.intl.string(z.t['6S7kOz']),
                subtitle: z.intl.string(z.t.kN1JRE),
                description: z.intl.string(z.t.e7FKCg),
                perkImage: eb
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: z.intl.string(z.t.O5R3ho),
                pillText: z.intl.string(z.t.yhEY5O),
                backgroundImage: ec
            },
            badge: {
                name: 'badge',
                title: z.intl.string(z.t.dcFfSE),
                subtitle: z.intl.string(z.t['37MFFh']),
                perkImage: Y,
                description: z.intl.string(z.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: z.intl.string(z.t.dcFfSE),
                subtitle: z.intl.string(z.t['37MFFh']),
                perkImage: eO.Z,
                description: z.intl.string(z.t.T1IS4u),
                imageOverlayText: z.intl.string(z.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: z.intl.string(z.t.OuItFh),
                subtitle: z.intl.string(z.t.mPyrEx),
                perkImage: et,
                description: z.intl.string(z.t.e7FKCg),
                descriptionCta: z.intl.string(z.t.jVcuVV),
                onCtaClick: eY
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: z.intl.string(z.t['R2IV/f']),
                subtitle: z.intl.string(z.t.R5Xag4),
                perkImage: er,
                description: z.intl.string(z.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: z.intl.string(z.t.LWsAra),
                subtitle: z.intl.string(z.t.bTzbVl),
                perkImage: (0, L.gx)(t, K, q),
                description: z.intl.string(z.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: z.intl.string(z.t.tzdIwM),
                subtitle: z.intl.string(z.t.FXlU29),
                perkImage: (0, L.gx)(t, X, eh),
                description: z.intl.string(z.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: z.intl.formatToPlainString(z.t.jqhAdH, { premiumMaxSize: ev }),
                subtitle: z.intl.formatToPlainString(z.t['HI+cfn'], { premiumMaxSize: ev }),
                perkImage: ex,
                description: z.intl.string(z.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: z.intl.string(z.t.RSXQYG),
                subtitle: z.intl.string(z.t.ymCPxs),
                perkImage: ef,
                description: z.intl.string(z.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: z.intl.string(z.t.XQCSrq),
                subtitle: z.intl.string(z.t.HC5wVV),
                description: z.intl.string(z.t.ee7wQ0),
                descriptionCta: eP || eR ? z.intl.string(z.t.y9TxXV) : z.intl.string(z.t.d8o6lZ),
                isPremiumGetCta: !(eP || eR),
                onCtaClick: eP || eR ? eY : void 0,
                perkImage: eo
            },
            referralProgram: {
                name: 'referralProgram',
                title: z.intl.string(z.t.tPY4o6),
                subtitle: z.intl.string(z.t.JY0grK),
                description: z.intl.format(z.t['2JqTFx'], { helpdeskArticle: v.Z.getArticleURL(U.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: z.intl.string(z.t.JST6jo),
                isPremiumGetCta: !ey || void 0,
                perkImage: ed
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: z.intl.string(z.t.I9TYMj),
                subtitle: z.intl.string(z.t.HMSHeH),
                descriptionCta: eP ? z.intl.string(z.t.jVcuVV) : z.intl.string(z.t.JST6jo),
                isPremiumGetCta: !eP,
                onCtaClick: eP ? eH : void 0,
                perkImage: em
            },
            permadecos: {
                name: 'permadecos',
                title: z.intl.string(z.t['57ngoq']),
                subtitle: z.intl.string(z.t.piFFjY),
                description: z.intl.format(z.t.Pd7olp, { learnMoreLink: v.Z.getArticleURL(U.BhN.PERMADECOS) }),
                descriptionCta: eP ? z.intl.string(z.t.jVcuVV) : z.intl.string(z.t.JST6jo),
                isPremiumGetCta: !eP,
                onCtaClick: eP
                    ? () => {
                          eG || (0, f.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: G.L.TAKE_ACTION }), eH();
                      }
                    : void 0,
                pillText: eG || !eP ? void 0 : z.intl.string(z.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eS.Z
            },
            nameplates: {
                name: 'nameplates',
                title: z.intl.string(z.t.rJbHFx),
                subtitle: z.intl.string(z.t.t2wcb2),
                perkImage: ea,
                descriptionCta: z.intl.string(z.t.jVcuVV),
                onCtaClick: eW
            }
        };
    if (null != eB) {
        let { title: t, subtitle: n, description: i, pillText: s, ctaDescription: l, dismissibleContentType: a } = eB;
        eK.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: (0, r.jsx)('div', {
                className: W.cardComponent,
                children: (0, r.jsx)(Z.ZP, {
                    progressCircleVariation: Z.Qo.AVATAR_DECO,
                    avatarDecoAssetId: M.VA,
                    avatarDecoAssetDescription: z.intl.string(z.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: ew,
                    initialPercentage: eZ
                })
            }),
            descriptionCta: l,
            onCtaClick: () => {
                null != eM &&
                    (0, h.Z)({
                        product: eM,
                        overrideTitle: z.intl.string(z.t.wRAXra),
                        overrideDescription: z.intl.string(z.t.sQX6HR),
                        analyticsLocations: e,
                        purchaseType: V.o8.TENURE_REWARD
                    });
            },
            cardVariant: k.zW.REWARD,
            pillText: s,
            dismissibleContentType: a
        };
    }
    let { enabled: eq } = (0, P.D)();
    return (
        eq &&
            eP &&
            eV &&
            (eK.tenureBadge = {
                name: 'tenureBadge',
                title: z.intl.string(z.t.rnsqpa),
                pillText: z.intl.string(z.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(R.Z, {}),
                cardVariant: k.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, D.k)({ analyticsLocations: e })
            }),
        eI &&
            eF &&
            (eK.collectibleDeco = {
                name: 'collectibleDeco',
                title: z.intl.string(z.t.fzn5eH),
                subtitle: z.intl.format(z.t['8Ud+Qk'], {
                    date: new Date(N._H),
                    termsLink: N.Ps
                }),
                perkComponent: (0, r.jsx)(w.Z, {
                    image: i ? ej.Z : eE.Z,
                    cta: z.intl.string(z.t.s0w7a2),
                    onClick: () => {
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('74824').then(n.bind(n, 817357));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                i = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (i = i.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                i.forEach(function (t) {
                                                    var i;
                                                    (i = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: i,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = i);
                                                });
                                        }
                                        return e;
                                    })({}, t)
                                );
                        });
                    }
                }),
                pillText: z.intl.string(z.t.OS9KPj).toLocaleUpperCase()
            }),
        eK
    );
};
