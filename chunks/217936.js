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
    j = n(792656),
    H = n(985603),
    Y = n(777376),
    W = n(185797),
    K = n(652215),
    $ = n(788868),
    z = n(237146),
    q = n(375708),
    Z = n(74776);
function X(e) {
    let { openRewardModal: t } = e,
        n = (0, W.F)();
    if (n.kind === W.L.SUBSCRIBE)
        return (0, s.jsxs)("div", {
            className: Z.R$,
            children: [
                (0, s.jsx)(j.A, {
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
                className: Z.R$,
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
                    className: Z.ed,
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
        properties: { name: B.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: H.FZ },
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
                    className: l()(e, Z.kL),
                    children: (0, s.jsx)(V.A, {
                        cardType: G.s.CUSTOM,
                        cardClassName: Z.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, s.jsxs)("div", {
                            className: Z.XF,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: Z.j,
                                    children: [
                                        (0, s.jsx)("div", { className: Z._g }),
                                        (0, s.jsx)("div", { className: Z.$h }),
                                        (0, s.jsx)("div", { className: Z.Rv }),
                                        (0, s.jsx)("div", { className: Z.Lw }),
                                        (0, s.jsx)("div", { className: Z.mR }),
                                    ],
                                }),
                                (0, s.jsxs)("div", {
                                    className: Z.Qs,
                                    children: [
                                        (0, s.jsx)("img", {
                                            className: Z.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, s.jsx)(D.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: Z.DD,
                                            children: q.intl.string(z.default.RGT513),
                                        }),
                                        (0, s.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: Z.h_,
                                            children: q.intl.string(z.default["+pTnsf"]),
                                        }),
                                        (0, s.jsx)(X, { openRewardModal: r }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var J = n(486858);
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
        analyticsOptions: { thirdPartyPartner: H.FZ },
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
                        ? q.intl.format(q.t["1aEjsH"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                        : q.intl.format(q.t["+u3AOO"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                    : q.intl.format(q.t["omMr+V"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) })
                : q.intl.format(q.t["zWhX/Q"], { helpdeskArticle: es.A.getArticleURL(K.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: i, nReferralsSent: r.size, hasEligibleFriends: s, allSent: a, bodyText: o };
}
var e0 = n(212737),
    e1 = n(849812);
let e2 = (e) => {
        let { startingScreen: t, analyticsLocations: i } = e;
        C.default.track(K.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                return (n) => (0, s.jsx)(e, { ...n, startingScreen: t });
            });
    },
    e3 = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, ez.A)({ userId: t.id, size: eY._3.SIZE_24 });
        return (0, s.jsx)(
            eW.eu,
            { className: e1.bj, src: n, "aria-label": (0, eq.mG)(t), size: eY._3.SIZE_24, ...i },
            t.id,
        );
    },
    e6 = (e) => {
        let { slotIndex: t } = e;
        return (0, s.jsx)("div", { className: e1.p, children: t });
    },
    e4 = (e) => {
        let { referralSentUsers: t, className: n } = e;
        return (0, s.jsx)("div", {
            className: l()(e1.L$, n),
            children: (() => {
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
    },
    e5 = (e) => {
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
    },
    e7 = (e) => {
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
                                e2({
                                    startingScreen: e0.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e8 = n(989349),
    e9 = n.n(e8),
    te = n(496431),
    tt = n(116689);
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
                children: q.intl.string(q.t["/ARFVE"]),
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
    to = n(12052);
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
    tc = n(218199);
let td = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, s.jsx)(tu.F, {
        forceLevel: 1,
        children: (0, s.jsx)(D.D, { className: l()(tc.w, t, i && tc.n), variant: "display-md", color: n, children: r }),
    });
};
var t_ = n(690093);
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
                                children: q.intl.string(q.t.USo4s7),
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
                text: q.intl.string(q.t.Lm2nFc),
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
let tg = (e) => {
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
var tA = n(43588);
let tI = (e) => {
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
        t = { [tT.MORNING]: q.t["Wvc/I+"], [tT.AFTERNOON]: q.t["d+0STx"], [tT.EVENING]: q.t.CqsxKI };
    return q.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tT.MORNING : e >= 12 && e < 17 ? tT.AFTERNOON : tT.EVENING],
    );
}
var ty = n(97584),
    tC = n(202241);
let tN = (e) => {
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
        [v.CL.TREATMENT_A]: (e) => {
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
        [v.CL.TREATMENT_B]: (e) => {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: a,
                } = e,
                o = (0, c.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
                { visibilityPercentageRef: u, visibilityPercentage: d } = (0, eF.U)(!o),
                _ = q.intl.string(q.t.ifwQZb);
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
        [v.CL.TREATMENT_C]: (e) => {
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
    tb = n(447764),
    tD = n(180894);
let tL = (e) => {
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
    tP = n(975916);
let tx = () => {
    let e = { section: K.JJy.REVERSE_TRIAL_BANNER };
    return (0, s.jsxs)("div", {
        className: tP.vK,
        children: [
            (0, s.jsx)(tM.e4, { text: q.intl.string(q.t.qYKftX), className: tP.Io }),
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
                    children: q.intl.format(q.t.uu1WAa, { weeks: 1 }),
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
var tk = n(18671);
let tU = () => {
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
    },
    tG = (e) => {
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
                            (0, s.jsx)(eV.A, { text: q.intl.string(q.t.yhldRB) }),
                            (0, s.jsxs)(eN.B, {
                                align: "start",
                                gap: 12,
                                className: ty.rG,
                                children: [
                                    (0, s.jsx)(td, { children: q.intl.format(q.t.FwjP6W, { days: r }) }),
                                    (0, s.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: q.intl.string(q.t.Jf8KrT),
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
                                        buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                                        iconOverride: ev.t,
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
                        className: ty.Hk,
                        children: [(0, s.jsx)(ey, { alt: "", width: "100%", height: "auto" }), (0, s.jsx)(tU, {})],
                    }),
                ],
            }),
        });
    },
    tF = (e) => {
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
            y = null != h && h.status === K.Dmq.CANCELED,
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
            D = (0, b.U9)(O, $.pe.TIER_2) ? $.pe.TIER_2 : void 0,
            L = null != h && h.status !== K.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
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
                                                ? q.intl.format(q.t["3yZP0G"], { percent: f.discount.amount })
                                                : o,
                                    }),
                                    _ &&
                                        null != f &&
                                        null != m &&
                                        (0, s.jsx)(k.E, {
                                            className: ty.jG,
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
                                            text: q.intl.string(q.t.zrCzVB),
                                            onClick: () => {
                                                var e;
                                                return (
                                                    (e = ti.g.CONFIRM_DISCOUNT),
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
                                                                n.e("97271"),
                                                                n.e("67865"),
                                                                n.e("79989"),
                                                                n.e("50842"),
                                                                n.e("56405"),
                                                                n.e("22513"),
                                                                n.e("75120"),
                                                                n.e("25508"),
                                                                n.e("22256"),
                                                                n.e("87261"),
                                                                n.e("63160"),
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
                                                                n.e("25279"),
                                                                n.e("92789"),
                                                                n.e("57598"),
                                                                n.e("84967"),
                                                                n.e("31390"),
                                                                n.e("37687"),
                                                                n.e("43039"),
                                                                n.e("26780"),
                                                                n.e("44265"),
                                                                n.e("48804"),
                                                                n.e("8304"),
                                                                n.e("84103"),
                                                                n.e("17225"),
                                                                n.e("62875"),
                                                                n.e("30920"),
                                                                n.e("63095"),
                                                                n.e("70653"),
                                                                n.e("52266"),
                                                                n.e("53039"),
                                                                n.e("96123"),
                                                                n.e("92583"),
                                                                n.e("39810"),
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
                                                                n.e("31445"),
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
                                                                n.e("31790"),
                                                                n.e("43426"),
                                                                n.e("96443"),
                                                                n.e("65743"),
                                                                n.e("87079"),
                                                                n.e("88559"),
                                                                n.e("25637"),
                                                                n.e("60177"),
                                                                n.e("39665"),
                                                                n.e("23532"),
                                                                n.e("31644"),
                                                                n.e("76311"),
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
                            N,
                        ],
                    }),
                });
    },
    [tV, tB] = (0, ew.A)(),
    tj = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, N.ds)(),
            l = (0, eP.cg)(),
            u = (0, ex.QQ)(),
            d = (0, c.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            _ = null != d && d.status === K.Dmq.CANCELED && null != i,
            h = u && !_,
            f = q.intl.string(q.t.qYKftX),
            m = (0, eH.m)(),
            g = q.intl.string(q.t.ifwQZb),
            { fractionalState: A, endsAt: I } = (0, eb.A)(),
            T = (0, eO.Ay)(I, eO.yE.CREDITS_ENDS_IN),
            S = null;
        if (A === $.xc.NONE || o) S = (0, s.jsx)(eV.A, { text: f });
        else {
            h = !0;
            let e = q.intl.format(q.t["yR+oDD"], {
                helpCenterLink: es.A.getArticleURL(K.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
    tq = n(503255),
    tZ = n(525311);
let tX = () => {
    let e = (0, tW.Gh)("nitro_home_header"),
        t = a.useRef(null);
    return (0, s.jsxs)(tH.A, {
        section: K.JJy.NAVIGATION,
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
                                    "aria-label": q.intl.string(q.t.Ipxkog),
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
            e && (0, s.jsx)(t$.O, { targetElementRef: t, body: q.intl.string(q.t.EqUw7K) }),
        ],
    });
};
var tQ = n(308186),
    tJ = n(717421),
    t0 = n(98812),
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
                    icon: ev.t,
                    size: "md",
                    text: q.intl.string(q.t.zrCzVB),
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
                                n.e("97271"),
                                n.e("67865"),
                                n.e("79989"),
                                n.e("50842"),
                                n.e("56405"),
                                n.e("22513"),
                                n.e("75120"),
                                n.e("25508"),
                                n.e("22256"),
                                n.e("87261"),
                                n.e("63160"),
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
                                n.e("25279"),
                                n.e("92789"),
                                n.e("57598"),
                                n.e("84967"),
                                n.e("31390"),
                                n.e("37687"),
                                n.e("43039"),
                                n.e("26780"),
                                n.e("44265"),
                                n.e("48804"),
                                n.e("8304"),
                                n.e("84103"),
                                n.e("17225"),
                                n.e("62875"),
                                n.e("30920"),
                                n.e("63095"),
                                n.e("70653"),
                                n.e("52266"),
                                n.e("53039"),
                                n.e("96123"),
                                n.e("92583"),
                                n.e("39810"),
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
                                n.e("31445"),
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
                                n.e("31790"),
                                n.e("43426"),
                                n.e("96443"),
                                n.e("65743"),
                                n.e("87079"),
                                n.e("88559"),
                                n.e("25637"),
                                n.e("60177"),
                                n.e("39665"),
                                n.e("23532"),
                                n.e("31644"),
                                n.e("76311"),
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
    nM = n(490285),
    nP = n(875679);
let nx = () => {
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
                                    children: q.intl.string(nM.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nM.default.xedPIb, { days: n }),
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
                                    children: q.intl.string(nM.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, s.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nM.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
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
    nV = n(792641),
    nB = n(714206),
    nj = n(88001),
    nH = n(758836),
    nY = n(190107),
    nW = n(466919),
    nK = n(555599),
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
        }, []),
        T = () => {
            (0, nT.A)(nj.TE);
        },
        S = (0, a.useCallback)(() => {
            h
                ? (0, M.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, s.jsx)(e, { ...t });
                  })
                : (0, nv.A)({
                      subscriptionTier: $.pe.TIER_2,
                      initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, h]),
        C = (function (e) {
            let { fractionalState: t } = (0, eb.A)(),
                n = t === $.xc.FP_ONLY,
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
                    a = null != h ? q.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nU.T)($.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === ng.Wo.UPCOMING
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
                                (0, nU.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let c = null;
                return (
                    null != o ? (c = s || d ? o.standard : o.ambientLarge) : n && (c = nB),
                    {
                        id: B.TENURE_BADGE_CARD_ID,
                        title: null != i ? q.intl.string(i.nameUnformattedNitro) : n ? q.intl.string(q.t.tx9Fvw) : "",
                        pillText: q.intl.string(q.t["jyYgZ+"]),
                        primaryAsset: c,
                        primaryAssetClassName: l()(nV.pq, { [nV.n6]: s, [nV.kE]: d }),
                        caption: null != r ? q.intl.formatToPlainString(q.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: q.intl.string(q.t.jVcuVY),
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
                          title: q.intl.string(nM.default.hx5AFp),
                          description: q.intl.format(nM.default.wq3CF2, { orbsCount: O.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: l()(nK.lH, nK.yK),
                          footerContent: (0, s.jsx)(nx, {}),
                          ctaText: q.intl.string(nM.default.BxjHiu),
                          onCtaClick: () => (0, np.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.ORBS)),
                      }
                    : null,
                N
                    ? {
                          id: B.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: q.intl.string(q.t.Csf5Ol),
                          description: q.intl.format(q.t.NpUfej, { bonusOrbMultiplier: v }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: () => (0, nO.navigateToQuestHome)({ fromContent: nI.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: nK.Nf,
                      }
                    : null,
                i
                    ? {
                          id: B.PREMIUM_GROUP_CARD_ID,
                          title: q.intl.string(nW.default.YkvksF),
                          description: (0, s.jsxs)(s.Fragment, {
                              children: [
                                  q.intl.formatToPlainString(nW.default.JlyGQj, {
                                      totalSeats: nj.aw,
                                      premiumGroupProductName: (0, nj.DP)(),
                                  }),
                                  (0, s.jsx)("div", {
                                      className: nK.LF,
                                      children: (0, s.jsx)(nN.A, {
                                          onClick: T,
                                          children: q.intl.string(nW.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: q.intl.string(q.t.oW0eUd),
                          primaryAsset: n$,
                          ctaIcon: ev.t,
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
                    primaryAsset: nz,
                },
                {
                    id: B.CLIENT_THEMES_CARD_ID,
                    title: q.intl.string(q.t.acc6h6),
                    description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nZ,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, nC.nf)(nC.HP.CUSTOM_THEME);
                    },
                },
                d
                    ? null
                    : {
                          id: B.PERMADECOS_CARD_ID,
                          title: q.intl.string(q.t.L14NZN),
                          description: q.intl.string(q.t.eCZkAI),
                          primaryAsset: (0, s.jsx)(nc, { alt: "", ariaHidden: !0 }),
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: t ? f : g,
                      },
                {
                    id: B.CUSTOM_APP_ICONS_CARD_ID,
                    title: q.intl.string(q.t["GU+wqh"]),
                    description: q.intl.string(q.t["1uPk1Z"]),
                    primaryAsset: nq,
                    ctaText: q.intl.string(q.t.y9TxXV),
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
                    title: q.intl.string(q.t.SGBDnu),
                    description: q.intl.string(q.t.cMgegQ),
                    pillText: q.intl.string(q.t.y2b7CA),
                    primaryAsset:
                        "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                    primaryAssetClassName: l()(nK.lH, nK.yK),
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => (0, np.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nH.G2.PROFILE_FRAMES)),
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
    { id: "bestof", label: () => q.intl.string(q.t.q1u7nQ) },
    { id: "appearance", label: () => q.intl.string(q.t.CUnZkZ) },
    { id: "upgrades", label: () => q.intl.string(q.t.KC5q8v) },
    { id: "vip", label: () => q.intl.string(q.t.DjEAcv) },
];
var n3 = n(758495);
let n6 = (e) => {
    e.stopPropagation();
};
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
                    (0, np.pX)(K.BVt.COLLECTIBLES_SHOP);
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
                            title: q.intl.formatToPlainString(q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: q.intl.formatToPlainString(q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, s.jsx)(t4, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.PROFILES_CARD_ID,
                            title: q.intl.string(q.t.xDRab3),
                            description: q.intl.string(q.t.yn6fWA),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: t ? h : o,
                            primaryAsset: (0, s.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.HD_VIDEO_CARD_ID,
                            title: q.intl.string(q.t["/mQ5gg"]),
                            description: q.intl.string(q.t["7WwAXh"]),
                            primaryAsset: (0, s.jsx)(t7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CLIENT_THEMES_CARD_ID,
                            title: q.intl.string(q.t.acc6h6),
                            description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nZ,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: B.MORE_EMOJIS_CARD_ID,
                            title: q.intl.string(q.t.D8vIDT),
                            description: q.intl.string(q.t.DRMecB),
                            primaryAsset: (0, s.jsx)(t9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.LARGE_UPLOADS_CARD_ID,
                            title: q.intl.string(q.t.nL1WZV),
                            description: q.intl.formatToPlainString(q.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, s.jsx)(ne, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: B.CUSTOM_APP_ICONS_CARD_ID,
                            title: q.intl.string(q.t["GU+wqh"]),
                            description: q.intl.string(q.t["1uPk1Z"]),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nq,
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
                            primaryAsset: nz,
                            categories: ["appearance"],
                        },
                        {
                            id: B.CUSTOM_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t["Cu/oFd"]),
                            description: q.intl.string(q.t.czj2aa),
                            primaryAsset: (0, s.jsx)(nt, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SPECIAL_STICKERS_CARD_ID,
                            title: q.intl.string(q.t.MQoVeb),
                            description: q.intl.string(q.t.HGCLZX),
                            primaryAsset: (0, s.jsx)("div", {
                                className: nK.Uc,
                                children: (0, s.jsx)(nn, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.SUPER_REACTIONS_CARD_ID,
                            title: q.intl.string(q.t.qERvAA),
                            description: q.intl.string(q.t.WkUWzx),
                            primaryAsset: (0, s.jsx)(ni, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: B.VIDEO_BACKGROUNDS_CARD_ID,
                            title: q.intl.string(q.t.ssVDYQ),
                            description: q.intl.string(q.t.aUSRMa),
                            primaryAsset: (0, nd.M)(e) ? nJ : n0,
                            categories: ["upgrades"],
                        },
                        {
                            id: B.EARLY_ACCESS_CARD_ID,
                            title: q.intl.string(q.t["g/KRY6"]),
                            description: q.intl.string(q.t.JzAmJc),
                            primaryAsset: (0, s.jsx)(nr, { alt: "", ariaHidden: !0 }),
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
                                    : (0, s.jsx)(no, { color: ns.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: q.intl.string(q.t["MTD+7w"]),
                            description: q.intl.string(q.t.Bhs0s6),
                            ctaText: q.intl.string(q.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, s.jsx)(nl, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: B.PERMADECOS_CARD_ID,
                            title: q.intl.string(q.t.L14NZN),
                            description: q.intl.string(q.t.eCZkAI),
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
            (0, s.jsx)(D.D, { variant: "display-sm", className: n3.R_, children: q.intl.string(q.t["Uh3+CA"]) }),
            (0, s.jsx)(t3.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: o,
                className: n3.Lq,
                "aria-label": q.intl.string(q.t["Uh3+CA"]),
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
                                J.S,
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
var n5 = n(948562);
let n7 = (e) => {
    let { className: t } = e,
        n = (0, n_.DP)();
    return (0, s.jsx)("img", {
        className: l()(n5.D, t),
        src: (0, nd.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var n8 = n(946062);
let n9 = (e) => {
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
            W = null != B && null != L && L.status === K.Dmq.CANCELED,
            z = (0, b.iU)($.gD.PREMIUM_MONTH_TIER_2, B, L),
            Z = !H && W,
            X = null != L && L.status === K.Dmq.CANCELED,
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
                                          discountedPrice: z,
                                      }),
                                  }),
                                  (0, s.jsx)(eE, { glowingPerkId: k, glowingSectionId: x }),
                                  (0, s.jsx)(ie, { glowingPerkId: k }),
                                  (0, s.jsx)(n4, { glowingPerkId: k }),
                                  (0, s.jsx)(eI, {
                                      className: n8.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: K.liQ.NITRO_HOME, section: K.JJy.GIFT_BANNER },
                                  }),
                                  (0, s.jsx)("div", { className: n8.hz }),
                                  (0, s.jsx)(d.L, {
                                      innerRef: D,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (C.default.track(K.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
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
                                      alt: q.intl.string(q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      W &&
                          null != z &&
                          (0, s.jsx)(t2, {
                              isVisible: Z && F,
                              premiumSubscription: L,
                              churnDiscountOffer: B,
                              discountedPrice: z,
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
