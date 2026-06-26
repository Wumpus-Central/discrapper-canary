"use strict";
n.d(t, { Ay: () => ia, WU: () => is, x6: () => ir }), n(321073), n(323874), n(14289), n(35956);
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(503698),
    l = n.n(o),
    u = n(873263),
    c = n(17928),
    d = n(269115),
    _ = n(289873),
    h = n(689175),
    f = n(228366),
    p = n(793574),
    E = n(688810),
    m = n(949030),
    g = n(611924),
    A = n(961250),
    I = n(366505),
    T = n(841595),
    S = n(903209),
    y = n(166403),
    C = n(174459),
    N = n(881489),
    v = n(7066),
    R = n(131168),
    O = n(482589),
    b = n(410516),
    D = n(534514),
    L = n(31502),
    w = n(562708),
    M = n(192308),
    P = n(821609),
    x = n(885574),
    k = n(834730),
    U = n(43990),
    G = n(993077),
    F = n(139286),
    V = n(872725),
    B = n(920050),
    j = n(792656);
n(985603);
var H = n(777376),
    Y = n(185797),
    W = n(652215),
    K = n(788868),
    $ = n(151001),
    z = n(375708),
    q = n(823e3);
function Z(e) {
    let { openRewardModal: t } = e,
        n = (0, Y.F)();
    if (n.kind === Y.L.SUBSCRIBE)
        return (0, s.jsxs)("div", {
            className: q.R$,
            children: [
                (0, s.jsx)(j.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: K.pe.TIER_2,
                }),
                (0, s.jsx)(P.$, { variant: "secondary", size: "md", text: z.intl.string(z.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === H.p.CLAIMED ? { text: z.intl.string($.default.Plwzgf) } : { text: z.intl.string(z.t.hvVgAZ) };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: q.R$,
                children: [
                    (0, s.jsx)(P.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, s.jsx)(P.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === H.p.CLAIM_IN_PROGRESS &&
                (0, s.jsxs)("div", {
                    className: q.ed,
                    children: [
                        (0, s.jsx)(x.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, s.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: z.intl.string($.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function X(e) {
    let { glowing: t = !1 } = e;
    (0, F.A)({
        type: w.ImpressionTypes.VIEW,
        name: w.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: B.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, E.Ay)(p.A.CROISSANT_PREMIUM_HERO_CARD),
        r = a.useCallback(() => {
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("30480"), n.e("30221"), n.e("10622"), n.e("55251")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, s.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, s.jsx)(U.N, {
        theme: W.NJ8.DARKER,
        children: (e) =>
            (0, s.jsx)(E.f5, {
                value: i,
                children: (0, s.jsx)("div", {
                    className: l()(e, q.kL),
                    children: (0, s.jsx)(V.A, {
                        cardType: G.s.CUSTOM,
                        cardClassName: q.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: q.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: q.j,
                                    children: [
                                        (0, s.jsx)("div", { className: q._g }),
                                        (0, s.jsx)("div", { className: q.$h }),
                                        (0, s.jsx)("div", { className: q.Rv }),
                                        (0, s.jsx)("div", { className: q.Lw }),
                                        (0, s.jsx)("div", { className: q.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: q.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: q.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(D.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: q.DD,
                                            children: z.intl.string($.default.RGT513),
                                        }),
                                        (0, s.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: q.h_,
                                            children: z.intl.string($.default["+pTnsf"]),
                                        }),
                                        (0, s.jsx)(Z, { openRewardModal: r }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var Q = n(744064);
function J(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, Y.F)(),
        r = { isThirdPartyPerk: !0 },
        a =
            i.kind === Y.L.SUBSCRIBE
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
    return (0, s.jsx)(Q.S, {
        id: B.XBOX_PREMIUM_PERK_CARD_ID,
        title: z.intl.string($.default.UVL9tD),
        description: z.intl.string($.default["I+IXr0"]),
        ...a,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, s.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: "xbox" },
    });
}
function ee(e) {
    let { analyticsLocations: t } = (0, E.Ay)(p.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, s.jsx)(E.f5, { value: t, children: (0, s.jsx)(J, { ...e }) });
}
var et = n(661871),
    en = n(851777);
function ei(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: a, gridClassName: o } = e,
        u = en.Ui;
    return (0, s.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != a ? (0, s.jsx)("div", { className: l()(u, null != r && et.Jx, o), children: a }) : null,
        ],
    });
}
var er = n(975571),
    es = n(149995),
    ea = n(398523),
    eo = n(881373),
    el = n(581921),
    eu = n(3074),
    ec = n(852218),
    ed = n(382259),
    e_ = n(778414);
function eh() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eo.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = ea.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, es.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, es.S9)({ location: "useHardwarePartnerPerkCards" }),
        o = null === (0, eu.N)(),
        l = (0, L.l)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: c } = (0, a.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, a.useMemo)(() => {
        let a = l ? void 0 : z.intl.string(z.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: B.LOGITECH_3PP_CARD_ID,
                      title: z.intl.string(e_.default.OlObRa),
                      description: z.intl.format(e_.default.ZGOJ8R, {
                          discountPercent: eo.aW,
                          termsUrl: er.A.getArticleURL(W.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / c,
                      ctaText: z.intl.string(z.t.w7s5Qr),
                      onCtaClick: () => (0, el.P)({ partnerId: ec.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: a,
                      caption: (0, s.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ec.XY },
                      ctaDisabled: o,
                      ctaLoading: o,
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: B.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: z.intl.string(z.t.m7PucM),
                      description: i
                          ? r
                              ? z.intl.format(z.t["1Zw6xL"], {})
                              : z.intl.format(z.t.KWdCO0, {})
                          : z.intl.format(z.t.zh1X7u, {}),
                      descriptionNote:
                          !r && i
                              ? z.intl.format(z.t.vblnHk, {
                                    partnerName: ec.CD[ec.Cs].label,
                                    helpdeskArticle: er.A.getArticleURL(W.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: a,
                      caption: (0, s.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: u.getDate() / c,
                      ctaText: z.intl.string(z.t.w7s5Qr),
                      onCtaClick: () => (0, ed.u)({ analyticsLocations: e, partnerIds: [ec.KS, ec.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ec.KS },
                      ctaDisabled: o,
                      ctaLoading: o,
                  }
                : null,
        };
    }, [l, e, u, t, c, n, i, r, o]);
}
var ef = n(883010);
let ep = "xgpp";
function eE(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, L.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: a } = eh();
    if (!i) return null;
    let o = null != r || null != a;
    return (0, s.jsx)(ei, {
        id: ep,
        sectionClassName: l()(ef.uW, ef.Uv, ef.qr),
        heading: (0, s.jsx)(D.D, {
            variant: "display-sm",
            className: l()(en.R_, et.U6),
            children: z.intl.string(z.t.NG1e6l),
        }),
        beforeGrid: (0, s.jsx)("div", { className: et.JE, children: (0, s.jsx)(X, { glowing: t === ep }) }),
        grid: o
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(ee, { containerClassName: en.Nr }),
                      null != r && (0, s.jsx)(Q.S, { ...r, containerClassName: en.Nr, glowing: n === r.id }),
                      null != a && (0, s.jsx)(Q.S, { ...a, containerClassName: en.Nr, glowing: n === a.id }),
                  ],
              })
            : null,
    });
}
var em = n(315629),
    eg = n(65470),
    eA = n(91301);
let eI = function (e) {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, E.Ay)(n);
    return (0, s.jsx)(E.f5, {
        value: r,
        children: (0, s.jsxs)(em.h, {
            className: l()(eA.kL, eA.pm, t),
            color: "purple",
            children: [
                (0, s.jsxs)("div", {
                    className: eA.FS,
                    children: [
                        (0, s.jsx)(D.D, {
                            variant: "heading-xxl/bold",
                            className: eA.R_,
                            children: z.intl.string(z.t.Ve9Ge6),
                        }),
                        (0, s.jsx)(k.E, { variant: "text-md/medium", children: z.intl.string(z.t.yQ06u1) }),
                        (0, s.jsx)("div", {
                            className: eA.SB,
                            children: (0, s.jsx)(eg.A, {
                                buttonTextOverride: z.intl.string(z.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eA._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eT = n(877624);
let eS =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function ey(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: eS,
        srcSet: `${eS} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var eC = n(502572),
    eN = n(331322),
    ev = n(403581),
    eR = n(775602),
    eO = n(366999),
    eb = n(531260),
    eD = n(780964),
    eL = n(766075),
    ew = n(786300),
    eM = n(428262),
    eP = n(960851),
    ex = n(89366),
    ek = n(422936),
    eU = n(234419),
    eG = n(549996),
    eF = n(810660),
    eV = n(175569),
    eB = n(371764),
    ej = n(949964),
    eH = n(103411),
    eY = n(778712),
    eW = n(97808),
    eK = n(590251),
    e$ = n(144165),
    ez = n(854627),
    eq = n(427262),
    eZ = n(851746),
    eX = n(326084),
    eQ = n(664654);
function eJ() {
    var e, t, n;
    let { referralSentUsers: i } = (0, eQ.J)(),
        r = (0, c.bG)([eZ.A], () => eZ.A.getRecipientStatus()),
        s = (0, c.bG)([eZ.A], () => eZ.A.getHasEligibleFriends()),
        a = r.size === eQ.Z,
        o =
            ((e = !1 !== s),
            (t = i.length),
            (n = r.size === eQ.Z && [...r.values()].every((e) => e === eX.aK.REDEEMED)),
            e
                ? t === eQ.Z
                    ? n
                        ? z.intl.format(z.t["1aEjsH"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                        : z.intl.format(z.t["+u3AOO"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                    : z.intl.format(z.t["omMr+V"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                : z.intl.format(z.t["zWhX/Q"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var e0 = n(212737),
    e1 = n(378900);
function e2(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    C.default.track(W.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, M.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
            return (n) => (0, s.jsx)(e, { ...n, startingScreen: t });
        });
}
function e3(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: i } = (0, ez.A)({ userId: t.id, size: eY._3.SIZE_24 });
    return (0, s.jsx)(
        eW.eu,
        { className: e1.bj, src: n, "aria-label": (0, eq.mG)(t), size: eY._3.SIZE_24, ...i },
        t.id,
    );
}
function e6(e) {
    let { slotIndex: t } = e;
    return (0, s.jsx)("div", { className: e1.p, children: t });
}
function e4(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, s.jsx)("div", {
        className: l()(e1.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < eQ.Z; n++)
                if (t?.[n] !== void 0) {
                    let i = (0, s.jsx)(e3, { user: t[n] }, t[n].id);
                    e.push(i);
                } else {
                    let t = (0, s.jsx)(e6, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e5(e) {
    let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
    return (0, s.jsx)(eK.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e1.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: r ?? e1.e0,
        overlayClassName: t === eQ.Z ? e1.ys : void 0,
        children: (0, s.jsx)(e$._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: n,
            width: n,
            zoomable: !1,
        }),
    });
}
function e7(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = eJ();
    return (0, s.jsxs)("div", {
        className: l()(e1.kL, t),
        children: [
            (0, s.jsx)("div", { className: e1.G3, children: (0, s.jsx)(e5, { nReferralsSent: i }) }),
            (0, s.jsxs)("div", {
                className: e1.IH,
                children: [
                    (0, s.jsx)(e4, { referralSentUsers: n, className: e1.GV }),
                    (0, s.jsxs)("div", {
                        className: e1.n4,
                        children: [
                            (0, s.jsx)(D.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: z.intl.string(z.t.USo4s7),
                            }),
                            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, s.jsx)(P.$, {
                        variant: "primary",
                        disabled: !1 === r || !0 === a,
                        text: z.intl.string(z.t.Lm2nFc),
                        onClick: () =>
                            e2({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var e8 = n(989349),
    e9 = n.n(e8),
    te = n(496431),
    tt = n(369617);
let tn = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, te.A)(e9()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: a, minutes: o, seconds: u } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, s.jsxs)("div", {
        className: l()(tt.Xl, n),
        children: [
            (0, s.jsx)(k.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: z.intl.string(z.t["/ARFVE"]),
            }),
            (0, s.jsx)("div", {
                className: tt.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        className: tt.bh,
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: tt.kB,
                                                children: [
                                                    (0, s.jsx)("div", {
                                                        className: tt.B2,
                                                        children: (0, s.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, s.jsx)("div", {
                                                        className: tt.B2,
                                                        children: (0, s.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsx)(k.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return z.intl.string(z.t.ixASa2);
                                                        case "hours":
                                                            return z.intl.string(z.t["8sNvNn"]);
                                                        case "minutes":
                                                            return z.intl.string(z.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return z.intl.string(z.t.JhaiLW);
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
                                    (0, s.jsx)(k.E, {
                                        className: tt.cV,
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
var ti = n(473702),
    tr = n(609425),
    ts = n(660184),
    ta = n(287809),
    to = n(509332);
function tl() {
    let e = (0, c.bG)([ta.default], () => ta.default.getCurrentUser()),
        t = (0, tr.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, ez.A)({ userId: e?.id, size: eY._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eq.mG)(e);
    return (0, s.jsxs)("div", {
        className: to.kL,
        children: [
            (0, s.jsx)("div", {
                className: to.my,
                children: (0, s.jsx)(eW.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: eY._3.SIZE_56,
                    "aria-label": a,
                    ...r,
                }),
            }),
            (0, s.jsx)("div", { className: to.QC, children: (0, s.jsx)(ts.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tu = n(707554),
    tc = n(966423);
let td = function (e) {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, s.jsx)(tu.F, {
        forceLevel: 1,
        children: (0, s.jsx)(D.D, { className: l()(tc.w, t, i && tc.n), variant: "display-md", color: n, children: r }),
    });
};
var t_ = n(948653);
function th(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = eJ();
    return (0, s.jsxs)("div", {
        className: l()(t_.kL, t),
        children: [
            (0, s.jsx)("div", {
                className: t_.G3,
                children: (0, s.jsx)(e5, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: t_.HP,
                    ringClassName: t_.pZ,
                }),
            }),
            (0, s.jsxs)("div", {
                className: t_.IH,
                children: [
                    (0, s.jsxs)("div", {
                        className: t_.n4,
                        children: [
                            (0, s.jsx)(D.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: z.intl.string(z.t.USo4s7),
                            }),
                            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, s.jsx)(e4, { referralSentUsers: n, className: t_.t7 }),
                ],
            }),
            (0, s.jsx)(P.$, {
                variant: "primary",
                disabled: !1 === r || !0 === a,
                text: z.intl.string(z.t.Lm2nFc),
                onClick: () =>
                    e2({ startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tf = n(702841),
    tp = n(676279),
    tE = n(20458),
    tm = n(141502);
let tg = function (e) {
    let {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: n,
            flyingWumpusAssetClassName: i,
            boltContainerClassName: r,
            carContainerClassName: a,
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
        E = (0, tf.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        m = (0, tp.TM)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tm.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, s.jsx)(tE.A, {
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                boltContainerClassName: r,
                carContainerClassName: a,
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
var tA = n(197572);
let tI = function (e) {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, s.jsx)(tg, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: l()(tA.wG, n && tA.Vx),
        flyingWumpusAssetClassName: l()(tA.lu, n && tA.ov),
        boltContainerClassName: l()(tA.nJ, n && tA.Wc),
        hammerContainerClassName: l()(tA.Gj, n && tA.XA),
        keyContainerClassName: l()(tA.FV, n && tA.oZ),
        starContainerClassName: l()(tA.E1, n && tA.LN),
        boltAssetClassName: l()(tA.j7, n && tA.QN),
        hammerAssetClassName: l()(tA.Wv, n && tA.B9),
        keyAssetClassName: l()(tA.rs, n && tA.I1),
        starAssetClassName: l()(tA.OY, n && tA.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tT = (((i = {}).MORNING = "morning"), (i.AFTERNOON = "afternoon"), (i.EVENING = "evening"), i);
function tS() {
    let e,
        t = { [tT.MORNING]: z.t["Wvc/I+"], [tT.AFTERNOON]: z.t["d+0STx"], [tT.EVENING]: z.t.CqsxKI };
    return z.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tT.MORNING : e >= 12 && e < 17 ? tT.AFTERNOON : tT.EVENING],
    );
}
var ty = n(168880),
    tC = n(839873);
let tN = function (e) {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, s.jsx)(tg, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: l()(tC.wG, n && tC.Vx),
            flyingWumpusAssetClassName: l()(tC.lu, n && tC.ov),
            boltContainerClassName: l()(tC.nJ, n && tC.Wc),
            hammerContainerClassName: l()(tC.Gj, n && tC.XA),
            keyContainerClassName: l()(tC.FV, n && tC.oZ),
            starContainerClassName: l()(tC.E1, n && tC.LN),
            boltAssetClassName: l()(tC.j7, n && tC.QN),
            hammerAssetClassName: l()(tC.Wv, n && tC.B9),
            keyAssetClassName: l()(tC.rs, n && tC.I1),
            starAssetClassName: l()(tC.OY, n && tC.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tv = {
        [v.CL.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eF.U)(!o),
                _ = tS();
            return (0, s.jsx)("div", {
                className: l()(ty.kL, ty.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(ty.W2, ty.HQ),
                    ref: u,
                    children: [
                        (0, s.jsxs)(eN.B, {
                            align: "start",
                            gap: 32,
                            className: ty.ZU,
                            children: [
                                i && n,
                                (0, s.jsxs)(eN.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(td, {
                                            className: ty.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, s.jsx)(tl, {}),
                                    ],
                                }),
                                a && (0, s.jsx)(th, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: ty.y3,
                            children: (0, s.jsx)(tI, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [v.CL.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eF.U)(!o),
                _ = z.intl.string(z.t.ifwQZb);
            return (0, s.jsx)("div", {
                className: l()(ty.kL, ty.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(ty.W2, ty.m8),
                    ref: u,
                    children: [
                        (0, s.jsxs)(eN.B, {
                            align: "start",
                            gap: 32,
                            className: ty.Y0,
                            children: [
                                i && n,
                                (0, s.jsx)("div", {
                                    className: l()(ty.N1, ty.v8),
                                    children: (0, s.jsx)(td, {
                                        className: ty.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                a && (0, s.jsx)(th, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: ty.BF,
                            children: (0, s.jsx)(tN, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [v.CL.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = tS();
            return (0, s.jsx)("div", {
                className: l()(ty.kL, ty.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(ty.W2, ty.J_),
                    children: [
                        (0, s.jsxs)(eN.B, {
                            align: "start",
                            gap: 32,
                            className: ty.$S,
                            children: [
                                i && n,
                                (0, s.jsxs)(eN.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(td, {
                                            className: ty.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, s.jsx)(tl, {}),
                                    ],
                                }),
                            ],
                        }),
                        a && (0, s.jsx)("div", { className: ty.Pq, children: (0, s.jsx)(th, {}) }),
                    ],
                }),
            });
        },
    };
function tR(e) {
    let { treatment: t, ...n } = e,
        i = tv[t];
    return null != i ? (0, s.jsx)(i, { ...n }) : null;
}
var tO = n(652533),
    tb = n(21588),
    tD = n(180894);
let tL = function (e) {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tf.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: tb.BI,
                children: (0, s.jsx)(tO.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tO.$G },
                    yAxisAnimationData: { range: 20, duration: tO.Mp, path: tO.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tO.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, s.jsx)("img", { src: tD.A, alt: "", className: tb.Q }),
                }),
            }),
            (0, s.jsx)(tE.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tb.Gj,
                keyContainerClassName: tb.FV,
                starContainerClassName: tb.E1,
                hammerAssetClassName: tb.Wv,
                keyAssetClassName: tb.rs,
                starAssetClassName: tb.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var tw = n(725807),
    tM = n(774774),
    tP = n(164332);
let tx = function () {
    let e = { section: W.JJy.REVERSE_TRIAL_BANNER };
    return (0, s.jsxs)("div", {
        className: tP.vK,
        children: [
            (0, s.jsx)(tM.e4, { text: z.intl.string(z.t.qYKftX), className: tP.Io }),
            (0, s.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tP._u,
            }),
            (0, s.jsx)("div", {
                className: tP.IP,
                children: (0, s.jsx)(k.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: z.intl.format(z.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, s.jsx)(tw.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tP.aA,
                shinyButtonClassName: tP.Xp,
            }),
        ],
    });
};
var tk = n(245807);
let tU = function () {
    let e = (0, tf.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
    return (0, s.jsx)(tE.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tk.cI,
        hammerContainerClassName: tk.qg,
        keyContainerClassName: tk.h2,
        boltContainerClassName: tk.Bz,
        starAssetClassName: tk.ks,
        hammerAssetClassName: tk.GY,
        keyAssetClassName: tk.p4,
        boltAssetClassName: tk.vy,
    });
};
function tG(e) {
    let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
        r = (0, N.Zb)(t);
    return (0, s.jsx)("div", {
        className: l()(ty.kL, n),
        ref: i,
        children: (0, s.jsxs)("div", {
            className: ty.ap,
            children: [
                (0, s.jsxs)(eN.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, s.jsx)(eV.A, { text: z.intl.string(z.t.yhldRB) }),
                        (0, s.jsxs)(eN.B, {
                            align: "start",
                            gap: 12,
                            className: ty.rG,
                            children: [
                                (0, s.jsx)(td, { children: z.intl.format(z.t.FwjP6W, { days: r }) }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: z.intl.string(z.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, s.jsxs)(eN.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, s.jsx)(j.A, {
                                    size: "md",
                                    buttonTextOverride: z.intl.string(z.t["2+luBl"]),
                                    iconOverride: ev.t,
                                    variantOverride: "expressive",
                                }),
                                (0, s.jsx)(P.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: z.intl.string(z.t.Af7ye6),
                                    onClick: () => (0, eL.openUserSettings)(eD.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: ty.Hk,
                    children: [(0, s.jsx)(ey, { alt: "", width: "100%", height: "auto" }), (0, s.jsx)(tU, {})],
                }),
            ],
        }),
    });
}
function tF(e) {
    let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: r, shouldShowReferralProgressBar: a } = e,
        {
            headingText: o,
            headingTop: u,
            showPill: d,
            shouldShowChurnVariant: _,
            premiumSubscription: h,
            userDiscountOffer: f,
            discountedPrice: m,
            buttonVisibilityRef: g,
        } = tB(),
        { treatment: A, isInNitroHomeHeaderTreatment: I } = (0, v.jy)("subscriber_home_hero"),
        { analyticsLocations: T } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
        S = (0, eG.c)(eT.C.MARKETING_PAGE_BANNER),
        y = null != h && h.status === W.Dmq.CANCELED,
        C = I && !y,
        N = null;
    null != S && "marketingPageBanner" === S.properties.properties.oneofKind
        ? (N = (0, s.jsx)(eB.x, {
              componentId: S.id,
              promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
          }))
        : i
          ? (N = (0, s.jsx)(ej.A, { variant: ej.c.SUBSCRIBER_HOME }))
          : r
            ? (N = (0, s.jsx)(tx, {}))
            : a && !C && (N = (0, s.jsx)(e7, {}));
    let R = (0, eU.V)(),
        O = (0, ek.O)(),
        D = (0, b.U9)(O, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
        L = null != h && h.status !== W.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
        w = (0, eb.A)(),
        x = w.isFractionalPremiumActive && !L && null == N && !_,
        U = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        { visibilityPercentageRef: G, visibilityPercentage: F } = (0, eF.U)(!U);
    return r
        ? (0, s.jsx)(tG, { fpEndsAt: w.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
        : C
          ? (0, s.jsx)(tR, {
                treatment: A,
                className: t,
                headingTop: u,
                showPill: d,
                buttonVisibilityRef: g,
                shouldShowReferralProgressBar: a,
            })
          : (0, s.jsx)("div", {
                className: l()(ty.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: g,
                children: (0, s.jsxs)("div", {
                    className: ty.Qs,
                    ref: G,
                    children: [
                        d && u,
                        (0, s.jsxs)("div", {
                            className: ty.N1,
                            children: [
                                (0, s.jsx)(tL, { containerVisibilityPercentage: F }),
                                _ &&
                                    f?.expiresAt != null &&
                                    (0, s.jsx)(tn, { expiresAt: f.expiresAt.toISOString(), className: ty.IZ }),
                                (0, s.jsx)(td, {
                                    children:
                                        _ && null != f
                                            ? z.intl.format(z.t["3yZP0G"], { percent: f.discount.amount })
                                            : o,
                                }),
                                _ &&
                                    null != f &&
                                    null != m &&
                                    (0, s.jsx)(k.E, {
                                        className: ty.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: z.intl.format(z.t["3Q4wCy"], {
                                            discountedPrice: m,
                                            billingPeriod: (0, eM.Ke)(f.discount.userUsageLimitInterval),
                                            numMonths: f.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: x || _ ? ty.UJ : void 0,
                            children: [
                                x &&
                                    (0, s.jsx)(j.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: R?.subscription_trial?.sku_id ?? D,
                                    }),
                                _ &&
                                    null != h &&
                                    (0, s.jsx)(P.$, {
                                        variant: "expressive",
                                        icon: ev.t,
                                        size: "md",
                                        text: z.intl.string(z.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = ti.g.CONFIRM_DISCOUNT),
                                                void (0, M.openModalLazy)(async () => {
                                                    let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                        await Promise.all([
                                                            n.e("66994"),
                                                            n.e("94161"),
                                                            n.e("13051"),
                                                            n.e("80347"),
                                                            n.e("10741"),
                                                            n.e("80166"),
                                                        ]).then(n.bind(n, 293061));
                                                    return (n) =>
                                                        (0, s.jsx)(t, {
                                                            ...n,
                                                            analyticsLocations: T,
                                                            initialStep: e,
                                                            premiumSubscription: h,
                                                        });
                                                })
                                            );
                                        },
                                    }),
                                (0, s.jsx)(eg.A, {
                                    variant: x || _ ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: z.intl.string(z.t["3KomGa"]),
                                }),
                            ],
                        }),
                        N,
                    ],
                }),
            });
}
let [tV, tB] = (0, ew.A)(),
    tj = function (e) {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, N.ds)(),
            l = (0, eP.cg)(),
            u = (0, ex.QQ)(),
            d = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            _ = null != d && d.status === W.Dmq.CANCELED && null != i,
            h = u && !_,
            f = z.intl.string(z.t.qYKftX),
            m = (0, eH.m)(),
            g = z.intl.string(z.t.ifwQZb),
            { fractionalState: A, endsAt: I } = (0, eb.A)(),
            T = (0, eO.Ay)(I, eO.yE.CREDITS_ENDS_IN),
            S = null;
        if (A === K.xc.NONE || o) S = (0, s.jsx)(eV.A, { text: f });
        else {
            h = !0;
            let e = z.intl.format(z.t["yR+oDD"], {
                helpCenterLink: er.A.getArticleURL(W.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            S = (0, s.jsx)(eC.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: ty.YL,
                position: "right",
                children: (e) =>
                    (0, s.jsx)("div", {
                        ...e,
                        className: ty.V_,
                        children: (0, s.jsx)("div", { className: ty.eL, children: (0, s.jsx)(eV.A, { text: T }) }),
                    }),
            });
        }
        return (0, s.jsx)(E.f5, {
            value: a,
            children: (0, s.jsx)(tV.Provider, {
                value: {
                    headingText: g,
                    headingTop: S,
                    showPill: h,
                    shouldShowChurnVariant: _,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: r,
                    buttonVisibilityRef: n,
                },
                children: (0, s.jsx)(tF, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: m,
                }),
            }),
        });
    };
var tH = n(820284),
    tY = n(742589),
    tW = n(909536),
    tK = n(392943),
    t$ = n(876587),
    tz = n(400669),
    tq = n(680023),
    tZ = n(22591);
let tX = function () {
    let e = (0, tW.Gh)("nitro_home_header"),
        t = a.useRef(null);
    return (0, s.jsxs)(tH.A, {
        section: W.JJy.NAVIGATION,
        children: [
            (0, s.jsx)(tY.A, {
                className: l()(tq.TQ, tZ.C$),
                transparent: !0,
                role: "navigation",
                children: (0, s.jsxs)("div", {
                    className: tq.Wc,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tZ.wk,
                            children: [
                                (0, s.jsx)(ev.t, { colorClass: tZ.tr }),
                                (0, s.jsx)("span", {
                                    role: "img",
                                    "aria-label": z.intl.string(z.t.Ipxkog),
                                    className: tZ.Ss,
                                    children: (0, s.jsx)(tK.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, s.jsxs)("div", {
                                className: tq.MQ,
                                children: [
                                    (0, s.jsx)(tz.l, {
                                        ref: t,
                                        size: "sm",
                                        location: p.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, s.jsx)(eg.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, s.jsx)(t$.O, { targetElementRef: t, body: z.intl.string(z.t.EqUw7K) }),
        ],
    });
};
var tQ = n(308186),
    tJ = n(717421),
    t0 = n(842300),
    t1 = n(67423);
let t2 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: a } = e,
        { analyticsLocations: o } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, tJ.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(tQ.animated.div, {
        className: l()(t0.iE, { [t0.q4]: !t }),
        style: u,
        children: (0, s.jsxs)("div", {
            className: t0.iJ,
            children: [
                (0, s.jsx)("img", { alt: "", src: t1, className: t0.oU }),
                (0, s.jsxs)("div", {
                    className: t0.iQ,
                    children: [
                        (0, s.jsx)(D.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: z.intl.format(z.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: z.intl.format(z.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eM.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(P.$, {
                    variant: "expressive",
                    icon: ev.t,
                    size: "md",
                    text: z.intl.string(z.t.zrCzVB),
                    onClick: () =>
                        void (0, M.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("66994"),
                                n.e("94161"),
                                n.e("13051"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, s.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: o,
                                    initialStep: ti.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var t3 = n(761508),
    t6 = n(449543);
function t4(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t5(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t7(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var t8 = n(345394);
function t9(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: t8.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function ne(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nt(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nn(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function ni(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nr(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var ns = n(661531),
    na = n(996682);
function no(e) {
    let {
        color: t = ns.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, na.A)({ "aria-label": n, "aria-hidden": i, role: r }),
        width: a,
        height: o,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, s.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, s.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, s.jsx)("defs", {
                children: (0, s.jsx)("clipPath", {
                    id: "a",
                    children: (0, s.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function nl(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 162 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nu = n(78701);
function nc(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: nu.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nd = n(462887),
    n_ = n(736653),
    nh = n(259065),
    nf = n(206835),
    np = n(976860),
    nE = n(591179),
    nm = n(462463),
    ng = n(878784),
    nA = n(425713),
    nI = n(696292),
    nT = n(975807),
    nS = n(562819),
    ny = n(892035),
    nC = n(793943),
    nN = n(95035),
    nv = n(532794),
    nR = n(192444),
    nO = n(617986),
    nb = n(862990),
    nD = n(892227),
    nL = n(81466),
    nw = n(318254),
    nM = n(587416),
    nP = n(170463);
let nx = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, nD.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, s.jsxs)("div", {
        className: nP.kL,
        children: [
            null != n &&
                (0, s.jsxs)("div", {
                    className: nP.nM,
                    children: [
                        (0, s.jsxs)("div", {
                            className: nP.Pf,
                            children: [
                                (0, s.jsx)(nL.C, { size: "sm", color: ns.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: z.intl.string(nM.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: z.intl.format(nM.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, s.jsx)("div", { className: nP.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, s.jsxs)("div", {
                    className: nP.nM,
                    children: [
                        (0, s.jsxs)("div", {
                            className: nP.Pf,
                            children: [
                                (0, s.jsx)(nw.C, { size: "sm", color: ns.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: z.intl.string(nM.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: z.intl.format(nM.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nk = n(655752),
    nU = n(764231),
    nG = n(627380),
    nF = n(30084),
    nV = n(455873),
    nB = n(714206),
    nj = n(88001),
    nH = n(758836),
    nY = n(190107),
    nW = n(963458),
    nK = n(853903),
    n$ = n(817577);
let nz =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    nq =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nZ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nX() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, nE.X)("useWhatsNewPerkCards"),
        i = (0, nb.O9)(),
        { logitechCard: r, steelseriesCard: o } = eh(),
        u = (0, L.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, ny.z$)("useWhatsNewPerkCards"),
        _ = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        h = _?.hasActiveTrial ?? !1,
        f = (0, nm.A)({ analyticsLocations: e }),
        m = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nh.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nS.L)({ analyticsLocations: e }),
            );
        }, [e]),
        A = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []);
    function T() {
        (0, nT.A)(nj.TE);
    }
    let S = (0, a.useCallback)(() => {
            h
                ? (0, M.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, s.jsx)(e, { ...t });
                  })
                : (0, nv.A)({
                      subscriptionTier: K.pe.TIER_2,
                      initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, h]),
        C = (function (e) {
            let { fractionalState: t } = (0, eb.A)(),
                n = t === K.xc.FP_ONLY,
                i = (0, ng.$F)(),
                r = (0, ng.Xb)(),
                s = i?.status === ng.Wo.UPCOMING || n,
                o = (0, nA.N)(i?.id),
                u = (function () {
                    let e = (0, ng.$F)(),
                        t = (0, nk.P)(),
                        n = (0, ng.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = e9()(),
                        r = e9()(n),
                        s = e.status === ng.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                d = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion) && !s,
                _ = (0, nG.t)(),
                h = (0, nk.P)();
            return (0, a.useMemo)(() => {
                let t,
                    a = null != h ? z.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nU.T)(K.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === ng.Wo.UPCOMING
                              ? z.intl.formatToPlainString(z.t.a1eKDi, { days: _?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return z.intl.formatToPlainString(z.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return z.intl.formatToPlainString(z.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(_, a) ??
                                (0, nU.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let c = null;
                return (
                    null != o ? (c = s || d ? o.standard : o.ambientLarge) : n && (c = nB),
                    {
                        id: B.TENURE_BADGE_CARD_ID,
                        title: null != i ? z.intl.string(i.nameUnformattedNitro) : n ? z.intl.string(z.t.tx9Fvw) : "",
                        pillText: z.intl.string(z.t["jyYgZ+"]),
                        primaryAsset: c,
                        primaryAssetClassName: l()(nV.pq, { [nV.n6]: s, [nV.kE]: d }),
                        caption: null != r ? z.intl.formatToPlainString(z.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: z.intl.string(z.t.jVcuVY),
                        onCtaClick: () => (0, nF.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, o, s, d, r, u, n, _, h, e]);
        })(e),
        { shouldShowBonusOrbsUX: N, multiplier: v } = (0, nR.lk)(nY.rE.NITRO_HOME_MARKETING),
        { isEligible: R, programReward: O } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        b = R && null != O && null != O.reward_amount && O.reward_amount > 0;
    return (0, a.useMemo)(() => {
        let e = [
                u ? null : r,
                u ? null : o,
                b
                    ? {
                          id: B.NITRO_ORBS_REWARDS_CARD_ID,
                          title: z.intl.string(nM.default.hx5AFp),
                          description: z.intl.format(nM.default.wq3CF2, { orbsCount: O.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: l()(nK.lH, nK.yK),
                          footerContent: (0, s.jsx)(nx, {}),
                          ctaText: z.intl.string(nM.default.BxjHiu),
                          onCtaClick: () => (0, np.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.ORBS)),
                      }
                    : null,
                N
                    ? {
                          id: B.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: z.intl.string(z.t.Csf5Ol),
                          description: z.intl.format(z.t.NpUfej, { bonusOrbMultiplier: v }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: z.intl.string(z.t.jVcuVY),
                          onCtaClick: () => (0, nO.navigateToQuestHome)({ fromContent: nI.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: nK.Nf,
                      }
                    : null,
                i
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: z.intl.string(nW.default.YkvksF),
                          description: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  z.intl.formatToPlainString(nW.default.JlyGQj, {
                                      totalSeats: nj.aw,
                                      premiumGroupProductName: (0, nj.DP)(),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: nK.LF,
                                      children: (0, s.jsx)(nN.A, {
                                          onClick: T,
                                          children: z.intl.string(nW.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: z.intl.string(z.t.oW0eUd),
                          primaryAsset: n$,
                          ctaIcon: ev.t,
                          ctaIconPosition: "start",
                          ctaText: z.intl.string(z.t.IJI7yk),
                          onCtaClick: S,
                      }
                    : null,
                {
                    id: B.DISPLAY_NAME_STYLES_CARD_ID,
                    title: z.intl.string(z.t.OLtTrt),
                    description: z.intl.string(z.t["di/pXR"]),
                    onCtaClick: t ? f : m,
                    ctaText: z.intl.string(z.t.jVcuVY),
                    primaryAsset: nz,
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: z.intl.string(z.t.acc6h6),
                    description: z.intl.formatToPlainString(z.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nZ,
                    ctaText: z.intl.string(z.t.jVcuVY),
                    onCtaClick: () => {
                        (0, nC.nf)(nC.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: B.PERMADECOS_CARD_ID,
                          title: z.intl.string(z.t.L14NZN),
                          description: z.intl.string(z.t.eCZkAI),
                          primaryAsset: (0, s.jsx)(nc, { alt: "", ariaHidden: !0 }),
                          ctaText: z.intl.string(z.t.jVcuVY),
                          onCtaClick: t ? f : g,
                      },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: z.intl.string(z.t["GU+wqh"]),
                    description: z.intl.string(z.t["1uPk1Z"]),
                    primaryAsset: nq,
                    ctaText: z.intl.string(z.t.y9TxXV),
                    onCtaClick: A,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            a = n ? 5 : 6;
        return (
            e.splice(+!!n, 0, C),
            d &&
                e.splice(1, 0, {
                    id: B.PROFILE_FRAMES_CARD_ID,
                    title: z.intl.string(z.t.SGBDnu),
                    description: z.intl.string(z.t.cMgegQ),
                    pillText: z.intl.string(z.t.y2b7CA),
                    primaryAsset:
                        "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                    primaryAssetClassName: l()(nK.lH, nK.yK),
                    ctaText: z.intl.string(z.t.jVcuVY),
                    onCtaClick: () => (0, np.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.PROFILE_FRAMES)),
                }),
            e.length > a && e.splice(a, e.length - a),
            e
        );
    }, [C, b, O, i, N, v, m, A, g, S, f, t, r, o, u, d]);
}
var nQ = n(355097),
    nJ = n(64514),
    n0 = n(121818),
    n1 =
        (((r = {}).BEST_OF_NITRO = "bestof"),
        (r.APPEARANCE_STYLE = "appearance"),
        (r.UPGRADES = "upgrades"),
        (r.VIP_EXTRAS = "vip"),
        r);
let n2 = [
    { id: "bestof", label: () => z.intl.string(z.t.q1u7nQ) },
    { id: "appearance", label: () => z.intl.string(z.t.CUnZkZ) },
    { id: "upgrades", label: () => z.intl.string(z.t.KC5q8v) },
    { id: "vip", label: () => z.intl.string(z.t.DjEAcv) },
];
var n3 = n(533407);
function n6(e) {
    e.stopPropagation();
}
function n4(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, n_.DP)(),
                t = (0, nE.X)("useFavoritesPerkCards"),
                n = (0, ng.Lh)(),
                i = (0, nA.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, nf.A)({ scrollPosition: nQ._F.TRY_IT_OUT, analyticsLocations: r }),
                l = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                c = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, a.useCallback)(() => {
                    (0, np.pX)(W.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, nm.A)({ analyticsLocations: r }),
                f = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, nh.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                m = nX(),
                g = (0, a.useMemo)(() => m.map((e) => e?.id), [m]),
                A = (0, a.useMemo)(
                    () => [
                        {
                            id: B.SERVER_BOOSTS_CARD_ID,
                            title: z.intl.formatToPlainString(z.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: z.intl.formatToPlainString(z.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, s.jsx)(t4, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.PROFILES_CARD_ID,
                            title: z.intl.string(z.t.xDRab3),
                            description: z.intl.string(z.t.yn6fWA),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: t ? h : o,
                            primaryAsset: (0, s.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.HD_VIDEO_CARD_ID,
                            title: z.intl.string(z.t["/mQ5gg"]),
                            description: z.intl.string(z.t["7WwAXh"]),
                            primaryAsset: (0, s.jsx)(t7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CLIENT_THEMES_CARD_ID,
                            title: z.intl.string(z.t.acc6h6),
                            description: z.intl.formatToPlainString(z.t.WQazjs, { themeCount: 20 }),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nZ,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.MORE_EMOJIS_CARD_ID,
                            title: z.intl.string(z.t.D8vIDT),
                            description: z.intl.string(z.t.DRMecB),
                            primaryAsset: (0, s.jsx)(t9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.LARGE_UPLOADS_CARD_ID,
                            title: z.intl.string(z.t.nL1WZV),
                            description: z.intl.formatToPlainString(z.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, s.jsx)(ne, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CUSTOM_APP_ICONS_CARD_ID,
                            title: z.intl.string(z.t["GU+wqh"]),
                            description: z.intl.string(z.t["1uPk1Z"]),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nq,
                            categories: ["appearance"],
                        },
                        {
                            id: B.ENTRANCE_SOUNDS_CARD_ID,
                            title: z.intl.string(z.t.WJfCPi),
                            description: z.intl.string(z.t.liQKJR),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: B.DISPLAY_NAME_STYLES_CARD_ID,
                            title: z.intl.string(z.t.OLtTrt),
                            description: z.intl.string(z.t["di/pXR"]),
                            onCtaClick: t ? h : f,
                            ctaText: z.intl.string(z.t.jVcuVY),
                            primaryAsset: nz,
                            categories: ["appearance"],
                        },
                        {
                            id: B.CUSTOM_SOUNDS_CARD_ID,
                            title: z.intl.string(z.t["Cu/oFd"]),
                            description: z.intl.string(z.t.czj2aa),
                            primaryAsset: (0, s.jsx)(nt, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SPECIAL_STICKERS_CARD_ID,
                            title: z.intl.string(z.t.MQoVeb),
                            description: z.intl.string(z.t.HGCLZX),
                            primaryAsset: (0, s.jsx)("div", {
                                className: nK.Uc,
                                children: (0, s.jsx)(nn, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SUPER_REACTIONS_CARD_ID,
                            title: z.intl.string(z.t.qERvAA),
                            description: z.intl.string(z.t.WkUWzx),
                            primaryAsset: (0, s.jsx)(ni, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.VIDEO_BACKGROUNDS_CARD_ID,
                            title: z.intl.string(z.t.ssVDYQ),
                            description: z.intl.string(z.t.aUSRMa),
                            primaryAsset: (0, nd.M)(e) ? nJ : n0,
                            categories: ["upgrades"],
                        },
                        {
                            id: B.EARLY_ACCESS_CARD_ID,
                            title: z.intl.string(z.t["g/KRY6"]),
                            description: z.intl.string(z.t.JzAmJc),
                            primaryAsset: (0, s.jsx)(nr, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.BADGE_CARD_ID,
                            title: z.intl.string(z.t.Bn3CtB),
                            description: z.intl.string(z.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, s.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, s.jsx)(no, { color: ns.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: z.intl.string(z.t["MTD+7w"]),
                            description: z.intl.string(z.t.Bhs0s6),
                            ctaText: z.intl.string(z.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, s.jsx)(nl, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.PERMADECOS_CARD_ID,
                            title: z.intl.string(z.t.L14NZN),
                            description: z.intl.string(z.t.eCZkAI),
                            primaryAsset: (0, s.jsx)(nc, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, o, l, u, c, d, _, f, h, t],
                );
            return (0, a.useMemo)(() => A.filter((e) => null != e && !g.includes(e.id)), [A, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [r, o] = (0, a.useState)(i?.categories[0] ?? n1.BEST_OF_NITRO),
        l = (0, a.useMemo)(() => n.filter((e) => null != e && e.categories.includes(r)), [n, r]);
    return (0, s.jsxs)("div", {
        className: n3.uW,
        children: [
            (0, s.jsx)(D.D, { variant: "display-sm", className: n3.R_, children: z.intl.string(z.t["Uh3+CA"]) }),
            (0, s.jsx)(t3.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: o,
                className: n3.Lq,
                "aria-label": z.intl.string(z.t["Uh3+CA"]),
                children: n2.map((e) =>
                    (0, s.jsx)(t3.V.Item, { id: e.id, className: n3.IC, children: e.label() }, e.id),
                ),
            }),
            (0, s.jsx)(
                t6.A,
                {
                    gap: 20,
                    className: n3.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, s.jsx)(
                                Q.S,
                                { ...e, glowing: t === e.id, containerClassName: n3.Ui, onFocus: n6 },
                                e.id,
                            );
                    }),
                },
                r,
            ),
        ],
    });
}
var n5 = n(723474);
let n7 = function (e) {
    let { className: t } = e,
        n = (0, n_.DP)();
    return (0, s.jsx)("img", {
        className: l()(n5.D, t),
        src: (0, nd.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var n8 = n(177934);
let n9 = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, s.jsxs)("div", {
              className: l()(n8.kL, n8.Gd, n8.Eg),
              children: [(0, s.jsx)(n7, {}), (0, s.jsx)(tX, {}), i],
          })
        : (0, s.jsx)(em.h, { color: "nitro-pink", className: l()(n8.kL, n8.Gd), offsetBottom: n, children: i });
};
function ie(e) {
    let { glowingPerkId: t = null } = e,
        n = nX();
    return (0, s.jsx)(ei, {
        sectionClassName: en.uW,
        heading: (0, s.jsx)(D.D, { variant: "display-sm", className: en.R_, children: z.intl.string(z.t.Aw5DRm) }),
        grid: (0, s.jsx)(s.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, s.jsx)(
                    Q.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: l()(en.Nr, { [en.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var it = n(994763),
    ii = n(79119);
let ir = "section",
    is = "perk",
    ia = (e) => {
        let { userId: t } = e,
            n = (0, N.ds)(),
            { isInNitroHomeHeaderTreatment: i } = (0, v.jy)("nitro_member_hub_header"),
            r = (0, u.zy)();
        a.useEffect(() => {
            f.h.wait(async () => {
                let e = [(0, A.Ay)()];
                null != t && e.push((0, S.A)(t)), await Promise.all(e);
            });
        }, [t]),
            a.useEffect(() => {
                V(!0);
            }, []),
            (0, O.j)(),
            (0, g.P)(m.b);
        let o = a.useRef(null),
            D = a.useRef(null),
            L = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            { isReady: w, programReward: M } = (0, I.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: P,
                glowingSectionId: x,
                glowingPerkId: k,
                scrollBlock: U,
                scrollInline: G,
            } = a.useMemo(() => {
                let e = new URLSearchParams(r.search),
                    t = e.get(is),
                    n = e.get(ir);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [r.search]);
        (0, it.z)(P ?? "", null != P, U, G);
        let [F, V] = a.useState(!1),
            B = (0, R.p)(),
            j = a.useRef(null),
            [H, Y] = a.useState(!1),
            $ = null != B && null != L && L.status === W.Dmq.CANCELED,
            q = (0, b.iU)(K.gD.PREMIUM_MONTH_TIER_2, B, L),
            Z = !H && $,
            X = null != L && L.status === W.Dmq.CANCELED,
            Q = i && !n && !X,
            { analyticsLocations: J } = (0, E.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ee, et] = a.useState(!1);
        return null != (0, c.bG)([T.A], () => (null != t ? T.A.getUserProfile(t) : null)) && (w || null != M)
            ? (0, s.jsxs)(h.Gt, {
                  className: n8.xW,
                  ref: o,
                  children: [
                      (0, s.jsx)(n9, {
                          shouldRenderNitroHomeHeaderExperiment: Q,
                          gradientOffsetBottom: n ? 0.55 : 0.8,
                          children: (0, s.jsxs)(E.f5, {
                              value: J,
                              children: [
                                  (0, s.jsx)(d.L, {
                                      innerRef: j,
                                      onChange: (e) => Y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, s.jsx)(tj, {
                                          buttonVisibilityRef: j,
                                          className: n8.v1,
                                          userDiscountOffer: B,
                                          discountedPrice: q,
                                      }),
                                  }),
                                  (0, s.jsx)(eE, { glowingPerkId: k, glowingSectionId: x }),
                                  (0, s.jsx)(ie, { glowingPerkId: k }),
                                  (0, s.jsx)(n4, { glowingPerkId: k }),
                                  (0, s.jsx)(eI, {
                                      className: n8.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: W.liQ.NITRO_HOME, section: W.JJy.GIFT_BANNER },
                                  }),
                                  (0, s.jsx)("div", { className: n8.hz }),
                                  (0, s.jsx)(d.L, {
                                      innerRef: D,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (C.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: J,
                                              }),
                                              et(!0));
                                      },
                                      children: (0, s.jsx)("div", { ref: D, className: n8._Z }),
                                  }),
                                  (0, s.jsx)("img", {
                                      src: ii,
                                      className: n8.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: z.intl.string(z.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      $ &&
                          null != q &&
                          (0, s.jsx)(t2, {
                              isVisible: Z && F,
                              premiumSubscription: L,
                              churnDiscountOffer: B,
                              discountedPrice: q,
                          }),
                  ],
              })
            : Q
              ? (0, s.jsxs)("div", {
                    className: l()(n8.kL, n8.Lq, n8.TN, n8.Eg),
                    children: [
                        (0, s.jsx)(tX, {}),
                        (0, s.jsx)("div", { className: n8.S, children: (0, s.jsx)(_.y, {}) }),
                    ],
                })
              : (0, s.jsx)("div", { className: l()(n8.kL, n8.Lq), children: (0, s.jsx)(_.y, {}) });
    };
