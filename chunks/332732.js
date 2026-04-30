"use strict";
n.d(t, { Ay: () => ns, WU: () => nr, x6: () => ni }), n(321073), n(323874), n(14289), n(35956);
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
    m = n(31502),
    g = n(726649),
    A = n(611924),
    I = n(961250),
    T = n(366505),
    S = n(841595),
    N = n(903209),
    y = n(166403),
    C = n(174459),
    v = n(881489),
    O = n(131168),
    R = n(482589),
    b = n(511484),
    D = n(327783),
    L = n(534514),
    w = n(834730),
    M = n(65470),
    P = n(375708),
    x = n(797221);
let U = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: s } = (0, E.Ay)(n);
    return (0, r.jsx)(E.f5, {
        value: s,
        children: (0, r.jsxs)(f.h, {
            className: o()(x.kL, x.pm, t),
            color: "purple",
            children: [
                (0, r.jsxs)("div", {
                    className: x.FS,
                    children: [
                        (0, r.jsx)(L.D, {
                            variant: "heading-xxl/bold",
                            className: x.R_,
                            children: P.intl.string(P.t.Ve9Ge6),
                        }),
                        (0, r.jsx)(w.E, { variant: "text-md/medium", children: P.intl.string(P.t.yQ06u1) }),
                        (0, r.jsx)("div", {
                            className: x.SB,
                            children: (0, r.jsx)(M.A, {
                                buttonTextOverride: P.intl.string(P.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: x._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var k = n(877624);
let G =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function F(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: G,
        srcSet: `${G} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var V = n(502572),
    B = n(192308),
    H = n(331322),
    j = n(403581),
    Y = n(821609),
    W = n(775602),
    K = n(366999),
    z = n(531260),
    $ = n(780964),
    q = n(858897),
    Z = n(786300),
    X = n(975571),
    Q = n(927578),
    J = n(960851),
    ee = n(89366),
    et = n(422936),
    en = n(234419),
    ei = n(549996),
    er = n(371764),
    es = n(949964),
    ea = n(103411),
    eo = n(778712),
    el = n(97808),
    eu = n(590251),
    ec = n(144165),
    ed = n(854627),
    e_ = n(427262),
    ef = n(326084),
    eh = n(851746),
    ep = n(664654),
    eE = n(212737),
    em = n(652215),
    eg = n(849812);
let eA = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, ed.A)({ userId: t.id, size: eo._3.SIZE_24 });
        return (0, r.jsx)(
            el.eu,
            { className: eg.bj, src: n, "aria-label": (0, e_.mG)(t), size: eo._3.SIZE_24, ...i },
            t.id,
        );
    },
    eI = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", { className: eg.p, children: t });
    },
    eT = (e) => {
        let { referralSentUsers: t } = e;
        return (0, r.jsx)("div", {
            className: eg.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < ep.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, r.jsx)(eA, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(eI, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    eS = (e) => {
        let { nReferralsSent: t } = e;
        return (0, r.jsx)(eu.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eg.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eg.e0,
            overlayClassName: t === ep.Z ? eg.ys : void 0,
            children: (0, r.jsx)(ec._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    eN = (e) => {
        let { className: t } = e,
            { referralSentUsers: i } = (0, ep.J)(),
            s = (0, u.bG)([eh.A], () => eh.A.getRecipientStatus()),
            a = (0, u.bG)([eh.A], () => eh.A.getHasEligibleFriends()),
            l = s.size === ep.Z && [...s.values()].every((e) => e === ef.aK.REDEEMED),
            c = s.size === ep.Z;
        return (0, r.jsxs)("div", {
            className: o()(eg.kL, t),
            children: [
                (0, r.jsx)("div", { className: eg.G3, children: (0, r.jsx)(eS, { nReferralsSent: s.size }) }),
                (0, r.jsxs)("div", {
                    className: eg.IH,
                    children: [
                        (0, r.jsx)(eT, { referralSentUsers: i }),
                        (0, r.jsxs)("div", {
                            className: eg.n4,
                            children: [
                                (0, r.jsx)(L.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: P.intl.string(P.t.USo4s7),
                                }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === a
                                            ? P.intl.format(P.t["zWhX/Q"], {
                                                  helpdeskArticle: X.A.getArticleURL(em.MVz.REFERRAL_PROGRAM),
                                              })
                                            : i.length === ep.Z
                                              ? !0 === l
                                                  ? P.intl.format(P.t["1aEjsH"], {
                                                        helpdeskArticle: X.A.getArticleURL(em.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : P.intl.format(P.t["+u3AOO"], {
                                                        helpdeskArticle: X.A.getArticleURL(em.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : P.intl.format(P.t["omMr+V"], {
                                                    helpdeskArticle: X.A.getArticleURL(em.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(Y.$, {
                            variant: "primary",
                            disabled: !1 === a || !0 === c,
                            text: P.intl.string(P.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: i } = e;
                                    C.default.track(em.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: i,
                                    }),
                                        (0, B.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: eE.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var ey = n(792656),
    eC = n(989349),
    ev = n.n(eC),
    eO = n(496431),
    eR = n(116689);
let eb = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, eO.A)(ev()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: s, hours: a, minutes: l, seconds: u } = i,
        c = [
            { unitValue: s, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: o()(eR.Xl, n),
        children: [
            (0, r.jsx)(w.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: P.intl.string(P.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: eR.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, s] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: eR.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: eR.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: eR.B2,
                                                        children: (0, r.jsx)(w.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(w.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return P.intl.string(P.t.ixASa2);
                                                        case "hours":
                                                            return P.intl.string(P.t["8sNvNn"]);
                                                        case "minutes":
                                                            return P.intl.string(P.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return P.intl.string(P.t.JhaiLW);
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
                                    (0, r.jsx)(w.E, {
                                        className: eR.cV,
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
var eD = n(473702),
    eL = n(505559),
    ew = n(725807),
    eM = n(774774),
    eP = n(695661);
let ex = () => {
    let e = { section: em.JJy.REVERSE_TRIAL_BANNER };
    return (0, r.jsxs)("div", {
        className: eP.vK,
        children: [
            (0, r.jsx)(eM.e4, { text: P.intl.string(P.t.qYKftX), className: eP.Io }),
            (0, r.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: eP._u,
            }),
            (0, r.jsx)("div", {
                className: eP.IP,
                children: (0, r.jsx)(w.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: P.intl.format(P.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, r.jsx)(ew.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: eP.aA,
                shinyButtonClassName: eP.Xp,
            }),
        ],
    });
};
var eU = n(103733),
    ek = n(702841),
    eG = n(384601),
    eF = n(584151);
let eV = () => {
    let e = (0, ek.bG)([W.A], () => W.A.useReducedMotion);
    return (0, r.jsx)(eG.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: eF.cI,
        hammerContainerClassName: eF.qg,
        keyContainerClassName: eF.h2,
        boltContainerClassName: eF.Bz,
        starAssetClassName: eF.ks,
        hammerAssetClassName: eF.GY,
        keyAssetClassName: eF.p4,
        boltAssetClassName: eF.vy,
    });
};
var eB = n(608416),
    eH = n(447764),
    ej = n(180894);
let eY = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, ek.bG)([W.A], () => W.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: eH.BI,
                children: (0, r.jsx)(eB.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eB.$G },
                    yAxisAnimationData: { range: 20, duration: eB.Mp, path: eB.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: eB.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", { src: ej.A, alt: "", className: eH.Q }),
                }),
            }),
            (0, r.jsx)(eG.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: eH.Gj,
                keyContainerClassName: eH.FV,
                starContainerClassName: eH.E1,
                hammerAssetClassName: eH.Wv,
                keyAssetClassName: eH.rs,
                starAssetClassName: eH.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var eW = n(218199);
let eK = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: s } = e;
    return (0, r.jsx)(L.D, { className: o()(eW.w, t, i && eW.n), variant: "display-md", color: n, children: s });
};
var ez = n(788868),
    e$ = n(97584);
let eq = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            s = (0, v.Zb)(t);
        return (0, r.jsx)("div", {
            className: o()(e$.kL, n),
            ref: i,
            children: (0, r.jsxs)("div", {
                className: e$.ap,
                children: [
                    (0, r.jsxs)(H.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, r.jsx)(eL.A, { text: P.intl.string(P.t.yhldRB) }),
                            (0, r.jsxs)(H.B, {
                                align: "start",
                                gap: 12,
                                className: e$.rG,
                                children: [
                                    (0, r.jsx)(eK, { children: P.intl.format(P.t.FwjP6W, { days: s }) }),
                                    (0, r.jsx)(w.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: P.intl.string(P.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(H.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, r.jsx)(ey.A, {
                                        size: "md",
                                        buttonTextOverride: P.intl.string(P.t["2+luBl"]),
                                        iconOverride: j.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, r.jsx)(Y.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: P.intl.string(P.t.Af7ye6),
                                        onClick: () => (0, q.openUserSettings)($.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: e$.Hk,
                        children: [(0, r.jsx)(F, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(eV, {})],
                    }),
                ],
            }),
        });
    },
    eZ = (e) => {
        let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: s, shouldShowReferralProgressBar: a } = e,
            {
                headingText: l,
                headingTop: c,
                showPill: d,
                userDiscountOffer: _,
                discountedPrice: f,
                buttonVisibilityRef: h,
            } = eQ(),
            { analyticsLocations: m } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            g = (0, ei.c)(k.C.MARKETING_PAGE_BANNER),
            A = null;
        null != g && "marketingPageBanner" === g.properties.properties.oneofKind
            ? (A = (0, r.jsx)(er.x, {
                  componentId: g.id,
                  promotionBannerMarketingComponentFields: g.properties.properties.marketingPageBanner,
              }))
            : i
              ? (A = (0, r.jsx)(es.A, { variant: es.c.SUBSCRIBER_HOME }))
              : s
                ? (A = (0, r.jsx)(ex, {}))
                : a && (A = (0, r.jsx)(eN, {}));
        let I = (0, u.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            T = null != I && I.status === em.Dmq.CANCELED && null != _,
            S = (0, en.V)(),
            N = (0, et.O)(),
            C = (0, b.U9)(N, ez.pe.TIER_2) ? ez.pe.TIER_2 : void 0,
            v = null != I && I.status !== em.Dmq.ACCOUNT_HOLD && I.hasAnyPremiumNitro,
            O = (0, z.A)(),
            R = O.isFractionalPremiumActive && !v && null == A && !T,
            D = (0, u.bG)([W.A], () => W.A.useReducedMotion),
            { visibilityPercentageRef: L, visibilityPercentage: x } = (0, eU.U)(!D);
        return s
            ? (0, r.jsx)(eq, { fpEndsAt: O.currentEntitlementEndsAt, className: t, buttonVisibilityRef: h })
            : (0, r.jsx)("div", {
                  className: o()(e$.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: h,
                  children: (0, r.jsxs)("div", {
                      className: e$.Qs,
                      ref: L,
                      children: [
                          d && c,
                          (0, r.jsxs)("div", {
                              className: e$.N1,
                              children: [
                                  (0, r.jsx)(eY, { containerVisibilityPercentage: x }),
                                  T &&
                                      null != _.expires_at &&
                                      (0, r.jsx)(eb, { expiresAt: _.expires_at, className: e$.IZ }),
                                  (0, r.jsx)(eK, {
                                      children: T ? P.intl.format(P.t["3yZP0G"], { percent: _.discount.amount }) : l,
                                  }),
                                  T &&
                                      null != f &&
                                      (0, r.jsx)(w.E, {
                                          className: e$.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: P.intl.format(P.t["3Q4wCy"], {
                                              discountedPrice: f,
                                              billingPeriod: (0, Q.Ke)(_.discount.user_usage_limit_interval),
                                              numMonths: _.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: R || T ? e$.UJ : void 0,
                              children: [
                                  R &&
                                      (0, r.jsx)(ey.A, {
                                          size: "md",
                                          hasActivePromotion: !!i,
                                          subscriptionTier: S?.subscription_trial?.sku_id ?? C,
                                      }),
                                  T &&
                                      (0, r.jsx)(Y.$, {
                                          variant: "expressive",
                                          icon: j.t,
                                          size: "md",
                                          text: P.intl.string(P.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = eD.g.CONFIRM_DISCOUNT),
                                                  void (0, B.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("34218"),
                                                              n.e("4469"),
                                                              n.e("97893"),
                                                              n.e("88205"),
                                                              n.e("65086"),
                                                              n.e("90261"),
                                                              n.e("16933"),
                                                              n.e("6305"),
                                                              n.e("1195"),
                                                              n.e("26032"),
                                                              n.e("25310"),
                                                              n.e("68495"),
                                                              n.e("18125"),
                                                              n.e("65420"),
                                                              n.e("22513"),
                                                              n.e("83004"),
                                                              n.e("13498"),
                                                              n.e("10191"),
                                                              n.e("54253"),
                                                              n.e("71561"),
                                                              n.e("71934"),
                                                              n.e("89324"),
                                                              n.e("7053"),
                                                              n.e("22846"),
                                                              n.e("86483"),
                                                              n.e("39995"),
                                                              n.e("25568"),
                                                              n.e("32260"),
                                                              n.e("40153"),
                                                              n.e("68953"),
                                                              n.e("22894"),
                                                              n.e("77083"),
                                                              n.e("63009"),
                                                              n.e("16581"),
                                                              n.e("23924"),
                                                              n.e("71470"),
                                                              n.e("207"),
                                                              n.e("57036"),
                                                              n.e("98839"),
                                                              n.e("20287"),
                                                              n.e("28367"),
                                                              n.e("10471"),
                                                              n.e("35429"),
                                                              n.e("11301"),
                                                              n.e("64827"),
                                                              n.e("96643"),
                                                              n.e("94493"),
                                                              n.e("92789"),
                                                              n.e("47834"),
                                                              n.e("30938"),
                                                              n.e("19551"),
                                                              n.e("74016"),
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
                                                              n.e("43919"),
                                                              n.e("31390"),
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
                                  (0, r.jsx)(M.A, {
                                      variant: R || T ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: P.intl.string(P.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          A,
                      ],
                  }),
              });
    },
    [eX, eQ] = (0, Z.A)(),
    eJ = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: s } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, v.ds)(),
            l = (0, J.cg)(),
            u = (0, ee.QQ)(),
            c = P.intl.string(P.t.qYKftX),
            d = (0, ea.m)(),
            _ = P.intl.string(P.t.ifwQZb),
            { fractionalState: f, endsAt: h } = (0, z.A)(),
            m = (0, K.Ay)(h, K.yE.CREDITS_ENDS_IN),
            g = null;
        if (f === ez.xc.NONE || o) g = (0, r.jsx)(eL.A, { text: c });
        else {
            u = !0;
            let e = P.intl.format(P.t["yR+oDD"], {
                helpCenterLink: X.A.getArticleURL(em.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            g = (0, r.jsx)(V.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: e$.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: e$.V_,
                        children: (0, r.jsx)("div", { className: e$.eL, children: (0, r.jsx)(eL.A, { text: m }) }),
                    }),
            });
        }
        return (0, r.jsx)(E.f5, {
            value: a,
            children: (0, r.jsx)(eX.Provider, {
                value: {
                    headingText: _,
                    headingTop: g,
                    showPill: u,
                    userDiscountOffer: i,
                    discountedPrice: s,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(eZ, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: d,
                }),
            }),
        });
    };
var e0 = n(785651),
    e1 = n(717421),
    e2 = n(98812),
    e3 = n(67423);
let e6 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: s, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, e1.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(e0.animated.div, {
        className: o()(e2.iE, { [e2.q4]: !t }),
        style: u,
        children: (0, r.jsxs)("div", {
            className: e2.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: e3, className: e2.oU }),
                (0, r.jsxs)("div", {
                    className: e2.iQ,
                    children: [
                        (0, r.jsx)(L.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: P.intl.format(P.t["3yZP0G"], { percent: s.discount.amount }),
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: P.intl.format(P.t["3Q4wCy"], {
                                numMonths: s.discount.user_usage_limit,
                                discountedPrice: a,
                                billingPeriod: (0, Q.Ke)(s.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(Y.$, {
                    variant: "expressive",
                    icon: j.t,
                    size: "md",
                    text: P.intl.string(P.t.zrCzVB),
                    onClick: () =>
                        void (0, B.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("4469"),
                                n.e("97893"),
                                n.e("88205"),
                                n.e("65086"),
                                n.e("90261"),
                                n.e("16933"),
                                n.e("6305"),
                                n.e("1195"),
                                n.e("26032"),
                                n.e("25310"),
                                n.e("68495"),
                                n.e("18125"),
                                n.e("65420"),
                                n.e("22513"),
                                n.e("83004"),
                                n.e("13498"),
                                n.e("10191"),
                                n.e("54253"),
                                n.e("71561"),
                                n.e("71934"),
                                n.e("89324"),
                                n.e("7053"),
                                n.e("22846"),
                                n.e("86483"),
                                n.e("39995"),
                                n.e("25568"),
                                n.e("32260"),
                                n.e("40153"),
                                n.e("68953"),
                                n.e("22894"),
                                n.e("77083"),
                                n.e("63009"),
                                n.e("16581"),
                                n.e("23924"),
                                n.e("71470"),
                                n.e("207"),
                                n.e("57036"),
                                n.e("98839"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("10471"),
                                n.e("35429"),
                                n.e("11301"),
                                n.e("64827"),
                                n.e("96643"),
                                n.e("94493"),
                                n.e("92789"),
                                n.e("47834"),
                                n.e("30938"),
                                n.e("19551"),
                                n.e("74016"),
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
                                n.e("43919"),
                                n.e("31390"),
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
                                    initialStep: eD.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var e4 = n(761508),
    e5 = n(951707),
    e7 = n(744064);
function e8(e) {
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
function e9(e) {
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
function te(e) {
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
var tt = n(345394);
function tn(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tt.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function ti(e) {
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
function tr(e) {
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
function ts(e) {
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
function ta(e) {
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
var to = n(661531),
    tl = n(996682);
function tu(e) {
    let {
        color: t = to.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: s,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, tl.A)({ "aria-label": n, "aria-hidden": i, role: s }),
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
function tc(e) {
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
var td = n(78701);
function t_(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: td.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var tf = n(462887),
    th = n(736653),
    tp = n(259065),
    tE = n(206835),
    tm = n(976860),
    tg = n(591179),
    tA = n(462463),
    tI = n(878784),
    tT = n(425713),
    tS = n(920050),
    tN = n(975807),
    ty = n(562819),
    tC = n(793943),
    tv = n(95035),
    tO = n(532794),
    tR = n(245853),
    tb = n(292674),
    tD = n(892227),
    tL = n(81466),
    tw = n(318254),
    tM = n(490285),
    tP = n(875679);
let tx = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, T.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let n =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, tD.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, r.jsxs)("div", {
        className: tP.kL,
        children: [
            null != n &&
                (0, r.jsxs)("div", {
                    className: tP.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tP.Pf,
                            children: [
                                (0, r.jsx)(tL.C, { size: "sm", color: to.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(w.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: P.intl.string(tM.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(w.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: P.intl.format(tM.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && (0, r.jsx)("div", { className: tP.yF }),
            (0, r.jsxs)("div", {
                className: tP.nM,
                children: [
                    (0, r.jsxs)("div", {
                        className: tP.Pf,
                        children: [
                            (0, r.jsx)(tw.C, { size: "sm", color: to.A.colors.TEXT_DEFAULT }),
                            (0, r.jsx)(w.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: P.intl.string(tM.default.F7Bhsg),
                            }),
                        ],
                    }),
                    (0, r.jsx)(w.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: P.intl.format(tM.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                    }),
                ],
            }),
        ],
    });
};
var tU = n(256358),
    tk = n(655752),
    tG = n(764231),
    tF = n(627380),
    tV = n(30084),
    tB = n(792641),
    tH = n(714206),
    tj = n(88001),
    tY = n(758836),
    tW = n(190107),
    tK = n(466919),
    tz = n(555599),
    t$ = n(817577);
let tq =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    tZ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    tX =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function tQ() {
    let { analyticsLocations: e } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, tg.X)("useWhatsNewPerkCards"),
        i = (0, tb.O9)(),
        { logitechCard: a, steelseriesCard: l } = (0, tU.A)(),
        c = (0, tU.S)(),
        d = (0, u.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        _ = d?.hasActiveTrial ?? !1,
        f = (0, tA.A)({ analyticsLocations: e }),
        h = (0, s.useCallback)(() => {
            (0, q.openUserSettings)($.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tp.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, s.useCallback)(() => {
            (0, q.openUserSettings)($.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, ty.L)({ analyticsLocations: e }),
            );
        }, [e]),
        A = (0, s.useCallback)(() => {
            (0, q.openUserSettings)($.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        I = () => {
            (0, tN.A)(tj.TE);
        },
        S = (0, s.useCallback)(() => {
            _
                ? (0, B.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, tO.A)({
                      subscriptionTier: ez.pe.TIER_2,
                      initialPlanId: ez.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, _]),
        N = (function (e) {
            let { fractionalState: t } = (0, z.A)(),
                n = t === ez.xc.FP_ONLY,
                i = (0, tI.$F)(),
                r = (0, tI.Xb)(),
                a = i?.status === tI.Wo.UPCOMING || n,
                l = (0, tT.N)(i?.id),
                u = (function () {
                    let e = (0, tI.$F)(),
                        t = (0, tk.P)(),
                        n = (0, tI.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = ev()(),
                        r = ev()(n),
                        s = e.status === tI.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                c = (0, tF.t)(),
                d = (0, tk.P)();
            return (0, s.useMemo)(() => {
                let t,
                    s = null != d ? P.intl.string(d.nameUnformattedNitro) : void 0;
                return (
                    null == i
                        ? n && (t = (0, tG.T)(ez.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                        : (t =
                              i.status === tI.Wo.UPCOMING
                                  ? P.intl.formatToPlainString(P.t.a1eKDi, { days: c?.days ?? 0 })
                                  : ((function (e, t) {
                                        if (null != e && null != t) {
                                            if (e.days <= 30)
                                                return P.intl.formatToPlainString(P.t.NEXoaI, {
                                                    days: e.days,
                                                    nextBadgeName: t,
                                                });
                                            if (e.months <= 3)
                                                return P.intl.formatToPlainString(P.t.KDV8oD, {
                                                    months: e.months,
                                                    nextBadgeName: t,
                                                });
                                        }
                                    })(c, s) ??
                                    (0, tG.T)(i.id, i.tenureReqNumMonths) ??
                                    void 0)),
                    {
                        id: tS.TENURE_BADGE_CARD_ID,
                        title: null != i ? P.intl.string(i.nameUnformattedNitro) : n ? P.intl.string(P.t.tx9Fvw) : "",
                        pillText: P.intl.string(P.t["jyYgZ+"]),
                        primaryAsset: null != l ? (a ? l.standard : l.ambientLarge) : n ? tH : null,
                        primaryAssetClassName: o()(tB.p, { [tB.n]: a }),
                        caption: null != r ? P.intl.formatToPlainString(P.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: P.intl.string(P.t.jVcuVY),
                        onCtaClick: () => (0, tV.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, r, u, n, c, d, e]);
        })(e),
        { shouldShowBonusOrbsUX: C, multiplier: v } = (0, tR.Dl)(tW.rE.NITRO_HOME_MARKETING),
        O = (0, m.l)("useWhatsNewPerkCards"),
        { isEligible: R, programReward: b } = (0, T.F)({ location: "useWhatsNewPerkCards" }),
        D = O && R && null != b;
    return (0, s.useMemo)(() => {
        let e = [
                c ? null : a,
                c ? null : l,
                D
                    ? {
                          id: tS.NITRO_ORBS_REWARDS_CARD_ID,
                          title: P.intl.string(tM.default.hx5AFp),
                          description: P.intl.format(tM.default["Pz+6Ix"], { orbsCount: b?.reward_amount ?? 0 }),
                          primaryAsset: "/assets/0e1f72ee8aba3549.svg",
                          footerContent: (0, r.jsx)(tx, {}),
                          ctaText: P.intl.string(tM.default.BxjHiu),
                          onCtaClick: () => (0, tm.pX)(em.BVt.COLLECTIBLES_SHOP_WITH_TAB(tY.G2.ORBS)),
                      }
                    : null,
                C
                    ? {
                          id: tS.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: P.intl.string(P.t.F2MShO),
                          description: P.intl.format(P.t.NpUfej, { bonusOrbMultiplier: v }),
                          pillText: O ? void 0 : P.intl.string(P.t.oW0eUd),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: P.intl.string(P.t.jVcuVY),
                          onCtaClick: () => (0, tm.pX)(em.BVt.QUEST_HOME),
                          primaryAssetClassName: tz.Nf,
                      }
                    : null,
                i
                    ? {
                          id: tS.PREMIUM_GROUP_CARD_ID,
                          title: P.intl.string(tK.default.YkvksF),
                          description: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  P.intl.formatToPlainString(tK.default.JlyGQj, {
                                      totalSeats: tj.aw,
                                      premiumGroupProductName: (0, tj.DP)(),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: tz.LF,
                                      children: (0, r.jsx)(tv.A, {
                                          onClick: I,
                                          children: P.intl.string(tK.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: P.intl.string(P.t.oW0eUd),
                          primaryAsset: t$,
                          ctaIcon: j.t,
                          ctaIconPosition: "start",
                          ctaText: P.intl.string(P.t.IJI7yk),
                          onCtaClick: S,
                      }
                    : null,
                {
                    id: tS.DISPLAY_NAME_STYLES_CARD_ID,
                    title: P.intl.string(P.t.OLtTrt),
                    description: P.intl.string(P.t["di/pXR"]),
                    onCtaClick: t ? f : h,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    primaryAsset: tq,
                },
                {
                    id: tS.CLIENT_THEMES_CARD_ID,
                    title: P.intl.string(P.t.acc6h6),
                    description: P.intl.formatToPlainString(P.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: tX,
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: () => {
                        (0, tC.nf)(tC.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tS.PERMADECOS_CARD_ID,
                    title: P.intl.string(P.t.L14NZN),
                    description: P.intl.string(P.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(t_, { alt: "", ariaHidden: !0 }),
                    ctaText: P.intl.string(P.t.jVcuVY),
                    onCtaClick: t ? f : g,
                },
                {
                    id: tS.CUSTOM_APP_ICONS_CARD_ID,
                    title: P.intl.string(P.t["GU+wqh"]),
                    description: P.intl.string(P.t["1uPk1Z"]),
                    primaryAsset: tZ,
                    ctaText: P.intl.string(P.t.y9TxXV),
                    onCtaClick: A,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            s = n ? 5 : 6;
        return e.splice(+!!n, 0, N), e.length > s && e.splice(s, e.length - s), e;
    }, [O, N, D, b, i, C, v, h, A, g, S, f, t, a, l, c]);
}
var tJ = n(355097),
    t0 = n(64514),
    t1 = n(121818),
    t2 =
        (((i = {}).BEST_OF_NITRO = "bestof"),
        (i.APPEARANCE_STYLE = "appearance"),
        (i.UPGRADES = "upgrades"),
        (i.VIP_EXTRAS = "vip"),
        i);
let t3 = [
    { id: "bestof", label: () => P.intl.string(P.t.q1u7nQ) },
    { id: "appearance", label: () => P.intl.string(P.t.CUnZkZ) },
    { id: "upgrades", label: () => P.intl.string(P.t.KC5q8v) },
    { id: "vip", label: () => P.intl.string(P.t.DjEAcv) },
];
var t6 = n(758495);
function t4(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, th.DP)(),
                t = (0, tg.X)("useFavoritesPerkCards"),
                n = (0, tI.Lh)(),
                i = (0, tT.N)(n)?.standard ?? null,
                { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, tE.A)({ scrollPosition: tJ._F.TRY_IT_OUT, analyticsLocations: a }),
                l = (0, s.useCallback)(() => {
                    (0, q.openUserSettings)($.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                u = (0, s.useCallback)(() => {
                    (0, q.openUserSettings)($.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                c = (0, s.useCallback)(() => {
                    (0, q.openUserSettings)($.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                d = (0, s.useCallback)(() => {
                    (0, tm.pX)(em.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, s.useCallback)(() => {
                    (0, q.openUserSettings)($.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                f = (0, tA.A)({ analyticsLocations: a }),
                h = (0, s.useCallback)(() => {
                    (0, q.openUserSettings)($.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, tp.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                m = tQ(),
                g = (0, s.useMemo)(() => m.map((e) => e?.id), [m]),
                A = (0, s.useMemo)(
                    () => [
                        {
                            id: tS.SERVER_BOOSTS_CARD_ID,
                            title: P.intl.formatToPlainString(P.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: P.intl.formatToPlainString(P.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: P.intl.string(P.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, r.jsx)(e8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tS.PROFILES_CARD_ID,
                            title: P.intl.string(P.t.xDRab3),
                            description: P.intl.string(P.t.yn6fWA),
                            ctaText: P.intl.string(P.t.jVcuVY),
                            onCtaClick: t ? f : o,
                            primaryAsset: (0, r.jsx)(e9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tS.HD_VIDEO_CARD_ID,
                            title: P.intl.string(P.t["/mQ5gg"]),
                            description: P.intl.string(P.t["7WwAXh"]),
                            primaryAsset: (0, r.jsx)(te, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tS.CLIENT_THEMES_CARD_ID,
                            title: P.intl.string(P.t.acc6h6),
                            description: P.intl.formatToPlainString(P.t.WQazjs, { themeCount: 20 }),
                            ctaText: P.intl.string(P.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: tX,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tS.MORE_EMOJIS_CARD_ID,
                            title: P.intl.string(P.t.D8vIDT),
                            description: P.intl.string(P.t.DRMecB),
                            primaryAsset: (0, r.jsx)(tn, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tS.LARGE_UPLOADS_CARD_ID,
                            title: P.intl.string(P.t.nL1WZV),
                            description: P.intl.formatToPlainString(P.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, r.jsx)(ti, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tS.CUSTOM_APP_ICONS_CARD_ID,
                            title: P.intl.string(P.t["GU+wqh"]),
                            description: P.intl.string(P.t["1uPk1Z"]),
                            ctaText: P.intl.string(P.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: tZ,
                            categories: ["appearance"],
                        },
                        {
                            id: tS.ENTRANCE_SOUNDS_CARD_ID,
                            title: P.intl.string(P.t.WJfCPi),
                            description: P.intl.string(P.t.liQKJR),
                            ctaText: P.intl.string(P.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tS.DISPLAY_NAME_STYLES_CARD_ID,
                            title: P.intl.string(P.t.OLtTrt),
                            description: P.intl.string(P.t["di/pXR"]),
                            onCtaClick: t ? f : h,
                            ctaText: P.intl.string(P.t.jVcuVY),
                            primaryAsset: tq,
                            categories: ["appearance"],
                        },
                        {
                            id: tS.CUSTOM_SOUNDS_CARD_ID,
                            title: P.intl.string(P.t["Cu/oFd"]),
                            description: P.intl.string(P.t.czj2aa),
                            primaryAsset: (0, r.jsx)(tr, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tS.SPECIAL_STICKERS_CARD_ID,
                            title: P.intl.string(P.t.MQoVeb),
                            description: P.intl.string(P.t.HGCLZX),
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                            categories: ["upgrades"],
                        },
                        {
                            id: tS.SUPER_REACTIONS_CARD_ID,
                            title: P.intl.string(P.t.qERvAA),
                            description: P.intl.string(P.t.WkUWzx),
                            primaryAsset: (0, r.jsx)(ts, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tS.VIDEO_BACKGROUNDS_CARD_ID,
                            title: P.intl.string(P.t.ssVDYQ),
                            description: P.intl.string(P.t.aUSRMa),
                            primaryAsset: (0, tf.M)(e) ? t0 : t1,
                            categories: ["upgrades"],
                        },
                        {
                            id: tS.EARLY_ACCESS_CARD_ID,
                            title: P.intl.string(P.t["g/KRY6"]),
                            description: P.intl.string(P.t.JzAmJc),
                            primaryAsset: (0, r.jsx)(ta, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tS.BADGE_CARD_ID,
                            title: P.intl.string(P.t.Bn3CtB),
                            description: P.intl.string(P.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, r.jsx)(tu, { color: to.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tS.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: P.intl.string(P.t["MTD+7w"]),
                            description: P.intl.string(P.t.Bhs0s6),
                            ctaText: P.intl.string(P.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, r.jsx)(tc, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tS.PERMADECOS_CARD_ID,
                            title: P.intl.string(P.t.L14NZN),
                            description: P.intl.string(P.t.eCZkAI),
                            primaryAsset: (0, r.jsx)(t_, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, i, o, l, u, c, d, _, h, f, t],
                );
            return (0, s.useMemo)(() => A.filter((e) => null != e && !g.includes(e.id)), [A, g]);
        })(),
        i = null != t ? n.find((e) => e?.id === t) : null,
        [a, o] = (0, s.useState)(i?.categories[0] ?? t2.BEST_OF_NITRO),
        l = (0, s.useMemo)(() => n.filter((e) => null != e && e.categories.includes(a)), [n, a]);
    return (0, r.jsxs)("div", {
        className: t6.uW,
        children: [
            (0, r.jsx)(L.D, { variant: "display-sm", className: t6.R_, children: P.intl.string(P.t["Uh3+CA"]) }),
            (0, r.jsx)(e4.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: o,
                className: t6.Lq,
                "aria-label": P.intl.string(P.t["Uh3+CA"]),
                children: t3.map((e) =>
                    (0, r.jsx)(e4.V.Item, { id: e.id, className: t6.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                e5.A,
                {
                    gap: 20,
                    className: t6.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(e7.S, { ...e, glowing: t === e.id, containerClassName: t6.Ui }, e.id);
                    }),
                },
                a,
            ),
        ],
    });
}
var t5 = n(254748),
    t7 = n(672193);
function t8(e) {
    let { glowingPerkId: t = null } = e,
        n = tQ();
    return (0, r.jsx)(t5.A, {
        sectionClassName: t7.uW,
        heading: (0, r.jsx)(L.D, { variant: "display-sm", className: t7.R_, children: P.intl.string(P.t.Aw5DRm) }),
        grid: (0, r.jsx)(r.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, r.jsx)(
                    e7.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: o()(t7.Nr, { [t7.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var t9 = n(549384),
    ne = n(994763),
    nt = n(946062),
    nn = n(288894);
let ni = "section",
    nr = "perk",
    ns = (e) => {
        let { userId: t } = e,
            n = (0, v.ds)(),
            i = (0, m.l)("PremiumSubscriberHome"),
            a = (0, l.zy)();
        s.useEffect(() => {
            h.h.wait(async () => {
                let e = [(0, I.Ay)()];
                null != t && e.push((0, N.A)(t)), await Promise.all(e);
            });
        }, [t]),
            s.useEffect(() => {
                W(!0);
            }, []),
            (0, R.j)(),
            (0, A.P)(g.b);
        let L = s.useRef(null),
            w = s.useRef(null),
            M = (0, u.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
            { isReady: x, programReward: k, isEligible: G } = (0, T.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: F,
                glowingSectionId: V,
                glowingPerkId: B,
                scrollBlock: H,
                scrollInline: j,
            } = s.useMemo(() => {
                let e = new URLSearchParams(a.search),
                    t = e.get(nr),
                    n = e.get(ni);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [a.search]);
        (0, ne.z)(F ?? "", null != F, H, j);
        let [Y, W] = s.useState(!1),
            K = (0, O.p)(),
            z = s.useRef(null),
            [$, q] = s.useState(!1),
            Z = null != K && null != M && M.status === em.Dmq.CANCELED,
            X = (0, b.iU)(ez.gD.PREMIUM_MONTH_TIER_2, K, M),
            Q = !$ && Z,
            { analyticsLocations: J } = (0, E.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ee, et] = s.useState(!1);
        return null != (0, u.bG)([S.A], () => (null != t ? S.A.getUserProfile(t) : null)) && (x || null != k)
            ? (0, r.jsxs)(_.Gt, {
                  className: nt.xW,
                  ref: L,
                  children: [
                      (0, r.jsx)(f.h, {
                          color: "nitro-pink",
                          className: o()(nt.kL, nt.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, r.jsxs)(E.f5, {
                              value: J,
                              children: [
                                  (0, r.jsx)(c.L, {
                                      innerRef: z,
                                      onChange: (e) => q(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, r.jsx)(eJ, {
                                          buttonVisibilityRef: z,
                                          className: nt.v1,
                                          userDiscountOffer: K,
                                          discountedPrice: X,
                                      }),
                                  }),
                                  (0, r.jsx)(D.A, { glowingSectionId: V }),
                                  (0, r.jsx)(t8, { glowingPerkId: B }),
                                  null != k &&
                                      G &&
                                      !i &&
                                      (0, r.jsx)(t9.A, { location: p.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, r.jsx)(t4, { glowingPerkId: B }),
                                  (0, r.jsx)(U, {
                                      className: nt.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: em.liQ.NITRO_HOME, section: em.JJy.GIFT_BANNER },
                                  }),
                                  (0, r.jsx)("div", { className: nt.hz }),
                                  (0, r.jsx)(c.L, {
                                      innerRef: w,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (C.default.track(em.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: J,
                                              }),
                                              et(!0));
                                      },
                                      children: (0, r.jsx)("div", { ref: w, className: nt._Z }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: nn,
                                      className: nt.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: P.intl.string(P.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      Z &&
                          null != X &&
                          (0, r.jsx)(e6, {
                              isVisible: Q && Y,
                              premiumSubscription: M,
                              churnDiscountOffer: K,
                              discountedPrice: X,
                          }),
                  ],
              })
            : (0, r.jsx)("div", { className: o()(nt.kL, nt.Lq), children: (0, r.jsx)(d.y, {}) });
    };
