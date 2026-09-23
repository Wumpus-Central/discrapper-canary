l.d(t, { Yc: () => eB, vG: () => eP, FT: () => eM, EA: () => eW });
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
    C = l(757036),
    _ = l(576761),
    E = l(369189),
    g = l(366505),
    A = l(166403),
    f = l(174459),
    L = l(124861),
    p = l(318346),
    x = l(362862),
    O = l(761705),
    v = l(923138),
    T = l(12510),
    b = l(673125),
    R = l(821609),
    S = l(661531),
    N = l(403581),
    y = l(834730),
    j = l(683071),
    I = l(577473),
    U = l(34188),
    M = l(475743),
    B = l(303136),
    F = l(626031),
    D = l(320448),
    H = l(404778),
    P = l(318254),
    W = l(742967),
    G = l(570165),
    k = l(375708),
    w = l(137484),
    z = l(427483);
function Y(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === L.x.COMPLETED || t === L.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(w.TK, { [w.AM]: a }),
            children: (0, n.jsx)(W.x, {
                className: w.t9,
                staticAsset:
                    "https://cdn.discordapp.com/assets/content/c25ca35dc2175b9ce33ad5bd427fb4c458cbb6cc6e8b01e592e70dd7472bfa0d.png",
                webmAsset: z.A,
                animationState: l,
                assetAltText: "",
            }),
        });
    return a ? (0, n.jsx)("div", { className: w.Zs, children: s }) : s;
}
function V(e) {
    let { className: t } = e;
    return (0, n.jsx)(H.c, { className: i()(w.Fu, t) });
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
        [m, C] = a.useState(!1),
        [_, E] = a.useState(!1);
    async function g() {
        null != c && (E(!0), await c(t).finally(() => E(!1)));
    }
    let A = null != o && r !== L.x.COMPLETED,
        f = i()(w.of, { [w.o4]: d, [w.D8]: m, [w.or]: A }),
        p = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: w.Ub,
                    children: [
                        (0, n.jsx)(Y, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: w.Du,
                            children: [
                                (0, n.jsx)(y.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: k.intl.format(r === L.x.COMPLETED ? G.default.h2qWpS : G.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(P.C, {
                                                className: w.fN,
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
                    let { isHovered: l, isClaiming: a, handleClaim: s, hasDiscoveryClick: i } = t,
                        r = (0, n.jsx)(R.$, {
                            variant: l || a ? "expressive" : "secondary",
                            size: "sm",
                            text: k.intl.string(G.default.WmfVjs),
                            loading: a,
                            onClick: s,
                        });
                    return e === L.x.COMPLETED || a ? r : i ? (0, n.jsx)(D._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: _, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        x = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(h.D, { className: f, ...x, onClick: o, "aria-label": l, children: p }),
                  !u && (0, n.jsx)(V, {}),
              ],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: f, ...x, children: p }), !u && (0, n.jsx)(V, {})],
          });
}
var q = l(652215),
    Q = l(653877),
    X = l(268920),
    $ = l(633217);
function Z() {
    return (0, n.jsx)("div", {
        className: Q.s,
        children: (0, n.jsx)(B.A, { src: $.A, fallbackImage: X.A, className: Q.Cb }),
    });
}
function J(e) {
    let { nitroIconColor: t = S.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.SY,
        children: [
            (0, n.jsx)(N.t, { size: "xs", color: t }),
            (0, n.jsx)(y.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function ee(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, M.Ay)(t),
        i = a.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, n.jsxs)("div", {
        className: Q.SZ,
        children: [
            (0, n.jsx)(Z, {}),
            (0, n.jsxs)("div", {
                className: Q.ZX,
                children: [
                    (0, n.jsx)(F.t, {
                        counterInnerClassName: i ? Q.F4 : void 0,
                        value: t,
                        onValueChange: q.tEg,
                        onValueReached: q.tEg,
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
                (0, n.jsx)(N.t, { size: "xxs", color: "white" }),
                (0, n.jsx)(y.E, { variant: "text-xs/semibold", color: "text-overlay-light", children: t }),
            ],
        });
    return null == l
        ? (0, n.jsx)("div", { className: Q.lh, children: a })
        : (0, n.jsx)(h.D, { className: i()(Q.lh, Q.w9), onClick: l, children: a });
}
function el(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: Q.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: Q.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(Q.DO, Q.VR) }),
                        (0, n.jsxs)("div", {
                            className: Q.hG,
                            children: [
                                (0, n.jsx)("div", { className: i()(Q.DO, Q.Iz) }),
                                (0, n.jsx)("div", { className: i()(Q.DO, Q.D_) }),
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
                                    className: Q.$b,
                                    children: [
                                        (0, n.jsx)(y.E, {
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
                              className: i()(Q.GN, Q.AZ),
                              children: [
                                  (0, n.jsx)(y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: k.intl.string(G.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: k.intl.string(G.default.XW2CuY),
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
                          className: i()(Q.re, { [Q.Oi]: u }),
                          children: (0, n.jsx)(j.w, { ...h, children: h.message }),
                      }),
            [h, u],
        );
    return (0, n.jsxs)("div", { className: Q.E6, "aria-busy": s, children: [m, d] });
}
function ea(e) {
    let { onQuestsClick: t, onShopClick: l } = e;
    return (0, n.jsxs)("div", {
        className: Q.W,
        children: [
            null != t &&
                (0, n.jsx)(R.$, {
                    text: "Quests",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: I.r, type: "icon" },
                    fullWidth: !0,
                    onClick: t,
                }),
            null != l &&
                (0, n.jsx)(R.$, {
                    text: "Shop",
                    variant: "secondary",
                    size: "md",
                    icon: { asset: U.U, type: "icon" },
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
        className: i()(Q.ql, Q.Ut),
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
    eC = l(617986),
    e_ = l(758836),
    eE = l(202541);
function eg(e) {
    let { analyticsLocations: t = [], shopTab: l = e_.G2.ORBS } = e;
    (0, eu.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function eA() {
    (0, eC.mA)({ fromContent: eh.u.ORBS_BALANCE_MENU });
}
function ef(e) {
    let { analyticsLocations: t = [] } = e;
    (0, ed.A)({ subscriptionTier: eE.pe.TIER_2, analyticsLocations: t });
}
let eL = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eg({ analyticsLocations: t, shopTab: e_.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eg({ analyticsLocations: t, shopTab: e_.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        ef({ analyticsLocations: t });
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
                      children: (0, n.jsx)(er.K, {
                          icon: ec.P,
                          "aria-label": k.intl.string(k.t.cpT0Cq),
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
                            (0, n.jsx)(y.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: ex.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(y.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function ev(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, eo.kn)([n], ep.m.ORB_WALLET, !0),
        m = a.useCallback(() => {
            ((0, p.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(ep.i.TAKE_ACTION),
                o());
        }, [i, u, r, o, l, s]),
        C = a.useCallback(() => {
            (r || u(ep.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: m, shouldHideCard: null == h && !r, onClose: C };
}
function eT(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: o,
            onCtaClick: h,
            onClose: u,
        } = ev(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    eg({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ei.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(eO, {
              title: k.intl.string(G.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: k.intl.string(G.default.qa1xyr),
              subTextDescription: k.intl.string(G.default.HACucK),
              buttonText: k.intl.string(G.default["7raRgL"]),
              buttonIcon: { asset: U.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eb = { asset: N.t, type: "icon" };
function eR(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: h,
            onCtaClick: u,
            onClose: C,
        } = ev(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    ef({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ei.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: _ } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
        })),
        E = a.useMemo(() => k.intl.format(G.default["Ba/7wO"], { multiplier: _ }), [_]);
    return null == _ || h
        ? null
        : (0, n.jsx)(eO, {
              title: k.intl.string(G.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: k.intl.string(G.default.FkfrRH),
              subTextDescription: E,
              buttonText: k.intl.string(G.default.U9UQJE),
              buttonIcon: eb,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: ex.ml,
          });
}
var eS = l(123576);
let eN = [
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
async function ey(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function ej(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eI(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = q.tEg,
        } = e,
        c = ej(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eT, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(eR, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eU(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eS.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eS.dW, eS.or), onClick: l, children: t });
}
function eM(e) {
    let { userHasPremium: t, orbBalance: l, hasErrorMessage: a, isLoading: s, hasNoChallenges: i } = e;
    return (0, n.jsx)(es, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(J, { text: k.intl.format(G.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eI({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(en, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: k.intl.format(G.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eU, { text: e }) }),
                  }
                : null,
            title: k.intl.string(G.default.H6Ny8N),
            badgeText: k.intl.format(t ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: 1.2 }),
            challenges: i ? [] : eN,
            onClaim: ey,
        }),
        orbWalletFooter: (0, n.jsx)(ea, {
            onQuestsClick: () => eA(),
            onShopClick: () => eg({ analyticsLocations: [] }),
        }),
    });
}
function eB(e) {
    return (0, n.jsx)(eM, { ...e, hasNoChallenges: !0 });
}
function eF() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, g.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(J, { text: k.intl.format(G.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eD() {
    return null != (0, o.bG)([A.A], () => A.A.getPremiumTypeSubscription()) ? (0, n.jsx)(eF, {}) : null;
}
function eH(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = q.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, v.z)({ shouldFetch: !0 }),
        h = (0, C.L)(eE.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: b.Ay.orbChallengesDisplayError,
        })),
        E = a.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === b.EB.CLAIM_CHALLENGE
                                  ? k.intl.string(G.default.FYb5rH)
                                  : k.intl.format(G.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eU, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        g = a.useCallback(
            () => (
                (0, p.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s(),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, questOrbMultiplierEligibilityType: l } = e;
                    null == t ? (0, em.x)() : (0, eC.gC)(t, l);
                })({ nitroGatedOrbMultiplier: u, questOrbMultiplierEligibilityType: h ? _.MA.NITRO : _.MA.UPSELL })
            ),
            [u, h, t, s],
        ),
        A = a.useMemo(
            () =>
                i.map((e) => {
                    let n = null != e.achievementDefinitionId ? eL[e.achievementDefinitionId] : null,
                        a = { analyticsLocations: l },
                        i =
                            null != n
                                ? () => {
                                      ((0, p.Y)({
                                          pageType: t,
                                          sectionType: d.A.ORB_WALLET,
                                          ctaObject: d.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          n(a),
                                          s());
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [i, l, t, s],
        );
    return (0, n.jsx)(en, {
        title: k.intl.string(G.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: E,
        challenges: A,
        onClaim: T.Xz,
        onClickBadge: g,
        badgeText: k.intl.format(h ? G.default.OHLdjq : G.default.WOMrJf, { multiplier: u }),
    });
}
function eP(e) {
    let { cardRef: t, analyticsPage: l = d.A.ORB_WALLET, onCloseWallet: s = q.tEg, isProfilePopout: i } = e,
        { balance: r } = (0, O.W)(),
        h = (0, x.H)({ location: "StatefulOrbWallet" }),
        u = (0, C.L)(eE.PremiumTypes.TIER_2),
        { analyticsLocations: _ } = (0, m.Ay)(d.A.ORB_WALLET);
    a.useEffect(() => {
        h && (0, T.eX)();
    }, [h]);
    let g = a.useCallback(() => {
            ((0, p.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eg({ analyticsLocations: _ }),
                s());
        }, [_, l, s]),
        A = a.useCallback(() => {
            ((0, p.Y)({ pageType: l, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                eA(),
                s());
        }, [l, s]),
        v = a.useMemo(() => ej(u, r), [u, r]),
        { challengesForOrbWallet: R, hasFetchedChallenges: S } = (0, o.cf)([b.Ay], () => ({
            challengesForOrbWallet: b.Ay.challengesForOrbWallet,
            hasFetchedChallenges: b.Ay.hasFetchedChallenges,
        })),
        N = a.useRef(!1);
    a.useEffect(() => {
        if (!S || N.current) return;
        let e = R.map((e) => e.achievementIdentifier),
            t = R.filter((e) => e.achievementStatus === L.x.COMPLETED).map((e) => e.achievementIdentifier);
        (f.default.track(q.HAw.ORB_WALLET_VIEWED, {
            location_stack: _,
            location_page: l,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: v,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (N.current = !0));
    }, [S, R, v, _, l]);
    let { pathname: y } = (0, c.zy)(),
        j = y.startsWith(q.BVt.COLLECTIBLES_SHOP),
        I = (0, E.p)(),
        U = a.useMemo(
            () =>
                i ? { onQuestsClick: A, onShopClick: g } : { onQuestsClick: I ? null : A, onShopClick: j ? null : g },
            [I, j, A, g, i],
        );
    return h
        ? (0, n.jsx)(es, {
              cardRef: t,
              orbBalance: r,
              headerTagsContent: (0, n.jsx)(eD, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eI({ userHasPremium: u, onClose: t, orbBalance: r, analyticsPage: l, onCloseWallet: s });
              },
              orbChallengesCard: (0, n.jsx)(eH, { analyticsPage: l, analyticsLocations: _, onCloseWallet: s }),
              orbWalletFooter: (0, n.jsx)(ea, { ...U }),
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
