n.d(t, {
    Z: () => eC,
    u: () => ej
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
    P = n(229555),
    R = n(768865),
    D = n(119269),
    Z = n(740479),
    w = n(391110),
    k = n(75077),
    W = n(474936),
    L = n(735825),
    B = n(981631),
    M = n(921944),
    U = n(526761),
    V = n(332325),
    G = n(388032),
    F = n(194511),
    H = n(660372),
    z = n(926433),
    Y = n(302036),
    K = n(994554),
    q = n(704565),
    X = n(393305),
    J = n(338879),
    Q = n(766491),
    $ = n(193943),
    ee = n(707046),
    et = n(488459),
    en = n(334347),
    er = n(132015),
    ei = n(142416),
    es = n(607762),
    ea = n(474106),
    el = n(572501),
    eo = n(755590),
    ec = n(909910),
    ed = n(637810),
    eu = n(570423),
    em = n(912429),
    eg = n(91394),
    ep = n(209672),
    eh = n(698173),
    ef = n(926262),
    ex = n(482668),
    eN = n(21504),
    eb = n(371435),
    e_ = n(83663),
    eE = n(230540),
    ej = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.TENURE_BADGE = 'tenureBadge'), (r.PERMADECOS = 'permadecos'), r);
let eC = () => {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        r = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        ej = (0, C.BU)(W.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: eC, isEligibleForReward: eO } = (0, s.cj)([j.ZP], () => ({
            premiumSubscription: j.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: j.ZP.getIsSubscriptionEligibleForReward()
        })),
        ev = null != eC ? v.ZP.getPremiumPlanItem(eC) : null,
        eS = (null != ev ? v.ZP.getSkuIdForPlan(ev.planId) : null) === W.Si.TIER_2,
        eT = E.default.getCurrentUser(),
        eI = (0, v.I5)(eT, W.p9.TIER_2),
        ey = (0, v.I5)(eT, W.p9.TIER_0),
        eA = (0, I.bq)({ showAnimations: !0 }),
        eP = null != eA ? eA.initialPercentage : void 0,
        eR = null != eA ? eA.percentage : void 0,
        eD = (0, p.Z)(_.Z),
        eZ = (0, y.a)(),
        ew = (0, I.Kb)(L.qY),
        { fractionalState: ek } = (0, g.Z)(),
        eW = ek === W.a$.FP_ONLY,
        eL = (0, f.wE)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        { enabled: eB } = S.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        eM = (0, x.Z)({
            scrollPosition: U.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eU = () => {
            o.Z.open(B.oAB.VOICE, U.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eV = () => {
            (0, N.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eG = () => {
            o.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: U.h1.CUSTOM_APP_ICONS });
        },
        eF = {
            clientThemes: {
                name: 'clientThemes',
                title: G.NW.string(G.t.kWM48P),
                subtitle: G.NW.string(G.t.CjRASE),
                description: G.NW.string(G.t.jBTTws),
                descriptionCta: G.NW.string(G.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: q
            },
            clips: eI
                ? {
                      name: 'clips',
                      title: G.NW.string(G.t.z2jK6e),
                      subtitle: G.NW.string(G.t['hxy0/f']),
                      description: G.NW.string(G.t.Z6v86e),
                      descriptionCta: eD ? G.NW.string(G.t.jVcuVV) : G.NW.string(G.t.hvVgAQ),
                      pillText: G.NW.string(G.t.EYxi0t),
                      onCtaClick: eD
                          ? () => {
                                (0, b.Z)(V.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(O.Z.getArticleURL(B.BhN.CLIPS), '_blank');
                            },
                      perkImage: Q
                  }
                : {
                      name: 'clips',
                      title: G.NW.string(G.t.z2jK6e),
                      subtitle: G.NW.string(G.t['hxy0/f']),
                      description: G.NW.string(G.t.X9IeNz),
                      pillText: G.NW.string(G.t.EYxi0t),
                      perkImage: Q
                  },
            earlyAccess: eI
                ? {
                      name: 'earlyAccess',
                      title: G.NW.string(G.t.UkLVeH),
                      subtitle: G.NW.string(G.t.xf9ePj),
                      description: G.NW.string(G.t['+r4vdn']),
                      perkImage: ee
                  }
                : {
                      name: 'earlyAccess',
                      title: G.NW.string(G.t.UkLVeH),
                      subtitle: G.NW.string(G.t.xf9ePj),
                      description: G.NW.string(G.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ee
                  },
            earlyAccessSeeAllVariant: eI
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: G.NW.string(G.t.UkLVeH),
                      subtitle: G.NW.string(G.t.xf9ePj),
                      description: G.NW.string(G.t['+r4vdn']),
                      perkImage: et
                  }
                : {
                      name: 'earlyAccess',
                      title: G.NW.string(G.t.UkLVeH),
                      subtitle: G.NW.string(G.t.xf9ePj),
                      description: G.NW.string(G.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: et
                  },
            entranceSounds: eI
                ? {
                      name: 'entranceSounds',
                      title: G.NW.string(G.t['f4M+Hx']),
                      subtitle: G.NW.string(G.t['7ZCYvL']),
                      description: G.NW.string(G.t.mUT8bG),
                      descriptionCta: G.NW.string(G.t.jVcuVV),
                      onCtaClick: eU,
                      perkImage: er
                  }
                : {
                      name: 'entranceSounds',
                      title: G.NW.string(G.t['f4M+Hx']),
                      subtitle: G.NW.string(G.t['7ZCYvL']),
                      description: G.NW.string(G.t['3smf/f']),
                      perkImage: er
                  },
            entranceSoundsSeeAllVariation: eI
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: G.NW.string(G.t['f4M+Hx']),
                      subtitle: G.NW.string(G.t['7ZCYvL']),
                      description: G.NW.string(G.t.mUT8bG),
                      descriptionCta: G.NW.string(G.t.jVcuVV),
                      onCtaClick: eU,
                      perkImage: ei
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: G.NW.string(G.t['f4M+Hx']),
                      subtitle: G.NW.string(G.t['7ZCYvL']),
                      description: G.NW.string(G.t['3smf/f']),
                      perkImage: ei
                  },
            profiles: {
                name: 'profiles',
                title: G.NW.string(G.t.KcyDwM),
                subtitle: G.NW.string(G.t.Mt3U1d),
                description: G.NW.string(G.t.kWcDKy),
                descriptionCta: G.NW.string(G.t.jVcuVV),
                onCtaClick: eM,
                perkImage: X
            },
            remixing: eI
                ? {
                      name: 'remixing',
                      title: G.NW.string(G.t['H+v6eX']),
                      subtitle: G.NW.string(G.t.wmbOAg),
                      description: G.NW.string(G.t.gdA9FB),
                      perkImage: eo,
                      pillText: G.NW.string(G.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: G.NW.string(G.t['H+v6eX']),
                      subtitle: G.NW.string(G.t.wmbOAg),
                      description: G.NW.string(G.t.fiLtJi),
                      perkImage: eo,
                      pillText: G.NW.string(G.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: G.NW.string(G.t['NyDu//']),
                subtitle: G.NW.string(G.t['4pEwXF']),
                description: eW ? G.NW.format(G.t.uPiIBQ, { link: 'https://discord.com' }) : G.NW.string(G.t.jsyNHh),
                descriptionCta: G.NW.string(G.t.jVcuVV),
                onCtaClick: eW
                    ? void 0
                    : () => {
                          o.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: J,
                hideOnNarrowScreen: !eW,
                imageOverlayText: eW ? G.NW.string(G.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: G.NW.string(G.t['NyDu//']),
                subtitle: G.NW.string(G.t['4pEwXF']),
                descriptionCta: G.NW.string(G.t.jVcuVV),
                perkImage: eb.Z,
                imageOverlayText: G.NW.string(G.t.lcYttb)
            },
            specialMemberPricing: eI
                ? {
                      name: 'specialMemberPricing',
                      title: G.NW.string(G.t['0Mykgo']),
                      subtitle: G.NW.string(G.t.opgqDQ),
                      description: G.NW.string(G.t['t+QZSU']),
                      descriptionCta: G.NW.string(G.t.dBJVnZ),
                      onCtaClick: eV,
                      perkImage: ed
                  }
                : {
                      name: 'specialMemberPricing',
                      title: G.NW.string(G.t['0Mykgo']),
                      subtitle: G.NW.string(G.t.opgqDQ),
                      description: G.NW.string(G.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ed
                  },
            specialMemberPricingSeeAllVariant: eI
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: G.NW.string(G.t['0Mykgo']),
                      subtitle: G.NW.string(G.t.opgqDQ),
                      description: G.NW.string(G.t['t+QZSU']),
                      descriptionCta: G.NW.string(G.t.dBJVnZ),
                      onCtaClick: eV,
                      perkImage: eu
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: G.NW.string(G.t['0Mykgo']),
                      subtitle: G.NW.string(G.t.opgqDQ),
                      description: G.NW.string(G.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eu
                  },
            specialShopPerks: eI
                ? {
                      name: 'specialShopPerks',
                      title: G.NW.string(G.t.U68LpK),
                      subtitle: G.NW.string(G.t.chRZiY),
                      description: G.NW.string(G.t['t+QZSU']),
                      descriptionCta: G.NW.string(G.t.dBJVnZ),
                      onCtaClick: eV,
                      perkImage: ed
                  }
                : {
                      name: 'specialShopPerks',
                      title: G.NW.string(G.t.U68LpK),
                      subtitle: G.NW.string(G.t.chRZiY),
                      description: G.NW.string(G.t['JE/EWV']),
                      descriptionCta: G.NW.string(G.t.dBJVnZ),
                      onCtaClick: eV,
                      perkImage: ed
                  },
            unlimitedSuperReactions: eI
                ? {
                      name: 'unlimitedSuperReactions',
                      title: G.NW.string(G.t.hpgmOz),
                      subtitle: G.NW.string(G.t.Hxujsr),
                      description: G.NW.string(G.t['Cn/z6+']),
                      perkImage: eh,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: G.NW.string(G.t.hpgmOz),
                      subtitle: G.NW.string(G.t.Hxujsr),
                      description: G.NW.string(G.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eh,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: G.NW.string(G.t['6S7kOz']),
                subtitle: G.NW.string(G.t.kN1JRE),
                description: G.NW.string(G.t.e7FKCg),
                perkImage: ep
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: G.NW.string(G.t.O5R3ho),
                pillText: G.NW.string(G.t.yhEY5O),
                backgroundImage: ea
            },
            badge: {
                name: 'badge',
                title: G.NW.string(G.t.dcFfSE),
                subtitle: G.NW.string(G.t['37MFFh']),
                perkImage: H,
                description: G.NW.string(G.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: G.NW.string(G.t.dcFfSE),
                subtitle: G.NW.string(G.t['37MFFh']),
                perkImage: e_.Z,
                description: G.NW.string(G.t.T1IS4u),
                imageOverlayText: G.NW.string(G.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: G.NW.string(G.t.OuItFh),
                subtitle: G.NW.string(G.t.mPyrEx),
                perkImage: $,
                description: G.NW.string(G.t.e7FKCg),
                descriptionCta: G.NW.string(G.t.jVcuVV),
                onCtaClick: eG
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: G.NW.string(G.t['R2IV/f']),
                subtitle: G.NW.string(G.t.R5Xag4),
                perkImage: en,
                description: G.NW.string(G.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: G.NW.string(G.t.LWsAra),
                subtitle: G.NW.string(G.t.bTzbVl),
                perkImage: (0, k.gx)(t, z, Y),
                description: G.NW.string(G.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: G.NW.string(G.t.tzdIwM),
                subtitle: G.NW.string(G.t.FXlU29),
                perkImage: (0, k.gx)(t, K, em),
                description: G.NW.string(G.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: G.NW.formatToPlainString(G.t.jqhAdH, { premiumMaxSize: ej }),
                subtitle: G.NW.formatToPlainString(G.t['HI+cfn'], { premiumMaxSize: ej }),
                perkImage: ef,
                description: G.NW.string(G.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: G.NW.string(G.t.RSXQYG),
                subtitle: G.NW.string(G.t.ymCPxs),
                perkImage: eg,
                description: G.NW.string(G.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: G.NW.string(G.t.XQCSrq),
                subtitle: G.NW.string(G.t.HC5wVV),
                description: G.NW.string(G.t.ee7wQ0),
                descriptionCta: eI || ey ? G.NW.string(G.t.y9TxXV) : G.NW.string(G.t.d8o6lZ),
                isPremiumGetCta: !(eI || ey),
                onCtaClick: eI || ey ? eG : void 0,
                perkImage: es
            },
            referralProgram: {
                name: 'referralProgram',
                title: G.NW.string(G.t.tPY4o6),
                subtitle: G.NW.string(G.t.JY0grK),
                description: G.NW.format(G.t['2JqTFx'], { helpdeskArticle: O.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: G.NW.string(G.t.JST6jo),
                isPremiumGetCta: !eS || void 0,
                perkImage: el
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: G.NW.string(G.t.I9TYMj),
                subtitle: G.NW.string(G.t.HMSHeH),
                descriptionCta: eI ? G.NW.string(G.t.jVcuVV) : G.NW.string(G.t.JST6jo),
                isPremiumGetCta: !eI,
                onCtaClick: eI ? eM : void 0,
                perkImage: ec
            },
            permadecos: {
                name: 'permadecos',
                title: G.NW.string(G.t['57ngoq']),
                subtitle: G.NW.string(G.t.piFFjY),
                description: G.NW.format(G.t.Pd7olp, { learnMoreLink: O.Z.getArticleURL(B.BhN.PERMADECOS) }),
                descriptionCta: eI ? G.NW.string(G.t.jVcuVV) : G.NW.string(G.t.JST6jo),
                isPremiumGetCta: !eI,
                onCtaClick: eI
                    ? () => {
                          eL || (0, f.EW)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: M.L.TAKE_ACTION }), eM();
                      }
                    : void 0,
                pillText: eL || !eI ? void 0 : G.NW.string(G.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eE.Z
            }
        };
    if (null != eZ) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eZ,
            o = (0, i.jsx)('div', {
                className: F.cardComponent,
                children: (0, i.jsx)(D.ZP, {
                    progressCircleVariation: D.Qo.AVATAR_DECO,
                    avatarDecoAssetId: L.VA,
                    avatarDecoAssetDescription: G.NW.string(G.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eR,
                    initialPercentage: eP
                })
            });
        eF.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != ew &&
                    (0, h.Z)({
                        product: ew,
                        overrideTitle: G.NW.string(G.t.wRAXra),
                        overrideDescription: G.NW.string(G.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: w.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let { enabled: eH } = (0, A.D)();
    return (
        eH &&
            eI &&
            !eW &&
            (eF.tenureBadge = {
                name: 'tenureBadge',
                title: G.NW.string(G.t.rnsqpa),
                pillText: G.NW.string(G.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(P.Z, {}),
                cardVariant: w.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, R.k)({ analyticsLocations: e })
            }),
        eO &&
            eB &&
            (eF.collectibleDeco = {
                name: 'collectibleDeco',
                title: G.NW.string(G.t.fzn5eH),
                subtitle: G.NW.format(G.t['8Ud+Qk'], {
                    date: new Date(T._H),
                    termsLink: T.Ps
                }),
                perkComponent: (0, i.jsx)(Z.Z, {
                    image: r ? eN.Z : ex.Z,
                    cta: G.NW.string(G.t.s0w7a2),
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
                pillText: G.NW.string(G.t.OS9KPj).toLocaleUpperCase()
            }),
        eF
    );
};
