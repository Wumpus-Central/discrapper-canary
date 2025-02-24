n.d(t, {
    Z: () => eC,
    u: () => ej
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
    d = n(100527),
    u = n(906732),
    m = n(975298),
    g = n(779618),
    p = n(832149),
    h = n(300284),
    f = n(703656),
    b = n(547972),
    N = n(131951),
    x = n(594174),
    _ = n(78839),
    E = n(424218),
    j = n(63063),
    C = n(74538),
    O = n(960048),
    v = n(695349),
    S = n(860489),
    T = n(715037),
    I = n(29920),
    y = n(780525),
    A = n(314684),
    P = n(687362),
    R = n(943180),
    D = n(848572),
    Z = n(229555),
    w = n(768865),
    k = n(119269),
    W = n(740479),
    L = n(391110),
    B = n(75077),
    M = n(474936),
    U = n(735825),
    V = n(981631),
    G = n(526761),
    F = n(332325),
    H = n(388032),
    z = n(596470),
    Y = n(660372),
    K = n(926433),
    q = n(302036),
    X = n(994554),
    J = n(704565),
    Q = n(393305),
    $ = n(338879),
    ee = n(609926),
    et = n(766491),
    en = n(193943),
    er = n(707046),
    ei = n(488459),
    es = n(334347),
    ea = n(132015),
    el = n(142416),
    eo = n(607762),
    ec = n(474106),
    ed = n(572501),
    eu = n(755590),
    em = n(909910),
    eg = n(637810),
    ep = n(570423),
    eh = n(912429),
    ef = n(91394),
    eb = n(209672),
    eN = n(698173),
    ex = n(926262),
    e_ = n(371435),
    eE = n(83663),
    ej = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.FREE_BOOST = 'freeBoost'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHY_PROJECT = 'shyProject'), (r.TENURE_BADGE = 'tenureBadge'), r);
let eC = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        r = (0, E.BU)(M.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: ej, isEligibleForReward: eC } = (0, a.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: _.ZP.getIsSubscriptionEligibleForReward()
        })),
        eO = null != ej ? C.ZP.getPremiumPlanItem(ej) : null,
        ev = (null != eO ? C.ZP.getSkuIdForPlan(eO.planId) : null) === M.Si.TIER_2,
        eS = x.default.getCurrentUser(),
        eT = (0, C.I5)(eS, M.p9.TIER_2),
        eI = (0, C.I5)(eS, M.p9.TIER_0),
        ey = (0, A.bq)({ showAnimations: !0 }),
        eA = null != ey ? ey.initialPercentage : void 0,
        eP = null != ey ? ey.percentage : void 0,
        eR = (0, g.Z)(N.Z),
        eD = (0, P.ZP)(),
        eZ = (0, P.aJ)(),
        ew = (0, A.Kb)(U.qY),
        { fractionalState: ek } = (0, m.Z)(),
        eW = (0, v.W)(),
        eL = ek === M.a$.FP_ONLY,
        { enabled: eB } = T.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        [eM, eU] = s.useState(!1);
    s.useEffect(() => {
        let e = async () => {
            if ((null == ej ? void 0 : ej.id) != null) {
                eU(!0);
                try {
                    await (0, I.b2)(ej.id), eU(!1);
                } catch (e) {
                    O.Z.captureException(e);
                }
            }
        };
        eB && null === eC && !eM && e();
    }, [eB, null == ej ? void 0 : ej.id, eC, eM]);
    let eV = (0, h.Z)({
            scrollPosition: G.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eG = () => {
            o.Z.open(V.oAB.VOICE, G.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eF = () => {
            (0, f.uL)(V.Z5c.COLLECTIBLES_SHOP);
        },
        eH = () => {
            o.Z.open(V.oAB.APPEARANCE, null, { scrollPosition: G.h1.CUSTOM_APP_ICONS });
        },
        ez = {
            clientThemes: {
                name: 'clientThemes',
                title: H.NW.string(H.t.kWM48P),
                subtitle: H.NW.string(H.t.CjRASE),
                description: H.NW.string(H.t.jBTTws),
                descriptionCta: H.NW.string(H.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(V.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: J
            },
            clips: eT
                ? {
                      name: 'clips',
                      title: H.NW.string(H.t.z2jK6e),
                      subtitle: H.NW.string(H.t['hxy0/f']),
                      description: H.NW.string(H.t.Z6v86e),
                      descriptionCta: eR ? H.NW.string(H.t.jVcuVV) : H.NW.string(H.t.hvVgAQ),
                      pillText: H.NW.string(H.t.EYxi0t),
                      onCtaClick: eR
                          ? () => {
                                (0, b.Z)(F.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(j.Z.getArticleURL(V.BhN.CLIPS), '_blank');
                            },
                      perkImage: et
                  }
                : {
                      name: 'clips',
                      title: H.NW.string(H.t.z2jK6e),
                      subtitle: H.NW.string(H.t['hxy0/f']),
                      description: H.NW.string(H.t.X9IeNz),
                      pillText: H.NW.string(H.t.EYxi0t),
                      perkImage: et
                  },
            earlyAccess: eT
                ? {
                      name: 'earlyAccess',
                      title: H.NW.string(H.t.UkLVeH),
                      subtitle: H.NW.string(H.t.xf9ePj),
                      description: H.NW.string(H.t['+r4vdn']),
                      perkImage: er
                  }
                : {
                      name: 'earlyAccess',
                      title: H.NW.string(H.t.UkLVeH),
                      subtitle: H.NW.string(H.t.xf9ePj),
                      description: H.NW.string(H.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: er
                  },
            earlyAccessSeeAllVariant: eT
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: H.NW.string(H.t.UkLVeH),
                      subtitle: H.NW.string(H.t.xf9ePj),
                      description: H.NW.string(H.t['+r4vdn']),
                      perkImage: ei
                  }
                : {
                      name: 'earlyAccess',
                      title: H.NW.string(H.t.UkLVeH),
                      subtitle: H.NW.string(H.t.xf9ePj),
                      description: H.NW.string(H.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: ei
                  },
            entranceSounds: eT
                ? {
                      name: 'entranceSounds',
                      title: H.NW.string(H.t['f4M+Hx']),
                      subtitle: H.NW.string(H.t['7ZCYvL']),
                      description: H.NW.string(H.t.mUT8bG),
                      descriptionCta: H.NW.string(H.t.jVcuVV),
                      onCtaClick: eG,
                      perkImage: ea
                  }
                : {
                      name: 'entranceSounds',
                      title: H.NW.string(H.t['f4M+Hx']),
                      subtitle: H.NW.string(H.t['7ZCYvL']),
                      description: H.NW.string(H.t['3smf/f']),
                      perkImage: ea
                  },
            entranceSoundsSeeAllVariation: eT
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: H.NW.string(H.t['f4M+Hx']),
                      subtitle: H.NW.string(H.t['7ZCYvL']),
                      description: H.NW.string(H.t.mUT8bG),
                      descriptionCta: H.NW.string(H.t.jVcuVV),
                      onCtaClick: eG,
                      perkImage: el
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: H.NW.string(H.t['f4M+Hx']),
                      subtitle: H.NW.string(H.t['7ZCYvL']),
                      description: H.NW.string(H.t['3smf/f']),
                      perkImage: el
                  },
            profiles: {
                name: 'profiles',
                title: H.NW.string(H.t.KcyDwM),
                subtitle: H.NW.string(H.t.Mt3U1d),
                description: H.NW.string(H.t.kWcDKy),
                descriptionCta: H.NW.string(H.t.jVcuVV),
                onCtaClick: eV,
                perkImage: Q
            },
            remixing: eT
                ? {
                      name: 'remixing',
                      title: H.NW.string(H.t['H+v6eX']),
                      subtitle: H.NW.string(H.t.wmbOAg),
                      description: H.NW.string(H.t.gdA9FB),
                      perkImage: eu,
                      pillText: H.NW.string(H.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: H.NW.string(H.t['H+v6eX']),
                      subtitle: H.NW.string(H.t.wmbOAg),
                      description: H.NW.string(H.t.fiLtJi),
                      perkImage: eu,
                      pillText: H.NW.string(H.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: H.NW.string(H.t['NyDu//']),
                subtitle: H.NW.string(H.t['4pEwXF']),
                description: eL ? H.NW.format(H.t.uPiIBQ, { link: 'https://discord.com' }) : H.NW.string(H.t.jsyNHh),
                descriptionCta: H.NW.string(H.t.jVcuVV),
                onCtaClick: eL
                    ? void 0
                    : () => {
                          o.Z.open(V.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: $,
                hideOnNarrowScreen: !eL,
                imageOverlayText: eL ? H.NW.string(H.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: H.NW.string(H.t['NyDu//']),
                subtitle: H.NW.string(H.t['4pEwXF']),
                descriptionCta: H.NW.string(H.t.jVcuVV),
                perkImage: e_.Z,
                imageOverlayText: H.NW.string(H.t.lcYttb)
            },
            specialMemberPricing: eT
                ? {
                      name: 'specialMemberPricing',
                      title: H.NW.string(H.t['0Mykgo']),
                      subtitle: H.NW.string(H.t.opgqDQ),
                      description: H.NW.string(H.t['t+QZSU']),
                      descriptionCta: H.NW.string(H.t.dBJVnZ),
                      onCtaClick: eF,
                      perkImage: eg
                  }
                : {
                      name: 'specialMemberPricing',
                      title: H.NW.string(H.t['0Mykgo']),
                      subtitle: H.NW.string(H.t.opgqDQ),
                      description: H.NW.string(H.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eg
                  },
            specialMemberPricingSeeAllVariant: eT
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: H.NW.string(H.t['0Mykgo']),
                      subtitle: H.NW.string(H.t.opgqDQ),
                      description: H.NW.string(H.t['t+QZSU']),
                      descriptionCta: H.NW.string(H.t.dBJVnZ),
                      onCtaClick: eF,
                      perkImage: ep
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: H.NW.string(H.t['0Mykgo']),
                      subtitle: H.NW.string(H.t.opgqDQ),
                      description: H.NW.string(H.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ep
                  },
            specialShopPerks: eT
                ? {
                      name: 'specialShopPerks',
                      title: H.NW.string(H.t.U68LpK),
                      subtitle: H.NW.string(H.t.chRZiY),
                      description: H.NW.string(H.t['t+QZSU']),
                      descriptionCta: H.NW.string(H.t.dBJVnZ),
                      onCtaClick: eF,
                      perkImage: eg
                  }
                : {
                      name: 'specialShopPerks',
                      title: H.NW.string(H.t.U68LpK),
                      subtitle: H.NW.string(H.t.chRZiY),
                      description: H.NW.string(H.t['JE/EWV']),
                      descriptionCta: H.NW.string(H.t.dBJVnZ),
                      onCtaClick: eF,
                      perkImage: eg
                  },
            unlimitedSuperReactions: eT
                ? {
                      name: 'unlimitedSuperReactions',
                      title: H.NW.string(H.t.hpgmOz),
                      subtitle: H.NW.string(H.t.Hxujsr),
                      description: H.NW.string(H.t['Cn/z6+']),
                      perkImage: eN,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: H.NW.string(H.t.hpgmOz),
                      subtitle: H.NW.string(H.t.Hxujsr),
                      description: H.NW.string(H.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eN,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: H.NW.string(H.t['6S7kOz']),
                subtitle: H.NW.string(H.t.kN1JRE),
                description: H.NW.string(H.t.e7FKCg),
                perkImage: eb
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: H.NW.string(H.t.O5R3ho),
                pillText: H.NW.string(H.t.yhEY5O),
                backgroundImage: ec
            },
            badge: {
                name: 'badge',
                title: H.NW.string(H.t.dcFfSE),
                subtitle: H.NW.string(H.t['37MFFh']),
                perkImage: Y,
                description: H.NW.string(H.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: H.NW.string(H.t.dcFfSE),
                subtitle: H.NW.string(H.t['37MFFh']),
                perkImage: eE.Z,
                description: H.NW.string(H.t.T1IS4u),
                imageOverlayText: H.NW.string(H.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: H.NW.string(H.t.OuItFh),
                subtitle: H.NW.string(H.t.mPyrEx),
                perkImage: en,
                description: H.NW.string(H.t.e7FKCg),
                descriptionCta: H.NW.string(H.t.jVcuVV),
                onCtaClick: eH
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: H.NW.string(H.t['R2IV/f']),
                subtitle: H.NW.string(H.t.R5Xag4),
                perkImage: es,
                description: H.NW.string(H.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: H.NW.string(H.t.LWsAra),
                subtitle: H.NW.string(H.t.bTzbVl),
                perkImage: (0, B.gx)(t, K, q),
                description: H.NW.string(H.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: H.NW.string(H.t.tzdIwM),
                subtitle: H.NW.string(H.t.FXlU29),
                perkImage: (0, B.gx)(t, X, eh),
                description: H.NW.string(H.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: H.NW.formatToPlainString(H.t.jqhAdH, { premiumMaxSize: r }),
                subtitle: H.NW.formatToPlainString(H.t['HI+cfn'], { premiumMaxSize: r }),
                perkImage: ex,
                description: H.NW.string(H.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: H.NW.string(H.t.RSXQYG),
                subtitle: H.NW.string(H.t.ymCPxs),
                perkImage: ef,
                description: H.NW.string(H.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: H.NW.string(H.t.XQCSrq),
                subtitle: H.NW.string(H.t.HC5wVV),
                description: H.NW.string(H.t.ee7wQ0),
                descriptionCta: eT || eI ? H.NW.string(H.t.y9TxXV) : H.NW.string(H.t.d8o6lZ),
                isPremiumGetCta: !(eT || eI),
                onCtaClick: eT || eI ? eH : void 0,
                perkImage: eo
            },
            referralProgram: {
                name: 'referralProgram',
                title: H.NW.string(H.t.tPY4o6),
                subtitle: H.NW.string(H.t.JY0grK),
                description: H.NW.format(H.t['2JqTFx'], { helpdeskArticle: j.Z.getArticleURL(V.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: H.NW.string(H.t.JST6jo),
                isPremiumGetCta: !ev || void 0,
                perkImage: ed
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: H.NW.string(H.t.I9TYMj),
                subtitle: H.NW.string(H.t.HMSHeH),
                descriptionCta: eT ? H.NW.string(H.t.jVcuVV) : H.NW.string(H.t.JST6jo),
                isPremiumGetCta: !eT,
                onCtaClick: eT ? eV : void 0,
                perkImage: em
            }
        };
    if (null != eZ) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eZ,
            o = (0, i.jsx)('div', {
                className: z.cardComponent,
                children: (0, i.jsx)(k.ZP, {
                    progressCircleVariation: k.Qo.AVATAR_DECO,
                    avatarDecoAssetId: U.VA,
                    avatarDecoAssetDescription: H.NW.string(H.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eP,
                    initialPercentage: eA
                })
            });
        ez.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != ew &&
                    (0, p.Z)({
                        product: ew,
                        overrideTitle: H.NW.string(H.t.wRAXra),
                        overrideDescription: H.NW.string(H.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: L.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    if (null != eD) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eD,
            c = (0, i.jsx)('div', {
                className: z.cardComponent,
                children: (0, i.jsx)(k.ZP, {
                    showAnimations: !0,
                    percentage: eP,
                    initialPercentage: eA
                })
            });
        ez.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: c,
            descriptionCta: a,
            onCtaClick: () => {
                o.Z.open(V.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: L.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let eY = (0, D.Rw)(),
        { enabled: eK, isBadgeVersion2: eq } = (0, R.D)();
    return (
        ((!eq && eK && null != eY && eY.status !== D.Vq.UPCOMING) || (eq && eK)) &&
            !eW &&
            (ez.tenureBadge = {
                name: 'tenureBadge',
                title: H.NW.string(H.t.rnsqpa),
                pillText: H.NW.string(H.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(Z.Z, {}),
                cardVariant: L.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, w.k)({ analyticsLocations: e })
            }),
        (0, S.ZP)('usePerksDiscoverabilityCard') === S.P0.SUMMER_2024 &&
            (ez.shyProject = {
                name: 'shyProject',
                title: H.NW.string(H.t['0Mykgo']),
                subtitle: H.NW.string(H.t.opgqDQ),
                description: eT ? H.NW.string(H.t['t+QZSU']) : H.NW.string(H.t['JE/EWV']),
                descriptionCta: H.NW.string(H.t.dBJVnZ),
                pillText: H.NW.string(H.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eT ? eF : void 0,
                perkImage: ee,
                isPremiumGetCta: !eT
            }),
        eC &&
            eB &&
            (ez.collectibleDeco = {
                name: 'collectibleDeco',
                title: H.NW.string(H.t.fzn5eH),
                subtitle: H.NW.format(H.t['8Ud+Qk'], {
                    date: new Date(y._H),
                    termsLink: y.Ps
                }),
                perkComponent: (0, i.jsx)(W.Z, {
                    image: ef,
                    cta: H.NW.string(H.t.s0w7a2),
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
                pillText: H.NW.string(H.t.OS9KPj).toLocaleUpperCase()
            }),
        ez
    );
};
