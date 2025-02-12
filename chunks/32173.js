n.d(t, {
    Z: () => ep,
    u: () => e_
});
var i,
    r = n(200651);
n(192379);
var a = n(399606),
    s = n(230711),
    l = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(975298),
    u = n(779618),
    m = n(832149),
    g = n(300284),
    _ = n(703656),
    p = n(547972),
    f = n(131951),
    h = n(594174),
    x = n(78839),
    E = n(424218),
    C = n(63063),
    b = n(74538),
    v = n(860489),
    T = n(314684),
    N = n(687362),
    I = n(943180),
    R = n(848572),
    j = n(229555),
    S = n(768865),
    A = n(119269),
    P = n(391110),
    Z = n(75077),
    w = n(474936),
    M = n(735825),
    B = n(981631),
    y = n(526761),
    k = n(332325),
    O = n(388032),
    L = n(832554),
    D = n(660372),
    U = n(926433),
    G = n(302036),
    V = n(994554),
    H = n(704565),
    F = n(393305),
    W = n(338879),
    z = n(609926),
    Y = n(766491),
    q = n(193943),
    Q = n(707046),
    K = n(488459),
    X = n(334347),
    J = n(132015),
    $ = n(142416),
    ee = n(607762),
    et = n(474106),
    en = n(572501),
    ei = n(755590),
    er = n(909910),
    ea = n(637810),
    es = n(570423),
    el = n(912429),
    eo = n(91394),
    ec = n(209672),
    ed = n(698173),
    eu = n(926262),
    em = n(371435),
    eg = n(83663),
    e_ = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.FREE_BOOST = 'freeBoost'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.SHY_PROJECT = 'shyProject'), (i.TENURE_BADGE = 'tenureBadge'), i);
let ep = () => {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, l.ZP)(),
        n = (0, E.BU)(w.Uq / 1024, { useKibibytes: !0 }),
        i = (0, a.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        e_ = null != i ? b.ZP.getPremiumPlanItem(i) : null,
        ep = (null != e_ ? b.ZP.getSkuIdForPlan(e_.planId) : null) === w.Si.TIER_2,
        ef = h.default.getCurrentUser(),
        eh = (0, b.I5)(ef, w.p9.TIER_2),
        ex = (0, b.I5)(ef, w.p9.TIER_0),
        eE = (0, T.bq)({ showAnimations: !0 }),
        eC = null != eE ? eE.initialPercentage : void 0,
        eb = null != eE ? eE.percentage : void 0,
        ev = (0, u.Z)(f.Z),
        eT = (0, N.ZP)(),
        eN = (0, N.aJ)(),
        eI = (0, T.Kb)(M.qY),
        { fractionalState: eR } = (0, d.Z)(),
        ej = eR === w.a$.FP_ONLY,
        eS = (0, g.Z)({
            scrollPosition: y.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eA = () => {
            s.Z.open(B.oAB.VOICE, y.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eP = () => {
            (0, _.uL)(B.Z5c.COLLECTIBLES_SHOP);
        },
        eZ = () => {
            s.Z.open(B.oAB.APPEARANCE, null, { scrollPosition: y.h1.CUSTOM_APP_ICONS });
        },
        ew = {
            clientThemes: {
                name: 'clientThemes',
                title: O.intl.string(O.t.kWM48P),
                subtitle: O.intl.string(O.t.CjRASE),
                description: O.intl.string(O.t.jBTTws),
                descriptionCta: O.intl.string(O.t.jVcuVV),
                onCtaClick: () => {
                    s.Z.open(B.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: H
            },
            clips: eh
                ? {
                      name: 'clips',
                      title: O.intl.string(O.t.z2jK6e),
                      subtitle: O.intl.string(O.t['hxy0/f']),
                      description: O.intl.string(O.t.Z6v86e),
                      descriptionCta: ev ? O.intl.string(O.t.jVcuVV) : O.intl.string(O.t.hvVgAQ),
                      pillText: O.intl.string(O.t.EYxi0t),
                      onCtaClick: ev
                          ? () => {
                                (0, p.Z)(k.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(C.Z.getArticleURL(B.BhN.CLIPS), '_blank');
                            },
                      perkImage: Y
                  }
                : {
                      name: 'clips',
                      title: O.intl.string(O.t.z2jK6e),
                      subtitle: O.intl.string(O.t['hxy0/f']),
                      description: O.intl.string(O.t.X9IeNz),
                      pillText: O.intl.string(O.t.EYxi0t),
                      perkImage: Y
                  },
            earlyAccess: eh
                ? {
                      name: 'earlyAccess',
                      title: O.intl.string(O.t.UkLVeH),
                      subtitle: O.intl.string(O.t.xf9ePj),
                      description: O.intl.string(O.t['+r4vdn']),
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: O.intl.string(O.t.UkLVeH),
                      subtitle: O.intl.string(O.t.xf9ePj),
                      description: O.intl.string(O.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: O.intl.string(O.t.UkLVeH),
                      subtitle: O.intl.string(O.t.xf9ePj),
                      description: O.intl.string(O.t['+r4vdn']),
                      perkImage: K
                  }
                : {
                      name: 'earlyAccess',
                      title: O.intl.string(O.t.UkLVeH),
                      subtitle: O.intl.string(O.t.xf9ePj),
                      description: O.intl.string(O.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: K
                  },
            entranceSounds: eh
                ? {
                      name: 'entranceSounds',
                      title: O.intl.string(O.t['f4M+Hx']),
                      subtitle: O.intl.string(O.t['7ZCYvL']),
                      description: O.intl.string(O.t.mUT8bG),
                      descriptionCta: O.intl.string(O.t.jVcuVV),
                      onCtaClick: eA,
                      perkImage: J
                  }
                : {
                      name: 'entranceSounds',
                      title: O.intl.string(O.t['f4M+Hx']),
                      subtitle: O.intl.string(O.t['7ZCYvL']),
                      description: O.intl.string(O.t['3smf/f']),
                      perkImage: J
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: O.intl.string(O.t['f4M+Hx']),
                      subtitle: O.intl.string(O.t['7ZCYvL']),
                      description: O.intl.string(O.t.mUT8bG),
                      descriptionCta: O.intl.string(O.t.jVcuVV),
                      onCtaClick: eA,
                      perkImage: $
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: O.intl.string(O.t['f4M+Hx']),
                      subtitle: O.intl.string(O.t['7ZCYvL']),
                      description: O.intl.string(O.t['3smf/f']),
                      perkImage: $
                  },
            profiles: {
                name: 'profiles',
                title: O.intl.string(O.t.KcyDwM),
                subtitle: O.intl.string(O.t.Mt3U1d),
                description: O.intl.string(O.t.kWcDKy),
                descriptionCta: O.intl.string(O.t.jVcuVV),
                onCtaClick: eS,
                perkImage: F
            },
            remixing: eh
                ? {
                      name: 'remixing',
                      title: O.intl.string(O.t['H+v6eX']),
                      subtitle: O.intl.string(O.t.wmbOAg),
                      description: O.intl.string(O.t.gdA9FB),
                      perkImage: ei,
                      pillText: O.intl.string(O.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: O.intl.string(O.t['H+v6eX']),
                      subtitle: O.intl.string(O.t.wmbOAg),
                      description: O.intl.string(O.t.fiLtJi),
                      perkImage: ei,
                      pillText: O.intl.string(O.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: O.intl.string(O.t['NyDu//']),
                subtitle: O.intl.string(O.t['4pEwXF']),
                description: ej ? O.intl.format(O.t.uPiIBQ, { link: 'https://discord.com' }) : O.intl.string(O.t.jsyNHh),
                descriptionCta: O.intl.string(O.t.jVcuVV),
                onCtaClick: ej
                    ? void 0
                    : () => {
                          s.Z.open(B.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: W,
                hideOnNarrowScreen: !ej,
                imageOverlayText: ej ? O.intl.string(O.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: O.intl.string(O.t['NyDu//']),
                subtitle: O.intl.string(O.t['4pEwXF']),
                descriptionCta: O.intl.string(O.t.jVcuVV),
                perkImage: em.Z,
                imageOverlayText: O.intl.string(O.t.lcYttb)
            },
            specialMemberPricing: eh
                ? {
                      name: 'specialMemberPricing',
                      title: O.intl.string(O.t['0Mykgo']),
                      subtitle: O.intl.string(O.t.opgqDQ),
                      description: O.intl.string(O.t['t+QZSU']),
                      descriptionCta: O.intl.string(O.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: ea
                  }
                : {
                      name: 'specialMemberPricing',
                      title: O.intl.string(O.t['0Mykgo']),
                      subtitle: O.intl.string(O.t.opgqDQ),
                      description: O.intl.string(O.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ea
                  },
            specialMemberPricingSeeAllVariant: eh
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: O.intl.string(O.t['0Mykgo']),
                      subtitle: O.intl.string(O.t.opgqDQ),
                      description: O.intl.string(O.t['t+QZSU']),
                      descriptionCta: O.intl.string(O.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: es
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: O.intl.string(O.t['0Mykgo']),
                      subtitle: O.intl.string(O.t.opgqDQ),
                      description: O.intl.string(O.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: es
                  },
            specialShopPerks: eh
                ? {
                      name: 'specialShopPerks',
                      title: O.intl.string(O.t.U68LpK),
                      subtitle: O.intl.string(O.t.chRZiY),
                      description: O.intl.string(O.t['t+QZSU']),
                      descriptionCta: O.intl.string(O.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: ea
                  }
                : {
                      name: 'specialShopPerks',
                      title: O.intl.string(O.t.U68LpK),
                      subtitle: O.intl.string(O.t.chRZiY),
                      description: O.intl.string(O.t['JE/EWV']),
                      descriptionCta: O.intl.string(O.t.dBJVnZ),
                      onCtaClick: eP,
                      perkImage: ea
                  },
            unlimitedSuperReactions: eh
                ? {
                      name: 'unlimitedSuperReactions',
                      title: O.intl.string(O.t.hpgmOz),
                      subtitle: O.intl.string(O.t.Hxujsr),
                      description: O.intl.string(O.t['Cn/z6+']),
                      perkImage: ed,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: O.intl.string(O.t.hpgmOz),
                      subtitle: O.intl.string(O.t.Hxujsr),
                      description: O.intl.string(O.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ed,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: O.intl.string(O.t['6S7kOz']),
                subtitle: O.intl.string(O.t.kN1JRE),
                description: O.intl.string(O.t.e7FKCg),
                perkImage: ec
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: O.intl.string(O.t.O5R3ho),
                pillText: O.intl.string(O.t.yhEY5O),
                backgroundImage: et
            },
            badge: {
                name: 'badge',
                title: O.intl.string(O.t.dcFfSE),
                subtitle: O.intl.string(O.t['37MFFh']),
                perkImage: D,
                description: O.intl.string(O.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: O.intl.string(O.t.dcFfSE),
                subtitle: O.intl.string(O.t['37MFFh']),
                perkImage: eg.Z,
                description: O.intl.string(O.t.T1IS4u),
                imageOverlayText: O.intl.string(O.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: O.intl.string(O.t.OuItFh),
                subtitle: O.intl.string(O.t.mPyrEx),
                perkImage: q,
                description: O.intl.string(O.t.e7FKCg),
                descriptionCta: O.intl.string(O.t.jVcuVV),
                onCtaClick: eZ
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: O.intl.string(O.t['R2IV/f']),
                subtitle: O.intl.string(O.t.R5Xag4),
                perkImage: X,
                description: O.intl.string(O.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: O.intl.string(O.t.LWsAra),
                subtitle: O.intl.string(O.t.bTzbVl),
                perkImage: (0, Z.gx)(t, U, G),
                description: O.intl.string(O.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: O.intl.string(O.t.tzdIwM),
                subtitle: O.intl.string(O.t.FXlU29),
                perkImage: (0, Z.gx)(t, V, el),
                description: O.intl.string(O.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: O.intl.formatToPlainString(O.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: O.intl.formatToPlainString(O.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: eu,
                description: O.intl.string(O.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: O.intl.string(O.t.RSXQYG),
                subtitle: O.intl.string(O.t.ymCPxs),
                perkImage: eo,
                description: O.intl.string(O.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: O.intl.string(O.t.XQCSrq),
                subtitle: O.intl.string(O.t.HC5wVV),
                description: O.intl.string(O.t.ee7wQ0),
                descriptionCta: eh || ex ? O.intl.string(O.t.y9TxXV) : O.intl.string(O.t.d8o6lZ),
                isPremiumGetCta: !(eh || ex),
                onCtaClick: eh || ex ? eZ : void 0,
                perkImage: ee
            },
            referralProgram: {
                name: 'referralProgram',
                title: O.intl.string(O.t.tPY4o6),
                subtitle: O.intl.string(O.t.JY0grK),
                description: O.intl.format(O.t['2JqTFx'], { helpdeskArticle: C.Z.getArticleURL(B.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: O.intl.string(O.t.JST6jo),
                isPremiumGetCta: !ep || void 0,
                perkImage: en
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: O.intl.string(O.t.I9TYMj),
                subtitle: O.intl.string(O.t.HMSHeH),
                descriptionCta: eh ? O.intl.string(O.t.jVcuVV) : O.intl.string(O.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? eS : void 0,
                perkImage: er
            }
        };
    if (null != eN) {
        let { title: t, subtitle: n, description: i, pillText: a, ctaDescription: s, dismissibleContentType: l } = eN,
            o = (0, r.jsx)('div', {
                className: L.cardComponent,
                children: (0, r.jsx)(A.ZP, {
                    progressCircleVariation: A.Qo.AVATAR_DECO,
                    avatarDecoAssetId: M.VA,
                    avatarDecoAssetDescription: O.intl.string(O.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eb,
                    initialPercentage: eC
                })
            });
        ew.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: o,
            descriptionCta: s,
            onCtaClick: () => {
                null != eI &&
                    (0, m.Z)({
                        product: eI,
                        overrideTitle: O.intl.string(O.t.wRAXra),
                        overrideDescription: O.intl.string(O.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: P.zW.REWARD,
            pillText: a,
            dismissibleContentType: l
        };
    }
    if (null != eT) {
        let { title: t, subtitle: n, description: i, pillText: a, ctaDescription: l, dismissibleContentType: o } = eT,
            c = (0, r.jsx)('div', {
                className: L.cardComponent,
                children: (0, r.jsx)(A.ZP, {
                    showAnimations: !0,
                    percentage: eb,
                    initialPercentage: eC
                })
            });
        ew.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: c,
            descriptionCta: l,
            onCtaClick: () => {
                s.Z.open(B.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: a,
            dismissibleContentType: o
        };
    }
    let eM = (0, R.Rw)(),
        { enabled: eB, isBadgeVersion2: ey } = (0, I.D)();
    return (
        ((!ey && eB && null != eM && eM.status !== R.Vq.UPCOMING) || (ey && eB)) &&
            (ew.tenureBadge = {
                name: 'tenureBadge',
                title: O.intl.string(O.t.rnsqpa),
                pillText: O.intl.string(O.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(j.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, S.k)({ analyticsLocations: e })
            }),
        (0, v.ZP)('usePerksDiscoverabilityCard') === v.P0.SUMMER_2024 &&
            (ew.shyProject = {
                name: 'shyProject',
                title: O.intl.string(O.t['0Mykgo']),
                subtitle: O.intl.string(O.t.opgqDQ),
                description: eh ? O.intl.string(O.t['t+QZSU']) : O.intl.string(O.t['JE/EWV']),
                descriptionCta: O.intl.string(O.t.dBJVnZ),
                pillText: O.intl.string(O.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eh ? eP : void 0,
                perkImage: z,
                isPremiumGetCta: !eh
            }),
        ew
    );
};
