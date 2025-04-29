n.d(t, {
    Z: () => ex,
    u: () => e_
}),
    n(953529);
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
    p = n(832149),
    g = n(605236),
    h = n(442933),
    f = n(300284),
    b = n(703656),
    _ = n(547972),
    x = n(131951),
    E = n(594174),
    j = n(78839),
    C = n(424218),
    O = n(63063),
    S = n(74538),
    v = n(314684),
    T = n(687362),
    N = n(943180),
    I = n(229555),
    y = n(768865),
    A = n(119269),
    P = n(391110),
    R = n(75077),
    D = n(474936),
    Z = n(735825),
    w = n(981631),
    k = n(215023),
    L = n(921944),
    M = n(526761),
    B = n(332325),
    U = n(388032),
    V = n(344253),
    G = n(660372),
    F = n(926433),
    H = n(302036),
    z = n(994554),
    W = n(704565),
    Y = n(393305),
    K = n(338879),
    q = n(766491),
    X = n(193943),
    Q = n(707046),
    J = n(488459),
    $ = n(334347),
    ee = n(132015),
    et = n(142416),
    en = n(498730),
    ei = n(607762),
    er = n(474106),
    es = n(572501),
    el = n(755590),
    ea = n(909910),
    eo = n(637810),
    ec = n(570423),
    ed = n(912429),
    eu = n(91394),
    em = n(209672),
    ep = n(698173),
    eg = n(926262),
    eh = n(371435),
    ef = n(83663),
    eb = n(317194),
    e_ = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.NAMEPLATES = 'nameplates'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.TENURE_BADGE = 'tenureBadge'), (i.PERMADECOS = 'permadecos'), i);
let ex = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        n = (0, C.BU)(D.Uq / 1024, { useKibibytes: !0 }),
        i = (0, s.e7)([j.ZP], () => j.ZP.getPremiumTypeSubscription()),
        e_ = null != i ? S.ZP.getPremiumPlanItem(i) : null,
        ex = (null != e_ ? S.ZP.getSkuIdForPlan(e_.planId) : null) === D.Si.TIER_2,
        eE = E.default.getCurrentUser(),
        ej = (0, S.I5)(eE, D.p9.TIER_2),
        eC = (0, S.I5)(eE, D.p9.TIER_0),
        eO = (0, v.bq)({ showAnimations: !0 }),
        eS = null != eO ? eO.initialPercentage : void 0,
        ev = null != eO ? eO.percentage : void 0,
        eT = (0, m.Z)(x.Z),
        eN = (0, h.H)('usePerksDiscoverabilityCards'),
        eI = (0, T.a)(),
        ey = (0, v.Kb)(Z.qY),
        { isFractionalPremiumActive: eA } = (0, u.Z)(),
        eP = null != i && i.hasPremiumAtLeast(D.p9.TIER_2),
        eR = (0, g.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        eD = (0, f.Z)({
            scrollPosition: M.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eZ = () => {
            a.Z.open(w.oAB.VOICE, M.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ew = () => {
            (0, b.uL)(w.Z5c.COLLECTIBLES_SHOP);
        },
        ek = () => {
            a.Z.open(w.oAB.APPEARANCE, null, { scrollPosition: M.h1.CUSTOM_APP_ICONS });
        },
        eL = {
            clientThemes: {
                name: 'clientThemes',
                title: U.intl.string(U.t.kWM48P),
                subtitle: U.intl.string(U.t.CjRASE),
                description: U.intl.string(U.t.jBTTws),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: () => {
                    a.Z.open(w.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: W
            },
            clips: ej
                ? {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.Z6v86e),
                      descriptionCta: eT ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.hvVgAQ),
                      pillText: U.intl.string(U.t.EYxi0t),
                      onCtaClick: eT
                          ? () => {
                                (0, _.Z)(B.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(O.Z.getArticleURL(w.BhN.CLIPS), '_blank');
                            },
                      perkImage: q
                  }
                : {
                      name: 'clips',
                      title: U.intl.string(U.t.z2jK6e),
                      subtitle: U.intl.string(U.t['hxy0/f']),
                      description: U.intl.string(U.t.X9IeNz),
                      pillText: U.intl.string(U.t.EYxi0t),
                      perkImage: q
                  },
            earlyAccess: ej
                ? {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['+r4vdn']),
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: U.intl.string(U.t.UkLVeH),
                      subtitle: U.intl.string(U.t.xf9ePj),
                      description: U.intl.string(U.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            earlyAccessSeeAllVariant: ej
                ? {
                      name: 'earlyAccessSeeAllVariant',
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
            entranceSounds: ej
                ? {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eZ,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSounds',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t['3smf/f']),
                      perkImage: ee
                  },
            entranceSoundsSeeAllVariation: ej
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: U.intl.string(U.t['f4M+Hx']),
                      subtitle: U.intl.string(U.t['7ZCYvL']),
                      description: U.intl.string(U.t.mUT8bG),
                      descriptionCta: U.intl.string(U.t.jVcuVV),
                      onCtaClick: eZ,
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
                onCtaClick: eD,
                perkImage: Y
            },
            remixing: ej
                ? {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.gdA9FB),
                      perkImage: el,
                      pillText: U.intl.string(U.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: U.intl.string(U.t['H+v6eX']),
                      subtitle: U.intl.string(U.t.wmbOAg),
                      description: U.intl.string(U.t.fiLtJi),
                      perkImage: el,
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
                          a.Z.open(w.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: K,
                hideOnNarrowScreen: !eA,
                imageOverlayText: eA ? U.intl.string(U.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: U.intl.string(U.t['NyDu//']),
                subtitle: U.intl.string(U.t['4pEwXF']),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                perkImage: eh.Z,
                imageOverlayText: U.intl.string(U.t.lcYttb)
            },
            specialMemberPricing: eN
                ? {
                      name: 'specialMemberPricing',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: en
                  }
                : ej
                  ? {
                        name: 'specialMemberPricing',
                        title: U.intl.string(U.t['0Mykgo']),
                        subtitle: U.intl.string(U.t.opgqDQ),
                        description: U.intl.string(U.t['t+QZSU']),
                        descriptionCta: U.intl.string(U.t.dBJVnZ),
                        onCtaClick: ew,
                        perkImage: eo
                    }
                  : {
                        name: 'specialMemberPricing',
                        title: U.intl.string(U.t['0Mykgo']),
                        subtitle: U.intl.string(U.t.opgqDQ),
                        description: U.intl.string(U.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: eo
                    },
            specialMemberPricingSeeAllVariant: eN
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: U.intl.string(U.t['0Mykgo']),
                      subtitle: U.intl.string(U.t.opgqDQ),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: en
                  }
                : ej
                  ? {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: U.intl.string(U.t['0Mykgo']),
                        subtitle: U.intl.string(U.t.opgqDQ),
                        description: U.intl.string(U.t['t+QZSU']),
                        descriptionCta: U.intl.string(U.t.dBJVnZ),
                        onCtaClick: ew,
                        perkImage: ec
                    }
                  : {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: U.intl.string(U.t['0Mykgo']),
                        subtitle: U.intl.string(U.t.opgqDQ),
                        description: U.intl.string(U.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: ec
                    },
            specialShopPerks: eN
                ? {
                      name: 'specialShopPerks',
                      title: U.intl.string(U.t.U68LpK),
                      subtitle: U.intl.string(U.t.chRZiY),
                      description: U.intl.string(U.t['t+QZSU']),
                      descriptionCta: U.intl.string(U.t.dBJVnZ),
                      onCtaClick: ew,
                      perkImage: en
                  }
                : ej
                  ? {
                        name: 'specialShopPerks',
                        title: U.intl.string(U.t.U68LpK),
                        subtitle: U.intl.string(U.t.chRZiY),
                        description: U.intl.string(U.t['t+QZSU']),
                        descriptionCta: U.intl.string(U.t.dBJVnZ),
                        onCtaClick: ew,
                        perkImage: eo
                    }
                  : {
                        name: 'specialShopPerks',
                        title: U.intl.string(U.t.U68LpK),
                        subtitle: U.intl.string(U.t.chRZiY),
                        description: U.intl.string(U.t['JE/EWV']),
                        descriptionCta: U.intl.string(U.t.dBJVnZ),
                        onCtaClick: ew,
                        perkImage: eo
                    },
            unlimitedSuperReactions: ej
                ? {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t['Cn/z6+']),
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: U.intl.string(U.t.hpgmOz),
                      subtitle: U.intl.string(U.t.Hxujsr),
                      description: U.intl.string(U.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ep,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: U.intl.string(U.t['6S7kOz']),
                subtitle: U.intl.string(U.t.kN1JRE),
                description: U.intl.string(U.t.e7FKCg),
                perkImage: em
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: U.intl.string(U.t.O5R3ho),
                pillText: U.intl.string(U.t.yhEY5O),
                backgroundImage: er
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
                perkImage: ef.Z,
                description: U.intl.string(U.t.T1IS4u),
                imageOverlayText: U.intl.string(U.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: U.intl.string(U.t.OuItFh),
                subtitle: U.intl.string(U.t.mPyrEx),
                perkImage: X,
                description: U.intl.string(U.t.e7FKCg),
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: ek
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
                perkImage: (0, R.gx)(t, F, H),
                description: U.intl.string(U.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: U.intl.string(U.t.tzdIwM),
                subtitle: U.intl.string(U.t.FXlU29),
                perkImage: (0, R.gx)(t, z, ed),
                description: U.intl.string(U.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: U.intl.formatToPlainString(U.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: U.intl.formatToPlainString(U.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: eg,
                description: U.intl.string(U.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: U.intl.string(U.t.RSXQYG),
                subtitle: U.intl.string(U.t.ymCPxs),
                perkImage: eu,
                description: U.intl.string(U.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: U.intl.string(U.t.XQCSrq),
                subtitle: U.intl.string(U.t.HC5wVV),
                description: U.intl.string(U.t.ee7wQ0),
                descriptionCta: ej || eC ? U.intl.string(U.t.y9TxXV) : U.intl.string(U.t.d8o6lZ),
                isPremiumGetCta: !(ej || eC),
                onCtaClick: ej || eC ? ek : void 0,
                perkImage: ei
            },
            referralProgram: {
                name: 'referralProgram',
                title: U.intl.string(U.t.tPY4o6),
                subtitle: U.intl.string(U.t.JY0grK),
                description: U.intl.format(U.t['2JqTFx'], { helpdeskArticle: O.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !ex || void 0,
                perkImage: es
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: U.intl.string(U.t.I9TYMj),
                subtitle: U.intl.string(U.t.HMSHeH),
                descriptionCta: ej ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !ej,
                onCtaClick: ej ? eD : void 0,
                perkImage: ea
            },
            permadecos: {
                name: 'permadecos',
                title: U.intl.string(U.t['57ngoq']),
                subtitle: U.intl.string(U.t.piFFjY),
                description: U.intl.format(U.t.Pd7olp, { learnMoreLink: O.Z.getArticleURL(w.BhN.PERMADECOS) }),
                descriptionCta: ej ? U.intl.string(U.t.jVcuVV) : U.intl.string(U.t.JST6jo),
                isPremiumGetCta: !ej,
                onCtaClick: ej
                    ? () => {
                          eR || (0, g.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: L.L.TAKE_ACTION }), eD();
                      }
                    : void 0,
                pillText: eR || !ej ? void 0 : U.intl.string(U.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eb.Z
            },
            nameplates: {
                name: 'nameplates',
                title: U.intl.string(U.t.rJbHFx),
                subtitle: U.intl.string(U.t.t2wcb2),
                perkImage: en,
                descriptionCta: U.intl.string(U.t.jVcuVV),
                onCtaClick: ew
            }
        };
    if (null != eI) {
        let { title: t, subtitle: n, description: i, pillText: s, ctaDescription: l, dismissibleContentType: a } = eI;
        eL.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: (0, r.jsx)('div', {
                className: V.cardComponent,
                children: (0, r.jsx)(A.ZP, {
                    progressCircleVariation: A.Qo.AVATAR_DECO,
                    avatarDecoAssetId: Z.VA,
                    avatarDecoAssetDescription: U.intl.string(U.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: ev,
                    initialPercentage: eS
                })
            }),
            descriptionCta: l,
            onCtaClick: () => {
                null != ey &&
                    (0, p.Z)({
                        product: ey,
                        overrideTitle: U.intl.string(U.t.wRAXra),
                        overrideDescription: U.intl.string(U.t.sQX6HR),
                        analyticsLocations: e,
                        purchaseType: k.o8.TENURE_REWARD
                    });
            },
            cardVariant: P.zW.REWARD,
            pillText: s,
            dismissibleContentType: a
        };
    }
    let { enabled: eM } = (0, N.D)();
    return (
        eM &&
            ej &&
            eP &&
            (eL.tenureBadge = {
                name: 'tenureBadge',
                title: U.intl.string(U.t.rnsqpa),
                pillText: U.intl.string(U.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(I.Z, {}),
                cardVariant: P.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, y.k)({ analyticsLocations: e })
            }),
        eL
    );
};
