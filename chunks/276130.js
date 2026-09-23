l.d(t, { Yc: () => eB, vG: () => eP, FT: () => eM, EA: () => eW });
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
    O = l(923138),
    v = l(12510),
    b = l(673125),
    T = l(821609),
    R = l(661531),
    S = l(403581),
    N = l(834730),
    y = l(683071),
    j = l(577473),
    I = l(34188),
    U = l(475743),
    M = l(303136),
    B = l(626031),
    F = l(320448),
    D = l(404778),
    H = l(318254),
    P = l(742967),
    W = l(570165),
    G = l(375708),
    w = l(137484),
    k = l(427483);
function z(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(w.TK, { [w.AM]: a }),
            children: (0, n.jsx)(P.x, {
                className: w.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: k.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, n.jsx)("div", { className: w.Zs, children: s }) : s;
}
function Y(e) {
    let { className: t } = e;
    return (0, n.jsx)(D.c, { className: i()(w.Fu, t) });
}
function V(e) {
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
        L = i()(w.of, { [w.o4]: d, [w.D8]: m, [w.or]: A }),
        p = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: w.Ub,
                    children: [
                        (0, n.jsx)(z, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: w.Du,
                            children: [
                                (0, n.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === f.x.COMPLETED ? W.default.h2qWpS : W.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(H.C, {
                                                className: w.fN,
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
                            text: G.intl.string(W.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === f.x.COMPLETED || a ? r : i ? (0, n.jsx)(F._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: _, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, { className: L, ...x, onClick: o, "aria-label": l, children: p }),
                  !u && (0, n.jsx)(Y, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: L, ...x, children: p }), !u && (0, n.jsx)(Y, {})],
          });
}
var K = l(652215),
    Q = l(653877),
    X = l(268920),
    q = l(633217);
function $() {
    return (0, n.jsx)("div", {
        className: Q.s,
        children: (0, n.jsx)(M.A, { src: q.A, fallbackImage: X.A, className: Q.Cb }),
    });
}
function Z(e) {
    let { nitroIconColor: t = R.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.SY,
        children: [
            (0, n.jsx)(S.t, { size: "xs", color: t }),
            (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function J(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, U.Ay)(t),
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
                    (0, n.jsx)(B.t, {
                        counterInnerClassName: i ? Q.F4 : void 0,
                        value: t,
                        onValueChange: K.tEg,
                        onValueReached: K.tEg,
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
function ee(e) {
    let { text: t, onClick: l } = e,
        a = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(S.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == l
        ? (0, n.jsx)("div", { className: Q.lh, children: a })
        : (0, n.jsx)(h.D, { className: i()(Q.lh, Q.w9), onClick: l, children: a });
}
function et(e) {
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
function el(e) {
    let { title: t, challenges: l, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        u = l.length > 0,
        d = a.useMemo(
            () =>
                s && null == h
                    ? (0, n.jsx)(et, { numRows: 3 })
                    : u
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
                                        null != c && (0, n.jsx)(ee, { text: c, onClick: o }),
                                    ],
                                }),
                                l.map((e, t) =>
                                    (0, n.jsx)(
                                        a.Fragment,
                                        {
                                            children: (0, n.jsx)(V, {
                                                ...e,
                                                onClaim: r,
                                                isLastItem: t === l.length - 1,
                                            }),
                                        },
                                        e.achievementIdentifier,
                                    ),
                                ),
                            ],
                        })
                      : null != h
                        ? null
                        : (0, n.jsxs)("div", {
                              className: i()(Q.GN, Q.AZ),
                              children: [
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: G.intl.string(W.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(W.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, u, t, c, o, l, h, r],
        ),
        m = a.useMemo(
            () =>
                null == h
                    ? null
                    : (0, n.jsx)("div", {
                          className: i()(Q.re, { [Q.Oi]: u }),
                          children: (0, n.jsx)(y.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: Q.E6, "aria-busy": s, children: [m, d] });
}
function en(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.W,
        children: [
            null != t &&
                (0, n.jsx)(T.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: j.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, n.jsx)(T.$, {
                    text: "Shop",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: I.U, type: "icon" },
                    fullWidth: !0,
                    onClick: l,
                }),
        ],
    });
}
function ea(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
        } = e,
        [h, u] = a.useState(!1);
    return (0, n.jsxs)("div", {
        className: i()(Q.ql, Q.Ut),
        ref: o,
        children: [
            (0, n.jsx)(J, { orbBalance: t, headerTagsContent: l }),
            h ? null : s({ onClose: () => u(!0) }),
            r,
            c,
        ],
    });
}
var es = l(554146),
    ei = l(408278),
    er = l(789645),
    ec = l(131607),
    eo = l(696292),
    eh = l(839534),
    eu = l(75678),
    ed = l(87719),
    em = l(576761),
    eC = l(617986),
    e_ = l(758836),
    eE = l(202541);
function eg(e) {
    let { analyticsLocations: t = [], shopTab: l = e_.G2.ORBS } = e;
    (0, eh.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eA() {
    (0, eC.mA)({ fromContent: eo.u.ORBS_BALANCE_MENU });
}
function ef(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eu.A)({ subscriptionTier: eE.pe.TIER_2, analyticsLocations: t });
}
let eL = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eg({ analyticsLocations: t, shopTab: e_.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eg({ analyticsLocations: t, shopTab: e_.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        ef({ analyticsLocations: t });
    },
};
var ep = l(49999),
    ex = l(600676);
function eO(e) {
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
        className: i()(ex.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: ex.Fx,
                      children: (0, n.jsx)(ei.K, {
                          icon: er.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: ex.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: ex.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: ex.L8,
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
function ev(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, ec.kn)([n], ep.m.ORB_WALLET, !0),
        m = a.useCallback(() => {
            ((0, L.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(ep.i.TAKE_ACTION),
                o());
        }, [i, u, r, o, l, s]),
        C = a.useCallback(() => {
            (r || u(ep.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: m, shouldHideCard: null == h && !r, onClose: C };
}
function eb(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: o,
            onCtaClick: h,
            onClose: u,
        } = ev(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    eg({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: es.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(eO, {
              title: G.intl.string(W.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: G.intl.string(W.default.qa1xyr),
              subTextDescription: G.intl.string(W.default.HACucK),
              buttonText: G.intl.string(W.default["7raRgL"]),
              buttonIcon: { asset: I.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eT = { asset: S.t, type: "icon" };
function eR(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: h,
            onCtaClick: u,
            onClose: C,
        } = ev(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    ef({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: es.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: _ } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
        })),
        E = a.useMemo(() => G.intl.format(W.default["Ba/7wO"], { multiplier: _ }), [_]);
    return null == _ || h
        ? null
        : (0, n.jsx)(eO, {
              title: G.intl.string(W.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: G.intl.string(W.default.FkfrRH),
              subTextDescription: E,
              buttonText: G.intl.string(W.default.U9UQJE),
              buttonIcon: eT,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: ex.ml,
          });
}
var eS = l(123576);
let eN = [
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
async function ey(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function ej(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eI(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = K.tEg,
        } = e,
        c = ej(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eb, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(eR, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eU(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eS.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eS.dW, eS.or), onClick: l, children: t });
}
function eM(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ea, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(Z, { text: G.intl.format(W.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eI({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(el, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: G.intl.format(W.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eU, { text: e }) }),
                  }
                : null,
            title: G.intl.string(W.default.H6Ny8N),
            badgeText: G.intl.format(t ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eN,
            onClaim: ey,
        }),
        orbWalletFooter: (0, n.jsx)(en, {
            onQuestsClick: () => eA(),
            onShopClick: () => eg({ analyticsLocations: [] }),
        }),
    });
}
function eB(e) {
    return (0, n.jsx)(eM, { ...e, hasNoChallenges: !0 });
}
function eF() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Z, { text: G.intl.format(W.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eD() {
    return null != (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eF, {}) : null;
}
function eH(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = K.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, O.z)({ shouldFetch: !0 }),
        h = (0, C.L)(eE.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: b.Ay.orbChallengesDisplayError,
        })),
        _ = a.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === b.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(W.default.FYb5rH)
                                  : G.intl.format(W.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eU, { text: e, onClick: c }),
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
                    if (null == t) return void (0, ed.x)();
                    let n = l ? em.MA.NITRO : em.MA.UPSELL,
                        a = l
                            ? { customSubtitle: G.intl.format(W.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, eC.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: u, userIsPremiumTier2: h })
            ),
            [u, h, t, s],
        ),
        g = a.useMemo(
            () =>
                i.map((e) => {
                    let n = null != e.achievementDefinitionId ? eL[e.achievementDefinitionId] : null,
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
    return (0, n.jsx)(el, {
        title: G.intl.string(W.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: _,
        challenges: g,
        onClaim: v.Xz,
        onClickBadge: E,
        badgeText: G.intl.format(h ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: u }),
    });
}
function eP(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET, onCloseWallet: s = K.tEg, isProfilePopout: i } = e,
        { balance: r } = (0, x.W)(),
        h = (0, p.H)({ location: "StatefulOrbWallet" }),
        u = (0, C.L)(eE.PremiumTypes.TIER_2),
        { analyticsLocations: E } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        h && (0, v.eX)();
    }, [h]);
    let g = a.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: E }),
                s());
        }, [E, l, s]),
        O = a.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eA(),
                s());
        }, [l, s]),
        T = a.useMemo(() => ej(u, r), [u, r]),
        { challengesForOrbWallet: R, hasFetchedChallenges: S } = (0, o.cf)([b.Ay], () => ({
            challengesForOrbWallet: b.Ay.challengesForOrbWallet,
            hasFetchedChallenges: b.Ay.hasFetchedChallenges,
        })),
        N = a.useRef(!1);
    a.useEffect(() => {
        if (!S || N.current) return;
        let e = R.map((e) => e.achievementIdentifier),
            t = R.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (A.default.track(K.HAw.ORB_WALLET_VIEWED, {
            location_stack: E,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: T,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (N.current = !0));
    }, [S, R, T, E, l]);
    let { pathname: y } = (0, c.zy)(),
        j = y.startsWith(K.BVt.COLLECTIBLES_SHOP),
        I = (0, _.p)(),
        U = a.useMemo(
            () =>
                i ? { onQuestsClick: O, onShopClick: g } : { onQuestsClick: I ? null : O, onShopClick: j ? null : g },
            [I, j, O, g, i],
        );
    return h
        ? (0, n.jsx)(ea, {
              cardRef: t,
              orbBalance: r,
              headerTagsContent: (0, n.jsx)(eD, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eI({ userHasPremium: u, onClose: t, orbBalance: r, analyticsPage: l, onCloseWallet: s });
              },
              orbChallengesCard: (0, n.jsx)(eH, { analyticsPage: l, analyticsLocations: E, onCloseWallet: s }),
              orbWalletFooter: (0, n.jsx)(en, { ...U }),
          })
        : null;
}
function eW(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: s, analyticsPage: i, onCloseWallet: r } = e,
        c = a.useCallback(() => (0, n.jsx)(eP, { cardRef: t, analyticsPage: i, onCloseWallet: r }), [t, i, r]);
    return (0, n.jsx)(u.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: c,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: u.Y.Animation.NONE,
        targetElementRef: l,
        children: () => null,
    });
}
