n.d(t, { Yc: () => eg, vG: () => eb, FT: () => ef, EA: () => eN });
var a = n(477900),
    l = n(582128),
    s = n(892227),
    r = n(17928),
    i = n(922016),
    c = n(757036),
    o = n(366505),
    u = n(166403),
    d = n(124861),
    h = n(362862),
    m = n(761705),
    C = n(923138),
    x = n(12510),
    f = n(673125),
    g = n(503698),
    E = n.n(g),
    A = n(821609),
    v = n(661531),
    b = n(403581),
    N = n(834730),
    _ = n(404778),
    j = n(577473),
    p = n(34188),
    S = n(303136),
    R = n(626031),
    L = n(628284),
    O = n(320448),
    y = n(318254),
    T = n(939249),
    U = n(742967),
    k = n(642529),
    M = n(375708),
    F = n(137484),
    I = n(427483);
function D(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
        l = t === d.x.COMPLETED || t === d.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: E()(F.TK, { [F.AM]: l }),
            children: (0, a.jsx)(U.x, {
                className: F.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: I.A,
                animationState: n,
                assetAltText: "",
            }),
        });
    return l ? (0, a.jsx)("div", { className: F.Zs, children: s }) : s;
}
function w(e) {
    let {
            achievementIdentifier: t,
            title: n,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: i,
            onDiscoveryClick: c,
        } = e,
        [o, u] = l.useState(!1),
        [h, m] = l.useState(!1);
    async function C() {
        null != i && (m(!0), await i(t).finally(() => m(!1)));
    }
    let x = null != c && r === d.x.NONE,
        f = E()(F.of, { [F.D8]: o, [F.or]: x }),
        g = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: F.Ub,
                    children: [
                        (0, a.jsx)(D, { achievementStatus: r, animationState: o ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: F.Du,
                            children: [
                                (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.format(r === d.x.COMPLETED ? k.default.h2qWpS : k.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(y.C, { className: F.fN, size: "xs", color: "currentColor" }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: n, isClaiming: l, handleClaim: s, hasDiscoveryClick: r } = t,
                        i = (0, a.jsx)(A.$, {
                            variant: "expressive",
                            size: "md",
                            text: M.intl.string(k.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? i
                        : e === d.x.COMPLETED
                          ? n
                              ? i
                              : (0, a.jsx)(L.y, {
                                    color: v.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": M.intl.string(k.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(O._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: o, isClaiming: h, handleClaim: C, hasDiscoveryClick: x }),
            ],
        }),
        b = l.useMemo(() => ({ onMouseEnter: () => u(!0), onMouseLeave: () => u(!1) }), []);
    return x
        ? (0, a.jsx)(T.D, { className: f, ...b, onClick: c, "aria-label": n, children: g })
        : (0, a.jsx)("div", { className: f, ...b, children: g });
}
var B = n(652215),
    P = n(653877),
    G = n(268920),
    H = n(633217);
function W() {
    return (0, a.jsx)("div", {
        className: P.s,
        children: (0, a.jsx)(S.A, { src: H.A, fallbackImage: G.A, className: P.Cb }),
    });
}
function z(e) {
    let { nitroIconColor: t = v.A.colors.TEXT_MUTED, text: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SY,
        children: [
            (0, a.jsx)(b.t, { size: "xxs", color: t }),
            (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-muted", children: n }),
        ],
    });
}
function V(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SZ,
        children: [
            (0, a.jsx)(W, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(R.t, {
                        value: t,
                        onValueChange: B.tEg,
                        onValueReached: B.tEg,
                        targetTotalCounterTime: 1500,
                        className: P.xc,
                        textVariant: "display-md",
                        textColor: "text-strong",
                        horizontalAlignment: "left",
                        isRenderedWithoutLottieAnimation: !0,
                    }),
                    n,
                ],
            }),
        ],
    });
}
function $(e) {
    let { isFullWidth: t = !1, className: n } = e;
    return (0, a.jsx)(_.c, { className: E()(P.ts, { [P.KU]: t }, n) });
}
function K(e) {
    let { text: t } = e;
    return (0, a.jsxs)("div", {
        className: P.lh,
        children: [
            (0, a.jsx)(b.t, { size: "xxs", color: "white" }),
            (0, a.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
        ],
    });
}
function q(e) {
    let { title: t, challenges: n, onClaim: s, badgeText: r } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("div", {
                className: P.E6,
                children:
                    n.length > 0
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: P.$b,
                                      children: [
                                          (0, a.jsx)(N.E, {
                                              variant: "text-sm/medium",
                                              color: "text-muted",
                                              children: t,
                                          }),
                                          null != r && (0, a.jsx)(K, { text: r }),
                                      ],
                                  }),
                                  n.map((e, t) =>
                                      (0, a.jsxs)(
                                          l.Fragment,
                                          {
                                              children: [
                                                  t > 0 ? (0, a.jsx)($, { className: P.Fu }) : null,
                                                  (0, a.jsx)(w, { ...e, onClaim: s }),
                                              ],
                                          },
                                          e.achievementIdentifier,
                                      ),
                                  ),
                              ],
                          })
                        : (0, a.jsxs)("div", {
                              className: P.AZ,
                              children: [
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: M.intl.string(k.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(N.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: M.intl.string(k.default.XW2CuY),
                                  }),
                              ],
                          }),
            }),
            0 === n.length ? (0, a.jsx)($, { isFullWidth: !0 }) : null,
        ],
    });
}
function X(e) {
    let { onQuestsClick: t, onShopClick: n } = e;
    return (0, a.jsxs)("div", {
        className: P.W,
        children: [
            (0, a.jsx)(A.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: j.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(A.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: p.U, type: "icon" },
                fullWidth: !0,
                onClick: n,
            }),
        ],
    });
}
function Y(e) {
    let {
            orbBalance: t,
            headerTagsContent: n,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: i,
            cardRef: c,
        } = e,
        [o, u] = l.useState(!1);
    return (0, a.jsxs)("div", {
        className: E()(P.ql, P.Ut),
        ref: c,
        children: [
            (0, a.jsx)(V, { orbBalance: t, headerTagsContent: n }),
            o ? null : s({ onClose: () => u(!0) }),
            (0, a.jsx)($, { isFullWidth: !0 }),
            r,
            i,
        ],
    });
}
var J = n(408278),
    Q = n(789645),
    Z = n(696292),
    ee = n(793574),
    et = n(839534),
    en = n(87719),
    ea = n(617986),
    el = n(758836);
function es() {
    (0, et.Cz)({ tab: el.G2.ORBS, analyticsLocations: [], analyticsSource: ee.A.ORBS_BALANCE_MENU });
}
function er() {
    (0, ea.mA)({ fromContent: Z.u.ORBS_BALANCE_MENU });
}
function ei() {
    return (0, en.x)();
}
var ec = n(600676);
function eo(e) {
    let {
        title: t,
        imageUrl: n,
        imageAlt: l,
        subTextDescription: s,
        buttonText: r,
        buttonIcon: i,
        buttonVariant: c,
        onCtaClick: o,
        onClose: u,
        className: d,
    } = e;
    return (0, a.jsxs)("div", {
        className: E()(ec.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: ec.Fx,
                      children: (0, a.jsx)(J.K, {
                          icon: Q.P,
                          "aria-label": M.intl.string(M.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            null != n && (0, a.jsx)("img", { alt: l, src: n, className: ec.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(N.E, { variant: "text-md/bold", color: "text-default", className: ec.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(N.E, {
                            variant: "text-xs/medium",
                            color: "text-muted",
                            className: ec.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(A.$, { text: r, size: "sm", icon: i, onClick: o, variant: c }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(eo, {
        title: M.intl.string(k.default.o6s7yg),
        imageUrl: n(105644),
        imageAlt: M.intl.string(k.default.qa1xyr),
        subTextDescription: M.intl.string(k.default.HACucK),
        buttonText: M.intl.string(k.default.o6s7yg),
        buttonIcon: { asset: p.U, type: "icon" },
        onCtaClick: es,
        onClose: t,
    });
}
function ed(e) {
    let { onClose: t } = e,
        { orbRewardMultiplier: l } = (0, r.cf)([f.A], () => ({ orbRewardMultiplier: f.A.orbRewardMultiplier }));
    return (0, a.jsx)(eo, {
        title: M.intl.string(k.default.ZqCAos),
        imageUrl: n(780361),
        imageAlt: M.intl.string(k.default.FkfrRH),
        subTextDescription: M.intl.format(k.default["Ba/7wO"], { multiplier: l }),
        buttonText: M.intl.string(k.default.U9UQJE),
        buttonIcon: { asset: b.t, type: "icon" },
        buttonVariant: "expressive",
        onCtaClick: ei,
        onClose: t,
        className: ec.ml,
    });
}
var eh = n(202541);
let em = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: d.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: d.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: d.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eC(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function ex(e) {
    let { userHasPremium: t, onClose: n, orbBalance: l } = e;
    return t ? (null != l && l >= 1400 ? (0, a.jsx)(eu, { onClose: n }) : null) : (0, a.jsx)(ed, { onClose: n });
}
function ef(e) {
    let { userHasPremium: t, orbBalance: n, hasNoChallenges: l } = e;
    return (0, a.jsx)(Y, {
        orbBalance: n,
        headerTagsContent: t
            ? (0, a.jsx)(z, { text: M.intl.format(k.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return ex({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(q, {
            title: M.intl.string(k.default.H6Ny8N),
            badgeText: M.intl.format(t ? k.default.OHLdjq : k.default.WOMrJf, { multiplier: 1.2 }),
            challenges: l ? [] : em,
            onClaim: eC,
        }),
        orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
    });
}
function eg(e) {
    let { userHasPremium: t, orbBalance: n } = e;
    return (0, a.jsx)(ef, { userHasPremium: t, orbBalance: n, hasNoChallenges: !0 });
}
function eE() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, o.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let n = Math.max(1, (0, s.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(z, { text: M.intl.format(k.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function eA() {
    return null != (0, r.bG)([u.A], () => u.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eE, {}) : null;
}
function ev() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (0, C.z)({ shouldFetch: !0 }),
        n = (0, c.L)(eh.PremiumTypes.TIER_2),
        { orbRewardMultiplier: l } = (0, r.cf)([f.A], () => ({ orbRewardMultiplier: f.A.orbRewardMultiplier }));
    return t
        ? (0, a.jsx)(q, {
              title: M.intl.string(k.default.H6Ny8N),
              challenges: e,
              onClaim: x.Xz,
              badgeText: M.intl.format(n ? k.default.OHLdjq : k.default.WOMrJf, { multiplier: l }),
          })
        : null;
}
function eb(e) {
    let { cardRef: t } = e,
        { balance: n } = (0, m.W)(),
        s = (0, h.H)({ location: "StatefulOrbWallet" }),
        r = (0, c.L)(eh.PremiumTypes.TIER_2);
    return (l.useEffect(() => {
        s && (0, x.eX)();
    }, [s]),
    s)
        ? (0, a.jsx)(Y, {
              cardRef: t,
              orbBalance: n,
              headerTagsContent: (0, a.jsx)(eA, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ex({ userHasPremium: r, onClose: t, orbBalance: n });
              },
              orbChallengesCard: (0, a.jsx)(ev, {}),
              orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
          })
        : null;
}
function eN(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        r = l.useCallback(() => (0, a.jsx)(eb, { cardRef: t }), [t]);
    return (0, a.jsx)(i.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: r,
        position: "bottom",
        align: "right",
        shouldShow: s,
        animation: i.Y.Animation.NONE,
        targetElementRef: n,
        children: () => null,
    });
}
