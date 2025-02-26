n.d(t, {
    Z: () => eS,
    u: () => ev
}),
    n(47120),
    n(266796);
var r,
    i = n(200651),
    s = n(192379),
    a = n(399606),
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(607070),
    u = n(100527),
    m = n(906732),
    g = n(975298),
    p = n(779618),
    h = n(832149),
    f = n(300284),
    b = n(703656),
    N = n(547972),
    x = n(131951),
    _ = n(594174),
    E = n(78839),
    j = n(424218),
    C = n(63063),
    O = n(74538),
    v = n(960048),
    S = n(695349),
    T = n(860489),
    I = n(715037),
    y = n(29920),
    A = n(780525),
    P = n(314684),
    R = n(687362),
    D = n(943180),
    Z = n(848572),
    w = n(229555),
    k = n(768865),
    W = n(119269),
    L = n(740479),
    B = n(391110),
    M = n(75077),
    U = n(474936),
    V = n(735825),
    G = n(981631),
    F = n(526761),
    H = n(332325),
    z = n(388032),
    Y = n(596470),
    K = n(660372),
    q = n(926433),
    X = n(302036),
    J = n(994554),
    Q = n(704565),
    $ = n(393305),
    ee = n(338879),
    et = n(609926),
    en = n(766491),
    er = n(193943),
    ei = n(707046),
    es = n(488459),
    ea = n(334347),
    el = n(132015),
    eo = n(142416),
    ec = n(607762),
    ed = n(474106),
    eu = n(572501),
    em = n(755590),
    eg = n(909910),
    ep = n(637810),
    eh = n(570423),
    ef = n(912429),
    eb = n(91394),
    eN = n(209672),
    ex = n(698173),
    e_ = n(926262),
    eE = n(482668),
    ej = n(21504),
    eC = n(371435),
    eO = n(83663),
    ev = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHY_PROJECT = 'shyProject'), (r.TENURE_BADGE = 'tenureBadge'), r);
let eS = () => {
    let { analyticsLocations: e } = (0, m.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        r = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        ev = (0, j.BU)(U.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: eS, isEligibleForReward: eT } = (0, a.cj)([E.ZP], () => ({
            premiumSubscription: E.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: E.ZP.getIsSubscriptionEligibleForReward()
        })),
        eI = null != eS ? O.ZP.getPremiumPlanItem(eS) : null,
        ey = (null != eI ? O.ZP.getSkuIdForPlan(eI.planId) : null) === U.Si.TIER_2,
        eA = _.default.getCurrentUser(),
        eP = (0, O.I5)(eA, U.p9.TIER_2),
        eR = (0, O.I5)(eA, U.p9.TIER_0),
        eD = (0, P.bq)({ showAnimations: !0 }),
        eZ = null != eD ? eD.initialPercentage : void 0,
        ew = null != eD ? eD.percentage : void 0,
        ek = (0, p.Z)(x.Z),
        eW = (0, R.a)(),
        eL = (0, P.Kb)(V.qY),
        { fractionalState: eB } = (0, g.Z)(),
        eM = (0, S.W)(),
        eU = eB === U.a$.FP_ONLY,
        { enabled: eV } = I.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        [eG, eF] = s.useState(!1);
    s.useEffect(() => {
        let e = async () => {
            if ((null == eS ? void 0 : eS.id) != null) {
                eF(!0);
                try {
                    await (0, y.b2)(eS.id), eF(!1);
                } catch (e) {
                    v.Z.captureException(e);
                }
            }
        };
        eV && null === eT && !eG && e();
    }, [eV, null == eS ? void 0 : eS.id, eT, eG]);
    let eH = (0, f.Z)({
            scrollPosition: F.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        ez = () => {
            o.Z.open(G.oAB.VOICE, F.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eY = () => {
            (0, b.uL)(G.Z5c.COLLECTIBLES_SHOP);
        },
        eK = () => {
            o.Z.open(G.oAB.APPEARANCE, null, { scrollPosition: F.h1.CUSTOM_APP_ICONS });
        },
        eq = {
            clientThemes: {
                name: 'clientThemes',
                title: z.NW.string(z.t.kWM48P),
                subtitle: z.NW.string(z.t.CjRASE),
                description: z.NW.string(z.t.jBTTws),
                descriptionCta: z.NW.string(z.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(G.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: Q
            },
            clips: eP
                ? {
                      name: 'clips',
                      title: z.NW.string(z.t.z2jK6e),
                      subtitle: z.NW.string(z.t['hxy0/f']),
                      description: z.NW.string(z.t.Z6v86e),
                      descriptionCta: ek ? z.NW.string(z.t.jVcuVV) : z.NW.string(z.t.hvVgAQ),
                      pillText: z.NW.string(z.t.EYxi0t),
                      onCtaClick: ek
                          ? () => {
                                (0, N.Z)(H.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(G.BhN.CLIPS), '_blank');
                            },
                      perkImage: en
                  }
                : {
                      name: 'clips',
                      title: z.NW.string(z.t.z2jK6e),
                      subtitle: z.NW.string(z.t['hxy0/f']),
                      description: z.NW.string(z.t.X9IeNz),
                      pillText: z.NW.string(z.t.EYxi0t),
                      perkImage: en
                  },
            earlyAccess: eP
                ? {
                      name: 'earlyAccess',
                      title: z.NW.string(z.t.UkLVeH),
                      subtitle: z.NW.string(z.t.xf9ePj),
                      description: z.NW.string(z.t['+r4vdn']),
                      perkImage: ei
                  }
                : {
                      name: 'earlyAccess',
                      title: z.NW.string(z.t.UkLVeH),
                      subtitle: z.NW.string(z.t.xf9ePj),
                      description: z.NW.string(z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ei
                  },
            earlyAccessSeeAllVariant: eP
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: z.NW.string(z.t.UkLVeH),
                      subtitle: z.NW.string(z.t.xf9ePj),
                      description: z.NW.string(z.t['+r4vdn']),
                      perkImage: es
                  }
                : {
                      name: 'earlyAccess',
                      title: z.NW.string(z.t.UkLVeH),
                      subtitle: z.NW.string(z.t.xf9ePj),
                      description: z.NW.string(z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: es
                  },
            entranceSounds: eP
                ? {
                      name: 'entranceSounds',
                      title: z.NW.string(z.t['f4M+Hx']),
                      subtitle: z.NW.string(z.t['7ZCYvL']),
                      description: z.NW.string(z.t.mUT8bG),
                      descriptionCta: z.NW.string(z.t.jVcuVV),
                      onCtaClick: ez,
                      perkImage: el
                  }
                : {
                      name: 'entranceSounds',
                      title: z.NW.string(z.t['f4M+Hx']),
                      subtitle: z.NW.string(z.t['7ZCYvL']),
                      description: z.NW.string(z.t['3smf/f']),
                      perkImage: el
                  },
            entranceSoundsSeeAllVariation: eP
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: z.NW.string(z.t['f4M+Hx']),
                      subtitle: z.NW.string(z.t['7ZCYvL']),
                      description: z.NW.string(z.t.mUT8bG),
                      descriptionCta: z.NW.string(z.t.jVcuVV),
                      onCtaClick: ez,
                      perkImage: eo
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: z.NW.string(z.t['f4M+Hx']),
                      subtitle: z.NW.string(z.t['7ZCYvL']),
                      description: z.NW.string(z.t['3smf/f']),
                      perkImage: eo
                  },
            profiles: {
                name: 'profiles',
                title: z.NW.string(z.t.KcyDwM),
                subtitle: z.NW.string(z.t.Mt3U1d),
                description: z.NW.string(z.t.kWcDKy),
                descriptionCta: z.NW.string(z.t.jVcuVV),
                onCtaClick: eH,
                perkImage: $
            },
            remixing: eP
                ? {
                      name: 'remixing',
                      title: z.NW.string(z.t['H+v6eX']),
                      subtitle: z.NW.string(z.t.wmbOAg),
                      description: z.NW.string(z.t.gdA9FB),
                      perkImage: em,
                      pillText: z.NW.string(z.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: z.NW.string(z.t['H+v6eX']),
                      subtitle: z.NW.string(z.t.wmbOAg),
                      description: z.NW.string(z.t.fiLtJi),
                      perkImage: em,
                      pillText: z.NW.string(z.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: z.NW.string(z.t['NyDu//']),
                subtitle: z.NW.string(z.t['4pEwXF']),
                description: eU ? z.NW.format(z.t.uPiIBQ, { link: 'https://discord.com' }) : z.NW.string(z.t.jsyNHh),
                descriptionCta: z.NW.string(z.t.jVcuVV),
                onCtaClick: eU
                    ? void 0
                    : () => {
                          o.Z.open(G.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: ee,
                hideOnNarrowScreen: !eU,
                imageOverlayText: eU ? z.NW.string(z.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: z.NW.string(z.t['NyDu//']),
                subtitle: z.NW.string(z.t['4pEwXF']),
                descriptionCta: z.NW.string(z.t.jVcuVV),
                perkImage: eC.Z,
                imageOverlayText: z.NW.string(z.t.lcYttb)
            },
            specialMemberPricing: eP
                ? {
                      name: 'specialMemberPricing',
                      title: z.NW.string(z.t['0Mykgo']),
                      subtitle: z.NW.string(z.t.opgqDQ),
                      description: z.NW.string(z.t['t+QZSU']),
                      descriptionCta: z.NW.string(z.t.dBJVnZ),
                      onCtaClick: eY,
                      perkImage: ep
                  }
                : {
                      name: 'specialMemberPricing',
                      title: z.NW.string(z.t['0Mykgo']),
                      subtitle: z.NW.string(z.t.opgqDQ),
                      description: z.NW.string(z.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ep
                  },
            specialMemberPricingSeeAllVariant: eP
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: z.NW.string(z.t['0Mykgo']),
                      subtitle: z.NW.string(z.t.opgqDQ),
                      description: z.NW.string(z.t['t+QZSU']),
                      descriptionCta: z.NW.string(z.t.dBJVnZ),
                      onCtaClick: eY,
                      perkImage: eh
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: z.NW.string(z.t['0Mykgo']),
                      subtitle: z.NW.string(z.t.opgqDQ),
                      description: z.NW.string(z.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eh
                  },
            specialShopPerks: eP
                ? {
                      name: 'specialShopPerks',
                      title: z.NW.string(z.t.U68LpK),
                      subtitle: z.NW.string(z.t.chRZiY),
                      description: z.NW.string(z.t['t+QZSU']),
                      descriptionCta: z.NW.string(z.t.dBJVnZ),
                      onCtaClick: eY,
                      perkImage: ep
                  }
                : {
                      name: 'specialShopPerks',
                      title: z.NW.string(z.t.U68LpK),
                      subtitle: z.NW.string(z.t.chRZiY),
                      description: z.NW.string(z.t['JE/EWV']),
                      descriptionCta: z.NW.string(z.t.dBJVnZ),
                      onCtaClick: eY,
                      perkImage: ep
                  },
            unlimitedSuperReactions: eP
                ? {
                      name: 'unlimitedSuperReactions',
                      title: z.NW.string(z.t.hpgmOz),
                      subtitle: z.NW.string(z.t.Hxujsr),
                      description: z.NW.string(z.t['Cn/z6+']),
                      perkImage: ex,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: z.NW.string(z.t.hpgmOz),
                      subtitle: z.NW.string(z.t.Hxujsr),
                      description: z.NW.string(z.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ex,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: z.NW.string(z.t['6S7kOz']),
                subtitle: z.NW.string(z.t.kN1JRE),
                description: z.NW.string(z.t.e7FKCg),
                perkImage: eN
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: z.NW.string(z.t.O5R3ho),
                pillText: z.NW.string(z.t.yhEY5O),
                backgroundImage: ed
            },
            badge: {
                name: 'badge',
                title: z.NW.string(z.t.dcFfSE),
                subtitle: z.NW.string(z.t['37MFFh']),
                perkImage: K,
                description: z.NW.string(z.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: z.NW.string(z.t.dcFfSE),
                subtitle: z.NW.string(z.t['37MFFh']),
                perkImage: eO.Z,
                description: z.NW.string(z.t.T1IS4u),
                imageOverlayText: z.NW.string(z.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: z.NW.string(z.t.OuItFh),
                subtitle: z.NW.string(z.t.mPyrEx),
                perkImage: er,
                description: z.NW.string(z.t.e7FKCg),
                descriptionCta: z.NW.string(z.t.jVcuVV),
                onCtaClick: eK
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: z.NW.string(z.t['R2IV/f']),
                subtitle: z.NW.string(z.t.R5Xag4),
                perkImage: ea,
                description: z.NW.string(z.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: z.NW.string(z.t.LWsAra),
                subtitle: z.NW.string(z.t.bTzbVl),
                perkImage: (0, M.gx)(t, q, X),
                description: z.NW.string(z.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: z.NW.string(z.t.tzdIwM),
                subtitle: z.NW.string(z.t.FXlU29),
                perkImage: (0, M.gx)(t, J, ef),
                description: z.NW.string(z.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: z.NW.formatToPlainString(z.t.jqhAdH, { premiumMaxSize: ev }),
                subtitle: z.NW.formatToPlainString(z.t['HI+cfn'], { premiumMaxSize: ev }),
                perkImage: e_,
                description: z.NW.string(z.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: z.NW.string(z.t.RSXQYG),
                subtitle: z.NW.string(z.t.ymCPxs),
                perkImage: eb,
                description: z.NW.string(z.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: z.NW.string(z.t.XQCSrq),
                subtitle: z.NW.string(z.t.HC5wVV),
                description: z.NW.string(z.t.ee7wQ0),
                descriptionCta: eP || eR ? z.NW.string(z.t.y9TxXV) : z.NW.string(z.t.d8o6lZ),
                isPremiumGetCta: !(eP || eR),
                onCtaClick: eP || eR ? eK : void 0,
                perkImage: ec
            },
            referralProgram: {
                name: 'referralProgram',
                title: z.NW.string(z.t.tPY4o6),
                subtitle: z.NW.string(z.t.JY0grK),
                description: z.NW.format(z.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(G.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: z.NW.string(z.t.JST6jo),
                isPremiumGetCta: !ey || void 0,
                perkImage: eu
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: z.NW.string(z.t.I9TYMj),
                subtitle: z.NW.string(z.t.HMSHeH),
                descriptionCta: eP ? z.NW.string(z.t.jVcuVV) : z.NW.string(z.t.JST6jo),
                isPremiumGetCta: !eP,
                onCtaClick: eP ? eH : void 0,
                perkImage: eg
            }
        };
    if (null != eW) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eW,
            o = (0, i.jsx)('div', {
                className: Y.cardComponent,
                children: (0, i.jsx)(W.ZP, {
                    progressCircleVariation: W.Qo.AVATAR_DECO,
                    avatarDecoAssetId: V.VA,
                    avatarDecoAssetDescription: z.NW.string(z.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: ew,
                    initialPercentage: eZ
                })
            });
        eq.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != eL &&
                    (0, h.Z)({
                        product: eL,
                        overrideTitle: z.NW.string(z.t.wRAXra),
                        overrideDescription: z.NW.string(z.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: B.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let eX = (0, Z.Rw)(),
        { enabled: eJ, isBadgeVersion2: eQ } = (0, D.D)();
    return (
        ((!eQ && eJ && null != eX && eX.status !== Z.Vq.UPCOMING) || (eQ && eJ)) &&
            eP &&
            !eM &&
            (eq.tenureBadge = {
                name: 'tenureBadge',
                title: z.NW.string(z.t.rnsqpa),
                pillText: z.NW.string(z.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(w.Z, {}),
                cardVariant: B.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, k.k)({ analyticsLocations: e })
            }),
        (0, T.ZP)('usePerksDiscoverabilityCard') === T.P0.SUMMER_2024 &&
            (eq.shyProject = {
                name: 'shyProject',
                title: z.NW.string(z.t['0Mykgo']),
                subtitle: z.NW.string(z.t.opgqDQ),
                description: eP ? z.NW.string(z.t['t+QZSU']) : z.NW.string(z.t['JE/EWV']),
                descriptionCta: z.NW.string(z.t.dBJVnZ),
                pillText: z.NW.string(z.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eP ? eY : void 0,
                perkImage: et,
                isPremiumGetCta: !eP
            }),
        eT &&
            eV &&
            (eq.collectibleDeco = {
                name: 'collectibleDeco',
                title: z.NW.string(z.t.fzn5eH),
                subtitle: z.NW.format(z.t['8Ud+Qk'], {
                    date: new Date(A._H),
                    termsLink: A.Ps
                }),
                perkComponent: (0, i.jsx)(L.Z, {
                    image: r ? ej.Z : eE.Z,
                    cta: z.NW.string(z.t.s0w7a2),
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
                pillText: z.NW.string(z.t.OS9KPj).toLocaleUpperCase()
            }),
        eq
    );
};
