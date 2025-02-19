n.d(t, {
    Z: () => ex,
    u: () => eN
});
var i,
    s = n(200651);
n(192379);
var r = n(399606),
    a = n(230711),
    l = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(975298),
    u = n(779618),
    m = n(832149),
    h = n(300284),
    g = n(703656),
    N = n(547972),
    x = n(131951),
    p = n(594174),
    _ = n(78839),
    E = n(424218),
    C = n(63063),
    f = n(74538),
    T = n(695349),
    S = n(860489),
    I = n(314684),
    b = n(687362),
    v = n(943180),
    j = n(848572),
    A = n(229555),
    O = n(768865),
    R = n(119269),
    P = n(391110),
    Z = n(75077),
    D = n(474936),
    y = n(735825),
    W = n(981631),
    k = n(526761),
    L = n(332325),
    B = n(388032),
    M = n(510040),
    w = n(660372),
    U = n(926433),
    V = n(302036),
    G = n(994554),
    F = n(704565),
    H = n(393305),
    z = n(338879),
    Y = n(609926),
    K = n(766491),
    q = n(193943),
    X = n(707046),
    J = n(488459),
    Q = n(334347),
    $ = n(132015),
    ee = n(142416),
    et = n(607762),
    en = n(474106),
    ei = n(572501),
    es = n(755590),
    er = n(909910),
    ea = n(637810),
    el = n(570423),
    eo = n(912429),
    ec = n(91394),
    ed = n(209672),
    eu = n(698173),
    em = n(926262),
    eh = n(371435),
    eg = n(83663),
    eN = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge'), i);
let ex = () => {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, l.ZP)(),
        n = (0, E.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        i = (0, r.e7)([_.ZP], () => _.ZP.getPremiumTypeSubscription()),
        eN = null != i ? f.ZP.getPremiumPlanItem(i) : null,
        ex = (null != eN ? f.ZP.getSkuIdForPlan(eN.planId) : null) === D.Si.TIER_2,
        ep = p.default.getCurrentUser(),
        e_ = (0, f.I5)(ep, D.p9.TIER_2),
        eE = (0, f.I5)(ep, D.p9.TIER_0),
        eC = (0, I.bq)({ showAnimations: !0 }),
        ef = null != eC ? eC.initialPercentage : void 0,
        eT = null != eC ? eC.percentage : void 0,
        eS = (0, u.Z)(x.Z),
        eI = (0, b.ZP)(),
        eb = (0, b.aJ)(),
        ev = (0, I.Kb)(y.qY),
        { fractionalState: ej } = (0, d.Z)(),
        eA = (0, T.W)(),
        eO = ej === D.a$.FP_ONLY,
        eR = (0, h.Z)({
            scrollPosition: k.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eP = () => {
            a.Z.open(W.oAB.VOICE, k.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eZ = () => {
            (0, g.uL)(W.Z5c.COLLECTIBLES_SHOP);
        },
        eD = () => {
            a.Z.open(W.oAB.APPEARANCE, null, { scrollPosition: k.h1.CUSTOM_APP_ICONS });
        },
        ey = {
            clientThemes: {
                name: 'clientThemes',
                title: B.NW.string(B.t.kWM48P),
                subtitle: B.NW.string(B.t.CjRASE),
                description: B.NW.string(B.t.jBTTws),
                descriptionCta: B.NW.string(B.t.jVcuVV),
                onCtaClick: () => {
                    a.Z.open(W.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: e_
                ? {
                      name: 'clips',
                      title: B.NW.string(B.t.z2jK6e),
                      subtitle: B.NW.string(B.t['hxy0/f']),
                      description: B.NW.string(B.t.Z6v86e),
                      descriptionCta: eS ? B.NW.string(B.t.jVcuVV) : B.NW.string(B.t.hvVgAQ),
                      pillText: B.NW.string(B.t.EYxi0t),
                      onCtaClick: eS
                          ? () => {
                                (0, N.Z)(L.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(W.BhN.CLIPS), '_blank');
                            },
                      perkImage: K
                  }
                : {
                      name: 'clips',
                      title: B.NW.string(B.t.z2jK6e),
                      subtitle: B.NW.string(B.t['hxy0/f']),
                      description: B.NW.string(B.t.X9IeNz),
                      pillText: B.NW.string(B.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: e_
                ? {
                      name: 'earlyAccess',
                      title: B.NW.string(B.t.UkLVeH),
                      subtitle: B.NW.string(B.t.xf9ePj),
                      description: B.NW.string(B.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: B.NW.string(B.t.UkLVeH),
                      subtitle: B.NW.string(B.t.xf9ePj),
                      description: B.NW.string(B.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: e_
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: B.NW.string(B.t.UkLVeH),
                      subtitle: B.NW.string(B.t.xf9ePj),
                      description: B.NW.string(B.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: B.NW.string(B.t.UkLVeH),
                      subtitle: B.NW.string(B.t.xf9ePj),
                      description: B.NW.string(B.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            entranceSounds: e_
                ? {
                      name: 'entranceSounds',
                      title: B.NW.string(B.t['f4M+Hx']),
                      subtitle: B.NW.string(B.t['7ZCYvL']),
                      description: B.NW.string(B.t.mUT8bG),
                      descriptionCta: B.NW.string(B.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: B.NW.string(B.t['f4M+Hx']),
                      subtitle: B.NW.string(B.t['7ZCYvL']),
                      description: B.NW.string(B.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: e_
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.NW.string(B.t['f4M+Hx']),
                      subtitle: B.NW.string(B.t['7ZCYvL']),
                      description: B.NW.string(B.t.mUT8bG),
                      descriptionCta: B.NW.string(B.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: B.NW.string(B.t['f4M+Hx']),
                      subtitle: B.NW.string(B.t['7ZCYvL']),
                      description: B.NW.string(B.t['3smf/f']),
                      perkImage: ee
                  },
            profiles: {
                name: 'profiles',
                title: B.NW.string(B.t.KcyDwM),
                subtitle: B.NW.string(B.t.Mt3U1d),
                description: B.NW.string(B.t.kWcDKy),
                descriptionCta: B.NW.string(B.t.jVcuVV),
                onCtaClick: eR,
                perkImage: H
            },
            remixing: e_
                ? {
                      name: 'remixing',
                      title: B.NW.string(B.t['H+v6eX']),
                      subtitle: B.NW.string(B.t.wmbOAg),
                      description: B.NW.string(B.t.gdA9FB),
                      perkImage: es,
                      pillText: B.NW.string(B.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: B.NW.string(B.t['H+v6eX']),
                      subtitle: B.NW.string(B.t.wmbOAg),
                      description: B.NW.string(B.t.fiLtJi),
                      perkImage: es,
                      pillText: B.NW.string(B.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: B.NW.string(B.t['NyDu//']),
                subtitle: B.NW.string(B.t['4pEwXF']),
                description: eO ? B.NW.format(B.t.uPiIBQ, { link: 'https://discord.com' }) : B.NW.string(B.t.jsyNHh),
                descriptionCta: B.NW.string(B.t.jVcuVV),
                onCtaClick: eO
                    ? void 0
                    : () => {
                          a.Z.open(W.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !eO,
                imageOverlayText: eO ? B.NW.string(B.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: B.NW.string(B.t['NyDu//']),
                subtitle: B.NW.string(B.t['4pEwXF']),
                descriptionCta: B.NW.string(B.t.jVcuVV),
                perkImage: eh.Z,
                imageOverlayText: B.NW.string(B.t.lcYttb)
            },
            specialMemberPricing: e_
                ? {
                      name: 'specialMemberPricing',
                      title: B.NW.string(B.t['0Mykgo']),
                      subtitle: B.NW.string(B.t.opgqDQ),
                      description: B.NW.string(B.t['t+QZSU']),
                      descriptionCta: B.NW.string(B.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: ea
                  }
                : {
                      name: 'specialMemberPricing',
                      title: B.NW.string(B.t['0Mykgo']),
                      subtitle: B.NW.string(B.t.opgqDQ),
                      description: B.NW.string(B.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ea
                  },
            specialMemberPricingSeeAllVariant: e_
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.NW.string(B.t['0Mykgo']),
                      subtitle: B.NW.string(B.t.opgqDQ),
                      description: B.NW.string(B.t['t+QZSU']),
                      descriptionCta: B.NW.string(B.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: B.NW.string(B.t['0Mykgo']),
                      subtitle: B.NW.string(B.t.opgqDQ),
                      description: B.NW.string(B.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: e_
                ? {
                      name: 'specialShopPerks',
                      title: B.NW.string(B.t.U68LpK),
                      subtitle: B.NW.string(B.t.chRZiY),
                      description: B.NW.string(B.t['t+QZSU']),
                      descriptionCta: B.NW.string(B.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: ea
                  }
                : {
                      name: 'specialShopPerks',
                      title: B.NW.string(B.t.U68LpK),
                      subtitle: B.NW.string(B.t.chRZiY),
                      description: B.NW.string(B.t['JE/EWV']),
                      descriptionCta: B.NW.string(B.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: ea
                  },
            unlimitedSuperReactions: e_
                ? {
                      name: 'unlimitedSuperReactions',
                      title: B.NW.string(B.t.hpgmOz),
                      subtitle: B.NW.string(B.t.Hxujsr),
                      description: B.NW.string(B.t['Cn/z6+']),
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: B.NW.string(B.t.hpgmOz),
                      subtitle: B.NW.string(B.t.Hxujsr),
                      description: B.NW.string(B.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: B.NW.string(B.t['6S7kOz']),
                subtitle: B.NW.string(B.t.kN1JRE),
                description: B.NW.string(B.t.e7FKCg),
                perkImage: ed
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: B.NW.string(B.t.O5R3ho),
                pillText: B.NW.string(B.t.yhEY5O),
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: B.NW.string(B.t.dcFfSE),
                subtitle: B.NW.string(B.t['37MFFh']),
                perkImage: w,
                description: B.NW.string(B.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: B.NW.string(B.t.dcFfSE),
                subtitle: B.NW.string(B.t['37MFFh']),
                perkImage: eg.Z,
                description: B.NW.string(B.t.T1IS4u),
                imageOverlayText: B.NW.string(B.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: B.NW.string(B.t.OuItFh),
                subtitle: B.NW.string(B.t.mPyrEx),
                perkImage: q,
                description: B.NW.string(B.t.e7FKCg),
                descriptionCta: B.NW.string(B.t.jVcuVV),
                onCtaClick: eD
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: B.NW.string(B.t['R2IV/f']),
                subtitle: B.NW.string(B.t.R5Xag4),
                perkImage: Q,
                description: B.NW.string(B.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: B.NW.string(B.t.LWsAra),
                subtitle: B.NW.string(B.t.bTzbVl),
                perkImage: (0, Z.gx)(t, U, V),
                description: B.NW.string(B.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: B.NW.string(B.t.tzdIwM),
                subtitle: B.NW.string(B.t.FXlU29),
                perkImage: (0, Z.gx)(t, G, eo),
                description: B.NW.string(B.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: B.NW.formatToPlainString(B.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: B.NW.formatToPlainString(B.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: em,
                description: B.NW.string(B.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: B.NW.string(B.t.RSXQYG),
                subtitle: B.NW.string(B.t.ymCPxs),
                perkImage: ec,
                description: B.NW.string(B.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: B.NW.string(B.t.XQCSrq),
                subtitle: B.NW.string(B.t.HC5wVV),
                description: B.NW.string(B.t.ee7wQ0),
                descriptionCta: e_ || eE ? B.NW.string(B.t.y9TxXV) : B.NW.string(B.t.d8o6lZ),
                isPremiumGetCta: !(e_ || eE),
                onCtaClick: e_ || eE ? eD : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: B.NW.string(B.t.tPY4o6),
                subtitle: B.NW.string(B.t.JY0grK),
                description: B.NW.format(B.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(W.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: B.NW.string(B.t.JST6jo),
                isPremiumGetCta: !ex || void 0,
                perkImage: ei
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: B.NW.string(B.t.I9TYMj),
                subtitle: B.NW.string(B.t.HMSHeH),
                descriptionCta: e_ ? B.NW.string(B.t.jVcuVV) : B.NW.string(B.t.JST6jo),
                isPremiumGetCta: !e_,
                onCtaClick: e_ ? eR : void 0,
                perkImage: er
            }
        };
    if (null != eb) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: a, dismissibleContentType: l } = eb,
            o = (0, s.jsx)('div', {
                className: M.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    progressCircleVariation: R.Qo.AVATAR_DECO,
                    avatarDecoAssetId: y.VA,
                    avatarDecoAssetDescription: B.NW.string(B.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ef
                })
            });
        ey.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != ev &&
                    (0, m.Z)({
                        product: ev,
                        overrideTitle: B.NW.string(B.t.wRAXra),
                        overrideDescription: B.NW.string(B.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: l
        };
    }
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: r, ctaDescription: l, dismissibleContentType: o } = eI,
            c = (0, s.jsx)('div', {
                className: M.cardComponent,
                children: (0, s.jsx)(R.ZP, {
                    showAnimations: !0,
                    percentage: eT,
                    initialPercentage: ef
                })
            });
        ey.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: l,
            onCtaClick: () => {
                a.Z.open(W.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: r,
            dismissibleContentType: o
        };
    }
    let eW = (0, j.Rw)(),
        { enabled: ek, isBadgeVersion2: eL } = (0, v.D)();
    return (
        ((!eL && ek && null != eW && eW.status !== j.Vq.UPCOMING) || (eL && ek)) &&
            !eA &&
            (ey.tenureBadge = {
                name: 'tenureBadge',
                title: B.NW.string(B.t.rnsqpa),
                pillText: B.NW.string(B.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, s.jsx)(A.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, O.k)({ analyticsLocations: e })
            }),
        (0, S.ZP)('usePerksDiscoverabilityCard') === S.P0.SUMMER_2024 &&
            (ey.shyProject = {
                name: 'shyProject',
                title: B.NW.string(B.t['0Mykgo']),
                subtitle: B.NW.string(B.t.opgqDQ),
                description: e_ ? B.NW.string(B.t['t+QZSU']) : B.NW.string(B.t['JE/EWV']),
                descriptionCta: B.NW.string(B.t.dBJVnZ),
                pillText: B.NW.string(B.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: e_ ? eZ : void 0,
                perkImage: Y,
                isPremiumGetCta: !e_
            }),
        ey
    );
};
