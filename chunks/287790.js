"use strict";
n.d(t, { Ay: () => nD, WU: () => nb, x6: () => nR }), n(321073), n(323874), n(14289), n(35956);
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
    R = n(410516),
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
                let { default: e } = await Promise.all([n.e("16848"), n.e("10622"), n.e("77632")]).then(
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
                      description: $.intl.format(ec.default.ZGOJ8R, {
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
    eR = n(766075),
    eb = n(786300),
    eD = n(428262),
    eL = n(960851),
    ew = n(89366),
    eM = n(504836),
    eP = n(422936),
    ex = n(234419),
    eU = n(549996),
    ek = n(810660),
    eG = n(175569),
    eF = n(371764),
    eV = n(949964),
    eB = n(103411),
    eH = n(778712),
    ej = n(97808),
    eY = n(590251),
    eW = n(144165),
    eK = n(854627),
    ez = n(427262),
    e$ = n(326084),
    eq = n(851746),
    eZ = n(664654),
    eX = n(212737),
    eQ = n(849812);
let eJ = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, eK.A)({ userId: t.id, size: eH._3.SIZE_24 });
        return (0, r.jsx)(
            ej.eu,
            { className: eQ.bj, src: n, "aria-label": (0, ez.mG)(t), size: eH._3.SIZE_24, ...i },
            t.id,
        );
    },
    e0 = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", { className: eQ.p, children: t });
    },
    e1 = (e) => {
        let { referralSentUsers: t } = e;
        return (0, r.jsx)("div", {
            className: eQ.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < eZ.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, r.jsx)(eJ, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(e0, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    e2 = (e) => {
        let { nReferralsSent: t } = e;
        return (0, r.jsx)(eY.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eQ.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eQ.e0,
            overlayClassName: t === eZ.Z ? eQ.ys : void 0,
            children: (0, r.jsx)(eW._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    e3 = (e) => {
        let { className: t } = e,
            { referralSentUsers: i } = (0, eZ.J)(),
            s = (0, u.bG)([eq.A], () => eq.A.getRecipientStatus()),
            a = (0, u.bG)([eq.A], () => eq.A.getHasEligibleFriends()),
            l = s.size === eZ.Z && [...s.values()].every((e) => e === e$.aK.REDEEMED),
            c = s.size === eZ.Z;
        return (0, r.jsxs)("div", {
            className: o()(eQ.kL, t),
            children: [
                (0, r.jsx)("div", { className: eQ.G3, children: (0, r.jsx)(e2, { nReferralsSent: s.size }) }),
                (0, r.jsxs)("div", {
                    className: eQ.IH,
                    children: [
                        (0, r.jsx)(e1, { referralSentUsers: i }),
                        (0, r.jsxs)("div", {
                            className: eQ.n4,
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
                                            : i.length === eZ.Z
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
                                    startingScreen: eX.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e6 = n(989349),
    e4 = n.n(e6),
    e5 = n(496431),
    e7 = n(116689);
let e8 = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, e5.A)(e4()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: s, hours: a, minutes: l, seconds: u } = i,
        c = [
            { unitValue: s, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: o()(e7.Xl, n),
        children: [
            (0, r.jsx)(x.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: $.intl.string($.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: e7.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, s] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: e7.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: e7.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: e7.B2,
                                                        children: (0, r.jsx)(x.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: e7.B2,
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
                                        className: e7.cV,
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
var e9 = n(473702),
    te = n(702841),
    tt = n(652533),
    tn = n(20458),
    ti = n(447764),
    tr = n(180894);
let ts = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, te.bG)([ey.A], () => ey.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: ti.BI,
                children: (0, r.jsx)(tt.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: tt.$G },
                    yAxisAnimationData: { range: 20, duration: tt.Mp, path: tt.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: tt.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", { src: tr.A, alt: "", className: ti.Q }),
                }),
            }),
            (0, r.jsx)(tn.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: ti.Gj,
                keyContainerClassName: ti.FV,
                starContainerClassName: ti.E1,
                hammerAssetClassName: ti.Wv,
                keyAssetClassName: ti.rs,
                starAssetClassName: ti.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var ta = n(707554),
    to = n(218199);
let tl = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: s } = e;
    return (0, r.jsx)(ta.F, {
        forceLevel: 1,
        children: (0, r.jsx)(b.D, { className: o()(to.w, t, i && to.n), variant: "display-md", color: n, children: s }),
    });
};
var tu = n(725807),
    tc = n(774774),
    td = n(975916);
let t_ = () => {
    let e = { section: W.JJy.REVERSE_TRIAL_BANNER };
    return (0, r.jsxs)("div", {
        className: td.vK,
        children: [
            (0, r.jsx)(tc.e4, { text: $.intl.string($.t.qYKftX), className: td.Io }),
            (0, r.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: td._u,
            }),
            (0, r.jsx)("div", {
                className: td.IP,
                children: (0, r.jsx)(x.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: $.intl.format($.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, r.jsx)(tu.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: td.aA,
                shinyButtonClassName: td.Xp,
            }),
        ],
    });
};
var tf = n(18671);
let th = () => {
    let e = (0, te.bG)([ey.A], () => ey.A.useReducedMotion);
    return (0, r.jsx)(tn.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tf.cI,
        hammerContainerClassName: tf.qg,
        keyContainerClassName: tf.h2,
        boltContainerClassName: tf.Bz,
        starAssetClassName: tf.ks,
        hammerAssetClassName: tf.GY,
        keyAssetClassName: tf.p4,
        boltAssetClassName: tf.vy,
    });
};
var tp = n(97584);
let tE = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            s = (0, C.Zb)(t);
        return (0, r.jsx)("div", {
            className: o()(tp.kL, n),
            ref: i,
            children: (0, r.jsxs)("div", {
                className: tp.ap,
                children: [
                    (0, r.jsxs)(eS.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, r.jsx)(eG.A, { text: $.intl.string($.t.yhldRB) }),
                            (0, r.jsxs)(eS.B, {
                                align: "start",
                                gap: 12,
                                className: tp.rG,
                                children: [
                                    (0, r.jsx)(tl, { children: $.intl.format($.t.FwjP6W, { days: s }) }),
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
                        className: tp.Hk,
                        children: [(0, r.jsx)(eI, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(th, {})],
                    }),
                ],
            }),
        });
    },
    tm = (e) => {
        let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: s, shouldShowReferralProgressBar: a } = e,
            {
                headingText: l,
                headingTop: c,
                showPill: d,
                shouldShowChurnVariant: _,
                premiumSubscription: f,
                userDiscountOffer: h,
                discountedPrice: m,
                buttonVisibilityRef: g,
            } = tA(),
            { analyticsLocations: A } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            I = (0, eU.c)(eg.C.MARKETING_PAGE_BANNER),
            T = null;
        null != I && "marketingPageBanner" === I.properties.properties.oneofKind
            ? (T = (0, r.jsx)(eF.x, {
                  componentId: I.id,
                  promotionBannerMarketingComponentFields: I.properties.properties.marketingPageBanner,
              }))
            : i
              ? (T = (0, r.jsx)(eV.A, { variant: eV.c.SUBSCRIBER_HOME }))
              : s
                ? (T = (0, r.jsx)(t_, {}))
                : a && (T = (0, r.jsx)(e3, {}));
        let S = (0, ex.V)(),
            N = (0, eP.O)(),
            y = (0, R.U9)(N, K.pe.TIER_2) ? K.pe.TIER_2 : void 0,
            C = null != f && f.status !== W.Dmq.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
            v = (0, ev.A)(),
            O = v.isFractionalPremiumActive && !C && null == T && !_,
            b = (0, u.bG)([ey.A], () => ey.A.useReducedMotion),
            { visibilityPercentageRef: D, visibilityPercentage: L } = (0, ek.U)(!b);
        return s
            ? (0, r.jsx)(tE, { fpEndsAt: v.currentEntitlementEndsAt, className: t, buttonVisibilityRef: g })
            : (0, r.jsx)("div", {
                  className: o()(tp.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: g,
                  children: (0, r.jsxs)("div", {
                      className: tp.Qs,
                      ref: D,
                      children: [
                          d && c,
                          (0, r.jsxs)("div", {
                              className: tp.N1,
                              children: [
                                  (0, r.jsx)(ts, { containerVisibilityPercentage: L }),
                                  _ &&
                                      h?.expiresAt != null &&
                                      (0, r.jsx)(e8, { expiresAt: h.expiresAt.toISOString(), className: tp.IZ }),
                                  (0, r.jsx)(tl, {
                                      children:
                                          _ && null != h
                                              ? $.intl.format($.t["3yZP0G"], { percent: h.discount.amount })
                                              : l,
                                  }),
                                  _ &&
                                      null != h &&
                                      null != m &&
                                      (0, r.jsx)(x.E, {
                                          className: tp.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: $.intl.format($.t["3Q4wCy"], {
                                              discountedPrice: m,
                                              billingPeriod: (0, eD.Ke)(h.discount.userUsageLimitInterval),
                                              numMonths: h.discount.userUsageLimit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: O || _ ? tp.UJ : void 0,
                              children: [
                                  O &&
                                      (0, r.jsx)(B.A, {
                                          size: "md",
                                          hasActivePromotion: !!i,
                                          subscriptionTier: S?.subscription_trial?.sku_id ?? y,
                                      }),
                                  _ &&
                                      null != f &&
                                      (0, r.jsx)(M.$, {
                                          variant: "expressive",
                                          icon: eN.t,
                                          size: "md",
                                          text: $.intl.string($.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = e9.g.CONFIRM_DISCOUNT),
                                                  void (0, w.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("34218"),
                                                              n.e("80203"),
                                                              n.e("18556"),
                                                              n.e("9432"),
                                                              n.e("96527"),
                                                              n.e("85484"),
                                                              n.e("5959"),
                                                              n.e("86028"),
                                                              n.e("23924"),
                                                              n.e("42205"),
                                                              n.e("71091"),
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
                                                              n.e("5636"),
                                                              n.e("86230"),
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
                                                              analyticsLocations: A,
                                                              initialStep: e,
                                                              premiumSubscription: f,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, r.jsx)(ep.A, {
                                      variant: O || _ ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: $.intl.string($.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          T,
                      ],
                  }),
              });
    },
    [tg, tA] = (0, eb.A)(),
    tI = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: s } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, C.ds)(),
            l = (0, eL.cg)(),
            c = (0, ew.QQ)(),
            d = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            _ = (0, eM.Z)({ location: "subscriber_home_hero" }),
            f = null != d && d.status === W.Dmq.CANCELED && null != i,
            h = c && !(f && _),
            m = $.intl.string($.t.qYKftX),
            g = (0, eB.m)(),
            A = $.intl.string($.t.ifwQZb),
            { fractionalState: I, endsAt: T } = (0, ev.A)(),
            S = (0, eC.Ay)(T, eC.yE.CREDITS_ENDS_IN),
            y = null;
        if (I === K.xc.NONE || o) y = (0, r.jsx)(eG.A, { text: m });
        else {
            h = !0;
            let e = $.intl.format($.t["yR+oDD"], {
                helpCenterLink: er.A.getArticleURL(W.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            y = (0, r.jsx)(eT.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tp.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: tp.V_,
                        children: (0, r.jsx)("div", { className: tp.eL, children: (0, r.jsx)(eG.A, { text: S }) }),
                    }),
            });
        }
        return (0, r.jsx)(E.f5, {
            value: a,
            children: (0, r.jsx)(tg.Provider, {
                value: {
                    headingText: A,
                    headingTop: y,
                    showPill: h,
                    shouldShowChurnVariant: f,
                    premiumSubscription: d,
                    userDiscountOffer: i,
                    discountedPrice: s,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(tm, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: g,
                }),
            }),
        });
    };
var tT = n(873174),
    tS = n(717421),
    tN = n(98812),
    ty = n(67423);
let tC = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: s, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, tS.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(tT.animated.div, {
        className: o()(tN.iE, { [tN.q4]: !t }),
        style: u,
        children: (0, r.jsxs)("div", {
            className: tN.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: ty, className: tN.oU }),
                (0, r.jsxs)("div", {
                    className: tN.iQ,
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
                                numMonths: s.discount.userUsageLimit,
                                discountedPrice: a,
                                billingPeriod: (0, eD.Ke)(s.discount.userUsageLimitInterval),
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
                                n.e("80203"),
                                n.e("18556"),
                                n.e("9432"),
                                n.e("96527"),
                                n.e("85484"),
                                n.e("5959"),
                                n.e("86028"),
                                n.e("23924"),
                                n.e("42205"),
                                n.e("71091"),
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
                                n.e("5636"),
                                n.e("86230"),
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
                                    initialStep: e9.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var tv = n(761508),
    tO = n(449543);
function tR(e) {
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
function tb(e) {
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
function tD(e) {
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
var tL = n(345394);
function tw(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tL.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tM(e) {
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
function tP(e) {
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
function tx(e) {
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
function tU(e) {
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
var tk = n(661531),
    tG = n(996682);
function tF(e) {
    let {
        color: t = tk.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: s,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, tG.A)({ "aria-label": n, "aria-hidden": i, role: s }),
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
function tV(e) {
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
var tB = n(78701);
function tH(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tB.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tj = n(462887),
    tY = n(736653),
    tW = n(259065),
    tK = n(206835),
    tz = n(976860),
    t$ = n(591179),
    tq = n(462463),
    tZ = n(878784),
    tX = n(425713),
    tQ = n(975807),
    tJ = n(562819),
    t0 = n(793943),
    t1 = n(95035),
    t2 = n(532794),
    t3 = n(192444),
    t6 = n(39423),
    t4 = n(892227),
    t5 = n(81466),
    t7 = n(318254),
    t8 = n(490285),
    t9 = n(875679);
let ne = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, t4.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, r.jsxs)("div", {
        className: t9.kL,
        children: [
            null != n &&
                (0, r.jsxs)("div", {
                    className: t9.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: t9.Pf,
                            children: [
                                (0, r.jsx)(t5.C, { size: "sm", color: tk.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: $.intl.string(t8.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: $.intl.format(t8.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, r.jsx)("div", { className: t9.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, r.jsxs)("div", {
                    className: t9.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: t9.Pf,
                            children: [
                                (0, r.jsx)(t7.C, { size: "sm", color: tk.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(x.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: $.intl.string(t8.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, r.jsx)(x.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: $.intl.format(t8.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nt = n(655752),
    nn = n(764231),
    ni = n(627380),
    nr = n(30084),
    ns = n(792641),
    na = n(714206),
    no = n(88001),
    nl = n(758836),
    nu = n(190107),
    nc = n(466919),
    nd = n(555599),
    n_ = n(817577);
let nf =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    nh =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    np =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nE() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, t$.X)("useWhatsNewPerkCards"),
        i = (0, t6.O9)(),
        { logitechCard: a, steelseriesCard: l } = ed(),
        c = (0, D.l)("premium_subscriber_home_rewards"),
        d = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        _ = d?.hasActiveTrial ?? !1,
        f = (0, tq.A)({ analyticsLocations: e }),
        h = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tW.L)({ analyticsLocations: e }),
            );
        }, [e]),
        m = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tJ.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, s.useCallback)(() => {
            (0, eR.openUserSettings)(eO.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        A = () => {
            (0, tQ.A)(no.TE);
        },
        T = (0, s.useCallback)(() => {
            _
                ? (0, w.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, t2.A)({
                      subscriptionTier: K.pe.TIER_2,
                      initialPlanId: K.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, _]),
        S = (function (e) {
            let { fractionalState: t } = (0, ev.A)(),
                n = t === K.xc.FP_ONLY,
                i = (0, tZ.$F)(),
                r = (0, tZ.Xb)(),
                a = i?.status === tZ.Wo.UPCOMING || n,
                l = (0, tX.N)(i?.id),
                c = (function () {
                    let e = (0, tZ.$F)(),
                        t = (0, nt.P)(),
                        n = (0, tZ.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = e4()(),
                        r = e4()(n),
                        s = e.status === tZ.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                d = (0, u.bG)([ey.A], () => ey.A.useReducedMotion) && !a,
                _ = (0, ni.t)(),
                f = (0, nt.P)();
            return (0, s.useMemo)(() => {
                let t,
                    s = null != f ? $.intl.string(f.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nn.T)(K.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === tZ.Wo.UPCOMING
                              ? $.intl.formatToPlainString($.t.a1eKDi, { days: _?.days ?? 0 })
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
                                })(_, s) ??
                                (0, nn.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let u = null;
                return (
                    null != l ? (u = a || d ? l.standard : l.ambientLarge) : n && (u = na),
                    {
                        id: V.TENURE_BADGE_CARD_ID,
                        title: null != i ? $.intl.string(i.nameUnformattedNitro) : n ? $.intl.string($.t.tx9Fvw) : "",
                        pillText: $.intl.string($.t["jyYgZ+"]),
                        primaryAsset: u,
                        primaryAssetClassName: o()(ns.pq, { [ns.n6]: a, [ns.kE]: d }),
                        caption: null != r ? $.intl.formatToPlainString($.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: c ?? void 0,
                        ctaText: $.intl.string($.t.jVcuVY),
                        onCtaClick: () => (0, nr.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, d, r, c, n, _, f, e]);
        })(e),
        { shouldShowBonusOrbsUX: y, multiplier: C } = (0, t3.lk)(nu.rE.NITRO_HOME_MARKETING),
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
                          title: $.intl.string(t8.default.hx5AFp),
                          description: $.intl.format(t8.default.wq3CF2, { orbsCount: R.reward_amount }),
                          pillText: v ? $.intl.string($.t.y2b7CA) : $.intl.string($.t.oW0eUd),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: o()(nd.lH, nd.yK),
                          footerContent: (0, r.jsx)(ne, {}),
                          ctaText: $.intl.string(t8.default.BxjHiu),
                          onCtaClick: () => (0, tz.pX)(W.BVt.COLLECTIBLES_SHOP_WITH_TAB(nl.G2.ORBS)),
                      }
                    : null,
                y
                    ? {
                          id: V.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: $.intl.string($.t.F2MShO),
                          description: $.intl.format($.t.NpUfej, { bonusOrbMultiplier: C }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: $.intl.string($.t.jVcuVY),
                          onCtaClick: () => (0, tz.pX)(W.BVt.QUEST_HOME),
                          primaryAssetClassName: nd.Nf,
                      }
                    : null,
                i
                    ? {
                          id: V.PREMIUM_GROUP_CARD_ID,
                          title: $.intl.string(nc.default.YkvksF),
                          description: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  $.intl.formatToPlainString(nc.default.JlyGQj, {
                                      totalSeats: no.aw,
                                      premiumGroupProductName: (0, no.DP)(),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: nd.LF,
                                      children: (0, r.jsx)(t1.A, {
                                          onClick: A,
                                          children: $.intl.string(nc.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: $.intl.string($.t.oW0eUd),
                          primaryAsset: n_,
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
                    primaryAsset: nf,
                },
                {
                    id: V.CLIENT_THEMES_CARD_ID,
                    title: $.intl.string($.t.acc6h6),
                    description: $.intl.formatToPlainString($.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: np,
                    ctaText: $.intl.string($.t.jVcuVY),
                    onCtaClick: () => {
                        (0, t0.nf)(t0.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: V.PERMADECOS_CARD_ID,
                    title: $.intl.string($.t.L14NZN),
                    description: $.intl.string($.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(tH, { alt: "", ariaHidden: !0 }),
                    ctaText: $.intl.string($.t.jVcuVY),
                    onCtaClick: t ? f : m,
                },
                {
                    id: V.CUSTOM_APP_ICONS_CARD_ID,
                    title: $.intl.string($.t["GU+wqh"]),
                    description: $.intl.string($.t["1uPk1Z"]),
                    primaryAsset: nh,
                    ctaText: $.intl.string($.t.y9TxXV),
                    onCtaClick: g,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            s = n ? 5 : 6;
        return e.splice(+!!n, 0, S), e.length > s && e.splice(s, e.length - s), e;
    }, [v, S, b, R, i, y, C, h, g, m, T, f, t, a, l, c]);
}
var nm = n(355097),
    ng = n(64514),
    nA = n(121818),
    nI =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let nT = [
    { id: "bestof", label: () => $.intl.string($.t.q1u7nQ) },
    { id: "appearance", label: () => $.intl.string($.t.CUnZkZ) },
    { id: "upgrades", label: () => $.intl.string($.t.KC5q8v) },
    { id: "vip", label: () => $.intl.string($.t.DjEAcv) },
];
var nS = n(758495);
function nN(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, tY.DP)(),
                t = (0, t$.X)("useFavoritesPerkCards"),
                n = (0, tZ.Lh)(),
                i = (0, tX.N)(n)?.standard ?? null,
                { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, tK.A)({ scrollPosition: nm._F.TRY_IT_OUT, analyticsLocations: a }),
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
                    (0, tz.pX)(W.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                f = (0, tq.A)({ analyticsLocations: a }),
                h = (0, s.useCallback)(() => {
                    (0, eR.openUserSettings)(eO.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, tW.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                m = nE(),
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
                            primaryAsset: (0, r.jsx)(tR, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.PROFILES_CARD_ID,
                            title: $.intl.string($.t.xDRab3),
                            description: $.intl.string($.t.yn6fWA),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: t ? f : o,
                            primaryAsset: (0, r.jsx)(tb, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: V.HD_VIDEO_CARD_ID,
                            title: $.intl.string($.t["/mQ5gg"]),
                            description: $.intl.string($.t["7WwAXh"]),
                            primaryAsset: (0, r.jsx)(tD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.CLIENT_THEMES_CARD_ID,
                            title: $.intl.string($.t.acc6h6),
                            description: $.intl.formatToPlainString($.t.WQazjs, { themeCount: 20 }),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: np,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: V.MORE_EMOJIS_CARD_ID,
                            title: $.intl.string($.t.D8vIDT),
                            description: $.intl.string($.t.DRMecB),
                            primaryAsset: (0, r.jsx)(tw, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.LARGE_UPLOADS_CARD_ID,
                            title: $.intl.string($.t.nL1WZV),
                            description: $.intl.formatToPlainString($.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, r.jsx)(tM, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: V.CUSTOM_APP_ICONS_CARD_ID,
                            title: $.intl.string($.t["GU+wqh"]),
                            description: $.intl.string($.t["1uPk1Z"]),
                            ctaText: $.intl.string($.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nh,
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
                            primaryAsset: nf,
                            categories: ["appearance"],
                        },
                        {
                            id: V.CUSTOM_SOUNDS_CARD_ID,
                            title: $.intl.string($.t["Cu/oFd"]),
                            description: $.intl.string($.t.czj2aa),
                            primaryAsset: (0, r.jsx)(tP, { alt: "", ariaHidden: !0 }),
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
                            primaryAsset: (0, r.jsx)(tx, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: V.VIDEO_BACKGROUNDS_CARD_ID,
                            title: $.intl.string($.t.ssVDYQ),
                            description: $.intl.string($.t.aUSRMa),
                            primaryAsset: (0, tj.M)(e) ? ng : nA,
                            categories: ["upgrades"],
                        },
                        {
                            id: V.EARLY_ACCESS_CARD_ID,
                            title: $.intl.string($.t["g/KRY6"]),
                            description: $.intl.string($.t.JzAmJc),
                            primaryAsset: (0, r.jsx)(tU, { alt: "", ariaHidden: !0 }),
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
                                    : (0, r.jsx)(tF, { color: tk.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: V.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: $.intl.string($.t["MTD+7w"]),
                            description: $.intl.string($.t.Bhs0s6),
                            ctaText: $.intl.string($.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, r.jsx)(tV, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: V.PERMADECOS_CARD_ID,
                            title: $.intl.string($.t.L14NZN),
                            description: $.intl.string($.t.eCZkAI),
                            primaryAsset: (0, r.jsx)(tH, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, o, l, u, c, d, _, h, f, t],
                );
            return (0, s.useMemo)(() => A.filter((e) => null != e && !g.includes(e.id)), [A, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [a, o] = (0, s.useState)(i?.categories[0] ?? nI.BEST_OF_NITRO),
        l = (0, s.useMemo)(() => n.filter((e) => null != e && e.categories.includes(a)), [n, a]);
    return (0, r.jsxs)("div", {
        className: nS.uW,
        children: [
            (0, r.jsx)(b.D, { variant: "display-sm", className: nS.R_, children: $.intl.string($.t["Uh3+CA"]) }),
            (0, r.jsx)(tv.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: o,
                className: nS.Lq,
                "aria-label": $.intl.string($.t["Uh3+CA"]),
                children: nT.map((e) =>
                    (0, r.jsx)(tv.V.Item, { id: e.id, className: nS.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                tO.A,
                {
                    gap: 20,
                    className: nS.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(Q.S, { ...e, glowing: t === e.id, containerClassName: nS.Ui }, e.id);
                    }),
                },
                a,
            ),
        ],
    });
}
function ny(e) {
    let { glowingPerkId: t = null } = e,
        n = nE();
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
var nC = n(994763),
    nv = n(946062),
    nO = n(79119);
let nR = "section",
    nb = "perk",
    nD = (e) => {
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
                    t = e.get(nb),
                    n = e.get(nR);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, nC.z)(M ?? "", null != M, U, k);
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
                  className: nv.xW,
                  ref: a,
                  children: [
                      (0, r.jsx)(f.h, {
                          color: "nitro-pink",
                          className: o()(nv.kL, nv.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, r.jsxs)(E.f5, {
                              value: Z,
                              children: [
                                  (0, r.jsx)(c.L, {
                                      innerRef: B,
                                      onChange: (e) => j(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, r.jsx)(tI, {
                                          buttonVisibilityRef: B,
                                          className: nv.v1,
                                          userDiscountOffer: V,
                                          discountedPrice: z,
                                      }),
                                  }),
                                  (0, r.jsx)(eh, { glowingSectionId: P }),
                                  (0, r.jsx)(ny, { glowingPerkId: x }),
                                  (0, r.jsx)(nN, { glowingPerkId: x }),
                                  (0, r.jsx)(em, {
                                      className: nv.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: W.liQ.NITRO_HOME, section: W.JJy.GIFT_BANNER },
                                  }),
                                  (0, r.jsx)("div", { className: nv.hz }),
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
                                      children: (0, r.jsx)("div", { ref: b, className: nv._Z }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: nO,
                                      className: nv.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: $.intl.string($.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      Y &&
                          null != z &&
                          (0, r.jsx)(tC, {
                              isVisible: q && G,
                              premiumSubscription: D,
                              churnDiscountOffer: V,
                              discountedPrice: z,
                          }),
                  ],
              })
            : (0, r.jsx)("div", { className: o()(nv.kL, nv.Lq), children: (0, r.jsx)(d.y, {}) });
    };
