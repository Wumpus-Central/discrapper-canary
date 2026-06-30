"use strict";
n.d(t, { Ay: () => iT, WU: () => iI, x6: () => iA }), n(321073), n(323874), n(14289), n(35956);
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
    g = n(949030),
    A = n(611924),
    I = n(961250),
    T = n(366505),
    S = n(841595),
    y = n(903209),
    C = n(166403),
    N = n(174459),
    v = n(881489),
    R = n(7066),
    O = n(131168),
    b = n(482589),
    D = n(410516),
    L = n(534514),
    w = n(31502),
    M = n(562708),
    P = n(192308),
    x = n(821609),
    k = n(885574),
    U = n(834730),
    G = n(43990),
    F = n(993077),
    V = n(139286),
    B = n(872725),
    j = n(920050),
    H = n(792656);
n(985603);
var Y = n(777376),
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
        return (0, a.jsxs)("div", {
            className: Z.R$,
            children: [
                (0, a.jsx)(H.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: $.pe.TIER_2,
                }),
                (0, a.jsx)(x.$, { variant: "secondary", size: "md", text: q.intl.string(q.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === Y.p.CLAIMED ? { text: q.intl.string(z.default.Plwzgf) } : { text: q.intl.string(q.t.hvVgAZ) };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: Z.R$,
                children: [
                    (0, a.jsx)(x.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === Y.p.CLAIM_IN_PROGRESS &&
                (0, a.jsxs)("div", {
                    className: Z.ed,
                    children: [
                        (0, a.jsx)(k.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, a.jsx)(U.E, {
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
    (0, V.A)({
        type: M.ImpressionTypes.VIEW,
        name: M.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: j.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: "xbox" },
    });
    let { analyticsLocations: i } = (0, m.Ay)(E.A.CROISSANT_PREMIUM_HERO_CARD),
        r = o.useCallback(() => {
            (0, P.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, a.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, a.jsx)(G.N, {
        theme: K.NJ8.DARKER,
        children: (e) =>
            (0, a.jsx)(m.f5, {
                value: i,
                children: (0, a.jsx)("div", {
                    className: u()(e, Z.kL),
                    children: (0, a.jsx)(B.A, {
                        cardType: F.s.CUSTOM,
                        cardClassName: Z.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, a.jsxs)("div", {
                            className: Z.XF,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: Z.j,
                                    children: [
                                        (0, a.jsx)("div", { className: Z._g }),
                                        (0, a.jsx)("div", { className: Z.$h }),
                                        (0, a.jsx)("div", { className: Z.Rv }),
                                        (0, a.jsx)("div", { className: Z.Lw }),
                                        (0, a.jsx)("div", { className: Z.mR }),
                                    ],
                                }),
                                (0, a.jsxs)("div", {
                                    className: Z.Qs,
                                    children: [
                                        (0, a.jsx)("img", {
                                            className: Z.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, a.jsx)(L.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: Z.DD,
                                            children: q.intl.string(z.default.RGT513),
                                        }),
                                        (0, a.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: Z.h_,
                                            children: q.intl.string(z.default["+pTnsf"]),
                                        }),
                                        (0, a.jsx)(X, { openRewardModal: r }),
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
        r = { isThirdPartyPerk: !0 },
        s =
            i.kind === W.L.SUBSCRIBE
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
    return (0, a.jsx)(J.S, {
        id: j.XBOX_PREMIUM_PERK_CARD_ID,
        title: q.intl.string(z.default.UVL9tD),
        description: q.intl.string(z.default["I+IXr0"]),
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
function et(e) {
    let { analyticsLocations: t } = (0, m.Ay)(E.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, a.jsx)(m.f5, { value: t, children: (0, a.jsx)(ee, { ...e }) });
}
var en = n(367791),
    ei = n(672193);
function er(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: s, gridClassName: o } = e,
        l = ei.Ui;
    return (0, a.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != s ? (0, a.jsx)("div", { className: u()(l, null != r && en.Jx, o), children: s }) : null,
        ],
    });
}
var es = n(975571),
    ea = n(149995),
    eo = n(398523),
    el = n(881373),
    eu = n(581921),
    ec = n(3074),
    ed = n(852218),
    e_ = n(382259),
    eh = n(962995);
function ef() {
    let { analyticsLocations: e } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, el.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = eo.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, ea.Zk)({ location: "useHardwarePartnerPerkCards" }),
        r = (0, ea.S9)({ location: "useHardwarePartnerPerkCards" }),
        s = null === (0, ec.N)(),
        l = (0, w.l)("useHardwarePartnerPerkCards"),
        { currentDate: u, nDaysInMonth: c } = (0, o.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, o.useMemo)(() => {
        let o = l ? void 0 : q.intl.string(q.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: j.LOGITECH_3PP_CARD_ID,
                      title: q.intl.string(eh.default.OlObRa),
                      description: q.intl.format(eh.default.ZGOJ8R, {
                          discountPercent: el.aW,
                          termsUrl: es.A.getArticleURL(K.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      progress: u.getDate() / c,
                      ctaText: q.intl.string(q.t.w7s5Qr),
                      onCtaClick: () => (0, eu.P)({ partnerId: ed.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: o,
                      caption: (0, a.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ed.XY },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: j.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: q.intl.string(q.t.m7PucM),
                      description: i
                          ? r
                              ? q.intl.format(q.t["1Zw6xL"], {})
                              : q.intl.format(q.t.KWdCO0, {})
                          : q.intl.format(q.t.zh1X7u, {}),
                      descriptionNote:
                          !r && i
                              ? q.intl.format(q.t.vblnHk, {
                                    partnerName: ed.CD[ed.Cs].label,
                                    helpdeskArticle: es.A.getArticleURL(K.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      isThirdPartyPerk: !0,
                      pillText: o,
                      caption: (0, a.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: u.getDate() / c,
                      ctaText: q.intl.string(q.t.w7s5Qr),
                      onCtaClick: () => (0, e_.u)({ analyticsLocations: e, partnerIds: [ed.KS, ed.Cs], isLocked: !1 }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ed.KS },
                      ctaDisabled: s,
                      ctaLoading: s,
                  }
                : null,
        };
    }, [l, e, u, t, c, n, i, r, s]);
}
var ep = n(102338);
let eE = "xgpp";
function em(e) {
    let { glowingSectionId: t, glowingPerkId: n } = e,
        i = (0, w.l)("premium_subscriber_home_rewards"),
        { logitechCard: r, steelseriesCard: s } = ef();
    if (!i) return null;
    let o = null != r || null != s;
    return (0, a.jsx)(er, {
        id: eE,
        sectionClassName: u()(ep.uW, ep.Uv, ep.qr),
        heading: (0, a.jsx)(L.D, {
            variant: "display-sm",
            className: u()(ei.R_, en.U6),
            children: q.intl.string(q.t.NG1e6l),
        }),
        beforeGrid: (0, a.jsx)("div", { className: en.JE, children: (0, a.jsx)(Q, { glowing: t === eE }) }),
        grid: o
            ? (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(et, { containerClassName: ei.Nr }),
                      null != r && (0, a.jsx)(J.S, { ...r, containerClassName: ei.Nr, glowing: n === r.id }),
                      null != s && (0, a.jsx)(J.S, { ...s, containerClassName: ei.Nr, glowing: n === s.id }),
                  ],
              })
            : null,
    });
}
var eg = n(315629),
    eA = n(65470),
    eI = n(797221);
let eT = function (e) {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, m.Ay)(n);
    return (0, a.jsx)(m.f5, {
        value: r,
        children: (0, a.jsxs)(eg.h, {
            className: u()(eI.kL, eI.pm, t),
            color: "purple",
            children: [
                (0, a.jsxs)("div", {
                    className: eI.FS,
                    children: [
                        (0, a.jsx)(L.D, {
                            variant: "heading-xxl/bold",
                            className: eI.R_,
                            children: q.intl.string(q.t.Ve9Ge6),
                        }),
                        (0, a.jsx)(U.E, { variant: "text-md/medium", children: q.intl.string(q.t.yQ06u1) }),
                        (0, a.jsx)("div", {
                            className: eI.SB,
                            children: (0, a.jsx)(eA.A, {
                                buttonTextOverride: q.intl.string(q.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eI._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eS = n(877624);
let ey =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: ey,
        srcSet: `${ey} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var eN = n(502572),
    ev = n(331322),
    eR = n(403581),
    eO = n(775602),
    eb = n(366999),
    eD = n(531260),
    eL = n(780964),
    ew = n(766075),
    eM = n(786300),
    eP = n(428262),
    ex = n(960851),
    ek = n(89366),
    eU = n(422936),
    eG = n(234419),
    eF = n(549996),
    eV = n(810660),
    eB = n(175569),
    ej = n(371764),
    eH = n(949964),
    eY = n(103411),
    eW = n(778712),
    eK = n(97808),
    e$ = n(590251),
    ez = n(144165),
    eq = n(854627),
    eZ = n(427262),
    eX = n(851746),
    eQ = n(326084),
    eJ = n(664654);
function e0() {
    var e, t, n;
    let { referralSentUsers: i } = (0, eJ.J)(),
        r = (0, d.bG)([eX.A], () => eX.A.getRecipientStatus()),
        s = (0, d.bG)([eX.A], () => eX.A.getHasEligibleFriends()),
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
function e3(e) {
    let { startingScreen: t, analyticsLocations: i } = e;
    N.default.track(K.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: i }),
        (0, P.openModalLazy)(async () => {
            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
            return (n) => (0, a.jsx)(e, { ...n, startingScreen: t });
        });
}
function e6(e) {
    let { user: t } = e,
        { avatarSrc: n, eventHandlers: i } = (0, eq.A)({ userId: t.id, size: eW._3.SIZE_24 });
    return (0, a.jsx)(
        eK.eu,
        { className: e2.bj, src: n, "aria-label": (0, eZ.mG)(t), size: eW._3.SIZE_24, ...i },
        t.id,
    );
}
function e4(e) {
    let { slotIndex: t } = e;
    return (0, a.jsx)("div", { className: e2.p, children: t });
}
function e5(e) {
    let { referralSentUsers: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: u()(e2.L$, n),
        children: (function () {
            let e = [];
            for (let n = 0; n < eJ.Z; n++)
                if (t?.[n] !== void 0) {
                    let i = (0, a.jsx)(e6, { user: t[n] }, t[n].id);
                    e.push(i);
                } else {
                    let t = (0, a.jsx)(e4, { slotIndex: n + 1 }, n);
                    e.push(t);
                }
            return e;
        })(),
    });
}
function e7(e) {
    let { nReferralsSent: t, imageSize: n = 93, backgroundClassName: i, ringClassName: r } = e;
    return (0, a.jsx)(e$.a, {
        percent: 33.3 * t,
        colorOverride: "#53ac66",
        background: i ?? e2.cq,
        strokeSize: 0.8,
        ringColorOverrideClassName: r ?? e2.e0,
        overlayClassName: t === eJ.Z ? e2.ys : void 0,
        children: (0, a.jsx)(ez._, {
            src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
            height: n,
            width: n,
            zoomable: !1,
        }),
    });
}
function e8(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = e0();
    return (0, a.jsxs)("div", {
        className: u()(e2.kL, t),
        children: [
            (0, a.jsx)("div", { className: e2.G3, children: (0, a.jsx)(e7, { nReferralsSent: i }) }),
            (0, a.jsxs)("div", {
                className: e2.IH,
                children: [
                    (0, a.jsx)(e5, { referralSentUsers: n, className: e2.GV }),
                    (0, a.jsxs)("div", {
                        className: e2.n4,
                        children: [
                            (0, a.jsx)(L.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: q.intl.string(q.t.USo4s7),
                            }),
                            (0, a.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, a.jsx)(x.$, {
                        variant: "primary",
                        disabled: !1 === r || !0 === s,
                        text: q.intl.string(q.t.Lm2nFc),
                        onClick: () =>
                            e3({ startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
                    }),
                ],
            }),
        ],
    });
}
var e9 = n(989349),
    te = n.n(e9),
    tt = n(496431),
    tn = n(116689);
let ti = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, tt.A)(te()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: s, minutes: o, seconds: l } = i,
        c = [
            { unitValue: r, unitType: "days" },
            { unitValue: s, unitType: "hours" },
            { unitValue: o, unitType: "minutes" },
            { unitValue: l, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: u()(tn.Xl, n),
        children: [
            (0, a.jsx)(U.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: q.intl.string(q.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: tn.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: tn.bh,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: tn.kB,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, a.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: tn.B2,
                                                        children: (0, a.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(U.E, {
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
                                    (0, a.jsx)(U.E, {
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
    ta = n(660184),
    to = n(287809),
    tl = n(12052);
function tu() {
    let e = (0, d.bG)([to.default], () => to.default.getCurrentUser()),
        t = (0, ts.A)(),
        { avatarSrc: n, avatarDecorationSrc: i, eventHandlers: r } = (0, eq.A)({ userId: e?.id, size: eW._3.SIZE_56 });
    if (null == e) return null;
    let s = (0, eZ.mG)(e);
    return (0, a.jsxs)("div", {
        className: tl.kL,
        children: [
            (0, a.jsx)("div", {
                className: tl.my,
                children: (0, a.jsx)(eK.eu, {
                    src: n,
                    avatarDecoration: i,
                    size: eW._3.SIZE_56,
                    "aria-label": s,
                    ...r,
                }),
            }),
            (0, a.jsx)("div", { className: tl.QC, children: (0, a.jsx)(ta.A, { userName: s, displayNameStyles: t }) }),
        ],
    });
}
var tc = n(707554),
    td = n(218199);
let t_ = function (e) {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, a.jsx)(tc.F, {
        forceLevel: 1,
        children: (0, a.jsx)(L.D, { className: u()(td.w, t, i && td.n), variant: "display-md", color: n, children: r }),
    });
};
var th = n(690093);
function tf(e) {
    let { className: t } = e,
        { referralSentUsers: n, nReferralsSent: i, hasEligibleFriends: r, allSent: s, bodyText: o } = e0();
    return (0, a.jsxs)("div", {
        className: u()(th.kL, t),
        children: [
            (0, a.jsx)("div", {
                className: th.G3,
                children: (0, a.jsx)(e7, {
                    nReferralsSent: i,
                    imageSize: 65,
                    backgroundClassName: th.HP,
                    ringClassName: th.pZ,
                }),
            }),
            (0, a.jsxs)("div", {
                className: th.IH,
                children: [
                    (0, a.jsxs)("div", {
                        className: th.n4,
                        children: [
                            (0, a.jsx)(L.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: q.intl.string(q.t.USo4s7),
                            }),
                            (0, a.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: o }),
                        ],
                    }),
                    (0, a.jsx)(e5, { referralSentUsers: n, className: th.t7 }),
                ],
            }),
            (0, a.jsx)(x.$, {
                variant: "primary",
                disabled: !1 === r || !0 === s,
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
let tA = function (e) {
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
        E = (0, tp.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        m = (0, tE.TM)();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(tg.A, {
                supportHEVCAlpha: m,
                isMotionReduced: E,
                containerVisibilityPercentage: t,
                containerClassName: n,
                assetClassName: i,
                animationSpeedScale: p,
            }),
            (0, a.jsx)(tm.A, {
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
var tI = n(43588);
let tT = function (e) {
    let { containerVisibilityPercentage: t, compact: n } = e;
    return (0, a.jsx)(tA, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: u()(tI.wG, n && tI.Vx),
        flyingWumpusAssetClassName: u()(tI.lu, n && tI.ov),
        boltContainerClassName: u()(tI.nJ, n && tI.Wc),
        hammerContainerClassName: u()(tI.Gj, n && tI.XA),
        keyContainerClassName: u()(tI.FV, n && tI.oZ),
        starContainerClassName: u()(tI.E1, n && tI.LN),
        boltAssetClassName: u()(tI.j7, n && tI.QN),
        hammerAssetClassName: u()(tI.Wv, n && tI.B9),
        keyAssetClassName: u()(tI.rs, n && tI.I1),
        starAssetClassName: u()(tI.OY, n && tI.b$),
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
var tC = n(97584),
    tN = n(202241);
let tv = function (e) {
        let { containerVisibilityPercentage: t, compact: n } = e;
        return (0, a.jsx)(tA, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: u()(tN.wG, n && tN.Vx),
            flyingWumpusAssetClassName: u()(tN.lu, n && tN.ov),
            boltContainerClassName: u()(tN.nJ, n && tN.Wc),
            hammerContainerClassName: u()(tN.Gj, n && tN.XA),
            keyContainerClassName: u()(tN.FV, n && tN.oZ),
            starContainerClassName: u()(tN.E1, n && tN.LN),
            boltAssetClassName: u()(tN.j7, n && tN.QN),
            hammerAssetClassName: u()(tN.Wv, n && tN.B9),
            keyAssetClassName: u()(tN.rs, n && tN.I1),
            starAssetClassName: u()(tN.OY, n && tN.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tR = {
        [R.CL.TREATMENT_A]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, eV.U)(!o),
                _ = ty();
            return (0, a.jsx)("div", {
                className: u()(tC.kL, tC.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tC.W2, tC.HQ),
                    ref: l,
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tC.ZU,
                            children: [
                                i && n,
                                (0, a.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(t_, {
                                            className: tC.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: _,
                                        }),
                                        (0, a.jsx)(tu, {}),
                                    ],
                                }),
                                s && (0, a.jsx)(tf, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tC.y3,
                            children: (0, a.jsx)(tT, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [R.CL.TREATMENT_B]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = (0, d.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
                { visibilityPercentageRef: l, visibilityPercentage: c } = (0, eV.U)(!o),
                _ = q.intl.string(q.t.ifwQZb);
            return (0, a.jsx)("div", {
                className: u()(tC.kL, tC.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tC.W2, tC.m8),
                    ref: l,
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tC.Y0,
                            children: [
                                i && n,
                                (0, a.jsx)("div", {
                                    className: u()(tC.N1, tC.v8),
                                    children: (0, a.jsx)(t_, {
                                        className: tC.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: _,
                                    }),
                                }),
                                s && (0, a.jsx)(tf, {}),
                            ],
                        }),
                        (0, a.jsx)("div", {
                            className: tC.BF,
                            children: (0, a.jsx)(tv, { containerVisibilityPercentage: c, compact: !s }),
                        }),
                    ],
                }),
            });
        },
        [R.CL.TREATMENT_C]: function (e) {
            let {
                    className: t,
                    headingTop: n,
                    showPill: i,
                    buttonVisibilityRef: r,
                    shouldShowReferralProgressBar: s,
                } = e,
                o = ty();
            return (0, a.jsx)("div", {
                className: u()(tC.kL, tC.Eg, t),
                ref: r,
                children: (0, a.jsxs)("div", {
                    className: u()(tC.W2, tC.J_),
                    children: [
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 32,
                            className: tC.$S,
                            children: [
                                i && n,
                                (0, a.jsxs)(ev.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, a.jsx)(t_, {
                                            className: tC.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: o,
                                        }),
                                        (0, a.jsx)(tu, {}),
                                    ],
                                }),
                            ],
                        }),
                        s && (0, a.jsx)("div", { className: tC.Pq, children: (0, a.jsx)(tf, {}) }),
                    ],
                }),
            });
        },
    };
function tO(e) {
    let { treatment: t, ...n } = e,
        i = tR[t];
    return null != i ? (0, a.jsx)(i, { ...n }) : null;
}
var tb = n(652533),
    tD = n(447764),
    tL = n(180894);
let tw = function (e) {
    let { containerVisibilityPercentage: t } = e,
        n = (0, tp.bG)([eO.Ay], () => eO.Ay.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: tD.BI,
                children: (0, a.jsx)(tb.Ay, {
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
                    children: (0, a.jsx)("img", { src: tL.A, alt: "", className: tD.Q }),
                }),
            }),
            (0, a.jsx)(tm.A, {
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
let tk = function () {
    let e = { section: K.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: tx.vK,
        children: [
            (0, a.jsx)(tP.e4, { text: q.intl.string(q.t.qYKftX), className: tx.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tx._u,
            }),
            (0, a.jsx)("div", {
                className: tx.IP,
                children: (0, a.jsx)(U.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: q.intl.format(q.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(tM.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tx.aA,
                shinyButtonClassName: tx.Xp,
            }),
        ],
    });
};
var tU = n(18671);
let tG = function () {
    let e = (0, tp.bG)([eO.Ay], () => eO.Ay.useReducedMotion);
    return (0, a.jsx)(tm.A, {
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
};
function tF(e) {
    let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
        r = (0, v.Zb)(t);
    return (0, a.jsx)("div", {
        className: u()(tC.kL, n),
        ref: i,
        children: (0, a.jsxs)("div", {
            className: tC.ap,
            children: [
                (0, a.jsxs)(ev.B, {
                    align: "start",
                    gap: 32,
                    children: [
                        (0, a.jsx)(eB.A, { text: q.intl.string(q.t.yhldRB) }),
                        (0, a.jsxs)(ev.B, {
                            align: "start",
                            gap: 12,
                            className: tC.rG,
                            children: [
                                (0, a.jsx)(t_, { children: q.intl.format(q.t.FwjP6W, { days: r }) }),
                                (0, a.jsx)(U.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children: q.intl.string(q.t.Jf8KrT),
                                }),
                            ],
                        }),
                        (0, a.jsxs)(ev.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 12,
                            children: [
                                (0, a.jsx)(H.A, {
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["2+luBl"]),
                                    iconOverride: eR.t,
                                    variantOverride: "expressive",
                                }),
                                (0, a.jsx)(x.$, {
                                    variant: "secondary",
                                    size: "md",
                                    text: q.intl.string(q.t.Af7ye6),
                                    onClick: () => (0, ew.openUserSettings)(eL.X.SUBSCRIPTIONS_PANEL),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: tC.Hk,
                    children: [(0, a.jsx)(eC, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(tG, {})],
                }),
            ],
        }),
    });
}
function tV(e) {
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
        } = tj(),
        { treatment: A, isInNitroHomeHeaderTreatment: I } = (0, R.jy)("subscriber_home_hero"),
        { analyticsLocations: T } = (0, m.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
        S = (0, eF.c)(eS.C.MARKETING_PAGE_BANNER),
        y = null != h && h.status === K.Dmq.CANCELED,
        C = I && !y,
        N = null;
    null != S && "marketingPageBanner" === S.properties.properties.oneofKind
        ? (N = (0, a.jsx)(ej.x, {
              componentId: S.id,
              promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
          }))
        : i
          ? (N = (0, a.jsx)(eH.A, { variant: eH.c.SUBSCRIBER_HOME }))
          : r
            ? (N = (0, a.jsx)(tk, {}))
            : s && !C && (N = (0, a.jsx)(e8, {}));
    let v = (0, eG.V)(),
        O = (0, eU.O)(),
        b = (0, D.U9)(O, $.pe.TIER_2) ? $.pe.TIER_2 : void 0,
        L = null != h && h.status !== K.Dmq.ACCOUNT_HOLD && h.hasAnyPremiumNitro,
        w = (0, eD.A)(),
        M = w.isFractionalPremiumActive && !L && null == N && !_,
        k = (0, d.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        { visibilityPercentageRef: G, visibilityPercentage: F } = (0, eV.U)(!k);
    return r
        ? (0, a.jsx)(tF, { fpEndsAt: w.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
        : C
          ? (0, a.jsx)(tO, {
                treatment: A,
                className: t,
                headingTop: l,
                showPill: c,
                buttonVisibilityRef: g,
                shouldShowReferralProgressBar: s,
            })
          : (0, a.jsx)("div", {
                className: u()(tC.kL, t),
                "data-testid": "subscriber-nitro-home-hero-header",
                ref: g,
                children: (0, a.jsxs)("div", {
                    className: tC.Qs,
                    ref: G,
                    children: [
                        c && l,
                        (0, a.jsxs)("div", {
                            className: tC.N1,
                            children: [
                                (0, a.jsx)(tw, { containerVisibilityPercentage: F }),
                                _ &&
                                    f?.expiresAt != null &&
                                    (0, a.jsx)(ti, { expiresAt: f.expiresAt.toISOString(), className: tC.IZ }),
                                (0, a.jsx)(t_, {
                                    children:
                                        _ && null != f
                                            ? q.intl.format(q.t["3yZP0G"], { percent: f.discount.amount })
                                            : o,
                                }),
                                _ &&
                                    null != f &&
                                    null != p &&
                                    (0, a.jsx)(U.E, {
                                        className: tC.jG,
                                        variant: "text-sm/medium",
                                        color: "text-strong",
                                        children: q.intl.format(q.t["3Q4wCy"], {
                                            discountedPrice: p,
                                            billingPeriod: (0, eP.Ke)(f.discount.userUsageLimitInterval),
                                            numMonths: f.discount.userUsageLimit,
                                        }),
                                    }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: M || _ ? tC.UJ : void 0,
                            children: [
                                M &&
                                    (0, a.jsx)(H.A, {
                                        size: "md",
                                        hasActivePromotion: !!i,
                                        subscriptionTier: v?.subscription_trial?.sku_id ?? b,
                                    }),
                                _ &&
                                    null != h &&
                                    (0, a.jsx)(x.$, {
                                        variant: "expressive",
                                        icon: eR.t,
                                        size: "md",
                                        text: q.intl.string(q.t.zrCzVB),
                                        onClick: () => {
                                            var e;
                                            return (
                                                (e = tr.g.CONFIRM_DISCOUNT),
                                                void (0, P.openModalLazy)(async () => {
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
                                (0, a.jsx)(eA.A, {
                                    variant: M || _ ? "secondary" : "expressive",
                                    size: "md",
                                    buttonTextOverride: q.intl.string(q.t["3KomGa"]),
                                }),
                            ],
                        }),
                        N,
                    ],
                }),
            });
}
let [tB, tj] = (0, eM.A)(),
    tH = function (e) {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: s } = (0, m.Ay)(E.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, v.ds)(),
            l = (0, ex.cg)(),
            u = (0, ek.QQ)(),
            c = (0, d.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            _ = null != c && c.status === K.Dmq.CANCELED && null != i,
            h = u && !_,
            f = q.intl.string(q.t.qYKftX),
            p = (0, eY.m)(),
            g = q.intl.string(q.t.ifwQZb),
            { fractionalState: A, endsAt: I } = (0, eD.A)(),
            T = (0, eb.Ay)(I, eb.yE.CREDITS_ENDS_IN),
            S = null;
        if (A === $.xc.NONE || o) S = (0, a.jsx)(eB.A, { text: f });
        else {
            h = !0;
            let e = q.intl.format(q.t["yR+oDD"], {
                helpCenterLink: es.A.getArticleURL(K.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            S = (0, a.jsx)(eN.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tC.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: tC.V_,
                        children: (0, a.jsx)("div", { className: tC.eL, children: (0, a.jsx)(eB.A, { text: T }) }),
                    }),
            });
        }
        return (0, a.jsx)(m.f5, {
            value: s,
            children: (0, a.jsx)(tB.Provider, {
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
                children: (0, a.jsx)(tV, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: p,
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
    tZ = n(503255),
    tX = n(525311);
let tQ = function () {
    let e = (0, tK.Gh)("nitro_home_header"),
        t = o.useRef(null);
    return (0, a.jsxs)(tY.A, {
        section: K.JJy.NAVIGATION,
        children: [
            (0, a.jsx)(tW.A, {
                className: u()(tZ.TQ, tX.C$),
                transparent: !0,
                role: "navigation",
                children: (0, a.jsxs)("div", {
                    className: tZ.Wc,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tX.wk,
                            children: [
                                (0, a.jsx)(eR.t, { colorClass: tX.tr }),
                                (0, a.jsx)("span", {
                                    role: "img",
                                    "aria-label": q.intl.string(q.t.Ipxkog),
                                    className: tX.Ss,
                                    children: (0, a.jsx)(t$.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, a.jsxs)("div", {
                                className: tZ.MQ,
                                children: [
                                    (0, a.jsx)(tq.l, {
                                        ref: t,
                                        size: "sm",
                                        location: E.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, a.jsx)(eA.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, a.jsx)(tz.O, { targetElementRef: t, body: q.intl.string(q.t.EqUw7K) }),
        ],
    });
};
var tJ = n(18005),
    t0 = n(717421),
    t1 = n(98812),
    t2 = n(67423);
let t3 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: s } = e,
        { analyticsLocations: o } = (0, m.Ay)(E.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        l = (0, t0.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(tJ.animated.div, {
        className: u()(t1.iE, { [t1.q4]: !t }),
        style: l,
        children: (0, a.jsxs)("div", {
            className: t1.iJ,
            children: [
                (0, a.jsx)("img", { alt: "", src: t2, className: t1.oU }),
                (0, a.jsxs)("div", {
                    className: t1.iQ,
                    children: [
                        (0, a.jsx)(L.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: q.intl.format(q.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(q.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: s,
                                billingPeriod: (0, eP.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(x.$, {
                    variant: "expressive",
                    icon: eR.t,
                    size: "md",
                    text: q.intl.string(q.t.zrCzVB),
                    onClick: () =>
                        void (0, P.openModalLazy)(async () => {
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
function t7(e) {
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
function t8(e) {
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
var t9 = n(345394);
function ne(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
        src: t9.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function nt(e) {
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
function nn(e) {
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
function ni(e) {
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
function nr(e) {
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
function ns(e) {
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
var na = n(661531),
    no = n(996682);
function nl(e) {
    let {
        color: t = na.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: s = 100,
        height: o = 80,
    } = e;
    return (0, a.jsxs)("svg", {
        ...(0, no.A)({ "aria-label": n, "aria-hidden": i, role: r }),
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
function nu(e) {
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
var nc = n(78701);
function nd(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: o = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: o },
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
    nT = n(696292),
    nS = n(192444),
    ny = n(617986),
    nC = n(892227),
    nN = n(81466),
    nv = n(318254),
    nR = n(490285),
    nO = n(875679);
let nb = function () {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, T.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, nC.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, a.jsxs)("div", {
        className: nO.kL,
        children: [
            null != n &&
                (0, a.jsxs)("div", {
                    className: nO.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nO.Pf,
                            children: [
                                (0, a.jsx)(nN.C, { size: "sm", color: na.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(nR.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nR.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, a.jsx)("div", { className: nO.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, a.jsxs)("div", {
                    className: nO.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: nO.Pf,
                            children: [
                                (0, a.jsx)(nv.C, { size: "sm", color: na.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: q.intl.string(nR.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, a.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: q.intl.format(nR.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nD = n(758836),
    nL = n(190107),
    nw = n(555599);
function nM(e) {
    let { shouldShowBonusOrbsUX: t, multiplier: n } = (0, nS.lk)(nL.rE.NITRO_HOME_MARKETING),
        { isEligible: i, programReward: r } = (0, T.F)({ location: e });
    return {
        nitroOrbsRewardsCard: (0, o.useMemo)(
            () =>
                !i || null == r || null == r.reward_amount || r.reward_amount <= 0
                    ? null
                    : {
                          id: j.NITRO_ORBS_REWARDS_CARD_ID,
                          title: q.intl.string(nR.default.hx5AFp),
                          description: q.intl.format(nR.default.wq3CF2, { orbsCount: r.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: u()(nw.lH, nw.yK),
                          footerContent: (0, a.jsx)(nb, {}),
                          ctaText: q.intl.string(nR.default.BxjHiu),
                          onCtaClick: () => (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nD.G2.ORBS)),
                      },
            [i, r],
        ),
        questOrbMultiplierCard: (0, o.useMemo)(
            () =>
                t
                    ? {
                          id: j.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: q.intl.string(q.t.Csf5Ol),
                          description: q.intl.format(q.t.NpUfej, { bonusOrbMultiplier: n }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: () => (0, ny.navigateToQuestHome)({ fromContent: nT.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: nw.Nf,
                      }
                    : null,
            [t, n],
        ),
    };
}
var nP = n(975807),
    nx = n(95035),
    nk = n(532794),
    nU = n(862990),
    nG = n(88001),
    nF = n(466919),
    nV = n(817577);
function nB() {
    (0, nP.A)(nG.TE);
}
function nj(e) {
    let t = (0, nU.O9)(),
        i = (0, d.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
        r = i?.hasActiveTrial ?? !1,
        s = (0, o.useCallback)(() => {
            r
                ? (0, P.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, a.jsx)(e, { ...t });
                  })
                : (0, nk.A)({
                      subscriptionTier: $.pe.TIER_2,
                      initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, r]);
    return (0, o.useMemo)(
        () =>
            t
                ? {
                      id: j.PREMIUM_GROUP_CARD_ID,
                      title: q.intl.string(nF.default.YkvksF),
                      description: (0, a.jsxs)(a.Fragment, {
                          children: [
                              q.intl.formatToPlainString(nF.default.JlyGQj, {
                                  totalSeats: nG.aw,
                                  premiumGroupProductName: (0, nG.DP)(),
                              }),
                              (0, a.jsx)("div", {
                                  className: nw.LF,
                                  children: (0, a.jsx)(nx.A, {
                                      onClick: nB,
                                      children: q.intl.string(nF.default.yYyGJH),
                                  }),
                              }),
                          ],
                      }),
                      pillText: q.intl.string(q.t.oW0eUd),
                      primaryAsset: nV,
                      ctaIcon: eR.t,
                      ctaIconPosition: "start",
                      ctaText: q.intl.string(q.t.IJI7yk),
                      onCtaClick: s,
                  }
                : null,
        [s, t],
    );
}
var nH = n(562819),
    nY = n(892035),
    nW = n(793943),
    nK = n(945810),
    n$ =
        (((r = {})[(r.CONTROL = 0)] = "CONTROL"),
        (r[(r.NITRO_HOME_TILE = 1)] = "NITRO_HOME_TILE"),
        (r[(r.STICKY_BAR = 2)] = "STICKY_BAR"),
        (r[(r.NITRO_TAB_POPOVER = 3)] = "NITRO_TAB_POPOVER"),
        r);
let nz = (0, nK.mj)({
    name: "2026-06-monthly-to-yearly-upsells",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3 },
});
var nq = n(465323),
    nZ = n(554146),
    nX = n(773669),
    nQ = n(97352),
    nJ = n(252424),
    n0 = n(580630);
function n1(e) {
    let t = (0, eP.EL)(e);
    if (null == t || !$.BL.has(t.planId)) return null;
    let n = $.hd[t.planId]?.skuId;
    if (null == n) return null;
    let i = $.zE[n] ?? null;
    return null == i ? null : (nQ.A.get(i) ?? null);
}
n$.STICKY_BAR,
    nZ.M.MONTHLY_TO_YEARLY_UPSELL_STICKY_BAR,
    n$.NITRO_TAB_POPOVER,
    nZ.M.MONTHLY_TO_YEARLY_UPSELL_NITRO_TAB_POPOVER;
var n2 = n(655752),
    n3 = n(764231),
    n6 = n(627380),
    n4 = n(30084),
    n5 = n(792641),
    n7 = n(714206);
let n8 =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    n9 =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    ie =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function it() {
    let e,
        t,
        { analyticsLocations: n } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
        i = (0, nm.X)("useWhatsNewPerkCards"),
        { logitechCard: r, steelseriesCard: s } = ef(),
        l = (0, w.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: c } = (0, nY.z$)("useWhatsNewPerkCards"),
        _ = (0, ng.A)({ analyticsLocations: n }),
        h = (0, o.useCallback)(() => {
            (0, ew.openUserSettings)(eL.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, nf.L)({ analyticsLocations: n }),
            );
        }, [n]),
        f = (0, o.useCallback)(() => {
            (0, ew.openUserSettings)(eL.X.PROFILE_PANEL, { analyticsLocations: n }, () =>
                (0, nH.L)({ analyticsLocations: n }),
            );
        }, [n]),
        p = (0, o.useCallback)(() => {
            (0, ew.openUserSettings)(eL.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        g = (function (e) {
            let { fractionalState: t } = (0, eD.A)(),
                n = t === $.xc.FP_ONLY,
                i = (0, nA.$F)(),
                r = (0, nA.Xb)(),
                s = i?.status === nA.Wo.UPCOMING || n,
                a = (0, nI.N)(i?.id),
                l = (function () {
                    let e = (0, nA.$F)(),
                        t = (0, n2.P)(),
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
                c = (0, d.bG)([eO.Ay], () => eO.Ay.useReducedMotion) && !s,
                _ = (0, n6.t)(),
                h = (0, n2.P)();
            return (0, o.useMemo)(() => {
                let t,
                    o = null != h ? q.intl.string(h.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, n3.T)($.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
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
                                })(_, o) ??
                                (0, n3.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let d = null;
                return (
                    null != a ? (d = s || c ? a.standard : a.ambientLarge) : n && (d = n7),
                    {
                        id: j.TENURE_BADGE_CARD_ID,
                        title: null != i ? q.intl.string(i.nameUnformattedNitro) : n ? q.intl.string(q.t.tx9Fvw) : "",
                        pillText: q.intl.string(q.t["jyYgZ+"]),
                        primaryAsset: d,
                        primaryAssetClassName: u()(n5.pq, { [n5.n6]: s, [n5.kE]: c }),
                        caption: null != r ? q.intl.formatToPlainString(q.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: l ?? void 0,
                        ctaText: q.intl.string(q.t.jVcuVY),
                        onCtaClick: () => (0, n4.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, a, s, c, r, l, n, _, h, e]);
        })(n),
        A =
            ((e = (function (e) {
                let { location: t } = e;
                return nz.useConfig({ location: t });
            })({ location: "useWhatsNewPerkCards" })),
            (t = (0, d.bG)([C.A], () => C.A.getPremiumTypeSubscription())),
            (0, o.useMemo)(() => {
                if (e !== n$.NITRO_HOME_TILE) return null;
                let i = (function (e) {
                    let t = (function (e) {
                        if (null == e || e.status !== K.Dmq.ACTIVE || e.isPurchasedExternally || (0, eP.Nc)(e))
                            return null;
                        let t = n1(e);
                        if (null == t) return null;
                        let n = { currency: e.currency },
                            i = (0, eP.z_)(t, !1, n);
                        if (null == i) return null;
                        let r = (0, nq.LQ)(i.amount, i.currency);
                        return null == r || r <= 0
                            ? null
                            : { displayAmount: r, currency: i.currency, savingsPercent: (0, eP.k8)(t, !1, n) };
                    })(e);
                    if (null == t) return null;
                    let n = (0, n0.$g)(t.displayAmount, t.currency, { maximumFractionDigits: 0 }),
                        i = null != t.savingsPercent ? (0, nJ.l9)(nX.default.locale, t.savingsPercent / 100) : void 0;
                    return {
                        title: q.intl.formatToPlainString(q.t.cZPXK6, { amount: n }),
                        body: q.intl.string(q.t.KD6MH5),
                        cta: q.intl.string(q.t.xmQfYw),
                        badge: null != i ? q.intl.formatToPlainString(q.t.IAybsG, { discount: i }) : void 0,
                    };
                })(t);
                return null == i || null == t
                    ? null
                    : {
                          id: j.MONTHLY_TO_YEARLY_UPSELL_CARD_ID,
                          title: i.title,
                          description: i.body,
                          pillText: i.badge,
                          primaryAsset: "/assets/c4347155a9b71184.svg",
                          primaryAssetClassName: nw.lH,
                          ctaIcon: eR.t,
                          ctaIconPosition: "start",
                          ctaText: i.cta,
                          onCtaClick: () =>
                              (0, nk.A)({ subscription: t, initialPlanId: n1(t)?.id ?? null, analyticsLocations: n }),
                      };
            }, [n, t, e])),
        { nitroOrbsRewardsCard: I, questOrbMultiplierCard: T } = nM("useWhatsNewPerkCards"),
        S = nj(n);
    return (0, o.useMemo)(() => {
        let e = [
                l ? null : r,
                l ? null : s,
                I,
                T,
                S,
                {
                    id: j.DISPLAY_NAME_STYLES_CARD_ID,
                    title: q.intl.string(q.t.OLtTrt),
                    description: q.intl.string(q.t["di/pXR"]),
                    onCtaClick: i ? _ : h,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    primaryAsset: n8,
                },
                {
                    id: j.CLIENT_THEMES_CARD_ID,
                    title: q.intl.string(q.t.acc6h6),
                    description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: ie,
                    ctaText: q.intl.string(q.t.jVcuVY),
                    onCtaClick: () => {
                        (0, nW.nf)(nW.HP.CUSTOM_THEME);
                    },
                },
                c
                    ? null
                    : {
                          id: j.PERMADECOS_CARD_ID,
                          title: q.intl.string(q.t.L14NZN),
                          description: q.intl.string(q.t.eCZkAI),
                          primaryAsset: (0, a.jsx)(nd, { alt: "", ariaHidden: !0 }),
                          ctaText: q.intl.string(q.t.jVcuVY),
                          onCtaClick: i ? _ : f,
                      },
                {
                    id: j.CUSTOM_APP_ICONS_CARD_ID,
                    title: q.intl.string(q.t["GU+wqh"]),
                    description: q.intl.string(q.t["1uPk1Z"]),
                    primaryAsset: n9,
                    ctaText: q.intl.string(q.t.y9TxXV),
                    onCtaClick: p,
                },
            ],
            t = (e = e.filter((e) => null != e))[0].featured,
            n = t ? 5 : 6;
        if ((e.splice(+!!t, 0, g), null != A && e.splice(1, 0, A), c)) {
            let t = null != A ? 2 : 1;
            e.splice(t, 0, {
                id: j.PROFILE_FRAMES_CARD_ID,
                title: q.intl.string(q.t.SGBDnu),
                description: q.intl.string(q.t.cMgegQ),
                pillText: q.intl.string(q.t.y2b7CA),
                primaryAsset:
                    "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                primaryAssetClassName: u()(nw.lH, nw.yK),
                ctaText: q.intl.string(q.t.jVcuVY),
                onCtaClick: () => (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP_WITH_TAB(nD.G2.PROFILE_FRAMES)),
            });
        }
        return e.length > n && e.splice(n, e.length - n), e;
    }, [g, A, I, T, S, h, p, f, _, i, r, s, l, c]);
}
var ii = n(355097),
    ir = n(64514),
    is = n(121818),
    ia =
        (((s = {}).BEST_OF_NITRO = "bestof"),
        (s.APPEARANCE_STYLE = "appearance"),
        (s.UPGRADES = "upgrades"),
        (s.VIP_EXTRAS = "vip"),
        s);
let io = [
    { id: "bestof", label: () => q.intl.string(q.t.q1u7nQ) },
    { id: "appearance", label: () => q.intl.string(q.t.CUnZkZ) },
    { id: "upgrades", label: () => q.intl.string(q.t.KC5q8v) },
    { id: "vip", label: () => q.intl.string(q.t.DjEAcv) },
];
var il = n(758495);
function iu(e) {
    e.stopPropagation();
}
function ic(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, nh.DP)(),
                t = (0, nm.X)("useFavoritesPerkCards"),
                n = (0, nA.Lh)(),
                i = (0, nI.N)(n)?.standard ?? null,
                { analyticsLocations: r } = (0, m.Ay)(E.A.PREMIUM_MARKETING_PERK_CARD),
                s = (0, np.A)({ scrollPosition: ii._F.TRY_IT_OUT, analyticsLocations: r }),
                l = (0, o.useCallback)(() => {
                    (0, ew.openUserSettings)(eL.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, o.useCallback)(() => {
                    (0, ew.openUserSettings)(eL.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                c = (0, o.useCallback)(() => {
                    (0, ew.openUserSettings)(eL.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, o.useCallback)(() => {
                    (0, nE.pX)(K.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, o.useCallback)(() => {
                    (0, ew.openUserSettings)(eL.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                h = (0, ng.A)({ analyticsLocations: r }),
                f = (0, o.useCallback)(() => {
                    (0, ew.openUserSettings)(eL.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, nf.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                p = it(),
                g = (0, o.useMemo)(() => p.map((e) => e?.id), [p]),
                { nitroOrbsRewardsCard: A, questOrbMultiplierCard: I } = nM("useFavoritesPerkCards"),
                T = nj(r),
                S = (0, o.useMemo)(
                    () => [
                        {
                            id: j.SERVER_BOOSTS_CARD_ID,
                            title: q.intl.formatToPlainString(q.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: q.intl.formatToPlainString(q.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, a.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        null != T ? { ...T, categories: ["bestof"] } : null,
                        {
                            id: j.PROFILES_CARD_ID,
                            title: q.intl.string(q.t.xDRab3),
                            description: q.intl.string(q.t.yn6fWA),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: t ? h : s,
                            primaryAsset: (0, a.jsx)(t7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: j.HD_VIDEO_CARD_ID,
                            title: q.intl.string(q.t["/mQ5gg"]),
                            description: q.intl.string(q.t["7WwAXh"]),
                            primaryAsset: (0, a.jsx)(t8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: j.CLIENT_THEMES_CARD_ID,
                            title: q.intl.string(q.t.acc6h6),
                            description: q.intl.formatToPlainString(q.t.WQazjs, { themeCount: 20 }),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: ie,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: j.MORE_EMOJIS_CARD_ID,
                            title: q.intl.string(q.t.D8vIDT),
                            description: q.intl.string(q.t.DRMecB),
                            primaryAsset: (0, a.jsx)(ne, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: j.LARGE_UPLOADS_CARD_ID,
                            title: q.intl.string(q.t.nL1WZV),
                            description: q.intl.formatToPlainString(q.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, a.jsx)(nt, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: j.CUSTOM_APP_ICONS_CARD_ID,
                            title: q.intl.string(q.t["GU+wqh"]),
                            description: q.intl.string(q.t["1uPk1Z"]),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: n9,
                            categories: ["appearance"],
                        },
                        {
                            id: j.ENTRANCE_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t.WJfCPi),
                            description: q.intl.string(q.t.liQKJR),
                            ctaText: q.intl.string(q.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: j.DISPLAY_NAME_STYLES_CARD_ID,
                            title: q.intl.string(q.t.OLtTrt),
                            description: q.intl.string(q.t["di/pXR"]),
                            onCtaClick: t ? h : f,
                            ctaText: q.intl.string(q.t.jVcuVY),
                            primaryAsset: n8,
                            categories: ["appearance"],
                        },
                        {
                            id: j.CUSTOM_SOUNDS_CARD_ID,
                            title: q.intl.string(q.t["Cu/oFd"]),
                            description: q.intl.string(q.t.czj2aa),
                            primaryAsset: (0, a.jsx)(nn, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: j.SPECIAL_STICKERS_CARD_ID,
                            title: q.intl.string(q.t.MQoVeb),
                            description: q.intl.string(q.t.HGCLZX),
                            primaryAsset: (0, a.jsx)("div", {
                                className: nw.Uc,
                                children: (0, a.jsx)(ni, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: j.SUPER_REACTIONS_CARD_ID,
                            title: q.intl.string(q.t.qERvAA),
                            description: q.intl.string(q.t.WkUWzx),
                            primaryAsset: (0, a.jsx)(nr, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: j.VIDEO_BACKGROUNDS_CARD_ID,
                            title: q.intl.string(q.t.ssVDYQ),
                            description: q.intl.string(q.t.aUSRMa),
                            primaryAsset: (0, n_.M)(e) ? ir : is,
                            categories: ["upgrades"],
                        },
                        {
                            id: j.EARLY_ACCESS_CARD_ID,
                            title: q.intl.string(q.t["g/KRY6"]),
                            description: q.intl.string(q.t.JzAmJc),
                            primaryAsset: (0, a.jsx)(ns, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: j.BADGE_CARD_ID,
                            title: q.intl.string(q.t.Bn3CtB),
                            description: q.intl.string(q.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, a.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, a.jsx)(nl, { color: na.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: j.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: q.intl.string(q.t["MTD+7w"]),
                            description: q.intl.string(q.t.Bhs0s6),
                            ctaText: q.intl.string(q.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, a.jsx)(nu, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        null != A ? { ...A, categories: ["vip"] } : null,
                        null != I ? { ...I, categories: ["vip"] } : null,
                        {
                            id: j.PERMADECOS_CARD_ID,
                            title: q.intl.string(q.t.L14NZN),
                            description: q.intl.string(q.t.eCZkAI),
                            primaryAsset: (0, a.jsx)(nd, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, A, I, T, s, l, u, c, d, _, f, h, t],
                );
            return (0, o.useMemo)(() => S.filter((e) => null != e && !g.includes(e.id)), [S, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [r, s] = (0, o.useState)(i?.categories[0] ?? ia.BEST_OF_NITRO),
        l = (0, o.useMemo)(() => n.filter((e) => null != e && e.categories.includes(r)), [n, r]);
    return (0, a.jsxs)("div", {
        className: il.uW,
        children: [
            (0, a.jsx)(L.D, { variant: "display-sm", className: il.R_, children: q.intl.string(q.t["Uh3+CA"]) }),
            (0, a.jsx)(t6.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: s,
                className: il.Lq,
                "aria-label": q.intl.string(q.t["Uh3+CA"]),
                children: io.map((e) =>
                    (0, a.jsx)(t6.V.Item, { id: e.id, className: il.IC, children: e.label() }, e.id),
                ),
            }),
            (0, a.jsx)(
                t4.A,
                {
                    gap: 20,
                    className: il.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, a.jsx)(
                                J.S,
                                { ...e, glowing: t === e.id, containerClassName: il.Ui, onFocus: iu },
                                e.id,
                            );
                    }),
                },
                r,
            ),
        ],
    });
}
var id = n(948562);
let i_ = function (e) {
    let { className: t } = e,
        n = (0, nh.DP)();
    return (0, a.jsx)("img", {
        className: u()(id.D, t),
        src: (0, n_.M)(n) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var ih = n(946062);
let ip = function (e) {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: n, children: i } = e;
    return t
        ? (0, a.jsxs)("div", {
              className: u()(ih.kL, ih.Gd, ih.Eg),
              children: [(0, a.jsx)(i_, {}), (0, a.jsx)(tQ, {}), i],
          })
        : (0, a.jsx)(eg.h, { color: "nitro-pink", className: u()(ih.kL, ih.Gd), offsetBottom: n, children: i });
};
function iE(e) {
    let { glowingPerkId: t = null } = e,
        n = it();
    return (0, a.jsx)(er, {
        sectionClassName: ei.uW,
        heading: (0, a.jsx)(L.D, { variant: "display-sm", className: ei.R_, children: q.intl.string(q.t.Aw5DRm) }),
        grid: (0, a.jsx)(a.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, a.jsx)(
                    J.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: u()(ei.Nr, { [ei.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var im = n(994763),
    ig = n(79119);
let iA = "section",
    iI = "perk",
    iT = (e) => {
        let { userId: t } = e,
            n = (0, v.ds)(),
            { isInNitroHomeHeaderTreatment: i } = (0, R.jy)("nitro_member_hub_header"),
            r = (0, c.zy)();
        o.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, I.Ay)()];
                null != t && e.push((0, y.A)(t)), await Promise.all(e);
            });
        }, [t]),
            o.useEffect(() => {
                V(!0);
            }, []),
            (0, b.j)(),
            (0, A.P)(g.b);
        let s = o.useRef(null),
            l = o.useRef(null),
            L = (0, d.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            { isReady: w, programReward: M } = (0, T.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: P,
                glowingSectionId: x,
                glowingPerkId: k,
                scrollBlock: U,
                scrollInline: G,
            } = o.useMemo(() => {
                let e = new URLSearchParams(r.search),
                    t = e.get(iI),
                    n = e.get(iA);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [r.search]);
        (0, im.z)(P ?? "", null != P, U, G);
        let [F, V] = o.useState(!1),
            B = (0, O.p)(),
            j = o.useRef(null),
            [H, Y] = o.useState(!1),
            W = null != B && null != L && L.status === K.Dmq.CANCELED,
            z = (0, D.iU)($.gD.PREMIUM_MONTH_TIER_2, B, L),
            Z = !H && W,
            X = null != L && L.status === K.Dmq.CANCELED,
            Q = i && !n && !X,
            { analyticsLocations: J } = (0, m.Ay)(E.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ee, et] = o.useState(!1);
        return null != (0, d.bG)([S.A], () => (null != t ? S.A.getUserProfile(t) : null)) && (w || null != M)
            ? (0, a.jsxs)(f.Gt, {
                  className: ih.xW,
                  ref: s,
                  children: [
                      (0, a.jsx)(ip, {
                          shouldRenderNitroHomeHeaderExperiment: Q,
                          gradientOffsetBottom: n ? 0.55 : 0.8,
                          children: (0, a.jsxs)(m.f5, {
                              value: J,
                              children: [
                                  (0, a.jsx)(_.L, {
                                      innerRef: j,
                                      onChange: (e) => Y(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, a.jsx)(tH, {
                                          buttonVisibilityRef: j,
                                          className: ih.v1,
                                          userDiscountOffer: B,
                                          discountedPrice: z,
                                      }),
                                  }),
                                  (0, a.jsx)(em, { glowingPerkId: k, glowingSectionId: x }),
                                  (0, a.jsx)(iE, { glowingPerkId: k }),
                                  (0, a.jsx)(ic, { glowingPerkId: k }),
                                  (0, a.jsx)(eT, {
                                      className: ih.Zy,
                                      location: E.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: K.liQ.NITRO_HOME, section: K.JJy.GIFT_BANNER },
                                  }),
                                  (0, a.jsx)("div", { className: ih.hz }),
                                  (0, a.jsx)(_.L, {
                                      innerRef: l,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (N.default.track(K.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: J,
                                              }),
                                              et(!0));
                                      },
                                      children: (0, a.jsx)("div", { ref: l, className: ih._Z }),
                                  }),
                                  (0, a.jsx)("img", {
                                      src: ig,
                                      className: ih.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: q.intl.string(q.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      W &&
                          null != z &&
                          (0, a.jsx)(t3, {
                              isVisible: Z && F,
                              premiumSubscription: L,
                              churnDiscountOffer: B,
                              discountedPrice: z,
                          }),
                  ],
              })
            : Q
              ? (0, a.jsxs)("div", {
                    className: u()(ih.kL, ih.Lq, ih.TN, ih.Eg),
                    children: [
                        (0, a.jsx)(tQ, {}),
                        (0, a.jsx)("div", { className: ih.S, children: (0, a.jsx)(h.y, {}) }),
                    ],
                })
              : (0, a.jsx)("div", { className: u()(ih.kL, ih.Lq), children: (0, a.jsx)(h.y, {}) });
    };
