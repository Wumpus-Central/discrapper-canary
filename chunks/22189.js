n.d(t, {
    I: () => em,
    Z: () => eg
});
var i,
    r = n(255367);
n(73800);
var s = n(399606),
    l = n(704215),
    a = n(230711),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(975298),
    m = n(779618),
    g = n(605236),
    p = n(442933),
    h = n(300284),
    f = n(703656),
    b = n(547972),
    _ = n(131951),
    x = n(594174),
    E = n(78839),
    j = n(585483),
    C = n(424218),
    O = n(63063),
    S = n(74538),
    v = n(229555),
    T = n(768865),
    I = n(391110),
    N = n(75077),
    y = n(474936),
    A = n(981631),
    P = n(921944),
    R = n(526761),
    D = n(332325),
    Z = n(388032),
    w = n(660372),
    k = n(926433),
    L = n(302036),
    B = n(994554),
    M = n(567396),
    U = n(925309),
    V = n(46245),
    G = n(766491),
    F = n(193943),
    H = n(707046),
    z = n(488459),
    Y = n(334347),
    W = n(132015),
    K = n(142416),
    q = n(498730),
    X = n(607762),
    Q = n(474106),
    J = n(572501),
    $ = n(755590),
    ee = n(909910),
    et = n(637810),
    en = n(570423),
    ei = n(912429),
    er = n(91394),
    es = n(209672),
    el = n(698173),
    ea = n(926262),
    eo = n(217379),
    ec = n(371435),
    ed = n(83663),
    eu = n(317194),
    em = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.NAMEPLATES = 'nameplates'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.TENURE_BADGE = 'tenureBadge'), (i.PERMADECOS = 'permadecos'), (i.VOICE_FILTERS = 'voiceFilters'), i);
let eg = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        n = (0, C.BU)(y.Uq / 1024, { useKibibytes: !0 }),
        i = (0, s.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()),
        em = null != i ? S.ZP.getPremiumPlanItem(i) : null,
        eg = (null != em ? S.ZP.getSkuIdForPlan(em.planId) : null) === y.Si.TIER_2,
        ep = x.default.getCurrentUser(),
        eh = (0, S.I5)(ep, y.p9.TIER_2),
        ef = (0, S.I5)(ep, y.p9.TIER_0),
        eb = (0, m.Z)(_.Z),
        e_ = (0, p.H)('usePremiumPerksCards'),
        { isFractionalPremiumActive: ex } = (0, u.Z)(),
        eE = null != i && i.hasPremiumAtLeast(y.p9.TIER_2),
        ej = (0, g.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        eC = (0, h.Z)({
            scrollPosition: R.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eO = () => {
            a.Z.open(A.oAB.VOICE, R.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eS = () => {
            (0, f.uL)(A.Z5c.COLLECTIBLES_SHOP);
        },
        ev = () => {
            a.Z.open(A.oAB.APPEARANCE, null, { scrollPosition: R.h1.CUSTOM_APP_ICONS });
        },
        eT = {
            clientThemes: {
                name: 'clientThemes',
                title: Z.intl.string(Z.t.kWM48P),
                subtitle: Z.intl.string(Z.t.CjRASE),
                description: Z.intl.string(Z.t.jBTTws),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                onCtaClick: () => {
                    a.Z.open(A.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: M
            },
            clips: eh
                ? {
                      name: 'clips',
                      title: Z.intl.string(Z.t.z2jK6e),
                      subtitle: Z.intl.string(Z.t['hxy0/f']),
                      description: Z.intl.string(Z.t.Z6v86e),
                      descriptionCta: eb ? Z.intl.string(Z.t.jVcuVV) : Z.intl.string(Z.t.hvVgAQ),
                      pillText: Z.intl.string(Z.t.EYxi0t),
                      onCtaClick: eb
                          ? () => {
                                (0, b.Z)(D.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(O.Z.getArticleURL(A.BhN.CLIPS), '_blank');
                            },
                      perkImage: G
                  }
                : {
                      name: 'clips',
                      title: Z.intl.string(Z.t.z2jK6e),
                      subtitle: Z.intl.string(Z.t['hxy0/f']),
                      description: Z.intl.string(Z.t.X9IeNz),
                      pillText: Z.intl.string(Z.t.EYxi0t),
                      perkImage: G
                  },
            earlyAccess: eh
                ? {
                      name: 'earlyAccess',
                      title: Z.intl.string(Z.t.UkLVeH),
                      subtitle: Z.intl.string(Z.t.xf9ePj),
                      description: Z.intl.string(Z.t['+r4vdn']),
                      perkImage: H
                  }
                : {
                      name: 'earlyAccess',
                      title: Z.intl.string(Z.t.UkLVeH),
                      subtitle: Z.intl.string(Z.t.xf9ePj),
                      description: Z.intl.string(Z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: H
                  },
            earlyAccessSeeAllVariant: eh
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: Z.intl.string(Z.t.UkLVeH),
                      subtitle: Z.intl.string(Z.t.xf9ePj),
                      description: Z.intl.string(Z.t['+r4vdn']),
                      perkImage: z
                  }
                : {
                      name: 'earlyAccess',
                      title: Z.intl.string(Z.t.UkLVeH),
                      subtitle: Z.intl.string(Z.t.xf9ePj),
                      description: Z.intl.string(Z.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: z
                  },
            entranceSounds: eh
                ? {
                      name: 'entranceSounds',
                      title: Z.intl.string(Z.t['f4M+Hx']),
                      subtitle: Z.intl.string(Z.t['7ZCYvL']),
                      description: Z.intl.string(Z.t.mUT8bG),
                      descriptionCta: Z.intl.string(Z.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: W
                  }
                : {
                      name: 'entranceSounds',
                      title: Z.intl.string(Z.t['f4M+Hx']),
                      subtitle: Z.intl.string(Z.t['7ZCYvL']),
                      description: Z.intl.string(Z.t['3smf/f']),
                      perkImage: W
                  },
            entranceSoundsSeeAllVariation: eh
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: Z.intl.string(Z.t['f4M+Hx']),
                      subtitle: Z.intl.string(Z.t['7ZCYvL']),
                      description: Z.intl.string(Z.t.mUT8bG),
                      descriptionCta: Z.intl.string(Z.t.jVcuVV),
                      onCtaClick: eO,
                      perkImage: K
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: Z.intl.string(Z.t['f4M+Hx']),
                      subtitle: Z.intl.string(Z.t['7ZCYvL']),
                      description: Z.intl.string(Z.t['3smf/f']),
                      perkImage: K
                  },
            profiles: {
                name: 'profiles',
                title: Z.intl.string(Z.t.KcyDwM),
                subtitle: Z.intl.string(Z.t.Mt3U1d),
                description: Z.intl.string(Z.t.kWcDKy),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                onCtaClick: eC,
                perkImage: U
            },
            remixing: eh
                ? {
                      name: 'remixing',
                      title: Z.intl.string(Z.t['H+v6eX']),
                      subtitle: Z.intl.string(Z.t.wmbOAg),
                      description: Z.intl.string(Z.t.gdA9FB),
                      perkImage: $,
                      pillText: Z.intl.string(Z.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: Z.intl.string(Z.t['H+v6eX']),
                      subtitle: Z.intl.string(Z.t.wmbOAg),
                      description: Z.intl.string(Z.t.fiLtJi),
                      perkImage: $,
                      pillText: Z.intl.string(Z.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: Z.intl.string(Z.t['NyDu//']),
                subtitle: Z.intl.string(Z.t['4pEwXF']),
                description: ex ? Z.intl.format(Z.t.uPiIBQ, { link: 'https://discord.com' }) : Z.intl.string(Z.t.jsyNHh),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                onCtaClick: ex
                    ? void 0
                    : () => {
                          a.Z.open(A.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: V,
                hideOnNarrowScreen: !ex,
                imageOverlayText: ex ? Z.intl.string(Z.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: Z.intl.string(Z.t['NyDu//']),
                subtitle: Z.intl.string(Z.t['4pEwXF']),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                perkImage: ec.Z,
                imageOverlayText: Z.intl.string(Z.t.lcYttb)
            },
            specialMemberPricing: e_
                ? {
                      name: 'specialMemberPricing',
                      title: Z.intl.string(Z.t['0Mykgo']),
                      subtitle: Z.intl.string(Z.t.opgqDQ),
                      description: Z.intl.string(Z.t['t+QZSU']),
                      descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                      onCtaClick: eS,
                      perkImage: q
                  }
                : eh
                  ? {
                        name: 'specialMemberPricing',
                        title: Z.intl.string(Z.t['0Mykgo']),
                        subtitle: Z.intl.string(Z.t.opgqDQ),
                        description: Z.intl.string(Z.t['t+QZSU']),
                        descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                        onCtaClick: eS,
                        perkImage: et
                    }
                  : {
                        name: 'specialMemberPricing',
                        title: Z.intl.string(Z.t['0Mykgo']),
                        subtitle: Z.intl.string(Z.t.opgqDQ),
                        description: Z.intl.string(Z.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: et
                    },
            specialMemberPricingSeeAllVariant: e_
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: Z.intl.string(Z.t['0Mykgo']),
                      subtitle: Z.intl.string(Z.t.opgqDQ),
                      description: Z.intl.string(Z.t['t+QZSU']),
                      descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                      onCtaClick: eS,
                      perkImage: q
                  }
                : eh
                  ? {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: Z.intl.string(Z.t['0Mykgo']),
                        subtitle: Z.intl.string(Z.t.opgqDQ),
                        description: Z.intl.string(Z.t['t+QZSU']),
                        descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                        onCtaClick: eS,
                        perkImage: en
                    }
                  : {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: Z.intl.string(Z.t['0Mykgo']),
                        subtitle: Z.intl.string(Z.t.opgqDQ),
                        description: Z.intl.string(Z.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: en
                    },
            specialShopPerks: e_
                ? {
                      name: 'specialShopPerks',
                      title: Z.intl.string(Z.t.U68LpK),
                      subtitle: Z.intl.string(Z.t.chRZiY),
                      description: Z.intl.string(Z.t['t+QZSU']),
                      descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                      onCtaClick: eS,
                      perkImage: q
                  }
                : eh
                  ? {
                        name: 'specialShopPerks',
                        title: Z.intl.string(Z.t.U68LpK),
                        subtitle: Z.intl.string(Z.t.chRZiY),
                        description: Z.intl.string(Z.t['t+QZSU']),
                        descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                        onCtaClick: eS,
                        perkImage: et
                    }
                  : {
                        name: 'specialShopPerks',
                        title: Z.intl.string(Z.t.U68LpK),
                        subtitle: Z.intl.string(Z.t.chRZiY),
                        description: Z.intl.string(Z.t['JE/EWV']),
                        descriptionCta: Z.intl.string(Z.t.dBJVnZ),
                        onCtaClick: eS,
                        perkImage: et
                    },
            unlimitedSuperReactions: eh
                ? {
                      name: 'unlimitedSuperReactions',
                      title: Z.intl.string(Z.t.hpgmOz),
                      subtitle: Z.intl.string(Z.t.Hxujsr),
                      description: Z.intl.string(Z.t['Cn/z6+']),
                      perkImage: el,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: Z.intl.string(Z.t.hpgmOz),
                      subtitle: Z.intl.string(Z.t.Hxujsr),
                      description: Z.intl.string(Z.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: el,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: Z.intl.string(Z.t['6S7kOz']),
                subtitle: Z.intl.string(Z.t.kN1JRE),
                description: Z.intl.string(Z.t.e7FKCg),
                perkImage: es
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: Z.intl.string(Z.t.O5R3ho),
                pillText: Z.intl.string(Z.t.yhEY5O),
                backgroundImage: Q
            },
            badge: {
                name: 'badge',
                title: Z.intl.string(Z.t.dcFfSE),
                subtitle: Z.intl.string(Z.t['37MFFh']),
                perkImage: w,
                description: Z.intl.string(Z.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: Z.intl.string(Z.t.dcFfSE),
                subtitle: Z.intl.string(Z.t['37MFFh']),
                perkImage: ed.Z,
                description: Z.intl.string(Z.t.T1IS4u),
                imageOverlayText: Z.intl.string(Z.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: Z.intl.string(Z.t.OuItFh),
                subtitle: Z.intl.string(Z.t.mPyrEx),
                perkImage: F,
                description: Z.intl.string(Z.t.e7FKCg),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                onCtaClick: ev
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: Z.intl.string(Z.t['R2IV/f']),
                subtitle: Z.intl.string(Z.t.R5Xag4),
                perkImage: Y,
                description: Z.intl.string(Z.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: Z.intl.string(Z.t.LWsAra),
                subtitle: Z.intl.string(Z.t.bTzbVl),
                perkImage: (0, N.gx)(t, k, L),
                description: Z.intl.string(Z.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: Z.intl.string(Z.t.tzdIwM),
                subtitle: Z.intl.string(Z.t.FXlU29),
                perkImage: (0, N.gx)(t, B, ei),
                description: Z.intl.string(Z.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: Z.intl.formatToPlainString(Z.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: Z.intl.formatToPlainString(Z.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: ea,
                description: Z.intl.string(Z.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: Z.intl.string(Z.t.RSXQYG),
                subtitle: Z.intl.string(Z.t.ymCPxs),
                perkImage: er,
                description: Z.intl.string(Z.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: Z.intl.string(Z.t.XQCSrq),
                subtitle: Z.intl.string(Z.t.HC5wVV),
                description: Z.intl.string(Z.t.ee7wQ0),
                descriptionCta: eh || ef ? Z.intl.string(Z.t.y9TxXV) : Z.intl.string(Z.t.d8o6lZ),
                isPremiumGetCta: !(eh || ef),
                onCtaClick: eh || ef ? ev : void 0,
                perkImage: X
            },
            referralProgram: {
                name: 'referralProgram',
                title: Z.intl.string(Z.t.tPY4o6),
                subtitle: Z.intl.string(Z.t.JY0grK),
                description: Z.intl.format(Z.t['2JqTFx'], { helpdeskArticle: O.Z.getArticleURL(A.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: Z.intl.string(Z.t.JST6jo),
                isPremiumGetCta: !eg || void 0,
                perkImage: J
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: Z.intl.string(Z.t.I9TYMj),
                subtitle: Z.intl.string(Z.t.HMSHeH),
                descriptionCta: eh ? Z.intl.string(Z.t.jVcuVV) : Z.intl.string(Z.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh ? eC : void 0,
                perkImage: ee
            },
            permadecos: {
                name: 'permadecos',
                title: Z.intl.string(Z.t['57ngoq']),
                subtitle: Z.intl.string(Z.t.piFFjY),
                description: Z.intl.format(Z.t.Pd7olp, { learnMoreLink: O.Z.getArticleURL(A.BhN.PERMADECOS) }),
                descriptionCta: eh ? Z.intl.string(Z.t.jVcuVV) : Z.intl.string(Z.t.JST6jo),
                isPremiumGetCta: !eh,
                onCtaClick: eh
                    ? () => {
                          ej || (0, g.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: P.L.TAKE_ACTION }), eC();
                      }
                    : void 0,
                pillText: ej || !eh ? void 0 : Z.intl.string(Z.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eu.Z
            },
            nameplates: {
                name: 'nameplates',
                title: Z.intl.string(Z.t.rJbHFx),
                subtitle: Z.intl.string(Z.t.t2wcb2),
                perkImage: q,
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                onCtaClick: eS
            },
            voiceFilters: {
                name: 'voiceFilters',
                title: Z.intl.string(Z.t.QrbNGh),
                subtitle: Z.intl.string(Z.t.O1qkvb),
                description: Z.intl.format(Z.t.qS2Gmp, { learnMoreLink: A.EYA.VOICE_FILTERS_BLOG }),
                descriptionCta: Z.intl.string(Z.t.jVcuVV),
                perkImage: eo,
                onCtaClick: () => {
                    j.S.dispatch(A.CkL.OPEN_VOICE_FILTER_POPOUT);
                },
                pillText: Z.intl.string(Z.t.EYxi0t).toLocaleUpperCase(),
                hasNitroGradientBackground: !0
            }
        };
    return (
        eh &&
            eE &&
            (eT.tenureBadge = {
                name: 'tenureBadge',
                title: Z.intl.string(Z.t.rnsqpa),
                pillText: Z.intl.string(Z.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(v.Z, {}),
                cardVariant: I.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, T.k)({ analyticsLocations: e })
            }),
        eT
    );
};
