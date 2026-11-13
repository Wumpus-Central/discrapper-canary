l.d(t, { FT: () => eG, Yc: () => ew, vG: () => eX, EA: () => eK });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(892227),
    c = l(806163),
    o = l(855986),
    h = l(939249),
    u = l(192308),
    d = l(265872),
    m = l(793574),
    C = l(688810),
    E = l(757036),
    g = l(369189),
    _ = l(622886),
    A = l(287809),
    f = l(166403),
    L = l(129230),
    p = l(124861),
    x = l(318346),
    b = l(362862),
    O = l(672619),
    v = l(923138),
    T = l(12510),
    y = l(673125),
    N = l(821609),
    R = l(646514),
    S = l(403581),
    j = l(834730),
    I = l(140735),
    U = l(683071),
    F = l(577473),
    M = l(34188),
    B = l(369606),
    W = l(28863),
    P = l(305866),
    D = l(475743),
    H = l(303136),
    k = l(975571),
    G = l(626031),
    w = l(320448),
    z = l(404778),
    V = l(318254),
    Y = l(742967),
    X = l(312653),
    K = l(792996),
    q = l(137484),
    J = l(427483);
function Q(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === p.x.COMPLETED || t === p.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(q.TK, { [q.AM]: a }),
            children: (0, n.jsx)(Y.x, { className: q.t9, webmAsset: J.A, animationState: l, assetAltText: "" }),
        });
    return a
        ? (0, n.jsxs)("div", {
              className: q.Zs,
              children: [(0, n.jsx)(I.A, { children: K.intl.string(X.default.k6h2J3) }), s],
          })
        : s;
}
function Z(e) {
    let { className: t } = e;
    return (0, n.jsx)(z.c, { className: i()(q.Fu, t) });
}
function $(e) {
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
        [E, g] = a.useState(!1),
        _ = null != o && r !== p.x.COMPLETED,
        A = i()(q.of, { [q.o4]: d, [q.D8]: m, [q.or]: _ }),
        f = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: q.Ub,
                    children: [
                        (0, n.jsx)(Q, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: q.Du,
                            children: [
                                (0, n.jsx)(j.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(j.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: K.intl.format(r === p.x.COMPLETED ? X.default.h2qWpS : X.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(V.OrbsIcon, {
                                                className: q.fN,
                                                size: "xxs",
                                                color: R.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: a, hasDiscoveryClick: s } = t,
                        i = (0, n.jsx)(N.$, {
                            variant: "expressive",
                            size: "sm",
                            text: K.intl.string(X.default.WmfVjs),
                            loading: l,
                            onClick: a,
                        });
                    return e === p.x.COMPLETED || l
                        ? i
                        : s
                          ? (0, n.jsx)(w.ChevronSmallRightIcon, { size: "sm", "aria-hidden": !0 })
                          : null;
                })(r, {
                    isHovered: m,
                    isClaiming: E,
                    handleClaim: async function () {
                        null != c && (g(!0), await c(t).finally(() => g(!1)));
                    },
                    hasDiscoveryClick: _,
                }),
            ],
        }),
        L = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return _
        ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.D, { className: A, ...L, onClick: o, children: f }), !u && (0, n.jsx)(Z, {})],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: A, ...L, children: f }), !u && (0, n.jsx)(Z, {})],
          });
}
var ee = l(652215),
    et = l(653877),
    el = l(268920),
    en = l(633217);
function ea() {
    return (0, n.jsx)("div", {
        className: et.s,
        children: (0, n.jsx)(H.A, { src: en.A, fallbackImage: el.A, className: et.Cb }),
    });
}
function es(e) {
    let { nitroIconColor: t = R.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: et.SY,
        children: [
            (0, n.jsx)(S.NitroWheelIcon, { size: "xs", color: t }),
            (0, n.jsx)(j.E, { variant: "body-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function ei(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, D.Ay)(t),
        i = a.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, n.jsxs)("div", {
        className: et.SZ,
        children: [
            (0, n.jsx)(ea, {}),
            (0, n.jsxs)("div", {
                className: et.ZX,
                children: [
                    (0, n.jsx)(I.A, {
                        children:
                            null == t
                                ? K.intl.string(K.t.cKwv4k)
                                : K.intl.formatToPlainString(K.t.zPaLL9, { balance: t }),
                    }),
                    (0, n.jsx)(G.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? et.F4 : void 0,
                        value: t,
                        onValueChange: ee.tEg,
                        onValueReached: ee.tEg,
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
function er(e) {
    let { text: t, accessibilityLabel: l, onClick: a } = e,
        s = null != l,
        r = (0, n.jsxs)(n.Fragment, {
            children: [
                s && (0, n.jsx)(I.A, { children: l }),
                (0, n.jsx)(S.NitroWheelIcon, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, n.jsx)(j.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == a
        ? (0, n.jsx)("div", { className: et.lh, children: r })
        : (0, n.jsx)(h.D, { className: i()(et.lh, et.w9), onClick: a, children: r });
}
function ec(e) {
    let { numRows: t = 3 } = e,
        l = a.useMemo(() => Array.from({ length: t }), [t]);
    return (0, n.jsx)("div", {
        className: et.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, n.jsxs)(
                "div",
                {
                    className: et.US,
                    children: [
                        (0, n.jsx)("div", { className: i()(et.DO, et.VR) }),
                        (0, n.jsxs)("div", {
                            className: et.A3,
                            children: [
                                (0, n.jsx)("div", { className: i()(et.DO, et.Iz) }),
                                (0, n.jsx)("div", { className: i()(et.DO, et.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function eo(e) {
    let {
            title: t,
            challenges: l,
            isLoading: s,
            onClaim: i,
            badgeText: r,
            badgeAccessibilityLabel: c,
            onClickBadge: o,
            inlineNoticeProps: h,
        } = e,
        u = l.length > 0,
        d = a.useMemo(
            () =>
                s && null == h
                    ? (0, n.jsx)(ec, { numRows: 3 })
                    : u
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsxs)("div", {
                                    className: et.$b,
                                    children: [
                                        (0, n.jsx)(j.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != r && (0, n.jsx)(er, { text: r, accessibilityLabel: c, onClick: o }),
                                    ],
                                }),
                                (0, n.jsx)("ul", {
                                    className: et.Up,
                                    children: l.map((e, t) =>
                                        (0, n.jsx)(
                                            "li",
                                            {
                                                className: et.tJ,
                                                children: (0, n.jsx)($, {
                                                    ...e,
                                                    onClaim: i,
                                                    isLastItem: t === l.length - 1,
                                                }),
                                            },
                                            e.achievementIdentifier,
                                        ),
                                    ),
                                }),
                            ],
                        })
                      : null != h
                        ? null
                        : (0, n.jsxs)("div", {
                              className: et.GN,
                              children: [
                                  (0, n.jsx)(j.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: K.intl.string(X.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: K.intl.string(X.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, u, t, r, c, o, l, h, i],
        ),
        m = a.useMemo(
            () => (null == h ? null : (0, n.jsx)("div", { className: et.re, children: (0, n.jsx)(U.w, { ...h }) })),
            [h],
        );
    return (0, n.jsxs)("div", { className: et.E6, "aria-busy": s, children: [m, d] });
}
function eh(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: a } = e;
    return (0, n.jsxs)("div", {
        className: et.VX,
        children: [
            (0, n.jsxs)("div", {
                className: et.W,
                children: [
                    null != t &&
                        (0, n.jsx)(N.$, {
                            text: K.intl.string(K.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: F.QuestsIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, n.jsx)(N.$, {
                            text: K.intl.string(K.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: M.ShopIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: et.RA,
                children: [
                    null != a &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(B.TrophyIcon, {
                                    size: "xs",
                                    color: R.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: K.intl.format(X.default.B5tZXw, { orbAmount: a }),
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, n.jsx)(j.E, {
                        variant: "body-xs/normal",
                        children: (0, n.jsx)(W.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: k.A.getArticleURL(ee.MVz.ORBS_WALLET),
                            children: K.intl.string(K.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eu(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: c,
            cardRef: o,
            returnRef: h,
        } = e,
        [u, d] = a.useState(!1);
    return (0, n.jsxs)(P.l, {
        className: i()(et.ql, et.Ut),
        ref: o,
        returnRef: h,
        "aria-label": K.intl.string(X.default.XKj5L9),
        children: [
            (0, n.jsxs)("div", {
                className: et.hG,
                children: [
                    (0, n.jsx)(ei, { orbBalance: t, headerTagsContent: l }),
                    u ? null : s({ onClose: () => d(!0) }),
                ],
            }),
            (0, n.jsx)("div", { className: et.BA, children: r }),
            c,
        ],
    });
}
var ed = l(554146),
    em = l(408278),
    eC = l(789645),
    eE = l(263775),
    eg = l(696292),
    e_ = l(969935),
    eA = l(778705),
    ef = l(87719),
    eL = l(576761),
    ep = l(321538),
    ex = l(758836),
    eb = l(682901);
function eO(e) {
    let { analyticsLocations: t = [], shopTab: l = ex.G2.ORBS } = e;
    (0, e_.Cz)({ tab: l, analyticsLocations: t, analyticsSource: m.A.ORBS_BALANCE_MENU });
}
function ev() {
    (0, ep.mA)({ fromContent: eg.u.ORBS_BALANCE_MENU });
}
function eT(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eA.A)({ subscriptionTier: eb.pe.TIER_2, analyticsLocations: t });
}
let ey = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eO({ analyticsLocations: t, shopTab: ex.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eO({ analyticsLocations: t, shopTab: ex.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        eT({ analyticsLocations: t });
    },
};
var eN = l(49999),
    eR = l(600676);
function eS(e) {
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
        className: i()(eR.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: eR.Fx,
                      children: (0, n.jsx)(em.K, {
                          icon: eC.XSmallIcon,
                          "aria-label": K.intl.string(K.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eR.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: eR.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(j.E, {
                                variant: "body-md/semibold",
                                color: "text-default",
                                className: eR.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(j.E, { variant: "body-xs/medium", color: "text-default", children: s }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(N.$, { text: r, size: "sm", icon: c, onClick: h, variant: o, fullWidth: !0 }),
        ],
    });
}
function ej(e, t) {
    let { ctaClickHandler: l, dismissibleContent: n, ctaObject: s } = t,
        { analyticsPage: i = m.A.ORB_WALLET, forceVisible: r, onClose: c, onCloseWallet: o } = e,
        [h, u] = (0, eE.kn)([n], { groupName: eN.m.ORB_WALLET, bypassAutoDismiss: !0 }),
        d = a.useCallback(() => {
            ((0, x.Y)({ pageType: i, sectionType: m.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
                l(),
                r || u(eN.i.TAKE_ACTION),
                o("navigation"));
        }, [i, u, r, o, l, s]),
        C = a.useCallback(() => {
            (r || u(eN.i.DISMISS), c());
        }, [r, u, c]);
    return { onCtaClick: d, shouldHideCard: null == h && !r, onClose: C };
}
function eI(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = m.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, C.Ay)(m.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: o,
            onCtaClick: h,
            onClose: u,
        } = ej(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    eO({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ed.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: m.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(eS, {
              title: K.intl.string(X.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: K.intl.string(X.default.qa1xyr),
              subTextDescription: K.intl.string(X.default.HACucK),
              buttonText: K.intl.string(X.default["7raRgL"]),
              buttonIcon: { asset: M.ShopIcon, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eU = { asset: S.NitroWheelIcon, type: "icon" };
function eF(e) {
    let { onClose: t, onCloseWallet: s, analyticsPage: i = m.A.ORB_WALLET, forceVisible: r = !1 } = e,
        { analyticsLocations: c } = (0, C.Ay)(m.A.ORB_WALLET_PRIMARY_CARD),
        {
            shouldHideCard: h,
            onCtaClick: u,
            onClose: d,
        } = ej(
            { analyticsPage: i, forceVisible: r, onClose: t, onCloseWallet: s },
            {
                ctaClickHandler: a.useCallback(() => {
                    eT({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ed.M.ORB_WALLET_NITRO_UPSELL_CTA_CARD,
                ctaObject: m.A.ORB_WALLET_PRIMARY_CARD_NITRO_UPSELL_CTA,
            },
        ),
        { nitroGatedOrbMultiplier: E } = (0, o.cf)([y.Ay], () => ({
            nitroGatedOrbMultiplier: y.Ay.nitroGatedOrbMultiplier,
        })),
        g = a.useMemo(() => K.intl.format(X.default["Ba/7wO"], { multiplier: E }), [E]);
    return null == E || h
        ? null
        : (0, n.jsx)(eS, {
              title: K.intl.string(X.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: K.intl.string(X.default.FkfrRH),
              subTextDescription: g,
              buttonText: K.intl.string(X.default.U9UQJE),
              buttonIcon: eU,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: d,
              className: eR.ml,
          });
}
var eM = l(123576);
let eB = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: p.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: p.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: p.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eW(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eP(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eD(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = ee.tEg,
        } = e,
        c = eP(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eI, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(eF, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function eH(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eM.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eM.dW, eM.or), onClick: l, children: t });
}
function ek(e, t) {
    return K.intl.formatToPlainString(e ? X.default.p9PPYD : X.default["1JZfaU"], { multiplier: t });
}
function eG(e) {
    let {
        userHasPremium: t,
        orbBalance: l,
        hasErrorMessage: a,
        isLoading: s,
        hasNoChallenges: i,
        totalOrbsRedeemed: r = 15600,
    } = e;
    return (0, n.jsx)(eu, {
        orbBalance: l,
        headerTagsContent: t
            ? (0, n.jsx)(es, { text: K.intl.format(X.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eD({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(eo, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: K.intl.format(X.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(eH, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: K.intl.string(X.default.H6Ny8N),
            badgeText: K.intl.format(t ? X.default.OHLdjq : X.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: ek(t, 1.2),
            challenges: i ? [] : eB,
            onClaim: eW,
        }),
        orbWalletFooter: (0, n.jsx)(eh, {
            onQuestsClick: () => ev(),
            onShopClick: () => eO({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function ew(e) {
    return (0, n.jsx)(eG, { ...e, hasNoChallenges: !0 });
}
function ez() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, _.F)();
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(es, { text: K.intl.format(X.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eV() {
    return null != (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()) ? (0, n.jsx)(ez, {}) : null;
}
function eY(e) {
    let { analyticsPage: t = m.A.ORB_WALLET, analyticsLocations: s = [], onCloseWallet: i = ee.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: c, refetch: h } = (0, v.z)({ shouldFetch: !0 }),
        d = (0, E.L)(eb.PremiumTypes.TIER_2),
        C = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: g, orbChallengesDisplayError: _ } = (0, o.cf)([y.Ay], () => ({
            nitroGatedOrbMultiplier: y.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: y.Ay.orbChallengesDisplayError,
        })),
        f = null != C && !C.isClaimed(),
        L = a.useMemo(
            () =>
                null != _
                    ? {
                          type: "warning",
                          message:
                              _.errorType === y.EB.CLAIM_CHALLENGE
                                  ? K.intl.string(X.default.FYb5rH)
                                  : K.intl.format(X.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(eH, { text: e, onClick: h }),
                                    }),
                          role: "status",
                      }
                    : f
                      ? { type: "info", message: K.intl.string(K.t.qxk9zo), role: "status" }
                      : null,
            [_, h, f],
        ),
        p = a.useCallback(
            () => (
                (0, x.Y)({ pageType: t, sectionType: m.A.ORB_WALLET, ctaObject: m.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, ef.x)();
                    let n = l ? eL.MA.NITRO : eL.MA.UPSELL,
                        a = l
                            ? { customSubtitle: K.intl.format(X.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, ep.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: g, userIsPremiumTier2: d })
            ),
            [g, d, t, i],
        ),
        b = a.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? ey[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: s },
                        a =
                            null != l
                                ? () => {
                                      ((0, x.Y)({
                                          pageType: t,
                                          sectionType: m.A.ORB_WALLET,
                                          ctaObject: m.A.ORB_CHALLENGE_DISCOVERY_CLICK,
                                      }),
                                          l(n),
                                          i("navigation"));
                                  }
                                : void 0;
                    return { ...e, onDiscoveryClick: a };
                }),
            [r, s, t, i],
        ),
        O = a.useCallback(() => {
            (0, u.mM)(async () => {
                let { default: e } = await Promise.all([l.e(671464), l.e(112206), l.e(709998), l.e(480388)]).then(
                    l.bind(l, 195759),
                );
                return (t) => {
                    let { onClose: l, ...a } = t;
                    return (0, n.jsx)(e, { ...a, onClose: l, body: K.intl.string(K.t["gP/vPe"]) });
                };
            });
        }, []),
        N = a.useCallback((e) => (f ? (O(), Promise.resolve()) : (0, T.Xz)(e)), [f, O]);
    return (0, n.jsx)(eo, {
        title: K.intl.string(X.default.H6Ny8N),
        isLoading: !c,
        inlineNoticeProps: L,
        challenges: b,
        onClaim: N,
        onClickBadge: p,
        badgeText: K.intl.format(d ? X.default.OHLdjq : X.default.WOMrJf, { multiplier: g }),
        badgeAccessibilityLabel: ek(d, g),
    });
}
function eX(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: s = m.A.ORB_WALLET,
            onCloseWallet: i = ee.tEg,
            isProfilePopout: r,
        } = e,
        { balance: h } = (0, O.W0)(),
        u = (0, b.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: d } = (0, O.rQ)({ disableFetch: !u }),
        _ = (0, E.L)(eb.PremiumTypes.TIER_2),
        { analyticsLocations: A } = (0, C.Ay)(m.A.ORB_WALLET);
    a.useEffect(() => {
        u && (0, T.eX)();
    }, [u]);
    let f = a.useCallback(() => {
            ((0, x.Y)({ pageType: s, sectionType: m.A.ORB_WALLET_FOOTER, ctaObject: m.A.ORB_WALLET_SHOP_CTA }),
                eO({ analyticsLocations: A }),
                i("navigation"));
        }, [A, s, i]),
        v = a.useCallback(() => {
            ((0, x.Y)({ pageType: s, sectionType: m.A.ORB_WALLET_FOOTER, ctaObject: m.A.ORB_WALLET_QUEST_HOME_CTA }),
                ev(),
                i("navigation"));
        }, [s, i]),
        N = a.useMemo(() => eP(_, h), [_, h]),
        { challengesForOrbWallet: R, hasFetchedChallenges: S } = (0, o.cf)([y.Ay], () => ({
            challengesForOrbWallet: y.Ay.challengesForOrbWallet,
            hasFetchedChallenges: y.Ay.hasFetchedChallenges,
        })),
        j = a.useRef(!1);
    a.useEffect(() => {
        if (!S || j.current) return;
        let e = R.map((e) => e.achievementIdentifier),
            t = R.filter((e) => e.achievementStatus === p.x.COMPLETED).map((e) => e.achievementIdentifier);
        (L.default.track(ee.HAw.ORB_WALLET_VIEWED, {
            location_stack: A,
            location_page: s,
            location_section: m.A.ORB_WALLET,
            location_object: m.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (j.current = !0));
    }, [S, R, N, A, s]);
    let { pathname: I } = (0, c.zy)(),
        U = I.startsWith(ee.BVt.COLLECTIBLES_SHOP),
        F = (0, g.p)(),
        M = a.useMemo(
            () =>
                r ? { onQuestsClick: v, onShopClick: f } : { onQuestsClick: F ? null : v, onShopClick: U ? null : f },
            [F, U, v, f, r],
        );
    return u
        ? (0, n.jsx)(eu, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, n.jsx)(eV, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eD({ userHasPremium: _, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, n.jsx)(eY, { analyticsPage: s, analyticsLocations: A, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(eh, { ...M, totalOrbsRedeemed: d }),
          })
        : null;
}
function eK(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = a.useCallback(
            () => (0, n.jsx)(eX, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
            [t, l, r, c],
        ),
        h = a.useCallback(
            (e, t) => {
                "user:escape" === t && null != c && c("direct_close");
            },
            [c],
        );
    return (0, n.jsx)(d.Y, {
        fixed: !0,
        autoInvert: !1,
        renderPopout: o,
        position: "bottom",
        align: "right",
        shouldShow: i,
        onRequestClose: h,
        animation: d.Y.Animation.NONE,
        targetElementRef: s,
        children: () => null,
    });
}
