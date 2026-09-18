a.d(t, { Yc: () => eN, vG: () => ey, FT: () => eR, EA: () => eI });
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
    _ = a(366505),
    C = a(166403),
    E = a(174459),
    g = a(124861),
    A = a(318346),
    f = a(362862),
    x = a(761705),
    p = a(923138),
    L = a(12510),
    v = a(673125),
    O = a(821609),
    b = a(661531),
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
        l = t === g.x.COMPLETED || t === g.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(H.TK, { [H.AM]: l }),
            children: (0, n.jsx)(D.x, {
                className: H.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: W.A,
                animationState: a,
                assetAltText: "",
            }),
        });
    return l ? (0, n.jsx)("div", { className: H.Zs, children: s }) : s;
}
function k(e) {
    let { className: t } = e;
    return (0, n.jsx)(B.c, { className: i()(H.Fu, t) });
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
        [d, m] = l.useState(!1),
        [_, C] = l.useState(!1);
    async function E() {
        null != c && (C(!0), await c(t).finally(() => C(!1)));
    }
    let A = null != h && r === g.x.NONE,
        f = i()(H.of, { [H.D8]: d, [H.or]: A }),
        x = (0, n.jsxs)(n.Fragment, {
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
                                    children: G.intl.format(r === g.x.COMPLETED ? w.default.h2qWpS : w.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(F.C, {
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
                        r = (0, n.jsx)(O.$, {
                            variant: "expressive",
                            size: "sm",
                            text: G.intl.string(w.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? r
                        : e === g.x.COMPLETED
                          ? a
                              ? r
                              : (0, n.jsx)(U.y, {
                                    color: b.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": G.intl.string(w.default.k6h2J3),
                                })
                          : i
                            ? (0, n.jsx)(M._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: d, isClaiming: _, handleClaim: E, hasDiscoveryClick: A }),
            ],
        }),
        p = l.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(o.D, { className: f, ...p, onClick: h, "aria-label": a, children: x }),
                  !u && (0, n.jsx)(k, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: f, ...p, children: x }), !u && (0, n.jsx)(k, {})],
          });
}
var Y = a(652215),
    V = a(653877),
    K = a(268920),
    X = a(633217);
function q() {
    return (0, n.jsx)("div", {
        className: V.s,
        children: (0, n.jsx)(y.A, { src: X.A, fallbackImage: K.A, className: V.Cb }),
    });
}
function Q(e) {
    let { nitroIconColor: t = b.A.colors.ICON_SUBTLE, text: a } = e;
    return (0, n.jsxs)("div", {
        className: V.SY,
        children: [
            (0, n.jsx)(R.t, { size: "xs", color: t }),
            (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: a }),
        ],
    });
}
function $(e) {
    let { orbBalance: t, headerTagsContent: a } = e;
    return (0, n.jsxs)("div", {
        className: V.SZ,
        children: [
            (0, n.jsx)(q, {}),
            (0, n.jsxs)("div", {
                className: V.ZX,
                children: [
                    (0, n.jsx)(I.t, {
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
        l = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(R.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: V.lh, children: l })
        : (0, n.jsx)(o.D, { className: i()(V.lh, V.w9), onClick: a, children: l });
}
function J(e) {
    let { numRows: t = 3 } = e,
        a = l.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: V.gW,
        "aria-hidden": !0,
        children: a.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: V.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(V.DO, V.VR) }),
                        (0, n.jsxs)("div", {
                            className: V.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(V.DO, V.Iz) }),
                                (0, n.jsx)("div", { className: i()(V.DO, V.D_) }),
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
        d = l.useMemo(
            () =>
                s && null == h
                    ? (0, n.jsx)(J, { numRows: 3 })
                    : u
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: V.$b,
                                    children: [
                                        (0, n.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, n.jsx)(Z, { text: c, onClick: o }),
                                    ],
                                }),
                                a.map((e, t) =>
                                    (0, n.jsx)(
                                        l.Fragment,
                                        {
                                            children: (0, n.jsx)(z, {
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
                              className: i()(V.GN, V.AZ),
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
            [s, u, t, c, o, a, h, r],
        ),
        m = l.useMemo(
            () =>
                null == h
                    ? null
                    : (0, n.jsx)("div", {
                          className: i()(V.re, { [V.Oi]: u }),
                          children: (0, n.jsx)(S.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: V.E6, "aria-busy": s, children: [m, d] });
}
function et(e) {
    let { onQuestsClick: t, onShopClick: a } = e;
    return (0, n.jsxs)("div", {
        className: V.W,
        children: [
            (0, n.jsx)(O.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: T.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, n.jsx)(O.$, {
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
        [h, u] = l.useState(!1);
    return (0, n.jsxs)("div", {
        className: i()(V.ql, V.Ut),
        ref: o,
        children: [
            (0, n.jsx)($, { orbBalance: t, headerTagsContent: a }),
            h ? null : s({ onClose: () => u(!0) }),
            r,
            c,
        ],
    });
}
var en = a(408278),
    el = a(789645),
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
                      children: (0, n.jsx)(en.K, {
                          icon: el.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eC.iH,
                children: [
                    null != a && (0, n.jsx)("img", { alt: l, src: a, className: eC.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eC.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(O.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eg(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        r = l.useCallback(() => {
            ((0, A.Y)({ pageType: s, sectionType: u.A.ORB_WALLET_PRIMARY_CARD, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                em({ analyticsLocations: i }));
        }, [i, s]);
    return (0, n.jsx)(eE, {
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
        o = l.useCallback(() => {
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
        h = l.useMemo(() => G.intl.format(w.default["Ba/7wO"], { multiplier: r }), [r]);
    return null == r
        ? null
        : (0, n.jsx)(eE, {
              title: G.intl.string(w.default.ZqCAos),
              imageUrl: a(780361),
              imageAlt: G.intl.string(w.default.FkfrRH),
              subTextDescription: h,
              buttonText: G.intl.string(w.default.U9UQJE),
              buttonIcon: eA,
              buttonVariant: "expressive",
              onCtaClick: o,
              onClose: t,
              className: eC.ml,
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
function eO(e) {
    let { userHasPremium: t, onClose: a, orbBalance: l, analyticsPage: s } = e,
        i = ev(t, l);
    return "shop_orbs" === i
        ? (0, n.jsx)(eg, { onClose: a, analyticsPage: s })
        : "nitro_upsell" === i
          ? (0, n.jsx)(ef, { onClose: a, analyticsPage: s })
          : null;
}
function eb(e) {
    let { text: t, onClick: a } = e;
    return null == a
        ? (0, n.jsx)("span", { className: ex.dW, children: t })
        : (0, n.jsx)(o.D, { className: i()(ex.dW, ex.or), onClick: a, children: t });
}
function eR(e) {
    let { userHasPremium: t, orbBalance: a, hasErrorMessage: l, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ea, {
        orbBalance: a,
        headerTagsContent: t
            ? (0, n.jsx)(Q, { text: G.intl.format(w.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eO({ userHasPremium: t, onClose: n, orbBalance: a });
        },
        orbChallengesCard: (0, n.jsx)(ee, {
            isLoading: s,
            inlineNoticeProps: l
                ? {
                      type: "warning",
                      message: G.intl.format(w.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eb, { text: e }) }),
                  }
                : null,
            title: G.intl.string(w.default.H6Ny8N),
            badgeText: G.intl.format(t ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : ep,
            onClaim: eL,
        }),
        orbWalletFooter: (0, n.jsx)(et, {
            onQuestsClick: () => e_(),
            onShopClick: () => em({ analyticsLocations: [] }),
        }),
    });
}
function eN(e) {
    return (0, n.jsx)(eR, { ...e, hasNoChallenges: !0 });
}
function eS() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Q, { text: G.intl.format(w.default["04j3XV"], { orbAmount: t.reward_amount, days: a }) });
}
function eT() {
    return null != (0, c.bG)([C.A], () => C.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eS, {}) : null;
}
function ej(e) {
    let { analyticsPage: t = u.A.ORB_WALLET } = e,
        { challengesForOrbWallet: a, hasFetchedChallenges: s, refetch: i } = (0, p.z)({ shouldFetch: !0 }),
        r = (0, m.L)(ed.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: o, orbChallengesDisplayError: h } = (0, c.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        d = l.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === v.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(w.default.FYb5rH)
                                  : G.intl.format(w.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eb, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        _ = l.useMemo(() => {
            if (!r)
                return () => (
                    (0, A.Y)({ pageType: t, sectionType: u.A.ORB_WALLET, ctaObject: u.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ec.x)() : (0, eh.gC)(t, eo.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: o })
                );
        }, [o, r, t]);
    return (0, n.jsx)(ee, {
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
    l.useEffect(() => {
        i && (0, L.eX)();
    }, [i]);
    let h = l.useCallback(() => {
            ((0, A.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                em({ analyticsLocations: o }));
        }, [o, a]),
        _ = l.useCallback(() => {
            ((0, A.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_QUEST_HOME_CTA }),
                e_());
        }, [a]),
        C = l.useMemo(() => ev(r, s), [r, s]),
        { challengesForOrbWallet: p, hasFetchedChallenges: O } = (0, c.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        b = l.useRef(!1);
    return (l.useEffect(() => {
        if (!O || b.current) return;
        let e = p.map((e) => e.achievementIdentifier),
            t = p.filter((e) => e.achievementStatus === g.x.COMPLETED).map((e) => e.achievementIdentifier);
        (E.default.track(Y.HAw.ORB_WALLET_VIEWED, {
            location_stack: o,
            location_page: a,
            location_section: u.A.ORB_WALLET,
            location_object: u.A.ORB_WALLET,
            wallet_primary_card_type: C,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (b.current = !0));
    }, [O, p, C, o, a]),
    i)
        ? (0, n.jsx)(ea, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, n.jsx)(eT, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eO({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: a });
              },
              orbChallengesCard: (0, n.jsx)(ej, { analyticsPage: a }),
              orbWalletFooter: (0, n.jsx)(et, { onQuestsClick: _, onShopClick: h }),
          })
        : null;
}
function eI(e) {
    let { cardRef: t, targetElementRef: a, shouldShow: s, analyticsPage: i } = e,
        r = l.useCallback(() => (0, n.jsx)(ey, { cardRef: t, analyticsPage: i }), [t, i]);
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
