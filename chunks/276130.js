a.d(t, { Yc: () => eO, vG: () => eT, FT: () => eb, EA: () => ej });
var n = a(477900),
    l = a(582128),
    s = a(503698),
    i = a.n(s),
    r = a(892227),
    c = a(17928),
    o = a(939249),
    h = a(922016),
    u = a(793574),
    d = a(688810),
    m = a(757036),
    C = a(366505),
    E = a(166403),
    _ = a(124861),
    g = a(318346),
    A = a(362862),
    x = a(761705),
    f = a(923138),
    L = a(12510),
    p = a(673125),
    v = a(821609),
    b = a(661531),
    O = a(403581),
    N = a(834730),
    R = a(683071),
    S = a(577473),
    T = a(34188),
    j = a(303136),
    y = a(626031),
    U = a(628284),
    I = a(320448),
    M = a(404778),
    B = a(318254),
    F = a(742967),
    D = a(570165),
    G = a(375708),
    H = a(137484),
    w = a(427483);
function P(e) {
    let { achievementStatus: t, animationState: a = "off" } = e,
        l = t === _.x.COMPLETED || t === _.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(H.TK, { [H.AM]: l }),
            children: (0, n.jsx)(F.x, {
                className: H.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: w.A,
                animationState: a,
                assetAltText: "",
            }),
        });
    return l ? (0, n.jsx)("div", { className: H.Zs, children: s }) : s;
}
function k(e) {
    let { className: t } = e;
    return (0, n.jsx)(M.c, { className: i()(H.Fu, t) });
}
function W(e) {
    let {
            achievementIdentifier: t,
            title: a,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: c,
            onDiscoveryClick: h,
            isLastItem: u,
        } = e,
        [d, m] = l.useState(!1),
        [C, E] = l.useState(!1);
    async function g() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let A = null != h && r === _.x.NONE,
        x = i()(H.of, { [H.D8]: d, [H.or]: A }),
        f = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: H.Ub,
                    children: [
                        (0, n.jsx)(P, { achievementStatus: r, animationState: d ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: H.Du,
                            children: [
                                (0, n.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: a }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === _.x.COMPLETED ? D.default.h2qWpS : D.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(B.C, {
                                                className: H.fN,
                                                size: "xs",
                                                color: b.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: a, isClaiming: l, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(v.$, {
                            variant: "expressive",
                            size: "sm",
                            text: G.intl.string(D.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? r
                        : e === _.x.COMPLETED
                          ? a
                              ? r
                              : (0, n.jsx)(U.y, {
                                    color: b.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": G.intl.string(D.default.k6h2J3),
                                })
                          : i
                            ? (0, n.jsx)(I._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: d, isClaiming: C, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        L = l.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(o.D, { className: x, ...L, onClick: h, "aria-label": a, children: f }),
                  !u && (0, n.jsx)(k, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: x, ...L, children: f }), !u && (0, n.jsx)(k, {})],
          });
}
var z = a(652215),
    Y = a(653877),
    V = a(268920),
    K = a(633217);
function X() {
    return (0, n.jsx)("div", {
        className: Y.s,
        children: (0, n.jsx)(j.A, { src: K.A, fallbackImage: V.A, className: Y.Cb }),
    });
}
function q(e) {
    let { nitroIconColor: t = b.A.colors.ICON_SUBTLE, text: a } = e;
    return (0, n.jsxs)("div", {
        className: Y.SY,
        children: [
            (0, n.jsx)(O.t, { size: "xs", color: t }),
            (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: a }),
        ],
    });
}
function Q(e) {
    let { orbBalance: t, headerTagsContent: a } = e;
    return (0, n.jsxs)("div", {
        className: Y.SZ,
        children: [
            (0, n.jsx)(X, {}),
            (0, n.jsxs)("div", {
                className: Y.ZX,
                children: [
                    (0, n.jsx)(y.t, {
                        value: t,
                        onValueChange: z.tEg,
                        onValueReached: z.tEg,
                        targetTotalCounterTime: 1500,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    a,
                ],
            }),
        ],
    });
}
function $(e) {
    let { text: t, onClick: a } = e,
        l = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(O.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: Y.lh, children: l })
        : (0, n.jsx)(o.D, { className: i()(Y.lh, Y.w9), onClick: a, children: l });
}
function Z(e) {
    let { numRows: t = 3 } = e,
        a = l.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: Y.gW,
        "aria-hidden": !0,
        children: a.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: Y.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(Y.DO, Y.VR) }),
                        (0, n.jsxs)("div", {
                            className: Y.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(Y.DO, Y.Iz) }),
                                (0, n.jsx)("div", { className: i()(Y.DO, Y.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function J(e) {
    let { title: t, challenges: a, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        u = a.length > 0,
        d = l.useMemo(
            () =>
                s && null == h
                    ? (0, n.jsx)(Z, { numRows: 3 })
                    : u
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: Y.$b,
                                    children: [
                                        (0, n.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, n.jsx)($, { text: c, onClick: o }),
                                    ],
                                }),
                                a.map((e, t) =>
                                    (0, n.jsx)(
                                        l.Fragment,
                                        {
                                            children: (0, n.jsx)(W, {
                                                ...e,
                                                onClaim: r,
                                                isLastItem: t === a.length - 1,
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
                              className: i()(Y.GN, Y.AZ),
                              children: [
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: G.intl.string(D.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(D.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, u, t, c, o, a, h, r],
        ),
        m = l.useMemo(
            () =>
                null == h
                    ? null
                    : (0, n.jsx)("div", {
                          className: i()(Y.re, { [Y.Oi]: u }),
                          children: (0, n.jsx)(R.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: Y.E6, "aria-busy": s, children: [m, d] });
}
function ee(e) {
    let { onQuestsClick: t, onShopClick: a } = e;
    return (0, n.jsxs)("div", {
        className: Y.W,
        children: [
            (0, n.jsx)(v.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: S.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, n.jsx)(v.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: T.U, type: "icon" },
                fullWidth: !0,
                onClick: a,
            }),
        ],
    });
}
function et(e) {
    let {
            orbBalance: t,
            headerTagsContent: a,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
        } = e,
        [h, u] = l.useState(!1);
    return (0, n.jsxs)("div", {
        className: i()(Y.ql, Y.Ut),
        ref: o,
        children: [
            (0, n.jsx)(Q, { orbBalance: t, headerTagsContent: a }),
            h ? null : s({ onClose: () => u(!0) }),
            r,
            c,
        ],
    });
}
var ea = a(408278),
    en = a(789645),
    el = a(696292),
    es = a(839534),
    ei = a(75678),
    er = a(87719),
    ec = a(576761),
    eo = a(617986),
    eh = a(758836),
    eu = a(202541);
function ed(e) {
    let { analyticsLocations: t = [] } = e;
    (0, es.Cz)({ tab: eh.G2.ORBS, analyticsLocations: t, analyticsSource: u.A.ORBS_BALANCE_MENU });
}
function em() {
    (0, eo.mA)({ fromContent: el.u.ORBS_BALANCE_MENU });
}
var eC = a(600676);
function eE(e) {
    let {
        title: t,
        imageUrl: a,
        imageAlt: l,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: c,
        buttonVariant: o,
        onCtaClick: h,
        onClose: u,
        className: d,
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(eC.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: eC.Fx,
                      children: (0, n.jsx)(ea.K, {
                          icon: en.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            null != a && (0, n.jsx)("img", { alt: l, src: a, className: eC.db }),
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(N.E, { variant: "text-md/bold", color: "text-default", className: eC.L8, children: t }),
                    null != s &&
                        (0, n.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: eC.Gd,
                            children: s,
                        }),
                    (0, n.jsx)(v.$, { text: r, size: "sm", icon: c, onClick: h, variant: o }),
                ],
            }),
        ],
    });
}
function e_(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        r = l.useCallback(() => {
            ((0, g.Y)({ pageType: s, sectionType: u.A.ORB_WALLET_PRIMARY_CARD, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                ed({ analyticsLocations: i }));
        }, [i, s]);
    return (0, n.jsx)(eE, {
        title: G.intl.string(D.default.o6s7yg),
        imageUrl: a(105644),
        imageAlt: G.intl.string(D.default.qa1xyr),
        subTextDescription: G.intl.string(D.default.HACucK),
        buttonText: G.intl.string(D.default.o6s7yg),
        buttonIcon: { asset: T.U, type: "icon" },
        onCtaClick: r,
        onClose: t,
    });
}
let eg = { asset: O.t, type: "icon" };
function eA(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        { nitroGatedOrbMultiplier: r } = (0, c.cf)([p.Ay], () => ({
            nitroGatedOrbMultiplier: p.Ay.nitroGatedOrbMultiplier,
        })),
        o = l.useCallback(() => {
            ((0, g.Y)({
                pageType: s,
                sectionType: u.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: u.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, ei.A)({ subscriptionTier: eu.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: i }));
        }, [i, s]),
        h = l.useMemo(() => G.intl.format(D.default["Ba/7wO"], { multiplier: r }), [r]);
    return null == r
        ? null
        : (0, n.jsx)(eE, {
              title: G.intl.string(D.default.ZqCAos),
              imageUrl: a(780361),
              imageAlt: G.intl.string(D.default.FkfrRH),
              subTextDescription: h,
              buttonText: G.intl.string(D.default.U9UQJE),
              buttonIcon: eg,
              buttonVariant: "expressive",
              onCtaClick: o,
              onClose: t,
              className: eC.ml,
          });
}
var ex = a(123576);
let ef = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: _.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: _.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: _.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eL(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function ep(e) {
    let { userHasPremium: t, onClose: a, orbBalance: l, analyticsPage: s } = e;
    return t
        ? null != l && l >= 1400
            ? (0, n.jsx)(e_, { onClose: a, analyticsPage: s })
            : null
        : (0, n.jsx)(eA, { onClose: a, analyticsPage: s });
}
function ev(e) {
    let { text: t, onClick: a } = e;
    return null == a
        ? (0, n.jsx)("span", { className: ex.dW, children: t })
        : (0, n.jsx)(o.D, { className: i()(ex.dW, ex.or), onClick: a, children: t });
}
function eb(e) {
    let { userHasPremium: t, orbBalance: a, hasErrorMessage: l, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(et, {
        orbBalance: a,
        headerTagsContent: t
            ? (0, n.jsx)(q, { text: G.intl.format(D.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return ep({ userHasPremium: t, onClose: n, orbBalance: a });
        },
        orbChallengesCard: (0, n.jsx)(J, {
            isLoading: s,
            inlineNoticeProps: l
                ? {
                      type: "warning",
                      message: G.intl.format(D.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(ev, { text: e }) }),
                  }
                : null,
            title: G.intl.string(D.default.H6Ny8N),
            badgeText: G.intl.format(t ? D.default.OHLdjq : D.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : ef,
            onClaim: eL,
        }),
        orbWalletFooter: (0, n.jsx)(ee, {
            onQuestsClick: () => em(),
            onShopClick: () => ed({ analyticsLocations: [] }),
        }),
    });
}
function eO(e) {
    return (0, n.jsx)(eb, { ...e, hasNoChallenges: !0 });
}
function eN() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, C.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(q, { text: G.intl.format(D.default["04j3XV"], { orbAmount: t.reward_amount, days: a }) });
}
function eR() {
    return null != (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eN, {}) : null;
}
function eS(e) {
    let { analyticsPage: t = u.A.ORB_WALLET } = e,
        { challengesForOrbWallet: a, hasFetchedChallenges: s, refetch: i } = (0, f.z)({ shouldFetch: !0 }),
        r = (0, m.L)(eu.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: o, orbChallengesDisplayError: h } = (0, c.cf)([p.Ay], () => ({
            nitroGatedOrbMultiplier: p.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: p.Ay.orbChallengesDisplayError,
        })),
        d = l.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === p.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(D.default.FYb5rH)
                                  : G.intl.format(D.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(ev, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        C = l.useMemo(() => {
            if (!r)
                return () => (
                    (0, g.Y)({ pageType: t, sectionType: u.A.ORB_WALLET, ctaObject: u.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, er.x)() : (0, eo.gC)(t, ec.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: o })
                );
        }, [o, r, t]);
    return (0, n.jsx)(J, {
        title: G.intl.string(D.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: d,
        challenges: a,
        onClaim: L.Xz,
        onClickBadge: C,
        badgeText: G.intl.format(r ? D.default.OHLdjq : D.default.WOMrJf, { multiplier: o }),
    });
}
function eT(e) {
    let { cardRef: t, analyticsPage: a = u.A.ORB_WALLET } = e,
        { balance: s } = (0, x.W)(),
        i = (0, A.H)({ location: "StatefulOrbWallet" }),
        r = (0, m.L)(eu.PremiumTypes.TIER_2),
        { analyticsLocations: c } = (0, d.Ay)(u.A.ORB_WALLET);
    l.useEffect(() => {
        i && (0, L.eX)();
    }, [i]);
    let o = l.useCallback(() => {
            ((0, g.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                ed({ analyticsLocations: c }));
        }, [c, a]),
        h = l.useCallback(() => {
            ((0, g.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_QUEST_HOME_CTA }),
                em());
        }, [a]);
    return i
        ? (0, n.jsx)(et, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, n.jsx)(eR, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ep({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: a });
              },
              orbChallengesCard: (0, n.jsx)(eS, { analyticsPage: a }),
              orbWalletFooter: (0, n.jsx)(ee, { onQuestsClick: h, onShopClick: o }),
          })
        : null;
}
function ej(e) {
    let { cardRef: t, targetElementRef: a, shouldShow: s, analyticsPage: i } = e,
        r = l.useCallback(() => (0, n.jsx)(eT, { cardRef: t, analyticsPage: i }), [t, i]);
    return (0, n.jsx)(h.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: h.Y.Animation.NONE,
        targetElementRef: a,
        children: () => null,
    });
}
