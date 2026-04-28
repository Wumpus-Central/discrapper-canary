n.d(t, { A: () => eM });
var a = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    s = n(877624);
let l =
    "https://cdn.discordapp.com/assets/content/b56ad561e631257c1b2d6df674de1baa304710fe81885084e07c119b5a87127e.png";
function c(e) {
    let { alt: t, ariaLabel: n, ariaHidden: r, role: i, width: s = 288, height: c = 192 } = e;
    return (0, a.jsx)("img", {
        style: { width: s, height: c },
        src: l,
        srcSet: `${l} 1x, https://cdn.discordapp.com/assets/content/0d8192495ed73de2381103f061bb6a13f481d93f60e26090c2776f6329bd1bc3.png 2x`,
        alt: t,
        "aria-label": n,
        "aria-hidden": r,
        role: i ?? "img",
    });
}
var o = n(17928),
    d = n(502572),
    u = n(192308),
    _ = n(331322),
    m = n(834730),
    p = n(403581),
    A = n(821609),
    f = n(775602),
    g = n(793574),
    h = n(688810),
    x = n(366999),
    b = n(531260),
    C = n(780964),
    N = n(858897),
    E = n(166403),
    R = n(786300),
    I = n(975571),
    v = n(927578),
    T = n(40185),
    S = n(89366),
    j = n(881489),
    y = n(422936),
    O = n(234419),
    P = n(549996),
    M = n(371764),
    L = n(949964),
    D = n(103411);
n(321073);
var k = n(778712),
    U = n(97808),
    w = n(590251),
    G = n(144165),
    B = n(534514),
    F = n(854627),
    V = n(954571),
    H = n(427262),
    z = n(326084),
    W = n(851746),
    X = n(664654),
    K = n(212737),
    Y = n(652215),
    $ = n(985018),
    q = n(849812);
let Z = (e) => {
        let { user: t } = e,
            { avatarSrc: n, eventHandlers: r } = (0, F.A)({ userId: t.id, size: k._3.SIZE_24 });
        return (0, a.jsx)(
            U.eu,
            { className: q.bj, src: n, "aria-label": (0, H.mG)(t), size: k._3.SIZE_24, ...r },
            t.id,
        );
    },
    Q = (e) => {
        let { slotIndex: t } = e;
        return (0, a.jsx)("div", { className: q.p, children: t });
    },
    J = (e) => {
        let { referralSentUsers: t } = e;
        return (0, a.jsx)("div", {
            className: q.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < X.Z; n++)
                    if (t?.[n] !== void 0) {
                        let r = (0, a.jsx)(Z, { user: t[n] }, t[n].id);
                        e.push(r);
                    } else {
                        let t = (0, a.jsx)(Q, { slotIndex: n + 1 }, n);
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
            background: q.cq,
            strokeSize: 0.8,
            ringColorOverrideClassName: q.e0,
            overlayClassName: t === X.Z ? q.ys : void 0,
            children: (0, a.jsx)(G._, {
                src: "https://cdn.discordapp.com/assets/content/f55a25cc26b81c0d72e110bb7fd978e6aff78e847f53b34011ba4600be592975.svg",
                height: 93,
                width: 93,
                zoomable: !1,
            }),
        });
    },
    et = (e) => {
        let { className: t } = e,
            { referralSentUsers: r } = (0, X.J)(),
            s = (0, o.bG)([W.A], () => W.A.getRecipientStatus()),
            l = (0, o.bG)([W.A], () => W.A.getHasEligibleFriends()),
            c = s.size === X.Z && [...s.values()].every((e) => e === z.aK.REDEEMED),
            d = s.size === X.Z;
        return (0, a.jsxs)("div", {
            className: i()(q.kL, t),
            children: [
                (0, a.jsx)("div", { className: q.G3, children: (0, a.jsx)(ee, { nReferralsSent: s.size }) }),
                (0, a.jsxs)("div", {
                    className: q.IH,
                    children: [
                        (0, a.jsx)(J, { referralSentUsers: r }),
                        (0, a.jsxs)("div", {
                            className: q.n4,
                            children: [
                                (0, a.jsx)(B.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: $.intl.string($.t.USo4s7),
                                }),
                                (0, a.jsx)(m.E, {
                                    variant: "text-md/medium",
                                    color: "text-subtle",
                                    children:
                                        !1 === l
                                            ? $.intl.format($.t["zWhX/Q"], {
                                                  helpdeskArticle: I.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                              })
                                            : r.length === X.Z
                                              ? !0 === c
                                                  ? $.intl.format($.t["1aEjsH"], {
                                                        helpdeskArticle: I.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                    })
                                                  : $.intl.format($.t["+u3AOO"], {
                                                        helpdeskArticle: I.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                    })
                                              : $.intl.format($.t["omMr+V"], {
                                                    helpdeskArticle: I.A.getArticleURL(Y.MVz.REFERRAL_PROGRAM),
                                                }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(A.$, {
                            variant: "primary",
                            disabled: !1 === l || !0 === d,
                            text: $.intl.string($.t.Lm2nFc),
                            onClick: () =>
                                ((e) => {
                                    let { startingScreen: t, analyticsLocations: r } = e;
                                    V.default.track(Y.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                        location_stack: r,
                                    }),
                                        (0, u.openModalLazy)(async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 212737));
                                            return (n) => (0, a.jsx)(e, { ...n, startingScreen: t });
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
var en = n(65470),
    ea = n(792656),
    er = n(511484),
    ei = n(989349),
    es = n.n(ei),
    el = n(496431),
    ec = n(116689);
let eo = (e) => {
    let { expiresAt: t, className: n } = e,
        r = (0, el.A)(es()(t).toDate(), 1e3);
    if (null == r) return null;
    let { days: s, hours: l, minutes: c, seconds: o } = r,
        d = [
            { unitValue: s, unitType: "days" },
            { unitValue: l, unitType: "hours" },
            { unitValue: c, unitType: "minutes" },
            { unitValue: o, unitType: "seconds" },
        ];
    return (0, a.jsxs)("div", {
        className: i()(ec.Xl, n),
        children: [
            (0, a.jsx)(m.E, {
                variant: "text-sm/semibold",
                color: "text-strong",
                children: $.intl.string($.t["/ARFVE"]),
            }),
            (0, a.jsx)("div", {
                className: ec.$R,
                children: d.map((e, t) =>
                    (function (e, t) {
                        let n,
                            [r, i] = 1 === (n = e.unitValue.toString()).length ? ["0", n[0]] : [n[0], n[1]];
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
                                                        children: (0, a.jsx)(m.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: r,
                                                        }),
                                                    }),
                                                    (0, a.jsx)("div", {
                                                        className: ec.B2,
                                                        children: (0, a.jsx)(m.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: i,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)(m.E, {
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
                                    (0, a.jsx)(m.E, {
                                        className: ec.cV,
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
var ed = n(473702),
    eu = n(505559),
    e_ = n(725807),
    em = n(774774),
    ep = n(695661);
let eA = () => {
    let e = { section: Y.JJy.REVERSE_TRIAL_BANNER };
    return (0, a.jsxs)("div", {
        className: ep.vK,
        children: [
            (0, a.jsx)(em.e4, { text: $.intl.string($.t.qYKftX), className: ep.Io }),
            (0, a.jsx)("img", {
                src: "/assets/b40444acfe4d521c.svg",
                width: 64,
                height: 64,
                alt: "",
                className: ep._u,
            }),
            (0, a.jsx)("div", {
                className: ep.IP,
                children: (0, a.jsx)(m.E, {
                    color: "text-subtle",
                    variant: "text-sm/normal",
                    children: $.intl.format($.t.uu1WAa, { weeks: 1 }),
                }),
            }),
            (0, a.jsx)(e_.A, {
                premiumModalAnalyticsLocation: e,
                showGradient: !0,
                className: ep.aA,
                shinyButtonClassName: ep.Xp,
            }),
        ],
    });
};
var ef = n(103733),
    eg = n(702841),
    eh = n(384601),
    ex = n(584151);
let eb = () => {
    let e = (0, eg.bG)([f.A], () => f.A.useReducedMotion);
    return (0, a.jsx)(eh.A, {
        isMotionReduced: e,
        blurScale: 0.4,
        starContainerClassName: ex.cI,
        hammerContainerClassName: ex.qg,
        keyContainerClassName: ex.h2,
        boltContainerClassName: ex.Bz,
        starAssetClassName: ex.ks,
        hammerAssetClassName: ex.GY,
        keyAssetClassName: ex.p4,
        boltAssetClassName: ex.vy,
    });
};
var eC = n(608416),
    eN = n(447764),
    eE = n(180894);
let eR = (e) => {
    let { containerVisibilityPercentage: t } = e,
        n = (0, eg.bG)([f.A], () => f.A.useReducedMotion);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: eN.BI,
                children: (0, a.jsx)(eC.Ay, {
                    scaleAnimationData: { startScale: 0.9, endScale: 1, duration: eC.$G },
                    yAxisAnimationData: { range: 20, duration: eC.Mp, path: eC.aV.SINE },
                    animateXAxisWiggle: !0,
                    isMotionReduced: n,
                    parallaxAnimationData: {
                        pathDirection: eC.MN.UP,
                        range: 125,
                        containerVisibilityPercentage: t,
                        changeOpacity: !0,
                    },
                    animationSpeedScale: 2,
                    children: (0, a.jsx)("img", { src: eE.A, alt: "", className: eN.Q }),
                }),
            }),
            (0, a.jsx)(eh.A, {
                isMotionReduced: n,
                containerVisibilityPercentage: t,
                hammerContainerClassName: eN.Gj,
                keyContainerClassName: eN.FV,
                starContainerClassName: eN.E1,
                hammerAssetClassName: eN.Wv,
                keyAssetClassName: eN.rs,
                starAssetClassName: eN.OY,
                animationSpeedScale: 2,
            }),
        ],
    });
};
var eI = n(218199);
let ev = (e) => {
    let { className: t, color: n = "text-strong", responsive: r = !0, children: s } = e;
    return (0, a.jsx)(B.D, { className: i()(eI.w, t, r && eI.n), variant: "display-md", color: n, children: s });
};
var eT = n(788868),
    eS = n(97584);
let ej = (e) => {
        let { fpEndsAt: t, className: n, buttonVisibilityRef: r } = e,
            s = (0, j.Zb)(t);
        return (0, a.jsx)("div", {
            className: i()(eS.kL, n),
            ref: r,
            children: (0, a.jsxs)("div", {
                className: eS.ap,
                children: [
                    (0, a.jsxs)(_.B, {
                        align: "start",
                        gap: 32,
                        children: [
                            (0, a.jsx)(eu.A, { text: $.intl.string($.t.yhldRB) }),
                            (0, a.jsxs)(_.B, {
                                align: "start",
                                gap: 12,
                                className: eS.rG,
                                children: [
                                    (0, a.jsx)(ev, { children: $.intl.format($.t.FwjP6W, { days: s }) }),
                                    (0, a.jsx)(m.E, {
                                        variant: "text-md/medium",
                                        color: "text-subtle",
                                        children: $.intl.string($.t.Jf8KrT),
                                    }),
                                ],
                            }),
                            (0, a.jsxs)(_.B, {
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
                                    (0, a.jsx)(A.$, {
                                        variant: "secondary",
                                        size: "md",
                                        text: $.intl.string($.t.Af7ye6),
                                        onClick: () => (0, N.openUserSettings)(C.X.SUBSCRIPTIONS_PANEL),
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: eS.Hk,
                        children: [(0, a.jsx)(c, { alt: "", width: "100%", height: "auto" }), (0, a.jsx)(eb, {})],
                    }),
                ],
            }),
        });
    },
    ey = (e) => {
        let { className: t, isEligibleForBogoPromotion: r, isInReverseTrial: l, shouldShowReferralProgressBar: c } = e,
            {
                headingText: d,
                headingTop: _,
                showPill: x,
                userDiscountOffer: C,
                discountedPrice: N,
                buttonVisibilityRef: R,
            } = eP(),
            { analyticsLocations: I } = (0, h.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            T = (0, P.c)(s.C.MARKETING_PAGE_BANNER),
            S = null;
        null != T && "marketingPageBanner" === T.properties.properties.oneofKind
            ? (S = (0, a.jsx)(M.x, {
                  componentId: T.id,
                  promotionBannerMarketingComponentFields: T.properties.properties.marketingPageBanner,
              }))
            : r
              ? (S = (0, a.jsx)(L.A, { variant: L.c.SUBSCRIBER_HOME }))
              : l
                ? (S = (0, a.jsx)(eA, {}))
                : c && (S = (0, a.jsx)(et, {}));
        let j = (0, o.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
            D = null != j && j.status === Y.Dmq.CANCELED && null != C,
            k = (0, O.V)(),
            U = (0, y.O)(),
            w = (0, er.U9)(U, eT.pe.TIER_2) ? eT.pe.TIER_2 : void 0,
            G = null != j && j.status !== Y.Dmq.ACCOUNT_HOLD && j.hasAnyPremiumNitro,
            B = (0, b.A)(),
            F = B.isFractionalPremiumActive && !G && null == S && !D,
            V = (0, o.bG)([f.A], () => f.A.useReducedMotion),
            { visibilityPercentageRef: H, visibilityPercentage: z } = (0, ef.U)(!V);
        return l
            ? (0, a.jsx)(ej, { fpEndsAt: B.currentEntitlementEndsAt, className: t, buttonVisibilityRef: R })
            : (0, a.jsx)("div", {
                  className: i()(eS.kL, t),
                  "data-testid": "subscriber-nitro-home-hero-header",
                  ref: R,
                  children: (0, a.jsxs)("div", {
                      className: eS.Qs,
                      ref: H,
                      children: [
                          x && _,
                          (0, a.jsxs)("div", {
                              className: eS.N1,
                              children: [
                                  (0, a.jsx)(eR, { containerVisibilityPercentage: z }),
                                  D &&
                                      null != C.expires_at &&
                                      (0, a.jsx)(eo, { expiresAt: C.expires_at, className: eS.IZ }),
                                  (0, a.jsx)(ev, {
                                      children: D ? $.intl.format($.t["3yZP0G"], { percent: C.discount.amount }) : d,
                                  }),
                                  D &&
                                      null != N &&
                                      (0, a.jsx)(m.E, {
                                          className: eS.jG,
                                          variant: "text-sm/medium",
                                          color: "text-strong",
                                          children: $.intl.format($.t["3Q4wCy"], {
                                              discountedPrice: N,
                                              billingPeriod: (0, v.Ke)(C.discount.user_usage_limit_interval),
                                              numMonths: C.discount.user_usage_limit,
                                          }),
                                      }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: F || D ? eS.UJ : void 0,
                              children: [
                                  F &&
                                      (0, a.jsx)(ea.A, {
                                          size: "md",
                                          hasActivePromotion: !!r,
                                          subscriptionTier: k?.subscription_trial?.sku_id ?? w,
                                      }),
                                  D &&
                                      (0, a.jsx)(A.$, {
                                          variant: "expressive",
                                          icon: p.t,
                                          size: "md",
                                          text: $.intl.string($.t.zrCzVB),
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = ed.g.CONFIRM_DISCOUNT),
                                                  void (0, u.openModalLazy)(async () => {
                                                      let { PremiumBrandRefreshSubscriptionCancellationModal: t } =
                                                          await Promise.all([
                                                              n.e("32292"),
                                                              n.e("57036"),
                                                              n.e("88394"),
                                                              n.e("28367"),
                                                              n.e("45174"),
                                                              n.e("85519"),
                                                              n.e("11871"),
                                                              n.e("37266"),
                                                              n.e("63229"),
                                                              n.e("58710"),
                                                              n.e("31825"),
                                                              n.e("23353"),
                                                              n.e("7175"),
                                                              n.e("37249"),
                                                              n.e("14138"),
                                                              n.e("8971"),
                                                              n.e("85071"),
                                                              n.e("88017"),
                                                              n.e("1040"),
                                                              n.e("64615"),
                                                              n.e("17239"),
                                                              n.e("66950"),
                                                              n.e("58164"),
                                                              n.e("38229"),
                                                              n.e("20861"),
                                                              n.e("36682"),
                                                              n.e("45723"),
                                                              n.e("69601"),
                                                              n.e("47511"),
                                                              n.e("51444"),
                                                              n.e("62290"),
                                                              n.e("80973"),
                                                              n.e("82731"),
                                                              n.e("20735"),
                                                              n.e("10567"),
                                                              n.e("12542"),
                                                              n.e("6159"),
                                                              n.e("98083"),
                                                              n.e("55140"),
                                                          ]).then(n.bind(n, 293061));
                                                      return (n) =>
                                                          (0, a.jsx)(t, {
                                                              ...n,
                                                              analyticsLocations: I,
                                                              initialStep: e,
                                                              premiumSubscription: j,
                                                          });
                                                  })
                                              );
                                          },
                                      }),
                                  (0, a.jsx)(en.A, {
                                      variant: F || D ? "secondary" : "expressive",
                                      size: "md",
                                      buttonTextOverride: $.intl.string($.t["3KomGa"]),
                                  }),
                              ],
                          }),
                          S,
                      ],
                  }),
              });
    },
    [eO, eP] = (0, R.A)(),
    eM = (e) => {
        let { className: t, buttonVisibilityRef: n, userDiscountOffer: r, discountedPrice: i } = e,
            { analyticsLocations: s } = (0, h.Ay)(g.A.PREMIUM_MARKETING_HERO_CTA),
            l = (0, j.ds)(),
            c = (0, T.cg)(),
            o = (0, S.QQ)(),
            u = $.intl.string($.t.qYKftX),
            _ = (0, D.m)(),
            m = $.intl.string($.t.ifwQZb),
            { fractionalState: p, endsAt: A } = (0, b.A)(),
            f = (0, x.Ay)(A, x.yE.CREDITS_ENDS_IN),
            C = null;
        if (p === eT.xc.NONE || l) C = (0, a.jsx)(eu.A, { text: u });
        else {
            o = !0;
            let e = $.intl.format($.t["yR+oDD"], { helpCenterLink: I.A.getArticleURL(Y.MVz.FRACTIONAL_PREMIUM_ABOUT) });
            C = (0, a.jsx)(d.A, {
                text: e,
                "aria-label": e.toString(),
                tooltipClassName: eS.YL,
                position: "right",
                children: (e) =>
                    (0, a.jsx)("div", {
                        ...e,
                        className: eS.V_,
                        children: (0, a.jsx)("div", { className: eS.eL, children: (0, a.jsx)(eu.A, { text: f }) }),
                    }),
            });
        }
        return (0, a.jsx)(h.f5, {
            value: s,
            children: (0, a.jsx)(eO.Provider, {
                value: {
                    headingText: m,
                    headingTop: C,
                    showPill: o,
                    userDiscountOffer: r,
                    discountedPrice: i,
                    buttonVisibilityRef: n,
                },
                children: (0, a.jsx)(ey, {
                    className: t,
                    isEligibleForBogoPromotion: c,
                    isInReverseTrial: l,
                    shouldShowReferralProgressBar: _,
                }),
            }),
        });
    };
