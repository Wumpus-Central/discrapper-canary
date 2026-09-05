n.d(t, { Yc: () => ex, vG: () => ep, FT: () => ef, EA: () => eS });
var a = n(477900),
    l = n(582128),
    s = n(892227),
    r = n(17928),
    i = n(922016),
    c = n(757036),
    o = n(366505),
    h = n(166403),
    u = n(124861),
    d = n(362862),
    m = n(761705),
    C = n(923138),
    E = n(12510),
    g = n(673125),
    f = n(503698),
    x = n.n(f),
    _ = n(821609),
    A = n(661531),
    v = n(403581),
    p = n(834730),
    S = n(577473),
    b = n(34188),
    N = n(303136),
    L = n(626031),
    j = n(628284),
    O = n(320448),
    R = n(404778),
    U = n(318254),
    y = n(939249),
    T = n(742967),
    I = n(419259),
    M = n(375708),
    F = n(137484),
    G = n(427483);
function w(e) {
    let { achievementStatus: t, animationState: n = "off" } = e,
        l = t === u.x.COMPLETED || t === u.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: x()(F.TK, { [F.AM]: l }),
            children: (0, a.jsx)(T.x, {
                className: F.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: G.A,
                animationState: n,
                assetAltText: "",
            }),
        });
    return l ? (0, a.jsx)("div", { className: F.Zs, children: s }) : s;
}
function B(e) {
    let { className: t } = e;
    return (0, a.jsx)(R.c, { className: x()(F.Fu, t) });
}
function D(e) {
    let {
            achievementIdentifier: t,
            title: n,
            orbRewardAmount: s,
            achievementStatus: r,
            onClaim: i,
            onDiscoveryClick: c,
            isLastItem: o,
        } = e,
        [h, d] = l.useState(!1),
        [m, C] = l.useState(!1);
    async function E() {
        null != i && (C(!0), await i(t).finally(() => C(!1)));
    }
    let g = null != c && r === u.x.NONE,
        f = x()(F.of, { [F.D8]: h, [F.or]: g }),
        v = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: F.Ub,
                    children: [
                        (0, a.jsx)(w, { achievementStatus: r, animationState: h ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: F.Du,
                            children: [
                                (0, a.jsx)(p.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                                (0, a.jsx)(p.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: M.intl.format(r === u.x.COMPLETED ? I.default.h2qWpS : I.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(U.C, {
                                                className: F.fN,
                                                size: "xs",
                                                color: A.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isHovered: n, isClaiming: l, handleClaim: s, hasDiscoveryClick: r } = t,
                        i = (0, a.jsx)(_.$, {
                            variant: "expressive",
                            size: "sm",
                            text: M.intl.string(I.default.WmfVjs),
                            loading: l,
                            onClick: s,
                        });
                    return l
                        ? i
                        : e === u.x.COMPLETED
                          ? n
                              ? i
                              : (0, a.jsx)(j.y, {
                                    color: A.A.colors.STATUS_POSITIVE,
                                    size: "sm",
                                    "aria-label": M.intl.string(I.default.k6h2J3),
                                })
                          : r
                            ? (0, a.jsx)(O._, { size: "sm", "aria-hidden": !0 })
                            : null;
                })(r, { isHovered: h, isClaiming: m, handleClaim: E, hasDiscoveryClick: g }),
            ],
        }),
        S = l.useMemo(() => ({ onMouseEnter: () => d(!0), onMouseLeave: () => d(!1) }), []);
    return g
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(y.D, { className: f, ...S, onClick: c, "aria-label": n, children: v }),
                  !o && (0, a.jsx)(B, {}),
              ],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: f, ...S, children: v }), !o && (0, a.jsx)(B, {})],
          });
}
var H = n(652215),
    P = n(653877),
    k = n(268920),
    W = n(633217);
function z() {
    return (0, a.jsx)("div", {
        className: P.s,
        children: (0, a.jsx)(N.A, { src: W.A, fallbackImage: k.A, className: P.Cb }),
    });
}
function $(e) {
    let { nitroIconColor: t = A.A.colors.ICON_SUBTLE, text: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SY,
        children: [
            (0, a.jsx)(v.t, { size: "xs", color: t }),
            (0, a.jsx)(p.E, { variant: "text-xs/medium", color: "text-subtle", children: n }),
        ],
    });
}
function V(e) {
    let { orbBalance: t, headerTagsContent: n } = e;
    return (0, a.jsxs)("div", {
        className: P.SZ,
        children: [
            (0, a.jsx)(z, {}),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(L.t, {
                        value: t,
                        onValueChange: H.tEg,
                        onValueReached: H.tEg,
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
            (0, a.jsx)(v.t, { size: "xxs", color: "white" }),
            (0, a.jsx)(p.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
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
                                  (0, a.jsx)(p.E, { variant: "text-xs/medium", color: "text-subtle", children: t }),
                                  null != r && (0, a.jsx)(K, { text: r }),
                              ],
                          }),
                          n.map((e, t) =>
                              (0, a.jsx)(
                                  l.Fragment,
                                  { children: (0, a.jsx)(D, { ...e, onClaim: s, isLastItem: t === n.length - 1 }) },
                                  e.achievementIdentifier,
                              ),
                          ),
                      ],
                  })
                : (0, a.jsxs)("div", {
                      className: P.AZ,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: M.intl.string(I.default.xOP5OP),
                          }),
                          (0, a.jsx)(p.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: M.intl.string(I.default.XW2CuY),
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
            (0, a.jsx)(_.$, {
                text: "Quests",
                variant: "secondary",
                size: "md",
                icon: { asset: S.r, type: "icon" },
                fullWidth: !0,
                onClick: t,
            }),
            (0, a.jsx)(_.$, {
                text: "Shop",
                variant: "secondary",
                size: "md",
                icon: { asset: b.U, type: "icon" },
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
        [o, h] = l.useState(!1);
    return (0, a.jsxs)("div", {
        className: x()(P.ql, P.Ut),
        ref: c,
        children: [
            (0, a.jsx)(V, { orbBalance: t, headerTagsContent: n }),
            o ? null : s({ onClose: () => h(!0) }),
            r,
            i,
        ],
    });
}
var Q = n(408278),
    J = n(789645),
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
        onClose: h,
        className: u,
    } = e;
    return (0, a.jsxs)("div", {
        className: x()(ec.Vm, u),
        children: [
            null != h
                ? (0, a.jsx)("div", {
                      className: ec.Fx,
                      children: (0, a.jsx)(Q.K, {
                          icon: J.P,
                          "aria-label": M.intl.string(M.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: h,
                      }),
                  })
                : null,
            null != n && (0, a.jsx)("img", { alt: l, src: n, className: ec.db }),
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(p.E, { variant: "text-md/bold", color: "text-default", className: ec.L8, children: t }),
                    null != s &&
                        (0, a.jsx)(p.E, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            className: ec.Gd,
                            children: s,
                        }),
                    (0, a.jsx)(_.$, { text: r, size: "sm", icon: i, onClick: o, variant: c }),
                ],
            }),
        ],
    });
}
function eh(e) {
    let { onClose: t } = e;
    return (0, a.jsx)(eo, {
        title: M.intl.string(I.default.o6s7yg),
        imageUrl: n(105644),
        imageAlt: M.intl.string(I.default.qa1xyr),
        subTextDescription: M.intl.string(I.default.HACucK),
        buttonText: M.intl.string(I.default.o6s7yg),
        buttonIcon: { asset: b.U, type: "icon" },
        onCtaClick: es,
        onClose: t,
    });
}
function eu(e) {
    let { onClose: t } = e,
        { nitroGatedOrbMultiplier: l } = (0, r.cf)([g.A], () => ({
            nitroGatedOrbMultiplier: g.A.nitroGatedOrbMultiplier,
        }));
    return (0, a.jsx)(eo, {
        title: M.intl.string(I.default.ZqCAos),
        imageUrl: n(780361),
        imageAlt: M.intl.string(I.default.FkfrRH),
        subTextDescription: M.intl.format(I.default["Ba/7wO"], { multiplier: l }),
        buttonText: M.intl.string(I.default.U9UQJE),
        buttonIcon: { asset: v.t, type: "icon" },
        buttonVariant: "expressive",
        onCtaClick: ei,
        onClose: t,
        className: ec.ml,
    });
}
var ed = n(202541),
    em = n(123576);
let eC = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: u.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eE(e) {
    console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3));
}
function eg(e) {
    let { userHasPremium: t, onClose: n, orbBalance: l } = e;
    return t ? (null != l && l >= 1400 ? (0, a.jsx)(eh, { onClose: n }) : null) : (0, a.jsx)(eu, { onClose: n });
}
function ef(e) {
    let { userHasPremium: t, orbBalance: n, hasNoChallenges: l } = e;
    return (0, a.jsx)(Y, {
        orbBalance: n,
        headerTagsContent: t
            ? (0, a.jsx)($, { text: M.intl.format(I.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eg({ userHasPremium: t, onClose: a, orbBalance: n });
        },
        orbChallengesCard: (0, a.jsx)(q, {
            title: M.intl.string(I.default.H6Ny8N),
            badgeText: M.intl.format(t ? I.default.OHLdjq : I.default.WOMrJf, { multiplier: 1.2 }),
            challenges: l ? [] : eC,
            onClaim: eE,
        }),
        orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
    });
}
function ex(e) {
    let { userHasPremium: t, orbBalance: n } = e;
    return (0, a.jsx)(ef, { userHasPremium: t, orbBalance: n, hasNoChallenges: !0 });
}
function e_() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, o.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let n = Math.max(1, (0, s.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)($, { text: M.intl.format(I.default["04j3XV"], { orbAmount: t.reward_amount, days: n }) });
}
function eA() {
    return null != (0, r.bG)([h.A], () => h.A.getPremiumTypeSubscription()) ? (0, a.jsx)(e_, {}) : null;
}
function ev() {
    let { challengesForOrbWallet: e, hasFetchedChallenges: t } = (0, C.z)({ shouldFetch: !0 }),
        n = (0, c.L)(ed.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: l } = (0, r.cf)([g.A], () => ({
            nitroGatedOrbMultiplier: g.A.nitroGatedOrbMultiplier,
        }));
    return t
        ? (0, a.jsx)(q, {
              title: M.intl.string(I.default.H6Ny8N),
              challenges: e,
              onClaim: E.Xz,
              badgeText: M.intl.format(n ? I.default.OHLdjq : I.default.WOMrJf, { multiplier: l }),
          })
        : (0, a.jsx)("div", { className: em.y });
}
function ep(e) {
    let { cardRef: t } = e,
        { balance: n } = (0, m.W)(),
        s = (0, d.H)({ location: "StatefulOrbWallet" }),
        r = (0, c.L)(ed.PremiumTypes.TIER_2);
    return (l.useEffect(() => {
        s && (0, E.eX)();
    }, [s]),
    s)
        ? (0, a.jsx)(Y, {
              cardRef: t,
              orbBalance: n,
              headerTagsContent: (0, a.jsx)(eA, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eg({ userHasPremium: r, onClose: t, orbBalance: n });
              },
              orbChallengesCard: (0, a.jsx)(ev, {}),
              orbWalletFooter: (0, a.jsx)(X, { onQuestsClick: er, onShopClick: es }),
          })
        : null;
}
function eS(e) {
    let { cardRef: t, targetElementRef: n, shouldShow: s } = e,
        r = l.useCallback(() => (0, a.jsx)(ep, { cardRef: t }), [t]);
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
