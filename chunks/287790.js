n.d(t, { Ay: () => nx, WU: () => nD, x6: () => nM }), n(321073), n(323874), n(14289), n(35956);
var i,
    l = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    c = n(873263),
    o = n(17928),
    d = n(269115),
    u = n(289873),
    E = n(689175),
    A = n(315629),
    _ = n(228366),
    T = n(793574),
    I = n(688810),
    N = n(949030),
    R = n(611924),
    m = n(961250),
    C = n(366505),
    p = n(841595),
    S = n(903209),
    O = n(166403),
    g = n(174459),
    h = n(881489),
    f = n(131168),
    P = n(482589),
    M = n(410516),
    D = n(534514),
    x = n(31502),
    U = n(562708),
    y = n(192308),
    j = n(821609),
    L = n(885574),
    k = n(834730),
    v = n(43990),
    b = n(359778),
    G = n(139286),
    X = n(872725),
    q = n(920050),
    F = n(792656),
    B = n(985603),
    w = n(777376),
    V = n(185797),
    H = n(652215),
    Y = n(788868),
    K = n(237146),
    W = n(375708),
    z = n(74776);
function $(e) {
    let { openRewardModal: t } = e,
        n = (0, V.F)();
    if (n.kind === V.L.SUBSCRIBE)
        return (0, l.jsxs)("div", {
            className: z.R$,
            children: [
                (0, l.jsx)(F.A, {
                    defaultTextOverride: n.text,
                    variantOverride: "overlay-primary",
                    size: "md",
                    subscriptionTier: Y.pe.TIER_2,
                }),
                (0, l.jsx)(j.$, { variant: "secondary", size: "md", text: W.intl.string(W.t.hvVgAZ), onClick: t }),
            ],
        });
    let i =
        n.claimStatus === w.p1.CLAIMED
            ? { text: W.intl.string(K.default.Plwzgf) }
            : { text: W.intl.string(W.t.hvVgAZ) };
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                className: z.R$,
                children: [
                    (0, l.jsx)(j.$, {
                        variant: "overlay-primary",
                        size: "md",
                        text: n.text,
                        icon: n.icon,
                        iconPosition: n.iconPosition,
                        onClick: n.onClick,
                        disabled: n.disabled,
                        loading: n.loading,
                    }),
                    (0, l.jsx)(j.$, {
                        variant: "secondary",
                        size: "md",
                        ...i,
                        onClick: t,
                        disabled: n.requestInProgress,
                    }),
                ],
            }),
            n.claimStatus === w.p1.CLAIM_IN_PROGRESS &&
                (0, l.jsxs)("div", {
                    className: z.ed,
                    children: [
                        (0, l.jsx)(L.m, { size: "xs", color: "var(--text-subtle)" }),
                        (0, l.jsx)(k.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: W.intl.string(K.default.Fs74z9),
                        }),
                    ],
                }),
        ],
    });
}
function Z(e) {
    let { glowing: t = !1 } = e;
    (0, G.A)({
        type: U.ImpressionTypes.VIEW,
        name: U.ImpressionNames.PERK_DISCOVERABILITY_CARD,
        properties: { name: q.XBOX_PREMIUM_PERK_HERO_ID, third_party_partner: B.FZ },
    });
    let { analyticsLocations: i } = (0, I.Ay)(T.A.CROISSANT_PREMIUM_HERO_CARD),
        s = r.useCallback(() => {
            (0, y.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("16848"), n.e("10622"), n.e("77632")]).then(
                    n.bind(n, 836291),
                );
                return (t) => (0, l.jsx)(e, { ...t, sourceAnalyticsLocations: i });
            });
        }, [i]);
    return (0, l.jsx)(v.N, {
        theme: H.NJ8.DARKER,
        children: (e) =>
            (0, l.jsx)(I.f5, {
                value: i,
                children: (0, l.jsx)("div", {
                    className: a()(e, z.kL),
                    children: (0, l.jsx)(X.A, {
                        cardType: b.s.CUSTOM,
                        cardClassName: z.Nr,
                        glowing: t,
                        hueRotate: 25,
                        glowAmount: 2,
                        blurAmount: 10,
                        children: (0, l.jsxs)("div", {
                            className: z.XF,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: z.j,
                                    children: [
                                        (0, l.jsx)("div", { className: z._g }),
                                        (0, l.jsx)("div", { className: z.$h }),
                                        (0, l.jsx)("div", { className: z.Rv }),
                                        (0, l.jsx)("div", { className: z.Lw }),
                                        (0, l.jsx)("div", { className: z.mR }),
                                    ],
                                }),
                                (0, l.jsxs)("div", {
                                    className: z.Qs,
                                    children: [
                                        (0, l.jsx)("img", {
                                            className: z.wm,
                                            src: "https://cdn.discordapp.com/assets/content/97981d492e2bd23cc19ff99d252811c75ed96226d81e8209f1038115a861a2a3.png",
                                            alt: "Xbox Game Pass",
                                        }),
                                        (0, l.jsx)(D.D, {
                                            variant: "display-md",
                                            color: "text-strong",
                                            className: z.DD,
                                            children: W.intl.string(K.default.RGT513),
                                        }),
                                        (0, l.jsx)(k.E, {
                                            variant: "text-md/normal",
                                            color: "text-strong",
                                            className: z.h_,
                                            children: W.intl.string(K.default["+pTnsf"]),
                                        }),
                                        (0, l.jsx)($, { openRewardModal: s }),
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
        i = (0, V.F)(),
        r =
            i.kind === V.L.SUBSCRIBE
                ? { subscriptionRequired: !0 }
                : {
                      ctaText: i.text,
                      ctaIcon: i.icon,
                      ctaIconPosition: i.iconPosition,
                      ctaDisabled: i.disabled,
                      ctaLoading: i.loading,
                      onCtaClick: i.onClick,
                  };
    return (0, l.jsx)(Q.S, {
        id: q.XBOX_PREMIUM_PERK_CARD_ID,
        title: W.intl.string(K.default.UVL9tD),
        description: W.intl.string(K.default["I+IXr0"]),
        ...r,
        className: t,
        containerClassName: n,
        backgroundAssetUrl:
            "https://cdn.discordapp.com/assets/content/d4df72c6296aa03acfcacf6e63591b9ad917c4a12fa14aa726e6ce65e749a436.png",
        caption: (0, l.jsx)("img", {
            src: "https://cdn.discordapp.com/assets/content/faf904a149b90411034912085118d871e8cd3d44110f7a6ad22d84afd7bee524.png",
            width: 130,
            height: 16,
            alt: "Xbox Game Pass",
        }),
        blurTint: "#054B16",
        analyticsOptions: { thirdPartyPartner: B.FZ },
    });
}
function ee(e) {
    let { analyticsLocations: t } = (0, I.Ay)(T.A.CROISSANT_PREMIUM_PERK_CARD);
    return (0, l.jsx)(I.f5, { value: t, children: (0, l.jsx)(J, { ...e }) });
}
var et = n(367791),
    en = n(672193);
function ei(e) {
    let { id: t, sectionClassName: n, heading: i, beforeGrid: r, grid: s, gridClassName: c } = e,
        o = en.Ui;
    return (0, l.jsxs)("div", {
        id: t,
        className: n,
        children: [
            i,
            r,
            null != s ? (0, l.jsx)("div", { className: a()(o, null != r && et.Jx, c), children: s }) : null,
        ],
    });
}
var el = n(975571),
    er = n(398523),
    es = n(881373),
    ea = n(581921),
    ec = n(852218),
    eo = n(382259),
    ed = n(962995);
function eu() {
    let { analyticsLocations: e } = (0, I.Ay)(T.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, es.YS)({ location: "useWhatsNewPerkCards" }).functionalityEnabled,
        n = er.Ay.useConfig({ location: "PremiumWhatsNewSection" }).enabled,
        i = (0, x.l)("useHardwarePartnerPerkCards"),
        { currentDate: s, nDaysInMonth: a } = (0, r.useMemo)(() => {
            let e = new Date();
            return { currentDate: e, nDaysInMonth: new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate() };
        }, []);
    return (0, r.useMemo)(() => {
        let r = i ? void 0 : W.intl.string(W.t.y2b7CA);
        return {
            logitechCard: t
                ? {
                      id: q.LOGITECH_3PP_CARD_ID,
                      title: W.intl.string(ed.default.OlObRa),
                      description: W.intl.format(ed.default.ZGOJ8R, {
                          discountPercent: es.aW,
                          termsUrl: el.A.getArticleURL(H.MVz.LOGITECH_PROMOTION),
                      }),
                      subscriptionRequired: !0,
                      progress: s.getDate() / a,
                      ctaText: W.intl.string(W.t.w7s5Qr),
                      onCtaClick: () => (0, ea.P)({ partnerId: ec.XY }),
                      blurTint: "#2E213D",
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/2cc5d80403549735a2556ca7fd31d7b773826f7e46cd2a301aadb2330059d323.svg",
                      pillText: r,
                      caption: (0, l.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/bc7282fb45c16d6041f35bf9534fd40d9a9ec5383fd2088793ecc4e916c00f7d.svg",
                          alt: "Logitech",
                      }),
                      analyticsOptions: { thirdPartyPartner: ec.XY },
                  }
                : null,
            steelseriesCard: n
                ? {
                      id: q.RECURRING_3P_PROMOTIONS_CARD_ID,
                      title: W.intl.string(W.t.m7PucM),
                      description: W.intl.format(W.t.zh1X7u, {}),
                      subscriptionRequired: !0,
                      pillText: r,
                      caption: (0, l.jsx)("img", { src: "/assets/aae9b13becd816cf.svg", alt: "SteelSeries" }),
                      backgroundAssetUrl:
                          "https://cdn.discordapp.com/assets/content/202c441e48d2930f99f9519c9699fb047af18c4d0ec0cb490480a9a6f9d326ec.webp",
                      progress: s.getDate() / a,
                      ctaText: W.intl.string(W.t.w7s5Qr),
                      onCtaClick: () => (0, eo.u)({ analyticsLocations: e, partnerIds: [ec.KS, ec.Cs] }),
                      blurTint: "#2E213D",
                      analyticsOptions: { thirdPartyPartner: ec.KS },
                  }
                : null,
        };
    }, [i, e, s, t, a, n]);
}
var eE = n(102338);
let eA = "xgpp";
function e_(e) {
    let { glowingSectionId: t } = e,
        n = (0, x.l)("premium_subscriber_home_rewards"),
        { logitechCard: i, steelseriesCard: r } = eu();
    if (!n) return null;
    let s = null != i || null != r;
    return (0, l.jsx)(ei, {
        id: eA,
        sectionClassName: a()(eE.uW, eE.Uv, eE.qr),
        heading: (0, l.jsx)(D.D, {
            variant: "display-sm",
            className: a()(en.R_, et.U6),
            children: W.intl.string(W.t.NG1e6l),
        }),
        beforeGrid: (0, l.jsx)("div", { className: et.JE, children: (0, l.jsx)(Z, { glowing: t === eA }) }),
        grid: s
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(ee, { containerClassName: en.Nr }),
                      null != i && (0, l.jsx)(Q.S, { ...i, containerClassName: en.Nr }),
                      null != r && (0, l.jsx)(Q.S, { ...r, containerClassName: en.Nr }),
                  ],
              })
            : null,
    });
}
var eT = n(65470),
    eI = n(797221);
let eN = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: r } = (0, I.Ay)(n);
    return (0, l.jsx)(I.f5, {
        value: r,
        children: (0, l.jsxs)(A.h, {
            className: a()(eI.kL, eI.pm, t),
            color: "purple",
            children: [
                (0, l.jsxs)("div", {
                    className: eI.FS,
                    children: [
                        (0, l.jsx)(D.D, {
                            variant: "heading-xxl/bold",
                            className: eI.R_,
                            children: W.intl.string(W.t.Ve9Ge6),
                        }),
                        (0, l.jsx)(k.E, { variant: "text-md/medium", children: W.intl.string(W.t.yQ06u1) }),
                        (0, l.jsx)("div", {
                            className: eI.SB,
                            children: (0, l.jsx)(eT.A, {
                                buttonTextOverride: W.intl.string(W.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: eI._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var eR = n(877624);
let em =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function eC(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: em,
        srcSet: `${em} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var ep = n(502572),
    eS = n(331322),
    eO = n(403581),
    eg = n(775602),
    eh = n(366999),
    ef = n(531260),
    eP = n(780964),
    eM = n(766075),
    eD = n(786300),
    ex = n(428262),
    eU = n(960851),
    ey = n(89366),
    ej = n(504836),
    eL = n(422936),
    ek = n(234419),
    ev = n(549996),
    eb = n(810660),
    eG = n(175569),
    eX = n(371764),
    eq = n(949964),
    eF = n(103411),
    eB = n(778712),
    ew = n(97808),
    eV = n(590251),
    eH = n(144165),
    eY = n(854627),
    eK = n(427262),
    eW = n(326084),
    ez = n(851746),
    e$ = n(664654),
    eZ = n(212737),
    eQ = n(849812);
let eJ = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, eY.A)({ userId: t.id, size: eB._3.SIZE_24 });
        return (0, l.jsx)(
            ew.eu,
            { className: eQ.bj, src: n, "aria-label": (0, eK.mG)(t), size: eB._3.SIZE_24, ...i },
            t.id,
        );
    },
    e0 = (e) => {
        let { slotIndex: t } = e;
        return (0, l.jsx)("div", { className: eQ.p, children: t });
    },
    e1 = (e) => {
        let { referralSentUsers: t } = e;
        return (0, l.jsx)("div", {
            className: eQ.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < e$.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, l.jsx)(eJ, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, l.jsx)(e0, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    e2 = (e) => {
        let { nReferralsSent: t } = e;
        return (0, l.jsx)(eV.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eQ.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eQ.e0,
            overlayClassName: t === e$.Z ? eQ.ys : void 0,
            children: (0, l.jsx)(eH._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    e6 = (e) => {
        let { className: t } = e,
            { referralSentUsers: i } = (0, e$.J)(),
            r = (0, o.bG)([ez.A], () => ez.A.getRecipientStatus()),
            s = (0, o.bG)([ez.A], () => ez.A.getHasEligibleFriends()),
            c = r.size === e$.Z && [...r.values()].every((e) => e === eW.aK.REDEEMED),
            d = r.size === e$.Z;
        return (0, l.jsxs)("div", {
            className: a()(eQ.kL, t),
            children: [
                (0, l.jsx)("div", { className: eQ.G3, children: (0, l.jsx)(e2, { nReferralsSent: r.size }) }),
                (0, l.jsxs)("div", {
                    className: eQ.IH,
                    children: [
                        (0, l.jsx)(e1, { referralSentUsers: i }),
                        (0, l.jsxs)("div", {
                            className: eQ.n4,
                            children: [
                                (0, l.jsx)(D.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: W.intl.string(W.t.USo4s7),
                                }),
                                (0, l.jsx)(k.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === s
                                            ? W.intl.format(W.t["zWhX/Q"], {
                                                  helpdeskArticle: el.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
                                              })
                                            : i.length === e$.Z
                                              ? !0 === c
                                                  ? W.intl.format(W.t["1aEjsH"], {
                                                        helpdeskArticle: el.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : W.intl.format(W.t["+u3AOO"], {
                                                        helpdeskArticle: el.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : W.intl.format(W.t["omMr+V"], {
                                                    helpdeskArticle: el.A.getArticleURL(H.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(j.$, {
                            variant: "primary",
                            disabled: !1 === s || !0 === d,
                            text: W.intl.string(W.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: i } = e;
                                    g.default.track(H.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: i,
                                    }),
                                        (0, y.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                            return (n) => (0, l.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: eZ.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var e7 = n(989349),
    e5 = n.n(e7),
    e8 = n(496431),
    e9 = n(116689);
let e3 = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, e8.A)(e5()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: r, hours: s, minutes: c, seconds: o } = i,
        d = [
            { unitValue: r, unitType: "days" },
            { unitValue: s, unitType: "hours" },
            { unitValue: c, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, l.jsxs)("div", {
        className: a()(e9.Xl, n),
        children: [
            (0, l.jsx)(k.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: W.intl.string(W.t["/ARFVE"]),
            }),
            (0, l.jsx)("div", {
                className: e9.$R,
                children: d.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, r] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)(
                                    "div",
                                    {
                                        className: e9.bh,
                                        children: [
                                            (0, l.jsxs)("div", {
                                                className: e9.kB,
                                                children: [
                                                    (0, l.jsx)("div", {
                                                        className: e9.B2,
                                                        children: (0, l.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, l.jsx)("div", {
                                                        className: e9.B2,
                                                        children: (0, l.jsx)(k.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, l.jsx)(k.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return W.intl.string(W.t.ixASa2);
                                                        case "hours":
                                                            return W.intl.string(W.t["8sNvNn"]);
                                                        case "minutes":
                                                            return W.intl.string(W.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return W.intl.string(W.t.JhaiLW);
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
                                    (0, l.jsx)(k.E, {
                                        className: e9.cV,
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
var e4 = n(473702),
    te = n(702841),
    tt = n(652533),
    tn = n(20458),
    ti = n(447764),
    tl = n(180894);
let tr = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, te.bG)([eg.A], () => eg.A.useReducedMotion);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: ti.BI,
                children: (0, l.jsx)(tt.Ay, {
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
                    children: (0, l.jsx)("img", { src: tl.A, alt: "", className: ti.Q }),
                }),
            }),
            (0, l.jsx)(tn.A, {
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
var ts = n(707554),
    ta = n(218199);
let tc = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: r } = e;
    return (0, l.jsx)(ts.F, {
        forceLevel: 1,
        children: (0, l.jsx)(D.D, { className: a()(ta.w, t, i && ta.n), variant: "display-md", color: n, children: r }),
    });
};
var to = n(725807),
    td = n(774774),
    tu = n(975916);
let tE = () => {
    let e = { section: H.JJy.REVERSE_TRIAL_BANNER };
    return (0, l.jsxs)("div", {
        className: tu.vK,
        children: [
            (0, l.jsx)(td.e4, { text: W.intl.string(W.t.qYKftX), className: tu.Io }),
            (0, l.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: tu._u,
            }),
            (0, l.jsx)("div", {
                className: tu.IP,
                children: (0, l.jsx)(k.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: W.intl.format(W.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, l.jsx)(to.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: tu.aA,
                shinyButtonClassName: tu.Xp,
            }),
        ],
    });
};
var tA = n(18671);
let t_ = () => {
    let e = (0, te.bG)([eg.A], () => eg.A.useReducedMotion);
    return (0, l.jsx)(tn.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: tA.cI,
        hammerContainerClassName: tA.qg,
        keyContainerClassName: tA.h2,
        boltContainerClassName: tA.Bz,
        starAssetClassName: tA.ks,
        hammerAssetClassName: tA.GY,
        keyAssetClassName: tA.p4,
        boltAssetClassName: tA.vy,
    });
};
var tT = n(97584);
let tI = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            r = (0, h.Zb)(t);
        return (0, l.jsx)("div", {
            className: a()(tT.kL, n),
            ref: i,
            children: (0, l.jsxs)("div", {
                className: tT.ap,
                children: [
                    (0, l.jsxs)(eS.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, l.jsx)(eG.A, { text: W.intl.string(W.t.yhldRB) }),
                            (0, l.jsxs)(eS.B, {
                                align: "start",
                                gap: 12,
                                className: tT.rG,
                                children: [
                                    (0, l.jsx)(tc, { children: W.intl.format(W.t.FwjP6W, { days: r }) }),
                                    (0, l.jsx)(k.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: W.intl.string(W.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, l.jsxs)(eS.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, l.jsx)(F.A, {
                                        size: "md",
                                        buttonTextOverride: W.intl.string(W.t["2+luBl"]),
                                        iconOverride: eO.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, l.jsx)(j.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: W.intl.string(W.t.Af7ye6),
                                        onClick: () => (0, eM.openUserSettings)(eP.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: tT.Hk,
                        children: [(0, l.jsx)(eC, { alt: "", width: "100%", height: "auto" }), (0, l.jsx)(t_, {})],
                    }),
                ],
            }),
        });
    },
    tN = (e) => {
        let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: r, shouldShowReferralProgressBar: s } = e,
            {
                headingText: c,
                headingTop: d,
                showPill: u,
                shouldShowChurnVariant: E,
                premiumSubscription: A,
                userDiscountOffer: _,
                discountedPrice: N,
                buttonVisibilityRef: R,
            } = tm(),
            { analyticsLocations: m } = (0, I.Ay)(T.A.PREMIUM_MARKETING_HERO_CTA),
            C = (0, ev.c)(eR.C.MARKETING_PAGE_BANNER),
            p = null;
        null != C && "marketingPageBanner" === C.properties.properties.oneofKind
            ? (p = (0, l.jsx)(eX.x, {
                  componentId: C.id,
                  promotionBannerMarketingComponentFields: C.properties.properties.marketingPageBanner,
              }))
            : i
              ? (p = (0, l.jsx)(eq.A, { variant: eq.c.SUBSCRIBER_HOME }))
              : r
                ? (p = (0, l.jsx)(tE, {}))
                : s && (p = (0, l.jsx)(e6, {}));
        let S = (0, ek.V)(),
            O = (0, eL.O)(),
            g = (0, M.U9)(O, Y.pe.TIER_2) ? Y.pe.TIER_2 : void 0,
            h = null != A && A.status !== H.Dmq.ACCOUNT_HOLD && A.hasAnyPremiumNitro,
            f = (0, ef.A)(),
            P = f.isFractionalPremiumActive && !h && null == p && !E,
            D = (0, o.bG)([eg.A], () => eg.A.useReducedMotion),
            { visibilityPercentageRef: x, visibilityPercentage: U } = (0, eb.U)(!D);
        return r
            ? (0, l.jsx)(tI, { fpEndsAt: f.currentEntitlementEndsAt, className: t, buttonVisibilityRef: R })
            : (0, l.jsx)("div", {
                  className: a()(tT.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: R,
                  children: (0, l.jsxs)("div", {
                      className: tT.Qs,
                      ref: x,
                      children: [
                          u && d,
                          (0, l.jsxs)("div", {
                              className: tT.N1,
                              children: [
                                  (0, l.jsx)(tr, { containerVisibilityPercentage: U }),
                                  E &&
                                      _?.expiresAt != null &&
                                      (0, l.jsx)(e3, { expiresAt: _.expiresAt.toISOString(), className: tT.IZ }),
                                  (0, l.jsx)(tc, {
                                      children:
                                          E && null != _
                                              ? W.intl.format(W.t["3yZP0G"], { percent: _.discount.amount })
                                              : c,
                                  }),
                                  E &&
                                      null != _ &&
                                      null != N &&
                                      (0, l.jsx)(k.E, {
                                          className: tT.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: W.intl.format(W.t["3Q4wCy"], {
                                              discountedPrice: N,
                                              billingPeriod: (0, ex.Ke)(_.discount.userUsageLimitInterval),
                                              numMonths: _.discount.userUsageLimit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, l.jsxs)("div", {
                              className: P || E ? tT.UJ : void 0,
                              children: [
                                  P &&
                                      (0, l.jsx)(F.A, {
                                          size: "md",
                                          hasActivePromotion: !!i,
                                          subscriptionTier: S?.subscription_trial?.sku_id ?? g,
                                      }),
                                  E &&
                                      null != A &&
                                      (0, l.jsx)(j.$, {
                                          variant: "expressive",
                                          icon: eO.t,
                                          size: "md",
                                          text: W.intl.string(W.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = e4.g.CONFIRM_DISCOUNT),
                                                  void (0, y.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("34218"),
                                                              n.e("8516"),
                                                              n.e("88692"),
                                                              n.e("81857"),
                                                              n.e("59121"),
                                                              n.e("85484"),
                                                              n.e("5959"),
                                                              n.e("46461"),
                                                              n.e("16581"),
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
                                                              n.e("3178"),
                                                              n.e("5636"),
                                                              n.e("87196"),
                                                              n.e("9045"),
                                                              n.e("94161"),
                                                              n.e("13051"),
                                                              n.e("80347"),
                                                              n.e("10741"),
                                                              n.e("80166"),
                                                          ]).then(n.bind(n, 293061));
                                                      return (n) =>
                                                          (0, l.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: m,
                                                              initialStep: e,
                                                              premiumSubscription: A,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, l.jsx)(eT.A, {
                                      variant: P || E ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: W.intl.string(W.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          p,
                      ],
                  }),
              });
    },
    [tR, tm] = (0, eD.A)(),
    tC = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: r } = e,
            { analyticsLocations: s } = (0, I.Ay)(T.A.PREMIUM_MARKETING_HERO_CTA),
            a = (0, h.ds)(),
            c = (0, eU.cg)(),
            d = (0, ey.QQ)(),
            u = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            E = (0, ej.Z)({ location: "subscriber_home_hero" }),
            A = null != u && u.status === H.Dmq.CANCELED && null != i,
            _ = d && !(A && E),
            N = W.intl.string(W.t.qYKftX),
            R = (0, eF.m)(),
            m = W.intl.string(W.t.ifwQZb),
            { fractionalState: C, endsAt: p } = (0, ef.A)(),
            S = (0, eh.Ay)(p, eh.yE.CREDITS_ENDS_IN),
            g = null;
        if (C === Y.xc.NONE || a) g = (0, l.jsx)(eG.A, { text: N });
        else {
            _ = !0;
            let e = W.intl.format(W.t["yR+oDD"], {
                helpCenterLink: el.A.getArticleURL(H.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            g = (0, l.jsx)(ep.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: tT.YL,
                position: "right",
                children: (e) =>
                    (0, l.jsx)("div", {
                        ...e,
                        className: tT.V_,
                        children: (0, l.jsx)("div", { className: tT.eL, children: (0, l.jsx)(eG.A, { text: S }) }),
                    }),
            });
        }
        return (0, l.jsx)(I.f5, {
            value: s,
            children: (0, l.jsx)(tR.Provider, {
                value: {
                    headingText: m,
                    headingTop: g,
                    showPill: _,
                    shouldShowChurnVariant: A,
                    premiumSubscription: u,
                    userDiscountOffer: i,
                    discountedPrice: r,
                    buttonVisibilityRef: n,
                },
                children: (0, l.jsx)(tN, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: a,
                    shouldShowReferralProgressBar: R,
                }),
            }),
        });
    };
var tp = n(873174),
    tS = n(717421),
    tO = n(98812),
    tg = n(67423);
let th = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: r, discountedPrice: s } = e,
        { analyticsLocations: c } = (0, I.Ay)(T.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        o = (0, tS.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, l.jsx)(tp.animated.div, {
        className: a()(tO.iE, { [tO.q4]: !t }),
        style: o,
        children: (0, l.jsxs)("div", {
            className: tO.iJ,
            children: [
                (0, l.jsx)("img", { alt: "", src: tg, className: tO.oU }),
                (0, l.jsxs)("div", {
                    className: tO.iQ,
                    children: [
                        (0, l.jsx)(D.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: W.intl.format(W.t["3yZP0G"], { percent: r.discount.amount }),
                        }),
                        (0, l.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: W.intl.format(W.t["3Q4wCy"], {
                                numMonths: r.discount.userUsageLimit,
                                discountedPrice: s,
                                billingPeriod: (0, ex.Ke)(r.discount.userUsageLimitInterval),
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)(j.$, {
                    variant: "expressive",
                    icon: eO.t,
                    size: "md",
                    text: W.intl.string(W.t.zrCzVB),
                    onClick: () =>
                        void (0, y.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("8516"),
                                n.e("88692"),
                                n.e("81857"),
                                n.e("59121"),
                                n.e("85484"),
                                n.e("5959"),
                                n.e("46461"),
                                n.e("16581"),
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
                                n.e("3178"),
                                n.e("5636"),
                                n.e("87196"),
                                n.e("9045"),
                                n.e("94161"),
                                n.e("13051"),
                                n.e("80347"),
                                n.e("10741"),
                                n.e("80166"),
                            ]).then(n.bind(n, 293061));
                            return (t) =>
                                (0, l.jsx)(e, {
                                    ...t,
                                    premiumSubscription: i,
                                    analyticsLocations: c,
                                    initialStep: e4.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var tf = n(761508),
    tP = n(449543);
function tM(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tD(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tx(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var tU = n(345394);
function ty(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: tU.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tj(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tL(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tk(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
function tv(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var tb = n(661531),
    tG = n(996682);
function tX(e) {
    let {
        color: t = tb.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: r,
        width: s = 100,
        height: a = 80,
    } = e;
    return (0, l.jsxs)("svg", {
        ...(0, tG.A)({ "aria-label": n, "aria-hidden": i, role: r }),
        width: s,
        height: a,
        viewBox: "0 0 100 80",
        fill: t.css,
        children: [
            (0, l.jsx)("g", {
                clipPath: "url(#a)",
                children: (0, l.jsx)("path", {
                    fill: t.css,
                    d: "M69.14 40c0 5.63-4.25 9.82-9.97 9.82-5.71 0-9.96-4.19-9.96-9.82s4.25-9.82 9.96-9.82c5.72 0 9.97 4.19 9.97 9.82Zm30.43 0c0 21.87-17.94 39.3-40.4 39.3-19.26 0-35.07-12.71-39.32-30.13H11.2L7.22 30.83h12.76c1.2-4.19 3.05-8.25 5.45-11.79H4.7L.7.71h57.27C82.16.7 99.57 18.13 99.57 40Zm-19.14 0c0-11.66-9.43-20.96-21.26-20.96-11.82 0-21.25 9.3-21.25 20.96s9.43 20.96 21.25 20.96c11.83 0 21.26-9.3 21.26-20.96Z",
                }),
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsx)("clipPath", {
                    id: "a",
                    children: (0, l.jsx)("path", { fill: t.css, d: "M0 0h100v80H0z" }),
                }),
            }),
        ],
    });
}
function tq(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 162 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var tF = n(78701);
function tB(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: r, width: s = 288, height: a = 192 } = e;
    return (0, l.jsx)("img", {
        style: { width: s, height: a },
        src: tF.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: r ?? "img",
    });
}
var tw = n(462887),
    tV = n(736653),
    tH = n(259065),
    tY = n(206835),
    tK = n(976860),
    tW = n(591179),
    tz = n(462463),
    t$ = n(878784),
    tZ = n(425713),
    tQ = n(975807),
    tJ = n(562819),
    t0 = n(793943),
    t1 = n(95035),
    t2 = n(532794),
    t6 = n(192444),
    t7 = n(39423),
    t5 = n(892227),
    t8 = n(81466),
    t9 = n(318254),
    t3 = n(490285),
    t4 = n(875679);
let ne = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, C.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, t5.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, l.jsxs)("div", {
        className: t4.kL,
        children: [
            null != n &&
                (0, l.jsxs)("div", {
                    className: t4.nM,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t4.Pf,
                            children: [
                                (0, l.jsx)(t8.C, { size: "sm", color: tb.A.colors.TEXT_DEFAULT }),
                                (0, l.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: W.intl.string(t3.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, l.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: W.intl.format(t3.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, l.jsx)("div", { className: t4.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, l.jsxs)("div", {
                    className: t4.nM,
                    children: [
                        (0, l.jsxs)("div", {
                            className: t4.Pf,
                            children: [
                                (0, l.jsx)(t9.C, { size: "sm", color: tb.A.colors.TEXT_DEFAULT }),
                                (0, l.jsx)(k.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: W.intl.string(t3.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, l.jsx)(k.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: W.intl.format(t3.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                        }),
                    ],
                }),
        ],
    });
};
var nt = n(655752),
    nn = n(764231),
    ni = n(627380),
    nl = n(30084),
    nr = n(792641),
    ns = n(714206),
    na = n(88001),
    nc = n(758836),
    no = n(190107),
    nd = n(466919),
    nu = n(555599),
    nE = n(817577);
let nA =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    n_ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    nT =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function nI() {
    let { analyticsLocations: e } = (0, I.Ay)(T.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, tW.X)("useWhatsNewPerkCards"),
        i = (0, t7.O9)(),
        { logitechCard: s, steelseriesCard: c } = eu(),
        d = (0, x.l)("premium_subscriber_home_rewards"),
        u = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        E = u?.hasActiveTrial ?? !1,
        A = (0, tz.A)({ analyticsLocations: e }),
        _ = (0, r.useCallback)(() => {
            (0, eM.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tH.L)({ analyticsLocations: e }),
            );
        }, [e]),
        N = (0, r.useCallback)(() => {
            (0, eM.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tJ.L)({ analyticsLocations: e }),
            );
        }, [e]),
        R = (0, r.useCallback)(() => {
            (0, eM.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        m = () => {
            (0, tQ.A)(na.TE);
        },
        p = (0, r.useCallback)(() => {
            E
                ? (0, y.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, l.jsx)(e, { ...t });
                  })
                : (0, t2.A)({
                      subscriptionTier: Y.pe.TIER_2,
                      initialPlanId: Y.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, E]),
        S = (function (e) {
            let { fractionalState: t } = (0, ef.A)(),
                n = t === Y.xc.FP_ONLY,
                i = (0, t$.$F)(),
                l = (0, t$.Xb)(),
                s = i?.status === t$.Wo.UPCOMING || n,
                c = (0, tZ.N)(i?.id),
                d = (function () {
                    let e = (0, t$.$F)(),
                        t = (0, nt.P)(),
                        n = (0, t$.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = e5()(),
                        l = e5()(n),
                        r = e.status === t$.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        s = t.tenureReqNumMonths,
                        a = l.clone().add(r, "months"),
                        c = l.clone().add(s, "months").diff(a);
                    return Math.max(0, Math.min(1, (i.diff(a) - 864e5) / c));
                })(),
                u = (0, o.bG)([eg.A], () => eg.A.useReducedMotion) && !s,
                E = (0, ni.t)(),
                A = (0, nt.P)();
            return (0, r.useMemo)(() => {
                let t,
                    r = null != A ? W.intl.string(A.nameUnformattedNitro) : void 0;
                null == i
                    ? n && (t = (0, nn.T)(Y.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                    : (t =
                          i.status === t$.Wo.UPCOMING
                              ? W.intl.formatToPlainString(W.t.a1eKDi, { days: E?.days ?? 0 })
                              : ((function (e, t) {
                                    if (null != e && null != t) {
                                        if (e.days <= 30)
                                            return W.intl.formatToPlainString(W.t.NEXoaI, {
                                                days: e.days,
                                                nextBadgeName: t,
                                            });
                                        if (e.months <= 3)
                                            return W.intl.formatToPlainString(W.t.KDV8oD, {
                                                months: e.months,
                                                nextBadgeName: t,
                                            });
                                    }
                                })(E, r) ??
                                (0, nn.T)(i.id, i.tenureReqNumMonths) ??
                                void 0));
                let o = null;
                return (
                    null != c ? (o = s || u ? c.standard : c.ambientLarge) : n && (o = ns),
                    {
                        id: q.TENURE_BADGE_CARD_ID,
                        title: null != i ? W.intl.string(i.nameUnformattedNitro) : n ? W.intl.string(W.t.tx9Fvw) : "",
                        pillText: W.intl.string(W.t["jyYgZ+"]),
                        primaryAsset: o,
                        primaryAssetClassName: a()(nr.pq, { [nr.n6]: s, [nr.kE]: u }),
                        caption: null != l ? W.intl.formatToPlainString(W.t.Hu4jfi, { date: new Date(l) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: W.intl.string(W.t.jVcuVY),
                        onCtaClick: () => (0, nl.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, c, s, u, l, d, n, E, A, e]);
        })(e),
        { shouldShowBonusOrbsUX: g, multiplier: h } = (0, t6.lk)(no.rE.NITRO_HOME_MARKETING),
        { isEligible: f, programReward: P } = (0, C.F)({ location: "useWhatsNewPerkCards" }),
        M = f && null != P && null != P.reward_amount && P.reward_amount > 0;
    return (0, r.useMemo)(() => {
        let e = [
                d ? null : s,
                d ? null : c,
                M
                    ? {
                          id: q.NITRO_ORBS_REWARDS_CARD_ID,
                          title: W.intl.string(t3.default.hx5AFp),
                          description: W.intl.format(t3.default.wq3CF2, { orbsCount: P.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: a()(nu.lH, nu.yK),
                          footerContent: (0, l.jsx)(ne, {}),
                          ctaText: W.intl.string(t3.default.BxjHiu),
                          onCtaClick: () => (0, tK.pX)(H.BVt.COLLECTIBLES_SHOP_WITH_TAB(nc.G2.ORBS)),
                      }
                    : null,
                g
                    ? {
                          id: q.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: W.intl.string(W.t.Csf5Ol),
                          description: W.intl.format(W.t.NpUfej, { bonusOrbMultiplier: h }),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: W.intl.string(W.t.jVcuVY),
                          onCtaClick: () => (0, tK.pX)(H.BVt.QUEST_HOME),
                          primaryAssetClassName: nu.Nf,
                      }
                    : null,
                i
                    ? {
                          id: q.PREMIUM_GROUP_CARD_ID,
                          title: W.intl.string(nd.default.YkvksF),
                          description: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  W.intl.formatToPlainString(nd.default.JlyGQj, {
                                      totalSeats: na.aw,
                                      premiumGroupProductName: (0, na.DP)(),
                                  }),
                                  (0, l.jsx)("div", {
                                      className: nu.LF,
                                      children: (0, l.jsx)(t1.A, {
                                          onClick: m,
                                          children: W.intl.string(nd.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: W.intl.string(W.t.oW0eUd),
                          primaryAsset: nE,
                          ctaIcon: eO.t,
                          ctaIconPosition: "start",
                          ctaText: W.intl.string(W.t.IJI7yk),
                          onCtaClick: p,
                      }
                    : null,
                {
                    id: q.DISPLAY_NAME_STYLES_CARD_ID,
                    title: W.intl.string(W.t.OLtTrt),
                    description: W.intl.string(W.t["di/pXR"]),
                    onCtaClick: t ? A : _,
                    ctaText: W.intl.string(W.t.jVcuVY),
                    primaryAsset: nA,
                },
                {
                    id: q.CLIENT_THEMES_CARD_ID,
                    title: W.intl.string(W.t.acc6h6),
                    description: W.intl.formatToPlainString(W.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: nT,
                    ctaText: W.intl.string(W.t.jVcuVY),
                    onCtaClick: () => {
                        (0, t0.nf)(t0.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: q.PERMADECOS_CARD_ID,
                    title: W.intl.string(W.t.L14NZN),
                    description: W.intl.string(W.t.eCZkAI),
                    primaryAsset: (0, l.jsx)(tB, { alt: "", ariaHidden: !0 }),
                    ctaText: W.intl.string(W.t.jVcuVY),
                    onCtaClick: t ? A : N,
                },
                {
                    id: q.CUSTOM_APP_ICONS_CARD_ID,
                    title: W.intl.string(W.t["GU+wqh"]),
                    description: W.intl.string(W.t["1uPk1Z"]),
                    primaryAsset: n_,
                    ctaText: W.intl.string(W.t.y9TxXV),
                    onCtaClick: R,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            r = n ? 5 : 6;
        return e.splice(+!!n, 0, S), e.length > r && e.splice(r, e.length - r), e;
    }, [S, M, P, i, g, h, _, R, N, p, A, t, s, c, d]);
}
var nN = n(355097),
    nR = n(64514),
    nm = n(121818),
    nC =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let np = [
    { id: "bestof", label: () => W.intl.string(W.t.q1u7nQ) },
    { id: "appearance", label: () => W.intl.string(W.t.CUnZkZ) },
    { id: "upgrades", label: () => W.intl.string(W.t.KC5q8v) },
    { id: "vip", label: () => W.intl.string(W.t.DjEAcv) },
];
var nS = n(758495);
function nO(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, tV.DP)(),
                t = (0, tW.X)("useFavoritesPerkCards"),
                n = (0, t$.Lh)(),
                i = (0, tZ.N)(n)?.standard ?? null,
                { analyticsLocations: s } = (0, I.Ay)(T.A.PREMIUM_MARKETING_PERK_CARD),
                a = (0, tY.A)({ scrollPosition: nN._F.TRY_IT_OUT, analyticsLocations: s }),
                c = (0, r.useCallback)(() => {
                    (0, eM.openUserSettings)(eP.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: s });
                }, [s]),
                o = (0, r.useCallback)(() => {
                    (0, eM.openUserSettings)(eP.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: s });
                }, [s]),
                d = (0, r.useCallback)(() => {
                    (0, eM.openUserSettings)(eP.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: s });
                }, [s]),
                u = (0, r.useCallback)(() => {
                    (0, tK.pX)(H.BVt.COLLECTIBLES_SHOP);
                }, []),
                E = (0, r.useCallback)(() => {
                    (0, eM.openUserSettings)(eP.X.SOUNDBOARD_CATEGORY, { analyticsLocations: s });
                }, [s]),
                A = (0, tz.A)({ analyticsLocations: s }),
                _ = (0, r.useCallback)(() => {
                    (0, eM.openUserSettings)(eP.X.PROFILE_PANEL, { analyticsLocations: s }, () =>
                        (0, tH.L)({ analyticsLocations: s }),
                    );
                }, [s]),
                N = nI(),
                R = (0, r.useMemo)(() => N.map((e) => e?.id), [N]),
                m = (0, r.useMemo)(
                    () => [
                        {
                            id: q.SERVER_BOOSTS_CARD_ID,
                            title: W.intl.formatToPlainString(W.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: W.intl.formatToPlainString(W.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: W.intl.string(W.t.jVcuVY),
                            onCtaClick: o,
                            primaryAsset: (0, l.jsx)(tM, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: q.PROFILES_CARD_ID,
                            title: W.intl.string(W.t.xDRab3),
                            description: W.intl.string(W.t.yn6fWA),
                            ctaText: W.intl.string(W.t.jVcuVY),
                            onCtaClick: t ? A : a,
                            primaryAsset: (0, l.jsx)(tD, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: q.HD_VIDEO_CARD_ID,
                            title: W.intl.string(W.t["/mQ5gg"]),
                            description: W.intl.string(W.t["7WwAXh"]),
                            primaryAsset: (0, l.jsx)(tx, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: q.CLIENT_THEMES_CARD_ID,
                            title: W.intl.string(W.t.acc6h6),
                            description: W.intl.formatToPlainString(W.t.WQazjs, { themeCount: 20 }),
                            ctaText: W.intl.string(W.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: nT,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: q.MORE_EMOJIS_CARD_ID,
                            title: W.intl.string(W.t.D8vIDT),
                            description: W.intl.string(W.t.DRMecB),
                            primaryAsset: (0, l.jsx)(ty, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: q.LARGE_UPLOADS_CARD_ID,
                            title: W.intl.string(W.t.nL1WZV),
                            description: W.intl.formatToPlainString(W.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, l.jsx)(tj, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: q.CUSTOM_APP_ICONS_CARD_ID,
                            title: W.intl.string(W.t["GU+wqh"]),
                            description: W.intl.string(W.t["1uPk1Z"]),
                            ctaText: W.intl.string(W.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: n_,
                            categories: ["appearance"],
                        },
                        {
                            id: q.ENTRANCE_SOUNDS_CARD_ID,
                            title: W.intl.string(W.t.WJfCPi),
                            description: W.intl.string(W.t.liQKJR),
                            ctaText: W.intl.string(W.t.jVcuVY),
                            onCtaClick: E,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: q.DISPLAY_NAME_STYLES_CARD_ID,
                            title: W.intl.string(W.t.OLtTrt),
                            description: W.intl.string(W.t["di/pXR"]),
                            onCtaClick: t ? A : _,
                            ctaText: W.intl.string(W.t.jVcuVY),
                            primaryAsset: nA,
                            categories: ["appearance"],
                        },
                        {
                            id: q.CUSTOM_SOUNDS_CARD_ID,
                            title: W.intl.string(W.t["Cu/oFd"]),
                            description: W.intl.string(W.t.czj2aa),
                            primaryAsset: (0, l.jsx)(tL, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: q.SPECIAL_STICKERS_CARD_ID,
                            title: W.intl.string(W.t.MQoVeb),
                            description: W.intl.string(W.t.HGCLZX),
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                            categories: ["upgrades"],
                        },
                        {
                            id: q.SUPER_REACTIONS_CARD_ID,
                            title: W.intl.string(W.t.qERvAA),
                            description: W.intl.string(W.t.WkUWzx),
                            primaryAsset: (0, l.jsx)(tk, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: q.VIDEO_BACKGROUNDS_CARD_ID,
                            title: W.intl.string(W.t.ssVDYQ),
                            description: W.intl.string(W.t.aUSRMa),
                            primaryAsset: (0, tw.M)(e) ? nR : nm,
                            categories: ["upgrades"],
                        },
                        {
                            id: q.EARLY_ACCESS_CARD_ID,
                            title: W.intl.string(W.t["g/KRY6"]),
                            description: W.intl.string(W.t.JzAmJc),
                            primaryAsset: (0, l.jsx)(tv, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: q.BADGE_CARD_ID,
                            title: W.intl.string(W.t.Bn3CtB),
                            description: W.intl.string(W.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, l.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, l.jsx)(tX, { color: tb.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: q.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: W.intl.string(W.t["MTD+7w"]),
                            description: W.intl.string(W.t.Bhs0s6),
                            ctaText: W.intl.string(W.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, l.jsx)(tq, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: q.PERMADECOS_CARD_ID,
                            title: W.intl.string(W.t.L14NZN),
                            description: W.intl.string(W.t.eCZkAI),
                            primaryAsset: (0, l.jsx)(tB, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, a, c, o, d, u, E, _, A, t],
                );
            return (0, r.useMemo)(() => m.filter((e) => null != e && !R.includes(e.id)), [m, R]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [s, a] = (0, r.useState)(i?.categories[0] ?? nC.BEST_OF_NITRO),
        c = (0, r.useMemo)(() => n.filter((e) => null != e && e.categories.includes(s)), [n, s]);
    return (0, l.jsxs)("div", {
        className: nS.uW,
        children: [
            (0, l.jsx)(D.D, { variant: "display-sm", className: nS.R_, children: W.intl.string(W.t["Uh3+CA"]) }),
            (0, l.jsx)(tf.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: s,
                onItemSelect: a,
                className: nS.Lq,
                "aria-label": W.intl.string(W.t["Uh3+CA"]),
                children: np.map((e) =>
                    (0, l.jsx)(tf.V.Item, { id: e.id, className: nS.IC, children: e.label() }, e.id),
                ),
            }),
            (0, l.jsx)(
                tP.A,
                {
                    gap: 20,
                    className: nS.jG,
                    children: c.map((e) => {
                        if (null != e)
                            return (0, l.jsx)(Q.S, { ...e, glowing: t === e.id, containerClassName: nS.Ui }, e.id);
                    }),
                },
                s,
            ),
        ],
    });
}
function ng(e) {
    let { glowingPerkId: t = null } = e,
        n = nI();
    return (0, l.jsx)(ei, {
        sectionClassName: en.uW,
        heading: (0, l.jsx)(D.D, { variant: "display-sm", className: en.R_, children: W.intl.string(W.t.Aw5DRm) }),
        grid: (0, l.jsx)(l.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, l.jsx)(
                    Q.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: a()(en.Nr, { [en.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var nh = n(994763),
    nf = n(946062),
    nP = n(79119);
let nM = "section",
    nD = "perk",
    nx = (e) => {
        let { userId: t } = e,
            n = (0, h.ds)(),
            i = (0, c.zy)();
        r.useEffect(() => {
            _.h.wait(async () => {
                let e = [(0, m.Ay)()];
                null != t && e.push((0, S.A)(t)), await Promise.all(e);
            });
        }, [t]),
            r.useEffect(() => {
                X(!0);
            }, []),
            (0, P.j)(),
            (0, R.P)(N.b);
        let s = r.useRef(null),
            D = r.useRef(null),
            x = (0, o.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
            { isReady: U, programReward: y } = (0, C.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: j,
                glowingSectionId: L,
                glowingPerkId: k,
                scrollBlock: v,
                scrollInline: b,
            } = r.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get(nD),
                    n = e.get(nM);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, nh.z)(j ?? "", null != j, v, b);
        let [G, X] = r.useState(!1),
            q = (0, f.p)(),
            F = r.useRef(null),
            [B, w] = r.useState(!1),
            V = null != q && null != x && x.status === H.Dmq.CANCELED,
            K = (0, M.iU)(Y.gD.PREMIUM_MONTH_TIER_2, q, x),
            z = !B && V,
            { analyticsLocations: $ } = (0, I.Ay)(T.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [Z, Q] = r.useState(!1);
        return null != (0, o.bG)([p.A], () => (null != t ? p.A.getUserProfile(t) : null)) && (U || null != y)
            ? (0, l.jsxs)(E.Gt, {
                  className: nf.xW,
                  ref: s,
                  children: [
                      (0, l.jsx)(A.h, {
                          color: "nitro-pink",
                          className: a()(nf.kL, nf.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, l.jsxs)(I.f5, {
                              value: $,
                              children: [
                                  (0, l.jsx)(d.L, {
                                      innerRef: F,
                                      onChange: (e) => w(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, l.jsx)(tC, {
                                          buttonVisibilityRef: F,
                                          className: nf.v1,
                                          userDiscountOffer: q,
                                          discountedPrice: K,
                                      }),
                                  }),
                                  (0, l.jsx)(e_, { glowingSectionId: L }),
                                  (0, l.jsx)(ng, { glowingPerkId: k }),
                                  (0, l.jsx)(nO, { glowingPerkId: k }),
                                  (0, l.jsx)(eN, {
                                      className: nf.Zy,
                                      location: T.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: H.liQ.NITRO_HOME, section: H.JJy.GIFT_BANNER },
                                  }),
                                  (0, l.jsx)("div", { className: nf.hz }),
                                  (0, l.jsx)(d.L, {
                                      innerRef: D,
                                      onChange: (e) => {
                                          e &&
                                              !Z &&
                                              (g.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: $,
                                              }),
                                              Q(!0));
                                      },
                                      children: (0, l.jsx)("div", { ref: D, className: nf._Z }),
                                  }),
                                  (0, l.jsx)("img", {
                                      src: nP,
                                      className: nf.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: W.intl.string(W.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      V &&
                          null != K &&
                          (0, l.jsx)(th, {
                              isVisible: z && G,
                              premiumSubscription: x,
                              churnDiscountOffer: q,
                              discountedPrice: K,
                          }),
                  ],
              })
            : (0, l.jsx)("div", { className: a()(nf.kL, nf.Lq), children: (0, l.jsx)(u.y, {}) });
    };
