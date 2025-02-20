n.d(t, {
    Z: () => ef,
    u: () => eh
}),
    n(266796);
var r,
    i = n(200651);
n(192379);
var s = n(399606),
    a = n(230711),
    l = n(410030),
    o = n(100527),
    c = n(906732),
    d = n(975298),
    u = n(779618),
    m = n(832149),
    g = n(300284),
    p = n(703656),
    h = n(547972),
    f = n(131951),
    b = n(594174),
    N = n(78839),
    x = n(424218),
    _ = n(63063),
    E = n(74538),
    j = n(695349),
    C = n(860489),
    O = n(314684),
    v = n(687362),
    S = n(943180),
    T = n(848572),
    I = n(229555),
    y = n(768865),
    A = n(119269),
    P = n(391110),
    R = n(75077),
    D = n(474936),
    Z = n(735825),
    w = n(981631),
    k = n(526761),
    W = n(332325),
    L = n(388032),
    B = n(596470),
    M = n(660372),
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
    er = n(572501),
    ei = n(755590),
    es = n(909910),
    ea = n(637810),
    el = n(570423),
    eo = n(912429),
    ec = n(91394),
    ed = n(209672),
    eu = n(698173),
    em = n(926262),
    eg = n(371435),
    ep = n(83663),
    eh = (((r = {}).CLIENT_THEMES = 'clientThemes'), (r.CLIPS = 'clips'), (r.EARLY_ACCESS = 'earlyAccess'), (r.ENTRANCE_SOUNDS = 'entranceSounds'), (r.PROFILES = 'profiles'), (r.REMIXING = 'remixing'), (r.SERVER_BOOSTS = 'serverBoosts'), (r.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (r.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (r.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (r.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (r.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (r.SUPER_REACTIONS = 'superReactions'), (r.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (r.CUSTOM_APP_ICONS = 'customAppIcons'), (r.MORE_EMOJI_POWER = 'moreEmojiPower'), (r.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (r.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (r.LARGE_UPLOADS = 'largeUploads'), (r.HD_VIDEO = 'hdVideo'), (r.BADGE = 'badge'), (r.GREY_BADGE = 'greyBadge'), (r.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (r.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (r.FREE_BOOST = 'freeBoost'), (r.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (r.REFERRAL_PROGRAM = 'referralProgram'), (r.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (r.SERVER_PROFILES = 'serverProfiles'), (r.SHY_PROJECT = 'shyProject'), (r.TENURE_BADGE = 'tenureBadge'), r);
let ef = () => {
    let { analyticsLocations: e } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, l.ZP)(),
        n = (0, x.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        r = (0, s.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()),
        eh = null != r ? E.ZP.getPremiumPlanItem(r) : null,
        ef = (null != eh ? E.ZP.getSkuIdForPlan(eh.planId) : null) === D.Si.TIER_2,
        eb = b.default.getCurrentUser(),
        eN = (0, E.I5)(eb, D.p9.TIER_2),
        ex = (0, E.I5)(eb, D.p9.TIER_0),
        e_ = (0, O.bq)({ showAnimations: !0 }),
        eE = null != e_ ? e_.initialPercentage : void 0,
        ej = null != e_ ? e_.percentage : void 0,
        eC = (0, u.Z)(f.Z),
        eO = (0, v.ZP)(),
        ev = (0, v.aJ)(),
        eS = (0, O.Kb)(Z.qY),
        { fractionalState: eT } = (0, d.Z)(),
        eI = (0, j.W)(),
        ey = eT === D.a$.FP_ONLY,
        eA = (0, g.Z)({
            scrollPosition: k.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eP = () => {
            a.Z.open(w.oAB.VOICE, k.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eR = () => {
            (0, p.uL)(w.Z5c.COLLECTIBLES_SHOP);
        },
        eD = () => {
            a.Z.open(w.oAB.APPEARANCE, null, { scrollPosition: k.h1.CUSTOM_APP_ICONS });
        },
        eZ = {
            clientThemes: {
                name: 'clientThemes',
                title: L.NW.string(L.t.kWM48P),
                subtitle: L.NW.string(L.t.CjRASE),
                description: L.NW.string(L.t.jBTTws),
                descriptionCta: L.NW.string(L.t.jVcuVV),
                onCtaClick: () => {
                    a.Z.open(w.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: F
            },
            clips: eN
                ? {
                      name: 'clips',
                      title: L.NW.string(L.t.z2jK6e),
                      subtitle: L.NW.string(L.t['hxy0/f']),
                      description: L.NW.string(L.t.Z6v86e),
                      descriptionCta: eC ? L.NW.string(L.t.jVcuVV) : L.NW.string(L.t.hvVgAQ),
                      pillText: L.NW.string(L.t.EYxi0t),
                      onCtaClick: eC
                          ? () => {
                                (0, h.Z)(W.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(_.Z.getArticleURL(w.BhN.CLIPS), '_blank');
                            },
                      perkImage: K
                  }
                : {
                      name: 'clips',
                      title: L.NW.string(L.t.z2jK6e),
                      subtitle: L.NW.string(L.t['hxy0/f']),
                      description: L.NW.string(L.t.X9IeNz),
                      pillText: L.NW.string(L.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: eN
                ? {
                      name: 'earlyAccess',
                      title: L.NW.string(L.t.UkLVeH),
                      subtitle: L.NW.string(L.t.xf9ePj),
                      description: L.NW.string(L.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: L.NW.string(L.t.UkLVeH),
                      subtitle: L.NW.string(L.t.xf9ePj),
                      description: L.NW.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: eN
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: L.NW.string(L.t.UkLVeH),
                      subtitle: L.NW.string(L.t.xf9ePj),
                      description: L.NW.string(L.t['+r4vdn']),
                      perkImage: J
                  }
                : {
                      name: 'earlyAccess',
                      title: L.NW.string(L.t.UkLVeH),
                      subtitle: L.NW.string(L.t.xf9ePj),
                      description: L.NW.string(L.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: J
                  },
            entranceSounds: eN
                ? {
                      name: 'entranceSounds',
                      title: L.NW.string(L.t['f4M+Hx']),
                      subtitle: L.NW.string(L.t['7ZCYvL']),
                      description: L.NW.string(L.t.mUT8bG),
                      descriptionCta: L.NW.string(L.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: L.NW.string(L.t['f4M+Hx']),
                      subtitle: L.NW.string(L.t['7ZCYvL']),
                      description: L.NW.string(L.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: eN
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.NW.string(L.t['f4M+Hx']),
                      subtitle: L.NW.string(L.t['7ZCYvL']),
                      description: L.NW.string(L.t.mUT8bG),
                      descriptionCta: L.NW.string(L.t.jVcuVV),
                      onCtaClick: eP,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: L.NW.string(L.t['f4M+Hx']),
                      subtitle: L.NW.string(L.t['7ZCYvL']),
                      description: L.NW.string(L.t['3smf/f']),
                      perkImage: ee
                  },
            profiles: {
                name: 'profiles',
                title: L.NW.string(L.t.KcyDwM),
                subtitle: L.NW.string(L.t.Mt3U1d),
                description: L.NW.string(L.t.kWcDKy),
                descriptionCta: L.NW.string(L.t.jVcuVV),
                onCtaClick: eA,
                perkImage: H
            },
            remixing: eN
                ? {
                      name: 'remixing',
                      title: L.NW.string(L.t['H+v6eX']),
                      subtitle: L.NW.string(L.t.wmbOAg),
                      description: L.NW.string(L.t.gdA9FB),
                      perkImage: ei,
                      pillText: L.NW.string(L.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: L.NW.string(L.t['H+v6eX']),
                      subtitle: L.NW.string(L.t.wmbOAg),
                      description: L.NW.string(L.t.fiLtJi),
                      perkImage: ei,
                      pillText: L.NW.string(L.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: L.NW.string(L.t['NyDu//']),
                subtitle: L.NW.string(L.t['4pEwXF']),
                description: ey ? L.NW.format(L.t.uPiIBQ, { link: 'https://discord.com' }) : L.NW.string(L.t.jsyNHh),
                descriptionCta: L.NW.string(L.t.jVcuVV),
                onCtaClick: ey
                    ? void 0
                    : () => {
                          a.Z.open(w.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: z,
                hideOnNarrowScreen: !ey,
                imageOverlayText: ey ? L.NW.string(L.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: L.NW.string(L.t['NyDu//']),
                subtitle: L.NW.string(L.t['4pEwXF']),
                descriptionCta: L.NW.string(L.t.jVcuVV),
                perkImage: eg.Z,
                imageOverlayText: L.NW.string(L.t.lcYttb)
            },
            specialMemberPricing: eN
                ? {
                      name: 'specialMemberPricing',
                      title: L.NW.string(L.t['0Mykgo']),
                      subtitle: L.NW.string(L.t.opgqDQ),
                      description: L.NW.string(L.t['t+QZSU']),
                      descriptionCta: L.NW.string(L.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  }
                : {
                      name: 'specialMemberPricing',
                      title: L.NW.string(L.t['0Mykgo']),
                      subtitle: L.NW.string(L.t.opgqDQ),
                      description: L.NW.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: ea
                  },
            specialMemberPricingSeeAllVariant: eN
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.NW.string(L.t['0Mykgo']),
                      subtitle: L.NW.string(L.t.opgqDQ),
                      description: L.NW.string(L.t['t+QZSU']),
                      descriptionCta: L.NW.string(L.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: el
                  }
                : {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: L.NW.string(L.t['0Mykgo']),
                      subtitle: L.NW.string(L.t.opgqDQ),
                      description: L.NW.string(L.t['JE/EWV']),
                      isPremiumGetCta: !0,
                      perkImage: el
                  },
            specialShopPerks: eN
                ? {
                      name: 'specialShopPerks',
                      title: L.NW.string(L.t.U68LpK),
                      subtitle: L.NW.string(L.t.chRZiY),
                      description: L.NW.string(L.t['t+QZSU']),
                      descriptionCta: L.NW.string(L.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  }
                : {
                      name: 'specialShopPerks',
                      title: L.NW.string(L.t.U68LpK),
                      subtitle: L.NW.string(L.t.chRZiY),
                      description: L.NW.string(L.t['JE/EWV']),
                      descriptionCta: L.NW.string(L.t.dBJVnZ),
                      onCtaClick: eR,
                      perkImage: ea
                  },
            unlimitedSuperReactions: eN
                ? {
                      name: 'unlimitedSuperReactions',
                      title: L.NW.string(L.t.hpgmOz),
                      subtitle: L.NW.string(L.t.Hxujsr),
                      description: L.NW.string(L.t['Cn/z6+']),
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: L.NW.string(L.t.hpgmOz),
                      subtitle: L.NW.string(L.t.Hxujsr),
                      description: L.NW.string(L.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: eu,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: L.NW.string(L.t['6S7kOz']),
                subtitle: L.NW.string(L.t.kN1JRE),
                description: L.NW.string(L.t.e7FKCg),
                perkImage: ed
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: L.NW.string(L.t.O5R3ho),
                pillText: L.NW.string(L.t.yhEY5O),
                backgroundImage: en
            },
            badge: {
                name: 'badge',
                title: L.NW.string(L.t.dcFfSE),
                subtitle: L.NW.string(L.t['37MFFh']),
                perkImage: M,
                description: L.NW.string(L.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: L.NW.string(L.t.dcFfSE),
                subtitle: L.NW.string(L.t['37MFFh']),
                perkImage: ep.Z,
                description: L.NW.string(L.t.T1IS4u),
                imageOverlayText: L.NW.string(L.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: L.NW.string(L.t.OuItFh),
                subtitle: L.NW.string(L.t.mPyrEx),
                perkImage: q,
                description: L.NW.string(L.t.e7FKCg),
                descriptionCta: L.NW.string(L.t.jVcuVV),
                onCtaClick: eD
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: L.NW.string(L.t['R2IV/f']),
                subtitle: L.NW.string(L.t.R5Xag4),
                perkImage: Q,
                description: L.NW.string(L.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: L.NW.string(L.t.LWsAra),
                subtitle: L.NW.string(L.t.bTzbVl),
                perkImage: (0, R.gx)(t, U, V),
                description: L.NW.string(L.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: L.NW.string(L.t.tzdIwM),
                subtitle: L.NW.string(L.t.FXlU29),
                perkImage: (0, R.gx)(t, G, eo),
                description: L.NW.string(L.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: L.NW.formatToPlainString(L.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: L.NW.formatToPlainString(L.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: em,
                description: L.NW.string(L.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: L.NW.string(L.t.RSXQYG),
                subtitle: L.NW.string(L.t.ymCPxs),
                perkImage: ec,
                description: L.NW.string(L.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: L.NW.string(L.t.XQCSrq),
                subtitle: L.NW.string(L.t.HC5wVV),
                description: L.NW.string(L.t.ee7wQ0),
                descriptionCta: eN || ex ? L.NW.string(L.t.y9TxXV) : L.NW.string(L.t.d8o6lZ),
                isPremiumGetCta: !(eN || ex),
                onCtaClick: eN || ex ? eD : void 0,
                perkImage: et
            },
            referralProgram: {
                name: 'referralProgram',
                title: L.NW.string(L.t.tPY4o6),
                subtitle: L.NW.string(L.t.JY0grK),
                description: L.NW.format(L.t['2JqTFx'], { helpdeskArticle: _.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: L.NW.string(L.t.JST6jo),
                isPremiumGetCta: !ef || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: L.NW.string(L.t.I9TYMj),
                subtitle: L.NW.string(L.t.HMSHeH),
                descriptionCta: eN ? L.NW.string(L.t.jVcuVV) : L.NW.string(L.t.JST6jo),
                isPremiumGetCta: !eN,
                onCtaClick: eN ? eA : void 0,
                perkImage: es
            }
        };
    if (null != ev) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: a, dismissibleContentType: l } = ev,
            o = (0, i.jsx)('div', {
                className: B.cardComponent,
                children: (0, i.jsx)(A.ZP, {
                    progressCircleVariation: A.Qo.AVATAR_DECO,
                    avatarDecoAssetId: Z.VA,
                    avatarDecoAssetDescription: L.NW.string(L.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: ej,
                    initialPercentage: eE
                })
            });
        eZ.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: o,
            descriptionCta: a,
            onCtaClick: () => {
                null != eS &&
                    (0, m.Z)({
                        product: eS,
                        overrideTitle: L.NW.string(L.t.wRAXra),
                        overrideDescription: L.NW.string(L.t.sQX6HR),
                        analyticsLocations: e
                    });
            },
            cardVariant: P.zW.REWARD,
            pillText: s,
            dismissibleContentType: l
        };
    }
    if (null != eO) {
        let { title: t, subtitle: n, description: r, pillText: s, ctaDescription: l, dismissibleContentType: o } = eO,
            c = (0, i.jsx)('div', {
                className: B.cardComponent,
                children: (0, i.jsx)(A.ZP, {
                    showAnimations: !0,
                    percentage: ej,
                    initialPercentage: eE
                })
            });
        eZ.freeBoost = {
            name: 'freeBoost',
            title: t,
            subtitle: n,
            description: r,
            perkComponent: c,
            descriptionCta: l,
            onCtaClick: () => {
                a.Z.open(w.oAB.GUILD_BOOSTING, null, { analyticsLocations: e });
            },
            cardVariant: P.zW.REWARD,
            pillText: s,
            dismissibleContentType: o
        };
    }
    let ew = (0, T.Rw)(),
        { enabled: ek, isBadgeVersion2: eW } = (0, S.D)();
    return (
        ((!eW && ek && null != ew && ew.status !== T.Vq.UPCOMING) || (eW && ek)) &&
            !eI &&
            (eZ.tenureBadge = {
                name: 'tenureBadge',
                title: L.NW.string(L.t.rnsqpa),
                pillText: L.NW.string(L.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, i.jsx)(I.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, y.k)({ analyticsLocations: e })
            }),
        (0, C.ZP)('usePerksDiscoverabilityCard') === C.P0.SUMMER_2024 &&
            (eZ.shyProject = {
                name: 'shyProject',
                title: L.NW.string(L.t['0Mykgo']),
                subtitle: L.NW.string(L.t.opgqDQ),
                description: eN ? L.NW.string(L.t['t+QZSU']) : L.NW.string(L.t['JE/EWV']),
                descriptionCta: L.NW.string(L.t.dBJVnZ),
                pillText: L.NW.string(L.t.tahjbG).toLocaleUpperCase(),
                onCtaClick: eN ? eR : void 0,
                perkImage: Y,
                isPremiumGetCta: !eN
            }),
        eZ
    );
};
