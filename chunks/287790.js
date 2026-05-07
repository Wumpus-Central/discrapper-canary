"use strict";
n.d(t, { Ay: () => nR, WU: () => nO, x6: () => nv }), n(321073), n(323874), n(14289), n(35956);
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(873263),
    u = n(17928),
    c = n(269115),
    d = n(289873),
    _ = n(689175),
    f = n(315629),
    h = n(228366),
    p = n(793574),
    E = n(688810),
    m = n(949030),
    g = n(611924),
    A = n(961250),
    I = n(366505),
    T = n(841595),
    S = n(903209),
    N = n(166403),
    y = n(174459),
    C = n(881489),
    v = n(131168),
    O = n(482589),
    R = n(511484),
    b = n(534514),
    D = n(31502),
    L = n(562708),
    w = n(192308),
    M = n(821609),
    P = n(885574),
    x = n(834730),
    U = n(43990),
    k = n(359778),
    G = n(139286),
    F = n(872725),
    V = n(920050),
    B = n(792656),
    H = n(985603),
    j = n(777376),
    Y = n(185797),
    W = n(652215),
    K = n(788868),
    z = n(237146),
    $ = n(375708),
    q = n(74776);
function Z(e) {
    let { openRewardModal: t } = e,
        n = (0, Y.F)();
    if (n.kind === Y.L.SUBSCRIBE)
        return (0, r.jsxs)("div", {
            className: q.R$,
            children: [
                (0, r.jsx)(B.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: K.pe.TIER_2,
                }),
                (0, r.jsx)(M.$, { variant: "secondary", size: "md", text: $.intl.string($.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === j.p1.CLAIMED
            ? { text: $.intl.string(z.default.Plwzgf) }
            : { text: $.intl.string($.t.hvVgAZ) };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                className: q.R$,
                children: [
                    (0, r.jsx)(M.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, r.jsx)(M.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === j.p1.CLAIM_IN_PROGRESS &&
                (0, r.jsxs)("div", {
                    className: q.ed,
                    children: [
                        (0, r.jsx)(P.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, r.jsx)(x.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: $.intl.string(z.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function X(e) {
    let { glowing: t = !1 } = e;
    (0, G.A)({
        type: L.ImpressionTypes.VIEW,
        name: L.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: V.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: H.FZ },
    });
    let { analyticsLocations: i } = (0, E.Ay)(p.A.CROISSANT_PREMIUM_HERO_CARD),
        a = s.useCallback(() => {
            (0, w.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("30221"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, r.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, r.jsx)(U.N, {
        theme: W.NJ8.DARKER,
        children: (e) =>
            (0, r.jsx)(E.f5, {
                value: i,
                children: (0, r.jsx)("div", {
                    className: o()(e, q.kL),
                    children: (0, r.jsx)(F.A, {
                        cardType: k.s.CUSTOM,
                        cardClassName: q.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, r.jsxs)("div", {
                            className: q.XF,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: q.j,
                                    children: [
                                        (0, r.jsx)("div", { className: q._g }),
                                        (0, r.jsx)("div", { className: q.$h }),
                                        (0, r.jsx)("div", { className: q.Rv }),
                                        (0, r.jsx)("div", { className: q.Lw }),
                                        (0, r.jsx)("div", { className: q.mR }),
                                    ],
                                }),
                                (0, r.jsxs)("div", {
                                    className: q.Qs,
                                    children: [
                                        (0, r.jsx)("img", {
                                            className: q.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, r.jsx)(b.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: q.DD,
                                            children: $.intl.string(z.default.RGT513),
                                        }),
                                        (0, r.jsx)(x.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: q.h_,
                                            children: $.intl.string(z.default["+pTnsf"]),
                                        }),
                                        (0, r.jsx)(Z, { openRewardModal: a }),
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
        s =
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
    return (0, r.jsx)(Q.S, {
        id: V.XBOX_PREMIUM_PERK_CARD_ID,
        title: $.intl.string(z.default.UVL9tD),
        description: $.intl.string(z.default["I+IXr0"]),
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
        analyticsOptions: { thirdPartyPartner: H.FZ },
    });
}
function ee(e) {
    let { analyticsLocations: t } = (0, E.Ay)(p.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, r.jsx)(E.f5, { value: t, children: (0, r.jsx)(J, { ...e }) });
}
var et = n(367791),
    en = n(672193);
function ei(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: s, grid: a, gridClassName: l } = e,
        u = en.Ui;
    return (0, r.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            s,
            null != a ? (0, r.jsx)("div", { className: o()(u, null != s && et.Jx, l), children: a }) : null,
        ],
    });
}
var er = n(975571),
    es = n(398523),
    ea = n(881373),
    eo = n(581921),
    el = n(852218),
    eu = n(382259),
    ec = n(962995);
function ed() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, ea.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = es.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, D.l)("useHardwarePartnerPerkCards"),
        { currentDate: a, nDaysInMonth: o } = (0, s.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, s.useMemo)(() => {
        let s = i ? void 0 : $.intl.string($.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: V.LOGITECH_3PP_CARD_ID,
                      title: $.intl.string(ec.default.OlObRa),
                      description: $.intl.format(ec.default["/UNTlE"], {
                          discountPercent: ea.aW,
                          termsUrl: er.A.getArticleURL(W.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: a.getDate() / o,
                      ctaText: $.intl.string($.t.w7s5Qr),
                      onCtaClick: () => (0, eo.P)({ partnerId: el.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: s,
                      caption: (0, r.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: el.XY },
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: V.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: $.intl.string($.t.m7PucM),
                      description: $.intl.format($.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: s,
                      caption: (0, r.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: a.getDate() / o,
                      ctaText: $.intl.string($.t.w7s5Qr),
                      onCtaClick: () => (0, eu.u)({ analyticsLocations: e, partnerIds: [el.KS, el.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: el.KS },
                  }
                : null,
        };
    }, [i, e, a, t, o, n]);
}
var e_ = n(102338);
let ef = "xgpp";
function eh(e) {
    let { glowingSectionId: t } = e,
        n = (0, D.l)("premium_subscriber_home_rewards"),
        { logitechCard: i, steelseriesCard: s } = ed();
    if (!n) return null;
    let a = null != i || null != s;
    return (0, r.jsx)(ei, {
        id: ef,
        sectionClassName: o()(e_.uW, e_.Uv, e_.qr),
        heading: (0, r.jsx)(b.D, {
            variant: "display-sm",
            className: o()(en.R_, et.U6),
            children: $.intl.string($.t.NG1e6l),
        }),
        beforeGrid: (0, r.jsx)("div", { className: et.JE, children: (0, r.jsx)(X, { glowing: t === ef }) }),
        grid: a
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ee, { containerClassName: en.Nr }),
                      null != i && (0, r.jsx)(Q.S, { ...i, containerClassName: en.Nr }),
                      null != s && (0, r.jsx)(Q.S, { ...s, containerClassName: en.Nr }),
                  ],
              })
            : null,
    });
}
var ep = n(65470),
    eE = n(797221);
let em = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: s } = (0, E.Ay)(n);
    return (0, r.jsx)(E.f5, {
        value: s,
        children: (0, r.jsxs)(f.h, {
            className: o()(eE.kL, eE.pm, t),
            color: "purple",
            children: [
                (0, r.jsxs)("div", {
                    className: eE.FS,
                    children: [
                        (0, r.jsx)(b.D, {
                            variant: "heading-xxl/bold",
                            className: eE.R_,
                            children: $.intl.string($.t.Ve9Ge6),
                        }),
                        (0, r.jsx)(x.E, { variant: "text-md/medium", children: $.intl.string($.t.yQ06u1) }),
                        (0, r.jsx)("div", {
                            className: eE.SB,
                            children: (0, r.jsx)(ep.A, {
                                buttonTextOverride: $.intl.string($.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eE._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eg = n(877624);
let eA =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eI(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: eA,
        srcSet: `${eA} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var eT = n(502572),
    eS = n(331322),
    eN = n(403581),
    ey = n(775602),
    eC = n(366999),
    ev = n(531260),
    eO = n(780964),
    eR = n(858897),
    eb = n(786300),
    eD = n(927578),
    eL = n(960851),
    ew = n(89366),
    eM = n(422936),
    eP = n(234419),
    ex = n(549996),
    eU = n(371764),
    ek = n(949964),
    eG = n(103411),
    eF = n(778712),
    eV = n(97808),
    eB = n(590251),
    eH = n(144165),
    ej = n(854627),
    eY = n(427262),
    eW = n(326084),
    eK = n(851746),
    ez = n(664654),
    e$ = n(212737),
    eq = n(849812);
let eZ = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, ej.A)({ userId: t.id, size: eF._3.SIZE_24 });
        return (0, r.jsx)(
            eV.eu,
            { className: eq.bj, src: n, "aria-label": (0, eY.mG)(t), size: eF._3.SIZE_24, ...i },
            t.id,
        );
    },
    eX = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", { className: eq.p, children: t });
    },
    eQ = (e) => {
        let { referralSentUsers: t } = e;
        return (0, r.jsx)("div", {
            className: eq.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < ez.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, r.jsx)(eZ, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(eX, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    eJ = (e) => {
        let { nReferralsSent: t } = e;
        return (0, r.jsx)(eB.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eq.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eq.e0,
            overlayClassName: t === ez.Z ? eq.ys : void 0,
            children: (0, r.jsx)(eH._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    e0 = (e) => {
        let { className: t } = e,
            { referralSentUsers: i } = (0, ez.J)(),
            s = (0, u.bG)([eK.A], () => eK.A.getRecipientStatus()),
            a = (0, u.bG)([eK.A], () => eK.A.getHasEligibleFriends()),
            l = s.size === ez.Z && [...s.values()].every((e) => e === eW.aK.REDEEMED),
            c = s.size === ez.Z;
        return (0, r.jsxs)("div", {
            className: o()(eq.kL, t),
            children: [
                (0, r.jsx)("div", { className: eq.G3, children: (0, r.jsx)(eJ, { nReferralsSent: s.size }) }),
                (0, r.jsxs)("div", {
                    className: eq.IH,
                    children: [
                        (0, r.jsx)(eQ, { referralSentUsers: i }),
                        (0, r.jsxs)("div", {
                            className: eq.n4,
                            children: [
                                (0, r.jsx)(b.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: $.intl.string($.t.USo4s7),
                                }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === a
                                            ? $.intl.format($.t["zWhX/Q"], {
                                                  helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM),
                                              })
                                            : i.length === ez.Z
                                              ? !0 === l
                                                  ? $.intl.format($.t["1aEjsH"], {
                                                        helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : $.intl.format($.t["+u3AOO"], {
                                                        helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : $.intl.format($.t["omMr+V"], {
                                                    helpdeskArticle: er.A.getArticleURL(W.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(M.$, {
                            variant: "primary",
                            disabled: !1 === a || !0 === c,
                            text: $.intl.string($.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: i } = e;
                                    y.default.track(W.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: i,
                                    }),
                                        (0, w.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: e$.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e1 = n(989349),
    e2 = n.n(e1),
    e3 = n(496431),
    e6 = n(116689);
let e4 = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, e3.A)(e2()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: s, hours: a, minutes: l, seconds: u } = i,
        c = [
            { unitValue: s, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: o()(e6.Xl, n),
        children: [
            (0, r.jsx)(x.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: $.intl.string($.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: e6.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, s] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: e6.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: e6.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: e6.B2,
                                                        children: (0, r.jsx)(x.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: e6.B2,
                                                        children: (0, r.jsx)(x.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(x.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return $.intl.string($.t.ixASa2);
                                                        case "hours":
                                                            return $.intl.string($.t["8sNvNn"]);
                                                        case "minutes":
                                                            return $.intl.string($.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return $.intl.string($.t.JhaiLW);
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
                                    (0, r.jsx)(x.E, {
                                        className: e6.cV,
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
var e5 = n(473702),
    e7 = n(505559),
    e8 = n(103733),
    e9 = n(702841),
    te = n(608416),
    tt = n(384601),
    tn = n(447764),
    ti = n(180894);
let tr = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, e9.bG)([ey.A], () => ey.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: tn.BI,
                children: (0, r.jsx)(te.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: te.$G },
                    yAxisAnimationData: { range: 20, duration: te.Mp, path: te.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: te.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", { src: ti.A, alt: "", className: tn.Q }),
                }),
            }),
            (0, r.jsx)(tt.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: tn.Gj,
                keyContainerClassName: tn.FV,
                starContainerClassName: tn.E1,
                hammerAssetClassName: tn.Wv,
                keyAssetClassName: tn.rs,
                starAssetClassName: tn.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var ts = n(218199);
let ta = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: s } = e;
    return (0, r.jsx)(b.D, { className: o()(ts.w, t, i && ts.n), variant: "display-md", color: n, children: s });
};
var to = n(725807),
    tl = n(774774),
    tu = n(975916);
let tc = () => {
    let e = { section: W.JJy.REVERSE_TRIAL_BANNER };
    return (0, r.jsxs)("div", {
        className: tu.vK,
        children: [
            (0, r.jsx)(tl.e4, { text: $.intl.string($.t.qYKftX), className: tu.Io }),
            (0, r.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tu._u,
            }),
            (0, r.jsx)("div", {
                className: tu.IP,
                children: (0, r.jsx)(x.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: $.intl.format($.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, r.jsx)(to.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tu.aA,
                shinyButtonClassName: tu.Xp,
            }),
        ],
    });
};
var td = n(18671);
let t_ = () => {
    let e = (0, e9.bG)([ey.A], () => ey.A.useReducedMotion);
    return (0, r.jsx)(tt.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: td.cI,
        hammerContainerClassName: td.qg,
        keyContainerClassName: td.h2,
        boltContainerClassName: td.Bz,
        starAssetClassName: td.ks,
        hammerAssetClassName: td.GY,
        keyAssetClassName: td.p4,
        boltAssetClassName: td.vy,
    });
};
var tf = n(97584);
let th = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            s = (0, C.Zb)(t);
        return (0, r.jsx)("div", {
            className: o()(tf.kL, n),
            ref: i,
            children: (0, r.jsxs)("div", {
                className: tf.ap,
                children: [
                    (0, r.jsxs)(eS.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, r.jsx)(e7.A, { text: $.intl.string($.t.yhldRB) }),
                            (0, r.jsxs)(eS.B, {
                                align: "start",
                                gap: 12,
                                className: tf.rG,
                                children: [
                                    (0, r.jsx)(ta, { children: $.intl.format($.t.FwjP6W, { days: s }) }),
                                    (0, r.jsx)(x.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: $.intl.string($.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(eS.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, r.jsx)(B.A, {
                                        size: "md",
                                        buttonTextOverride: $.intl.string($.t["2+luBl"]),
                                        iconOverride: eN.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, r.jsx)(M.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: $.intl.string($.t.Af7ye6),
                                        onClick: () => (0, eR.openUserSettings)(eO.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: tf.Hk,
                        children: [(0, r.jsx)(eI, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(t_, {})],
                    }),
                ],
            }),
        });
    },
    tp = (e) => {
        let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: s, shouldShowReferralProgressBar: a } = e,
            {
                headingText: l,
                headingTop: c,
                showPill: d,
                userDiscountOffer: _,
                discountedPrice: f,
                buttonVisibilityRef: h,
            } = tm(),
            { analyticsLocations: m } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            g = (0, ex.c)(eg.C.MARKETING_PAGE_BANNER),
            A = null;
        null != g && "marketingPageBanner" === g.properties.properties.oneofKind
            ? (A = (0, r.jsx)(eU.x, {
                  componentId: g.id,
                  promotionBannerMarketingComponentFields: g.properties.properties.marketingPageBanner,
              }))
            : i
              ? (A = (0, r.jsx)(ek.A, { variant: ek.c.SUBSCRIBER_HOME }))
              : s
                ? (A = (0, r.jsx)(tc, {}))
                : a && (A = (0, r.jsx)(e0, {}));
        let I = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            T = null != I && I.status === W.Dmq.CANCELED && null != _,
            S = (0, eP.V)(),
            y = (0, eM.O)(),
            C = (0, R.U9)(y, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            v = null != I && I.status !== W.Dmq.ACCOUNT_HOLD && I.hasAnyPremiumNitro,
            O = (0, ev.A)(),
            b = O.isFractionalPremiumActive && !v && null == A && !T,
            D = (0, u.bG)([ey.A], () => ey.A.useReducedMotion),
            { visibilityPercentageRef: L, visibilityPercentage: P } = (0, e8.U)(!D);
        return s
            ? (0, r.jsx)(th, { fpEndsAt: O.currentEntitlementEndsAt, className: t, buttonVisibilityRef: h })
            : (0, r.jsx)("div", {
                  className: o()(tf.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: h,
                  children: (0, r.jsxs)("div", {
                      className: tf.Qs,
                      ref: L,
                      children: [
                          d && c,
                          (0, r.jsxs)("div", {
                              className: tf.N1,
                              children: [
                                  (0, r.jsx)(tr, { containerVisibilityPercentage: P }),
                                  T &&
                                      null != _.expires_at &&
                                      (0, r.jsx)(e4, { expiresAt: _.expires_at, className: tf.IZ }),
                                  (0, r.jsx)(ta, {
                                      children: T ? $.intl.format($.t["3yZP0G"], { percent: _.discount.amount }) : l,
                                  }),
                                  T &&
                                      null != f &&
                                      (0, r.jsx)(x.E, {
                                          className: tf.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: $.intl.format($.t["3Q4wCy"], {
                                              discountedPrice: f,
                                              billingPeriod: (0, eD.Ke)(_.discount.user_usage_limit_interval),
                                              numMonths: _.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: b || T ? tf.UJ : void 0,
                              children: [
                                  b &&
                                      (0, r.jsx)(B.A, {
                                          size: "md",
                                          hasActivePromotion: !!i,
                                          subscriptionTier: S?.subscription_trial?.sku_id ?? C,
                                      }),
                                  T &&
                                      (0, r.jsx)(M.$, {
                                          variant: "expressive",
                                          icon: eN.t,
                                          size: "md",
                                          text: $.intl.string($.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = e5.g.CONFIRM_DISCOUNT),
                                                  void (0, w.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("34218"),
                                                              n.e("74587"),
                                                              n.e("4592"),
                                                              n.e("54747"),
                                                              n.e("758"),
                                                              n.e("6772"),
                                                              n.e("9848"),
                                                              n.e("17094"),
                                                              n.e("80559"),
                                                              n.e("26032"),
                                                              n.e("94864"),
                                                              n.e("76283"),
                                                              n.e("18125"),
                                                              n.e("9131"),
                                                              n.e("22513"),
                                                              n.e("83004"),
                                                              n.e("13498"),
                                                              n.e("89203"),
                                                              n.e("55719"),
                                                              n.e("58858"),
                                                              n.e("88999"),
                                                              n.e("60571"),
                                                              n.e("71934"),
                                                              n.e("52196"),
                                                              n.e("74672"),
                                                              n.e("7053"),
                                                              n.e("86483"),
                                                              n.e("32260"),
                                                              n.e("40153"),
                                                              n.e("68953"),
                                                              n.e("46654"),
                                                              n.e("25907"),
                                                              n.e("26105"),
                                                              n.e("46461"),
                                                              n.e("23924"),
                                                              n.e("71470"),
                                                              n.e("207"),
                                                              n.e("57036"),
                                                              n.e("98839"),
                                                              n.e("28367"),
                                                              n.e("10471"),
                                                              n.e("35429"),
                                                              n.e("11301"),
                                                              n.e("64827"),
                                                              n.e("30938"),
                                                              n.e("96643"),
                                                              n.e("94493"),
                                                              n.e("92789"),
                                                              n.e("47834"),
                                                              n.e("74016"),
                                                              n.e("19551"),
                                                              n.e("6338"),
                                                              n.e("50689"),
                                                              n.e("88941"),
                                                              n.e("61379"),
                                                              n.e("43039"),
                                                              n.e("25693"),
                                                              n.e("28154"),
                                                              n.e("48804"),
                                                              n.e("88077"),
                                                              n.e("85502"),
                                                              n.e("18401"),
                                                              n.e("13681"),
                                                              n.e("53729"),
                                                              n.e("10004"),
                                                              n.e("55314"),
                                                              n.e("89094"),
                                                              n.e("29177"),
                                                              n.e("32551"),
                                                              n.e("32885"),
                                                              n.e("4369"),
                                                              n.e("23353"),
                                                              n.e("53930"),
                                                              n.e("32817"),
                                                              n.e("50015"),
                                                              n.e("47017"),
                                                              n.e("11523"),
                                                              n.e("66900"),
                                                              n.e("1555"),
                                                              n.e("44695"),
                                                              n.e("21690"),
                                                              n.e("44376"),
                                                              n.e("11527"),
                                                              n.e("31644"),
                                                              n.e("70653"),
                                                              n.e("45723"),
                                                              n.e("63070"),
                                                              n.e("70697"),
                                                              n.e("18546"),
                                                              n.e("72535"),
                                                              n.e("38835"),
                                                              n.e("76170"),
                                                              n.e("18943"),
                                                              n.e("84103"),
                                                              n.e("9915"),
                                                              n.e("28561"),
                                                              n.e("53614"),
                                                              n.e("96123"),
                                                              n.e("31825"),
                                                              n.e("36320"),
                                                              n.e("20320"),
                                                              n.e("31390"),
                                                              n.e("43919"),
                                                              n.e("57906"),
                                                              n.e("90889"),
                                                              n.e("51243"),
                                                              n.e("45421"),
                                                              n.e("44265"),
                                                              n.e("99141"),
                                                              n.e("21435"),
                                                              n.e("98793"),
                                                              n.e("92731"),
                                                              n.e("25990"),
                                                              n.e("63095"),
                                                              n.e("68647"),
                                                              n.e("66541"),
                                                              n.e("27413"),
                                                              n.e("64615"),
                                                              n.e("87225"),
                                                              n.e("75134"),
                                                              n.e("84967"),
                                                              n.e("23216"),
                                                              n.e("87079"),
                                                              n.e("78707"),
                                                              n.e("3458"),
                                                              n.e("62827"),
                                                              n.e("73547"),
                                                              n.e("99593"),
                                                              n.e("61935"),
                                                              n.e("62168"),
                                                              n.e("55602"),
                                                              n.e("28128"),
                                                              n.e("59023"),
                                                              n.e("91381"),
                                                              n.e("10034"),
                                                              n.e("73500"),
                                                              n.e("25252"),
                                                              n.e("77084"),
                                                              n.e("20287"),
                                                              n.e("80230"),
                                                              n.e("95093"),
                                                              n.e("71234"),
                                                              n.e("60177"),
                                                              n.e("1006"),
                                                              n.e("23276"),
                                                              n.e("5636"),
                                                              n.e("36487"),
                                                              n.e("95444"),
                                                              n.e("48720"),
                                                              n.e("59880"),
                                                              n.e("84150"),
                                                              n.e("9045"),
                                                              n.e("94161"),
                                                              n.e("35432"),
                                                              n.e("80347"),
                                                              n.e("10741"),
                                                              n.e("80166"),
                                                          ]).then(n.bind(n, 293061));
                                                      return (n) =>
                                                          (0, r.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: m,
                                                              initialStep: e,
                                                              premiumSubscription: I,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, r.jsx)(ep.A, {
                                      variant: b || T ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: $.intl.string($.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          A,
                      ],
                  }),
              });
    },
    [tE, tm] = (0, eb.A)(),
    tg = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: s } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, C.ds)(),
            l = (0, eL.cg)(),
            u = (0, ew.QQ)(),
            c = $.intl.string($.t.qYKftX),
            d = (0, eG.m)(),
            _ = $.intl.string($.t.ifwQZb),
            { fractionalState: f, endsAt: h } = (0, ev.A)(),
            m = (0, eC.Ay)(h, eC.yE.CREDITS_ENDS_IN),
            g = null;
        if (f === K.xc.NONE || o) g = (0, r.jsx)(e7.A, { text: c });
        else {
            u = !0;
            let e = $.intl.format($.t["yR+oDD"], {
                helpCenterLink: er.A.getArticleURL(W.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            g = (0, r.jsx)(eT.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tf.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: tf.V_,
                        children: (0, r.jsx)("div", { className: tf.eL, children: (0, r.jsx)(e7.A, { text: m }) }),
                    }),
            });
        }
        return (0, r.jsx)(E.f5, {
            value: a,
            children: (0, r.jsx)(tE.Provider, {
                value: {
                    headingText: _,
                    headingTop: g,
                    showPill: u,
                    userDiscountOffer: i,
                    discountedPrice: s,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(tp, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: d,
                }),
            }),
        });
    };
var tA = n(873174),
    tI = n(717421),
    tT = n(98812),
    tS = n(67423);
let tN = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: s, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, tI.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(tA.animated.div, {
        className: o()(tT.iE, { [tT.q4]: !t }),
        style: u,
        children: (0, r.jsxs)("div", {
            className: tT.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: tS, className: tT.oU }),
                (0, r.jsxs)("div", {
                    className: tT.iQ,
                    children: [
                        (0, r.jsx)(b.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: $.intl.format($.t["3yZP0G"], { percent: s.discount.amount }),
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: $.intl.format($.t["3Q4wCy"], {
                                numMonths: s.discount.user_usage_limit,
                                discountedPrice: a,
                                billingPeriod: (0, eD.Ke)(s.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(M.$, {
                    variant: "expressive",
                    icon: eN.t,
                    size: "md",
                    text: $.intl.string($.t.zrCzVB),
                    onClick: () =>
                        void (0, w.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("74587"),
                                n.e("4592"),
                                n.e("54747"),
                                n.e("758"),
                                n.e("6772"),
                                n.e("9848"),
                                n.e("17094"),
                                n.e("80559"),
                                n.e("26032"),
                                n.e("94864"),
                                n.e("76283"),
                                n.e("18125"),
                                n.e("9131"),
                                n.e("22513"),
                                n.e("83004"),
                                n.e("13498"),
                                n.e("89203"),
                                n.e("55719"),
                                n.e("58858"),
                                n.e("88999"),
                                n.e("60571"),
                                n.e("71934"),
                                n.e("52196"),
                                n.e("74672"),
                                n.e("7053"),
                                n.e("86483"),
                                n.e("32260"),
                                n.e("40153"),
                                n.e("68953"),
                                n.e("46654"),
                                n.e("25907"),
                                n.e("26105"),
                                n.e("46461"),
                                n.e("23924"),
                                n.e("71470"),
                                n.e("207"),
                                n.e("57036"),
                                n.e("98839"),
                                n.e("28367"),
                                n.e("10471"),
                                n.e("35429"),
                                n.e("11301"),
                                n.e("64827"),
                                n.e("30938"),
                                n.e("96643"),
                                n.e("94493"),
                                n.e("92789"),
                                n.e("47834"),
                                n.e("74016"),
                                n.e("19551"),
                                n.e("6338"),
                                n.e("50689"),
                                n.e("88941"),
                                n.e("61379"),
                                n.e("43039"),
                                n.e("25693"),
                                n.e("28154"),
                                n.e("48804"),
                                n.e("88077"),
                                n.e("85502"),
                                n.e("18401"),
                                n.e("13681"),
                                n.e("53729"),
                                n.e("10004"),
                                n.e("55314"),
                                n.e("89094"),
                                n.e("29177"),
                                n.e("32551"),
                                n.e("32885"),
                                n.e("4369"),
                                n.e("23353"),
                                n.e("53930"),
                                n.e("32817"),
                                n.e("50015"),
                                n.e("47017"),
                                n.e("11523"),
                                n.e("66900"),
                                n.e("1555"),
                                n.e("44695"),
                                n.e("21690"),
                                n.e("44376"),
                                n.e("11527"),
                                n.e("31644"),
                                n.e("70653"),
                                n.e("45723"),
                                n.e("63070"),
                                n.e("70697"),
                                n.e("18546"),
                                n.e("72535"),
                                n.e("38835"),
                                n.e("76170"),
                                n.e("18943"),
                                n.e("84103"),
                                n.e("9915"),
                                n.e("28561"),
                                n.e("53614"),
                                n.e("96123"),
                                n.e("31825"),
                                n.e("36320"),
                                n.e("20320"),
                                n.e("31390"),
                                n.e("43919"),
                                n.e("57906"),
                                n.e("90889"),
                                n.e("51243"),
                                n.e("45421"),
                                n.e("44265"),
                                n.e("99141"),
                                n.e("21435"),
                                n.e("98793"),
                                n.e("92731"),
                                n.e("25990"),
                                n.e("63095"),
                                n.e("68647"),
                                n.e("66541"),
                                n.e("27413"),
                                n.e("64615"),
                                n.e("87225"),
                                n.e("75134"),
                                n.e("84967"),
                                n.e("23216"),
                                n.e("87079"),
                                n.e("78707"),
                                n.e("3458"),
                                n.e("62827"),
                                n.e("73547"),
                                n.e("99593"),
                                n.e("61935"),
                                n.e("62168"),
                                n.e("55602"),
                                n.e("28128"),
                                n.e("59023"),
                                n.e("91381"),
                                n.e("10034"),
                                n.e("73500"),
                                n.e("25252"),
                                n.e("77084"),
                                n.e("20287"),
                                n.e("80230"),
                                n.e("95093"),
                                n.e("71234"),
                                n.e("60177"),
                                n.e("1006"),
                                n.e("23276"),
                                n.e("5636"),
                                n.e("36487"),
                                n.e("95444"),
                                n.e("48720"),
                                n.e("59880"),
                                n.e("84150"),
                                n.e("9045"),
                                n.e("94161"),
                                n.e("35432"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, r.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: l,
                                    initialStep: e5.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var ty = n(761508),
    tC = n(449543);
function tv(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tO(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tR(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tb = n(345394);
function tD(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tb.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tL(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tw(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tP(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tx = n(661531),
    tU = n(996682);
function tk(e) {
    let {
        color: t = tx.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: s,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, tU.A)({ "aria-label": n, "aria-hidden": i, role: s }),
        width: a,
        height: o,
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
function tG(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 162 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tF = n(78701);
function tV(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tF.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tB = n(462887),
    tH = n(736653),
    tj = n(259065),
    tY = n(206835),
    tW = n(976860),
    tK = n(591179),
    tz = n(462463),
    t$ = n(878784),
    tq = n(425713),
    tZ = n(975807),
    tX = n(562819),
    tQ = n(793943),
    tJ = n(95035),
    t0 = n(532794),
    t1 = n(192444),
    t2 = n(39423),
    t3 = n(892227),
    t6 = n(81466),
    t4 = n(318254),
    t5 = n(490285),
    t7 = n(875679);
let t8 = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, t3.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, r.jsxs)("div", {
        className: t7.kL,
        children: [
            null != n &&
                (0, r.jsxs)("div", {
                    className: t7.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: t7.Pf,
                            children: [
                                (0, r.jsx)(t6.C, { size: "sm", color: tx.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: $.intl.string(t5.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: $.intl.format(t5.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, r.jsx)("div", { className: t7.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, r.jsxs)("div", {
                    className: t7.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: t7.Pf,
                            children: [
                                (0, r.jsx)(t4.C, { size: "sm", color: tx.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: $.intl.string(t5.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: $.intl.format(t5.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var t9 = n(655752),
    ne = n(764231),
    nt = n(627380),
    nn = n(30084),
    ni = n(792641),
    nr = n(714206),
    ns = n(88001),
    na = n(758836),
    no = n(190107),
    nl = n(466919),
    nu = n(555599),
    nc = n(817577);
let nd =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    n_ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nf =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nh() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, tK.X)("useWhatsNewPerkCards"),
        i = (0, t2.O9)(),
        { logitechCard: a, steelseriesCard: l } = ed(),
        c = (0, D.l)("premium_subscriber_home_rewards"),
        d = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        _ = d?.hasActiveTrial ?? !1,
        f = (0, tz.A)({ analyticsLocations: e }),
        h = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tj.L)({ analyticsLocations: e }),
            );
        }, [e]),
        m = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tX.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        A = () => {
            (0, tZ.A)(ns.TE);
        },
        T = (0, s.useCallback)(() => {
            _
                ? (0, w.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, t0.A)({
                      subscriptionTier: K.pe.TIER_2,
                      initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, _]),
        S = (function (e) {
            let { fractionalState: t } = (0, ev.A)(),
                n = t === K.xc.FP_ONLY,
                i = (0, t$.$F)(),
                r = (0, t$.Xb)(),
                a = i?.status === t$.Wo.UPCOMING || n,
                l = (0, tq.N)(i?.id),
                u = (function () {
                    let e = (0, t$.$F)(),
                        t = (0, t9.P)(),
                        n = (0, t$.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = e2()(),
                        r = e2()(n),
                        s = e.status === t$.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                c = (0, nt.t)(),
                d = (0, t9.P)();
            return (0, s.useMemo)(() => {
                let t,
                    s = null != d ? $.intl.string(d.nameUnformattedNitro) : void 0;
                return (
                    null == i
                        ? n && (t = (0, ne.T)(K.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                        : (t =
                              i.status === t$.Wo.UPCOMING
                                  ? $.intl.formatToPlainString($.t.a1eKDi, { days: c?.days ?? 0 })
                                  : ((function (e, t) {
                                        if (null != e && null != t) {
                                            if (e.days <= 30)
                                                return $.intl.formatToPlainString($.t.NEXoaI, {
                                                    days: e.days,
                                                    nextBadgeName: t,
                                                });
                                            if (e.months <= 3)
                                                return $.intl.formatToPlainString($.t.KDV8oD, {
                                                    months: e.months,
                                                    nextBadgeName: t,
                                                });
                                        }
                                    })(c, s) ??
                                    (0, ne.T)(i.id, i.tenureReqNumMonths) ??
                                    void 0)),
                    {
                        id: V.TENURE_BADGE_CARD_ID,
                        title: null != i ? $.intl.string(i.nameUnformattedNitro) : n ? $.intl.string($.t.tx9Fvw) : "",
                        pillText: $.intl.string($.t["jyYgZ+"]),
                        primaryAsset: null != l ? (a ? l.standard : l.ambientLarge) : n ? nr : null,
                        primaryAssetClassName: o()(ni.p, { [ni.n]: a }),
                        caption: null != r ? $.intl.formatToPlainString($.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: $.intl.string($.t.jVcuVY),
                        onCtaClick: () => (0, nn.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, r, u, n, c, d, e]);
        })(e),
        { shouldShowBonusOrbsUX: y, multiplier: C } = (0, t1.lk)(no.rE.NITRO_HOME_MARKETING),
        v = (0, D.l)("useWhatsNewPerkCards"),
        { isEligible: O, programReward: R } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        b = O && null != R && null != R.reward_amount && R.reward_amount > 0;
    return (0, s.useMemo)(() => {
        let e = [
                c ? null : a,
                c ? null : l,
                b
                    ? {
                          id: V.NITRO_ORBS_REWARDS_CARD_ID,
                          title: $.intl.string(t5.default.hx5AFp),
                          description: $.intl.format(t5.default["Pz+6Ix"], { orbsCount: R.reward_amount }),
                          pillText: v ? $.intl.string($.t.y2b7CA) : $.intl.string($.t.oW0eUd),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: o()(nu.lH, nu.yK),
                          footerContent: (0, r.jsx)(t8, {}),
                          ctaText: $.intl.string(t5.default.BxjHiu),
                          onCtaClick: () => (0, tW.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(na.G2.ORBS)),
                      }
                    : null,
                y
                    ? {
                          id: V.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: $.intl.string($.t.F2MShO),
                          description: $.intl.format($.t.NpUfej, { bonusOrbMultiplier: C }),
                          pillText: v ? void 0 : $.intl.string($.t.oW0eUd),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: $.intl.string($.t.jVcuVY),
                          onCtaClick: () => (0, tW.pX)(W.BVt.QUEST_HOME),
                          primaryAssetClassName: nu.Nf,
                      }
                    : null,
                i
                    ? {
                          id: V.PREMIUM_GROUP_CARD_ID,
                          title: $.intl.string(nl.default.YkvksF),
                          description: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  $.intl.formatToPlainString(nl.default.JlyGQj, {
                                      totalSeats: ns.aw,
                                      premiumGroupProductName: (0, ns.DP)(),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: nu.LF,
                                      children: (0, r.jsx)(tJ.A, {
                                          onClick: A,
                                          children: $.intl.string(nl.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: $.intl.string($.t.oW0eUd),
                          primaryAsset: nc,
                          ctaIcon: eN.t,
                          ctaIconPosition: "start",
                          ctaText: $.intl.string($.t.IJI7yk),
                          onCtaClick: T,
                      }
                    : null,
                {
                    id: V.DISPLAY_NAME_STYLES_CARD_ID,
                    title: $.intl.string($.t.OLtTrt),
                    description: $.intl.string($.t["di/pXR"]),
                    onCtaClick: t ? f : h,
                    ctaText: $.intl.string($.t.jVcuVY),
                    primaryAsset: nd,
                },
                {
                    id: V.CLIENT_THEMES_CARD_ID,
                    title: $.intl.string($.t.acc6h6),
                    description: $.intl.formatToPlainString($.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nf,
                    ctaText: $.intl.string($.t.jVcuVY),
                    onCtaClick: () => {
                        (0, tQ.nf)(tQ.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: V.PERMADECOS_CARD_ID,
                    title: $.intl.string($.t.L14NZN),
                    description: $.intl.string($.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(tV, { alt: "", ariaHidden: !0 }),
                    ctaText: $.intl.string($.t.jVcuVY),
                    onCtaClick: t ? f : m,
                },
                {
                    id: V.CUSTOM_APP_ICONS_CARD_ID,
                    title: $.intl.string($.t["GU+wqh"]),
                    description: $.intl.string($.t["1uPk1Z"]),
                    primaryAsset: n_,
                    ctaText: $.intl.string($.t.y9TxXV),
                    onCtaClick: g,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            s = n ? 5 : 6;
        return e.splice(+!!n, 0, S), e.length > s && e.splice(s, e.length - s), e;
    }, [v, S, b, R, i, y, C, h, g, m, T, f, t, a, l, c]);
}
var np = n(355097),
    nE = n(64514),
    nm = n(121818),
    ng =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let nA = [
    { id: "bestof", label: () => $.intl.string($.t.q1u7nQ) },
    { id: "appearance", label: () => $.intl.string($.t.CUnZkZ) },
    { id: "upgrades", label: () => $.intl.string($.t.KC5q8v) },
    { id: "vip", label: () => $.intl.string($.t.DjEAcv) },
];
var nI = n(758495);
function nT(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, tH.DP)(),
                t = (0, tK.X)("useFavoritesPerkCards"),
                n = (0, t$.Lh)(),
                i = (0, tq.N)(n)?.standard ?? null,
                { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, tY.A)({ scrollPosition: np._F.TRY_IT_OUT, analyticsLocations: a }),
                l = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                u = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                c = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                d = (0, s.useCallback)(() => {
                    (0, tW.pX)(W.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                f = (0, tz.A)({ analyticsLocations: a }),
                h = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, tj.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                m = nh(),
                g = (0, s.useMemo)(() => m.map((e) => e?.id), [m]),
                A = (0, s.useMemo)(
                    () => [
                        {
                            id: V.SERVER_BOOSTS_CARD_ID,
                            title: $.intl.formatToPlainString($.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: $.intl.formatToPlainString($.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, r.jsx)(tv, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.PROFILES_CARD_ID,
                            title: $.intl.string($.t.xDRab3),
                            description: $.intl.string($.t.yn6fWA),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: t ? f : o,
                            primaryAsset: (0, r.jsx)(tO, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: V.HD_VIDEO_CARD_ID,
                            title: $.intl.string($.t["/mQ5gg"]),
                            description: $.intl.string($.t["7WwAXh"]),
                            primaryAsset: (0, r.jsx)(tR, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.CLIENT_THEMES_CARD_ID,
                            title: $.intl.string($.t.acc6h6),
                            description: $.intl.formatToPlainString($.t.WQazjs, { themeCount: 20 }),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: nf,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: V.MORE_EMOJIS_CARD_ID,
                            title: $.intl.string($.t.D8vIDT),
                            description: $.intl.string($.t.DRMecB),
                            primaryAsset: (0, r.jsx)(tD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.LARGE_UPLOADS_CARD_ID,
                            title: $.intl.string($.t.nL1WZV),
                            description: $.intl.formatToPlainString($.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, r.jsx)(tL, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.CUSTOM_APP_ICONS_CARD_ID,
                            title: $.intl.string($.t["GU+wqh"]),
                            description: $.intl.string($.t["1uPk1Z"]),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: n_,
                            categories: ["appearance"],
                        },
                        {
                            id: V.ENTRANCE_SOUNDS_CARD_ID,
                            title: $.intl.string($.t.WJfCPi),
                            description: $.intl.string($.t.liQKJR),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: V.DISPLAY_NAME_STYLES_CARD_ID,
                            title: $.intl.string($.t.OLtTrt),
                            description: $.intl.string($.t["di/pXR"]),
                            onCtaClick: t ? f : h,
                            ctaText: $.intl.string($.t.jVcuVY),
                            primaryAsset: nd,
                            categories: ["appearance"],
                        },
                        {
                            id: V.CUSTOM_SOUNDS_CARD_ID,
                            title: $.intl.string($.t["Cu/oFd"]),
                            description: $.intl.string($.t.czj2aa),
                            primaryAsset: (0, r.jsx)(tw, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: V.SPECIAL_STICKERS_CARD_ID,
                            title: $.intl.string($.t.MQoVeb),
                            description: $.intl.string($.t.HGCLZX),
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                            categories: ["upgrades"],
                        },
                        {
                            id: V.SUPER_REACTIONS_CARD_ID,
                            title: $.intl.string($.t.qERvAA),
                            description: $.intl.string($.t.WkUWzx),
                            primaryAsset: (0, r.jsx)(tM, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: V.VIDEO_BACKGROUNDS_CARD_ID,
                            title: $.intl.string($.t.ssVDYQ),
                            description: $.intl.string($.t.aUSRMa),
                            primaryAsset: (0, tB.M)(e) ? nE : nm,
                            categories: ["upgrades"],
                        },
                        {
                            id: V.EARLY_ACCESS_CARD_ID,
                            title: $.intl.string($.t["g/KRY6"]),
                            description: $.intl.string($.t.JzAmJc),
                            primaryAsset: (0, r.jsx)(tP, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: V.BADGE_CARD_ID,
                            title: $.intl.string($.t.Bn3CtB),
                            description: $.intl.string($.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, r.jsx)(tk, { color: tx.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: V.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: $.intl.string($.t["MTD+7w"]),
                            description: $.intl.string($.t.Bhs0s6),
                            ctaText: $.intl.string($.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, r.jsx)(tG, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: V.PERMADECOS_CARD_ID,
                            title: $.intl.string($.t.L14NZN),
                            description: $.intl.string($.t.eCZkAI),
                            primaryAsset: (0, r.jsx)(tV, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, o, l, u, c, d, _, h, f, t],
                );
            return (0, s.useMemo)(() => A.filter((e) => null != e && !g.includes(e.id)), [A, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [a, o] = (0, s.useState)(i?.categories[0] ?? ng.BEST_OF_NITRO),
        l = (0, s.useMemo)(() => n.filter((e) => null != e && e.categories.includes(a)), [n, a]);
    return (0, r.jsxs)("div", {
        className: nI.uW,
        children: [
            (0, r.jsx)(b.D, { variant: "display-sm", className: nI.R_, children: $.intl.string($.t["Uh3+CA"]) }),
            (0, r.jsx)(ty.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: o,
                className: nI.Lq,
                "aria-label": $.intl.string($.t["Uh3+CA"]),
                children: nA.map((e) =>
                    (0, r.jsx)(ty.V.Item, { id: e.id, className: nI.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                tC.A,
                {
                    gap: 20,
                    className: nI.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(Q.S, { ...e, glowing: t === e.id, containerClassName: nI.Ui }, e.id);
                    }),
                },
                a,
            ),
        ],
    });
}
function nS(e) {
    let { glowingPerkId: t = null } = e,
        n = nh();
    return (0, r.jsx)(ei, {
        sectionClassName: en.uW,
        heading: (0, r.jsx)(b.D, { variant: "display-sm", className: en.R_, children: $.intl.string($.t.Aw5DRm) }),
        grid: (0, r.jsx)(r.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, r.jsx)(
                    Q.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: o()(en.Nr, { [en.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var nN = n(994763),
    ny = n(946062),
    nC = n(288894);
let nv = "section",
    nO = "perk",
    nR = (e) => {
        let { userId: t } = e,
            n = (0, C.ds)(),
            i = (0, l.zy)();
        s.useEffect(() => {
            h.h.wait(async () => {
                let e = [(0, A.Ay)()];
                null != t && e.push((0, S.A)(t)), await Promise.all(e);
            });
        }, [t]),
            s.useEffect(() => {
                F(!0);
            }, []),
            (0, O.j)(),
            (0, g.P)(m.b);
        let a = s.useRef(null),
            b = s.useRef(null),
            D = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            { isReady: L, programReward: w } = (0, I.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: M,
                glowingSectionId: P,
                glowingPerkId: x,
                scrollBlock: U,
                scrollInline: k,
            } = s.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get(nO),
                    n = e.get(nv);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, nN.z)(M ?? "", null != M, U, k);
        let [G, F] = s.useState(!1),
            V = (0, v.p)(),
            B = s.useRef(null),
            [H, j] = s.useState(!1),
            Y = null != V && null != D && D.status === W.Dmq.CANCELED,
            z = (0, R.iU)(K.gD.PREMIUM_MONTH_TIER_2, V, D),
            q = !H && Y,
            { analyticsLocations: Z } = (0, E.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [X, Q] = s.useState(!1);
        return null != (0, u.bG)([T.A], () => (null != t ? T.A.getUserProfile(t) : null)) && (L || null != w)
            ? (0, r.jsxs)(_.Gt, {
                  className: ny.xW,
                  ref: a,
                  children: [
                      (0, r.jsx)(f.h, {
                          color: "nitro-pink",
                          className: o()(ny.kL, ny.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, r.jsxs)(E.f5, {
                              value: Z,
                              children: [
                                  (0, r.jsx)(c.L, {
                                      innerRef: B,
                                      onChange: (e) => j(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, r.jsx)(tg, {
                                          buttonVisibilityRef: B,
                                          className: ny.v1,
                                          userDiscountOffer: V,
                                          discountedPrice: z,
                                      }),
                                  }),
                                  (0, r.jsx)(eh, { glowingSectionId: P }),
                                  (0, r.jsx)(nS, { glowingPerkId: x }),
                                  (0, r.jsx)(nT, { glowingPerkId: x }),
                                  (0, r.jsx)(em, {
                                      className: ny.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: W.liQ.NITRO_HOME, section: W.JJy.GIFT_BANNER },
                                  }),
                                  (0, r.jsx)("div", { className: ny.hz }),
                                  (0, r.jsx)(c.L, {
                                      innerRef: b,
                                      onChange: (e) => {
                                          e &&
                                              !X &&
                                              (y.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: Z,
                                              }),
                                              Q(!0));
                                      },
                                      children: (0, r.jsx)("div", { ref: b, className: ny._Z }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: nC,
                                      className: ny.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: $.intl.string($.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      Y &&
                          null != z &&
                          (0, r.jsx)(tN, {
                              isVisible: q && G,
                              premiumSubscription: D,
                              churnDiscountOffer: V,
                              discountedPrice: z,
                          }),
                  ],
              })
            : (0, r.jsx)("div", { className: o()(ny.kL, ny.Lq), children: (0, r.jsx)(d.y, {}) });
    };
