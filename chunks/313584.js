s.d(t, { A: () => nO }), s(323874), s(14289), s(35956);
var i,
    a,
    n,
    l,
    r,
    c,
    o,
    d = s(627968),
    u = s(64700),
    m = s(503698),
    x = s.n(m),
    g = s(873263),
    p = s(17928),
    h = s(289873),
    N = s(228366),
    f = s(73825),
    A = s(974544),
    j = s(107834),
    E = s(793574),
    C = s(688810),
    b = s(277984),
    R = s(86379),
    _ = s(160946),
    v = s(682174),
    T = s(840251),
    I = s(688151);
let S = new T.E([], I.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var P = s(611924),
    y = s(532794),
    M = s(976860),
    O = s(351906),
    D = s(287809),
    L = s(295405),
    k = s(166403),
    U = s(174459),
    G = s(474090),
    w = s(881489),
    B = s(945960),
    H = s(945810),
    F =
        (((i = {}).CONTROL = "control"),
        (i.TREATMENT_A = "treatment_a"),
        (i.TREATMENT_B = "treatment_b"),
        (i.TREATMENT_C = "treatment_c"),
        i);
let V = (0, H.mj)({
    name: "2026-05-nitro-home-header",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "treatment_a" },
        2: { treatment: "treatment_b" },
        3: { treatment: "treatment_c" },
    },
});
function z(e) {
    let t = V.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var W = s(554146),
    K = s(269115),
    X = s(689175),
    Y = s(131607),
    Q = s(961250),
    Z = s(366505),
    q = s(543572),
    J = s(903209),
    $ = s(927813),
    ee = s(107857),
    et = s(131168),
    es = s(482589),
    ei = s(410516),
    ea = s(580929),
    en = s(661531),
    el = s(717421),
    er = s(331322),
    ec = s(534514),
    eo = s(834730),
    ed = s(821609),
    eu = s(403581),
    em = s(815021),
    ex = s(576243),
    eg = s(49999),
    ep = s(375708),
    eh = s(984029);
function eN(e) {
    let { premiumSubscription: t, content: s, markAsDismissed: i } = e,
        { analyticsLocations: a } = (0, C.Ay)(E.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        n = (0, el.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, d.jsx)(ea.animated.div, {
        className: eh.iE,
        style: n,
        children: (0, d.jsxs)("div", {
            className: eh.iJ,
            children: [
                (0, d.jsx)(ex.A, { size: 64, iconSize: 40, color: en.A.colors.WHITE }),
                (0, d.jsxs)("div", {
                    className: eh.qX,
                    children: [
                        (0, d.jsxs)(er.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: eh.iQ,
                            children: [
                                (0, d.jsx)(ec.D, {
                                    variant: "heading-md/semibold",
                                    color: "text-strong",
                                    children: s.title,
                                }),
                                (0, d.jsx)(eo.E, { variant: "text-sm/medium", color: "text-muted", children: s.body }),
                            ],
                        }),
                        (0, d.jsx)(ed.$, {
                            variant: "expressive",
                            icon: eu.t,
                            size: "md",
                            text: s.cta,
                            onClick: () => {
                                i(eg.i.TAKE_ACTION),
                                    (0, y.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: a });
                            },
                        }),
                    ],
                }),
                (0, d.jsx)(em.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": ep.intl.string(ep.t.WAI6xu),
                    onClick: () => i(eg.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var ef = s(898850),
    eA = s(31502),
    ej = s(562708),
    eE = s(192308),
    eC = s(885574),
    eb = s(43990),
    eR = s(993077),
    e_ = s(139286),
    ev = s(872725),
    eT = s(920050),
    eI = s(792656),
    eS = s(985603),
    eP = s(777376),
    ey = s(185797),
    eM = s(652215),
    eO = s(202541),
    eD = s(151001),
    eL = s(823e3);
function ek(e) {
    let { openRewardModal: t } = e,
        s = (0, ey.F)();
    if (s.kind === ey.L.SUBSCRIBE)
        return (0, d.jsxs)("div", {
            className: eL.R$,
            children: [
                (0, d.jsx)(eI.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: eO.pe.TIER_2,
                }),
                (0, d.jsx)(ed.$, { variant: "secondary", size: "md", text: ep.intl.string(ep.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === eP.p.CLAIMED
            ? { text: ep.intl.string(eD.default.Plwzgf) }
            : { text: ep.intl.string(ep.t.hvVgAZ) };
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsxs)("div", {
                className: eL.R$,
                children: [
                    (0, d.jsx)(ed.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, d.jsx)(ed.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === eP.p.CLAIM_IN_PROGRESS &&
                (0, d.jsxs)("div", {
                    className: eL.ed,
                    children: [
                        (0, d.jsx)(eC.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, d.jsx)(eo.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: ep.intl.string(eD.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function eU(e) {
    let { glowing: t = !1 } = e;
    (0, e_.A)({
        type: ej.ImpressionTypes.VIEW,
        name: ej.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: eT.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, C.Ay)(E.A.CROISSANT_PREMIUM_HERO_CARD),
        a = u.useCallback(() => {
            (0, eE.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("30480"), s.e("55251")]).then(s.bind(s, 836291));
                return (t) => (0, d.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, d.jsx)(eb.N, {
        theme: eM.NJ8.DARKER,
        children: (e) =>
            (0, d.jsx)(C.f5, {
                value: i,
                children: (0, d.jsx)("div", {
                    className: x()(e, eL.kL),
                    children: (0, d.jsx)(ev.A, {
                        cardType: eR.s.CUSTOM,
                        cardClassName: eL.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, d.jsxs)("div", {
                            className: eL.XF,
                            children: [
                                (0, d.jsxs)("div", {
                                    className: eL.j,
                                    children: [
                                        (0, d.jsx)("div", { className: eL._g }),
                                        (0, d.jsx)("div", { className: eL.$h }),
                                        (0, d.jsx)("div", { className: eL.Rv }),
                                        (0, d.jsx)("div", { className: eL.Lw }),
                                        (0, d.jsx)("div", { className: eL.mR }),
                                    ],
                                }),
                                (0, d.jsxs)("div", {
                                    className: eL.Qs,
                                    children: [
                                        (0, d.jsx)("img", {
                                            className: eL.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, d.jsx)(ec.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: eL.DD,
                                            children: ep.intl.string(eD.default.RGT513),
                                        }),
                                        (0, d.jsx)(eo.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: eL.h_,
                                            children: ep.intl.string(eD.default["+pTnsf"]),
                                        }),
                                        (0, d.jsx)(ek, { openRewardModal: a }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var eG = s(744064);
function ew(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, ey.F)(),
        a = { isThirdPartyPerk: !0 },
        n =
            i.kind === ey.L.SUBSCRIBE
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
    return (0, d.jsx)(eG.S, {
        id: eT.XBOX_PREMIUM_PERK_CARD_ID,
        title: ep.intl.string(eD.default.UVL9tD),
        description: ep.intl.string(eD.default["I+IXr0"]),
        ...n,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, d.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function eB(e) {
    let { analyticsLocations: t } = (0, C.Ay)(E.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, d.jsx)(C.f5, { value: t, children: (0, d.jsx)(ew, { ...e }) });
}
var eH = s(661871),
    eF = s(851777);
function eV(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: a, grid: n, gridClassName: l } = e,
        r = eF.Ui;
    return (0, d.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            a,
            null != n ? (0, d.jsx)("div", { className: x()(r, null != a && eH.Jx, l), children: n }) : null,
        ],
    });
}
var ez = s(975571),
    eW = s(149995),
    eK = s(398523),
    eX = s(881373),
    eY = s(581921),
    eQ = s(3074),
    eZ = s(852218),
    eq = s(161319),
    eJ = s(778414);
function e$() {
    let { analyticsLocations: e } = (0, C.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eX.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        s = eK.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, eW.Zk)({ location: "useHardwarePartnerPerkCards" }),
        a = (0, eW.S9)({ location: "useHardwarePartnerPerkCards" }),
        n = null === (0, eQ.N)(),
        l = (0, eA.l)("useHardwarePartnerPerkCards"),
        { currentDate: r, nDaysInMonth: c } = (0, u.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, u.useMemo)(() => {
        let o = l ? void 0 : ep.intl.string(ep.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: eT.LOGITECH_3PP_CARD_ID,
                      title: ep.intl.string(eJ.default.OlObRa),
                      description: ep.intl.format(eJ.default.ZGOJ8R, {
                          discountPercent: eX.aW,
                          termsUrl: ez.A.getArticleURL(eM.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: r.getDate() / c,
                      ctaText: ep.intl.string(ep.t.w7s5Qr),
                      onCtaClick: () => (0, eY.P)({ partnerId: eZ.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, d.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: eZ.XY },
                      ctaDisabled: n,
                      ctaLoading: n,
                  }
                : null,
            steelseriesCard: s
                ? {
                      id: eT.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: ep.intl.string(ep.t.m7PucM),
                      description: i
                          ? a
                              ? ep.intl.format(ep.t["1Zw6xL"], {})
                              : ep.intl.format(ep.t.KWdCO0, {})
                          : ep.intl.format(ep.t.zh1X7u, {}),
                      descriptionNote:
                          !a && i
                              ? ep.intl.format(ep.t.vblnHk, {
                                    partnerName: eZ.CD[eZ.Cs].label,
                                    helpdeskArticle: ez.A.getArticleURL(eM.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, d.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: r.getDate() / c,
                      ctaText: ep.intl.string(ep.t.w7s5Qr),
                      onCtaClick: () => (0, eq.u)({ analyticsLocations: e, partnerIds: [eZ.KS, eZ.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: eZ.KS },
                      ctaDisabled: n,
                      ctaLoading: n,
                  }
                : null,
        };
    }, [l, e, r, t, c, s, i, a, n]);
}
var e0 = s(883010);
let e1 = "xgpp";
function e2(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, eA.l)("premium_subscriber_home_rewards"),
        { logitechCard: a, steelseriesCard: n } = e$();
    if (!i) return null;
    let l = null != a || null != n;
    return (0, d.jsx)(eV, {
        id: e1,
        sectionClassName: x()(e0.uW, e0.Uv, e0.qr),
        heading: (0, d.jsx)(ec.D, {
            variant: "display-sm",
            className: x()(eF.R_, eH.U6),
            children: ep.intl.string(ep.t.NG1e6l),
        }),
        beforeGrid: (0, d.jsx)("div", { className: eH.JE, children: (0, d.jsx)(eU, { glowing: t === e1 }) }),
        grid: l
            ? (0, d.jsxs)(d.Fragment, {
                  children: [
                      (0, d.jsx)(eB, { containerClassName: eF.Nr }),
                      null != a && (0, d.jsx)(eG.S, { ...a, containerClassName: eF.Nr, glowing: s === a.id }),
                      null != n && (0, d.jsx)(eG.S, { ...n, containerClassName: eF.Nr, glowing: s === n.id }),
                  ],
              })
            : null,
    });
}
var e3 = s(315629),
    e6 = s(65470),
    e7 = s(91301);
let e9 = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: a } = (0, C.Ay)(s);
    return (0, d.jsx)(C.f5, {
        value: a,
        children: (0, d.jsxs)(e3.h, {
            className: x()(e7.kL, e7.pm, t),
            color: "purple",
            children: [
                (0, d.jsxs)("div", {
                    className: e7.FS,
                    children: [
                        (0, d.jsx)(ec.D, {
                            variant: "heading-xxl/bold",
                            className: e7.R_,
                            children: ep.intl.string(ep.t.Ve9Ge6),
                        }),
                        (0, d.jsx)(eo.E, { variant: "text-md/medium", children: ep.intl.string(ep.t.yQ06u1) }),
                        (0, d.jsx)("div", {
                            className: e7.SB,
                            children: (0, d.jsx)(e6.A, {
                                buttonTextOverride: ep.intl.string(ep.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: e7._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var e5 = s(877624);
let e8 =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function e4(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: e8,
        srcSet: `${e8} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var te = s(502572),
    tt = s(775602),
    ts = s(366999),
    ti = s(531260),
    ta = s(780964),
    tn = s(766075),
    tl = s(786300),
    tr = s(428262),
    tc = s(960851),
    to = s(89366),
    td = s(422936),
    tu = s(234419),
    tm = s(549996),
    tx = s(172218);
let tg = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, u.useState)(1),
        i = (0, u.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, tx.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
};
var tp = s(681300);
let th = function (e) {
    let { text: t } = e;
    return (0, d.jsx)("div", {
        className: tp.i,
        children: (0, d.jsx)(eo.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var tN = s(371764),
    tf = s(862482),
    tA = s(366010),
    tj = s(736653);
function tE(e) {
    let { analyticsLocations: t } = (0, C.Ay)(...e.newLocations);
    return (0, d.jsx)(C.di.Provider, { value: t, children: e.children });
}
var tC = s(396375),
    tb = s(254565),
    tR =
        (((a = {}).SUBSCRIBER_HOME = "SUBSCRIBER_HOME"),
        (a.NITRO_SETTINGS = "SETTINGS"),
        (a.APPLICATION_NITRO_HOME = "APPLICATION_NITRO_HOME"),
        a);
let t_ = function (e) {
    let { variant: t } = e,
        s = (0, tc.cg)(),
        i = (0, tj.Ay)(),
        a = (0, tA.M)(i) ? tf.XD.BRAND_INVERTED : tf.XD.BRAND;
    return s
        ? "APPLICATION_NITRO_HOME" === t
            ? (0, d.jsx)(function () {
                  return (0, d.jsx)(tE, {
                      newLocations: [E.A.PREMIUM_MARKETING_PAGE_BANNER],
                      children: (0, d.jsxs)("div", {
                          className: tb._G,
                          children: [
                              (0, d.jsx)("div", {
                                  className: tb.V2,
                                  children: (0, d.jsx)("div", { className: tb.N4 }),
                              }),
                              (0, d.jsx)("div", {
                                  className: x()(tb.Fg, tb.cj),
                                  children: (0, d.jsx)(eo.E, {
                                      variant: "eyebrow",
                                      color: "text-overlay-light",
                                      children: ep.intl.string(ep.t.OS9KPu),
                                  }),
                              }),
                              (0, d.jsxs)("div", {
                                  className: tb.IH,
                                  children: [
                                      (0, d.jsx)(ec.D, {
                                          className: tb.U_,
                                          variant: "heading-xxl/extrabold",
                                          color: "text-strong",
                                          children: ep.intl.string(ep.t["+5UxML"]),
                                      }),
                                      (0, d.jsx)(eo.E, {
                                          className: tb._M,
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: ep.intl.format(ep.t["lVOH/p"], {
                                              helpCenterLink: ez.A.getArticleURL(eM.MVz.SUMMER_BOGO_2025),
                                          }),
                                      }),
                                      (0, d.jsx)(tC.A, {
                                          textOptions: {
                                              textOverride: ep.intl.string(ep.t.J61px0),
                                              textClassName: tb.cZ,
                                          },
                                          subscriptionTier: eO.pe.TIER_2,
                                          showIcon: !1,
                                          className: tb.xF,
                                          color: a,
                                      }),
                                  ],
                              }),
                              (0, d.jsx)("div", {
                                  className: tb.ZS,
                                  children: (0, d.jsx)("img", {
                                      alt: "",
                                      src: "https://cdn.discordapp.com/assets/content/5ed4a5e53464f95f9a0a196a99b667b06b979eee4a7b7ede0442fa433c9833d0.png",
                                      className: tb.F$,
                                  }),
                              }),
                          ],
                      }),
                  });
              }, {})
            : "SETTINGS" === t
              ? (0, d.jsx)(function () {
                    return (0, d.jsx)(tE, {
                        newLocations: [E.A.PREMIUM_SETTINGS],
                        children: (0, d.jsxs)("div", {
                            className: tb.O3,
                            children: [
                                (0, d.jsx)("div", {
                                    className: tb.V9,
                                    children: (0, d.jsx)("img", {
                                        alt: "",
                                        src: "https://cdn.discordapp.com/assets/content/c363ff378ffd04d0561977f632dc2e1e5ca4906c8850be095be53ea369cdf309.png",
                                        className: tb.$V,
                                    }),
                                }),
                                (0, d.jsxs)("div", {
                                    className: tb.l$,
                                    children: [
                                        (0, d.jsx)(ec.D, {
                                            className: tb.U_,
                                            variant: "heading-lg/extrabold",
                                            color: "text-strong",
                                            children: ep.intl.string(ep.t["+5UxML"]),
                                        }),
                                        (0, d.jsx)(eo.E, {
                                            className: tb._M,
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: ep.intl.format(ep.t["lVOH/p"], {
                                                helpCenterLink: ez.A.getArticleURL(eM.MVz.SUMMER_BOGO_2025),
                                            }),
                                        }),
                                        (0, d.jsx)(tC.A, {
                                            textOptions: {
                                                textOverride: ep.intl.string(ep.t.J61px0),
                                                textClassName: tb.cZ,
                                            },
                                            subscriptionTier: eO.pe.TIER_2,
                                            showIcon: !1,
                                            className: tb.xF,
                                            color: a,
                                        }),
                                    ],
                                }),
                                (0, d.jsx)("div", {
                                    className: tb.m0,
                                    children: (0, d.jsx)("img", {
                                        alt: "",
                                        src: "https://cdn.discordapp.com/assets/content/4135eb5d081957191871c8ca942b65dab5d2c7cc0aea71c6099dc470d4b648c8.png",
                                        className: tb.$V,
                                    }),
                                }),
                            ],
                        }),
                    });
                }, {})
              : (0, d.jsx)(function () {
                    return (0, d.jsxs)("div", {
                        className: tb.jo,
                        children: [
                            (0, d.jsx)("div", {
                                className: tb.yk,
                                children: (0, d.jsx)("img", {
                                    alt: "",
                                    src: "https://cdn.discordapp.com/assets/content/e575cd15e039114aa5d6e92f4466b42043e8c035b5c26785806ce1e497892c7b.png",
                                    className: tb.$V,
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: tb.Ep,
                                children: [
                                    (0, d.jsx)(ec.D, {
                                        className: tb.U_,
                                        variant: "heading-md/extrabold",
                                        color: "text-strong",
                                        children: ep.intl.string(ep.t["+5UxML"]),
                                    }),
                                    (0, d.jsx)(eo.E, {
                                        className: tb._M,
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: ep.intl.format(ep.t["lVOH/p"], {
                                            helpCenterLink: ez.A.getArticleURL(eM.MVz.SUMMER_BOGO_2025),
                                        }),
                                    }),
                                ],
                            }),
                            (0, d.jsx)(tC.A, {
                                subscriptionTier: eO.pe.TIER_2,
                                showIcon: !0,
                                shinyButtonClassName: tb.Xp,
                                hasActivePromotion: !0,
                            }),
                        ],
                    });
                }, {})
        : null;
};
var tv = s(103411),
    tT = s(778712),
    tI = s(97808),
    tS = s(590251),
    tP = s(144165),
    ty = s(854627),
    tM = s(427262),
    tO = s(851746),
    tD = s(326084),
    tL = s(664654);
function tk() {
    var e, t, s;
    let { referralSentUsers: i } = (0, tL.J)(),
        a = (0, p.bG)([tO.A], () => tO.A.getRecipientStatus()),
        n = (0, p.bG)([tO.A], () => tO.A.getHasEligibleFriends()),
        l = a.size === tL.Z,
        r =
            ((e = !1 !== n),
            (t = i.length),
            (s = a.size === tL.Z && [...a.values()].every((e) => e === tD.aK.REDEEMED)),
            e
                ? t === tL.Z
                    ? s
                        ? ep.intl.format(ep.t["1aEjsH"], {
                              helpdeskArticle: ez.A.getArticleURL(eM.MVz.REFERRAL_PROGRAM),
                          })
                        : ep.intl.format(ep.t["+u3AOO"], {
                              helpdeskArticle: ez.A.getArticleURL(eM.MVz.REFERRAL_PROGRAM),
                          })
                    : ep.intl.format(ep.t["omMr+V"], { helpdeskArticle: ez.A.getArticleURL(eM.MVz.REFERRAL_PROGRAM) })
                : ep.intl.format(ep.t["zWhX/Q"], { helpdeskArticle: ez.A.getArticleURL(eM.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: a.size, hasEligibleFriends: n, allSent: l, bodyText: r };
}
var tU = s(212737),
    tG = s(378900);
function tw(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    U.default.track(eM.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eE.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, d.jsx)(e, { ...s, startingScreen: t });
        });
}
function tB(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, ty.A)({ userId: t.id, size: tT._3.SIZE_24 });
    return (0, d.jsx)(
        tI.eu,
        { className: tG.bj, src: s, "aria-label": (0, tM.mG)(t), size: tT._3.SIZE_24, ...i },
        t.id,
    );
}
function tH(e) {
    let { slotIndex: t } = e;
    return (0, d.jsx)("div", { className: tG.p, children: t });
}
function tF(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, d.jsx)("div", {
        className: x()(tG.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < tL.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, d.jsx)(tB, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, d.jsx)(tH, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function tV(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: a } = e;
    return (0, d.jsx)(tS.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? tG.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: a ?? tG.e0,
        overlayClassName: t === tL.Z ? tG.ys : void 0,
        children: (0, d.jsx)(tP._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function tz(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: a, allSent: n, bodyText: l } = tk();
    return (0, d.jsxs)("div", {
        className: x()(tG.kL, t),
        children: [
            (0, d.jsx)("div", { className: tG.G3, children: (0, d.jsx)(tV, { nReferralsSent: i }) }),
            (0, d.jsxs)("div", {
                className: tG.IH,
                children: [
                    (0, d.jsx)(tF, { referralSentUsers: s, className: tG.GV }),
                    (0, d.jsxs)("div", {
                        className: tG.n4,
                        children: [
                            (0, d.jsx)(ec.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.USo4s7),
                            }),
                            (0, d.jsx)(eo.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, d.jsx)(ed.$, {
                        variant: "primary",
                        disabled: !1 === a || !0 === n,
                        text: ep.intl.string(ep.t.Lm2nFc),
                        onClick: () =>
                            tw({ startingScreen: tU.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var tW = s(989349),
    tK = s.n(tW),
    tX = s(496431),
    tY = s(369617);
let tQ = (e) => {
    let { expiresAt: t, className: s } = e,
        i = (0, tX.A)(tK()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: a, hours: n, minutes: l, seconds: r } = i,
        c = [
            { unitValue: a, unitType: "days" },
            { unitValue: n, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: r, unitType: "seconds" },
        ];
    return (0, d.jsxs)("div", {
        className: x()(tY.Xl, s),
        children: [
            (0, d.jsx)(eo.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: ep.intl.string(ep.t["/ARFVE"]),
            }),
            (0, d.jsx)("div", {
                className: tY.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, a] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, d.jsxs)(d.Fragment, {
                            children: [
                                (0, d.jsxs)(
                                    "div",
                                    {
                                        className: tY.bh,
                                        children: [
                                            (0, d.jsxs)("div", {
                                                className: tY.kB,
                                                children: [
                                                    (0, d.jsx)("div", {
                                                        className: tY.B2,
                                                        children: (0, d.jsx)(eo.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, d.jsx)("div", {
                                                        className: tY.B2,
                                                        children: (0, d.jsx)(eo.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: a,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, d.jsx)(eo.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return ep.intl.string(ep.t.ixASa2);
                                                        case "hours":
                                                            return ep.intl.string(ep.t["8sNvNn"]);
                                                        case "minutes":
                                                            return ep.intl.string(ep.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return ep.intl.string(ep.t.JhaiLW);
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
                                    (0, d.jsx)(eo.E, {
                                        className: tY.cV,
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
var tZ = s(473702),
    tq = s(609425),
    tJ = s(660184),
    t$ = s(509332);
function t0() {
    let e = (0, p.bG)([D.default], () => D.default.getCurrentUser()),
        t = (0, tq.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: a } = (0, ty.A)({ userId: e?.id, size: tT._3.SIZE_56 });
    if (null == e) return null;
    let n = (0, tM.mG)(e);
    return (0, d.jsxs)("div", {
        className: t$.kL,
        children: [
            (0, d.jsx)("div", {
                className: t$.my,
                children: (0, d.jsx)(tI.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: tT._3.SIZE_56,
                    "aria-label": n,
                    ...a,
                }),
            }),
            (0, d.jsx)("div", { className: t$.QC, children: (0, d.jsx)(tJ.A, { userName: n, displayNameStyles: t }) }),
        ],
    });
}
var t1 = s(707554),
    t2 = s(966423);
let t3 = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: a } = e;
    return (0, d.jsx)(t1.F, {
        forceLevel: 1,
        children: (0, d.jsx)(ec.D, {
            className: x()(t2.w, t, i && t2.n),
            variant: "display-md",
            color: s,
            children: a,
        }),
    });
};
var t6 = s(948653);
function t7(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: a, allSent: n, bodyText: l } = tk();
    return (0, d.jsxs)("div", {
        className: x()(t6.kL, t),
        children: [
            (0, d.jsx)("div", {
                className: t6.G3,
                children: (0, d.jsx)(tV, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: t6.HP,
                    ringClassName: t6.pZ,
                }),
            }),
            (0, d.jsxs)("div", {
                className: t6.IH,
                children: [
                    (0, d.jsxs)("div", {
                        className: t6.n4,
                        children: [
                            (0, d.jsx)(ec.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: ep.intl.string(ep.t.USo4s7),
                            }),
                            (0, d.jsx)(eo.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, d.jsx)(tF, { referralSentUsers: s, className: t6.t7 }),
                ],
            }),
            (0, d.jsx)(ed.$, {
                variant: "primary",
                disabled: !1 === a || !0 === n,
                text: ep.intl.string(ep.t.Lm2nFc),
                onClick: () =>
                    tw({ startingScreen: tU.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var t9 = s(702841),
    t5 = s(676279),
    t8 = s(396583),
    t4 = (((n = {}).SINE = "sine"), (n.COSINE = "cosine"), n),
    se = (((l = {}).UP = "up"), (l.DOWN = "down"), l);
let st = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: a,
            animateXAxisWiggle: n = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: c,
        } = e,
        o = (0, el.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        m = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, u.useState)(1),
        p = (0, el.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, N] = (0, u.useState)(1),
        f = (0, el.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => N((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, u.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, E] = (0, u.useState)(0),
        [C, b] = (0, u.useState)(1),
        R = (0, el.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, t8.A)(() => {
        E(C * (0.5 * Math.random() * 5 + 2.5)), b((e) => -1 * e);
    }, A),
    l)
        ? c
        : (0, d.jsx)(ea.animated.div, {
              style: {
                  transform: o.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = m(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != a) {
                          let e = a.range * (1 - a.containerVisibilityPercentage);
                          s = "up" === a.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: n ? R.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: f.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != a && a.changeOpacity ? a.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var ss = s(958131);
let si = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: a,
        hammerContainerClassName: n,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: o,
        hammerAssetClassName: u,
        keyAssetClassName: m,
        starAssetClassName: g,
        animationSpeedScale: p = 1,
        blurScale: h = 1,
    } = e;
    return (0, d.jsxs)(d.Fragment, {
        children: [
            null != i &&
                (0, d.jsx)("div", {
                    className: x()(ss.nJ, i),
                    children: (0, d.jsx)(st, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: se.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, d.jsx)("div", {
                    className: x()(ss.IN, a),
                    children: (0, d.jsx)(st, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: se.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, d.jsx)("div", {
                    className: x()(ss.Gj, n),
                    children: (0, d.jsx)(st, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t4.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: se.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: u,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, d.jsx)("div", {
                    className: x()(ss.FV, l),
                    children: (0, d.jsx)(st, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: t4.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: se.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, d.jsx)("div", {
                    className: x()(ss.E1, r),
                    children: (0, d.jsx)(st, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: t4.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: se.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, d.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: g,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var sa = s(607470);
let sn =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    sl = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: a,
            assetClassName: n,
            animationSpeedScale: l = 1,
        } = e;
        return s
            ? (0, d.jsx)("div", {
                  className: a,
                  children: (0, d.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: n,
                  }),
              })
            : (0, d.jsx)("div", {
                  className: a,
                  children: (0, d.jsx)(st, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: t4.SINE },
                      parallaxAnimationData: {
                          pathDirection: se.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, d.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: n,
                            })
                          : (0, d.jsx)(
                                sa.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: n,
                                    children: (0, d.jsx)("source", { src: sn }),
                                },
                                sn,
                            ),
                  }),
              });
    },
    sr = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: a,
                carContainerClassName: n,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: c,
                boltAssetClassName: o,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: p = 1,
            } = e,
            h = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
            N = (0, t5.TM)();
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)(sl, {
                    supportHEVCAlpha: N,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, d.jsx)(si, {
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: a,
                    carContainerClassName: n,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
                    boltAssetClassName: o,
                    carAssetClassName: u,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var sc = s(197572);
let so = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, d.jsx)(sr, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: x()(sc.wG, s && sc.Vx),
        flyingWumpusAssetClassName: x()(sc.lu, s && sc.ov),
        boltContainerClassName: x()(sc.nJ, s && sc.Wc),
        hammerContainerClassName: x()(sc.Gj, s && sc.XA),
        keyContainerClassName: x()(sc.FV, s && sc.oZ),
        starContainerClassName: x()(sc.E1, s && sc.LN),
        boltAssetClassName: x()(sc.j7, s && sc.QN),
        hammerAssetClassName: x()(sc.Wv, s && sc.B9),
        keyAssetClassName: x()(sc.rs, s && sc.I1),
        starAssetClassName: x()(sc.OY, s && sc.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var sd = (((r = {}).MORNING = "morning"), (r.AFTERNOON = "afternoon"), (r.EVENING = "evening"), r);
function su() {
    let e,
        t = { [sd.MORNING]: ep.t["Wvc/I+"], [sd.AFTERNOON]: ep.t["d+0STx"], [sd.EVENING]: ep.t.CqsxKI };
    return ep.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? sd.MORNING : e >= 12 && e < 17 ? sd.AFTERNOON : sd.EVENING],
    );
}
var sm = s(168880),
    sx = s(839873);
let sg = function (e) {
        let { containerVisibilityPercentage: t, compact: s } = e;
        return (0, d.jsx)(sr, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: x()(sx.wG, s && sx.Vx),
            flyingWumpusAssetClassName: x()(sx.lu, s && sx.ov),
            boltContainerClassName: x()(sx.nJ, s && sx.Wc),
            hammerContainerClassName: x()(sx.Gj, s && sx.XA),
            keyContainerClassName: x()(sx.FV, s && sx.oZ),
            starContainerClassName: x()(sx.E1, s && sx.LN),
            boltAssetClassName: x()(sx.j7, s && sx.QN),
            hammerAssetClassName: x()(sx.Wv, s && sx.B9),
            keyAssetClassName: x()(sx.rs, s && sx.I1),
            starAssetClassName: x()(sx.OY, s && sx.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    sp = {
        [F.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                } = e,
                { visibilityPercentageRef: l, visibilityPercentage: r } = tg(
                    !(0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
                ),
                c = su();
            return (0, d.jsx)("div", {
                className: x()(sm.kL, sm.Eg, t),
                ref: a,
                children: (0, d.jsxs)("div", {
                    className: x()(sm.W2, sm.HQ),
                    ref: l,
                    children: [
                        (0, d.jsxs)(er.B, {
                            align: "start",
                            gap: 32,
                            className: sm.ZU,
                            children: [
                                i && s,
                                (0, d.jsxs)(er.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, d.jsx)(t3, {
                                            className: sm.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: c,
                                        }),
                                        (0, d.jsx)(t0, {}),
                                    ],
                                }),
                                n && (0, d.jsx)(t7, {}),
                            ],
                        }),
                        (0, d.jsx)("div", {
                            className: sm.y3,
                            children: (0, d.jsx)(so, { containerVisibilityPercentage: r, compact: !n }),
                        }),
                    ],
                }),
            });
        },
        [F.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                } = e,
                { visibilityPercentageRef: l, visibilityPercentage: r } = tg(
                    !(0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
                ),
                c = ep.intl.string(ep.t.ifwQZb);
            return (0, d.jsx)("div", {
                className: x()(sm.kL, sm.Eg, t),
                ref: a,
                children: (0, d.jsxs)("div", {
                    className: x()(sm.W2, sm.m8),
                    ref: l,
                    children: [
                        (0, d.jsxs)(er.B, {
                            align: "start",
                            gap: 32,
                            className: sm.Y0,
                            children: [
                                i && s,
                                (0, d.jsx)("div", {
                                    className: x()(sm.N1, sm.v8),
                                    children: (0, d.jsx)(t3, {
                                        className: sm.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: c,
                                    }),
                                }),
                                n && (0, d.jsx)(t7, {}),
                            ],
                        }),
                        (0, d.jsx)("div", {
                            className: sm.BF,
                            children: (0, d.jsx)(sg, { containerVisibilityPercentage: r, compact: !n }),
                        }),
                    ],
                }),
            });
        },
        [F.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: a,
                    shouldShowReferralProgressBar: n,
                } = e,
                l = su();
            return (0, d.jsx)("div", {
                className: x()(sm.kL, sm.Eg, t),
                ref: a,
                children: (0, d.jsxs)("div", {
                    className: x()(sm.W2, sm.J_),
                    children: [
                        (0, d.jsxs)(er.B, {
                            align: "start",
                            gap: 32,
                            className: sm.$S,
                            children: [
                                i && s,
                                (0, d.jsxs)(er.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, d.jsx)(t3, {
                                            className: sm.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: l,
                                        }),
                                        (0, d.jsx)(t0, {}),
                                    ],
                                }),
                            ],
                        }),
                        n && (0, d.jsx)("div", { className: sm.Pq, children: (0, d.jsx)(t7, {}) }),
                    ],
                }),
            });
        },
    };
function sh(e) {
    let { treatment: t, ...s } = e,
        i = sp[t];
    return null != i ? (0, d.jsx)(i, { ...s }) : null;
}
var sN = s(21588);
let sf =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    sA = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion);
        return (0, d.jsxs)(d.Fragment, {
            children: [
                (0, d.jsx)("div", {
                    className: sN.BI,
                    children: (0, d.jsx)(st, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: t4.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: se.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, d.jsx)("img", { src: sf, alt: "", className: sN.Q }),
                    }),
                }),
                (0, d.jsx)(si, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: sN.Gj,
                    keyContainerClassName: sN.FV,
                    starContainerClassName: sN.E1,
                    hammerAssetClassName: sN.Wv,
                    keyAssetClassName: sN.rs,
                    starAssetClassName: sN.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var sj = s(725807),
    sE = s(774774),
    sC = s(164332);
let sb = function () {
    let e = { section: eM.JJy.REVERSE_TRIAL_BANNER };
    return (0, d.jsxs)("div", {
        className: sC.vK,
        children: [
            (0, d.jsx)(sE.e4, { text: ep.intl.string(ep.t.qYKftX), className: sC.Io }),
            (0, d.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: sC._u,
            }),
            (0, d.jsx)("div", {
                className: sC.IP,
                children: (0, d.jsx)(eo.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: ep.intl.format(ep.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, d.jsx)(sj.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: sC.aA,
                shinyButtonClassName: sC.Xp,
            }),
        ],
    });
};
var sR = s(245807);
let s_ = function () {
    let e = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion);
    return (0, d.jsx)(si, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: sR.cI,
        hammerContainerClassName: sR.qg,
        keyContainerClassName: sR.h2,
        boltContainerClassName: sR.Bz,
        starAssetClassName: sR.ks,
        hammerAssetClassName: sR.GY,
        keyAssetClassName: sR.p4,
        boltAssetClassName: sR.vy,
    });
};
function sv(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        a = (0, w.Zb)(t);
    return (0, d.jsx)("div", {
        className: x()(sm.kL, s),
        ref: i,
        children: (0, d.jsxs)("div", {
            className: sm.ap,
            children: [
                (0, d.jsxs)(er.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, d.jsx)(th, { text: ep.intl.string(ep.t.yhldRB) }),
                        (0, d.jsxs)(er.B, {
                            align: "start",
                            gap: 12,
                            className: sm.rG,
                            children: [
                                (0, d.jsx)(t3, { children: ep.intl.format(ep.t.FwjP6W, { days: a }) }),
                                (0, d.jsx)(eo.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: ep.intl.string(ep.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, d.jsxs)(er.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, d.jsx)(eI.A, {
                                    size: "md",
                                    buttonTextOverride: ep.intl.string(ep.t["2+luBl"]),
                                    iconOverride: eu.t,
                                    variantOverride: "expressive",
                                }),
                                (0, d.jsx)(ed.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: ep.intl.string(ep.t.Af7ye6),
                                    onClick: () => (0, tn.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, d.jsxs)("div", {
                    className: sm.Hk,
                    children: [(0, d.jsx)(e4, { alt: "", width: "100%", height: "auto" }), (0, d.jsx)(s_, {})],
                }),
            ],
        }),
    });
}
function sT(e) {
    let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: a, shouldShowReferralProgressBar: n } = e,
        {
            headingText: l,
            headingTop: r,
            showPill: c,
            shouldShowChurnVariant: o,
            premiumSubscription: u,
            userDiscountOffer: m,
            discountedPrice: g,
            buttonVisibilityRef: h,
        } = sS(),
        { treatment: N, isInNitroHomeHeaderTreatment: f } = z("subscriber_home_hero"),
        { analyticsLocations: A } = (0, C.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
        j = (0, tm.c)(e5.C.MARKETING_PAGE_BANNER),
        b = null != u && u.status === eM.Dmq.CANCELED,
        R = f && !b,
        _ = null;
    null != j && "marketingPageBanner" === j.properties.properties.oneofKind
        ? (_ = (0, d.jsx)(tN.x, {
              componentId: j.id,
              promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner,
          }))
        : i
          ? (_ = (0, d.jsx)(t_, { variant: tR.SUBSCRIBER_HOME }))
          : a
            ? (_ = (0, d.jsx)(sb, {}))
            : n && !R && (_ = (0, d.jsx)(tz, {}));
    let v = (0, tu.V)(),
        T = (0, td.O)(),
        I = (0, ei.U9)(T, eO.pe.TIER_2) ? eO.pe.TIER_2 : void 0,
        S = null != u && u.status !== eM.Dmq.ACCOUNT_HOLD && u.hasAnyPremiumNitro,
        P = (0, ti.A)(),
        y = P.isFractionalPremiumActive && !S && null == _ && !o,
        { visibilityPercentageRef: M, visibilityPercentage: O } = tg(!(0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion));
    return a
        ? (0, d.jsx)(sv, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: h })
        : R
          ? (0, d.jsx)(sh, {
                treatment: N,
                className: t,
                headingTop: r,
                showPill: c,
                buttonVisibilityRef: h,
                shouldShowReferralProgressBar: n,
            })
          : (0, d.jsx)("div", {
                className: x()(sm.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: h,
                children: (0, d.jsxs)("div", {
                    className: sm.Qs,
                    ref: M,
                    children: [
                        c && r,
                        (0, d.jsxs)("div", {
                            className: sm.N1,
                            children: [
                                (0, d.jsx)(sA, { containerVisibilityPercentage: O }),
                                o &&
                                    m?.expiresAt != null &&
                                    (0, d.jsx)(tQ, { expiresAt: m.expiresAt.toISOString(), className: sm.IZ }),
                                (0, d.jsx)(t3, {
                                    children:
                                        o && null != m
                                            ? ep.intl.format(ep.t["3yZP0G"], { percent: m.discount.amount })
                                            : l,
                                }),
                                o &&
                                    null != m &&
                                    null != g &&
                                    (0, d.jsx)(eo.E, {
                                        className: sm.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: ep.intl.format(ep.t["3Q4wCy"], {
                                            discountedPrice: g,
                                            billingPeriod: (0, tr.Ke)(m.discount.userUsageLimitInterval),
                                            numMonths: m.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, d.jsxs)("div", {
                            className: y || o ? sm.UJ : void 0,
                            children: [
                                y &&
                                    (0, d.jsx)(eI.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: v?.subscription_trial?.sku_id ?? I,
                                    }),
                                o &&
                                    null != u &&
                                    (0, d.jsx)(ed.$, {
                                        variant: "expressive",
                                        icon: eu.t,
                                        size: "md",
                                        text: ep.intl.string(ep.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = tZ.g.CONFIRM_DISCOUNT),
                                                void (0, eE.openModalLazy)(async () => {
                                                    let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                        await Promise.all([
                                                            s.e("92254"),
                                                            s.e("11586"),
                                                            s.e("41842"),
                                                            s.e("17829"),
                                                            s.e("10038"),
                                                            s.e("5111"),
                                                            s.e("7458"),
                                                            s.e("44791"),
                                                            s.e("42141"),
                                                            s.e("92678"),
                                                            s.e("71436"),
                                                            s.e("97735"),
                                                            s.e("62092"),
                                                            s.e("27956"),
                                                            s.e("64949"),
                                                            s.e("50929"),
                                                            s.e("70405"),
                                                            s.e("23924"),
                                                            s.e("42205"),
                                                            s.e("55675"),
                                                            s.e("48226"),
                                                            s.e("64827"),
                                                            s.e("68261"),
                                                            s.e("7167"),
                                                            s.e("96643"),
                                                            s.e("92789"),
                                                            s.e("43716"),
                                                            s.e("2773"),
                                                            s.e("11735"),
                                                            s.e("42842"),
                                                            s.e("36845"),
                                                            s.e("17879"),
                                                            s.e("44571"),
                                                            s.e("52557"),
                                                            s.e("5636"),
                                                            s.e("32085"),
                                                            s.e("94161"),
                                                            s.e("13051"),
                                                            s.e("80347"),
                                                            s.e("80166"),
                                                        ]).then(s.bind(s, 293061));
                                                    return (s) =>
                                                        (0, d.jsx)(t, {
                                                            ...s,
                                                            analyticsLocations: A,
                                                            initialStep: e,
                                                            premiumSubscription: u,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, d.jsx)(e6.A, {
                                    variant: y || o ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: ep.intl.string(ep.t["3KomGa"]),
                                }),
                            ],
                        }),
                        _,
                    ],
                }),
            });
}
let [sI, sS] = (0, tl.A)(),
    sP = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: a } = e,
            { analyticsLocations: n } = (0, C.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, w.ds)(),
            r = (0, tc.cg)(),
            c = (0, to.QQ)(),
            o = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            u = null != o && o.status === eM.Dmq.CANCELED && null != i,
            m = c && !u,
            x = ep.intl.string(ep.t.qYKftX),
            g = (0, tv.m)(),
            h = ep.intl.string(ep.t.ifwQZb),
            { fractionalState: N, endsAt: f } = (0, ti.A)(),
            A = (0, ts.Ay)(f, ts.yE.CREDITS_ENDS_IN),
            j = null;
        if (N === eO.xc.NONE || l) j = (0, d.jsx)(th, { text: x });
        else {
            m = !0;
            let e = ep.intl.format(ep.t["yR+oDD"], {
                helpCenterLink: ez.A.getArticleURL(eM.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            j = (0, d.jsx)(te.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: sm.YL,
                position: "right",
                children: (e) =>
                    (0, d.jsx)("div", {
                        ...e,
                        className: sm.V_,
                        children: (0, d.jsx)("div", { className: sm.eL, children: (0, d.jsx)(th, { text: A }) }),
                    }),
            });
        }
        return (0, d.jsx)(C.f5, {
            value: n,
            children: (0, d.jsx)(sI.Provider, {
                value: {
                    headingText: h,
                    headingTop: j,
                    showPill: m,
                    shouldShowChurnVariant: u,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: a,
                    buttonVisibilityRef: s,
                },
                children: (0, d.jsx)(sT, {
                    className: t,
                    isEligibleForBogoPromotion: r,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: g,
                }),
            }),
        });
    };
var sy = s(820284),
    sM = s(742589),
    sO = s(909536),
    sD = s(392943),
    sL = s(876587),
    sk = s(400669),
    sU = s(680023),
    sG = s(22591);
let sw = function () {
    let e = (0, sO.Gh)("nitro_home_header"),
        t = u.useRef(null);
    return (0, d.jsxs)(sy.A, {
        section: eM.JJy.NAVIGATION,
        children: [
            (0, d.jsx)(sM.A, {
                className: x()(sU.TQ, sG.C$),
                transparent: !0,
                role: "navigation",
                children: (0, d.jsxs)("div", {
                    className: sU.Wc,
                    children: [
                        (0, d.jsxs)("div", {
                            className: sG.wk,
                            children: [
                                (0, d.jsx)(eu.t, { colorClass: sG.tr }),
                                (0, d.jsx)("span", {
                                    role: "img",
                                    "aria-label": ep.intl.string(ep.t.Ipxkog),
                                    className: sG.Ss,
                                    children: (0, d.jsx)(sD.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, d.jsxs)("div", {
                                className: sU.MQ,
                                children: [
                                    (0, d.jsx)(sk.l, {
                                        ref: t,
                                        size: "sm",
                                        location: E.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, d.jsx)(e6.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, d.jsx)(sL.O, { targetElementRef: t, body: ep.intl.string(ep.t.EqUw7K) }),
        ],
    });
};
var sB = s(842300),
    sH = s(67423);
let sF = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: a, discountedPrice: n } = e,
        { analyticsLocations: l } = (0, C.Ay)(E.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, el.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, d.jsx)(ea.animated.div, {
        className: x()(sB.iE, { [sB.q4]: !t }),
        style: r,
        children: (0, d.jsxs)("div", {
            className: sB.iJ,
            children: [
                (0, d.jsx)("img", { alt: "", src: sH, className: sB.oU }),
                (0, d.jsxs)("div", {
                    className: sB.iQ,
                    children: [
                        (0, d.jsx)(ec.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: ep.intl.format(ep.t["3yZP0G"], { percent: a.discount.amount }),
                        }),
                        (0, d.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ep.intl.format(ep.t["3Q4wCy"], {
                                numMonths: a.discount.userUsageLimit,
                                discountedPrice: n,
                                billingPeriod: (0, tr.Ke)(a.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)(ed.$, {
                    variant: "expressive",
                    icon: eu.t,
                    size: "md",
                    text: ep.intl.string(ep.t.zrCzVB),
                    onClick: () =>
                        void (0, eE.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("92254"),
                                s.e("11586"),
                                s.e("41842"),
                                s.e("17829"),
                                s.e("10038"),
                                s.e("5111"),
                                s.e("7458"),
                                s.e("44791"),
                                s.e("42141"),
                                s.e("92678"),
                                s.e("71436"),
                                s.e("97735"),
                                s.e("62092"),
                                s.e("27956"),
                                s.e("64949"),
                                s.e("50929"),
                                s.e("70405"),
                                s.e("23924"),
                                s.e("42205"),
                                s.e("55675"),
                                s.e("48226"),
                                s.e("64827"),
                                s.e("68261"),
                                s.e("7167"),
                                s.e("96643"),
                                s.e("92789"),
                                s.e("43716"),
                                s.e("2773"),
                                s.e("11735"),
                                s.e("42842"),
                                s.e("36845"),
                                s.e("17879"),
                                s.e("44571"),
                                s.e("52557"),
                                s.e("5636"),
                                s.e("32085"),
                                s.e("94161"),
                                s.e("13051"),
                                s.e("80347"),
                                s.e("80166"),
                            ]).then(s.bind(s, 293061));
                            return (t) =>
                                (0, d.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: tZ.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sV = s(761508),
    sz = s(449543);
function sW(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sK(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sX(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var sY = s(345394);
function sQ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: sY.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sZ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sq(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function sJ(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function s$(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
function s0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var s1 = s(996682);
function s2(e) {
    let {
        color: t = en.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: a,
        width: n = 100,
        height: l = 80,
    } = e;
    return (0, d.jsxs)("svg", {
        ...(0, s1.A)({ "aria-label": s, "aria-hidden": i, role: a }),
        width: n,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, d.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, d.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, d.jsx)("defs", {
                children: (0, d.jsx)("clipPath", {
                    id: "a",
                    children: (0, d.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function s3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 162 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var s6 = s(78701);
function s7(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: a, width: n = 288, height: l = 192 } = e;
    return (0, d.jsx)("img", {
        style: { width: n, height: l },
        src: s6.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: a ?? "img",
    });
}
var s9 = s(462887),
    s5 = s(259065),
    s8 = s(206835),
    s4 = s(591179),
    ie = s(462463),
    it = s(878784),
    is = s(425713),
    ii = s(696292),
    ia = s(192444),
    il = s(617986),
    ir = s(892227),
    ic = s(81466),
    io = s(318254),
    id = s(587416),
    iu = s(170463);
let im = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Z.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ir.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, d.jsxs)("div", {
        className: iu.kL,
        children: [
            null != s &&
                (0, d.jsxs)("div", {
                    className: iu.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: iu.Pf,
                            children: [
                                (0, d.jsx)(ic.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ep.intl.string(id.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, d.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ep.intl.format(id.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, d.jsx)("div", { className: iu.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, d.jsxs)("div", {
                    className: iu.nM,
                    children: [
                        (0, d.jsxs)("div", {
                            className: iu.Pf,
                            children: [
                                (0, d.jsx)(io.C, { size: "sm", color: en.A.colors.TEXT_DEFAULT }),
                                (0, d.jsx)(eo.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: ep.intl.string(id.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, d.jsx)(eo.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: ep.intl.format(id.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var ix = s(758836),
    ig = s(190107),
    ip = s(853903);
function ih(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ia.lk)(ig.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: a } = (0, Z.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, u.useMemo)(
            () =>
                !i || null == a || null == a.reward_amount || a.reward_amount <= 0
                    ? null
                    : {
                          id: eT.NITRO_ORBS_REWARDS_CARD_ID,
                          title: ep.intl.string(id.default.hx5AFp),
                          description: ep.intl.format(id.default.wq3CF2, { orbsCount: a.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: x()(ip.lH, ip.yK),
                          footerContent: (0, d.jsx)(im, {}),
                          ctaText: ep.intl.string(id.default.BxjHiu),
                          onCtaClick: () => (0, M.pX)(eM.BVt.COLLECTIBLES_SHOP_WITH_TAB(ix.G2.ORBS)),
                      },
            [i, a],
        ),
        questOrbMultiplierCard: (0, u.useMemo)(
            () =>
                t
                    ? {
                          id: eT.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: ep.intl.string(ep.t.Csf5Ol),
                          description: ep.intl.format(ep.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: ep.intl.string(ep.t.jVcuVY),
                          onCtaClick: () => (0, il.mA)({ fromContent: ii.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: ip.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iN = s(975807),
    iA = s(95035),
    ij = s(862990),
    iE = s(88001),
    iC = s(963458),
    ib = s(817577);
function iR() {
    (0, iN.A)(iE.TE);
}
function i_(e) {
    let t = (0, ij.O9)(),
        i = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        a = i?.hasActiveTrial ?? !1,
        n = (0, u.useCallback)(() => {
            a
                ? (0, eE.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, d.jsx)(e, { ...t });
                  })
                : (0, y.A)({
                      subscriptionTier: eO.pe.TIER_2,
                      initialPlanId: eO.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, a]);
    return (0, u.useMemo)(
        () =>
            t
                ? {
                      id: eT.PREMIUM_GROUP_CARD_ID,
                      title: ep.intl.string(iC.default.YkvksF),
                      description: (0, d.jsxs)(d.Fragment, {
                          children: [
                              ep.intl.formatToPlainString(iC.default.JlyGQj, {
                                  totalSeats: iE.aw,
                                  premiumGroupProductName: (0, iE.DP)(),
                              }),
                              (0, d.jsx)("div", {
                                  className: ip.LF,
                                  children: (0, d.jsx)(iA.A, {
                                      onClick: iR,
                                      children: ep.intl.string(iC.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: ep.intl.string(ep.t.oW0eUd),
                      primaryAsset: ib,
                      ctaIcon: eu.t,
                      ctaIconPosition: "start",
                      ctaText: ep.intl.string(ep.t.IJI7yk),
                      onCtaClick: n,
                  }
                : null,
        [n, t],
    );
}
var iv = s(562819),
    iT = s(892035),
    iI = s(793943),
    iS = s(818724),
    iP = s(655752),
    iy = s(764231),
    iM = s(627380),
    iO = s(30084),
    iD = s(455873),
    iL = s(714206);
let ik =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iU =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iG =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iw() {
    let e,
        t,
        s,
        { analyticsLocations: i } = (0, C.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        a = (0, s4.X)("useWhatsNewPerkCards"),
        { logitechCard: n, steelseriesCard: l } = e$(),
        r = (0, eA.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: c } = (0, iT.z$)("useWhatsNewPerkCards"),
        o = (0, ie.A)({ analyticsLocations: i }),
        m = (0, u.useCallback)(() => {
            (0, tn.openUserSettings)(ta.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, s5.L)({ analyticsLocations: i }),
            );
        }, [i]),
        g = (0, u.useCallback)(() => {
            (0, tn.openUserSettings)(ta.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                (0, iv.L)({ analyticsLocations: i }),
            );
        }, [i]),
        h = (0, u.useCallback)(() => {
            (0, tn.openUserSettings)(ta.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        N = (function (e) {
            let { fractionalState: t } = (0, ti.A)(),
                s = t === eO.xc.FP_ONLY,
                i = (0, it.$F)(),
                a = (0, it.Xb)(),
                n = i?.status === it.Wo.UPCOMING || s,
                l = (0, is.N)(i?.id),
                r = (function () {
                    let e = (0, it.$F)(),
                        t = (0, iP.P)(),
                        s = (0, it.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = tK()(),
                        a = tK()(s),
                        n = e.status === it.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = a.clone().add(n, "months"),
                        c = a.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion) && !n,
                o = (0, iM.t)(),
                d = (0, iP.P)();
            return (0, u.useMemo)(() => {
                let t,
                    u = null != d ? ep.intl.string(d.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iy.T)(eO.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === it.Wo.UPCOMING
                              ? ep.intl.formatToPlainString(ep.t.a1eKDi, { days: o?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return ep.intl.formatToPlainString(ep.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return ep.intl.formatToPlainString(ep.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(o, u) ??
                                (0, iy.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let m = null;
                return (
                    null != l ? (m = n || c ? l.standard : l.ambientLarge) : s && (m = iL),
                    {
                        id: eT.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? ep.intl.string(i.nameUnformattedNitro) : s ? ep.intl.string(ep.t.tx9Fvw) : "",
                        pillText: ep.intl.string(ep.t["jyYgZ+"]),
                        primaryAsset: m,
                        primaryAssetClassName: x()(iD.pq, { [iD.n6]: n, [iD.kE]: c }),
                        caption: null != a ? ep.intl.formatToPlainString(ep.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: ep.intl.string(ep.t.jVcuVY),
                        onCtaClick: () => (0, iO.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, n, c, a, r, s, o, d, e]);
        })(i),
        f =
            ((e = (0, ee.TF)({ location: "useWhatsNewPerkCards" })),
            (t = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription())),
            (s = (0, ef.q)(t, e === ee.Iz.NITRO_HOME_TILE)),
            (0, u.useMemo)(
                () =>
                    null == s
                        ? null
                        : {
                              id: eT.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                              title: s.title,
                              description: s.body,
                              pillText: s.badge,
                              primaryAsset: iS,
                              primaryAssetClassName: ip.lH,
                              ctaIcon: eu.t,
                              ctaIconPosition: "start",
                              ctaText: s.cta,
                              onCtaClick: () =>
                                  (0, y.A)({ subscription: t, initialPlanId: s.yearlyPlanId, analyticsLocations: i }),
                          },
                [i, s, t],
            )),
        { nitroOrbsRewardsCard: A, questOrbMultiplierCard: j } = ih("useWhatsNewPerkCards"),
        b = i_(i);
    return (0, u.useMemo)(() => {
        let e = [
                r ? null : n,
                r ? null : l,
                A,
                j,
                b,
                {
                    id: eT.DISPLAY_NAME_STYLES_CARD_ID,
                    title: ep.intl.string(ep.t.OLtTrt),
                    description: ep.intl.string(ep.t["di/pXR"]),
                    onCtaClick: a ? o : m,
                    ctaText: ep.intl.string(ep.t.jVcuVY),
                    primaryAsset: ik,
                },
                {
                    id: eT.CLIENT_THEMES_CARD_ID,
                    title: ep.intl.string(ep.t.acc6h6),
                    description: ep.intl.formatToPlainString(ep.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iG,
                    ctaText: ep.intl.string(ep.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iI.nf)(iI.HP.CUSTOM_THEME);
                    },
                },
                c
                    ? null
                    : {
                          id: eT.PERMADECOS_CARD_ID,
                          title: ep.intl.string(ep.t.L14NZN),
                          description: ep.intl.string(ep.t.eCZkAI),
                          primaryAsset: (0, d.jsx)(s7, { alt: "", ariaHidden: !0 }),
                          ctaText: ep.intl.string(ep.t.jVcuVY),
                          onCtaClick: a ? o : g,
                      },
                {
                    id: eT.CUSTOM_APP_ICONS_CARD_ID,
                    title: ep.intl.string(ep.t["GU+wqh"]),
                    description: ep.intl.string(ep.t["1uPk1Z"]),
                    primaryAsset: iU,
                    ctaText: ep.intl.string(ep.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, N), null != f && e.splice(1, 0, f), c)) {
            let t = null != f ? 2 : 1;
            e.splice(t, 0, {
                id: eT.PROFILE_FRAMES_CARD_ID,
                title: ep.intl.string(ep.t.SGBDnu),
                description: ep.intl.string(ep.t.cMgegQ),
                pillText: ep.intl.string(ep.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: x()(ip.lH, ip.yK),
                ctaText: ep.intl.string(ep.t.jVcuVY),
                onCtaClick: () => (0, M.pX)(eM.BVt.COLLECTIBLES_SHOP_WITH_TAB(ix.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [N, f, A, j, b, m, h, g, o, a, n, l, r, c]);
}
var iB = s(355097);
let iH = "/assets/1eb1b74667b4c0f0.svg",
    iF = "/assets/983b60e4fcaf973b.svg";
var iV =
    (((c = {}).BEST_OF_NITRO = "bestof"),
    (c.APPEARANCE_STYLE = "appearance"),
    (c.UPGRADES = "upgrades"),
    (c.VIP_EXTRAS = "vip"),
    c);
let iz = [
    { id: "bestof", label: () => ep.intl.string(ep.t.q1u7nQ) },
    { id: "appearance", label: () => ep.intl.string(ep.t.CUnZkZ) },
    { id: "upgrades", label: () => ep.intl.string(ep.t.KC5q8v) },
    { id: "vip", label: () => ep.intl.string(ep.t.DjEAcv) },
];
var iW = s(533407);
function iK(e) {
    e.stopPropagation();
}
function iX(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, tj.DP)(),
                t = (0, s4.X)("useFavoritesPerkCards"),
                s = (0, it.Lh)(),
                i = (0, is.N)(s)?.standard ?? null,
                { analyticsLocations: a } = (0, C.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
                n = (0, s8.A)({ scrollPosition: iB._F.TRY_IT_OUT, analyticsLocations: a }),
                l = (0, u.useCallback)(() => {
                    (0, tn.openUserSettings)(ta.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                r = (0, u.useCallback)(() => {
                    (0, tn.openUserSettings)(ta.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                c = (0, u.useCallback)(() => {
                    (0, tn.openUserSettings)(ta.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                o = (0, u.useCallback)(() => {
                    (0, M.pX)(eM.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, u.useCallback)(() => {
                    (0, tn.openUserSettings)(ta.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                x = (0, ie.A)({ analyticsLocations: a }),
                g = (0, u.useCallback)(() => {
                    (0, tn.openUserSettings)(ta.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, s5.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                p = iw(),
                h = (0, u.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: N, questOrbMultiplierCard: f } = ih("useFavoritesPerkCards"),
                A = i_(a),
                j = (0, u.useMemo)(
                    () => [
                        {
                            id: eT.SERVER_BOOSTS_CARD_ID,
                            title: ep.intl.formatToPlainString(ep.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: ep.intl.formatToPlainString(ep.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, d.jsx)(sW, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: eT.PROFILES_CARD_ID,
                            title: ep.intl.string(ep.t.xDRab3),
                            description: ep.intl.string(ep.t.yn6fWA),
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            onCtaClick: t ? x : n,
                            primaryAsset: (0, d.jsx)(sK, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: eT.HD_VIDEO_CARD_ID,
                            title: ep.intl.string(ep.t["/mQ5gg"]),
                            description: ep.intl.string(ep.t["7WwAXh"]),
                            primaryAsset: (0, d.jsx)(sX, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: eT.CLIENT_THEMES_CARD_ID,
                            title: ep.intl.string(ep.t.acc6h6),
                            description: ep.intl.formatToPlainString(ep.t.WQazjs, { themeCount: 20 }),
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iG,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: eT.MORE_EMOJIS_CARD_ID,
                            title: ep.intl.string(ep.t.D8vIDT),
                            description: ep.intl.string(ep.t.DRMecB),
                            primaryAsset: (0, d.jsx)(sQ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: eT.LARGE_UPLOADS_CARD_ID,
                            title: ep.intl.string(ep.t.nL1WZV),
                            description: ep.intl.formatToPlainString(ep.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, d.jsx)(sZ, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: eT.CUSTOM_APP_ICONS_CARD_ID,
                            title: ep.intl.string(ep.t["GU+wqh"]),
                            description: ep.intl.string(ep.t["1uPk1Z"]),
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: iU,
                            categories: ["appearance"],
                        },
                        {
                            id: eT.ENTRANCE_SOUNDS_CARD_ID,
                            title: ep.intl.string(ep.t.WJfCPi),
                            description: ep.intl.string(ep.t.liQKJR),
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: eT.DISPLAY_NAME_STYLES_CARD_ID,
                            title: ep.intl.string(ep.t.OLtTrt),
                            description: ep.intl.string(ep.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: ep.intl.string(ep.t.jVcuVY),
                            primaryAsset: ik,
                            categories: ["appearance"],
                        },
                        {
                            id: eT.CUSTOM_SOUNDS_CARD_ID,
                            title: ep.intl.string(ep.t["Cu/oFd"]),
                            description: ep.intl.string(ep.t.czj2aa),
                            primaryAsset: (0, d.jsx)(sq, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: eT.SPECIAL_STICKERS_CARD_ID,
                            title: ep.intl.string(ep.t.MQoVeb),
                            description: ep.intl.string(ep.t.HGCLZX),
                            primaryAsset: (0, d.jsx)("div", {
                                className: ip.Uc,
                                children: (0, d.jsx)(sJ, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: eT.SUPER_REACTIONS_CARD_ID,
                            title: ep.intl.string(ep.t.qERvAA),
                            description: ep.intl.string(ep.t.WkUWzx),
                            primaryAsset: (0, d.jsx)(s$, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: eT.VIDEO_BACKGROUNDS_CARD_ID,
                            title: ep.intl.string(ep.t.ssVDYQ),
                            description: ep.intl.string(ep.t.aUSRMa),
                            primaryAsset: (0, s9.M)(e) ? iH : iF,
                            categories: ["upgrades"],
                        },
                        {
                            id: eT.EARLY_ACCESS_CARD_ID,
                            title: ep.intl.string(ep.t["g/KRY6"]),
                            description: ep.intl.string(ep.t.JzAmJc),
                            primaryAsset: (0, d.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: eT.BADGE_CARD_ID,
                            title: ep.intl.string(ep.t.Bn3CtB),
                            description: ep.intl.string(ep.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, d.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, d.jsx)(s2, { color: en.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: eT.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: ep.intl.string(ep.t["MTD+7w"]),
                            description: ep.intl.string(ep.t.Bhs0s6),
                            ctaText: ep.intl.string(ep.t.dBJVnZ),
                            onCtaClick: o,
                            primaryAsset: (0, d.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != N ? { ...N, categories: ["vip"] } : null,
                        null != f ? { ...f, categories: ["vip"] } : null,
                        {
                            id: eT.PERMADECOS_CARD_ID,
                            title: ep.intl.string(ep.t.L14NZN),
                            description: ep.intl.string(ep.t.eCZkAI),
                            primaryAsset: (0, d.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, N, f, A, n, l, r, c, o, m, g, x, t],
                );
            return (0, u.useMemo)(() => j.filter((e) => null != e && !h.includes(e.id)), [j, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [a, n] = (0, u.useState)(i?.categories[0] ?? iV.BEST_OF_NITRO),
        l = (0, u.useMemo)(() => s.filter((e) => null != e && e.categories.includes(a)), [s, a]);
    return (0, d.jsxs)("div", {
        className: iW.uW,
        children: [
            (0, d.jsx)(ec.D, { variant: "display-sm", className: iW.R_, children: ep.intl.string(ep.t["Uh3+CA"]) }),
            (0, d.jsx)(sV.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: n,
                className: iW.Lq,
                "aria-label": ep.intl.string(ep.t["Uh3+CA"]),
                children: iz.map((e) =>
                    (0, d.jsx)(sV.V.Item, { id: e.id, className: iW.IC, children: e.label() }, e.id),
                ),
            }),
            (0, d.jsx)(
                sz.A,
                {
                    gap: 20,
                    className: iW.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, d.jsx)(
                                eG.S,
                                { ...e, glowing: t === e.id, containerClassName: iW.Ui, onFocus: iK },
                                e.id,
                            );
                    }),
                },
                a,
            ),
        ],
    });
}
var iY = s(723474);
let iQ = function (e) {
    let { className: t } = e,
        s = (0, tj.DP)();
    return (0, d.jsx)("img", {
        className: x()(iY.D, t),
        src: (0, s9.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var iZ = s(177934);
let iq = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, d.jsxs)("div", {
              className: x()(iZ.kL, iZ.Gd, iZ.Eg),
              children: [(0, d.jsx)(iQ, {}), (0, d.jsx)(sw, {}), i],
          })
        : (0, d.jsx)(e3.h, { color: "nitro-pink", className: x()(iZ.kL, iZ.Gd), offsetBottom: s, children: i });
};
function iJ(e) {
    let { glowingPerkId: t = null } = e,
        s = iw();
    return (0, d.jsx)(eV, {
        sectionClassName: eF.uW,
        heading: (0, d.jsx)(ec.D, { variant: "display-sm", className: eF.R_, children: ep.intl.string(ep.t.Aw5DRm) }),
        grid: (0, d.jsx)(d.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, d.jsx)(
                    eG.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: x()(eF.Nr, { [eF.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function i$(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            a = arguments.length > 4 ? arguments[4] : void 0,
            n = (0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
            l = u.useRef(!1);
        u.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: n ? "auto" : "smooth", block: i, inline: a },
                r = e();
            if (null != r && r.offsetHeight > 0) {
                (l.current = !0), r.scrollIntoView(s);
                return;
            }
            let c = !1,
                o = null,
                d = new ResizeObserver((e) => {
                    let t = e[0];
                    null == t ||
                        !(t.contentRect.height > 0) ||
                        l.current ||
                        c ||
                        ((l.current = !0), d.disconnect(), t.target.scrollIntoView(s));
                }),
                u = performance.now(),
                m = () => {
                    if (c || performance.now() - u > 5e3) return;
                    let t = e();
                    null != t
                        ? t.offsetHeight > 0
                            ? ((l.current = !0), t.scrollIntoView(s))
                            : d.observe(t)
                        : (o = requestAnimationFrame(m));
                };
            return (
                m(),
                () => {
                    (c = !0), null != o && cancelAnimationFrame(o), d.disconnect();
                }
            );
        }, [t, n, i, a, ...s]),
            u.useEffect(() => {
                t || (l.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var i0 = s(92737);
let i1 = "/assets/cd2be35d285d4675.svg",
    i2 = (e) => {
        let { userId: t } = e,
            s = (0, w.ds)(),
            { isInNitroHomeHeaderTreatment: i } = z("nitro_member_hub_header"),
            a = (0, g.zy)();
        u.useEffect(() => {
            N.h.wait(async () => {
                let e = [(0, Q.Ay)()];
                null != t && e.push((0, J.A)(t)), await Promise.all(e);
            });
        }, [t]),
            u.useEffect(() => {
                _(!0);
            }, []),
            (0, es.j)(),
            (0, P.P)(S);
        let n = u.useRef(null),
            l = u.useRef(null),
            r = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            { isReady: c, programReward: o } = (0, Z.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: m,
                glowingSectionId: f,
                glowingPerkId: A,
                scrollBlock: j,
                scrollInline: b,
            } = u.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get("perk"),
                    s = e.get(i0.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        i$(m ?? "", null != m, j, b);
        let [R, _] = u.useState(!1),
            v = (0, et.p)(),
            T = u.useRef(null),
            [I, y] = u.useState(!1),
            M = null != v && null != r && r.status === eM.Dmq.CANCELED,
            O = (0, ei.iU)(eO.gD.PREMIUM_MONTH_TIER_2, v, r),
            D = !I && M,
            L = null != (0, p.bG)([q.A], () => (null != t ? q.A.getUserProfile(t) : null)) && (c || null != o),
            G = (0, ee.TF)({ location: "PremiumSubscriberHome" }),
            B = (0, ef.q)(r, G === ee.Iz.STICKY_BAR),
            [H, F] = (0, Y.iP)(
                null != B && L && r?.id != null ? W.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR : null,
                r?.id ?? "",
                { cooldownDurationMs: $.A.Millis.DAYS_30 },
                void 0,
                !0,
            ),
            V = null != r && r.status === eM.Dmq.CANCELED,
            ea = i && !s && !V,
            { analyticsLocations: en } = (0, C.Ay)(E.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [el, er] = u.useState(!1);
        return L
            ? (0, d.jsxs)(X.Gt, {
                  className: x()(iZ.xW, iZ.Gd),
                  ref: n,
                  children: [
                      (0, d.jsx)(iq, {
                          shouldRenderNitroHomeHeaderExperiment: ea,
                          gradientOffsetBottom: s ? 0.55 : 0.8,
                          children: (0, d.jsxs)(C.f5, {
                              value: en,
                              children: [
                                  (0, d.jsx)(K.L, {
                                      innerRef: T,
                                      onChange: (e) => y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, d.jsx)(sP, {
                                          buttonVisibilityRef: T,
                                          className: iZ.v1,
                                          userDiscountOffer: v,
                                          discountedPrice: O,
                                      }),
                                  }),
                                  (0, d.jsx)(e2, { glowingPerkId: A, glowingSectionId: f }),
                                  (0, d.jsx)(iJ, { glowingPerkId: A }),
                                  (0, d.jsx)(iX, { glowingPerkId: A }),
                                  (0, d.jsx)(e9, {
                                      className: iZ.Zy,
                                      location: E.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eM.liQ.NITRO_HOME, section: eM.JJy.GIFT_BANNER },
                                  }),
                                  (0, d.jsx)("div", { className: iZ.hz }),
                                  (0, d.jsx)(K.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !el &&
                                              (U.default.track(eM.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: en,
                                              }),
                                              er(!0));
                                      },
                                      children: (0, d.jsx)("div", { ref: l, className: iZ._Z }),
                                  }),
                                  (0, d.jsx)("img", {
                                      src: i1,
                                      className: iZ.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: ep.intl.string(ep.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != O &&
                          (0, d.jsx)(sF, {
                              isVisible: D && R,
                              premiumSubscription: r,
                              churnDiscountOffer: v,
                              discountedPrice: O,
                          }),
                      null != H &&
                          null != B &&
                          null != r &&
                          (0, d.jsx)(eN, { premiumSubscription: r, content: B, markAsDismissed: F }),
                  ],
              })
            : ea
              ? (0, d.jsxs)("div", {
                    className: x()(iZ.kL, iZ.Lq, iZ.TN, iZ.Eg),
                    children: [
                        (0, d.jsx)(sw, {}),
                        (0, d.jsx)("div", { className: iZ.S, children: (0, d.jsx)(h.y, {}) }),
                    ],
                })
              : (0, d.jsx)("div", { className: x()(iZ.kL, iZ.Lq), children: (0, d.jsx)(h.y, {}) });
    };
var i3 = s(286320),
    i6 = s(727949),
    i7 = s(440005),
    i9 = s(26508),
    i5 = s(735668),
    i8 = s(303136);
let i4 = function (e) {
    let t,
        { className: s } = e,
        i = (0, t5.TM)(),
        a = (0, tA.q)((0, tj.Ay)());
    return (
        (t = i
            ? a
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : a
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, d.jsx)("div", {
            className: s,
            children: (0, d.jsx)(
                i8.A,
                {
                    fallbackImage: a
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, d.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var ae =
        (((o = {}).HOME = "home"),
        (o.WHATS_NEW = "whatsNew"),
        (o.BEST_OF_NITRO = "bestOfNitro"),
        (o.PLANS = "plans"),
        (o.COMPARE = "compare"),
        o),
    at = s(298203);
let as = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        a = (0, el.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        n = { section: eM.JJy.MARKETING_FLOATING_CTA };
    return (0, d.jsx)(ea.animated.div, {
        className: at.i,
        style: a,
        "data-mtctest-ignore": "true",
        children: (0, d.jsxs)("div", {
            className: at.U,
            children: [
                (0, d.jsx)(eI.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: n,
                }),
                (0, d.jsx)(e6.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var ai = s(999461);
let aa = function () {
    let e = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion);
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)("div", {
                className: ai.BI,
                children: (0, d.jsx)(st, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: t4.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, d.jsx)("img", { src: sf, alt: "", className: ai.Q }),
                }),
            }),
            (0, d.jsx)(si, {
                isMotionReduced: e,
                boltContainerClassName: ai.nJ,
                carContainerClassName: ai.IN,
                hammerContainerClassName: ai.Gj,
                keyContainerClassName: ai.FV,
                starContainerClassName: ai.E1,
                boltAssetClassName: ai.j7,
                carAssetClassName: ai.or,
                hammerAssetClassName: ai.Wv,
                keyAssetClassName: ai.rs,
                starAssetClassName: ai.OY,
            }),
        ],
    });
};
var an = s(901013);
let al = u.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, C.Ay)(E.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, d.jsx)(C.f5, {
        value: s,
        children: (0, d.jsx)("div", {
            ref: t,
            className: an.kL,
            children: (0, d.jsxs)("div", {
                className: an.hQ,
                children: [
                    (0, d.jsx)(aa, {}),
                    (0, d.jsx)(ec.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: an.RH,
                        children: ep.intl.string(ep.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
al.displayName = "PremiumMarketingFooter";
var ar = s(939249);
let ac = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        a = {
            [ae.HOME]: ep.intl.string(ep.t.uGRXjS),
            [ae.WHATS_NEW]: ep.intl.string(ep.t["mfcR/v"]),
            [ae.BEST_OF_NITRO]: ep.intl.string(ep.t.xQKkE8),
            [ae.PLANS]: ep.intl.string(ep.t.wyNMnm),
            [ae.COMPARE]: ep.intl.string(ep.t.pwD7If),
        },
        n = (0, p.bG)([D.default], () => D.default.getCurrentUser()),
        l = (0, sO.Gh)("premium_marketing_nav_bar") && null != n,
        r = u.useRef(null),
        c = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, d.jsxs)(sM.A, {
        className: sU.TQ,
        transparent: !0,
        children: [
            (0, d.jsxs)("div", {
                className: sU.Wc,
                children: [
                    (0, d.jsxs)("div", {
                        className: sU.wG,
                        children: [
                            (0, d.jsx)(eu.t, { className: sU.nE, colorClass: sU.oG }),
                            (0, d.jsx)("div", {
                                className: sU.zc,
                                role: "tablist",
                                "aria-label": ep.intl.string(ep.t.O9MiXY),
                                children: c.map((e) => {
                                    let t = s === e.id,
                                        i = a[e.id];
                                    return (0, d.jsxs)(
                                        ar.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: sU.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, d.jsx)(eo.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, d.jsx)("div", { className: sU.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: sU.MQ,
                        children: [
                            l &&
                                (0, d.jsx)(sk.l, { ref: r, size: "sm", location: E.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, d.jsx)(e6.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, d.jsx)(sL.O, { targetElementRef: r }),
        ],
    });
};
var ao = s(990078),
    ad = s(704333),
    au = s(414499),
    am = s(597770),
    ax = s(500060),
    ag = s(406860),
    ap = s(983060),
    ah = s(869590);
function aN() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, ag.A)({ boxType: eS.X, thirdPartyPartner: "xbox" }),
        s = [
            { icon: ad.B, text: ep.intl.string(eD.default.MUypiB) },
            { icon: au.h, text: ep.intl.string(eD.default.ec5Rdd) },
            { icon: am.o, text: ep.intl.string(eD.default["9t2CzW"]), tooltip: eD.default.AyECej },
            { icon: ax.o, text: ep.intl.string(eD.default.R7YJAY) },
        ];
    return (0, d.jsx)(K.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, d.jsx)("div", {
            ref: e,
            className: ah.iE,
            children: (0, d.jsxs)("div", {
                className: ah.Nr,
                children: [
                    (0, d.jsxs)("div", {
                        className: ah.j,
                        children: [
                            (0, d.jsx)("div", { className: ah._g }),
                            (0, d.jsx)("div", { className: ah.$h }),
                            (0, d.jsx)("div", { className: ah.Rv }),
                            (0, d.jsx)("div", { className: ah.Lw }),
                        ],
                    }),
                    (0, d.jsxs)("div", {
                        className: ah.CT,
                        children: [
                            (0, d.jsxs)("div", {
                                className: ah.Qs,
                                children: [
                                    (0, d.jsxs)("div", {
                                        children: [
                                            (0, d.jsx)(ec.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: ah.R_,
                                                children: ep.intl.string(eD.default.rkt1aw),
                                            }),
                                            (0, d.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, d.jsxs)(
                                                            "div",
                                                            {
                                                                className: ah.yf,
                                                                children: [
                                                                    (0, d.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, d.jsx)(eo.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, d.jsx)("div", {
                                                                            className: ah.Jn,
                                                                            children: (0, d.jsx)(ao.m, {
                                                                                text: ep.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, d.jsx)(eC.m, {
                                                                                    size: "xxs",
                                                                                    color: "var(--icon-default)",
                                                                                }),
                                                                            }),
                                                                        }),
                                                                ],
                                                            },
                                                            s,
                                                        );
                                                    }),
                                                    (0, d.jsx)("div", {
                                                        className: ah.xF,
                                                        children: (0, d.jsx)(eI.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: eO.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        className: ah.WE,
                                        children: (0, d.jsx)(eo.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: ep.intl.format(eD.default.KDKdWi, { termsLink: (0, ap.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, d.jsx)("div", {
                                className: ah.r1,
                                children: (0, d.jsx)("img", {
                                    className: ah.wm,
                                    src: "https://cdn.discordapp.com/assets/content/183a222feae2555e7a057002bbcae445e70efa78fb204d353c9c93b4a1f210d4.png",
                                    alt: "Xbox Game Pass",
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
var af = s(750338),
    aA = s(280041),
    aj = s(506732);
function aE(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: a,
        isReducedMotion: n,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, d.jsxs)("div", {
        className: x()(aj.boxBackdrop, t),
        children: [
            (0, d.jsx)(ec.D, {
                className: aj.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, d.jsx)("div", { className: aj.highlightBento, children: r }),
            (0, d.jsx)("div", {
                className: aj.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = aA.A0.SMALL;
                            break;
                        case 2:
                            s = aA.A0.MEDIUM;
                            break;
                        default:
                            s = aA.A0.LARGE;
                    }
                    return (0, d.jsx)(d.Fragment, {
                        children: e.map((e) =>
                            (0, d.jsx)(
                                af.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: a, isReducedMotion: n },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let aC = u.memo(function (e) {
        let t = (0, eA.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, aA.Ay)(t);
        return (0, d.jsx)(aE, {
            boxLayout: s,
            title: ep.intl.string(ep.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, d.jsx)(aN, {}) : null,
            ...e,
        });
    }),
    ab = u.memo(function (e) {
        let { bestOfBoxes: t } = (0, aA.Ay)();
        return (0, d.jsx)(aE, { boxLayout: t, title: ep.intl.string(ep.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var aR = s(526292),
    a_ = s(236834),
    av = s(331813);
function aT(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, ty.A)({ userId: t?.id, size: tT._3.SIZE_24, animateOnHover: !0 });
    return (0, d.jsx)("div", {
        className: av.$6,
        children: (0, d.jsxs)("div", {
            className: av.sc,
            children: [
                (0, d.jsx)("div", {
                    className: av.kR,
                    children: (0, d.jsx)(tI.eu, { src: s, "aria-label": t.username, size: tT._3.SIZE_32, ...i }),
                }),
                (0, d.jsx)(ec.D, {
                    variant: "heading-sm/normal",
                    className: av.FS,
                    color: "text-strong",
                    children: ep.intl.format(ep.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var aI = s(579245),
    aS = s(369805);
let aP = function () {
    let e = (0, aS.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, d.jsx)(th, { text: e });
};
var ay = s(97352);
function aM() {
    let e = (0, p.bG)([ay.A], () => ay.A.getForSkuAndInterval((0, tr.mH)(eO.pe.TIER_0), eO.WT.MONTH));
    return null != e ? (0, tr.sS)(e) : "\u2026";
}
var aO = s(512105);
let aD = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        i = (0, t5.TM)();
    return (0, d.jsxs)("div", {
        "aria-hidden": !0,
        className: aO.YU,
        children: [
            (0, d.jsx)(sl, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: aO.wG,
                assetClassName: aO.lu,
            }),
            (0, d.jsx)(si, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: aO.nJ,
                carContainerClassName: aO.IN,
                hammerContainerClassName: aO.Gj,
                keyContainerClassName: aO.FV,
                starContainerClassName: aO.E1,
                boltAssetClassName: aO.j7,
                carAssetClassName: aO.or,
                hammerAssetClassName: aO.Wv,
                keyAssetClassName: aO.rs,
                starAssetClassName: aO.OY,
            }),
        ],
    });
};
var aL = s(214496);
let ak = u.memo(
    u.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: a } = e,
            { analyticsLocations: n } = (0, C.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
            l = aM(),
            r = (0, a_.A)(),
            c = null != r,
            { visibilityPercentageRef: o, visibilityPercentage: u } = tg(
                !(0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
            ),
            m = (0, i3.b)(),
            g = !c && m.length > 0,
            h = (0, tm.c)(e5.C.MARKETING_PAGE_BANNER),
            N = null != h && "marketingPageBanner" === h.properties.properties.oneofKind,
            f = (0, aR.ar)() && !N,
            A = (0, td.O)(),
            j = (null != A && eO.U4.includes(A.discountId)) || N;
        return (0, d.jsx)(C.f5, {
            value: n,
            children: (0, d.jsx)("div", {
                ref: t,
                className: x()(aL.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, d.jsx)("div", {
                    ref: o,
                    children: (0, d.jsxs)("div", {
                        className: aL.hQ,
                        children: [
                            (0, d.jsx)(aD, { containerVisibilityPercentage: u }),
                            f && (0, d.jsx)(aP, {}),
                            (0, d.jsx)("div", {
                                className: aL.s8,
                                children: (0, d.jsx)(t1.F, {
                                    forceLevel: 1,
                                    children: (0, d.jsx)(ec.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: aL.wx,
                                        children: ep.intl.string(ep.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, d.jsxs)("div", {
                                className: aL.rf,
                                children: [
                                    c &&
                                        (0, d.jsx)("div", {
                                            className: aL.eZ,
                                            children: (0, d.jsx)(aT, { referrer: r }),
                                        }),
                                    g &&
                                        (0, d.jsx)("div", {
                                            className: aL.Qn,
                                            children: (0, d.jsx)(aI.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, d.jsxs)("div", {
                                        className: f ? aL.es : aL.UJ,
                                        children: [
                                            (0, d.jsx)(eI.A, {
                                                size: "md",
                                                fullWidth: f,
                                                hasActivePromotion: !!a,
                                                subscriptionTier: j && null == i ? eO.pe.NONE : i,
                                                buttonTextOverride: j ? ep.intl.string(ep.t["2pG5Ga"]) : void 0,
                                            }),
                                            !f && (0, d.jsx)(e6.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, d.jsx)("div", {
                                        className: aL.iQ,
                                        children: (0, d.jsx)(eo.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: ep.intl.format(ep.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != h &&
                                        "marketingPageBanner" === h.properties.properties.oneofKind &&
                                        (0, d.jsx)(tN.x, {
                                            componentId: h.id,
                                            promotionBannerMarketingComponentFields:
                                                h.properties.properties.marketingPageBanner,
                                        }),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        });
    }),
);
var aU = s(820081),
    aG = s(140735),
    aw = s(401432),
    aB = s(580630),
    aH = s(795269),
    aF = s(773669),
    aV = s(84483),
    az = s(745699),
    aW = s(746458),
    aK = s(202600);
function aX(e) {
    let { includes: t } = e;
    return t
        ? (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)(aU.B, { size: "sm", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, d.jsx)(aG.A, { children: ep.intl.string(ep.t["tq+6t/"]) }),
              ],
          })
        : (0, d.jsxs)(d.Fragment, {
              children: [
                  (0, d.jsx)(aw.a, { size: "xs", color: en.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, d.jsx)(aG.A, { children: ep.intl.string(ep.t.l4qZrp) }),
              ],
          });
}
function aY(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, d.jsxs)("tr", {
        className: x()(aW.nM, aW.WQ),
        children: [
            (0, d.jsx)("th", {
                scope: "row",
                className: aW.nx,
                children: (0, d.jsx)(eo.E, { variant: "text-md/medium", children: t }),
            }),
            (0, d.jsx)("td", {
                className: aW.Hn,
                children:
                    null != s.text
                        ? (0, d.jsx)(eo.E, { variant: "text-md/medium", children: s.text })
                        : (0, d.jsx)(aX, { includes: !!s.includes }),
            }),
            (0, d.jsx)("td", {
                className: aW.Hn,
                children:
                    null != i.text
                        ? (0, d.jsx)(eo.E, { variant: "text-md/medium", children: i.text })
                        : (0, d.jsx)(aX, { includes: !!i.includes }),
            }),
        ],
    });
}
function aQ(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, d.jsxs)("tbody", {
        children: [
            (0, d.jsx)("tr", {
                className: x()(aW.nM, aW.Gf),
                children: (0, d.jsxs)("td", {
                    className: aW.nx,
                    colSpan: 3,
                    children: [
                        (0, d.jsx)(ec.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, d.jsx)(eo.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, d.jsx)(aY, { ...e }, e.id)),
        ],
    });
}
function aZ(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === eO.PremiumTypes.TIER_0 ? ep.intl.string(ep.t.tUbSDK) : ep.intl.string(ep.t.Ipxkog);
    return (0, d.jsxs)("div", {
        className: aW.nn,
        children: [
            (0, d.jsxs)("div", {
                className: aW.KS,
                children: [
                    (0, d.jsx)(eu.t, { colorClass: aW.oG }),
                    (0, d.jsx)(ec.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, d.jsx)(ec.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function aq(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: a } = e,
        n = i ? a : (0, aB.$g)(s.amount, s.currency);
    return (0, d.jsx)("thead", {
        children: (0, d.jsxs)("tr", {
            className: aW.U1,
            children: [
                (0, d.jsx)("th", {
                    scope: "col",
                    className: aW.Cr,
                    children: (0, d.jsx)(ec.D, { variant: "heading-xl/bold", children: ep.intl.string(ep.t.ED4UVD) }),
                }),
                (0, d.jsx)("th", {
                    scope: "col",
                    className: aW.Hn,
                    children: (0, d.jsx)(aZ, {
                        premiumType: eO.PremiumTypes.TIER_0,
                        priceString: (0, aB.$g)(t.amount, t.currency),
                    }),
                }),
                (0, d.jsx)("th", {
                    scope: "col",
                    className: aW.Hn,
                    children: (0, d.jsx)(aZ, { premiumType: eO.PremiumTypes.TIER_2, priceString: n }),
                }),
            ],
        }),
    });
}
let aJ = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: a = eO.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: n } = (0, C.Ay)(E.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, tu.V)(),
            r = l?.subscription_trial?.sku_id,
            c = (0, td.O)(),
            o = (0, ei.YJ)(c),
            m = null != c && (0, ei.U9)(c, eO.pe.TIER_2) && o === eO.gD.PREMIUM_MONTH_TIER_2,
            g = (0, ei.N1)(o),
            p = null != g ? `${g}/${(0, tr.FJ)(eO.WT.MONTH)}` : "",
            h = (0, tr.JM)(eO.gD.PREMIUM_MONTH_TIER_0),
            N = (0, tr.JM)(eO.gD.PREMIUM_MONTH_TIER_2),
            f = (function () {
                let e = (0, eA.l)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: ep.intl.string(ep.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: ep.intl.string(ep.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: ep.intl.string(ep.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: ep.intl.string(az.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: a, multiplier: n } = (0, ia.lk)(ig.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = eK.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, eX.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, aV.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: ep.intl.string(ep.t.NG1e6l),
                            subtitle: ep.intl.format(eD.default.uJcbMv, {
                                termsLink: ez.A.getArticleURL(eM.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: ep.intl.string(eD.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: ep.intl.string(eD.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: ep.intl.string(eJ.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        a &&
                            i.push({
                                id: 27,
                                label: ep.intl.formatToPlainString(ep.t.Uhemob, { bonusOrbMultiplier: n }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: ep.intl.string(id.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: ep.intl.string(ep.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: ep.intl.string(ep.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: ep.intl.string(ep.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: ep.intl.string(ep.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: ep.intl.string(ep.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: ep.intl.string(ep.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: ep.intl.string(ep.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: ep.intl.string(ep.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: ep.intl.string(ep.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, tr.EJ)(eO.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, tr.EJ)(eO.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: ep.intl.string(ep.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: ep.intl.string(ep.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: ep.intl.string(ep.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: ep.intl.string(ep.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: ep.intl.formatToPlainString(ep.t.nyhDpw, {
                                        numBoosts: eO.M4,
                                        percentageOff: (0, aB.l9)(aF.default.locale, eO.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: ep.intl.string(ep.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: ep.intl.string(ep.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: ep.intl.string(ep.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: ep.intl.formatToPlainString(ep.t["8crdzJ"], { maxChars: eM.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: ep.intl.string(ep.t["il8+nC"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                    ]
                );
            })();
        if (i) t = null;
        else {
            let e = null != l ? ep.intl.string(ep.t.IBYG5U) : ep.intl.string(ep.t.TR2B4T);
            t = (0, d.jsx)(aH.R, { className: x()(aW.Io, aW.SP), text: e });
        }
        let A = r === eO.pe.TIER_0 || a === eO.PremiumTypes.TIER_0;
        return (0, d.jsx)(C.f5, {
            value: n,
            children: (0, d.jsxs)("div", {
                className: x()(aW.zr, s),
                children: [
                    (0, d.jsx)(ec.D, {
                        className: aW.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: ep.intl.string(ep.t.DbPgAd),
                    }),
                    (0, d.jsxs)("div", {
                        className: aW.wY,
                        children: [
                            (0, d.jsxs)("div", {
                                className: x()(aW.fO, { [aW.Vd]: A, [aW.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, d.jsx)("div", { className: aW.xQ }),
                                    (0, d.jsxs)("div", {
                                        className: aW.wN,
                                        children: [
                                            (0, d.jsx)("img", { src: aK, alt: "", className: aW.kQ }),
                                            (0, d.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: aW.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, d.jsxs)("table", {
                                className: aW.tp,
                                children: [
                                    (0, d.jsx)(aq, {
                                        tier0Price: h,
                                        tier2Price: N,
                                        shouldUseDiscountPrice: m,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    f.map((e) => (0, u.createElement)(aQ, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    a$ = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, u.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, a] = (0, u.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [n, l] = (0, u.useState)(e[0]);
        (0, u.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && l(e[0]);
        }, [i]);
        let r = (0, u.useRef)({});
        return (
            (0, u.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        a((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
                    });
                });
                return (
                    Object.values(r.current).forEach((t) => {
                        null != t && e.observe(t);
                    }),
                    () => e.disconnect()
                );
            }, []),
            {
                navBarSections: (0, u.useMemo)(
                    () =>
                        e.reduce(
                            (e, t, i) => (
                                (e[t] = {
                                    id: t,
                                    ref: (e) => {
                                        (r.current[t] = e), null != e && (e.id = t);
                                    },
                                    scrollToSection: () => s(t),
                                    order: i,
                                }),
                                e
                            ),
                            {},
                        ),
                    [e, s],
                ),
                activeSectionId: n,
                setActiveSectionId: l,
            }
        );
    };
var a0 = s(818348),
    a1 = s(94509);
let a2 = () => {
    let e = (0, g.zy)();
    (0, P.P)(S);
    let t = u.useRef(null),
        s = u.useRef(null),
        i = u.useRef(null),
        a = u.useRef(null),
        n = u.useRef(null),
        l = u.useRef(null),
        r = (0, p.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        [c, o] = u.useState(r);
    u.useEffect(() => {
        if (r) return void o(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && o(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [r]);
    let [m, h] = u.useState(!1),
        [N, f] = u.useState(!1),
        [A, j] = u.useState(!1),
        [b, R] = u.useState(!1),
        _ = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        v = null != _ ? (0, tr.EL)(_) : null,
        T = null != v ? tr.Ay.getSkuIdForPlan(v.planId) : null,
        I = null !== T && T !== eO.pe.TIER_2 ? eO.pe.TIER_2 : null,
        y = (0, tc.cg)(),
        { analyticsLocations: M } = (0, C.Ay)(E.A.PREMIUM_MARKETING);
    u.useEffect(() => {
        R(!0);
    }, []);
    let O = (0, i9.DK)(i7.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: D } = (0, ia.lk)(ig.rE.NITRO_HOME_MARKETING),
        L = O && D ? aA.NI.COMBINED_ORBS : D ? aA.NI.ORB_MULTIPLIER : O ? aA.NI.ORB_REWARDS : null,
        G = u.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t ? L : t === aA.NI.THREE_P_PROMOTIONS ? aA.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, L]);
    i$(G ?? "", null != G);
    let { navBarSections: w, activeSectionId: B } = a$([ae.HOME, ae.WHATS_NEW, ae.BEST_OF_NITRO, ae.PLANS, ae.COMPARE]),
        { home: H, whatsNew: F, bestOfNitro: V, plans: z, compare: W } = w,
        Y = (0, d.jsxs)("div", {
            ref: s,
            className: x()(a1.kL, a1.Gd, a1.iI, { [a1.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(i4, { className: a1.yH }),
                (0, d.jsx)(ac, { navBarSections: w, activeSectionId: B, isAnimationComplete: c }),
                (0, d.jsxs)("div", {
                    className: a1.Qr,
                    children: [
                        (0, d.jsx)("div", {
                            className: a1.qY,
                            ref: H.ref,
                            children: (0, d.jsx)(K.L, {
                                innerRef: a,
                                onChange: (e) => h(e),
                                threshold: 0,
                                active: !0,
                                children: (0, d.jsx)(ak, {
                                    ref: a,
                                    subscriptionTier: I,
                                    isEligibleForBogoPromotion: y,
                                }),
                            }),
                        }),
                        y &&
                            (0, d.jsx)("div", {
                                className: a1.Hz,
                                children: (0, d.jsx)(t_, { variant: tR.APPLICATION_NITRO_HOME }),
                            }),
                        (0, d.jsx)("div", {
                            className: a1.So,
                            ref: F.ref,
                            children: (0, d.jsx)(aC, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: a1.KQ,
                            ref: V.ref,
                            children: (0, d.jsx)(ab, { shouldLoadVideo: b, isReducedMotion: r }),
                        }),
                        (0, d.jsx)("div", {
                            className: a1.s5,
                            ref: z.ref,
                            children: (0, d.jsx)(K.L, {
                                innerRef: i,
                                onChange: (e) => f(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, d.jsx)(i5.jP, { innerRef: i }),
                            }),
                        }),
                        (0, d.jsx)("div", { className: a1.aC, ref: W.ref, children: (0, d.jsx)(aJ, {}) }),
                    ],
                }),
                (0, d.jsx)(K.L, {
                    innerRef: n,
                    onChange: (e) => {
                        e &&
                            !A &&
                            (U.default.track(eM.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            j(!0));
                    },
                    children: (0, d.jsx)("div", { ref: n, className: a1._Z }),
                }),
                (0, d.jsx)(al, { ref: l }),
                (0, d.jsx)(as, { isVisible: !m && !N && b, subscriptionTier: I, isEligibleForBogoPromotion: y }),
                (0, d.jsx)(i4, { className: a1.MF }),
            ],
        });
    return (0, d.jsx)(eb.N, {
        theme: a0.NJ.DARKER,
        children: (e) => (0, d.jsx)(X.Gt, { className: x()(a1.XG, e), ref: t, children: Y }),
    });
};
var a3 = s(607399),
    a6 = s(412260),
    a7 = s(662367),
    a9 = s(815846),
    a5 = s(860839),
    a8 = s(695366),
    a4 = s(238272);
let ne = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: a, textColor: n } = e,
        l = (0, aR.ar)();
    if (null == i) return null;
    let r = null != i ? tr.Ay.getPremiumPlanItem(i) : null;
    if (
        (tr.Ay.isBoostOnlySubscription(i)
            ? (t = ep.intl.string(ep.t.Uj0md3))
            : null != r && (t = tr.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, tn.openUserSettings)(ta.X.SUBSCRIPTIONS_PANEL);
    }
    let o = (null != r ? tr.Ay.getSkuIdForPlan(r.planId) : null) === eO.pe.TIER_1;
    return (
        (s = null != n ? n : l ? "text-overlay-light" : "text-default"),
        (0, d.jsxs)(eR.Z, {
            className: x()(a4.kL, a, { [a4.He]: l }),
            type: eR.Z.Types.CUSTOM,
            children: [
                (0, d.jsx)(a8.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: x()(a4.Kk, { [a4.Pt]: l }),
                }),
                (0, d.jsx)(eo.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: o
                        ? ep.intl.format(ep.t["tYuv+T"], {
                              helpdeskArticle: ez.A.getArticleURL(eM.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : ep.intl.format(ep.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var nt = s(442015);
let ns = function (e) {
    let { lifted: t = !1 } = e;
    return (0, d.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: x()(nt.zr, { [nt.N]: t }),
        children: [
            (0, d.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, d.jsx)("defs", {
                children: (0, d.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, d.jsx)("stop", { className: nt.eq }),
                        (0, d.jsx)("stop", { offset: "0.339235", className: nt.l_ }),
                        (0, d.jsx)("stop", { offset: "0.492065", className: nt.sM }),
                        (0, d.jsx)("stop", { offset: "0.823236", className: nt.zi }),
                        (0, d.jsx)("stop", { offset: "0.899558", className: nt.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var ni = s(900797),
    na = s(847374),
    nn = s(812993),
    nl = s(837761);
function nr(e) {
    let { className: t } = e;
    return (0, d.jsx)(nn.Lp, { className: x()(nl.T, t), text: ep.intl.string(ep.t.EYxi0o) });
}
var nc = s(904788),
    no = s(507553),
    nd = s(255438);
let nu = "/assets/5b4fec8511c3676a.svg",
    nm = "/assets/0838bda6ecd20d91.svg";
function nx(e, t, s) {
    return (0, s9.M)(e) ? t : s;
}
var ng = s(259270);
function np(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, d.jsxs)(ar.D, {
        onClick: s,
        className: ng.customButton,
        children: [
            t ? ep.intl.string(ep.t.maZaN3) : ep.intl.string(ep.t["37C26f"]),
            t
                ? (0, d.jsx)(ni.t, { size: "md", color: "currentColor", className: ng.arrow })
                : (0, d.jsx)(na.a, { size: "md", color: "currentColor", className: ng.arrow }),
        ],
    });
}
function nh(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: a,
            imageClassName: n,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
        } = e,
        { analyticsLocations: o } = (0, C.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, d.jsx)(C.f5, {
        value: o,
        children: (0, d.jsxs)("div", {
            className: x()(ng.perkCard, i),
            children: [
                r
                    ? (0, d.jsx)(nc.A, {
                          className: ng.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                c ? (0, d.jsx)(nr, { className: ng.perkCardEarlyAccessBadge }) : null,
                (0, d.jsx)("img", { src: a, alt: "", className: x()(n, ng.perksCardArt) }),
                (0, d.jsxs)("div", {
                    children: [
                        (0, d.jsxs)(ec.D, {
                            variant: "heading-lg/extrabold",
                            className: ng.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, d.jsx)(eo.E, {
                            variant: "text-sm/normal",
                            className: ng.perkCardDescription,
                            children: "function" == typeof s ? s(o) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let nN = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [a, n] = u.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, tj.Ay)(),
                a = (0, s4.X)("usePerkCards"),
                n = (0, t9.bG)([D.default], () => {
                    let e = D.default.getCurrentUser();
                    return tr.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, nd.Xq)(eO.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: ep.intl.string(ep.t.SS87rQ),
                    description: ep.intl.string(ep.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: ep.intl.string(ep.t["5cYMu0"]),
                    description: ep.intl.string(ep.t.vxk9va),
                    imageSource: nx(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: ep.intl.string(ep.t["/xvEMy"]),
                    description: ep.intl.string(ep.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: ep.intl.string(ep.t.OuItFi),
                    description: ep.intl.string(ep.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: ep.intl.string(ep.t["R2IV/Q"]),
                    description: ep.intl.string(ep.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: ep.intl.string(ep.t.lKDhhJ),
                    description: (e) => {
                        if (a)
                            return n
                                ? ep.intl.formatToPlainString(ep.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : ep.intl.formatToPlainString(ep.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                no.A.setState({ scrollPosition: iB._F.TRY_IT_OUT }),
                                    t(ta.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return n
                            ? ep.intl.format(ep.t.aj1pfZ, { onCheckItOutClick: t })
                            : ep.intl.format(ep.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: ep.intl.string(ep.t.BUScid),
                    description: ep.intl.string(ep.t.vN6XpQ),
                    imageSource: nx(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: ep.intl.string(ep.t.Bv8Pfk),
                    description: ep.intl.string(ep.t.JMfaTU),
                    imageSource: nx(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: ep.intl.string(ep.t.Bv8Pfk),
                    description: ep.intl.string(ep.t.JMfaTU),
                    imageSource: nx(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: ep.intl.string(ep.t["lGcW+c"]),
                    description: ep.intl.string(ep.t["/fDyO+"]),
                    imageSource: nx(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: ep.intl.string(ep.t["1c+xwT"]),
                    description: ep.intl.string(ep.t.hJG8ZN),
                    imageSource: nx(i, nm, nu),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: ep.intl.string(ep.t.tzdIwI),
                    description: ep.intl.string(ep.t.hJG8ZN),
                    imageSource: nx(i, nm, nu),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: ep.intl.string(ep.t.tzdIwI),
                    description: ep.intl.string(ep.t.hJG8ZN),
                    imageSource: nx(i, nm, nu),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: ep.intl.string(ep.t.RSXQYO),
                    description: ep.intl.string(ep.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: ep.intl.string(ep.t["uZt5q/"]),
                    description: ep.intl.string(ep.t.ZK3ZoX),
                    imageSource: nx(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: ep.intl.formatToPlainString(ep.t.jqhAdL, { premiumMaxSize: l }),
                    description: ep.intl.formatToPlainString(ep.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: ep.intl.string(ep.t.NaGpTf),
                    description: ep.intl.string(ep.t["A8O/Qw"]),
                    imageSource: nx(i, iH, iF),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: ng }),
        r = (0, t9.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, C.Ay)(),
        o = [
            l.emoji,
            l.streaming,
            l.upload,
            l.customAppIcons,
            l.soundboard,
            l.videoBackground,
            l.superReactions,
            l.stickersPremiumPerk,
            l.badgeAlt,
        ];
    return (0, d.jsxs)("div", {
        className: x()(ng.perksContainer, t, {
            [ng.partiallyHidden]: i && !a,
            [ng.subscriberNitroHome]: i,
            [ng.reducedMotion]: r,
        }),
        children: [
            (0, d.jsx)(ec.D, {
                variant: "heading-xxl/extrabold",
                className: ng.perksTitle,
                children: i ? ep.intl.string(ep.t.QX14gI) : ep.intl.string(ep.t.RGadQR),
            }),
            (0, d.jsx)("div", {
                className: x()(ng.perkCardContainer, { [ng.perkCardContainerExpanded]: a }),
                children: o.map((e) => null != e && (0, d.jsx)(nh, { ...e }, e.title)),
            }),
            i &&
                (0, d.jsxs)(d.Fragment, {
                    children: [
                        (0, d.jsx)("div", {
                            className: x()({ [ng.sizeGizmo]: !a, [ng.sizeGizmoExpanded]: a }),
                            children: (0, d.jsx)(np, {
                                onClick: function () {
                                    U.default.track(eM.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: a,
                                    }),
                                        n(!a);
                                },
                                isShowingAll: a,
                            }),
                        }),
                        (0, d.jsx)("div", { className: x()(ng.cover, { [ng.hidden]: a }) }),
                    ],
                }),
        ],
    });
};
var nf = s(194509),
    nA = s(618526);
let nj = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: a } = e,
        n = (0, el.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eM.JJy.MARKETING_FLOATING_CTA },
        r = (0, tj.Ay)(),
        c = (0, tA.M)(r);
    return (0, d.jsx)(ea.animated.div, {
        className: x()(nA.iE, { [nA.H8]: i, [nA.q4]: !t }),
        style: n,
        children: (0, d.jsxs)("div", {
            className: i ? nA.zW : nA.iJ,
            children: [
                (0, d.jsx)(tC.A, {
                    color: c ? tf.XD.BRAND_INVERTED : void 0,
                    className: x()(nA.x6, { [nA.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: a,
                    shinyButtonClassName: c ? void 0 : nA.PJ,
                }),
                (0, d.jsx)(nf.A, { className: nA.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var nE = s(762405);
function nC(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: a,
            isApplicationHome: n,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, d.jsx)(tC.A, {
                  color: l ? tf.XD.BRAND_INVERTED : void 0,
                  className: x()(nE.x6, nE.Ph, a, { [nE.Sq]: t && n, [nE.MF]: n && !l }),
                  shinyButtonClassName: l ? void 0 : nE.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, d.jsx)(tC.A, {
                  color: l || !n ? tf.XD.BRAND_INVERTED : void 0,
                  className: x()(nE.x6, nE.Ph, a, { [nE.Sq]: t && n, [nE.MF]: n && !l }),
                  subscriptionTier: s,
              }),
        o = t && n ? null : (0, d.jsx)(nf.A, { className: x()(nE.x6, a), color: n ? void 0 : tf.XD.WHITE });
    return (0, d.jsxs)("div", { className: x()(nE.UD, i), children: [c, " ", o] });
}
function nb() {
    return (0, d.jsxs)(d.Fragment, {
        children: [
            (0, d.jsx)(nc.p, { className: nE.zd }),
            (0, d.jsx)(nc.p, { className: nE.G }),
            (0, d.jsx)(nc.p, { className: nE.zy }),
            (0, d.jsx)(nc.p, { className: nE.GX }),
        ],
    });
}
function nR(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        a = aM();
    return (0, d.jsx)(eo.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: x()(nE.h_, { [nE.If]: s, [nE.jn]: i }),
        children: ep.intl.format(ep.t.kt9wxs, { cheapestMonthlyPrice: a }),
    });
}
let n_ = u.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: a, isDarkMode: n } = e,
        { analyticsLocations: l } = (0, C.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, to.QQ)(),
        c = (0, aR.ar)(),
        o = (0, tc.cg)(),
        u = (0, i3.b)().length > 0,
        m = ep.intl.string(ep.t.YCZldK);
    return (0, d.jsx)(C.f5, {
        value: l,
        children: (0, d.jsxs)("div", {
            ref: t,
            className: x()(nE.kL, s, { [nE.V1]: !c, [nE.Q4]: !c && u }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, d.jsxs)("div", {
                    className: c ? nE.I6 : nE.G1,
                    children: [
                        (0, d.jsx)(t1.F, {
                            forceLevel: 1,
                            children: (0, d.jsx)(ec.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        u
                            ? (0, d.jsx)("div", {
                                  className: nE.DF,
                                  children: (0, d.jsx)(aI.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, d.jsx)(nR, {}),
                        o || r
                            ? (0, d.jsx)("div", {
                                  className: nE.UD,
                                  children: (0, d.jsx)(nf.A, { className: x()(nE.x6, i), color: tf.XD.WHITE }),
                              })
                            : (0, d.jsx)(nC, {
                                  subscriptionTier: a,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: n,
                              }),
                        u && (0, d.jsx)(nR, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, d.jsx)(nb, {}),
            ],
        }),
    });
});
var nv = s(22118),
    nT = s(406012),
    nI = s(302891);
function nS(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, d.jsx)(ns, { lifted: t }) : null;
}
let nP = () => {
        (0, P.P)(S);
        let e = u.useRef(null),
            t = u.useRef(null),
            s = u.useRef(null),
            i = (0, tj.Ay)(),
            a = (0, s9.M)(i),
            [n, l] = u.useState(!1),
            [r, c] = u.useState(!1),
            [o, m] = u.useState(!1),
            [g, h] = u.useState(!1),
            N = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
            f = null != N ? (0, tr.EL)(N) : null,
            A = null != f ? tr.Ay.getSkuIdForPlan(f.planId) : null,
            j = null !== A && A !== eO.pe.TIER_2 ? eO.pe.TIER_2 : null,
            b = (0, tu.V)(),
            R = b?.subscription_trial?.sku_id,
            _ = (0, aR.ar)(),
            v = (0, tc.cg)(),
            T = (0, sO.Gh)("premium-marketing-settings-page"),
            I = v ?? !1,
            y = (0, p.bG)([a6.A], () => {
                let e = a6.A.getMarketingComponentByType(e5.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            M = a3.Fr || a3.v1,
            O = (0, p.bG)([a6.A], () => a6.A.getMarketingComponentByType(e5.C.BILLING_SETTINGS_BANNER)),
            { analyticsLocations: D } = (0, C.Ay)(E.A.PREMIUM_MARKETING);
        u.useEffect(() => {
            h(!0);
        }, []);
        let L = (0, d.jsx)("div", {
            className: nI.dY,
            children: (0, d.jsx)(K.L, {
                innerRef: e,
                onChange: (e) => c(e),
                threshold: 0.1,
                active: !0,
                children: (0, d.jsx)(a5.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, d.jsx)(tC.A, {
                        showIcon: !1,
                        subscriptionTier: eO.pe.TIER_0,
                        className: nT.Ph,
                        look: tf.pR.OUTLINED,
                        color: tf.XD.WHITE,
                        buttonShineClassName: nT.Qr,
                    }),
                    tier2CTAButton:
                        R === eO.pe.TIER_0
                            ? (0, d.jsx)(tC.A, {
                                  showIcon: !1,
                                  subscriptionTier: eO.pe.TIER_2,
                                  className: nT.Ph,
                                  look: tf.pR.OUTLINED,
                                  color: tf.XD.WHITE,
                                  buttonShineClassName: nT.Qr,
                              })
                            : (0, d.jsx)(tC.A, {
                                  color: tf.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: eO.pe.TIER_2,
                                  className: nT.Ph,
                                  hasActivePromotion: I,
                                  textOptions: { textClassName: nT.Ac },
                                  buttonShineClassName: nT.Qr,
                              }),
                }),
            }),
        });
        return (0, d.jsxs)("div", {
            className: nI.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, d.jsx)(ne, { premiumSubscription: N, className: x()(nI.R3, { [nI.aZ]: _ }) }),
                _ &&
                    (0, d.jsxs)("div", {
                        className: nI.n1,
                        children: [
                            (0, d.jsx)(nS, { inOfferExperience: _ }),
                            T &&
                                (0, d.jsx)(sk.l, {
                                    className: nI.ij,
                                    size: "md",
                                    location: E.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, d.jsxs)("div", {
                    className: x()({ [nI.V1]: !_ }),
                    children: [
                        null != y && (0, d.jsx)(a9.c, { className: nI.w$, config: y }),
                        (0, d.jsxs)("div", {
                            className: nI.iS,
                            children: [
                                T &&
                                    !_ &&
                                    (0, d.jsx)(sk.l, {
                                        className: nI.ij,
                                        size: "md",
                                        location: E.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, d.jsx)(K.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, d.jsx)(n_, {
                                        ref: t,
                                        subscriptionTier: j,
                                        className: x()({ [nI.p7]: _, [nI.Pw]: _, [nI.AG]: v, [nI.Cv]: null != N }),
                                        isDarkMode: a,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                !M &&
                    null != O &&
                    (0, d.jsx)("div", { className: nI.Ol, children: (0, d.jsx)(a7.I, { component: O }) }),
                L,
                (0, d.jsx)(nN, { className: nI.B_ }),
                (0, d.jsx)("div", { className: nI.aC, children: (0, d.jsx)(nv.A, { className: nI.JQ, hideCTAs: !0 }) }),
                (0, d.jsx)("div", { className: nI.hz }),
                (0, d.jsx)(nj, {
                    isVisible: !n && !r && g,
                    subscriptionTier: j,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, d.jsx)(K.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !o &&
                            (U.default.track(eM.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: D }),
                            m(!0));
                    },
                    children: (0, d.jsx)("div", { ref: s, className: nI._Z }),
                }),
                (0, d.jsx)("img", {
                    src: i1,
                    className: nI.Kw,
                    width: 112,
                    height: 85,
                    alt: ep.intl.string(ep.t.X4IxWL),
                }),
            ],
        });
    },
    ny = function (e) {
        let { entrypoint: t } = e,
            s = (0, tu.V)(),
            i = (0, td.O)({ includePremiumGroupDiscount: !0 }),
            a = (0, i6.NF)({ trialOffer: s }),
            n = (0, i6.Tp)(),
            l = (0, p.bG)([tO.A], () => tO.A.getReminderStateId());
        switch (
            (u.useEffect(() => {
                !0 === a && (0, i6.QG)(), !0 === n && (0, i6.ne)(l), (null != s || null != i) && (0, B.u1)(s, i);
            }, [s, i, a, n, l]),
            t)
        ) {
            case eO.Mf.UserSettings:
                return (0, d.jsx)(nP, {});
            case eO.Mf.ApplicationStoreHome:
                return (0, d.jsx)(a2, {});
            default:
                return null;
        }
    };
var nM = s(78103);
let nO = function (e) {
    let { entrypoint: t = eO.Mf.UserSettings } = e;
    (0, P.P)(S);
    let s = (0, R.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = z("nitro_member_hub_header"),
        a = (0, w.ds)(),
        { sourceAnalyticsLocations: n, analyticsLocations: l } = (0, C.Ay)(E.A.PREMIUM_MARKETING),
        r = (0, p.bG)([k.A], () => k.A.hasFetchedSubscriptions()),
        c = (0, p.bG)([L.A], () => L.A.hasFetchedPaymentSources),
        o = (0, p.bG)([D.default], () => D.default.getCurrentUser()),
        m = o?.id,
        T = (0, tu.V)(),
        I = (0, td.O)({ includePremiumGroupDiscount: !0 }),
        H = (0, _.Y)(eO.T7),
        [F, V] = u.useState(!0),
        W = u.useRef(0),
        K = (0, G.YE)(o, eO.PremiumTypes.TIER_2),
        X = (0, p.bG)([k.A], () => k.A.getPremiumTypeSubscription()),
        Y = null != X && X.status === eM.Dmq.CANCELED;
    (0, i3.b)(),
        u.useEffect(() => {
            N.h.wait(async () => {
                let e = Date.now();
                await Promise.all([b.hP(), b.$o(), (0, f.zS)(null, null, eM.tF5.DISCOVERY)]),
                    (W.current = Date.now() - e),
                    V(!1);
            });
        }, []),
        u.useEffect(() => {
            F ||
                U.default.track(eM.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: n,
                    load_duration_ms: W.current,
                });
        }, [n, F]),
        u.useEffect(() => {
            s && (null != T || null != I) && (0, B.u1)(T, I);
        }, [s, T, I]);
    let Q = (0, g.zy)(),
        Z = u.useRef(!1),
        q = r && c && H,
        [J, $] = u.useState(q);
    q && !J && $(!0),
        u.useEffect(() => {
            if (Z.current || !q) return;
            let e = new URLSearchParams(Q.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: eO.pe.TIER_0, nitro: eO.pe.TIER_2 }[e];
            null != t &&
                ((Z.current = !0),
                (0, M.bG)(eM.BVt.APPLICATION_STORE),
                (0, y.A)({ subscriptionTier: t, analyticsLocations: l }));
        }, [q, Q.search, l]);
    let ee = (0, p.bG)([O.A], () => O.A.enabled),
        et = t === eO.Mf.ApplicationStoreHome,
        es = ee
            ? (0, d.jsx)(A.A, {})
            : s
              ? (0, d.jsx)(v.uK, {})
              : et && K
                ? (0, d.jsx)(C.f5, { value: l, children: (0, d.jsx)(i2, { userId: m }) })
                : J
                  ? null
                  : (0, d.jsx)("div", { className: x()(nM.kL, nM.Lq), children: (0, d.jsx)(h.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !a && !Y ? es : (0, d.jsxs)(d.Fragment, { children: [et && (0, d.jsx)(j.A, {}), es] });
    }
    return (0, d.jsx)(C.f5, { value: l, children: (0, d.jsx)(ny, { entrypoint: t }) });
};
