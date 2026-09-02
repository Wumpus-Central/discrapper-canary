n.d(t, { Yc: () => eE, vG: () => e_, FT: () => eg, EA: () => ep });
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
    _ = n(834730),
    p = n(577473),
    N = n(34188),
    j = n(303136),
    S = n(626031),
    L = n(628284),
    R = n(320448),
    O = n(404778),
    y = n(318254),
    T = n(939249),
    U = n(742967),
    M = n(570165),
    k = n(375708),
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
                                (0, a.jsx)(_.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                                (0, a.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.format(r === d.x.COMPLETED ? M.default.h2qWpS : M.default.B8Fxns, {
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
                            text: k.intl.string(M.default.WmfVjs),
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
                                    "aria-label": k.intl.string(M.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(R._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: u, isClaiming: m, handleClaim: x, hasDiscoveryClick: f }),
            ],
        }),
        p = l.useMemo(() => ({ onMouseEnter: () => h(!0), onMouseLeave: () => h(!1) }), []);
    return f
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(T.D, { className: g, ...p, onClick: c, "aria-label": n, children: b }),
                  !o && (0, a.jsx)(B, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: g, ...p, children: b }), !o && (0, a.jsx)(B, {})],
          });
}
var G = n(652215),
    P = n(653877),
    H = n(268920),
    W = n(633217);
function z() {
    return (0, a.jsx)("div", {
        className: P.s,
        children: (0, a.jsx)(j.A, { src: W.A, fallbackImage: H.A, className: P.Cb }),
    });
}
function V(e) {
    let { nitroIconColor: t = v.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SY,
        children: [
            (0, a.jsx)(b.t, { size: "xs", color: t }),
            (0, a.jsx)(_.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
        ],
    });
}
function $(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SZ,
        children: [
            (0, a.jsx)(z, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(S.t, {
                        value: t,
                        onValueChange: G.tEg,
                        onValueReached: G.tEg,
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
        className: P.lh,
        children: [
            (0, a.jsx)(b.t, { size: "xxs", color: "white" }),
            (0, a.jsx)(_.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
        ],
    });
}
function q(e) {
    let { title: t, challenges: n, onClaim: s, badgeText: r } = e;
    return (0, a.jsx)("div", {
        className: P.E6,
        children:
            n.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("div", {
                              className: P.$b,
                              children: [
                                  (0, a.jsx)(_.E, { variant: "text-xs/medium", color: "text-subtle", children: t }),
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
                      className: P.AZ,
                      children: [
                          (0, a.jsx)(_.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: k.intl.string(M.default.xOP5OP),
                          }),
                          (0, a.jsx)(_.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: k.intl.string(M.default.XW2CuY),
                          }),
                      ],
                  }),
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
                icon: { asset: p.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(A.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: N.U, type: "icon" },
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
                          "aria-label": k.intl.string(k.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            null != n && (0, a.jsx)("img", { alt: l, src: n, className: ec.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(_.E, { variant: "text-md/bold", color: "text-default", className: ec.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(_.E, {
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
        title: k.intl.string(M.default.o6s7yg),
        imageUrl: n(105644),
        imageAlt: k.intl.string(M.default.qa1xyr),
        subTextDescription: k.intl.string(M.default.HACucK),
        buttonText: k.intl.string(M.default.o6s7yg),
        buttonIcon: { asset: N.U, type: "icon" },
        onCtaClick: es,
        onClose: t,
    });
}
function ed(e) {
    let { onClose: t } = e,
        { nitroGatedOrbMultiplier: l } = (0, r.cf)([f.A], () => ({
            nitroGatedOrbMultiplier: f.A.nitroGatedOrbMultiplier,
        }));
    return (0, a.jsx)(eo, {
        title: k.intl.string(M.default.ZqCAos),
        imageUrl: n(780361),
        imageAlt: k.intl.string(M.default.FkfrRH),
        subTextDescription: k.intl.format(M.default["Ba/7wO"], { multiplier: l }),
        buttonText: k.intl.string(M.default.U9UQJE),
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
            ? (0, a.jsx)(V, { text: k.intl.format(M.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return ef({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(q, {
            title: k.intl.string(M.default.H6Ny8N),
            badgeText: k.intl.format(t ? M.default.OHLdjq : M.default.WOMrJf, { multiplier: 1.2 }),
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
    return (0, a.jsx)(V, { text: k.intl.format(M.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function ev() {
    return null != (0, r.bG)([u.A], () => u.A.getPremiumTypeSubscription()) ? (0, a.jsx)(eA, {}) : null;
}
function eb() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (0, C.z)({ shouldFetch: !0 }),
        n = (0, c.L)(eh.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: l } = (0, r.cf)([f.A], () => ({
            nitroGatedOrbMultiplier: f.A.nitroGatedOrbMultiplier,
        }));
    return t
        ? (0, a.jsx)(q, {
              title: k.intl.string(M.default.H6Ny8N),
              challenges: e,
              onClaim: x.Xz,
              badgeText: k.intl.format(n ? M.default.OHLdjq : M.default.WOMrJf, { multiplier: l }),
          })
        : (0, a.jsx)("div", { className: em.y });
}
function e_(e) {
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
function ep(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        r = l.useCallback(() => (0, a.jsx)(e_, { cardRef: t }), [t]);
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
