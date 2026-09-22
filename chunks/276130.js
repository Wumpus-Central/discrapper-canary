l.d(t, { Yc: () => eU, vG: () => eD, FT: () => eI, EA: () => eP });
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
    C = l(369189),
    E = l(366505),
    A = l(166403),
    g = l(174459),
    f = l(124861),
    L = l(318346),
    p = l(362862),
    x = l(761705),
    T = l(923138),
    O = l(12510),
    v = l(673125),
    R = l(821609),
    S = l(661531),
    b = l(403581),
    N = l(834730),
    y = l(683071),
    j = l(577473),
    I = l(34188),
    U = l(475743),
    M = l(303136),
    B = l(626031),
    F = l(628284),
    D = l(320448),
    P = l(404778),
    W = l(318254),
    H = l(742967),
    w = l(570165),
    G = l(375708),
    k = l(137484),
    z = l(427483);
function Y(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(k.TK, { [k.AM]: n }),
            children: (0, a.jsx)(H.x, {
                className: k.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: z.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return n ? (0, a.jsx)("div", { className: k.Zs, children: s }) : s;
}
function V(e) {
    let { className: t } = e;
    return (0, a.jsx)(P.c, { className: i()(k.Fu, t) });
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
        [m, _] = n.useState(!1),
        [C, E] = n.useState(!1);
    async function A() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != o && r === f.x.NONE,
        L = i()(k.of, { [k.o4]: d, [k.D8]: m, [k.or]: g }),
        p = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: k.Ub,
                    children: [
                        (0, a.jsx)(Y, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: k.Du,
                            children: [
                                (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: G.intl.format(r === f.x.COMPLETED ? w.default.h2qWpS : w.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(W.C, {
                                                className: k.fN,
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
                        r = (0, a.jsx)(R.$, {
                            variant: "expressive",
                            size: "sm",
                            text: G.intl.string(w.default.WmfVjs),
                            loading: n,
                            onClick: s,
                        });
                    return n
                        ? r
                        : e === f.x.COMPLETED
                          ? l
                              ? r
                              : (0, a.jsx)(F.y, {
                                    color: S.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": G.intl.string(w.default.k6h2J3),
                                })
                          : i
                            ? (0, a.jsx)(D._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: m, isClaiming: C, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        x = n.useMemo(() => ({ onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(h.D, { className: L, ...x, onClick: o, "aria-label": l, children: p }),
                  !u && (0, a.jsx)(V, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: L, ...x, children: p }), !u && (0, a.jsx)(V, {})],
          });
}
var X = l(652215),
    q = l(653877),
    Q = l(268920),
    $ = l(633217);
function J() {
    return (0, a.jsx)("div", {
        className: q.s,
        children: (0, a.jsx)(M.A, { src: $.A, fallbackImage: Q.A, className: q.Cb }),
    });
}
function Z(e) {
    let { nitroIconColor: t = S.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: q.SY,
        children: [
            (0, a.jsx)(b.t, { size: "xs", color: t }),
            (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function ee(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, U.Ay)(t),
        i = n.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, a.jsxs)("div", {
        className: q.SZ,
        children: [
            (0, a.jsx)(J, {}),
            (0, a.jsxs)("div", {
                className: q.ZX,
                children: [
                    (0, a.jsx)(B.t, {
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
        n = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(b.t, { size: "xxs", color: "white" }),
                (0, a.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == l
        ? (0, a.jsx)("div", { className: q.lh, children: n })
        : (0, a.jsx)(h.D, { className: i()(q.lh, q.w9), onClick: l, children: n });
}
function el(e) {
    let { numRows: t = 3 } = e,
        l = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: q.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: q.US,
                    children: [
                        (0, a.jsx)("div", { className: i()(q.DO, q.VR) }),
                        (0, a.jsxs)("div", {
                            className: q.hG,
                            children: [
                                (0, a.jsx)("div", { className: i()(q.DO, q.Iz) }),
                                (0, a.jsx)("div", { className: i()(q.DO, q.D_) }),
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
    let { title: t, challenges: l, isLoading: s, onClaim: r, badgeText: c, onClickBadge: o, inlineNoticeProps: h } = e,
        u = l.length > 0,
        d = n.useMemo(
            () =>
                s && null == h
                    ? (0, a.jsx)(el, { numRows: 3 })
                    : u
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: q.$b,
                                    children: [
                                        (0, a.jsx)(N.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, a.jsx)(et, { text: c, onClick: o }),
                                    ],
                                }),
                                l.map((e, t) =>
                                    (0, a.jsx)(
                                        n.Fragment,
                                        {
                                            children: (0, a.jsx)(K, {
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
                              className: i()(q.GN, q.AZ),
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
                          className: i()(q.re, { [q.Oi]: u }),
                          children: (0, a.jsx)(y.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, a.jsxs)("div", { className: q.E6, "aria-busy": s, children: [m, d] });
}
function en(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, a.jsxs)("div", {
        className: q.W,
        children: [
            null != t &&
                (0, a.jsx)(R.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: j.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, a.jsx)(R.$, {
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
        [h, u] = n.useState(!1);
    return (0, a.jsxs)("div", {
        className: i()(q.ql, q.Ut),
        ref: o,
        children: [
            (0, a.jsx)(ee, { orbBalance: t, headerTagsContent: l }),
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
function ef() {
    (0, eC.mA)({ fromContent: eh.u.ORBS_BALANCE_MENU });
}
var eL = l(49999),
    ep = l(600676);
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
        className: i()(ep.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: ep.Fx,
                      children: (0, a.jsx)(er.K, {
                          icon: ec.P,
                          "aria-label": G.intl.string(G.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: ep.iH,
                children: [
                    null != l && (0, a.jsx)("img", { alt: n, src: l, className: ep.db }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: ep.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eT(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, o] = (0, eo.kn)([ei.M.ORB_WALLET_SHOP_CTA_CARD], eL.m.ORB_WALLET, !0),
        h = n.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: r }),
                i || o(eL.i.TAKE_ACTION));
        }, [r, s, o, i]);
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
                  (i || o(eL.i.DISMISS), t());
              },
          })
        : null;
}
let eO = { asset: b.t, type: "icon" };
function ev(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, h] = (0, eo.kn)([ei.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], eL.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: u } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        _ = n.useCallback(() => {
            ((0, L.Y)({
                pageType: s,
                sectionType: d.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, ed.A)({ subscriptionTier: eA.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: r }),
                i || h(eL.i.TAKE_ACTION));
        }, [r, s, h, i]),
        C = n.useMemo(() => G.intl.format(w.default["Ba/7wO"], { multiplier: u }), [u]);
    return null != u && (null != c || i)
        ? (0, a.jsx)(ex, {
              title: G.intl.string(w.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: G.intl.string(w.default.FkfrRH),
              subTextDescription: C,
              buttonText: G.intl.string(w.default.U9UQJE),
              buttonIcon: eO,
              buttonVariant: "expressive",
              onCtaClick: _,
              onClose: () => {
                  (i || h(eL.i.DISMISS), t());
              },
              className: ep.ml,
          })
        : null;
}
var eR = l(123576);
let eS = [
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
async function eb(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eN(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function ey(e) {
    let { userHasPremium: t, onClose: l, orbBalance: n, analyticsPage: s, forceVisible: i = !1 } = e,
        r = eN(t, n);
    return "shop_orbs" === r
        ? (0, a.jsx)(eT, { onClose: l, analyticsPage: s, forceVisible: i })
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
function eI(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: n, isLoading: s, hasNoChallenges: i } = e;
    return (0, a.jsx)(es, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(Z, { text: G.intl.format(w.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return ey({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, a.jsx)(ea, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: G.intl.format(w.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(ej, { text: e }) }),
                  }
                : null,
            title: G.intl.string(w.default.H6Ny8N),
            badgeText: G.intl.format(t ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eS,
            onClaim: eb,
        }),
        orbWalletFooter: (0, a.jsx)(en, {
            onQuestsClick: () => ef(),
            onShopClick: () => eg({ analyticsLocations: [] }),
        }),
    });
}
function eU(e) {
    return (0, a.jsx)(eI, { ...e, hasNoChallenges: !0 });
}
function eM() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(Z, { text: G.intl.format(w.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eB() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eM, {}) : null;
}
function eF(e) {
    let { analyticsPage: t = d.A.ORB_WALLET } = e,
        { challengesForOrbWallet: l, hasFetchedChallenges: s, refetch: i } = (0, T.z)({ shouldFetch: !0 }),
        r = (0, _.L)(eA.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: c, orbChallengesDisplayError: h } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        u = n.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === v.EB.CLAIM_CHALLENGE
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
                    (0, L.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, em.x)() : (0, eC.gC)(t, e_.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: c })
                );
        }, [c, r, t]);
    return (0, a.jsx)(ea, {
        title: G.intl.string(w.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: u,
        challenges: l,
        onClaim: O.Xz,
        onClickBadge: m,
        badgeText: G.intl.format(r ? w.default.OHLdjq : w.default.WOMrJf, { multiplier: c }),
    });
}
function eD(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET } = e,
        { balance: s } = (0, x.W)(),
        i = (0, p.H)({ location: "StatefulOrbWallet" }),
        r = (0, _.L)(eA.PremiumTypes.TIER_2),
        { analyticsLocations: h } = (0, m.Ay)(d.A.ORB_WALLET);
    n.useEffect(() => {
        i && (0, O.eX)();
    }, [i]);
    let u = n.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: h }));
        }, [h, l]),
        E = n.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                ef());
        }, [l]),
        A = n.useMemo(() => eN(r, s), [r, s]),
        { challengesForOrbWallet: T, hasFetchedChallenges: R } = (0, o.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        S = n.useRef(!1);
    n.useEffect(() => {
        if (!R || S.current) return;
        let e = T.map((e) => e.achievementIdentifier),
            t = T.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(X.HAw.ORB_WALLET_VIEWED, {
            location_stack: h,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: A,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (S.current = !0));
    }, [R, T, A, h, l]);
    let { pathname: b } = (0, c.zy)(),
        N = b.startsWith(X.BVt.COLLECTIBLES_SHOP),
        y = (0, C.p)();
    return i
        ? (0, a.jsx)(es, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, a.jsx)(eB, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ey({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: l });
              },
              orbChallengesCard: (0, a.jsx)(eF, { analyticsPage: l }),
              orbWalletFooter: (0, a.jsx)(en, { onQuestsClick: y ? null : E, onShopClick: N ? null : u }),
          })
        : null;
}
function eP(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: s, analyticsPage: i } = e,
        r = n.useCallback(() => (0, a.jsx)(eD, { cardRef: t, analyticsPage: i }), [t, i]);
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
