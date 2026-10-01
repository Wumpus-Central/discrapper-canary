l.d(t, { Yc: () => ek, vG: () => eV, FT: () => eH, EA: () => eY });
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
    C = l(757036),
    E = l(369189),
    _ = l(366505),
    g = l(166403),
    A = l(174459),
    f = l(124861),
    x = l(318346),
    p = l(362862),
    L = l(478996),
    v = l(923138),
    O = l(12510),
    b = l(673125),
    R = l(821609),
    T = l(661531),
    N = l(403581),
    S = l(834730),
    j = l(140735),
    y = l(683071),
    I = l(577473),
    U = l(34188),
    M = l(369606),
    F = l(28863),
    B = l(305866),
    D = l(475743),
    P = l(303136),
    W = l(975571),
    H = l(626031),
    k = l(320448),
    w = l(404778),
    G = l(318254),
    z = l(742967),
    V = l(570165),
    Y = l(375708),
    K = l(137484),
    X = l(427483);
function q(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === f.x.COMPLETED || t === f.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(K.TK, { [K.AM]: n }),
            children: (0, a.jsx)(z.x, { className: K.t9, webmAsset: X.A, animationState: l, assetAltText: "" }),
        });
    return n
        ? (0, a.jsxs)("div", {
              className: K.Zs,
              children: [(0, a.jsx)(j.A, { children: Y.intl.string(V.default.k6h2J3) }), s],
          })
        : s;
}
function Q(e) {
    let { className: t } = e;
    return (0, a.jsx)(w.c, { className: i()(K.Fu, t) });
}
function Z(e) {
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
        [m, C] = n.useState(!1),
        [E, _] = n.useState(!1);
    async function g() {
        null != c && (_(!0), await c(t).finally(() => _(!1)));
    }
    let A = null != o && r !== f.x.COMPLETED,
        x = i()(K.of, { [K.o4]: d, [K.D8]: m, [K.or]: A }),
        p = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: K.Ub,
                    children: [
                        (0, a.jsx)(q, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: K.Du,
                            children: [
                                (0, a.jsx)(S.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(S.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: Y.intl.format(r === f.x.COMPLETED ? V.default.h2qWpS : V.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(G.C, {
                                                className: K.fN,
                                                size: "xxs",
                                                color: T.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: n, hasDiscoveryClick: s } = t,
                        i = (0, a.jsx)(R.$, {
                            variant: "expressive",
                            size: "sm",
                            text: Y.intl.string(V.default.WmfVjs),
                            loading: l,
                            onClick: n,
                        });
                    return e === f.x.COMPLETED || l ? i : s ? (0, a.jsx)(k._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: E, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        L = n.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(h.D, { className: x, ...L, onClick: o, children: p }), !u && (0, a.jsx)(Q, {})],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: x, ...L, children: p }), !u && (0, a.jsx)(Q, {})],
          });
}
var J = l(652215),
    $ = l(653877),
    ee = l(268920),
    et = l(633217);
function el() {
    return (0, a.jsx)("div", {
        className: $.s,
        children: (0, a.jsx)(P.A, { src: et.A, fallbackImage: ee.A, className: $.Cb }),
    });
}
function ea(e) {
    let { nitroIconColor: t = T.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: $.SY,
        children: [
            (0, a.jsx)(N.t, { size: "xs", color: t }),
            (0, a.jsx)(S.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function en(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, D.Ay)(t),
        i = n.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, a.jsxs)("div", {
        className: $.SZ,
        children: [
            (0, a.jsx)(el, {}),
            (0, a.jsxs)("div", {
                className: $.ZX,
                children: [
                    (0, a.jsx)(j.A, {
                        children:
                            null == t
                                ? Y.intl.string(Y.t.cKwv4k)
                                : Y.intl.formatToPlainString(Y.t.zPaLL9, { balance: t }),
                    }),
                    (0, a.jsx)(H.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? $.F4 : void 0,
                        value: t,
                        onValueChange: J.tEg,
                        onValueReached: J.tEg,
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
function es(e) {
    let { text: t, accessibilityLabel: l, onClick: n } = e,
        s = null != l,
        r = (0, a.jsxs)(a.Fragment, {
            children: [
                s && (0, a.jsx)(j.A, { children: l }),
                (0, a.jsx)(N.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, a.jsx)(S.E, {
                    variant: "text-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: $.lh, children: r })
        : (0, a.jsx)(h.D, { className: i()($.lh, $.w9), onClick: n, children: r });
}
function ei(e) {
    let { numRows: t = 3 } = e,
        l = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: $.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: $.US,
                    children: [
                        (0, a.jsx)("div", { className: i()($.DO, $.VR) }),
                        (0, a.jsxs)("div", {
                            className: $.A3,
                            children: [
                                (0, a.jsx)("div", { className: i()($.DO, $.Iz) }),
                                (0, a.jsx)("div", { className: i()($.DO, $.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function er(e) {
    let {
            title: t,
            challenges: l,
            isLoading: s,
            onClaim: r,
            badgeText: c,
            badgeAccessibilityLabel: o,
            onClickBadge: h,
            inlineNoticeProps: u,
        } = e,
        d = l.length > 0,
        m = n.useMemo(
            () =>
                s && null == u
                    ? (0, a.jsx)(ei, { numRows: 3 })
                    : d
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: $.$b,
                                    children: [
                                        (0, a.jsx)(S.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != c && (0, a.jsx)(es, { text: c, accessibilityLabel: o, onClick: h }),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    className: $.Up,
                                    children: l.map((e, t) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                className: $.tJ,
                                                children: (0, a.jsx)(Z, {
                                                    ...e,
                                                    onClaim: r,
                                                    isLastItem: t === l.length - 1,
                                                }),
                                            },
                                            e.achievementIdentifier,
                                        ),
                                    ),
                                }),
                            ],
                        })
                      : null != u
                        ? null
                        : (0, a.jsxs)("div", {
                              className: i()($.GN, $.AZ),
                              children: [
                                  (0, a.jsx)(S.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: Y.intl.string(V.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(S.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Y.intl.string(V.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, d, t, c, o, h, l, u, r],
        ),
        C = n.useMemo(
            () =>
                null == u
                    ? null
                    : (0, a.jsx)("div", { className: $.re, children: (0, a.jsx)(y.w, { ...u, children: u.message }) }),
            [u],
        );
    return (0, a.jsxs)("div", { className: $.E6, "aria-busy": s, children: [C, m] });
}
function ec(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: n } = e;
    return (0, a.jsxs)("div", {
        className: $.VX,
        children: [
            (0, a.jsxs)("div", {
                className: $.W,
                children: [
                    null != t &&
                        (0, a.jsx)(R.$, {
                            text: "Quests",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: I.r, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, a.jsx)(R.$, {
                            text: "Shop",
                            variant: "secondary",
                            size: "md",
                            icon: { asset: U.U, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: $.RA,
                children: [
                    null != n &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(M.TrophyIcon, {
                                    size: "xs",
                                    color: T.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: Y.intl.format(V.default.B5tZXw, { orbAmount: n }),
                                }),
                                (0, a.jsx)(S.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, a.jsx)(S.E, {
                        variant: "text-xs/normal",
                        children: (0, a.jsx)(F.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: W.A.getArticleURL(J.MVz.ORBS_WALLET),
                            children: Y.intl.string(Y.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eo(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
            returnRef: h,
        } = e,
        [u, d] = n.useState(!1);
    return (0, a.jsxs)(B.l, {
        className: i()($.ql, $.Ut),
        ref: o,
        returnRef: h,
        "aria-label": Y.intl.string(V.default.XKj5L9),
        children: [
            (0, a.jsxs)("div", {
                className: $.hG,
                children: [
                    (0, a.jsx)(en, { orbBalance: t, headerTagsContent: l }),
                    u ? null : s({ onClose: () => d(!0) }),
                ],
            }),
            (0, a.jsx)("div", { className: $.BA, children: r }),
            c,
        ],
    });
}
var eh = l(554146),
    eu = l(408278),
    ed = l(789645),
    em = l(131607),
    eC = l(696292),
    eE = l(815996),
    e_ = l(75678),
    eg = l(87719),
    eA = l(576761),
    ef = l(617986),
    ex = l(758836),
    ep = l(202541);
function eL(e) {
    let { analyticsLocations: t = [], shopTab: l = ex.G2.ORBS } = e;
    (0, eE.Cz)({ tab: l, analyticsLocations: t, analyticsSource: d.A.ORBS_BALANCE_MENU });
}
function ev() {
    (0, ef.mA)({ fromContent: eC.u.ORBS_BALANCE_MENU });
}
function eO(e) {
    let { analyticsLocations: t = [] } = e;
    (0, e_.A)({ subscriptionTier: ep.pe.TIER_2, analyticsLocations: t });
}
let eb = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eL({ analyticsLocations: t, shopTab: ex.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eL({ analyticsLocations: t, shopTab: ex.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        eO({ analyticsLocations: t });
    },
};
var eR = l(49999),
    eT = l(600676);
function eN(e) {
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
        className: i()(eT.Vm, d),
        children: [
            null != u
                ? (0, a.jsx)("div", {
                      className: eT.Fx,
                      children: (0, a.jsx)(eu.K, {
                          icon: ed.P,
                          "aria-label": Y.intl.string(Y.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, a.jsxs)("div", {
                className: eT.iH,
                children: [
                    null != l && (0, a.jsx)("img", { alt: n, src: l, className: eT.db }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsx)(S.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: eT.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, a.jsx)(S.E, { variant: "text-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(R.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function eS(e, t) {
    let { ctaClickHandler: l, dismissibleContent: a, ctaObject: s } = t,
        { analyticsPage: i = d.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, em.kn)([a], eR.m.ORB_WALLET, !0),
        m = n.useCallback(() => {
            ((0, x.Y)({ pageType: i, sectionType: d.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(eR.i.TAKE_ACTION),
                o("navigation"));
        }, [i, u, r, o, l, s]),
        C = n.useCallback(() => {
            (r || u(eR.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: m, shouldHideCard: null == h && !r, onClose: C };
}
function ej(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: o,
            onCtaClick: h,
            onClose: u,
        } = eS(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: n.useCallback(() => {
                    eL({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: eh.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, a.jsx)(eN, {
              title: Y.intl.string(V.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: Y.intl.string(V.default.qa1xyr),
              subTextDescription: Y.intl.string(V.default.HACucK),
              buttonText: Y.intl.string(V.default["7raRgL"]),
              buttonIcon: { asset: U.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let ey = { asset: N.t, type: "icon" };
function eI(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = d.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, m.Ay)(d.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: h,
            onCtaClick: u,
            onClose: C,
        } = eS(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: n.useCallback(() => {
                    eO({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: eh.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: d.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: E } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
        })),
        _ = n.useMemo(() => Y.intl.format(V.default["Ba/7wO"], { multiplier: E }), [E]);
    return null == E || h
        ? null
        : (0, a.jsx)(eN, {
              title: Y.intl.string(V.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: Y.intl.string(V.default.FkfrRH),
              subTextDescription: _,
              buttonText: Y.intl.string(V.default.U9UQJE),
              buttonIcon: ey,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: C,
              className: eT.ml,
          });
}
var eU = l(123576);
let eM = [
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
async function eF(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eB(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eD(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: n,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = J.tEg,
        } = e,
        c = eB(t, n);
    return "shop_orbs" === c
        ? (0, a.jsx)(ej, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, a.jsx)(eI, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eP(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, a.jsx)("span", { className: eU.dW, children: t })
        : (0, a.jsx)(h.D, { className: i()(eU.dW, eU.or), onClick: l, children: t });
}
function eW(e, t) {
    return Y.intl.formatToPlainString(e ? V.default.p9PPYD : V.default["1JZfaU"], { multiplier: t });
}
function eH(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: n,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, a.jsx)(eo, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, a.jsx)(ea, { text: Y.intl.format(V.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: a } = e;
            return eD({ userHasPremium: t, onClose: a, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, a.jsx)(er, {
            isLoading: s,
            inlineNoticeProps: n
                ? {
                      type: "warning",
                      message: Y.intl.format(V.default.ggLzeg, { underlineHook: (e) => (0, a.jsx)(eP, { text: e }) }),
                  }
                : null,
            title: Y.intl.string(V.default.H6Ny8N),
            badgeText: Y.intl.format(t ? V.default.OHLdjq : V.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: eW(t, 1.2),
            challenges: i ? [] : eM,
            onClaim: eF,
        }),
        orbWalletFooter: (0, a.jsx)(ec, {
            onQuestsClick: () => ev(),
            onShopClick: () => eL({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function ek(e) {
    return (0, a.jsx)(eH, { ...e, hasNoChallenges: !0 });
}
function ew() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)({ location: "OrbWallet" });
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, a.jsx)(ea, { text: Y.intl.format(V.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eG() {
    return null != (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()) ? (0, a.jsx)(ew, {}) : null;
}
function ez(e) {
    let { analyticsPage: t = d.A.ORB_WALLET, analyticsLocations: l = [], onCloseWallet: s = J.tEg } = e,
        { challengesForOrbWallet: i, hasFetchedChallenges: r, refetch: c } = (0, v.z)({ shouldFetch: !0 }),
        h = (0, C.L)(ep.PremiumTypes.TIER_2),
        { nitroGatedOrbMultiplier: u, orbChallengesDisplayError: m } = (0, o.cf)([b.Ay], () => ({
            nitroGatedOrbMultiplier: b.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: b.Ay.orbChallengesDisplayError,
        })),
        E = n.useMemo(
            () =>
                null != m
                    ? {
                          type: "warning",
                          message:
                              m.errorType === b.EB.CLAIM_CHALLENGE
                                  ? Y.intl.string(V.default.FYb5rH)
                                  : Y.intl.format(V.default.ggLzeg, {
                                        underlineHook: (e) => (0, a.jsx)(eP, { text: e, onClick: c }),
                                    }),
                      }
                    : null,
            [m, c],
        ),
        _ = n.useCallback(
            () => (
                (0, x.Y)({ pageType: t, sectionType: d.A.ORB_WALLET, ctaObject: d.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                s("navigation"),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, eg.x)();
                    let a = l ? eA.MA.NITRO : eA.MA.UPSELL,
                        n = l
                            ? { customSubtitle: Y.intl.format(V.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, ef.gC)(t, a, n);
                })({ nitroGatedOrbMultiplier: u, userIsPremiumTier2: h })
            ),
            [u, h, t, s],
        ),
        g = n.useMemo(
            () =>
                i.map((e) => {
                    let a = null != e.achievementDefinitionId ? eb[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: l },
                        i =
                            null != a
                                ? () => {
                                      ((0, x.Y)({
                                          pageType: t,
                                          sectionType: d.A.ORB_WALLET,
                                          ctaObject: d.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          a(n),
                                          s("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: i };
                }),
            [i, l, t, s],
        );
    return (0, a.jsx)(er, {
        title: Y.intl.string(V.default.H6Ny8N),
        isLoading: !r,
        inlineNoticeProps: E,
        challenges: g,
        onClaim: O.Xz,
        onClickBadge: _,
        badgeText: Y.intl.format(h ? V.default.OHLdjq : V.default.WOMrJf, { multiplier: u }),
        badgeAccessibilityLabel: eW(h, u),
    });
}
function eV(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: s = d.A.ORB_WALLET,
            onCloseWallet: i = J.tEg,
            isProfilePopout: r,
        } = e,
        { balance: h } = (0, L.W0)(),
        u = (0, p.H)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: _ } = (0, L.rQ)({ disableFetch: !u }),
        g = (0, C.L)(ep.PremiumTypes.TIER_2),
        { analyticsLocations: v } = (0, m.Ay)(d.A.ORB_WALLET);
    n.useEffect(() => {
        u && (0, O.eX)();
    }, [u]);
    let R = n.useCallback(() => {
            ((0, x.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_SHOP_CTA }),
                eL({ analyticsLocations: v }),
                i("navigation"));
        }, [v, s, i]),
        T = n.useCallback(() => {
            ((0, x.Y)({ pageType: s, sectionType: d.A.ORB_WALLET_FOOTER, ctaObject: d.A.ORB_WALLET_QUEST_HOME_CTA }),
                ev(),
                i("navigation"));
        }, [s, i]),
        N = n.useMemo(() => eB(g, h), [g, h]),
        { challengesForOrbWallet: S, hasFetchedChallenges: j } = (0, o.cf)([b.Ay], () => ({
            challengesForOrbWallet: b.Ay.challengesForOrbWallet,
            hasFetchedChallenges: b.Ay.hasFetchedChallenges,
        })),
        y = n.useRef(!1);
    n.useEffect(() => {
        if (!j || y.current) return;
        let e = S.map((e) => e.achievementIdentifier),
            t = S.filter((e) => e.achievementStatus === f.x.COMPLETED).map((e) => e.achievementIdentifier);
        (A.default.track(J.HAw.ORB_WALLET_VIEWED, {
            location_stack: v,
            location_page: s,
            location_section: d.A.ORB_WALLET,
            location_object: d.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (y.current = !0));
    }, [j, S, N, v, s]);
    let { pathname: I } = (0, c.zy)(),
        U = I.startsWith(J.BVt.COLLECTIBLES_SHOP),
        M = (0, E.p)(),
        F = n.useMemo(
            () =>
                r ? { onQuestsClick: T, onShopClick: R } : { onQuestsClick: M ? null : T, onShopClick: U ? null : R },
            [M, U, T, R, r],
        );
    return u
        ? (0, a.jsx)(eo, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, a.jsx)(eG, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eD({ userHasPremium: g, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, a.jsx)(ez, { analyticsPage: s, analyticsLocations: v, onCloseWallet: i }),
              orbWalletFooter: (0, a.jsx)(ec, { ...F, totalOrbsRedeemed: _ }),
          })
        : null;
}
function eY(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = n.useCallback(
            () => (0, a.jsx)(eV, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
            [t, l, r, c],
        ),
        h = n.useCallback(
            (e, t) => {
                "user:escape" === t && null != c && c("direct_close");
            },
            [c],
        );
    return (0, a.jsx)(u.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: o,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: h,
        animation: u.Y.Animation.NONE,
        targetElementRef: s,
        children: () => null,
    });
}
