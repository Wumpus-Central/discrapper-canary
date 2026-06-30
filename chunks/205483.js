"use strict";
n.d(t, { Ay: () => iD, WU: () => ib, x6: () => iO }), n(321073), n(323874), n(14289), n(35956);
var i,
    r,
    s,
    a = n(627968),
    o = n(64700),
    l = n(503698),
    u = n.n(l),
    c = n(873263),
    d = n(17928),
    _ = n(269115),
    h = n(289873),
    f = n(689175),
    p = n(228366),
    E = n(793574),
    m = n(688810),
    g = n(131607),
    A = n(949030),
    I = n(611924),
    T = n(961250),
    S = n(366505),
    y = n(841595),
    C = n(903209),
    N = n(166403),
    v = n(174459),
    R = n(881489),
    O = n(945810),
    b =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.NITRO_HOME_TILE = 1)] = "NITRO_HOME_TILE"),
        (i[(i.STICKY_BAR = 2)] = "STICKY_BAR"),
        (i[(i.NITRO_TAB_POPOVER = 3)] = "NITRO_TAB_POPOVER"),
        i);
let D = (0, O.mj)({
    name: "2026-06-monthly-to-yearly-upsells",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
function L(e) {
    let { location: t } = e;
    return D.useConfig({ location: t });
}
var w = n(7066),
    M = n(131168),
    P = n(482589),
    x = n(410516),
    k = n(18005),
    U = n(661531),
    G = n(717421),
    F = n(331322),
    V = n(534514),
    B = n(834730),
    j = n(821609),
    H = n(403581),
    Y = n(815021),
    W = n(532794),
    K = n(465323),
    $ = n(554146),
    z = n(773669),
    q = n(97352),
    Z = n(252424),
    X = n(428262),
    Q = n(580630),
    J = n(788868),
    ee = n(652215),
    et = n(375708);
let en = {
    [b.STICKY_BAR]: $.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
    [b.NITRO_TAB_POPOVER]: $.M.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
};
function ei(e) {
    let t = (0, X.EL)(e);
    if (null == t || !J.BL.has(t.planId)) return null;
    let n = J.hd[t.planId]?.skuId;
    if (null == n) return null;
    let i = J.zE[n] ?? null;
    return null == i ? null : (q.A.get(i) ?? null);
}
function er(e) {
    let t = (function (e) {
        if (null == e || e.status !== ee.Dmq.ACTIVE || e.isPurchasedExternally || (0, X.Nc)(e)) return null;
        let t = ei(e);
        if (null == t) return null;
        let n = { currency: e.currency },
            i = (0, X.z_)(t, !1, n);
        if (null == i) return null;
        let r = (0, K.LQ)(i.amount, i.currency);
        return null == r || r <= 0
            ? null
            : { displayAmount: r, currency: i.currency, savingsPercent: (0, X.k8)(t, !1, n) };
    })(e);
    if (null == t) return null;
    let n = (0, Q.$g)(t.displayAmount, t.currency, { maximumFractionDigits: 0 }),
        i = null != t.savingsPercent ? (0, Z.l9)(z.default.locale, t.savingsPercent / 100) : void 0;
    return {
        title: et.intl.formatToPlainString(et.t.cZPXK6, { amount: n }),
        body: et.intl.string(et.t.KD6MH5),
        cta: et.intl.string(et.t.xmQfYw),
        badge: null != i ? et.intl.formatToPlainString(et.t.IAybsG, { discount: i }) : void 0,
    };
}
var es = n(576243),
    ea = n(49999),
    eo = n(279261);
function el(e) {
    let { premiumSubscription: t, copy: n, markAsDismissed: i } = e,
        { title: r, body: s, cta: o } = n,
        { analyticsLocations: l } = (0, m.Ay)(E.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        u = (0, G.z)({
            from: { transform: "translateY(0%)", opacity: 0 },
            to: { transform: "translateY(-100%)", opacity: 1 },
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(k.animated.div, {
        className: eo.iE,
        style: u,
        children: (0, a.jsxs)(F.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            padding: 16,
            fullWidth: !1,
            className: eo.iJ,
            children: [
                (0, a.jsx)(es.A, { size: 64, iconSize: 40, color: U.A.colors.WHITE }),
                (0, a.jsxs)(F.B, {
                    direction: "vertical",
                    gap: 4,
                    fullWidth: !1,
                    className: eo.iQ,
                    children: [
                        (0, a.jsx)(V.D, { variant: "heading-md/semibold", color: "text-strong", children: r }),
                        (0, a.jsx)(B.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                    ],
                }),
                (0, a.jsx)(j.$, {
                    variant: "expressive",
                    icon: H.t,
                    size: "md",
                    text: o,
                    onClick: () => {
                        i(ea.i.TAKE_ACTION),
                            (0, W.A)({ subscription: t, initialPlanId: ei(t)?.id ?? null, analyticsLocations: l });
                    },
                }),
                (0, a.jsx)(Y.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": et.intl.string(et.t.WAI6xu),
                    onClick: () => i(ea.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eu = n(31502),
    ec = n(562708),
    ed = n(192308),
    e_ = n(885574),
    eh = n(43990),
    ef = n(993077),
    ep = n(139286),
    eE = n(872725),
    em = n(920050),
    eg = n(792656);
n(985603);
var eA = n(777376),
    eI = n(185797),
    eT = n(237146),
    eS = n(74776);
function ey(e) {
    let { openRewardModal: t } = e,
        n = (0, eI.F)();
    if (n.kind === eI.L.SUBSCRIBE)
        return (0, a.jsxs)("div", {
            className: eS.R$,
            children: [
                (0, a.jsx)(eg.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: J.pe.TIER_2,
                }),
                (0, a.jsx)(j.$, { variant: "secondary", size: "md", text: et.intl.string(et.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === eA.p.CLAIMED
            ? { text: et.intl.string(eT.default.Plwzgf) }
            : { text: et.intl.string(et.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: eS.R$,
                children: [
                    (0, a.jsx)(j.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, a.jsx)(j.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === eA.p.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: eS.ed,
                    children: [
                        (0, a.jsx)(e_.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(B.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: et.intl.string(eT.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function eC(e) {
    let { glowing: t = !1 } = e;
    (0, ep.A)({
        type: ec.ImpressionTypes.VIEW,
        name: ec.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: em.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, m.Ay)(E.A.CROISSANT_PREMIUM_HERO_CARD),
        r = o.useCallback(() => {
            (0, ed.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, a.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, a.jsx)(eh.N, {
        theme: ee.NJ8.DARKER,
        children: (e) =>
            (0, a.jsx)(m.f5, {
                value: i,
                children: (0, a.jsx)("div", {
                    className: u()(e, eS.kL),
                    children: (0, a.jsx)(eE.A, {
                        cardType: ef.s.CUSTOM,
                        cardClassName: eS.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, a.jsxs)("div", {
                            className: eS.XF,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eS.j,
                                    children: [
                                        (0, a.jsx)("div", { className: eS._g }),
                                        (0, a.jsx)("div", { className: eS.$h }),
                                        (0, a.jsx)("div", { className: eS.Rv }),
                                        (0, a.jsx)("div", { className: eS.Lw }),
                                        (0, a.jsx)("div", { className: eS.mR }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: eS.Qs,
                                    children: [
                                        (0, a.jsx)("img", {
                                            className: eS.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, a.jsx)(V.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: eS.DD,
                                            children: et.intl.string(eT.default.RGT513),
                                        }),
                                        (0, a.jsx)(B.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: eS.h_,
                                            children: et.intl.string(eT.default["+pTnsf"]),
                                        }),
                                        (0, a.jsx)(ey, { openRewardModal: r }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var eN = n(744064);
function ev(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, eI.F)(),
        r = { isThirdPartyPerk: !0 },
        s =
            i.kind === eI.L.SUBSCRIBE
                ? { ...r, subscriptionRequired: !0 }
                : {
                      ...r,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, a.jsx)(eN.S, {
        id: em.XBOX_PREMIUM_PERK_CARD_ID,
        title: et.intl.string(eT.default.UVL9tD),
        description: et.intl.string(eT.default["I+IXr0"]),
        ...s,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, a.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function eR(e) {
    let { analyticsLocations: t } = (0, m.Ay)(E.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, a.jsx)(m.f5, { value: t, children: (0, a.jsx)(ev, { ...e }) });
}
var eO = n(367791),
    eb = n(672193);
function eD(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: s, gridClassName: o } = e,
        l = eb.Ui;
    return (0, a.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != s ? (0, a.jsx)("div", { className: u()(l, null != r && eO.Jx, o), children: s }) : null,
        ],
    });
}
var eL = n(975571),
    ew = n(149995),
    eM = n(398523),
    eP = n(881373),
    ex = n(581921),
    ek = n(3074),
    eU = n(852218),
    eG = n(382259),
    eF = n(962995);
function eV() {
    let { analyticsLocations: e } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eP.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = eM.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, ew.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, ew.S9)({ location: "useHardwarePartnerPerkCards" }),
        s = null === (0, ek.N)(),
        l = (0, eu.l)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: c } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : et.intl.string(et.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: em.LOGITECH_3PP_CARD_ID,
                      title: et.intl.string(eF.default.OlObRa),
                      description: et.intl.format(eF.default.ZGOJ8R, {
                          discountPercent: eP.aW,
                          termsUrl: eL.A.getArticleURL(ee.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / c,
                      ctaText: et.intl.string(et.t.w7s5Qr),
                      onCtaClick: () => (0, ex.P)({ partnerId: eU.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, a.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: eU.XY },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: em.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: et.intl.string(et.t.m7PucM),
                      description: i
                          ? r
                              ? et.intl.format(et.t["1Zw6xL"], {})
                              : et.intl.format(et.t.KWdCO0, {})
                          : et.intl.format(et.t.zh1X7u, {}),
                      descriptionNote:
                          !r && i
                              ? et.intl.format(et.t.vblnHk, {
                                    partnerName: eU.CD[eU.Cs].label,
                                    helpdeskArticle: eL.A.getArticleURL(ee.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, a.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: u.getDate() / c,
                      ctaText: et.intl.string(et.t.w7s5Qr),
                      onCtaClick: () => (0, eG.u)({ analyticsLocations: e, partnerIds: [eU.KS, eU.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: eU.KS },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
        };
    }, [l, e, u, t, c, n, i, r, s]);
}
var eB = n(102338);
let ej = "xgpp";
function eH(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, eu.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: s } = eV();
    if (!i) return null;
    let o = null != r || null != s;
    return (0, a.jsx)(eD, {
        id: ej,
        sectionClassName: u()(eB.uW, eB.Uv, eB.qr),
        heading: (0, a.jsx)(V.D, {
            variant: "display-sm",
            className: u()(eb.R_, eO.U6),
            children: et.intl.string(et.t.NG1e6l),
        }),
        beforeGrid: (0, a.jsx)("div", { className: eO.JE, children: (0, a.jsx)(eC, { glowing: t === ej }) }),
        grid: o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(eR, { containerClassName: eb.Nr }),
                      null != r && (0, a.jsx)(eN.S, { ...r, containerClassName: eb.Nr, glowing: n === r.id }),
                      null != s && (0, a.jsx)(eN.S, { ...s, containerClassName: eb.Nr, glowing: n === s.id }),
                  ],
              })
            : null,
    });
}
var eY = n(315629),
    eW = n(65470),
    eK = n(797221);
let e$ = function (e) {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, m.Ay)(n);
    return (0, a.jsx)(m.f5, {
        value: r,
        children: (0, a.jsxs)(eY.h, {
            className: u()(eK.kL, eK.pm, t),
            color: "purple",
            children: [
                (0, a.jsxs)("div", {
                    className: eK.FS,
                    children: [
                        (0, a.jsx)(V.D, {
                            variant: "heading-xxl/bold",
                            className: eK.R_,
                            children: et.intl.string(et.t.Ve9Ge6),
                        }),
                        (0, a.jsx)(B.E, { variant: "text-md/medium", children: et.intl.string(et.t.yQ06u1) }),
                        (0, a.jsx)("div", {
                            className: eK.SB,
                            children: (0, a.jsx)(eW.A, {
                                buttonTextOverride: et.intl.string(et.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eK._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var ez = n(877624);
let eq =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eZ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: eq,
        srcSet: `${eq} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var eX = n(502572),
    eQ = n(775602),
    eJ = n(366999),
    e0 = n(531260),
    e1 = n(780964),
    e2 = n(766075),
    e3 = n(786300),
    e6 = n(960851),
    e4 = n(89366),
    e5 = n(422936),
    e7 = n(234419),
    e8 = n(549996),
    e9 = n(810660),
    te = n(175569),
    tt = n(371764),
    tn = n(949964),
    ti = n(103411),
    tr = n(778712),
    ts = n(97808),
    ta = n(590251),
    to = n(144165),
    tl = n(854627),
    tu = n(427262),
    tc = n(851746),
    td = n(326084),
    t_ = n(664654);
function th() {
    var e, t, n;
    let { referralSentUsers: i } = (0, t_.J)(),
        r = (0, d.bG)([tc.A], () => tc.A.getRecipientStatus()),
        s = (0, d.bG)([tc.A], () => tc.A.getHasEligibleFriends()),
        a = r.size === t_.Z,
        o =
            ((e = !1 !== s),
            (t = i.length),
            (n = r.size === t_.Z && [...r.values()].every((e) => e === td.aK.REDEEMED)),
            e
                ? t === t_.Z
                    ? n
                        ? et.intl.format(et.t["1aEjsH"], {
                              helpdeskArticle: eL.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM),
                          })
                        : et.intl.format(et.t["+u3AOO"], {
                              helpdeskArticle: eL.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM),
                          })
                    : et.intl.format(et.t["omMr+V"], { helpdeskArticle: eL.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM) })
                : et.intl.format(et.t["zWhX/Q"], { helpdeskArticle: eL.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var tf = n(212737),
    tp = n(849812);
function tE(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    v.default.track(ee.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, ed.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
            return (n) => (0, a.jsx)(e, { ...n, startingScreen: t });
        });
}
function tm(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: i } = (0, tl.A)({ userId: t.id, size: tr._3.SIZE_24 });
    return (0, a.jsx)(
        ts.eu,
        { className: tp.bj, src: n, "aria-label": (0, tu.mG)(t), size: tr._3.SIZE_24, ...i },
        t.id,
    );
}
function tg(e) {
    let { slotIndex: t } = e;
    return (0, a.jsx)("div", { className: tp.p, children: t });
}
function tA(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: u()(tp.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < t_.Z; n++)
                if (t?.[n] !== void 0) {
                    let i = (0, a.jsx)(tm, { user: t[n] }, t[n].id);
                    e.push(i);
                } else {
                    let t = (0, a.jsx)(tg, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function tI(e) {
    let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
    return (0, a.jsx)(ta.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? tp.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: r ?? tp.e0,
        overlayClassName: t === t_.Z ? tp.ys : void 0,
        children: (0, a.jsx)(to._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: n,
            width: n,
            zoomable: !1,
        }),
    });
}
function tT(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = th();
    return (0, a.jsxs)("div", {
        className: u()(tp.kL, t),
        children: [
            (0, a.jsx)("div", { className: tp.G3, children: (0, a.jsx)(tI, { nReferralsSent: i }) }),
            (0, a.jsxs)("div", {
                className: tp.IH,
                children: [
                    (0, a.jsx)(tA, { referralSentUsers: n, className: tp.GV }),
                    (0, a.jsxs)("div", {
                        className: tp.n4,
                        children: [
                            (0, a.jsx)(V.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: et.intl.string(et.t.USo4s7),
                            }),
                            (0, a.jsx)(B.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, a.jsx)(j.$, {
                        variant: "primary",
                        disabled: !1 === r || !0 === s,
                        text: et.intl.string(et.t.Lm2nFc),
                        onClick: () =>
                            tE({ startingScreen: tf.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tS = n(989349),
    ty = n.n(tS),
    tC = n(496431),
    tN = n(116689);
let tv = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, tC.A)(ty()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: s, minutes: o, seconds: l } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: s, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: l, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: u()(tN.Xl, n),
        children: [
            (0, a.jsx)(B.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: et.intl.string(et.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: tN.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: tN.bh,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: tN.kB,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: tN.B2,
                                                        children: (0, a.jsx)(B.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: tN.B2,
                                                        children: (0, a.jsx)(B.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(B.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return et.intl.string(et.t.ixASa2);
                                                        case "hours":
                                                            return et.intl.string(et.t["8sNvNn"]);
                                                        case "minutes":
                                                            return et.intl.string(et.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return et.intl.string(et.t.JhaiLW);
                                                        default:
                                                            return "";
                                                    }
                                                })(e.unitType),
                                            }),
                                        ],
                                    },
                                    e.unitType,
                                ),
                                !t &&
                                    (0, a.jsx)(B.E, {
                                        className: tN.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === c.length - 1),
                ),
            }),
        ],
    });
};
var tR = n(473702),
    tO = n(609425),
    tb = n(660184),
    tD = n(287809),
    tL = n(12052);
function tw() {
    let e = (0, d.bG)([tD.default], () => tD.default.getCurrentUser()),
        t = (0, tO.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, tl.A)({ userId: e?.id, size: tr._3.SIZE_56 });
    if (null == e) return null;
    let s = (0, tu.mG)(e);
    return (0, a.jsxs)("div", {
        className: tL.kL,
        children: [
            (0, a.jsx)("div", {
                className: tL.my,
                children: (0, a.jsx)(ts.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: tr._3.SIZE_56,
                    "aria-label": s,
                    ...r,
                }),
            }),
            (0, a.jsx)("div", { className: tL.QC, children: (0, a.jsx)(tb.A, { userName: s, displayNameStyles: t }) }),
        ],
    });
}
var tM = n(707554),
    tP = n(218199);
let tx = function (e) {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, a.jsx)(tM.F, {
        forceLevel: 1,
        children: (0, a.jsx)(V.D, { className: u()(tP.w, t, i && tP.n), variant: "display-md", color: n, children: r }),
    });
};
var tk = n(690093);
function tU(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = th();
    return (0, a.jsxs)("div", {
        className: u()(tk.kL, t),
        children: [
            (0, a.jsx)("div", {
                className: tk.G3,
                children: (0, a.jsx)(tI, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tk.HP,
                    ringClassName: tk.pZ,
                }),
            }),
            (0, a.jsxs)("div", {
                className: tk.IH,
                children: [
                    (0, a.jsxs)("div", {
                        className: tk.n4,
                        children: [
                            (0, a.jsx)(V.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: et.intl.string(et.t.USo4s7),
                            }),
                            (0, a.jsx)(B.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, a.jsx)(tA, { referralSentUsers: n, className: tk.t7 }),
                ],
            }),
            (0, a.jsx)(j.$, {
                variant: "primary",
                disabled: !1 === r || !0 === s,
                text: et.intl.string(et.t.Lm2nFc),
                onClick: () =>
                    tE({ startingScreen: tf.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tG = n(702841),
    tF = n(676279),
    tV = n(20458),
    tB = n(141502);
let tj = function (e) {
    let {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: n,
            flyingWumpusAssetClassName: i,
            boltContainerClassName: r,
            carContainerClassName: s,
            hammerContainerClassName: o,
            keyContainerClassName: l,
            starContainerClassName: u,
            boltAssetClassName: c,
            carAssetClassName: d,
            hammerAssetClassName: _,
            keyAssetClassName: h,
            starAssetClassName: f,
            animationSpeedScale: p = 1,
        } = e,
        E = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        m = (0, tF.TM)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tB.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, a.jsx)(tV.A, {
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                boltContainerClassName: r,
                carContainerClassName: s,
                hammerContainerClassName: o,
                keyContainerClassName: l,
                starContainerClassName: u,
                boltAssetClassName: c,
                carAssetClassName: d,
                hammerAssetClassName: _,
                keyAssetClassName: h,
                starAssetClassName: f,
                animationSpeedScale: p,
            }),
        ],
    });
};
var tH = n(43588);
let tY = function (e) {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, a.jsx)(tj, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tH.wG, n && tH.Vx),
        flyingWumpusAssetClassName: u()(tH.lu, n && tH.ov),
        boltContainerClassName: u()(tH.nJ, n && tH.Wc),
        hammerContainerClassName: u()(tH.Gj, n && tH.XA),
        keyContainerClassName: u()(tH.FV, n && tH.oZ),
        starContainerClassName: u()(tH.E1, n && tH.LN),
        boltAssetClassName: u()(tH.j7, n && tH.QN),
        hammerAssetClassName: u()(tH.Wv, n && tH.B9),
        keyAssetClassName: u()(tH.rs, n && tH.I1),
        starAssetClassName: u()(tH.OY, n && tH.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tW = (((r = {}).MORNING = "morning"), (r.AFTERNOON = "afternoon"), (r.EVENING = "evening"), r);
function tK() {
    let e,
        t = { [tW.MORNING]: et.t["Wvc/I+"], [tW.AFTERNOON]: et.t["d+0STx"], [tW.EVENING]: et.t.CqsxKI };
    return et.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tW.MORNING : e >= 12 && e < 17 ? tW.AFTERNOON : tW.EVENING],
    );
}
var t$ = n(97584),
    tz = n(202241);
let tq = function (e) {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, a.jsx)(tj, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: u()(tz.wG, n && tz.Vx),
            flyingWumpusAssetClassName: u()(tz.lu, n && tz.ov),
            boltContainerClassName: u()(tz.nJ, n && tz.Wc),
            hammerContainerClassName: u()(tz.Gj, n && tz.XA),
            keyContainerClassName: u()(tz.FV, n && tz.oZ),
            starContainerClassName: u()(tz.E1, n && tz.LN),
            boltAssetClassName: u()(tz.j7, n && tz.QN),
            hammerAssetClassName: u()(tz.Wv, n && tz.B9),
            keyAssetClassName: u()(tz.rs, n && tz.I1),
            starAssetClassName: u()(tz.OY, n && tz.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tZ = {
        [w.CL.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, e9.U)(!o),
                _ = tK();
            return (0, a.jsx)("div", {
                className: u()(t$.kL, t$.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(t$.W2, t$.HQ),
                    ref: l,
                    children: [
                        (0, a.jsxs)(F.B, {
                            align: "start",
                            gap: 32,
                            className: t$.ZU,
                            children: [
                                i && n,
                                (0, a.jsxs)(F.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(tx, {
                                            className: t$.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, a.jsx)(tw, {}),
                                    ],
                                }),
                                s && (0, a.jsx)(tU, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: t$.y3,
                            children: (0, a.jsx)(tY, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [w.CL.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, e9.U)(!o),
                _ = et.intl.string(et.t.ifwQZb);
            return (0, a.jsx)("div", {
                className: u()(t$.kL, t$.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(t$.W2, t$.m8),
                    ref: l,
                    children: [
                        (0, a.jsxs)(F.B, {
                            align: "start",
                            gap: 32,
                            className: t$.Y0,
                            children: [
                                i && n,
                                (0, a.jsx)("div", {
                                    className: u()(t$.N1, t$.v8),
                                    children: (0, a.jsx)(tx, {
                                        className: t$.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                s && (0, a.jsx)(tU, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: t$.BF,
                            children: (0, a.jsx)(tq, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [w.CL.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = tK();
            return (0, a.jsx)("div", {
                className: u()(t$.kL, t$.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(t$.W2, t$.J_),
                    children: [
                        (0, a.jsxs)(F.B, {
                            align: "start",
                            gap: 32,
                            className: t$.$S,
                            children: [
                                i && n,
                                (0, a.jsxs)(F.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(tx, {
                                            className: t$.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, a.jsx)(tw, {}),
                                    ],
                                }),
                            ],
                        }),
                        s && (0, a.jsx)("div", { className: t$.Pq, children: (0, a.jsx)(tU, {}) }),
                    ],
                }),
            });
        },
    };
function tX(e) {
    let { treatment: t, ...n } = e,
        i = tZ[t];
    return null != i ? (0, a.jsx)(i, { ...n }) : null;
}
var tQ = n(652533),
    tJ = n(447764),
    t0 = n(180894);
let t1 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: tJ.BI,
                children: (0, a.jsx)(tQ.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tQ.$G },
                    yAxisAnimationData: { range: 20, duration: tQ.Mp, path: tQ.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tQ.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, a.jsx)("img", { src: t0.A, alt: "", className: tJ.Q }),
                }),
            }),
            (0, a.jsx)(tV.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tJ.Gj,
                keyContainerClassName: tJ.FV,
                starContainerClassName: tJ.E1,
                hammerAssetClassName: tJ.Wv,
                keyAssetClassName: tJ.rs,
                starAssetClassName: tJ.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var t2 = n(725807),
    t3 = n(774774),
    t6 = n(975916);
let t4 = function () {
    let e = { section: ee.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: t6.vK,
        children: [
            (0, a.jsx)(t3.e4, { text: et.intl.string(et.t.qYKftX), className: t6.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: t6._u,
            }),
            (0, a.jsx)("div", {
                className: t6.IP,
                children: (0, a.jsx)(B.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(t2.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: t6.aA,
                shinyButtonClassName: t6.Xp,
            }),
        ],
    });
};
var t5 = n(18671);
let t7 = function () {
    let e = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, a.jsx)(tV.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: t5.cI,
        hammerContainerClassName: t5.qg,
        keyContainerClassName: t5.h2,
        boltContainerClassName: t5.Bz,
        starAssetClassName: t5.ks,
        hammerAssetClassName: t5.GY,
        keyAssetClassName: t5.p4,
        boltAssetClassName: t5.vy,
    });
};
function t8(e) {
    let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
        r = (0, R.Zb)(t);
    return (0, a.jsx)("div", {
        className: u()(t$.kL, n),
        ref: i,
        children: (0, a.jsxs)("div", {
            className: t$.ap,
            children: [
                (0, a.jsxs)(F.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, a.jsx)(te.A, { text: et.intl.string(et.t.yhldRB) }),
                        (0, a.jsxs)(F.B, {
                            align: "start",
                            gap: 12,
                            className: t$.rG,
                            children: [
                                (0, a.jsx)(tx, { children: et.intl.format(et.t.FwjP6W, { days: r }) }),
                                (0, a.jsx)(B.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: et.intl.string(et.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(F.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, a.jsx)(eg.A, {
                                    size: "md",
                                    buttonTextOverride: et.intl.string(et.t["2+luBl"]),
                                    iconOverride: H.t,
                                    variantOverride: "expressive",
                                }),
                                (0, a.jsx)(j.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: et.intl.string(et.t.Af7ye6),
                                    onClick: () => (0, e2.openUserSettings)(e1.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: t$.Hk,
                    children: [(0, a.jsx)(eZ, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(t7, {})],
                }),
            ],
        }),
    });
}
function t9(e) {
    let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: r, shouldShowReferralProgressBar: s } = e,
        {
            headingText: o,
            headingTop: l,
            showPill: c,
            shouldShowChurnVariant: _,
            premiumSubscription: h,
            userDiscountOffer: f,
            discountedPrice: p,
            buttonVisibilityRef: g,
        } = nt(),
        { treatment: A, isInNitroHomeHeaderTreatment: I } = (0, w.jy)("subscriber_home_hero"),
        { analyticsLocations: T } = (0, m.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
        S = (0, e8.c)(ez.C.MARKETING_PAGE_BANNER),
        y = null != h && h.status === ee.Dmq.CANCELED,
        C = I && !y,
        N = null;
    null != S && "marketingPageBanner" === S.properties.properties.oneofKind
        ? (N = (0, a.jsx)(tt.x, {
              componentId: S.id,
              promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
          }))
        : i
          ? (N = (0, a.jsx)(tn.A, { variant: tn.c.SUBSCRIBER_HOME }))
          : r
            ? (N = (0, a.jsx)(t4, {}))
            : s && !C && (N = (0, a.jsx)(tT, {}));
    let v = (0, e7.V)(),
        R = (0, e5.O)(),
        O = (0, x.U9)(R, J.pe.TIER_2) ? J.pe.TIER_2 : void 0,
        b = null != h && h.status !== ee.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
        D = (0, e0.A)(),
        L = D.isFractionalPremiumActive && !b && null == N && !_,
        M = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        { visibilityPercentageRef: P, visibilityPercentage: k } = (0, e9.U)(!M);
    return r
        ? (0, a.jsx)(t8, { fpEndsAt: D.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
        : C
          ? (0, a.jsx)(tX, {
                treatment: A,
                className: t,
                headingTop: l,
                showPill: c,
                buttonVisibilityRef: g,
                shouldShowReferralProgressBar: s,
            })
          : (0, a.jsx)("div", {
                className: u()(t$.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: g,
                children: (0, a.jsxs)("div", {
                    className: t$.Qs,
                    ref: P,
                    children: [
                        c && l,
                        (0, a.jsxs)("div", {
                            className: t$.N1,
                            children: [
                                (0, a.jsx)(t1, { containerVisibilityPercentage: k }),
                                _ &&
                                    f?.expiresAt != null &&
                                    (0, a.jsx)(tv, { expiresAt: f.expiresAt.toISOString(), className: t$.IZ }),
                                (0, a.jsx)(tx, {
                                    children:
                                        _ && null != f
                                            ? et.intl.format(et.t["3yZP0G"], { percent: f.discount.amount })
                                            : o,
                                }),
                                _ &&
                                    null != f &&
                                    null != p &&
                                    (0, a.jsx)(B.E, {
                                        className: t$.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: et.intl.format(et.t["3Q4wCy"], {
                                            discountedPrice: p,
                                            billingPeriod: (0, X.Ke)(f.discount.userUsageLimitInterval),
                                            numMonths: f.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: L || _ ? t$.UJ : void 0,
                            children: [
                                L &&
                                    (0, a.jsx)(eg.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: v?.subscription_trial?.sku_id ?? O,
                                    }),
                                _ &&
                                    null != h &&
                                    (0, a.jsx)(j.$, {
                                        variant: "expressive",
                                        icon: H.t,
                                        size: "md",
                                        text: et.intl.string(et.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = tR.g.CONFIRM_DISCOUNT),
                                                void (0, ed.openModalLazy)(async () => {
                                                    let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                        await Promise.all([
                                                            n.e("13742"),
                                                            n.e("94161"),
                                                            n.e("13051"),
                                                            n.e("80347"),
                                                            n.e("10741"),
                                                            n.e("80166"),
                                                        ]).then(n.bind(n, 293061));
                                                    return (n) =>
                                                        (0, a.jsx)(t, {
                                                            ...n,
                                                            analyticsLocations: T,
                                                            initialStep: e,
                                                            premiumSubscription: h,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, a.jsx)(eW.A, {
                                    variant: L || _ ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: et.intl.string(et.t["3KomGa"]),
                                }),
                            ],
                        }),
                        N,
                    ],
                }),
            });
}
let [ne, nt] = (0, e3.A)(),
    nn = function (e) {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: s } = (0, m.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, R.ds)(),
            l = (0, e6.cg)(),
            u = (0, e4.QQ)(),
            c = (0, d.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            _ = null != c && c.status === ee.Dmq.CANCELED && null != i,
            h = u && !_,
            f = et.intl.string(et.t.qYKftX),
            p = (0, ti.m)(),
            g = et.intl.string(et.t.ifwQZb),
            { fractionalState: A, endsAt: I } = (0, e0.A)(),
            T = (0, eJ.Ay)(I, eJ.yE.CREDITS_ENDS_IN),
            S = null;
        if (A === J.xc.NONE || o) S = (0, a.jsx)(te.A, { text: f });
        else {
            h = !0;
            let e = et.intl.format(et.t["yR+oDD"], {
                helpCenterLink: eL.A.getArticleURL(ee.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            S = (0, a.jsx)(eX.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: t$.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: t$.V_,
                        children: (0, a.jsx)("div", { className: t$.eL, children: (0, a.jsx)(te.A, { text: T }) }),
                    }),
            });
        }
        return (0, a.jsx)(m.f5, {
            value: s,
            children: (0, a.jsx)(ne.Provider, {
                value: {
                    headingText: g,
                    headingTop: S,
                    showPill: h,
                    shouldShowChurnVariant: _,
                    premiumSubscription: c,
                    userDiscountOffer: i,
                    discountedPrice: r,
                    buttonVisibilityRef: n,
                },
                children: (0, a.jsx)(t9, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: p,
                }),
            }),
        });
    };
var ni = n(820284),
    nr = n(742589),
    ns = n(909536),
    na = n(392943),
    no = n(876587),
    nl = n(400669),
    nu = n(503255),
    nc = n(525311);
let nd = function () {
    let e = (0, ns.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, a.jsxs)(ni.A, {
        section: ee.JJy.NAVIGATION,
        children: [
            (0, a.jsx)(nr.A, {
                className: u()(nu.TQ, nc.C$),
                transparent: !0,
                role: "navigation",
                children: (0, a.jsxs)("div", {
                    className: nu.Wc,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nc.wk,
                            children: [
                                (0, a.jsx)(H.t, { colorClass: nc.tr }),
                                (0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": et.intl.string(et.t.Ipxkog),
                                    className: nc.Ss,
                                    children: (0, a.jsx)(na.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, a.jsxs)("div", {
                                className: nu.MQ,
                                children: [
                                    (0, a.jsx)(nl.l, {
                                        ref: t,
                                        size: "sm",
                                        location: E.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, a.jsx)(eW.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, a.jsx)(no.O, { targetElementRef: t, body: et.intl.string(et.t.EqUw7K) }),
        ],
    });
};
var n_ = n(98812),
    nh = n(67423);
let nf = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: s } = e,
        { analyticsLocations: o } = (0, m.Ay)(E.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, G.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(k.animated.div, {
        className: u()(n_.iE, { [n_.q4]: !t }),
        style: l,
        children: (0, a.jsxs)("div", {
            className: n_.iJ,
            children: [
                (0, a.jsx)("img", { alt: "", src: nh, className: n_.oU }),
                (0, a.jsxs)("div", {
                    className: n_.iQ,
                    children: [
                        (0, a.jsx)(V.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: et.intl.format(et.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, a.jsx)(B.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(et.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: s,
                                billingPeriod: (0, X.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(j.$, {
                    variant: "expressive",
                    icon: H.t,
                    size: "md",
                    text: et.intl.string(et.t.zrCzVB),
                    onClick: () =>
                        void (0, ed.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("13742"),
                                n.e("94161"),
                                n.e("13051"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: o,
                                    initialStep: tR.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var np = n(761508),
    nE = n(449543);
function nm(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function ng(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nA(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nI = n(345394);
function nT(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: nI.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function ny(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nN(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nv(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nR = n(996682);
function nO(e) {
    let {
        color: t = U.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: s = 100,
        height: o = 80,
    } = e;
    return (0, a.jsxs)("svg", {
        ...(0, nR.A)({ "aria-label": n, "aria-hidden": i, role: r }),
        width: s,
        height: o,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, a.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, a.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, a.jsx)("defs", {
                children: (0, a.jsx)("clipPath", {
                    id: "a",
                    children: (0, a.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function nb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nD = n(78701);
function nL(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: nD.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nw = n(462887),
    nM = n(736653),
    nP = n(259065),
    nx = n(206835),
    nk = n(976860),
    nU = n(591179),
    nG = n(462463),
    nF = n(878784),
    nV = n(425713),
    nB = n(696292),
    nj = n(192444),
    nH = n(617986),
    nY = n(892227),
    nW = n(81466),
    nK = n(318254),
    n$ = n(490285),
    nz = n(875679);
let nq = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, S.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, nY.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, a.jsxs)("div", {
        className: nz.kL,
        children: [
            null != n &&
                (0, a.jsxs)("div", {
                    className: nz.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nz.Pf,
                            children: [
                                (0, a.jsx)(nW.C, { size: "sm", color: U.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: et.intl.string(n$.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, a.jsx)(B.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(n$.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, a.jsx)("div", { className: nz.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, a.jsxs)("div", {
                    className: nz.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nz.Pf,
                            children: [
                                (0, a.jsx)(nK.C, { size: "sm", color: U.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(B.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: et.intl.string(n$.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, a.jsx)(B.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(n$.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nZ = n(758836),
    nX = n(190107),
    nQ = n(555599);
function nJ(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: n } = (0, nj.lk)(nX.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: r } = (0, S.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == r || null == r.reward_amount || r.reward_amount <= 0
                    ? null
                    : {
                          id: em.NITRO_ORBS_REWARDS_CARD_ID,
                          title: et.intl.string(n$.default.hx5AFp),
                          description: et.intl.format(n$.default.wq3CF2, { orbsCount: r.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(nQ.lH, nQ.yK),
                          footerContent: (0, a.jsx)(nq, {}),
                          ctaText: et.intl.string(n$.default.BxjHiu),
                          onCtaClick: () => (0, nk.pX)(ee.BVt.COLLECTIBLES_SHOP_WITH_TAB(nZ.G2.ORBS)),
                      },
            [i, r],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: em.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: et.intl.string(et.t.Csf5Ol),
                          description: et.intl.format(et.t.NpUfej, { bonusOrbMultiplier: n }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: et.intl.string(et.t.jVcuVY),
                          onCtaClick: () => (0, nH.navigateToQuestHome)({ fromContent: nB.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: nQ.Nf,
                      }
                    : null,
            [t, n],
        ),
    };
}
var n0 = n(975807),
    n1 = n(95035),
    n2 = n(862990),
    n3 = n(88001),
    n6 = n(466919),
    n4 = n(817577);
function n5() {
    (0, n0.A)(n3.TE);
}
function n7(e) {
    let t = (0, n2.O9)(),
        i = (0, d.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        r = i?.hasActiveTrial ?? !1,
        s = (0, o.useCallback)(() => {
            r
                ? (0, ed.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, a.jsx)(e, { ...t });
                  })
                : (0, W.A)({
                      subscriptionTier: J.pe.TIER_2,
                      initialPlanId: J.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, r]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: em.PREMIUM_GROUP_CARD_ID,
                      title: et.intl.string(n6.default.YkvksF),
                      description: (0, a.jsxs)(a.Fragment, {
                          children: [
                              et.intl.formatToPlainString(n6.default.JlyGQj, {
                                  totalSeats: n3.aw,
                                  premiumGroupProductName: (0, n3.DP)(),
                              }),
                              (0, a.jsx)("div", {
                                  className: nQ.LF,
                                  children: (0, a.jsx)(n1.A, {
                                      onClick: n5,
                                      children: et.intl.string(n6.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: et.intl.string(et.t.oW0eUd),
                      primaryAsset: n4,
                      ctaIcon: H.t,
                      ctaIconPosition: "start",
                      ctaText: et.intl.string(et.t.IJI7yk),
                      onCtaClick: s,
                  }
                : null,
        [s, t],
    );
}
var n8 = n(562819),
    n9 = n(892035),
    ie = n(793943),
    it = n(655752),
    ii = n(764231),
    ir = n(627380),
    is = n(30084),
    ia = n(792641),
    io = n(714206);
let il =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iu =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    ic =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function id() {
    let e,
        t,
        { analyticsLocations: n } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, nU.X)("useWhatsNewPerkCards"),
        { logitechCard: r, steelseriesCard: s } = eV(),
        l = (0, eu.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: c } = (0, n9.z$)("useWhatsNewPerkCards"),
        _ = (0, nG.A)({ analyticsLocations: n }),
        h = (0, o.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, nP.L)({ analyticsLocations: n }),
            );
        }, [n]),
        f = (0, o.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, n8.L)({ analyticsLocations: n }),
            );
        }, [n]),
        p = (0, o.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        g = (function (e) {
            let { fractionalState: t } = (0, e0.A)(),
                n = t === J.xc.FP_ONLY,
                i = (0, nF.$F)(),
                r = (0, nF.Xb)(),
                s = i?.status === nF.Wo.UPCOMING || n,
                a = (0, nV.N)(i?.id),
                l = (function () {
                    let e = (0, nF.$F)(),
                        t = (0, it.P)(),
                        n = (0, nF.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = ty()(),
                        r = ty()(n),
                        s = e.status === nF.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                c = (0, d.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion) && !s,
                _ = (0, ir.t)(),
                h = (0, it.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != h ? et.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, ii.T)(J.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === nF.Wo.UPCOMING
                              ? et.intl.formatToPlainString(et.t.a1eKDi, { days: _?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return et.intl.formatToPlainString(et.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return et.intl.formatToPlainString(et.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(_, o) ??
                                (0, ii.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let d = null;
                return (
                    null != a ? (d = s || c ? a.standard : a.ambientLarge) : n && (d = io),
                    {
                        id: em.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? et.intl.string(i.nameUnformattedNitro) : n ? et.intl.string(et.t.tx9Fvw) : "",
                        pillText: et.intl.string(et.t["jyYgZ+"]),
                        primaryAsset: d,
                        primaryAssetClassName: u()(ia.pq, { [ia.n6]: s, [ia.kE]: c }),
                        caption: null != r ? et.intl.formatToPlainString(et.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: l ?? void 0,
                        ctaText: et.intl.string(et.t.jVcuVY),
                        onCtaClick: () => (0, is.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, a, s, c, r, l, n, _, h, e]);
        })(n),
        A =
            ((e = L({ location: "useWhatsNewPerkCards" })),
            (t = (0, d.bG)([N.A], () => N.A.getPremiumTypeSubscription())),
            (0, o.useMemo)(() => {
                if (e !== b.NITRO_HOME_TILE) return null;
                let i = er(t);
                return null == i || null == t
                    ? null
                    : {
                          id: em.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                          title: i.title,
                          description: i.body,
                          pillText: i.badge,
                          primaryAsset: "/assets/c4347155a9b71184.svg",
                          primaryAssetClassName: nQ.lH,
                          ctaIcon: H.t,
                          ctaIconPosition: "start",
                          ctaText: i.cta,
                          onCtaClick: () =>
                              (0, W.A)({ subscription: t, initialPlanId: ei(t)?.id ?? null, analyticsLocations: n }),
                      };
            }, [n, t, e])),
        { nitroOrbsRewardsCard: I, questOrbMultiplierCard: T } = nJ("useWhatsNewPerkCards"),
        S = n7(n);
    return (0, o.useMemo)(() => {
        let e = [
                l ? null : r,
                l ? null : s,
                I,
                T,
                S,
                {
                    id: em.DISPLAY_NAME_STYLES_CARD_ID,
                    title: et.intl.string(et.t.OLtTrt),
                    description: et.intl.string(et.t["di/pXR"]),
                    onCtaClick: i ? _ : h,
                    ctaText: et.intl.string(et.t.jVcuVY),
                    primaryAsset: il,
                },
                {
                    id: em.CLIENT_THEMES_CARD_ID,
                    title: et.intl.string(et.t.acc6h6),
                    description: et.intl.formatToPlainString(et.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ic,
                    ctaText: et.intl.string(et.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ie.nf)(ie.HP.CUSTOM_THEME);
                    },
                },
                c
                    ? null
                    : {
                          id: em.PERMADECOS_CARD_ID,
                          title: et.intl.string(et.t.L14NZN),
                          description: et.intl.string(et.t.eCZkAI),
                          primaryAsset: (0, a.jsx)(nL, { alt: "", ariaHidden: !0 }),
                          ctaText: et.intl.string(et.t.jVcuVY),
                          onCtaClick: i ? _ : f,
                      },
                {
                    id: em.CUSTOM_APP_ICONS_CARD_ID,
                    title: et.intl.string(et.t["GU+wqh"]),
                    description: et.intl.string(et.t["1uPk1Z"]),
                    primaryAsset: iu,
                    ctaText: et.intl.string(et.t.y9TxXV),
                    onCtaClick: p,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            n = t ? 5 : 6;
        if ((e.splice(+!!t, 0, g), null != A && e.splice(1, 0, A), c)) {
            let t = null != A ? 2 : 1;
            e.splice(t, 0, {
                id: em.PROFILE_FRAMES_CARD_ID,
                title: et.intl.string(et.t.SGBDnu),
                description: et.intl.string(et.t.cMgegQ),
                pillText: et.intl.string(et.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(nQ.lH, nQ.yK),
                ctaText: et.intl.string(et.t.jVcuVY),
                onCtaClick: () => (0, nk.pX)(ee.BVt.COLLECTIBLES_SHOP_WITH_TAB(nZ.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > n && e.splice(n, e.length - n), e;
    }, [g, A, I, T, S, h, p, f, _, i, r, s, l, c]);
}
var i_ = n(355097),
    ih = n(64514),
    ip = n(121818),
    iE =
        (((s = {}).BEST_OF_NITRO = "bestof"),
        (s.APPEARANCE_STYLE = "appearance"),
        (s.UPGRADES = "upgrades"),
        (s.VIP_EXTRAS = "vip"),
        s);
let im = [
    { id: "bestof", label: () => et.intl.string(et.t.q1u7nQ) },
    { id: "appearance", label: () => et.intl.string(et.t.CUnZkZ) },
    { id: "upgrades", label: () => et.intl.string(et.t.KC5q8v) },
    { id: "vip", label: () => et.intl.string(et.t.DjEAcv) },
];
var ig = n(758495);
function iA(e) {
    e.stopPropagation();
}
function iI(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, nM.DP)(),
                t = (0, nU.X)("useFavoritesPerkCards"),
                n = (0, nF.Lh)(),
                i = (0, nV.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
                s = (0, nx.A)({ scrollPosition: i_._F.TRY_IT_OUT, analyticsLocations: r }),
                l = (0, o.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, o.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                c = (0, o.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, o.useCallback)(() => {
                    (0, nk.pX)(ee.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, o.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, nG.A)({ analyticsLocations: r }),
                f = (0, o.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, nP.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                p = id(),
                g = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: A, questOrbMultiplierCard: I } = nJ("useFavoritesPerkCards"),
                T = n7(r),
                S = (0, o.useMemo)(
                    () => [
                        {
                            id: em.SERVER_BOOSTS_CARD_ID,
                            title: et.intl.formatToPlainString(et.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: et.intl.formatToPlainString(et.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, a.jsx)(nm, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != T ? { ...T, categories: ["bestof"] } : null,
                        {
                            id: em.PROFILES_CARD_ID,
                            title: et.intl.string(et.t.xDRab3),
                            description: et.intl.string(et.t.yn6fWA),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: t ? h : s,
                            primaryAsset: (0, a.jsx)(ng, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: em.HD_VIDEO_CARD_ID,
                            title: et.intl.string(et.t["/mQ5gg"]),
                            description: et.intl.string(et.t["7WwAXh"]),
                            primaryAsset: (0, a.jsx)(nA, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: em.CLIENT_THEMES_CARD_ID,
                            title: et.intl.string(et.t.acc6h6),
                            description: et.intl.formatToPlainString(et.t.WQazjs, { themeCount: 20 }),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: ic,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: em.MORE_EMOJIS_CARD_ID,
                            title: et.intl.string(et.t.D8vIDT),
                            description: et.intl.string(et.t.DRMecB),
                            primaryAsset: (0, a.jsx)(nT, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: em.LARGE_UPLOADS_CARD_ID,
                            title: et.intl.string(et.t.nL1WZV),
                            description: et.intl.formatToPlainString(et.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, a.jsx)(nS, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: em.CUSTOM_APP_ICONS_CARD_ID,
                            title: et.intl.string(et.t["GU+wqh"]),
                            description: et.intl.string(et.t["1uPk1Z"]),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: iu,
                            categories: ["appearance"],
                        },
                        {
                            id: em.ENTRANCE_SOUNDS_CARD_ID,
                            title: et.intl.string(et.t.WJfCPi),
                            description: et.intl.string(et.t.liQKJR),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: em.DISPLAY_NAME_STYLES_CARD_ID,
                            title: et.intl.string(et.t.OLtTrt),
                            description: et.intl.string(et.t["di/pXR"]),
                            onCtaClick: t ? h : f,
                            ctaText: et.intl.string(et.t.jVcuVY),
                            primaryAsset: il,
                            categories: ["appearance"],
                        },
                        {
                            id: em.CUSTOM_SOUNDS_CARD_ID,
                            title: et.intl.string(et.t["Cu/oFd"]),
                            description: et.intl.string(et.t.czj2aa),
                            primaryAsset: (0, a.jsx)(ny, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: em.SPECIAL_STICKERS_CARD_ID,
                            title: et.intl.string(et.t.MQoVeb),
                            description: et.intl.string(et.t.HGCLZX),
                            primaryAsset: (0, a.jsx)("div", {
                                className: nQ.Uc,
                                children: (0, a.jsx)(nC, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: em.SUPER_REACTIONS_CARD_ID,
                            title: et.intl.string(et.t.qERvAA),
                            description: et.intl.string(et.t.WkUWzx),
                            primaryAsset: (0, a.jsx)(nN, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: em.VIDEO_BACKGROUNDS_CARD_ID,
                            title: et.intl.string(et.t.ssVDYQ),
                            description: et.intl.string(et.t.aUSRMa),
                            primaryAsset: (0, nw.M)(e) ? ih : ip,
                            categories: ["upgrades"],
                        },
                        {
                            id: em.EARLY_ACCESS_CARD_ID,
                            title: et.intl.string(et.t["g/KRY6"]),
                            description: et.intl.string(et.t.JzAmJc),
                            primaryAsset: (0, a.jsx)(nv, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: em.BADGE_CARD_ID,
                            title: et.intl.string(et.t.Bn3CtB),
                            description: et.intl.string(et.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, a.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, a.jsx)(nO, { color: U.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: em.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: et.intl.string(et.t["MTD+7w"]),
                            description: et.intl.string(et.t.Bhs0s6),
                            ctaText: et.intl.string(et.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, a.jsx)(nb, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != A ? { ...A, categories: ["vip"] } : null,
                        null != I ? { ...I, categories: ["vip"] } : null,
                        {
                            id: em.PERMADECOS_CARD_ID,
                            title: et.intl.string(et.t.L14NZN),
                            description: et.intl.string(et.t.eCZkAI),
                            primaryAsset: (0, a.jsx)(nL, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, A, I, T, s, l, u, c, d, _, f, h, t],
                );
            return (0, o.useMemo)(() => S.filter((e) => null != e && !g.includes(e.id)), [S, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [r, s] = (0, o.useState)(i?.categories[0] ?? iE.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => n.filter((e) => null != e && e.categories.includes(r)), [n, r]);
    return (0, a.jsxs)("div", {
        className: ig.uW,
        children: [
            (0, a.jsx)(V.D, { variant: "display-sm", className: ig.R_, children: et.intl.string(et.t["Uh3+CA"]) }),
            (0, a.jsx)(np.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: s,
                className: ig.Lq,
                "aria-label": et.intl.string(et.t["Uh3+CA"]),
                children: im.map((e) =>
                    (0, a.jsx)(np.V.Item, { id: e.id, className: ig.IC, children: e.label() }, e.id),
                ),
            }),
            (0, a.jsx)(
                nE.A,
                {
                    gap: 20,
                    className: ig.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, a.jsx)(
                                eN.S,
                                { ...e, glowing: t === e.id, containerClassName: ig.Ui, onFocus: iA },
                                e.id,
                            );
                    }),
                },
                r,
            ),
        ],
    });
}
var iT = n(948562);
let iS = function (e) {
    let { className: t } = e,
        n = (0, nM.DP)();
    return (0, a.jsx)("img", {
        className: u()(iT.D, t),
        src: (0, nw.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iy = n(946062);
let iC = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, a.jsxs)("div", {
              className: u()(iy.kL, iy.Gd, iy.Eg),
              children: [(0, a.jsx)(iS, {}), (0, a.jsx)(nd, {}), i],
          })
        : (0, a.jsx)(eY.h, { color: "nitro-pink", className: u()(iy.kL, iy.Gd), offsetBottom: n, children: i });
};
function iN(e) {
    let { glowingPerkId: t = null } = e,
        n = id();
    return (0, a.jsx)(eD, {
        sectionClassName: eb.uW,
        heading: (0, a.jsx)(V.D, { variant: "display-sm", className: eb.R_, children: et.intl.string(et.t.Aw5DRm) }),
        grid: (0, a.jsx)(a.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, a.jsx)(
                    eN.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(eb.Nr, { [eb.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var iv = n(994763),
    iR = n(79119);
let iO = "section",
    ib = "perk",
    iD = (e) => {
        let { userId: t } = e,
            n = (0, R.ds)(),
            { isInNitroHomeHeaderTreatment: i } = (0, w.jy)("nitro_member_hub_header"),
            r = (0, c.zy)();
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, T.Ay)()];
                null != t && e.push((0, C.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                H(!0);
            }, []),
            (0, P.j)(),
            (0, I.P)(A.b);
        let s = o.useRef(null),
            l = o.useRef(null),
            O = (0, d.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            { isReady: D, programReward: k } = (0, S.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: U,
                glowingSectionId: G,
                glowingPerkId: F,
                scrollBlock: V,
                scrollInline: B,
            } = o.useMemo(() => {
                let e = new URLSearchParams(r.search),
                    t = e.get(ib),
                    n = e.get(iO);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [r.search]);
        (0, iv.z)(U ?? "", null != U, V, B);
        let [j, H] = o.useState(!1),
            Y = (0, M.p)(),
            W = o.useRef(null),
            [K, $] = o.useState(!1),
            z = null != Y && null != O && O.status === ee.Dmq.CANCELED,
            q = (0, x.iU)(J.gD.PREMIUM_MONTH_TIER_2, Y, O),
            Z = !K && z,
            X = null != (0, d.bG)([y.A], () => (null != t ? y.A.getUserProfile(t) : null)) && (D || null != k),
            Q = L({ location: "PremiumSubscriberHome" }),
            ei = o.useMemo(() => (Q === b.STICKY_BAR ? er(O) : null), [Q, O]),
            [es, ea] = (0, g.Cc)(null != ei && X ? (en[b.STICKY_BAR] ?? null) : null, O?.id ?? "", void 0, !0),
            eo = null != O && O.status === ee.Dmq.CANCELED,
            eu = i && !n && !eo,
            { analyticsLocations: ec } = (0, m.Ay)(E.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ed, e_] = o.useState(!1);
        return X
            ? (0, a.jsxs)(f.Gt, {
                  className: iy.xW,
                  ref: s,
                  children: [
                      (0, a.jsx)(iC, {
                          shouldRenderNitroHomeHeaderExperiment: eu,
                          gradientOffsetBottom: n ? 0.55 : 0.8,
                          children: (0, a.jsxs)(m.f5, {
                              value: ec,
                              children: [
                                  (0, a.jsx)(_.L, {
                                      innerRef: W,
                                      onChange: (e) => $(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, a.jsx)(nn, {
                                          buttonVisibilityRef: W,
                                          className: iy.v1,
                                          userDiscountOffer: Y,
                                          discountedPrice: q,
                                      }),
                                  }),
                                  (0, a.jsx)(eH, { glowingPerkId: F, glowingSectionId: G }),
                                  (0, a.jsx)(iN, { glowingPerkId: F }),
                                  (0, a.jsx)(iI, { glowingPerkId: F }),
                                  (0, a.jsx)(e$, {
                                      className: iy.Zy,
                                      location: E.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: ee.liQ.NITRO_HOME, section: ee.JJy.GIFT_BANNER },
                                  }),
                                  (0, a.jsx)("div", { className: iy.hz }),
                                  (0, a.jsx)(_.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !ed &&
                                              (v.default.track(ee.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ec,
                                              }),
                                              e_(!0));
                                      },
                                      children: (0, a.jsx)("div", { ref: l, className: iy._Z }),
                                  }),
                                  (0, a.jsx)("img", {
                                      src: iR,
                                      className: iy.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: et.intl.string(et.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      z &&
                          null != q &&
                          (0, a.jsx)(nf, {
                              isVisible: Z && j,
                              premiumSubscription: O,
                              churnDiscountOffer: Y,
                              discountedPrice: q,
                          }),
                      null != es &&
                          null != ei &&
                          null != O &&
                          (0, a.jsx)(el, { premiumSubscription: O, copy: ei, markAsDismissed: ea }),
                  ],
              })
            : eu
              ? (0, a.jsxs)("div", {
                    className: u()(iy.kL, iy.Lq, iy.TN, iy.Eg),
                    children: [
                        (0, a.jsx)(nd, {}),
                        (0, a.jsx)("div", { className: iy.S, children: (0, a.jsx)(h.y, {}) }),
                    ],
                })
              : (0, a.jsx)("div", { className: u()(iy.kL, iy.Lq), children: (0, a.jsx)(h.y, {}) });
    };
