"use strict";
n.d(t, { Ay: () => nr, WU: () => ni, x6: () => nn }), n(321073), n(323874), n(14289), n(35956);
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
    m = n(726649),
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
    b = n(327783),
    D = n(534514),
    L = n(834730),
    w = n(65470),
    M = n(375708),
    P = n(797221);
let x = (e) => {
    let { className: t, location: n, analyticsLocation: i } = e,
        { analyticsLocations: s } = (0, E.Ay)(n);
    return (0, r.jsx)(E.f5, {
        value: s,
        children: (0, r.jsxs)(f.h, {
            className: o()(P.kL, P.pm, t),
            color: "purple",
            children: [
                (0, r.jsxs)("div", {
                    className: P.FS,
                    children: [
                        (0, r.jsx)(D.D, {
                            variant: "heading-xxl/bold",
                            className: P.R_,
                            children: M.intl.string(M.t.Ve9Ge6),
                        }),
                        (0, r.jsx)(L.E, { variant: "text-md/medium", children: M.intl.string(M.t.yQ06u1) }),
                        (0, r.jsx)("div", {
                            className: P.SB,
                            children: (0, r.jsx)(w.A, {
                                buttonTextOverride: M.intl.string(M.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: i,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: P._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var U = n(877624);
let k =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function G(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: k,
        srcSet: `${k} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var F = n(502572),
    V = n(192308),
    B = n(331322),
    H = n(403581),
    j = n(821609),
    Y = n(775602),
    W = n(366999),
    K = n(531260),
    z = n(780964),
    $ = n(858897),
    q = n(786300),
    Z = n(975571),
    X = n(927578),
    Q = n(960851),
    J = n(89366),
    ee = n(422936),
    et = n(234419),
    en = n(549996),
    ei = n(371764),
    er = n(949964),
    es = n(103411),
    ea = n(778712),
    eo = n(97808),
    el = n(590251),
    eu = n(144165),
    ec = n(854627),
    ed = n(427262),
    e_ = n(326084),
    ef = n(851746),
    eh = n(664654),
    ep = n(212737),
    eE = n(652215),
    em = n(849812);
let eg = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: i } = (0, ec.A)({ userId: t.id, size: ea._3.SIZE_24 });
        return (0, r.jsx)(
            eo.eu,
            { className: em.bj, src: n, "aria-label": (0, ed.mG)(t), size: ea._3.SIZE_24, ...i },
            t.id,
        );
    },
    eA = (e) => {
        let { slotIndex: t } = e;
        return (0, r.jsx)("div", { className: em.p, children: t });
    },
    eI = (e) => {
        let { referralSentUsers: t } = e;
        return (0, r.jsx)("div", {
            className: em.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < eh.Z; n++)
                    if (t?.[n] !== void 0) {
                        let i = (0, r.jsx)(eg, { user: t[n] }, t[n].id);
                        e.push(i);
                    } else {
                        let t = (0, r.jsx)(eA, { slotIndex: n + 1 }, n);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    eT = (e) => {
        let { nReferralsSent: t } = e;
        return (0, r.jsx)(el.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: em.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: em.e0,
            overlayClassName: t === eh.Z ? em.ys : void 0,
            children: (0, r.jsx)(eu._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    eS = (e) => {
        let { className: t } = e,
            { referralSentUsers: i } = (0, eh.J)(),
            s = (0, u.bG)([ef.A], () => ef.A.getRecipientStatus()),
            a = (0, u.bG)([ef.A], () => ef.A.getHasEligibleFriends()),
            l = s.size === eh.Z && [...s.values()].every((e) => e === e_.aK.REDEEMED),
            c = s.size === eh.Z;
        return (0, r.jsxs)("div", {
            className: o()(em.kL, t),
            children: [
                (0, r.jsx)("div", { className: em.G3, children: (0, r.jsx)(eT, { nReferralsSent: s.size }) }),
                (0, r.jsxs)("div", {
                    className: em.IH,
                    children: [
                        (0, r.jsx)(eI, { referralSentUsers: i }),
                        (0, r.jsxs)("div", {
                            className: em.n4,
                            children: [
                                (0, r.jsx)(D.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: M.intl.string(M.t.USo4s7),
                                }),
                                (0, r.jsx)(L.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === a
                                            ? M.intl.format(M.t["zWhX/Q"], {
                                                  helpdeskArticle: Z.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                              })
                                            : i.length === eh.Z
                                              ? !0 === l
                                                  ? M.intl.format(M.t["1aEjsH"], {
                                                        helpdeskArticle: Z.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : M.intl.format(M.t["+u3AOO"], {
                                                        helpdeskArticle: Z.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : M.intl.format(M.t["omMr+V"], {
                                                    helpdeskArticle: Z.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(j.$, {
                            variant: "primary",
                            disabled: !1 === a || !0 === c,
                            text: M.intl.string(M.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: i } = e;
                                    y.default.track(eE.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: i,
                                    }),
                                        (0, V.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                            return (n) => (0, r.jsx)(e, { ...n, startingScreen: t });
                                        });
                                })({
                                    startingScreen: ep.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var eN = n(792656),
    ey = n(989349),
    eC = n.n(ey),
    ev = n(496431),
    eO = n(116689);
let eR = (e) => {
    let { expiresAt: t, className: n } = e,
        i = (0, ev.A)(eC()(t).toDate(), 1e3);
    if (null == i) return null;
    let { days: s, hours: a, minutes: l, seconds: u } = i,
        c = [
            { unitValue: s, unitType: "days" },
            { unitValue: a, unitType: "hours" },
            { unitValue: l, unitType: "minutes" },
            { unitValue: u, unitType: "seconds" },
        ];
    return (0, r.jsxs)("div", {
        className: o()(eO.Xl, n),
        children: [
            (0, r.jsx)(L.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: M.intl.string(M.t["/ARFVE"]),
            }),
            (0, r.jsx)("div", {
                className: eO.$R,
                children: c.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [i, s] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)(
                                    "div",
                                    {
                                        className: eO.bh,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: eO.kB,
                                                children: [
                                                    (0, r.jsx)("div", {
                                                        className: eO.B2,
                                                        children: (0, r.jsx)(L.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: eO.B2,
                                                        children: (0, r.jsx)(L.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, r.jsx)(L.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return M.intl.string(M.t.ixASa2);
                                                        case "hours":
                                                            return M.intl.string(M.t["8sNvNn"]);
                                                        case "minutes":
                                                            return M.intl.string(M.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return M.intl.string(M.t.JhaiLW);
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
                                    (0, r.jsx)(L.E, {
                                        className: eO.cV,
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
var eb = n(473702),
    eD = n(505559),
    eL = n(103733),
    ew = n(702841),
    eM = n(608416),
    eP = n(384601),
    ex = n(447764),
    eU = n(180894);
let ek = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, ew.bG)([Y.A], () => Y.A.useReducedMotion);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: ex.BI,
                children: (0, r.jsx)(eM.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eM.$G },
                    yAxisAnimationData: { range: 20, duration: eM.Mp, path: eM.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: eM.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, r.jsx)("img", { src: eU.A, alt: "", className: ex.Q }),
                }),
            }),
            (0, r.jsx)(eP.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: ex.Gj,
                keyContainerClassName: ex.FV,
                starContainerClassName: ex.E1,
                hammerAssetClassName: ex.Wv,
                keyAssetClassName: ex.rs,
                starAssetClassName: ex.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var eG = n(218199);
let eF = (e) => {
    let { className: t, color: n = "text-strong", responsive: i = !0, children: s } = e;
    return (0, r.jsx)(D.D, { className: o()(eG.w, t, i && eG.n), variant: "display-md", color: n, children: s });
};
var eV = n(725807),
    eB = n(774774),
    eH = n(975916);
let ej = () => {
    let e = { section: eE.JJy.REVERSE_TRIAL_BANNER };
    return (0, r.jsxs)("div", {
        className: eH.vK,
        children: [
            (0, r.jsx)(eB.e4, { text: M.intl.string(M.t.qYKftX), className: eH.Io }),
            (0, r.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: eH._u,
            }),
            (0, r.jsx)("div", {
                className: eH.IP,
                children: (0, r.jsx)(L.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: M.intl.format(M.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, r.jsx)(eV.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: eH.aA,
                shinyButtonClassName: eH.Xp,
            }),
        ],
    });
};
var eY = n(18671);
let eW = () => {
    let e = (0, ew.bG)([Y.A], () => Y.A.useReducedMotion);
    return (0, r.jsx)(eP.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: eY.cI,
        hammerContainerClassName: eY.qg,
        keyContainerClassName: eY.h2,
        boltContainerClassName: eY.Bz,
        starAssetClassName: eY.ks,
        hammerAssetClassName: eY.GY,
        keyAssetClassName: eY.p4,
        boltAssetClassName: eY.vy,
    });
};
var eK = n(788868),
    ez = n(97584);
let e$ = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: i } = e,
            s = (0, C.Zb)(t);
        return (0, r.jsx)("div", {
            className: o()(ez.kL, n),
            ref: i,
            children: (0, r.jsxs)("div", {
                className: ez.ap,
                children: [
                    (0, r.jsxs)(B.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, r.jsx)(eD.A, { text: M.intl.string(M.t.yhldRB) }),
                            (0, r.jsxs)(B.B, {
                                align: "start",
                                gap: 12,
                                className: ez.rG,
                                children: [
                                    (0, r.jsx)(eF, { children: M.intl.format(M.t.FwjP6W, { days: s }) }),
                                    (0, r.jsx)(L.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: M.intl.string(M.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, r.jsxs)(B.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, r.jsx)(eN.A, {
                                        size: "md",
                                        buttonTextOverride: M.intl.string(M.t["2+luBl"]),
                                        iconOverride: H.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, r.jsx)(j.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: M.intl.string(M.t.Af7ye6),
                                        onClick: () => (0, $.openUserSettings)(z.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: ez.Hk,
                        children: [(0, r.jsx)(G, { alt: "", width: "100%", height: "auto" }), (0, r.jsx)(eW, {})],
                    }),
                ],
            }),
        });
    },
    eq = (e) => {
        let { className: t, isEligibleForBogoPromotion: i, isInReverseTrial: s, shouldShowReferralProgressBar: a } = e,
            {
                headingText: l,
                headingTop: c,
                showPill: d,
                userDiscountOffer: _,
                discountedPrice: f,
                buttonVisibilityRef: h,
            } = eX(),
            { analyticsLocations: m } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            g = (0, en.c)(U.C.MARKETING_PAGE_BANNER),
            A = null;
        null != g && "marketingPageBanner" === g.properties.properties.oneofKind
            ? (A = (0, r.jsx)(ei.x, {
                  componentId: g.id,
                  promotionBannerMarketingComponentFields: g.properties.properties.marketingPageBanner,
              }))
            : i
              ? (A = (0, r.jsx)(er.A, { variant: er.c.SUBSCRIBER_HOME }))
              : s
                ? (A = (0, r.jsx)(ej, {}))
                : a && (A = (0, r.jsx)(eS, {}));
        let I = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            T = null != I && I.status === eE.Dmq.CANCELED && null != _,
            S = (0, et.V)(),
            y = (0, ee.O)(),
            C = (0, R.U9)(y, eK.pe.TIER_2) ? eK.pe.TIER_2 : void 0,
            v = null != I && I.status !== eE.Dmq.ACCOUNT_HOLD && I.hasAnyPremiumNitro,
            O = (0, K.A)(),
            b = O.isFractionalPremiumActive && !v && null == A && !T,
            D = (0, u.bG)([Y.A], () => Y.A.useReducedMotion),
            { visibilityPercentageRef: P, visibilityPercentage: x } = (0, eL.U)(!D);
        return s
            ? (0, r.jsx)(e$, { fpEndsAt: O.currentEntitlementEndsAt, className: t, buttonVisibilityRef: h })
            : (0, r.jsx)("div", {
                  className: o()(ez.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: h,
                  children: (0, r.jsxs)("div", {
                      className: ez.Qs,
                      ref: P,
                      children: [
                          d && c,
                          (0, r.jsxs)("div", {
                              className: ez.N1,
                              children: [
                                  (0, r.jsx)(ek, { containerVisibilityPercentage: x }),
                                  T &&
                                      null != _.expires_at &&
                                      (0, r.jsx)(eR, { expiresAt: _.expires_at, className: ez.IZ }),
                                  (0, r.jsx)(eF, {
                                      children: T ? M.intl.format(M.t["3yZP0G"], { percent: _.discount.amount }) : l,
                                  }),
                                  T &&
                                      null != f &&
                                      (0, r.jsx)(L.E, {
                                          className: ez.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: M.intl.format(M.t["3Q4wCy"], {
                                              discountedPrice: f,
                                              billingPeriod: (0, X.Ke)(_.discount.user_usage_limit_interval),
                                              numMonths: _.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, r.jsxs)("div", {
                              className: b || T ? ez.UJ : void 0,
                              children: [
                                  b &&
                                      (0, r.jsx)(eN.A, {
                                          size: "md",
                                          hasActivePromotion: !!i,
                                          subscriptionTier: S?.subscription_trial?.sku_id ?? C,
                                      }),
                                  T &&
                                      (0, r.jsx)(j.$, {
                                          variant: "expressive",
                                          icon: H.t,
                                          size: "md",
                                          text: M.intl.string(M.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = eb.g.CONFIRM_DISCOUNT),
                                                  void (0, V.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("34218"),
                                                              n.e("4469"),
                                                              n.e("19051"),
                                                              n.e("7293"),
                                                              n.e("31483"),
                                                              n.e("90261"),
                                                              n.e("16933"),
                                                              n.e("6305"),
                                                              n.e("83721"),
                                                              n.e("26032"),
                                                              n.e("93918"),
                                                              n.e("68495"),
                                                              n.e("18125"),
                                                              n.e("65420"),
                                                              n.e("22513"),
                                                              n.e("83004"),
                                                              n.e("13498"),
                                                              n.e("10191"),
                                                              n.e("15251"),
                                                              n.e("57767"),
                                                              n.e("71934"),
                                                              n.e("67397"),
                                                              n.e("7053"),
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
                                                              n.e("95657"),
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
                                  (0, r.jsx)(w.A, {
                                      variant: b || T ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: M.intl.string(M.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          A,
                      ],
                  }),
              });
    },
    [eZ, eX] = (0, q.A)(),
    eQ = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: i, discountedPrice: s } = e,
            { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_HERO_CTA),
            o = (0, C.ds)(),
            l = (0, Q.cg)(),
            u = (0, J.QQ)(),
            c = M.intl.string(M.t.qYKftX),
            d = (0, es.m)(),
            _ = M.intl.string(M.t.ifwQZb),
            { fractionalState: f, endsAt: h } = (0, K.A)(),
            m = (0, W.Ay)(h, W.yE.CREDITS_ENDS_IN),
            g = null;
        if (f === eK.xc.NONE || o) g = (0, r.jsx)(eD.A, { text: c });
        else {
            u = !0;
            let e = M.intl.format(M.t["yR+oDD"], {
                helpCenterLink: Z.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            g = (0, r.jsx)(F.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: ez.YL,
                position: "right",
                children: (e) =>
                    (0, r.jsx)("div", {
                        ...e,
                        className: ez.V_,
                        children: (0, r.jsx)("div", { className: ez.eL, children: (0, r.jsx)(eD.A, { text: m }) }),
                    }),
            });
        }
        return (0, r.jsx)(E.f5, {
            value: a,
            children: (0, r.jsx)(eZ.Provider, {
                value: {
                    headingText: _,
                    headingTop: g,
                    showPill: u,
                    userDiscountOffer: i,
                    discountedPrice: s,
                    buttonVisibilityRef: n,
                },
                children: (0, r.jsx)(eq, {
                    className: t,
                    isEligibleForBogoPromotion: l,
                    isInReverseTrial: o,
                    shouldShowReferralProgressBar: d,
                }),
            }),
        });
    };
var eJ = n(785651),
    e0 = n(717421),
    e1 = n(98812),
    e2 = n(67423);
let e3 = function (e) {
    let { isVisible: t, premiumSubscription: i, churnDiscountOffer: s, discountedPrice: a } = e,
        { analyticsLocations: l } = (0, E.Ay)(p.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        u = (0, e0.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, r.jsx)(eJ.animated.div, {
        className: o()(e1.iE, { [e1.q4]: !t }),
        style: u,
        children: (0, r.jsxs)("div", {
            className: e1.iJ,
            children: [
                (0, r.jsx)("img", { alt: "", src: e2, className: e1.oU }),
                (0, r.jsxs)("div", {
                    className: e1.iQ,
                    children: [
                        (0, r.jsx)(D.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: M.intl.format(M.t["3yZP0G"], { percent: s.discount.amount }),
                        }),
                        (0, r.jsx)(L.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: M.intl.format(M.t["3Q4wCy"], {
                                numMonths: s.discount.user_usage_limit,
                                discountedPrice: a,
                                billingPeriod: (0, X.Ke)(s.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)(j.$, {
                    variant: "expressive",
                    icon: H.t,
                    size: "md",
                    text: M.intl.string(M.t.zrCzVB),
                    onClick: () =>
                        void (0, V.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                n.e("34218"),
                                n.e("4469"),
                                n.e("19051"),
                                n.e("7293"),
                                n.e("31483"),
                                n.e("90261"),
                                n.e("16933"),
                                n.e("6305"),
                                n.e("83721"),
                                n.e("26032"),
                                n.e("93918"),
                                n.e("68495"),
                                n.e("18125"),
                                n.e("65420"),
                                n.e("22513"),
                                n.e("83004"),
                                n.e("13498"),
                                n.e("10191"),
                                n.e("15251"),
                                n.e("57767"),
                                n.e("71934"),
                                n.e("67397"),
                                n.e("7053"),
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
                                n.e("95657"),
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
                                    initialStep: eb.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var e6 = n(761508),
    e4 = n(449543),
    e5 = n(744064);
function e7(e) {
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
function e8(e) {
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
function e9(e) {
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
var te = n(345394);
function tt(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: te.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
function tn(e) {
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
function ti(e) {
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
function tr(e) {
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
function ts(e) {
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
var ta = n(661531),
    to = n(996682);
function tl(e) {
    let {
        color: t = ta.A.colors.ICON_STRONG,
        "aria-label": n,
        "aria-hidden": i,
        role: s,
        width: a = 100,
        height: o = 80,
    } = e;
    return (0, r.jsxs)("svg", {
        ...(0, to.A)({ "aria-label": n, "aria-hidden": i, role: s }),
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
function tu(e) {
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
var tc = n(78701);
function td(e) {
    let { alt: t, ariaLabel: n, ariaHidden: i, role: s, width: a = 288, height: o = 192 } = e;
    return (0, r.jsx)("img", {
        style: { width: a, height: o },
        src: tc.A,
        alt: t,
        "aria-label": n,
        "aria-hidden": i,
        role: s ?? "img",
    });
}
var t_ = n(462887),
    tf = n(736653),
    th = n(259065),
    tp = n(206835),
    tE = n(976860),
    tm = n(591179),
    tg = n(462463),
    tA = n(878784),
    tI = n(425713),
    tT = n(920050),
    tS = n(975807),
    tN = n(562819),
    ty = n(793943),
    tC = n(31502),
    tv = n(95035),
    tO = n(532794),
    tR = n(245853),
    tb = n(39423),
    tD = n(892227),
    tL = n(81466),
    tw = n(318254),
    tM = n(490285),
    tP = n(875679);
let tx = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, I.F)({ location: "NitroOrbsWhatsNewCardFooter" });
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
                                (0, r.jsx)(tL.C, { size: "sm", color: ta.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(L.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: M.intl.string(tM.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, r.jsx)(L.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: M.intl.format(tM.default.xedPIb, { days: n }),
                        }),
                    ],
                }),
            null != n && t.total_rewarded_from_program > 0 && (0, r.jsx)("div", { className: tP.yF }),
            t.total_rewarded_from_program > 0 &&
                (0, r.jsxs)("div", {
                    className: tP.nM,
                    children: [
                        (0, r.jsxs)("div", {
                            className: tP.Pf,
                            children: [
                                (0, r.jsx)(tw.C, { size: "sm", color: ta.A.colors.TEXT_DEFAULT }),
                                (0, r.jsx)(L.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: M.intl.string(tM.default.F7Bhsg),
                                }),
                            ],
                        }),
                        (0, r.jsx)(L.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: M.intl.format(tM.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
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
        t = (0, tm.X)("useWhatsNewPerkCards"),
        i = (0, tb.O9)(),
        { logitechCard: a, steelseriesCard: l } = (0, tU.A)(),
        c = (0, tU.S)(),
        d = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
        _ = d?.hasActiveTrial ?? !1,
        f = (0, tg.A)({ analyticsLocations: e }),
        h = (0, s.useCallback)(() => {
            (0, $.openUserSettings)(z.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, th.L)({ analyticsLocations: e }),
            );
        }, [e]),
        m = (0, s.useCallback)(() => {
            (0, $.openUserSettings)(z.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tN.L)({ analyticsLocations: e }),
            );
        }, [e]),
        g = (0, s.useCallback)(() => {
            (0, $.openUserSettings)(z.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        A = () => {
            (0, tS.A)(tj.TE);
        },
        T = (0, s.useCallback)(() => {
            _
                ? (0, V.openModalLazy)(async () => {
                      let { default: e } = await n.e("99709").then(n.bind(n, 516044));
                      return (t) => (0, r.jsx)(e, { ...t });
                  })
                : (0, tO.A)({
                      subscriptionTier: eK.pe.TIER_2,
                      initialPlanId: eK.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, _]),
        S = (function (e) {
            let { fractionalState: t } = (0, K.A)(),
                n = t === eK.xc.FP_ONLY,
                i = (0, tA.$F)(),
                r = (0, tA.Xb)(),
                a = i?.status === tA.Wo.UPCOMING || n,
                l = (0, tI.N)(i?.id),
                u = (function () {
                    let e = (0, tA.$F)(),
                        t = (0, tk.P)(),
                        n = (0, tA.Xb)();
                    if (null == e || null == t || null == n) return null;
                    let i = eC()(),
                        r = eC()(n),
                        s = e.status === tA.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        a = t.tenureReqNumMonths,
                        o = r.clone().add(s, "months"),
                        l = r.clone().add(a, "months").diff(o);
                    return Math.max(0, Math.min(1, (i.diff(o) - 864e5) / l));
                })(),
                c = (0, tF.t)(),
                d = (0, tk.P)();
            return (0, s.useMemo)(() => {
                let t,
                    s = null != d ? M.intl.string(d.nameUnformattedNitro) : void 0;
                return (
                    null == i
                        ? n && (t = (0, tG.T)(eK.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                        : (t =
                              i.status === tA.Wo.UPCOMING
                                  ? M.intl.formatToPlainString(M.t.a1eKDi, { days: c?.days ?? 0 })
                                  : ((function (e, t) {
                                        if (null != e && null != t) {
                                            if (e.days <= 30)
                                                return M.intl.formatToPlainString(M.t.NEXoaI, {
                                                    days: e.days,
                                                    nextBadgeName: t,
                                                });
                                            if (e.months <= 3)
                                                return M.intl.formatToPlainString(M.t.KDV8oD, {
                                                    months: e.months,
                                                    nextBadgeName: t,
                                                });
                                        }
                                    })(c, s) ??
                                    (0, tG.T)(i.id, i.tenureReqNumMonths) ??
                                    void 0)),
                    {
                        id: tT.TENURE_BADGE_CARD_ID,
                        title: null != i ? M.intl.string(i.nameUnformattedNitro) : n ? M.intl.string(M.t.tx9Fvw) : "",
                        pillText: M.intl.string(M.t["jyYgZ+"]),
                        primaryAsset: null != l ? (a ? l.standard : l.ambientLarge) : n ? tH : null,
                        primaryAssetClassName: o()(tB.p, { [tB.n]: a }),
                        caption: null != r ? M.intl.formatToPlainString(M.t.Hu4jfi, { date: new Date(r) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: u ?? void 0,
                        ctaText: M.intl.string(M.t.jVcuVY),
                        onCtaClick: () => (0, tV.D)({ analyticsLocations: e }),
                    }
                );
            }, [i, l, a, r, u, n, c, d, e]);
        })(e),
        { shouldShowBonusOrbsUX: y, multiplier: C } = (0, tR.Dl)(tW.rE.NITRO_HOME_MARKETING),
        v = (0, tC.l)("useWhatsNewPerkCards"),
        { isEligible: O, programReward: R } = (0, I.F)({ location: "useWhatsNewPerkCards" }),
        b = O && null != R && null != R.reward_amount && R.reward_amount > 0;
    return (0, s.useMemo)(() => {
        let e = [
                c ? null : a,
                c ? null : l,
                b
                    ? {
                          id: tT.NITRO_ORBS_REWARDS_CARD_ID,
                          title: M.intl.string(tM.default.hx5AFp),
                          description: M.intl.format(tM.default["Pz+6Ix"], { orbsCount: R.reward_amount }),
                          primaryAsset: "/assets/8f530451dce1ccc0.svg",
                          primaryAssetClassName: o()(tz.lH, tz.yK),
                          footerContent: (0, r.jsx)(tx, {}),
                          ctaText: M.intl.string(tM.default.BxjHiu),
                          onCtaClick: () => (0, tE.pX)(eE.BVt.COLLECTIBLES_SHOP_WITH_TAB(tY.G2.ORBS)),
                      }
                    : null,
                y
                    ? {
                          id: tT.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: M.intl.string(M.t.F2MShO),
                          description: M.intl.format(M.t.NpUfej, { bonusOrbMultiplier: C }),
                          pillText: v ? void 0 : M.intl.string(M.t.oW0eUd),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: M.intl.string(M.t.jVcuVY),
                          onCtaClick: () => (0, tE.pX)(eE.BVt.QUEST_HOME),
                          primaryAssetClassName: tz.Nf,
                      }
                    : null,
                i
                    ? {
                          id: tT.PREMIUM_GROUP_CARD_ID,
                          title: M.intl.string(tK.default.YkvksF),
                          description: (0, r.jsxs)(r.Fragment, {
                              children: [
                                  M.intl.formatToPlainString(tK.default.JlyGQj, {
                                      totalSeats: tj.aw,
                                      premiumGroupProductName: (0, tj.DP)(),
                                  }),
                                  (0, r.jsx)("div", {
                                      className: tz.LF,
                                      children: (0, r.jsx)(tv.A, {
                                          onClick: A,
                                          children: M.intl.string(tK.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: M.intl.string(M.t.oW0eUd),
                          primaryAsset: t$,
                          ctaIcon: H.t,
                          ctaIconPosition: "start",
                          ctaText: M.intl.string(M.t.IJI7yk),
                          onCtaClick: T,
                      }
                    : null,
                {
                    id: tT.DISPLAY_NAME_STYLES_CARD_ID,
                    title: M.intl.string(M.t.OLtTrt),
                    description: M.intl.string(M.t["di/pXR"]),
                    onCtaClick: t ? f : h,
                    ctaText: M.intl.string(M.t.jVcuVY),
                    primaryAsset: tq,
                },
                {
                    id: tT.CLIENT_THEMES_CARD_ID,
                    title: M.intl.string(M.t.acc6h6),
                    description: M.intl.formatToPlainString(M.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: tX,
                    ctaText: M.intl.string(M.t.jVcuVY),
                    onCtaClick: () => {
                        (0, ty.nf)(ty.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tT.PERMADECOS_CARD_ID,
                    title: M.intl.string(M.t.L14NZN),
                    description: M.intl.string(M.t.eCZkAI),
                    primaryAsset: (0, r.jsx)(td, { alt: "", ariaHidden: !0 }),
                    ctaText: M.intl.string(M.t.jVcuVY),
                    onCtaClick: t ? f : m,
                },
                {
                    id: tT.CUSTOM_APP_ICONS_CARD_ID,
                    title: M.intl.string(M.t["GU+wqh"]),
                    description: M.intl.string(M.t["1uPk1Z"]),
                    primaryAsset: tZ,
                    ctaText: M.intl.string(M.t.y9TxXV),
                    onCtaClick: g,
                },
            ],
            n = (e = e.filter((e) => null != e))[0].featured,
            s = n ? 5 : 6;
        return e.splice(+!!n, 0, S), e.length > s && e.splice(s, e.length - s), e;
    }, [v, S, b, R, i, y, C, h, g, m, T, f, t, a, l, c]);
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
    { id: "bestof", label: () => M.intl.string(M.t.q1u7nQ) },
    { id: "appearance", label: () => M.intl.string(M.t.CUnZkZ) },
    { id: "upgrades", label: () => M.intl.string(M.t.KC5q8v) },
    { id: "vip", label: () => M.intl.string(M.t.DjEAcv) },
];
var t6 = n(758495);
function t4(e) {
    let { glowingPerkId: t = null } = e,
        n = (function () {
            let e = (0, tf.DP)(),
                t = (0, tm.X)("useFavoritesPerkCards"),
                n = (0, tA.Lh)(),
                i = (0, tI.N)(n)?.standard ?? null,
                { analyticsLocations: a } = (0, E.Ay)(p.A.PREMIUM_MARKETING_PERK_CARD),
                o = (0, tp.A)({ scrollPosition: tJ._F.TRY_IT_OUT, analyticsLocations: a }),
                l = (0, s.useCallback)(() => {
                    (0, $.openUserSettings)(z.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: a });
                }, [a]),
                u = (0, s.useCallback)(() => {
                    (0, $.openUserSettings)(z.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: a });
                }, [a]),
                c = (0, s.useCallback)(() => {
                    (0, $.openUserSettings)(z.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: a });
                }, [a]),
                d = (0, s.useCallback)(() => {
                    (0, tE.pX)(eE.BVt.COLLECTIBLES_SHOP);
                }, []),
                _ = (0, s.useCallback)(() => {
                    (0, $.openUserSettings)(z.X.SOUNDBOARD_CATEGORY, { analyticsLocations: a });
                }, [a]),
                f = (0, tg.A)({ analyticsLocations: a }),
                h = (0, s.useCallback)(() => {
                    (0, $.openUserSettings)(z.X.PROFILE_PANEL, { analyticsLocations: a }, () =>
                        (0, th.L)({ analyticsLocations: a }),
                    );
                }, [a]),
                m = tQ(),
                g = (0, s.useMemo)(() => m.map((e) => e?.id), [m]),
                A = (0, s.useMemo)(
                    () => [
                        {
                            id: tT.SERVER_BOOSTS_CARD_ID,
                            title: M.intl.formatToPlainString(M.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: M.intl.formatToPlainString(M.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: M.intl.string(M.t.jVcuVY),
                            onCtaClick: u,
                            primaryAsset: (0, r.jsx)(e7, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tT.PROFILES_CARD_ID,
                            title: M.intl.string(M.t.xDRab3),
                            description: M.intl.string(M.t.yn6fWA),
                            ctaText: M.intl.string(M.t.jVcuVY),
                            onCtaClick: t ? f : o,
                            primaryAsset: (0, r.jsx)(e8, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tT.HD_VIDEO_CARD_ID,
                            title: M.intl.string(M.t["/mQ5gg"]),
                            description: M.intl.string(M.t["7WwAXh"]),
                            primaryAsset: (0, r.jsx)(e9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tT.CLIENT_THEMES_CARD_ID,
                            title: M.intl.string(M.t.acc6h6),
                            description: M.intl.formatToPlainString(M.t.WQazjs, { themeCount: 20 }),
                            ctaText: M.intl.string(M.t.jVcuVY),
                            onCtaClick: l,
                            primaryAsset: tX,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tT.MORE_EMOJIS_CARD_ID,
                            title: M.intl.string(M.t.D8vIDT),
                            description: M.intl.string(M.t.DRMecB),
                            primaryAsset: (0, r.jsx)(tt, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tT.LARGE_UPLOADS_CARD_ID,
                            title: M.intl.string(M.t.nL1WZV),
                            description: M.intl.formatToPlainString(M.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, r.jsx)(tn, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tT.CUSTOM_APP_ICONS_CARD_ID,
                            title: M.intl.string(M.t["GU+wqh"]),
                            description: M.intl.string(M.t["1uPk1Z"]),
                            ctaText: M.intl.string(M.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: tZ,
                            categories: ["appearance"],
                        },
                        {
                            id: tT.ENTRANCE_SOUNDS_CARD_ID,
                            title: M.intl.string(M.t.WJfCPi),
                            description: M.intl.string(M.t.liQKJR),
                            ctaText: M.intl.string(M.t.jVcuVY),
                            onCtaClick: _,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tT.DISPLAY_NAME_STYLES_CARD_ID,
                            title: M.intl.string(M.t.OLtTrt),
                            description: M.intl.string(M.t["di/pXR"]),
                            onCtaClick: t ? f : h,
                            ctaText: M.intl.string(M.t.jVcuVY),
                            primaryAsset: tq,
                            categories: ["appearance"],
                        },
                        {
                            id: tT.CUSTOM_SOUNDS_CARD_ID,
                            title: M.intl.string(M.t["Cu/oFd"]),
                            description: M.intl.string(M.t.czj2aa),
                            primaryAsset: (0, r.jsx)(ti, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tT.SPECIAL_STICKERS_CARD_ID,
                            title: M.intl.string(M.t.MQoVeb),
                            description: M.intl.string(M.t.HGCLZX),
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                            categories: ["upgrades"],
                        },
                        {
                            id: tT.SUPER_REACTIONS_CARD_ID,
                            title: M.intl.string(M.t.qERvAA),
                            description: M.intl.string(M.t.WkUWzx),
                            primaryAsset: (0, r.jsx)(tr, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tT.VIDEO_BACKGROUNDS_CARD_ID,
                            title: M.intl.string(M.t.ssVDYQ),
                            description: M.intl.string(M.t.aUSRMa),
                            primaryAsset: (0, t_.M)(e) ? t0 : t1,
                            categories: ["upgrades"],
                        },
                        {
                            id: tT.EARLY_ACCESS_CARD_ID,
                            title: M.intl.string(M.t["g/KRY6"]),
                            description: M.intl.string(M.t.JzAmJc),
                            primaryAsset: (0, r.jsx)(ts, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tT.BADGE_CARD_ID,
                            title: M.intl.string(M.t.Bn3CtB),
                            description: M.intl.string(M.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != i
                                    ? (0, r.jsx)("img", { src: i, alt: "", width: 160, draggable: "false" })
                                    : (0, r.jsx)(tl, { color: ta.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tT.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: M.intl.string(M.t["MTD+7w"]),
                            description: M.intl.string(M.t.Bhs0s6),
                            ctaText: M.intl.string(M.t.dBJVnZ),
                            onCtaClick: d,
                            primaryAsset: (0, r.jsx)(tu, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tT.PERMADECOS_CARD_ID,
                            title: M.intl.string(M.t.L14NZN),
                            description: M.intl.string(M.t.eCZkAI),
                            primaryAsset: (0, r.jsx)(td, { alt: "", ariaHidden: !0 }),
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
            (0, r.jsx)(D.D, { variant: "display-sm", className: t6.R_, children: M.intl.string(M.t["Uh3+CA"]) }),
            (0, r.jsx)(e6.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: a,
                onItemSelect: o,
                className: t6.Lq,
                "aria-label": M.intl.string(M.t["Uh3+CA"]),
                children: t3.map((e) =>
                    (0, r.jsx)(e6.V.Item, { id: e.id, className: t6.IC, children: e.label() }, e.id),
                ),
            }),
            (0, r.jsx)(
                e4.A,
                {
                    gap: 20,
                    className: t6.jG,
                    children: l.map((e) => {
                        if (null != e)
                            return (0, r.jsx)(e5.S, { ...e, glowing: t === e.id, containerClassName: t6.Ui }, e.id);
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
        heading: (0, r.jsx)(D.D, { variant: "display-sm", className: t7.R_, children: M.intl.string(M.t.Aw5DRm) }),
        grid: (0, r.jsx)(r.Fragment, {
            children: n.map((e, n) => {
                if (null == e) return;
                let i = 0 === n && !0 === e.featured;
                return (0, r.jsx)(
                    e5.S,
                    { ...e, glowing: t === e.id, featured: i, containerClassName: o()(t7.Nr, { [t7.Nq]: i }) },
                    e.id,
                );
            }),
        }),
    });
}
var t9 = n(994763),
    ne = n(946062),
    nt = n(288894);
let nn = "section",
    ni = "perk",
    nr = (e) => {
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
                H(!0);
            }, []),
            (0, O.j)(),
            (0, g.P)(m.b);
        let a = s.useRef(null),
            D = s.useRef(null),
            L = (0, u.bG)([N.A], () => N.A.getPremiumTypeSubscription()),
            { isReady: w, programReward: P } = (0, I.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: U,
                glowingSectionId: k,
                glowingPerkId: G,
                scrollBlock: F,
                scrollInline: V,
            } = s.useMemo(() => {
                let e = new URLSearchParams(i.search),
                    t = e.get(ni),
                    n = e.get(nn);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != n
                      ? { scrollTargetId: n, glowingSectionId: n, scrollBlock: "start" }
                      : {};
            }, [i.search]);
        (0, t9.z)(U ?? "", null != U, F, V);
        let [B, H] = s.useState(!1),
            j = (0, v.p)(),
            Y = s.useRef(null),
            [W, K] = s.useState(!1),
            z = null != j && null != L && L.status === eE.Dmq.CANCELED,
            $ = (0, R.iU)(eK.gD.PREMIUM_MONTH_TIER_2, j, L),
            q = !W && z,
            { analyticsLocations: Z } = (0, E.Ay)(p.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [X, Q] = s.useState(!1);
        return null != (0, u.bG)([T.A], () => (null != t ? T.A.getUserProfile(t) : null)) && (w || null != P)
            ? (0, r.jsxs)(_.Gt, {
                  className: ne.xW,
                  ref: a,
                  children: [
                      (0, r.jsx)(f.h, {
                          color: "nitro-pink",
                          className: o()(ne.kL, ne.Gd),
                          offsetBottom: n ? 0.55 : 0.8,
                          children: (0, r.jsxs)(E.f5, {
                              value: Z,
                              children: [
                                  (0, r.jsx)(c.L, {
                                      innerRef: Y,
                                      onChange: (e) => K(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, r.jsx)(eQ, {
                                          buttonVisibilityRef: Y,
                                          className: ne.v1,
                                          userDiscountOffer: j,
                                          discountedPrice: $,
                                      }),
                                  }),
                                  (0, r.jsx)(b.A, { glowingSectionId: k }),
                                  (0, r.jsx)(t8, { glowingPerkId: G }),
                                  (0, r.jsx)(t4, { glowingPerkId: G }),
                                  (0, r.jsx)(x, {
                                      className: ne.Zy,
                                      location: p.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eE.liQ.NITRO_HOME, section: eE.JJy.GIFT_BANNER },
                                  }),
                                  (0, r.jsx)("div", { className: ne.hz }),
                                  (0, r.jsx)(c.L, {
                                      innerRef: D,
                                      onChange: (e) => {
                                          e &&
                                              !X &&
                                              (y.default.track(eE.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: Z,
                                              }),
                                              Q(!0));
                                      },
                                      children: (0, r.jsx)("div", { ref: D, className: ne._Z }),
                                  }),
                                  (0, r.jsx)("img", {
                                      src: nt,
                                      className: ne.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: M.intl.string(M.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      z &&
                          null != $ &&
                          (0, r.jsx)(e3, {
                              isVisible: q && B,
                              premiumSubscription: L,
                              churnDiscountOffer: j,
                              discountedPrice: $,
                          }),
                  ],
              })
            : (0, r.jsx)("div", { className: o()(ne.kL, ne.Lq), children: (0, r.jsx)(d.y, {}) });
    };
