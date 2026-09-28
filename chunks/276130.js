l.d(t, { Yc: () => eP, vG: () => ew, FT: () => eD, EA: () => eG });
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
    g = l(166403),
    A = l(174459),
    f = l(124861),
    L = l(318346),
    p = l(362862),
    x = l(761705),
    b = l(923138),
    O = l(12510),
    v = l(673125),
    T = l(821609),
    R = l(661531),
    S = l(403581),
    N = l(834730),
    y = l(140735),
    j = l(683071),
    I = l(577473),
    U = l(34188),
    M = l(305866),
    B = l(475743),
    F = l(303136),
    D = l(626031),
    P = l(320448),
    H = l(404778),
    W = l(318254),
    k = l(742967),
    w = l(570165),
    G = l(375708),
    z = l(137484),
    Y = l(427483);
function V(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(z.TK, { [z.AM]: a }),
            children: (0, n.jsx)(k.x, {
                className: z.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: Y.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a
        ? (0, n.jsxs)("div", {
              className: z.Zs,
              children: [(0, n.jsx)(y.A, { children: G.intl.string(w.default.k6h2J3) }), s],
          })
        : s;
}
function K(e) {
    let { className: t } = e;
    return (0, n.jsx)(H.c, { className: i()(z.Fu, t) });
}
function X(e) {
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
    async function g() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let A = null != o && r !== f.x.COMPLETED,
        L = i()(z.of, { [z.o4]: d, [z.D8]: m, [z.or]: A }),
        p = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: z.Ub,
                    children: [
                        (0, n.jsx)(V, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: z.Du,
                            children: [
                                (0, n.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === f.x.COMPLETED ? w.default.h2qWpS : w.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(W.C, {
                                                className: z.fN,
                                                size: "xs",
                                                color: R.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: a, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(T.$, {
                            variant: l || a ? "expressive" : "secondary",
                            size: "sm",
                            text: G.intl.string(w.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === f.x.COMPLETED || a ? r : i ? (0, n.jsx)(P._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: _, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.D, { className: L, ...x, onClick: o, children: p }), !u && (0, n.jsx)(K, {})],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: L, ...x, children: p }), !u && (0, n.jsx)(K, {})],
          });
}
var q = l(652215),
    Q = l(653877),
    J = l(268920),
    Z = l(633217);
function $() {
    return (0, n.jsx)("div", {
        className: Q.s,
        children: (0, n.jsx)(F.A, { src: Z.A, fallbackImage: J.A, className: Q.Cb }),
    });
}
function ee(e) {
    let { nitroIconColor: t = R.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.SY,
        children: [
            (0, n.jsx)(S.t, { size: "xs", color: t }),
            (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function et(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, B.Ay)(t),
        i = a.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, n.jsxs)("div", {
        className: Q.SZ,
        children: [
            (0, n.jsx)($, {}),
            (0, n.jsxs)("div", {
                className: Q.ZX,
                children: [
                    (0, n.jsx)(y.A, {
                        children:
                            null == t
                                ? G.intl.string(G.t.cKwv4k)
                                : G.intl.formatToPlainString(G.t.zPaLL9, { balance: t }),
                    }),
                    (0, n.jsx)(D.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? Q.F4 : void 0,
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
function el(e) {
    let { text: t, accessibilityLabel: l, onClick: a } = e,
        s = null != l,
        r = (0, n.jsxs)(n.Fragment, {
            children: [
                s && (0, n.jsx)(y.A, { children: l }),
                (0, n.jsx)(S.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, n.jsx)(N.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: Q.lh, children: r })
        : (0, n.jsx)(h.D, { className: i()(Q.lh, Q.w9), onClick: a, children: r });
}
function en(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: Q.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: Q.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(Q.DO, Q.VR) }),
                        (0, n.jsxs)("div", {
                            className: Q.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(Q.DO, Q.Iz) }),
                                (0, n.jsx)("div", { className: i()(Q.DO, Q.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function ea(e) {
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
                    ? (0, n.jsx)(en, { numRows: 3 })
                    : d
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: Q.$b,
                                    children: [
                                        (0, n.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, n.jsx)(el, { text: c, accessibilityLabel: o, onClick: h }),
                                    ],
                                }),
                                (0, n.jsx)("ul", {
                                    className: Q.Up,
                                    children: l.map((e, t) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                className: Q.tJ,
                                                children: (0, n.jsx)(X, {
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
                              className: i()(Q.GN, Q.AZ),
                              children: [
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: G.intl.string(w.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(w.default.XW2CuY),
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
                          className: i()(Q.re, { [Q.Oi]: d }),
                          children: (0, n.jsx)(j.w, { ...u, children: u.message }),
                      }),
            [u, d],
        );
    return (0, n.jsxs)("div", { className: Q.E6, "aria-busy": s, children: [C, m] });
}
function es(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.W,
        children: [
            null != t &&
                (0, n.jsx)(T.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: I.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, n.jsx)(T.$, {
                    text: "Shop",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: U.U, type: "icon" },
                    fullWidth: !0,
                    onClick: l,
                }),
        ],
    });
}
function ei(e) {
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
    return (0, n.jsxs)(M.l, {
        className: i()(Q.ql, Q.Ut),
        ref: o,
        returnRef: h,
        "aria-label": G.intl.string(w.default.XKj5L9),
        children: [
            (0, n.jsx)(et, { orbBalance: t, headerTagsContent: l }),
            u ? null : s({ onClose: () => d(!0) }),
            r,
            c,
        ],
    });
}
var er = l(554146),
    ec = l(408278),
    eo = l(789645),
    eh = l(131607),
    eu = l(696292),
    ed = l(815996),
    em = l(75678),
    eC = l(87719),
    e_ = l(576761),
    eE = l(617986),
    eg = l(758836),
    eA = l(202541);
function ef(e) {
    let { analyticsLocations: t = [], shopTab: l = eg.G2.ORBS } = e;
    (0, ed.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eL() {
    (0, eE.mA)({ fromContent: eu.u.ORBS_BALANCE_MENU });
}
function ep(e) {
    let { analyticsLocations: t = [] } = e;
    (0, em.A)({ subscriptionTier: eA.pe.TIER_2, analyticsLocations: t });
}
let ex = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        ef({ analyticsLocations: t, shopTab: eg.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        ef({ analyticsLocations: t, shopTab: eg.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        ep({ analyticsLocations: t });
    },
};
var eb = l(49999),
    eO = l(600676);
function ev(e) {
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
                      children: (0, n.jsx)(ec.K, {
                          icon: eo.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
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
                            (0, n.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eO.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(T.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eT(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, eh.kn)([n], eb.m.ORB_WALLET, !0),
        m = a.useCallback(() => {
            ((0, L.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(eb.i.TAKE_ACTION),
                o());
        }, [i, u, r, o, l, s]),
        C = a.useCallback(() => {
            (r || u(eb.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: m, shouldHideCard: null == h && !r, onClose: C };
}
function eR(e) {
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
                    ef({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: er.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(ev, {
              title: G.intl.string(w.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: G.intl.string(w.default.qa1xyr),
              subTextDescription: G.intl.string(w.default.HACucK),
              buttonText: G.intl.string(w.default["7raRgL"]),
              buttonIcon: { asset: U.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eS = { asset: S.t, type: "icon" };
function eN(e) {
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
                    ep({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: er.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: _ } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        E = a.useMemo(() => G.intl.format(w.default["Ba/7wO"], { multiplier: _ }), [_]);
    return null == _ || h
        ? null
        : (0, n.jsx)(ev, {
              title: G.intl.string(w.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: G.intl.string(w.default.FkfrRH),
              subTextDescription: E,
              buttonText: G.intl.string(w.default.U9UQJE),
              buttonIcon: eS,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: eO.ml,
          });
}
var ey = l(123576);
let ej = [
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
async function eI(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eU(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eM(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = q.tEg,
        } = e,
        c = eU(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eR, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(eN, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eB(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: ey.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(ey.dW, ey.or), onClick: l, children: t });
}
function eF(e, t) {
    return G.intl.formatToPlainString(e ? w.default.p9PPYD : w.default["1JZfaU"], { multiplier: t });
}
function eD(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ei, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(ee, { text: G.intl.format(w.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eM({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(ea, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: G.intl.format(w.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eB, { text: e }) }),
                  }
                : null,
            title: G.intl.string(w.default.H6Ny8N),
            badgeText: G.intl.format(t ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: eF(t, 1.2),
            challenges: i ? [] : ej,
            onClaim: eI,
        }),
        orbWalletFooter: (0, n.jsx)(es, {
            onQuestsClick: () => eL(),
            onShopClick: () => ef({ analyticsLocations: [] }),
        }),
    });
}
function eP(e) {
    return (0, n.jsx)(eD, { ...e, hasNoChallenges: !0 });
}
function eH() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(ee, { text: G.intl.format(w.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eW() {
    return null != (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eH, {}) : null;
}
function ek(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = q.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, b.z)({ shouldFetch: !0 }),
        h = (0, C.L)(eA.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        _ = a.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === v.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(w.default.FYb5rH)
                                  : G.intl.format(w.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eB, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        E = a.useCallback(
            () => (
                (0, L.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s(),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, eC.x)();
                    let n = l ? e_.MA.NITRO : e_.MA.UPSELL,
                        a = l
                            ? { customSubtitle: G.intl.format(w.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, eE.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: u, userIsPremiumTier2: h })
            ),
            [u, h, t, s],
        ),
        g = a.useMemo(
            () =>
                i.map((e) => {
                    let n = null != e.achievementDefinitionId ? ex[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: l },
                        i =
                            null != n
                                ? () => {
                                      ((0, L.Y)({
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
    return (0, n.jsx)(ea, {
        title: G.intl.string(w.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: _,
        challenges: g,
        onClaim: O.Xz,
        onClickBadge: E,
        badgeText: G.intl.format(h ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: u }),
        badgeAccessibilityLabel: eF(h, u),
    });
}
function ew(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: s = d.A.ORB_WALLET,
            onCloseWallet: i = q.tEg,
            isProfilePopout: r,
        } = e,
        { balance: h } = (0, x.W)(),
        u = (0, p.H)({ location: "StatefulOrbWallet" }),
        E = (0, C.L)(eA.PremiumTypes.TIER_2),
        { analyticsLocations: g } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        u && (0, O.eX)();
    }, [u]);
    let b = a.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                ef({ analyticsLocations: g }),
                i());
        }, [g, s, i]),
        T = a.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eL(),
                i());
        }, [s, i]),
        R = a.useMemo(() => eU(E, h), [E, h]),
        { challengesForOrbWallet: S, hasFetchedChallenges: N } = (0, o.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        y = a.useRef(!1);
    a.useEffect(() => {
        if (!N || y.current) return;
        let e = S.map((e) => e.achievementIdentifier),
            t = S.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (A.default.track(q.HAw.ORB_WALLET_VIEWED, {
            location_stack: g,
            location_page: s,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: R,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (y.current = !0));
    }, [N, S, R, g, s]);
    let { pathname: j } = (0, c.zy)(),
        I = j.startsWith(q.BVt.COLLECTIBLES_SHOP),
        U = (0, _.p)(),
        M = a.useMemo(
            () =>
                r ? { onQuestsClick: T, onShopClick: b } : { onQuestsClick: U ? null : T, onShopClick: I ? null : b },
            [U, I, T, b, r],
        );
    return u
        ? (0, n.jsx)(ei, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, n.jsx)(eW, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eM({ userHasPremium: E, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, n.jsx)(ek, { analyticsPage: s, analyticsLocations: g, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(es, { ...M }),
          })
        : null;
}
function eG(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = a.useCallback(
            () => (0, n.jsx)(ew, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
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
