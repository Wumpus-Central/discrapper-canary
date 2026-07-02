n.d(t, { Ay: () => iP, WU: () => iS, x6: () => iv }), n(321073), n(323874), n(14289), n(35956);
var i,
    a,
    s,
    r = n(627968),
    l = n(64700),
    c = n(503698),
    o = n.n(c),
    d = n(873263),
    u = n(17928),
    m = n(269115),
    A = n(289873),
    g = n(689175),
    N = n(228366),
    p = n(793574),
    f = n(688810),
    E = n(131607),
    x = n(949030),
    h = n(611924),
    C = n(961250),
    R = n(366505),
    _ = n(321191),
    I = n(903209),
    T = n(166403),
    b = n(174459),
    j = n(881489),
    v = n(945810),
    S =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.NITRO_HOME_TILE = 1)] = "NITRO_HOME_TILE"),
        (i[(i.STICKY_BAR = 2)] = "STICKY_BAR"),
        (i[(i.NITRO_TAB_POPOVER = 3)] = "NITRO_TAB_POPOVER"),
        i);
let P = (0, v.mj)({
    name: "2026-06-monthly-to-yearly-upsells",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
function y(e) {
    let { location: t } = e;
    return P.useConfig({ location: t });
}
var M = n(7066),
    O = n(131168),
    L = n(482589),
    D = n(410516),
    U = n(18005),
    k = n(661531),
    G = n(717421),
    w = n(331322),
    F = n(534514),
    H = n(834730),
    B = n(821609),
    V = n(403581),
    z = n(815021),
    W = n(532794),
    K = n(465323),
    Y = n(554146),
    X = n(773669),
    Z = n(97352),
    q = n(252424),
    $ = n(428262),
    Q = n(580630),
    J = n(202541),
    ee = n(652215),
    et = n(375708);
let en = {
    [S.STICKY_BAR]: Y.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
    [S.NITRO_TAB_POPOVER]: Y.M.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
};
function ei(e) {
    let t = (0, $.EL)(e);
    if (null == t || !J.BL.has(t.planId)) return null;
    let n = J.hd[t.planId]?.skuId;
    if (null == n) return null;
    let i = J.zE[n] ?? null;
    return null == i ? null : (Z.A.get(i) ?? null);
}
function ea(e) {
    let t = (function (e) {
        if (null == e || e.status !== ee.Dmq.ACTIVE || e.isPurchasedExternally || (0, $.Nc)(e)) return null;
        let t = ei(e);
        if (null == t) return null;
        let n = { currency: e.currency },
            i = (0, $.z_)(t, !1, n);
        if (null == i) return null;
        let a = (0, K.LQ)(i.amount, i.currency);
        return null == a || a <= 0
            ? null
            : { displayAmount: a, currency: i.currency, savingsPercent: (0, $.k8)(t, !1, n) };
    })(e);
    if (null == t) return null;
    let n = (0, Q.$g)(t.displayAmount, t.currency, { maximumFractionDigits: 0 }),
        i = null != t.savingsPercent ? (0, q.l9)(X.default.locale, t.savingsPercent / 100) : void 0;
    return {
        title: et.intl.formatToPlainString(et.t.cZPXK6, { amount: n }),
        body: et.intl.string(et.t.KD6MH5),
        cta: et.intl.string(et.t.xmQfYw),
        badge: null != i ? et.intl.formatToPlainString(et.t.IAybsG, { discount: i }) : void 0,
    };
}
var es = n(576243),
    er = n(49999),
    el = n(279261);
function ec(e) {
    let { premiumSubscription: t, copy: n, markAsDismissed: i } = e,
        { title: a, body: s, cta: l } = n,
        { analyticsLocations: c } = (0, f.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        o = (0, G.z)({
            from: { transform: "translateY(0%)", opacity: 0 },
            to: { transform: "translateY(-100%)", opacity: 1 },
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(U.animated.div, {
        className: el.iE,
        style: o,
        children: (0, r.jsxs)(w.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            padding: 16,
            fullWidth: !1,
            className: el.iJ,
            children: [
                (0, r.jsx)(es.A, { size: 64, iconSize: 40, color: k.A.colors.WHITE }),
                (0, r.jsxs)(w.B, {
                    direction: "vertical",
                    gap: 4,
                    fullWidth: !1,
                    className: el.iQ,
                    children: [
                        (0, r.jsx)(F.D, { variant: "heading-md/semibold", color: "text-strong", children: a }),
                        (0, r.jsx)(H.E, { variant: "text-sm/medium", color: "text-muted", children: s }),
                    ],
                }),
                (0, r.jsx)(B.$, {
                    variant: "expressive",
                    icon: V.t,
                    size: "md",
                    text: l,
                    onClick: () => {
                        i(er.i.TAKE_ACTION),
                            (0, W.A)({ subscription: t, initialPlanId: ei(t)?.id ?? null, analyticsLocations: c });
                    },
                }),
                (0, r.jsx)(z.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": et.intl.string(et.t.WAI6xu),
                    onClick: () => i(er.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var eo = n(31502),
    ed = n(562708),
    eu = n(192308),
    em = n(885574),
    eA = n(43990),
    eg = n(993077),
    eN = n(139286),
    ep = n(872725),
    ef = n(920050),
    eE = n(792656);
n(985603);
var ex = n(777376),
    eh = n(185797),
    eC = n(237146),
    eR = n(74776);
function e_(e) {
    let { openRewardModal: t } = e,
        n = (0, eh.F)();
    if (n.kind === eh.L.SUBSCRIBE)
        return (0, r.jsxs)("div", {
            className: eR.R$,
            children: [
                (0, r.jsx)(eE.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: J.pe.TIER_2,
                }),
                (0, r.jsx)(B.$, { variant: "secondary", size: "md", text: et.intl.string(et.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === ex.p.CLAIMED
            ? { text: et.intl.string(eC.default.Plwzgf) }
            : { text: et.intl.string(et.t.hvVgAZ) };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: eR.R$,
                children: [
                    (0, r.jsx)(B.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, r.jsx)(B.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === ex.p.CLAIM_IN_PROGRESS &&
                (0, r.jsxs)("div", {
                    className: eR.ed,
                    children: [
                        (0, r.jsx)(em.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, r.jsx)(H.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: et.intl.string(eC.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function eI(e) {
    let { glowing: t = !1 } = e;
    (0, eN.A)({
        type: ed.ImpressionTypes.VIEW,
        name: ed.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: ef.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, f.Ay)(p.A.CROISSANT_PREMIUM_HERO_CARD),
        a = l.useCallback(() => {
            (0, eu.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, r.jsx)(eA.N, {
        theme: ee.NJ8.DARKER,
        children: (e) =>
            (0, r.jsx)(f.f5, {
                value: i,
                children: (0, r.jsx)("div", {
                    className: o()(e, eR.kL),
                    children: (0, r.jsx)(ep.A, {
                        cardType: eg.s.CUSTOM,
                        cardClassName: eR.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, r.jsxs)("div", {
                            className: eR.XF,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: eR.j,
                                    children: [
                                        (0, r.jsx)("div", { className: eR._g }),
                                        (0, r.jsx)("div", { className: eR.$h }),
                                        (0, r.jsx)("div", { className: eR.Rv }),
                                        (0, r.jsx)("div", { className: eR.Lw }),
                                        (0, r.jsx)("div", { className: eR.mR }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: eR.Qs,
                                    children: [
                                        (0, r.jsx)("img", {
                                            className: eR.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, r.jsx)(F.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: eR.DD,
                                            children: et.intl.string(eC.default.RGT513),
                                        }),
                                        (0, r.jsx)(H.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: eR.h_,
                                            children: et.intl.string(eC.default["+pTnsf"]),
                                        }),
                                        (0, r.jsx)(e_, { openRewardModal: a }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var eT = n(744064);
function eb(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, eh.F)(),
        a = { isThirdPartyPerk: !0 },
        s =
            i.kind === eh.L.SUBSCRIBE
                ? { ...a, subscriptionRequired: !0 }
                : {
                      ...a,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, r.jsx)(eT.S, {
        id: ef.XBOX_PREMIUM_PERK_CARD_ID,
        title: et.intl.string(eC.default.UVL9tD),
        description: et.intl.string(eC.default["I+IXr0"]),
        ...s,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, r.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function ej(e) {
    let { analyticsLocations: t } = (0, f.Ay)(p.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, r.jsx)(f.f5, { value: t, children: (0, r.jsx)(eb, { ...e }) });
}
var ev = n(367791),
    eS = n(672193);
function eP(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: a, grid: s, gridClassName: l } = e,
        c = eS.Ui;
    return (0, r.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            a,
            null != s ? (0, r.jsx)("div", { className: o()(c, null != a && ev.Jx, l), children: s }) : null,
        ],
    });
}
var ey = n(975571),
    eM = n(149995),
    eO = n(398523),
    eL = n(881373),
    eD = n(581921),
    eU = n(3074),
    ek = n(852218),
    eG = n(382259),
    ew = n(962995);
function eF() {
    let { analyticsLocations: e } = (0, f.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eL.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = eO.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, eM.Zk)({ location: "useHardwarePartnerPerkCards" }),
        a = (0, eM.S9)({ location: "useHardwarePartnerPerkCards" }),
        s = null === (0, eU.N)(),
        c = (0, eo.l)("useHardwarePartnerPerkCards"),
        { currentDate: o, nDaysInMonth: d } = (0, l.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, l.useMemo)(() => {
        let l = c ? void 0 : et.intl.string(et.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: ef.LOGITECH_3PP_CARD_ID,
                      title: et.intl.string(ew.default.OlObRa),
                      description: et.intl.format(ew.default.ZGOJ8R, {
                          discountPercent: eL.aW,
                          termsUrl: ey.A.getArticleURL(ee.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: o.getDate() / d,
                      ctaText: et.intl.string(et.t.w7s5Qr),
                      onCtaClick: () => (0, eD.P)({ partnerId: ek.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: l,
                      caption: (0, r.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ek.XY },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: ef.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: et.intl.string(et.t.m7PucM),
                      description: i
                          ? a
                              ? et.intl.format(et.t["1Zw6xL"], {})
                              : et.intl.format(et.t.KWdCO0, {})
                          : et.intl.format(et.t.zh1X7u, {}),
                      descriptionNote:
                          !a && i
                              ? et.intl.format(et.t.vblnHk, {
                                    partnerName: ek.CD[ek.Cs].label,
                                    helpdeskArticle: ey.A.getArticleURL(ee.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: l,
                      caption: (0, r.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: o.getDate() / d,
                      ctaText: et.intl.string(et.t.w7s5Qr),
                      onCtaClick: () => (0, eG.u)({ analyticsLocations: e, partnerIds: [ek.KS, ek.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ek.KS },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
        };
    }, [c, e, o, t, d, n, i, a, s]);
}
var eH = n(102338);
let eB = "xgpp";
function eV(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, eo.l)("premium_subscriber_home_rewards"),
        { logitechCard: a, steelseriesCard: s } = eF();
    if (!i) return null;
    let l = null != a || null != s;
    return (0, r.jsx)(eP, {
        id: eB,
        sectionClassName: o()(eH.uW, eH.Uv, eH.qr),
        heading: (0, r.jsx)(F.D, {
            variant: "display-sm",
            className: o()(eS.R_, ev.U6),
            children: et.intl.string(et.t.NG1e6l),
        }),
        beforeGrid: (0, r.jsx)("div", { className: ev.JE, children: (0, r.jsx)(eI, { glowing: t === eB }) }),
        grid: l
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ej, { containerClassName: eS.Nr }),
                      null != a && (0, r.jsx)(eT.S, { ...a, containerClassName: eS.Nr, glowing: n === a.id }),
                      null != s && (0, r.jsx)(eT.S, { ...s, containerClassName: eS.Nr, glowing: n === s.id }),
                  ],
              })
            : null,
    });
}
var ez = n(315629),
    eW = n(65470),
    eK = n(797221);
let eY = function (e) {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: a } = (0, f.Ay)(n);
    return (0, r.jsx)(f.f5, {
        value: a,
        children: (0, r.jsxs)(ez.h, {
            className: o()(eK.kL, eK.pm, t),
            color: "purple",
            children: [
                (0, r.jsxs)("div", {
                    className: eK.FS,
                    children: [
                        (0, r.jsx)(F.D, {
                            variant: "heading-xxl/bold",
                            className: eK.R_,
                            children: et.intl.string(et.t.Ve9Ge6),
                        }),
                        (0, r.jsx)(H.E, { variant: "text-md/medium", children: et.intl.string(et.t.yQ06u1) }),
                        (0, r.jsx)("div", {
                            className: eK.SB,
                            children: (0, r.jsx)(eW.A, {
                                buttonTextOverride: et.intl.string(et.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eK._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eX = n(877624);
let eZ =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eq(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: eZ,
        srcSet: `${eZ} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var e$ = n(502572),
    eQ = n(775602),
    eJ = n(366999),
    e0 = n(531260),
    e1 = n(780964),
    e2 = n(766075),
    e6 = n(786300),
    e7 = n(960851),
    e9 = n(89366),
    e8 = n(422936),
    e3 = n(234419),
    e5 = n(549996),
    e4 = n(810660),
    te = n(175569),
    tt = n(371764),
    tn = n(949964),
    ti = n(103411),
    ta = n(778712),
    ts = n(97808),
    tr = n(590251),
    tl = n(144165),
    tc = n(854627),
    to = n(427262),
    td = n(851746),
    tu = n(326084),
    tm = n(664654);
function tA() {
    var e, t, n;
    let { referralSentUsers: i } = (0, tm.J)(),
        a = (0, u.bG)([td.A], () => td.A.getRecipientStatus()),
        s = (0, u.bG)([td.A], () => td.A.getHasEligibleFriends()),
        r = a.size === tm.Z,
        l =
            ((e = !1 !== s),
            (t = i.length),
            (n = a.size === tm.Z && [...a.values()].every((e) => e === tu.aK.REDEEMED)),
            e
                ? t === tm.Z
                    ? n
                        ? et.intl.format(et.t["1aEjsH"], {
                              helpdeskArticle: ey.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM),
                          })
                        : et.intl.format(et.t["+u3AOO"], {
                              helpdeskArticle: ey.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM),
                          })
                    : et.intl.format(et.t["omMr+V"], { helpdeskArticle: ey.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM) })
                : et.intl.format(et.t["zWhX/Q"], { helpdeskArticle: ey.A.getArticleURL(ee.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: a.size, hasEligibleFriends: s, allSent: r, bodyText: l };
}
var tg = n(212737),
    tN = n(849812);
function tp(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    b.default.track(ee.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eu.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
        });
}
function tf(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: i } = (0, tc.A)({ userId: t.id, size: ta._3.SIZE_24 });
    return (0, r.jsx)(
        ts.eu,
        { className: tN.bj, src: n, "aria-label": (0, to.mG)(t), size: ta._3.SIZE_24, ...i },
        t.id,
    );
}
function tE(e) {
    let { slotIndex: t } = e;
    return (0, r.jsx)("div", { className: tN.p, children: t });
}
function tx(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(tN.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < tm.Z; n++)
                if (t?.[n] !== void 0) {
                    let i = (0, r.jsx)(tf, { user: t[n] }, t[n].id);
                    e.push(i);
                } else {
                    let t = (0, r.jsx)(tE, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function th(e) {
    let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: a } = e;
    return (0, r.jsx)(tr.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? tN.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: a ?? tN.e0,
        overlayClassName: t === tm.Z ? tN.ys : void 0,
        children: (0, r.jsx)(tl._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: n,
            width: n,
            zoomable: !1,
        }),
    });
}
function tC(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: a, allSent: s, bodyText: l } = tA();
    return (0, r.jsxs)("div", {
        className: o()(tN.kL, t),
        children: [
            (0, r.jsx)("div", { className: tN.G3, children: (0, r.jsx)(th, { nReferralsSent: i }) }),
            (0, r.jsxs)("div", {
                className: tN.IH,
                children: [
                    (0, r.jsx)(tx, { referralSentUsers: n, className: tN.GV }),
                    (0, r.jsxs)("div", {
                        className: tN.n4,
                        children: [
                            (0, r.jsx)(F.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: et.intl.string(et.t.USo4s7),
                            }),
                            (0, r.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, r.jsx)(B.$, {
                        variant: "primary",
                        disabled: !1 === a || !0 === s,
                        text: et.intl.string(et.t.Lm2nFc),
                        onClick: () =>
                            tp({ startingScreen: tg.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tR = n(989349),
    t_ = n.n(tR),
    tI = n(496431),
    tT = n(116689);
let tb = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, tI.A)(t_()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: a, hours: s, minutes: l, seconds: c } = i,
        d = [
            { unitValue: a, unitType: "days" },
            { unitValue: s, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: c, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: o()(tT.Xl, n),
        children: [
            (0, r.jsx)(H.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: et.intl.string(et.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: tT.$R,
                children: d.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, a] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: tT.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: tT.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: tT.B2,
                                                        children: (0, r.jsx)(H.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: tT.B2,
                                                        children: (0, r.jsx)(H.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(H.E, {
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
                                    (0, r.jsx)(H.E, {
                                        className: tT.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === d.length - 1),
                ),
            }),
        ],
    });
};
var tj = n(473702),
    tv = n(609425),
    tS = n(660184),
    tP = n(287809),
    ty = n(12052);
function tM() {
    let e = (0, u.bG)([tP.default], () => tP.default.getCurrentUser()),
        t = (0, tv.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: a } = (0, tc.A)({ userId: e?.id, size: ta._3.SIZE_56 });
    if (null == e) return null;
    let s = (0, to.mG)(e);
    return (0, r.jsxs)("div", {
        className: ty.kL,
        children: [
            (0, r.jsx)("div", {
                className: ty.my,
                children: (0, r.jsx)(ts.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: ta._3.SIZE_56,
                    "aria-label": s,
                    ...a,
                }),
            }),
            (0, r.jsx)("div", { className: ty.QC, children: (0, r.jsx)(tS.A, { userName: s, displayNameStyles: t }) }),
        ],
    });
}
var tO = n(707554),
    tL = n(218199);
let tD = function (e) {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: a } = e;
    return (0, r.jsx)(tO.F, {
        forceLevel: 1,
        children: (0, r.jsx)(F.D, { className: o()(tL.w, t, i && tL.n), variant: "display-md", color: n, children: a }),
    });
};
var tU = n(690093);
function tk(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: a, allSent: s, bodyText: l } = tA();
    return (0, r.jsxs)("div", {
        className: o()(tU.kL, t),
        children: [
            (0, r.jsx)("div", {
                className: tU.G3,
                children: (0, r.jsx)(th, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: tU.HP,
                    ringClassName: tU.pZ,
                }),
            }),
            (0, r.jsxs)("div", {
                className: tU.IH,
                children: [
                    (0, r.jsxs)("div", {
                        className: tU.n4,
                        children: [
                            (0, r.jsx)(F.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: et.intl.string(et.t.USo4s7),
                            }),
                            (0, r.jsx)(H.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, r.jsx)(tx, { referralSentUsers: n, className: tU.t7 }),
                ],
            }),
            (0, r.jsx)(B.$, {
                variant: "primary",
                disabled: !1 === a || !0 === s,
                text: et.intl.string(et.t.Lm2nFc),
                onClick: () =>
                    tp({ startingScreen: tg.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tG = n(702841),
    tw = n(676279),
    tF = n(20458),
    tH = n(141502);
let tB = function (e) {
    let {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: n,
            flyingWumpusAssetClassName: i,
            boltContainerClassName: a,
            carContainerClassName: s,
            hammerContainerClassName: l,
            keyContainerClassName: c,
            starContainerClassName: o,
            boltAssetClassName: d,
            carAssetClassName: u,
            hammerAssetClassName: m,
            keyAssetClassName: A,
            starAssetClassName: g,
            animationSpeedScale: N = 1,
        } = e,
        p = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        f = (0, tw.TM)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tH.A, {
                supportHEVCAlpha: f,
                isMotionReduced: p,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: N,
            }),
            (0, r.jsx)(tF.A, {
                isMotionReduced: p,
                containerVisibilityPercentage: t,
                boltContainerClassName: a,
                carContainerClassName: s,
                hammerContainerClassName: l,
                keyContainerClassName: c,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: A,
                starAssetClassName: g,
                animationSpeedScale: N,
            }),
        ],
    });
};
var tV = n(43588);
let tz = function (e) {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, r.jsx)(tB, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: o()(tV.wG, n && tV.Vx),
        flyingWumpusAssetClassName: o()(tV.lu, n && tV.ov),
        boltContainerClassName: o()(tV.nJ, n && tV.Wc),
        hammerContainerClassName: o()(tV.Gj, n && tV.XA),
        keyContainerClassName: o()(tV.FV, n && tV.oZ),
        starContainerClassName: o()(tV.E1, n && tV.LN),
        boltAssetClassName: o()(tV.j7, n && tV.QN),
        hammerAssetClassName: o()(tV.Wv, n && tV.B9),
        keyAssetClassName: o()(tV.rs, n && tV.I1),
        starAssetClassName: o()(tV.OY, n && tV.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tW = (((a = {}).MORNING = "morning"), (a.AFTERNOON = "afternoon"), (a.EVENING = "evening"), a);
function tK() {
    let e,
        t = { [tW.MORNING]: et.t["Wvc/I+"], [tW.AFTERNOON]: et.t["d+0STx"], [tW.EVENING]: et.t.CqsxKI };
    return et.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tW.MORNING : e >= 12 && e < 17 ? tW.AFTERNOON : tW.EVENING],
    );
}
var tY = n(97584),
    tX = n(202241);
let tZ = function (e) {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, r.jsx)(tB, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: o()(tX.wG, n && tX.Vx),
            flyingWumpusAssetClassName: o()(tX.lu, n && tX.ov),
            boltContainerClassName: o()(tX.nJ, n && tX.Wc),
            hammerContainerClassName: o()(tX.Gj, n && tX.XA),
            keyContainerClassName: o()(tX.FV, n && tX.oZ),
            starContainerClassName: o()(tX.E1, n && tX.LN),
            boltAssetClassName: o()(tX.j7, n && tX.QN),
            hammerAssetClassName: o()(tX.Wv, n && tX.B9),
            keyAssetClassName: o()(tX.rs, n && tX.I1),
            starAssetClassName: o()(tX.OY, n && tX.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tq = {
        [M.CL.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: s,
                } = e,
                l = (0, u.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
                { visibilityPercentageRef: c, visibilityPercentage: d } = (0, e4.U)(!l),
                m = tK();
            return (0, r.jsx)("div", {
                className: o()(tY.kL, tY.Eg, t),
                ref: a,
                children: (0, r.jsxs)("div", {
                    className: o()(tY.W2, tY.HQ),
                    ref: c,
                    children: [
                        (0, r.jsxs)(w.B, {
                            align: "start",
                            gap: 32,
                            className: tY.ZU,
                            children: [
                                i && n,
                                (0, r.jsxs)(w.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, r.jsx)(tD, {
                                            className: tY.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: m,
                                        }),
                                        (0, r.jsx)(tM, {}),
                                    ],
                                }),
                                s && (0, r.jsx)(tk, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: tY.y3,
                            children: (0, r.jsx)(tz, { containerVisibilityPercentage: d, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [M.CL.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: s,
                } = e,
                l = (0, u.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
                { visibilityPercentageRef: c, visibilityPercentage: d } = (0, e4.U)(!l),
                m = et.intl.string(et.t.ifwQZb);
            return (0, r.jsx)("div", {
                className: o()(tY.kL, tY.Eg, t),
                ref: a,
                children: (0, r.jsxs)("div", {
                    className: o()(tY.W2, tY.m8),
                    ref: c,
                    children: [
                        (0, r.jsxs)(w.B, {
                            align: "start",
                            gap: 32,
                            className: tY.Y0,
                            children: [
                                i && n,
                                (0, r.jsx)("div", {
                                    className: o()(tY.N1, tY.v8),
                                    children: (0, r.jsx)(tD, {
                                        className: tY.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: m,
                                    }),
                                }),
                                s && (0, r.jsx)(tk, {}),
                            ],
                        }),
                        (0, r.jsx)("div", {
                            className: tY.BF,
                            children: (0, r.jsx)(tZ, { containerVisibilityPercentage: d, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [M.CL.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: s,
                } = e,
                l = tK();
            return (0, r.jsx)("div", {
                className: o()(tY.kL, tY.Eg, t),
                ref: a,
                children: (0, r.jsxs)("div", {
                    className: o()(tY.W2, tY.J_),
                    children: [
                        (0, r.jsxs)(w.B, {
                            align: "start",
                            gap: 32,
                            className: tY.$S,
                            children: [
                                i && n,
                                (0, r.jsxs)(w.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, r.jsx)(tD, {
                                            className: tY.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: l,
                                        }),
                                        (0, r.jsx)(tM, {}),
                                    ],
                                }),
                            ],
                        }),
                        s && (0, r.jsx)("div", { className: tY.Pq, children: (0, r.jsx)(tk, {}) }),
                    ],
                }),
            });
        },
    };
function t$(e) {
    let { treatment: t, ...n } = e,
        i = tq[t];
    return null != i ? (0, r.jsx)(i, { ...n }) : null;
}
var tQ = n(652533),
    tJ = n(447764),
    t0 = n(180894);
let t1 = function (e) {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: tJ.BI,
                children: (0, r.jsx)(tQ.Ay, {
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
                    children: (0, r.jsx)("img", { src: t0.A, alt: "", className: tJ.Q }),
                }),
            }),
            (0, r.jsx)(tF.A, {
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
    t6 = n(774774),
    t7 = n(975916);
let t9 = function () {
    let e = { section: ee.JJy.REVERSE_TRIAL_BANNER };
    return (0, r.jsxs)("div", {
        className: t7.vK,
        children: [
            (0, r.jsx)(t6.e4, { text: et.intl.string(et.t.qYKftX), className: t7.Io }),
            (0, r.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: t7._u,
            }),
            (0, r.jsx)("div", {
                className: t7.IP,
                children: (0, r.jsx)(H.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: et.intl.format(et.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, r.jsx)(t2.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: t7.aA,
                shinyButtonClassName: t7.Xp,
            }),
        ],
    });
};
var t8 = n(18671);
let t3 = function () {
    let e = (0, tG.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion);
    return (0, r.jsx)(tF.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: t8.cI,
        hammerContainerClassName: t8.qg,
        keyContainerClassName: t8.h2,
        boltContainerClassName: t8.Bz,
        starAssetClassName: t8.ks,
        hammerAssetClassName: t8.GY,
        keyAssetClassName: t8.p4,
        boltAssetClassName: t8.vy,
    });
};
function t5(e) {
    let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
        a = (0, j.Zb)(t);
    return (0, r.jsx)("div", {
        className: o()(tY.kL, n),
        ref: i,
        children: (0, r.jsxs)("div", {
            className: tY.ap,
            children: [
                (0, r.jsxs)(w.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, r.jsx)(te.A, { text: et.intl.string(et.t.yhldRB) }),
                        (0, r.jsxs)(w.B, {
                            align: "start",
                            gap: 12,
                            className: tY.rG,
                            children: [
                                (0, r.jsx)(tD, { children: et.intl.format(et.t.FwjP6W, { days: a }) }),
                                (0, r.jsx)(H.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: et.intl.string(et.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(w.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, r.jsx)(eE.A, {
                                    size: "md",
                                    buttonTextOverride: et.intl.string(et.t["2+luBl"]),
                                    iconOverride: V.t,
                                    variantOverride: "expressive",
                                }),
                                (0, r.jsx)(B.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: et.intl.string(et.t.Af7ye6),
                                    onClick: () => (0, e2.openUserSettings)(e1.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: tY.Hk,
                    children: [(0, r.jsx)(eq, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(t3, {})],
                }),
            ],
        }),
    });
}
function t4(e) {
    let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: a, shouldShowReferralProgressBar: s } = e,
        {
            headingText: l,
            headingTop: c,
            showPill: d,
            shouldShowChurnVariant: m,
            premiumSubscription: A,
            userDiscountOffer: g,
            discountedPrice: N,
            buttonVisibilityRef: E,
        } = nt(),
        { treatment: x, isInNitroHomeHeaderTreatment: h } = (0, M.jy)("subscriber_home_hero"),
        { analyticsLocations: C } = (0, f.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
        R = (0, e5.c)(eX.C.MARKETING_PAGE_BANNER),
        _ = null != A && A.status === ee.Dmq.CANCELED,
        I = h && !_,
        T = null;
    null != R && "marketingPageBanner" === R.properties.properties.oneofKind
        ? (T = (0, r.jsx)(tt.x, {
              componentId: R.id,
              promotionBannerMarketingComponentFields: R.properties.properties.marketingPageBanner,
          }))
        : i
          ? (T = (0, r.jsx)(tn.A, { variant: tn.c.SUBSCRIBER_HOME }))
          : a
            ? (T = (0, r.jsx)(t9, {}))
            : s && !I && (T = (0, r.jsx)(tC, {}));
    let b = (0, e3.V)(),
        j = (0, e8.O)(),
        v = (0, D.U9)(j, J.pe.TIER_2) ? J.pe.TIER_2 : void 0,
        S = null != A && A.status !== ee.Dmq.ACCOUNT_HOLD && A.hasAnyPremiumNitro,
        P = (0, e0.A)(),
        y = P.isFractionalPremiumActive && !S && null == T && !m,
        O = (0, u.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion),
        { visibilityPercentageRef: L, visibilityPercentage: U } = (0, e4.U)(!O);
    return a
        ? (0, r.jsx)(t5, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: E })
        : I
          ? (0, r.jsx)(t$, {
                treatment: x,
                className: t,
                headingTop: c,
                showPill: d,
                buttonVisibilityRef: E,
                shouldShowReferralProgressBar: s,
            })
          : (0, r.jsx)("div", {
                className: o()(tY.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: E,
                children: (0, r.jsxs)("div", {
                    className: tY.Qs,
                    ref: L,
                    children: [
                        d && c,
                        (0, r.jsxs)("div", {
                            className: tY.N1,
                            children: [
                                (0, r.jsx)(t1, { containerVisibilityPercentage: U }),
                                m &&
                                    g?.expiresAt != null &&
                                    (0, r.jsx)(tb, { expiresAt: g.expiresAt.toISOString(), className: tY.IZ }),
                                (0, r.jsx)(tD, {
                                    children:
                                        m && null != g
                                            ? et.intl.format(et.t["3yZP0G"], { percent: g.discount.amount })
                                            : l,
                                }),
                                m &&
                                    null != g &&
                                    null != N &&
                                    (0, r.jsx)(H.E, {
                                        className: tY.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: et.intl.format(et.t["3Q4wCy"], {
                                            discountedPrice: N,
                                            billingPeriod: (0, $.Ke)(g.discount.userUsageLimitInterval),
                                            numMonths: g.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, r.jsxs)("div", {
                            className: y || m ? tY.UJ : void 0,
                            children: [
                                y &&
                                    (0, r.jsx)(eE.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: b?.subscription_trial?.sku_id ?? v,
                                    }),
                                m &&
                                    null != A &&
                                    (0, r.jsx)(B.$, {
                                        variant: "expressive",
                                        icon: V.t,
                                        size: "md",
                                        text: et.intl.string(et.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = tj.g.CONFIRM_DISCOUNT),
                                                void (0, eu.openModalLazy)(async () => {
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
                                                        (0, r.jsx)(t, {
                                                            ...n,
                                                            analyticsLocations: C,
                                                            initialStep: e,
                                                            premiumSubscription: A,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, r.jsx)(eW.A, {
                                    variant: y || m ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: et.intl.string(et.t["3KomGa"]),
                                }),
                            ],
                        }),
                        T,
                    ],
                }),
            });
}
let [ne, nt] = (0, e6.A)(),
    nn = function (e) {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: a } = e,
            { analyticsLocations: s } = (0, f.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, j.ds)(),
            c = (0, e7.cg)(),
            o = (0, e9.QQ)(),
            d = (0, u.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            m = null != d && d.status === ee.Dmq.CANCELED && null != i,
            A = o && !m,
            g = et.intl.string(et.t.qYKftX),
            N = (0, ti.m)(),
            E = et.intl.string(et.t.ifwQZb),
            { fractionalState: x, endsAt: h } = (0, e0.A)(),
            C = (0, eJ.Ay)(h, eJ.yE.CREDITS_ENDS_IN),
            R = null;
        if (x === J.xc.NONE || l) R = (0, r.jsx)(te.A, { text: g });
        else {
            A = !0;
            let e = et.intl.format(et.t["yR+oDD"], {
                helpCenterLink: ey.A.getArticleURL(ee.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            R = (0, r.jsx)(e$.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tY.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: tY.V_,
                        children: (0, r.jsx)("div", { className: tY.eL, children: (0, r.jsx)(te.A, { text: C }) }),
                    }),
            });
        }
        return (0, r.jsx)(f.f5, {
            value: s,
            children: (0, r.jsx)(ne.Provider, {
                value: {
                    headingText: E,
                    headingTop: R,
                    showPill: A,
                    shouldShowChurnVariant: m,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: a,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(t4, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: N,
                }),
            }),
        });
    };
var ni = n(820284),
    na = n(742589),
    ns = n(909536),
    nr = n(392943),
    nl = n(876587),
    nc = n(400669),
    no = n(503255),
    nd = n(525311);
let nu = function () {
    let e = (0, ns.Gh)("nitro_home_header"),
        t = l.useRef(null);
    return (0, r.jsxs)(ni.A, {
        section: ee.JJy.NAVIGATION,
        children: [
            (0, r.jsx)(na.A, {
                className: o()(no.TQ, nd.C$),
                transparent: !0,
                role: "navigation",
                children: (0, r.jsxs)("div", {
                    className: no.Wc,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nd.wk,
                            children: [
                                (0, r.jsx)(V.t, { colorClass: nd.tr }),
                                (0, r.jsx)("span", {
                                    role: "img",
                                    "aria-label": et.intl.string(et.t.Ipxkog),
                                    className: nd.Ss,
                                    children: (0, r.jsx)(nr.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, r.jsxs)("div", {
                                className: no.MQ,
                                children: [
                                    (0, r.jsx)(nc.l, {
                                        ref: t,
                                        size: "sm",
                                        location: p.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, r.jsx)(eW.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, r.jsx)(nl.O, { targetElementRef: t, body: et.intl.string(et.t.EqUw7K) }),
        ],
    });
};
var nm = n(98812),
    nA = n(67423);
let ng = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: a, discountedPrice: s } = e,
        { analyticsLocations: l } = (0, f.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        c = (0, G.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(U.animated.div, {
        className: o()(nm.iE, { [nm.q4]: !t }),
        style: c,
        children: (0, r.jsxs)("div", {
            className: nm.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: nA, className: nm.oU }),
                (0, r.jsxs)("div", {
                    className: nm.iQ,
                    children: [
                        (0, r.jsx)(F.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: et.intl.format(et.t["3yZP0G"], { percent: a.discount.amount }),
                        }),
                        (0, r.jsx)(H.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(et.t["3Q4wCy"], {
                                numMonths: a.discount.userUsageLimit,
                                discountedPrice: s,
                                billingPeriod: (0, $.Ke)(a.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(B.$, {
                    variant: "expressive",
                    icon: V.t,
                    size: "md",
                    text: et.intl.string(et.t.zrCzVB),
                    onClick: () =>
                        void (0, eu.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("13742"),
                                n.e("94161"),
                                n.e("13051"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: tj.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var nN = n(761508),
    np = n(449543);
function nf(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nE(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nx(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nh = n(345394);
function nC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: nh.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function n_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nT(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function nb(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nj = n(996682);
function nv(e) {
    let {
        color: t = k.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: a,
        width: s = 100,
        height: l = 80,
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, nj.A)({ "aria-label": n, "aria-hidden": i, role: a }),
        width: s,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, r.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, r.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsx)("clipPath", {
                    id: "a",
                    children: (0, r.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function nS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nP = n(78701);
function ny(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: a, width: s = 288, height: l = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: s, height: l },
        src: nP.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var nM = n(462887),
    nO = n(736653),
    nL = n(259065),
    nD = n(206835),
    nU = n(976860),
    nk = n(591179),
    nG = n(462463),
    nw = n(878784),
    nF = n(425713),
    nH = n(696292),
    nB = n(192444),
    nV = n(617986),
    nz = n(892227),
    nW = n(81466),
    nK = n(318254),
    nY = n(490285),
    nX = n(875679);
let nZ = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, R.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, nz.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, r.jsxs)("div", {
        className: nX.kL,
        children: [
            null != n &&
                (0, r.jsxs)("div", {
                    className: nX.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nX.Pf,
                            children: [
                                (0, r.jsx)(nW.C, { size: "sm", color: k.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(H.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: et.intl.string(nY.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(H.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(nY.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, r.jsx)("div", { className: nX.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, r.jsxs)("div", {
                    className: nX.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: nX.Pf,
                            children: [
                                (0, r.jsx)(nK.C, { size: "sm", color: k.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(H.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: et.intl.string(nY.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, r.jsx)(H.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: et.intl.format(nY.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nq = n(758836),
    n$ = n(190107),
    nQ = n(555599);
function nJ(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: n } = (0, nB.lk)(n$.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: a } = (0, R.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, l.useMemo)(
            () =>
                !i || null == a || null == a.reward_amount || a.reward_amount <= 0
                    ? null
                    : {
                          id: ef.NITRO_ORBS_REWARDS_CARD_ID,
                          title: et.intl.string(nY.default.hx5AFp),
                          description: et.intl.format(nY.default.wq3CF2, { orbsCount: a.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: o()(nQ.lH, nQ.yK),
                          footerContent: (0, r.jsx)(nZ, {}),
                          ctaText: et.intl.string(nY.default.BxjHiu),
                          onCtaClick: () => (0, nU.pX)(ee.BVt.COLLECTIBLES_SHOP_WITH_TAB(nq.G2.ORBS)),
                      },
            [i, a],
        ),
        questOrbMultiplierCard: (0, l.useMemo)(
            () =>
                t
                    ? {
                          id: ef.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: et.intl.string(et.t.Csf5Ol),
                          description: et.intl.format(et.t.NpUfej, { bonusOrbMultiplier: n }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: et.intl.string(et.t.jVcuVY),
                          onCtaClick: () => (0, nV.navigateToQuestHome)({ fromContent: nH.u.NITRO_HOME_PERK_CARD }),
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
    n6 = n(88001),
    n7 = n(466919),
    n9 = n(817577);
function n8() {
    (0, n0.A)(n6.TE);
}
function n3(e) {
    let t = (0, n2.O9)(),
        i = (0, u.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        a = i?.hasActiveTrial ?? !1,
        s = (0, l.useCallback)(() => {
            a
                ? (0, eu.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, W.A)({
                      subscriptionTier: J.pe.TIER_2,
                      initialPlanId: J.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, a]);
    return (0, l.useMemo)(
        () =>
            t
                ? {
                      id: ef.PREMIUM_GROUP_CARD_ID,
                      title: et.intl.string(n7.default.YkvksF),
                      description: (0, r.jsxs)(r.Fragment, {
                          children: [
                              et.intl.formatToPlainString(n7.default.JlyGQj, {
                                  totalSeats: n6.aw,
                                  premiumGroupProductName: (0, n6.DP)(),
                              }),
                              (0, r.jsx)("div", {
                                  className: nQ.LF,
                                  children: (0, r.jsx)(n1.A, {
                                      onClick: n8,
                                      children: et.intl.string(n7.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: et.intl.string(et.t.oW0eUd),
                      primaryAsset: n9,
                      ctaIcon: V.t,
                      ctaIconPosition: "start",
                      ctaText: et.intl.string(et.t.IJI7yk),
                      onCtaClick: s,
                  }
                : null,
        [s, t],
    );
}
var n5 = n(562819),
    n4 = n(892035),
    ie = n(793943),
    it = n(655752),
    ii = n(764231),
    ia = n(627380),
    is = n(30084),
    ir = n(792641),
    il = n(714206);
let ic =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    io =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    id =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iu() {
    let e,
        t,
        { analyticsLocations: n } = (0, f.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, nk.X)("useWhatsNewPerkCards"),
        { logitechCard: a, steelseriesCard: s } = eF(),
        c = (0, eo.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, n4.z$)("useWhatsNewPerkCards"),
        m = (0, nG.A)({ analyticsLocations: n }),
        A = (0, l.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, nL.L)({ analyticsLocations: n }),
            );
        }, [n]),
        g = (0, l.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, n5.L)({ analyticsLocations: n }),
            );
        }, [n]),
        N = (0, l.useCallback)(() => {
            (0, e2.openUserSettings)(e1.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        E = (function (e) {
            let { fractionalState: t } = (0, e0.A)(),
                n = t === J.xc.FP_ONLY,
                i = (0, nw.$F)(),
                a = (0, nw.Xb)(),
                s = i?.status === nw.Wo.UPCOMING || n,
                r = (0, nF.N)(i?.id),
                c = (function () {
                    let e = (0, nw.$F)(),
                        t = (0, it.P)(),
                        n = (0, nw.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = t_()(),
                        a = t_()(n),
                        s = e.status === nw.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        l = a.clone().add(s, "months"),
                        c = a.clone().add(r, "months").diff(l);
                    return Math.max(0, Math.min(1, (i.diff(l) - 864e5) / c));
                })(),
                d = (0, u.bG)([eQ.Ay], () => eQ.Ay.useReducedMotion) && !s,
                m = (0, ia.t)(),
                A = (0, it.P)();
            return (0, l.useMemo)(() => {
                let t,
                    l = null != A ? et.intl.string(A.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, ii.T)(J.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === nw.Wo.UPCOMING
                              ? et.intl.formatToPlainString(et.t.a1eKDi, { days: m?.days ?? 0 })
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
                                })(m, l) ??
                                (0, ii.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let u = null;
                return (
                    null != r ? (u = s || d ? r.standard : r.ambientLarge) : n && (u = il),
                    {
                        id: ef.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? et.intl.string(i.nameUnformattedNitro) : n ? et.intl.string(et.t.tx9Fvw) : "",
                        pillText: et.intl.string(et.t["jyYgZ+"]),
                        primaryAsset: u,
                        primaryAssetClassName: o()(ir.pq, { [ir.n6]: s, [ir.kE]: d }),
                        caption: null != a ? et.intl.formatToPlainString(et.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: c ?? void 0,
                        ctaText: et.intl.string(et.t.jVcuVY),
                        onCtaClick: () => (0, is.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, r, s, d, a, c, n, m, A, e]);
        })(n),
        x =
            ((e = y({ location: "useWhatsNewPerkCards" })),
            (t = (0, u.bG)([T.A], () => T.A.getPremiumTypeSubscription())),
            (0, l.useMemo)(() => {
                if (e !== S.NITRO_HOME_TILE) return null;
                let i = ea(t);
                return null == i || null == t
                    ? null
                    : {
                          id: ef.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                          title: i.title,
                          description: i.body,
                          pillText: i.badge,
                          primaryAsset: "/assets/c4347155a9b71184.svg",
                          primaryAssetClassName: nQ.lH,
                          ctaIcon: V.t,
                          ctaIconPosition: "start",
                          ctaText: i.cta,
                          onCtaClick: () =>
                              (0, W.A)({ subscription: t, initialPlanId: ei(t)?.id ?? null, analyticsLocations: n }),
                      };
            }, [n, t, e])),
        { nitroOrbsRewardsCard: h, questOrbMultiplierCard: C } = nJ("useWhatsNewPerkCards"),
        R = n3(n);
    return (0, l.useMemo)(() => {
        let e = [
                c ? null : a,
                c ? null : s,
                h,
                C,
                R,
                {
                    id: ef.DISPLAY_NAME_STYLES_CARD_ID,
                    title: et.intl.string(et.t.OLtTrt),
                    description: et.intl.string(et.t["di/pXR"]),
                    onCtaClick: i ? m : A,
                    ctaText: et.intl.string(et.t.jVcuVY),
                    primaryAsset: ic,
                },
                {
                    id: ef.CLIENT_THEMES_CARD_ID,
                    title: et.intl.string(et.t.acc6h6),
                    description: et.intl.formatToPlainString(et.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: id,
                    ctaText: et.intl.string(et.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ie.nf)(ie.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: ef.PERMADECOS_CARD_ID,
                          title: et.intl.string(et.t.L14NZN),
                          description: et.intl.string(et.t.eCZkAI),
                          primaryAsset: (0, r.jsx)(ny, { alt: "", ariaHidden: !0 }),
                          ctaText: et.intl.string(et.t.jVcuVY),
                          onCtaClick: i ? m : g,
                      },
                {
                    id: ef.CUSTOM_APP_ICONS_CARD_ID,
                    title: et.intl.string(et.t["GU+wqh"]),
                    description: et.intl.string(et.t["1uPk1Z"]),
                    primaryAsset: io,
                    ctaText: et.intl.string(et.t.y9TxXV),
                    onCtaClick: N,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            n = t ? 5 : 6;
        if ((e.splice(+!!t, 0, E), null != x && e.splice(1, 0, x), d)) {
            let t = null != x ? 2 : 1;
            e.splice(t, 0, {
                id: ef.PROFILE_FRAMES_CARD_ID,
                title: et.intl.string(et.t.SGBDnu),
                description: et.intl.string(et.t.cMgegQ),
                pillText: et.intl.string(et.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: o()(nQ.lH, nQ.yK),
                ctaText: et.intl.string(et.t.jVcuVY),
                onCtaClick: () => (0, nU.pX)(ee.BVt.COLLECTIBLES_SHOP_WITH_TAB(nq.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > n && e.splice(n, e.length - n), e;
    }, [E, x, h, C, R, A, N, g, m, i, a, s, c, d]);
}
var im = n(355097),
    iA = n(64514),
    ig = n(121818),
    iN =
        (((s = {}).BEST_OF_NITRO = "bestof"),
        (s.APPEARANCE_STYLE = "appearance"),
        (s.UPGRADES = "upgrades"),
        (s.VIP_EXTRAS = "vip"),
        s);
let ip = [
    { id: "bestof", label: () => et.intl.string(et.t.q1u7nQ) },
    { id: "appearance", label: () => et.intl.string(et.t.CUnZkZ) },
    { id: "upgrades", label: () => et.intl.string(et.t.KC5q8v) },
    { id: "vip", label: () => et.intl.string(et.t.DjEAcv) },
];
var iE = n(758495);
function ix(e) {
    e.stopPropagation();
}
function ih(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, nO.DP)(),
                t = (0, nk.X)("useFavoritesPerkCards"),
                n = (0, nw.Lh)(),
                i = (0, nF.N)(n)?.standard ?? null,
                { analyticsLocations: a } = (0, f.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                s = (0, nD.A)({ scrollPosition: im._F.TRY_IT_OUT, analyticsLocations: a }),
                c = (0, l.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                o = (0, l.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                d = (0, l.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                u = (0, l.useCallback)(() => {
                    (0, nU.pX)(ee.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, l.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                A = (0, nG.A)({ analyticsLocations: a }),
                g = (0, l.useCallback)(() => {
                    (0, e2.openUserSettings)(e1.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, nL.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                N = iu(),
                E = (0, l.useMemo)(() => N.map((e) => e?.id), [N]),
                { nitroOrbsRewardsCard: x, questOrbMultiplierCard: h } = nJ("useFavoritesPerkCards"),
                C = n3(a),
                R = (0, l.useMemo)(
                    () => [
                        {
                            id: ef.SERVER_BOOSTS_CARD_ID,
                            title: et.intl.formatToPlainString(et.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: et.intl.formatToPlainString(et.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: o,
                            primaryAsset: (0, r.jsx)(nf, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != C ? { ...C, categories: ["bestof"] } : null,
                        {
                            id: ef.PROFILES_CARD_ID,
                            title: et.intl.string(et.t.xDRab3),
                            description: et.intl.string(et.t.yn6fWA),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: t ? A : s,
                            primaryAsset: (0, r.jsx)(nE, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ef.HD_VIDEO_CARD_ID,
                            title: et.intl.string(et.t["/mQ5gg"]),
                            description: et.intl.string(et.t["7WwAXh"]),
                            primaryAsset: (0, r.jsx)(nx, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ef.CLIENT_THEMES_CARD_ID,
                            title: et.intl.string(et.t.acc6h6),
                            description: et.intl.formatToPlainString(et.t.WQazjs, { themeCount: 20 }),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: id,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ef.MORE_EMOJIS_CARD_ID,
                            title: et.intl.string(et.t.D8vIDT),
                            description: et.intl.string(et.t.DRMecB),
                            primaryAsset: (0, r.jsx)(nC, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ef.LARGE_UPLOADS_CARD_ID,
                            title: et.intl.string(et.t.nL1WZV),
                            description: et.intl.formatToPlainString(et.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, r.jsx)(nR, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ef.CUSTOM_APP_ICONS_CARD_ID,
                            title: et.intl.string(et.t["GU+wqh"]),
                            description: et.intl.string(et.t["1uPk1Z"]),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: io,
                            categories: ["appearance"],
                        },
                        {
                            id: ef.ENTRANCE_SOUNDS_CARD_ID,
                            title: et.intl.string(et.t.WJfCPi),
                            description: et.intl.string(et.t.liQKJR),
                            ctaText: et.intl.string(et.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: ef.DISPLAY_NAME_STYLES_CARD_ID,
                            title: et.intl.string(et.t.OLtTrt),
                            description: et.intl.string(et.t["di/pXR"]),
                            onCtaClick: t ? A : g,
                            ctaText: et.intl.string(et.t.jVcuVY),
                            primaryAsset: ic,
                            categories: ["appearance"],
                        },
                        {
                            id: ef.CUSTOM_SOUNDS_CARD_ID,
                            title: et.intl.string(et.t["Cu/oFd"]),
                            description: et.intl.string(et.t.czj2aa),
                            primaryAsset: (0, r.jsx)(n_, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ef.SPECIAL_STICKERS_CARD_ID,
                            title: et.intl.string(et.t.MQoVeb),
                            description: et.intl.string(et.t.HGCLZX),
                            primaryAsset: (0, r.jsx)("div", {
                                className: nQ.Uc,
                                children: (0, r.jsx)(nI, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ef.SUPER_REACTIONS_CARD_ID,
                            title: et.intl.string(et.t.qERvAA),
                            description: et.intl.string(et.t.WkUWzx),
                            primaryAsset: (0, r.jsx)(nT, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ef.VIDEO_BACKGROUNDS_CARD_ID,
                            title: et.intl.string(et.t.ssVDYQ),
                            description: et.intl.string(et.t.aUSRMa),
                            primaryAsset: (0, nM.M)(e) ? iA : ig,
                            categories: ["upgrades"],
                        },
                        {
                            id: ef.EARLY_ACCESS_CARD_ID,
                            title: et.intl.string(et.t["g/KRY6"]),
                            description: et.intl.string(et.t.JzAmJc),
                            primaryAsset: (0, r.jsx)(nb, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ef.BADGE_CARD_ID,
                            title: et.intl.string(et.t.Bn3CtB),
                            description: et.intl.string(et.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, r.jsx)(nv, { color: k.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ef.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: et.intl.string(et.t["MTD+7w"]),
                            description: et.intl.string(et.t.Bhs0s6),
                            ctaText: et.intl.string(et.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, r.jsx)(nS, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != x ? { ...x, categories: ["vip"] } : null,
                        null != h ? { ...h, categories: ["vip"] } : null,
                        {
                            id: ef.PERMADECOS_CARD_ID,
                            title: et.intl.string(et.t.L14NZN),
                            description: et.intl.string(et.t.eCZkAI),
                            primaryAsset: (0, r.jsx)(ny, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, x, h, C, s, c, o, d, u, m, g, A, t],
                );
            return (0, l.useMemo)(() => R.filter((e) => null != e && !E.includes(e.id)), [R, E]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [a, s] = (0, l.useState)(i?.categories[0] ?? iN.BEST_OF_NITRO),
        c = (0, l.useMemo)(() => n.filter((e) => null != e && e.categories.includes(a)), [n, a]);
    return (0, r.jsxs)("div", {
        className: iE.uW,
        children: [
            (0, r.jsx)(F.D, { variant: "display-sm", className: iE.R_, children: et.intl.string(et.t["Uh3+CA"]) }),
            (0, r.jsx)(nN.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: s,
                className: iE.Lq,
                "aria-label": et.intl.string(et.t["Uh3+CA"]),
                children: ip.map((e) =>
                    (0, r.jsx)(nN.V.Item, { id: e.id, className: iE.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                np.A,
                {
                    gap: 20,
                    className: iE.jG,
                    children: c.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(
                                eT.S,
                                { ...e, glowing: t === e.id, containerClassName: iE.Ui, onFocus: ix },
                                e.id,
                            );
                    }),
                },
                a,
            ),
        ],
    });
}
var iC = n(948562);
let iR = function (e) {
    let { className: t } = e,
        n = (0, nO.DP)();
    return (0, r.jsx)("img", {
        className: o()(iC.D, t),
        src: (0, nM.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i_ = n(946062);
let iI = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, r.jsxs)("div", {
              className: o()(i_.kL, i_.Gd, i_.Eg),
              children: [(0, r.jsx)(iR, {}), (0, r.jsx)(nu, {}), i],
          })
        : (0, r.jsx)(ez.h, { color: "nitro-pink", className: o()(i_.kL, i_.Gd), offsetBottom: n, children: i });
};
function iT(e) {
    let { glowingPerkId: t = null } = e,
        n = iu();
    return (0, r.jsx)(eP, {
        sectionClassName: eS.uW,
        heading: (0, r.jsx)(F.D, { variant: "display-sm", className: eS.R_, children: et.intl.string(et.t.Aw5DRm) }),
        grid: (0, r.jsx)(r.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, r.jsx)(
                    eT.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: o()(eS.Nr, { [eS.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var ib = n(994763),
    ij = n(79119);
let iv = "section",
    iS = "perk",
    iP = (e) => {
        let { userId: t } = e,
            n = (0, j.ds)(),
            { isInNitroHomeHeaderTreatment: i } = (0, M.jy)("nitro_member_hub_header"),
            a = (0, d.zy)();
        l.useEffect(() => {
            N.h.wait(async () => {
                let e = [(0, C.Ay)()];
                null != t && e.push((0, I.A)(t)), await Promise.all(e);
            });
        }, [t]),
            l.useEffect(() => {
                V(!0);
            }, []),
            (0, L.j)(),
            (0, h.P)(x.b);
        let s = l.useRef(null),
            c = l.useRef(null),
            v = (0, u.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
            { isReady: P, programReward: U } = (0, R.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: k,
                glowingSectionId: G,
                glowingPerkId: w,
                scrollBlock: F,
                scrollInline: H,
            } = l.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get(iS),
                    n = e.get(iv);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        (0, ib.z)(k ?? "", null != k, F, H);
        let [B, V] = l.useState(!1),
            z = (0, O.p)(),
            W = l.useRef(null),
            [K, Y] = l.useState(!1),
            X = null != z && null != v && v.status === ee.Dmq.CANCELED,
            Z = (0, D.iU)(J.gD.PREMIUM_MONTH_TIER_2, z, v),
            q = !K && X,
            $ = null != (0, u.bG)([_.A], () => (null != t ? _.A.getUserProfile(t) : null)) && (P || null != U),
            Q = y({ location: "PremiumSubscriberHome" }),
            ei = l.useMemo(() => (Q === S.STICKY_BAR ? ea(v) : null), [Q, v]),
            [es, er] = (0, E.Cc)(null != ei && $ ? (en[S.STICKY_BAR] ?? null) : null, v?.id ?? "", void 0, !0),
            el = null != v && v.status === ee.Dmq.CANCELED,
            eo = i && !n && !el,
            { analyticsLocations: ed } = (0, f.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [eu, em] = l.useState(!1);
        return $
            ? (0, r.jsxs)(g.Gt, {
                  className: i_.xW,
                  ref: s,
                  children: [
                      (0, r.jsx)(iI, {
                          shouldRenderNitroHomeHeaderExperiment: eo,
                          gradientOffsetBottom: n ? 0.55 : 0.8,
                          children: (0, r.jsxs)(f.f5, {
                              value: ed,
                              children: [
                                  (0, r.jsx)(m.L, {
                                      innerRef: W,
                                      onChange: (e) => Y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, r.jsx)(nn, {
                                          buttonVisibilityRef: W,
                                          className: i_.v1,
                                          userDiscountOffer: z,
                                          discountedPrice: Z,
                                      }),
                                  }),
                                  (0, r.jsx)(eV, { glowingPerkId: w, glowingSectionId: G }),
                                  (0, r.jsx)(iT, { glowingPerkId: w }),
                                  (0, r.jsx)(ih, { glowingPerkId: w }),
                                  (0, r.jsx)(eY, {
                                      className: i_.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: ee.liQ.NITRO_HOME, section: ee.JJy.GIFT_BANNER },
                                  }),
                                  (0, r.jsx)("div", { className: i_.hz }),
                                  (0, r.jsx)(m.L, {
                                      innerRef: c,
                                      onChange: (e) => {
                                          e &&
                                              !eu &&
                                              (b.default.track(ee.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ed,
                                              }),
                                              em(!0));
                                      },
                                      children: (0, r.jsx)("div", { ref: c, className: i_._Z }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: ij,
                                      className: i_.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: et.intl.string(et.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      X &&
                          null != Z &&
                          (0, r.jsx)(ng, {
                              isVisible: q && B,
                              premiumSubscription: v,
                              churnDiscountOffer: z,
                              discountedPrice: Z,
                          }),
                      null != es &&
                          null != ei &&
                          null != v &&
                          (0, r.jsx)(ec, { premiumSubscription: v, copy: ei, markAsDismissed: er }),
                  ],
              })
            : eo
              ? (0, r.jsxs)("div", {
                    className: o()(i_.kL, i_.Lq, i_.TN, i_.Eg),
                    children: [
                        (0, r.jsx)(nu, {}),
                        (0, r.jsx)("div", { className: i_.S, children: (0, r.jsx)(A.y, {}) }),
                    ],
                })
              : (0, r.jsx)("div", { className: o()(i_.kL, i_.Lq), children: (0, r.jsx)(A.y, {}) });
    };
