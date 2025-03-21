n.d(t, {
    Z: () => eO,
    u: () => eC
}),
    n(266796);
var r,
    i = n(200651);
n(192379);
var s = n(399606),
    a = n(704215),
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(779618),
    h = n(832149),
    f = n(605236),
    x = n(300284),
    N = n(703656),
    b = n(547972),
    _ = n(131951),
    E = n(594174),
    j = n(78839),
    C = n(424218),
    O = n(63063),
    v = n(74538),
    S = n(715037),
    T = n(780525),
    I = n(314684),
    y = n(687362),
    A = n(943180),
    P = n(848572),
    R = n(229555),
    D = n(768865),
    Z = n(119269),
    w = n(740479),
    k = n(391110),
    W = n(75077),
    L = n(474936),
    B = n(735825),
    M = n(981631),
    U = n(921944),
    V = n(526761),
    G = n(332325),
    F = n(388032),
    H = n(194511),
    z = n(660372),
    Y = n(926433),
    K = n(302036),
    q = n(994554),
    X = n(704565),
    J = n(393305),
    Q = n(338879),
    $ = n(766491),
    ee = n(193943),
    et = n(707046),
    en = n(488459),
    er = n(334347),
    ei = n(132015),
    es = n(142416),
    ea = n(607762),
    el = n(474106),
    eo = n(572501),
    ec = n(755590),
    ed = n(909910),
    eu = n(637810),
    em = n(570423),
    eg = n(912429),
    ep = n(91394),
    eh = n(209672),
    ef = n(698173),
    ex = n(926262),
    eN = n(482668),
    eb = n(21504),
    e_ = n(371435),
    eE = n(83663),
    ej = n(230540),
    eC = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.TENURE_BADGE = 'tenureBadge'), (r.PERMADECOS = 'permadecos'), r);
let eO = () => {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        r = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        eC = (0, C.BU)(L.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: eO, isEligibleForReward: ev } = (0, s.cj)([j.ZP], () => ({
            premiumSubscription: j.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: j.ZP.getIsSubscriptionEligibleForReward()
        })),
        eS = null != eO ? v.ZP.getPremiumPlanItem(eO) : null,
        eT = (null != eS ? v.ZP.getSkuIdForPlan(eS.planId) : null) === L.Si.TIER_2,
        eI = E.default.getCurrentUser(),
        ey = (0, v.I5)(eI, L.p9.TIER_2),
        eA = (0, v.I5)(eI, L.p9.TIER_0),
        eP = (0, I.bq)({ showAnimations: !0 }),
        eR = null != eP ? eP.initialPercentage : void 0,
        eD = null != eP ? eP.percentage : void 0,
        eZ = (0, p.Z)(_.Z),
        ew = (0, y.a)(),
        ek = (0, I.Kb)(B.qY),
        { fractionalState: eW } = (0, g.Z)(),
        eL = eW === L.a$.FP_ONLY,
        eB = (0, f.wE)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        { enabled: eM } = S.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        eU = (0, x.Z)({
            scrollPosition: V.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eV = () => {
            o.Z.open(M.oAB.VOICE, V.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eG = () => {
            (0, N.uL)(M.Z5c.COLLECTIBLES_SHOP);
        },
        eF = () => {
            o.Z.open(M.oAB.APPEARANCE, null, { scrollPosition: V.h1.CUSTOM_APP_ICONS });
        },
        eH = {
            clientThemes: {
                name: 'clientThemes',
                title: F.NW.string(F.t.kWM48P),
                subtitle: F.NW.string(F.t.CjRASE),
                description: F.NW.string(F.t.jBTTws),
                descriptionCta: F.NW.string(F.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(M.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: X
            },
            clips: ey
                ? {
                      name: 'clips',
                      title: F.NW.string(F.t.z2jK6e),
                      subtitle: F.NW.string(F.t['hxy0/f']),
                      description: F.NW.string(F.t.Z6v86e),
                      descriptionCta: eZ ? F.NW.string(F.t.jVcuVV) : F.NW.string(F.t.hvVgAQ),
                      pillText: F.NW.string(F.t.EYxi0t),
                      onCtaClick: eZ
                          ? () => {
                                (0, b.Z)(G.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(O.Z.getArticleURL(M.BhN.CLIPS), '_blank');
                            },
                      perkImage: $
                  }
                : {
                      name: 'clips',
                      title: F.NW.string(F.t.z2jK6e),
                      subtitle: F.NW.string(F.t['hxy0/f']),
                      description: F.NW.string(F.t.X9IeNz),
                      pillText: F.NW.string(F.t.EYxi0t),
                      perkImage: $
                  },
            earlyAccess: ey
                ? {
                      name: 'earlyAccess',
                      title: F.NW.string(F.t.UkLVeH),
                      subtitle: F.NW.string(F.t.xf9ePj),
                      description: F.NW.string(F.t['+r4vdn']),
                      perkImage: et
                  }
                : {
                      name: 'earlyAccess',
                      title: F.NW.string(F.t.UkLVeH),
                      subtitle: F.NW.string(F.t.xf9ePj),
                      description: F.NW.string(F.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: et
                  },
            earlyAccessSeeAllVariant: ey
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: F.NW.string(F.t.UkLVeH),
                      subtitle: F.NW.string(F.t.xf9ePj),
                      description: F.NW.string(F.t['+r4vdn']),
                      perkImage: en
                  }
                : {
                      name: 'earlyAccess',
                      title: F.NW.string(F.t.UkLVeH),
                      subtitle: F.NW.string(F.t.xf9ePj),
                      description: F.NW.string(F.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: en
                  },
            entranceSounds: ey
                ? {
                      name: 'entranceSounds',
                      title: F.NW.string(F.t['f4M+Hx']),
                      subtitle: F.NW.string(F.t['7ZCYvL']),
                      description: F.NW.string(F.t.mUT8bG),
                      descriptionCta: F.NW.string(F.t.jVcuVV),
                      onCtaClick: eV,
                      perkImage: ei
                  }
                : {
                      name: 'entranceSounds',
                      title: F.NW.string(F.t['f4M+Hx']),
                      subtitle: F.NW.string(F.t['7ZCYvL']),
                      description: F.NW.string(F.t['3smf/f']),
                      perkImage: ei
                  },
            entranceSoundsSeeAllVariation: ey
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: F.NW.string(F.t['f4M+Hx']),
                      subtitle: F.NW.string(F.t['7ZCYvL']),
                      description: F.NW.string(F.t.mUT8bG),
                      descriptionCta: F.NW.string(F.t.jVcuVV),
                      onCtaClick: eV,
                      perkImage: es
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: F.NW.string(F.t['f4M+Hx']),
                      subtitle: F.NW.string(F.t['7ZCYvL']),
                      description: F.NW.string(F.t['3smf/f']),
                      perkImage: es
                  },
            profiles: {
                name: 'profiles',
                title: F.NW.string(F.t.KcyDwM),
                subtitle: F.NW.string(F.t.Mt3U1d),
                description: F.NW.string(F.t.kWcDKy),
                descriptionCta: F.NW.string(F.t.jVcuVV),
                onCtaClick: eU,
                perkImage: J
            },
            remixing: ey
                ? {
                      name: 'remixing',
                      title: F.NW.string(F.t['H+v6eX']),
                      subtitle: F.NW.string(F.t.wmbOAg),
                      description: F.NW.string(F.t.gdA9FB),
                      perkImage: ec,
                      pillText: F.NW.string(F.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: F.NW.string(F.t['H+v6eX']),
                      subtitle: F.NW.string(F.t.wmbOAg),
                      description: F.NW.string(F.t.fiLtJi),
                      perkImage: ec,
                      pillText: F.NW.string(F.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: F.NW.string(F.t['NyDu//']),
                subtitle: F.NW.string(F.t['4pEwXF']),
                description: eL ? F.NW.format(F.t.uPiIBQ, { link: 'https://discord.com' }) : F.NW.string(F.t.jsyNHh),
                descriptionCta: F.NW.string(F.t.jVcuVV),
                onCtaClick: eL
                    ? void 0
                    : () => {
                          o.Z.open(M.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: Q,
                hideOnNarrowScreen: !eL,
                imageOverlayText: eL ? F.NW.string(F.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: F.NW.string(F.t['NyDu//']),
                subtitle: F.NW.string(F.t['4pEwXF']),
                descriptionCta: F.NW.string(F.t.jVcuVV),
                perkImage: e_.Z,
                imageOverlayText: F.NW.string(F.t.lcYttb)
            },
            specialMemberPricing: ey
                ? {
                      name: 'specialMemberPricing',
                      title: F.NW.string(F.t['0Mykgo']),
                      subtitle: F.NW.string(F.t.opgqDQ),
                      description: F.NW.string(F.t['t+QZSU']),
                      descriptionCta: F.NW.string(F.t.dBJVnZ),
                      onCtaClick: eG,
                      perkImage: eu
                  }
                : {
                      name: 'specialMemberPricing',
                      title: F.NW.string(F.t['0Mykgo']),
                      subtitle: F.NW.string(F.t.opgqDQ),
                      description: F.NW.string(F.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eu
                  },
            specialMemberPricingSeeAllVariant: ey
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: F.NW.string(F.t['0Mykgo']),
                      subtitle: F.NW.string(F.t.opgqDQ),
                      description: F.NW.string(F.t['t+QZSU']),
                      descriptionCta: F.NW.string(F.t.dBJVnZ),
                      onCtaClick: eG,
                      perkImage: em
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: F.NW.string(F.t['0Mykgo']),
                      subtitle: F.NW.string(F.t.opgqDQ),
                      description: F.NW.string(F.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: em
                  },
            specialShopPerks: ey
                ? {
                      name: 'specialShopPerks',
                      title: F.NW.string(F.t.U68LpK),
                      subtitle: F.NW.string(F.t.chRZiY),
                      description: F.NW.string(F.t['t+QZSU']),
                      descriptionCta: F.NW.string(F.t.dBJVnZ),
                      onCtaClick: eG,
                      perkImage: eu
                  }
                : {
                      name: 'specialShopPerks',
                      title: F.NW.string(F.t.U68LpK),
                      subtitle: F.NW.string(F.t.chRZiY),
                      description: F.NW.string(F.t['JE/EWV']),
                      descriptionCta: F.NW.string(F.t.dBJVnZ),
                      onCtaClick: eG,
                      perkImage: eu
                  },
            unlimitedSuperReactions: ey
                ? {
                      name: 'unlimitedSuperReactions',
                      title: F.NW.string(F.t.hpgmOz),
                      subtitle: F.NW.string(F.t.Hxujsr),
                      description: F.NW.string(F.t['Cn/z6+']),
                      perkImage: ef,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: F.NW.string(F.t.hpgmOz),
                      subtitle: F.NW.string(F.t.Hxujsr),
                      description: F.NW.string(F.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ef,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: F.NW.string(F.t['6S7kOz']),
                subtitle: F.NW.string(F.t.kN1JRE),
                description: F.NW.string(F.t.e7FKCg),
                perkImage: eh
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: F.NW.string(F.t.O5R3ho),
                pillText: F.NW.string(F.t.yhEY5O),
                backgroundImage: el
            },
            badge: {
                name: 'badge',
                title: F.NW.string(F.t.dcFfSE),
                subtitle: F.NW.string(F.t['37MFFh']),
                perkImage: z,
                description: F.NW.string(F.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: F.NW.string(F.t.dcFfSE),
                subtitle: F.NW.string(F.t['37MFFh']),
                perkImage: eE.Z,
                description: F.NW.string(F.t.T1IS4u),
                imageOverlayText: F.NW.string(F.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: F.NW.string(F.t.OuItFh),
                subtitle: F.NW.string(F.t.mPyrEx),
                perkImage: ee,
                description: F.NW.string(F.t.e7FKCg),
                descriptionCta: F.NW.string(F.t.jVcuVV),
                onCtaClick: eF
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: F.NW.string(F.t['R2IV/f']),
                subtitle: F.NW.string(F.t.R5Xag4),
                perkImage: er,
                description: F.NW.string(F.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: F.NW.string(F.t.LWsAra),
                subtitle: F.NW.string(F.t.bTzbVl),
                perkImage: (0, W.gx)(t, Y, K),
                description: F.NW.string(F.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: F.NW.string(F.t.tzdIwM),
                subtitle: F.NW.string(F.t.FXlU29),
                perkImage: (0, W.gx)(t, q, eg),
                description: F.NW.string(F.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: F.NW.formatToPlainString(F.t.jqhAdH, { premiumMaxSize: eC }),
                subtitle: F.NW.formatToPlainString(F.t['HI+cfn'], { premiumMaxSize: eC }),
                perkImage: ex,
                description: F.NW.string(F.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: F.NW.string(F.t.RSXQYG),
                subtitle: F.NW.string(F.t.ymCPxs),
                perkImage: ep,
                description: F.NW.string(F.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: F.NW.string(F.t.XQCSrq),
                subtitle: F.NW.string(F.t.HC5wVV),
                description: F.NW.string(F.t.ee7wQ0),
                descriptionCta: ey || eA ? F.NW.string(F.t.y9TxXV) : F.NW.string(F.t.d8o6lZ),
                isPremiumGetCta: !(ey || eA),
                onCtaClick: ey || eA ? eF : void 0,
                perkImage: ea
            },
            referralProgram: {
                name: 'referralProgram',
                title: F.NW.string(F.t.tPY4o6),
                subtitle: F.NW.string(F.t.JY0grK),
                description: F.NW.format(F.t['2JqTFx'], { helpdeskArticle: O.Z.getArticleURL(M.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: F.NW.string(F.t.JST6jo),
                isPremiumGetCta: !eT || void 0,
                perkImage: eo
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: F.NW.string(F.t.I9TYMj),
                subtitle: F.NW.string(F.t.HMSHeH),
                descriptionCta: ey ? F.NW.string(F.t.jVcuVV) : F.NW.string(F.t.JST6jo),
                isPremiumGetCta: !ey,
                onCtaClick: ey ? eU : void 0,
                perkImage: ed
            },
            permadecos: {
                name: 'permadecos',
                title: F.NW.string(F.t['57ngoq']),
                subtitle: F.NW.string(F.t.piFFjY),
                description: F.NW.format(F.t.Pd7olp, { learnMoreLink: O.Z.getArticleURL(M.BhN.PERMADECOS) }),
                descriptionCta: ey ? F.NW.string(F.t.jVcuVV) : F.NW.string(F.t.JST6jo),
                isPremiumGetCta: !ey,
                onCtaClick: ey
                    ? () => {
                          eB || (0, f.EW)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: U.L.TAKE_ACTION }), eU();
                      }
                    : void 0,
                pillText: eB || !ey ? void 0 : F.NW.string(F.t.y2b7CA).toLocaleUpperCase(),
                perkImage: ej.Z
            }
        };
    if (null != ew) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = ew,
            o = (0, i.jsx)('div', {
                className: H.cardComponent,
                children: (0, i.jsx)(Z.ZP, {
                    progressCircleVariation: Z.Qo.AVATAR_DECO,
                    avatarDecoAssetId: B.VA,
                    avatarDecoAssetDescription: F.NW.string(F.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eD,
                    initialPercentage: eR
                })
            });
        eH.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != ek &&
                    (0, h.Z)({
                        product: ek,
                        overrideTitle: F.NW.string(F.t.wRAXra),
                        overrideDescription: F.NW.string(F.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: k.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let ez = (0, P.Rw)(),
        { enabled: eY, isBadgeVersion2: eK } = (0, A.D)();
    return (
        ((!eK && eY && null != ez && ez.status !== P.Vq.UPCOMING) || (eK && eY)) &&
            ey &&
            !eL &&
            (eH.tenureBadge = {
                name: 'tenureBadge',
                title: F.NW.string(F.t.rnsqpa),
                pillText: F.NW.string(F.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(R.Z, {}),
                cardVariant: k.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, D.k)({ analyticsLocations: e })
            }),
        ev &&
            eM &&
            (eH.collectibleDeco = {
                name: 'collectibleDeco',
                title: F.NW.string(F.t.fzn5eH),
                subtitle: F.NW.format(F.t['8Ud+Qk'], {
                    date: new Date(T._H),
                    termsLink: T.Ps
                }),
                perkComponent: (0, i.jsx)(w.Z, {
                    image: r ? eb.Z : eN.Z,
                    cta: F.NW.string(F.t.s0w7a2),
                    onClick: () => {
                        (0, l.ZDy)(async () => {
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
                pillText: F.NW.string(F.t.OS9KPj).toLocaleUpperCase()
            }),
        eH
    );
};
