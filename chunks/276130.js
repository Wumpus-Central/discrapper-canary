a.d(t, { Yc: () => eN, vG: () => ey, FT: () => eR, EA: () => eI });
var l = a(477900),
    n = a(582128),
    s = a(503698),
    i = a.n(s),
    r = a(892227),
    c = a(17928),
    o = a(939249),
    h = a(922016),
    u = a(793574),
    d = a(688810),
    m = a(757036),
    _ = a(366505),
    E = a(166403),
    C = a(174459),
    g = a(124861),
    A = a(318346),
    f = a(362862),
    x = a(761705),
    p = a(923138),
    L = a(12510),
    v = a(673125),
    b = a(821609),
    O = a(661531),
    R = a(403581),
    N = a(834730),
    S = a(683071),
    T = a(577473),
    j = a(34188),
    y = a(303136),
    I = a(626031),
    U = a(628284),
    M = a(320448),
    B = a(404778),
    F = a(318254),
    D = a(742967),
    w = a(570165),
    G = a(375708),
    H = a(137484),
    W = a(427483);
function P(e) {
    let { achievementStatus: t, animationState: a = "off" } = e,
        n = t === g.x.COMPLETED || t === g.x.CLAIMED,
        s = (0, l.jsx)("div", {
            className: i()(H.TK, { [H.AM]: n }),
            children: (0, l.jsx)(D.x, {
                className: H.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: W.A,
                animationState: a,
                assetAltText: "",
            }),
        });
    return n ? (0, l.jsx)("div", { className: H.Zs, children: s }) : s;
}
function k(e) {
    let { className: t } = e;
    return (0, l.jsx)(B.c, { className: i()(H.Fu, t) });
}
function z(e) {
    let {
            achievementIdentifier: t,
            title: a,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: c,
            onDiscoveryClick: h,
            isLastItem: u,
        } = e,
        [d, m] = n.useState(!1),
        [_, E] = n.useState(!1);
    async function C() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let A = null != h && r === g.x.NONE,
        f = i()(H.of, { [H.D8]: d, [H.or]: A }),
        x = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: H.Ub,
                    children: [
                        (0, l.jsx)(P, { achievementStatus: r, animationState: d ? "on" : "off" }),
                        (0, l.jsxs)("div", {
                            className: H.Du,
                            children: [
                                (0, l.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: a }),
                                (0, l.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === g.x.COMPLETED ? w.default.h2qWpS : w.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, l.jsx)(F.C, {
                                                className: H.fN,
                                                size: "xs",
                                                color: O.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: a, isClaiming: n, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, l.jsx)(b.$, {
                            variant: "expressive",
                            size: "sm",
                            text: G.intl.string(w.default.WmfVjs),
                            loading: n,
                            onClick: s,
                        });
                    return n
                        ? r
                        : e === g.x.COMPLETED
                          ? a
                              ? r
                              : (0, l.jsx)(U.y, {
                                    color: O.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": G.intl.string(w.default.k6h2J3),
                                })
                          : i
                            ? (0, l.jsx)(M._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: d, isClaiming: _, handleClaim: C, hasDiscoveryClick: A }),
            ],
        }),
        p = n.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return A
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(o.D, { className: f, ...p, onClick: h, "aria-label": a, children: x }),
                  !u && (0, l.jsx)(k, {}),
              ],
          })
        : (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)("div", { className: f, ...p, children: x }), !u && (0, l.jsx)(k, {})],
          });
}
var Y = a(652215),
    V = a(653877),
    K = a(268920),
    X = a(633217);
function q() {
    return (0, l.jsx)("div", {
        className: V.s,
        children: (0, l.jsx)(y.A, { src: X.A, fallbackImage: K.A, className: V.Cb }),
    });
}
function Q(e) {
    let { nitroIconColor: t = O.A.colors.ICON_SUBTLE, text: a } = e;
    return (0, l.jsxs)("div", {
        className: V.SY,
        children: [
            (0, l.jsx)(R.t, { size: "xs", color: t }),
            (0, l.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: a }),
        ],
    });
}
function $(e) {
    let { orbBalance: t, headerTagsContent: a } = e;
    return (0, l.jsxs)("div", {
        className: V.SZ,
        children: [
            (0, l.jsx)(q, {}),
            (0, l.jsxs)("div", {
                className: V.ZX,
                children: [
                    (0, l.jsx)(I.t, {
                        value: t,
                        onValueChange: Y.tEg,
                        onValueReached: Y.tEg,
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
function Z(e) {
    let { text: t, onClick: a } = e,
        n = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(R.t, { size: "xxs", color: "white" }),
                (0, l.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == a
        ? (0, l.jsx)("div", { className: V.lh, children: n })
        : (0, l.jsx)(o.D, { className: i()(V.lh, V.w9), onClick: a, children: n });
}
function J(e) {
    let { numRows: t = 3 } = e,
        a = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, l.jsx)("div", {
        className: V.gW,
        "aria-hidden": !0,
        children: a.map((e, t) =>
            (0, l.jsxs)(
                "div",
                {
                    className: V.US,
                    children: [
                        (0, l.jsx)("div", { className: i()(V.DO, V.VR) }),
                        (0, l.jsxs)("div", {
                            className: V.hG,
                            children: [
                                (0, l.jsx)("div", { className: i()(V.DO, V.Iz) }),
                                (0, l.jsx)("div", { className: i()(V.DO, V.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function ee(e) {
    let { title: t, challenges: a, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        u = a.length > 0,
        d = n.useMemo(
            () =>
                s && null == h
                    ? (0, l.jsx)(J, { numRows: 3 })
                    : u
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsxs)("div", {
                                    className: V.$b,
                                    children: [
                                        (0, l.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, l.jsx)(Z, { text: c, onClick: o }),
                                    ],
                                }),
                                a.map((e, t) =>
                                    (0, l.jsx)(
                                        n.Fragment,
                                        {
                                            children: (0, l.jsx)(z, {
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
                        : (0, l.jsxs)("div", {
                              className: i()(V.GN, V.AZ),
                              children: [
                                  (0, l.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: G.intl.string(w.default.xOP5OP),
                                  }),
                                  (0, l.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(w.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, u, t, c, o, a, h, r],
        ),
        m = n.useMemo(
            () =>
                null == h
                    ? null
                    : (0, l.jsx)("div", {
                          className: i()(V.re, { [V.Oi]: u }),
                          children: (0, l.jsx)(S.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, l.jsxs)("div", { className: V.E6, "aria-busy": s, children: [m, d] });
}
function et(e) {
    let { onQuestsClick: t, onShopClick: a } = e;
    return (0, l.jsxs)("div", {
        className: V.W,
        children: [
            (0, l.jsx)(b.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: T.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, l.jsx)(b.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: j.U, type: "icon" },
                fullWidth: !0,
                onClick: a,
            }),
        ],
    });
}
function ea(e) {
    let {
            orbBalance: t,
            headerTagsContent: a,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
        } = e,
        [h, u] = n.useState(!1);
    return (0, l.jsxs)("div", {
        className: i()(V.ql, V.Ut),
        ref: o,
        children: [
            (0, l.jsx)($, { orbBalance: t, headerTagsContent: a }),
            h ? null : s({ onClose: () => u(!0) }),
            r,
            c,
        ],
    });
}
var el = a(408278),
    en = a(789645),
    es = a(696292),
    ei = a(839534),
    er = a(75678),
    ec = a(87719),
    eo = a(576761),
    eh = a(617986),
    eu = a(758836),
    ed = a(202541);
function em(e) {
    let { analyticsLocations: t = [] } = e;
    (0, ei.Cz)({ tab: eu.G2.ORBS, analyticsLocations: t, analyticsSource: u.A.ORBS_BALANCE_MENU });
}
function e_() {
    (0, eh.mA)({ fromContent: es.u.ORBS_BALANCE_MENU });
}
var eE = a(600676);
function eC(e) {
    let {
        title: t,
        imageUrl: a,
        imageAlt: n,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: c,
        buttonVariant: o,
        onCtaClick: h,
        onClose: u,
        className: d,
    } = e;
    return (0, l.jsxs)("div", {
        className: i()(eE.Vm, d),
        children: [
            null != u
                ? (0, l.jsx)("div", {
                      className: eE.Fx,
                      children: (0, l.jsx)(el.K, {
                          icon: en.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                className: eE.iH,
                children: [
                    null != a && (0, l.jsx)("img", { alt: n, src: a, className: eE.db }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eE.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, l.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(b.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eg(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        r = n.useCallback(() => {
            ((0, A.Y)({ pageType: s, sectionType: u.A.ORB_WALLET_PRIMARY_CARD, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                em({ analyticsLocations: i }));
        }, [i, s]);
    return (0, l.jsx)(eC, {
        title: G.intl.string(w.default.o6s7yg),
        imageUrl: a(105644),
        imageAlt: G.intl.string(w.default.qa1xyr),
        subTextDescription: G.intl.string(w.default.HACucK),
        buttonText: G.intl.string(w.default.o6s7yg),
        buttonIcon: { asset: j.U, type: "icon" },
        onCtaClick: r,
        onClose: t,
    });
}
let eA = { asset: R.t, type: "icon" };
function ef(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        { nitroGatedOrbMultiplier: r } = (0, c.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        o = n.useCallback(() => {
            ((0, A.Y)({
                pageType: s,
                sectionType: u.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: u.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, er.A)({ subscriptionTier: ed.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: i }));
        }, [i, s]),
        h = n.useMemo(() => G.intl.format(w.default["Ba/7wO"], { multiplier: r }), [r]);
    return null == r
        ? null
        : (0, l.jsx)(eC, {
              title: G.intl.string(w.default.ZqCAos),
              imageUrl: a(780361),
              imageAlt: G.intl.string(w.default.FkfrRH),
              subTextDescription: h,
              buttonText: G.intl.string(w.default.U9UQJE),
              buttonIcon: eA,
              buttonVariant: "expressive",
              onCtaClick: o,
              onClose: t,
              className: eE.ml,
          });
}
var ex = a(123576);
let ep = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: g.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: g.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: g.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eL(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function ev(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eb(e) {
    let { userHasPremium: t, onClose: a, orbBalance: n, analyticsPage: s } = e,
        i = ev(t, n);
    return "shop_orbs" === i
        ? (0, l.jsx)(eg, { onClose: a, analyticsPage: s })
        : "nitro_upsell" === i
          ? (0, l.jsx)(ef, { onClose: a, analyticsPage: s })
          : null;
}
function eO(e) {
    let { text: t, onClick: a } = e;
    return null == a
        ? (0, l.jsx)("span", { className: ex.dW, children: t })
        : (0, l.jsx)(o.D, { className: i()(ex.dW, ex.or), onClick: a, children: t });
}
function eR(e) {
    let { userHasPremium: t, orbBalance: a, hasErrorMessage: n, isLoading: s, hasNoChallenges: i } = e;
    return (0, l.jsx)(ea, {
        orbBalance: a,
        headerTagsContent: t
            ? (0, l.jsx)(Q, { text: G.intl.format(w.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: l } = e;
            return eb({ userHasPremium: t, onClose: l, orbBalance: a });
        },
        orbChallengesCard: (0, l.jsx)(ee, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: G.intl.format(w.default.ggLzeg, { underlineHook: (e) => (0, l.jsx)(eO, { text: e }) }),
                  }
                : null,
            title: G.intl.string(w.default.H6Ny8N),
            badgeText: G.intl.format(t ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : ep,
            onClaim: eL,
        }),
        orbWalletFooter: (0, l.jsx)(et, {
            onQuestsClick: () => e_(),
            onShopClick: () => em({ analyticsLocations: [] }),
        }),
    });
}
function eN(e) {
    return (0, l.jsx)(eR, { ...e, hasNoChallenges: !0 });
}
function eS() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, l.jsx)(Q, { text: G.intl.format(w.default["04j3XV"], { orbAmount: t.reward_amount, days: a }) });
}
function eT() {
    return null != (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()) ? (0, l.jsx)(eS, {}) : null;
}
function ej(e) {
    let { analyticsPage: t = u.A.ORB_WALLET } = e,
        { challengesForOrbWallet: a, hasFetchedChallenges: s, refetch: i } = (0, p.z)({ shouldFetch: !0 }),
        r = (0, m.L)(ed.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: o, orbChallengesDisplayError: h } = (0, c.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        d = n.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === v.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(w.default.FYb5rH)
                                  : G.intl.format(w.default.ggLzeg, {
                                        underlineHook: (e) => (0, l.jsx)(eO, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        _ = n.useMemo(() => {
            if (!r)
                return () => (
                    (0, A.Y)({ pageType: t, sectionType: u.A.ORB_WALLET, ctaObject: u.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ec.x)() : (0, eh.gC)(t, eo.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: o })
                );
        }, [o, r, t]);
    return (0, l.jsx)(ee, {
        title: G.intl.string(w.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: d,
        challenges: a,
        onClaim: L.Xz,
        onClickBadge: _,
        badgeText: G.intl.format(r ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: o }),
    });
}
function ey(e) {
    let { cardRef: t, analyticsPage: a = u.A.ORB_WALLET } = e,
        { balance: s } = (0, x.W)(),
        i = (0, f.H)({ location: "StatefulOrbWallet" }),
        r = (0, m.L)(ed.PremiumTypes.TIER_2),
        { analyticsLocations: o } = (0, d.Ay)(u.A.ORB_WALLET);
    n.useEffect(() => {
        i && (0, L.eX)();
    }, [i]);
    let h = n.useCallback(() => {
            ((0, A.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                em({ analyticsLocations: o }));
        }, [o, a]),
        _ = n.useCallback(() => {
            ((0, A.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_QUEST_HOME_CTA }),
                e_());
        }, [a]),
        E = n.useMemo(() => ev(r, s), [r, s]),
        { challengesForOrbWallet: p, hasFetchedChallenges: b } = (0, c.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        O = n.useRef(!1);
    return (n.useEffect(() => {
        if (!b || O.current) return;
        let e = p.map((e) => e.achievementIdentifier),
            t = p.filter((e) => e.achievementStatus === g.x.COMPLETED).map((e) => e.achievementIdentifier);
        (C.default.track(Y.HAw.ORB_WALLET_VIEWED, {
            location_stack: o,
            location_page: a,
            location_section: u.A.ORB_WALLET,
            location_object: u.A.ORB_WALLET,
            wallet_primary_card_type: E,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (O.current = !0));
    }, [b, p, E, o, a]),
    i)
        ? (0, l.jsx)(ea, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, l.jsx)(eT, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eb({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: a });
              },
              orbChallengesCard: (0, l.jsx)(ej, { analyticsPage: a }),
              orbWalletFooter: (0, l.jsx)(et, { onQuestsClick: _, onShopClick: h }),
          })
        : null;
}
function eI(e) {
    let { cardRef: t, targetElementRef: a, shouldShow: s, analyticsPage: i } = e,
        r = n.useCallback(() => (0, l.jsx)(ey, { cardRef: t, analyticsPage: i }), [t, i]);
    return (0, l.jsx)(h.Y, {
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
