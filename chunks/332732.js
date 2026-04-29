i.d(t, { Ay: () => ir, WU: () => ia, x6: () => is }), i(321073), i(323874), i(14289), i(35956);
var s,
    a = i(627968),
    n = i(64700),
    r = i(503698),
    l = i.n(r),
    c = i(873263),
    d = i(17928),
    o = i(230109),
    u = i(289873),
    m = i(689175),
    A = i(315629),
    p = i(228366),
    g = i(793574),
    x = i(688810),
    E = i(31502),
    N = i(726649),
    h = i(611924),
    f = i(961250),
    _ = i(366505),
    R = i(841595),
    C = i(576622),
    I = i(166403),
    T = i(954571),
    b = i(881489),
    S = i(131168),
    j = i(482589),
    v = i(511484),
    P = i(935956),
    O = i(534514),
    y = i(834730),
    M = i(65470),
    D = i(985018),
    L = i(797221);
let U = (e) => {
    let { className: t, location: i, analyticsLocation: s } = e,
        { analyticsLocations: n } = (0, x.Ay)(i);
    return (0, a.jsx)(x.f5, {
        value: n,
        children: (0, a.jsxs)(A.h, {
            className: l()(L.kL, L.pm, t),
            color: "purple",
            children: [
                (0, a.jsxs)("div", {
                    className: L.FS,
                    children: [
                        (0, a.jsx)(O.D, {
                            variant: "heading-xxl/bold",
                            className: L.R_,
                            children: D.intl.string(D.t.Ve9Ge6),
                        }),
                        (0, a.jsx)(y.E, { variant: "text-md/medium", children: D.intl.string(D.t.yQ06u1) }),
                        (0, a.jsx)("div", {
                            className: L.SB,
                            children: (0, a.jsx)(M.A, {
                                buttonTextOverride: D.intl.string(D.t.Ve9Ge6),
                                premiumModalAnalyticsLocation: s,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("img", {
                    src: "https://cdn.discordapp.com/assets/content/577cd1f06ad2e0559c8a531a20a840448c66d6a6251f5c0bac311ceba4d37396.png",
                    className: L._e,
                    alt: "gift nitro banner",
                }),
            ],
        }),
    });
};
var G = i(877624);
let k =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function w(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: k,
        srcSet: `${k} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var F = i(502572),
    V = i(192308),
    H = i(331322),
    B = i(403581),
    z = i(821609),
    X = i(775602),
    W = i(366999),
    K = i(531260),
    Y = i(780964),
    Z = i(858897),
    $ = i(786300),
    q = i(975571),
    Q = i(927578),
    J = i(40185),
    ee = i(89366),
    et = i(422936),
    ei = i(234419),
    es = i(549996),
    ea = i(371764),
    en = i(949964),
    er = i(103411),
    el = i(778712),
    ec = i(97808),
    ed = i(590251),
    eo = i(144165),
    eu = i(854627),
    em = i(427262),
    eA = i(326084),
    ep = i(851746),
    eg = i(664654),
    ex = i(212737),
    eE = i(652215),
    eN = i(849812);
let eh = (e) => {
        let { user: t } = e,
            { avatarSrc: i, eventHandlers: s } = (0, eu.A)({ userId: t.id, size: el._3.SIZE_24 });
        return (0, a.jsx)(
            ec.eu,
            { className: eN.bj, src: i, "aria-label": (0, em.mG)(t), size: el._3.SIZE_24, ...s },
            t.id,
        );
    },
    ef = (e) => {
        let { slotIndex: t } = e;
        return (0, a.jsx)("div", { className: eN.p, children: t });
    },
    e_ = (e) => {
        let { referralSentUsers: t } = e;
        return (0, a.jsx)("div", {
            className: eN.L$,
            children: (() => {
                let e = [];
                for (let i = 0; i < eg.Z; i++)
                    if (t?.[i] !== void 0) {
                        let s = (0, a.jsx)(eh, { user: t[i] }, t[i].id);
                        e.push(s);
                    } else {
                        let t = (0, a.jsx)(ef, { slotIndex: i + 1 }, i);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    eR = (e) => {
        let { nReferralsSent: t } = e;
        return (0, a.jsx)(ed.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: eN.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: eN.e0,
            overlayClassName: t === eg.Z ? eN.ys : void 0,
            children: (0, a.jsx)(eo._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    eC = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, eg.J)(),
            n = (0, d.bG)([ep.A], () => ep.A.getRecipientStatus()),
            r = (0, d.bG)([ep.A], () => ep.A.getHasEligibleFriends()),
            c = n.size === eg.Z && [...n.values()].every((e) => e === eA.aK.REDEEMED),
            o = n.size === eg.Z;
        return (0, a.jsxs)("div", {
            className: l()(eN.kL, t),
            children: [
                (0, a.jsx)("div", { className: eN.G3, children: (0, a.jsx)(eR, { nReferralsSent: n.size }) }),
                (0, a.jsxs)("div", {
                    className: eN.IH,
                    children: [
                        (0, a.jsx)(e_, { referralSentUsers: s }),
                        (0, a.jsxs)("div", {
                            className: eN.n4,
                            children: [
                                (0, a.jsx)(O.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: D.intl.string(D.t.USo4s7),
                                }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === r
                                            ? D.intl.format(D.t["zWhX/Q"], {
                                                  helpdeskArticle: q.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                              })
                                            : s.length === eg.Z
                                              ? !0 === c
                                                  ? D.intl.format(D.t["1aEjsH"], {
                                                        helpdeskArticle: q.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : D.intl.format(D.t["+u3AOO"], {
                                                        helpdeskArticle: q.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : D.intl.format(D.t["omMr+V"], {
                                                    helpdeskArticle: q.A.getArticleURL(eE.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(z.$, {
                            variant: "primary",
                            disabled: !1 === r || !0 === o,
                            text: D.intl.string(D.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: s } = e;
                                    T.default.track(eE.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: s,
                                    }),
                                        (0, V.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 212737));
                                            return (i) => (0, a.jsx)(e, { ...i, startingScreen: t });
                                        });
                                })({
                                    startingScreen: ex.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var eI = i(792656),
    eT = i(989349),
    eb = i.n(eT),
    eS = i(496431),
    ej = i(116689);
let ev = (e) => {
    let { expiresAt: t, className: i } = e,
        s = (0, eS.A)(eb()(t).toDate(), 1e3);
    if (null == s) return null;
    let { days: n, hours: r, minutes: c, seconds: d } = s,
        o = [
            { unitValue: n, unitType: "days" },
            { unitValue: r, unitType: "hours" },
            { unitValue: c, unitType: "minutes" },
            { unitValue: d, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: l()(ej.Xl, i),
        children: [
            (0, a.jsx)(y.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: D.intl.string(D.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: ej.$R,
                children: o.map((e, t) =>
                    (function (e, t) {
                        let i,
                            [s, n] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: ej.bh,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ej.kB,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: ej.B2,
                                                        children: (0, a.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: ej.B2,
                                                        children: (0, a.jsx)(y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(y.E, {
                                                variant: "text-xs/semibold",
                                                color: "text-strong",
                                                children: (function (e) {
                                                    switch (e) {
                                                        case "days":
                                                            return D.intl.string(D.t.ixASa2);
                                                        case "hours":
                                                            return D.intl.string(D.t["8sNvNn"]);
                                                        case "minutes":
                                                            return D.intl.string(D.t["Gv6kP/"]);
                                                        case "seconds":
                                                            return D.intl.string(D.t.JhaiLW);
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
                                    (0, a.jsx)(y.E, {
                                        className: ej.cV,
                                        variant: "text-lg/normal",
                                        color: "text-strong",
                                        children: ":",
                                    }),
                            ],
                        });
                    })(e, t === o.length - 1),
                ),
            }),
        ],
    });
};
var eP = i(473702),
    eO = i(505559),
    ey = i(725807),
    eM = i(774774),
    eD = i(695661);
let eL = () => {
    let e = { section: eE.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: eD.vK,
        children: [
            (0, a.jsx)(eM.e4, { text: D.intl.string(D.t.qYKftX), className: eD.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: eD._u,
            }),
            (0, a.jsx)("div", {
                className: eD.IP,
                children: (0, a.jsx)(y.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: D.intl.format(D.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(ey.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: eD.aA,
                shinyButtonClassName: eD.Xp,
            }),
        ],
    });
};
var eU = i(103733),
    eG = i(702841),
    ek = i(384601),
    ew = i(584151);
let eF = () => {
    let e = (0, eG.bG)([X.A], () => X.A.useReducedMotion);
    return (0, a.jsx)(ek.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: ew.cI,
        hammerContainerClassName: ew.qg,
        keyContainerClassName: ew.h2,
        boltContainerClassName: ew.Bz,
        starAssetClassName: ew.ks,
        hammerAssetClassName: ew.GY,
        keyAssetClassName: ew.p4,
        boltAssetClassName: ew.vy,
    });
};
var eV = i(608416),
    eH = i(447764),
    eB = i(180894);
let ez = (e) => {
    let { containerVisibilityPercentage: t } = e,
        i = (0, eG.bG)([X.A], () => X.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: eH.BI,
                children: (0, a.jsx)(eV.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eV.$G },
                    yAxisAnimationData: { range: 20, duration: eV.Mp, path: eV.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: i,
                    parallaxAnimationData: {
                        pathDirection: eV.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, a.jsx)("img", { src: eB.A, alt: "", className: eH.Q }),
                }),
            }),
            (0, a.jsx)(ek.A, {
                isMotionReduced: i,
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
var eX = i(218199);
let eW = (e) => {
    let { className: t, color: i = "text-strong", responsive: s = !0, children: n } = e;
    return (0, a.jsx)(O.D, { className: l()(eX.w, t, s && eX.n), variant: "display-md", color: i, children: n });
};
var eK = i(788868),
    eY = i(97584);
let eZ = (e) => {
        let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
            n = (0, b.Zb)(t);
        return (0, a.jsx)("div", {
            className: l()(eY.kL, i),
            ref: s,
            children: (0, a.jsxs)("div", {
                className: eY.ap,
                children: [
                    (0, a.jsxs)(H.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, a.jsx)(eO.A, { text: D.intl.string(D.t.yhldRB) }),
                            (0, a.jsxs)(H.B, {
                                align: "start",
                                gap: 12,
                                className: eY.rG,
                                children: [
                                    (0, a.jsx)(eW, { children: D.intl.format(D.t.FwjP6W, { days: n }) }),
                                    (0, a.jsx)(y.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: D.intl.string(D.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(H.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, a.jsx)(eI.A, {
                                        size: "md",
                                        buttonTextOverride: D.intl.string(D.t["2+luBl"]),
                                        iconOverride: B.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, a.jsx)(z.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: D.intl.string(D.t.Af7ye6),
                                        onClick: () => (0, Z.openUserSettings)(Y.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eY.Hk,
                        children: [(0, a.jsx)(w, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(eF, {})],
                    }),
                ],
            }),
        });
    },
    e$ = (e) => {
        let { className: t, isEligibleForBogoPromotion: s, isInReverseTrial: n, shouldShowReferralProgressBar: r } = e,
            {
                headingText: c,
                headingTop: o,
                showPill: u,
                userDiscountOffer: m,
                discountedPrice: A,
                buttonVisibilityRef: p,
            } = eQ(),
            { analyticsLocations: E } = (0, x.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            N = (0, es.c)(G.C.MARKETING_PAGE_BANNER),
            h = null;
        null != N && "marketingPageBanner" === N.properties.properties.oneofKind
            ? (h = (0, a.jsx)(ea.x, {
                  componentId: N.id,
                  promotionBannerMarketingComponentFields: N.properties.properties.marketingPageBanner,
              }))
            : s
              ? (h = (0, a.jsx)(en.A, { variant: en.c.SUBSCRIBER_HOME }))
              : n
                ? (h = (0, a.jsx)(eL, {}))
                : r && (h = (0, a.jsx)(eC, {}));
        let f = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            _ = null != f && f.status === eE.Dmq.CANCELED && null != m,
            R = (0, ei.V)(),
            C = (0, et.O)(),
            T = (0, v.U9)(C, eK.pe.TIER_2) ? eK.pe.TIER_2 : void 0,
            b = null != f && f.status !== eE.Dmq.ACCOUNT_HOLD && f.hasAnyPremiumNitro,
            S = (0, K.A)(),
            j = S.isFractionalPremiumActive && !b && null == h && !_,
            P = (0, d.bG)([X.A], () => X.A.useReducedMotion),
            { visibilityPercentageRef: O, visibilityPercentage: L } = (0, eU.U)(!P);
        return n
            ? (0, a.jsx)(eZ, { fpEndsAt: S.currentEntitlementEndsAt, className: t, buttonVisibilityRef: p })
            : (0, a.jsx)("div", {
                  className: l()(eY.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: p,
                  children: (0, a.jsxs)("div", {
                      className: eY.Qs,
                      ref: O,
                      children: [
                          u && o,
                          (0, a.jsxs)("div", {
                              className: eY.N1,
                              children: [
                                  (0, a.jsx)(ez, { containerVisibilityPercentage: L }),
                                  _ &&
                                      null != m.expires_at &&
                                      (0, a.jsx)(ev, { expiresAt: m.expires_at, className: eY.IZ }),
                                  (0, a.jsx)(eW, {
                                      children: _ ? D.intl.format(D.t["3yZP0G"], { percent: m.discount.amount }) : c,
                                  }),
                                  _ &&
                                      null != A &&
                                      (0, a.jsx)(y.E, {
                                          className: eY.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: D.intl.format(D.t["3Q4wCy"], {
                                              discountedPrice: A,
                                              billingPeriod: (0, Q.Ke)(m.discount.user_usage_limit_interval),
                                              numMonths: m.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: j || _ ? eY.UJ : void 0,
                              children: [
                                  j &&
                                      (0, a.jsx)(eI.A, {
                                          size: "md",
                                          hasActivePromotion: !!s,
                                          subscriptionTier: R?.subscription_trial?.sku_id ?? T,
                                      }),
                                  _ &&
                                      (0, a.jsx)(z.$, {
                                          variant: "expressive",
                                          icon: B.t,
                                          size: "md",
                                          text: D.intl.string(D.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = eP.g.CONFIRM_DISCOUNT),
                                                  void (0, V.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              i.e("75527"),
                                                              i.e("80848"),
                                                              i.e("97189"),
                                                              i.e("90261"),
                                                              i.e("16933"),
                                                              i.e("40841"),
                                                              i.e("17546"),
                                                              i.e("26032"),
                                                              i.e("89753"),
                                                              i.e("68495"),
                                                              i.e("18125"),
                                                              i.e("65420"),
                                                              i.e("22513"),
                                                              i.e("92931"),
                                                              i.e("13498"),
                                                              i.e("71543"),
                                                              i.e("48751"),
                                                              i.e("13520"),
                                                              i.e("71934"),
                                                              i.e("12721"),
                                                              i.e("7053"),
                                                              i.e("86483"),
                                                              i.e("39995"),
                                                              i.e("25568"),
                                                              i.e("32260"),
                                                              i.e("40153"),
                                                              i.e("68953"),
                                                              i.e("89603"),
                                                              i.e("44398"),
                                                              i.e("77083"),
                                                              i.e("63009"),
                                                              i.e("23924"),
                                                              i.e("15510"),
                                                              i.e("25845"),
                                                              i.e("57036"),
                                                              i.e("207"),
                                                              i.e("88394"),
                                                              i.e("15380"),
                                                              i.e("20287"),
                                                              i.e("28367"),
                                                              i.e("35429"),
                                                              i.e("10471"),
                                                              i.e("64827"),
                                                              i.e("23808"),
                                                              i.e("11301"),
                                                              i.e("61737"),
                                                              i.e("79428"),
                                                              i.e("29963"),
                                                              i.e("47834"),
                                                              i.e("30938"),
                                                              i.e("20317"),
                                                              i.e("2368"),
                                                              i.e("24313"),
                                                              i.e("74016"),
                                                              i.e("48405"),
                                                              i.e("63185"),
                                                              i.e("19551"),
                                                              i.e("37794"),
                                                              i.e("48172"),
                                                              i.e("21106"),
                                                              i.e("88941"),
                                                              i.e("61379"),
                                                              i.e("43039"),
                                                              i.e("69354"),
                                                              i.e("28154"),
                                                              i.e("48804"),
                                                              i.e("88077"),
                                                              i.e("85502"),
                                                              i.e("18401"),
                                                              i.e("13681"),
                                                              i.e("53729"),
                                                              i.e("32551"),
                                                              i.e("52367"),
                                                              i.e("23353"),
                                                              i.e("36561"),
                                                              i.e("50015"),
                                                              i.e("47017"),
                                                              i.e("77998"),
                                                              i.e("31145"),
                                                              i.e("11523"),
                                                              i.e("66900"),
                                                              i.e("1555"),
                                                              i.e("44695"),
                                                              i.e("21690"),
                                                              i.e("10004"),
                                                              i.e("55314"),
                                                              i.e("44376"),
                                                              i.e("96905"),
                                                              i.e("31644"),
                                                              i.e("70653"),
                                                              i.e("993"),
                                                              i.e("54527"),
                                                              i.e("72535"),
                                                              i.e("39227"),
                                                              i.e("26490"),
                                                              i.e("76170"),
                                                              i.e("32817"),
                                                              i.e("36498"),
                                                              i.e("18943"),
                                                              i.e("89094"),
                                                              i.e("84103"),
                                                              i.e("9915"),
                                                              i.e("28561"),
                                                              i.e("11527"),
                                                              i.e("96123"),
                                                              i.e("27168"),
                                                              i.e("31825"),
                                                              i.e("39038"),
                                                              i.e("36320"),
                                                              i.e("6223"),
                                                              i.e("20320"),
                                                              i.e("77245"),
                                                              i.e("31549"),
                                                              i.e("43919"),
                                                              i.e("31390"),
                                                              i.e("57906"),
                                                              i.e("51243"),
                                                              i.e("45421"),
                                                              i.e("44265"),
                                                              i.e("99141"),
                                                              i.e("21435"),
                                                              i.e("98793"),
                                                              i.e("92731"),
                                                              i.e("25990"),
                                                              i.e("34472"),
                                                              i.e("33584"),
                                                              i.e("63095"),
                                                              i.e("68647"),
                                                              i.e("45723"),
                                                              i.e("67657"),
                                                              i.e("64615"),
                                                              i.e("88017"),
                                                              i.e("87225"),
                                                              i.e("12373"),
                                                              i.e("75134"),
                                                              i.e("84967"),
                                                              i.e("23216"),
                                                              i.e("25582"),
                                                              i.e("30770"),
                                                              i.e("38835"),
                                                              i.e("90889"),
                                                              i.e("78777"),
                                                              i.e("3458"),
                                                              i.e("62827"),
                                                              i.e("73547"),
                                                              i.e("99593"),
                                                              i.e("61935"),
                                                              i.e("62168"),
                                                              i.e("55602"),
                                                              i.e("77793"),
                                                              i.e("13499"),
                                                              i.e("91381"),
                                                              i.e("58765"),
                                                              i.e("22407"),
                                                              i.e("10034"),
                                                              i.e("73500"),
                                                              i.e("25252"),
                                                              i.e("65881"),
                                                              i.e("32035"),
                                                              i.e("36126"),
                                                              i.e("51391"),
                                                              i.e("29375"),
                                                              i.e("91942"),
                                                              i.e("48778"),
                                                              i.e("89465"),
                                                              i.e("78707"),
                                                              i.e("93708"),
                                                              i.e("71482"),
                                                              i.e("10942"),
                                                              i.e("64480"),
                                                              i.e("10745"),
                                                              i.e("78651"),
                                                              i.e("77084"),
                                                              i.e("39406"),
                                                              i.e("96565"),
                                                              i.e("95093"),
                                                              i.e("62615"),
                                                              i.e("20007"),
                                                              i.e("60177"),
                                                              i.e("21976"),
                                                              i.e("1006"),
                                                              i.e("23276"),
                                                              i.e("10567"),
                                                              i.e("59880"),
                                                              i.e("77446"),
                                                              i.e("5636"),
                                                              i.e("95444"),
                                                              i.e("38472"),
                                                              i.e("48720"),
                                                              i.e("84150"),
                                                              i.e("6159"),
                                                              i.e("87075"),
                                                              i.e("94161"),
                                                              i.e("35432"),
                                                              i.e("10741"),
                                                              i.e("80347"),
                                                              i.e("80166"),
                                                          ]).then(i.bind(i, 293061));
                                                      return (i) =>
                                                          (0, a.jsx)(t, {
                                                              ...i,
                                                              analyticsLocations: E,
                                                              initialStep: e,
                                                              premiumSubscription: f,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, a.jsx)(M.A, {
                                      variant: j || _ ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: D.intl.string(D.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          h,
                      ],
                  }),
              });
    },
    [eq, eQ] = (0, $.A)(),
    eJ = (e) => {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: r } = (0, x.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, b.ds)(),
            c = (0, J.cg)(),
            d = (0, ee.QQ)(),
            o = D.intl.string(D.t.qYKftX),
            u = (0, er.m)(),
            m = D.intl.string(D.t.ifwQZb),
            { fractionalState: A, endsAt: p } = (0, K.A)(),
            E = (0, W.Ay)(p, W.yE.CREDITS_ENDS_IN),
            N = null;
        if (A === eK.xc.NONE || l) N = (0, a.jsx)(eO.A, { text: o });
        else {
            d = !0;
            let e = D.intl.format(D.t["yR+oDD"], {
                helpCenterLink: q.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT),
            });
            N = (0, a.jsx)(F.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: eY.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: eY.V_,
                        children: (0, a.jsx)("div", { className: eY.eL, children: (0, a.jsx)(eO.A, { text: E }) }),
                    }),
            });
        }
        return (0, a.jsx)(x.f5, {
            value: r,
            children: (0, a.jsx)(eq.Provider, {
                value: {
                    headingText: m,
                    headingTop: N,
                    showPill: d,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                },
                children: (0, a.jsx)(e$, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: u,
                }),
            }),
        });
    };
var e0 = i(925747),
    e1 = i(717421),
    e2 = i(98812),
    e7 = i(67423);
let e8 = function (e) {
    let { isVisible: t, premiumSubscription: s, churnDiscountOffer: n, discountedPrice: r } = e,
        { analyticsLocations: c } = (0, x.Ay)(g.A.CHURN_DISCOUNT_PERSISTENT_CTA),
        d = (0, e1.z)({
            transform: t ? "translateY(-100%)" : "translateY(0%)",
            opacity: +!!t,
            config: { tension: 120, friction: 12 },
        });
    return (0, a.jsx)(e0.animated.div, {
        className: l()(e2.iE, { [e2.q4]: !t }),
        style: d,
        children: (0, a.jsxs)("div", {
            className: e2.iJ,
            children: [
                (0, a.jsx)("img", { alt: "", src: e7, className: e2.oU }),
                (0, a.jsxs)("div", {
                    className: e2.iQ,
                    children: [
                        (0, a.jsx)(O.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: D.intl.format(D.t["3yZP0G"], { percent: n.discount.amount }),
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: D.intl.format(D.t["3Q4wCy"], {
                                numMonths: n.discount.user_usage_limit,
                                discountedPrice: r,
                                billingPeriod: (0, Q.Ke)(n.discount.user_usage_limit_interval),
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)(z.$, {
                    variant: "expressive",
                    icon: B.t,
                    size: "md",
                    text: D.intl.string(D.t.zrCzVB),
                    onClick: () =>
                        void (0, V.openModalLazy)(async () => {
                            let { PremiumBrandRefreshSubscriptionCancellationModal: e } = await Promise.all([
                                i.e("75527"),
                                i.e("80848"),
                                i.e("97189"),
                                i.e("90261"),
                                i.e("16933"),
                                i.e("40841"),
                                i.e("17546"),
                                i.e("26032"),
                                i.e("89753"),
                                i.e("68495"),
                                i.e("18125"),
                                i.e("65420"),
                                i.e("22513"),
                                i.e("92931"),
                                i.e("13498"),
                                i.e("71543"),
                                i.e("48751"),
                                i.e("13520"),
                                i.e("71934"),
                                i.e("12721"),
                                i.e("7053"),
                                i.e("86483"),
                                i.e("39995"),
                                i.e("25568"),
                                i.e("32260"),
                                i.e("40153"),
                                i.e("68953"),
                                i.e("89603"),
                                i.e("44398"),
                                i.e("77083"),
                                i.e("63009"),
                                i.e("23924"),
                                i.e("15510"),
                                i.e("25845"),
                                i.e("57036"),
                                i.e("207"),
                                i.e("88394"),
                                i.e("15380"),
                                i.e("20287"),
                                i.e("28367"),
                                i.e("35429"),
                                i.e("10471"),
                                i.e("64827"),
                                i.e("23808"),
                                i.e("11301"),
                                i.e("61737"),
                                i.e("79428"),
                                i.e("29963"),
                                i.e("47834"),
                                i.e("30938"),
                                i.e("20317"),
                                i.e("2368"),
                                i.e("24313"),
                                i.e("74016"),
                                i.e("48405"),
                                i.e("63185"),
                                i.e("19551"),
                                i.e("37794"),
                                i.e("48172"),
                                i.e("21106"),
                                i.e("88941"),
                                i.e("61379"),
                                i.e("43039"),
                                i.e("69354"),
                                i.e("28154"),
                                i.e("48804"),
                                i.e("88077"),
                                i.e("85502"),
                                i.e("18401"),
                                i.e("13681"),
                                i.e("53729"),
                                i.e("32551"),
                                i.e("52367"),
                                i.e("23353"),
                                i.e("36561"),
                                i.e("50015"),
                                i.e("47017"),
                                i.e("77998"),
                                i.e("31145"),
                                i.e("11523"),
                                i.e("66900"),
                                i.e("1555"),
                                i.e("44695"),
                                i.e("21690"),
                                i.e("10004"),
                                i.e("55314"),
                                i.e("44376"),
                                i.e("96905"),
                                i.e("31644"),
                                i.e("70653"),
                                i.e("993"),
                                i.e("54527"),
                                i.e("72535"),
                                i.e("39227"),
                                i.e("26490"),
                                i.e("76170"),
                                i.e("32817"),
                                i.e("36498"),
                                i.e("18943"),
                                i.e("89094"),
                                i.e("84103"),
                                i.e("9915"),
                                i.e("28561"),
                                i.e("11527"),
                                i.e("96123"),
                                i.e("27168"),
                                i.e("31825"),
                                i.e("39038"),
                                i.e("36320"),
                                i.e("6223"),
                                i.e("20320"),
                                i.e("77245"),
                                i.e("31549"),
                                i.e("43919"),
                                i.e("31390"),
                                i.e("57906"),
                                i.e("51243"),
                                i.e("45421"),
                                i.e("44265"),
                                i.e("99141"),
                                i.e("21435"),
                                i.e("98793"),
                                i.e("92731"),
                                i.e("25990"),
                                i.e("34472"),
                                i.e("33584"),
                                i.e("63095"),
                                i.e("68647"),
                                i.e("45723"),
                                i.e("67657"),
                                i.e("64615"),
                                i.e("88017"),
                                i.e("87225"),
                                i.e("12373"),
                                i.e("75134"),
                                i.e("84967"),
                                i.e("23216"),
                                i.e("25582"),
                                i.e("30770"),
                                i.e("38835"),
                                i.e("90889"),
                                i.e("78777"),
                                i.e("3458"),
                                i.e("62827"),
                                i.e("73547"),
                                i.e("99593"),
                                i.e("61935"),
                                i.e("62168"),
                                i.e("55602"),
                                i.e("77793"),
                                i.e("13499"),
                                i.e("91381"),
                                i.e("58765"),
                                i.e("22407"),
                                i.e("10034"),
                                i.e("73500"),
                                i.e("25252"),
                                i.e("65881"),
                                i.e("32035"),
                                i.e("36126"),
                                i.e("51391"),
                                i.e("29375"),
                                i.e("91942"),
                                i.e("48778"),
                                i.e("89465"),
                                i.e("78707"),
                                i.e("93708"),
                                i.e("71482"),
                                i.e("10942"),
                                i.e("64480"),
                                i.e("10745"),
                                i.e("78651"),
                                i.e("77084"),
                                i.e("39406"),
                                i.e("96565"),
                                i.e("95093"),
                                i.e("62615"),
                                i.e("20007"),
                                i.e("60177"),
                                i.e("21976"),
                                i.e("1006"),
                                i.e("23276"),
                                i.e("10567"),
                                i.e("59880"),
                                i.e("77446"),
                                i.e("5636"),
                                i.e("95444"),
                                i.e("38472"),
                                i.e("48720"),
                                i.e("84150"),
                                i.e("6159"),
                                i.e("87075"),
                                i.e("94161"),
                                i.e("35432"),
                                i.e("10741"),
                                i.e("80347"),
                                i.e("80166"),
                            ]).then(i.bind(i, 293061));
                            return (t) =>
                                (0, a.jsx)(e, {
                                    ...t,
                                    premiumSubscription: s,
                                    analyticsLocations: c,
                                    initialStep: eP.g.CONFIRM_DISCOUNT,
                                });
                        }),
                }),
            ],
        }),
    });
};
var e5 = i(761508),
    e3 = i(951707),
    e6 = i(744064);
function e9(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/6d779a647553609440933a7e61163ab29257c093f92f89c4e093aa704202b616.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/04ab9089123de23616e764a3900f6921afd4c27ec80a269fdf3e63f1194b9e91.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function te(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/69ee0dc56ebf82df912bebde51a2c563664d558b202a449b3305d124522a8c02.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var tt = i(345394);
function ti(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: tt.A,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function ts(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/99d7cc7de43e9470f6069d92affd0da42348d45fbc589845c5383c6cac0cec80.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function ta(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/2ecc2b23e1377a539b6c1239f12ee35af7adb0d0bd4fe3a6ffbfebd5192012a2.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function tn(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/6f0f6136e77c9315a9a7a22848681c5d891cb654ae638cde5f70ad8b6c0ebec5.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
function tr(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/783fc3c55009354503196f7148987b044b815cae11b18c3748065e96813a64bb.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var tl = i(661531),
    tc = i(996682);
function td(e) {
    let {
        color: t = tl.A.colors.ICON_STRONG,
        "aria-label": i,
        "aria-hidden": s,
        role: n,
        width: r = 100,
        height: l = 80,
    } = e;
    return (0, a.jsxs)("svg", {
        ...(0, tc.A)({ "aria-label": i, "aria-hidden": s, role: n }),
        width: r,
        height: l,
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
function to(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 162 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: "https://cdn.discordapp.com/assets/content/c5c4c5e6fbe803dac72eb3409b2f59e39feae5753c34c0d9a1c01164ec541788.svg",
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var tu = i(78701);
function tm(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: l = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: l },
        src: tu.A,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var tA = i(462887),
    tp = i(736653),
    tg = i(259065),
    tx = i(206835),
    tE = i(976860),
    tN = i(591179),
    th = i(462463),
    tf = i(112848),
    t_ = i(425713),
    tR = i(920050),
    tC = i(975807),
    tI = i(562819),
    tT = i(793943),
    tb = i(95035),
    tS = i(532794),
    tj = i(245853),
    tv = i(612669),
    tP = i(892227),
    tO = i(81466),
    ty = i(318254),
    tM = i(490285),
    tD = i(875679);
let tL = () => {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)({ location: "NitroOrbsWhatsNewCardFooter" });
    if (!e || null == t) return null;
    let i =
        null != t.next_reward_date && "" !== t.next_reward_date
            ? Math.max(1, (0, tP.default)(new Date(t.next_reward_date), new Date()))
            : null;
    return (0, a.jsxs)("div", {
        className: tD.kL,
        children: [
            null != i &&
                (0, a.jsxs)("div", {
                    className: tD.nM,
                    children: [
                        (0, a.jsxs)("div", {
                            className: tD.Pf,
                            children: [
                                (0, a.jsx)(tO.C, { size: "sm", color: tl.A.colors.TEXT_DEFAULT }),
                                (0, a.jsx)(y.E, {
                                    variant: "text-sm/medium",
                                    color: "text-default",
                                    children: D.intl.string(tM.default.H2M13c),
                                }),
                            ],
                        }),
                        (0, a.jsx)(y.E, {
                            variant: "text-sm/medium",
                            color: "text-default",
                            children: D.intl.format(tM.default.xedPIb, { days: i }),
                        }),
                    ],
                }),
            null != i && (0, a.jsx)("div", { className: tD.yF }),
            (0, a.jsxs)("div", {
                className: tD.nM,
                children: [
                    (0, a.jsxs)("div", {
                        className: tD.Pf,
                        children: [
                            (0, a.jsx)(ty.C, { size: "sm", color: tl.A.colors.TEXT_DEFAULT }),
                            (0, a.jsx)(y.E, {
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: D.intl.string(tM.default.F7Bhsg),
                            }),
                        ],
                    }),
                    (0, a.jsx)(y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: D.intl.format(tM.default.UDwsvL, { orbsCount: t.total_rewarded_from_program }),
                    }),
                ],
            }),
        ],
    });
};
var tU = i(256358),
    tG = i(655752),
    tk = i(764231),
    tw = i(627380),
    tF = i(30084),
    tV = i(792641),
    tH = i(714206),
    tB = i(88001),
    tz = i(758836),
    tX = i(654487),
    tW = i(466919),
    tK = i(555599),
    tY = i(817577);
let tZ =
        "https://cdn.discordapp.com/assets/content/0722a293c878afdc8718373a6436d7fa1f06014597d138d824d7bb5da55d3d7f.svg",
    t$ =
        "https://cdn.discordapp.com/assets/content/7bb191dd09571f8910a367c7cf35b500ea7b64dde29309c7c74831cc16b1dc1d.png",
    tq =
        "https://cdn.discordapp.com/assets/content/c0c412ad58e2520901e2cb967308eb432d0b349b3b5f54b14f141e12b80f7d42.svg";
function tQ() {
    let { analyticsLocations: e } = (0, x.Ay)(g.A.PREMIUM_MARKETING_PERK_CARD),
        t = (0, tN.X)("useWhatsNewPerkCards"),
        s = (0, tv.O9)(),
        { logitechCard: r, steelseriesCard: c } = (0, tU.A)(),
        o = (0, tU.S)(),
        u = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
        m = u?.hasActiveTrial ?? !1,
        A = (0, th.A)({ analyticsLocations: e }),
        p = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(Y.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tg.L)({ analyticsLocations: e }),
            );
        }, [e]),
        N = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(Y.X.PROFILE_PANEL, { analyticsLocations: e }, () =>
                (0, tI.L)({ analyticsLocations: e }),
            );
        }, [e]),
        h = (0, n.useCallback)(() => {
            (0, Z.openUserSettings)(Y.X.APPEARANCE_IN_APP_ICON_CATEGORY);
        }, []),
        f = () => {
            (0, tC.A)(tB.TE);
        },
        R = (0, n.useCallback)(() => {
            m
                ? (0, V.openModalLazy)(async () => {
                      let { default: e } = await i.e("99709").then(i.bind(i, 516044));
                      return (t) => (0, a.jsx)(e, { ...t });
                  })
                : (0, tS.A)({
                      subscriptionTier: eK.pe.TIER_2,
                      initialPlanId: eK.gD.PREMIUM_GROUP_MONTH,
                      analyticsLocations: e,
                  });
        }, [e, m]),
        C = (function (e) {
            let { fractionalState: t } = (0, K.A)(),
                i = t === eK.xc.FP_ONLY,
                s = (0, tf.$F)(),
                a = (0, tf.Xb)(),
                r = s?.status === tf.Wo.UPCOMING || i,
                c = (0, t_.N)(s?.id),
                d = (function () {
                    let e = (0, tf.$F)(),
                        t = (0, tG.P)(),
                        i = (0, tf.Xb)();
                    if (null == e || null == t || null == i) return null;
                    let s = eb()(),
                        a = eb()(i),
                        n = e.status === tf.Wo.UPCOMING ? 0 : e.tenureReqNumMonths,
                        r = t.tenureReqNumMonths,
                        l = a.clone().add(n, "months"),
                        c = a.clone().add(r, "months").diff(l);
                    return Math.max(0, Math.min(1, (s.diff(l) - 864e5) / c));
                })(),
                o = (0, tw.t)(),
                u = (0, tG.P)();
            return (0, n.useMemo)(() => {
                let t,
                    n = null != u ? D.intl.string(u.nameUnformattedNitro) : void 0;
                return (
                    null == s
                        ? i && (t = (0, tk.T)(eK.Ac.PREMIUM_TENURE_1_MONTH, 1) ?? void 0)
                        : (t =
                              s.status === tf.Wo.UPCOMING
                                  ? D.intl.formatToPlainString(D.t.a1eKDi, { days: o?.days ?? 0 })
                                  : ((function (e, t) {
                                        if (null != e && null != t) {
                                            if (e.days <= 30)
                                                return D.intl.formatToPlainString(D.t.NEXoaI, {
                                                    days: e.days,
                                                    nextBadgeName: t,
                                                });
                                            if (e.months <= 3)
                                                return D.intl.formatToPlainString(D.t.KDV8oD, {
                                                    months: e.months,
                                                    nextBadgeName: t,
                                                });
                                        }
                                    })(o, n) ??
                                    (0, tk.T)(s.id, s.tenureReqNumMonths) ??
                                    void 0)),
                    {
                        id: tR.TENURE_BADGE_CARD_ID,
                        title: null != s ? D.intl.string(s.nameUnformattedNitro) : i ? D.intl.string(D.t.tx9Fvw) : "",
                        pillText: D.intl.string(D.t["jyYgZ+"]),
                        primaryAsset: null != c ? (r ? c.standard : c.ambientLarge) : i ? tH : null,
                        primaryAssetClassName: l()(tV.p, { [tV.n]: r }),
                        caption: null != a ? D.intl.formatToPlainString(D.t.Hu4jfi, { date: new Date(a) }) : void 0,
                        description: t,
                        subscriptionRequired: !0,
                        progress: d ?? void 0,
                        ctaText: D.intl.string(D.t.jVcuVY),
                        onCtaClick: () => (0, tF.D)({ analyticsLocations: e }),
                    }
                );
            }, [s, c, r, a, d, i, o, u, e]);
        })(e),
        { shouldShowBonusOrbsUX: T, multiplier: b } = (0, tj.Dl)(tX.rE.NITRO_HOME_MARKETING),
        S = (0, E.l)("useWhatsNewPerkCards"),
        { isEligible: j, programReward: v } = (0, _.F)({ location: "useWhatsNewPerkCards" }),
        P = S && j && null != v;
    return (0, n.useMemo)(() => {
        let e = [
                o ? null : r,
                o ? null : c,
                P
                    ? {
                          id: tR.NITRO_ORBS_REWARDS_CARD_ID,
                          title: D.intl.string(tM.default.hx5AFp),
                          description: D.intl.format(tM.default["Pz+6Ix"], { orbsCount: v?.reward_amount ?? 0 }),
                          primaryAsset: "/assets/0e1f72ee8aba3549.svg",
                          footerContent: (0, a.jsx)(tL, {}),
                          ctaText: D.intl.string(tM.default.BxjHiu),
                          onCtaClick: () => (0, tE.pX)(eE.BVt.COLLECTIBLES_SHOP_WITH_TAB(tz.G2.ORBS)),
                      }
                    : null,
                T
                    ? {
                          id: tR.QUEST_ORB_MULTIPLIER_CARD_ID,
                          title: D.intl.string(D.t.F2MShO),
                          description: D.intl.format(D.t.NpUfej, { bonusOrbMultiplier: b }),
                          pillText: S ? void 0 : D.intl.string(D.t.oW0eUd),
                          primaryAsset:
                              "https://cdn.discordapp.com/assets/content/6a45cf480a4894d29a155fbc23df4dca701a69e7f09227ef964a61bdb6e5833a.png",
                          ctaText: D.intl.string(D.t.jVcuVY),
                          onCtaClick: () => (0, tE.pX)(eE.BVt.QUEST_HOME),
                          primaryAssetClassName: tK.Nf,
                      }
                    : null,
                s
                    ? {
                          id: tR.PREMIUM_GROUP_CARD_ID,
                          title: D.intl.string(tW.default.YkvksF),
                          description: (0, a.jsxs)(a.Fragment, {
                              children: [
                                  D.intl.formatToPlainString(tW.default.JlyGQj, {
                                      totalSeats: tB.aw,
                                      premiumGroupProductName: (0, tB.DP)(),
                                  }),
                                  (0, a.jsx)("div", {
                                      className: tK.LF,
                                      children: (0, a.jsx)(tb.A, {
                                          onClick: f,
                                          children: D.intl.string(tW.default.yYyGJH),
                                      }),
                                  }),
                              ],
                          }),
                          pillText: D.intl.string(D.t.oW0eUd),
                          primaryAsset: tY,
                          ctaIcon: B.t,
                          ctaIconPosition: "start",
                          ctaText: D.intl.string(D.t.IJI7yk),
                          onCtaClick: R,
                      }
                    : null,
                {
                    id: tR.DISPLAY_NAME_STYLES_CARD_ID,
                    title: D.intl.string(D.t.OLtTrt),
                    description: D.intl.string(D.t["di/pXR"]),
                    onCtaClick: t ? A : p,
                    ctaText: D.intl.string(D.t.jVcuVY),
                    primaryAsset: tZ,
                },
                {
                    id: tR.CLIENT_THEMES_CARD_ID,
                    title: D.intl.string(D.t.acc6h6),
                    description: D.intl.formatToPlainString(D.t.WQazjs, { themeCount: 20 }),
                    primaryAsset: tq,
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: () => {
                        (0, tT.nf)(tT.HP.CUSTOM_THEME);
                    },
                },
                {
                    id: tR.PERMADECOS_CARD_ID,
                    title: D.intl.string(D.t.L14NZN),
                    description: D.intl.string(D.t.eCZkAI),
                    primaryAsset: (0, a.jsx)(tm, { alt: "", ariaHidden: !0 }),
                    ctaText: D.intl.string(D.t.jVcuVY),
                    onCtaClick: t ? A : N,
                },
                {
                    id: tR.CUSTOM_APP_ICONS_CARD_ID,
                    title: D.intl.string(D.t["GU+wqh"]),
                    description: D.intl.string(D.t["1uPk1Z"]),
                    primaryAsset: t$,
                    ctaText: D.intl.string(D.t.y9TxXV),
                    onCtaClick: h,
                },
            ],
            i = (e = e.filter((e) => null != e))[0].featured,
            n = i ? 5 : 6;
        return e.splice(+!!i, 0, C), e.length > n && e.splice(n, e.length - n), e;
    }, [S, C, P, v, s, T, b, p, h, N, R, A, t, r, c, o]);
}
var tJ = i(355097),
    t0 = i(64514),
    t1 = i(121818),
    t2 =
        (((s = {}).BEST_OF_NITRO = "bestof"),
        (s.APPEARANCE_STYLE = "appearance"),
        (s.UPGRADES = "upgrades"),
        (s.VIP_EXTRAS = "vip"),
        s);
let t7 = [
    { id: "bestof", label: () => D.intl.string(D.t.q1u7nQ) },
    { id: "appearance", label: () => D.intl.string(D.t.CUnZkZ) },
    { id: "upgrades", label: () => D.intl.string(D.t.KC5q8v) },
    { id: "vip", label: () => D.intl.string(D.t.DjEAcv) },
];
var t8 = i(758495);
function t5(e) {
    let { glowingPerkId: t = null } = e,
        i = (function () {
            let e = (0, tp.DP)(),
                t = (0, tN.X)("useFavoritesPerkCards"),
                i = (0, tf.Lh)(),
                s = (0, t_.N)(i)?.standard ?? null,
                { analyticsLocations: r } = (0, x.Ay)(g.A.PREMIUM_MARKETING_PERK_CARD),
                l = (0, tx.A)({ scrollPosition: tJ._F.TRY_IT_OUT, analyticsLocations: r }),
                c = (0, n.useCallback)(() => {
                    (0, Z.openUserSettings)(Y.X.APPEARANCE_THEME_CATEGORY, { analyticsLocations: r });
                }, [r]),
                d = (0, n.useCallback)(() => {
                    (0, Z.openUserSettings)(Y.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, { analyticsLocations: r });
                }, [r]),
                o = (0, n.useCallback)(() => {
                    (0, Z.openUserSettings)(Y.X.APPEARANCE_IN_APP_ICON_CATEGORY, { analyticsLocations: r });
                }, [r]),
                u = (0, n.useCallback)(() => {
                    (0, tE.pX)(eE.BVt.COLLECTIBLES_SHOP);
                }, []),
                m = (0, n.useCallback)(() => {
                    (0, Z.openUserSettings)(Y.X.SOUNDBOARD_CATEGORY, { analyticsLocations: r });
                }, [r]),
                A = (0, th.A)({ analyticsLocations: r }),
                p = (0, n.useCallback)(() => {
                    (0, Z.openUserSettings)(Y.X.PROFILE_PANEL, { analyticsLocations: r }, () =>
                        (0, tg.L)({ analyticsLocations: r }),
                    );
                }, [r]),
                E = tQ(),
                N = (0, n.useMemo)(() => E.map((e) => e?.id), [E]),
                h = (0, n.useMemo)(
                    () => [
                        {
                            id: tR.SERVER_BOOSTS_CARD_ID,
                            title: D.intl.formatToPlainString(D.t.pWySes, { boostCount: 2, percentageOff: 30 }),
                            description: D.intl.formatToPlainString(D.t.cWFUoT, { boostCount: 2, percentageOff: 30 }),
                            subscriptionRequired: !0,
                            ctaText: D.intl.string(D.t.jVcuVY),
                            onCtaClick: d,
                            primaryAsset: (0, a.jsx)(e9, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tR.PROFILES_CARD_ID,
                            title: D.intl.string(D.t.xDRab3),
                            description: D.intl.string(D.t.yn6fWA),
                            ctaText: D.intl.string(D.t.jVcuVY),
                            onCtaClick: t ? A : l,
                            primaryAsset: (0, a.jsx)(e4, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tR.HD_VIDEO_CARD_ID,
                            title: D.intl.string(D.t["/mQ5gg"]),
                            description: D.intl.string(D.t["7WwAXh"]),
                            primaryAsset: (0, a.jsx)(te, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tR.CLIENT_THEMES_CARD_ID,
                            title: D.intl.string(D.t.acc6h6),
                            description: D.intl.formatToPlainString(D.t.WQazjs, { themeCount: 20 }),
                            ctaText: D.intl.string(D.t.jVcuVY),
                            onCtaClick: c,
                            primaryAsset: tq,
                            categories: ["bestof", "appearance"],
                        },
                        {
                            id: tR.MORE_EMOJIS_CARD_ID,
                            title: D.intl.string(D.t.D8vIDT),
                            description: D.intl.string(D.t.DRMecB),
                            primaryAsset: (0, a.jsx)(ti, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tR.LARGE_UPLOADS_CARD_ID,
                            title: D.intl.string(D.t.nL1WZV),
                            description: D.intl.formatToPlainString(D.t.k8LC1w, { maxSizeMb: 500 }),
                            primaryAsset: (0, a.jsx)(ts, { alt: "", ariaHidden: !0 }),
                            categories: ["bestof", "upgrades"],
                        },
                        {
                            id: tR.CUSTOM_APP_ICONS_CARD_ID,
                            title: D.intl.string(D.t["GU+wqh"]),
                            description: D.intl.string(D.t["1uPk1Z"]),
                            ctaText: D.intl.string(D.t.jVcuVY),
                            onCtaClick: o,
                            primaryAsset: t$,
                            categories: ["appearance"],
                        },
                        {
                            id: tR.ENTRANCE_SOUNDS_CARD_ID,
                            title: D.intl.string(D.t.WJfCPi),
                            description: D.intl.string(D.t.liQKJR),
                            ctaText: D.intl.string(D.t.jVcuVY),
                            onCtaClick: m,
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/61471321446262d980f72210a31bbce561d7021e51f4ea2988d63e413df9fe04.svg",
                            categories: ["appearance"],
                        },
                        {
                            id: tR.DISPLAY_NAME_STYLES_CARD_ID,
                            title: D.intl.string(D.t.OLtTrt),
                            description: D.intl.string(D.t["di/pXR"]),
                            onCtaClick: t ? A : p,
                            ctaText: D.intl.string(D.t.jVcuVY),
                            primaryAsset: tZ,
                            categories: ["appearance"],
                        },
                        {
                            id: tR.CUSTOM_SOUNDS_CARD_ID,
                            title: D.intl.string(D.t["Cu/oFd"]),
                            description: D.intl.string(D.t.czj2aa),
                            primaryAsset: (0, a.jsx)(ta, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tR.SPECIAL_STICKERS_CARD_ID,
                            title: D.intl.string(D.t.MQoVeb),
                            description: D.intl.string(D.t.HGCLZX),
                            primaryAsset:
                                "https://cdn.discordapp.com/assets/content/c2f81ce9cd5a044c2108e06f6315d207248ac42098113affcc7afe59458e6d58.svg",
                            categories: ["upgrades"],
                        },
                        {
                            id: tR.SUPER_REACTIONS_CARD_ID,
                            title: D.intl.string(D.t.qERvAA),
                            description: D.intl.string(D.t.WkUWzx),
                            primaryAsset: (0, a.jsx)(tn, { alt: "", ariaHidden: !0 }),
                            categories: ["upgrades"],
                        },
                        {
                            id: tR.VIDEO_BACKGROUNDS_CARD_ID,
                            title: D.intl.string(D.t.ssVDYQ),
                            description: D.intl.string(D.t.aUSRMa),
                            primaryAsset: (0, tA.M)(e) ? t0 : t1,
                            categories: ["upgrades"],
                        },
                        {
                            id: tR.EARLY_ACCESS_CARD_ID,
                            title: D.intl.string(D.t["g/KRY6"]),
                            description: D.intl.string(D.t.JzAmJc),
                            primaryAsset: (0, a.jsx)(tr, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tR.BADGE_CARD_ID,
                            title: D.intl.string(D.t.Bn3CtB),
                            description: D.intl.string(D.t.LmENwu),
                            subscriptionRequired: !0,
                            primaryAsset:
                                null != s
                                    ? (0, a.jsx)("img", { src: s, alt: "", width: 160, draggable: "false" })
                                    : (0, a.jsx)(td, { color: tl.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tR.SPECIAL_MEMBER_PRICING_CARD_ID,
                            title: D.intl.string(D.t["MTD+7w"]),
                            description: D.intl.string(D.t.Bhs0s6),
                            ctaText: D.intl.string(D.t.dBJVnZ),
                            onCtaClick: u,
                            primaryAsset: (0, a.jsx)(to, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                        {
                            id: tR.PERMADECOS_CARD_ID,
                            title: D.intl.string(D.t.L14NZN),
                            description: D.intl.string(D.t.eCZkAI),
                            primaryAsset: (0, a.jsx)(tm, { alt: "", ariaHidden: !0 }),
                            categories: ["vip"],
                        },
                    ],
                    [e, s, l, c, d, o, u, m, p, A, t],
                );
            return (0, n.useMemo)(() => h.filter((e) => null != e && !N.includes(e.id)), [h, N]);
        })(),
        s = null != t ? i.find((e) => e?.id === t) : null,
        [r, l] = (0, n.useState)(s?.categories[0] ?? t2.BEST_OF_NITRO),
        c = (0, n.useMemo)(() => i.filter((e) => null != e && e.categories.includes(r)), [i, r]);
    return (0, a.jsxs)("div", {
        className: t8.uW,
        children: [
            (0, a.jsx)(O.D, { variant: "display-sm", className: t8.R_, children: D.intl.string(D.t["Uh3+CA"]) }),
            (0, a.jsx)(e5.V, {
                type: "top-pill",
                look: "custom",
                selectedItem: r,
                onItemSelect: l,
                className: t8.Lq,
                "aria-label": D.intl.string(D.t["Uh3+CA"]),
                children: t7.map((e) =>
                    (0, a.jsx)(e5.V.Item, { id: e.id, className: t8.IC, children: e.label() }, e.id),
                ),
            }),
            (0, a.jsx)(
                e3.A,
                {
                    gap: 20,
                    className: t8.jG,
                    children: c.map((e) => {
                        if (null != e)
                            return (0, a.jsx)(e6.S, { ...e, glowing: t === e.id, containerClassName: t8.Ui }, e.id);
                    }),
                },
                r,
            ),
        ],
    });
}
var t3 = i(254748),
    t6 = i(672193);
function t9(e) {
    let { glowingPerkId: t = null } = e,
        i = tQ();
    return (0, a.jsx)(t3.A, {
        sectionClassName: t6.uW,
        heading: (0, a.jsx)(O.D, { variant: "display-sm", className: t6.R_, children: D.intl.string(D.t.Aw5DRm) }),
        grid: (0, a.jsx)(a.Fragment, {
            children: i.map((e, i) => {
                if (null == e) return;
                let s = 0 === i && !0 === e.featured;
                return (0, a.jsx)(
                    e6.S,
                    { ...e, glowing: t === e.id, featured: s, containerClassName: l()(t6.Nr, { [t6.Nq]: s }) },
                    e.id,
                );
            }),
        }),
    });
}
var t4 = i(549384),
    ie = i(994763),
    it = i(946062),
    ii = i(288894);
let is = "section",
    ia = "perk",
    ir = (e) => {
        let { userId: t } = e,
            i = (0, b.ds)(),
            s = (0, E.l)("PremiumSubscriberHome"),
            r = (0, c.zy)();
        n.useEffect(() => {
            p.h.wait(async () => {
                let e = [(0, f.Ay)()];
                null != t && e.push((0, C.A)(t)), await Promise.all(e);
            });
        }, [t]),
            n.useEffect(() => {
                X(!0);
            }, []),
            (0, j.j)(),
            (0, h.P)(N.b);
        let O = n.useRef(null),
            y = n.useRef(null),
            M = (0, d.bG)([I.A], () => I.A.getPremiumTypeSubscription()),
            { isReady: L, programReward: G, isEligible: k } = (0, _.F)({ location: "PremiumSubscriberHome" }),
            {
                scrollTargetId: w,
                glowingSectionId: F,
                glowingPerkId: V,
                scrollBlock: H,
                scrollInline: B,
            } = n.useMemo(() => {
                let e = new URLSearchParams(r.search),
                    t = e.get(ia),
                    i = e.get(is);
                return null != t
                    ? { scrollTargetId: t, glowingPerkId: t, scrollBlock: "center", scrollInline: "center" }
                    : null != i
                      ? { scrollTargetId: i, glowingSectionId: i, scrollBlock: "start" }
                      : {};
            }, [r.search]);
        (0, ie.z)(w ?? "", null != w, H, B);
        let [z, X] = n.useState(!1),
            W = (0, S.p)(),
            K = n.useRef(null),
            [Y, Z] = n.useState(!1),
            $ = null != W && null != M && M.status === eE.Dmq.CANCELED,
            q = (0, v.iU)(eK.gD.PREMIUM_MONTH_TIER_2, W, M),
            Q = !Y && $,
            { analyticsLocations: J } = (0, x.Ay)(g.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
            [ee, et] = n.useState(!1);
        return null != (0, d.bG)([R.A], () => (null != t ? R.A.getUserProfile(t) : null)) && (L || null != G)
            ? (0, a.jsxs)(m.Gt, {
                  className: it.xW,
                  ref: O,
                  children: [
                      (0, a.jsx)(A.h, {
                          color: "nitro-pink",
                          className: l()(it.kL, it.Gd),
                          offsetBottom: i ? 0.55 : 0.8,
                          children: (0, a.jsxs)(x.f5, {
                              value: J,
                              children: [
                                  (0, a.jsx)(o.L, {
                                      innerRef: K,
                                      onChange: (e) => Z(e),
                                      threshold: 0.1,
                                      active: !0,
                                      children: (0, a.jsx)(eJ, {
                                          buttonVisibilityRef: K,
                                          className: it.v1,
                                          userDiscountOffer: W,
                                          discountedPrice: q,
                                      }),
                                  }),
                                  (0, a.jsx)(P.A, { glowingSectionId: F }),
                                  (0, a.jsx)(t9, { glowingPerkId: V }),
                                  null != G &&
                                      k &&
                                      !s &&
                                      (0, a.jsx)(t4.A, { location: g.A.PREMIUM_MARKETING_NITRO_HOME_ORBS_SECTION }),
                                  (0, a.jsx)(t5, { glowingPerkId: V }),
                                  (0, a.jsx)(U, {
                                      className: it.Zy,
                                      location: g.A.PREMIUM_MARKETING_GIFT_SECTION,
                                      analyticsLocation: { page: eE.liQ.NITRO_HOME, section: eE.JJy.GIFT_BANNER },
                                  }),
                                  (0, a.jsx)("div", { className: it.hz }),
                                  (0, a.jsx)(o.L, {
                                      innerRef: y,
                                      onChange: (e) => {
                                          e &&
                                              !ee &&
                                              (T.default.track(eE.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                                                  location_stack: J,
                                              }),
                                              et(!0));
                                      },
                                      children: (0, a.jsx)("div", { ref: y, className: it._Z }),
                                  }),
                                  (0, a.jsx)("img", {
                                      src: ii,
                                      className: it.Kw,
                                      width: 112,
                                      height: 85,
                                      alt: D.intl.string(D.t.X4IxWL),
                                  }),
                              ],
                          }),
                      }),
                      $ &&
                          null != q &&
                          (0, a.jsx)(e8, {
                              isVisible: Q && z,
                              premiumSubscription: M,
                              churnDiscountOffer: W,
                              discountedPrice: q,
                          }),
                  ],
              })
            : (0, a.jsx)("div", { className: l()(it.kL, it.Lq), children: (0, a.jsx)(u.y, {}) });
    };
