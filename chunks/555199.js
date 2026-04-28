i.d(t, { A: () => eM });
var a = i(627968);
i(64700);
var s = i(503698),
    n = i.n(s),
    r = i(877624);
let l =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function c(e) {
    let { alt: t, ariaLabel: i, ariaHidden: s, role: n, width: r = 288, height: c = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: c },
        src: l,
        srcSet: `${l} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": i,
        "aria-hidden": s,
        role: n ?? "img",
    });
}
var d = i(17928),
    o = i(502572),
    u = i(192308),
    m = i(331322),
    A = i(834730),
    p = i(403581),
    g = i(821609),
    x = i(775602),
    h = i(793574),
    N = i(688810),
    f = i(366999),
    E = i(531260),
    R = i(780964),
    _ = i(858897),
    C = i(166403),
    I = i(786300),
    T = i(975571),
    b = i(927578),
    S = i(40185),
    v = i(89366),
    j = i(881489),
    O = i(422936),
    P = i(234419),
    y = i(549996),
    M = i(371764),
    D = i(949964),
    L = i(103411);
i(321073);
var U = i(778712),
    G = i(97808),
    w = i(590251),
    k = i(144165),
    F = i(534514),
    V = i(854627),
    B = i(954571),
    z = i(427262),
    H = i(326084),
    X = i(851746),
    W = i(664654),
    K = i(212737),
    Y = i(652215),
    $ = i(985018),
    Z = i(849812);
let q = (e) => {
        let { user: t } = e,
            { avatarSrc: i, eventHandlers: s } = (0, V.A)({ userId: t.id, size: U._3.SIZE_24 });
        return (0, a.jsx)(
            G.eu,
            { className: Z.bj, src: i, "aria-label": (0, z.mG)(t), size: U._3.SIZE_24, ...s },
            t.id,
        );
    },
    Q = (e) => {
        let { slotIndex: t } = e;
        return (0, a.jsx)("div", { className: Z.p, children: t });
    },
    J = (e) => {
        let { referralSentUsers: t } = e;
        return (0, a.jsx)("div", {
            className: Z.L$,
            children: (() => {
                let e = [];
                for (let i = 0; i < W.Z; i++)
                    if (t?.[i] !== void 0) {
                        let s = (0, a.jsx)(q, { user: t[i] }, t[i].id);
                        e.push(s);
                    } else {
                        let t = (0, a.jsx)(Q, { slotIndex: i + 1 }, i);
                        e.push(t);
                    }
                return e;
            })(),
        });
    },
    ee = (e) => {
        let { nReferralsSent: t } = e;
        return (0, a.jsx)(w.a, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: Z.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: Z.e0,
            overlayClassName: t === W.Z ? Z.ys : void 0,
            children: (0, a.jsx)(k._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    et = (e) => {
        let { className: t } = e,
            { referralSentUsers: s } = (0, W.J)(),
            r = (0, d.bG)([X.A], () => X.A.getRecipientStatus()),
            l = (0, d.bG)([X.A], () => X.A.getHasEligibleFriends()),
            c = r.size === W.Z && [...r.values()].every((e) => e === H.aK.REDEEMED),
            o = r.size === W.Z;
        return (0, a.jsxs)("div", {
            className: n()(Z.kL, t),
            children: [
                (0, a.jsx)("div", { className: Z.G3, children: (0, a.jsx)(ee, { nReferralsSent: r.size }) }),
                (0, a.jsxs)("div", {
                    className: Z.IH,
                    children: [
                        (0, a.jsx)(J, { referralSentUsers: s }),
                        (0, a.jsxs)("div", {
                            className: Z.n4,
                            children: [
                                (0, a.jsx)(F.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: $.intl.string($.t.USo4s7),
                                }),
                                (0, a.jsx)(A.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === l
                                            ? $.intl.format($.t["zWhX/Q"], {
                                                  helpdeskArticle: T.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                              })
                                            : s.length === W.Z
                                              ? !0 === c
                                                  ? $.intl.format($.t["1aEjsH"], {
                                                        helpdeskArticle: T.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : $.intl.format($.t["+u3AOO"], {
                                                        helpdeskArticle: T.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : $.intl.format($.t["omMr+V"], {
                                                    helpdeskArticle: T.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(g.$, {
                            variant: "primary",
                            disabled: !1 === l || !0 === o,
                            text: $.intl.string($.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: s } = e;
                                    B.default.track(Y.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: s,
                                    }),
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(i.bind(i, 212737));
                                            return (i) => (0, a.jsx)(e, { ...i, startingScreen: t });
                                        });
                                })({
                                    startingScreen: K.SelectFriendsModalScreens.SELECT_FRIENDS,
                                    analyticsLocations: [],
                                }),
                        }),
                    ],
                }),
            ],
        });
    };
var ei = i(65470),
    ea = i(792656),
    es = i(511484),
    en = i(989349),
    er = i.n(en),
    el = i(496431),
    ec = i(116689);
let ed = (e) => {
    let { expiresAt: t, className: i } = e,
        s = (0, el.A)(er()(t).toDate(), 1e3);
    if (null == s) return null;
    let { days: r, hours: l, minutes: c, seconds: d } = s,
        o = [
            { unitValue: r, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: c, unitType: "minutes" },
            { unitValue: d, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: n()(ec.Xl, i),
        children: [
            (0, a.jsx)(A.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: $.intl.string($.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: ec.$R,
                children: o.map((e, t) =>
                    (function (e, t) {
                        let i,
                            [s, n] = 1 === (i = e.unitValue.toString()).length ? ["0", i[0]] : [i[0], i[1]];
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: ec.bh,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: ec.kB,
                                                children: [
                                                    (0, a.jsx)("div", {
                                                        className: ec.B2,
                                                        children: (0, a.jsx)(A.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: s,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: ec.B2,
                                                        children: (0, a.jsx)(A.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: n,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(A.E, {
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
                                    (0, a.jsx)(A.E, {
                                        className: ec.cV,
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
var eo = i(473702),
    eu = i(505559),
    em = i(725807),
    eA = i(774774),
    ep = i(695661);
let eg = () => {
    let e = { section: Y.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: ep.vK,
        children: [
            (0, a.jsx)(eA.e4, { text: $.intl.string($.t.qYKftX), className: ep.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: ep._u,
            }),
            (0, a.jsx)("div", {
                className: ep.IP,
                children: (0, a.jsx)(A.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: $.intl.format($.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(em.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: ep.aA,
                shinyButtonClassName: ep.Xp,
            }),
        ],
    });
};
var ex = i(103733),
    eh = i(702841),
    eN = i(384601),
    ef = i(584151);
let eE = () => {
    let e = (0, eh.bG)([x.A], () => x.A.useReducedMotion);
    return (0, a.jsx)(eN.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: ef.cI,
        hammerContainerClassName: ef.qg,
        keyContainerClassName: ef.h2,
        boltContainerClassName: ef.Bz,
        starAssetClassName: ef.ks,
        hammerAssetClassName: ef.GY,
        keyAssetClassName: ef.p4,
        boltAssetClassName: ef.vy,
    });
};
var eR = i(608416),
    e_ = i(447764),
    eC = i(180894);
let eI = (e) => {
    let { containerVisibilityPercentage: t } = e,
        i = (0, eh.bG)([x.A], () => x.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: e_.BI,
                children: (0, a.jsx)(eR.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eR.$G },
                    yAxisAnimationData: { range: 20, duration: eR.Mp, path: eR.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: i,
                    parallaxAnimationData: {
                        pathDirection: eR.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, a.jsx)("img", { src: eC.A, alt: "", className: e_.Q }),
                }),
            }),
            (0, a.jsx)(eN.A, {
                isMotionReduced: i,
                containerVisibilityPercentage: t,
                hammerContainerClassName: e_.Gj,
                keyContainerClassName: e_.FV,
                starContainerClassName: e_.E1,
                hammerAssetClassName: e_.Wv,
                keyAssetClassName: e_.rs,
                starAssetClassName: e_.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var eT = i(218199);
let eb = (e) => {
    let { className: t, color: i = "text-strong", responsive: s = !0, children: r } = e;
    return (0, a.jsx)(F.D, { className: n()(eT.w, t, s && eT.n), variant: "display-md", color: i, children: r });
};
var eS = i(788868),
    ev = i(97584);
let ej = (e) => {
        let { fpEndsAt: t, className: i, buttonVisibilityRef: s } = e,
            r = (0, j.Zb)(t);
        return (0, a.jsx)("div", {
            className: n()(ev.kL, i),
            ref: s,
            children: (0, a.jsxs)("div", {
                className: ev.ap,
                children: [
                    (0, a.jsxs)(m.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, a.jsx)(eu.A, { text: $.intl.string($.t.yhldRB) }),
                            (0, a.jsxs)(m.B, {
                                align: "start",
                                gap: 12,
                                className: ev.rG,
                                children: [
                                    (0, a.jsx)(eb, { children: $.intl.format($.t.FwjP6W, { days: r }) }),
                                    (0, a.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: $.intl.string($.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(m.B, {
                                direction: "horizontal",
                                align: "center",
                                gap: 12,
                                children: [
                                    (0, a.jsx)(ea.A, {
                                        size: "md",
                                        buttonTextOverride: $.intl.string($.t["2+luBl"]),
                                        iconOverride: p.t,
                                        variantOverride: "expressive",
                                    }),
                                    (0, a.jsx)(g.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: $.intl.string($.t.Af7ye6),
                                        onClick: () => (0, _.openUserSettings)(R.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ev.Hk,
                        children: [(0, a.jsx)(c, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(eE, {})],
                    }),
                ],
            }),
        });
    },
    eO = (e) => {
        let { className: t, isEligibleForBogoPromotion: s, isInReverseTrial: l, shouldShowReferralProgressBar: c } = e,
            {
                headingText: o,
                headingTop: m,
                showPill: f,
                userDiscountOffer: R,
                discountedPrice: _,
                buttonVisibilityRef: I,
            } = ey(),
            { analyticsLocations: T } = (0, N.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
            S = (0, y.c)(r.C.MARKETING_PAGE_BANNER),
            v = null;
        null != S && "marketingPageBanner" === S.properties.properties.oneofKind
            ? (v = (0, a.jsx)(M.x, {
                  componentId: S.id,
                  promotionBannerMarketingComponentFields: S.properties.properties.marketingPageBanner,
              }))
            : s
              ? (v = (0, a.jsx)(D.A, { variant: D.c.SUBSCRIBER_HOME }))
              : l
                ? (v = (0, a.jsx)(eg, {}))
                : c && (v = (0, a.jsx)(et, {}));
        let j = (0, d.bG)([C.A], () => C.A.getPremiumTypeSubscription()),
            L = null != j && j.status === Y.Dmq.CANCELED && null != R,
            U = (0, P.V)(),
            G = (0, O.O)(),
            w = (0, es.U9)(G, eS.pe.TIER_2) ? eS.pe.TIER_2 : void 0,
            k = null != j && j.status !== Y.Dmq.ACCOUNT_HOLD && j.hasAnyPremiumNitro,
            F = (0, E.A)(),
            V = F.isFractionalPremiumActive && !k && null == v && !L,
            B = (0, d.bG)([x.A], () => x.A.useReducedMotion),
            { visibilityPercentageRef: z, visibilityPercentage: H } = (0, ex.U)(!B);
        return l
            ? (0, a.jsx)(ej, { fpEndsAt: F.currentEntitlementEndsAt, className: t, buttonVisibilityRef: I })
            : (0, a.jsx)("div", {
                  className: n()(ev.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: I,
                  children: (0, a.jsxs)("div", {
                      className: ev.Qs,
                      ref: z,
                      children: [
                          f && m,
                          (0, a.jsxs)("div", {
                              className: ev.N1,
                              children: [
                                  (0, a.jsx)(eI, { containerVisibilityPercentage: H }),
                                  L &&
                                      null != R.expires_at &&
                                      (0, a.jsx)(ed, { expiresAt: R.expires_at, className: ev.IZ }),
                                  (0, a.jsx)(eb, {
                                      children: L ? $.intl.format($.t["3yZP0G"], { percent: R.discount.amount }) : o,
                                  }),
                                  L &&
                                      null != _ &&
                                      (0, a.jsx)(A.E, {
                                          className: ev.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: $.intl.format($.t["3Q4wCy"], {
                                              discountedPrice: _,
                                              billingPeriod: (0, b.Ke)(R.discount.user_usage_limit_interval),
                                              numMonths: R.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: V || L ? ev.UJ : void 0,
                              children: [
                                  V &&
                                      (0, a.jsx)(ea.A, {
                                          size: "md",
                                          hasActivePromotion: !!s,
                                          subscriptionTier: U?.subscription_trial?.sku_id ?? w,
                                      }),
                                  L &&
                                      (0, a.jsx)(g.$, {
                                          variant: "expressive",
                                          icon: p.t,
                                          size: "md",
                                          text: $.intl.string($.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = eo.g.CONFIRM_DISCOUNT),
                                                  void (0, u.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              i.e("13709"),
                                                              i.e("63397"),
                                                              i.e("97189"),
                                                              i.e("24059"),
                                                              i.e("51402"),
                                                              i.e("25738"),
                                                              i.e("84580"),
                                                              i.e("40841"),
                                                              i.e("22810"),
                                                              i.e("5036"),
                                                              i.e("54333"),
                                                              i.e("97271"),
                                                              i.e("22513"),
                                                              i.e("32442"),
                                                              i.e("75058"),
                                                              i.e("54718"),
                                                              i.e("71934"),
                                                              i.e("60049"),
                                                              i.e("45235"),
                                                              i.e("92652"),
                                                              i.e("86483"),
                                                              i.e("31632"),
                                                              i.e("86821"),
                                                              i.e("25568"),
                                                              i.e("32260"),
                                                              i.e("7276"),
                                                              i.e("72823"),
                                                              i.e("85484"),
                                                              i.e("84615"),
                                                              i.e("63941"),
                                                              i.e("63009"),
                                                              i.e("23924"),
                                                              i.e("15510"),
                                                              i.e("48226"),
                                                              i.e("57036"),
                                                              i.e("88394"),
                                                              i.e("15380"),
                                                              i.e("207"),
                                                              i.e("20287"),
                                                              i.e("28367"),
                                                              i.e("35429"),
                                                              i.e("10471"),
                                                              i.e("64827"),
                                                              i.e("30938"),
                                                              i.e("23808"),
                                                              i.e("11301"),
                                                              i.e("61737"),
                                                              i.e("79428"),
                                                              i.e("29963"),
                                                              i.e("47834"),
                                                              i.e("98329"),
                                                              i.e("20317"),
                                                              i.e("2368"),
                                                              i.e("24313"),
                                                              i.e("48405"),
                                                              i.e("63185"),
                                                              i.e("19551"),
                                                              i.e("84150"),
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
                                                              i.e("21690"),
                                                              i.e("32551"),
                                                              i.e("31644"),
                                                              i.e("52367"),
                                                              i.e("23353"),
                                                              i.e("36561"),
                                                              i.e("50015"),
                                                              i.e("77998"),
                                                              i.e("31145"),
                                                              i.e("11523"),
                                                              i.e("66900"),
                                                              i.e("44695"),
                                                              i.e("10004"),
                                                              i.e("55314"),
                                                              i.e("44376"),
                                                              i.e("9915"),
                                                              i.e("96905"),
                                                              i.e("70653"),
                                                              i.e("31825"),
                                                              i.e("54527"),
                                                              i.e("72535"),
                                                              i.e("51485"),
                                                              i.e("26490"),
                                                              i.e("76170"),
                                                              i.e("32817"),
                                                              i.e("51243"),
                                                              i.e("18943"),
                                                              i.e("89094"),
                                                              i.e("84103"),
                                                              i.e("28561"),
                                                              i.e("96123"),
                                                              i.e("27168"),
                                                              i.e("39038"),
                                                              i.e("36320"),
                                                              i.e("77245"),
                                                              i.e("31549"),
                                                              i.e("20320"),
                                                              i.e("43919"),
                                                              i.e("31390"),
                                                              i.e("57906"),
                                                              i.e("45421"),
                                                              i.e("44265"),
                                                              i.e("99141"),
                                                              i.e("21435"),
                                                              i.e("98793"),
                                                              i.e("92731"),
                                                              i.e("25990"),
                                                              i.e("33584"),
                                                              i.e("63095"),
                                                              i.e("68647"),
                                                              i.e("67657"),
                                                              i.e("64615"),
                                                              i.e("88017"),
                                                              i.e("87225"),
                                                              i.e("12373"),
                                                              i.e("75134"),
                                                              i.e("84967"),
                                                              i.e("23216"),
                                                              i.e("30770"),
                                                              i.e("56212"),
                                                              i.e("47017"),
                                                              i.e("36498"),
                                                              i.e("3458"),
                                                              i.e("62827"),
                                                              i.e("1555"),
                                                              i.e("73547"),
                                                              i.e("99593"),
                                                              i.e("61935"),
                                                              i.e("62168"),
                                                              i.e("55602"),
                                                              i.e("52463"),
                                                              i.e("13499"),
                                                              i.e("993"),
                                                              i.e("91381"),
                                                              i.e("10034"),
                                                              i.e("72832"),
                                                              i.e("95183"),
                                                              i.e("73500"),
                                                              i.e("35403"),
                                                              i.e("17286"),
                                                              i.e("34472"),
                                                              i.e("11527"),
                                                              i.e("45723"),
                                                              i.e("29375"),
                                                              i.e("6223"),
                                                              i.e("48778"),
                                                              i.e("38835"),
                                                              i.e("90889"),
                                                              i.e("2537"),
                                                              i.e("78777"),
                                                              i.e("93708"),
                                                              i.e("71482"),
                                                              i.e("72727"),
                                                              i.e("36126"),
                                                              i.e("80565"),
                                                              i.e("58765"),
                                                              i.e("78707"),
                                                              i.e("65881"),
                                                              i.e("10745"),
                                                              i.e("84113"),
                                                              i.e("51391"),
                                                              i.e("91942"),
                                                              i.e("89465"),
                                                              i.e("51130"),
                                                              i.e("1827"),
                                                              i.e("77084"),
                                                              i.e("64480"),
                                                              i.e("96565"),
                                                              i.e("78651"),
                                                              i.e("46568"),
                                                              i.e("39406"),
                                                              i.e("95093"),
                                                              i.e("62615"),
                                                              i.e("60177"),
                                                              i.e("21976"),
                                                              i.e("1006"),
                                                              i.e("20007"),
                                                              i.e("99518"),
                                                              i.e("59880"),
                                                              i.e("23276"),
                                                              i.e("10567"),
                                                              i.e("5636"),
                                                              i.e("95444"),
                                                              i.e("38472"),
                                                              i.e("48720"),
                                                              i.e("77446"),
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
                                                              analyticsLocations: T,
                                                              initialStep: e,
                                                              premiumSubscription: j,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, a.jsx)(ei.A, {
                                      variant: V || L ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: $.intl.string($.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          v,
                      ],
                  }),
              });
    },
    [eP, ey] = (0, I.A)(),
    eM = (e) => {
        let { className: t, buttonVisibilityRef: i, userDiscountOffer: s, discountedPrice: n } = e,
            { analyticsLocations: r } = (0, N.Ay)(h.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, j.ds)(),
            c = (0, S.cg)(),
            d = (0, v.QQ)(),
            u = $.intl.string($.t.qYKftX),
            m = (0, L.m)(),
            A = $.intl.string($.t.ifwQZb),
            { fractionalState: p, endsAt: g } = (0, E.A)(),
            x = (0, f.Ay)(g, f.yE.CREDITS_ENDS_IN),
            R = null;
        if (p === eS.xc.NONE || l) R = (0, a.jsx)(eu.A, { text: u });
        else {
            d = !0;
            let e = $.intl.format($.t["yR+oDD"], { helpCenterLink: T.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            R = (0, a.jsx)(o.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: ev.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: ev.V_,
                        children: (0, a.jsx)("div", { className: ev.eL, children: (0, a.jsx)(eu.A, { text: x }) }),
                    }),
            });
        }
        return (0, a.jsx)(N.f5, {
            value: r,
            children: (0, a.jsx)(eP.Provider, {
                value: {
                    headingText: A,
                    headingTop: R,
                    showPill: d,
                    userDiscountOffer: s,
                    discountedPrice: n,
                    buttonVisibilityRef: i,
                },
                children: (0, a.jsx)(eO, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: m,
                }),
            }),
        });
    };
