n.d(t, {
    Z: () => e_,
    u: () => eg
});
var i,
    s = n(200651);
n(192379);
var r = n(399606),
    l = n(230711),
    a = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(975298),
    u = n(779618),
    m = n(832149),
    h = n(300284),
    g = n(703656),
    _ = n(547972),
    x = n(131951),
    p = n(594174),
    E = n(78839),
    C = n(424218),
    f = n(63063),
    T = n(74538),
    N = n(860489),
    S = n(314684),
    I = n(687362),
    b = n(943180),
    v = n(848572),
    j = n(229555),
    A = n(768865),
    O = n(119269),
    R = n(391110),
    P = n(75077),
    D = n(474936),
    y = n(735825),
    Z = n(981631),
    k = n(526761),
    L = n(332325),
    B = n(388032),
    M = n(506829),
    w = n(660372),
    V = n(926433),
    U = n(302036),
    G = n(994554),
    F = n(704565),
    H = n(393305),
    z = n(338879),
    Y = n(609926),
    W = n(766491),
    K = n(193943),
    q = n(707046),
    X = n(488459),
    J = n(334347),
    Q = n(132015),
    $ = n(355653),
    ee = n(607762),
    et = n(474106),
    en = n(572501),
    ei = n(755590),
    es = n(909910),
    er = n(637810),
    el = n(570423),
    ea = n(912429),
    eo = n(91394),
    ec = n(209672),
    ed = n(698173),
    eu = n(926262),
    em = n(371435),
    eh = n(83663),
    eg = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge'), i);
let e_ = () => {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, a.ZP)(),
        n = (0, C.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        i = (0, r.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        eg = null != i ? T.ZP.getPremiumPlanItem(i) : null,
        e_ = (null != eg ? T.ZP.getSkuIdForPlan(eg.planId) : null) === D.Si.TIER_2,
        ex = p.default.getCurrentUser(),
        ep = (0, T.I5)(ex, D.p9.TIER_2),
        eE = (0, T.I5)(ex, D.p9.TIER_0),
        eC = (0, S.bq)({ showAnimations: !0 }),
        ef = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eN = (0, u.Z)(x.Z),
        eS = (0, I.ZP)(),
        eI = (0, I.aJ)(),
        eb = (0, S.Kb)(y.qY),
        { fractionalState: ev } = (0, d.Z)(),
        ej = ev === D.a$.FP_ONLY,
        eA = (0, h.Z)({
            scrollPosition: k.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eO = () => {
            l.Z.open(Z.oAB.VOICE, k.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eR = () => {
            (0, g.uL)(Z.Z5c.COLLECTIBLES_SHOP);
        },
        eP = () => {
            l.Z.open(Z.oAB.APPEARANCE, null, { scrollPosition: k.h1.CUSTOM_APP_ICONS });
        },
        eD = {
            clientThemes: {
                name: 'clientThemes',
                title: B.intl.string(B.t.kWM48P),
                subtitle: B.intl.string(B.t.CjRASE),
                description: B.intl.string(B.t.jBTTws),
                descriptionCta: B.intl.string(B.t.jVcuVV),
                onCtaClick: () => {
                    l.Z.open(Z.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: ep
                ? {
                      name: 'clips',
                      title: B.intl.string(B.t.z2jK6e),
                      subtitle: B.intl.string(B.t['hxy0/f']),
                      description: B.intl.string(B.t.Z6v86e),
                      descriptionCta: eN ? B.intl.string(B.t.jVcuVV) : B.intl.string(B.t.hvVgAQ),
                      pillText: B.intl.string(B.t.EYxi0t),
                      onCtaClick: eN
                          ? () => {
                                (0, _.Z)(L.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(f.Z.getArticleURL(Z.BhN.CLIPS), '_blank');
                            },
                      perkImage: W
                  }
                : {
                      name: 'clips',
                      title: B.intl.string(B.t.z2jK6e),
                      subtitle: B.intl.string(B.t['hxy0/f']),
                      description: B.intl.string(B.t.X9IeNz),
                      pillText: B.intl.string(B.t.EYxi0t),
                      perkImage: W
                  },
            earlyAccess: ep
                ? {
                      name: 'earlyAccess',
                      title: B.intl.string(B.t.UkLVeH),
                      subtitle: B.intl.string(B.t.xf9ePj),
                      description: B.intl.string(B.t['+r4vdn']),
                      perkImage: q
                  }
                : {
                      name: 'earlyAccess',
                      title: B.intl.string(B.t.UkLVeH),
                      subtitle: B.intl.string(B.t.xf9ePj),
                      description: B.intl.string(B.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: q
                  },
            earlyAccessSeeAllVariant: ep
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: B.intl.string(B.t.UkLVeH),
                      subtitle: B.intl.string(B.t.xf9ePj),
                      description: B.intl.string(B.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: B.intl.string(B.t.UkLVeH),
                      subtitle: B.intl.string(B.t.xf9ePj),
                      description: B.intl.string(B.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            entranceSounds: ep
                ? {
                      name: 'entranceSounds',
                      title: B.intl.string(B.t['f4M+Hx']),
                      subtitle: B.intl.string(B.t['7ZCYvL']),
                      description: B.intl.string(B.t.mUT8bG),
                      descriptionCta: B.intl.string(B.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: Q
                  }
                : {
                      name: 'entranceSounds',
                      title: B.intl.string(B.t['f4M+Hx']),
                      subtitle: B.intl.string(B.t['7ZCYvL']),
                      description: B.intl.string(B.t['3smf/f']),
                      perkImage: Q
                  },
            entranceSoundsSeeAllVariation: ep
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.intl.string(B.t['f4M+Hx']),
                      subtitle: B.intl.string(B.t['7ZCYvL']),
                      description: B.intl.string(B.t.mUT8bG),
                      descriptionCta: B.intl.string(B.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: $
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.intl.string(B.t['f4M+Hx']),
                      subtitle: B.intl.string(B.t['7ZCYvL']),
                      description: B.intl.string(B.t['3smf/f']),
                      perkImage: $
                  },
            profiles: {
                name: 'profiles',
                title: B.intl.string(B.t.KcyDwM),
                subtitle: B.intl.string(B.t.Mt3U1d),
                description: B.intl.string(B.t.kWcDKy),
                descriptionCta: B.intl.string(B.t.jVcuVV),
                onCtaClick: eA,
                perkImage: H
            },
            remixing: ep
                ? {
                      name: 'remixing',
                      title: B.intl.string(B.t['H+v6eX']),
                      subtitle: B.intl.string(B.t.wmbOAg),
                      description: B.intl.string(B.t.gdA9FB),
                      perkImage: ei,
                      pillText: B.intl.string(B.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: B.intl.string(B.t['H+v6eX']),
                      subtitle: B.intl.string(B.t.wmbOAg),
                      description: B.intl.string(B.t.fiLtJi),
                      perkImage: ei,
                      pillText: B.intl.string(B.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: B.intl.string(B.t['NyDu//']),
                subtitle: B.intl.string(B.t['4pEwXF']),
                description: ej ? B.intl.format(B.t.uPiIBQ, { link: 'https://discord.com' }) : B.intl.string(B.t.jsyNHh),
                descriptionCta: B.intl.string(B.t.jVcuVV),
                onCtaClick: ej
                    ? void 0
                    : () => {
                          l.Z.open(Z.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !ej,
                imageOverlayText: ej ? B.intl.string(B.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: B.intl.string(B.t['NyDu//']),
                subtitle: B.intl.string(B.t['4pEwXF']),
                descriptionCta: B.intl.string(B.t.jVcuVV),
                perkImage: em.Z,
                imageOverlayText: B.intl.string(B.t.lcYttb)
            },
            specialMemberPricing: ep
                ? {
                      name: 'specialMemberPricing',
                      title: B.intl.string(B.t['0Mykgo']),
                      subtitle: B.intl.string(B.t.opgqDQ),
                      description: B.intl.string(B.t['t+QZSU']),
                      descriptionCta: B.intl.string(B.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: er
                  }
                : {
                      name: 'specialMemberPricing',
                      title: B.intl.string(B.t['0Mykgo']),
                      subtitle: B.intl.string(B.t.opgqDQ),
                      description: B.intl.string(B.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: er
                  },
            specialMemberPricingSeeAllVariant: ep
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.intl.string(B.t['0Mykgo']),
                      subtitle: B.intl.string(B.t.opgqDQ),
                      description: B.intl.string(B.t['t+QZSU']),
                      descriptionCta: B.intl.string(B.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.intl.string(B.t['0Mykgo']),
                      subtitle: B.intl.string(B.t.opgqDQ),
                      description: B.intl.string(B.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: ep
                ? {
                      name: 'specialShopPerks',
                      title: B.intl.string(B.t.U68LpK),
                      subtitle: B.intl.string(B.t.chRZiY),
                      description: B.intl.string(B.t['t+QZSU']),
                      descriptionCta: B.intl.string(B.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: er
                  }
                : {
                      name: 'specialShopPerks',
                      title: B.intl.string(B.t.U68LpK),
                      subtitle: B.intl.string(B.t.chRZiY),
                      description: B.intl.string(B.t['JE/EWV']),
                      descriptionCta: B.intl.string(B.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: er
                  },
            unlimitedSuperReactions: ep
                ? {
                      name: 'unlimitedSuperReactions',
                      title: B.intl.string(B.t.hpgmOz),
                      subtitle: B.intl.string(B.t.Hxujsr),
                      description: B.intl.string(B.t['Cn/z6+']),
                      perkImage: ed,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: B.intl.string(B.t.hpgmOz),
                      subtitle: B.intl.string(B.t.Hxujsr),
                      description: B.intl.string(B.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ed,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: B.intl.string(B.t['6S7kOz']),
                subtitle: B.intl.string(B.t.kN1JRE),
                description: B.intl.string(B.t.e7FKCg),
                perkImage: ec
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: B.intl.string(B.t.O5R3ho),
                pillText: B.intl.string(B.t.yhEY5O),
                backgroundImage: et
            },
            badge: {
                name: 'badge',
                title: B.intl.string(B.t.dcFfSE),
                subtitle: B.intl.string(B.t['37MFFh']),
                perkImage: w,
                description: B.intl.string(B.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: B.intl.string(B.t.dcFfSE),
                subtitle: B.intl.string(B.t['37MFFh']),
                perkImage: eh.Z,
                description: B.intl.string(B.t.T1IS4u),
                imageOverlayText: B.intl.string(B.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: B.intl.string(B.t.OuItFh),
                subtitle: B.intl.string(B.t.mPyrEx),
                perkImage: K,
                description: B.intl.string(B.t.e7FKCg),
                descriptionCta: B.intl.string(B.t.jVcuVV),
                onCtaClick: eP
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: B.intl.string(B.t['R2IV/f']),
                subtitle: B.intl.string(B.t.R5Xag4),
                perkImage: J,
                description: B.intl.string(B.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: B.intl.string(B.t.LWsAra),
                subtitle: B.intl.string(B.t.bTzbVl),
                perkImage: (0, P.gx)(t, V, U),
                description: B.intl.string(B.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: B.intl.string(B.t.tzdIwM),
                subtitle: B.intl.string(B.t.FXlU29),
                perkImage: (0, P.gx)(t, G, ea),
                description: B.intl.string(B.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: B.intl.formatToPlainString(B.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: B.intl.formatToPlainString(B.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: eu,
                description: B.intl.string(B.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: B.intl.string(B.t.RSXQYG),
                subtitle: B.intl.string(B.t.ymCPxs),
                perkImage: eo,
                description: B.intl.string(B.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: B.intl.string(B.t.XQCSrq),
                subtitle: B.intl.string(B.t.HC5wVV),
                description: B.intl.string(B.t.ee7wQ0),
                descriptionCta: ep || eE ? B.intl.string(B.t.y9TxXV) : B.intl.string(B.t.d8o6lZ),
                isPremiumGetCta: !(ep || eE),
                onCtaClick: ep || eE ? eP : void 0,
                perkImage: ee
            },
            referralProgram: {
                name: 'referralProgram',
                title: B.intl.string(B.t.tPY4o6),
                subtitle: B.intl.string(B.t.JY0grK),
                description: B.intl.format(B.t['2JqTFx'], { helpdeskArticle: f.Z.getArticleURL(Z.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: B.intl.string(B.t.JST6jo),
                isPremiumGetCta: !e_ || void 0,
                perkImage: en
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: B.intl.string(B.t.I9TYMj),
                subtitle: B.intl.string(B.t.HMSHeH),
                descriptionCta: ep ? B.intl.string(B.t.jVcuVV) : B.intl.string(B.t.JST6jo),
                isPremiumGetCta: !ep,
                onCtaClick: ep ? eA : void 0,
                perkImage: es
            }
        };
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: l, dismissibleContentType: a } = eI,
            o = (0, s.jsx)('div', {
                className: M.cardComponent,
                children: (0, s.jsx)(O.ZP, {
                    progressCircleVariation: O.Qo.AVATAR_DECO,
                    avatarDecoAssetId: y.VA,
                    avatarDecoAssetDescription: B.intl.string(B.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ef
                })
            });
        eD.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: l,
            onCtaClick: () => {
                null != eb &&
                    (0, m.Z)({
                        product: eb,
                        title: B.intl.string(B.t.wRAXra),
                        description: B.intl.string(B.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: R.zW.REWARD,
            pillText: r,
            dismissibleContentType: a
        };
    }
    if (null != eS) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: o } = eS,
            c = (0, s.jsx)('div', {
                className: M.cardComponent,
                children: (0, s.jsx)(O.ZP, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ef
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
            cardVariant: R.zW.REWARD,
            pillText: r,
            dismissibleContentType: o
        };
    }
    let ey = (0, v.kG)(),
        { enabled: eZ } = (0, b.D)();
    return (
        null != ey &&
            eZ &&
            (eD.tenureBadge = {
                name: 'tenureBadge',
                title: B.intl.string(B.t.rnsqpa),
                pillText: B.intl.string(B.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, s.jsx)(j.Z, {}),
                cardVariant: R.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, A.k)(e)
            }),
        (0, N.ZP)('usePerksDiscoverabilityCard') === N.P0.SUMMER_2024 &&
            (eD.shyProject = {
                name: 'shyProject',
                title: B.intl.string(B.t['0Mykgo']),
                subtitle: B.intl.string(B.t.opgqDQ),
                description: ep ? B.intl.string(B.t['t+QZSU']) : B.intl.string(B.t['JE/EWV']),
                descriptionCta: B.intl.string(B.t.dBJVnZ),
                pillText: B.intl.string(B.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: ep ? eR : void 0,
                perkImage: Y,
                isPremiumGetCta: !ep
            }),
        eD
    );
};
