a.d(t, { Ay: () => sr, WU: () => sn, x6: () => si }), a(321073), a(323874), a(14289), a(35956);
var s,
    i,
    n = a(627968),
    r = a(64700),
    l = a(503698),
    c = a.n(l),
    o = a(873263),
    d = a(17928),
    u = a(269115),
    m = a(289873),
    A = a(689175),
    N = a(228366),
    g = a(793574),
    p = a(688810),
    x = a(949030),
    E = a(611924),
    h = a(961250),
    f = a(366505),
    C = a(841595),
    R = a(903209),
    _ = a(166403),
    I = a(174459),
    T = a(881489),
    b = a(7066),
    j = a(131168),
    S = a(482589),
    v = a(410516),
    P = a(534514),
    y = a(31502),
    O = a(562708),
    M = a(192308),
    L = a(821609),
    D = a(885574),
    U = a(834730),
    G = a(43990),
    k = a(993077),
    F = a(139286),
    w = a(872725),
    H = a(920050),
    V = a(792656),
    B = a(985603),
    z = a(777376),
    W = a(185797),
    X = a(652215),
    K = a(788868),
    Y = a(237146),
    Z = a(375708),
    q = a(74776);
function $(e) {
    let { openRewardModal: t } = e,
        a = (0, W.F)();
    if (a.kind === W.L.SUBSCRIBE)
        return (0, n.jsxs)("div", {
            className: q.R$,
            children: [
                (0, n.jsx)(V.A, {
                    defaultTextOverride: a.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: K.pe.TIER_2,
                }),
                (0, n.jsx)(L.$, { variant: "secondary", size: "md", text: Z.intl.string(Z.t.hvVgAZ), onClick: t }),
            ],
        });
    let s =
        a.claimStatus === z.p1.CLAIMED
            ? { text: Z.intl.string(Y.default.Plwzgf) }
            : { text: Z.intl.string(Z.t.hvVgAZ) };
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                className: q.R$,
                children: [
                    (0, n.jsx)(L.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: a.text,
                        icon: a.icon,
                        iconPosition: a.iconPosition,
                        onClick: a.onClick,
                        disabled: a.disabled,
                        loading: a.loading,
                    }),
                    (0, n.jsx)(L.$, {
                        variant: "secondary",
                        size: "md",
                        ...s,
                        onClick: t,
                        disabled: a.requestInProgress,
                    }),
                ],
            }),
            a.claimStatus === z.p1.CLAIM_IN_PROGRESS &&
                (0, n.jsxs)("div", {
                    className: q.ed,
                    children: [
                        (0, n.jsx)(D.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, n.jsx)(U.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: Z.intl.string(Y.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function Q(e) {
    let { glowing: t = !1 } = e;
    (0, F.A)({
        type: O.ImpressionTypes.VIEW,
        name: O.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: H.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: B.FZ },
    });
    let { analyticsLocations: s } = (0, p.Ay)(g.A.CROISSANT_PREMIUM_HERO_CARD),
        i = r.useCallback(() => {
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.all([a.e("16848"), a.e("30221"), a.e("10622"), a.e("77632")]).then(
                    a.bind(a, 836291),
                );
                return (t) => (0, n.jsx)(e, { ...t, sourceAnalyticsLocations: s });
            });
        }, [s]);
    return (0, n.jsx)(G.N, {
        theme: X.NJ8.DARKER,
        children: (e) =>
            (0, n.jsx)(p.f5, {
                value: s,
                children: (0, n.jsx)("div", {
                    className: c()(e, q.kL),
                    children: (0, n.jsx)(w.A, {
                        cardType: k.s.CUSTOM,
                        cardClassName: q.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, n.jsxs)("div", {
                            className: q.XF,
                            children: [
                                (0, n.jsxs)("div", {
                                    className: q.j,
                                    children: [
                                        (0, n.jsx)("div", { className: q._g }),
                                        (0, n.jsx)("div", { className: q.$h }),
                                        (0, n.jsx)("div", { className: q.Rv }),
                                        (0, n.jsx)("div", { className: q.Lw }),
                                        (0, n.jsx)("div", { className: q.mR }),
                                    ],
                                }),
                                (0, n.jsxs)("div", {
                                    className: q.Qs,
                                    children: [
                                        (0, n.jsx)("img", {
                                            className: q.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, n.jsx)(P.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: q.DD,
                                            children: Z.intl.string(Y.default.RGT513),
                                        }),
                                        (0, n.jsx)(U.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: q.h_,
                                            children: Z.intl.string(Y.default["+pTnsf"]),
                                        }),
                                        (0, n.jsx)($, { openRewardModal: i }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                }),
            }),
    });
}
var J = a(744064);
function ee(e) {
    let { className: t, containerClassName: a } = e,
        s = (0, W.F)(),
        i =
            s.kind === W.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: s.text,
                      ctaIcon: s.icon,
                      ctaIconPosition: s.iconPosition,
                      ctaDisabled: s.disabled,
                      ctaLoading: s.loading,
                      onCtaClick: s.onClick,
                  };
    return (0, n.jsx)(J.S, {
        id: H.XBOX_PREMIUM_PERK_CARD_ID,
        title: Z.intl.string(Y.default.UVL9tD),
        description: Z.intl.string(Y.default["I+IXr0"]),
        ...i,
        className: t,
        containerClassName: a,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, n.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: B.FZ },
    });
}
function et(e) {
    let { analyticsLocations: t } = (0, p.Ay)(g.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, n.jsx)(p.f5, { value: t, children: (0, n.jsx)(ee, { ...e }) });
}
var ea = a(367791),
    es = a(672193);
function ei(e) {
    let { id: t, sectionClassName: a, heading: s, beforeGrid: i, grid: r, gridClassName: l } = e,
        o = es.Ui;
    return (0, n.jsxs)("div", {
        id: t,
        className: a,
        children: [
            s,
            i,
            null != r ? (0, n.jsx)("div", { className: c()(o, null != i && ea.Jx, l), children: r }) : null,
        ],
    });
}
var en = a(975571),
    er = a(149995),
    el = a(398523),
    ec = a(881373),
    eo = a(581921),
    ed = a(852218),
    eu = a(382259),
    em = a(962995);
function eA() {
    let { analyticsLocations: e } = (0, p.Ay)(g.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, ec.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        a = el.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        s = (0, er.Zk)({ location: "useHardwarePartnerPerkCards" }),
        i = (0, er.S9)({ location: "useHardwarePartnerPerkCards" }),
        l = (0, y.l)("useHardwarePartnerPerkCards"),
        { currentDate: c, nDaysInMonth: o } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let r = l ? void 0 : Z.intl.string(Z.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: H.LOGITECH_3PP_CARD_ID,
                      title: Z.intl.string(em.default.OlObRa),
                      description: Z.intl.format(em.default.ZGOJ8R, {
                          discountPercent: ec.aW,
                          termsUrl: en.A.getArticleURL(X.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: c.getDate() / o,
                      ctaText: Z.intl.string(Z.t.w7s5Qr),
                      onCtaClick: () => (0, eo.P)({ partnerId: ed.XY, analyticsLocations: e }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: r,
                      caption: (0, n.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ed.XY },
                  }
                : null,
            steelseriesCard: a
                ? {
                      id: H.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: Z.intl.string(Z.t.m7PucM),
                      description: s
                          ? i
                              ? Z.intl.format(Z.t["1Zw6xL"], {})
                              : Z.intl.format(Z.t.KWdCO0, {})
                          : Z.intl.format(Z.t.zh1X7u, {}),
                      descriptionNote:
                          !i && s
                              ? Z.intl.format(Z.t.vblnHk, {
                                    partnerName: ed.CD[ed.Cs].label,
                                    helpdeskArticle: en.A.getArticleURL(X.MVz.RECURRING_PROMOTION),
                                })
                              : void 0,
                      subscriptionRequired: !0,
                      pillText: r,
                      caption: (0, n.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: c.getDate() / o,
                      ctaText: Z.intl.string(Z.t.w7s5Qr),
                      onCtaClick: () => (0, eu.u)({ analyticsLocations: e, partnerIds: [ed.KS, ed.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ed.KS },
                  }
                : null,
        };
    }, [l, e, c, t, o, a, s, i]);
}
var eN = a(102338);
let eg = "xgpp";
function ep(e) {
    let { glowingSectionId: t, glowingPerkId: a } = e,
        s = (0, y.l)("premium_subscriber_home_rewards"),
        { logitechCard: i, steelseriesCard: r } = eA();
    if (!s) return null;
    let l = null != i || null != r;
    return (0, n.jsx)(ei, {
        id: eg,
        sectionClassName: c()(eN.uW, eN.Uv, eN.qr),
        heading: (0, n.jsx)(P.D, {
            variant: "display-sm",
            className: c()(es.R_, ea.U6),
            children: Z.intl.string(Z.t.NG1e6l),
        }),
        beforeGrid: (0, n.jsx)("div", { className: ea.JE, children: (0, n.jsx)(Q, { glowing: t === eg }) }),
        grid: l
            ? (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(et, { containerClassName: es.Nr }),
                      null != i && (0, n.jsx)(J.S, { ...i, containerClassName: es.Nr, glowing: a === i.id }),
                      null != r && (0, n.jsx)(J.S, { ...r, containerClassName: es.Nr, glowing: a === r.id }),
                  ],
              })
            : null,
    });
}
var ex = a(315629),
    eE = a(65470),
    eh = a(797221);
let ef = (e) => {
    let { className: t, location: a, analyticsLocation: s } = e,
        { analyticsLocations: i } = (0, p.Ay)(a);
    return (0, n.jsx)(p.f5, {
        value: i,
        children: (0, n.jsxs)(ex.h, {
            className: c()(eh.kL, eh.pm, t),
            color: "purple",
            children: [
                (0, n.jsxs)("div", {
                    className: eh.FS,
                    children: [
                        (0, n.jsx)(P.D, {
                            variant: "heading-xxl/bold",
                            className: eh.R_,
                            children: Z.intl.string(Z.t.Ve9Ge6),
                        }),
                        (0, n.jsx)(U.E, { variant: "text-md/medium", children: Z.intl.string(Z.t.yQ06u1) }),
                        (0, n.jsx)("div", {
                            className: eh.SB,
                            children: (0, n.jsx)(eE.A, {
                                buttonTextOverride: Z.intl.string(Z.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: s,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eh._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eC = a(877624);
let eR =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function e_(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: eR,
        srcSet: `${eR} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var eI = a(502572),
    eT = a(331322),
    eb = a(403581),
    ej = a(775602),
    eS = a(366999),
    ev = a(531260),
    eP = a(780964),
    ey = a(766075),
    eO = a(786300),
    eM = a(428262),
    eL = a(960851),
    eD = a(89366),
    eU = a(504836),
    eG = a(422936),
    ek = a(234419),
    eF = a(549996),
    ew = a(810660),
    eH = a(175569),
    eV = a(371764),
    eB = a(949964),
    ez = a(103411),
    eW = a(778712),
    eX = a(97808),
    eK = a(590251),
    eY = a(144165),
    eZ = a(854627),
    eq = a(427262),
    e$ = a(851746),
    eQ = a(326084),
    eJ = a(664654);
function e0() {
    var e, t, a;
    let { referralSentUsers: s } = (0, eJ.J)(),
        i = (0, d.bG)([e$.A], () => e$.A.getRecipientStatus()),
        n = (0, d.bG)([e$.A], () => e$.A.getHasEligibleFriends()),
        r = i.size === eJ.Z,
        l =
            ((e = !1 !== n),
            (t = s.length),
            (a = i.size === eJ.Z && [...i.values()].every((e) => e === eQ.aK.REDEEMED)),
            e
                ? t === eJ.Z
                    ? a
                        ? Z.intl.format(Z.t["1aEjsH"], { helpdeskArticle: en.A.getArticleURL(X.MVz.REFERRAL_PROGRAM) })
                        : Z.intl.format(Z.t["+u3AOO"], { helpdeskArticle: en.A.getArticleURL(X.MVz.REFERRAL_PROGRAM) })
                    : Z.intl.format(Z.t["omMr+V"], { helpdeskArticle: en.A.getArticleURL(X.MVz.REFERRAL_PROGRAM) })
                : Z.intl.format(Z.t["zWhX/Q"], { helpdeskArticle: en.A.getArticleURL(X.MVz.REFERRAL_PROGRAM) }));
    return { referralSentUsers: s, nReferralsSent: i.size, hasEligibleFriends: n, allSent: r, bodyText: l };
}
var e1 = a(212737),
    e2 = a(849812);
let e7 = (e) => {
        let { startingScreen: t, analyticsLocations: s } = e;
        I.default.track(X.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: s }),
            (0, M.openModalLazy)(async () => {
                let { default: e } = await Promise.resolve().then(a.bind(a, 212737));
                return (a) => (0, n.jsx)(e, { ...a, startingScreen: t });
            });
    },
    e6 = (e) => {
        let { user: t } = e,
            { avatarSrc: a, eventHandlers: s } = (0, eZ.A)({ userId: t.id, size: eW._3.SIZE_24 });
        return (0, n.jsx)(
            eX.eu,
            { className: e2.bj, src: a, "aria-label": (0, eq.mG)(t), size: eW._3.SIZE_24, ...s },
            t.id,
        );
    },
    e3 = (e) => {
        let { slotIndex: t } = e;
        return (0, n.jsx)("div", { className: e2.p, children: t });
    },
    e8 = (e) => {
        let { referralSentUsers: t, className: a } = e;
        return (0, n.jsx)("div", {
            className: c()(e2.L$, a),
            children: (() => {
                let e = [];
                for (let a = 0; a < eJ.Z; a++)
                    if (t?.[a] !== void 0) {
                        let s = (0, n.jsx)(e6, { user: t[a] }, t[a].id);
                        e.push(s);
                    } else {
                        let t = (0, n.jsx)(e3, { slotIndex: a + 1 }, a);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    e9 = (e) => {
        let { nReferralsSent: t, imageSize: a = 93, backgroundClassName: s, ringClassName: i } = e;
        return (0, n.jsx)(eK.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: s ?? e2.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: i ?? e2.e0,
            overlayClassName: t === eJ.Z ? e2.ys : void 0,
            children: (0, n.jsx)(eY._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: a,
                width: a,
                zoomable: !1,
            }),
        });
    },
    e5 = (e) => {
        let { className: t } = e,
            { referralSentUsers: a, nReferralsSent: s, hasEligibleFriends: i, allSent: r, bodyText: l } = e0();
        return (0, n.jsxs)("div", {
            className: c()(e2.kL, t),
            children: [
                (0, n.jsx)("div", { className: e2.G3, children: (0, n.jsx)(e9, { nReferralsSent: s }) }),
                (0, n.jsxs)("div", {
                    className: e2.IH,
                    children: [
                        (0, n.jsx)(e8, { referralSentUsers: a, className: e2.GV }),
                        (0, n.jsxs)("div", {
                            className: e2.n4,
                            children: [
                                (0, n.jsx)(P.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: Z.intl.string(Z.t.USo4s7),
                                }),
                                (0, n.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                            ],
                        }),
                        (0, n.jsx)(L.$, {
                            variant: "primary",
                            disabled: !1 === i || !0 === r,
                            text: Z.intl.string(Z.t.Lm2nFc),
                            onClick: () =>
                                e7({
                                    startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e4 = a(989349),
    te = a.n(e4),
    tt = a(496431),
    ta = a(116689);
let ts = (e) => {
    let { expiresAt: t, className: a } = e,
        s = (0, tt.A)(te()(t).toDate(), 1e3);
    if (null == s) return null;
    let { days: i, hours: r, minutes: l, seconds: o } = s,
        d = [
            { unitValue: i, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, n.jsxs)("div", {
        className: c()(ta.Xl, a),
        children: [
            (0, n.jsx)(U.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: Z.intl.string(Z.t["/ARFVE"]),
            }),
            (0, n.jsx)("div", {
                className: ta.$R,
                children: d.map((e, t) =>
                    (function (e, t) {
                        let a,
                            [s, i] = 1 === (a = e.unitValue.toString()).length ? ["0", a[0]] : [a[0], a[1]];
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)(
                                    "div",
                                    {
                                        className: ta.bh,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: ta.kB,
                                                children: [
                                                    (0, n.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, n.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                    (0, n.jsx)("div", {
                                                        className: ta.B2,
                                                        children: (0, n.jsx)(U.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(U.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return Z.intl.string(Z.t.ixASa2);
                                                        case "hours":
                                                            return Z.intl.string(Z.t["8sNvNn"]);
                                                        case "minutes":
                                                            return Z.intl.string(Z.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return Z.intl.string(Z.t.JhaiLW);
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
                                    (0, n.jsx)(U.E, {
                                        className: ta.cV,
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
var ti = a(473702),
    tn = a(609425),
    tr = a(660184),
    tl = a(287809),
    tc = a(12052);
function to() {
    let e = (0, d.bG)([tl.default], () => tl.default.getCurrentUser()),
        t = (0, tn.A)(),
        { avatarSrc: a, avatarDecorationSrc: s, eventHandlers: i } = (0, eZ.A)({ userId: e?.id, size: eW._3.SIZE_56 });
    if (null == e) return null;
    let r = (0, eq.mG)(e);
    return (0, n.jsxs)("div", {
        className: tc.kL,
        children: [
            (0, n.jsx)("div", {
                className: tc.my,
                children: (0, n.jsx)(eX.eu, {
                    src: a,
                    avatarDecoration: s,
                    size: eW._3.SIZE_56,
                    "aria-label": r,
                    ...i,
                }),
            }),
            (0, n.jsx)("div", { className: tc.QC, children: (0, n.jsx)(tr.A, { userName: r, displayNameStyles: t }) }),
        ],
    });
}
var td = a(707554),
    tu = a(218199);
let tm = (e) => {
    let { className: t, color: a = "text-strong", responsive: s = !0, children: i } = e;
    return (0, n.jsx)(td.F, {
        forceLevel: 1,
        children: (0, n.jsx)(P.D, { className: c()(tu.w, t, s && tu.n), variant: "display-md", color: a, children: i }),
    });
};
var tA = a(690093);
function tN(e) {
    let { className: t } = e,
        { referralSentUsers: a, nReferralsSent: s, hasEligibleFriends: i, allSent: r, bodyText: l } = e0();
    return (0, n.jsxs)("div", {
        className: c()(tA.kL, t),
        children: [
            (0, n.jsx)("div", {
                className: tA.G3,
                children: (0, n.jsx)(e9, {
                    nReferralsSent: s,
                    imageSize: 65,
                    backgroundClassName: tA.HP,
                    ringClassName: tA.pZ,
                }),
            }),
            (0, n.jsxs)("div", {
                className: tA.IH,
                children: [
                    (0, n.jsxs)("div", {
                        className: tA.n4,
                        children: [
                            (0, n.jsx)(P.D, {
                                variant: "heading-lg/semibold",
                                color: "text-strong",
                                children: Z.intl.string(Z.t.USo4s7),
                            }),
                            (0, n.jsx)(U.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                        ],
                    }),
                    (0, n.jsx)(e8, { referralSentUsers: a, className: tA.t7 }),
                ],
            }),
            (0, n.jsx)(L.$, {
                variant: "primary",
                disabled: !1 === i || !0 === r,
                text: Z.intl.string(Z.t.Lm2nFc),
                onClick: () =>
                    e7({ startingScreen: e1.SelectFriendsModalScreens.SELECT_FRIENDS, analyticsLocations: [] }),
            }),
        ],
    });
}
var tg = a(702841),
    tp = a(676279),
    tx = a(20458),
    tE = a(141502);
let th = (e) => {
    let {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: a,
            flyingWumpusAssetClassName: s,
            boltContainerClassName: i,
            carContainerClassName: r,
            hammerContainerClassName: l,
            keyContainerClassName: c,
            starContainerClassName: o,
            boltAssetClassName: d,
            carAssetClassName: u,
            hammerAssetClassName: m,
            keyAssetClassName: A,
            starAssetClassName: N,
            animationSpeedScale: g = 1,
        } = e,
        p = (0, tg.bG)([ej.Ay], () => ej.Ay.useReducedMotion),
        x = (0, tp.TM)();
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(tE.A, {
                supportHEVCAlpha: x,
                isMotionReduced: p,
                containerVisibilityPercentage: t,
                containerClassName: a,
                assetClassName: s,
                animationSpeedScale: g,
            }),
            (0, n.jsx)(tx.A, {
                isMotionReduced: p,
                containerVisibilityPercentage: t,
                boltContainerClassName: i,
                carContainerClassName: r,
                hammerContainerClassName: l,
                keyContainerClassName: c,
                starContainerClassName: o,
                boltAssetClassName: d,
                carAssetClassName: u,
                hammerAssetClassName: m,
                keyAssetClassName: A,
                starAssetClassName: N,
                animationSpeedScale: g,
            }),
        ],
    });
};
var tf = a(43588);
let tC = (e) => {
    let { containerVisibilityPercentage: t, compact: a } = e;
    return (0, n.jsx)(th, {
        containerVisibilityPercentage: t,
        flyingWumpusContainerClassName: c()(tf.wG, a && tf.Vx),
        flyingWumpusAssetClassName: c()(tf.lu, a && tf.ov),
        boltContainerClassName: c()(tf.nJ, a && tf.Wc),
        hammerContainerClassName: c()(tf.Gj, a && tf.XA),
        keyContainerClassName: c()(tf.FV, a && tf.oZ),
        starContainerClassName: c()(tf.E1, a && tf.LN),
        boltAssetClassName: c()(tf.j7, a && tf.QN),
        hammerAssetClassName: c()(tf.Wv, a && tf.B9),
        keyAssetClassName: c()(tf.rs, a && tf.I1),
        starAssetClassName: c()(tf.OY, a && tf.b$),
        animationSpeedScale: 1 / 0.7,
    });
};
var tR = (((s = {}).MORNING = "morning"), (s.AFTERNOON = "afternoon"), (s.EVENING = "evening"), s);
function t_() {
    let e,
        t = { [tR.MORNING]: Z.t["Wvc/I+"], [tR.AFTERNOON]: Z.t["d+0STx"], [tR.EVENING]: Z.t.CqsxKI };
    return Z.intl.string(
        t[(e = new Date().getHours()) >= 5 && e < 12 ? tR.MORNING : e >= 12 && e < 17 ? tR.AFTERNOON : tR.EVENING],
    );
}
var tI = a(97584),
    tT = a(202241);
let tb = (e) => {
        let { containerVisibilityPercentage: t, compact: a } = e;
        return (0, n.jsx)(th, {
            containerVisibilityPercentage: t,
            flyingWumpusContainerClassName: c()(tT.wG, a && tT.Vx),
            flyingWumpusAssetClassName: c()(tT.lu, a && tT.ov),
            boltContainerClassName: c()(tT.nJ, a && tT.Wc),
            hammerContainerClassName: c()(tT.Gj, a && tT.XA),
            keyContainerClassName: c()(tT.FV, a && tT.oZ),
            starContainerClassName: c()(tT.E1, a && tT.LN),
            boltAssetClassName: c()(tT.j7, a && tT.QN),
            hammerAssetClassName: c()(tT.Wv, a && tT.B9),
            keyAssetClassName: c()(tT.rs, a && tT.I1),
            starAssetClassName: c()(tT.OY, a && tT.b$),
            animationSpeedScale: 1 / 0.7,
        });
    },
    tj = {
        [b.CL.TREATMENT_A]: (e) => {
            let {
                    className: t,
                    headingTop: a,
                    showPill: s,
                    buttonVisibilityRef: i,
                    shouldShowReferralProgressBar: r,
                } = e,
                l = (0, d.bG)([ej.Ay], () => ej.Ay.useReducedMotion),
                { visibilityPercentageRef: o, visibilityPercentage: u } = (0, ew.U)(!l),
                m = t_();
            return (0, n.jsx)("div", {
                className: c()(tI.kL, tI.Eg, t),
                ref: i,
                children: (0, n.jsxs)("div", {
                    className: c()(tI.W2, tI.HQ),
                    ref: o,
                    children: [
                        (0, n.jsxs)(eT.B, {
                            align: "start",
                            gap: 32,
                            className: tI.ZU,
                            children: [
                                s && a,
                                (0, n.jsxs)(eT.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, n.jsx)(tm, {
                                            className: tI.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: m,
                                        }),
                                        (0, n.jsx)(to, {}),
                                    ],
                                }),
                                r && (0, n.jsx)(tN, {}),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: tI.y3,
                            children: (0, n.jsx)(tC, { containerVisibilityPercentage: u, compact: !r }),
                        }),
                    ],
                }),
            });
        },
        [b.CL.TREATMENT_B]: (e) => {
            let {
                    className: t,
                    headingTop: a,
                    showPill: s,
                    buttonVisibilityRef: i,
                    shouldShowReferralProgressBar: r,
                } = e,
                l = (0, d.bG)([ej.Ay], () => ej.Ay.useReducedMotion),
                { visibilityPercentageRef: o, visibilityPercentage: u } = (0, ew.U)(!l),
                m = Z.intl.string(Z.t.ifwQZb);
            return (0, n.jsx)("div", {
                className: c()(tI.kL, tI.Eg, t),
                ref: i,
                children: (0, n.jsxs)("div", {
                    className: c()(tI.W2, tI.m8),
                    ref: o,
                    children: [
                        (0, n.jsxs)(eT.B, {
                            align: "start",
                            gap: 32,
                            className: tI.Y0,
                            children: [
                                s && a,
                                (0, n.jsx)("div", {
                                    className: c()(tI.N1, tI.v8),
                                    children: (0, n.jsx)(tm, {
                                        className: tI.Rx,
                                        color: "text-default",
                                        responsive: !1,
                                        children: m,
                                    }),
                                }),
                                r && (0, n.jsx)(tN, {}),
                            ],
                        }),
                        (0, n.jsx)("div", {
                            className: tI.BF,
                            children: (0, n.jsx)(tb, { containerVisibilityPercentage: u, compact: !r }),
                        }),
                    ],
                }),
            });
        },
        [b.CL.TREATMENT_C]: (e) => {
            let {
                    className: t,
                    headingTop: a,
                    showPill: s,
                    buttonVisibilityRef: i,
                    shouldShowReferralProgressBar: r,
                } = e,
                l = t_();
            return (0, n.jsx)("div", {
                className: c()(tI.kL, tI.Eg, t),
                ref: i,
                children: (0, n.jsxs)("div", {
                    className: c()(tI.W2, tI.J_),
                    children: [
                        (0, n.jsxs)(eT.B, {
                            align: "start",
                            gap: 32,
                            fullWidth: !1,
                            className: tI.$S,
                            children: [
                                s && a,
                                (0, n.jsxs)(eT.B, {
                                    align: "start",
                                    gap: 12,
                                    children: [
                                        (0, n.jsx)(tm, {
                                            className: tI.z_,
                                            color: "text-default",
                                            responsive: !1,
                                            children: l,
                                        }),
                                        (0, n.jsx)(to, {}),
                                    ],
                                }),
                            ],
                        }),
                        r && (0, n.jsx)("div", { className: tI.Pq, children: (0, n.jsx)(tN, {}) }),
                    ],
                }),
            });
        },
    };
function tS(e) {
    let { treatment: t, ...a } = e,
        s = tj[t];
    return null != s ? (0, n.jsx)(s, { ...a }) : null;
}
var tv = a(652533),
    tP = a(447764),
    ty = a(180894);
let tO = (e) => {
    let { containerVisibilityPercentage: t } = e,
        a = (0, tg.bG)([ej.Ay], () => ej.Ay.useReducedMotion);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: tP.BI,
                children: (0, n.jsx)(tv.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tv.$G },
                    yAxisAnimationData: { range: 20, duration: tv.Mp, path: tv.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: a,
                    parallaxAnimationData: {
                        pathDirection: tv.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, n.jsx)("img", { src: ty.A, alt: "", className: tP.Q }),
                }),
            }),
            (0, n.jsx)(tx.A, {
                isMotionReduced: a,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tP.Gj,
                keyContainerClassName: tP.FV,
                starContainerClassName: tP.E1,
                hammerAssetClassName: tP.Wv,
                keyAssetClassName: tP.rs,
                starAssetClassName: tP.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var tM = a(725807),
    tL = a(774774),
    tD = a(975916);
let tU = () => {
    let e = { section: X.JJy.REVERSE_TRIAL_BANNER };
    return (0, n.jsxs)("div", {
        className: tD.vK,
        children: [
            (0, n.jsx)(tL.e4, { text: Z.intl.string(Z.t.qYKftX), className: tD.Io }),
            (0, n.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tD._u,
            }),
            (0, n.jsx)("div", {
                className: tD.IP,
                children: (0, n.jsx)(U.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: Z.intl.format(Z.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, n.jsx)(tM.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tD.aA,
                shinyButtonClassName: tD.Xp,
            }),
        ],
    });
};
var tG = a(18671);
let tk = () => {
        let e = (0, tg.bG)([ej.Ay], () => ej.Ay.useReducedMotion);
        return (0, n.jsx)(tx.A, {
            isMotionReduced: e,
            blurScale: 0.4,
            starContainerClassName: tG.cI,
            hammerContainerClassName: tG.qg,
            keyContainerClassName: tG.h2,
            boltContainerClassName: tG.Bz,
            starAssetClassName: tG.ks,
            hammerAssetClassName: tG.GY,
            keyAssetClassName: tG.p4,
            boltAssetClassName: tG.vy,
        });
    },
    tF = (e) => {
        let { fpEndsAt: t, className: a, buttonVisibilityRef: s } = e,
            i = (0, T.Zb)(t);
        return (0, n.jsx)("div", {
            className: c()(tI.kL, a),
            ref: s,
            children: (0, n.jsxs)("div", {
                className: tI.ap,
                children: [
                    (0, n.jsxs)(eT.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, n.jsx)(eH.A, { text: Z.intl.string(Z.t.yhldRB) }),
                            (0, n.jsxs)(eT.B, {
                                align: "start",
                                gap: 12,
                                className: tI.rG,
                                children: [
                                    (0, n.jsx)(tm, { children: Z.intl.format(Z.t.FwjP6W, { days: i }) }),
                                    (0, n.jsx)(U.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: Z.intl.string(Z.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, n.jsxs)(eT.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, n.jsx)(V.A, {
                                        size: "md",
                                        buttonTextOverride: Z.intl.string(Z.t["2+luBl"]),
                                        iconOverride: eb.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, n.jsx)(L.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: Z.intl.string(Z.t.Af7ye6),
                                        onClick: () => (0, ey.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: tI.Hk,
                        children: [(0, n.jsx)(e_, { alt: "", width: "100%", height: "auto" }), (0, n.jsx)(tk, {})],
                    }),
                ],
            }),
        });
    },
    tw = (e) => {
        let { className: t, isEligibleForBogoPromotion: s, isInReverseTrial: i, shouldShowReferralProgressBar: r } = e,
            {
                headingText: l,
                headingTop: o,
                showPill: u,
                shouldShowChurnVariant: m,
                premiumSubscription: A,
                userDiscountOffer: N,
                discountedPrice: x,
                buttonVisibilityRef: E,
            } = tV(),
            { treatment: h, isInNitroHomeHeaderTreatment: f } = (0, b.jy)("subscriber_home_hero"),
            { analyticsLocations: C } = (0, p.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            R = (0, eF.c)(eC.C.MARKETING_PAGE_BANNER),
            _ = null != A && A.status === X.Dmq.CANCELED,
            I = f && !_,
            T = null;
        null != R && "marketingPageBanner" === R.properties.properties.oneofKind
            ? (T = (0, n.jsx)(eV.x, {
                  componentId: R.id,
                  promotionBannerMarketingComponentFields: R.properties.properties.marketingPageBanner,
              }))
            : s
              ? (T = (0, n.jsx)(eB.A, { variant: eB.c.SUBSCRIBER_HOME }))
              : i
                ? (T = (0, n.jsx)(tU, {}))
                : r && !I && (T = (0, n.jsx)(e5, {}));
        let j = (0, ek.V)(),
            S = (0, eG.O)(),
            P = (0, v.U9)(S, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            y = null != A && A.status !== X.Dmq.ACCOUNT_HOLD && A.hasAnyPremiumNitro,
            O = (0, ev.A)(),
            D = O.isFractionalPremiumActive && !y && null == T && !m,
            G = (0, d.bG)([ej.Ay], () => ej.Ay.useReducedMotion),
            { visibilityPercentageRef: k, visibilityPercentage: F } = (0, ew.U)(!G);
        return i
            ? (0, n.jsx)(tF, { fpEndsAt: O.currentEntitlementEndsAt, className: t, buttonVisibilityRef: E })
            : I
              ? (0, n.jsx)(tS, {
                    treatment: h,
                    className: t,
                    headingTop: o,
                    showPill: u,
                    buttonVisibilityRef: E,
                    shouldShowReferralProgressBar: r,
                })
              : (0, n.jsx)("div", {
                    className: c()(tI.kL, t),
                    "data-testid": "subscriber-nitro-home-hero-header",
                    ref: E,
                    children: (0, n.jsxs)("div", {
                        className: tI.Qs,
                        ref: k,
                        children: [
                            u && o,
                            (0, n.jsxs)("div", {
                                className: tI.N1,
                                children: [
                                    (0, n.jsx)(tO, { containerVisibilityPercentage: F }),
                                    m &&
                                        N?.expiresAt != null &&
                                        (0, n.jsx)(ts, { expiresAt: N.expiresAt.toISOString(), className: tI.IZ }),
                                    (0, n.jsx)(tm, {
                                        children:
                                            m && null != N
                                                ? Z.intl.format(Z.t["3yZP0G"], { percent: N.discount.amount })
                                                : l,
                                    }),
                                    m &&
                                        null != N &&
                                        null != x &&
                                        (0, n.jsx)(U.E, {
                                            className: tI.jG,
                                            variant: "text-sm/medium",
                                            color: "text-strong",
                                            children: Z.intl.format(Z.t["3Q4wCy"], {
                                                discountedPrice: x,
                                                billingPeriod: (0, eM.Ke)(N.discount.userUsageLimitInterval),
                                                numMonths: N.discount.userUsageLimit,
                                            }),
                                        }),
                                ],
                            }),
                            (0, n.jsxs)("div", {
                                className: D || m ? tI.UJ : void 0,
                                children: [
                                    D &&
                                        (0, n.jsx)(V.A, {
                                            size: "md",
                                            hasActivePromotion: !!s,
                                            subscriptionTier: j?.subscription_trial?.sku_id ?? P,
                                        }),
                                    m &&
                                        null != A &&
                                        (0, n.jsx)(L.$, {
                                            variant: "expressive",
                                            icon: eb.t,
                                            size: "md",
                                            text: Z.intl.string(Z.t.zrCzVB),
                                            onClick: () => {
                                                var e;
                                                return (
                                                    (e = ti.g.CONFIRM_DISCOUNT),
                                                    void (0, M.openModalLazy)(async () => {
                                                        let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                            await Promise.all([
                                                                a.e("34218"),
                                                                a.e("21277"),
                                                                a.e("26963"),
                                                                a.e("46334"),
                                                                a.e("18240"),
                                                                a.e("38805"),
                                                                a.e("70294"),
                                                                a.e("17095"),
                                                                a.e("96575"),
                                                                a.e("89729"),
                                                                a.e("32285"),
                                                                a.e("6683"),
                                                                a.e("76631"),
                                                                a.e("95726"),
                                                                a.e("94307"),
                                                                a.e("2677"),
                                                                a.e("32993"),
                                                                a.e("6330"),
                                                                a.e("22274"),
                                                                a.e("34796"),
                                                                a.e("87550"),
                                                                a.e("77688"),
                                                                a.e("29312"),
                                                                a.e("71934"),
                                                                a.e("28379"),
                                                                a.e("33063"),
                                                                a.e("39995"),
                                                                a.e("25568"),
                                                                a.e("394"),
                                                                a.e("68953"),
                                                                a.e("72451"),
                                                                a.e("4355"),
                                                                a.e("84764"),
                                                                a.e("16581"),
                                                                a.e("23924"),
                                                                a.e("42205"),
                                                                a.e("71091"),
                                                                a.e("91680"),
                                                                a.e("57036"),
                                                                a.e("57174"),
                                                                a.e("98839"),
                                                                a.e("10471"),
                                                                a.e("11301"),
                                                                a.e("61737"),
                                                                a.e("68261"),
                                                                a.e("64827"),
                                                                a.e("7167"),
                                                                a.e("96643"),
                                                                a.e("92789"),
                                                                a.e("2368"),
                                                                a.e("21335"),
                                                                a.e("47834"),
                                                                a.e("11735"),
                                                                a.e("6338"),
                                                                a.e("19455"),
                                                                a.e("44571"),
                                                                a.e("88941"),
                                                                a.e("61379"),
                                                                a.e("43039"),
                                                                a.e("25693"),
                                                                a.e("32606"),
                                                                a.e("28154"),
                                                                a.e("48804"),
                                                                a.e("21690"),
                                                                a.e("4369"),
                                                                a.e("32817"),
                                                                a.e("55112"),
                                                                a.e("13681"),
                                                                a.e("53729"),
                                                                a.e("10004"),
                                                                a.e("55314"),
                                                                a.e("89094"),
                                                                a.e("29177"),
                                                                a.e("32551"),
                                                                a.e("63437"),
                                                                a.e("23353"),
                                                                a.e("50015"),
                                                                a.e("38835"),
                                                                a.e("11523"),
                                                                a.e("44695"),
                                                                a.e("44376"),
                                                                a.e("31644"),
                                                                a.e("45723"),
                                                                a.e("70697"),
                                                                a.e("18546"),
                                                                a.e("53930"),
                                                                a.e("31390"),
                                                                a.e("68726"),
                                                                a.e("90244"),
                                                                a.e("18943"),
                                                                a.e("17225"),
                                                                a.e("70653"),
                                                                a.e("96123"),
                                                                a.e("31825"),
                                                                a.e("36320"),
                                                                a.e("20320"),
                                                                a.e("84967"),
                                                                a.e("47017"),
                                                                a.e("90889"),
                                                                a.e("99657"),
                                                                a.e("26780"),
                                                                a.e("44265"),
                                                                a.e("99141"),
                                                                a.e("84103"),
                                                                a.e("21435"),
                                                                a.e("62875"),
                                                                a.e("30920"),
                                                                a.e("99941"),
                                                                a.e("25990"),
                                                                a.e("11527"),
                                                                a.e("63095"),
                                                                a.e("52266"),
                                                                a.e("68647"),
                                                                a.e("92583"),
                                                                a.e("39810"),
                                                                a.e("63070"),
                                                                a.e("64615"),
                                                                a.e("96443"),
                                                                a.e("75134"),
                                                                a.e("57598"),
                                                                a.e("55184"),
                                                                a.e("23216"),
                                                                a.e("87079"),
                                                                a.e("25637"),
                                                                a.e("14805"),
                                                                a.e("73547"),
                                                                a.e("43300"),
                                                                a.e("99593"),
                                                                a.e("84456"),
                                                                a.e("47555"),
                                                                a.e("61935"),
                                                                a.e("62168"),
                                                                a.e("69875"),
                                                                a.e("58157"),
                                                                a.e("22380"),
                                                                a.e("15754"),
                                                                a.e("90191"),
                                                                a.e("77084"),
                                                                a.e("75361"),
                                                                a.e("52557"),
                                                                a.e("95093"),
                                                                a.e("71234"),
                                                                a.e("60177"),
                                                                a.e("5636"),
                                                                a.e("33861"),
                                                                a.e("1006"),
                                                                a.e("23276"),
                                                                a.e("30938"),
                                                                a.e("48720"),
                                                                a.e("56689"),
                                                                a.e("59880"),
                                                                a.e("74016"),
                                                                a.e("12168"),
                                                                a.e("94161"),
                                                                a.e("13051"),
                                                                a.e("80347"),
                                                                a.e("10741"),
                                                                a.e("80166"),
                                                            ]).then(a.bind(a, 293061));
                                                        return (a) =>
                                                            (0, n.jsx)(t, {
                                                                ...a,
                                                                analyticsLocations: C,
                                                                initialStep: e,
                                                                premiumSubscription: A,
                                                            });
                                                    })
                                                );
                                            },
                                        }),
                                    (0, n.jsx)(eE.A, {
                                        variant: D || m ? "secondary" : "expressive",
                                        size: "md",
                                        buttonTextOverride: Z.intl.string(Z.t["3KomGa"]),
                                    }),
                                ],
                            }),
                            T,
                        ],
                    }),
                });
    },
    [tH, tV] = (0, eO.A)(),
    tB = (e) => {
        let { className: t, buttonVisibilityRef: a, userDiscountOffer: s, discountedPrice: i } = e,
            { analyticsLocations: r } = (0, p.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, T.ds)(),
            c = (0, eL.cg)(),
            o = (0, eD.QQ)(),
            u = (0, d.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
            m = (0, eU.Z)({ location: "subscriber_home_hero" }),
            A = null != u && u.status === X.Dmq.CANCELED && null != s,
            N = o && !(A && m),
            x = Z.intl.string(Z.t.qYKftX),
            E = (0, ez.m)(),
            h = Z.intl.string(Z.t.ifwQZb),
            { fractionalState: f, endsAt: C } = (0, ev.A)(),
            R = (0, eS.Ay)(C, eS.yE.CREDITS_ENDS_IN),
            I = null;
        if (f === K.xc.NONE || l) I = (0, n.jsx)(eH.A, { text: x });
        else {
            N = !0;
            let e = Z.intl.format(Z.t["yR+oDD"], {
                helpCenterLink: en.A.getArticleURL(X.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            I = (0, n.jsx)(eI.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tI.YL,
                position: "right",
                children: (e) =>
                    (0, n.jsx)("div", {
                        ...e,
                        className: tI.V_,
                        children: (0, n.jsx)("div", { className: tI.eL, children: (0, n.jsx)(eH.A, { text: R }) }),
                    }),
            });
        }
        return (0, n.jsx)(p.f5, {
            value: r,
            children: (0, n.jsx)(tH.Provider, {
                value: {
                    headingText: h,
                    headingTop: I,
                    showPill: N,
                    shouldShowChurnVariant: A,
                    premiumSubscription: u,
                    userDiscountOffer: s,
                    discountedPrice: i,
                    buttonVisibilityRef: a,
                },
                children: (0, n.jsx)(tw, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: E,
                }),
            }),
        });
    };
var tz = a(820284),
    tW = a(742589),
    tX = a(909536),
    tK = a(392943),
    tY = a(876587),
    tZ = a(400669),
    tq = a(503255),
    t$ = a(525311);
let tQ = () => {
    let e = (0, tX.Gh)("nitro_home_header"),
        t = r.useRef(null);
    return (0, n.jsxs)(tz.A, {
        section: X.JJy.NAVIGATION,
        children: [
            (0, n.jsx)(tW.A, {
                className: c()(tq.TQ, t$.C$),
                transparent: !0,
                role: "navigation",
                children: (0, n.jsxs)("div", {
                    className: tq.Wc,
                    children: [
                        (0, n.jsxs)("div", {
                            className: t$.wk,
                            children: [
                                (0, n.jsx)(eb.t, { colorClass: t$.tr }),
                                (0, n.jsx)("span", {
                                    role: "img",
                                    "aria-label": Z.intl.string(Z.t.Ipxkog),
                                    className: t$.Ss,
                                    children: (0, n.jsx)(tK.A, { color: "currentColor" }),
                                }),
                            ],
                        }),
                        e &&
                            (0, n.jsxs)("div", {
                                className: tq.MQ,
                                children: [
                                    (0, n.jsx)(tZ.l, {
                                        ref: t,
                                        size: "sm",
                                        location: g.A.PREMIUM_WISHLIST_NITRO_MEMBER_HUB,
                                    }),
                                    (0, n.jsx)(eE.A, { size: "sm", variant: "overlay-secondary" }),
                                ],
                            }),
                    ],
                }),
            }),
            e && (0, n.jsx)(tY.O, { targetElementRef: t, body: Z.intl.string(Z.t.EqUw7K) }),
        ],
    });
};
var tJ = a(922139),
    t0 = a(717421),
    t1 = a(98812),
    t2 = a(67423);
let t7 = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: i, discountedPrice: r } = e,
        { analyticsLocations: l } = (0, p.Ay)(g.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        o = (0, t0.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, n.jsx)(tJ.animated.div, {
        className: c()(t1.iE, { [t1.q4]: !t }),
        style: o,
        children: (0, n.jsxs)("div", {
            className: t1.iJ,
            children: [
                (0, n.jsx)("img", { alt: "", src: t2, className: t1.oU }),
                (0, n.jsxs)("div", {
                    className: t1.iQ,
                    children: [
                        (0, n.jsx)(P.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: Z.intl.format(Z.t["3yZP0G"], { percent: i.discount.amount }),
                        }),
                        (0, n.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Z.intl.format(Z.t["3Q4wCy"], {
                                numMonths: i.discount.userUsageLimit,
                                discountedPrice: r,
                                billingPeriod: (0, eM.Ke)(i.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)(L.$, {
                    variant: "expressive",
                    icon: eb.t,
                    size: "md",
                    text: Z.intl.string(Z.t.zrCzVB),
                    onClick: () =>
                        void (0, M.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                a.e("34218"),
                                a.e("21277"),
                                a.e("26963"),
                                a.e("46334"),
                                a.e("18240"),
                                a.e("38805"),
                                a.e("70294"),
                                a.e("17095"),
                                a.e("96575"),
                                a.e("89729"),
                                a.e("32285"),
                                a.e("6683"),
                                a.e("76631"),
                                a.e("95726"),
                                a.e("94307"),
                                a.e("2677"),
                                a.e("32993"),
                                a.e("6330"),
                                a.e("22274"),
                                a.e("34796"),
                                a.e("87550"),
                                a.e("77688"),
                                a.e("29312"),
                                a.e("71934"),
                                a.e("28379"),
                                a.e("33063"),
                                a.e("39995"),
                                a.e("25568"),
                                a.e("394"),
                                a.e("68953"),
                                a.e("72451"),
                                a.e("4355"),
                                a.e("84764"),
                                a.e("16581"),
                                a.e("23924"),
                                a.e("42205"),
                                a.e("71091"),
                                a.e("91680"),
                                a.e("57036"),
                                a.e("57174"),
                                a.e("98839"),
                                a.e("10471"),
                                a.e("11301"),
                                a.e("61737"),
                                a.e("68261"),
                                a.e("64827"),
                                a.e("7167"),
                                a.e("96643"),
                                a.e("92789"),
                                a.e("2368"),
                                a.e("21335"),
                                a.e("47834"),
                                a.e("11735"),
                                a.e("6338"),
                                a.e("19455"),
                                a.e("44571"),
                                a.e("88941"),
                                a.e("61379"),
                                a.e("43039"),
                                a.e("25693"),
                                a.e("32606"),
                                a.e("28154"),
                                a.e("48804"),
                                a.e("21690"),
                                a.e("4369"),
                                a.e("32817"),
                                a.e("55112"),
                                a.e("13681"),
                                a.e("53729"),
                                a.e("10004"),
                                a.e("55314"),
                                a.e("89094"),
                                a.e("29177"),
                                a.e("32551"),
                                a.e("63437"),
                                a.e("23353"),
                                a.e("50015"),
                                a.e("38835"),
                                a.e("11523"),
                                a.e("44695"),
                                a.e("44376"),
                                a.e("31644"),
                                a.e("45723"),
                                a.e("70697"),
                                a.e("18546"),
                                a.e("53930"),
                                a.e("31390"),
                                a.e("68726"),
                                a.e("90244"),
                                a.e("18943"),
                                a.e("17225"),
                                a.e("70653"),
                                a.e("96123"),
                                a.e("31825"),
                                a.e("36320"),
                                a.e("20320"),
                                a.e("84967"),
                                a.e("47017"),
                                a.e("90889"),
                                a.e("99657"),
                                a.e("26780"),
                                a.e("44265"),
                                a.e("99141"),
                                a.e("84103"),
                                a.e("21435"),
                                a.e("62875"),
                                a.e("30920"),
                                a.e("99941"),
                                a.e("25990"),
                                a.e("11527"),
                                a.e("63095"),
                                a.e("52266"),
                                a.e("68647"),
                                a.e("92583"),
                                a.e("39810"),
                                a.e("63070"),
                                a.e("64615"),
                                a.e("96443"),
                                a.e("75134"),
                                a.e("57598"),
                                a.e("55184"),
                                a.e("23216"),
                                a.e("87079"),
                                a.e("25637"),
                                a.e("14805"),
                                a.e("73547"),
                                a.e("43300"),
                                a.e("99593"),
                                a.e("84456"),
                                a.e("47555"),
                                a.e("61935"),
                                a.e("62168"),
                                a.e("69875"),
                                a.e("58157"),
                                a.e("22380"),
                                a.e("15754"),
                                a.e("90191"),
                                a.e("77084"),
                                a.e("75361"),
                                a.e("52557"),
                                a.e("95093"),
                                a.e("71234"),
                                a.e("60177"),
                                a.e("5636"),
                                a.e("33861"),
                                a.e("1006"),
                                a.e("23276"),
                                a.e("30938"),
                                a.e("48720"),
                                a.e("56689"),
                                a.e("59880"),
                                a.e("74016"),
                                a.e("12168"),
                                a.e("94161"),
                                a.e("13051"),
                                a.e("80347"),
                                a.e("10741"),
                                a.e("80166"),
                            ]).then(a.bind(a, 293061));
                            return (t) =>
                                (0, n.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: l,
                                    initialStep: ti.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var t6 = a(761508),
    t3 = a(449543);
function t8(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function t9(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function t5(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var t4 = a(345394);
function ae(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: t4.A,
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function at(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function aa(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function as(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/20143999f39840372ade2c69bee2bdd603f4b9a727eb6bcdbfad86f20e74bf72.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function ai(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
function an(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var ar = a(661531),
    al = a(996682);
function ac(e) {
    let {
        color: t = ar.A.colors.ICON_STRONG,
        "aria-label": a,
        "aria-hidden": s,
        role: i,
        width: r = 100,
        height: l = 80,
    } = e;
    return (0, n.jsxs)("svg", {
        ...(0, al.A)({ "aria-label": a, "aria-hidden": s, role: i }),
        width: r,
        height: l,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, n.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, n.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, n.jsx)("defs", {
                children: (0, n.jsx)("clipPath", {
                    id: "a",
                    children: (0, n.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function ao(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 162 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var ad = a(78701);
function au(e) {
    let { alt: t, ariaLabel: a, ariaHidden: s, role: i, width: r = 288, height: l = 192 } = e;
    return (0, n.jsx)("img", {
        style: { width: r, height: l },
        src: ad.A,
        alt: t,
        "aria-label": a,
        "aria-hidden": s,
        role: i ?? "img",
    });
}
var am = a(462887),
    aA = a(736653),
    aN = a(259065),
    ag = a(206835),
    ap = a(976860),
    ax = a(591179),
    aE = a(462463),
    ah = a(878784),
    af = a(425713),
    aC = a(696292),
    aR = a(975807),
    a_ = a(562819),
    aI = a(892035),
    aT = a(793943),
    ab = a(95035),
    aj = a(532794),
    aS = a(192444),
    av = a(617986),
    aP = a(862990),
    ay = a(892227),
    aO = a(81466),
    aM = a(318254),
    aL = a(490285),
    aD = a(875679);
let aU = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, f.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let a =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, ay.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, n.jsxs)("div", {
        className: aD.kL,
        children: [
            null != a &&
                (0, n.jsxs)("div", {
                    className: aD.nM,
                    children: [
                        (0, n.jsxs)("div", {
                            className: aD.Pf,
                            children: [
                                (0, n.jsx)(aO.C, { size: "sm", color: ar.A.colors.TEXT_DEFAULT }),
                                (0, n.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: Z.intl.string(aL.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, n.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Z.intl.format(aL.default.xedPIb, { days: a }),
                        }),
                    ],
                }),
            null != a && t.total_rewarded_from_program > 0 && (0, n.jsx)("div", { className: aD.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, n.jsxs)("div", {
                    className: aD.nM,
                    children: [
                        (0, n.jsxs)("div", {
                            className: aD.Pf,
                            children: [
                                (0, n.jsx)(aM.C, { size: "sm", color: ar.A.colors.TEXT_DEFAULT }),
                                (0, n.jsx)(U.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: Z.intl.string(aL.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, n.jsx)(U.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: Z.intl.format(aL.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var aG = a(655752),
    ak = a(764231),
    aF = a(627380),
    aw = a(30084),
    aH = a(792641),
    aV = a(714206),
    aB = a(88001),
    az = a(758836),
    aW = a(190107),
    aX = a(466919),
    aK = a(555599),
    aY = a(817577);
let aZ =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    aq =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    a$ =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function aQ() {
    let { analyticsLocations: e } = (0, p.Ay)(g.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, ax.X)("useWhatsNewPerkCards"),
        s = (0, aP.O9)(),
        { logitechCard: i, steelseriesCard: l } = eA(),
        o = (0, y.l)("premium_subscriber_home_rewards"),
        { showEaPremiumMarketing: u } = (0, aI.z$)("useWhatsNewPerkCards"),
        m = (0, d.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
        A = m?.hasActiveTrial ?? !1,
        N = (0, aE.A)({ analyticsLocations: e }),
        x = (0, r.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, aN.L)({ analyticsLocations: e }),
            );
        }, [e]),
        E = (0, r.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, a_.L)({ analyticsLocations: e }),
            );
        }, [e]),
        h = (0, r.useCallback)(() => {
            (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        C = () => {
            (0, aR.A)(aB.TE);
        },
        R = (0, r.useCallback)(() => {
            A
                ? (0, M.openModalLazy)(async () => {
                      let { default: e } = await a.e("99709").then(a.bind(a, 516044));
                      return (t) => (0, n.jsx)(e, { ...t });
                  })
                : (0, aj.A)({
                      subscriptionTier: K.pe.TIER_2,
                      initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, A]),
        I = (function (e) {
            let { fractionalState: t } = (0, ev.A)(),
                a = t === K.xc.FP_ONLY,
                s = (0, ah.$F)(),
                i = (0, ah.Xb)(),
                n = s?.status === ah.Wo.UPCOMING || a,
                l = (0, af.N)(s?.id),
                o = (function () {
                    let e = (0, ah.$F)(),
                        t = (0, aG.P)(),
                        a = (0, ah.Xb)();
                    if (null == e || null == t || null == a) return null;
                    let s = te()(),
                        i = te()(a),
                        n = e.status === ah.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        l = i.clone().add(n, "months"),
                        c = i.clone().add(r, "months").diff(l);
                    return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / c));
                })(),
                u = (0, d.bG)([ej.Ay], () => ej.Ay.useReducedMotion) && !n,
                m = (0, aF.t)(),
                A = (0, aG.P)();
            return (0, r.useMemo)(() => {
                let t,
                    r = null != A ? Z.intl.string(A.nameUnformattedNitro) : void 0;
                null == s
                    ? a && (t = (0, ak.T)(K.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          s.status === ah.Wo.UPCOMING
                              ? Z.intl.formatToPlainString(Z.t.a1eKDi, { days: m?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return Z.intl.formatToPlainString(Z.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return Z.intl.formatToPlainString(Z.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(m, r) ??
                                (0, ak.T)(s.id, s.tenureReqNumMonths) ??
                                void 0));
                let d = null;
                return (
                    null != l ? (d = n || u ? l.standard : l.ambientLarge) : a && (d = aV),
                    {
                        id: H.TENURE_BADGE_CARD_ID,
                        title: null != s ? Z.intl.string(s.nameUnformattedNitro) : a ? Z.intl.string(Z.t.tx9Fvw) : "",
                        pillText: Z.intl.string(Z.t["jyYgZ+"]),
                        primaryAsset: d,
                        primaryAssetClassName: c()(aH.pq, { [aH.n6]: n, [aH.kE]: u }),
                        caption: null != i ? Z.intl.formatToPlainString(Z.t.Hu4jfi, { date: new Date(i) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: o ?? void 0,
                        ctaText: Z.intl.string(Z.t.jVcuVY),
                        onCtaClick: () => (0, aw.D)({ analyticsLocations: e }),
                    }
                );
            }, [s, l, n, u, i, o, a, m, A, e]);
        })(e),
        { shouldShowBonusOrbsUX: T, multiplier: b } = (0, aS.lk)(aW.rE.NITRO_HOME_MARKETING),
        { isEligible: j, programReward: S } = (0, f.F)({ location: "useWhatsNewPerkCards" }),
        v = j && null != S && null != S.reward_amount && S.reward_amount > 0;
    return (0, r.useMemo)(() => {
        let e = [
                o ? null : i,
                o ? null : l,
                v
                    ? {
                          id: H.NITRO_ORBS_REWARDS_CARD_ID,
                          title: Z.intl.string(aL.default.hx5AFp),
                          description: Z.intl.format(aL.default.wq3CF2, { orbsCount: S.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: c()(aK.lH, aK.yK),
                          footerContent: (0, n.jsx)(aU, {}),
                          ctaText: Z.intl.string(aL.default.BxjHiu),
                          onCtaClick: () => (0, ap.pX)(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(az.G2.ORBS)),
                      }
                    : null,
                T
                    ? {
                          id: H.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: Z.intl.string(Z.t.Csf5Ol),
                          description: Z.intl.format(Z.t.NpUfej, { bonusOrbMultiplier: b }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: Z.intl.string(Z.t.jVcuVY),
                          onCtaClick: () => (0, av.navigateToQuestHome)({ fromContent: aC.u.NITRO_HOME_PERK_CARD }),
                          primaryAssetClassName: aK.Nf,
                      }
                    : null,
                s
                    ? {
                          id: H.PREMIUM_GROUP_CARD_ID,
                          title: Z.intl.string(aX.default.YkvksF),
                          description: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  Z.intl.formatToPlainString(aX.default.JlyGQj, {
                                      totalSeats: aB.aw,
                                      premiumGroupProductName: (0, aB.DP)(),
                                  }),
                                  (0, n.jsx)("div", {
                                      className: aK.LF,
                                      children: (0, n.jsx)(ab.A, {
                                          onClick: C,
                                          children: Z.intl.string(aX.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: Z.intl.string(Z.t.oW0eUd),
                          primaryAsset: aY,
                          ctaIcon: eb.t,
                          ctaIconPosition: "start",
                          ctaText: Z.intl.string(Z.t.IJI7yk),
                          onCtaClick: R,
                      }
                    : null,
                {
                    id: H.DISPLAY_NAME_STYLES_CARD_ID,
                    title: Z.intl.string(Z.t.OLtTrt),
                    description: Z.intl.string(Z.t["di/pXR"]),
                    onCtaClick: t ? N : x,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    primaryAsset: aZ,
                },
                {
                    id: H.CLIENT_THEMES_CARD_ID,
                    title: Z.intl.string(Z.t.acc6h6),
                    description: Z.intl.formatToPlainString(Z.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: a$,
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: () => {
                        (0, aT.nf)(aT.HP.CUSTOM_THEME);
                    },
                },
                u
                    ? null
                    : {
                          id: H.PERMADECOS_CARD_ID,
                          title: Z.intl.string(Z.t.L14NZN),
                          description: Z.intl.string(Z.t.eCZkAI),
                          primaryAsset: (0, n.jsx)(au, { alt: "", ariaHidden: !0 }),
                          ctaText: Z.intl.string(Z.t.jVcuVY),
                          onCtaClick: t ? N : E,
                      },
                {
                    id: H.CUSTOM_APP_ICONS_CARD_ID,
                    title: Z.intl.string(Z.t["GU+wqh"]),
                    description: Z.intl.string(Z.t["1uPk1Z"]),
                    primaryAsset: aq,
                    ctaText: Z.intl.string(Z.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            a = (e = e.filter((e) => null != e))[0].featured,
            r = a ? 5 : 6;
        return (
            e.splice(+!!a, 0, I),
            u &&
                e.splice(1, 0, {
                    id: H.PROFILE_FRAMES_CARD_ID,
                    title: Z.intl.string(Z.t.SGBDnu),
                    description: Z.intl.string(Z.t.cMgegQ),
                    pillText: Z.intl.string(Z.t.y2b7CA),
                    primaryAsset:
                        "https://cdn.discordapp.com/assets/content/3ec210ddc834d1d72f1f84bd5bb0f7a76897b85c34b3602fea04cc0c74462a22.png",
                    primaryAssetClassName: c()(aK.lH, aK.yK),
                    ctaText: Z.intl.string(Z.t.jVcuVY),
                    onCtaClick: () => (0, ap.pX)(X.BVt.COLLECTIBLES_SHOP_WITH_TAB(az.G2.PROFILE_FRAMES)),
                }),
            e.length > r && e.splice(r, e.length - r),
            e
        );
    }, [I, v, S, s, T, b, x, h, E, R, N, t, i, l, o, u]);
}
var aJ = a(355097),
    a0 = a(64514),
    a1 = a(121818),
    a2 =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let a7 = [
    { id: "bestof", label: () => Z.intl.string(Z.t.q1u7nQ) },
    { id: "appearance", label: () => Z.intl.string(Z.t.CUnZkZ) },
    { id: "upgrades", label: () => Z.intl.string(Z.t.KC5q8v) },
    { id: "vip", label: () => Z.intl.string(Z.t.DjEAcv) },
];
var a6 = a(758495);
let a3 = (e) => {
    e.stopPropagation();
};
function a8(e) {
    let { glowingPerkId: t = null } = e,
        a = (function () {
            let e = (0, aA.DP)(),
                t = (0, ax.X)("useFavoritesPerkCards"),
                a = (0, ah.Lh)(),
                s = (0, af.N)(a)?.standard ?? null,
                { analyticsLocations: i } = (0, p.Ay)(g.A.PREMIUM_MARKETING_PERK_CARD),
                l = (0, ag.A)({ scrollPosition: aJ._F.TRY_IT_OUT, analyticsLocations: i }),
                c = (0, r.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: i });
                }, [i]),
                o = (0, r.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: i });
                }, [i]),
                d = (0, r.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: i });
                }, [i]),
                u = (0, r.useCallback)(() => {
                    (0, ap.pX)(X.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, r.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.SOUNDBOARD_CATEGORY, { analyticsLocations: i });
                }, [i]),
                A = (0, aE.A)({ analyticsLocations: i }),
                N = (0, r.useCallback)(() => {
                    (0, ey.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: i }, () =>
                        (0, aN.L)({ analyticsLocations: i }),
                    );
                }, [i]),
                x = aQ(),
                E = (0, r.useMemo)(() => x.map((e) => e?.id), [x]),
                h = (0, r.useMemo)(
                    () => [
                        {
                            id: H.SERVER_BOOSTS_CARD_ID,
                            title: Z.intl.formatToPlainString(Z.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: Z.intl.formatToPlainString(Z.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            onCtaClick: o,
                            primaryAsset: (0, n.jsx)(t8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.PROFILES_CARD_ID,
                            title: Z.intl.string(Z.t.xDRab3),
                            description: Z.intl.string(Z.t.yn6fWA),
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            onCtaClick: t ? A : l,
                            primaryAsset: (0, n.jsx)(t9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: H.HD_VIDEO_CARD_ID,
                            title: Z.intl.string(Z.t["/mQ5gg"]),
                            description: Z.intl.string(Z.t["7WwAXh"]),
                            primaryAsset: (0, n.jsx)(t5, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.CLIENT_THEMES_CARD_ID,
                            title: Z.intl.string(Z.t.acc6h6),
                            description: Z.intl.formatToPlainString(Z.t.WQazjs, { themeCount: 20 }),
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: a$,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: H.MORE_EMOJIS_CARD_ID,
                            title: Z.intl.string(Z.t.D8vIDT),
                            description: Z.intl.string(Z.t.DRMecB),
                            primaryAsset: (0, n.jsx)(ae, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.LARGE_UPLOADS_CARD_ID,
                            title: Z.intl.string(Z.t.nL1WZV),
                            description: Z.intl.formatToPlainString(Z.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, n.jsx)(at, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: H.CUSTOM_APP_ICONS_CARD_ID,
                            title: Z.intl.string(Z.t["GU+wqh"]),
                            description: Z.intl.string(Z.t["1uPk1Z"]),
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: aq,
                            categories: ["appearance"],
                        },
                        {
                            id: H.ENTRANCE_SOUNDS_CARD_ID,
                            title: Z.intl.string(Z.t.WJfCPi),
                            description: Z.intl.string(Z.t.liQKJR),
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: H.DISPLAY_NAME_STYLES_CARD_ID,
                            title: Z.intl.string(Z.t.OLtTrt),
                            description: Z.intl.string(Z.t["di/pXR"]),
                            onCtaClick: t ? A : N,
                            ctaText: Z.intl.string(Z.t.jVcuVY),
                            primaryAsset: aZ,
                            categories: ["appearance"],
                        },
                        {
                            id: H.CUSTOM_SOUNDS_CARD_ID,
                            title: Z.intl.string(Z.t["Cu/oFd"]),
                            description: Z.intl.string(Z.t.czj2aa),
                            primaryAsset: (0, n.jsx)(aa, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.SPECIAL_STICKERS_CARD_ID,
                            title: Z.intl.string(Z.t.MQoVeb),
                            description: Z.intl.string(Z.t.HGCLZX),
                            primaryAsset: (0, n.jsx)("div", {
                                className: aK.Uc,
                                children: (0, n.jsx)(as, { alt: "", ariaHidden: !0 }),
                            }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.SUPER_REACTIONS_CARD_ID,
                            title: Z.intl.string(Z.t.qERvAA),
                            description: Z.intl.string(Z.t.WkUWzx),
                            primaryAsset: (0, n.jsx)(ai, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: H.VIDEO_BACKGROUNDS_CARD_ID,
                            title: Z.intl.string(Z.t.ssVDYQ),
                            description: Z.intl.string(Z.t.aUSRMa),
                            primaryAsset: (0, am.M)(e) ? a0 : a1,
                            categories: ["upgrades"],
                        },
                        {
                            id: H.EARLY_ACCESS_CARD_ID,
                            title: Z.intl.string(Z.t["g/KRY6"]),
                            description: Z.intl.string(Z.t.JzAmJc),
                            primaryAsset: (0, n.jsx)(an, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.BADGE_CARD_ID,
                            title: Z.intl.string(Z.t.Bn3CtB),
                            description: Z.intl.string(Z.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, n.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, n.jsx)(ac, { color: ar.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: Z.intl.string(Z.t["MTD+7w"]),
                            description: Z.intl.string(Z.t.Bhs0s6),
                            ctaText: Z.intl.string(Z.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, n.jsx)(ao, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: H.PERMADECOS_CARD_ID,
                            title: Z.intl.string(Z.t.L14NZN),
                            description: Z.intl.string(Z.t.eCZkAI),
                            primaryAsset: (0, n.jsx)(au, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, l, c, o, d, u, m, N, A, t],
                );
            return (0, r.useMemo)(() => h.filter((e) => null != e && !E.includes(e.id)), [h, E]);
        })(),
        s = null != t ? a.find((e) => e?.id === t) : null,
        [i, l] = (0, r.useState)(s?.categories[0] ?? a2.BEST_OF_NITRO),
        c = (0, r.useMemo)(() => a.filter((e) => null != e && e.categories.includes(i)), [a, i]);
    return (0, n.jsxs)("div", {
        className: a6.uW,
        children: [
            (0, n.jsx)(P.D, { variant: "display-sm", className: a6.R_, children: Z.intl.string(Z.t["Uh3+CA"]) }),
            (0, n.jsx)(t6.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: i,
                onItemSelect: l,
                className: a6.Lq,
                "aria-label": Z.intl.string(Z.t["Uh3+CA"]),
                children: a7.map((e) =>
                    (0, n.jsx)(t6.V.Item, { id: e.id, className: a6.IC, children: e.label() }, e.id),
                ),
            }),
            (0, n.jsx)(
                t3.A,
                {
                    gap: 20,
                    className: a6.jG,
                    children: c.map((e) => {
                        if (null != e)
                            return (0, n.jsx)(
                                J.S,
                                { ...e, glowing: t === e.id, containerClassName: a6.Ui, onFocus: a3 },
                                e.id,
                            );
                    }),
                },
                i,
            ),
        ],
    });
}
var a9 = a(948562);
let a5 = (e) => {
    let { className: t } = e,
        a = (0, aA.DP)();
    return (0, n.jsx)("img", {
        className: c()(a9.D, t),
        src: (0, am.M)(a) ? "/assets/3ebfa123a3805f56.svg" : "/assets/2ee0f277372e56e4.svg",
        alt: "",
    });
};
var a4 = a(946062);
let se = (e) => {
    let { shouldRenderNitroHomeHeaderExperiment: t, gradientOffsetBottom: a, children: s } = e;
    return t
        ? (0, n.jsxs)("div", {
              className: c()(a4.kL, a4.Gd, a4.Eg),
              children: [(0, n.jsx)(a5, {}), (0, n.jsx)(tQ, {}), s],
          })
        : (0, n.jsx)(ex.h, { color: "nitro-pink", className: c()(a4.kL, a4.Gd), offsetBottom: a, children: s });
};
function st(e) {
    let { glowingPerkId: t = null } = e,
        a = aQ();
    return (0, n.jsx)(ei, {
        sectionClassName: es.uW,
        heading: (0, n.jsx)(P.D, { variant: "display-sm", className: es.R_, children: Z.intl.string(Z.t.Aw5DRm) }),
        grid: (0, n.jsx)(n.Fragment, {
            children: a.map((e, a) => {
                if (null == e) return;
                let s = 0 === a && !0 === e.featured;
                return (0, n.jsx)(
                    J.S,
                    { ...e, glowing: t === e.id, featured: s, containerClassName: c()(es.Nr, { [es.Nq]: s }) },
                    e.id,
                );
            }),
        }),
    });
}
var sa = a(994763),
    ss = a(79119);
let si = "section",
    sn = "perk",
    sr = (e) => {
        let { userId: t } = e,
            a = (0, T.ds)(),
            { isInNitroHomeHeaderTreatment: s } = (0, b.jy)("nitro_member_hub_header"),
            i = (0, o.zy)();
        r.useEffect(() => {
            N.h.wait(async () => {
                let e = [(0, h.Ay)()];
                null != t && e.push((0, R.A)(t)), await Promise.all(e);
            });
        }, [t]),
            r.useEffect(() => {
                w(!0);
            }, []),
            (0, S.j)(),
            (0, E.P)(x.b);
        let l = r.useRef(null),
            P = r.useRef(null),
            y = (0, d.bG)([_.A], () => _.A.getPremiumTypeSubscription()),
            { isReady: O, programReward: M } = (0, f.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: L,
                glowingSectionId: D,
                glowingPerkId: U,
                scrollBlock: G,
                scrollInline: k,
            } = r.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get(sn),
                    a = e.get(si);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != a
                      ? { scrollTargetId: a, glowingSectionId: a, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, sa.z)(L ?? "", null != L, G, k);
        let [F, w] = r.useState(!1),
            H = (0, j.p)(),
            V = r.useRef(null),
            [B, z] = r.useState(!1),
            W = null != H && null != y && y.status === X.Dmq.CANCELED,
            Y = (0, v.iU)(K.gD.PREMIUM_MONTH_TIER_2, H, y),
            q = !B && W,
            $ = null != y && y.status === X.Dmq.CANCELED,
            Q = s && !a && !$,
            { analyticsLocations: J } = (0, p.Ay)(g.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ee, et] = r.useState(!1);
        return null != (0, d.bG)([C.A], () => (null != t ? C.A.getUserProfile(t) : null)) && (O || null != M)
            ? (0, n.jsxs)(A.Gt, {
                  className: a4.xW,
                  ref: l,
                  children: [
                      (0, n.jsx)(se, {
                          shouldRenderNitroHomeHeaderExperiment: Q,
                          gradientOffsetBottom: a ? 0.55 : 0.8,
                          children: (0, n.jsxs)(p.f5, {
                              value: J,
                              children: [
                                  (0, n.jsx)(u.L, {
                                      innerRef: V,
                                      onChange: (e) => z(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, n.jsx)(tB, {
                                          buttonVisibilityRef: V,
                                          className: a4.v1,
                                          userDiscountOffer: H,
                                          discountedPrice: Y,
                                      }),
                                  }),
                                  (0, n.jsx)(ep, { glowingPerkId: U, glowingSectionId: D }),
                                  (0, n.jsx)(st, { glowingPerkId: U }),
                                  (0, n.jsx)(a8, { glowingPerkId: U }),
                                  (0, n.jsx)(ef, {
                                      className: a4.Zy,
                                      location: g.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: X.liQ.NITRO_HOME, section: X.JJy.GIFT_BANNER },
                                  }),
                                  (0, n.jsx)("div", { className: a4.hz }),
                                  (0, n.jsx)(u.L, {
                                      innerRef: P,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (I.default.track(X.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: J,
                                              }),
                                              et(!0));
                                      },
                                      children: (0, n.jsx)("div", { ref: P, className: a4._Z }),
                                  }),
                                  (0, n.jsx)("img", {
                                      src: ss,
                                      className: a4.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: Z.intl.string(Z.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      W &&
                          null != Y &&
                          (0, n.jsx)(t7, {
                              isVisible: q && F,
                              premiumSubscription: y,
                              churnDiscountOffer: H,
                              discountedPrice: Y,
                          }),
                  ],
              })
            : Q
              ? (0, n.jsxs)("div", {
                    className: c()(a4.kL, a4.Lq, a4.TN, a4.Eg),
                    children: [
                        (0, n.jsx)(tQ, {}),
                        (0, n.jsx)("div", { className: a4.S, children: (0, n.jsx)(m.y, {}) }),
                    ],
                })
              : (0, n.jsx)("div", { className: c()(a4.kL, a4.Lq), children: (0, n.jsx)(m.y, {}) });
    };
