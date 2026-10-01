l.d(t, { Yc: () => eW, vG: () => eG, FT: () => eP, EA: () => ez });
var a = l(477900),
    n = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(892227),
    c = l(806163),
    o = l(17928),
    h = l(939249),
    u = l(922016),
    d = l(793574),
    m = l(688810),
    C = l(757036),
    _ = l(369189),
    E = l(366505),
    g = l(166403),
    A = l(174459),
    f = l(124861),
    p = l(318346),
    x = l(362862),
    L = l(478996),
    v = l(923138),
    O = l(12510),
    b = l(673125),
    R = l(821609),
    T = l(661531),
    N = l(403581),
    S = l(834730),
    y = l(140735),
    j = l(683071),
    I = l(577473),
    U = l(34188),
    M = l(369606),
    F = l(305866),
    B = l(475743),
    D = l(303136),
    P = l(626031),
    W = l(320448),
    H = l(404778),
    k = l(318254),
    w = l(742967),
    G = l(570165),
    z = l(375708),
    V = l(137484),
    Y = l(427483);
function K(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(V.TK, { [V.AM]: n }),
            children: (0, a.jsx)(w.x, { className: V.t9, webmAsset: Y.A, animationState: l, assetAltText: "" }),
        });
    return n
        ? (0, a.jsxs)("div", {
              className: V.Zs,
              children: [(0, a.jsx)(y.A, { children: z.intl.string(G.default.k6h2J3) }), s],
          })
        : s;
}
function X(e) {
    let { className: t } = e;
    return (0, a.jsx)(H.c, { className: i()(V.Fu, t) });
}
function Q(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: c,
            onDiscoveryClick: o,
            isLastItem: u,
            isFirstItem: d,
        } = e,
        [m, C] = n.useState(!1),
        [_, E] = n.useState(!1);
    async function g() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let A = null != o && r !== f.x.COMPLETED,
        p = i()(V.of, { [V.o4]: d, [V.D8]: m, [V.or]: A }),
        x = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: V.Ub,
                    children: [
                        (0, a.jsx)(K, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: V.Du,
                            children: [
                                (0, a.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(S.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: z.intl.format(r === f.x.COMPLETED ? G.default.h2qWpS : G.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(k.C, {
                                                className: V.fN,
                                                size: "xxs",
                                                color: T.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: n, hasDiscoveryClick: s } = t,
                        i = (0, a.jsx)(R.$, {
                            variant: "expressive",
                            size: "sm",
                            text: z.intl.string(G.default.WmfVjs),
                            loading: l,
                            onClick: n,
                        });
                    return e === f.x.COMPLETED || l ? i : s ? (0, a.jsx)(W._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: _, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        L = n.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(h.D, { className: p, ...L, onClick: o, children: x }), !u && (0, a.jsx)(X, {})],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: p, ...L, children: x }), !u && (0, a.jsx)(X, {})],
          });
}
var q = l(652215),
    J = l(653877),
    Z = l(268920),
    $ = l(633217);
function ee() {
    return (0, a.jsx)("div", {
        className: J.s,
        children: (0, a.jsx)(D.A, { src: $.A, fallbackImage: Z.A, className: J.Cb }),
    });
}
function et(e) {
    let { nitroIconColor: t = T.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: J.SY,
        children: [
            (0, a.jsx)(N.t, { size: "xs", color: t }),
            (0, a.jsx)(S.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function el(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, B.Ay)(t),
        i = n.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, a.jsxs)("div", {
        className: J.SZ,
        children: [
            (0, a.jsx)(ee, {}),
            (0, a.jsxs)("div", {
                className: J.ZX,
                children: [
                    (0, a.jsx)(y.A, {
                        children:
                            null == t
                                ? z.intl.string(z.t.cKwv4k)
                                : z.intl.formatToPlainString(z.t.zPaLL9, { balance: t }),
                    }),
                    (0, a.jsx)(P.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? J.F4 : void 0,
                        value: t,
                        onValueChange: q.tEg,
                        onValueReached: q.tEg,
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
function ea(e) {
    let { text: t, accessibilityLabel: l, onClick: n } = e,
        s = null != l,
        r = (0, a.jsxs)(a.Fragment, {
            children: [
                s && (0, a.jsx)(y.A, { children: l }),
                (0, a.jsx)(N.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, a.jsx)(S.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: J.lh, children: r })
        : (0, a.jsx)(h.D, { className: i()(J.lh, J.w9), onClick: n, children: r });
}
function en(e) {
    let { numRows: t = 3 } = e,
        l = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: J.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: J.US,
                    children: [
                        (0, a.jsx)("div", { className: i()(J.DO, J.VR) }),
                        (0, a.jsxs)("div", {
                            className: J.A3,
                            children: [
                                (0, a.jsx)("div", { className: i()(J.DO, J.Iz) }),
                                (0, a.jsx)("div", { className: i()(J.DO, J.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function es(e) {
    let {
            title: t,
            challenges: l,
            isLoading: s,
            onClaim: r,
            badgeText: c,
            badgeAccessibilityLabel: o,
            onClickBadge: h,
            inlineNoticeProps: u,
        } = e,
        d = l.length > 0,
        m = n.useMemo(
            () =>
                s && null == u
                    ? (0, a.jsx)(en, { numRows: 3 })
                    : d
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: J.$b,
                                    children: [
                                        (0, a.jsx)(S.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, a.jsx)(ea, { text: c, accessibilityLabel: o, onClick: h }),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    className: J.Up,
                                    children: l.map((e, t) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                className: J.tJ,
                                                children: (0, a.jsx)(Q, {
                                                    ...e,
                                                    onClaim: r,
                                                    isLastItem: t === l.length - 1,
                                                }),
                                            },
                                            e.achievementIdentifier,
                                        ),
                                    ),
                                }),
                            ],
                        })
                      : null != u
                        ? null
                        : (0, a.jsxs)("div", {
                              className: i()(J.GN, J.AZ),
                              children: [
                                  (0, a.jsx)(S.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: z.intl.string(G.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(S.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: z.intl.string(G.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, d, t, c, o, h, l, u, r],
        ),
        C = n.useMemo(
            () =>
                null == u
                    ? null
                    : (0, a.jsx)("div", {
                          className: i()(J.re, { [J.Oi]: d }),
                          children: (0, a.jsx)(j.w, { ...u, children: u.message }),
                      }),
            [u, d],
        );
    return (0, a.jsxs)("div", { className: J.E6, "aria-busy": s, children: [C, m] });
}
function ei(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: n } = e;
    return (0, a.jsxs)("div", {
        className: J.VX,
        children: [
            (0, a.jsxs)("div", {
                className: J.W,
                children: [
                    null != t &&
                        (0, a.jsx)(R.$, {
                            text: "Quests",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: I.r, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, a.jsx)(R.$, {
                            text: "Shop",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: U.U, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            null != n &&
                (0, a.jsxs)("div", {
                    className: J.RA,
                    children: [
                        (0, a.jsx)(M.TrophyIcon, { size: "xs", color: T.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                        (0, a.jsx)(S.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: z.intl.format(G.default.B5tZXw, { orbAmount: n }),
                        }),
                    ],
                }),
        ],
    });
}
function er(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
            returnRef: h,
        } = e,
        [u, d] = n.useState(!1);
    return (0, a.jsxs)(F.l, {
        className: i()(J.ql, J.Ut),
        ref: o,
        returnRef: h,
        "aria-label": z.intl.string(G.default.XKj5L9),
        children: [
            (0, a.jsxs)("div", {
                className: J.hG,
                children: [
                    (0, a.jsx)(el, { orbBalance: t, headerTagsContent: l }),
                    u ? null : s({ onClose: () => d(!0) }),
                ],
            }),
            (0, a.jsx)("div", { className: J.BA, children: r }),
            c,
        ],
    });
}
var ec = l(554146),
    eo = l(408278),
    eh = l(789645),
    eu = l(131607),
    ed = l(696292),
    em = l(815996),
    eC = l(75678),
    e_ = l(87719),
    eE = l(576761),
    eg = l(617986),
    eA = l(758836),
    ef = l(202541);
function ep(e) {
    let { analyticsLocations: t = [], shopTab: l = eA.G2.ORBS } = e;
    (0, em.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function ex() {
    (0, eg.mA)({ fromContent: ed.u.ORBS_BALANCE_MENU });
}
function eL(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eC.A)({ subscriptionTier: ef.pe.TIER_2, analyticsLocations: t });
}
let ev = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        ep({ analyticsLocations: t, shopTab: eA.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        ep({ analyticsLocations: t, shopTab: eA.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        eL({ analyticsLocations: t });
    },
};
var eO = l(49999),
    eb = l(600676);
function eR(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: n,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: c,
        buttonVariant: o,
        onCtaClick: h,
        onClose: u,
        className: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: i()(eb.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: eb.Fx,
                      children: (0, a.jsx)(eo.K, {
                          icon: eh.P,
                          "aria-label": z.intl.string(z.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eb.iH,
                children: [
                    null != l && (0, a.jsx)("img", { alt: n, src: l, className: eb.db }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(S.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eb.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, a.jsx)(S.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eT(e, t) {
    let { ctaClickHandler: l, dismissibleContent: a, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, eu.kn)([a], eO.m.ORB_WALLET, !0),
        m = n.useCallback(() => {
            ((0, p.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(eO.i.TAKE_ACTION),
                o("navigation"));
        }, [i, u, r, o, l, s]),
        C = n.useCallback(() => {
            (r || u(eO.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: m, shouldHideCard: null == h && !r, onClose: C };
}
function eN(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: o,
            onCtaClick: h,
            onClose: u,
        } = eT(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: n.useCallback(() => {
                    ep({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ec.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, a.jsx)(eR, {
              title: z.intl.string(G.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: z.intl.string(G.default.qa1xyr),
              subTextDescription: z.intl.string(G.default.HACucK),
              buttonText: z.intl.string(G.default["7raRgL"]),
              buttonIcon: { asset: U.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eS = { asset: N.t, type: "icon" };
function ey(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: h,
            onCtaClick: u,
            onClose: C,
        } = eT(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: n.useCallback(() => {
                    eL({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ec.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: _ } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
        })),
        E = n.useMemo(() => z.intl.format(G.default["Ba/7wO"], { multiplier: _ }), [_]);
    return null == _ || h
        ? null
        : (0, a.jsx)(eR, {
              title: z.intl.string(G.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: z.intl.string(G.default.FkfrRH),
              subTextDescription: E,
              buttonText: z.intl.string(G.default.U9UQJE),
              buttonIcon: eS,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: eb.ml,
          });
}
var ej = l(123576);
let eI = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: f.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: f.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: f.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eU(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eM(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eF(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: n,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = q.tEg,
        } = e,
        c = eM(t, n);
    return "shop_orbs" === c
        ? (0, a.jsx)(eN, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, a.jsx)(ey, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eB(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, a.jsx)("span", { className: ej.dW, children: t })
        : (0, a.jsx)(h.D, { className: i()(ej.dW, ej.or), onClick: l, children: t });
}
function eD(e, t) {
    return z.intl.formatToPlainString(e ? G.default.p9PPYD : G.default["1JZfaU"], { multiplier: t });
}
function eP(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: n,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, a.jsx)(er, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(et, { text: z.intl.format(G.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eF({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, a.jsx)(es, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: z.intl.format(G.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(eB, { text: e }) }),
                  }
                : null,
            title: z.intl.string(G.default.H6Ny8N),
            badgeText: z.intl.format(t ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: eD(t, 1.2),
            challenges: i ? [] : eI,
            onClaim: eU,
        }),
        orbWalletFooter: (0, a.jsx)(ei, {
            onQuestsClick: () => ex(),
            onShopClick: () => ep({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function eW(e) {
    return (0, a.jsx)(eP, { ...e, hasNoChallenges: !0 });
}
function eH() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(et, { text: z.intl.format(G.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function ek() {
    return null != (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eH, {}) : null;
}
function ew(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = q.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, v.z)({ shouldFetch: !0 }),
        h = (0, C.L)(ef.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: b.Ay.orbChallengesDisplayError,
        })),
        _ = n.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === b.EB.CLAIM_CHALLENGE
                                  ? z.intl.string(G.default.FYb5rH)
                                  : z.intl.format(G.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(eB, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        E = n.useCallback(
            () => (
                (0, p.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s("navigation"),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, e_.x)();
                    let a = l ? eE.MA.NITRO : eE.MA.UPSELL,
                        n = l
                            ? { customSubtitle: z.intl.format(G.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, eg.gC)(t, a, n);
                })({ nitroGatedOrbMultiplier: u, userIsPremiumTier2: h })
            ),
            [u, h, t, s],
        ),
        g = n.useMemo(
            () =>
                i.map((e) => {
                    let a = null != e.achievementDefinitionId ? ev[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: l },
                        i =
                            null != a
                                ? () => {
                                      ((0, p.Y)({
                                          pageType: t,
                                          sectionType: d.A.ORB_WALLET,
                                          ctaObject: d.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          a(n),
                                          s("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [i, l, t, s],
        );
    return (0, a.jsx)(es, {
        title: z.intl.string(G.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: _,
        challenges: g,
        onClaim: O.Xz,
        onClickBadge: E,
        badgeText: z.intl.format(h ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: u }),
        badgeAccessibilityLabel: eD(h, u),
    });
}
function eG(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: s = d.A.ORB_WALLET,
            onCloseWallet: i = q.tEg,
            isProfilePopout: r,
        } = e,
        { balance: h } = (0, L.W0)(),
        u = (0, x.H)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: E } = (0, L.rQ)({ disableFetch: !u }),
        g = (0, C.L)(ef.PremiumTypes.TIER_2),
        { analyticsLocations: v } = (0, m.Ay)(d.A.ORB_WALLET);
    n.useEffect(() => {
        u && (0, O.eX)();
    }, [u]);
    let R = n.useCallback(() => {
            ((0, p.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                ep({ analyticsLocations: v }),
                i("navigation"));
        }, [v, s, i]),
        T = n.useCallback(() => {
            ((0, p.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                ex(),
                i("navigation"));
        }, [s, i]),
        N = n.useMemo(() => eM(g, h), [g, h]),
        { challengesForOrbWallet: S, hasFetchedChallenges: y } = (0, o.cf)([b.Ay], () => ({
            challengesForOrbWallet: b.Ay.challengesForOrbWallet,
            hasFetchedChallenges: b.Ay.hasFetchedChallenges,
        })),
        j = n.useRef(!1);
    n.useEffect(() => {
        if (!y || j.current) return;
        let e = S.map((e) => e.achievementIdentifier),
            t = S.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (A.default.track(q.HAw.ORB_WALLET_VIEWED, {
            location_stack: v,
            location_page: s,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (j.current = !0));
    }, [y, S, N, v, s]);
    let { pathname: I } = (0, c.zy)(),
        U = I.startsWith(q.BVt.COLLECTIBLES_SHOP),
        M = (0, _.p)(),
        F = n.useMemo(
            () =>
                r ? { onQuestsClick: T, onShopClick: R } : { onQuestsClick: M ? null : T, onShopClick: U ? null : R },
            [M, U, T, R, r],
        );
    return u
        ? (0, a.jsx)(er, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, a.jsx)(ek, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eF({ userHasPremium: g, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, a.jsx)(ew, { analyticsPage: s, analyticsLocations: v, onCloseWallet: i }),
              orbWalletFooter: (0, a.jsx)(ei, { ...F, totalOrbsRedeemed: E }),
          })
        : null;
}
function ez(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = n.useCallback(
            () => (0, a.jsx)(eG, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
            [t, l, r, c],
        ),
        h = n.useCallback(
            (e, t) => {
                "user:escape" === t && null != c && c("direct_close");
            },
            [c],
        );
    return (0, a.jsx)(u.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: o,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: h,
        animation: u.Y.Animation.NONE,
        targetElementRef: s,
        children: () => null,
    });
}
