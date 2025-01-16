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
    l = n(481060),
    o = n(230711),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    m = n(975298),
    g = n(779618),
    h = n(832149),
    p = n(300284),
    x = n(703656),
    f = n(547972),
    _ = n(131951),
    E = n(594174),
    C = n(78839),
    T = n(626135),
    S = n(424218),
    b = n(63063),
    I = n(74538),
    N = n(860489),
    v = n(471309),
    A = n(314684),
    j = n(687362),
    O = n(848572),
    R = n(119269),
    P = n(467685),
    y = n(391110),
    B = n(75077),
    D = n(474936),
    Z = n(735825),
    L = n(981631),
    M = n(526761),
    k = n(332325),
    w = n(388032),
    U = n(736606),
    F = n(660372),
    V = n(926433),
    G = n(302036),
    H = n(994554),
    Y = n(704565),
    W = n(393305),
    z = n(338879),
    K = n(609926),
    q = n(766491),
    Q = n(193943),
    X = n(707046),
    J = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(142416),
    en = n(607762),
    ei = n(474106),
    er = n(572501),
    es = n(755590),
    ea = n(909910),
    el = n(637810),
    eo = n(570423),
    ec = n(912429),
    ed = n(91394),
    eu = n(209672),
    em = n(698173),
    eg = n(926262),
    eh = n(371435),
    ep = n(83663);
((i = r || (r = {})).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge');
t.Z = () => {
    let { analyticsLocations: e } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, c.ZP)(),
        i = (0, S.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        r = (0, a.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        ex = null != r ? I.ZP.getPremiumPlanItem(r) : null,
        ef = (null != ex ? I.ZP.getSkuIdForPlan(ex.planId) : null) === D.Si.TIER_2,
        e_ = E.default.getCurrentUser(),
        eE = (0, I.I5)(e_, D.p9.TIER_2),
        eC = (0, I.I5)(e_, D.p9.TIER_0),
        eT = (0, A.bq)({ showAnimations: !0 }),
        eS = null != eT ? eT.initialPercentage : void 0,
        eb = null != eT ? eT.percentage : void 0,
        eI = (0, g.Z)(_.Z),
        eN = (0, j.ZP)(),
        ev = (0, j.aJ)(),
        eA = (0, A.Kb)(Z.qY),
        { fractionalState: ej } = (0, m.Z)(),
        eO = ej === D.a$.FP_ONLY,
        eR = (0, p.Z)({
            scrollPosition: M.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eP = () => {
            o.Z.open(L.oAB.VOICE, M.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ey = () => {
            (0, x.uL)(L.Z5c.COLLECTIBLES_SHOP);
        },
        eB = () => {
            o.Z.open(L.oAB.APPEARANCE, null, { scrollPosition: M.h1.CUSTOM_APP_ICONS });
        },
        eD = {
            clientThemes: {
                name: 'clientThemes',
                title: w.intl.string(w.t.kWM48P),
                subtitle: w.intl.string(w.t.CjRASE),
                description: w.intl.string(w.t.jBTTws),
                descriptionCta: w.intl.string(w.t.jVcuVV),
                onCtaClick: () => {
                    o.Z.open(L.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: Y
            },
            clips: eE
                ? {
                      name: 'clips',
                      title: w.intl.string(w.t.z2jK6e),
                      subtitle: w.intl.string(w.t['hxy0/f']),
                      description: w.intl.string(w.t.Z6v86e),
                      descriptionCta: eI ? w.intl.string(w.t.jVcuVV) : w.intl.string(w.t.hvVgAQ),
                      pillText: w.intl.string(w.t.EYxi0t),
                      onCtaClick: eI
                          ? () => {
                                (0, f.Z)(k.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(b.Z.getArticleURL(L.BhN.CLIPS), '_blank');
                            },
                      perkImage: q
                  }
                : {
                      name: 'clips',
                      title: w.intl.string(w.t.z2jK6e),
                      subtitle: w.intl.string(w.t['hxy0/f']),
                      description: w.intl.string(w.t.X9IeNz),
                      pillText: w.intl.string(w.t.EYxi0t),
                      perkImage: q
                  },
            earlyAccess: eE
                ? {
                      name: 'earlyAccess',
                      title: w.intl.string(w.t.UkLVeH),
                      subtitle: w.intl.string(w.t.xf9ePj),
                      description: w.intl.string(w.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: w.intl.string(w.t.UkLVeH),
                      subtitle: w.intl.string(w.t.xf9ePj),
                      description: w.intl.string(w.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: eE
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: w.intl.string(w.t.UkLVeH),
                      subtitle: w.intl.string(w.t.xf9ePj),
                      description: w.intl.string(w.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: w.intl.string(w.t.UkLVeH),
                      subtitle: w.intl.string(w.t.xf9ePj),
                      description: w.intl.string(w.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            entranceSounds: eE
                ? {
                      name: 'entranceSounds',
                      title: w.intl.string(w.t['f4M+Hx']),
                      subtitle: w.intl.string(w.t['7ZCYvL']),
                      description: w.intl.string(w.t.mUT8bG),
                      descriptionCta: w.intl.string(w.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: w.intl.string(w.t['f4M+Hx']),
                      subtitle: w.intl.string(w.t['7ZCYvL']),
                      description: w.intl.string(w.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: eE
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: w.intl.string(w.t['f4M+Hx']),
                      subtitle: w.intl.string(w.t['7ZCYvL']),
                      description: w.intl.string(w.t.mUT8bG),
                      descriptionCta: w.intl.string(w.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: et
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: w.intl.string(w.t['f4M+Hx']),
                      subtitle: w.intl.string(w.t['7ZCYvL']),
                      description: w.intl.string(w.t['3smf/f']),
                      perkImage: et
                  },
            profiles: {
                name: 'profiles',
                title: w.intl.string(w.t.KcyDwM),
                subtitle: w.intl.string(w.t.Mt3U1d),
                description: w.intl.string(w.t.kWcDKy),
                descriptionCta: w.intl.string(w.t.jVcuVV),
                onCtaClick: eR,
                perkImage: W
            },
            remixing: eE
                ? {
                      name: 'remixing',
                      title: w.intl.string(w.t['H+v6eX']),
                      subtitle: w.intl.string(w.t.wmbOAg),
                      description: w.intl.string(w.t.gdA9FB),
                      perkImage: es,
                      pillText: w.intl.string(w.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: w.intl.string(w.t['H+v6eX']),
                      subtitle: w.intl.string(w.t.wmbOAg),
                      description: w.intl.string(w.t.fiLtJi),
                      perkImage: es,
                      pillText: w.intl.string(w.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: w.intl.string(w.t['NyDu//']),
                subtitle: w.intl.string(w.t['4pEwXF']),
                description: eO ? w.intl.format(w.t.uPiIBQ, { link: 'https://discord.com' }) : w.intl.string(w.t.jsyNHh),
                descriptionCta: w.intl.string(w.t.jVcuVV),
                onCtaClick: eO
                    ? void 0
                    : () => {
                          o.Z.open(L.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eO,
                imageOverlayText: eO ? w.intl.string(w.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: w.intl.string(w.t['NyDu//']),
                subtitle: w.intl.string(w.t['4pEwXF']),
                descriptionCta: w.intl.string(w.t.jVcuVV),
                perkImage: eh.Z,
                imageOverlayText: w.intl.string(w.t.lcYttb)
            },
            specialMemberPricing: eE
                ? {
                      name: 'specialMemberPricing',
                      title: w.intl.string(w.t['0Mykgo']),
                      subtitle: w.intl.string(w.t.opgqDQ),
                      description: w.intl.string(w.t['t+QZSU']),
                      descriptionCta: w.intl.string(w.t.dBJVnZ),
                      onCtaClick: ey,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricing',
                      title: w.intl.string(w.t['0Mykgo']),
                      subtitle: w.intl.string(w.t.opgqDQ),
                      description: w.intl.string(w.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialMemberPricingSeeAllVariant: eE
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: w.intl.string(w.t['0Mykgo']),
                      subtitle: w.intl.string(w.t.opgqDQ),
                      description: w.intl.string(w.t['t+QZSU']),
                      descriptionCta: w.intl.string(w.t.dBJVnZ),
                      onCtaClick: ey,
                      perkImage: eo
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: w.intl.string(w.t['0Mykgo']),
                      subtitle: w.intl.string(w.t.opgqDQ),
                      description: w.intl.string(w.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: eo
                  },
            specialShopPerks: eE
                ? {
                      name: 'specialShopPerks',
                      title: w.intl.string(w.t.U68LpK),
                      subtitle: w.intl.string(w.t.chRZiY),
                      description: w.intl.string(w.t['t+QZSU']),
                      descriptionCta: w.intl.string(w.t.dBJVnZ),
                      onCtaClick: ey,
                      perkImage: el
                  }
                : {
                      name: 'specialShopPerks',
                      title: w.intl.string(w.t.U68LpK),
                      subtitle: w.intl.string(w.t.chRZiY),
                      description: w.intl.string(w.t['JE/EWV']),
                      descriptionCta: w.intl.string(w.t.dBJVnZ),
                      onCtaClick: ey,
                      perkImage: el
                  },
            unlimitedSuperReactions: eE
                ? {
                      name: 'unlimitedSuperReactions',
                      title: w.intl.string(w.t.hpgmOz),
                      subtitle: w.intl.string(w.t.Hxujsr),
                      description: w.intl.string(w.t['Cn/z6+']),
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: w.intl.string(w.t.hpgmOz),
                      subtitle: w.intl.string(w.t.Hxujsr),
                      description: w.intl.string(w.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: w.intl.string(w.t['6S7kOz']),
                subtitle: w.intl.string(w.t.kN1JRE),
                description: w.intl.string(w.t.e7FKCg),
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: w.intl.string(w.t.O5R3ho),
                pillText: w.intl.string(w.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: w.intl.string(w.t.dcFfSE),
                subtitle: w.intl.string(w.t['37MFFh']),
                perkImage: F,
                description: w.intl.string(w.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: w.intl.string(w.t.dcFfSE),
                subtitle: w.intl.string(w.t['37MFFh']),
                perkImage: ep.Z,
                description: w.intl.string(w.t.T1IS4u),
                imageOverlayText: w.intl.string(w.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: w.intl.string(w.t.OuItFh),
                subtitle: w.intl.string(w.t.mPyrEx),
                perkImage: Q,
                description: w.intl.string(w.t.e7FKCg),
                descriptionCta: w.intl.string(w.t.jVcuVV),
                onCtaClick: eB
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: w.intl.string(w.t['R2IV/f']),
                subtitle: w.intl.string(w.t.R5Xag4),
                perkImage: $,
                description: w.intl.string(w.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: w.intl.string(w.t.LWsAra),
                subtitle: w.intl.string(w.t.bTzbVl),
                perkImage: (0, B.gx)(t, V, G),
                description: w.intl.string(w.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: w.intl.string(w.t.tzdIwM),
                subtitle: w.intl.string(w.t.FXlU29),
                perkImage: (0, B.gx)(t, H, ec),
                description: w.intl.string(w.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: w.intl.formatToPlainString(w.t.jqhAdH, { premiumMaxSize: i }),
                subtitle: w.intl.formatToPlainString(w.t['HI+cfn'], { premiumMaxSize: i }),
                perkImage: eg,
                description: w.intl.string(w.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: w.intl.string(w.t.RSXQYG),
                subtitle: w.intl.string(w.t.ymCPxs),
                perkImage: ed,
                description: w.intl.string(w.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: w.intl.string(w.t.XQCSrq),
                subtitle: w.intl.string(w.t.HC5wVV),
                description: w.intl.string(w.t.ee7wQ0),
                descriptionCta: eE || eC ? w.intl.string(w.t.y9TxXV) : w.intl.string(w.t.d8o6lZ),
                isPremiumGetCta: !(eE || eC),
                onCtaClick: eE || eC ? eB : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: w.intl.string(w.t.tPY4o6),
                subtitle: w.intl.string(w.t.JY0grK),
                description: w.intl.format(w.t['2JqTFx'], { helpdeskArticle: b.Z.getArticleURL(L.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: w.intl.string(w.t.JST6jo),
                isPremiumGetCta: !ef || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: w.intl.string(w.t.I9TYMj),
                subtitle: w.intl.string(w.t.HMSHeH),
                descriptionCta: eE ? w.intl.string(w.t.jVcuVV) : w.intl.string(w.t.JST6jo),
                isPremiumGetCta: !eE,
                onCtaClick: eE ? eR : void 0,
                perkImage: ea
            }
        };
    if (null != ev) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: l } = ev,
            o = (0, s.jsx)('div', {
                className: U.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    progressCircleVariation: R.Qo.AVATAR_DECO,
                    avatarDecoAssetId: Z.VA,
                    avatarDecoAssetDescription: w.intl.string(w.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eb,
                    initialPercentage: eS
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
                if (null != eA)
                    (0, h.Z)({
                        product: eA,
                        title: w.intl.string(w.t.wRAXra),
                        description: w.intl.string(w.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: y.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eN) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: l } = eN,
            c = (0, s.jsx)('div', {
                className: U.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    showAnimations: !0,
                    percentage: eb,
                    initialPercentage: eS
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
                o.Z.open(L.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: y.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    let eZ = (0, O.kG)(),
        { enabled: eL } = (0, v.Z)(),
        eM = () => {
            T.default.track(L.rMx.OPEN_MODAL, {
                type: 'Tiered Tenure Badge Details',
                location_stack: e,
                location: d.Z.PREMIUM_MARKETING_PERK_CARD,
                source: d.Z.PREMIUM_MARKETING_PERK_CARD
            }),
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await n.e('16133').then(n.bind(n, 743648));
                    return (t) => (0, s.jsx)(e, { ...t });
                });
        };
    return (
        null != eZ &&
            eL &&
            (eD.tenureBadge = {
                name: 'tenureBadge',
                title: w.intl.string(w.t.rnsqpa),
                pillText: w.intl.string(w.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, s.jsx)(P.Z, {}),
                cardVariant: y.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => eM()
            }),
        (0, N.ZP)('usePerksDiscoverabilityCard') === N.P0.SUMMER_2024 &&
            (eD.shyProject = {
                name: 'shyProject',
                title: w.intl.string(w.t['0Mykgo']),
                subtitle: w.intl.string(w.t.opgqDQ),
                description: eE ? w.intl.string(w.t['t+QZSU']) : w.intl.string(w.t['JE/EWV']),
                descriptionCta: w.intl.string(w.t.dBJVnZ),
                pillText: w.intl.string(w.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eE ? ey : void 0,
                perkImage: K,
                isPremiumGetCta: !eE
            }),
        eD
    );
};
