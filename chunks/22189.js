n.d(t, {
    I: () => ec,
    Z: () => ed
});
var i,
    r = n(255367);
n(73800);
var s = n(399606),
    a = n(704215),
    l = n(230711),
    o = n(410030),
    c = n(100527),
    d = n(906732),
    u = n(975298),
    m = n(779618),
    p = n(266454),
    g = n(300284),
    h = n(703656),
    f = n(547972),
    b = n(131951),
    x = n(594174),
    _ = n(78839),
    j = n(585483),
    O = n(424218),
    E = n(63063),
    C = n(74538),
    v = n(229555),
    S = n(768865),
    T = n(391110),
    N = n(75077),
    I = n(474936),
    y = n(981631),
    A = n(921944),
    P = n(526761),
    R = n(332325),
    D = n(388032),
    Z = n(660372),
    w = n(926433),
    k = n(302036),
    L = n(994554),
    B = n(567396),
    M = n(925309),
    U = n(46245),
    V = n(766491),
    G = n(193943),
    F = n(707046),
    H = n(488459),
    z = n(334347),
    W = n(132015),
    Y = n(142416),
    K = n(498730),
    q = n(607762),
    X = n(474106),
    J = n(572501),
    Q = n(755590),
    $ = n(909910),
    ee = n(912429),
    et = n(91394),
    en = n(209672),
    ei = n(698173),
    er = n(926262),
    es = n(217379),
    ea = n(371435),
    el = n(83663),
    eo = n(317194),
    ec = (((i = {}).CLIENT_THEMES = 'clientThemes'), (i.CLIPS = 'clips'), (i.EARLY_ACCESS = 'earlyAccess'), (i.ENTRANCE_SOUNDS = 'entranceSounds'), (i.PROFILES = 'profiles'), (i.REMIXING = 'remixing'), (i.SERVER_BOOSTS = 'serverBoosts'), (i.GREY_SERVER_BOOSTS = 'greyServerBoosts'), (i.SPECIAL_MEMBER_PRICING = 'specialMemberPricing'), (i.SPECIAL_MEMBER_PRICING_SEE_ALL_VARIANT = 'specialMemberPricingSeeAllVariant'), (i.SPECIAL_SHOP_PERKS = 'specialShopPerks'), (i.NAMEPLATES = 'nameplates'), (i.UNLIMITED_SUPER_REACTIONS = 'unlimitedSuperReactions'), (i.SUPER_REACTIONS = 'superReactions'), (i.UPCOMING_DROP_UNTIMED = 'upcomingDropUntimed'), (i.CUSTOM_APP_ICONS = 'customAppIcons'), (i.MORE_EMOJI_POWER = 'moreEmojiPower'), (i.CUSTOM_SOUNDS_EVERYWHERE = 'customSoundsEverywhere'), (i.SPECIAL_STICKER_ACCESS = 'specialStickerAccess'), (i.LARGE_UPLOADS = 'largeUploads'), (i.HD_VIDEO = 'hdVideo'), (i.BADGE = 'badge'), (i.GREY_BADGE = 'greyBadge'), (i.ENTRANCE_SOUNDS_SEE_ALL_VARIATION = 'entranceSoundsSeeAllVariation'), (i.EARLY_ACCESS_SEE_ALL_VARIATION = 'earlyAccessSeeAllVariant'), (i.REFERRAL_PROGRAM = 'referralProgram'), (i.NEW_APP_STYLES_UPDATE_JUNE_2024 = 'newAppStylesUpdateJune2024'), (i.SERVER_PROFILES = 'serverProfiles'), (i.TENURE_BADGE = 'tenureBadge'), (i.PERMADECOS = 'permadecos'), (i.VOICE_FILTERS = 'voiceFilters'), i);
let ed = () => {
    let { analyticsLocations: e } = (0, d.ZP)(c.Z.PREMIUM_MARKETING_PERK_CARD),
        t = (0, o.ZP)(),
        n = (0, O.BU)(I.Uq / 1024, { useKibibytes: !0 }),
        i = (0, s.e7)([_.Z], () => _.Z.getPremiumTypeSubscription()),
        ec = null != i ? C.ZP.getPremiumPlanItem(i) : null,
        ed = (null != ec ? C.ZP.getSkuIdForPlan(ec.planId) : null) === I.Si.TIER_2,
        eu = x.default.getCurrentUser(),
        em = (0, C.I5)(eu, I.p9.TIER_2),
        ep = (0, C.I5)(eu, I.p9.TIER_0),
        eg = (0, m.Z)(b.Z),
        { isFractionalPremiumActive: eh } = (0, u.Z)(),
        ef = null != i && i.hasPremiumAtLeast(I.p9.TIER_2),
        eb = (0, p.Nj)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE),
        ex = (0, g.Z)({
            scrollPosition: P.Y_.TRY_IT_OUT,
            analyticsLocations: e
        }),
        e_ = () => {
            l.Z.open(y.oAB.VOICE, P.GA, {
                openWithoutBackstack: !0,
                analyticsLocations: e
            });
        },
        ej = () => {
            (0, h.uL)(y.Z5c.COLLECTIBLES_SHOP);
        },
        eO = () => {
            l.Z.open(y.oAB.APPEARANCE, null, { scrollPosition: P.h1.CUSTOM_APP_ICONS });
        },
        eE = {
            clientThemes: {
                name: 'clientThemes',
                title: D.intl.string(D.t.kWM48P),
                subtitle: D.intl.string(D.t.CjRASE),
                description: D.intl.string(D.t.jBTTws),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: () => {
                    l.Z.open(y.oAB.APPEARANCE, null, {
                        openWithoutBackstack: !0,
                        analyticsLocations: e
                    });
                },
                perkImage: B
            },
            clips: em
                ? {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.Z6v86e),
                      descriptionCta: eg ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.hvVgAQ),
                      pillText: D.intl.string(D.t.EYxi0t),
                      onCtaClick: eg
                          ? () => {
                                (0, f.Z)(R.Z.CLIPS, {
                                    openWithoutBackstack: !0,
                                    analyticsLocations: e
                                });
                            }
                          : () => {
                                window.open(E.Z.getArticleURL(y.BhN.CLIPS), '_blank');
                            },
                      perkImage: V
                  }
                : {
                      name: 'clips',
                      title: D.intl.string(D.t.z2jK6e),
                      subtitle: D.intl.string(D.t['hxy0/f']),
                      description: D.intl.string(D.t.X9IeNz),
                      pillText: D.intl.string(D.t.EYxi0t),
                      perkImage: V
                  },
            earlyAccess: em
                ? {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['+r4vdn']),
                      perkImage: F
                  }
                : {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: F
                  },
            earlyAccessSeeAllVariant: em
                ? {
                      name: 'earlyAccessSeeAllVariant',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['+r4vdn']),
                      perkImage: H
                  }
                : {
                      name: 'earlyAccess',
                      title: D.intl.string(D.t.UkLVeH),
                      subtitle: D.intl.string(D.t.xf9ePj),
                      description: D.intl.string(D.t['6+xTcn']),
                      isPremiumGetCta: !0,
                      perkImage: H
                  },
            entranceSounds: em
                ? {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: e_,
                      perkImage: W
                  }
                : {
                      name: 'entranceSounds',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: W
                  },
            entranceSoundsSeeAllVariation: em
                ? {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t.mUT8bG),
                      descriptionCta: D.intl.string(D.t.jVcuVV),
                      onCtaClick: e_,
                      perkImage: Y
                  }
                : {
                      name: 'entranceSoundsSeeAllVariation',
                      title: D.intl.string(D.t['f4M+Hx']),
                      subtitle: D.intl.string(D.t['7ZCYvL']),
                      description: D.intl.string(D.t['3smf/f']),
                      perkImage: Y
                  },
            profiles: {
                name: 'profiles',
                title: D.intl.string(D.t.KcyDwM),
                subtitle: D.intl.string(D.t.Mt3U1d),
                description: D.intl.string(D.t.kWcDKy),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: ex,
                perkImage: M
            },
            remixing: em
                ? {
                      name: 'remixing',
                      title: D.intl.string(D.t['H+v6eX']),
                      subtitle: D.intl.string(D.t.wmbOAg),
                      description: D.intl.string(D.t.gdA9FB),
                      perkImage: Q,
                      pillText: D.intl.string(D.t.EYxi0t)
                  }
                : {
                      name: 'remixing',
                      title: D.intl.string(D.t['H+v6eX']),
                      subtitle: D.intl.string(D.t.wmbOAg),
                      description: D.intl.string(D.t.fiLtJi),
                      perkImage: Q,
                      pillText: D.intl.string(D.t.EYxi0t)
                  },
            serverBoosts: {
                name: 'serverBoosts',
                title: D.intl.string(D.t['NyDu//']),
                subtitle: D.intl.string(D.t['4pEwXF']),
                description: eh ? D.intl.format(D.t.uPiIBQ, { link: 'https://discord.com' }) : D.intl.string(D.t.jsyNHh),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: eh
                    ? void 0
                    : () => {
                          l.Z.open(y.oAB.GUILD_BOOSTING, null, {
                              openWithoutBackstack: !0,
                              analyticsLocations: e
                          });
                      },
                perkImage: U,
                hideOnNarrowScreen: !eh,
                imageOverlayText: eh ? D.intl.string(D.t.lcYttb) : void 0
            },
            greyServerBoosts: {
                name: 'greyServerBoosts',
                title: D.intl.string(D.t['NyDu//']),
                subtitle: D.intl.string(D.t['4pEwXF']),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                perkImage: ea.Z,
                imageOverlayText: D.intl.string(D.t.lcYttb)
            },
            specialMemberPricing: {
                name: 'specialMemberPricing',
                title: D.intl.string(D.t['0Mykgo']),
                subtitle: D.intl.string(D.t.opgqDQ),
                description: D.intl.string(D.t['t+QZSU']),
                descriptionCta: D.intl.string(D.t.dBJVnZ),
                onCtaClick: ej,
                perkImage: K
            },
            specialMemberPricingSeeAllVariant: {
                name: 'specialMemberPricingSeeAllVariant',
                title: D.intl.string(D.t['0Mykgo']),
                subtitle: D.intl.string(D.t.opgqDQ),
                description: D.intl.string(D.t['t+QZSU']),
                descriptionCta: D.intl.string(D.t.dBJVnZ),
                onCtaClick: ej,
                perkImage: K
            },
            specialShopPerks: {
                name: 'specialShopPerks',
                title: D.intl.string(D.t.U68LpK),
                subtitle: D.intl.string(D.t.chRZiY),
                description: D.intl.string(D.t['t+QZSU']),
                descriptionCta: D.intl.string(D.t.dBJVnZ),
                onCtaClick: ej,
                perkImage: K
            },
            unlimitedSuperReactions: em
                ? {
                      name: 'unlimitedSuperReactions',
                      title: D.intl.string(D.t.hpgmOz),
                      subtitle: D.intl.string(D.t.Hxujsr),
                      description: D.intl.string(D.t['Cn/z6+']),
                      perkImage: ei,
                      hideOnNarrowScreen: !0
                  }
                : {
                      name: 'unlimitedSuperReactions',
                      title: D.intl.string(D.t.hpgmOz),
                      subtitle: D.intl.string(D.t.Hxujsr),
                      description: D.intl.string(D.t.TF7cPT),
                      isPremiumGetCta: !0,
                      perkImage: ei,
                      hideOnNarrowScreen: !0
                  },
            superReactions: {
                name: 'superReactions',
                title: D.intl.string(D.t['6S7kOz']),
                subtitle: D.intl.string(D.t.kN1JRE),
                description: D.intl.string(D.t.e7FKCg),
                perkImage: en
            },
            upcomingDropUntimed: {
                name: 'upcomingDropUntimed',
                title: D.intl.string(D.t.O5R3ho),
                pillText: D.intl.string(D.t.yhEY5O),
                backgroundImage: X
            },
            badge: {
                name: 'badge',
                title: D.intl.string(D.t.dcFfSE),
                subtitle: D.intl.string(D.t['37MFFh']),
                perkImage: Z,
                description: D.intl.string(D.t.T1IS4u)
            },
            greyBadge: {
                name: 'greyBadge',
                title: D.intl.string(D.t.dcFfSE),
                subtitle: D.intl.string(D.t['37MFFh']),
                perkImage: el.Z,
                description: D.intl.string(D.t.T1IS4u),
                imageOverlayText: D.intl.string(D.t.lcYttb)
            },
            customAppIcons: {
                name: 'customAppIcons',
                title: D.intl.string(D.t.OuItFh),
                subtitle: D.intl.string(D.t.mPyrEx),
                perkImage: G,
                description: D.intl.string(D.t.e7FKCg),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: eO
            },
            moreEmojiPower: {
                name: 'moreEmojiPower',
                title: D.intl.string(D.t['R2IV/f']),
                subtitle: D.intl.string(D.t.R5Xag4),
                perkImage: z,
                description: D.intl.string(D.t['8lsjS0'])
            },
            customSoundsEverywhere: {
                name: 'customSoundsEverywhere',
                title: D.intl.string(D.t.LWsAra),
                subtitle: D.intl.string(D.t.bTzbVl),
                perkImage: (0, N.gx)(t, w, k),
                description: D.intl.string(D.t.JLnOMz)
            },
            specialStickerAccess: {
                name: 'specialStickerAccess',
                title: D.intl.string(D.t.tzdIwM),
                subtitle: D.intl.string(D.t.FXlU29),
                perkImage: (0, N.gx)(t, L, ee),
                description: D.intl.string(D.t.e7FKCg)
            },
            largeUploads: {
                name: 'largeUploads',
                title: D.intl.formatToPlainString(D.t.jqhAdH, { premiumMaxSize: n }),
                subtitle: D.intl.formatToPlainString(D.t['HI+cfn'], { premiumMaxSize: n }),
                perkImage: er,
                description: D.intl.string(D.t['R0gx+/'])
            },
            hdVideo: {
                name: 'hdVideo',
                title: D.intl.string(D.t.RSXQYG),
                subtitle: D.intl.string(D.t.ymCPxs),
                perkImage: et,
                description: D.intl.string(D.t['4WgB//'])
            },
            newAppStylesUpdateJune2024: {
                name: 'newAppStylesUpdateJune2024',
                title: D.intl.string(D.t.XQCSrq),
                subtitle: D.intl.string(D.t.HC5wVV),
                description: D.intl.string(D.t.ee7wQ0),
                descriptionCta: em || ep ? D.intl.string(D.t.y9TxXV) : D.intl.string(D.t.d8o6lZ),
                isPremiumGetCta: !(em || ep),
                onCtaClick: em || ep ? eO : void 0,
                perkImage: q
            },
            referralProgram: {
                name: 'referralProgram',
                title: D.intl.string(D.t.tPY4o6),
                subtitle: D.intl.string(D.t.JY0grK),
                description: D.intl.format(D.t['2JqTFx'], { helpdeskArticle: E.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM) }),
                descriptionCta: D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !ed || void 0,
                perkImage: J
            },
            serverProfiles: {
                name: 'serverProfiles',
                title: D.intl.string(D.t.I9TYMj),
                subtitle: D.intl.string(D.t.HMSHeH),
                descriptionCta: em ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !em,
                onCtaClick: em ? ex : void 0,
                perkImage: $
            },
            permadecos: {
                name: 'permadecos',
                title: D.intl.string(D.t['57ngoq']),
                subtitle: D.intl.string(D.t.piFFjY),
                description: D.intl.format(D.t.Pd7olp, { learnMoreLink: E.Z.getArticleURL(y.BhN.PERMADECOS) }),
                descriptionCta: em ? D.intl.string(D.t.jVcuVV) : D.intl.string(D.t.JST6jo),
                isPremiumGetCta: !em,
                onCtaClick: em
                    ? () => {
                          (eb || (0, p.Q3)(a.z.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE, { dismissAction: A.L.TAKE_ACTION }), ex());
                      }
                    : void 0,
                pillText: eb || !em ? void 0 : D.intl.string(D.t.y2b7CA).toLocaleUpperCase(),
                perkImage: eo.Z
            },
            nameplates: {
                name: 'nameplates',
                title: D.intl.string(D.t.rJbHFx),
                subtitle: D.intl.string(D.t.t2wcb2),
                perkImage: K,
                descriptionCta: D.intl.string(D.t.jVcuVV),
                onCtaClick: ej
            },
            voiceFilters: {
                name: 'voiceFilters',
                title: D.intl.string(D.t.QrbNGh),
                subtitle: D.intl.string(D.t.O1qkvb),
                description: D.intl.format(D.t.qS2Gmp, { learnMoreLink: y.EYA.VOICE_FILTERS_BLOG }),
                descriptionCta: D.intl.string(D.t.jVcuVV),
                perkImage: es,
                onCtaClick: () => {
                    j.S.dispatch(y.CkL.OPEN_VOICE_FILTER_POPOUT);
                },
                pillText: D.intl.string(D.t.EYxi0t).toLocaleUpperCase(),
                hasNitroGradientBackground: !0
            }
        };
    return (
        em &&
            ef &&
            (eE.tenureBadge = {
                name: 'tenureBadge',
                title: D.intl.string(D.t.rnsqpa),
                pillText: D.intl.string(D.t.jyYgZ2).toLocaleUpperCase(),
                perkComponent: (0, r.jsx)(v.Z, {}),
                cardVariant: T.zW.NITRO_GRADIENT_HOVER_BORDER,
                onClick: () => (0, S.k)({ analyticsLocations: e })
            }),
        eE
    );
};
