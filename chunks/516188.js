s.d(t, { A: () => ak }), s(323874), s(14289), s(35956);
var i,
    n,
    a,
    l,
    r,
    c,
    o,
    d,
    u = s(627968),
    m = s(64700),
    x = s(503698),
    g = s.n(x),
    p = s(873263),
    h = s(17928),
    f = s(289873),
    N = s(228366),
    A = s(73825),
    j = s(974544),
    E = s(107834),
    C = s(793574),
    R = s(688810),
    b = s(277984),
    _ = s(86379),
    v = s(160946),
    T = s(682174),
    I = s(840251),
    S = s(688151);
let P = new I.E([], S.$G.OPEN_NITRO, { location: "open nitro tab/settings" });
var y = s(611924),
    M = s(532794),
    O = s(976860),
    D = s(351906),
    L = s(287809),
    k = s(295405),
    U = s(166403),
    G = s(174459),
    w = s(474090),
    H = s(881489),
    B = s(945960),
    F = s(945810),
    V =
        (((i = {}).CONTROL = "control"),
        (i.TREATMENT_A = "treatment_a"),
        (i.TREATMENT_B = "treatment_b"),
        (i.TREATMENT_C = "treatment_c"),
        i);
let z = (0, F.mj)({
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
function W(e) {
    let t = z.useConfig({ location: e });
    return { treatment: t.treatment, isInNitroHomeHeaderTreatment: "control" !== t.treatment };
}
s(321073);
var K = s(269115),
    Y = s(689175),
    X = s(131607),
    Z = s(961250),
    Q = s(366505),
    q = s(321191),
    J = s(903209),
    $ =
        (((n = {})[(n.CONTROL = 0)] = "CONTROL"),
        (n[(n.NITRO_HOME_TILE = 1)] = "NITRO_HOME_TILE"),
        (n[(n.STICKY_BAR = 2)] = "STICKY_BAR"),
        (n[(n.NITRO_TAB_POPOVER = 3)] = "NITRO_TAB_POPOVER"),
        n);
let ee = (0, F.mj)({
    name: "2026-06-monthly-to-yearly-upsells",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
function et(e) {
    let { location: t } = e;
    return ee.useConfig({ location: t });
}
var es = s(131168),
    ei = s(482589),
    en = s(410516),
    ea = s(580929),
    el = s(661531),
    er = s(717421),
    ec = s(331322),
    eo = s(534514),
    ed = s(834730),
    eu = s(821609),
    em = s(403581),
    ex = s(815021),
    eg = s(465323),
    ep = s(554146),
    eh = s(773669),
    ef = s(97352),
    eN = s(252424),
    eA = s(428262),
    ej = s(580630),
    eE = s(202541),
    eC = s(652215),
    eR = s(375708);
let eb = {
    [$.STICKY_BAR]: ep.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
    [$.NITRO_TAB_POPOVER]: ep.M.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER,
};
function e_(e) {
    let t = (0, eA.EL)(e);
    if (null == t || !eE.BL.has(t.planId)) return null;
    let s = eE.hd[t.planId]?.skuId;
    if (null == s) return null;
    let i = eE.zE[s] ?? null;
    return null == i ? null : (ef.A.get(i) ?? null);
}
function ev(e) {
    let t = (function (e) {
        if (null == e || e.status !== eC.Dmq.ACTIVE || e.isPurchasedExternally || (0, eA.Nc)(e)) return null;
        let t = e_(e);
        if (null == t) return null;
        let s = { currency: e.currency },
            i = (0, eA.z_)(t, !1, s);
        if (null == i) return null;
        let n = (0, eg.LQ)(i.amount, i.currency);
        return null == n || n <= 0
            ? null
            : { displayAmount: n, currency: i.currency, savingsPercent: (0, eA.k8)(t, !1, s) };
    })(e);
    if (null == t) return null;
    let s = (0, ej.$g)(t.displayAmount, t.currency, { maximumFractionDigits: 0 }),
        i = null != t.savingsPercent ? (0, eN.l9)(eh.default.locale, t.savingsPercent / 100) : void 0;
    return {
        title: eR.intl.formatToPlainString(eR.t.cZPXK6, { amount: s }),
        body: eR.intl.string(eR.t.KD6MH5),
        cta: eR.intl.string(eR.t.xmQfYw),
        badge: null != i ? eR.intl.formatToPlainString(eR.t.IAybsG, { discount: i }) : void 0,
    };
}
var eT = s(576243),
    eI = s(49999),
    eS = s(279261);
function eP(e) {
    let { premiumSubscription: t, copy: s, markAsDismissed: i } = e,
        { title: n, body: a, cta: l } = s,
        { analyticsLocations: r } = (0, R.Ay)(C.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
        c = (0, er.z)({
            from: { transform: "translateY(64px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
        });
    return (0, u.jsx)(ea.animated.div, {
        className: eS.iE,
        style: c,
        children: (0, u.jsxs)("div", {
            className: eS.iJ,
            children: [
                (0, u.jsx)(eT.A, { size: 64, iconSize: 40, color: el.A.colors.WHITE }),
                (0, u.jsxs)("div", {
                    className: eS.qX,
                    children: [
                        (0, u.jsxs)(ec.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: eS.iQ,
                            children: [
                                (0, u.jsx)(eo.D, { variant: "heading-md/semibold", color: "text-strong", children: n }),
                                (0, u.jsx)(ed.E, { variant: "text-sm/medium", color: "text-muted", children: a }),
                            ],
                        }),
                        (0, u.jsx)(eu.$, {
                            variant: "expressive",
                            icon: em.t,
                            size: "md",
                            text: l,
                            onClick: () => {
                                i(eI.i.TAKE_ACTION),
                                    (0, M.A)({
                                        subscription: t,
                                        initialPlanId: e_(t)?.id ?? null,
                                        analyticsLocations: r,
                                    });
                            },
                        }),
                    ],
                }),
                (0, u.jsx)(ex.J, {
                    size: "sm",
                    variant: "icon-only",
                    "aria-label": eR.intl.string(eR.t.WAI6xu),
                    onClick: () => i(eI.i.USER_DISMISS),
                }),
            ],
        }),
    });
}
var ey = s(31502),
    eM = s(562708),
    eO = s(192308),
    eD = s(885574),
    eL = s(43990),
    ek = s(993077),
    eU = s(139286),
    eG = s(872725),
    ew = s(920050),
    eH = s(792656),
    eB = s(985603),
    eF = s(777376),
    eV = s(185797),
    ez = s(237146),
    eW = s(74776);
function eK(e) {
    let { openRewardModal: t } = e,
        s = (0, eV.F)();
    if (s.kind === eV.L.SUBSCRIBE)
        return (0, u.jsxs)("div", {
            className: eW.R$,
            children: [
                (0, u.jsx)(eH.A, {
                    defaultTextOverride: s.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: eE.pe.TIER_2,
                }),
                (0, u.jsx)(eu.$, { variant: "secondary", size: "md", text: eR.intl.string(eR.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        s.claimStatus === eF.p.CLAIMED
            ? { text: eR.intl.string(ez.default.Plwzgf) }
            : { text: eR.intl.string(eR.t.hvVgAZ) };
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsxs)("div", {
                className: eW.R$,
                children: [
                    (0, u.jsx)(eu.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: s.text,
                        icon: s.icon,
                        iconPosition: s.iconPosition,
                        onClick: s.onClick,
                        disabled: s.disabled,
                        loading: s.loading,
                    }),
                    (0, u.jsx)(eu.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: s.requestInProgress,
                    }),
                ],
            }),
            s.claimStatus === eF.p.CLAIM_IN_PROGRESS &&
                (0, u.jsxs)("div", {
                    className: eW.ed,
                    children: [
                        (0, u.jsx)(eD.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, u.jsx)(ed.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: eR.intl.string(ez.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function eY(e) {
    let { glowing: t = !1 } = e;
    (0, eU.A)({
        type: eM.ImpressionTypes.VIEW,
        name: eM.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: ew.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, R.Ay)(C.A.CROISSANT_PREMIUM_HERO_CARD),
        n = m.useCallback(() => {
            (0, eO.openModalLazy)(async () => {
                let { default: e } = await Promise.all([s.e("16848"), s.e("77632")]).then(s.bind(s, 836291));
                return (t) => (0, u.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, u.jsx)(eL.N, {
        theme: eC.NJ8.DARKER,
        children: (e) =>
            (0, u.jsx)(R.f5, {
                value: i,
                children: (0, u.jsx)("div", {
                    className: g()(e, eW.kL),
                    children: (0, u.jsx)(eG.A, {
                        cardType: ek.s.CUSTOM,
                        cardClassName: eW.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, u.jsxs)("div", {
                            className: eW.XF,
                            children: [
                                (0, u.jsxs)("div", {
                                    className: eW.j,
                                    children: [
                                        (0, u.jsx)("div", { className: eW._g }),
                                        (0, u.jsx)("div", { className: eW.$h }),
                                        (0, u.jsx)("div", { className: eW.Rv }),
                                        (0, u.jsx)("div", { className: eW.Lw }),
                                        (0, u.jsx)("div", { className: eW.mR }),
                                    ],
                                }),
                                (0, u.jsxs)("div", {
                                    className: eW.Qs,
                                    children: [
                                        (0, u.jsx)("img", {
                                            className: eW.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, u.jsx)(eo.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: eW.DD,
                                            children: eR.intl.string(ez.default.RGT513),
                                        }),
                                        (0, u.jsx)(ed.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: eW.h_,
                                            children: eR.intl.string(ez.default["+pTnsf"]),
                                        }),
                                        (0, u.jsx)(eK, { openRewardModal: n }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var eX = s(744064);
function eZ(e) {
    let { className: t, containerClassName: s } = e,
        i = (0, eV.F)(),
        n = { isThirdPartyPerk: !0 },
        a =
            i.kind === eV.L.SUBSCRIBE
                ? { ...n, subscriptionRequired: !0 }
                : {
                      ...n,
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, u.jsx)(eX.S, {
        id: ew.XBOX_PREMIUM_PERK_CARD_ID,
        title: eR.intl.string(ez.default.UVL9tD),
        description: eR.intl.string(ez.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: s,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, u.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function eQ(e) {
    let { analyticsLocations: t } = (0, R.Ay)(C.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, u.jsx)(R.f5, { value: t, children: (0, u.jsx)(eZ, { ...e }) });
}
var eq = s(367791),
    eJ = s(672193);
function e$(e) {
    let { id: t, sectionClassName: s, heading: i, beforeGrid: n, grid: a, gridClassName: l } = e,
        r = eJ.Ui;
    return (0, u.jsxs)("div", {
        id: t,
        className: s,
        children: [
            i,
            n,
            null != a ? (0, u.jsx)("div", { className: g()(r, null != n && eq.Jx, l), children: a }) : null,
        ],
    });
}
var e0 = s(975571),
    e1 = s(149995),
    e2 = s(398523),
    e6 = s(881373),
    e3 = s(581921),
    e8 = s(3074),
    e7 = s(852218),
    e9 = s(382259),
    e5 = s(962995);
function e4() {
    let { analyticsLocations: e } = (0, R.Ay)(C.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, e6.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        s = e2.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, e1.Zk)({ location: "useHardwarePartnerPerkCards" }),
        n = (0, e1.S9)({ location: "useHardwarePartnerPerkCards" }),
        a = null === (0, e8.N)(),
        l = (0, ey.l)("useHardwarePartnerPerkCards"),
        { currentDate: r, nDaysInMonth: c } = (0, m.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, m.useMemo)(() => {
        let o = l ? void 0 : eR.intl.string(eR.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: ew.LOGITECH_3PP_CARD_ID,
                      title: eR.intl.string(e5.default.OlObRa),
                      description: eR.intl.format(e5.default.ZGOJ8R, {
                          discountPercent: e6.aW,
                          termsUrl: e0.A.getArticleURL(eC.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: r.getDate() / c,
                      ctaText: eR.intl.string(eR.t.w7s5Qr),
                      onCtaClick: () => (0, e3.P)({ partnerId: e7.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, u.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: e7.XY },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
            steelseriesCard: s
                ? {
                      id: ew.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: eR.intl.string(eR.t.m7PucM),
                      description: i
                          ? n
                              ? eR.intl.format(eR.t["1Zw6xL"], {})
                              : eR.intl.format(eR.t.KWdCO0, {})
                          : eR.intl.format(eR.t.zh1X7u, {}),
                      descriptionNote:
                          !n && i
                              ? eR.intl.format(eR.t.vblnHk, {
                                    partnerName: e7.CD[e7.Cs].label,
                                    helpdeskArticle: e0.A.getArticleURL(eC.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, u.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: r.getDate() / c,
                      ctaText: eR.intl.string(eR.t.w7s5Qr),
                      onCtaClick: () => (0, e9.u)({ analyticsLocations: e, partnerIds: [e7.KS, e7.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: e7.KS },
                      ctaDisabled: a,
                      ctaLoading: a,
                  }
                : null,
        };
    }, [l, e, r, t, c, s, i, n, a]);
}
var te = s(102338);
let tt = "xgpp";
function ts(e) {
    let { glowingSectionId: t, glowingPerkId: s } = e,
        i = (0, ey.l)("premium_subscriber_home_rewards"),
        { logitechCard: n, steelseriesCard: a } = e4();
    if (!i) return null;
    let l = null != n || null != a;
    return (0, u.jsx)(e$, {
        id: tt,
        sectionClassName: g()(te.uW, te.Uv, te.qr),
        heading: (0, u.jsx)(eo.D, {
            variant: "display-sm",
            className: g()(eJ.R_, eq.U6),
            children: eR.intl.string(eR.t.NG1e6l),
        }),
        beforeGrid: (0, u.jsx)("div", { className: eq.JE, children: (0, u.jsx)(eY, { glowing: t === tt }) }),
        grid: l
            ? (0, u.jsxs)(u.Fragment, {
                  children: [
                      (0, u.jsx)(eQ, { containerClassName: eJ.Nr }),
                      null != n && (0, u.jsx)(eX.S, { ...n, containerClassName: eJ.Nr, glowing: s === n.id }),
                      null != a && (0, u.jsx)(eX.S, { ...a, containerClassName: eJ.Nr, glowing: s === a.id }),
                  ],
              })
            : null,
    });
}
var ti = s(315629),
    tn = s(65470),
    ta = s(797221);
let tl = function (e) {
    let { className: t, location: s, analyticsLocation: i } = e,
        { analyticsLocations: n } = (0, R.Ay)(s);
    return (0, u.jsx)(R.f5, {
        value: n,
        children: (0, u.jsxs)(ti.h, {
            className: g()(ta.kL, ta.pm, t),
            color: "purple",
            children: [
                (0, u.jsxs)("div", {
                    className: ta.FS,
                    children: [
                        (0, u.jsx)(eo.D, {
                            variant: "heading-xxl/bold",
                            className: ta.R_,
                            children: eR.intl.string(eR.t.Ve9Ge6),
                        }),
                        (0, u.jsx)(ed.E, { variant: "text-md/medium", children: eR.intl.string(eR.t.yQ06u1) }),
                        (0, u.jsx)("div", {
                            className: ta.SB,
                            children: (0, u.jsx)(tn.A, {
                                buttonTextOverride: eR.intl.string(eR.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, u.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: ta._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var tr = s(877624);
let tc =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function to(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: tc,
        srcSet: `${tc} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var td = s(502572),
    tu = s(775602),
    tm = s(366999),
    tx = s(531260),
    tg = s(780964),
    tp = s(766075),
    th = s(786300),
    tf = s(960851),
    tN = s(89366),
    tA = s(422936),
    tj = s(234419),
    tE = s(549996),
    tC = s(172218);
let tR = function () {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, s] = (0, m.useState)(1),
        i = (0, m.useMemo)(() => ({ threshold: Array.from({ length: 101 }, (e, t) => t / 100) }), []);
    return {
        visibilityPercentageRef: (0, tC.B)(
            (e) => {
                s(e.intersectionRatio);
            },
            i,
            e,
        ),
        visibilityPercentage: t,
    };
};
var tb = s(382996);
let t_ = function (e) {
    let { text: t } = e;
    return (0, u.jsx)("div", {
        className: tb.i,
        children: (0, u.jsx)(ed.E, { variant: "text-sm/bold", color: "text-overlay-light", children: t }),
    });
};
var tv = s(371764),
    tT = s(862482),
    tI = s(366010),
    tS = s(736653);
function tP(e) {
    let { analyticsLocations: t } = (0, R.Ay)(...e.newLocations);
    return (0, u.jsx)(R.di.Provider, { value: t, children: e.children });
}
var ty = s(396375),
    tM = s(74981),
    tO =
        (((a = {}).SUBSCRIBER_HOME = "SUBSCRIBER_HOME"),
        (a.NITRO_SETTINGS = "SETTINGS"),
        (a.APPLICATION_NITRO_HOME = "APPLICATION_NITRO_HOME"),
        a);
let tD = function (e) {
    let { variant: t } = e,
        s = (0, tf.cg)(),
        i = (0, tS.Ay)(),
        n = (0, tI.M)(i) ? tT.XD.BRAND_INVERTED : tT.XD.BRAND;
    return s
        ? "APPLICATION_NITRO_HOME" === t
            ? (0, u.jsx)(function () {
                  return (0, u.jsx)(tP, {
                      newLocations: [C.A.PREMIUM_MARKETING_PAGE_BANNER],
                      children: (0, u.jsxs)("div", {
                          className: tM._G,
                          children: [
                              (0, u.jsx)("div", {
                                  className: tM.V2,
                                  children: (0, u.jsx)("div", { className: tM.N4 }),
                              }),
                              (0, u.jsx)("div", {
                                  className: g()(tM.Fg, tM.cj),
                                  children: (0, u.jsx)(ed.E, {
                                      variant: "eyebrow",
                                      color: "text-overlay-light",
                                      children: eR.intl.string(eR.t.OS9KPu),
                                  }),
                              }),
                              (0, u.jsxs)("div", {
                                  className: tM.IH,
                                  children: [
                                      (0, u.jsx)(eo.D, {
                                          className: tM.U_,
                                          variant: "heading-xxl/extrabold",
                                          color: "text-strong",
                                          children: eR.intl.string(eR.t["+5UxML"]),
                                      }),
                                      (0, u.jsx)(ed.E, {
                                          className: tM._M,
                                          variant: "text-md/medium",
                                          color: "text-subtle",
                                          children: eR.intl.format(eR.t["lVOH/p"], {
                                              helpCenterLink: e0.A.getArticleURL(eC.MVz.SUMMER_BOGO_2025),
                                          }),
                                      }),
                                      (0, u.jsx)(ty.A, {
                                          textOptions: {
                                              textOverride: eR.intl.string(eR.t.J61px0),
                                              textClassName: tM.cZ,
                                          },
                                          subscriptionTier: eE.pe.TIER_2,
                                          showIcon: !1,
                                          className: tM.xF,
                                          color: n,
                                      }),
                                  ],
                              }),
                              (0, u.jsx)("div", {
                                  className: tM.ZS,
                                  children: (0, u.jsx)("img", {
                                      alt: "",
                                      src: "https://cdn.discordapp.com/assets/content/5ed4a5e53464f95f9a0a196a99b667b06b979eee4a7b7ede0442fa433c9833d0.png",
                                      className: tM.F$,
                                  }),
                              }),
                          ],
                      }),
                  });
              }, {})
            : "SETTINGS" === t
              ? (0, u.jsx)(function () {
                    return (0, u.jsx)(tP, {
                        newLocations: [C.A.PREMIUM_SETTINGS],
                        children: (0, u.jsxs)("div", {
                            className: tM.O3,
                            children: [
                                (0, u.jsx)("div", {
                                    className: tM.V9,
                                    children: (0, u.jsx)("img", {
                                        alt: "",
                                        src: "https://cdn.discordapp.com/assets/content/c363ff378ffd04d0561977f632dc2e1e5ca4906c8850be095be53ea369cdf309.png",
                                        className: tM.$V,
                                    }),
                                }),
                                (0, u.jsxs)("div", {
                                    className: tM.l$,
                                    children: [
                                        (0, u.jsx)(eo.D, {
                                            className: tM.U_,
                                            variant: "heading-lg/extrabold",
                                            color: "text-strong",
                                            children: eR.intl.string(eR.t["+5UxML"]),
                                        }),
                                        (0, u.jsx)(ed.E, {
                                            className: tM._M,
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: eR.intl.format(eR.t["lVOH/p"], {
                                                helpCenterLink: e0.A.getArticleURL(eC.MVz.SUMMER_BOGO_2025),
                                            }),
                                        }),
                                        (0, u.jsx)(ty.A, {
                                            textOptions: {
                                                textOverride: eR.intl.string(eR.t.J61px0),
                                                textClassName: tM.cZ,
                                            },
                                            subscriptionTier: eE.pe.TIER_2,
                                            showIcon: !1,
                                            className: tM.xF,
                                            color: n,
                                        }),
                                    ],
                                }),
                                (0, u.jsx)("div", {
                                    className: tM.m0,
                                    children: (0, u.jsx)("img", {
                                        alt: "",
                                        src: "https://cdn.discordapp.com/assets/content/4135eb5d081957191871c8ca942b65dab5d2c7cc0aea71c6099dc470d4b648c8.png",
                                        className: tM.$V,
                                    }),
                                }),
                            ],
                        }),
                    });
                }, {})
              : (0, u.jsx)(function () {
                    return (0, u.jsxs)("div", {
                        className: tM.jo,
                        children: [
                            (0, u.jsx)("div", {
                                className: tM.yk,
                                children: (0, u.jsx)("img", {
                                    alt: "",
                                    src: "https://cdn.discordapp.com/assets/content/e575cd15e039114aa5d6e92f4466b42043e8c035b5c26785806ce1e497892c7b.png",
                                    className: tM.$V,
                                }),
                            }),
                            (0, u.jsxs)("div", {
                                className: tM.Ep,
                                children: [
                                    (0, u.jsx)(eo.D, {
                                        className: tM.U_,
                                        variant: "heading-md/extrabold",
                                        color: "text-strong",
                                        children: eR.intl.string(eR.t["+5UxML"]),
                                    }),
                                    (0, u.jsx)(ed.E, {
                                        className: tM._M,
                                        variant: "text-sm/medium",
                                        color: "text-subtle",
                                        children: eR.intl.format(eR.t["lVOH/p"], {
                                            helpCenterLink: e0.A.getArticleURL(eC.MVz.SUMMER_BOGO_2025),
                                        }),
                                    }),
                                ],
                            }),
                            (0, u.jsx)(ty.A, {
                                subscriptionTier: eE.pe.TIER_2,
                                showIcon: !0,
                                shinyButtonClassName: tM.Xp,
                                hasActivePromotion: !0,
                            }),
                        ],
                    });
                }, {})
        : null;
};
var tL = s(103411),
    tk = s(778712),
    tU = s(97808),
    tG = s(590251),
    tw = s(144165),
    tH = s(854627),
    tB = s(427262),
    tF = s(851746),
    tV = s(326084),
    tz = s(664654);
function tW() {
    var e, t, s;
    let { referralSentUsers: i } = (0, tz.J)(),
        n = (0, h.bG)([tF.A], () => tF.A.getRecipientStatus()),
        a = (0, h.bG)([tF.A], () => tF.A.getHasEligibleFriends()),
        l = n.size === tz.Z,
        r =
            ((e = !1 !== a),
            (t = i.length),
            (s = n.size === tz.Z && [...n.values()].every((e) => e === tV.aK.REDEEMED)),
            e
                ? t === tz.Z
                    ? s
                        ? eR.intl.format(eR.t["1aEjsH"], {
                              helpdeskArticle: e0.A.getArticleURL(eC.MVz.REFERRAL_PROGRAM),
                          })
                        : eR.intl.format(eR.t["+u3AOO"], {
                              helpdeskArticle: e0.A.getArticleURL(eC.MVz.REFERRAL_PROGRAM),
                          })
                    : eR.intl.format(eR.t["omMr+V"], { helpdeskArticle: e0.A.getArticleURL(eC.MVz.REFERRAL_PROGRAM) })
                : eR.intl.format(eR.t["zWhX/Q"], { helpdeskArticle: e0.A.getArticleURL(eC.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: n.size, hasEligibleFriends: a, allSent: l, bodyText: r };
}
var tK = s(212737),
    tY = s(849812);
function tX(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    G.default.track(eC.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, eO.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(s.bind(s, 212737));
            return (s) => (0, u.jsx)(e, { ...s, startingScreen: t });
        });
}
function tZ(e) {
    let { user: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, tH.A)({ userId: t.id, size: tk._3.SIZE_24 });
    return (0, u.jsx)(
        tU.eu,
        { className: tY.bj, src: s, "aria-label": (0, tB.mG)(t), size: tk._3.SIZE_24, ...i },
        t.id,
    );
}
function tQ(e) {
    let { slotIndex: t } = e;
    return (0, u.jsx)("div", { className: tY.p, children: t });
}
function tq(e) {
    let { referralSentUsers: t, className: s } = e;
    return (0, u.jsx)("div", {
        className: g()(tY.L$, s),
        children: (function () {
            let e = [];
            for (let s = 0; s < tz.Z; s++)
                if (t?.[s] !== void 0) {
                    let i = (0, u.jsx)(tZ, { user: t[s] }, t[s].id);
                    e.push(i);
                } else {
                    let t = (0, u.jsx)(tQ, { slotIndex: s + 1 }, s);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function tJ(e) {
    let { nReferralsSent: t, imageSize: s = 93, backgroundClassName: i, ringClassName: n } = e;
    return (0, u.jsx)(tG.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? tY.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: n ?? tY.e0,
        overlayClassName: t === tz.Z ? tY.ys : void 0,
        children: (0, u.jsx)(tw._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: s,
            width: s,
            zoomable: !1,
        }),
    });
}
function t$(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = tW();
    return (0, u.jsxs)("div", {
        className: g()(tY.kL, t),
        children: [
            (0, u.jsx)("div", { className: tY.G3, children: (0, u.jsx)(tJ, { nReferralsSent: i }) }),
            (0, u.jsxs)("div", {
                className: tY.IH,
                children: [
                    (0, u.jsx)(tq, { referralSentUsers: s, className: tY.GV }),
                    (0, u.jsxs)("div", {
                        className: tY.n4,
                        children: [
                            (0, u.jsx)(eo.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eR.intl.string(eR.t.USo4s7),
                            }),
                            (0, u.jsx)(ed.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, u.jsx)(eu.$, {
                        variant: "primary",
                        disabled: !1 === n || !0 === a,
                        text: eR.intl.string(eR.t.Lm2nFc),
                        onClick: () =>
                            tX({ startingScreen: tK.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var t0 = s(989349),
    t1 = s.n(t0),
    t2 = s(496431),
    t6 = s(116689);
let t3 = (e) => {
    let { expiresAt: t, className: s } = e,
        i = (0, t2.A)(t1()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: n, hours: a, minutes: l, seconds: r } = i,
        c = [
            { unitValue: n, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: r, unitType: "seconds" },
        ];
    return (0, u.jsxs)("div", {
        className: g()(t6.Xl, s),
        children: [
            (0, u.jsx)(ed.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: eR.intl.string(eR.t["/ARFVE"]),
            }),
            (0, u.jsx)("div", {
                className: t6.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let s,
                            [i, n] = 1 === (s = e.unitValue.toString()).length ? ["0", s[0]] : [s[0], s[1]];
                        return (0, u.jsxs)(u.Fragment, {
                            children: [
                                (0, u.jsxs)(
                                    "div",
                                    {
                                        className: t6.bh,
                                        children: [
                                            (0, u.jsxs)("div", {
                                                className: t6.kB,
                                                children: [
                                                    (0, u.jsx)("div", {
                                                        className: t6.B2,
                                                        children: (0, u.jsx)(ed.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, u.jsx)("div", {
                                                        className: t6.B2,
                                                        children: (0, u.jsx)(ed.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, u.jsx)(ed.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return eR.intl.string(eR.t.ixASa2);
                                                        case "hours":
                                                            return eR.intl.string(eR.t["8sNvNn"]);
                                                        case "minutes":
                                                            return eR.intl.string(eR.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return eR.intl.string(eR.t.JhaiLW);
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
                                    (0, u.jsx)(ed.E, {
                                        className: t6.cV,
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
var t8 = s(473702),
    t7 = s(609425),
    t9 = s(660184),
    t5 = s(12052);
function t4() {
    let e = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        t = (0, t7.A)(),
        { avatarSrc: s, avatarDecorationSrc: i, eventHandlers: n } = (0, tH.A)({ userId: e?.id, size: tk._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, tB.mG)(e);
    return (0, u.jsxs)("div", {
        className: t5.kL,
        children: [
            (0, u.jsx)("div", {
                className: t5.my,
                children: (0, u.jsx)(tU.eu, {
                    src: s,
                    avatarDecoration: i,
                    size: tk._3.SIZE_56,
                    "aria-label": a,
                    ...n,
                }),
            }),
            (0, u.jsx)("div", { className: t5.QC, children: (0, u.jsx)(t9.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var se = s(707554),
    st = s(218199);
let ss = function (e) {
    let { className: t, color: s = "text-strong", responsive: i = !0, children: n } = e;
    return (0, u.jsx)(se.F, {
        forceLevel: 1,
        children: (0, u.jsx)(eo.D, {
            className: g()(st.w, t, i && st.n),
            variant: "display-md",
            color: s,
            children: n,
        }),
    });
};
var si = s(690093);
function sn(e) {
    let { className: t } = e,
        { referralSentUsers: s, nReferralsSent: i, hasEligibleFriends: n, allSent: a, bodyText: l } = tW();
    return (0, u.jsxs)("div", {
        className: g()(si.kL, t),
        children: [
            (0, u.jsx)("div", {
                className: si.G3,
                children: (0, u.jsx)(tJ, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: si.HP,
                    ringClassName: si.pZ,
                }),
            }),
            (0, u.jsxs)("div", {
                className: si.IH,
                children: [
                    (0, u.jsxs)("div", {
                        className: si.n4,
                        children: [
                            (0, u.jsx)(eo.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: eR.intl.string(eR.t.USo4s7),
                            }),
                            (0, u.jsx)(ed.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, u.jsx)(tq, { referralSentUsers: s, className: si.t7 }),
                ],
            }),
            (0, u.jsx)(eu.$, {
                variant: "primary",
                disabled: !1 === n || !0 === a,
                text: eR.intl.string(eR.t.Lm2nFc),
                onClick: () =>
                    tX({ startingScreen: tK.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var sa = s(702841),
    sl = s(676279),
    sr = s(396583),
    sc = (((l = {}).SINE = "sine"), (l.COSINE = "cosine"), l),
    so = (((r = {}).UP = "up"), (r.DOWN = "down"), r);
let sd = (e) => {
    let {
            blurAnimationData: t,
            scaleAnimationData: s,
            yAxisAnimationData: i,
            parallaxAnimationData: n,
            animateXAxisWiggle: a = !1,
            isMotionReduced: l = !1,
            animationSpeedScale: r = 1,
            children: c,
        } = e,
        o = (0, er.z)(
            null != i ? { from: { y: 0 }, to: { y: 1 }, config: { duration: i.duration * r }, loop: !0 } : { y: 0 },
        ),
        d = i?.path === "sine" ? Math.sin : Math.cos,
        [x, g] = (0, m.useState)(1),
        p = (0, er.z)(
            null != s
                ? {
                      from: { scale: x > 0 ? s.startScale : s.endScale },
                      to: { scale: x > 0 ? s.endScale : s.startScale },
                      config: { duration: s.duration * r },
                      onRest: () => g((e) => -1 * e),
                  }
                : { scale: 1 },
        ),
        [h, f] = (0, m.useState)(1),
        N = (0, er.z)(
            null != t
                ? {
                      from: { blur: h > 0 ? t.startBlurRadius : t.endBlurRadius },
                      to: { blur: h > 0 ? t.endBlurRadius : t.startBlurRadius },
                      config: { duration: t.duration * r },
                      onRest: () => f((e) => -1 * e),
                  }
                : { blur: 0 },
        ),
        A = (0, m.useMemo)(() => Math.round((750 + (200 * Math.random() - 100)) * r), [r]),
        [j, E] = (0, m.useState)(0),
        [C, R] = (0, m.useState)(1),
        b = (0, er.z)({ xOffset: j, config: { tension: 10, friction: 10, duration: A } });
    return ((0, sr.A)(() => {
        E(C * (0.5 * Math.random() * 5 + 2.5)), R((e) => -1 * e);
    }, A),
    l)
        ? c
        : (0, u.jsx)(ea.animated.div, {
              style: {
                  transform: o.y?.to((e) => {
                      if (null == i) return "translateY(0px)";
                      let t = d(e * Math.PI * 2) * i.range,
                          s = 0;
                      if (null != n) {
                          let e = n.range * (1 - n.containerVisibilityPercentage);
                          s = "up" === n.pathDirection ? -e : e;
                      }
                      return `translateY(${t + s}px)`;
                  }),
                  translateX: a ? b.xOffset.to((e) => `${e}px`) : 0,
                  scale: p.scale,
                  filter: N.blur?.to((e) => `blur(${e}px)`),
                  opacity: null != n && n.changeOpacity ? n.containerVisibilityPercentage : 1,
              },
              children: c,
          });
};
var su = s(692979);
let sm = function (e) {
    let {
        isMotionReduced: t,
        containerVisibilityPercentage: s,
        boltContainerClassName: i,
        carContainerClassName: n,
        hammerContainerClassName: a,
        keyContainerClassName: l,
        starContainerClassName: r,
        boltAssetClassName: c,
        carAssetClassName: o,
        hammerAssetClassName: d,
        keyAssetClassName: m,
        starAssetClassName: x,
        animationSpeedScale: p = 1,
        blurScale: h = 1,
    } = e;
    return (0, u.jsxs)(u.Fragment, {
        children: [
            null != i &&
                (0, u.jsx)("div", {
                    className: g()(su.nJ, i),
                    children: (0, u.jsx)(sd, {
                        blurAnimationData: { startBlurRadius: 10 * h, endBlurRadius: 0, duration: 3e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: sc.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: so.UP,
                                      range: 125,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, u.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/ae5638c61a572593c6b03b92e80d3846e0cfe7a9e893f3faf05aecd670a4017d.png",
                            className: c,
                            alt: "",
                        }),
                    }),
                }),
            null != n &&
                (0, u.jsx)("div", {
                    className: g()(su.IN, n),
                    children: (0, u.jsx)(sd, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: sc.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: so.DOWN,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, u.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/6cb761e3e97838c7927f738882b67bd825d5eeed89633e0af126bda5f9d4e71d.png",
                            className: o,
                            alt: "",
                        }),
                    }),
                }),
            null != a &&
                (0, u.jsx)("div", {
                    className: g()(su.Gj, a),
                    children: (0, u.jsx)(sd, {
                        yAxisAnimationData: { range: 15, duration: 6e3, path: sc.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: so.DOWN,
                                      range: 120,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, u.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b39a5f2755e6da320fce10c8a4a10bdebef9926b671256b1681976198c5656d4.png",
                            className: d,
                            alt: "",
                        }),
                    }),
                }),
            null != l &&
                (0, u.jsx)("div", {
                    className: g()(su.FV, l),
                    children: (0, u.jsx)(sd, {
                        blurAnimationData: { startBlurRadius: 5 * h, endBlurRadius: 0, duration: 4e3 },
                        scaleAnimationData: { startScale: 0.85, endScale: 1, duration: 4e3 },
                        yAxisAnimationData: { range: 15, duration: 6e3, path: sc.SINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: so.UP,
                                      range: 200,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, u.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/7c23a220a6f31150648930e2ebb435aa7cc89ad57895275bed6f1900869f4de0.png",
                            className: m,
                            alt: "",
                        }),
                    }),
                }),
            null != r &&
                (0, u.jsx)("div", {
                    className: g()(su.E1, r),
                    children: (0, u.jsx)(sd, {
                        blurAnimationData: { startBlurRadius: 0, endBlurRadius: 2 * h, duration: 3e3 },
                        scaleAnimationData: { startScale: 1, endScale: 0.85, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: sc.COSINE },
                        parallaxAnimationData:
                            null != s
                                ? {
                                      pathDirection: so.UP,
                                      range: 50,
                                      containerVisibilityPercentage: s,
                                      changeOpacity: !0,
                                  }
                                : void 0,
                        animateXAxisWiggle: !0,
                        isMotionReduced: t,
                        animationSpeedScale: p,
                        children: (0, u.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/0b1a59149e615fc048010a3c7f109f8695c8b2004712e99417fcb0dec43fcb44.png",
                            className: x,
                            alt: "",
                        }),
                    }),
                }),
        ],
    });
};
var sx = s(607470);
let sg =
        "https://cdn.discordapp.com/assets/content/a3e8e17987398023e2afd61ec5078a9bce18b2832f2f1775a1ba3c033ce13270.webm",
    sp = function (e) {
        let {
            supportHEVCAlpha: t,
            isMotionReduced: s,
            containerVisibilityPercentage: i,
            containerClassName: n,
            assetClassName: a,
            animationSpeedScale: l = 1,
        } = e;
        return s
            ? (0, u.jsx)("div", {
                  className: n,
                  children: (0, u.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/46e72137fc3631c8024b00c33dbab5cf45740d4ab35f77bd96517830e727d0c5.png",
                      alt: "",
                      className: a,
                  }),
              })
            : (0, u.jsx)("div", {
                  className: n,
                  children: (0, u.jsx)(sd, {
                      scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                      yAxisAnimationData: { range: 20, duration: 4e3, path: sc.SINE },
                      parallaxAnimationData: {
                          pathDirection: so.UP,
                          range: 200,
                          containerVisibilityPercentage: i,
                          changeOpacity: !1,
                      },
                      animateXAxisWiggle: !0,
                      animationSpeedScale: l,
                      children: t
                          ? (0, u.jsx)("img", {
                                src: "https://cdn.discordapp.com/assets/content/082012af2fe8bfa66ce6630e1549a146738936af43a8e60c780f9976fa333d93.png",
                                alt: "",
                                className: a,
                            })
                          : (0, u.jsx)(
                                sx.A,
                                {
                                    muted: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    loop: !0,
                                    className: a,
                                    children: (0, u.jsx)("source", { src: sg }),
                                },
                                sg,
                            ),
                  }),
              });
    },
    sh = function (e) {
        let {
                containerVisibilityPercentage: t,
                flyingWumpusContainerClassName: s,
                flyingWumpusAssetClassName: i,
                boltContainerClassName: n,
                carContainerClassName: a,
                hammerContainerClassName: l,
                keyContainerClassName: r,
                starContainerClassName: c,
                boltAssetClassName: o,
                carAssetClassName: d,
                hammerAssetClassName: m,
                keyAssetClassName: x,
                starAssetClassName: g,
                animationSpeedScale: p = 1,
            } = e,
            h = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
            f = (0, sl.TM)();
        return (0, u.jsxs)(u.Fragment, {
            children: [
                (0, u.jsx)(sp, {
                    supportHEVCAlpha: f,
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    containerClassName: s,
                    assetClassName: i,
                    animationSpeedScale: p,
                }),
                (0, u.jsx)(sm, {
                    isMotionReduced: h,
                    containerVisibilityPercentage: t,
                    boltContainerClassName: n,
                    carContainerClassName: a,
                    hammerContainerClassName: l,
                    keyContainerClassName: r,
                    starContainerClassName: c,
                    boltAssetClassName: o,
                    carAssetClassName: d,
                    hammerAssetClassName: m,
                    keyAssetClassName: x,
                    starAssetClassName: g,
                    animationSpeedScale: p,
                }),
            ],
        });
    };
var sf = s(43588);
let sN = function (e) {
    let { containerVisibilityPercentage: t, compact: s } = e;
    return (0, u.jsx)(sh, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: g()(sf.wG, s && sf.Vx),
        flyingWumpusAssetClassName: g()(sf.lu, s && sf.ov),
        boltContainerClassName: g()(sf.nJ, s && sf.Wc),
        hammerContainerClassName: g()(sf.Gj, s && sf.XA),
        keyContainerClassName: g()(sf.FV, s && sf.oZ),
        starContainerClassName: g()(sf.E1, s && sf.LN),
        boltAssetClassName: g()(sf.j7, s && sf.QN),
        hammerAssetClassName: g()(sf.Wv, s && sf.B9),
        keyAssetClassName: g()(sf.rs, s && sf.I1),
        starAssetClassName: g()(sf.OY, s && sf.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var sA = (((c = {}).MORNING = "morning"), (c.AFTERNOON = "afternoon"), (c.EVENING = "evening"), c);
function sj() {
    let e,
        t = { [sA.MORNING]: eR.t["Wvc/I+"], [sA.AFTERNOON]: eR.t["d+0STx"], [sA.EVENING]: eR.t.CqsxKI };
    return eR.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? sA.MORNING : e >= 12 && e < 17 ? sA.AFTERNOON : sA.EVENING],
    );
}
var sE = s(97584),
    sC = s(202241);
let sR = function (e) {
        let { containerVisibilityPercentage: t, compact: s } = e;
        return (0, u.jsx)(sh, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: g()(sC.wG, s && sC.Vx),
            flyingWumpusAssetClassName: g()(sC.lu, s && sC.ov),
            boltContainerClassName: g()(sC.nJ, s && sC.Wc),
            hammerContainerClassName: g()(sC.Gj, s && sC.XA),
            keyContainerClassName: g()(sC.FV, s && sC.oZ),
            starContainerClassName: g()(sC.E1, s && sC.LN),
            boltAssetClassName: g()(sC.j7, s && sC.QN),
            hammerAssetClassName: g()(sC.Wv, s && sC.B9),
            keyAssetClassName: g()(sC.rs, s && sC.I1),
            starAssetClassName: g()(sC.OY, s && sC.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    sb = {
        [V.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: n,
                    shouldShowReferralProgressBar: a,
                } = e,
                { visibilityPercentageRef: l, visibilityPercentage: r } = tR(
                    !(0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
                ),
                c = sj();
            return (0, u.jsx)("div", {
                className: g()(sE.kL, sE.Eg, t),
                ref: n,
                children: (0, u.jsxs)("div", {
                    className: g()(sE.W2, sE.HQ),
                    ref: l,
                    children: [
                        (0, u.jsxs)(ec.B, {
                            align: "start",
                            gap: 32,
                            className: sE.ZU,
                            children: [
                                i && s,
                                (0, u.jsxs)(ec.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, u.jsx)(ss, {
                                            className: sE.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: c,
                                        }),
                                        (0, u.jsx)(t4, {}),
                                    ],
                                }),
                                a && (0, u.jsx)(sn, {}),
                            ],
                        }),
                        (0, u.jsx)("div", {
                            className: sE.y3,
                            children: (0, u.jsx)(sN, { containerVisibilityPercentage: r, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [V.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: n,
                    shouldShowReferralProgressBar: a,
                } = e,
                { visibilityPercentageRef: l, visibilityPercentage: r } = tR(
                    !(0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
                ),
                c = eR.intl.string(eR.t.ifwQZb);
            return (0, u.jsx)("div", {
                className: g()(sE.kL, sE.Eg, t),
                ref: n,
                children: (0, u.jsxs)("div", {
                    className: g()(sE.W2, sE.m8),
                    ref: l,
                    children: [
                        (0, u.jsxs)(ec.B, {
                            align: "start",
                            gap: 32,
                            className: sE.Y0,
                            children: [
                                i && s,
                                (0, u.jsx)("div", {
                                    className: g()(sE.N1, sE.v8),
                                    children: (0, u.jsx)(ss, {
                                        className: sE.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: c,
                                    }),
                                }),
                                a && (0, u.jsx)(sn, {}),
                            ],
                        }),
                        (0, u.jsx)("div", {
                            className: sE.BF,
                            children: (0, u.jsx)(sR, { containerVisibilityPercentage: r, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [V.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: s,
                    showPill: i,
                    buttonVisibilityRef: n,
                    shouldShowReferralProgressBar: a,
                } = e,
                l = sj();
            return (0, u.jsx)("div", {
                className: g()(sE.kL, sE.Eg, t),
                ref: n,
                children: (0, u.jsxs)("div", {
                    className: g()(sE.W2, sE.J_),
                    children: [
                        (0, u.jsxs)(ec.B, {
                            align: "start",
                            gap: 32,
                            className: sE.$S,
                            children: [
                                i && s,
                                (0, u.jsxs)(ec.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, u.jsx)(ss, {
                                            className: sE.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: l,
                                        }),
                                        (0, u.jsx)(t4, {}),
                                    ],
                                }),
                            ],
                        }),
                        a && (0, u.jsx)("div", { className: sE.Pq, children: (0, u.jsx)(sn, {}) }),
                    ],
                }),
            });
        },
    };
function s_(e) {
    let { treatment: t, ...s } = e,
        i = sb[t];
    return null != i ? (0, u.jsx)(i, { ...s }) : null;
}
var sv = s(447764);
let sT =
        "https://cdn.discordapp.com/assets/content/30b4235a9a15735cae3f814c3389942356e6138fe5651945028afff3b421202b.png",
    sI = function (e) {
        let { containerVisibilityPercentage: t } = e,
            s = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion);
        return (0, u.jsxs)(u.Fragment, {
            children: [
                (0, u.jsx)("div", {
                    className: sv.BI,
                    children: (0, u.jsx)(sd, {
                        scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                        yAxisAnimationData: { range: 20, duration: 4e3, path: sc.SINE },
                        animateXAxisWiggle: !0,
                        isMotionReduced: s,
                        parallaxAnimationData: {
                            pathDirection: so.UP,
                            range: 125,
                            containerVisibilityPercentage: t,
                            changeOpacity: !0,
                        },
                        animationSpeedScale: 2,
                        children: (0, u.jsx)("img", { src: sT, alt: "", className: sv.Q }),
                    }),
                }),
                (0, u.jsx)(sm, {
                    isMotionReduced: s,
                    containerVisibilityPercentage: t,
                    hammerContainerClassName: sv.Gj,
                    keyContainerClassName: sv.FV,
                    starContainerClassName: sv.E1,
                    hammerAssetClassName: sv.Wv,
                    keyAssetClassName: sv.rs,
                    starAssetClassName: sv.OY,
                    animationSpeedScale: 2,
                }),
            ],
        });
    };
var sS = s(725807),
    sP = s(774774),
    sy = s(975916);
let sM = function () {
    let e = { section: eC.JJy.REVERSE_TRIAL_BANNER };
    return (0, u.jsxs)("div", {
        className: sy.vK,
        children: [
            (0, u.jsx)(sP.e4, { text: eR.intl.string(eR.t.qYKftX), className: sy.Io }),
            (0, u.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: sy._u,
            }),
            (0, u.jsx)("div", {
                className: sy.IP,
                children: (0, u.jsx)(ed.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: eR.intl.format(eR.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, u.jsx)(sS.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: sy.aA,
                shinyButtonClassName: sy.Xp,
            }),
        ],
    });
};
var sO = s(18671);
let sD = function () {
    let e = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion);
    return (0, u.jsx)(sm, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: sO.cI,
        hammerContainerClassName: sO.qg,
        keyContainerClassName: sO.h2,
        boltContainerClassName: sO.Bz,
        starAssetClassName: sO.ks,
        hammerAssetClassName: sO.GY,
        keyAssetClassName: sO.p4,
        boltAssetClassName: sO.vy,
    });
};
function sL(e) {
    let { fpEndsAt: t, className: s, buttonVisibilityRef: i } = e,
        n = (0, H.Zb)(t);
    return (0, u.jsx)("div", {
        className: g()(sE.kL, s),
        ref: i,
        children: (0, u.jsxs)("div", {
            className: sE.ap,
            children: [
                (0, u.jsxs)(ec.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, u.jsx)(t_, { text: eR.intl.string(eR.t.yhldRB) }),
                        (0, u.jsxs)(ec.B, {
                            align: "start",
                            gap: 12,
                            className: sE.rG,
                            children: [
                                (0, u.jsx)(ss, { children: eR.intl.format(eR.t.FwjP6W, { days: n }) }),
                                (0, u.jsx)(ed.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: eR.intl.string(eR.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, u.jsxs)(ec.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, u.jsx)(eH.A, {
                                    size: "md",
                                    buttonTextOverride: eR.intl.string(eR.t["2+luBl"]),
                                    iconOverride: em.t,
                                    variantOverride: "expressive",
                                }),
                                (0, u.jsx)(eu.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: eR.intl.string(eR.t.Af7ye6),
                                    onClick: () => (0, tp.openUserSettings)(tg.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, u.jsxs)("div", {
                    className: sE.Hk,
                    children: [(0, u.jsx)(to, { alt: "", width: "100%", height: "auto" }), (0, u.jsx)(sD, {})],
                }),
            ],
        }),
    });
}
function sk(e) {
    let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: n, shouldShowReferralProgressBar: a } = e,
        {
            headingText: l,
            headingTop: r,
            showPill: c,
            shouldShowChurnVariant: o,
            premiumSubscription: d,
            userDiscountOffer: m,
            discountedPrice: x,
            buttonVisibilityRef: p,
        } = sG(),
        { treatment: f, isInNitroHomeHeaderTreatment: N } = W("subscriber_home_hero"),
        { analyticsLocations: A } = (0, R.Ay)(C.A.PREMIUM_MARKETING_HERO_CTA),
        j = (0, tE.c)(tr.C.MARKETING_PAGE_BANNER),
        E = null != d && d.status === eC.Dmq.CANCELED,
        b = N && !E,
        _ = null;
    null != j && "marketingPageBanner" === j.properties.properties.oneofKind
        ? (_ = (0, u.jsx)(tv.x, {
              componentId: j.id,
              promotionBannerMarketingComponentFields: j.properties.properties.marketingPageBanner,
          }))
        : i
          ? (_ = (0, u.jsx)(tD, { variant: tO.SUBSCRIBER_HOME }))
          : n
            ? (_ = (0, u.jsx)(sM, {}))
            : a && !b && (_ = (0, u.jsx)(t$, {}));
    let v = (0, tj.V)(),
        T = (0, tA.O)(),
        I = (0, en.U9)(T, eE.pe.TIER_2) ? eE.pe.TIER_2 : void 0,
        S = null != d && d.status !== eC.Dmq.ACCOUNT_HOLD && d.hasAnyPremiumNitro,
        P = (0, tx.A)(),
        y = P.isFractionalPremiumActive && !S && null == _ && !o,
        { visibilityPercentageRef: M, visibilityPercentage: O } = tR(!(0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion));
    return n
        ? (0, u.jsx)(sL, { fpEndsAt: P.currentEntitlementEndsAt, className: t, buttonVisibilityRef: p })
        : b
          ? (0, u.jsx)(s_, {
                treatment: f,
                className: t,
                headingTop: r,
                showPill: c,
                buttonVisibilityRef: p,
                shouldShowReferralProgressBar: a,
            })
          : (0, u.jsx)("div", {
                className: g()(sE.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: p,
                children: (0, u.jsxs)("div", {
                    className: sE.Qs,
                    ref: M,
                    children: [
                        c && r,
                        (0, u.jsxs)("div", {
                            className: sE.N1,
                            children: [
                                (0, u.jsx)(sI, { containerVisibilityPercentage: O }),
                                o &&
                                    m?.expiresAt != null &&
                                    (0, u.jsx)(t3, { expiresAt: m.expiresAt.toISOString(), className: sE.IZ }),
                                (0, u.jsx)(ss, {
                                    children:
                                        o && null != m
                                            ? eR.intl.format(eR.t["3yZP0G"], { percent: m.discount.amount })
                                            : l,
                                }),
                                o &&
                                    null != m &&
                                    null != x &&
                                    (0, u.jsx)(ed.E, {
                                        className: sE.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: eR.intl.format(eR.t["3Q4wCy"], {
                                            discountedPrice: x,
                                            billingPeriod: (0, eA.Ke)(m.discount.userUsageLimitInterval),
                                            numMonths: m.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, u.jsxs)("div", {
                            className: y || o ? sE.UJ : void 0,
                            children: [
                                y &&
                                    (0, u.jsx)(eH.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: v?.subscription_trial?.sku_id ?? I,
                                    }),
                                o &&
                                    null != d &&
                                    (0, u.jsx)(eu.$, {
                                        variant: "expressive",
                                        icon: em.t,
                                        size: "md",
                                        text: eR.intl.string(eR.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = t8.g.CONFIRM_DISCOUNT),
                                                void (0, eO.openModalLazy)(async () => {
                                                    let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                        await Promise.all([
                                                            s.e("23866"),
                                                            s.e("33730"),
                                                            s.e("90862"),
                                                            s.e("97189"),
                                                            s.e("16918"),
                                                            s.e("24059"),
                                                            s.e("42306"),
                                                            s.e("11291"),
                                                            s.e("38838"),
                                                            s.e("96846"),
                                                            s.e("85484"),
                                                            s.e("39375"),
                                                            s.e("47944"),
                                                            s.e("82104"),
                                                            s.e("84473"),
                                                            s.e("69425"),
                                                            s.e("16581"),
                                                            s.e("23924"),
                                                            s.e("42205"),
                                                            s.e("55675"),
                                                            s.e("48226"),
                                                            s.e("64827"),
                                                            s.e("68261"),
                                                            s.e("7167"),
                                                            s.e("96643"),
                                                            s.e("92789"),
                                                            s.e("21335"),
                                                            s.e("47834"),
                                                            s.e("11735"),
                                                            s.e("42842"),
                                                            s.e("6338"),
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
                                                        (0, u.jsx)(t, {
                                                            ...s,
                                                            analyticsLocations: A,
                                                            initialStep: e,
                                                            premiumSubscription: d,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, u.jsx)(tn.A, {
                                    variant: y || o ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: eR.intl.string(eR.t["3KomGa"]),
                                }),
                            ],
                        }),
                        _,
                    ],
                }),
            });
}
let [sU, sG] = (0, th.A)(),
    sw = function (e) {
        let { className: t, buttonVisibilityRef: s, userDiscountOffer: i, discountedPrice: n } = e,
            { analyticsLocations: a } = (0, R.Ay)(C.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, H.ds)(),
            r = (0, tf.cg)(),
            c = (0, tN.QQ)(),
            o = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
            d = null != o && o.status === eC.Dmq.CANCELED && null != i,
            m = c && !d,
            x = eR.intl.string(eR.t.qYKftX),
            g = (0, tL.m)(),
            p = eR.intl.string(eR.t.ifwQZb),
            { fractionalState: f, endsAt: N } = (0, tx.A)(),
            A = (0, tm.Ay)(N, tm.yE.CREDITS_ENDS_IN),
            j = null;
        if (f === eE.xc.NONE || l) j = (0, u.jsx)(t_, { text: x });
        else {
            m = !0;
            let e = eR.intl.format(eR.t["yR+oDD"], {
                helpCenterLink: e0.A.getArticleURL(eC.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            j = (0, u.jsx)(td.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: sE.YL,
                position: "right",
                children: (e) =>
                    (0, u.jsx)("div", {
                        ...e,
                        className: sE.V_,
                        children: (0, u.jsx)("div", { className: sE.eL, children: (0, u.jsx)(t_, { text: A }) }),
                    }),
            });
        }
        return (0, u.jsx)(R.f5, {
            value: a,
            children: (0, u.jsx)(sU.Provider, {
                value: {
                    headingText: p,
                    headingTop: j,
                    showPill: m,
                    shouldShowChurnVariant: d,
                    premiumSubscription: o,
                    userDiscountOffer: i,
                    discountedPrice: n,
                    buttonVisibilityRef: s,
                },
                children: (0, u.jsx)(sk, {
                    className: t,
                    isEligibleForBogoPromotion: r,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: g,
                }),
            }),
        });
    };
var sH = s(820284),
    sB = s(742589),
    sF = s(909536),
    sV = s(392943),
    sz = s(876587),
    sW = s(400669),
    sK = s(503255),
    sY = s(525311);
let sX = function () {
    let e = (0, sF.Gh)("nitro_home_header"),
        t = m.useRef(null);
    return (0, u.jsxs)(sH.A, {
        section: eC.JJy.NAVIGATION,
        children: [
            (0, u.jsx)(sB.A, {
                className: g()(sK.TQ, sY.C$),
                transparent: !0,
                role: "navigation",
                children: (0, u.jsxs)("div", {
                    className: sK.Wc,
                    children: [
                        (0, u.jsxs)("div", {
                            className: sY.wk,
                            children: [
                                (0, u.jsx)(em.t, { colorClass: sY.tr }),
                                (0, u.jsx)("span", {
                                    role: "img",
                                    "aria-label": eR.intl.string(eR.t.Ipxkog),
                                    className: sY.Ss,
                                    children: (0, u.jsx)(sV.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, u.jsxs)("div", {
                                className: sK.MQ,
                                children: [
                                    (0, u.jsx)(sW.l, {
                                        ref: t,
                                        size: "sm",
                                        location: C.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, u.jsx)(tn.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, u.jsx)(sz.O, { targetElementRef: t, body: eR.intl.string(eR.t.EqUw7K) }),
        ],
    });
};
var sZ = s(98812),
    sQ = s(67423);
let sq = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: n, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, R.Ay)(C.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        r = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, u.jsx)(ea.animated.div, {
        className: g()(sZ.iE, { [sZ.q4]: !t }),
        style: r,
        children: (0, u.jsxs)("div", {
            className: sZ.iJ,
            children: [
                (0, u.jsx)("img", { alt: "", src: sQ, className: sZ.oU }),
                (0, u.jsxs)("div", {
                    className: sZ.iQ,
                    children: [
                        (0, u.jsx)(eo.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: eR.intl.format(eR.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, u.jsx)(ed.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eR.intl.format(eR.t["3Q4wCy"], {
                                numMonths: n.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eA.Ke)(n.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, u.jsx)(eu.$, {
                    variant: "expressive",
                    icon: em.t,
                    size: "md",
                    text: eR.intl.string(eR.t.zrCzVB),
                    onClick: () =>
                        void (0, eO.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                s.e("23866"),
                                s.e("33730"),
                                s.e("90862"),
                                s.e("97189"),
                                s.e("16918"),
                                s.e("24059"),
                                s.e("42306"),
                                s.e("11291"),
                                s.e("38838"),
                                s.e("96846"),
                                s.e("85484"),
                                s.e("39375"),
                                s.e("47944"),
                                s.e("82104"),
                                s.e("84473"),
                                s.e("69425"),
                                s.e("16581"),
                                s.e("23924"),
                                s.e("42205"),
                                s.e("55675"),
                                s.e("48226"),
                                s.e("64827"),
                                s.e("68261"),
                                s.e("7167"),
                                s.e("96643"),
                                s.e("92789"),
                                s.e("21335"),
                                s.e("47834"),
                                s.e("11735"),
                                s.e("42842"),
                                s.e("6338"),
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
                                (0, u.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: t8.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var sJ = s(761508),
    s$ = s(449543);
function s0(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s1(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s2(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var s6 = s(345394);
function s3(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: s6.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s8(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s7(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s9(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s5(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
function s4(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ie = s(996682);
function it(e) {
    let {
        color: t = el.A.colors.ICON_STRONG,
        "aria-label": s,
        "aria-hidden": i,
        role: n,
        width: a = 100,
        height: l = 80,
    } = e;
    return (0, u.jsxs)("svg", {
        ...(0, ie.A)({ "aria-label": s, "aria-hidden": i, role: n }),
        width: a,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, u.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, u.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, u.jsx)("defs", {
                children: (0, u.jsx)("clipPath", {
                    id: "a",
                    children: (0, u.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function is(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 162 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var ii = s(78701);
function ia(e) {
    let { alt: t, ariaLabel: s, ariaHidden: i, role: n, width: a = 288, height: l = 192 } = e;
    return (0, u.jsx)("img", {
        style: { width: a, height: l },
        src: ii.A,
        alt: t,
        "aria-label": s,
        "aria-hidden": i,
        role: n ?? "img",
    });
}
var il = s(462887),
    ir = s(259065),
    ic = s(206835),
    io = s(591179),
    id = s(462463),
    iu = s(878784),
    im = s(425713),
    ix = s(696292),
    ig = s(192444),
    ip = s(617986),
    ih = s(892227),
    iN = s(81466),
    iA = s(318254),
    ij = s(490285),
    iE = s(875679);
let iC = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, Q.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let s =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ih.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, u.jsxs)("div", {
        className: iE.kL,
        children: [
            null != s &&
                (0, u.jsxs)("div", {
                    className: iE.nM,
                    children: [
                        (0, u.jsxs)("div", {
                            className: iE.Pf,
                            children: [
                                (0, u.jsx)(iN.C, { size: "sm", color: el.A.colors.TEXT_DEFAULT }),
                                (0, u.jsx)(ed.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eR.intl.string(ij.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, u.jsx)(ed.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eR.intl.format(ij.default.xedPIb, { days: s }),
                        }),
                    ],
                }),
            null != s && t.total_rewarded_from_program > 0 && (0, u.jsx)("div", { className: iE.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, u.jsxs)("div", {
                    className: iE.nM,
                    children: [
                        (0, u.jsxs)("div", {
                            className: iE.Pf,
                            children: [
                                (0, u.jsx)(iA.C, { size: "sm", color: el.A.colors.TEXT_DEFAULT }),
                                (0, u.jsx)(ed.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: eR.intl.string(ij.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, u.jsx)(ed.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: eR.intl.format(ij.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var iR = s(758836),
    ib = s(190107),
    i_ = s(555599);
function iv(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: s } = (0, ig.lk)(ib.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: n } = (0, Q.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, m.useMemo)(
            () =>
                !i || null == n || null == n.reward_amount || n.reward_amount <= 0
                    ? null
                    : {
                          id: ew.NITRO_ORBS_REWARDS_CARD_ID,
                          title: eR.intl.string(ij.default.hx5AFp),
                          description: eR.intl.format(ij.default.wq3CF2, { orbsCount: n.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: g()(i_.lH, i_.yK),
                          footerContent: (0, u.jsx)(iC, {}),
                          ctaText: eR.intl.string(ij.default.BxjHiu),
                          onCtaClick: () => (0, O.pX)(eC.BVt.COLLECTIBLES_SHOP_WITH_TAB(iR.G2.ORBS)),
                      },
            [i, n],
        ),
        questOrbMultiplierCard: (0, m.useMemo)(
            () =>
                t
                    ? {
                          id: ew.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: eR.intl.string(eR.t.Csf5Ol),
                          description: eR.intl.format(eR.t.NpUfej, { bonusOrbMultiplier: s }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: eR.intl.string(eR.t.jVcuVY),
                          onCtaClick: () => (0, ip.mA)({ fromContent: ix.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: i_.Nf,
                      }
                    : null,
            [t, s],
        ),
    };
}
var iT = s(975807),
    iI = s(95035),
    iS = s(862990),
    iP = s(88001),
    iy = s(466919),
    iM = s(817577);
function iO() {
    (0, iT.A)(iP.TE);
}
function iD(e) {
    let t = (0, iS.O9)(),
        i = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
        n = i?.hasActiveTrial ?? !1,
        a = (0, m.useCallback)(() => {
            n
                ? (0, eO.openModalLazy)(async () => {
                      let { default: e } = await s.e("99709").then(s.bind(s, 516044));
                      return (t) => (0, u.jsx)(e, { ...t });
                  })
                : (0, M.A)({
                      subscriptionTier: eE.pe.TIER_2,
                      initialPlanId: eE.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, n]);
    return (0, m.useMemo)(
        () =>
            t
                ? {
                      id: ew.PREMIUM_GROUP_CARD_ID,
                      title: eR.intl.string(iy.default.YkvksF),
                      description: (0, u.jsxs)(u.Fragment, {
                          children: [
                              eR.intl.formatToPlainString(iy.default.JlyGQj, {
                                  totalSeats: iP.aw,
                                  premiumGroupProductName: (0, iP.DP)(),
                              }),
                              (0, u.jsx)("div", {
                                  className: i_.LF,
                                  children: (0, u.jsx)(iI.A, {
                                      onClick: iO,
                                      children: eR.intl.string(iy.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: eR.intl.string(eR.t.oW0eUd),
                      primaryAsset: iM,
                      ctaIcon: em.t,
                      ctaIconPosition: "start",
                      ctaText: eR.intl.string(eR.t.IJI7yk),
                      onCtaClick: a,
                  }
                : null,
        [a, t],
    );
}
var iL = s(562819),
    ik = s(892035),
    iU = s(793943),
    iG = s(655752),
    iw = s(764231),
    iH = s(627380),
    iB = s(30084),
    iF = s(792641),
    iV = s(714206);
let iz =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    iW =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    iK =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function iY() {
    let e,
        t,
        { analyticsLocations: s } = (0, R.Ay)(C.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, io.X)("useWhatsNewPerkCards"),
        { logitechCard: n, steelseriesCard: a } = e4(),
        l = (0, ey.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: r } = (0, ik.z$)("useWhatsNewPerkCards"),
        c = (0, id.A)({ analyticsLocations: s }),
        o = (0, m.useCallback)(() => {
            (0, tp.openUserSettings)(tg.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, ir.L)({ analyticsLocations: s }),
            );
        }, [s]),
        d = (0, m.useCallback)(() => {
            (0, tp.openUserSettings)(tg.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                (0, iL.L)({ analyticsLocations: s }),
            );
        }, [s]),
        x = (0, m.useCallback)(() => {
            (0, tp.openUserSettings)(tg.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        p = (function (e) {
            let { fractionalState: t } = (0, tx.A)(),
                s = t === eE.xc.FP_ONLY,
                i = (0, iu.$F)(),
                n = (0, iu.Xb)(),
                a = i?.status === iu.Wo.UPCOMING || s,
                l = (0, im.N)(i?.id),
                r = (function () {
                    let e = (0, iu.$F)(),
                        t = (0, iG.P)(),
                        s = (0, iu.Xb)();
                    if (null == e || null == t || null == s) return null;
                    let i = t1()(),
                        n = t1()(s),
                        a = e.status === iu.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        l = t.tenureReqNumMonths,
                        r = n.clone().add(a, "months"),
                        c = n.clone().add(l, "months").diff(r);
                    return Math.max(0, Math.min(1, (i.diff(r) - 864e5) / c));
                })(),
                c = (0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion) && !a,
                o = (0, iH.t)(),
                d = (0, iG.P)();
            return (0, m.useMemo)(() => {
                let t,
                    u = null != d ? eR.intl.string(d.nameUnformattedNitro) : void 0;
                null == i
                    ? s && (t = (0, iw.T)(eE.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === iu.Wo.UPCOMING
                              ? eR.intl.formatToPlainString(eR.t.a1eKDi, { days: o?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return eR.intl.formatToPlainString(eR.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return eR.intl.formatToPlainString(eR.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(o, u) ??
                                (0, iw.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let m = null;
                return (
                    null != l ? (m = a || c ? l.standard : l.ambientLarge) : s && (m = iV),
                    {
                        id: ew.TENURE_BADGE_CARD_ID,
                        title:
                            null != i ? eR.intl.string(i.nameUnformattedNitro) : s ? eR.intl.string(eR.t.tx9Fvw) : "",
                        pillText: eR.intl.string(eR.t["jyYgZ+"]),
                        primaryAsset: m,
                        primaryAssetClassName: g()(iF.pq, { [iF.n6]: a, [iF.kE]: c }),
                        caption: null != n ? eR.intl.formatToPlainString(eR.t.Hu4jfi, { date: new Date(n) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: r ?? void 0,
                        ctaText: eR.intl.string(eR.t.jVcuVY),
                        onCtaClick: () => (0, iB.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, c, n, r, s, o, d, e]);
        })(s),
        f =
            ((e = et({ location: "useWhatsNewPerkCards" })),
            (t = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription())),
            (0, m.useMemo)(() => {
                if (e !== $.NITRO_HOME_TILE) return null;
                let i = ev(t);
                return null == i || null == t
                    ? null
                    : {
                          id: ew.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                          title: i.title,
                          description: i.body,
                          pillText: i.badge,
                          primaryAsset: "/assets/c4347155a9b71184.svg",
                          primaryAssetClassName: i_.lH,
                          ctaIcon: em.t,
                          ctaIconPosition: "start",
                          ctaText: i.cta,
                          onCtaClick: () =>
                              (0, M.A)({ subscription: t, initialPlanId: e_(t)?.id ?? null, analyticsLocations: s }),
                      };
            }, [s, t, e])),
        { nitroOrbsRewardsCard: N, questOrbMultiplierCard: A } = iv("useWhatsNewPerkCards"),
        j = iD(s);
    return (0, m.useMemo)(() => {
        let e = [
                l ? null : n,
                l ? null : a,
                N,
                A,
                j,
                {
                    id: ew.DISPLAY_NAME_STYLES_CARD_ID,
                    title: eR.intl.string(eR.t.OLtTrt),
                    description: eR.intl.string(eR.t["di/pXR"]),
                    onCtaClick: i ? c : o,
                    ctaText: eR.intl.string(eR.t.jVcuVY),
                    primaryAsset: iz,
                },
                {
                    id: ew.CLIENT_THEMES_CARD_ID,
                    title: eR.intl.string(eR.t.acc6h6),
                    description: eR.intl.formatToPlainString(eR.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: iK,
                    ctaText: eR.intl.string(eR.t.jVcuVY),
                    onCtaClick: () => {
                        (0, iU.nf)(iU.HP.CUSTOM_THEME);
                    },
                },
                r
                    ? null
                    : {
                          id: ew.PERMADECOS_CARD_ID,
                          title: eR.intl.string(eR.t.L14NZN),
                          description: eR.intl.string(eR.t.eCZkAI),
                          primaryAsset: (0, u.jsx)(ia, { alt: "", ariaHidden: !0 }),
                          ctaText: eR.intl.string(eR.t.jVcuVY),
                          onCtaClick: i ? c : d,
                      },
                {
                    id: ew.CUSTOM_APP_ICONS_CARD_ID,
                    title: eR.intl.string(eR.t["GU+wqh"]),
                    description: eR.intl.string(eR.t["1uPk1Z"]),
                    primaryAsset: iW,
                    ctaText: eR.intl.string(eR.t.y9TxXV),
                    onCtaClick: x,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            s = t ? 5 : 6;
        if ((e.splice(+!!t, 0, p), null != f && e.splice(1, 0, f), r)) {
            let t = null != f ? 2 : 1;
            e.splice(t, 0, {
                id: ew.PROFILE_FRAMES_CARD_ID,
                title: eR.intl.string(eR.t.SGBDnu),
                description: eR.intl.string(eR.t.cMgegQ),
                pillText: eR.intl.string(eR.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: g()(i_.lH, i_.yK),
                ctaText: eR.intl.string(eR.t.jVcuVY),
                onCtaClick: () => (0, O.pX)(eC.BVt.COLLECTIBLES_SHOP_WITH_TAB(iR.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > s && e.splice(s, e.length - s), e;
    }, [p, f, N, A, j, o, x, d, c, i, n, a, l, r]);
}
var iX = s(355097);
let iZ = "/assets/1eb1b74667b4c0f0.svg",
    iQ = "/assets/983b60e4fcaf973b.svg";
var iq =
    (((o = {}).BEST_OF_NITRO = "bestof"),
    (o.APPEARANCE_STYLE = "appearance"),
    (o.UPGRADES = "upgrades"),
    (o.VIP_EXTRAS = "vip"),
    o);
let iJ = [
    { id: "bestof", label: () => eR.intl.string(eR.t.q1u7nQ) },
    { id: "appearance", label: () => eR.intl.string(eR.t.CUnZkZ) },
    { id: "upgrades", label: () => eR.intl.string(eR.t.KC5q8v) },
    { id: "vip", label: () => eR.intl.string(eR.t.DjEAcv) },
];
var i$ = s(758495);
function i0(e) {
    e.stopPropagation();
}
function i1(e) {
    let { glowingPerkId: t = null } = e,
        s = (function () {
            let e = (0, tS.DP)(),
                t = (0, io.X)("useFavoritesPerkCards"),
                s = (0, iu.Lh)(),
                i = (0, im.N)(s)?.standard ?? null,
                { analyticsLocations: n } = (0, R.Ay)(C.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, ic.A)({ scrollPosition: iX._F.TRY_IT_OUT, analyticsLocations: n }),
                l = (0, m.useCallback)(() => {
                    (0, tp.openUserSettings)(tg.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: n });
                }, [n]),
                r = (0, m.useCallback)(() => {
                    (0, tp.openUserSettings)(tg.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: n });
                }, [n]),
                c = (0, m.useCallback)(() => {
                    (0, tp.openUserSettings)(tg.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: n });
                }, [n]),
                o = (0, m.useCallback)(() => {
                    (0, O.pX)(eC.BVt.COLLECTIBLES_SHOP);
                }, []),
                d = (0, m.useCallback)(() => {
                    (0, tp.openUserSettings)(tg.X.SOUNDBOARD_CATEGORY, { analyticsLocations: n });
                }, [n]),
                x = (0, id.A)({ analyticsLocations: n }),
                g = (0, m.useCallback)(() => {
                    (0, tp.openUserSettings)(tg.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                        (0, ir.L)({ analyticsLocations: n }),
                    );
                }, [n]),
                p = iY(),
                h = (0, m.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: f, questOrbMultiplierCard: N } = iv("useFavoritesPerkCards"),
                A = iD(n),
                j = (0, m.useMemo)(
                    () => [
                        {
                            id: ew.SERVER_BOOSTS_CARD_ID,
                            title: eR.intl.formatToPlainString(eR.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: eR.intl.formatToPlainString(eR.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            onCtaClick: r,
                            primaryAsset: (0, u.jsx)(s0, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != A ? { ...A, categories: ["bestof"] } : null,
                        {
                            id: ew.PROFILES_CARD_ID,
                            title: eR.intl.string(eR.t.xDRab3),
                            description: eR.intl.string(eR.t.yn6fWA),
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            onCtaClick: t ? x : a,
                            primaryAsset: (0, u.jsx)(s1, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ew.HD_VIDEO_CARD_ID,
                            title: eR.intl.string(eR.t["/mQ5gg"]),
                            description: eR.intl.string(eR.t["7WwAXh"]),
                            primaryAsset: (0, u.jsx)(s2, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ew.CLIENT_THEMES_CARD_ID,
                            title: eR.intl.string(eR.t.acc6h6),
                            description: eR.intl.formatToPlainString(eR.t.WQazjs, { themeCount: 20 }),
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: iK,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: ew.MORE_EMOJIS_CARD_ID,
                            title: eR.intl.string(eR.t.D8vIDT),
                            description: eR.intl.string(eR.t.DRMecB),
                            primaryAsset: (0, u.jsx)(s3, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ew.LARGE_UPLOADS_CARD_ID,
                            title: eR.intl.string(eR.t.nL1WZV),
                            description: eR.intl.formatToPlainString(eR.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, u.jsx)(s8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: ew.CUSTOM_APP_ICONS_CARD_ID,
                            title: eR.intl.string(eR.t["GU+wqh"]),
                            description: eR.intl.string(eR.t["1uPk1Z"]),
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: iW,
                            categories: ["appearance"],
                        },
                        {
                            id: ew.ENTRANCE_SOUNDS_CARD_ID,
                            title: eR.intl.string(eR.t.WJfCPi),
                            description: eR.intl.string(eR.t.liQKJR),
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: ew.DISPLAY_NAME_STYLES_CARD_ID,
                            title: eR.intl.string(eR.t.OLtTrt),
                            description: eR.intl.string(eR.t["di/pXR"]),
                            onCtaClick: t ? x : g,
                            ctaText: eR.intl.string(eR.t.jVcuVY),
                            primaryAsset: iz,
                            categories: ["appearance"],
                        },
                        {
                            id: ew.CUSTOM_SOUNDS_CARD_ID,
                            title: eR.intl.string(eR.t["Cu/oFd"]),
                            description: eR.intl.string(eR.t.czj2aa),
                            primaryAsset: (0, u.jsx)(s7, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ew.SPECIAL_STICKERS_CARD_ID,
                            title: eR.intl.string(eR.t.MQoVeb),
                            description: eR.intl.string(eR.t.HGCLZX),
                            primaryAsset: (0, u.jsx)("div", {
                                className: i_.Uc,
                                children: (0, u.jsx)(s9, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ew.SUPER_REACTIONS_CARD_ID,
                            title: eR.intl.string(eR.t.qERvAA),
                            description: eR.intl.string(eR.t.WkUWzx),
                            primaryAsset: (0, u.jsx)(s5, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: ew.VIDEO_BACKGROUNDS_CARD_ID,
                            title: eR.intl.string(eR.t.ssVDYQ),
                            description: eR.intl.string(eR.t.aUSRMa),
                            primaryAsset: (0, il.M)(e) ? iZ : iQ,
                            categories: ["upgrades"],
                        },
                        {
                            id: ew.EARLY_ACCESS_CARD_ID,
                            title: eR.intl.string(eR.t["g/KRY6"]),
                            description: eR.intl.string(eR.t.JzAmJc),
                            primaryAsset: (0, u.jsx)(s4, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ew.BADGE_CARD_ID,
                            title: eR.intl.string(eR.t.Bn3CtB),
                            description: eR.intl.string(eR.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, u.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, u.jsx)(it, { color: el.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: ew.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: eR.intl.string(eR.t["MTD+7w"]),
                            description: eR.intl.string(eR.t.Bhs0s6),
                            ctaText: eR.intl.string(eR.t.dBJVnZ),
                            onCtaClick: o,
                            primaryAsset: (0, u.jsx)(is, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != f ? { ...f, categories: ["vip"] } : null,
                        null != N ? { ...N, categories: ["vip"] } : null,
                        {
                            id: ew.PERMADECOS_CARD_ID,
                            title: eR.intl.string(eR.t.L14NZN),
                            description: eR.intl.string(eR.t.eCZkAI),
                            primaryAsset: (0, u.jsx)(ia, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, f, N, A, a, l, r, c, o, d, g, x, t],
                );
            return (0, m.useMemo)(() => j.filter((e) => null != e && !h.includes(e.id)), [j, h]);
        })(),
        i = null != t ? s.find((e) => e?.id === t) : null,
        [n, a] = (0, m.useState)(i?.categories[0] ?? iq.BEST_OF_NITRO),
        l = (0, m.useMemo)(() => s.filter((e) => null != e && e.categories.includes(n)), [s, n]);
    return (0, u.jsxs)("div", {
        className: i$.uW,
        children: [
            (0, u.jsx)(eo.D, { variant: "display-sm", className: i$.R_, children: eR.intl.string(eR.t["Uh3+CA"]) }),
            (0, u.jsx)(sJ.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: n,
                onItemSelect: a,
                className: i$.Lq,
                "aria-label": eR.intl.string(eR.t["Uh3+CA"]),
                children: iJ.map((e) =>
                    (0, u.jsx)(sJ.V.Item, { id: e.id, className: i$.IC, children: e.label() }, e.id),
                ),
            }),
            (0, u.jsx)(
                s$.A,
                {
                    gap: 20,
                    className: i$.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, u.jsx)(
                                eX.S,
                                { ...e, glowing: t === e.id, containerClassName: i$.Ui, onFocus: i0 },
                                e.id,
                            );
                    }),
                },
                n,
            ),
        ],
    });
}
var i2 = s(948562);
let i6 = function (e) {
    let { className: t } = e,
        s = (0, tS.DP)();
    return (0, u.jsx)("img", {
        className: g()(i2.D, t),
        src: (0, il.M)(s) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var i3 = s(946062);
let i8 = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: s, children: i } = e;
    return t
        ? (0, u.jsxs)("div", {
              className: g()(i3.kL, i3.Gd, i3.Eg),
              children: [(0, u.jsx)(i6, {}), (0, u.jsx)(sX, {}), i],
          })
        : (0, u.jsx)(ti.h, { color: "nitro-pink", className: g()(i3.kL, i3.Gd), offsetBottom: s, children: i });
};
function i7(e) {
    let { glowingPerkId: t = null } = e,
        s = iY();
    return (0, u.jsx)(e$, {
        sectionClassName: eJ.uW,
        heading: (0, u.jsx)(eo.D, { variant: "display-sm", className: eJ.R_, children: eR.intl.string(eR.t.Aw5DRm) }),
        grid: (0, u.jsx)(u.Fragment, {
            children: s.map((e, s) => {
                if (null == e) return;
                let i = 0 === s && !0 === e.featured;
                return (0, u.jsx)(
                    eX.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: g()(eJ.Nr, { [eJ.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
function i9(e, t, s, i) {
    !(function (e, t, s) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "start",
            n = arguments.length > 4 ? arguments[4] : void 0,
            a = (0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
            l = m.useRef(!1);
        m.useEffect(() => {
            if (!t || l.current) return;
            let s = { behavior: a ? "auto" : "smooth", block: i, inline: n },
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
        }, [t, a, i, n, ...s]),
            m.useEffect(() => {
                t || (l.current = !1);
            }, [t]);
    })(() => document.getElementById(e), t, [e], s, i);
}
var i5 = s(92737);
let i4 = "/assets/cd2be35d285d4675.svg",
    ne = (e) => {
        let { userId: t } = e,
            s = (0, H.ds)(),
            { isInNitroHomeHeaderTreatment: i } = W("nitro_member_hub_header"),
            n = (0, p.zy)();
        m.useEffect(() => {
            N.h.wait(async () => {
                let e = [(0, Z.Ay)()];
                null != t && e.push((0, J.A)(t)), await Promise.all(e);
            });
        }, [t]),
            m.useEffect(() => {
                _(!0);
            }, []),
            (0, ei.j)(),
            (0, y.P)(P);
        let a = m.useRef(null),
            l = m.useRef(null),
            r = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
            { isReady: c, programReward: o } = (0, Q.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: d,
                glowingSectionId: x,
                glowingPerkId: A,
                scrollBlock: j,
                scrollInline: E,
            } = m.useMemo(() => {
                let e = new URLSearchParams(n.search),
                    t = e.get("perk"),
                    s = e.get(i5.x);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != s
                      ? { scrollTargetId: s, glowingSectionId: s, scrollBlock: "start" }
                      : {};
            }, [n.search]);
        i9(d ?? "", null != d, j, E);
        let [b, _] = m.useState(!1),
            v = (0, es.p)(),
            T = m.useRef(null),
            [I, S] = m.useState(!1),
            M = null != v && null != r && r.status === eC.Dmq.CANCELED,
            O = (0, en.iU)(eE.gD.PREMIUM_MONTH_TIER_2, v, r),
            D = !I && M,
            L = null != (0, h.bG)([q.A], () => (null != t ? q.A.getUserProfile(t) : null)) && (c || null != o),
            k = et({ location: "PremiumSubscriberHome" }),
            w = m.useMemo(() => (k === $.STICKY_BAR ? ev(r) : null), [k, r]),
            [B, F] = (0, X.Cc)(null != w && L ? (eb[$.STICKY_BAR] ?? null) : null, r?.id ?? "", void 0, !0),
            V = null != r && r.status === eC.Dmq.CANCELED,
            z = i && !s && !V,
            { analyticsLocations: ee } = (0, R.Ay)(C.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ea, el] = m.useState(!1);
        return L
            ? (0, u.jsxs)(Y.Gt, {
                  className: g()(i3.xW, i3.Gd),
                  ref: a,
                  children: [
                      (0, u.jsx)(i8, {
                          shouldRenderNitroHomeHeaderExperiment: z,
                          gradientOffsetBottom: s ? 0.55 : 0.8,
                          children: (0, u.jsxs)(R.f5, {
                              value: ee,
                              children: [
                                  (0, u.jsx)(K.L, {
                                      innerRef: T,
                                      onChange: (e) => S(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, u.jsx)(sw, {
                                          buttonVisibilityRef: T,
                                          className: i3.v1,
                                          userDiscountOffer: v,
                                          discountedPrice: O,
                                      }),
                                  }),
                                  (0, u.jsx)(ts, { glowingPerkId: A, glowingSectionId: x }),
                                  (0, u.jsx)(i7, { glowingPerkId: A }),
                                  (0, u.jsx)(i1, { glowingPerkId: A }),
                                  (0, u.jsx)(tl, {
                                      className: i3.Zy,
                                      location: C.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eC.liQ.NITRO_HOME, section: eC.JJy.GIFT_BANNER },
                                  }),
                                  (0, u.jsx)("div", { className: i3.hz }),
                                  (0, u.jsx)(K.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !ea &&
                                              (G.default.track(eC.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: ee,
                                              }),
                                              el(!0));
                                      },
                                      children: (0, u.jsx)("div", { ref: l, className: i3._Z }),
                                  }),
                                  (0, u.jsx)("img", {
                                      src: i4,
                                      className: i3.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: eR.intl.string(eR.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      M &&
                          null != O &&
                          (0, u.jsx)(sq, {
                              isVisible: D && b,
                              premiumSubscription: r,
                              churnDiscountOffer: v,
                              discountedPrice: O,
                          }),
                      null != B &&
                          null != w &&
                          null != r &&
                          (0, u.jsx)(eP, { premiumSubscription: r, copy: w, markAsDismissed: F }),
                  ],
              })
            : z
              ? (0, u.jsxs)("div", {
                    className: g()(i3.kL, i3.Lq, i3.TN, i3.Eg),
                    children: [
                        (0, u.jsx)(sX, {}),
                        (0, u.jsx)("div", { className: i3.S, children: (0, u.jsx)(f.y, {}) }),
                    ],
                })
              : (0, u.jsx)("div", { className: g()(i3.kL, i3.Lq), children: (0, u.jsx)(f.y, {}) });
    };
var nt = s(286320),
    ns = s(727949),
    ni = s(440005),
    nn = s(26508),
    na = s(735668),
    nl = s(303136);
let nr = function (e) {
    let t,
        { className: s } = e,
        i = (0, sl.TM)(),
        n = (0, tI.q)((0, tS.Ay)());
    return (
        (t = i
            ? n
                ? "https://cdn.discordapp.com/assets/content/06ad5b3e9274c7e75f135129da3141ef42681698d3c0cf79b8c83e8526c2064f.mov"
                : "https://cdn.discordapp.com/assets/content/e306e75bdcd95e261e8d501c2cc6674bf183ff83e53b8dcae4e7bfa98d15c273.mov"
            : n
              ? "https://cdn.discordapp.com/assets/content/2b403885861e2c1a8268fbdb8ba90a93b72fab9937dd1cdad47e68f814969dac.webm"
              : "https://cdn.discordapp.com/assets/content/5412744d944cb3bf22279ee7741dbdca87bd644fa128adcfd2d50ae56543d7c9.webm"),
        (0, u.jsx)("div", {
            className: s,
            children: (0, u.jsx)(
                nl.A,
                {
                    fallbackImage: n
                        ? "https://cdn.discordapp.com/assets/content/6ddb7f92b6f26f24c70cc7bf84e11bb423378d47cd111866af3980b332bad336.png"
                        : "https://cdn.discordapp.com/assets/content/acbc696c59f02098ff0014edaf0ded799884a3fefed7f20bcdb6cf038bba0542.png",
                    children: (0, u.jsx)("source", { src: t }),
                },
                t,
            ),
        })
    );
};
var nc =
        (((d = {}).HOME = "home"),
        (d.WHATS_NEW = "whatsNew"),
        (d.BEST_OF_NITRO = "bestOfNitro"),
        (d.PLANS = "plans"),
        (d.COMPARE = "compare"),
        d),
    no = s(870408);
let nd = function (e) {
    let { isVisible: t, subscriptionTier: s, isEligibleForBogoPromotion: i } = e,
        n = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        a = { section: eC.JJy.MARKETING_FLOATING_CTA };
    return (0, u.jsx)(ea.animated.div, {
        className: no.i,
        style: n,
        "data-mtctest-ignore": "true",
        children: (0, u.jsxs)("div", {
            className: no.U,
            children: [
                (0, u.jsx)(eH.A, {
                    size: "md",
                    subscriptionTier: s,
                    hasActivePromotion: !!i,
                    isPersistentCTA: !0,
                    premiumModalAnalyticsLocation: a,
                }),
                (0, u.jsx)(tn.A, { variant: "secondary", size: "md" }),
            ],
        }),
    });
};
var nu = s(80933);
let nm = function () {
    let e = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion);
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)("div", {
                className: nu.BI,
                children: (0, u.jsx)(sd, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: 3e3 },
                    yAxisAnimationData: { range: 20, duration: 4e3, path: sc.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: e,
                    children: (0, u.jsx)("img", { src: sT, alt: "", className: nu.Q }),
                }),
            }),
            (0, u.jsx)(sm, {
                isMotionReduced: e,
                boltContainerClassName: nu.nJ,
                carContainerClassName: nu.IN,
                hammerContainerClassName: nu.Gj,
                keyContainerClassName: nu.FV,
                starContainerClassName: nu.E1,
                boltAssetClassName: nu.j7,
                carAssetClassName: nu.or,
                hammerAssetClassName: nu.Wv,
                keyAssetClassName: nu.rs,
                starAssetClassName: nu.OY,
            }),
        ],
    });
};
var nx = s(296725);
let ng = m.forwardRef((e, t) => {
    let { analyticsLocations: s } = (0, R.Ay)(C.A.PREMIUM_MARKETING_FOOTER_CTA);
    return (0, u.jsx)(R.f5, {
        value: s,
        children: (0, u.jsx)("div", {
            ref: t,
            className: nx.kL,
            children: (0, u.jsxs)("div", {
                className: nx.hQ,
                children: [
                    (0, u.jsx)(nm, {}),
                    (0, u.jsx)(eo.D, {
                        variant: "display-md",
                        color: "text-strong",
                        className: nx.RH,
                        children: eR.intl.string(eR.t.lEw32m),
                    }),
                ],
            }),
        }),
    });
});
ng.displayName = "PremiumMarketingFooter";
var np = s(939249);
let nh = function (e) {
    let { navBarSections: t, activeSectionId: s, isAnimationComplete: i } = e,
        n = {
            [nc.HOME]: eR.intl.string(eR.t.uGRXjS),
            [nc.WHATS_NEW]: eR.intl.string(eR.t["mfcR/v"]),
            [nc.BEST_OF_NITRO]: eR.intl.string(eR.t.xQKkE8),
            [nc.PLANS]: eR.intl.string(eR.t.wyNMnm),
            [nc.COMPARE]: eR.intl.string(eR.t.pwD7If),
        },
        a = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        l = (0, sF.Gh)("premium_marketing_nav_bar") && null != a,
        r = m.useRef(null),
        c = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, u.jsxs)(sB.A, {
        className: sK.TQ,
        transparent: !0,
        children: [
            (0, u.jsxs)("div", {
                className: sK.Wc,
                children: [
                    (0, u.jsxs)("div", {
                        className: sK.wG,
                        children: [
                            (0, u.jsx)(em.t, { className: sK.nE, colorClass: sK.oG }),
                            (0, u.jsx)("div", {
                                className: sK.zc,
                                role: "tablist",
                                "aria-label": eR.intl.string(eR.t.O9MiXY),
                                children: c.map((e) => {
                                    let t = s === e.id,
                                        i = n[e.id];
                                    return (0, u.jsxs)(
                                        np.D,
                                        {
                                            role: "tab",
                                            "aria-selected": t,
                                            className: sK.S0,
                                            onClick: e.scrollToSection,
                                            children: [
                                                (0, u.jsx)(ed.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-strong",
                                                    children: i,
                                                }),
                                                t && (0, u.jsx)("div", { className: sK.W0 }),
                                            ],
                                        },
                                        i,
                                    );
                                }),
                            }),
                        ],
                    }),
                    (0, u.jsxs)("div", {
                        className: sK.MQ,
                        children: [
                            l &&
                                (0, u.jsx)(sW.l, { ref: r, size: "sm", location: C.A.PREMIUM_WISHLIST_MARKETING_PAGE }),
                            (0, u.jsx)(tn.A, { size: "sm", variant: "overlay-secondary" }),
                        ],
                    }),
                ],
            }),
            l && i && (0, u.jsx)(sz.O, { targetElementRef: r }),
        ],
    });
};
var nf = s(990078),
    nN = s(704333),
    nA = s(414499),
    nj = s(597770),
    nE = s(500060),
    nC = s(406860),
    nR = s(983060),
    nb = s(56598);
function n_() {
    let { sectionRef: e, handleVisibilityChange: t } = (0, nC.A)({ boxType: eB.X, thirdPartyPartner: "xbox" }),
        s = [
            { icon: nN.B, text: eR.intl.string(ez.default.MUypiB) },
            { icon: nA.h, text: eR.intl.string(ez.default.ec5Rdd) },
            { icon: nj.o, text: eR.intl.string(ez.default["9t2CzW"]), tooltip: ez.default.AyECej },
            { icon: nE.o, text: eR.intl.string(ez.default.R7YJAY) },
        ];
    return (0, u.jsx)(K.L, {
        innerRef: e,
        onChange: t,
        threshold: 0.5,
        children: (0, u.jsx)("div", {
            ref: e,
            className: nb.iE,
            children: (0, u.jsxs)("div", {
                className: nb.Nr,
                children: [
                    (0, u.jsxs)("div", {
                        className: nb.j,
                        children: [
                            (0, u.jsx)("div", { className: nb._g }),
                            (0, u.jsx)("div", { className: nb.$h }),
                            (0, u.jsx)("div", { className: nb.Rv }),
                            (0, u.jsx)("div", { className: nb.Lw }),
                        ],
                    }),
                    (0, u.jsxs)("div", {
                        className: nb.CT,
                        children: [
                            (0, u.jsxs)("div", {
                                className: nb.Qs,
                                children: [
                                    (0, u.jsxs)("div", {
                                        children: [
                                            (0, u.jsx)(eo.D, {
                                                variant: "heading-xxl/bold",
                                                color: "text-strong",
                                                className: nb.R_,
                                                children: eR.intl.string(ez.default.rkt1aw),
                                            }),
                                            (0, u.jsxs)("div", {
                                                children: [
                                                    s.map((e) => {
                                                        let { icon: t, text: s, tooltip: i } = e;
                                                        return (0, u.jsxs)(
                                                            "div",
                                                            {
                                                                className: nb.yf,
                                                                children: [
                                                                    (0, u.jsx)(t, {
                                                                        size: "sm",
                                                                        color: "var(--icon-strong)",
                                                                    }),
                                                                    (0, u.jsx)(ed.E, {
                                                                        variant: "text-md/medium",
                                                                        color: "text-strong",
                                                                        children: s,
                                                                    }),
                                                                    null != i &&
                                                                        (0, u.jsx)("div", {
                                                                            className: nb.Jn,
                                                                            children: (0, u.jsx)(nf.m, {
                                                                                text: eR.intl.string(i),
                                                                                position: "top",
                                                                                children: (0, u.jsx)(eD.m, {
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
                                                    (0, u.jsx)("div", {
                                                        className: nb.xF,
                                                        children: (0, u.jsx)(eH.A, {
                                                            variantOverride: "secondary",
                                                            size: "md",
                                                            subscriptionTier: eE.pe.TIER_2,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, u.jsx)("div", {
                                        className: nb.WE,
                                        children: (0, u.jsx)(ed.E, {
                                            variant: "text-xs/medium",
                                            color: "text-link",
                                            children: eR.intl.format(ez.default.KDKdWi, { termsLink: (0, nR.xA)() }),
                                        }),
                                    }),
                                ],
                            }),
                            (0, u.jsx)("div", {
                                className: nb.r1,
                                children: (0, u.jsx)("img", {
                                    className: nb.wm,
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
var nv = s(750338),
    nT = s(280041),
    nI = s(856556);
function nS(e) {
    let {
        className: t,
        boxLayout: s,
        title: i,
        shouldLoadVideo: n,
        isReducedMotion: a,
        startLeftAligned: l = !1,
        highlightBento: r,
    } = e;
    return (0, u.jsxs)("div", {
        className: g()(nI.boxBackdrop, t),
        children: [
            (0, u.jsx)(eo.D, {
                className: nI.bentoSectionHeader,
                variant: "display-md",
                color: "text-strong",
                children: i,
            }),
            null != r && (0, u.jsx)("div", { className: nI.highlightBento, children: r }),
            (0, u.jsx)("div", {
                className: nI.bentoBoxesGrid,
                children: s.map((e, t) => {
                    let s;
                    switch (e.length) {
                        case 3:
                            s = nT.A0.SMALL;
                            break;
                        case 2:
                            s = nT.A0.MEDIUM;
                            break;
                        default:
                            s = nT.A0.LARGE;
                    }
                    return (0, u.jsx)(u.Fragment, {
                        children: e.map((e) =>
                            (0, u.jsx)(
                                nv.A,
                                { index: t + +!!l, ...e, size: s, shouldLoadVideo: n, isReducedMotion: a },
                                e.name,
                            ),
                        ),
                    });
                }),
            }),
        ],
    });
}
let nP = m.memo(function (e) {
        let t = (0, ey.l)("premium_marketing_bento"),
            { whatsNewBoxes: s } = (0, nT.Ay)(t);
        return (0, u.jsx)(nS, {
            boxLayout: s,
            title: eR.intl.string(eR.t.LRmNAl),
            startLeftAligned: !0,
            highlightBento: t ? (0, u.jsx)(n_, {}) : null,
            ...e,
        });
    }),
    ny = m.memo(function (e) {
        let { bestOfBoxes: t } = (0, nT.Ay)();
        return (0, u.jsx)(nS, { boxLayout: t, title: eR.intl.string(eR.t.EnzW2H), startLeftAligned: !0, ...e });
    });
var nM = s(526292),
    nO = s(236834),
    nD = s(45861);
function nL(e) {
    let { referrer: t } = e,
        { avatarSrc: s, eventHandlers: i } = (0, tH.A)({ userId: t?.id, size: tk._3.SIZE_24, animateOnHover: !0 });
    return (0, u.jsx)("div", {
        className: nD.$6,
        children: (0, u.jsxs)("div", {
            className: nD.sc,
            children: [
                (0, u.jsx)("div", {
                    className: nD.kR,
                    children: (0, u.jsx)(tU.eu, { src: s, "aria-label": t.username, size: tk._3.SIZE_32, ...i }),
                }),
                (0, u.jsx)(eo.D, {
                    variant: "heading-sm/normal",
                    className: nD.FS,
                    color: "text-strong",
                    children: eR.intl.format(eR.t.IqxblS, {
                        username: null != t.globalName ? t.globalName : t.username,
                    }),
                }),
            ],
        }),
    });
}
var nk = s(579245),
    nU = s(369805);
let nG = function () {
    let e = (0, nU.A)(void 0, { includesPremiumGroup: !0 });
    return null == e ? null : (0, u.jsx)(t_, { text: e });
};
function nw() {
    let e = (0, h.bG)([ef.A], () => ef.A.getForSkuAndInterval((0, eA.mH)(eE.pe.TIER_0), eE.WT.MONTH));
    return null != e ? (0, eA.sS)(e) : "\u2026";
}
var nH = s(188393);
let nB = function (e) {
    let { containerVisibilityPercentage: t } = e,
        s = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
        i = (0, sl.TM)();
    return (0, u.jsxs)("div", {
        "aria-hidden": !0,
        className: nH.YU,
        children: [
            (0, u.jsx)(sp, {
                supportHEVCAlpha: i,
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                containerClassName: nH.wG,
                assetClassName: nH.lu,
            }),
            (0, u.jsx)(sm, {
                isMotionReduced: s,
                containerVisibilityPercentage: t,
                boltContainerClassName: nH.nJ,
                carContainerClassName: nH.IN,
                hammerContainerClassName: nH.Gj,
                keyContainerClassName: nH.FV,
                starContainerClassName: nH.E1,
                boltAssetClassName: nH.j7,
                carAssetClassName: nH.or,
                hammerAssetClassName: nH.Wv,
                keyAssetClassName: nH.rs,
                starAssetClassName: nH.OY,
            }),
        ],
    });
};
var nF = s(469408);
let nV = m.memo(
    m.forwardRef(function (e, t) {
        let { className: s, subscriptionTier: i, isEligibleForBogoPromotion: n } = e,
            { analyticsLocations: a } = (0, R.Ay)(C.A.PREMIUM_MARKETING_HERO_CTA),
            l = nw(),
            r = (0, nO.A)(),
            c = null != r,
            { visibilityPercentageRef: o, visibilityPercentage: d } = tR(
                !(0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
            ),
            m = (0, nt.b)(),
            x = !c && m.length > 0,
            p = (0, tE.c)(tr.C.MARKETING_PAGE_BANNER),
            f = null != p && "marketingPageBanner" === p.properties.properties.oneofKind,
            N = (0, nM.ar)() && !f,
            A = (0, tA.O)(),
            j = (null != A && eE.U4.includes(A.discountId)) || f;
        return (0, u.jsx)(R.f5, {
            value: a,
            children: (0, u.jsx)("div", {
                ref: t,
                className: g()(nF.kL, s),
                "data-testid": "marketing-page-hero-header",
                children: (0, u.jsx)("div", {
                    ref: o,
                    children: (0, u.jsxs)("div", {
                        className: nF.hQ,
                        children: [
                            (0, u.jsx)(nB, { containerVisibilityPercentage: d }),
                            N && (0, u.jsx)(nG, {}),
                            (0, u.jsx)("div", {
                                className: nF.s8,
                                children: (0, u.jsx)(se.F, {
                                    forceLevel: 1,
                                    children: (0, u.jsx)(eo.D, {
                                        variant: "display-md",
                                        color: "text-strong",
                                        className: nF.wx,
                                        children: eR.intl.string(eR.t.YCZldK),
                                    }),
                                }),
                            }),
                            (0, u.jsxs)("div", {
                                className: nF.rf,
                                children: [
                                    c &&
                                        (0, u.jsx)("div", {
                                            className: nF.eZ,
                                            children: (0, u.jsx)(nL, { referrer: r }),
                                        }),
                                    x &&
                                        (0, u.jsx)("div", {
                                            className: nF.Qn,
                                            children: (0, u.jsx)(nk.A, {
                                                textColor: "text-strong",
                                                smallerText: !1,
                                                isApplicationHome: !0,
                                                enablePremiumBrandRefresh: !0,
                                            }),
                                        }),
                                    (0, u.jsxs)("div", {
                                        className: N ? nF.es : nF.UJ,
                                        children: [
                                            (0, u.jsx)(eH.A, {
                                                size: "md",
                                                fullWidth: N,
                                                hasActivePromotion: !!n,
                                                subscriptionTier: j && null == i ? eE.pe.NONE : i,
                                                buttonTextOverride: j ? eR.intl.string(eR.t["2pG5Ga"]) : void 0,
                                            }),
                                            !N && (0, u.jsx)(tn.A, { variant: "secondary", size: "md" }),
                                        ],
                                    }),
                                    (0, u.jsx)("div", {
                                        className: nF.iQ,
                                        children: (0, u.jsx)(ed.E, {
                                            color: "text-muted",
                                            variant: "text-xs/medium",
                                            children: eR.intl.format(eR.t.kt9wxs, { cheapestMonthlyPrice: l }),
                                        }),
                                    }),
                                    null != p &&
                                        "marketingPageBanner" === p.properties.properties.oneofKind &&
                                        (0, u.jsx)(tv.x, {
                                            componentId: p.id,
                                            promotionBannerMarketingComponentFields:
                                                p.properties.properties.marketingPageBanner,
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
var nz = s(820081),
    nW = s(140735),
    nK = s(401432),
    nY = s(795269),
    nX = s(84483),
    nZ = s(864386),
    nQ = s(799642),
    nq = s(202600);
function nJ(e) {
    let { includes: t } = e;
    return t
        ? (0, u.jsxs)(u.Fragment, {
              children: [
                  (0, u.jsx)(nz.B, { size: "sm", color: el.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, u.jsx)(nW.A, { children: eR.intl.string(eR.t["tq+6t/"]) }),
              ],
          })
        : (0, u.jsxs)(u.Fragment, {
              children: [
                  (0, u.jsx)(nK.a, { size: "xs", color: el.A.colors.TEXT_STRONG, "aria-hidden": !0 }),
                  (0, u.jsx)(nW.A, { children: eR.intl.string(eR.t.l4qZrp) }),
              ],
          });
}
function n$(e) {
    let { label: t, tier0ColumnData: s, tier2ColumnData: i } = e;
    return (0, u.jsxs)("tr", {
        className: g()(nQ.nM, nQ.WQ),
        children: [
            (0, u.jsx)("th", {
                scope: "row",
                className: nQ.nx,
                children: (0, u.jsx)(ed.E, { variant: "text-md/medium", children: t }),
            }),
            (0, u.jsx)("td", {
                className: nQ.Hn,
                children:
                    null != s.text
                        ? (0, u.jsx)(ed.E, { variant: "text-md/medium", children: s.text })
                        : (0, u.jsx)(nJ, { includes: !!s.includes }),
            }),
            (0, u.jsx)("td", {
                className: nQ.Hn,
                children:
                    null != i.text
                        ? (0, u.jsx)(ed.E, { variant: "text-md/medium", children: i.text })
                        : (0, u.jsx)(nJ, { includes: !!i.includes }),
            }),
        ],
    });
}
function n0(e) {
    let { title: t, subtitle: s, rows: i } = e;
    return (0, u.jsxs)("tbody", {
        children: [
            (0, u.jsx)("tr", {
                className: g()(nQ.nM, nQ.Gf),
                children: (0, u.jsxs)("td", {
                    className: nQ.nx,
                    colSpan: 3,
                    children: [
                        (0, u.jsx)(eo.D, { variant: "heading-lg/bold", children: t }),
                        null != s && (0, u.jsx)(ed.E, { variant: "text-xs/medium", children: s }),
                    ],
                }),
            }),
            i.map((e) => (0, u.jsx)(n$, { ...e }, e.id)),
        ],
    });
}
function n1(e) {
    let { premiumType: t, priceString: s } = e,
        i = t === eE.PremiumTypes.TIER_0 ? eR.intl.string(eR.t.tUbSDK) : eR.intl.string(eR.t.Ipxkog);
    return (0, u.jsxs)("div", {
        className: nQ.nn,
        children: [
            (0, u.jsxs)("div", {
                className: nQ.KS,
                children: [
                    (0, u.jsx)(em.t, { colorClass: nQ.oG }),
                    (0, u.jsx)(eo.D, { variant: "heading-sm/semibold", children: i }),
                ],
            }),
            (0, u.jsx)(eo.D, { variant: "heading-sm/semibold", children: s }),
        ],
    });
}
function n2(e) {
    let { tier0Price: t, tier2Price: s, shouldUseDiscountPrice: i, tier2DiscountedPriceString: n } = e,
        a = i ? n : (0, ej.$g)(s.amount, s.currency);
    return (0, u.jsx)("thead", {
        children: (0, u.jsxs)("tr", {
            className: nQ.U1,
            children: [
                (0, u.jsx)("th", {
                    scope: "col",
                    className: nQ.Cr,
                    children: (0, u.jsx)(eo.D, { variant: "heading-xl/bold", children: eR.intl.string(eR.t.ED4UVD) }),
                }),
                (0, u.jsx)("th", {
                    scope: "col",
                    className: nQ.Hn,
                    children: (0, u.jsx)(n1, {
                        premiumType: eE.PremiumTypes.TIER_0,
                        priceString: (0, ej.$g)(t.amount, t.currency),
                    }),
                }),
                (0, u.jsx)("th", {
                    scope: "col",
                    className: nQ.Hn,
                    children: (0, u.jsx)(n1, { premiumType: eE.PremiumTypes.TIER_2, priceString: a }),
                }),
            ],
        }),
    });
}
let n6 = function (e) {
        let t,
            { className: s, hidePill: i = !1, selectedPlanTier: n = eE.PremiumTypes.TIER_2 } = e,
            { analyticsLocations: a } = (0, R.Ay)(C.A.PREMIUM_MARKETING_PLAN_COMPARISON),
            l = (0, tj.V)(),
            r = l?.subscription_trial?.sku_id,
            c = (0, tA.O)(),
            o = (0, en.YJ)(c),
            d = null != c && (0, en.U9)(c, eE.pe.TIER_2) && o === eE.gD.PREMIUM_MONTH_TIER_2,
            x = (0, en.N1)(o),
            p = null != x ? `${x}/${(0, eA.FJ)(eE.WT.MONTH)}` : "",
            h = (0, eA.JM)(eE.gD.PREMIUM_MONTH_TIER_0),
            f = (0, eA.JM)(eE.gD.PREMIUM_MONTH_TIER_2),
            N = (function () {
                let e = (0, ey.l)("premium_marketing_comparison"),
                    t = [
                        {
                            id: 10,
                            label: eR.intl.string(eR.t["svn/YX"]),
                            tier0ColumnData: { includes: !0 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 7,
                            label: eR.intl.string(eR.t.ID5B6Z),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 13,
                            label: eR.intl.string(eR.t["PBUrx/"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                        {
                            id: 22,
                            label: eR.intl.string(nZ.default["86GtGH"]),
                            tier0ColumnData: { includes: !1 },
                            tier2ColumnData: { includes: !0 },
                        },
                    ],
                    s = null,
                    i = [],
                    { shouldShowBonusOrbsUX: n, multiplier: a } = (0, ig.lk)(ib.rE.NITRO_HOME_MARKETING),
                    { enabled: l } = e2.Ay.useConfig({ location: "useGetV2PlanComparisonTableRowsApplicationHome" }),
                    { functionalityEnabled: r } = (0, e6.YS)({
                        location: "useGetV2PlanComparisonTableRowsApplicationHome",
                    }),
                    { isInTreatment: c } = (0, nX.uX)("premium_marketing_comparison");
                return (
                    e &&
                        ((s = {
                            id: 23,
                            title: eR.intl.string(eR.t.NG1e6l),
                            subtitle: eR.intl.format(ez.default.uJcbMv, {
                                termsLink: e0.A.getArticleURL(eC.MVz.NITRO_2_POINT_0),
                            }),
                            rows: [
                                {
                                    id: 24,
                                    label: eR.intl.string(ez.default.OpOEmk),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        }),
                        l &&
                            s.rows.push({
                                id: 25,
                                label: eR.intl.string(ez.default.Q0A42h),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        r &&
                            s.rows.push({
                                id: 26,
                                label: eR.intl.string(e5.default["gc2sa/"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        n &&
                            i.push({
                                id: 27,
                                label: eR.intl.formatToPlainString(eR.t.Uhemob, { bonusOrbMultiplier: a }),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            }),
                        c &&
                            i.push({
                                id: 28,
                                label: eR.intl.string(ij.default["20tmSN"]),
                                tier0ColumnData: { includes: !1 },
                                tier2ColumnData: { includes: !0 },
                            })),
                    [
                        ...(null != s ? [s] : []),
                        { id: 17, title: eR.intl.string(eR.t.Ij3Zmv), rows: t },
                        {
                            id: 18,
                            title: eR.intl.string(eR.t.Wme3nX),
                            rows: [
                                {
                                    id: 0,
                                    label: eR.intl.string(eR.t.LrUABv),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 1,
                                    label: eR.intl.string(eR.t.DmfiwT),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 2,
                                    label: eR.intl.string(eR.t.Uukj4o),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 12,
                                    label: eR.intl.string(eR.t.NIKDqG),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 9,
                                    label: eR.intl.string(eR.t["5OAKhw"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                            ],
                        },
                        {
                            id: 19,
                            title: eR.intl.string(eR.t["6b3ydG"]),
                            rows: [
                                {
                                    id: 4,
                                    label: eR.intl.string(eR.t["ufhQC+"]),
                                    tier0ColumnData: { text: (0, eA.EJ)(eE.PremiumTypes.TIER_0) },
                                    tier2ColumnData: { text: (0, eA.EJ)(eE.PremiumTypes.TIER_2) },
                                },
                                {
                                    id: 11,
                                    label: eR.intl.string(eR.t.qQxxVc),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 3,
                                    label: eR.intl.string(eR.t["9kRJS8"]),
                                    tier0ColumnData: { includes: !0 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 21,
                                    label: eR.intl.string(eR.t["5BJqNF"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 5,
                                    label: eR.intl.string(eR.t.VwxlMw),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 6,
                                    label: eR.intl.formatToPlainString(eR.t.nyhDpw, {
                                        numBoosts: eE.M4,
                                        percentageOff: (0, ej.l9)(eh.default.locale, eE.oX / 100),
                                    }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 16,
                                    label: eR.intl.string(eR.t["93xPy3"]),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 8,
                                    label: eR.intl.string(eR.t.IzrZHz),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 20,
                                    label: eR.intl.string(eR.t.Rj1Qys),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                ...i,
                                {
                                    id: 15,
                                    label: eR.intl.formatToPlainString(eR.t["8crdzJ"], { maxChars: eC.CS1 }),
                                    tier0ColumnData: { includes: !1 },
                                    tier2ColumnData: { includes: !0 },
                                },
                                {
                                    id: 14,
                                    label: eR.intl.string(eR.t["il8+nC"]),
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
            let e = null != l ? eR.intl.string(eR.t.IBYG5U) : eR.intl.string(eR.t.TR2B4T);
            t = (0, u.jsx)(nY.R, { className: g()(nQ.Io, nQ.SP), text: e });
        }
        let A = r === eE.pe.TIER_0 || n === eE.PremiumTypes.TIER_0;
        return (0, u.jsx)(R.f5, {
            value: a,
            children: (0, u.jsxs)("div", {
                className: g()(nQ.zr, s),
                children: [
                    (0, u.jsx)(eo.D, {
                        className: nQ.Qw,
                        variant: "display-md",
                        color: "text-strong",
                        children: eR.intl.string(eR.t.DbPgAd),
                    }),
                    (0, u.jsxs)("div", {
                        className: nQ.wY,
                        children: [
                            (0, u.jsxs)("div", {
                                className: g()(nQ.fO, { [nQ.Vd]: A, [nQ.hA]: !A }),
                                children: [
                                    !A && t,
                                    (0, u.jsx)("div", { className: nQ.xQ }),
                                    (0, u.jsxs)("div", {
                                        className: nQ.wN,
                                        children: [
                                            (0, u.jsx)("img", { src: nq, alt: "", className: nQ.kQ }),
                                            (0, u.jsx)("img", {
                                                src: "/assets/6162a665edda48d4.svg",
                                                alt: "",
                                                className: nQ.kQ,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, u.jsxs)("table", {
                                className: nQ.tp,
                                children: [
                                    (0, u.jsx)(n2, {
                                        tier0Price: h,
                                        tier2Price: f,
                                        shouldUseDiscountPrice: d,
                                        tier2DiscountedPriceString: p,
                                    }),
                                    N.map((e) => (0, m.createElement)(n0, { ...e, key: e.id })),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        });
    },
    n3 = function (e) {
        let { scrollOffset: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollOffset: 60 },
            s = (0, m.useCallback)(
                (e) => {
                    let s = r.current[e];
                    null != s &&
                        ((s.style.scrollMarginTop = `${t}px`),
                        s.scrollIntoView({ behavior: "smooth", block: "start" }));
                },
                [t],
            ),
            [i, n] = (0, m.useState)(Object.fromEntries(e.map((e) => [e, !1]))),
            [a, l] = (0, m.useState)(e[0]);
        (0, m.useEffect)(() => {
            let e = Object.keys(i).filter((e) => i[e]);
            e.length > 0 && l(e[0]);
        }, [i]);
        let r = (0, m.useRef)({});
        return (
            (0, m.useEffect)(() => {
                let e = new IntersectionObserver((e) => {
                    e.forEach((e) => {
                        n((t) => ({ ...t, [e.target.id]: e.isIntersecting }));
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
                navBarSections: (0, m.useMemo)(
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
                activeSectionId: a,
                setActiveSectionId: l,
            }
        );
    };
var n8 = s(818348),
    n7 = s(808557);
let n9 = () => {
    let e = (0, p.zy)();
    (0, y.P)(P);
    let t = m.useRef(null),
        s = m.useRef(null),
        i = m.useRef(null),
        n = m.useRef(null),
        a = m.useRef(null),
        l = m.useRef(null),
        r = (0, h.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
        [c, o] = m.useState(r);
    m.useEffect(() => {
        if (r) return void o(!0);
        let e = s.current;
        if (null == e) return;
        let t = (t) => {
            t.target === e && o(!0);
        };
        return e.addEventListener("animationend", t), () => e.removeEventListener("animationend", t);
    }, [r]);
    let [d, x] = m.useState(!1),
        [f, N] = m.useState(!1),
        [A, j] = m.useState(!1),
        [E, b] = m.useState(!1),
        _ = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
        v = null != _ ? (0, eA.EL)(_) : null,
        T = null != v ? eA.Ay.getSkuIdForPlan(v.planId) : null,
        I = null !== T && T !== eE.pe.TIER_2 ? eE.pe.TIER_2 : null,
        S = (0, tf.cg)(),
        { analyticsLocations: M } = (0, R.Ay)(C.A.PREMIUM_MARKETING);
    m.useEffect(() => {
        b(!0);
    }, []);
    let O = (0, nn.DK)(ni.W.NITRO, "PremiumMarketingHome"),
        { shouldShowBonusOrbsUX: D } = (0, ig.lk)(ib.rE.NITRO_HOME_MARKETING),
        L = O && D ? nT.NI.COMBINED_ORBS : D ? nT.NI.ORB_MULTIPLIER : O ? nT.NI.ORB_REWARDS : null,
        k = m.useMemo(() => {
            let t = new URLSearchParams(e.search).get("section");
            return "orbs" === t ? L : t === nT.NI.THREE_P_PROMOTIONS ? nT.NI.THREE_P_PROMOTIONS : null;
        }, [e.search, L]);
    i9(k ?? "", null != k);
    let { navBarSections: w, activeSectionId: H } = n3([nc.HOME, nc.WHATS_NEW, nc.BEST_OF_NITRO, nc.PLANS, nc.COMPARE]),
        { home: B, whatsNew: F, bestOfNitro: V, plans: z, compare: W } = w,
        X = (0, u.jsxs)("div", {
            ref: s,
            className: g()(n7.kL, n7.Gd, n7.iI, { [n7.Hq]: !r }),
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, u.jsx)(nr, { className: n7.yH }),
                (0, u.jsx)(nh, { navBarSections: w, activeSectionId: H, isAnimationComplete: c }),
                (0, u.jsxs)("div", {
                    className: n7.Qr,
                    children: [
                        (0, u.jsx)("div", {
                            className: n7.qY,
                            ref: B.ref,
                            children: (0, u.jsx)(K.L, {
                                innerRef: n,
                                onChange: (e) => x(e),
                                threshold: 0,
                                active: !0,
                                children: (0, u.jsx)(nV, {
                                    ref: n,
                                    subscriptionTier: I,
                                    isEligibleForBogoPromotion: S,
                                }),
                            }),
                        }),
                        S &&
                            (0, u.jsx)("div", {
                                className: n7.Hz,
                                children: (0, u.jsx)(tD, { variant: tO.APPLICATION_NITRO_HOME }),
                            }),
                        (0, u.jsx)("div", {
                            className: n7.So,
                            ref: F.ref,
                            children: (0, u.jsx)(nP, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, u.jsx)("div", {
                            className: n7.KQ,
                            ref: V.ref,
                            children: (0, u.jsx)(ny, { shouldLoadVideo: E, isReducedMotion: r }),
                        }),
                        (0, u.jsx)("div", {
                            className: n7.s5,
                            ref: z.ref,
                            children: (0, u.jsx)(K.L, {
                                innerRef: i,
                                onChange: (e) => N(e),
                                threshold: 0.1,
                                active: !0,
                                children: (0, u.jsx)(na.jP, { innerRef: i }),
                            }),
                        }),
                        (0, u.jsx)("div", { className: n7.aC, ref: W.ref, children: (0, u.jsx)(n6, {}) }),
                    ],
                }),
                (0, u.jsx)(K.L, {
                    innerRef: a,
                    onChange: (e) => {
                        e &&
                            !A &&
                            (G.default.track(eC.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            j(!0));
                    },
                    children: (0, u.jsx)("div", { ref: a, className: n7._Z }),
                }),
                (0, u.jsx)(ng, { ref: l }),
                (0, u.jsx)(nd, { isVisible: !d && !f && E, subscriptionTier: I, isEligibleForBogoPromotion: S }),
                (0, u.jsx)(nr, { className: n7.MF }),
            ],
        });
    return (0, u.jsx)(eL.N, {
        theme: n8.NJ.DARKER,
        children: (e) => (0, u.jsx)(Y.Gt, { className: g()(n7.XG, e), ref: t, children: X }),
    });
};
var n5 = s(374200),
    n4 = s(815846),
    ae = s(860839),
    at = s(695366),
    as = s(835968);
let ai = function (e) {
    let t,
        s,
        { premiumSubscription: i, className: n, textColor: a } = e,
        l = (0, nM.ar)();
    if (null == i) return null;
    let r = null != i ? eA.Ay.getPremiumPlanItem(i) : null;
    if (
        (eA.Ay.isBoostOnlySubscription(i)
            ? (t = eR.intl.string(eR.t.Uj0md3))
            : null != r && (t = eA.Ay.getTierDisplayNameByPlanId(r.planId)),
        null == t)
    )
        return null;
    function c() {
        return (0, tp.openUserSettings)(tg.X.SUBSCRIPTIONS_PANEL);
    }
    let o = (null != r ? eA.Ay.getSkuIdForPlan(r.planId) : null) === eE.pe.TIER_1;
    return (
        (s = null != a ? a : l ? "text-overlay-light" : "text-default"),
        (0, u.jsxs)(ek.Z, {
            className: g()(as.kL, n, { [as.He]: l }),
            type: ek.Z.Types.CUSTOM,
            children: [
                (0, u.jsx)(at.E, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: "currentColor",
                    className: g()(as.Kk, { [as.Pt]: l }),
                }),
                (0, u.jsx)(ed.E, {
                    variant: "text-sm/medium",
                    color: s,
                    children: o
                        ? eR.intl.format(eR.t["tYuv+T"], {
                              helpdeskArticle: e0.A.getArticleURL(eC.MVz.PREMIUM_DETAILS),
                              onSubscriptionsClick: c,
                          })
                        : eR.intl.format(eR.t.xHRgU2, { subscriptionName: t, onSubscriptionsClick: c }),
                }),
            ],
        })
    );
};
var an = s(147935);
let aa = function (e) {
    let { lifted: t = !1 } = e;
    return (0, u.jsxs)("svg", {
        width: "100%",
        height: "793px",
        viewBox: "0 0 2338 793",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: g()(an.zr, { [an.N]: t }),
        children: [
            (0, u.jsx)("path", {
                d: "M1175.02 650.847C567.943 650.847 449.538 793 0 793V0H2338V529.841C1912.54 529.841 1705.84 650.847 1175.02 650.847Z",
                fill: "url(#paint0_linear_2548_770)",
            }),
            (0, u.jsx)("defs", {
                children: (0, u.jsxs)("linearGradient", {
                    id: "paint0_linear_2548_770",
                    x1: "2338",
                    y1: "-1.20115e-05",
                    x2: "2262.17",
                    y2: "975.136",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        (0, u.jsx)("stop", { className: an.eq }),
                        (0, u.jsx)("stop", { offset: "0.339235", className: an.l_ }),
                        (0, u.jsx)("stop", { offset: "0.492065", className: an.sM }),
                        (0, u.jsx)("stop", { offset: "0.823236", className: an.zi }),
                        (0, u.jsx)("stop", { offset: "0.899558", className: an.s1 }),
                    ],
                }),
            }),
        ],
    });
};
var al = s(900797),
    ar = s(847374),
    ac = s(812993),
    ao = s(464769);
function ad(e) {
    let { className: t } = e;
    return (0, u.jsx)(ac.Lp, { className: g()(ao.T, t), text: eR.intl.string(eR.t.EYxi0o) });
}
var au = s(904788),
    am = s(507553),
    ax = s(255438);
let ag = "/assets/5b4fec8511c3676a.svg",
    ap = "/assets/0838bda6ecd20d91.svg";
function ah(e, t, s) {
    return (0, il.M)(e) ? t : s;
}
var af = s(446278);
function aN(e) {
    let { isShowingAll: t, onClick: s } = e;
    return (0, u.jsxs)(np.D, {
        onClick: s,
        className: af.customButton,
        children: [
            t ? eR.intl.string(eR.t.maZaN3) : eR.intl.string(eR.t["37C26f"]),
            t
                ? (0, u.jsx)(al.t, { size: "md", color: "currentColor", className: af.arrow })
                : (0, u.jsx)(ar.a, { size: "md", color: "currentColor", className: af.arrow }),
        ],
    });
}
function aA(e) {
    let {
            title: t,
            description: s,
            className: i,
            imageSource: n,
            imageClassName: a,
            titleBadge: l,
            isNew: r = !1,
            isEarlyAccess: c = !1,
        } = e,
        { analyticsLocations: o } = (0, R.Ay)(C.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, u.jsx)(R.f5, {
        value: o,
        children: (0, u.jsxs)("div", {
            className: g()(af.perkCard, i),
            children: [
                r
                    ? (0, u.jsx)(au.A, {
                          className: af.perkCardNewBadge,
                          shouldInheritBackgroundColor: !0,
                          shouldInheritTextColor: !0,
                      })
                    : null,
                c ? (0, u.jsx)(ad, { className: af.perkCardEarlyAccessBadge }) : null,
                (0, u.jsx)("img", { src: n, alt: "", className: g()(a, af.perksCardArt) }),
                (0, u.jsxs)("div", {
                    children: [
                        (0, u.jsxs)(eo.D, {
                            variant: "heading-lg/extrabold",
                            className: af.perkCardHeading,
                            children: [t, " ", l],
                        }),
                        (0, u.jsx)(ed.E, {
                            variant: "text-sm/normal",
                            className: af.perkCardDescription,
                            children: "function" == typeof s ? s(o) : s,
                        }),
                    ],
                }),
            ],
        }),
    });
}
let aj = function (e) {
    let { className: t, isSubscriberNitroHome: i = !1 } = e,
        [n, a] = m.useState(!1),
        l = (function (e) {
            let { styles: t } = e,
                i = (0, tS.Ay)(),
                n = (0, io.X)("usePerkCards"),
                a = (0, sa.bG)([L.default], () => {
                    let e = L.default.getCurrentUser();
                    return eA.Ay.canUsePremiumProfileCustomization(e);
                }),
                l = (0, ax.Xq)(eE.f3 / 1024, { useKibibytes: !0 });
            return {
                badge: {
                    title: eR.intl.string(eR.t.SS87rQ),
                    description: eR.intl.string(eR.t.oD6CRr),
                    imageSource: "/assets/70e295f6158d848f.png",
                    imageClassName: t.badgeImage,
                },
                badgeAlt: {
                    title: eR.intl.string(eR.t["5cYMu0"]),
                    description: eR.intl.string(eR.t.vxk9va),
                    imageSource: ah(i, "/assets/42e77ef3b6c4c1bb.svg", "/assets/ab48ff2bd2dce6a1.svg"),
                    imageClassName: t.badgeNewImage,
                },
                clientThemes: {
                    title: eR.intl.string(eR.t["/xvEMy"]),
                    description: eR.intl.string(eR.t.HKWdjj),
                    className: t.clientThemesCard,
                    imageSource: "/assets/37e0853800afb796.svg",
                    imageClassName: t.clientThemesImage,
                },
                customAppIcons: {
                    title: eR.intl.string(eR.t.OuItFi),
                    description: eR.intl.string(eR.t.mPyrE6),
                    imageSource:
                        "https://cdn.discordapp.com/assets/content/bca160c31fc5390dd2b41d90060edcc912a45f6ab3beab44ea79e16bf1f6530f.png",
                    imageClassName: t.customAppIconImage,
                },
                emoji: {
                    title: eR.intl.string(eR.t["R2IV/Q"]),
                    description: eR.intl.string(eR.t.R5Xag2),
                    imageSource: "/assets/d8edaaf5cb32248f.svg",
                    imageClassName: t.emojiImage,
                },
                guildProfile: {
                    title: eR.intl.string(eR.t.lKDhhJ),
                    description: (e) => {
                        if (n)
                            return a
                                ? eR.intl.formatToPlainString(eR.t.aj1pfZ, { onCheckItOutClick: () => {} })
                                : eR.intl.formatToPlainString(eR.t.d2oYS8, { onTryItOutClick: () => {} });
                        function t() {
                            {
                                let { openUserSettings: t } = s(766075);
                                am.A.setState({ scrollPosition: iX._F.TRY_IT_OUT }),
                                    t(tg.X.PROFILE_PANEL, { analyticsLocations: e });
                            }
                        }
                        return a
                            ? eR.intl.format(eR.t.aj1pfZ, { onCheckItOutClick: t })
                            : eR.intl.format(eR.t.d2oYS8, { onTryItOutClick: t });
                    },
                    imageSource: "/assets/e1b6b45be1ce4b03.png",
                    imageClassName: t.perGuildProfilesImage,
                },
                longerMessages: {
                    title: eR.intl.string(eR.t.BUScid),
                    description: eR.intl.string(eR.t.vN6XpQ),
                    imageSource: ah(i, "/assets/dd2088e61de76ba7.svg", "/assets/62b63638a6645137.svg"),
                    imageClassName: t.longerMessagesImage,
                },
                moreGuilds: {
                    title: eR.intl.string(eR.t.Bv8Pfk),
                    description: eR.intl.string(eR.t.JMfaTU),
                    imageSource: ah(i, "/assets/587c08f512a71514.png", "/assets/3308a5a697922299.svg"),
                    imageClassName: t.moreGuildsImage,
                },
                moreGuildsAlt: {
                    title: eR.intl.string(eR.t.Bv8Pfk),
                    description: eR.intl.string(eR.t.JMfaTU),
                    imageSource: ah(i, "/assets/f1d357c6741d62c3.svg", "/assets/8568e72f2b535d2f.svg"),
                    imageClassName: t.moreGuildsAltImage,
                },
                soundboard: {
                    title: eR.intl.string(eR.t["lGcW+c"]),
                    description: eR.intl.string(eR.t["/fDyO+"]),
                    imageSource: ah(i, "/assets/bd6751720573fb38.svg", "/assets/c292e42489e70696.svg"),
                    imageClassName: t.soundboardImage,
                },
                stickers: {
                    title: eR.intl.string(eR.t["1c+xwT"]),
                    description: eR.intl.string(eR.t.hJG8ZN),
                    imageSource: ah(i, ap, ag),
                    imageClassName: t.stickersImage,
                },
                stickersBurst: {
                    title: eR.intl.string(eR.t.tzdIwI),
                    description: eR.intl.string(eR.t.hJG8ZN),
                    imageSource: ah(i, ap, ag),
                    imageClassName: t.stickersImage,
                },
                stickersPremiumPerk: {
                    title: eR.intl.string(eR.t.tzdIwI),
                    description: eR.intl.string(eR.t.hJG8ZN),
                    imageSource: ah(i, ap, ag),
                    imageClassName: t.stickersImage,
                },
                streaming: {
                    title: eR.intl.string(eR.t.RSXQYO),
                    description: eR.intl.string(eR.t.ymCPxp),
                    imageSource: "/assets/3bcdc01b26c7f691.svg",
                    imageClassName: t.streamingImage,
                },
                superReactions: {
                    title: eR.intl.string(eR.t["uZt5q/"]),
                    description: eR.intl.string(eR.t.ZK3ZoX),
                    imageSource: ah(i, "/assets/99b308eabe7fcfd2.svg", "/assets/fa48f6b36050a179.svg"),
                    imageClassName: t.superReactionsImage,
                },
                upload: {
                    title: eR.intl.formatToPlainString(eR.t.jqhAdL, { premiumMaxSize: l }),
                    description: eR.intl.formatToPlainString(eR.t["HI+cfm"], { premiumMaxSize: l }),
                    imageSource: "/assets/010eae6a6dbacc63.svg",
                    imageClassName: t.uploadImage,
                },
                videoBackground: {
                    title: eR.intl.string(eR.t.NaGpTf),
                    description: eR.intl.string(eR.t["A8O/Qw"]),
                    imageSource: ah(i, iZ, iQ),
                    imageClassName: t.videoBackgroundImage,
                },
            };
        })({ styles: af }),
        r = (0, sa.bG)([tu.Ay], () => tu.Ay.useReducedMotion),
        { analyticsLocations: c } = (0, R.Ay)(),
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
    return (0, u.jsxs)("div", {
        className: g()(af.perksContainer, t, {
            [af.partiallyHidden]: i && !n,
            [af.subscriberNitroHome]: i,
            [af.reducedMotion]: r,
        }),
        children: [
            (0, u.jsx)(eo.D, {
                variant: "heading-xxl/extrabold",
                className: af.perksTitle,
                children: i ? eR.intl.string(eR.t.QX14gI) : eR.intl.string(eR.t.RGadQR),
            }),
            (0, u.jsx)("div", {
                className: g()(af.perkCardContainer, { [af.perkCardContainerExpanded]: n }),
                children: o.map((e) => null != e && (0, u.jsx)(aA, { ...e }, e.title)),
            }),
            i &&
                (0, u.jsxs)(u.Fragment, {
                    children: [
                        (0, u.jsx)("div", {
                            className: g()({ [af.sizeGizmo]: !n, [af.sizeGizmoExpanded]: n }),
                            children: (0, u.jsx)(aN, {
                                onClick: function () {
                                    G.default.track(eC.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                                        location_stack: c,
                                        was_expanded: n,
                                    }),
                                        a(!n);
                                },
                                isShowingAll: n,
                            }),
                        }),
                        (0, u.jsx)("div", { className: g()(af.cover, { [af.hidden]: n }) }),
                    ],
                }),
        ],
    });
};
var aE = s(194509),
    aC = s(14238);
let aR = function (e) {
    let { isVisible: t, subscriptionTier: s, isApplicationHome: i, isEligibleForBogoPromotion: n } = e,
        a = (0, er.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        }),
        l = { section: eC.JJy.MARKETING_FLOATING_CTA },
        r = (0, tS.Ay)(),
        c = (0, tI.M)(r);
    return (0, u.jsx)(ea.animated.div, {
        className: g()(aC.iE, { [aC.H8]: i, [aC.q4]: !t }),
        style: a,
        children: (0, u.jsxs)("div", {
            className: i ? aC.zW : aC.iJ,
            children: [
                (0, u.jsx)(ty.A, {
                    color: c ? tT.XD.BRAND_INVERTED : void 0,
                    className: g()(aC.x6, { [aC.Ph]: c }),
                    subscriptionTier: s,
                    premiumModalAnalyticsLocation: l,
                    isPersistentCTA: !0,
                    hasActivePromotion: n,
                    shinyButtonClassName: c ? void 0 : aC.PJ,
                }),
                (0, u.jsx)(aE.A, { className: aC.x6, premiumModalAnalyticsLocation: l }),
            ],
        }),
    });
};
var ab = s(360101);
function a_(e) {
    let {
            inOfferExperience: t,
            subscriptionTier: s,
            containerClassName: i,
            buttonClassName: n,
            isApplicationHome: a,
            isDarkMode: l,
            isEligibleForBogoPromotion: r,
        } = e,
        c = r
            ? (0, u.jsx)(ty.A, {
                  color: l ? tT.XD.BRAND_INVERTED : void 0,
                  className: g()(ab.x6, ab.Ph, n, { [ab.Sq]: t && a, [ab.MF]: a && !l }),
                  shinyButtonClassName: l ? void 0 : ab.PJ,
                  subscriptionTier: s,
                  hasActivePromotion: !0,
              })
            : (0, u.jsx)(ty.A, {
                  color: l || !a ? tT.XD.BRAND_INVERTED : void 0,
                  className: g()(ab.x6, ab.Ph, n, { [ab.Sq]: t && a, [ab.MF]: a && !l }),
                  subscriptionTier: s,
              }),
        o = t && a ? null : (0, u.jsx)(aE.A, { className: g()(ab.x6, n), color: a ? void 0 : tT.XD.WHITE });
    return (0, u.jsxs)("div", { className: g()(ab.UD, i), children: [c, " ", o] });
}
function av() {
    return (0, u.jsxs)(u.Fragment, {
        children: [
            (0, u.jsx)(au.p, { className: ab.zd }),
            (0, u.jsx)(au.p, { className: ab.G }),
            (0, u.jsx)(au.p, { className: ab.zy }),
            (0, u.jsx)(au.p, { className: ab.GX }),
        ],
    });
}
function aT(e) {
    let { variant: t = "text-lg/normal", withBottomMargin: s = !0, isApplicationHome: i } = e,
        n = nw();
    return (0, u.jsx)(ed.E, {
        variant: t,
        color: i ? "text-subtle" : "text-overlay-light",
        className: g()(ab.h_, { [ab.If]: s, [ab.jn]: i }),
        children: eR.intl.format(eR.t.kt9wxs, { cheapestMonthlyPrice: n }),
    });
}
let aI = m.forwardRef(function (e, t) {
    let { className: s, buttonClassName: i, subscriptionTier: n, isDarkMode: a } = e,
        { analyticsLocations: l } = (0, R.Ay)(C.A.PREMIUM_MARKETING_HERO_CTA),
        r = (0, tN.QQ)(),
        c = (0, nM.ar)(),
        o = (0, tf.cg)(),
        d = (0, nt.b)().length > 0,
        m = eR.intl.string(eR.t.YCZldK);
    return (0, u.jsx)(R.f5, {
        value: l,
        children: (0, u.jsxs)("div", {
            ref: t,
            className: g()(ab.kL, s, { [ab.V1]: !c, [ab.Q4]: !c && d }),
            "data-testid": "v2-marketing-page-hero-header",
            children: [
                (0, u.jsxs)("div", {
                    className: c ? ab.I6 : ab.G1,
                    children: [
                        (0, u.jsx)(se.F, {
                            forceLevel: 1,
                            children: (0, u.jsx)(eo.D, {
                                variant: c ? "display-lg" : "display-md",
                                color: "text-overlay-light",
                                children: m,
                            }),
                        }),
                        d
                            ? (0, u.jsx)("div", {
                                  className: ab.DF,
                                  children: (0, u.jsx)(nk.A, { textColor: "text-overlay-light", smallerText: !c }),
                              })
                            : (0, u.jsx)(aT, {}),
                        o || r
                            ? (0, u.jsx)("div", {
                                  className: ab.UD,
                                  children: (0, u.jsx)(aE.A, { className: g()(ab.x6, i), color: tT.XD.WHITE }),
                              })
                            : (0, u.jsx)(a_, {
                                  subscriptionTier: n,
                                  inOfferExperience: c,
                                  buttonClassName: i,
                                  isDarkMode: a,
                              }),
                        d && (0, u.jsx)(aT, { variant: "text-md/normal", withBottomMargin: !1 }),
                    ],
                }),
                !c && (0, u.jsx)(av, {}),
            ],
        }),
    });
});
var aS = s(22118),
    aP = s(111932),
    ay = s(16939);
function aM(e) {
    let { inOfferExperience: t } = e;
    return t ? (0, u.jsx)(aa, { lifted: t }) : null;
}
let aO = () => {
        (0, y.P)(P);
        let e = m.useRef(null),
            t = m.useRef(null),
            s = m.useRef(null),
            i = (0, tS.Ay)(),
            n = (0, il.M)(i),
            [a, l] = m.useState(!1),
            [r, c] = m.useState(!1),
            [o, d] = m.useState(!1),
            [x, p] = m.useState(!1),
            f = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
            N = null != f ? (0, eA.EL)(f) : null,
            A = null != N ? eA.Ay.getSkuIdForPlan(N.planId) : null,
            j = null !== A && A !== eE.pe.TIER_2 ? eE.pe.TIER_2 : null,
            E = (0, tj.V)(),
            b = E?.subscription_trial?.sku_id,
            _ = (0, nM.ar)(),
            v = (0, tf.cg)(),
            T = (0, sF.Gh)("premium-marketing-settings-page"),
            I = v ?? !1,
            S = (0, h.bG)([n5.A], () => {
                let e = n5.A.getMarketingComponentByType(tr.C.BILLING_SETTINGS_NITRO_GIFT_BANNER);
                return null == e || "billingSettingsNitroGiftBanner" !== e.properties.properties.oneofKind
                    ? null
                    : e.properties.properties.billingSettingsNitroGiftBanner;
            }),
            { analyticsLocations: M } = (0, R.Ay)(C.A.PREMIUM_MARKETING);
        m.useEffect(() => {
            p(!0);
        }, []);
        let O = (0, u.jsx)("div", {
            className: ay.dY,
            children: (0, u.jsx)(K.L, {
                innerRef: e,
                onChange: (e) => c(e),
                threshold: 0.1,
                active: !0,
                children: (0, u.jsx)(ae.qu, {
                    innerRef: e,
                    tier0CTAButton: (0, u.jsx)(ty.A, {
                        showIcon: !1,
                        subscriptionTier: eE.pe.TIER_0,
                        className: aP.Ph,
                        look: tT.pR.OUTLINED,
                        color: tT.XD.WHITE,
                        buttonShineClassName: aP.Qr,
                    }),
                    tier2CTAButton:
                        b === eE.pe.TIER_0
                            ? (0, u.jsx)(ty.A, {
                                  showIcon: !1,
                                  subscriptionTier: eE.pe.TIER_2,
                                  className: aP.Ph,
                                  look: tT.pR.OUTLINED,
                                  color: tT.XD.WHITE,
                                  buttonShineClassName: aP.Qr,
                              })
                            : (0, u.jsx)(ty.A, {
                                  color: tT.XD.BRAND_INVERTED,
                                  showIcon: !1,
                                  subscriptionTier: eE.pe.TIER_2,
                                  className: aP.Ph,
                                  hasActivePromotion: I,
                                  textOptions: { textClassName: aP.Ac },
                                  buttonShineClassName: aP.Qr,
                              }),
                }),
            }),
        });
        return (0, u.jsxs)("div", {
            className: ay.kL,
            "data-cy": "tier-0-marketing-page",
            children: [
                (0, u.jsx)(ai, { premiumSubscription: f, className: g()(ay.R3, { [ay.aZ]: _ }) }),
                _ &&
                    (0, u.jsxs)("div", {
                        className: ay.n1,
                        children: [
                            (0, u.jsx)(aM, { inOfferExperience: _ }),
                            T &&
                                (0, u.jsx)(sW.l, {
                                    className: ay.ij,
                                    size: "md",
                                    location: C.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                    forceDarkTheme: !0,
                                }),
                        ],
                    }),
                (0, u.jsxs)("div", {
                    className: g()({ [ay.V1]: !_ }),
                    children: [
                        null != S && (0, u.jsx)(n4.c, { className: ay.w$, config: S }),
                        (0, u.jsxs)("div", {
                            className: ay.iS,
                            children: [
                                T &&
                                    !_ &&
                                    (0, u.jsx)(sW.l, {
                                        className: ay.ij,
                                        size: "md",
                                        location: C.A.PREMIUM_WISHLIST_SETTINGS_HERO,
                                        forceDarkTheme: !0,
                                    }),
                                (0, u.jsx)(K.L, {
                                    innerRef: t,
                                    onChange: (e) => l(e),
                                    threshold: 0,
                                    active: !0,
                                    children: (0, u.jsx)(aI, {
                                        ref: t,
                                        subscriptionTier: j,
                                        className: g()({ [ay.p7]: _, [ay.Pw]: _, [ay.AG]: v, [ay.Cv]: null != f }),
                                        isDarkMode: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                O,
                (0, u.jsx)(aj, { className: ay.B_ }),
                (0, u.jsx)("div", { className: ay.aC, children: (0, u.jsx)(aS.A, { className: ay.JQ, hideCTAs: !0 }) }),
                (0, u.jsx)("div", { className: ay.hz }),
                (0, u.jsx)(aR, {
                    isVisible: !a && !r && x,
                    subscriptionTier: j,
                    isApplicationHome: !1,
                    isEligibleForBogoPromotion: v,
                }),
                (0, u.jsx)(K.L, {
                    innerRef: s,
                    onChange: (e) => {
                        e &&
                            !o &&
                            (G.default.track(eC.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: M }),
                            d(!0));
                    },
                    children: (0, u.jsx)("div", { ref: s, className: ay._Z }),
                }),
                (0, u.jsx)("img", {
                    src: i4,
                    className: ay.Kw,
                    width: 112,
                    height: 85,
                    alt: eR.intl.string(eR.t.X4IxWL),
                }),
            ],
        });
    },
    aD = function (e) {
        let { entrypoint: t } = e,
            s = (0, tj.V)(),
            i = (0, tA.O)({ includePremiumGroupDiscount: !0 }),
            n = (0, ns.NF)({ trialOffer: s }),
            a = (0, ns.Tp)(),
            l = (0, h.bG)([tF.A], () => tF.A.getReminderStateId());
        switch (
            (m.useEffect(() => {
                !0 === n && (0, ns.QG)(), !0 === a && (0, ns.ne)(l), (null != s || null != i) && (0, B.u1)(s, i);
            }, [s, i, n, a, l]),
            t)
        ) {
            case eE.Mf.UserSettings:
                return (0, u.jsx)(aO, {});
            case eE.Mf.ApplicationStoreHome:
                return (0, u.jsx)(n9, {});
            default:
                return null;
        }
    };
var aL = s(972119);
let ak = function (e) {
    let { entrypoint: t = eE.Mf.UserSettings } = e;
    (0, y.P)(P);
    let s = (0, _.Hp)(),
        { isInNitroHomeHeaderTreatment: i } = W("nitro_member_hub_header"),
        n = (0, H.ds)(),
        { sourceAnalyticsLocations: a, analyticsLocations: l } = (0, R.Ay)(C.A.PREMIUM_MARKETING),
        r = (0, h.bG)([U.A], () => U.A.hasFetchedSubscriptions()),
        c = (0, h.bG)([k.A], () => k.A.hasFetchedPaymentSources),
        o = (0, h.bG)([L.default], () => L.default.getCurrentUser()),
        d = o?.id,
        x = (0, tj.V)(),
        I = (0, tA.O)({ includePremiumGroupDiscount: !0 }),
        S = (0, v.Y)(eE.T7),
        [F, V] = m.useState(!0),
        z = m.useRef(0),
        K = (0, w.YE)(o, eE.PremiumTypes.TIER_2),
        Y = (0, h.bG)([U.A], () => U.A.getPremiumTypeSubscription()),
        X = null != Y && Y.status === eC.Dmq.CANCELED;
    (0, nt.b)(),
        m.useEffect(() => {
            N.h.wait(async () => {
                let e = Date.now();
                await Promise.all([b.hP(), b.$o(), (0, A.zS)(null, null, eC.tF5.DISCOVERY)]),
                    (z.current = Date.now() - e),
                    V(!1);
            });
        }, []),
        m.useEffect(() => {
            F ||
                G.default.track(eC.HAw.PREMIUM_MARKETING_PAGE_VIEWED, {
                    location_stack: a,
                    load_duration_ms: z.current,
                });
        }, [a, F]),
        m.useEffect(() => {
            s && (null != x || null != I) && (0, B.u1)(x, I);
        }, [s, x, I]);
    let Z = (0, p.zy)(),
        Q = m.useRef(!1),
        q = r && c && S,
        [J, $] = m.useState(q);
    q && !J && $(!0),
        m.useEffect(() => {
            if (Q.current || !q) return;
            let e = new URLSearchParams(Z.search).get("checkout");
            if (null == e) return;
            let t = { nitro_basic: eE.pe.TIER_0, nitro: eE.pe.TIER_2 }[e];
            null != t &&
                ((Q.current = !0),
                (0, O.bG)(eC.BVt.APPLICATION_STORE),
                (0, M.A)({ subscriptionTier: t, analyticsLocations: l }));
        }, [q, Z.search, l]);
    let ee = (0, h.bG)([D.A], () => D.A.enabled),
        et = t === eE.Mf.ApplicationStoreHome,
        es = ee
            ? (0, u.jsx)(j.A, {})
            : s
              ? (0, u.jsx)(T.uK, {})
              : et && K
                ? (0, u.jsx)(R.f5, { value: l, children: (0, u.jsx)(ne, { userId: d }) })
                : J
                  ? null
                  : (0, u.jsx)("div", { className: g()(aL.kL, aL.Lq), children: (0, u.jsx)(f.y, {}) });
    if (null != es) {
        let e = !ee && !s && et && K;
        return i && e && !n && !X ? es : (0, u.jsxs)(u.Fragment, { children: [et && (0, u.jsx)(E.A, {}), es] });
    }
    return (0, u.jsx)(R.f5, { value: l, children: (0, u.jsx)(aD, { entrypoint: t }) });
};
