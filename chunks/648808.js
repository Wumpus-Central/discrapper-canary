(l.d(t, { FT: () => eT, Yc: () => eR, vG: () => eN, EA: () => ej }), l(321073));
var n,
    a = l(477900),
    s = l(582128),
    i = l(503698),
    r = l.n(i),
    o = l(892227),
    c = l(806163),
    h = l(855986),
    d = l(939249),
    u = l(192308),
    m = l(265872),
    C = l(793574),
    _ = l(688810),
    A = l(757036),
    g = l(369189),
    E = l(622886),
    f = l(287809),
    p = l(166403),
    L = l(129230),
    b = l(124861),
    O = l(318346),
    x = l(362862),
    T = l(672619),
    R = l(923138),
    y = l(12510),
    v = l(673125),
    S = l(328123),
    N = l(821609),
    j = l(646514),
    I = l(403581),
    U = l(834730),
    B = l(140735),
    F = l(683071),
    M = l(577473),
    P = l(34188),
    W = l(369606),
    D = l(28863),
    k = l(305866),
    H = l(475743),
    G = l(303136),
    w = l(975571),
    Y = l(626031),
    V = l(320448),
    z = l(404778),
    K = l(318254),
    X = l(742967),
    q = l(312653),
    Z = l(792996),
    J = l(137484),
    Q = l(427483);
function $(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === b.x.COMPLETED || t === b.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: r()(J.TK, { [J.AM]: n }),
            children: (0, a.jsx)(X.x, { className: J.t9, webmAsset: Q.A, animationState: l, assetAltText: "" }),
        });
    return n
        ? (0, a.jsxs)("div", {
              className: J.Zs,
              children: [(0, a.jsx)(B.A, { children: Z.intl.string(q.default.k6h2J3) }), s],
          })
        : s;
}
function ee(e) {
    let { className: t } = e;
    return (0, a.jsx)(z.c, { className: r()(J.Fu, t) });
}
function et(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: n,
            achievementStatus: i,
            onClaim: o,
            onDiscoveryClick: c,
            isLastItem: h,
            isFirstItem: u,
        } = e,
        [m, C] = s.useState(!1),
        [_, A] = s.useState(!1),
        g = null != c && i !== b.x.COMPLETED,
        E = r()(J.of, { [J.o4]: u, [J.D8]: m, [J.or]: g }),
        f = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: J.Ub,
                    children: [
                        (0, a.jsx)($, { achievementStatus: i, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: J.Du,
                            children: [
                                (0, a.jsx)(U.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(U.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: Z.intl.format(i === b.x.COMPLETED ? q.default.h2qWpS : q.default.B8Fxns, {
                                        orbAmount: n,
                                        orbIconHook: () =>
                                            (0, a.jsx)(K.OrbsIcon, {
                                                className: J.fN,
                                                size: "xxs",
                                                color: j.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: n, hasDiscoveryClick: s } = t,
                        i = (0, a.jsx)(N.$, {
                            variant: "expressive",
                            size: "sm",
                            text: Z.intl.string(q.default.WmfVjs),
                            loading: l,
                            onClick: n,
                        });
                    return e === b.x.COMPLETED || l
                        ? i
                        : s
                          ? (0, a.jsx)(V.ChevronSmallRightIcon, { size: "sm", "aria-hidden": !0 })
                          : null;
                })(i, {
                    isHovered: m,
                    isClaiming: _,
                    handleClaim: async function () {
                        null != o && (A(!0), await o(t).finally(() => A(!1)));
                    },
                    hasDiscoveryClick: g,
                }),
            ],
        }),
        p = s.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(d.D, { className: E, ...p, onClick: c, children: f }), !h && (0, a.jsx)(ee, {})],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: E, ...p, children: f }), !h && (0, a.jsx)(ee, {})],
          });
}
var el = l(652215),
    en = l(653877),
    ea = l(268920),
    es = l(633217);
function ei() {
    return (0, a.jsx)("div", {
        className: en.s,
        children: (0, a.jsx)(G.A, { src: es.A, fallbackImage: ea.A, className: en.Cb }),
    });
}
function er(e) {
    let { nitroIconColor: t = j.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: en.SY,
        children: [
            (0, a.jsx)(I.NitroWheelIcon, { size: "xs", color: t }),
            (0, a.jsx)(U.E, { variant: "body-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function eo(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        n = (0, H.Ay)(t),
        i = s.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != n && !!(n.toString().length > 10)),
            [t, n],
        );
    return (0, a.jsxs)("div", {
        className: en.SZ,
        children: [
            (0, a.jsx)(ei, {}),
            (0, a.jsxs)("div", {
                className: en.ZX,
                children: [
                    (0, a.jsx)(B.A, {
                        children:
                            null == t
                                ? Z.intl.string(Z.t.cKwv4k)
                                : Z.intl.formatToPlainString(Z.t.zPaLL9, { balance: t }),
                    }),
                    (0, a.jsx)(Y.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? en.F4 : void 0,
                        value: t,
                        onValueChange: el.tEg,
                        onValueReached: el.tEg,
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
function ec(e) {
    let { text: t, accessibilityLabel: l, onClick: n } = e,
        s = null != l,
        i = (0, a.jsxs)(a.Fragment, {
            children: [
                s && (0, a.jsx)(B.A, { children: l }),
                (0, a.jsx)(I.NitroWheelIcon, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, a.jsx)(U.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: en.lh, children: i })
        : (0, a.jsx)(d.D, { className: r()(en.lh, en.w9), onClick: n, children: i });
}
function eh(e) {
    let { numRows: t = 3 } = e,
        l = s.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: en.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: en.US,
                    children: [
                        (0, a.jsx)("div", { className: r()(en.DO, en.VR) }),
                        (0, a.jsxs)("div", {
                            className: en.A3,
                            children: [
                                (0, a.jsx)("div", { className: r()(en.DO, en.Iz) }),
                                (0, a.jsx)("div", { className: r()(en.DO, en.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function ed(e) {
    let {
            title: t,
            challenges: l,
            isLoading: n,
            onClaim: i,
            badgeText: r,
            badgeAccessibilityLabel: o,
            onClickBadge: c,
            inlineNoticeProps: h,
        } = e,
        d = l.length > 0,
        u = s.useMemo(
            () =>
                n && null == h
                    ? (0, a.jsx)(eh, { numRows: 3 })
                    : d
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: en.$b,
                                    children: [
                                        (0, a.jsx)(U.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != r && (0, a.jsx)(ec, { text: r, accessibilityLabel: o, onClick: c }),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    className: en.Up,
                                    children: l.map((e, t) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                className: en.tJ,
                                                children: (0, a.jsx)(et, {
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
                      : null != h
                        ? null
                        : (0, a.jsxs)("div", {
                              className: en.GN,
                              children: [
                                  (0, a.jsx)(U.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: Z.intl.string(q.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(U.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: Z.intl.string(q.default.XW2CuY),
                                  }),
                              ],
                          }),
            [n, d, t, r, o, c, l, h, i],
        ),
        m = s.useMemo(
            () => (null == h ? null : (0, a.jsx)("div", { className: en.re, children: (0, a.jsx)(F.w, { ...h }) })),
            [h],
        );
    return (0, a.jsxs)("div", { className: en.E6, "aria-busy": n, children: [m, u] });
}
function eu(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: n } = e;
    return (0, a.jsxs)("div", {
        className: en.VX,
        children: [
            (0, a.jsxs)("div", {
                className: en.W,
                children: [
                    null != t &&
                        (0, a.jsx)(N.$, {
                            text: Z.intl.string(Z.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: M.QuestsIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, a.jsx)(N.$, {
                            text: Z.intl.string(Z.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: P.ShopIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: en.RA,
                children: [
                    null != n &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(W.TrophyIcon, {
                                    size: "xs",
                                    color: j.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(U.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: Z.intl.format(q.default.B5tZXw, { orbAmount: n }),
                                }),
                                (0, a.jsx)(U.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, a.jsx)(U.E, {
                        variant: "body-xs/normal",
                        children: (0, a.jsx)(D.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: w.A.getArticleURL(el.MVz.ORBS_WALLET),
                            children: Z.intl.string(Z.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: n,
            orbChallengesCard: i,
            orbWalletFooter: o,
            cardRef: c,
            returnRef: h,
        } = e,
        [d, u] = s.useState(!1);
    return (0, a.jsxs)(k.l, {
        className: r()(en.ql, en.Ut),
        ref: c,
        returnRef: h,
        "aria-label": Z.intl.string(q.default.XKj5L9),
        children: [
            (0, a.jsxs)("div", {
                className: en.hG,
                children: [
                    (0, a.jsx)(eo, { orbBalance: t, headerTagsContent: l }),
                    d ? null : n({ onClose: () => u(!0) }),
                ],
            }),
            (0, a.jsx)("div", { className: en.BA, children: i }),
            o,
        ],
    });
}
var eC =
    (((n = {}).NITRO_UPSELL = "nitro_upsell"),
    (n.SHOP_ORBS = "shop_orbs"),
    (n.BLACK_FRIDAY_RUST = "black_friday_rust"),
    (n.BLACK_FRIDAY_BLOONS = "black_friday_bloons"),
    n);
function e_(e) {
    let { userHasPremium: t, orbBalance: l, liveCampaignCards: n = [] } = e;
    return n.length > 0 ? n[0] : t ? (null != l && l >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
var eA = l(339204),
    eg = l(730916),
    eE = l(682901),
    ef = l(123576);
let ep = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: b.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eL(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eb(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: n,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = el.tEg,
            liveCampaignCards: o,
        } = e,
        c = e_({ userHasPremium: t, orbBalance: n, liveCampaignCards: o });
    return c === eC.SHOP_ORBS
        ? (0, a.jsx)(eA.xA, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : c === eC.NITRO_UPSELL
          ? (0, a.jsx)(eA.Wm, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : c === eC.BLACK_FRIDAY_RUST
            ? (0, a.jsx)(eA.rI, {
                  campaign: S.gO,
                  userHasPremium: t,
                  onClose: l,
                  analyticsPage: s,
                  forceVisible: i,
                  onCloseWallet: r,
              })
            : c === eC.BLACK_FRIDAY_BLOONS
              ? (0, a.jsx)(eA.rI, {
                    campaign: S.F6,
                    userHasPremium: t,
                    onClose: l,
                    analyticsPage: s,
                    forceVisible: i,
                    onCloseWallet: r,
                })
              : null;
}
function eO(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, a.jsx)("span", { className: ef.dW, children: t })
        : (0, a.jsx)(d.D, { className: r()(ef.dW, ef.or), onClick: l, children: t });
}
function ex(e, t) {
    return Z.intl.formatToPlainString(e ? q.default.p9PPYD : q.default["1JZfaU"], { multiplier: t });
}
function eT(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: n,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, a.jsx)(em, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(er, { text: Z.intl.format(q.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eb({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, a.jsx)(ed, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: Z.intl.format(q.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(eO, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: Z.intl.string(q.default.H6Ny8N),
            badgeText: Z.intl.format(t ? q.default.OHLdjq : q.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: ex(t, 1.2),
            challenges: i ? [] : ep,
            onClaim: eL,
        }),
        orbWalletFooter: (0, a.jsx)(eu, {
            onQuestsClick: () => (0, eg.Ww)(),
            onShopClick: () => (0, eg.P9)({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function eR(e) {
    return (0, a.jsx)(eT, { ...e, hasNoChallenges: !0 });
}
function ey() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)();
    if (!e || null == t) return null;
    let l = Math.max(1, (0, o.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(er, { text: Z.intl.format(q.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function ev() {
    return null != (0, h.bG)([p.A], () => p.A.getPremiumTypeSubscription()) ? (0, a.jsx)(ey, {}) : null;
}
function eS(e) {
    let { analyticsPage: t = C.A.ORB_WALLET, analyticsLocations: n = [], onCloseWallet: i = el.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: o, refetch: c } = (0, R.z)({ shouldFetch: !0 }),
        d = (0, A.L)(eE.PremiumTypes.TIER_2),
        m = (0, h.bG)([f.default], () => f.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: _, orbChallengesDisplayError: g } = (0, h.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        E = null != m && !m.isClaimed(),
        p = s.useMemo(
            () =>
                null != g
                    ? {
                          type: "warning",
                          message:
                              g.errorType === v.EB.CLAIM_CHALLENGE
                                  ? Z.intl.string(q.default.FYb5rH)
                                  : Z.intl.format(q.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(eO, { text: e, onClick: c }),
                                    }),
                          role: "status",
                      }
                    : E
                      ? { type: "info", message: Z.intl.string(Z.t.qxk9zo), role: "status" }
                      : null,
            [g, c, E],
        ),
        L = s.useCallback(
            () => (
                (0, O.Y)({ pageType: t, sectionType: C.A.ORB_WALLET, ctaObject: C.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (0, eg.Ks)({ nitroGatedOrbMultiplier: _, userIsPremiumTier2: d })
            ),
            [_, d, t, i],
        ),
        b = s.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? eg.nS[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: n },
                        s =
                            null != l
                                ? () => {
                                      ((0, O.Y)({
                                          pageType: t,
                                          sectionType: C.A.ORB_WALLET,
                                          ctaObject: C.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          l(a),
                                          i("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: s };
                }),
            [r, n, t, i],
        ),
        x = s.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...n } = t;
                    return (0, a.jsx)(e, { ...n, onClose: l, body: Z.intl.string(Z.t["gP/vPe"]) });
                };
            });
        }, []),
        T = s.useCallback((e) => (E ? (x(), Promise.resolve()) : (0, y.Xz)(e)), [E, x]);
    return (0, a.jsx)(ed, {
        title: Z.intl.string(q.default.H6Ny8N),
        isLoading: !o,
        inlineNoticeProps: p,
        challenges: b,
        onClaim: T,
        onClickBadge: L,
        badgeText: Z.intl.format(d ? q.default.OHLdjq : q.default.WOMrJf, { multiplier: _ }),
        badgeAccessibilityLabel: ex(d, _),
    });
}
function eN(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: n = C.A.ORB_WALLET,
            onCloseWallet: i = el.tEg,
            isProfilePopout: r,
        } = e,
        { balance: o } = (0, T.W0)(),
        d = (0, x.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: u } = (0, T.rQ)({ disableFetch: !d }),
        m = (0, A.L)(eE.PremiumTypes.TIER_2),
        { analyticsLocations: E } = (0, _.Ay)(C.A.ORB_WALLET);
    s.useEffect(() => {
        d && (0, y.eX)();
    }, [d]);
    let f = s.useCallback(() => {
            ((0, O.Y)({ pageType: n, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_SHOP_CTA }),
                (0, eg.P9)({ analyticsLocations: E }),
                i("navigation"));
        }, [E, n, i]),
        p = s.useCallback(() => {
            ((0, O.Y)({ pageType: n, sectionType: C.A.ORB_WALLET_FOOTER, ctaObject: C.A.ORB_WALLET_QUEST_HOME_CTA }),
                (0, eg.Ww)(),
                i("navigation"));
        }, [n, i]),
        R = (0, S.OY)(S.gO, d),
        N = (0, S.OY)(S.F6, d),
        j = s.useMemo(() => {
            let e = [];
            return (R && e.push(eC.BLACK_FRIDAY_RUST), N && e.push(eC.BLACK_FRIDAY_BLOONS), e);
        }, [R, N]),
        I = s.useMemo(() => e_({ userHasPremium: m, orbBalance: o, liveCampaignCards: j }), [m, o, j]),
        { challengesForOrbWallet: U, hasFetchedChallenges: B } = (0, h.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        F = s.useRef(!1);
    s.useEffect(() => {
        if (!B || F.current) return;
        let e = U.map((e) => e.achievementIdentifier),
            t = U.filter((e) => e.achievementStatus === b.x.COMPLETED).map((e) => e.achievementIdentifier);
        (L.default.track(el.HAw.ORB_WALLET_VIEWED, {
            location_stack: E,
            location_page: n,
            location_section: C.A.ORB_WALLET,
            location_object: C.A.ORB_WALLET,
            wallet_primary_card_type: I,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (F.current = !0));
    }, [B, U, I, E, n]);
    let { pathname: M } = (0, c.zy)(),
        P = M.startsWith(el.BVt.COLLECTIBLES_SHOP),
        W = (0, g.p)(),
        D = s.useMemo(
            () =>
                r ? { onQuestsClick: p, onShopClick: f } : { onQuestsClick: W ? null : p, onShopClick: P ? null : f },
            [W, P, p, f, r],
        );
    return d
        ? (0, a.jsx)(em, {
              cardRef: t,
              returnRef: l,
              orbBalance: o,
              headerTagsContent: (0, a.jsx)(ev, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eb({
                      userHasPremium: m,
                      onClose: t,
                      orbBalance: o,
                      analyticsPage: n,
                      onCloseWallet: i,
                      liveCampaignCards: j,
                  });
              },
              orbChallengesCard: (0, a.jsx)(eS, { analyticsPage: n, analyticsLocations: E, onCloseWallet: i }),
              orbWalletFooter: (0, a.jsx)(eu, { ...D, totalOrbsRedeemed: u }),
          })
        : null;
}
function ej(e) {
    let { cardRef: t, returnRef: l, targetElementRef: n, shouldShow: i, analyticsPage: r, onCloseWallet: o } = e,
        c = s.useCallback(
            () => (0, a.jsx)(eN, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: o }),
            [t, l, r, o],
        ),
        h = s.useCallback(
            (e, t) => {
                "user:escape" === t && null != o && o("direct_close");
            },
            [o],
        );
    return (0, a.jsx)(m.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: c,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: h,
        animation: m.Y.Animation.NONE,
        targetElementRef: n,
        children: () => null,
    });
}
