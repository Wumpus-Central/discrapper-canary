l.d(t, { Yc: () => eU, vG: () => eD, FT: () => eI, EA: () => eW });
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
    _ = l(757036),
    C = l(369189),
    E = l(366505),
    A = l(166403),
    g = l(174459),
    L = l(124861),
    f = l(318346),
    x = l(362862),
    p = l(761705),
    O = l(923138),
    v = l(12510),
    R = l(673125),
    S = l(821609),
    b = l(661531),
    T = l(403581),
    N = l(834730),
    j = l(683071),
    y = l(577473),
    I = l(34188),
    U = l(475743),
    M = l(303136),
    B = l(626031),
    F = l(628284),
    D = l(320448),
    W = l(404778),
    H = l(318254),
    w = l(742967),
    G = l(570165),
    P = l(375708),
    k = l(137484),
    z = l(427483);
function V(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === L.x.COMPLETED || t === L.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(k.TK, { [k.AM]: a }),
            children: (0, n.jsx)(w.x, {
                className: k.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: z.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, n.jsx)("div", { className: k.Zs, children: s }) : s;
}
function Y(e) {
    let { className: t } = e;
    return (0, n.jsx)(W.c, { className: i()(k.Fu, t) });
}
function K(e) {
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
        [m, _] = a.useState(!1),
        [C, E] = a.useState(!1);
    async function A() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != o && r === L.x.NONE,
        f = i()(k.of, { [k.o4]: d, [k.D8]: m, [k.or]: g }),
        x = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: k.Ub,
                    children: [
                        (0, n.jsx)(V, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: k.Du,
                            children: [
                                (0, n.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.format(r === L.x.COMPLETED ? G.default.h2qWpS : G.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(H.C, {
                                                className: k.fN,
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
                    let { isHovered: l, isClaiming: a, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(S.$, {
                            variant: "expressive",
                            size: "sm",
                            text: P.intl.string(G.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return a
                        ? r
                        : e === L.x.COMPLETED
                          ? l
                              ? r
                              : (0, n.jsx)(F.y, {
                                    color: b.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": P.intl.string(G.default.k6h2J3),
                                })
                          : i
                            ? (0, n.jsx)(D._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: m, isClaiming: C, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        p = a.useMemo(() => ({ onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) }), []);
    return g
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, { className: f, ...p, onClick: o, "aria-label": l, children: x }),
                  !u && (0, n.jsx)(Y, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: f, ...p, children: x }), !u && (0, n.jsx)(Y, {})],
          });
}
var X = l(652215),
    q = l(653877),
    Q = l(268920),
    $ = l(633217);
function J() {
    return (0, n.jsx)("div", {
        className: q.s,
        children: (0, n.jsx)(M.A, { src: $.A, fallbackImage: Q.A, className: q.Cb }),
    });
}
function Z(e) {
    let { nitroIconColor: t = b.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: q.SY,
        children: [
            (0, n.jsx)(T.t, { size: "xs", color: t }),
            (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function ee(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, U.Ay)(t),
        i = a.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, n.jsxs)("div", {
        className: q.SZ,
        children: [
            (0, n.jsx)(J, {}),
            (0, n.jsxs)("div", {
                className: q.ZX,
                children: [
                    (0, n.jsx)(B.t, {
                        counterInnerClassName: i ? q.F4 : void 0,
                        value: t,
                        onValueChange: X.tEg,
                        onValueReached: X.tEg,
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
function et(e) {
    let { text: t, onClick: l } = e,
        a = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(T.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == l
        ? (0, n.jsx)("div", { className: q.lh, children: a })
        : (0, n.jsx)(h.D, { className: i()(q.lh, q.w9), onClick: l, children: a });
}
function el(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: q.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: q.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(q.DO, q.VR) }),
                        (0, n.jsxs)("div", {
                            className: q.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(q.DO, q.Iz) }),
                                (0, n.jsx)("div", { className: i()(q.DO, q.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function en(e) {
    let { title: t, challenges: l, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        u = l.length > 0,
        d = a.useMemo(
            () =>
                s && null == h
                    ? (0, n.jsx)(el, { numRows: 3 })
                    : u
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: q.$b,
                                    children: [
                                        (0, n.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, n.jsx)(et, { text: c, onClick: o }),
                                    ],
                                }),
                                l.map((e, t) =>
                                    (0, n.jsx)(
                                        a.Fragment,
                                        {
                                            children: (0, n.jsx)(K, {
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
                              className: i()(q.GN, q.AZ),
                              children: [
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: P.intl.string(G.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: P.intl.string(G.default.XW2CuY),
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
                          className: i()(q.re, { [q.Oi]: u }),
                          children: (0, n.jsx)(j.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: q.E6, "aria-busy": s, children: [m, d] });
}
function ea(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, n.jsxs)("div", {
        className: q.W,
        children: [
            null != t &&
                (0, n.jsx)(S.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: y.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, n.jsx)(S.$, {
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
function es(e) {
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
        className: i()(q.ql, q.Ut),
        ref: o,
        children: [
            (0, n.jsx)(ee, { orbBalance: t, headerTagsContent: l }),
            h ? null : s({ onClose: () => u(!0) }),
            r,
            c,
        ],
    });
}
var ei = l(554146),
    er = l(408278),
    ec = l(789645),
    eo = l(131607),
    eh = l(696292),
    eu = l(839534),
    ed = l(75678),
    em = l(87719),
    e_ = l(576761),
    eC = l(617986),
    eE = l(758836),
    eA = l(202541);
function eg(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eu.Cz)({ tab: eE.G2.ORBS, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eL() {
    (0, eC.mA)({ fromContent: eh.u.ORBS_BALANCE_MENU });
}
var ef = l(49999),
    ex = l(600676);
function ep(e) {
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
                      children: (0, n.jsx)(er.K, {
                          icon: ec.P,
                          "aria-label": P.intl.string(P.t.cpT0Cq),
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
            (0, n.jsx)(S.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eO(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, o] = (0, eo.kn)([ei.M.ORB_WALLET_SHOP_CTA_CARD], ef.m.ORB_WALLET, !0),
        h = a.useCallback(() => {
            ((0, f.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: r }),
                i || o(ef.i.TAKE_ACTION));
        }, [r, s, o, i]);
    return null != c || i
        ? (0, n.jsx)(ep, {
              title: P.intl.string(G.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: P.intl.string(G.default.qa1xyr),
              subTextDescription: P.intl.string(G.default.HACucK),
              buttonText: P.intl.string(G.default["7raRgL"]),
              buttonIcon: { asset: I.U, type: "icon" },
              onCtaClick: h,
              onClose: () => {
                  (i || o(ef.i.DISMISS), t());
              },
          })
        : null;
}
let ev = { asset: T.t, type: "icon" };
function eR(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, h] = (0, eo.kn)([ei.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], ef.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: u } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
        })),
        _ = a.useCallback(() => {
            ((0, f.Y)({
                pageType: s,
                sectionType: d.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, ed.A)({ subscriptionTier: eA.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: r }),
                i || h(ef.i.TAKE_ACTION));
        }, [r, s, h, i]),
        C = a.useMemo(() => P.intl.format(G.default["Ba/7wO"], { multiplier: u }), [u]);
    return null != u && (null != c || i)
        ? (0, n.jsx)(ep, {
              title: P.intl.string(G.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: P.intl.string(G.default.FkfrRH),
              subTextDescription: C,
              buttonText: P.intl.string(G.default.U9UQJE),
              buttonIcon: ev,
              buttonVariant: "expressive",
              onCtaClick: _,
              onClose: () => {
                  (i || h(ef.i.DISMISS), t());
              },
              className: ex.ml,
          })
        : null;
}
var eS = l(123576);
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
async function eT(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eN(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function ej(e) {
    let { userHasPremium: t, onClose: l, orbBalance: a, analyticsPage: s, forceVisible: i = !1 } = e,
        r = eN(t, a);
    return "shop_orbs" === r
        ? (0, n.jsx)(eO, { onClose: l, analyticsPage: s, forceVisible: i })
        : "nitro_upsell" === r
          ? (0, n.jsx)(eR, { onClose: l, analyticsPage: s, forceVisible: i })
          : null;
}
function ey(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eS.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eS.dW, eS.or), onClick: l, children: t });
}
function eI(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(es, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(Z, { text: P.intl.format(G.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return ej({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(en, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: P.intl.format(G.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(ey, { text: e }) }),
                  }
                : null,
            title: P.intl.string(G.default.H6Ny8N),
            badgeText: P.intl.format(t ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eb,
            onClaim: eT,
        }),
        orbWalletFooter: (0, n.jsx)(ea, {
            onQuestsClick: () => eL(),
            onShopClick: () => eg({ analyticsLocations: [] }),
        }),
    });
}
function eU(e) {
    return (0, n.jsx)(eI, { ...e, hasNoChallenges: !0 });
}
function eM() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Z, { text: P.intl.format(G.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eB() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eM, {}) : null;
}
function eF(e) {
    let { analyticsPage: t = d.A.ORB_WALLET } = e,
        { challengesForOrbWallet: l, hasFetchedChallenges: s, refetch: i } = (0, O.z)({ shouldFetch: !0 }),
        r = (0, _.L)(eA.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: c, orbChallengesDisplayError: h } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: R.Ay.orbChallengesDisplayError,
        })),
        u = a.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === R.EB.CLAIM_CHALLENGE
                                  ? P.intl.string(G.default.FYb5rH)
                                  : P.intl.format(G.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(ey, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        m = a.useMemo(() => {
            if (!r)
                return () => (
                    (0, f.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, em.x)() : (0, eC.gC)(t, e_.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: c })
                );
        }, [c, r, t]);
    return (0, n.jsx)(en, {
        title: P.intl.string(G.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: u,
        challenges: l,
        onClaim: v.Xz,
        onClickBadge: m,
        badgeText: P.intl.format(r ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: c }),
    });
}
function eD(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET } = e,
        { balance: s } = (0, p.W)(),
        i = (0, x.H)({ location: "StatefulOrbWallet" }),
        r = (0, _.L)(eA.PremiumTypes.TIER_2),
        { analyticsLocations: h } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        i && (0, v.eX)();
    }, [i]);
    let u = a.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: h }));
        }, [h, l]),
        E = a.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eL());
        }, [l]),
        A = a.useMemo(() => eN(r, s), [r, s]),
        { challengesForOrbWallet: O, hasFetchedChallenges: S } = (0, o.cf)([R.Ay], () => ({
            challengesForOrbWallet: R.Ay.challengesForOrbWallet,
            hasFetchedChallenges: R.Ay.hasFetchedChallenges,
        })),
        b = a.useRef(!1);
    a.useEffect(() => {
        if (!S || b.current) return;
        let e = O.map((e) => e.achievementIdentifier),
            t = O.filter((e) => e.achievementStatus === L.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(X.HAw.ORB_WALLET_VIEWED, {
            location_stack: h,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: A,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (b.current = !0));
    }, [S, O, A, h, l]);
    let { pathname: T } = (0, c.zy)(),
        N = T.startsWith(X.BVt.COLLECTIBLES_SHOP),
        j = (0, C.p)();
    return i
        ? (0, n.jsx)(es, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, n.jsx)(eB, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ej({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: l });
              },
              orbChallengesCard: (0, n.jsx)(eF, { analyticsPage: l }),
              orbWalletFooter: (0, n.jsx)(ea, { onQuestsClick: j ? null : E, onShopClick: N ? null : u }),
          })
        : null;
}
function eW(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: s, analyticsPage: i } = e,
        r = a.useCallback(() => (0, n.jsx)(eD, { cardRef: t, analyticsPage: i }), [t, i]);
    return (0, n.jsx)(u.Y, {
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
