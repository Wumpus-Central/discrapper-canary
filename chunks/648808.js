(l.d(t, { FT: () => eI, Yc: () => eU, vG: () => eM, EA: () => eD }), l(321073));
var a,
    n = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    o = l(892227),
    c = l(806163),
    d = l(855986),
    h = l(939249),
    u = l(192308),
    m = l(265872),
    C = l(793574),
    _ = l(688810),
    E = l(923079),
    A = l(757036),
    g = l(369189),
    f = l(622886),
    p = l(287809),
    L = l(166403),
    b = l(129230),
    x = l(403362),
    O = l(124861),
    T = l(318346),
    R = l(362862),
    y = l(672619),
    v = l(923138),
    S = l(12510),
    N = l(673125),
    j = l(328123),
    I = l(821609),
    U = l(646514),
    B = l(403581),
    F = l(834730),
    P = l(866665),
    M = l(885574),
    D = l(140735),
    W = l(683071),
    k = l(577473),
    H = l(34188),
    G = l(369606),
    w = l(28863),
    Y = l(305866),
    V = l(475743),
    z = l(303136),
    K = l(286348),
    X = l(975571),
    q = l(626031),
    Z = l(320448),
    J = l(404778),
    Q = l(318254),
    $ = l(742967),
    ee = l(312653),
    et = l(792996),
    el = l(137484),
    ea = l(427483);
function en(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === O.x.COMPLETED || t === O.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: r()(el.TK, { [el.AM]: a }),
            children: (0, n.jsx)($.x, { className: el.t9, webmAsset: ea.A, animationState: l, assetAltText: "" }),
        });
    return a
        ? (0, n.jsxs)("div", {
              className: el.Zs,
              children: [(0, n.jsx)(D.A, { children: et.intl.string(ee.default.k6h2J3) }), s],
          })
        : s;
}
function es(e) {
    let { className: t } = e;
    return (0, n.jsx)(J.c, { className: r()(el.Fu, t) });
}
function ei(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: a,
            achievementStatus: i,
            onClaim: o,
            onDiscoveryClick: c,
            isLastItem: d,
            isFirstItem: u,
        } = e,
        [m, C] = s.useState(!1),
        [_, E] = s.useState(!1),
        A = null != c && i !== O.x.COMPLETED,
        g = r()(el.of, { [el.o4]: u, [el.D8]: m, [el.or]: A }),
        f = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: el.Ub,
                    children: [
                        (0, n.jsx)(en, { achievementStatus: i, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: el.Du,
                            children: [
                                (0, n.jsx)(F.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(F.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: et.intl.format(
                                        i === O.x.COMPLETED ? ee.default.h2qWpS : ee.default.B8Fxns,
                                        {
                                            orbAmount: a,
                                            orbIconHook: () =>
                                                (0, n.jsx)(Q.OrbsIcon, {
                                                    className: el.fN,
                                                    size: "xxs",
                                                    color: U.A.colors.ICON_SUBTLE,
                                                }),
                                        },
                                    ),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: a, hasDiscoveryClick: s } = t,
                        i = (0, n.jsx)(I.$, {
                            variant: "expressive",
                            size: "sm",
                            text: et.intl.string(ee.default.WmfVjs),
                            loading: l,
                            onClick: a,
                        });
                    return e === O.x.COMPLETED || l
                        ? i
                        : s
                          ? (0, n.jsx)(Z.ChevronSmallRightIcon, { size: "sm", "aria-hidden": !0 })
                          : null;
                })(i, {
                    isHovered: m,
                    isClaiming: _,
                    handleClaim: async function () {
                        null != o && (E(!0), await o(t).finally(() => E(!1)));
                    },
                    hasDiscoveryClick: A,
                }),
            ],
        }),
        p = s.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.D, { className: g, ...p, onClick: c, children: f }), !d && (0, n.jsx)(es, {})],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: g, ...p, children: f }), !d && (0, n.jsx)(es, {})],
          });
}
var er = l(652215),
    eo = l(631502),
    ec = l(653877),
    ed = l(268920),
    eh = l(633217);
function eu() {
    return (0, n.jsx)("div", {
        className: ec.s,
        children: (0, n.jsx)(z.A, { src: eh.A, fallbackImage: ed.A, className: ec.Cb }),
    });
}
function em(e) {
    let { nitroIconColor: t = U.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: ec.SY,
        children: [
            (0, n.jsx)(B.NitroWheelIcon, { size: "xs", color: t }),
            (0, n.jsx)(F.E, { variant: "body-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
let eC = (e) => {
    let { text: t } = e,
        l = et.intl.formatToPlainString(eo.default.OYakRP, { date: K.Ds });
    return (0, n.jsxs)("div", {
        className: ec.SY,
        children: [
            (0, n.jsx)(P.m, {
                text: l,
                position: "top",
                ariaHidden: !0,
                children: (0, n.jsx)("span", {
                    tabIndex: 0,
                    role: "img",
                    "aria-label": l,
                    className: ec.tt,
                    children: (0, n.jsx)(M.CircleInformationIcon, { size: "xs", color: U.A.colors.ICON_SUBTLE }),
                }),
            }),
            (0, n.jsx)(F.E, { variant: "body-xs/medium", color: "text-subtle", children: t }),
        ],
    });
};
function e_(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        a = (0, V.Ay)(t),
        i = s.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != a && !!(a.toString().length > 10)),
            [t, a],
        );
    return (0, n.jsxs)("div", {
        className: ec.SZ,
        children: [
            (0, n.jsx)(eu, {}),
            (0, n.jsxs)("div", {
                className: ec.ZX,
                children: [
                    (0, n.jsx)(D.A, {
                        children:
                            null == t
                                ? et.intl.string(et.t.cKwv4k)
                                : et.intl.formatToPlainString(et.t.zPaLL9, { balance: t }),
                    }),
                    (0, n.jsx)(q.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? ec.F4 : void 0,
                        value: t,
                        onValueChange: er.tEg,
                        onValueReached: er.tEg,
                        targetTotalCounterTime: 1500,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    l,
                ],
            }),
        ],
    });
}
function eE(e) {
    let { text: t, accessibilityLabel: l, onClick: a } = e,
        s = null != l,
        i = (0, n.jsxs)(n.Fragment, {
            children: [
                s && (0, n.jsx)(D.A, { children: l }),
                (0, n.jsx)(B.NitroWheelIcon, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, n.jsx)(F.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: ec.lh, children: i })
        : (0, n.jsx)(h.D, { className: r()(ec.lh, ec.w9), onClick: a, children: i });
}
function eA(e) {
    let { numRows: t = 3 } = e,
        l = s.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: ec.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: ec.US,
                    children: [
                        (0, n.jsx)("div", { className: r()(ec.DO, ec.VR) }),
                        (0, n.jsxs)("div", {
                            className: ec.A3,
                            children: [
                                (0, n.jsx)("div", { className: r()(ec.DO, ec.Iz) }),
                                (0, n.jsx)("div", { className: r()(ec.DO, ec.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function eg(e) {
    let {
            title: t,
            challenges: l,
            isLoading: a,
            onClaim: i,
            badgeText: r,
            badgeAccessibilityLabel: o,
            onClickBadge: c,
            inlineNoticeProps: d,
        } = e,
        h = l.length > 0,
        u = s.useMemo(
            () =>
                a && null == d
                    ? (0, n.jsx)(eA, { numRows: 3 })
                    : h
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: ec.$b,
                                    children: [
                                        (0, n.jsx)(F.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != r && (0, n.jsx)(eE, { text: r, accessibilityLabel: o, onClick: c }),
                                    ],
                                }),
                                (0, n.jsx)("ul", {
                                    className: ec.Up,
                                    children: l.map((e, t) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                className: ec.tJ,
                                                children: (0, n.jsx)(ei, {
                                                    ...e,
                                                    onClaim: i,
                                                    isLastItem: t === l.length - 1,
                                                }),
                                            },
                                            e.achievementIdentifier,
                                        ),
                                    ),
                                }),
                            ],
                        })
                      : null != d
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ec.GN,
                              children: [
                                  (0, n.jsx)(F.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: et.intl.string(ee.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(F.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: et.intl.string(ee.default.XW2CuY),
                                  }),
                              ],
                          }),
            [a, h, t, r, o, c, l, d, i],
        ),
        m = s.useMemo(
            () => (null == d ? null : (0, n.jsx)("div", { className: ec.re, children: (0, n.jsx)(W.w, { ...d }) })),
            [d],
        );
    return (0, n.jsxs)("div", { className: ec.E6, "aria-busy": a, children: [m, u] });
}
function ef(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: a } = e;
    return (0, n.jsxs)("div", {
        className: ec.VX,
        children: [
            (0, n.jsxs)("div", {
                className: ec.W,
                children: [
                    null != t &&
                        (0, n.jsx)(I.$, {
                            text: et.intl.string(et.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: k.QuestsIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, n.jsx)(I.$, {
                            text: et.intl.string(et.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: H.ShopIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: ec.RA,
                children: [
                    null != a &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(G.TrophyIcon, {
                                    size: "xs",
                                    color: U.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(F.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: et.intl.format(ee.default.B5tZXw, { orbAmount: a }),
                                }),
                                (0, n.jsx)(F.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, n.jsx)(F.E, {
                        variant: "body-xs/normal",
                        children: (0, n.jsx)(w.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: X.A.getArticleURL(er.MVz.ORBS_WALLET),
                            children: et.intl.string(et.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function ep(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: a,
            orbChallengesCard: i,
            orbWalletFooter: o,
            cardRef: c,
            returnRef: d,
        } = e,
        [h, u] = s.useState(!1);
    return (0, n.jsxs)(Y.l, {
        className: r()(ec.ql, ec.Ut),
        ref: c,
        returnRef: d,
        "aria-label": et.intl.string(ee.default.XKj5L9),
        children: [
            (0, n.jsxs)("div", {
                className: ec.hG,
                children: [
                    (0, n.jsx)(e_, { orbBalance: t, headerTagsContent: l }),
                    h ? null : a({ onClose: () => u(!0) }),
                ],
            }),
            (0, n.jsx)("div", { className: ec.BA, children: i }),
            o,
        ],
    });
}
var eL =
    (((a = {}).NITRO_UPSELL = "nitro_upsell"),
    (a.SHOP_ORBS = "shop_orbs"),
    (a.BLACK_FRIDAY_RUST = "black_friday_rust"),
    (a.BLACK_FRIDAY_BLOONS = "black_friday_bloons"),
    a);
function eb(e) {
    let { userHasPremium: t, orbBalance: l, liveCampaignCards: a = [] } = e;
    return a.length > 0 ? a[0] : t ? (null != l && l >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
var ex = l(339204),
    eO = l(730916),
    eT = l(682901),
    eR = l(123576);
let ey = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: O.x.NONE,
        orbRewardAmount: 100,
    },
];
async function ev(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eS(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = er.tEg,
            liveCampaignCards: o,
        } = e,
        c = eb({ userHasPremium: t, orbBalance: a, liveCampaignCards: o });
    return c === eL.SHOP_ORBS
        ? (0, n.jsx)(ex.xA, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : c === eL.NITRO_UPSELL
          ? (0, n.jsx)(ex.Wm, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : c === eL.BLACK_FRIDAY_RUST
            ? (0, n.jsx)(ex.rI, {
                  campaign: j.gO,
                  userHasPremium: t,
                  onClose: l,
                  analyticsPage: s,
                  forceVisible: i,
                  onCloseWallet: r,
              })
            : c === eL.BLACK_FRIDAY_BLOONS
              ? (0, n.jsx)(ex.rI, {
                    campaign: j.F6,
                    userHasPremium: t,
                    onClose: l,
                    analyticsPage: s,
                    forceVisible: i,
                    onCloseWallet: r,
                })
              : null;
}
function eN(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eR.dW, children: t })
        : (0, n.jsx)(h.D, { className: r()(eR.dW, eR.or), onClick: l, children: t });
}
function ej(e, t) {
    return et.intl.formatToPlainString(e ? ee.default.p9PPYD : ee.default["1JZfaU"], { multiplier: t });
}
function eI(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: a,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, n.jsx)(ep, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(em, { text: et.intl.format(ee.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eS({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(eg, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: et.intl.format(ee.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eN, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: et.intl.string(ee.default.H6Ny8N),
            badgeText: et.intl.format(t ? ee.default.OHLdjq : ee.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: ej(t, 1.2),
            challenges: i ? [] : ey,
            onClaim: ev,
        }),
        orbWalletFooter: (0, n.jsx)(ef, {
            onQuestsClick: () => (0, eO.Ww)(),
            onShopClick: () => (0, eO.P9)({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function eU(e) {
    return (0, n.jsx)(eI, { ...e, hasNoChallenges: !0 });
}
function eB() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, f.F)(),
        l = (0, E.A)({ location: "StatefulOrbWalletNitroRewardProgramTag" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, o.default)(new Date(t.next_reward_date), new Date()));
    switch (l) {
        case E.m.DEFAULT:
            return (0, n.jsx)(em, {
                text: et.intl.format(ee.default["04j3XV"], { orbAmount: t.reward_amount, days: a }),
            });
        case E.m.DEPRECATED:
            return (0, n.jsx)(eC, { text: et.intl.format(eo.default.bkU5si, { orbAmount: t.reward_amount, days: a }) });
        case E.m.DEPRECATED_XBOX:
        case E.m.REMOVED:
        case E.m.REMOVED_XBOX:
            return null;
        default:
            return (0, x.xb)(l);
    }
}
function eF() {
    return null != (0, d.bG)([L.A], () => L.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eB, {}) : null;
}
function eP(e) {
    let { analyticsPage: t = C.A.ORB_WALLET, analyticsLocations: a = [], onCloseWallet: i = er.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: o, refetch: c } = (0, v.z)({ shouldFetch: !0 }),
        h = (0, A.L)(eT.PremiumTypes.TIER_2),
        m = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: _, orbChallengesDisplayError: E } = (0, d.cf)([N.Ay], () => ({
            nitroGatedOrbMultiplier: N.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: N.Ay.orbChallengesDisplayError,
        })),
        g = null != m && !m.isClaimed(),
        f = s.useMemo(
            () =>
                null != E
                    ? {
                          type: "warning",
                          message:
                              E.errorType === N.EB.CLAIM_CHALLENGE
                                  ? et.intl.string(ee.default.FYb5rH)
                                  : et.intl.format(ee.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eN, { text: e, onClick: c }),
                                    }),
                          role: "status",
                      }
                    : g
                      ? { type: "info", message: et.intl.string(et.t.qxk9zo), role: "status" }
                      : null,
            [E, c, g],
        ),
        L = s.useCallback(
            () => (
                (0, T.Y)({ pageType: t, sectionType: C.A.ORB_WALLET, ctaObject: C.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (0, eO.Ks)({ nitroGatedOrbMultiplier: _, userIsPremiumTier2: h })
            ),
            [_, h, t, i],
        ),
        b = s.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? eO.nS[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: a },
                        s =
                            null != l
                                ? () => {
                                      ((0, T.Y)({
                                          pageType: t,
                                          sectionType: C.A.ORB_WALLET,
                                          ctaObject: C.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          l(n),
                                          i("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: s };
                }),
            [r, a, t, i],
        ),
        x = s.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...a } = t;
                    return (0, n.jsx)(e, { ...a, onClose: l, body: et.intl.string(et.t["gP/vPe"]) });
                };
            });
        }, []),
        O = s.useCallback((e) => (g ? (x(), Promise.resolve()) : (0, S.Xz)(e)), [g, x]);
    return (0, n.jsx)(eg, {
        title: et.intl.string(ee.default.H6Ny8N),
        isLoading: !o,
        inlineNoticeProps: f,
        challenges: b,
        onClaim: O,
        onClickBadge: L,
        badgeText: et.intl.format(h ? ee.default.OHLdjq : ee.default.WOMrJf, { multiplier: _ }),
        badgeAccessibilityLabel: ej(h, _),
    });
}
function eM(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: a = C.A.ORB_WALLET,
            onCloseWallet: i = er.tEg,
            isProfilePopout: r,
        } = e,
        { balance: o } = (0, y.W0)(),
        h = (0, R.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: u } = (0, y.rQ)({ disableFetch: !h }),
        m = (0, A.L)(eT.PremiumTypes.TIER_2),
        { analyticsLocations: E } = (0, _.Ay)(C.A.ORB_WALLET);
    s.useEffect(() => {
        h && (0, S.eX)();
    }, [h]);
    let f = s.useCallback(() => {
            ((0, T.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_SHOP_CTA }),
                (0, eO.P9)({ analyticsLocations: E }),
                i("navigation"));
        }, [E, a, i]),
        p = s.useCallback(() => {
            ((0, T.Y)({ pageType: a, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_QUEST_HOME_CTA }),
                (0, eO.Ww)(),
                i("navigation"));
        }, [a, i]),
        L = (0, j.OY)(j.gO, h),
        x = (0, j.OY)(j.F6, h),
        v = s.useMemo(() => {
            let e = [];
            return (L && e.push(eL.BLACK_FRIDAY_RUST), x && e.push(eL.BLACK_FRIDAY_BLOONS), e);
        }, [L, x]),
        I = s.useMemo(() => eb({ userHasPremium: m, orbBalance: o, liveCampaignCards: v }), [m, o, v]),
        { challengesForOrbWallet: U, hasFetchedChallenges: B } = (0, d.cf)([N.Ay], () => ({
            challengesForOrbWallet: N.Ay.challengesForOrbWallet,
            hasFetchedChallenges: N.Ay.hasFetchedChallenges,
        })),
        F = s.useRef(!1);
    s.useEffect(() => {
        if (!B || F.current) return;
        let e = U.map((e) => e.achievementIdentifier),
            t = U.filter((e) => e.achievementStatus === O.x.COMPLETED).map((e) => e.achievementIdentifier);
        (b.default.track(er.HAw.ORB_WALLET_VIEWED, {
            location_stack: E,
            location_page: a,
            location_section: C.A.ORB_WALLET,
            location_object: C.A.ORB_WALLET,
            wallet_primary_card_type: I,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (F.current = !0));
    }, [B, U, I, E, a]);
    let { pathname: P } = (0, c.zy)(),
        M = P.startsWith(er.BVt.COLLECTIBLES_SHOP),
        D = (0, g.p)(),
        W = s.useMemo(
            () =>
                r ? { onQuestsClick: p, onShopClick: f } : { onQuestsClick: D ? null : p, onShopClick: M ? null : f },
            [D, M, p, f, r],
        );
    return h
        ? (0, n.jsx)(ep, {
              cardRef: t,
              returnRef: l,
              orbBalance: o,
              headerTagsContent: (0, n.jsx)(eF, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eS({
                      userHasPremium: m,
                      onClose: t,
                      orbBalance: o,
                      analyticsPage: a,
                      onCloseWallet: i,
                      liveCampaignCards: v,
                  });
              },
              orbChallengesCard: (0, n.jsx)(eP, { analyticsPage: a, analyticsLocations: E, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(ef, { ...W, totalOrbsRedeemed: u }),
          })
        : null;
}
function eD(e) {
    let { cardRef: t, returnRef: l, targetElementRef: a, shouldShow: i, analyticsPage: r, onCloseWallet: o } = e,
        c = s.useCallback(
            () => (0, n.jsx)(eM, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: o }),
            [t, l, r, o],
        ),
        d = s.useCallback(
            (e, t) => {
                "user:escape" === t && null != o && o("direct_close");
            },
            [o],
        );
    return (0, n.jsx)(m.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: c,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: d,
        animation: m.Y.Animation.NONE,
        targetElementRef: a,
        children: () => null,
    });
}
