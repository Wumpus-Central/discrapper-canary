l.d(t, { Yc: () => eI, vG: () => eF, FT: () => ey, EA: () => eD });
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
    _ = l(757036),
    E = l(369189),
    C = l(366505),
    A = l(166403),
    g = l(174459),
    L = l(124861),
    f = l(318346),
    x = l(362862),
    p = l(761705),
    O = l(923138),
    v = l(12510),
    R = l(673125),
    b = l(821609),
    S = l(661531),
    T = l(403581),
    N = l(834730),
    j = l(683071),
    y = l(577473),
    I = l(34188),
    U = l(303136),
    M = l(626031),
    B = l(628284),
    F = l(320448),
    D = l(404778),
    W = l(318254),
    H = l(742967),
    w = l(570165),
    G = l(375708),
    P = l(137484),
    k = l(427483);
function z(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === L.x.COMPLETED || t === L.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(P.TK, { [P.AM]: n }),
            children: (0, a.jsx)(H.x, {
                className: P.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: k.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return n ? (0, a.jsx)("div", { className: P.Zs, children: s }) : s;
}
function V(e) {
    let { className: t } = e;
    return (0, a.jsx)(D.c, { className: i()(P.Fu, t) });
}
function Y(e) {
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
        [m, _] = n.useState(!1),
        [E, C] = n.useState(!1);
    async function A() {
        null != c && (C(!0), await c(t).finally(() => C(!1)));
    }
    let g = null != o && r === L.x.NONE,
        f = i()(P.of, { [P.o4]: d, [P.D8]: m, [P.or]: g }),
        x = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: P.Ub,
                    children: [
                        (0, a.jsx)(z, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: P.Du,
                            children: [
                                (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === L.x.COMPLETED ? w.default.h2qWpS : w.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(W.C, {
                                                className: P.fN,
                                                size: "xs",
                                                color: S.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: l, isClaiming: n, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, a.jsx)(b.$, {
                            variant: "expressive",
                            size: "sm",
                            text: G.intl.string(w.default.WmfVjs),
                            loading: n,
                            onClick: s,
                        });
                    return n
                        ? r
                        : e === L.x.COMPLETED
                          ? l
                              ? r
                              : (0, a.jsx)(B.y, {
                                    color: S.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": G.intl.string(w.default.k6h2J3),
                                })
                          : i
                            ? (0, a.jsx)(F._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: m, isClaiming: E, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        p = n.useMemo(() => ({ onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(h.D, { className: f, ...p, onClick: o, "aria-label": l, children: x }),
                  !u && (0, a.jsx)(V, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: f, ...p, children: x }), !u && (0, a.jsx)(V, {})],
          });
}
var K = l(652215),
    X = l(653877),
    q = l(268920),
    Q = l(633217);
function $() {
    return (0, a.jsx)("div", {
        className: X.s,
        children: (0, a.jsx)(U.A, { src: Q.A, fallbackImage: q.A, className: X.Cb }),
    });
}
function J(e) {
    let { nitroIconColor: t = S.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: X.SY,
        children: [
            (0, a.jsx)(T.t, { size: "xs", color: t }),
            (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function Z(e) {
    let { orbBalance: t, headerTagsContent: l } = e;
    return (0, a.jsxs)("div", {
        className: X.SZ,
        children: [
            (0, a.jsx)($, {}),
            (0, a.jsxs)("div", {
                className: X.ZX,
                children: [
                    (0, a.jsx)(M.t, {
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
        n = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(T.t, { size: "xxs", color: "white" }),
                (0, a.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == l
        ? (0, a.jsx)("div", { className: X.lh, children: n })
        : (0, a.jsx)(h.D, { className: i()(X.lh, X.w9), onClick: l, children: n });
}
function et(e) {
    let { numRows: t = 3 } = e,
        l = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: X.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: X.US,
                    children: [
                        (0, a.jsx)("div", { className: i()(X.DO, X.VR) }),
                        (0, a.jsxs)("div", {
                            className: X.hG,
                            children: [
                                (0, a.jsx)("div", { className: i()(X.DO, X.Iz) }),
                                (0, a.jsx)("div", { className: i()(X.DO, X.D_) }),
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
        d = n.useMemo(
            () =>
                s && null == h
                    ? (0, a.jsx)(et, { numRows: 3 })
                    : u
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: X.$b,
                                    children: [
                                        (0, a.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, a.jsx)(ee, { text: c, onClick: o }),
                                    ],
                                }),
                                l.map((e, t) =>
                                    (0, a.jsx)(
                                        n.Fragment,
                                        {
                                            children: (0, a.jsx)(Y, {
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
                        : (0, a.jsxs)("div", {
                              className: i()(X.GN, X.AZ),
                              children: [
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: G.intl.string(w.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(w.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, u, t, c, o, l, h, r],
        ),
        m = n.useMemo(
            () =>
                null == h
                    ? null
                    : (0, a.jsx)("div", {
                          className: i()(X.re, { [X.Oi]: u }),
                          children: (0, a.jsx)(j.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, a.jsxs)("div", { className: X.E6, "aria-busy": s, children: [m, d] });
}
function ea(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, a.jsxs)("div", {
        className: X.W,
        children: [
            null != t &&
                (0, a.jsx)(b.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: y.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, a.jsx)(b.$, {
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
function en(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
        } = e,
        [h, u] = n.useState(!1);
    return (0, a.jsxs)("div", {
        className: i()(X.ql, X.Ut),
        ref: o,
        children: [
            (0, a.jsx)(Z, { orbBalance: t, headerTagsContent: l }),
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
    e_ = l(617986),
    eE = l(758836),
    eC = l(202541);
function eA(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eh.Cz)({ tab: eE.G2.ORBS, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eg() {
    (0, e_.mA)({ fromContent: eo.u.ORBS_BALANCE_MENU });
}
var eL = l(49999),
    ef = l(600676);
function ex(e) {
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
        className: i()(ef.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: ef.Fx,
                      children: (0, a.jsx)(ei.K, {
                          icon: er.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ef.iH,
                children: [
                    null != l && (0, a.jsx)("img", { alt: n, src: l, className: ef.db }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: ef.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(b.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function ep(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, o] = (0, ec.kn)([es.M.ORB_WALLET_SHOP_CTA_CARD], eL.m.ORB_WALLET, !0),
        h = n.useCallback(() => {
            ((0, f.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: r }),
                o(eL.i.TAKE_ACTION));
        }, [r, s, o]);
    return null != c || i
        ? (0, a.jsx)(ex, {
              title: G.intl.string(w.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: G.intl.string(w.default.qa1xyr),
              subTextDescription: G.intl.string(w.default.HACucK),
              buttonText: G.intl.string(w.default["7raRgL"]),
              buttonIcon: { asset: I.U, type: "icon" },
              onCtaClick: h,
              onClose: () => {
                  (o(eL.i.DISMISS), t());
              },
          })
        : null;
}
let eO = { asset: T.t, type: "icon" };
function ev(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, h] = (0, ec.kn)([es.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], eL.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: u } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
        })),
        _ = n.useCallback(() => {
            ((0, f.Y)({
                pageType: s,
                sectionType: d.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, eu.A)({ subscriptionTier: eC.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: r }),
                h(eL.i.TAKE_ACTION));
        }, [r, s, h]),
        E = n.useMemo(() => G.intl.format(w.default["Ba/7wO"], { multiplier: u }), [u]);
    return null != u && (null != c || i)
        ? (0, a.jsx)(ex, {
              title: G.intl.string(w.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: G.intl.string(w.default.FkfrRH),
              subTextDescription: E,
              buttonText: G.intl.string(w.default.U9UQJE),
              buttonIcon: eO,
              buttonVariant: "expressive",
              onCtaClick: _,
              onClose: () => {
                  (h(eL.i.DISMISS), t());
              },
              className: ef.ml,
          })
        : null;
}
var eR = l(123576);
let eb = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: L.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: L.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: L.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eS(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eT(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eN(e) {
    let { userHasPremium: t, onClose: l, orbBalance: n, analyticsPage: s, forceVisible: i = !1 } = e,
        r = eT(t, n);
    return "shop_orbs" === r
        ? (0, a.jsx)(ep, { onClose: l, analyticsPage: s, forceVisible: i })
        : "nitro_upsell" === r
          ? (0, a.jsx)(ev, { onClose: l, analyticsPage: s, forceVisible: i })
          : null;
}
function ej(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, a.jsx)("span", { className: eR.dW, children: t })
        : (0, a.jsx)(h.D, { className: i()(eR.dW, eR.or), onClick: l, children: t });
}
function ey(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: n, isLoading: s, hasNoChallenges: i } = e;
    return (0, a.jsx)(en, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(J, { text: G.intl.format(w.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eN({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, a.jsx)(el, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: G.intl.format(w.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(ej, { text: e }) }),
                  }
                : null,
            title: G.intl.string(w.default.H6Ny8N),
            badgeText: G.intl.format(t ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eb,
            onClaim: eS,
        }),
        orbWalletFooter: (0, a.jsx)(ea, {
            onQuestsClick: () => eg(),
            onShopClick: () => eA({ analyticsLocations: [] }),
        }),
    });
}
function eI(e) {
    return (0, a.jsx)(ey, { ...e, hasNoChallenges: !0 });
}
function eU() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, C.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(J, { text: G.intl.format(w.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eM() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eU, {}) : null;
}
function eB(e) {
    let { analyticsPage: t = d.A.ORB_WALLET } = e,
        { challengesForOrbWallet: l, hasFetchedChallenges: s, refetch: i } = (0, O.z)({ shouldFetch: !0 }),
        r = (0, _.L)(eC.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: c, orbChallengesDisplayError: h } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: R.Ay.orbChallengesDisplayError,
        })),
        u = n.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === R.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(w.default.FYb5rH)
                                  : G.intl.format(w.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(ej, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        m = n.useMemo(() => {
            if (!r)
                return () => (
                    (0, f.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ed.x)() : (0, e_.gC)(t, em.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: c })
                );
        }, [c, r, t]);
    return (0, a.jsx)(el, {
        title: G.intl.string(w.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: u,
        challenges: l,
        onClaim: v.Xz,
        onClickBadge: m,
        badgeText: G.intl.format(r ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: c }),
    });
}
function eF(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET } = e,
        { balance: s } = (0, p.W)(),
        i = (0, x.H)({ location: "StatefulOrbWallet" }),
        r = (0, _.L)(eC.PremiumTypes.TIER_2),
        { analyticsLocations: h } = (0, m.Ay)(d.A.ORB_WALLET);
    n.useEffect(() => {
        i && (0, v.eX)();
    }, [i]);
    let u = n.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: h }));
        }, [h, l]),
        C = n.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eg());
        }, [l]),
        A = n.useMemo(() => eT(r, s), [r, s]),
        { challengesForOrbWallet: O, hasFetchedChallenges: b } = (0, o.cf)([R.Ay], () => ({
            challengesForOrbWallet: R.Ay.challengesForOrbWallet,
            hasFetchedChallenges: R.Ay.hasFetchedChallenges,
        })),
        S = n.useRef(!1);
    n.useEffect(() => {
        if (!b || S.current) return;
        let e = O.map((e) => e.achievementIdentifier),
            t = O.filter((e) => e.achievementStatus === L.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(K.HAw.ORB_WALLET_VIEWED, {
            location_stack: h,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: A,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (S.current = !0));
    }, [b, O, A, h, l]);
    let { pathname: T } = (0, c.zy)(),
        N = T.startsWith(K.BVt.COLLECTIBLES_SHOP),
        j = (0, E.p)();
    return i
        ? (0, a.jsx)(en, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, a.jsx)(eM, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eN({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: l });
              },
              orbChallengesCard: (0, a.jsx)(eB, { analyticsPage: l }),
              orbWalletFooter: (0, a.jsx)(ea, { onQuestsClick: j ? null : C, onShopClick: N ? null : u }),
          })
        : null;
}
function eD(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: s, analyticsPage: i } = e,
        r = n.useCallback(() => (0, a.jsx)(eF, { cardRef: t, analyticsPage: i }), [t, i]);
    return (0, a.jsx)(u.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: u.Y.Animation.NONE,
        targetElementRef: l,
        children: () => null,
    });
}
