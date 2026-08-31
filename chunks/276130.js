n.d(t, { Yc: () => eE, vG: () => eN, FT: () => eg, EA: () => e_ });
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
    _ = n(577473),
    j = n(34188),
    S = n(303136),
    p = n(626031),
    L = n(628284),
    R = n(320448),
    O = n(404778),
    y = n(318254),
    T = n(939249),
    U = n(742967),
    k = n(642529),
    M = n(375708),
    I = n(137484),
    F = n(427483);
function D(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
        l = t === d.x.COMPLETED || t === d.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: E()(I.TK, { [I.AM]: l }),
            children: (0, a.jsx)(U.x, {
                className: I.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: F.A,
                animationState: n,
                assetAltText: "",
            }),
        });
    return l ? (0, a.jsx)("div", { className: I.Zs, children: s }) : s;
}
function B(e) {
    let { className: t } = e;
    return (0, a.jsx)(O.c, { className: E()(I.Fu, t) });
}
function w(e) {
    let {
            achievementIdentifier: t,
            title: n,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: i,
            onDiscoveryClick: c,
            isLastItem: o,
        } = e,
        [u, h] = l.useState(!1),
        [m, C] = l.useState(!1);
    async function x() {
        null != i && (C(!0), await i(t).finally(() => C(!1)));
    }
    let f = null != c && r === d.x.NONE,
        g = E()(I.of, { [I.D8]: u, [I.or]: f }),
        b = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: I.Ub,
                    children: [
                        (0, a.jsx)(D, { achievementStatus: r, animationState: u ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: I.Du,
                            children: [
                                (0, a.jsx)(N.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                                (0, a.jsx)(N.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.format(r === d.x.COMPLETED ? k.default.h2qWpS : k.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(y.C, {
                                                className: I.fN,
                                                size: "xs",
                                                color: v.A.colors.ICON_SUBTLE,
                                            }),
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
                            size: "sm",
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
                            ? (0, a.jsx)(R._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: u, isClaiming: m, handleClaim: x, hasDiscoveryClick: f }),
            ],
        }),
        _ = l.useMemo(() => ({ onMouseEnter: () => h(!0), onMouseLeave: () => h(!1) }), []);
    return f
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(T.D, { className: g, ..._, onClick: c, "aria-label": n, children: b }),
                  !o && (0, a.jsx)(B, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: g, ..._, children: b }), !o && (0, a.jsx)(B, {})],
          });
}
var P = n(652215),
    G = n(653877),
    H = n(268920),
    W = n(633217);
function z() {
    return (0, a.jsx)("div", {
        className: G.s,
        children: (0, a.jsx)(S.A, { src: W.A, fallbackImage: H.A, className: G.Cb }),
    });
}
function V(e) {
    let { nitroIconColor: t = v.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, a.jsxs)("div", {
        className: G.SY,
        children: [
            (0, a.jsx)(b.t, { size: "xs", color: t }),
            (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
        ],
    });
}
function $(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: G.SZ,
        children: [
            (0, a.jsx)(z, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(p.t, {
                        value: t,
                        onValueChange: P.tEg,
                        onValueReached: P.tEg,
                        targetTotalCounterTime: 1500,
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
function K(e) {
    let { text: t } = e;
    return (0, a.jsxs)("div", {
        className: G.lh,
        children: [
            (0, a.jsx)(b.t, { size: "xxs", color: "white" }),
            (0, a.jsx)(N.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
        ],
    });
}
function q(e) {
    let { title: t, challenges: n, onClaim: s, badgeText: r } = e;
    return (0, a.jsx)("div", {
        className: G.E6,
        children:
            n.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("div", {
                              className: G.$b,
                              children: [
                                  (0, a.jsx)(N.E, { variant: "text-xs/medium", color: "text-subtle", children: t }),
                                  null != r && (0, a.jsx)(K, { text: r }),
                              ],
                          }),
                          n.map((e, t) =>
                              (0, a.jsx)(
                                  l.Fragment,
                                  { children: (0, a.jsx)(w, { ...e, onClaim: s, isLastItem: t === n.length - 1 }) },
                                  e.achievementIdentifier,
                              ),
                          ),
                      ],
                  })
                : (0, a.jsxs)("div", {
                      className: G.AZ,
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
    });
}
function X(e) {
    let { onQuestsClick: t, onShopClick: n } = e;
    return (0, a.jsxs)("div", {
        className: G.W,
        children: [
            (0, a.jsx)(A.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: _.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(A.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: j.U, type: "icon" },
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
        className: E()(G.ql, G.Ut),
        ref: c,
        children: [
            (0, a.jsx)($, { orbBalance: t, headerTagsContent: n }),
            o ? null : s({ onClose: () => u(!0) }),
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
                            color: "text-default",
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
        buttonIcon: { asset: j.U, type: "icon" },
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
var eh = n(202541),
    em = n(123576);
let eC = [
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
async function ex(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function ef(e) {
    let { userHasPremium: t, onClose: n, orbBalance: l } = e;
    return t ? (null != l && l >= 1400 ? (0, a.jsx)(eu, { onClose: n }) : null) : (0, a.jsx)(ed, { onClose: n });
}
function eg(e) {
    let { userHasPremium: t, orbBalance: n, hasNoChallenges: l } = e;
    return (0, a.jsx)(Y, {
        orbBalance: n,
        headerTagsContent: t
            ? (0, a.jsx)(V, { text: M.intl.format(k.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return ef({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(q, {
            title: M.intl.string(k.default.H6Ny8N),
            badgeText: M.intl.format(t ? k.default.OHLdjq : k.default.WOMrJf, { multiplier: 1.2 }),
            challenges: l ? [] : eC,
            onClaim: ex,
        }),
        orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
    });
}
function eE(e) {
    let { userHasPremium: t, orbBalance: n } = e;
    return (0, a.jsx)(eg, { userHasPremium: t, orbBalance: n, hasNoChallenges: !0 });
}
function eA() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, o.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let n = Math.max(1, (0, s.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(V, { text: M.intl.format(k.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function ev() {
    return null != (0, r.bG)([u.A], () => u.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eA, {}) : null;
}
function eb() {
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
        : (0, a.jsx)("div", { className: em.y });
}
function eN(e) {
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
              headerTagsContent: (0, a.jsx)(ev, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return ef({ userHasPremium: r, onClose: t, orbBalance: n });
              },
              orbChallengesCard: (0, a.jsx)(eb, {}),
              orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
          })
        : null;
}
function e_(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        r = l.useCallback(() => (0, a.jsx)(eN, { cardRef: t }), [t]);
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
