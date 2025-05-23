n.d(t, {
    I: () => eb,
    Z: () => e_
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
    g = n(832149),
    p = n(605236),
    h = n(442933),
    f = n(300284),
    b = n(703656),
    _ = n(547972),
    x = n(131951),
    E = n(594174),
    C = n(78839),
    O = n(424218),
    j = n(63063),
    S = n(74538),
    v = n(314684),
    T = n(687362),
    N = n(229555),
    I = n(768865),
    y = n(119269),
    A = n(391110),
    P = n(75077),
    R = n(474936),
    D = n(735825),
    Z = n(981631),
    w = n(215023),
    k = n(921944),
    L = n(526761),
    B = n(332325),
    M = n(388032),
    U = n(593595),
    V = n(660372),
    G = n(926433),
    F = n(302036),
    H = n(994554),
    z = n(567396),
    W = n(925309),
    Y = n(46245),
    K = n(766491),
    q = n(193943),
    X = n(707046),
    Q = n(488459),
    J = n(334347),
    $ = n(132015),
    ee = n(142416),
    et = n(498730),
    en = n(607762),
    ei = n(474106),
    er = n(572501),
    es = n(755590),
    el = n(909910),
    ea = n(637810),
    eo = n(570423),
    ec = n(912429),
    ed = n(91394),
    eu = n(209672),
    em = n(698173),
    eg = n(926262),
    ep = n(371435),
    eh = n(83663),
    ef = n(317194),
    eb = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.NAMEPLATES = 'nameplates'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.TENURE_REWARD_COLLECTIBLE = 'tenureRewardCollectible'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.TENURE_BADGE = 'tenureBadge'), (i.PERMADECOS = 'permadecos'), i);
let e_ = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        n = (0, O.BU)(R.Uq / 1024, { useKibibytes: !0 }),
        i = (0, s.e7)([C.ZP], () => C.ZP.getPremiumTypeSubscription()),
        eb = null != i ? S.ZP.getPremiumPlanItem(i) : null,
        e_ = (null != eb ? S.ZP.getSkuIdForPlan(eb.planId) : null) === R.Si.TIER_2,
        ex = E.default.getCurrentUser(),
        eE = (0, S.I5)(ex, R.p9.TIER_2),
        eC = (0, S.I5)(ex, R.p9.TIER_0),
        eO = (0, v.bq)({ showAnimations: !0 }),
        ej = null != eO ? eO.initialPercentage : void 0,
        eS = null != eO ? eO.percentage : void 0,
        ev = (0, m.Z)(x.Z),
        eT = (0, h.H)('usePremiumPerksCards'),
        eN = (0, T.a)(),
        eI = (0, v.Kb)(D.qY),
        { isFractionalPremiumActive: ey } = (0, u.Z)(),
        eA = null != i && i.hasPremiumAtLeast(R.p9.TIER_2),
        eP = (0, p.wE)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        eR = (0, f.Z)({
            scrollPosition: L.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        eD = () => {
            a.Z.open(Z.oAB.VOICE, L.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        eZ = () => {
            (0, b.uL)(Z.Z5c.COLLECTIBLES_SHOP);
        },
        ew = () => {
            a.Z.open(Z.oAB.APPEARANCE, null, { scrollPosition: L.h1.CUSTOM_APP_ICONS });
        },
        ek = {
            clientThemes: {
                name: 'clientThemes',
                title: M.intl.string(M.t.kWM48P),
                subtitle: M.intl.string(M.t.CjRASE),
                description: M.intl.string(M.t.jBTTws),
                descriptionCta: M.intl.string(M.t.jVcuVV),
                onCtaClick: () => {
                    a.Z.open(Z.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: z
            },
            clips: eE
                ? {
                      name: 'clips',
                      title: M.intl.string(M.t.z2jK6e),
                      subtitle: M.intl.string(M.t['hxy0/f']),
                      description: M.intl.string(M.t.Z6v86e),
                      descriptionCta: ev ? M.intl.string(M.t.jVcuVV) : M.intl.string(M.t.hvVgAQ),
                      pillText: M.intl.string(M.t.EYxi0t),
                      onCtaClick: ev
                          ? () => {
                                (0, _.Z)(B.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(j.Z.getArticleURL(Z.BhN.CLIPS), '_blank');
                            },
                      perkImage: K
                  }
                : {
                      name: 'clips',
                      title: M.intl.string(M.t.z2jK6e),
                      subtitle: M.intl.string(M.t['hxy0/f']),
                      description: M.intl.string(M.t.X9IeNz),
                      pillText: M.intl.string(M.t.EYxi0t),
                      perkImage: K
                  },
            earlyAccess: eE
                ? {
                      name: 'earlyAccess',
                      title: M.intl.string(M.t.UkLVeH),
                      subtitle: M.intl.string(M.t.xf9ePj),
                      description: M.intl.string(M.t['+r4vdn']),
                      perkImage: X
                  }
                : {
                      name: 'earlyAccess',
                      title: M.intl.string(M.t.UkLVeH),
                      subtitle: M.intl.string(M.t.xf9ePj),
                      description: M.intl.string(M.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: X
                  },
            earlyAccessSeeAllVariant: eE
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: M.intl.string(M.t.UkLVeH),
                      subtitle: M.intl.string(M.t.xf9ePj),
                      description: M.intl.string(M.t['+r4vdn']),
                      perkImage: Q
                  }
                : {
                      name: 'earlyAccess',
                      title: M.intl.string(M.t.UkLVeH),
                      subtitle: M.intl.string(M.t.xf9ePj),
                      description: M.intl.string(M.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: Q
                  },
            entranceSounds: eE
                ? {
                      name: 'entranceSounds',
                      title: M.intl.string(M.t['f4M+Hx']),
                      subtitle: M.intl.string(M.t['7ZCYvL']),
                      description: M.intl.string(M.t.mUT8bG),
                      descriptionCta: M.intl.string(M.t.jVcuVV),
                      onCtaClick: eD,
                      perkImage: $
                  }
                : {
                      name: 'entranceSounds',
                      title: M.intl.string(M.t['f4M+Hx']),
                      subtitle: M.intl.string(M.t['7ZCYvL']),
                      description: M.intl.string(M.t['3smf/f']),
                      perkImage: $
                  },
            entranceSoundsSeeAllVariation: eE
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: M.intl.string(M.t['f4M+Hx']),
                      subtitle: M.intl.string(M.t['7ZCYvL']),
                      description: M.intl.string(M.t.mUT8bG),
                      descriptionCta: M.intl.string(M.t.jVcuVV),
                      onCtaClick: eD,
                      perkImage: ee
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: M.intl.string(M.t['f4M+Hx']),
                      subtitle: M.intl.string(M.t['7ZCYvL']),
                      description: M.intl.string(M.t['3smf/f']),
                      perkImage: ee
                  },
            profiles: {
                name: 'profiles',
                title: M.intl.string(M.t.KcyDwM),
                subtitle: M.intl.string(M.t.Mt3U1d),
                description: M.intl.string(M.t.kWcDKy),
                descriptionCta: M.intl.string(M.t.jVcuVV),
                onCtaClick: eR,
                perkImage: W
            },
            remixing: eE
                ? {
                      name: 'remixing',
                      title: M.intl.string(M.t['H+v6eX']),
                      subtitle: M.intl.string(M.t.wmbOAg),
                      description: M.intl.string(M.t.gdA9FB),
                      perkImage: es,
                      pillText: M.intl.string(M.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: M.intl.string(M.t['H+v6eX']),
                      subtitle: M.intl.string(M.t.wmbOAg),
                      description: M.intl.string(M.t.fiLtJi),
                      perkImage: es,
                      pillText: M.intl.string(M.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: M.intl.string(M.t['NyDu//']),
                subtitle: M.intl.string(M.t['4pEwXF']),
                description: ey ? M.intl.format(M.t.uPiIBQ, { link: 'https://discord.com' }) : M.intl.string(M.t.jsyNHh),
                descriptionCta: M.intl.string(M.t.jVcuVV),
                onCtaClick: ey
                    ? void 0
                    : () => {
                          a.Z.open(Z.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: Y,
                hideOnNarrowScreen: !ey,
                imageOverlayText: ey ? M.intl.string(M.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: M.intl.string(M.t['NyDu//']),
                subtitle: M.intl.string(M.t['4pEwXF']),
                descriptionCta: M.intl.string(M.t.jVcuVV),
                perkImage: ep.Z,
                imageOverlayText: M.intl.string(M.t.lcYttb)
            },
            specialMemberPricing: eT
                ? {
                      name: 'specialMemberPricing',
                      title: M.intl.string(M.t['0Mykgo']),
                      subtitle: M.intl.string(M.t.opgqDQ),
                      description: M.intl.string(M.t['t+QZSU']),
                      descriptionCta: M.intl.string(M.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: et
                  }
                : eE
                  ? {
                        name: 'specialMemberPricing',
                        title: M.intl.string(M.t['0Mykgo']),
                        subtitle: M.intl.string(M.t.opgqDQ),
                        description: M.intl.string(M.t['t+QZSU']),
                        descriptionCta: M.intl.string(M.t.dBJVnZ),
                        onCtaClick: eZ,
                        perkImage: ea
                    }
                  : {
                        name: 'specialMemberPricing',
                        title: M.intl.string(M.t['0Mykgo']),
                        subtitle: M.intl.string(M.t.opgqDQ),
                        description: M.intl.string(M.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: ea
                    },
            specialMemberPricingSeeAllVariant: eT
                ? {
                      name: 'specialMemberPricingSeeAllVariant',
                      title: M.intl.string(M.t['0Mykgo']),
                      subtitle: M.intl.string(M.t.opgqDQ),
                      description: M.intl.string(M.t['t+QZSU']),
                      descriptionCta: M.intl.string(M.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: et
                  }
                : eE
                  ? {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: M.intl.string(M.t['0Mykgo']),
                        subtitle: M.intl.string(M.t.opgqDQ),
                        description: M.intl.string(M.t['t+QZSU']),
                        descriptionCta: M.intl.string(M.t.dBJVnZ),
                        onCtaClick: eZ,
                        perkImage: eo
                    }
                  : {
                        name: 'specialMemberPricingSeeAllVariant',
                        title: M.intl.string(M.t['0Mykgo']),
                        subtitle: M.intl.string(M.t.opgqDQ),
                        description: M.intl.string(M.t['JE/EWV']),
                        isPremiumGetCta: !0,
                        perkImage: eo
                    },
            specialShopPerks: eT
                ? {
                      name: 'specialShopPerks',
                      title: M.intl.string(M.t.U68LpK),
                      subtitle: M.intl.string(M.t.chRZiY),
                      description: M.intl.string(M.t['t+QZSU']),
                      descriptionCta: M.intl.string(M.t.dBJVnZ),
                      onCtaClick: eZ,
                      perkImage: et
                  }
                : eE
                  ? {
                        name: 'specialShopPerks',
                        title: M.intl.string(M.t.U68LpK),
                        subtitle: M.intl.string(M.t.chRZiY),
                        description: M.intl.string(M.t['t+QZSU']),
                        descriptionCta: M.intl.string(M.t.dBJVnZ),
                        onCtaClick: eZ,
                        perkImage: ea
                    }
                  : {
                        name: 'specialShopPerks',
                        title: M.intl.string(M.t.U68LpK),
                        subtitle: M.intl.string(M.t.chRZiY),
                        description: M.intl.string(M.t['JE/EWV']),
                        descriptionCta: M.intl.string(M.t.dBJVnZ),
                        onCtaClick: eZ,
                        perkImage: ea
                    },
            unlimitedSuperReactions: eE
                ? {
                      name: 'unlimitedSuperReactions',
                      title: M.intl.string(M.t.hpgmOz),
                      subtitle: M.intl.string(M.t.Hxujsr),
                      description: M.intl.string(M.t['Cn/z6+']),
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: M.intl.string(M.t.hpgmOz),
                      subtitle: M.intl.string(M.t.Hxujsr),
                      description: M.intl.string(M.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: em,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: M.intl.string(M.t['6S7kOz']),
                subtitle: M.intl.string(M.t.kN1JRE),
                description: M.intl.string(M.t.e7FKCg),
                perkImage: eu
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: M.intl.string(M.t.O5R3ho),
                pillText: M.intl.string(M.t.yhEY5O),
                backgroundImage: ei
            },
            badge: {
                name: 'badge',
                title: M.intl.string(M.t.dcFfSE),
                subtitle: M.intl.string(M.t['37MFFh']),
                perkImage: V,
                description: M.intl.string(M.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: M.intl.string(M.t.dcFfSE),
                subtitle: M.intl.string(M.t['37MFFh']),
                perkImage: eh.Z,
                description: M.intl.string(M.t.T1IS4u),
                imageOverlayText: M.intl.string(M.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: M.intl.string(M.t.OuItFh),
                subtitle: M.intl.string(M.t.mPyrEx),
                perkImage: q,
                description: M.intl.string(M.t.e7FKCg),
                descriptionCta: M.intl.string(M.t.jVcuVV),
                onCtaClick: ew
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: M.intl.string(M.t['R2IV/f']),
                subtitle: M.intl.string(M.t.R5Xag4),
                perkImage: J,
                description: M.intl.string(M.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: M.intl.string(M.t.LWsAra),
                subtitle: M.intl.string(M.t.bTzbVl),
                perkImage: (0, P.gx)(t, G, F),
                description: M.intl.string(M.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: M.intl.string(M.t.tzdIwM),
                subtitle: M.intl.string(M.t.FXlU29),
                perkImage: (0, P.gx)(t, H, ec),
                description: M.intl.string(M.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: M.intl.formatToPlainString(M.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: M.intl.formatToPlainString(M.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: eg,
                description: M.intl.string(M.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: M.intl.string(M.t.RSXQYG),
                subtitle: M.intl.string(M.t.ymCPxs),
                perkImage: ed,
                description: M.intl.string(M.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: M.intl.string(M.t.XQCSrq),
                subtitle: M.intl.string(M.t.HC5wVV),
                description: M.intl.string(M.t.ee7wQ0),
                descriptionCta: eE || eC ? M.intl.string(M.t.y9TxXV) : M.intl.string(M.t.d8o6lZ),
                isPremiumGetCta: !(eE || eC),
                onCtaClick: eE || eC ? ew : void 0,
                perkImage: en
            },
            referralProgram: {
                name: 'referralProgram',
                title: M.intl.string(M.t.tPY4o6),
                subtitle: M.intl.string(M.t.JY0grK),
                description: M.intl.format(M.t['2JqTFx'], { helpdeskArticle: j.Z.getArticleURL(Z.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: M.intl.string(M.t.JST6jo),
                isPremiumGetCta: !e_ || void 0,
                perkImage: er
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: M.intl.string(M.t.I9TYMj),
                subtitle: M.intl.string(M.t.HMSHeH),
                descriptionCta: eE ? M.intl.string(M.t.jVcuVV) : M.intl.string(M.t.JST6jo),
                isPremiumGetCta: !eE,
                onCtaClick: eE ? eR : void 0,
                perkImage: el
            },
            permadecos: {
                name: 'permadecos',
                title: M.intl.string(M.t['57ngoq']),
                subtitle: M.intl.string(M.t.piFFjY),
                description: M.intl.format(M.t.Pd7olp, { learnMoreLink: j.Z.getArticleURL(Z.BhN.PERMADECOS) }),
                descriptionCta: eE ? M.intl.string(M.t.jVcuVV) : M.intl.string(M.t.JST6jo),
                isPremiumGetCta: !eE,
                onCtaClick: eE
                    ? () => {
                          eP || (0, p.EW)(l.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: k.L.TAKE_ACTION }), eR();
                      }
                    : void 0,
                pillText: eP || !eE ? void 0 : M.intl.string(M.t.y2b7CA).toLocaleUpperCase(),
                perkImage: ef.Z
            },
            nameplates: {
                name: 'nameplates',
                title: M.intl.string(M.t.rJbHFx),
                subtitle: M.intl.string(M.t.t2wcb2),
                perkImage: et,
                descriptionCta: M.intl.string(M.t.jVcuVV),
                onCtaClick: eZ
            }
        };
    if (null != eN) {
        let { title: t, subtitle: n, description: i, pillText: s, ctaDescription: l, dismissibleContentType: a } = eN;
        ek.tenureRewardCollectible = {
            name: 'tenureRewardCollectible',
            title: t,
            subtitle: n,
            description: i,
            perkComponent: (0, r.jsx)('div', {
                className: U.cardComponent,
                children: (0, r.jsx)(y.ZP, {
                    progressCircleVariation: y.Qo.AVATAR_DECO,
                    avatarDecoAssetId: D.VA,
                    avatarDecoAssetDescription: M.intl.string(M.t['9o4F4+']),
                    showAnimations: !0,
                    percentage: eS,
                    initialPercentage: ej
                })
            }),
            descriptionCta: l,
            onCtaClick: () => {
                null != eI &&
                    (0, g.Z)({
                        product: eI,
                        overrideTitle: M.intl.string(M.t.wRAXra),
                        overrideDescription: M.intl.string(M.t.sQX6HR),
                        analyticsLocations: e,
                        purchaseType: w.o8.TENURE_REWARD
                    });
            },
            cardVariant: A.zW.REWARD,
            pillText: s,
            dismissibleContentType: a
        };
    }
    return (
        eE &&
            eA &&
            (ek.tenureBadge = {
                name: 'tenureBadge',
                title: M.intl.string(M.t.rnsqpa),
                pillText: M.intl.string(M.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(N.Z, {}),
                cardVariant: A.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, I.k)({ analyticsLocations: e })
            }),
        ek
    );
};
