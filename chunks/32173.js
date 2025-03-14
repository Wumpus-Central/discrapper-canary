n.d(t, {
    Z: () => e_,
    u: () => eN
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
    f = n(703656),
    b = n(547972),
    x = n(131951),
    N = n(594174),
    _ = n(78839),
    E = n(424218),
    j = n(63063),
    C = n(74538),
    O = n(715037),
    v = n(780525),
    S = n(314684),
    T = n(687362),
    I = n(943180),
    y = n(848572),
    A = n(229555),
    P = n(768865),
    R = n(119269),
    D = n(740479),
    Z = n(391110),
    w = n(75077),
    k = n(474936),
    W = n(735825),
    L = n(981631),
    B = n(526761),
    M = n(332325),
    U = n(388032),
    V = n(194511),
    G = n(660372),
    F = n(926433),
    H = n(302036),
    z = n(994554),
    Y = n(704565),
    K = n(393305),
    q = n(338879),
    X = n(766491),
    J = n(193943),
    Q = n(707046),
    $ = n(488459),
    ee = n(334347),
    et = n(132015),
    en = n(142416),
    er = n(607762),
    ei = n(474106),
    es = n(572501),
    ea = n(755590),
    el = n(909910),
    eo = n(637810),
    ec = n(570423),
    ed = n(912429),
    eu = n(91394),
    em = n(209672),
    eg = n(698173),
    ep = n(926262),
    eh = n(482668),
    ef = n(21504),
    eb = n(371435),
    ex = n(83663),
    eN = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.COLLECTIBLE_DECO = 'collectibleDeco'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.TENURE_BADGE = 'tenureBadge'), r);
let e_ = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        r = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        eN = (0, E.BU)(k.Uq / 1024, { useKibibytes: !0 }),
        { premiumSubscription: e_, isEligibleForReward: eE } = (0, s.cj)([_.ZP], () => ({
            premiumSubscription: _.ZP.getPremiumTypeSubscription(),
            isEligibleForReward: _.ZP.getIsSubscriptionEligibleForReward()
        })),
        ej = null != e_ ? C.ZP.getPremiumPlanItem(e_) : null,
        eC = (null != ej ? C.ZP.getSkuIdForPlan(ej.planId) : null) === k.Si.TIER_2,
        eO = N.default.getCurrentUser(),
        ev = (0, C.I5)(eO, k.p9.TIER_2),
        eS = (0, C.I5)(eO, k.p9.TIER_0),
        eT = (0, S.bq)({ showAnimations: !0 }),
        eI = null != eT ? eT.initialPercentage : void 0,
        ey = null != eT ? eT.percentage : void 0,
        eA = (0, g.Z)(x.Z),
        eP = (0, T.a)(),
        eR = (0, S.Kb)(W.qY),
        { fractionalState: eD } = (0, m.Z)(),
        eZ = eD === k.a$.FP_ONLY,
        { enabled: ew } = O.Z.useExperiment({ location: 'usePerksDiscoverabilityCards' }),
        ek = (0, h.Z)({
            scrollPosition: B.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eW = () => {
            l.Z.open(L.oAB.VOICE, B.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eL = () => {
            (0, f.uL)(L.Z5c.COLLECTIBLES_SHOP);
        },
        eB = () => {
            l.Z.open(L.oAB.APPEARANCE, null, { scrollPosition: B.h1.CUSTOM_APP_ICONS });
        },
        eM = {
            clientThemes: {
                name: 'clientThemes',
                title: U.NW.string(U.t.kWM48P),
                subtitle: U.NW.string(U.t.CjRASE),
                description: U.NW.string(U.t.jBTTws),
                descriptionCta: U.NW.string(U.t.jVcuVV),
                onCtaClick: () => {
                    l.Z.open(L.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: Y
            },
            clips: ev
                ? {
                      name: 'clips',
                      title: U.NW.string(U.t.z2jK6e),
                      subtitle: U.NW.string(U.t['hxy0/f']),
                      description: U.NW.string(U.t.Z6v86e),
                      descriptionCta: eA ? U.NW.string(U.t.jVcuVV) : U.NW.string(U.t.hvVgAQ),
                      pillText: U.NW.string(U.t.EYxi0t),
                      onCtaClick: eA
                          ? () => {
                                (0, b.Z)(M.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(j.Z.getArticleURL(L.BhN.CLIPS), '_blank');
                            },
                      perkImage: X
                  }
                : {
                      name: 'clips',
                      title: U.NW.string(U.t.z2jK6e),
                      subtitle: U.NW.string(U.t['hxy0/f']),
                      description: U.NW.string(U.t.X9IeNz),
                      pillText: U.NW.string(U.t.EYxi0t),
                      perkImage: X
                  },
            earlyAccess: ev
                ? {
                      name: 'earlyAccess',
                      title: U.NW.string(U.t.UkLVeH),
                      subtitle: U.NW.string(U.t.xf9ePj),
                      description: U.NW.string(U.t['+r4vdn']),
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: U.NW.string(U.t.UkLVeH),
                      subtitle: U.NW.string(U.t.xf9ePj),
                      description: U.NW.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            earlyAccessSeeAllVariant: ev
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: U.NW.string(U.t.UkLVeH),
                      subtitle: U.NW.string(U.t.xf9ePj),
                      description: U.NW.string(U.t['+r4vdn']),
                      perkImage: $
                  }
                : {
                      name: 'earlyAccess',
                      title: U.NW.string(U.t.UkLVeH),
                      subtitle: U.NW.string(U.t.xf9ePj),
                      description: U.NW.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: $
                  },
            entranceSounds: ev
                ? {
                      name: 'entranceSounds',
                      title: U.NW.string(U.t['f4M+Hx']),
                      subtitle: U.NW.string(U.t['7ZCYvL']),
                      description: U.NW.string(U.t.mUT8bG),
                      descriptionCta: U.NW.string(U.t.jVcuVV),
                      onCtaClick: eW,
                      perkImage: et
                  }
                : {
                      name: 'entranceSounds',
                      title: U.NW.string(U.t['f4M+Hx']),
                      subtitle: U.NW.string(U.t['7ZCYvL']),
                      description: U.NW.string(U.t['3smf/f']),
                      perkImage: et
                  },
            entranceSoundsSeeAllVariation: ev
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.NW.string(U.t['f4M+Hx']),
                      subtitle: U.NW.string(U.t['7ZCYvL']),
                      description: U.NW.string(U.t.mUT8bG),
                      descriptionCta: U.NW.string(U.t.jVcuVV),
                      onCtaClick: eW,
                      perkImage: en
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.NW.string(U.t['f4M+Hx']),
                      subtitle: U.NW.string(U.t['7ZCYvL']),
                      description: U.NW.string(U.t['3smf/f']),
                      perkImage: en
                  },
            profiles: {
                name: 'profiles',
                title: U.NW.string(U.t.KcyDwM),
                subtitle: U.NW.string(U.t.Mt3U1d),
                description: U.NW.string(U.t.kWcDKy),
                descriptionCta: U.NW.string(U.t.jVcuVV),
                onCtaClick: ek,
                perkImage: K
            },
            remixing: ev
                ? {
                      name: 'remixing',
                      title: U.NW.string(U.t['H+v6eX']),
                      subtitle: U.NW.string(U.t.wmbOAg),
                      description: U.NW.string(U.t.gdA9FB),
                      perkImage: ea,
                      pillText: U.NW.string(U.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: U.NW.string(U.t['H+v6eX']),
                      subtitle: U.NW.string(U.t.wmbOAg),
                      description: U.NW.string(U.t.fiLtJi),
                      perkImage: ea,
                      pillText: U.NW.string(U.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: U.NW.string(U.t['NyDu//']),
                subtitle: U.NW.string(U.t['4pEwXF']),
                description: eZ ? U.NW.format(U.t.uPiIBQ, { link: 'https://discord.com' }) : U.NW.string(U.t.jsyNHh),
                descriptionCta: U.NW.string(U.t.jVcuVV),
                onCtaClick: eZ
                    ? void 0
                    : () => {
                          l.Z.open(L.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: q,
                hideOnNarrowScreen: !eZ,
                imageOverlayText: eZ ? U.NW.string(U.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: U.NW.string(U.t['NyDu//']),
                subtitle: U.NW.string(U.t['4pEwXF']),
                descriptionCta: U.NW.string(U.t.jVcuVV),
                perkImage: eb.Z,
                imageOverlayText: U.NW.string(U.t.lcYttb)
            },
            specialMemberPricing: ev
                ? {
                      name: 'specialMemberPricing',
                      title: U.NW.string(U.t['0Mykgo']),
                      subtitle: U.NW.string(U.t.opgqDQ),
                      description: U.NW.string(U.t['t+QZSU']),
                      descriptionCta: U.NW.string(U.t.dBJVnZ),
                      onCtaClick: eL,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricing',
                      title: U.NW.string(U.t['0Mykgo']),
                      subtitle: U.NW.string(U.t.opgqDQ),
                      description: U.NW.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialMemberPricingSeeAllVariant: ev
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.NW.string(U.t['0Mykgo']),
                      subtitle: U.NW.string(U.t.opgqDQ),
                      description: U.NW.string(U.t['t+QZSU']),
                      descriptionCta: U.NW.string(U.t.dBJVnZ),
                      onCtaClick: eL,
                      perkImage: ec
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.NW.string(U.t['0Mykgo']),
                      subtitle: U.NW.string(U.t.opgqDQ),
                      description: U.NW.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ec
                  },
            specialShopPerks: ev
                ? {
                      name: 'specialShopPerks',
                      title: U.NW.string(U.t.U68LpK),
                      subtitle: U.NW.string(U.t.chRZiY),
                      description: U.NW.string(U.t['t+QZSU']),
                      descriptionCta: U.NW.string(U.t.dBJVnZ),
                      onCtaClick: eL,
                      perkImage: eo
                  }
                : {
                      name: 'specialShopPerks',
                      title: U.NW.string(U.t.U68LpK),
                      subtitle: U.NW.string(U.t.chRZiY),
                      description: U.NW.string(U.t['JE/EWV']),
                      descriptionCta: U.NW.string(U.t.dBJVnZ),
                      onCtaClick: eL,
                      perkImage: eo
                  },
            unlimitedSuperReactions: ev
                ? {
                      name: 'unlimitedSuperReactions',
                      title: U.NW.string(U.t.hpgmOz),
                      subtitle: U.NW.string(U.t.Hxujsr),
                      description: U.NW.string(U.t['Cn/z6+']),
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: U.NW.string(U.t.hpgmOz),
                      subtitle: U.NW.string(U.t.Hxujsr),
                      description: U.NW.string(U.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: U.NW.string(U.t['6S7kOz']),
                subtitle: U.NW.string(U.t.kN1JRE),
                description: U.NW.string(U.t.e7FKCg),
                perkImage: em
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: U.NW.string(U.t.O5R3ho),
                pillText: U.NW.string(U.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: U.NW.string(U.t.dcFfSE),
                subtitle: U.NW.string(U.t['37MFFh']),
                perkImage: G,
                description: U.NW.string(U.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: U.NW.string(U.t.dcFfSE),
                subtitle: U.NW.string(U.t['37MFFh']),
                perkImage: ex.Z,
                description: U.NW.string(U.t.T1IS4u),
                imageOverlayText: U.NW.string(U.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: U.NW.string(U.t.OuItFh),
                subtitle: U.NW.string(U.t.mPyrEx),
                perkImage: J,
                description: U.NW.string(U.t.e7FKCg),
                descriptionCta: U.NW.string(U.t.jVcuVV),
                onCtaClick: eB
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: U.NW.string(U.t['R2IV/f']),
                subtitle: U.NW.string(U.t.R5Xag4),
                perkImage: ee,
                description: U.NW.string(U.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: U.NW.string(U.t.LWsAra),
                subtitle: U.NW.string(U.t.bTzbVl),
                perkImage: (0, w.gx)(t, F, H),
                description: U.NW.string(U.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: U.NW.string(U.t.tzdIwM),
                subtitle: U.NW.string(U.t.FXlU29),
                perkImage: (0, w.gx)(t, z, ed),
                description: U.NW.string(U.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: U.NW.formatToPlainString(U.t.jqhAdH, { premiumMaxSize: eN }),
                subtitle: U.NW.formatToPlainString(U.t['HI+cfn'], { premiumMaxSize: eN }),
                perkImage: ep,
                description: U.NW.string(U.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: U.NW.string(U.t.RSXQYG),
                subtitle: U.NW.string(U.t.ymCPxs),
                perkImage: eu,
                description: U.NW.string(U.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: U.NW.string(U.t.XQCSrq),
                subtitle: U.NW.string(U.t.HC5wVV),
                description: U.NW.string(U.t.ee7wQ0),
                descriptionCta: ev || eS ? U.NW.string(U.t.y9TxXV) : U.NW.string(U.t.d8o6lZ),
                isPremiumGetCta: !(ev || eS),
                onCtaClick: ev || eS ? eB : void 0,
                perkImage: er
            },
            referralProgram: {
                name: 'referralProgram',
                title: U.NW.string(U.t.tPY4o6),
                subtitle: U.NW.string(U.t.JY0grK),
                description: U.NW.format(U.t['2JqTFx'], { helpdeskArticle: j.Z.getArticleURL(L.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: U.NW.string(U.t.JST6jo),
                isPremiumGetCta: !eC || void 0,
                perkImage: es
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: U.NW.string(U.t.I9TYMj),
                subtitle: U.NW.string(U.t.HMSHeH),
                descriptionCta: ev ? U.NW.string(U.t.jVcuVV) : U.NW.string(U.t.JST6jo),
                isPremiumGetCta: !ev,
                onCtaClick: ev ? ek : void 0,
                perkImage: el
            }
        };
    if (null != eP) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = eP,
            o = (0, i.jsx)('div', {
                className: V.cardComponent,
                children: (0, i.jsx)(R.ZP, {
                    progressCircleVariation: R.Qo.AVATAR_DECO,
                    avatarDecoAssetId: W.VA,
                    avatarDecoAssetDescription: U.NW.string(U.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: ey,
                    initialPercentage: eI
                })
            });
        eM.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != eR &&
                    (0, p.Z)({
                        product: eR,
                        overrideTitle: U.NW.string(U.t.wRAXra),
                        overrideDescription: U.NW.string(U.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: Z.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    let eU = (0, y.Rw)(),
        { enabled: eV, isBadgeVersion2: eG } = (0, I.D)();
    return (
        ((!eG && eV && null != eU && eU.status !== y.Vq.UPCOMING) || (eG && eV)) &&
            ev &&
            !eZ &&
            (eM.tenureBadge = {
                name: 'tenureBadge',
                title: U.NW.string(U.t.rnsqpa),
                pillText: U.NW.string(U.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(A.Z, {}),
                cardVariant: Z.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, P.k)({ analyticsLocations: e })
            }),
        eE &&
            ew &&
            (eM.collectibleDeco = {
                name: 'collectibleDeco',
                title: U.NW.string(U.t.fzn5eH),
                subtitle: U.NW.format(U.t['8Ud+Qk'], {
                    date: new Date(v._H),
                    termsLink: v.Ps
                }),
                perkComponent: (0, i.jsx)(D.Z, {
                    image: r ? ef.Z : eh.Z,
                    cta: U.NW.string(U.t.s0w7a2),
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
                pillText: U.NW.string(U.t.OS9KPj).toLocaleUpperCase()
            }),
        eM
    );
};
