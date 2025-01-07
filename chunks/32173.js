n.d(t, {
    u: function () {
        return r;
    }
});
var i,
    r,
    a = n(200651);
n(192379);
var s = n(399606),
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    g = n(975298),
    m = n(779618),
    f = n(832149),
    p = n(300284),
    _ = n(703656),
    h = n(547972),
    x = n(131951),
    E = n(594174),
    b = n(78839),
    C = n(626135),
    v = n(424218),
    T = n(63063),
    N = n(74538),
    I = n(860489),
    S = n(471309),
    R = n(314684),
    j = n(687362),
    A = n(119269),
    P = n(467685),
    O = n(391110),
    Z = n(75077),
    M = n(976465),
    B = n(474936),
    y = n(735825),
    w = n(981631),
    k = n(526761),
    L = n(332325),
    U = n(388032),
    D = n(506829),
    G = n(660372),
    H = n(926433),
    V = n(302036),
    F = n(994554),
    W = n(704565),
    z = n(393305),
    Y = n(338879),
    K = n(609926),
    Q = n(766491),
    q = n(193943),
    J = n(707046),
    X = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(355653),
    en = n(607762),
    ei = n(474106),
    er = n(572501),
    ea = n(755590),
    es = n(909910),
    el = n(637810),
    eo = n(570423),
    ec = n(912429),
    ed = n(91394),
    eu = n(209672),
    eg = n(698173),
    em = n(926262),
    ef = n(371435),
    ep = n(83663);
((i = r || (r = {})).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, v.BU)(B.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([b.ZP], () => b.ZP.getPremiumTypeSubscription()),
        e_ = null != r ? N.ZP.getPremiumPlanItem(r) : null,
        eh = (null != e_ ? N.ZP.getSkuIdForPlan(e_.planId) : null) === B.Si.TIER_2,
        ex = E.default.getCurrentUser(),
        eE = (0, N.I5)(ex, B.p9.TIER_2),
        eb = (0, N.I5)(ex, B.p9.TIER_0),
        eC = (0, R.bq)({ showAnimations: !0 }),
        ev = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eN = (0, m.Z)(x.Z),
        eI = (0, j.ZP)(),
        eS = (0, j.aJ)(),
        eR = (0, R.Kb)(y.qY),
        { fractionalState: ej } = (0, g.Z)(),
        eA = ej === B.a$.FP_ONLY,
        eP = (0, p.Z)({
            scrollPosition: k.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eO = () => {
            o.Z.open(w.oAB.VOICE, k.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eZ = () => {
            (0, _.uL)(w.Z5c.COLLECTIBLES_SHOP);
        },
        eM = () => {
            o.Z.open(w.oAB.APPEARANCE, null, { scrollPosition: k.h1.CUSTOM_APP_ICONS });
        },
        eB = {
            clientThemes: {
                name: 'clientThemes',
                title: U.intl.string(U.t.kWM48P),
                subtitle: U.intl.string(U.t.CjRASE),
                description: U.intl.string(U.t.jBTTws),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(w.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: W
            },
            clips: eE
                ? {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.Z6v86e),
                      descriptionCta: eN ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.hvVgAQ),
                      pillText: U.intl.string(U.t.EYxi0t),
                      onCtaClick: eN
                          ? () => {
                                (0, h.Z)(L.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(T.Z.getArticleURL(w.BhN.CLIPS), '_blank');
                            },
                      perkImage: Q
                  }
                : {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.X9IeNz),
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: Q
                  },
            earlyAccess: eE
                ? {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            earlyAccessSeeAllVariant: eE
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: eE
                ? {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eE
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t['3smf/f']),
                      perkImage: et
                  },
            profiles: {
                name: 'profiles',
                title: U.intl.string(U.t.KcyDwM),
                subtitle: U.intl.string(U.t.Mt3U1d),
                description: U.intl.string(U.t.kWcDKy),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eP,
                perkImage: z
            },
            remixing: eE
                ? {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.gdA9FB),
                      perkImage: ea,
                      pillText: U.intl.string(U.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.fiLtJi),
                      perkImage: ea,
                      pillText: U.intl.string(U.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: U.intl.string(U.t['NyDu//']),
                subtitle: U.intl.string(U.t['4pEwXF']),
                description: eA ? U.intl.format(U.t.uPiIBQ, { link: 'https://discord.com' }) : U.intl.string(U.t.jsyNHh),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eA
                    ? void 0
                    : () => {
                          o.Z.open(w.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: Y,
                hideOnNarrowScreen: !eA,
                imageOverlayText: eA ? U.intl.string(U.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: U.intl.string(U.t['NyDu//']),
                subtitle: U.intl.string(U.t['4pEwXF']),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                perkImage: ef.Z,
                imageOverlayText: U.intl.string(U.t.lcYttb)
            },
            specialMemberPricing: eE
                ? {
                      name: 'specialMemberPricing',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricing',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialMemberPricingSeeAllVariant: eE
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialShopPerks: eE
                ? {
                      name: 'specialShopPerks',
                      title: U.intl.string(U.t.U68LpK),
                      subtitle: U.intl.string(U.t.chRZiY),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: el
                  }
                : {
                      name: 'specialShopPerks',
                      title: U.intl.string(U.t.U68LpK),
                      subtitle: U.intl.string(U.t.chRZiY),
                      description: U.intl.string(U.t['JE/EWV']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: el
                  },
            unlimitedSuperReactions: eE
                ? {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t['Cn/z6+']),
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eg,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: U.intl.string(U.t['6S7kOz']),
                subtitle: U.intl.string(U.t.kN1JRE),
                description: U.intl.string(U.t.e7FKCg),
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: U.intl.string(U.t.O5R3ho),
                pillText: U.intl.string(U.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: U.intl.string(U.t.dcFfSE),
                subtitle: U.intl.string(U.t['37MFFh']),
                perkImage: G,
                description: U.intl.string(U.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: U.intl.string(U.t.dcFfSE),
                subtitle: U.intl.string(U.t['37MFFh']),
                perkImage: ep.Z,
                description: U.intl.string(U.t.T1IS4u),
                imageOverlayText: U.intl.string(U.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: U.intl.string(U.t.OuItFh),
                subtitle: U.intl.string(U.t.mPyrEx),
                perkImage: q,
                description: U.intl.string(U.t.e7FKCg),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: eM
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: U.intl.string(U.t['R2IV/f']),
                subtitle: U.intl.string(U.t.R5Xag4),
                perkImage: $,
                description: U.intl.string(U.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: U.intl.string(U.t.LWsAra),
                subtitle: U.intl.string(U.t.bTzbVl),
                perkImage: (0, Z.gx)(t, H, V),
                description: U.intl.string(U.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: U.intl.string(U.t.tzdIwM),
                subtitle: U.intl.string(U.t.FXlU29),
                perkImage: (0, Z.gx)(t, F, ec),
                description: U.intl.string(U.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: U.intl.formatToPlainString(U.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: U.intl.formatToPlainString(U.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: em,
                description: U.intl.string(U.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: U.intl.string(U.t.RSXQYG),
                subtitle: U.intl.string(U.t.ymCPxs),
                perkImage: ed,
                description: U.intl.string(U.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: U.intl.string(U.t.XQCSrq),
                subtitle: U.intl.string(U.t.HC5wVV),
                description: U.intl.string(U.t.ee7wQ0),
                descriptionCta: eE || eb ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lZ),
                isPremiumGetCta: !(eE || eb),
                onCtaClick: eE || eb ? eM : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: U.intl.string(U.t.tPY4o6),
                subtitle: U.intl.string(U.t.JY0grK),
                description: U.intl.format(U.t['2JqTFx'], { helpdeskArticle: T.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !eh || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: U.intl.string(U.t.I9TYMj),
                subtitle: U.intl.string(U.t.HMSHeH),
                descriptionCta: eE ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !eE,
                onCtaClick: eE ? eP : void 0,
                perkImage: es
            }
        };
    if (null != eS) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eS,
            o = (0, a.jsx)('div', {
                className: D.cardComponent,
                children: (0, a.jsx)(A.ZP, {
                    progressCircleVariation: A.Qo.AVATAR_DECO,
                    avatarDecoAssetId: y.VA,
                    avatarDecoAssetDescription: U.intl.string(U.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ev
                })
            });
        eB.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                if (null != eR)
                    (0, f.Z)({
                        product: eR,
                        title: U.intl.string(U.t.wRAXra),
                        description: U.intl.string(U.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: s, dismissibleContentType: l } = eI,
            c = (0, a.jsx)('div', {
                className: D.cardComponent,
                children: (0, a.jsx)(A.ZP, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ev
                })
            });
        eB.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: s,
            onCtaClick: () => {
                o.Z.open(w.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: O.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let ey = (0, M.kG)(),
        { enabled: ew } = (0, S.Z)(),
        ek = () => {
            C.default.track(w.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: d.Z.PREMIUM_MARKETING_PERK_CARD,
                source: d.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, a.jsx)(e, { ...t });
                });
        };
    return (
        null != ey &&
            ew &&
            (eB.tenureBadge = {
                name: 'tenureBadge',
                title: U.intl.string(U.t.rnsqpa),
                pillText: U.intl.string(U.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, a.jsx)(P.Z, {}),
                cardVariant: O.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => ek()
            }),
        (0, I.ZP)('usePerksDiscoverabilityCard') === I.P0.SUMMER_2024 &&
            (eB.shyProject = {
                name: 'shyProject',
                title: U.intl.string(U.t['0Mykgo']),
                subtitle: U.intl.string(U.t.opgqDQ),
                description: eE ? U.intl.string(U.t['t+QZSU']) : U.intl.string(U.t['JE/EWV']),
                descriptionCta: U.intl.string(U.t.dBJVnZ),
                pillText: U.intl.string(U.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eE ? eZ : void 0,
                perkImage: K,
                isPremiumGetCta: !eE
            }),
        eB
    );
};
