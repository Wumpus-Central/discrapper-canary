"use strict";
n.d(t, { Ay: () => is, WU: () => ir, x6: () => ii }), n(321073), n(323874), n(14289), n(35956);
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
    $ = n(237146),
    z = n(375708),
    q = n(74776);
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
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
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
var Q = n(486858);
function J(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, Y.F)(),
        r =
            i.kind === Y.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
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
        ...r,
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
var et = n(367791),
    en = n(672193);
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
    eu = n(852218),
    ec = n(382259),
    ed = n(962995);
function e_() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, eo.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = ea.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, es.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, es.S9)({ location: "useHardwarePartnerPerkCards" }),
        o = (0, L.l)("useHardwarePartnerPerkCards"),
        { currentDate: l, nDaysInMonth: u } = (0, a.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, a.useMemo)(() => {
        let a = o ? void 0 : z.intl.string(z.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: B.LOGITECH_3PP_CARD_ID,
                      title: z.intl.string(ed.default.OlObRa),
                      description: z.intl.format(ed.default.ZGOJ8R, {
                          discountPercent: eo.aW,
                          termsUrl: er.A.getArticleURL(W.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: l.getDate() / u,
                      ctaText: z.intl.string(z.t.w7s5Qr),
                      onCtaClick: () => (0, el.P)({ partnerId: eu.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: a,
                      caption: (0, s.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: eu.XY },
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
                                    partnerName: eu.CD[eu.Cs].label,
                                    helpdeskArticle: er.A.getArticleURL(W.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      pillText: a,
                      caption: (0, s.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: l.getDate() / u,
                      ctaText: z.intl.string(z.t.w7s5Qr),
                      onCtaClick: () => (0, ec.u)({ analyticsLocations: e, partnerIds: [eu.KS, eu.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: eu.KS },
                  }
                : null,
        };
    }, [o, e, l, t, u, n, i, r]);
}
var eh = n(102338);
let ef = "xgpp";
function ep(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, L.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: a } = e_();
    if (!i) return null;
    let o = null != r || null != a;
    return (0, s.jsx)(ei, {
        id: ef,
        sectionClassName: l()(eh.uW, eh.Uv, eh.qr),
        heading: (0, s.jsx)(D.D, {
            variant: "display-sm",
            className: l()(en.R_, et.U6),
            children: z.intl.string(z.t.NG1e6l),
        }),
        beforeGrid: (0, s.jsx)("div", { className: et.JE, children: (0, s.jsx)(X, { glowing: t === ef }) }),
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
var eE = n(315629),
    em = n(65470),
    eg = n(797221);
let eA = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, E.Ay)(n);
    return (0, s.jsx)(E.f5, {
        value: r,
        children: (0, s.jsxs)(eE.h, {
            className: l()(eg.kL, eg.pm, t),
            color: "purple",
            children: [
                (0, s.jsxs)("div", {
                    className: eg.FS,
                    children: [
                        (0, s.jsx)(D.D, {
                            variant: "heading-xxl/bold",
                            className: eg.R_,
                            children: z.intl.string(z.t.Ve9Ge6),
                        }),
                        (0, s.jsx)(k.E, { variant: "text-md/medium", children: z.intl.string(z.t.yQ06u1) }),
                        (0, s.jsx)("div", {
                            className: eg.SB,
                            children: (0, s.jsx)(em.A, {
                                buttonTextOverride: z.intl.string(z.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eg._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eI = n(877624);
let eT =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eS(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: eT,
        srcSet: `${eT} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var ey = n(502572),
    eC = n(331322),
    eN = n(403581),
    ev = n(775602),
    eR = n(366999),
    eO = n(531260),
    eb = n(780964),
    eD = n(766075),
    eL = n(786300),
    ew = n(428262),
    eM = n(960851),
    eP = n(89366),
    ex = n(422936),
    ek = n(234419),
    eU = n(549996),
    eG = n(810660),
    eF = n(175569),
    eV = n(371764),
    eB = n(949964),
    ej = n(103411),
    eH = n(778712),
    eY = n(97808),
    eW = n(590251),
    eK = n(144165),
    e$ = n(854627),
    ez = n(427262),
    eq = n(851746),
    eZ = n(326084),
    eX = n(664654);
function eQ() {
    var e, t, n;
    let { referralSentUsers: i } = (0, eX.J)(),
        r = (0, c.bG)([eq.A], () => eq.A.getRecipientStatus()),
        s = (0, c.bG)([eq.A], () => eq.A.getHasEligibleFriends()),
        a = r.size === eX.Z,
        o =
            ((e = !1 !== s),
            (t = i.length),
            (n = r.size === eX.Z && [...r.values()].every((e) => e === eZ.aK.REDEEMED)),
            e
                ? t === eX.Z
                    ? n
                        ? z.intl.format(z.t["1aEjsH"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                        : z.intl.format(z.t["+u3AOO"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                    : z.intl.format(z.t["omMr+V"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) })
                : z.intl.format(z.t["zWhX/Q"], { helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var eJ = n(212737),
    e0 = n(849812);
let e1 = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        C.default.track(W.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                return (n) => (0, s.jsx)(e, { ...n, startingScreen: t });
            });
    },
    e2 = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, e$.A)({ userId: t.id, size: eH._3.SIZE_24 });
        return (0, s.jsx)(
            eY.eu,
            { className: e0.bj, src: n, "aria-label": (0, ez.mG)(t), size: eH._3.SIZE_24, ...i },
            t.id,
        );
    },
    e3 = (e) => {
        let { slotIndex: t } = e;
        return (0, s.jsx)("div", { className: e0.p, children: t });
    },
    e6 = (e) => {
        let { referralSentUsers: t, className: n } = e;
        return (0, s.jsx)("div", {
            className: l()(e0.L$, n),
            children: (() => {
                let e = [];
                for (let n = 0; n < eX.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, s.jsx)(e2, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, s.jsx)(e3, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    e4 = (e) => {
        let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
        return (0, s.jsx)(eW.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: i ?? e0.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: r ?? e0.e0,
            overlayClassName: t === eX.Z ? e0.ys : void 0,
            children: (0, s.jsx)(eK._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: n,
                width: n,
                zoomable: !1,
            }),
        });
    },
    e5 = (e) => {
        let { className: t } = e,
            { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = eQ();
        return (0, s.jsxs)("div", {
            className: l()(e0.kL, t),
            children: [
                (0, s.jsx)("div", { className: e0.G3, children: (0, s.jsx)(e4, { nReferralsSent: i }) }),
                (0, s.jsxs)("div", {
                    className: e0.IH,
                    children: [
                        (0, s.jsx)(e6, { referralSentUsers: n, className: e0.GV }),
                        (0, s.jsxs)("div", {
                            className: e0.n4,
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
                                e1({
                                    startingScreen: eJ.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e7 = n(989349),
    e8 = n.n(e7),
    e9 = n(496431),
    te = n(116689);
let tt = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, e9.A)(e8()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: a, minutes: o, seconds: u } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, s.jsxs)("div", {
        className: l()(te.Xl, n),
        children: [
            (0, s.jsx)(k.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: z.intl.string(z.t["/ARFVE"]),
            }),
            (0, s.jsx)("div", {
                className: te.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        className: te.bh,
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: te.kB,
                                                children: [
                                                    (0, s.jsx)("div", {
                                                        className: te.B2,
                                                        children: (0, s.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, s.jsx)("div", {
                                                        className: te.B2,
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
                                        className: te.cV,
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
var tn = n(473702),
    ti = n(609425),
    tr = n(660184),
    ts = n(287809),
    ta = n(12052);
function to() {
    let e = (0, c.bG)([ts.default], () => ts.default.getCurrentUser()),
        t = (0, ti.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, e$.A)({ userId: e?.id, size: eH._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, ez.mG)(e);
    return (0, s.jsxs)("div", {
        className: ta.kL,
        children: [
            (0, s.jsx)("div", {
                className: ta.my,
                children: (0, s.jsx)(eY.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: eH._3.SIZE_56,
                    "aria-label": a,
                    ...r,
                }),
            }),
            (0, s.jsx)("div", { className: ta.QC, children: (0, s.jsx)(tr.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tl = n(707554),
    tu = n(218199);
let tc = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, s.jsx)(tl.F, {
        forceLevel: 1,
        children: (0, s.jsx)(D.D, { className: l()(tu.w, t, i && tu.n), variant: "display-md", color: n, children: r }),
    });
};
var td = n(690093);
function t_(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = eQ();
    return (0, s.jsxs)("div", {
        className: l()(td.kL, t),
        children: [
            (0, s.jsx)("div", {
                className: td.G3,
                children: (0, s.jsx)(e4, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: td.HP,
                    ringClassName: td.pZ,
                }),
            }),
            (0, s.jsxs)("div", {
                className: td.IH,
                children: [
                    (0, s.jsxs)("div", {
                        className: td.n4,
                        children: [
                            (0, s.jsx)(D.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: z.intl.string(z.t.USo4s7),
                            }),
                            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, s.jsx)(e6, { referralSentUsers: n, className: td.t7 }),
                ],
            }),
            (0, s.jsx)(P.$, {
                variant: "primary",
                disabled: !1 === r || !0 === a,
                text: z.intl.string(z.t.Lm2nFc),
                onClick: () =>
                    e1({ startingScreen: eJ.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var th = n(702841),
    tf = n(676279),
    tp = n(20458),
    tE = n(141502);
let tm = (e) => {
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
        E = (0, th.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
        m = (0, tf.TM)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tE.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, s.jsx)(tp.A, {
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
var tg = n(43588);
let tA = (e) => {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, s.jsx)(tm, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: l()(tg.wG, n && tg.Vx),
        flyingWumpusAssetClassName: l()(tg.lu, n && tg.ov),
        boltContainerClassName: l()(tg.nJ, n && tg.Wc),
        hammerContainerClassName: l()(tg.Gj, n && tg.XA),
        keyContainerClassName: l()(tg.FV, n && tg.oZ),
        starContainerClassName: l()(tg.E1, n && tg.LN),
        boltAssetClassName: l()(tg.j7, n && tg.QN),
        hammerAssetClassName: l()(tg.Wv, n && tg.B9),
        keyAssetClassName: l()(tg.rs, n && tg.I1),
        starAssetClassName: l()(tg.OY, n && tg.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tI = (((i = {}).MORNING = "morning"), (i.AFTERNOON = "afternoon"), (i.EVENING = "evening"), i);
function tT() {
    let e,
        t = { [tI.MORNING]: z.t["Wvc/I+"], [tI.AFTERNOON]: z.t["d+0STx"], [tI.EVENING]: z.t.CqsxKI };
    return z.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tI.MORNING : e >= 12 && e < 17 ? tI.AFTERNOON : tI.EVENING],
    );
}
var tS = n(97584),
    ty = n(202241);
let tC = (e) => {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, s.jsx)(tm, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: l()(ty.wG, n && ty.Vx),
            flyingWumpusAssetClassName: l()(ty.lu, n && ty.ov),
            boltContainerClassName: l()(ty.nJ, n && ty.Wc),
            hammerContainerClassName: l()(ty.Gj, n && ty.XA),
            keyContainerClassName: l()(ty.FV, n && ty.oZ),
            starContainerClassName: l()(ty.E1, n && ty.LN),
            boltAssetClassName: l()(ty.j7, n && ty.QN),
            hammerAssetClassName: l()(ty.Wv, n && ty.B9),
            keyAssetClassName: l()(ty.rs, n && ty.I1),
            starAssetClassName: l()(ty.OY, n && ty.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tN = {
        [v.CL.TREATMENT_A]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eG.U)(!o),
                _ = tT();
            return (0, s.jsx)("div", {
                className: l()(tS.kL, tS.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tS.W2, tS.HQ),
                    ref: u,
                    children: [
                        (0, s.jsxs)(eC.B, {
                            align: "start",
                            gap: 32,
                            className: tS.ZU,
                            children: [
                                i && n,
                                (0, s.jsxs)(eC.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(tc, {
                                            className: tS.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, s.jsx)(to, {}),
                                    ],
                                }),
                                a && (0, s.jsx)(t_, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tS.y3,
                            children: (0, s.jsx)(tA, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [v.CL.TREATMENT_B]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eG.U)(!o),
                _ = z.intl.string(z.t.ifwQZb);
            return (0, s.jsx)("div", {
                className: l()(tS.kL, tS.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tS.W2, tS.m8),
                    ref: u,
                    children: [
                        (0, s.jsxs)(eC.B, {
                            align: "start",
                            gap: 32,
                            className: tS.Y0,
                            children: [
                                i && n,
                                (0, s.jsx)("div", {
                                    className: l()(tS.N1, tS.v8),
                                    children: (0, s.jsx)(tc, {
                                        className: tS.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                a && (0, s.jsx)(t_, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tS.BF,
                            children: (0, s.jsx)(tC, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [v.CL.TREATMENT_C]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = tT();
            return (0, s.jsx)("div", {
                className: l()(tS.kL, tS.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tS.W2, tS.J_),
                    children: [
                        (0, s.jsxs)(eC.B, {
                            align: "start",
                            gap: 32,
                            className: tS.$S,
                            children: [
                                i && n,
                                (0, s.jsxs)(eC.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(tc, {
                                            className: tS.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, s.jsx)(to, {}),
                                    ],
                                }),
                            ],
                        }),
                        a && (0, s.jsx)("div", { className: tS.Pq, children: (0, s.jsx)(t_, {}) }),
                    ],
                }),
            });
        },
    };
function tv(e) {
    let { treatment: t, ...n } = e,
        i = tN[t];
    return null != i ? (0, s.jsx)(i, { ...n }) : null;
}
var tR = n(652533),
    tO = n(447764),
    tb = n(180894);
let tD = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, th.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: tO.BI,
                children: (0, s.jsx)(tR.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tR.$G },
                    yAxisAnimationData: { range: 20, duration: tR.Mp, path: tR.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tR.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, s.jsx)("img", { src: tb.A, alt: "", className: tO.Q }),
                }),
            }),
            (0, s.jsx)(tp.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tO.Gj,
                keyContainerClassName: tO.FV,
                starContainerClassName: tO.E1,
                hammerAssetClassName: tO.Wv,
                keyAssetClassName: tO.rs,
                starAssetClassName: tO.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var tL = n(725807),
    tw = n(774774),
    tM = n(975916);
let tP = () => {
    let e = { section: W.JJy.REVERSE_TRIAL_BANNER };
    return (0, s.jsxs)("div", {
        className: tM.vK,
        children: [
            (0, s.jsx)(tw.e4, { text: z.intl.string(z.t.qYKftX), className: tM.Io }),
            (0, s.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tM._u,
            }),
            (0, s.jsx)("div", {
                className: tM.IP,
                children: (0, s.jsx)(k.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: z.intl.format(z.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, s.jsx)(tL.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tM.aA,
                shinyButtonClassName: tM.Xp,
            }),
        ],
    });
};
var tx = n(18671);
let tk = () => {
        let e = (0, th.bG)([ev.Ay], () => ev.Ay.useReducedMotion);
        return (0, s.jsx)(tp.A, {
            isMotionReduced: e,
            blurScale: 0.4,
            starContainerClassName: tx.cI,
            hammerContainerClassName: tx.qg,
            keyContainerClassName: tx.h2,
            boltContainerClassName: tx.Bz,
            starAssetClassName: tx.ks,
            hammerAssetClassName: tx.GY,
            keyAssetClassName: tx.p4,
            boltAssetClassName: tx.vy,
        });
    },
    tU = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            r = (0, N.Zb)(t);
        return (0, s.jsx)("div", {
            className: l()(tS.kL, n),
            ref: i,
            children: (0, s.jsxs)("div", {
                className: tS.ap,
                children: [
                    (0, s.jsxs)(eC.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, s.jsx)(eF.A, { text: z.intl.string(z.t.yhldRB) }),
                            (0, s.jsxs)(eC.B, {
                                align: "start",
                                gap: 12,
                                className: tS.rG,
                                children: [
                                    (0, s.jsx)(tc, { children: z.intl.format(z.t.FwjP6W, { days: r }) }),
                                    (0, s.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: z.intl.string(z.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(eC.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, s.jsx)(j.A, {
                                        size: "md",
                                        buttonTextOverride: z.intl.string(z.t["2+luBl"]),
                                        iconOverride: eN.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, s.jsx)(P.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: z.intl.string(z.t.Af7ye6),
                                        onClick: () => (0, eD.openUserSettings)(eb.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: tS.Hk,
                        children: [(0, s.jsx)(eS, { alt: "", width: "100%", height: "auto" }), (0, s.jsx)(tk, {})],
                    }),
                ],
            }),
        });
    },
    tG = (e) => {
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
            } = tV(),
            { treatment: A, isInNitroHomeHeaderTreatment: I } = (0, v.jy)("subscriber_home_hero"),
            { analyticsLocations: T } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            S = (0, eU.c)(eI.C.MARKETING_PAGE_BANNER),
            y = null != h && h.status === W.Dmq.CANCELED,
            C = I && !y,
            N = null;
        null != S && "marketingPageBanner" === S.properties.properties.oneofKind
            ? (N = (0, s.jsx)(eV.x, {
                  componentId: S.id,
                  promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
              }))
            : i
              ? (N = (0, s.jsx)(eB.A, { variant: eB.c.SUBSCRIBER_HOME }))
              : r
                ? (N = (0, s.jsx)(tP, {}))
                : a && !C && (N = (0, s.jsx)(e5, {}));
        let R = (0, ek.V)(),
            O = (0, ex.O)(),
            D = (0, b.U9)(O, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            L = null != h && h.status !== W.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            w = (0, eO.A)(),
            x = w.isFractionalPremiumActive && !L && null == N && !_,
            U = (0, c.bG)([ev.Ay], () => ev.Ay.useReducedMotion),
            { visibilityPercentageRef: G, visibilityPercentage: F } = (0, eG.U)(!U);
        return r
            ? (0, s.jsx)(tU, { fpEndsAt: w.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : C
              ? (0, s.jsx)(tv, {
                    treatment: A,
                    className: t,
                    headingTop: u,
                    showPill: d,
                    buttonVisibilityRef: g,
                    shouldShowReferralProgressBar: a,
                })
              : (0, s.jsx)("div", {
                    className: l()(tS.kL, t),
                    "data-testid": "subscriber-nitro-home-hero-header",
                    ref: g,
                    children: (0, s.jsxs)("div", {
                        className: tS.Qs,
                        ref: G,
                        children: [
                            d && u,
                            (0, s.jsxs)("div", {
                                className: tS.N1,
                                children: [
                                    (0, s.jsx)(tD, { containerVisibilityPercentage: F }),
                                    _ &&
                                        f?.expiresAt != null &&
                                        (0, s.jsx)(tt, { expiresAt: f.expiresAt.toISOString(), className: tS.IZ }),
                                    (0, s.jsx)(tc, {
                                        children:
                                            _ && null != f
                                                ? z.intl.format(z.t["3yZP0G"], { percent: f.discount.amount })
                                                : o,
                                    }),
                                    _ &&
                                        null != f &&
                                        null != m &&
                                        (0, s.jsx)(k.E, {
                                            className: tS.jG,
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            children: z.intl.format(z.t["3Q4wCy"], {
                                                discountedPrice: m,
                                                billingPeriod: (0, ew.Ke)(f.discount.userUsageLimitInterval),
                                                numMonths: f.discount.userUsageLimit,
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: x || _ ? tS.UJ : void 0,
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
                                            icon: eN.t,
                                            size: "md",
                                            text: z.intl.string(z.t.zrCzVB),
                                            onClick: () => {
                                                var e;
                                                return (
                                                    (e = tn.g.CONFIRM_DISCOUNT),
                                                    void (0, M.openModalLazy)(async () => {
                                                        let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                            await Promise.all([
                                                                n.e("23866"),
                                                                n.e("33730"),
                                                                n.e("90862"),
                                                                n.e("29877"),
                                                                n.e("90266"),
                                                                n.e("32890"),
                                                                n.e("16918"),
                                                                n.e("91483"),
                                                                n.e("66434"),
                                                                n.e("74414"),
                                                                n.e("4394"),
                                                                n.e("85566"),
                                                                n.e("4207"),
                                                                n.e("16192"),
                                                                n.e("71413"),
                                                                n.e("59914"),
                                                                n.e("82655"),
                                                                n.e("76821"),
                                                                n.e("67687"),
                                                                n.e("55642"),
                                                                n.e("59760"),
                                                                n.e("67865"),
                                                                n.e("75029"),
                                                                n.e("56405"),
                                                                n.e("22513"),
                                                                n.e("75120"),
                                                                n.e("25508"),
                                                                n.e("22256"),
                                                                n.e("17303"),
                                                                n.e("45554"),
                                                                n.e("36761"),
                                                                n.e("69292"),
                                                                n.e("32993"),
                                                                n.e("98488"),
                                                                n.e("31591"),
                                                                n.e("9399"),
                                                                n.e("4704"),
                                                                n.e("85497"),
                                                                n.e("91024"),
                                                                n.e("33865"),
                                                                n.e("42309"),
                                                                n.e("29351"),
                                                                n.e("43233"),
                                                                n.e("85184"),
                                                                n.e("22796"),
                                                                n.e("4276"),
                                                                n.e("50180"),
                                                                n.e("37497"),
                                                                n.e("60193"),
                                                                n.e("53684"),
                                                                n.e("89050"),
                                                                n.e("88610"),
                                                                n.e("33087"),
                                                                n.e("4189"),
                                                                n.e("6026"),
                                                                n.e("1009"),
                                                                n.e("33287"),
                                                                n.e("19709"),
                                                                n.e("67458"),
                                                                n.e("58427"),
                                                                n.e("20642"),
                                                                n.e("29161"),
                                                                n.e("98180"),
                                                                n.e("41625"),
                                                                n.e("7959"),
                                                                n.e("63051"),
                                                                n.e("60717"),
                                                                n.e("70278"),
                                                                n.e("59494"),
                                                                n.e("55552"),
                                                                n.e("16860"),
                                                                n.e("2672"),
                                                                n.e("31135"),
                                                                n.e("55929"),
                                                                n.e("26128"),
                                                                n.e("11262"),
                                                                n.e("54483"),
                                                                n.e("33460"),
                                                                n.e("82314"),
                                                                n.e("41686"),
                                                                n.e("25677"),
                                                                n.e("85411"),
                                                                n.e("88804"),
                                                                n.e("13233"),
                                                                n.e("89001"),
                                                                n.e("54558"),
                                                                n.e("55990"),
                                                                n.e("73679"),
                                                                n.e("35538"),
                                                                n.e("73178"),
                                                                n.e("61274"),
                                                                n.e("41229"),
                                                                n.e("31592"),
                                                                n.e("28339"),
                                                                n.e("97638"),
                                                                n.e("22995"),
                                                                n.e("70141"),
                                                                n.e("1055"),
                                                                n.e("23036"),
                                                                n.e("3951"),
                                                                n.e("39865"),
                                                                n.e("50870"),
                                                                n.e("43608"),
                                                                n.e("29944"),
                                                                n.e("59731"),
                                                                n.e("40690"),
                                                                n.e("98275"),
                                                                n.e("72651"),
                                                                n.e("29363"),
                                                                n.e("88016"),
                                                                n.e("38886"),
                                                                n.e("84133"),
                                                                n.e("30240"),
                                                                n.e("510"),
                                                                n.e("90241"),
                                                                n.e("37271"),
                                                                n.e("49993"),
                                                                n.e("65813"),
                                                                n.e("8037"),
                                                                n.e("50748"),
                                                                n.e("1844"),
                                                                n.e("57016"),
                                                                n.e("45826"),
                                                                n.e("9396"),
                                                                n.e("53075"),
                                                                n.e("26564"),
                                                                n.e("77529"),
                                                                n.e("10061"),
                                                                n.e("57766"),
                                                                n.e("91552"),
                                                                n.e("69213"),
                                                                n.e("86650"),
                                                                n.e("52196"),
                                                                n.e("85899"),
                                                                n.e("61322"),
                                                                n.e("43031"),
                                                                n.e("22656"),
                                                                n.e("28379"),
                                                                n.e("41737"),
                                                                n.e("92330"),
                                                                n.e("53233"),
                                                                n.e("96901"),
                                                                n.e("49645"),
                                                                n.e("25339"),
                                                                n.e("84454"),
                                                                n.e("62426"),
                                                                n.e("1887"),
                                                                n.e("39995"),
                                                                n.e("25568"),
                                                                n.e("29272"),
                                                                n.e("97391"),
                                                                n.e("67332"),
                                                                n.e("57114"),
                                                                n.e("90059"),
                                                                n.e("53552"),
                                                                n.e("58127"),
                                                                n.e("816"),
                                                                n.e("43683"),
                                                                n.e("59303"),
                                                                n.e("31610"),
                                                                n.e("83893"),
                                                                n.e("56359"),
                                                                n.e("99501"),
                                                                n.e("85484"),
                                                                n.e("69425"),
                                                                n.e("16581"),
                                                                n.e("91680"),
                                                                n.e("57036"),
                                                                n.e("57174"),
                                                                n.e("86847"),
                                                                n.e("48226"),
                                                                n.e("88941"),
                                                                n.e("61379"),
                                                                n.e("25693"),
                                                                n.e("32606"),
                                                                n.e("28154"),
                                                                n.e("4369"),
                                                                n.e("34236"),
                                                                n.e("11523"),
                                                                n.e("10004"),
                                                                n.e("77473"),
                                                                n.e("53930"),
                                                                n.e("23353"),
                                                                n.e("18943"),
                                                                n.e("7167"),
                                                                n.e("62875"),
                                                                n.e("25279"),
                                                                n.e("39810"),
                                                                n.e("92789"),
                                                                n.e("57598"),
                                                                n.e("31390"),
                                                                n.e("37687"),
                                                                n.e("43039"),
                                                                n.e("26780"),
                                                                n.e("44265"),
                                                                n.e("48804"),
                                                                n.e("8304"),
                                                                n.e("84103"),
                                                                n.e("17225"),
                                                                n.e("30920"),
                                                                n.e("63095"),
                                                                n.e("70653"),
                                                                n.e("52266"),
                                                                n.e("53039"),
                                                                n.e("96123"),
                                                                n.e("92583"),
                                                                n.e("64615"),
                                                                n.e("31825"),
                                                                n.e("36320"),
                                                                n.e("97526"),
                                                                n.e("79525"),
                                                                n.e("82069"),
                                                                n.e("75134"),
                                                                n.e("1462"),
                                                                n.e("55184"),
                                                                n.e("74926"),
                                                                n.e("28866"),
                                                                n.e("50015"),
                                                                n.e("72442"),
                                                                n.e("54282"),
                                                                n.e("21574"),
                                                                n.e("90889"),
                                                                n.e("62931"),
                                                                n.e("18181"),
                                                                n.e("59880"),
                                                                n.e("14805"),
                                                                n.e("73547"),
                                                                n.e("99593"),
                                                                n.e("60658"),
                                                                n.e("55314"),
                                                                n.e("89094"),
                                                                n.e("6338"),
                                                                n.e("47834"),
                                                                n.e("47555"),
                                                                n.e("18573"),
                                                                n.e("29177"),
                                                                n.e("21435"),
                                                                n.e("61935"),
                                                                n.e("88990"),
                                                                n.e("21856"),
                                                                n.e("58038"),
                                                                n.e("32551"),
                                                                n.e("64046"),
                                                                n.e("43426"),
                                                                n.e("96443"),
                                                                n.e("65743"),
                                                                n.e("87079"),
                                                                n.e("88559"),
                                                                n.e("60177"),
                                                                n.e("25637"),
                                                                n.e("39665"),
                                                                n.e("23532"),
                                                                n.e("31644"),
                                                                n.e("89790"),
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
                                    (0, s.jsx)(em.A, {
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
    },
    [tF, tV] = (0, eL.A)(),
    tB = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, N.ds)(),
            l = (0, eM.cg)(),
            u = (0, eP.QQ)(),
            d = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            _ = null != d && d.status === W.Dmq.CANCELED && null != i,
            h = u && !_,
            f = z.intl.string(z.t.qYKftX),
            m = (0, ej.m)(),
            g = z.intl.string(z.t.ifwQZb),
            { fractionalState: A, endsAt: I } = (0, eO.A)(),
            T = (0, eR.Ay)(I, eR.yE.CREDITS_ENDS_IN),
            S = null;
        if (A === K.xc.NONE || o) S = (0, s.jsx)(eF.A, { text: f });
        else {
            h = !0;
            let e = z.intl.format(z.t["yR+oDD"], {
                helpCenterLink: er.A.getArticleURL(W.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            S = (0, s.jsx)(ey.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tS.YL,
                position: "right",
                children: (e) =>
                    (0, s.jsx)("div", {
                        ...e,
                        className: tS.V_,
                        children: (0, s.jsx)("div", { className: tS.eL, children: (0, s.jsx)(eF.A, { text: T }) }),
                    }),
            });
        }
        return (0, s.jsx)(E.f5, {
            value: a,
            children: (0, s.jsx)(tF.Provider, {
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
                children: (0, s.jsx)(tG, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: m,
                }),
            }),
        });
    };
var tj = n(820284),
    tH = n(742589),
    tY = n(909536),
    tW = n(392943),
    tK = n(876587),
    t$ = n(400669),
    tz = n(503255),
    tq = n(525311);
let tZ = () => {
    let e = (0, tY.Gh)("nitro_home_header"),
        t = a.useRef(null);
    return (0, s.jsxs)(tj.A, {
        section: W.JJy.NAVIGATION,
        children: [
            (0, s.jsx)(tH.A, {
                className: l()(tz.TQ, tq.C$),
                transparent: !0,
                role: "navigation",
                children: (0, s.jsxs)("div", {
                    className: tz.Wc,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tq.wk,
                            children: [
                                (0, s.jsx)(eN.t, { colorClass: tq.tr }),
                                (0, s.jsx)("span", {
                                    role: "img",
                                    "aria-label": z.intl.string(z.t.Ipxkog),
                                    className: tq.Ss,
                                    children: (0, s.jsx)(tW.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, s.jsxs)("div", {
                                className: tz.MQ,
                                children: [
                                    (0, s.jsx)(t$.l, {
                                        ref: t,
                                        size: "sm",
                                        location: p.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, s.jsx)(em.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, s.jsx)(tK.O, { targetElementRef: t, body: z.intl.string(z.t.EqUw7K) }),
        ],
    });
};
var tX = n(308186),
    tQ = n(717421),
    tJ = n(98812),
    t0 = n(67423);
let t1 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: a } = e,
        { analyticsLocations: o } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, tQ.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(tX.animated.div, {
        className: l()(tJ.iE, { [tJ.q4]: !t }),
        style: u,
        children: (0, s.jsxs)("div", {
            className: tJ.iJ,
            children: [
                (0, s.jsx)("img", { alt: "", src: t0, className: tJ.oU }),
                (0, s.jsxs)("div", {
                    className: tJ.iQ,
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
                                billingPeriod: (0, ew.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(P.$, {
                    variant: "expressive",
                    icon: eN.t,
                    size: "md",
                    text: z.intl.string(z.t.zrCzVB),
                    onClick: () =>
                        void (0, M.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("23866"),
                                n.e("33730"),
                                n.e("90862"),
                                n.e("29877"),
                                n.e("90266"),
                                n.e("32890"),
                                n.e("16918"),
                                n.e("91483"),
                                n.e("66434"),
                                n.e("74414"),
                                n.e("4394"),
                                n.e("85566"),
                                n.e("4207"),
                                n.e("16192"),
                                n.e("71413"),
                                n.e("59914"),
                                n.e("82655"),
                                n.e("76821"),
                                n.e("67687"),
                                n.e("55642"),
                                n.e("59760"),
                                n.e("67865"),
                                n.e("75029"),
                                n.e("56405"),
                                n.e("22513"),
                                n.e("75120"),
                                n.e("25508"),
                                n.e("22256"),
                                n.e("17303"),
                                n.e("45554"),
                                n.e("36761"),
                                n.e("69292"),
                                n.e("32993"),
                                n.e("98488"),
                                n.e("31591"),
                                n.e("9399"),
                                n.e("4704"),
                                n.e("85497"),
                                n.e("91024"),
                                n.e("33865"),
                                n.e("42309"),
                                n.e("29351"),
                                n.e("43233"),
                                n.e("85184"),
                                n.e("22796"),
                                n.e("4276"),
                                n.e("50180"),
                                n.e("37497"),
                                n.e("60193"),
                                n.e("53684"),
                                n.e("89050"),
                                n.e("88610"),
                                n.e("33087"),
                                n.e("4189"),
                                n.e("6026"),
                                n.e("1009"),
                                n.e("33287"),
                                n.e("19709"),
                                n.e("67458"),
                                n.e("58427"),
                                n.e("20642"),
                                n.e("29161"),
                                n.e("98180"),
                                n.e("41625"),
                                n.e("7959"),
                                n.e("63051"),
                                n.e("60717"),
                                n.e("70278"),
                                n.e("59494"),
                                n.e("55552"),
                                n.e("16860"),
                                n.e("2672"),
                                n.e("31135"),
                                n.e("55929"),
                                n.e("26128"),
                                n.e("11262"),
                                n.e("54483"),
                                n.e("33460"),
                                n.e("82314"),
                                n.e("41686"),
                                n.e("25677"),
                                n.e("85411"),
                                n.e("88804"),
                                n.e("13233"),
                                n.e("89001"),
                                n.e("54558"),
                                n.e("55990"),
                                n.e("73679"),
                                n.e("35538"),
                                n.e("73178"),
                                n.e("61274"),
                                n.e("41229"),
                                n.e("31592"),
                                n.e("28339"),
                                n.e("97638"),
                                n.e("22995"),
                                n.e("70141"),
                                n.e("1055"),
                                n.e("23036"),
                                n.e("3951"),
                                n.e("39865"),
                                n.e("50870"),
                                n.e("43608"),
                                n.e("29944"),
                                n.e("59731"),
                                n.e("40690"),
                                n.e("98275"),
                                n.e("72651"),
                                n.e("29363"),
                                n.e("88016"),
                                n.e("38886"),
                                n.e("84133"),
                                n.e("30240"),
                                n.e("510"),
                                n.e("90241"),
                                n.e("37271"),
                                n.e("49993"),
                                n.e("65813"),
                                n.e("8037"),
                                n.e("50748"),
                                n.e("1844"),
                                n.e("57016"),
                                n.e("45826"),
                                n.e("9396"),
                                n.e("53075"),
                                n.e("26564"),
                                n.e("77529"),
                                n.e("10061"),
                                n.e("57766"),
                                n.e("91552"),
                                n.e("69213"),
                                n.e("86650"),
                                n.e("52196"),
                                n.e("85899"),
                                n.e("61322"),
                                n.e("43031"),
                                n.e("22656"),
                                n.e("28379"),
                                n.e("41737"),
                                n.e("92330"),
                                n.e("53233"),
                                n.e("96901"),
                                n.e("49645"),
                                n.e("25339"),
                                n.e("84454"),
                                n.e("62426"),
                                n.e("1887"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("29272"),
                                n.e("97391"),
                                n.e("67332"),
                                n.e("57114"),
                                n.e("90059"),
                                n.e("53552"),
                                n.e("58127"),
                                n.e("816"),
                                n.e("43683"),
                                n.e("59303"),
                                n.e("31610"),
                                n.e("83893"),
                                n.e("56359"),
                                n.e("99501"),
                                n.e("85484"),
                                n.e("69425"),
                                n.e("16581"),
                                n.e("91680"),
                                n.e("57036"),
                                n.e("57174"),
                                n.e("86847"),
                                n.e("48226"),
                                n.e("88941"),
                                n.e("61379"),
                                n.e("25693"),
                                n.e("32606"),
                                n.e("28154"),
                                n.e("4369"),
                                n.e("34236"),
                                n.e("11523"),
                                n.e("10004"),
                                n.e("77473"),
                                n.e("53930"),
                                n.e("23353"),
                                n.e("18943"),
                                n.e("7167"),
                                n.e("62875"),
                                n.e("25279"),
                                n.e("39810"),
                                n.e("92789"),
                                n.e("57598"),
                                n.e("31390"),
                                n.e("37687"),
                                n.e("43039"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("48804"),
                                n.e("8304"),
                                n.e("84103"),
                                n.e("17225"),
                                n.e("30920"),
                                n.e("63095"),
                                n.e("70653"),
                                n.e("52266"),
                                n.e("53039"),
                                n.e("96123"),
                                n.e("92583"),
                                n.e("64615"),
                                n.e("31825"),
                                n.e("36320"),
                                n.e("97526"),
                                n.e("79525"),
                                n.e("82069"),
                                n.e("75134"),
                                n.e("1462"),
                                n.e("55184"),
                                n.e("74926"),
                                n.e("28866"),
                                n.e("50015"),
                                n.e("72442"),
                                n.e("54282"),
                                n.e("21574"),
                                n.e("90889"),
                                n.e("62931"),
                                n.e("18181"),
                                n.e("59880"),
                                n.e("14805"),
                                n.e("73547"),
                                n.e("99593"),
                                n.e("60658"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("6338"),
                                n.e("47834"),
                                n.e("47555"),
                                n.e("18573"),
                                n.e("29177"),
                                n.e("21435"),
                                n.e("61935"),
                                n.e("88990"),
                                n.e("21856"),
                                n.e("58038"),
                                n.e("32551"),
                                n.e("64046"),
                                n.e("43426"),
                                n.e("96443"),
                                n.e("65743"),
                                n.e("87079"),
                                n.e("88559"),
                                n.e("60177"),
                                n.e("25637"),
                                n.e("39665"),
                                n.e("23532"),
                                n.e("31644"),
                                n.e("89790"),
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
                                    initialStep: tn.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var t2 = n(761508),
    t3 = n(449543);
function t6(e) {
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
function t4(e) {
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
function t5(e) {
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
var t7 = n(345394);
function t8(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: t7.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function t9(e) {
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
function ne(e) {
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
function nt(e) {
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
function nn(e) {
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
function ni(e) {
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
var nr = n(661531),
    ns = n(996682);
function na(e) {
    let {
        color: t = nr.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, ns.A)({ "aria-label": n, "aria-hidden": i, role: r }),
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
function no(e) {
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
var nl = n(78701);
function nu(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: nl.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var nc = n(462887),
    nd = n(736653),
    n_ = n(259065),
    nh = n(206835),
    nf = n(976860),
    np = n(591179),
    nE = n(462463),
    nm = n(878784),
    ng = n(425713),
    nA = n(696292),
    nI = n(975807),
    nT = n(562819),
    nS = n(892035),
    ny = n(793943),
    nC = n(95035),
    nN = n(532794),
    nv = n(192444),
    nR = n(617986),
    nO = n(862990),
    nb = n(892227),
    nD = n(81466),
    nL = n(318254),
    nw = n(490285),
    nM = n(875679);
let nP = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, nb.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, s.jsxs)("div", {
        className: nM.kL,
        children: [
            null != n &&
                (0, s.jsxs)("div", {
                    className: nM.nM,
                    children: [
                        (0, s.jsxs)("div", {
                            className: nM.Pf,
                            children: [
                                (0, s.jsx)(nD.C, { size: "sm", color: nr.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: z.intl.string(nw.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: z.intl.format(nw.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, s.jsx)("div", { className: nM.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, s.jsxs)("div", {
                    className: nM.nM,
                    children: [
                        (0, s.jsxs)("div", {
                            className: nM.Pf,
                            children: [
                                (0, s.jsx)(nL.C, { size: "sm", color: nr.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: z.intl.string(nw.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: z.intl.format(nw.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nx = n(655752),
    nk = n(764231),
    nU = n(627380),
    nG = n(30084),
    nF = n(792641),
    nV = n(714206),
    nB = n(88001),
    nj = n(758836),
    nH = n(190107),
    nY = n(466919),
    nW = n(555599),
    nK = n(817577);
let n$ =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    nz =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nq =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nZ() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, np.X)("useWhatsNewPerkCards"),
        i = (0, nO.O9)(),
        { logitechCard: r, steelseriesCard: o } = e_(),
        u = (0, L.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, nS.z$)("useWhatsNewPerkCards"),
        _ = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        h = _?.hasActiveTrial ?? !1,
        f = (0, nE.A)({ analyticsLocations: e }),
        m = (0, a.useCallback)(() => {
            (0, eD.openUserSettings)(eb.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, n_.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, a.useCallback)(() => {
            (0, eD.openUserSettings)(eb.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nT.L)({ analyticsLocations: e }),
            );
        }, [e]),
        A = (0, a.useCallback)(() => {
            (0, eD.openUserSettings)(eb.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        T = () => {
            (0, nI.A)(nB.TE);
        },
        S = (0, a.useCallback)(() => {
            h
                ? (0, M.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, s.jsx)(e, { ...t });
                  })
                : (0, nN.A)({
                      subscriptionTier: K.pe.TIER_2,
                      initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, h]),
        C = (function (e) {
            let { fractionalState: t } = (0, eO.A)(),
                n = t === K.xc.FP_ONLY,
                i = (0, nm.$F)(),
                r = (0, nm.Xb)(),
                s = i?.status === nm.Wo.UPCOMING || n,
                o = (0, ng.N)(i?.id),
                u = (function () {
                    let e = (0, nm.$F)(),
                        t = (0, nx.P)(),
                        n = (0, nm.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = e8()(),
                        r = e8()(n),
                        s = e.status === nm.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                d = (0, c.bG)([ev.Ay], () => ev.Ay.useReducedMotion) && !s,
                _ = (0, nU.t)(),
                h = (0, nx.P)();
            return (0, a.useMemo)(() => {
                let t,
                    a = null != h ? z.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nk.T)(K.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === nm.Wo.UPCOMING
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
                                (0, nk.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let c = null;
                return (
                    null != o ? (c = s || d ? o.standard : o.ambientLarge) : n && (c = nV),
                    {
                        id: B.TENURE_BADGE_CARD_ID,
                        title: null != i ? z.intl.string(i.nameUnformattedNitro) : n ? z.intl.string(z.t.tx9Fvw) : "",
                        pillText: z.intl.string(z.t["jyYgZ+"]),
                        primaryAsset: c,
                        primaryAssetClassName: l()(nF.pq, { [nF.n6]: s, [nF.kE]: d }),
                        caption: null != r ? z.intl.formatToPlainString(z.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: z.intl.string(z.t.jVcuVY),
                        onCtaClick: () => (0, nG.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, o, s, d, r, u, n, _, h, e]);
        })(e),
        { shouldShowBonusOrbsUX: N, multiplier: v } = (0, nv.lk)(nH.rE.NITRO_HOME_MARKETING),
        { isEligible: R, programReward: O } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        b = R && null != O && null != O.reward_amount && O.reward_amount > 0;
    return (0, a.useMemo)(() => {
        let e = [
                u ? null : r,
                u ? null : o,
                b
                    ? {
                          id: B.NITRO_ORBS_REWARDS_CARD_ID,
                          title: z.intl.string(nw.default.hx5AFp),
                          description: z.intl.format(nw.default.wq3CF2, { orbsCount: O.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: l()(nW.lH, nW.yK),
                          footerContent: (0, s.jsx)(nP, {}),
                          ctaText: z.intl.string(nw.default.BxjHiu),
                          onCtaClick: () => (0, nf.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(nj.G2.ORBS)),
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
                          onCtaClick: () => (0, nR.navigateToQuestHome)({ fromContent: nA.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: nW.Nf,
                      }
                    : null,
                i
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: z.intl.string(nY.default.YkvksF),
                          description: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  z.intl.formatToPlainString(nY.default.JlyGQj, {
                                      totalSeats: nB.aw,
                                      premiumGroupProductName: (0, nB.DP)(),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: nW.LF,
                                      children: (0, s.jsx)(nC.A, {
                                          onClick: T,
                                          children: z.intl.string(nY.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: z.intl.string(z.t.oW0eUd),
                          primaryAsset: nK,
                          ctaIcon: eN.t,
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
                    primaryAsset: n$,
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: z.intl.string(z.t.acc6h6),
                    description: z.intl.formatToPlainString(z.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nq,
                    ctaText: z.intl.string(z.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ny.nf)(ny.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: B.PERMADECOS_CARD_ID,
                          title: z.intl.string(z.t.L14NZN),
                          description: z.intl.string(z.t.eCZkAI),
                          primaryAsset: (0, s.jsx)(nu, { alt: "", ariaHidden: !0 }),
                          ctaText: z.intl.string(z.t.jVcuVY),
                          onCtaClick: t ? f : g,
                      },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: z.intl.string(z.t["GU+wqh"]),
                    description: z.intl.string(z.t["1uPk1Z"]),
                    primaryAsset: nz,
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
                    primaryAssetClassName: l()(nW.lH, nW.yK),
                    ctaText: z.intl.string(z.t.jVcuVY),
                    onCtaClick: () => (0, nf.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(nj.G2.PROFILE_FRAMES)),
                }),
            e.length > a && e.splice(a, e.length - a),
            e
        );
    }, [C, b, O, i, N, v, m, A, g, S, f, t, r, o, u, d]);
}
var nX = n(355097),
    nQ = n(64514),
    nJ = n(121818),
    n0 =
        (((r = {}).BEST_OF_NITRO = "bestof"),
        (r.APPEARANCE_STYLE = "appearance"),
        (r.UPGRADES = "upgrades"),
        (r.VIP_EXTRAS = "vip"),
        r);
let n1 = [
    { id: "bestof", label: () => z.intl.string(z.t.q1u7nQ) },
    { id: "appearance", label: () => z.intl.string(z.t.CUnZkZ) },
    { id: "upgrades", label: () => z.intl.string(z.t.KC5q8v) },
    { id: "vip", label: () => z.intl.string(z.t.DjEAcv) },
];
var n2 = n(758495);
let n3 = (e) => {
    e.stopPropagation();
};
function n6(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, nd.DP)(),
                t = (0, np.X)("useFavoritesPerkCards"),
                n = (0, nm.Lh)(),
                i = (0, ng.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, nh.A)({ scrollPosition: nX._F.TRY_IT_OUT, analyticsLocations: r }),
                l = (0, a.useCallback)(() => {
                    (0, eD.openUserSettings)(eb.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, a.useCallback)(() => {
                    (0, eD.openUserSettings)(eb.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                c = (0, a.useCallback)(() => {
                    (0, eD.openUserSettings)(eb.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, a.useCallback)(() => {
                    (0, nf.pX)(W.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, a.useCallback)(() => {
                    (0, eD.openUserSettings)(eb.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, nE.A)({ analyticsLocations: r }),
                f = (0, a.useCallback)(() => {
                    (0, eD.openUserSettings)(eb.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, n_.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                m = nZ(),
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
                            primaryAsset: (0, s.jsx)(t6, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.PROFILES_CARD_ID,
                            title: z.intl.string(z.t.xDRab3),
                            description: z.intl.string(z.t.yn6fWA),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: t ? h : o,
                            primaryAsset: (0, s.jsx)(t4, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.HD_VIDEO_CARD_ID,
                            title: z.intl.string(z.t["/mQ5gg"]),
                            description: z.intl.string(z.t["7WwAXh"]),
                            primaryAsset: (0, s.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CLIENT_THEMES_CARD_ID,
                            title: z.intl.string(z.t.acc6h6),
                            description: z.intl.formatToPlainString(z.t.WQazjs, { themeCount: 20 }),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nq,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.MORE_EMOJIS_CARD_ID,
                            title: z.intl.string(z.t.D8vIDT),
                            description: z.intl.string(z.t.DRMecB),
                            primaryAsset: (0, s.jsx)(t8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.LARGE_UPLOADS_CARD_ID,
                            title: z.intl.string(z.t.nL1WZV),
                            description: z.intl.formatToPlainString(z.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, s.jsx)(t9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CUSTOM_APP_ICONS_CARD_ID,
                            title: z.intl.string(z.t["GU+wqh"]),
                            description: z.intl.string(z.t["1uPk1Z"]),
                            ctaText: z.intl.string(z.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nz,
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
                            primaryAsset: n$,
                            categories: ["appearance"],
                        },
                        {
                            id: B.CUSTOM_SOUNDS_CARD_ID,
                            title: z.intl.string(z.t["Cu/oFd"]),
                            description: z.intl.string(z.t.czj2aa),
                            primaryAsset: (0, s.jsx)(ne, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SPECIAL_STICKERS_CARD_ID,
                            title: z.intl.string(z.t.MQoVeb),
                            description: z.intl.string(z.t.HGCLZX),
                            primaryAsset: (0, s.jsx)("div", {
                                className: nW.Uc,
                                children: (0, s.jsx)(nt, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SUPER_REACTIONS_CARD_ID,
                            title: z.intl.string(z.t.qERvAA),
                            description: z.intl.string(z.t.WkUWzx),
                            primaryAsset: (0, s.jsx)(nn, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.VIDEO_BACKGROUNDS_CARD_ID,
                            title: z.intl.string(z.t.ssVDYQ),
                            description: z.intl.string(z.t.aUSRMa),
                            primaryAsset: (0, nc.M)(e) ? nQ : nJ,
                            categories: ["upgrades"],
                        },
                        {
                            id: B.EARLY_ACCESS_CARD_ID,
                            title: z.intl.string(z.t["g/KRY6"]),
                            description: z.intl.string(z.t.JzAmJc),
                            primaryAsset: (0, s.jsx)(ni, { alt: "", ariaHidden: !0 }),
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
                                    : (0, s.jsx)(na, { color: nr.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: z.intl.string(z.t["MTD+7w"]),
                            description: z.intl.string(z.t.Bhs0s6),
                            ctaText: z.intl.string(z.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, s.jsx)(no, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.PERMADECOS_CARD_ID,
                            title: z.intl.string(z.t.L14NZN),
                            description: z.intl.string(z.t.eCZkAI),
                            primaryAsset: (0, s.jsx)(nu, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, o, l, u, c, d, _, f, h, t],
                );
            return (0, a.useMemo)(() => A.filter((e) => null != e && !g.includes(e.id)), [A, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [r, o] = (0, a.useState)(i?.categories[0] ?? n0.BEST_OF_NITRO),
        l = (0, a.useMemo)(() => n.filter((e) => null != e && e.categories.includes(r)), [n, r]);
    return (0, s.jsxs)("div", {
        className: n2.uW,
        children: [
            (0, s.jsx)(D.D, { variant: "display-sm", className: n2.R_, children: z.intl.string(z.t["Uh3+CA"]) }),
            (0, s.jsx)(t2.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: o,
                className: n2.Lq,
                "aria-label": z.intl.string(z.t["Uh3+CA"]),
                children: n1.map((e) =>
                    (0, s.jsx)(t2.V.Item, { id: e.id, className: n2.IC, children: e.label() }, e.id),
                ),
            }),
            (0, s.jsx)(
                t3.A,
                {
                    gap: 20,
                    className: n2.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, s.jsx)(
                                Q.S,
                                { ...e, glowing: t === e.id, containerClassName: n2.Ui, onFocus: n3 },
                                e.id,
                            );
                    }),
                },
                r,
            ),
        ],
    });
}
var n4 = n(948562);
let n5 = (e) => {
    let { className: t } = e,
        n = (0, nd.DP)();
    return (0, s.jsx)("img", {
        className: l()(n4.D, t),
        src: (0, nc.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var n7 = n(946062);
let n8 = (e) => {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, s.jsxs)("div", {
              className: l()(n7.kL, n7.Gd, n7.Eg),
              children: [(0, s.jsx)(n5, {}), (0, s.jsx)(tZ, {}), i],
          })
        : (0, s.jsx)(eE.h, { color: "nitro-pink", className: l()(n7.kL, n7.Gd), offsetBottom: n, children: i });
};
function n9(e) {
    let { glowingPerkId: t = null } = e,
        n = nZ();
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
var ie = n(994763),
    it = n(79119);
let ii = "section",
    ir = "perk",
    is = (e) => {
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
                    t = e.get(ir),
                    n = e.get(ii);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [r.search]);
        (0, ie.z)(P ?? "", null != P, U, G);
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
                  className: n7.xW,
                  ref: o,
                  children: [
                      (0, s.jsx)(n8, {
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
                                      children: (0, s.jsx)(tB, {
                                          buttonVisibilityRef: j,
                                          className: n7.v1,
                                          userDiscountOffer: B,
                                          discountedPrice: q,
                                      }),
                                  }),
                                  (0, s.jsx)(ep, { glowingPerkId: k, glowingSectionId: x }),
                                  (0, s.jsx)(n9, { glowingPerkId: k }),
                                  (0, s.jsx)(n6, { glowingPerkId: k }),
                                  (0, s.jsx)(eA, {
                                      className: n7.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: W.liQ.NITRO_HOME, section: W.JJy.GIFT_BANNER },
                                  }),
                                  (0, s.jsx)("div", { className: n7.hz }),
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
                                      children: (0, s.jsx)("div", { ref: D, className: n7._Z }),
                                  }),
                                  (0, s.jsx)("img", {
                                      src: it,
                                      className: n7.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: z.intl.string(z.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      $ &&
                          null != q &&
                          (0, s.jsx)(t1, {
                              isVisible: Z && F,
                              premiumSubscription: L,
                              churnDiscountOffer: B,
                              discountedPrice: q,
                          }),
                  ],
              })
            : Q
              ? (0, s.jsxs)("div", {
                    className: l()(n7.kL, n7.Lq, n7.TN, n7.Eg),
                    children: [
                        (0, s.jsx)(tZ, {}),
                        (0, s.jsx)("div", { className: n7.S, children: (0, s.jsx)(_.y, {}) }),
                    ],
                })
              : (0, s.jsx)("div", { className: l()(n7.kL, n7.Lq), children: (0, s.jsx)(_.y, {}) });
    };
