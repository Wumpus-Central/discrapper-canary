n.d(t, {
    Z: () => eE,
    u: () => e_
}),
    n(266796);
var r,
    i = n(200651);
n(192379);
var s = n(399606),
    a = n(481060),
    l = n(230711),
    o = n(410030),
    c = n(607070),
    d = n(100527),
    u = n(906732),
    m = n(975298),
    g = n(779618),
    p = n(832149),
    h = n(300284),
    f = n(341907),
    b = n(703656),
    x = n(547972),
    N = n(131951),
    _ = n(594174),
    E = n(78839),
    j = n(424218),
    C = n(63063),
    O = n(74538),
    v = n(715037),
    S = n(780525),
    T = n(314684),
    I = n(687362),
    y = n(943180),
    A = n(848572),
    P = n(229555),
    R = n(768865),
    D = n(119269),
    Z = n(740479),
    w = n(391110),
    k = n(75077),
    W = n(474936),
    L = n(735825),
    B = n(981631),
    M = n(526761),
    U = n(332325),
    V = n(388032),
    G = n(194511),
    F = n(660372),
    H = n(926433),
    z = n(302036),
    Y = n(994554),
    K = n(704565),
    q = n(393305),
    X = n(338879),
    J = n(766491),
    Q = n(193943),
    $ = n(707046),
    ee = n(488459),
    et = n(334347),
    en = n(132015),
    er = n(142416),
    ei = n(607762),
    es = n(474106),
    ea = n(572501),
    el = n(755590),
    eo = n(909910),
    ec = n(637810),
    ed = n(570423),
    eu = n(912429),
    em = n(91394),
    eg = n(209672),
    ep = n(698173),
    eh = n(926262),
    ef = n(482668),
    eb = n(21504),
    ex = n(371435),
    eN = n(83663),
    e_ = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.TENURE_BADGE = 'tenureBadge'), (r.PERMADECOS = 'permadecos'), r);
let eE = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        r = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        e_ = (0, j.BU)(W.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: eE, isEligibleForReward: ej } = (0, s.cj)([E.ZP], () => ({
            premiumSubscription: E.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: E.ZP.getIsSubscriptionEligibleForReward()
        })),
        eC = null != eE ? O.ZP.getPremiumPlanItem(eE) : null,
        eO = (null != eC ? O.ZP.getSkuIdForPlan(eC.planId) : null) === W.Si.TIER_2,
        ev = _.default.getCurrentUser(),
        eS = (0, O.I5)(ev, W.p9.TIER_2),
        eT = (0, O.I5)(ev, W.p9.TIER_0),
        eI = (0, T.bq)({ showAnimations: !0 }),
        ey = null != eI ? eI.initialPercentage : void 0,
        eA = null != eI ? eI.percentage : void 0,
        eP = (0, g.Z)(N.Z),
        eR = (0, I.a)(),
        eD = (0, T.Kb)(L.qY),
        { fractionalState: eZ } = (0, m.Z)(),
        ew = eZ === W.a$.FP_ONLY,
        { enabled: ek } = v.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        eW = (0, h.Z)({
            scrollPosition: M.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eL = () => {
            l.Z.open(B.oAB.VOICE, M.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eB = () => {
            (0, b.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eM = () => {
            l.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: M.h1.CUSTOM_APP_ICONS });
        },
        eU = {
            clientThemes: {
                name: 'clientThemes',
                title: V.NW.string(V.t.kWM48P),
                subtitle: V.NW.string(V.t.CjRASE),
                description: V.NW.string(V.t.jBTTws),
                descriptionCta: V.NW.string(V.t.jVcuVV),
                onCtaClick: () => {
                    l.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: K
            },
            clips: eS
                ? {
                      name: 'clips',
                      title: V.NW.string(V.t.z2jK6e),
                      subtitle: V.NW.string(V.t['hxy0/f']),
                      description: V.NW.string(V.t.Z6v86e),
                      descriptionCta: eP ? V.NW.string(V.t.jVcuVV) : V.NW.string(V.t.hvVgAQ),
                      pillText: V.NW.string(V.t.EYxi0t),
                      onCtaClick: eP
                          ? () => {
                                (0, x.Z)(U.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(B.BhN.CLIPS), '_blank');
                            },
                      perkImage: J
                  }
                : {
                      name: 'clips',
                      title: V.NW.string(V.t.z2jK6e),
                      subtitle: V.NW.string(V.t['hxy0/f']),
                      description: V.NW.string(V.t.X9IeNz),
                      pillText: V.NW.string(V.t.EYxi0t),
                      perkImage: J
                  },
            earlyAccess: eS
                ? {
                      name: 'earlyAccess',
                      title: V.NW.string(V.t.UkLVeH),
                      subtitle: V.NW.string(V.t.xf9ePj),
                      description: V.NW.string(V.t['+r4vdn']),
                      perkImage: $
                  }
                : {
                      name: 'earlyAccess',
                      title: V.NW.string(V.t.UkLVeH),
                      subtitle: V.NW.string(V.t.xf9ePj),
                      description: V.NW.string(V.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: $
                  },
            earlyAccessSeeAllVariant: eS
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: V.NW.string(V.t.UkLVeH),
                      subtitle: V.NW.string(V.t.xf9ePj),
                      description: V.NW.string(V.t['+r4vdn']),
                      perkImage: ee
                  }
                : {
                      name: 'earlyAccess',
                      title: V.NW.string(V.t.UkLVeH),
                      subtitle: V.NW.string(V.t.xf9ePj),
                      description: V.NW.string(V.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ee
                  },
            entranceSounds: eS
                ? {
                      name: 'entranceSounds',
                      title: V.NW.string(V.t['f4M+Hx']),
                      subtitle: V.NW.string(V.t['7ZCYvL']),
                      description: V.NW.string(V.t.mUT8bG),
                      descriptionCta: V.NW.string(V.t.jVcuVV),
                      onCtaClick: eL,
                      perkImage: en
                  }
                : {
                      name: 'entranceSounds',
                      title: V.NW.string(V.t['f4M+Hx']),
                      subtitle: V.NW.string(V.t['7ZCYvL']),
                      description: V.NW.string(V.t['3smf/f']),
                      perkImage: en
                  },
            entranceSoundsSeeAllVariation: eS
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: V.NW.string(V.t['f4M+Hx']),
                      subtitle: V.NW.string(V.t['7ZCYvL']),
                      description: V.NW.string(V.t.mUT8bG),
                      descriptionCta: V.NW.string(V.t.jVcuVV),
                      onCtaClick: eL,
                      perkImage: er
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: V.NW.string(V.t['f4M+Hx']),
                      subtitle: V.NW.string(V.t['7ZCYvL']),
                      description: V.NW.string(V.t['3smf/f']),
                      perkImage: er
                  },
            profiles: {
                name: 'profiles',
                title: V.NW.string(V.t.KcyDwM),
                subtitle: V.NW.string(V.t.Mt3U1d),
                description: V.NW.string(V.t.kWcDKy),
                descriptionCta: V.NW.string(V.t.jVcuVV),
                onCtaClick: eW,
                perkImage: q
            },
            remixing: eS
                ? {
                      name: 'remixing',
                      title: V.NW.string(V.t['H+v6eX']),
                      subtitle: V.NW.string(V.t.wmbOAg),
                      description: V.NW.string(V.t.gdA9FB),
                      perkImage: el,
                      pillText: V.NW.string(V.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: V.NW.string(V.t['H+v6eX']),
                      subtitle: V.NW.string(V.t.wmbOAg),
                      description: V.NW.string(V.t.fiLtJi),
                      perkImage: el,
                      pillText: V.NW.string(V.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: V.NW.string(V.t['NyDu//']),
                subtitle: V.NW.string(V.t['4pEwXF']),
                description: ew ? V.NW.format(V.t.uPiIBQ, { link: 'https://discord.com' }) : V.NW.string(V.t.jsyNHh),
                descriptionCta: V.NW.string(V.t.jVcuVV),
                onCtaClick: ew
                    ? void 0
                    : () => {
                          l.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: X,
                hideOnNarrowScreen: !ew,
                imageOverlayText: ew ? V.NW.string(V.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: V.NW.string(V.t['NyDu//']),
                subtitle: V.NW.string(V.t['4pEwXF']),
                descriptionCta: V.NW.string(V.t.jVcuVV),
                perkImage: ex.Z,
                imageOverlayText: V.NW.string(V.t.lcYttb)
            },
            specialMemberPricing: eS
                ? {
                      name: 'specialMemberPricing',
                      title: V.NW.string(V.t['0Mykgo']),
                      subtitle: V.NW.string(V.t.opgqDQ),
                      description: V.NW.string(V.t['t+QZSU']),
                      descriptionCta: V.NW.string(V.t.dBJVnZ),
                      onCtaClick: eB,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricing',
                      title: V.NW.string(V.t['0Mykgo']),
                      subtitle: V.NW.string(V.t.opgqDQ),
                      description: V.NW.string(V.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialMemberPricingSeeAllVariant: eS
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: V.NW.string(V.t['0Mykgo']),
                      subtitle: V.NW.string(V.t.opgqDQ),
                      description: V.NW.string(V.t['t+QZSU']),
                      descriptionCta: V.NW.string(V.t.dBJVnZ),
                      onCtaClick: eB,
                      perkImage: ed
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: V.NW.string(V.t['0Mykgo']),
                      subtitle: V.NW.string(V.t.opgqDQ),
                      description: V.NW.string(V.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ed
                  },
            specialShopPerks: eS
                ? {
                      name: 'specialShopPerks',
                      title: V.NW.string(V.t.U68LpK),
                      subtitle: V.NW.string(V.t.chRZiY),
                      description: V.NW.string(V.t['t+QZSU']),
                      descriptionCta: V.NW.string(V.t.dBJVnZ),
                      onCtaClick: eB,
                      perkImage: ec
                  }
                : {
                      name: 'specialShopPerks',
                      title: V.NW.string(V.t.U68LpK),
                      subtitle: V.NW.string(V.t.chRZiY),
                      description: V.NW.string(V.t['JE/EWV']),
                      descriptionCta: V.NW.string(V.t.dBJVnZ),
                      onCtaClick: eB,
                      perkImage: ec
                  },
            unlimitedSuperReactions: eS
                ? {
                      name: 'unlimitedSuperReactions',
                      title: V.NW.string(V.t.hpgmOz),
                      subtitle: V.NW.string(V.t.Hxujsr),
                      description: V.NW.string(V.t['Cn/z6+']),
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: V.NW.string(V.t.hpgmOz),
                      subtitle: V.NW.string(V.t.Hxujsr),
                      description: V.NW.string(V.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: V.NW.string(V.t['6S7kOz']),
                subtitle: V.NW.string(V.t.kN1JRE),
                description: V.NW.string(V.t.e7FKCg),
                perkImage: eg
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: V.NW.string(V.t.O5R3ho),
                pillText: V.NW.string(V.t.yhEY5O),
                backgroundImage: es
            },
            badge: {
                name: 'badge',
                title: V.NW.string(V.t.dcFfSE),
                subtitle: V.NW.string(V.t['37MFFh']),
                perkImage: F,
                description: V.NW.string(V.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: V.NW.string(V.t.dcFfSE),
                subtitle: V.NW.string(V.t['37MFFh']),
                perkImage: eN.Z,
                description: V.NW.string(V.t.T1IS4u),
                imageOverlayText: V.NW.string(V.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: V.NW.string(V.t.OuItFh),
                subtitle: V.NW.string(V.t.mPyrEx),
                perkImage: Q,
                description: V.NW.string(V.t.e7FKCg),
                descriptionCta: V.NW.string(V.t.jVcuVV),
                onCtaClick: eM
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: V.NW.string(V.t['R2IV/f']),
                subtitle: V.NW.string(V.t.R5Xag4),
                perkImage: et,
                description: V.NW.string(V.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: V.NW.string(V.t.LWsAra),
                subtitle: V.NW.string(V.t.bTzbVl),
                perkImage: (0, k.gx)(t, H, z),
                description: V.NW.string(V.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: V.NW.string(V.t.tzdIwM),
                subtitle: V.NW.string(V.t.FXlU29),
                perkImage: (0, k.gx)(t, Y, eu),
                description: V.NW.string(V.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: V.NW.formatToPlainString(V.t.jqhAdH, { premiumMaxSize: e_ }),
                subtitle: V.NW.formatToPlainString(V.t['HI+cfn'], { premiumMaxSize: e_ }),
                perkImage: eh,
                description: V.NW.string(V.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: V.NW.string(V.t.RSXQYG),
                subtitle: V.NW.string(V.t.ymCPxs),
                perkImage: em,
                description: V.NW.string(V.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: V.NW.string(V.t.XQCSrq),
                subtitle: V.NW.string(V.t.HC5wVV),
                description: V.NW.string(V.t.ee7wQ0),
                descriptionCta: eS || eT ? V.NW.string(V.t.y9TxXV) : V.NW.string(V.t.d8o6lZ),
                isPremiumGetCta: !(eS || eT),
                onCtaClick: eS || eT ? eM : void 0,
                perkImage: ei
            },
            referralProgram: {
                name: 'referralProgram',
                title: V.NW.string(V.t.tPY4o6),
                subtitle: V.NW.string(V.t.JY0grK),
                description: V.NW.format(V.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: V.NW.string(V.t.JST6jo),
                isPremiumGetCta: !eO || void 0,
                perkImage: ea
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: V.NW.string(V.t.I9TYMj),
                subtitle: V.NW.string(V.t.HMSHeH),
                descriptionCta: eS ? V.NW.string(V.t.jVcuVV) : V.NW.string(V.t.JST6jo),
                isPremiumGetCta: !eS,
                onCtaClick: eS ? eW : void 0,
                perkImage: eo
            },
            permadecos: {
                name: 'permadecos',
                title: V.NW.string(V.t['57ngoq']),
                subtitle: V.NW.string(V.t.piFFjY),
                description: V.NW.format(V.t.Pd7olp, { learnMoreLink: C.Z.getArticleURL(B.BhN.PERMADECOS) }),
                descriptionCta: eS ? V.NW.string(V.t.jVcuVV) : V.NW.string(V.t.JST6jo),
                isPremiumGetCta: !eS,
                onCtaClick: eS ? f.navigateToQuestHome : void 0,
                perkImage: $
            }
        };
    if (null != eR) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eR,
            o = (0, i.jsx)('div', {
                className: G.cardComponent,
                children: (0, i.jsx)(D.ZP, {
                    progressCircleVariation: D.Qo.AVATAR_DECO,
                    avatarDecoAssetId: L.VA,
                    avatarDecoAssetDescription: V.NW.string(V.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eA,
                    initialPercentage: ey
                })
            });
        eU.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != eD &&
                    (0, p.Z)({
                        product: eD,
                        overrideTitle: V.NW.string(V.t.wRAXra),
                        overrideDescription: V.NW.string(V.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: w.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let eV = (0, A.Rw)(),
        { enabled: eG, isBadgeVersion2: eF } = (0, y.D)();
    return (
        ((!eF && eG && null != eV && eV.status !== A.Vq.UPCOMING) || (eF && eG)) &&
            eS &&
            !ew &&
            (eU.tenureBadge = {
                name: 'tenureBadge',
                title: V.NW.string(V.t.rnsqpa),
                pillText: V.NW.string(V.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(P.Z, {}),
                cardVariant: w.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, R.k)({ analyticsLocations: e })
            }),
        ej &&
            ek &&
            (eU.collectibleDeco = {
                name: 'collectibleDeco',
                title: V.NW.string(V.t.fzn5eH),
                subtitle: V.NW.format(V.t['8Ud+Qk'], {
                    date: new Date(S._H),
                    termsLink: S.Ps
                }),
                perkComponent: (0, i.jsx)(Z.Z, {
                    image: r ? eb.Z : ef.Z,
                    cta: V.NW.string(V.t.s0w7a2),
                    onClick: () => {
                        (0, a.ZDy)(async () => {
                            let { default: e } = await n.e('74824').then(n.bind(n, 817357));
                            return (t) =>
                                (0, i.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)
                                );
                        });
                    }
                }),
                pillText: V.NW.string(V.t.OS9KPj).toLocaleUpperCase()
            }),
        eU
    );
};
