a.d(t, { Yc: () => ej, vG: () => eM, FT: () => eN, EA: () => eB });
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
    E = a(166403),
    C = a(174459),
    A = a(124861),
    g = a(318346),
    L = a(362862),
    f = a(761705),
    x = a(923138),
    p = a(12510),
    O = a(673125),
    v = a(821609),
    R = a(661531),
    b = a(403581),
    S = a(834730),
    T = a(683071),
    N = a(577473),
    j = a(34188),
    y = a(303136),
    I = a(626031),
    U = a(628284),
    M = a(320448),
    B = a(404778),
    F = a(318254),
    D = a(742967),
    W = a(570165),
    H = a(375708),
    w = a(137484),
    G = a(427483);
function P(e) {
    let { achievementStatus: t, animationState: a = "off" } = e,
        l = t === A.x.COMPLETED || t === A.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(w.TK, { [w.AM]: l }),
            children: (0, n.jsx)(D.x, {
                className: w.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: G.A,
                animationState: a,
                assetAltText: "",
            }),
        });
    return l ? (0, n.jsx)("div", { className: w.Zs, children: s }) : s;
}
function k(e) {
    let { className: t } = e;
    return (0, n.jsx)(B.c, { className: i()(w.Fu, t) });
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
        [_, E] = l.useState(!1);
    async function C() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != h && r === A.x.NONE,
        L = i()(w.of, { [w.D8]: d, [w.or]: g }),
        f = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: w.Ub,
                    children: [
                        (0, n.jsx)(P, { achievementStatus: r, animationState: d ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: w.Du,
                            children: [
                                (0, n.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", children: a }),
                                (0, n.jsx)(S.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: H.intl.format(r === A.x.COMPLETED ? W.default.h2qWpS : W.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(F.C, {
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
                    let { isHovered: a, isClaiming: l, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(v.$, {
                            variant: "expressive",
                            size: "sm",
                            text: H.intl.string(W.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? r
                        : e === A.x.COMPLETED
                          ? a
                              ? r
                              : (0, n.jsx)(U.y, {
                                    color: R.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": H.intl.string(W.default.k6h2J3),
                                })
                          : i
                            ? (0, n.jsx)(M._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: d, isClaiming: _, handleClaim: C, hasDiscoveryClick: g }),
            ],
        }),
        x = l.useMemo(() => ({ onMouseEnter: () => m(!0), onMouseLeave: () => m(!1) }), []);
    return g
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(o.D, { className: L, ...x, onClick: h, "aria-label": a, children: f }),
                  !u && (0, n.jsx)(k, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: L, ...x, children: f }), !u && (0, n.jsx)(k, {})],
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
    let { nitroIconColor: t = R.A.colors.ICON_SUBTLE, text: a } = e;
    return (0, n.jsxs)("div", {
        className: V.SY,
        children: [
            (0, n.jsx)(b.t, { size: "xs", color: t }),
            (0, n.jsx)(S.E, { variant: "text-xs/medium", color: "text-subtle", children: a }),
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
                (0, n.jsx)(b.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(S.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
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
                                        (0, n.jsx)(S.E, {
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
                                  (0, n.jsx)(S.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: H.intl.string(W.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(S.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: H.intl.string(W.default.XW2CuY),
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
                          children: (0, n.jsx)(T.w, { ...h, children: h.message }),
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
            (0, n.jsx)(v.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: N.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, n.jsx)(v.$, {
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
var en = a(554146),
    el = a(408278),
    es = a(789645),
    ei = a(131607),
    er = a(696292),
    ec = a(839534),
    eo = a(75678),
    eh = a(87719),
    eu = a(576761),
    ed = a(617986),
    em = a(758836),
    e_ = a(202541);
function eE(e) {
    let { analyticsLocations: t = [] } = e;
    (0, ec.Cz)({ tab: em.G2.ORBS, analyticsLocations: t, analyticsSource: u.A.ORBS_BALANCE_MENU });
}
function eC() {
    (0, ed.mA)({ fromContent: er.u.ORBS_BALANCE_MENU });
}
var eA = a(49999),
    eg = a(600676);
function eL(e) {
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
        className: i()(eg.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: eg.Fx,
                      children: (0, n.jsx)(el.K, {
                          icon: es.P,
                          "aria-label": H.intl.string(H.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eg.iH,
                children: [
                    null != a && (0, n.jsx)("img", { alt: l, src: a, className: eg.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(S.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eg.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(S.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(v.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function ef(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        [r, c] = (0, ei.kn)([en.M.ORB_WALLET_SHOP_CTA_CARD], eA.m.ORB_WALLET, !0),
        o = l.useCallback(() => {
            ((0, g.Y)({ pageType: s, sectionType: u.A.ORB_WALLET_PRIMARY_CARD, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                eE({ analyticsLocations: i }),
                c(eA.i.TAKE_ACTION));
        }, [i, s, c]);
    return null == r
        ? null
        : (0, n.jsx)(eL, {
              title: H.intl.string(W.default.o6s7yg),
              imageUrl: a(105644),
              imageAlt: H.intl.string(W.default.qa1xyr),
              subTextDescription: H.intl.string(W.default.HACucK),
              buttonText: H.intl.string(W.default.o6s7yg),
              buttonIcon: { asset: j.U, type: "icon" },
              onCtaClick: o,
              onClose: () => {
                  (c(eA.i.DISMISS), t());
              },
          });
}
let ex = { asset: b.t, type: "icon" };
function ep(e) {
    let { onClose: t, analyticsPage: s = u.A.ORB_WALLET } = e,
        { analyticsLocations: i } = (0, d.Ay)(u.A.ORB_WALLET_PRIMARY_CARD),
        [r, o] = (0, ei.kn)([en.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], eA.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: h } = (0, c.cf)([O.Ay], () => ({
            nitroGatedOrbMultiplier: O.Ay.nitroGatedOrbMultiplier,
        })),
        m = l.useCallback(() => {
            ((0, g.Y)({
                pageType: s,
                sectionType: u.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: u.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, eo.A)({ subscriptionTier: e_.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: i }),
                o(eA.i.TAKE_ACTION));
        }, [i, s, o]),
        _ = l.useMemo(() => H.intl.format(W.default["Ba/7wO"], { multiplier: h }), [h]);
    return null == h || null == r
        ? null
        : (0, n.jsx)(eL, {
              title: H.intl.string(W.default.ZqCAos),
              imageUrl: a(780361),
              imageAlt: H.intl.string(W.default.FkfrRH),
              subTextDescription: _,
              buttonText: H.intl.string(W.default.U9UQJE),
              buttonIcon: ex,
              buttonVariant: "expressive",
              onCtaClick: m,
              onClose: () => {
                  (o(eA.i.DISMISS), t());
              },
              className: eg.ml,
          });
}
var eO = a(123576);
let ev = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: A.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: A.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: A.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eR(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eb(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eS(e) {
    let { userHasPremium: t, onClose: a, orbBalance: l, analyticsPage: s } = e,
        i = eb(t, l);
    return "shop_orbs" === i
        ? (0, n.jsx)(ef, { onClose: a, analyticsPage: s })
        : "nitro_upsell" === i
          ? (0, n.jsx)(ep, { onClose: a, analyticsPage: s })
          : null;
}
function eT(e) {
    let { text: t, onClick: a } = e;
    return null == a
        ? (0, n.jsx)("span", { className: eO.dW, children: t })
        : (0, n.jsx)(o.D, { className: i()(eO.dW, eO.or), onClick: a, children: t });
}
function eN(e) {
    let { userHasPremium: t, orbBalance: a, hasErrorMessage: l, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ea, {
        orbBalance: a,
        headerTagsContent: t
            ? (0, n.jsx)(Q, { text: H.intl.format(W.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eS({ userHasPremium: t, onClose: n, orbBalance: a });
        },
        orbChallengesCard: (0, n.jsx)(ee, {
            isLoading: s,
            inlineNoticeProps: l
                ? {
                      type: "warning",
                      message: H.intl.format(W.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eT, { text: e }) }),
                  }
                : null,
            title: H.intl.string(W.default.H6Ny8N),
            badgeText: H.intl.format(t ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : ev,
            onClaim: eR,
        }),
        orbWalletFooter: (0, n.jsx)(et, {
            onQuestsClick: () => eC(),
            onShopClick: () => eE({ analyticsLocations: [] }),
        }),
    });
}
function ej(e) {
    return (0, n.jsx)(eN, { ...e, hasNoChallenges: !0 });
}
function ey() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let a = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Q, { text: H.intl.format(W.default["04j3XV"], { orbAmount: t.reward_amount, days: a }) });
}
function eI() {
    return null != (0, c.bG)([E.A], () => E.A.getPremiumTypeSubscription()) ? (0, n.jsx)(ey, {}) : null;
}
function eU(e) {
    let { analyticsPage: t = u.A.ORB_WALLET } = e,
        { challengesForOrbWallet: a, hasFetchedChallenges: s, refetch: i } = (0, x.z)({ shouldFetch: !0 }),
        r = (0, m.L)(e_.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: o, orbChallengesDisplayError: h } = (0, c.cf)([O.Ay], () => ({
            nitroGatedOrbMultiplier: O.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: O.Ay.orbChallengesDisplayError,
        })),
        d = l.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === O.EB.CLAIM_CHALLENGE
                                  ? H.intl.string(W.default.FYb5rH)
                                  : H.intl.format(W.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eT, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        _ = l.useMemo(() => {
            if (!r)
                return () => (
                    (0, g.Y)({ pageType: t, sectionType: u.A.ORB_WALLET, ctaObject: u.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, eh.x)() : (0, ed.gC)(t, eu.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: o })
                );
        }, [o, r, t]);
    return (0, n.jsx)(ee, {
        title: H.intl.string(W.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: d,
        challenges: a,
        onClaim: p.Xz,
        onClickBadge: _,
        badgeText: H.intl.format(r ? W.default.OHLdjq : W.default.WOMrJf, { multiplier: o }),
    });
}
function eM(e) {
    let { cardRef: t, analyticsPage: a = u.A.ORB_WALLET } = e,
        { balance: s } = (0, f.W)(),
        i = (0, L.H)({ location: "StatefulOrbWallet" }),
        r = (0, m.L)(e_.PremiumTypes.TIER_2),
        { analyticsLocations: o } = (0, d.Ay)(u.A.ORB_WALLET);
    l.useEffect(() => {
        i && (0, p.eX)();
    }, [i]);
    let h = l.useCallback(() => {
            ((0, g.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_SHOP_CTA }),
                eE({ analyticsLocations: o }));
        }, [o, a]),
        _ = l.useCallback(() => {
            ((0, g.Y)({ pageType: a, sectionType: u.A.ORB_WALLET_FOOTER, ctaObject: u.A.ORB_WALLET_QUEST_HOME_CTA }),
                eC());
        }, [a]),
        E = l.useMemo(() => eb(r, s), [r, s]),
        { challengesForOrbWallet: x, hasFetchedChallenges: v } = (0, c.cf)([O.Ay], () => ({
            challengesForOrbWallet: O.Ay.challengesForOrbWallet,
            hasFetchedChallenges: O.Ay.hasFetchedChallenges,
        })),
        R = l.useRef(!1);
    return (l.useEffect(() => {
        if (!v || R.current) return;
        let e = x.map((e) => e.achievementIdentifier),
            t = x.filter((e) => e.achievementStatus === A.x.COMPLETED).map((e) => e.achievementIdentifier);
        (C.default.track(Y.HAw.ORB_WALLET_VIEWED, {
            location_stack: o,
            location_page: a,
            location_section: u.A.ORB_WALLET,
            location_object: u.A.ORB_WALLET,
            wallet_primary_card_type: E,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (R.current = !0));
    }, [v, x, E, o, a]),
    i)
        ? (0, n.jsx)(ea, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, n.jsx)(eI, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eS({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: a });
              },
              orbChallengesCard: (0, n.jsx)(eU, { analyticsPage: a }),
              orbWalletFooter: (0, n.jsx)(et, { onQuestsClick: _, onShopClick: h }),
          })
        : null;
}
function eB(e) {
    let { cardRef: t, targetElementRef: a, shouldShow: s, analyticsPage: i } = e,
        r = l.useCallback(() => (0, n.jsx)(eM, { cardRef: t, analyticsPage: i }), [t, i]);
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
