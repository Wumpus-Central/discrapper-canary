l.d(t, { Yc: () => eH, vG: () => eG, FT: () => eP, EA: () => ez });
var n = l(477900),
    a = l(582128),
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
    A = l(166403),
    g = l(174459),
    f = l(124861),
    p = l(318346),
    L = l(362862),
    x = l(478996),
    b = l(923138),
    v = l(12510),
    O = l(673125),
    R = l(821609),
    T = l(661531),
    N = l(403581),
    S = l(834730),
    y = l(140735),
    j = l(683071),
    I = l(577473),
    U = l(34188),
    M = l(369606),
    B = l(305866),
    F = l(475743),
    D = l(303136),
    P = l(626031),
    H = l(320448),
    W = l(404778),
    k = l(318254),
    w = l(742967),
    G = l(419259),
    z = l(375708),
    Y = l(137484),
    V = l(427483);
function K(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(Y.TK, { [Y.AM]: a }),
            children: (0, n.jsx)(w.x, {
                className: Y.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: V.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a
        ? (0, n.jsxs)("div", {
              className: Y.Zs,
              children: [(0, n.jsx)(y.A, { children: z.intl.string(G.default.k6h2J3) }), s],
          })
        : s;
}
function X(e) {
    let { className: t } = e;
    return (0, n.jsx)(W.c, { className: i()(Y.Fu, t) });
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
        [m, C] = a.useState(!1),
        [_, E] = a.useState(!1);
    async function A() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != o && r !== f.x.COMPLETED,
        p = i()(Y.of, { [Y.o4]: d, [Y.D8]: m, [Y.or]: g }),
        L = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: Y.Ub,
                    children: [
                        (0, n.jsx)(K, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: Y.Du,
                            children: [
                                (0, n.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(S.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: z.intl.format(r === f.x.COMPLETED ? G.default.h2qWpS : G.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(k.C, {
                                                className: Y.fN,
                                                size: "xs",
                                                color: T.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: a, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(R.$, {
                            variant: l || a ? "expressive" : "secondary",
                            size: "sm",
                            text: z.intl.string(G.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === f.x.COMPLETED || a ? r : i ? (0, n.jsx)(H._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: _, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return g
        ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.D, { className: p, ...x, onClick: o, children: L }), !u && (0, n.jsx)(X, {})],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: p, ...x, children: L }), !u && (0, n.jsx)(X, {})],
          });
}
var q = l(652215),
    J = l(653877),
    Z = l(268920),
    $ = l(633217);
function ee() {
    return (0, n.jsx)("div", {
        className: J.s,
        children: (0, n.jsx)(D.A, { src: $.A, fallbackImage: Z.A, className: J.Cb }),
    });
}
function et(e) {
    let { nitroIconColor: t = T.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: J.SY,
        children: [
            (0, n.jsx)(N.t, { size: "xs", color: t }),
            (0, n.jsx)(S.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function el(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, F.Ay)(t),
        i = a.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, n.jsxs)("div", {
        className: J.SZ,
        children: [
            (0, n.jsx)(ee, {}),
            (0, n.jsxs)("div", {
                className: J.ZX,
                children: [
                    (0, n.jsx)(y.A, {
                        children:
                            null == t
                                ? z.intl.string(z.t.cKwv4k)
                                : z.intl.formatToPlainString(z.t.zPaLL9, { balance: t }),
                    }),
                    (0, n.jsx)(P.t, {
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
function en(e) {
    let { text: t, accessibilityLabel: l, onClick: a } = e,
        s = null != l,
        r = (0, n.jsxs)(n.Fragment, {
            children: [
                s && (0, n.jsx)(y.A, { children: l }),
                (0, n.jsx)(N.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, n.jsx)(S.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: J.lh, children: r })
        : (0, n.jsx)(h.D, { className: i()(J.lh, J.w9), onClick: a, children: r });
}
function ea(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: J.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: J.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(J.DO, J.VR) }),
                        (0, n.jsxs)("div", {
                            className: J.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(J.DO, J.Iz) }),
                                (0, n.jsx)("div", { className: i()(J.DO, J.D_) }),
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
        m = a.useMemo(
            () =>
                s && null == u
                    ? (0, n.jsx)(ea, { numRows: 3 })
                    : d
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: J.$b,
                                    children: [
                                        (0, n.jsx)(S.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, n.jsx)(en, { text: c, accessibilityLabel: o, onClick: h }),
                                    ],
                                }),
                                (0, n.jsx)("ul", {
                                    className: J.Up,
                                    children: l.map((e, t) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                className: J.tJ,
                                                children: (0, n.jsx)(Q, {
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
                        : (0, n.jsxs)("div", {
                              className: i()(J.GN, J.AZ),
                              children: [
                                  (0, n.jsx)(S.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: z.intl.string(G.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(S.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: z.intl.string(G.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, d, t, c, o, h, l, u, r],
        ),
        C = a.useMemo(
            () =>
                null == u
                    ? null
                    : (0, n.jsx)("div", {
                          className: i()(J.re, { [J.Oi]: d }),
                          children: (0, n.jsx)(j.w, { ...u, children: u.message }),
                      }),
            [u, d],
        );
    return (0, n.jsxs)("div", { className: J.E6, "aria-busy": s, children: [C, m] });
}
function ei(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: a } = e;
    return (0, n.jsxs)("div", {
        className: J.VX,
        children: [
            (0, n.jsxs)("div", {
                className: J.W,
                children: [
                    null != t &&
                        (0, n.jsx)(R.$, {
                            text: "Quests",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: I.r, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, n.jsx)(R.$, {
                            text: "Shop",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: U.U, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            null != a &&
                (0, n.jsxs)("div", {
                    className: J.RA,
                    children: [
                        (0, n.jsx)(M.TrophyIcon, { size: "xs", color: T.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                        (0, n.jsx)(S.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: z.intl.format(G.default.B5tZXw, { orbAmount: a }),
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
        [u, d] = a.useState(!1);
    return (0, n.jsxs)(B.l, {
        className: i()(J.ql, J.Ut),
        ref: o,
        returnRef: h,
        "aria-label": z.intl.string(G.default.XKj5L9),
        children: [
            (0, n.jsx)(el, { orbBalance: t, headerTagsContent: l }),
            u ? null : s({ onClose: () => d(!0) }),
            r,
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
    eA = l(617986),
    eg = l(758836),
    ef = l(202541);
function ep(e) {
    let { analyticsLocations: t = [], shopTab: l = eg.G2.ORBS } = e;
    (0, em.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eL() {
    (0, eA.mA)({ fromContent: ed.u.ORBS_BALANCE_MENU });
}
function ex(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eC.A)({ subscriptionTier: ef.pe.TIER_2, analyticsLocations: t });
}
let eb = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        ep({ analyticsLocations: t, shopTab: eg.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        ep({ analyticsLocations: t, shopTab: eg.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        ex({ analyticsLocations: t });
    },
};
var ev = l(49999),
    eO = l(600676);
function eR(e) {
    let {
        title: t,
        imageUrl: l,
        imageAlt: a,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: c,
        buttonVariant: o,
        onCtaClick: h,
        onClose: u,
        className: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(eO.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: eO.Fx,
                      children: (0, n.jsx)(eo.K, {
                          icon: eh.P,
                          "aria-label": z.intl.string(z.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eO.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: eO.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(S.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eO.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(S.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eT(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, eu.kn)([n], ev.m.ORB_WALLET, !0),
        m = a.useCallback(() => {
            ((0, p.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(ev.i.TAKE_ACTION),
                o());
        }, [i, u, r, o, l, s]),
        C = a.useCallback(() => {
            (r || u(ev.i.DISMISS), c());
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
                ctaClickHandler: a.useCallback(() => {
                    ep({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ec.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(eR, {
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
                ctaClickHandler: a.useCallback(() => {
                    ex({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ec.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: _ } = (0, o.cf)([O.Ay], () => ({
            nitroGatedOrbMultiplier: O.Ay.nitroGatedOrbMultiplier,
        })),
        E = a.useMemo(() => z.intl.format(G.default["Ba/7wO"], { multiplier: _ }), [_]);
    return null == _ || h
        ? null
        : (0, n.jsx)(eR, {
              title: z.intl.string(G.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: z.intl.string(G.default.FkfrRH),
              subTextDescription: E,
              buttonText: z.intl.string(G.default.U9UQJE),
              buttonIcon: eS,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: eO.ml,
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
function eB(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = q.tEg,
        } = e,
        c = eM(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eN, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(ey, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eF(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: ej.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(ej.dW, ej.or), onClick: l, children: t });
}
function eD(e, t) {
    return z.intl.formatToPlainString(e ? G.default.p9PPYD : G.default["1JZfaU"], { multiplier: t });
}
function eP(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: a,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, n.jsx)(er, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(et, { text: z.intl.format(G.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eB({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(es, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: z.intl.format(G.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eF, { text: e }) }),
                  }
                : null,
            title: z.intl.string(G.default.H6Ny8N),
            badgeText: z.intl.format(t ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: eD(t, 1.2),
            challenges: i ? [] : eI,
            onClaim: eU,
        }),
        orbWalletFooter: (0, n.jsx)(ei, {
            onQuestsClick: () => eL(),
            onShopClick: () => ep({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function eH(e) {
    return (0, n.jsx)(eP, { ...e, hasNoChallenges: !0 });
}
function eW() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(et, { text: z.intl.format(G.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function ek() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eW, {}) : null;
}
function ew(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = q.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, b.z)({ shouldFetch: !0 }),
        h = (0, C.L)(ef.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([O.Ay], () => ({
            nitroGatedOrbMultiplier: O.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: O.Ay.orbChallengesDisplayError,
        })),
        _ = a.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === O.EB.CLAIM_CHALLENGE
                                  ? z.intl.string(G.default.FYb5rH)
                                  : z.intl.format(G.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eF, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        E = a.useCallback(
            () => (
                (0, p.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s(),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, e_.x)();
                    let n = l ? eE.MA.NITRO : eE.MA.UPSELL,
                        a = l
                            ? { customSubtitle: z.intl.format(G.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, eA.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: u, userIsPremiumTier2: h })
            ),
            [u, h, t, s],
        ),
        A = a.useMemo(
            () =>
                i.map((e) => {
                    let n = null != e.achievementDefinitionId ? eb[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: l },
                        i =
                            null != n
                                ? () => {
                                      ((0, p.Y)({
                                          pageType: t,
                                          sectionType: d.A.ORB_WALLET,
                                          ctaObject: d.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          n(a),
                                          s());
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [i, l, t, s],
        );
    return (0, n.jsx)(es, {
        title: z.intl.string(G.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: _,
        challenges: A,
        onClaim: v.Xz,
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
        { balance: h } = (0, x.W0)(),
        u = (0, L.H)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: E } = (0, x.rQ)({ disableFetch: !u }),
        A = (0, C.L)(ef.PremiumTypes.TIER_2),
        { analyticsLocations: b } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        u && (0, v.eX)();
    }, [u]);
    let R = a.useCallback(() => {
            ((0, p.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                ep({ analyticsLocations: b }),
                i());
        }, [b, s, i]),
        T = a.useCallback(() => {
            ((0, p.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eL(),
                i());
        }, [s, i]),
        N = a.useMemo(() => eM(A, h), [A, h]),
        { challengesForOrbWallet: S, hasFetchedChallenges: y } = (0, o.cf)([O.Ay], () => ({
            challengesForOrbWallet: O.Ay.challengesForOrbWallet,
            hasFetchedChallenges: O.Ay.hasFetchedChallenges,
        })),
        j = a.useRef(!1);
    a.useEffect(() => {
        if (!y || j.current) return;
        let e = S.map((e) => e.achievementIdentifier),
            t = S.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(q.HAw.ORB_WALLET_VIEWED, {
            location_stack: b,
            location_page: s,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (j.current = !0));
    }, [y, S, N, b, s]);
    let { pathname: I } = (0, c.zy)(),
        U = I.startsWith(q.BVt.COLLECTIBLES_SHOP),
        M = (0, _.p)(),
        B = a.useMemo(
            () =>
                r ? { onQuestsClick: T, onShopClick: R } : { onQuestsClick: M ? null : T, onShopClick: U ? null : R },
            [M, U, T, R, r],
        );
    return u
        ? (0, n.jsx)(er, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, n.jsx)(ek, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eB({ userHasPremium: A, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, n.jsx)(ew, { analyticsPage: s, analyticsLocations: b, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(ei, { ...B, totalOrbsRedeemed: E }),
          })
        : null;
}
function ez(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = a.useCallback(
            () => (0, n.jsx)(eG, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
            [t, l, r, c],
        ),
        h = a.useCallback(
            (e, t) => {
                "user:escape" === t && null != c && c();
            },
            [c],
        );
    return (0, n.jsx)(u.Y, {
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
