l.d(t, { Yc: () => eM, vG: () => eP, FT: () => eU, EA: () => eW });
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
    G = l(375708),
    w = l(137484),
    k = l(427483);
function z(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === L.x.COMPLETED || t === L.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(w.TK, { [w.AM]: a }),
            children: (0, n.jsx)(W.x, {
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
        [m, _] = a.useState(!1),
        [C, E] = a.useState(!1);
    async function A() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let g = null != o && r !== L.x.COMPLETED,
        f = i()(w.of, { [w.o4]: d, [w.D8]: m, [w.or]: g }),
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
                                    children: G.intl.format(r === L.x.COMPLETED ? H.default.h2qWpS : H.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(P.C, {
                                                className: w.fN,
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
                            text: G.intl.string(H.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === L.x.COMPLETED || a ? r : i ? (0, n.jsx)(F._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: C, handleClaim: A, hasDiscoveryClick: g }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => _(!0), onMouseLeave: () => _(!1) }), []);
    return g
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, { className: f, ...x, onClick: o, "aria-label": l, children: p }),
                  !u && (0, n.jsx)(Y, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: f, ...x, children: p }), !u && (0, n.jsx)(Y, {})],
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
                                      children: G.intl.string(H.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: G.intl.string(H.default.XW2CuY),
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
    let { analyticsLocations: t = [], shopTab: l = eC.G2.ORBS } = e;
    (0, eh.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eg() {
    (0, e_.mA)({ fromContent: eo.u.ORBS_BALANCE_MENU });
}
function eL(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eu.A)({ subscriptionTier: eE.pe.TIER_2, analyticsLocations: t });
}
let ef = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eA({ analyticsLocations: t, shopTab: eC.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eA({ analyticsLocations: t, shopTab: eC.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        eL({ analyticsLocations: t });
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
            (0, n.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eT(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, o] = (0, ec.kn)([es.M.ORB_WALLET_SHOP_CTA_CARD], ep.m.ORB_WALLET, !0),
        h = a.useCallback(() => {
            ((0, f.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: r }),
                i || o(ep.i.TAKE_ACTION));
        }, [r, s, o, i]);
    return null != c || i
        ? (0, n.jsx)(eO, {
              title: G.intl.string(H.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: G.intl.string(H.default.qa1xyr),
              subTextDescription: G.intl.string(H.default.HACucK),
              buttonText: G.intl.string(H.default["7raRgL"]),
              buttonIcon: { asset: I.U, type: "icon" },
              onCtaClick: h,
              onClose: () => {
                  (i || o(ep.i.DISMISS), t());
              },
          })
        : null;
}
let ev = { asset: S.t, type: "icon" };
function eR(e) {
    let { onClose: t, analyticsPage: s = d.A.ORB_WALLET, forceVisible: i = !1 } = e,
        { analyticsLocations: r } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        [c, h] = (0, ec.kn)([es.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD], ep.m.ORB_WALLET, !0),
        { nitroGatedOrbMultiplier: u } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
        })),
        _ = a.useCallback(() => {
            ((0, f.Y)({
                pageType: s,
                sectionType: d.A.ORB_WALLET_PRIMARY_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            }),
                eL({ analyticsLocations: r }),
                i || h(ep.i.TAKE_ACTION));
        }, [r, s, h, i]),
        C = a.useMemo(() => G.intl.format(H.default["Ba/7wO"], { multiplier: u }), [u]);
    return null != u && (null != c || i)
        ? (0, n.jsx)(eO, {
              title: G.intl.string(H.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: G.intl.string(H.default.FkfrRH),
              subTextDescription: C,
              buttonText: G.intl.string(H.default.U9UQJE),
              buttonIcon: ev,
              buttonVariant: "expressive",
              onCtaClick: _,
              onClose: () => {
                  (i || h(ep.i.DISMISS), t());
              },
              className: ex.ml,
          })
        : null;
}
var eb = l(123576);
let eS = [
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
async function eN(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function ey(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function ej(e) {
    let { userHasPremium: t, onClose: l, orbBalance: a, analyticsPage: s, forceVisible: i = !1 } = e,
        r = ey(t, a);
    return "shop_orbs" === r
        ? (0, n.jsx)(eT, { onClose: l, analyticsPage: s, forceVisible: i })
        : "nitro_upsell" === r
          ? (0, n.jsx)(eR, { onClose: l, analyticsPage: s, forceVisible: i })
          : null;
}
function eI(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eb.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eb.dW, eb.or), onClick: l, children: t });
}
function eU(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(ea, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(Z, { text: G.intl.format(H.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return ej({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(el, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: G.intl.format(H.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eI, { text: e }) }),
                  }
                : null,
            title: G.intl.string(H.default.H6Ny8N),
            badgeText: G.intl.format(t ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eS,
            onClaim: eN,
        }),
        orbWalletFooter: (0, n.jsx)(en, {
            onQuestsClick: () => eg(),
            onShopClick: () => eA({ analyticsLocations: [] }),
        }),
    });
}
function eM(e) {
    return (0, n.jsx)(eU, { ...e, hasNoChallenges: !0 });
}
function eB() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, E.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(Z, { text: G.intl.format(H.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eF() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eB, {}) : null;
}
function eD(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, O.z)({ shouldFetch: !0 }),
        h = (0, _.L)(eE.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([v.Ay], () => ({
            nitroGatedOrbMultiplier: v.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: v.Ay.orbChallengesDisplayError,
        })),
        C = a.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === v.EB.CLAIM_CHALLENGE
                                  ? G.intl.string(H.default.FYb5rH)
                                  : G.intl.format(H.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eI, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        E = a.useMemo(() => {
            if (!h)
                return () => (
                    (0, f.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                    (function (e) {
                        let { nitroGatedOrbMultiplier: t } = e;
                        null == t ? (0, ed.x)() : (0, e_.gC)(t, em.MA.UPSELL);
                    })({ nitroGatedOrbMultiplier: u })
                );
        }, [u, h, t]),
        A = a.useMemo(
            () =>
                i.map((e) => {
                    let n = null != e.achievementDefinitionId ? ef[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: l },
                        i =
                            null != n
                                ? () => {
                                      ((0, f.Y)({
                                          pageType: t,
                                          sectionType: d.A.ORB_WALLET,
                                          ctaObject: d.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          n(a),
                                          null != s && s());
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [i, l, t, s],
        );
    return (0, n.jsx)(el, {
        title: G.intl.string(H.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: C,
        challenges: A,
        onClaim: T.Xz,
        onClickBadge: E,
        badgeText: G.intl.format(h ? H.default.OHLdjq : H.default.WOMrJf, { multiplier: u }),
    });
}
function eP(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET, onCloseWallet: s } = e,
        { balance: i } = (0, x.W)(),
        r = (0, p.H)({ location: "StatefulOrbWallet" }),
        h = (0, _.L)(eE.PremiumTypes.TIER_2),
        { analyticsLocations: u } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        r && (0, T.eX)();
    }, [r]);
    let E = a.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eA({ analyticsLocations: u }));
        }, [u, l]),
        A = a.useCallback(() => {
            ((0, f.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eg());
        }, [l]),
        O = a.useMemo(() => ey(h, i), [h, i]),
        { challengesForOrbWallet: R, hasFetchedChallenges: b } = (0, o.cf)([v.Ay], () => ({
            challengesForOrbWallet: v.Ay.challengesForOrbWallet,
            hasFetchedChallenges: v.Ay.hasFetchedChallenges,
        })),
        S = a.useRef(!1);
    a.useEffect(() => {
        if (!b || S.current) return;
        let e = R.map((e) => e.achievementIdentifier),
            t = R.filter((e) => e.achievementStatus === L.x.COMPLETED).map((e) => e.achievementIdentifier);
        (g.default.track(K.HAw.ORB_WALLET_VIEWED, {
            location_stack: u,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: O,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (S.current = !0));
    }, [b, R, O, u, l]);
    let { pathname: N } = (0, c.zy)(),
        y = N.startsWith(K.BVt.COLLECTIBLES_SHOP),
        j = (0, C.p)();
    return r
        ? (0, n.jsx)(ea, {
              cardRef: t,
              orbBalance: i,
              headerTagsContent: (0, n.jsx)(eF, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ej({ userHasPremium: h, onClose: t, orbBalance: i, analyticsPage: l });
              },
              orbChallengesCard: (0, n.jsx)(eD, { analyticsPage: l, analyticsLocations: u, onCloseWallet: s }),
              orbWalletFooter: (0, n.jsx)(en, { onQuestsClick: j ? null : A, onShopClick: y ? null : E }),
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
