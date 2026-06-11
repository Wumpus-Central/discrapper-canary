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
    N = n(174459),
    v = n(881489),
    C = n(7066),
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
    H = n(792656),
    j = n(985603),
    Y = n(777376),
    W = n(185797),
    K = n(652215),
    $ = n(788868),
    z = n(237146),
    q = n(375708),
    X = n(74776);
function Z(e) {
    let { openRewardModal: t } = e,
        n = (0, W.F)();
    if (n.kind === W.L.SUBSCRIBE)
        return (0, s.jsxs)("div", {
            className: X.R$,
            children: [
                (0, s.jsx)(H.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: $.pe.TIER_2,
                }),
                (0, s.jsx)(P.$, { variant: "secondary", size: "md", text: q.intl.string(q.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === Y.p1.CLAIMED
            ? { text: q.intl.string(z.default.Plwzgf) }
            : { text: q.intl.string(q.t.hvVgAZ) };
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)("div", {
                className: X.R$,
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
            n.claimStatus === Y.p1.CLAIM_IN_PROGRESS &&
                (0, s.jsxs)("div", {
                    className: X.ed,
                    children: [
                        (0, s.jsx)(x.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, s.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: q.intl.string(z.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function Q(e) {
    let { glowing: t = !1 } = e;
    (0, F.A)({
        type: w.ImpressionTypes.VIEW,
        name: w.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: B.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: j.FZ },
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
        theme: K.NJ8.DARKER,
        children: (e) =>
            (0, s.jsx)(E.f5, {
                value: i,
                children: (0, s.jsx)("div", {
                    className: l()(e, X.kL),
                    children: (0, s.jsx)(V.A, {
                        cardType: G.s.CUSTOM,
                        cardClassName: X.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: X.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: X.j,
                                    children: [
                                        (0, s.jsx)("div", { className: X._g }),
                                        (0, s.jsx)("div", { className: X.$h }),
                                        (0, s.jsx)("div", { className: X.Rv }),
                                        (0, s.jsx)("div", { className: X.Lw }),
                                        (0, s.jsx)("div", { className: X.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: X.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: X.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(D.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: X.DD,
                                            children: q.intl.string(z.default.RGT513),
                                        }),
                                        (0, s.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: X.h_,
                                            children: q.intl.string(z.default["+pTnsf"]),
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
var J = n(744064);
function ee(e) {
    let { className: t, containerClassName: n } = e,
        i = (0, W.F)(),
        r =
            i.kind === W.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, s.jsx)(J.S, {
        id: B.XBOX_PREMIUM_PERK_CARD_ID,
        title: q.intl.string(z.default.UVL9tD),
        description: q.intl.string(z.default["I+IXr0"]),
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
        analyticsOptions: { thirdPartyPartner: j.FZ },
    });
}
function et(e) {
    let { analyticsLocations: t } = (0, E.Ay)(p.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, s.jsx)(E.f5, { value: t, children: (0, s.jsx)(ee, { ...e }) });
}
var en = n(367791),
    ei = n(672193);
function er(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: a, gridClassName: o } = e,
        u = ei.Ui;
    return (0, s.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != a ? (0, s.jsx)("div", { className: l()(u, null != r && en.Jx, o), children: a }) : null,
        ],
    });
}
var es = n(975571),
    ea = n(149995),
    eo = n(398523),
    el = n(881373),
    eu = n(581921),
    ec = n(852218),
    ed = n(382259),
    e_ = n(962995);
function eh() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, el.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = eo.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, ea.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, ea.S9)({ location: "useHardwarePartnerPerkCards" }),
        o = (0, L.l)("useHardwarePartnerPerkCards"),
        { currentDate: l, nDaysInMonth: u } = (0, a.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, a.useMemo)(() => {
        let a = o ? void 0 : q.intl.string(q.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: B.LOGITECH_3PP_CARD_ID,
                      title: q.intl.string(e_.default.OlObRa),
                      description: q.intl.format(e_.default.ZGOJ8R, {
                          discountPercent: el.aW,
                          termsUrl: es.A.getArticleURL(K.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: l.getDate() / u,
                      ctaText: q.intl.string(q.t.w7s5Qr),
                      onCtaClick: () => (0, eu.P)({ partnerId: ec.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: a,
                      caption: (0, s.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ec.XY },
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: B.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: q.intl.string(q.t.m7PucM),
                      description: i
                          ? r
                              ? q.intl.format(q.t["1Zw6xL"], {})
                              : q.intl.format(q.t.KWdCO0, {})
                          : q.intl.format(q.t.zh1X7u, {}),
                      descriptionNote:
                          !r && i
                              ? q.intl.format(q.t.vblnHk, {
                                    partnerName: ec.CD[ec.Cs].label,
                                    helpdeskArticle: es.A.getArticleURL(K.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      pillText: a,
                      caption: (0, s.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: l.getDate() / u,
                      ctaText: q.intl.string(q.t.w7s5Qr),
                      onCtaClick: () => (0, ed.u)({ analyticsLocations: e, partnerIds: [ec.KS, ec.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ec.KS },
                  }
                : null,
        };
    }, [o, e, l, t, u, n, i, r]);
}
var ef = n(102338);
let ep = "xgpp";
function eE(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, L.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: a } = eh();
    if (!i) return null;
    let o = null != r || null != a;
    return (0, s.jsx)(er, {
        id: ep,
        sectionClassName: l()(ef.uW, ef.Uv, ef.qr),
        heading: (0, s.jsx)(D.D, {
            variant: "display-sm",
            className: l()(ei.R_, en.U6),
            children: q.intl.string(q.t.NG1e6l),
        }),
        beforeGrid: (0, s.jsx)("div", { className: en.JE, children: (0, s.jsx)(Q, { glowing: t === ep }) }),
        grid: o
            ? (0, s.jsxs)(s.Fragment, {
                  children: [
                      (0, s.jsx)(et, { containerClassName: ei.Nr }),
                      null != r && (0, s.jsx)(J.S, { ...r, containerClassName: ei.Nr, glowing: n === r.id }),
                      null != a && (0, s.jsx)(J.S, { ...a, containerClassName: ei.Nr, glowing: n === a.id }),
                  ],
              })
            : null,
    });
}
var em = n(315629),
    eg = n(65470),
    eA = n(797221);
let eI = (e) => {
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
                            children: q.intl.string(q.t.Ve9Ge6),
                        }),
                        (0, s.jsx)(k.E, { variant: "text-md/medium", children: q.intl.string(q.t.yQ06u1) }),
                        (0, s.jsx)("div", {
                            className: eA.SB,
                            children: (0, s.jsx)(eg.A, {
                                buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
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
var eN = n(502572),
    ev = n(331322),
    eC = n(403581),
    eR = n(775602),
    eO = n(366999),
    eb = n(531260),
    eD = n(780964),
    eL = n(766075),
    ew = n(786300),
    eM = n(428262),
    eP = n(960851),
    ex = n(89366),
    ek = n(504836),
    eU = n(422936),
    eG = n(234419),
    eF = n(549996),
    eV = n(810660),
    eB = n(175569),
    eH = n(371764),
    ej = n(949964),
    eY = n(103411),
    eW = n(778712),
    eK = n(97808),
    e$ = n(590251),
    ez = n(144165),
    eq = n(854627),
    eX = n(427262),
    eZ = n(851746),
    eQ = n(326084),
    eJ = n(664654);
function e0() {
    var e, t, n;
    let { referralSentUsers: i } = (0, eJ.J)(),
        r = (0, c.bG)([eZ.A], () => eZ.A.getRecipientStatus()),
        s = (0, c.bG)([eZ.A], () => eZ.A.getHasEligibleFriends()),
        a = r.size === eJ.Z,
        o =
            ((e = !1 !== s),
            (t = i.length),
            (n = r.size === eJ.Z && [...r.values()].every((e) => e === eQ.aK.REDEEMED)),
            e
                ? t === eJ.Z
                    ? n
                        ? q.intl.format(q.t["1aEjsH"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                        : q.intl.format(q.t["+u3AOO"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                    : q.intl.format(q.t["omMr+V"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                : q.intl.format(q.t["zWhX/Q"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var e1 = n(212737),
    e2 = n(849812);
let e3 = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        N.default.track(K.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                return (n) => (0, s.jsx)(e, { ...n, startingScreen: t });
            });
    },
    e6 = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, eq.A)({ userId: t.id, size: eW._3.SIZE_24 });
        return (0, s.jsx)(
            eK.eu,
            { className: e2.bj, src: n, "aria-label": (0, eX.mG)(t), size: eW._3.SIZE_24, ...i },
            t.id,
        );
    },
    e4 = (e) => {
        let { slotIndex: t } = e;
        return (0, s.jsx)("div", { className: e2.p, children: t });
    },
    e5 = (e) => {
        let { referralSentUsers: t, className: n } = e;
        return (0, s.jsx)("div", {
            className: l()(e2.L$, n),
            children: (() => {
                let e = [];
                for (let n = 0; n < eJ.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, s.jsx)(e6, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, s.jsx)(e4, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    e7 = (e) => {
        let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
        return (0, s.jsx)(e$.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: i ?? e2.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: r ?? e2.e0,
            overlayClassName: t === eJ.Z ? e2.ys : void 0,
            children: (0, s.jsx)(ez._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: n,
                width: n,
                zoomable: !1,
            }),
        });
    },
    e8 = (e) => {
        let { className: t } = e,
            { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = e0();
        return (0, s.jsxs)("div", {
            className: l()(e2.kL, t),
            children: [
                (0, s.jsx)("div", { className: e2.G3, children: (0, s.jsx)(e7, { nReferralsSent: i }) }),
                (0, s.jsxs)("div", {
                    className: e2.IH,
                    children: [
                        (0, s.jsx)(e5, { referralSentUsers: n, className: e2.GV }),
                        (0, s.jsxs)("div", {
                            className: e2.n4,
                            children: [
                                (0, s.jsx)(D.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: q.intl.string(q.t.USo4s7),
                                }),
                                (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                            ],
                        }),
                        (0, s.jsx)(P.$, {
                            variant: "primary",
                            disabled: !1 === r || !0 === a,
                            text: q.intl.string(q.t.Lm2nFc),
                            onClick: () =>
                                e3({
                                    startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e9 = n(989349),
    te = n.n(e9),
    tt = n(496431),
    tn = n(116689);
let ti = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, tt.A)(te()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: a, minutes: o, seconds: u } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, s.jsxs)("div", {
        className: l()(tn.Xl, n),
        children: [
            (0, s.jsx)(k.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: q.intl.string(q.t["/ARFVE"]),
            }),
            (0, s.jsx)("div", {
                className: tn.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, s.jsxs)(s.Fragment, {
                            children: [
                                (0, s.jsxs)(
                                    "div",
                                    {
                                        className: tn.bh,
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: tn.kB,
                                                children: [
                                                    (0, s.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, s.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, s.jsx)("div", {
                                                        className: tn.B2,
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
                                                            return q.intl.string(q.t.ixASa2);
                                                        case "hours":
                                                            return q.intl.string(q.t["8sNvNn"]);
                                                        case "minutes":
                                                            return q.intl.string(q.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return q.intl.string(q.t.JhaiLW);
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
                                        className: tn.cV,
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
var tr = n(473702),
    ts = n(609425),
    ta = n(368919),
    to = n(287809),
    tl = n(12052);
function tu() {
    let e = (0, c.bG)([to.default], () => to.default.getCurrentUser()),
        t = (0, ts.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, eq.A)({ userId: e?.id, size: eW._3.SIZE_56 });
    if (null == e) return null;
    let a = (0, eX.mG)(e);
    return (0, s.jsxs)("div", {
        className: tl.kL,
        children: [
            (0, s.jsx)("div", {
                className: tl.my,
                children: (0, s.jsx)(eK.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: eW._3.SIZE_56,
                    "aria-label": a,
                    ...r,
                }),
            }),
            (0, s.jsx)("div", { className: tl.QC, children: (0, s.jsx)(ta.A, { userName: a, displayNameStyles: t }) }),
        ],
    });
}
var tc = n(707554),
    td = n(218199);
let t_ = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, s.jsx)(tc.F, {
        forceLevel: 1,
        children: (0, s.jsx)(D.D, { className: l()(td.w, t, i && td.n), variant: "display-md", color: n, children: r }),
    });
};
var th = n(690093);
function tf(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: a, bodyText: o } = e0();
    return (0, s.jsxs)("div", {
        className: l()(th.kL, t),
        children: [
            (0, s.jsx)("div", {
                className: th.G3,
                children: (0, s.jsx)(e7, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: th.HP,
                    ringClassName: th.pZ,
                }),
            }),
            (0, s.jsxs)("div", {
                className: th.IH,
                children: [
                    (0, s.jsxs)("div", {
                        className: th.n4,
                        children: [
                            (0, s.jsx)(D.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: q.intl.string(q.t.USo4s7),
                            }),
                            (0, s.jsx)(k.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, s.jsx)(e5, { referralSentUsers: n, className: th.t7 }),
                ],
            }),
            (0, s.jsx)(P.$, {
                variant: "primary",
                disabled: !1 === r || !0 === a,
                text: q.intl.string(q.t.Lm2nFc),
                onClick: () =>
                    e3({ startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tp = n(702841),
    tE = n(676279),
    tm = n(20458),
    tg = n(141502);
let tA = (e) => {
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
        E = (0, tp.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        m = (0, tE.TM)();
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tg.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, s.jsx)(tm.A, {
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
var tI = n(43588);
let tT = (e) => {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, s.jsx)(tA, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: l()(tI.wG, n && tI.Vx),
        flyingWumpusAssetClassName: l()(tI.lu, n && tI.ov),
        boltContainerClassName: l()(tI.nJ, n && tI.Wc),
        hammerContainerClassName: l()(tI.Gj, n && tI.XA),
        keyContainerClassName: l()(tI.FV, n && tI.oZ),
        starContainerClassName: l()(tI.E1, n && tI.LN),
        boltAssetClassName: l()(tI.j7, n && tI.QN),
        hammerAssetClassName: l()(tI.Wv, n && tI.B9),
        keyAssetClassName: l()(tI.rs, n && tI.I1),
        starAssetClassName: l()(tI.OY, n && tI.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tS = (((i = {}).MORNING = "morning"), (i.AFTERNOON = "afternoon"), (i.EVENING = "evening"), i);
function ty() {
    let e,
        t = { [tS.MORNING]: q.t["Wvc/I+"], [tS.AFTERNOON]: q.t["d+0STx"], [tS.EVENING]: q.t.CqsxKI };
    return q.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tS.MORNING : e >= 12 && e < 17 ? tS.AFTERNOON : tS.EVENING],
    );
}
var tN = n(97584),
    tv = n(202241);
let tC = (e) => {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, s.jsx)(tA, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: l()(tv.wG, n && tv.Vx),
            flyingWumpusAssetClassName: l()(tv.lu, n && tv.ov),
            boltContainerClassName: l()(tv.nJ, n && tv.Wc),
            hammerContainerClassName: l()(tv.Gj, n && tv.XA),
            keyContainerClassName: l()(tv.FV, n && tv.oZ),
            starContainerClassName: l()(tv.E1, n && tv.LN),
            boltAssetClassName: l()(tv.j7, n && tv.QN),
            hammerAssetClassName: l()(tv.Wv, n && tv.B9),
            keyAssetClassName: l()(tv.rs, n && tv.I1),
            starAssetClassName: l()(tv.OY, n && tv.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tR = {
        [C.CL.TREATMENT_A]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eV.U)(!o),
                _ = ty();
            return (0, s.jsx)("div", {
                className: l()(tN.kL, tN.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tN.W2, tN.HQ),
                    ref: u,
                    children: [
                        (0, s.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tN.ZU,
                            children: [
                                i && n,
                                (0, s.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(t_, {
                                            className: tN.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, s.jsx)(tu, {}),
                                    ],
                                }),
                                a && (0, s.jsx)(tf, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tN.y3,
                            children: (0, s.jsx)(tT, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [C.CL.TREATMENT_B]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eV.U)(!o),
                _ = q.intl.string(q.t.ifwQZb);
            return (0, s.jsx)("div", {
                className: l()(tN.kL, tN.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tN.W2, tN.m8),
                    ref: u,
                    children: [
                        (0, s.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tN.Y0,
                            children: [
                                i && n,
                                (0, s.jsx)("div", {
                                    className: l()(tN.N1, tN.v8),
                                    children: (0, s.jsx)(t_, {
                                        className: tN.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                a && (0, s.jsx)(tf, {}),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: tN.BF,
                            children: (0, s.jsx)(tC, { containerVisibilityPercentage: d, compact: !a }),
                        }),
                    ],
                }),
            });
        },
        [C.CL.TREATMENT_C]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = ty();
            return (0, s.jsx)("div", {
                className: l()(tN.kL, tN.Eg, t),
                ref: r,
                children: (0, s.jsxs)("div", {
                    className: l()(tN.W2, tN.J_),
                    children: [
                        (0, s.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            fullWidth: !1,
                            className: tN.$S,
                            children: [
                                i && n,
                                (0, s.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, s.jsx)(t_, {
                                            className: tN.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, s.jsx)(tu, {}),
                                    ],
                                }),
                            ],
                        }),
                        a && (0, s.jsx)("div", { className: tN.Pq, children: (0, s.jsx)(tf, {}) }),
                    ],
                }),
            });
        },
    };
function tO(e) {
    let { treatment: t, ...n } = e,
        i = tR[t];
    return null != i ? (0, s.jsx)(i, { ...n }) : null;
}
var tb = n(652533),
    tD = n(447764),
    tL = n(180894);
let tw = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tp.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)("div", {
                className: tD.BI,
                children: (0, s.jsx)(tb.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tb.$G },
                    yAxisAnimationData: { range: 20, duration: tb.Mp, path: tb.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tb.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, s.jsx)("img", { src: tL.A, alt: "", className: tD.Q }),
                }),
            }),
            (0, s.jsx)(tm.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tD.Gj,
                keyContainerClassName: tD.FV,
                starContainerClassName: tD.E1,
                hammerAssetClassName: tD.Wv,
                keyAssetClassName: tD.rs,
                starAssetClassName: tD.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var tM = n(725807),
    tP = n(774774),
    tx = n(975916);
let tk = () => {
    let e = { section: K.JJy.REVERSE_TRIAL_BANNER };
    return (0, s.jsxs)("div", {
        className: tx.vK,
        children: [
            (0, s.jsx)(tP.e4, { text: q.intl.string(q.t.qYKftX), className: tx.Io }),
            (0, s.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tx._u,
            }),
            (0, s.jsx)("div", {
                className: tx.IP,
                children: (0, s.jsx)(k.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: q.intl.format(q.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, s.jsx)(tM.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tx.aA,
                shinyButtonClassName: tx.Xp,
            }),
        ],
    });
};
var tU = n(18671);
let tG = () => {
        let e = (0, tp.bG)([eR.Ay], () => eR.Ay.useReducedMotion);
        return (0, s.jsx)(tm.A, {
            isMotionReduced: e,
            blurScale: 0.4,
            starContainerClassName: tU.cI,
            hammerContainerClassName: tU.qg,
            keyContainerClassName: tU.h2,
            boltContainerClassName: tU.Bz,
            starAssetClassName: tU.ks,
            hammerAssetClassName: tU.GY,
            keyAssetClassName: tU.p4,
            boltAssetClassName: tU.vy,
        });
    },
    tF = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            r = (0, v.Zb)(t);
        return (0, s.jsx)("div", {
            className: l()(tN.kL, n),
            ref: i,
            children: (0, s.jsxs)("div", {
                className: tN.ap,
                children: [
                    (0, s.jsxs)(ev.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, s.jsx)(eB.A, { text: q.intl.string(q.t.yhldRB) }),
                            (0, s.jsxs)(ev.B, {
                                align: "start",
                                gap: 12,
                                className: tN.rG,
                                children: [
                                    (0, s.jsx)(t_, { children: q.intl.format(q.t.FwjP6W, { days: r }) }),
                                    (0, s.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: q.intl.string(q.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)(ev.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, s.jsx)(H.A, {
                                        size: "md",
                                        buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                                        iconOverride: eC.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, s.jsx)(P.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: q.intl.string(q.t.Af7ye6),
                                        onClick: () => (0, eL.openUserSettings)(eD.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, s.jsxs)("div", {
                        className: tN.Hk,
                        children: [(0, s.jsx)(ey, { alt: "", width: "100%", height: "auto" }), (0, s.jsx)(tG, {})],
                    }),
                ],
            }),
        });
    },
    tV = (e) => {
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
            } = tH(),
            { treatment: A, isInNitroHomeHeaderTreatment: I } = (0, C.jy)("subscriber_home_hero"),
            { analyticsLocations: T } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            S = (0, eF.c)(eT.C.MARKETING_PAGE_BANNER),
            y = null != h && h.status === K.Dmq.CANCELED,
            N = I && !y,
            v = null;
        null != S && "marketingPageBanner" === S.properties.properties.oneofKind
            ? (v = (0, s.jsx)(eH.x, {
                  componentId: S.id,
                  promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
              }))
            : i
              ? (v = (0, s.jsx)(ej.A, { variant: ej.c.SUBSCRIBER_HOME }))
              : r
                ? (v = (0, s.jsx)(tk, {}))
                : a && !N && (v = (0, s.jsx)(e8, {}));
        let R = (0, eG.V)(),
            O = (0, eU.O)(),
            D = (0, b.U9)(O, $.pe.TIER_2) ? $.pe.TIER_2 : void 0,
            L = null != h && h.status !== K.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
            w = (0, eb.A)(),
            x = w.isFractionalPremiumActive && !L && null == v && !_,
            U = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
            { visibilityPercentageRef: G, visibilityPercentage: F } = (0, eV.U)(!U);
        return r
            ? (0, s.jsx)(tF, { fpEndsAt: w.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : N
              ? (0, s.jsx)(tO, {
                    treatment: A,
                    className: t,
                    headingTop: u,
                    showPill: d,
                    buttonVisibilityRef: g,
                    shouldShowReferralProgressBar: a,
                })
              : (0, s.jsx)("div", {
                    className: l()(tN.kL, t),
                    "data-testid": "subscriber-nitro-home-hero-header",
                    ref: g,
                    children: (0, s.jsxs)("div", {
                        className: tN.Qs,
                        ref: G,
                        children: [
                            d && u,
                            (0, s.jsxs)("div", {
                                className: tN.N1,
                                children: [
                                    (0, s.jsx)(tw, { containerVisibilityPercentage: F }),
                                    _ &&
                                        f?.expiresAt != null &&
                                        (0, s.jsx)(ti, { expiresAt: f.expiresAt.toISOString(), className: tN.IZ }),
                                    (0, s.jsx)(t_, {
                                        children:
                                            _ && null != f
                                                ? q.intl.format(q.t["3yZP0G"], { percent: f.discount.amount })
                                                : o,
                                    }),
                                    _ &&
                                        null != f &&
                                        null != m &&
                                        (0, s.jsx)(k.E, {
                                            className: tN.jG,
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            children: q.intl.format(q.t["3Q4wCy"], {
                                                discountedPrice: m,
                                                billingPeriod: (0, eM.Ke)(f.discount.userUsageLimitInterval),
                                                numMonths: f.discount.userUsageLimit,
                                            }),
                                        }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: x || _ ? tN.UJ : void 0,
                                children: [
                                    x &&
                                        (0, s.jsx)(H.A, {
                                            size: "md",
                                            hasActivePromotion: !!i,
                                            subscriptionTier: R?.subscription_trial?.sku_id ?? D,
                                        }),
                                    _ &&
                                        null != h &&
                                        (0, s.jsx)(P.$, {
                                            variant: "expressive",
                                            icon: eC.t,
                                            size: "md",
                                            text: q.intl.string(q.t.zrCzVB),
                                            onClick: () => {
                                                var e;
                                                return (
                                                    (e = tr.g.CONFIRM_DISCOUNT),
                                                    void (0, M.openModalLazy)(async () => {
                                                        let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                            await Promise.all([
                                                                n.e("34218"),
                                                                n.e("16955"),
                                                                n.e("26963"),
                                                                n.e("46334"),
                                                                n.e("80870"),
                                                                n.e("65058"),
                                                                n.e("30849"),
                                                                n.e("38805"),
                                                                n.e("56178"),
                                                                n.e("59913"),
                                                                n.e("11973"),
                                                                n.e("57093"),
                                                                n.e("32285"),
                                                                n.e("84570"),
                                                                n.e("62924"),
                                                                n.e("74252"),
                                                                n.e("1168"),
                                                                n.e("596"),
                                                                n.e("33177"),
                                                                n.e("2677"),
                                                                n.e("22274"),
                                                                n.e("59945"),
                                                                n.e("87550"),
                                                                n.e("94328"),
                                                                n.e("75430"),
                                                                n.e("71934"),
                                                                n.e("31573"),
                                                                n.e("28379"),
                                                                n.e("39995"),
                                                                n.e("25568"),
                                                                n.e("394"),
                                                                n.e("26105"),
                                                                n.e("84764"),
                                                                n.e("16581"),
                                                                n.e("23924"),
                                                                n.e("42205"),
                                                                n.e("71091"),
                                                                n.e("91680"),
                                                                n.e("57036"),
                                                                n.e("57174"),
                                                                n.e("98839"),
                                                                n.e("10471"),
                                                                n.e("11301"),
                                                                n.e("61737"),
                                                                n.e("68261"),
                                                                n.e("64827"),
                                                                n.e("7167"),
                                                                n.e("96643"),
                                                                n.e("92789"),
                                                                n.e("2368"),
                                                                n.e("21335"),
                                                                n.e("47834"),
                                                                n.e("11735"),
                                                                n.e("6338"),
                                                                n.e("5636"),
                                                                n.e("45638"),
                                                                n.e("88941"),
                                                                n.e("61379"),
                                                                n.e("43039"),
                                                                n.e("25693"),
                                                                n.e("32606"),
                                                                n.e("28154"),
                                                                n.e("48804"),
                                                                n.e("21690"),
                                                                n.e("4369"),
                                                                n.e("32817"),
                                                                n.e("55112"),
                                                                n.e("13681"),
                                                                n.e("53729"),
                                                                n.e("10004"),
                                                                n.e("55314"),
                                                                n.e("89094"),
                                                                n.e("29177"),
                                                                n.e("32551"),
                                                                n.e("63437"),
                                                                n.e("23353"),
                                                                n.e("50015"),
                                                                n.e("38835"),
                                                                n.e("11523"),
                                                                n.e("44695"),
                                                                n.e("44376"),
                                                                n.e("31644"),
                                                                n.e("45723"),
                                                                n.e("70697"),
                                                                n.e("18546"),
                                                                n.e("53930"),
                                                                n.e("31390"),
                                                                n.e("90244"),
                                                                n.e("18943"),
                                                                n.e("17225"),
                                                                n.e("70653"),
                                                                n.e("96123"),
                                                                n.e("31825"),
                                                                n.e("36320"),
                                                                n.e("20320"),
                                                                n.e("84967"),
                                                                n.e("47017"),
                                                                n.e("90889"),
                                                                n.e("99657"),
                                                                n.e("26780"),
                                                                n.e("44265"),
                                                                n.e("99141"),
                                                                n.e("84103"),
                                                                n.e("21435"),
                                                                n.e("30920"),
                                                                n.e("99941"),
                                                                n.e("25990"),
                                                                n.e("58821"),
                                                                n.e("11527"),
                                                                n.e("63095"),
                                                                n.e("52266"),
                                                                n.e("68647"),
                                                                n.e("16900"),
                                                                n.e("63070"),
                                                                n.e("64615"),
                                                                n.e("96443"),
                                                                n.e("66322"),
                                                                n.e("75134"),
                                                                n.e("57598"),
                                                                n.e("55184"),
                                                                n.e("23216"),
                                                                n.e("87079"),
                                                                n.e("25637"),
                                                                n.e("14805"),
                                                                n.e("73547"),
                                                                n.e("43300"),
                                                                n.e("99593"),
                                                                n.e("84456"),
                                                                n.e("47555"),
                                                                n.e("61935"),
                                                                n.e("62168"),
                                                                n.e("69875"),
                                                                n.e("58157"),
                                                                n.e("22380"),
                                                                n.e("15754"),
                                                                n.e("90191"),
                                                                n.e("77084"),
                                                                n.e("75361"),
                                                                n.e("52557"),
                                                                n.e("95093"),
                                                                n.e("71234"),
                                                                n.e("60177"),
                                                                n.e("74074"),
                                                                n.e("1006"),
                                                                n.e("23276"),
                                                                n.e("30938"),
                                                                n.e("48720"),
                                                                n.e("56689"),
                                                                n.e("59880"),
                                                                n.e("74016"),
                                                                n.e("12168"),
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
                                        buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                                    }),
                                ],
                            }),
                            v,
                        ],
                    }),
                });
    },
    [tB, tH] = (0, ew.A)(),
    tj = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, v.ds)(),
            l = (0, eP.cg)(),
            u = (0, ex.QQ)(),
            d = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            _ = (0, ek.Z)({ location: "subscriber_home_hero" }),
            h = null != d && d.status === K.Dmq.CANCELED && null != i,
            f = u && !(h && _),
            m = q.intl.string(q.t.qYKftX),
            g = (0, eY.m)(),
            A = q.intl.string(q.t.ifwQZb),
            { fractionalState: I, endsAt: T } = (0, eb.A)(),
            S = (0, eO.Ay)(T, eO.yE.CREDITS_ENDS_IN),
            N = null;
        if (I === $.xc.NONE || o) N = (0, s.jsx)(eB.A, { text: m });
        else {
            f = !0;
            let e = q.intl.format(q.t["yR+oDD"], {
                helpCenterLink: es.A.getArticleURL(K.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            N = (0, s.jsx)(eN.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tN.YL,
                position: "right",
                children: (e) =>
                    (0, s.jsx)("div", {
                        ...e,
                        className: tN.V_,
                        children: (0, s.jsx)("div", { className: tN.eL, children: (0, s.jsx)(eB.A, { text: S }) }),
                    }),
            });
        }
        return (0, s.jsx)(E.f5, {
            value: a,
            children: (0, s.jsx)(tB.Provider, {
                value: {
                    headingText: A,
                    headingTop: N,
                    showPill: f,
                    shouldShowChurnVariant: h,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: r,
                    buttonVisibilityRef: n,
                },
                children: (0, s.jsx)(tV, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: g,
                }),
            }),
        });
    };
var tY = n(820284),
    tW = n(742589),
    tK = n(909536),
    t$ = n(392943),
    tz = n(876587),
    tq = n(400669),
    tX = n(503255),
    tZ = n(525311);
let tQ = () => {
    let e = (0, tK.Gh)("nitro_home_header"),
        t = a.useRef(null);
    return (0, s.jsxs)(tY.A, {
        section: K.JJy.NAVIGATION,
        children: [
            (0, s.jsx)(tW.A, {
                className: l()(tX.TQ, tZ.C$),
                transparent: !0,
                role: "navigation",
                children: (0, s.jsxs)("div", {
                    className: tX.Wc,
                    children: [
                        (0, s.jsxs)("div", {
                            className: tZ.wk,
                            children: [
                                (0, s.jsx)(eC.t, { colorClass: tZ.tr }),
                                (0, s.jsx)("span", {
                                    role: "img",
                                    "aria-label": q.intl.string(q.t.Ipxkog),
                                    className: tZ.Ss,
                                    children: (0, s.jsx)(t$.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, s.jsxs)("div", {
                                className: tX.MQ,
                                children: [
                                    (0, s.jsx)(tq.l, {
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
            e && (0, s.jsx)(tz.O, { targetElementRef: t, body: q.intl.string(q.t.EqUw7K) }),
        ],
    });
};
var tJ = n(922139),
    t0 = n(717421),
    t1 = n(98812),
    t2 = n(67423);
let t3 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: a } = e,
        { analyticsLocations: o } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, t0.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, s.jsx)(tJ.animated.div, {
        className: l()(t1.iE, { [t1.q4]: !t }),
        style: u,
        children: (0, s.jsxs)("div", {
            className: t1.iJ,
            children: [
                (0, s.jsx)("img", { alt: "", src: t2, className: t1.oU }),
                (0, s.jsxs)("div", {
                    className: t1.iQ,
                    children: [
                        (0, s.jsx)(D.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: q.intl.format(q.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(q.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eM.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, s.jsx)(P.$, {
                    variant: "expressive",
                    icon: eC.t,
                    size: "md",
                    text: q.intl.string(q.t.zrCzVB),
                    onClick: () =>
                        void (0, M.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("16955"),
                                n.e("26963"),
                                n.e("46334"),
                                n.e("80870"),
                                n.e("65058"),
                                n.e("30849"),
                                n.e("38805"),
                                n.e("56178"),
                                n.e("59913"),
                                n.e("11973"),
                                n.e("57093"),
                                n.e("32285"),
                                n.e("84570"),
                                n.e("62924"),
                                n.e("74252"),
                                n.e("1168"),
                                n.e("596"),
                                n.e("33177"),
                                n.e("2677"),
                                n.e("22274"),
                                n.e("59945"),
                                n.e("87550"),
                                n.e("94328"),
                                n.e("75430"),
                                n.e("71934"),
                                n.e("31573"),
                                n.e("28379"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("394"),
                                n.e("26105"),
                                n.e("84764"),
                                n.e("16581"),
                                n.e("23924"),
                                n.e("42205"),
                                n.e("71091"),
                                n.e("91680"),
                                n.e("57036"),
                                n.e("57174"),
                                n.e("98839"),
                                n.e("10471"),
                                n.e("11301"),
                                n.e("61737"),
                                n.e("68261"),
                                n.e("64827"),
                                n.e("7167"),
                                n.e("96643"),
                                n.e("92789"),
                                n.e("2368"),
                                n.e("21335"),
                                n.e("47834"),
                                n.e("11735"),
                                n.e("6338"),
                                n.e("5636"),
                                n.e("45638"),
                                n.e("88941"),
                                n.e("61379"),
                                n.e("43039"),
                                n.e("25693"),
                                n.e("32606"),
                                n.e("28154"),
                                n.e("48804"),
                                n.e("21690"),
                                n.e("4369"),
                                n.e("32817"),
                                n.e("55112"),
                                n.e("13681"),
                                n.e("53729"),
                                n.e("10004"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("29177"),
                                n.e("32551"),
                                n.e("63437"),
                                n.e("23353"),
                                n.e("50015"),
                                n.e("38835"),
                                n.e("11523"),
                                n.e("44695"),
                                n.e("44376"),
                                n.e("31644"),
                                n.e("45723"),
                                n.e("70697"),
                                n.e("18546"),
                                n.e("53930"),
                                n.e("31390"),
                                n.e("90244"),
                                n.e("18943"),
                                n.e("17225"),
                                n.e("70653"),
                                n.e("96123"),
                                n.e("31825"),
                                n.e("36320"),
                                n.e("20320"),
                                n.e("84967"),
                                n.e("47017"),
                                n.e("90889"),
                                n.e("99657"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("99141"),
                                n.e("84103"),
                                n.e("21435"),
                                n.e("30920"),
                                n.e("99941"),
                                n.e("25990"),
                                n.e("58821"),
                                n.e("11527"),
                                n.e("63095"),
                                n.e("52266"),
                                n.e("68647"),
                                n.e("16900"),
                                n.e("63070"),
                                n.e("64615"),
                                n.e("96443"),
                                n.e("66322"),
                                n.e("75134"),
                                n.e("57598"),
                                n.e("55184"),
                                n.e("23216"),
                                n.e("87079"),
                                n.e("25637"),
                                n.e("14805"),
                                n.e("73547"),
                                n.e("43300"),
                                n.e("99593"),
                                n.e("84456"),
                                n.e("47555"),
                                n.e("61935"),
                                n.e("62168"),
                                n.e("69875"),
                                n.e("58157"),
                                n.e("22380"),
                                n.e("15754"),
                                n.e("90191"),
                                n.e("77084"),
                                n.e("75361"),
                                n.e("52557"),
                                n.e("95093"),
                                n.e("71234"),
                                n.e("60177"),
                                n.e("74074"),
                                n.e("1006"),
                                n.e("23276"),
                                n.e("30938"),
                                n.e("48720"),
                                n.e("56689"),
                                n.e("59880"),
                                n.e("74016"),
                                n.e("12168"),
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
                                    initialStep: tr.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var t6 = n(761508),
    t4 = n(449543);
function t5(e) {
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
function t7(e) {
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
function t8(e) {
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
var t9 = n(345394);
function ne(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: t9.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nt(e) {
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
function nn(e) {
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
function ni(e) {
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
function nr(e) {
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
function ns(e) {
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
var na = n(661531),
    no = n(996682);
function nl(e) {
    let {
        color: t = na.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, s.jsxs)("svg", {
        ...(0, no.A)({ "aria-label": n, "aria-hidden": i, role: r }),
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
function nu(e) {
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
var nc = n(78701);
function nd(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: a = 288, height: o = 192 } = e;
    return (0, s.jsx)("img", {
        style: { width: a, height: o },
        src: nc.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var n_ = n(462887),
    nh = n(736653),
    nf = n(259065),
    np = n(206835),
    nE = n(976860),
    nm = n(591179),
    ng = n(462463),
    nA = n(878784),
    nI = n(425713),
    nT = n(975807),
    nS = n(562819),
    ny = n(892035),
    nN = n(793943),
    nv = n(95035),
    nC = n(532794),
    nR = n(192444),
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
                                (0, s.jsx)(nD.C, { size: "sm", color: na.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(nw.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nw.default.xedPIb, { days: n }),
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
                                (0, s.jsx)(nL.C, { size: "sm", color: na.A.colors.TEXT_DEFAULT }),
                                (0, s.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(nw.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nw.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
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
    nH = n(758836),
    nj = n(190107),
    nY = n(466919),
    nW = n(555599),
    nK = n(817577);
let n$ =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    nz =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nq =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nX() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, nm.X)("useWhatsNewPerkCards"),
        i = (0, nO.O9)(),
        { logitechCard: r, steelseriesCard: o } = eh(),
        u = (0, L.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: d } = (0, ny.z$)("useWhatsNewPerkCards"),
        _ = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        h = _?.hasActiveTrial ?? !1,
        f = (0, ng.A)({ analyticsLocations: e }),
        m = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nf.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, nS.L)({ analyticsLocations: e }),
            );
        }, [e]),
        A = (0, a.useCallback)(() => {
            (0, eL.openUserSettings)(eD.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        T = () => {
            (0, nT.A)(nB.TE);
        },
        S = (0, a.useCallback)(() => {
            h
                ? (0, M.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, s.jsx)(e, { ...t });
                  })
                : (0, nC.A)({
                      subscriptionTier: $.pe.TIER_2,
                      initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, h]),
        N = (function (e) {
            let { fractionalState: t } = (0, eb.A)(),
                n = t === $.xc.FP_ONLY,
                i = (0, nA.$F)(),
                r = (0, nA.Xb)(),
                s = i?.status === nA.Wo.UPCOMING || n,
                o = (0, nI.N)(i?.id),
                u = (function () {
                    let e = (0, nA.$F)(),
                        t = (0, nx.P)(),
                        n = (0, nA.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = te()(),
                        r = te()(n),
                        s = e.status === nA.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                d = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion) && !s,
                _ = (0, nU.t)(),
                h = (0, nx.P)();
            return (0, a.useMemo)(() => {
                let t,
                    a = null != h ? q.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nk.T)($.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === nA.Wo.UPCOMING
                              ? q.intl.formatToPlainString(q.t.a1eKDi, { days: _?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return q.intl.formatToPlainString(q.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return q.intl.formatToPlainString(q.t.KDV8oD, {
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
                        title: null != i ? q.intl.string(i.nameUnformattedNitro) : n ? q.intl.string(q.t.tx9Fvw) : "",
                        pillText: q.intl.string(q.t["jyYgZ+"]),
                        primaryAsset: c,
                        primaryAssetClassName: l()(nF.pq, { [nF.n6]: s, [nF.kE]: d }),
                        caption: null != r ? q.intl.formatToPlainString(q.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: q.intl.string(q.t.jVcuVY),
                        onCtaClick: () => (0, nG.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, o, s, d, r, u, n, _, h, e]);
        })(e),
        { shouldShowBonusOrbsUX: v, multiplier: C } = (0, nR.lk)(nj.rE.NITRO_HOME_MARKETING),
        { isEligible: R, programReward: O } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        b = R && null != O && null != O.reward_amount && O.reward_amount > 0;
    return (0, a.useMemo)(() => {
        let e = [
                u ? null : r,
                u ? null : o,
                b
                    ? {
                          id: B.NITRO_ORBS_REWARDS_CARD_ID,
                          title: q.intl.string(nw.default.hx5AFp),
                          description: q.intl.format(nw.default.wq3CF2, { orbsCount: O.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: l()(nW.lH, nW.yK),
                          footerContent: (0, s.jsx)(nP, {}),
                          ctaText: q.intl.string(nw.default.BxjHiu),
                          onCtaClick: () => (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.ORBS)),
                      }
                    : null,
                v
                    ? {
                          id: B.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: q.intl.string(q.t.Csf5Ol),
                          description: q.intl.format(q.t.NpUfej, { bonusOrbMultiplier: C }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: () => (0, nE.pX)(K.BVt.QUEST_HOME),
                          primaryAssetClassName: nW.Nf,
                      }
                    : null,
                i
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: q.intl.string(nY.default.YkvksF),
                          description: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  q.intl.formatToPlainString(nY.default.JlyGQj, {
                                      totalSeats: nB.aw,
                                      premiumGroupProductName: (0, nB.DP)(),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: nW.LF,
                                      children: (0, s.jsx)(nv.A, {
                                          onClick: T,
                                          children: q.intl.string(nY.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: q.intl.string(q.t.oW0eUd),
                          primaryAsset: nK,
                          ctaIcon: eC.t,
                          ctaIconPosition: "start",
                          ctaText: q.intl.string(q.t.IJI7yk),
                          onCtaClick: S,
                      }
                    : null,
                {
                    id: B.DISPLAY_NAME_STYLES_CARD_ID,
                    title: q.intl.string(q.t.OLtTrt),
                    description: q.intl.string(q.t["di/pXR"]),
                    onCtaClick: t ? f : m,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    primaryAsset: n$,
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: q.intl.string(q.t.acc6h6),
                    description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nq,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, nN.nf)(nN.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: B.PERMADECOS_CARD_ID,
                          title: q.intl.string(q.t.L14NZN),
                          description: q.intl.string(q.t.eCZkAI),
                          primaryAsset: (0, s.jsx)(nd, { alt: "", ariaHidden: !0 }),
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: t ? f : g,
                      },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: q.intl.string(q.t["GU+wqh"]),
                    description: q.intl.string(q.t["1uPk1Z"]),
                    primaryAsset: nz,
                    ctaText: q.intl.string(q.t.y9TxXV),
                    onCtaClick: A,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            a = n ? 5 : 6;
        return (
            e.splice(+!!n, 0, N),
            d &&
                e.splice(1, 0, {
                    id: B.PROFILE_FRAMES_CARD_ID,
                    title: q.intl.string(q.t.SGBDnu),
                    description: q.intl.string(q.t.cMgegQ),
                    pillText: q.intl.string(q.t.y2b7CA),
                    primaryAsset:
                        "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                    primaryAssetClassName: l()(nW.lH, nW.yK),
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.PROFILE_FRAMES)),
                }),
            e.length > a && e.splice(a, e.length - a),
            e
        );
    }, [N, b, O, i, v, C, m, A, g, S, f, t, r, o, u, d]);
}
var nZ = n(355097),
    nQ = n(64514),
    nJ = n(121818),
    n0 =
        (((r = {}).BEST_OF_NITRO = "bestof"),
        (r.APPEARANCE_STYLE = "appearance"),
        (r.UPGRADES = "upgrades"),
        (r.VIP_EXTRAS = "vip"),
        r);
let n1 = [
    { id: "bestof", label: () => q.intl.string(q.t.q1u7nQ) },
    { id: "appearance", label: () => q.intl.string(q.t.CUnZkZ) },
    { id: "upgrades", label: () => q.intl.string(q.t.KC5q8v) },
    { id: "vip", label: () => q.intl.string(q.t.DjEAcv) },
];
var n2 = n(758495);
let n3 = (e) => {
    e.stopPropagation();
};
function n6(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, nh.DP)(),
                t = (0, nm.X)("useFavoritesPerkCards"),
                n = (0, nA.Lh)(),
                i = (0, nI.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, np.A)({ scrollPosition: nZ._F.TRY_IT_OUT, analyticsLocations: r }),
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
                    (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, ng.A)({ analyticsLocations: r }),
                f = (0, a.useCallback)(() => {
                    (0, eL.openUserSettings)(eD.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, nf.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                m = nX(),
                g = (0, a.useMemo)(() => m.map((e) => e?.id), [m]),
                A = (0, a.useMemo)(
                    () => [
                        {
                            id: B.SERVER_BOOSTS_CARD_ID,
                            title: q.intl.formatToPlainString(q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: q.intl.formatToPlainString(q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, s.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.PROFILES_CARD_ID,
                            title: q.intl.string(q.t.xDRab3),
                            description: q.intl.string(q.t.yn6fWA),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: t ? h : o,
                            primaryAsset: (0, s.jsx)(t7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.HD_VIDEO_CARD_ID,
                            title: q.intl.string(q.t["/mQ5gg"]),
                            description: q.intl.string(q.t["7WwAXh"]),
                            primaryAsset: (0, s.jsx)(t8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CLIENT_THEMES_CARD_ID,
                            title: q.intl.string(q.t.acc6h6),
                            description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nq,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.MORE_EMOJIS_CARD_ID,
                            title: q.intl.string(q.t.D8vIDT),
                            description: q.intl.string(q.t.DRMecB),
                            primaryAsset: (0, s.jsx)(ne, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.LARGE_UPLOADS_CARD_ID,
                            title: q.intl.string(q.t.nL1WZV),
                            description: q.intl.formatToPlainString(q.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, s.jsx)(nt, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CUSTOM_APP_ICONS_CARD_ID,
                            title: q.intl.string(q.t["GU+wqh"]),
                            description: q.intl.string(q.t["1uPk1Z"]),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nz,
                            categories: ["appearance"],
                        },
                        {
                            id: B.ENTRANCE_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t.WJfCPi),
                            description: q.intl.string(q.t.liQKJR),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: B.DISPLAY_NAME_STYLES_CARD_ID,
                            title: q.intl.string(q.t.OLtTrt),
                            description: q.intl.string(q.t["di/pXR"]),
                            onCtaClick: t ? h : f,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            primaryAsset: n$,
                            categories: ["appearance"],
                        },
                        {
                            id: B.CUSTOM_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t["Cu/oFd"]),
                            description: q.intl.string(q.t.czj2aa),
                            primaryAsset: (0, s.jsx)(nn, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SPECIAL_STICKERS_CARD_ID,
                            title: q.intl.string(q.t.MQoVeb),
                            description: q.intl.string(q.t.HGCLZX),
                            primaryAsset: (0, s.jsx)("div", {
                                className: nW.Uc,
                                children: (0, s.jsx)(ni, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SUPER_REACTIONS_CARD_ID,
                            title: q.intl.string(q.t.qERvAA),
                            description: q.intl.string(q.t.WkUWzx),
                            primaryAsset: (0, s.jsx)(nr, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.VIDEO_BACKGROUNDS_CARD_ID,
                            title: q.intl.string(q.t.ssVDYQ),
                            description: q.intl.string(q.t.aUSRMa),
                            primaryAsset: (0, n_.M)(e) ? nQ : nJ,
                            categories: ["upgrades"],
                        },
                        {
                            id: B.EARLY_ACCESS_CARD_ID,
                            title: q.intl.string(q.t["g/KRY6"]),
                            description: q.intl.string(q.t.JzAmJc),
                            primaryAsset: (0, s.jsx)(ns, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.BADGE_CARD_ID,
                            title: q.intl.string(q.t.Bn3CtB),
                            description: q.intl.string(q.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, s.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, s.jsx)(nl, { color: na.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: q.intl.string(q.t["MTD+7w"]),
                            description: q.intl.string(q.t.Bhs0s6),
                            ctaText: q.intl.string(q.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, s.jsx)(nu, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.PERMADECOS_CARD_ID,
                            title: q.intl.string(q.t.L14NZN),
                            description: q.intl.string(q.t.eCZkAI),
                            primaryAsset: (0, s.jsx)(nd, { alt: "", ariaHidden: !0 }),
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
            (0, s.jsx)(D.D, { variant: "display-sm", className: n2.R_, children: q.intl.string(q.t["Uh3+CA"]) }),
            (0, s.jsx)(t6.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: o,
                className: n2.Lq,
                "aria-label": q.intl.string(q.t["Uh3+CA"]),
                children: n1.map((e) =>
                    (0, s.jsx)(t6.V.Item, { id: e.id, className: n2.IC, children: e.label() }, e.id),
                ),
            }),
            (0, s.jsx)(
                t4.A,
                {
                    gap: 20,
                    className: n2.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, s.jsx)(
                                J.S,
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
        n = (0, nh.DP)();
    return (0, s.jsx)("img", {
        className: l()(n4.D, t),
        src: (0, n_.M)(n) ? "/assets/21902cbca2ef59da.svg" : "/assets/b7e36d2ae79c9741.svg",
        alt: "",
    });
};
var n7 = n(946062);
let n8 = (e) => {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, s.jsxs)("div", {
              className: l()(n7.kL, n7.Gd, n7.Eg),
              children: [(0, s.jsx)(n5, {}), (0, s.jsx)(tQ, {}), i],
          })
        : (0, s.jsx)(em.h, { color: "nitro-pink", className: l()(n7.kL, n7.Gd), offsetBottom: n, children: i });
};
function n9(e) {
    let { glowingPerkId: t = null } = e,
        n = nX();
    return (0, s.jsx)(er, {
        sectionClassName: ei.uW,
        heading: (0, s.jsx)(D.D, { variant: "display-sm", className: ei.R_, children: q.intl.string(q.t.Aw5DRm) }),
        grid: (0, s.jsx)(s.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, s.jsx)(
                    J.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: l()(ei.Nr, { [ei.Nq]: i }) },
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
            n = (0, v.ds)(),
            { isInNitroHomeHeaderTreatment: i } = (0, C.jy)("nitro_member_hub_header"),
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
            H = a.useRef(null),
            [j, Y] = a.useState(!1),
            W = null != B && null != L && L.status === K.Dmq.CANCELED,
            z = (0, b.iU)($.gD.PREMIUM_MONTH_TIER_2, B, L),
            X = !j && W,
            Z = null != L && L.status === K.Dmq.CANCELED,
            Q = i && !n && !Z,
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
                                      innerRef: H,
                                      onChange: (e) => Y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, s.jsx)(tj, {
                                          buttonVisibilityRef: H,
                                          className: n7.v1,
                                          userDiscountOffer: B,
                                          discountedPrice: z,
                                      }),
                                  }),
                                  (0, s.jsx)(eE, { glowingPerkId: k, glowingSectionId: x }),
                                  (0, s.jsx)(n9, { glowingPerkId: k }),
                                  (0, s.jsx)(n6, { glowingPerkId: k }),
                                  (0, s.jsx)(eI, {
                                      className: n7.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: K.liQ.NITRO_HOME, section: K.JJy.GIFT_BANNER },
                                  }),
                                  (0, s.jsx)("div", { className: n7.hz }),
                                  (0, s.jsx)(d.L, {
                                      innerRef: D,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (N.default.track(K.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
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
                                      alt: q.intl.string(q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      W &&
                          null != z &&
                          (0, s.jsx)(t3, {
                              isVisible: X && F,
                              premiumSubscription: L,
                              churnDiscountOffer: B,
                              discountedPrice: z,
                          }),
                  ],
              })
            : Q
              ? (0, s.jsxs)("div", {
                    className: l()(n7.kL, n7.Lq, n7.TN, n7.Eg),
                    children: [
                        (0, s.jsx)(tQ, {}),
                        (0, s.jsx)("div", { className: n7.S, children: (0, s.jsx)(_.y, {}) }),
                    ],
                })
              : (0, s.jsx)("div", { className: l()(n7.kL, n7.Lq), children: (0, s.jsx)(_.y, {}) });
    };
