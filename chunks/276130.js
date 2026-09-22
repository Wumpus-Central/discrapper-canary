l.d(t, { Yc: () => eI, vG: () => eF, FT: () => ej, EA: () => eD });
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
    f = l(124861),
    L = l(318346),
    p = l(362862),
    x = l(761705),
    O = l(923138),
    T = l(12510),
    v = l(673125),
    R = l(821609),
    b = l(661531),
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
    P = l(318254),
    W = l(742967),
    H = l(570165),
    w = l(375708),
    G = l(137484),
    k = l(427483);
function z(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(G.TK, { [G.AM]: a }),
            children: (0, n.jsx)(W.x, {
                className: G.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: k.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, n.jsx)("div", { className: G.Zs, children: s }) : s;
}
function Y(e) {
    let { className: t } = e;
    return (0, n.jsx)(D.c, { className: i()(G.Fu, t) });
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
        [m, _] = a.useState(!1),
        [C, E] = a.useState(!1);
    async function A() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != o && r === f.x.NONE,
        L = i()(G.of, { [G.o4]: d, [G.D8]: m, [G.or]: g }),
        p = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: G.Ub,
                    children: [
                        (0, n.jsx)(z, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: G.Du,
                            children: [
                                (0, n.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: w.intl.format(r === f.x.COMPLETED ? H.default.h2qWpS : H.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(P.C, {
                                                className: G.fN,
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
                        r = (0, n.jsx)(R.$, {
                            variant: l || a ? "expressive" : "secondary",
                            size: "sm",
                            text: w.intl.string(H.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === f.x.COMPLETED || a ? r : i ? (0, n.jsx)(F._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: C, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) }), []);
    return g
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
    X = l(653877),
    q = l(268920),
    Q = l(633217);
function $() {
    return (0, n.jsx)("div", {
        className: X.s,
        children: (0, n.jsx)(M.A, { src: Q.A, fallbackImage: q.A, className: X.Cb }),
    });
}
function Z(e) {
    let { nitroIconColor: t = b.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: X.SY,
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
        className: X.SZ,
        children: [
            (0, n.jsx)($, {}),
            (0, n.jsxs)("div", {
                className: X.ZX,
                children: [
                    (0, n.jsx)(B.t, {
                        counterInnerClassName: i ? X.F4 : void 0,
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
        ? (0, n.jsx)("div", { className: X.lh, children: a })
        : (0, n.jsx)(h.D, { className: i()(X.lh, X.w9), onClick: l, children: a });
}
function et(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: X.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: X.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(X.DO, X.VR) }),
                        (0, n.jsxs)("div", {
                            className: X.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(X.DO, X.Iz) }),
                                (0, n.jsx)("div", { className: i()(X.DO, X.D_) }),
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
                                    className: X.$b,
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
                              className: i()(X.GN, X.AZ),
                              children: [
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: w.intl.string(H.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: w.intl.string(H.default.XW2CuY),
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
                          className: i()(X.re, { [X.Oi]: u }),
                          children: (0, n.jsx)(y.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: X.E6, "aria-busy": s, children: [m, d] });
}
function en(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, n.jsxs)("div", {
        className: X.W,
        children: [
            null != t &&
                (0, n.jsx)(R.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: j.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, n.jsx)(R.$, {
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
        className: i()(X.ql, X.Ut),
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
    e_ = l(617986),
    eC = l(758836),
    eE = l(202541);
function eA(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eh.Cz)({ tab: eC.G2.ORBS, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eg() {
    (0, e_.mA)({ fromContent: eo.u.ORBS_BALANCE_MENU });
}
var ef = l(49999),
    eL = l(600676);
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
        className: i()(eL.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: eL.Fx,
                      children: (0, n.jsx)(ei.K, {
                          icon: er.P,
                          "aria-label": w.intl.string(w.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eL.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: eL.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(N.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eL.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(N.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function ex(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, o] = (0, ec.kn)([es.M.ORB_WALLET_SHOP_CTA_CARD], ef.m.ORB_WALLET, !0),
        h = a.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: r }),
                i || o(ef.i.TAKE_ACTION));
        }, [r, s, o, i]);
    return null != c || i
        ? (0, n.jsx)(ep, {
              title: w.intl.string(H.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: w.intl.string(H.default.qa1xyr),
              subTextDescription: w.intl.string(H.default.HACucK),
              buttonText: w.intl.string(H.default["7raRgL"]),
              buttonIcon: { asset: I.U, type: "icon" },
              onCtaClick: h,
              onClose: () => {
                  (i || o(ef.i.DISMISS), t());
              },
          })
        : null;
}
let eO = { asset: S.t, type: "icon" };
function eT(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, h] = (0, ec.kn)([es.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], ef.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: u } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        _ = a.useCallback(() => {
            ((0, L.Y)({
                pageType: s,
                sectionType: d.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                (function (e) {
                    let { analyticsLocations: t = [] } = e;
                    (0, eu.A)({ subscriptionTier: eE.pe.TIER_2, analyticsLocations: t });
                })({ analyticsLocations: r }),
                i || h(ef.i.TAKE_ACTION));
        }, [r, s, h, i]),
        C = a.useMemo(() => w.intl.format(H.default["Ba/7wO"], { multiplier: u }), [u]);
    return null != u && (null != c || i)
        ? (0, n.jsx)(ep, {
              title: w.intl.string(H.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: w.intl.string(H.default.FkfrRH),
              subTextDescription: C,
              buttonText: w.intl.string(H.default.U9UQJE),
              buttonIcon: eO,
              buttonVariant: "expressive",
              onCtaClick: _,
              onClose: () => {
                  (i || h(ef.i.DISMISS), t());
              },
              className: eL.ml,
          })
        : null;
}
var ev = l(123576);
let eR = [
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
function eS(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eN(e) {
    let { userHasPremium: t, onClose: l, orbBalance: a, analyticsPage: s, forceVisible: i = !1 } = e,
        r = eS(t, a);
    return "shop_orbs" === r
        ? (0, n.jsx)(ex, { onClose: l, analyticsPage: s, forceVisible: i })
        : "nitro_upsell" === r
          ? (0, n.jsx)(eT, { onClose: l, analyticsPage: s, forceVisible: i })
          : null;
}
function ey(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: ev.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(ev.dW, ev.or), onClick: l, children: t });
}
function ej(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ea, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(Z, { text: w.intl.format(H.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eN({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(el, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: w.intl.format(H.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(ey, { text: e }) }),
                  }
                : null,
            title: w.intl.string(H.default.H6Ny8N),
            badgeText: w.intl.format(t ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eR,
            onClaim: eb,
        }),
        orbWalletFooter: (0, n.jsx)(en, {
            onQuestsClick: () => eg(),
            onShopClick: () => eA({ analyticsLocations: [] }),
        }),
    });
}
function eI(e) {
    return (0, n.jsx)(ej, { ...e, hasNoChallenges: !0 });
}
function eU() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Z, { text: w.intl.format(H.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eM() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eU, {}) : null;
}
function eB(e) {
    let { analyticsPage: t = d.A.ORB_WALLET } = e,
        { challengesForOrbWallet: l, hasFetchedChallenges: s, refetch: i } = (0, O.z)({ shouldFetch: !0 }),
        r = (0, _.L)(eE.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: c, orbChallengesDisplayError: h } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        u = a.useMemo(
            () =>
                null != h
                    ? {
                          type: "warning",
                          message:
                              h.errorType === v.EB.CLAIM_CHALLENGE
                                  ? w.intl.string(H.default.FYb5rH)
                                  : w.intl.format(H.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(ey, { text: e, onClick: i }),
                                    }),
                      }
                    : null,
            [h, i],
        ),
        m = a.useMemo(() => {
            if (!r)
                return () => (
                    (0, L.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ed.x)() : (0, e_.gC)(t, em.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: c })
                );
        }, [c, r, t]);
    return (0, n.jsx)(el, {
        title: w.intl.string(H.default.H6Ny8N),
        isLoading: !s,
        inlineNoticeProps: u,
        challenges: l,
        onClaim: T.Xz,
        onClickBadge: m,
        badgeText: w.intl.format(r ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: c }),
    });
}
function eF(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET } = e,
        { balance: s } = (0, x.W)(),
        i = (0, p.H)({ location: "StatefulOrbWallet" }),
        r = (0, _.L)(eE.PremiumTypes.TIER_2),
        { analyticsLocations: h } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        i && (0, T.eX)();
    }, [i]);
    let u = a.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: h }));
        }, [h, l]),
        E = a.useCallback(() => {
            ((0, L.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eg());
        }, [l]),
        A = a.useMemo(() => eS(r, s), [r, s]),
        { challengesForOrbWallet: O, hasFetchedChallenges: R } = (0, o.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        b = a.useRef(!1);
    a.useEffect(() => {
        if (!R || b.current) return;
        let e = O.map((e) => e.achievementIdentifier),
            t = O.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(K.HAw.ORB_WALLET_VIEWED, {
            location_stack: h,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: A,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (b.current = !0));
    }, [R, O, A, h, l]);
    let { pathname: S } = (0, c.zy)(),
        N = S.startsWith(K.BVt.COLLECTIBLES_SHOP),
        y = (0, C.p)();
    return i
        ? (0, n.jsx)(ea, {
              cardRef: t,
              orbBalance: s,
              headerTagsContent: (0, n.jsx)(eM, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eN({ userHasPremium: r, onClose: t, orbBalance: s, analyticsPage: l });
              },
              orbChallengesCard: (0, n.jsx)(eB, { analyticsPage: l }),
              orbWalletFooter: (0, n.jsx)(en, { onQuestsClick: y ? null : E, onShopClick: N ? null : u }),
          })
        : null;
}
function eD(e) {
    let { cardRef: t, targetElementRef: l, shouldShow: s, analyticsPage: i } = e,
        r = a.useCallback(() => (0, n.jsx)(eF, { cardRef: t, analyticsPage: i }), [t, i]);
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
