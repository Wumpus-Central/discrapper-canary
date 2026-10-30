l.d(t, { Yc: () => ew, vG: () => eK, FT: () => eG, EA: () => eX });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(892227),
    c = l(806163),
    o = l(17928),
    h = l(939249),
    u = l(192308),
    d = l(265872),
    m = l(793574),
    C = l(688810),
    E = l(757036),
    _ = l(369189),
    g = l(366505),
    A = l(287809),
    f = l(166403),
    p = l(174459),
    x = l(124861),
    L = l(318346),
    v = l(362862),
    b = l(478996),
    O = l(923138),
    T = l(12510),
    R = l(673125),
    N = l(821609),
    y = l(661531),
    S = l(403581),
    j = l(834730),
    I = l(140735),
    U = l(683071),
    M = l(577473),
    F = l(34188),
    B = l(369606),
    P = l(28863),
    D = l(305866),
    W = l(475743),
    k = l(303136),
    H = l(975571),
    G = l(626031),
    w = l(320448),
    z = l(404778),
    V = l(318254),
    Y = l(742967),
    K = l(465193),
    X = l(105292),
    q = l(137484),
    Q = l(427483);
function J(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        a = t === x.x.COMPLETED || t === x.x.CLAIMED,
        s = (0, n.jsx)("div", {
            className: i()(q.TK, { [q.AM]: a }),
            children: (0, n.jsx)(Y.x, { className: q.t9, webmAsset: Q.A, animationState: l, assetAltText: "" }),
        });
    return a
        ? (0, n.jsxs)("div", {
              className: q.Zs,
              children: [(0, n.jsx)(I.A, { children: X.intl.string(K.default.k6h2J3) }), s],
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
        [E, _] = a.useState(!1);
    async function g() {
        null != c && (_(!0), await c(t).finally(() => _(!1)));
    }
    let A = null != o && r !== x.x.COMPLETED,
        f = i()(q.of, { [q.o4]: d, [q.D8]: m, [q.or]: A }),
        p = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: q.Ub,
                    children: [
                        (0, n.jsx)(J, { achievementStatus: r, animationState: m ? "on" : "off" }),
                        (0, n.jsxs)("div", {
                            className: q.Du,
                            children: [
                                (0, n.jsx)(j.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: X.intl.format(r === x.x.COMPLETED ? K.default.h2qWpS : K.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, n.jsx)(V.C, {
                                                className: q.fN,
                                                size: "xxs",
                                                color: y.A.colors.ICON_SUBTLE,
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
                            text: X.intl.string(K.default.WmfVjs),
                            loading: l,
                            onClick: a,
                        });
                    return e === x.x.COMPLETED || l ? i : s ? (0, n.jsx)(w._, { size: "sm", "aria-hidden": !0 }) : null;
                })(r, { isHovered: m, isClaiming: E, handleClaim: g, hasDiscoveryClick: A }),
            ],
        }),
        L = a.useMemo(() => ({ onMouseEnter: () => C(!0), onMouseLeave: () => C(!1) }), []);
    return A
        ? (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.D, { className: f, ...L, onClick: o, children: p }), !u && (0, n.jsx)(Z, {})],
          })
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("div", { className: f, ...L, children: p }), !u && (0, n.jsx)(Z, {})],
          });
}
var ee = l(652215),
    et = l(653877),
    el = l(268920),
    en = l(633217);
function ea() {
    return (0, n.jsx)("div", {
        className: et.s,
        children: (0, n.jsx)(k.A, { src: en.A, fallbackImage: el.A, className: et.Cb }),
    });
}
function es(e) {
    let { nitroIconColor: t = y.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, n.jsxs)("div", {
        className: et.SY,
        children: [
            (0, n.jsx)(S.t, { size: "xs", color: t }),
            (0, n.jsx)(j.E, { variant: "text-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
function ei(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, W.Ay)(t),
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
                                ? X.intl.string(X.t.cKwv4k)
                                : X.intl.formatToPlainString(X.t.zPaLL9, { balance: t }),
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
                (0, n.jsx)(S.t, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, n.jsx)(j.E, {
                    variant: "text-xs/semibold",
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
                                            variant: "text-xs/medium",
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
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: X.intl.string(K.default.xOP5OP),
                                  }),
                                  (0, n.jsx)(j.E, {
                                      variant: "experimental/body-xs/normal",
                                      color: "text-subtle",
                                      children: X.intl.string(K.default.XW2CuY),
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
                            text: X.intl.string(X.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: M.r, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, n.jsx)(N.$, {
                            text: X.intl.string(X.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: F.U, type: "icon" },
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
                                    color: y.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    children: X.intl.format(K.default.B5tZXw, { orbAmount: a }),
                                }),
                                (0, n.jsx)(j.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, n.jsx)(j.E, {
                        variant: "text-xs/normal",
                        children: (0, n.jsx)(P.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: H.A.getArticleURL(ee.MVz.ORBS_WALLET),
                            children: X.intl.string(X.t["5qZv9E"]),
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
    return (0, n.jsxs)(D.l, {
        className: i()(et.ql, et.Ut),
        ref: o,
        returnRef: h,
        "aria-label": X.intl.string(K.default.XKj5L9),
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
    eE = l(131607),
    e_ = l(696292),
    eg = l(815996),
    eA = l(75678),
    ef = l(87719),
    ep = l(576761),
    ex = l(617986),
    eL = l(758836),
    ev = l(202541);
function eb(e) {
    let { analyticsLocations: t = [], shopTab: l = eL.G2.ORBS } = e;
    (0, eg.Cz)({ tab: l, analyticsLocations: t, analyticsSource: m.A.ORBS_BALANCE_MENU });
}
function eO() {
    (0, ex.mA)({ fromContent: e_.u.ORBS_BALANCE_MENU });
}
function eT(e) {
    let { analyticsLocations: t = [] } = e;
    (0, eA.A)({ subscriptionTier: ev.pe.TIER_2, analyticsLocations: t });
}
let eR = {
    "1531422538125676707": (e) => {
        let { analyticsLocations: t } = e;
        eb({ analyticsLocations: t, shopTab: eL.G2.HOME });
    },
    "1531422538125676708": (e) => {
        let { analyticsLocations: t } = e;
        eb({ analyticsLocations: t, shopTab: eL.G2.HOME });
    },
    "1531422538125676709": (e) => {
        let { analyticsLocations: t } = e;
        eT({ analyticsLocations: t });
    },
};
var eN = l(49999),
    ey = l(600676);
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
        className: i()(ey.Vm, d),
        children: [
            null != u
                ? (0, n.jsx)("div", {
                      className: ey.Fx,
                      children: (0, n.jsx)(em.K, {
                          icon: eC.P,
                          "aria-label": X.intl.string(X.t.cpT0Cq),
                          variant: "icon-only",
                          size: "sm",
                          onClick: u,
                      }),
                  })
                : null,
            (0, n.jsxs)("div", {
                className: ey.iH,
                children: [
                    null != l && (0, n.jsx)("img", { alt: a, src: l, className: ey.db }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsx)(j.E, {
                                variant: "text-md/bold",
                                color: "text-default",
                                className: ey.L8,
                                children: t,
                            }),
                            null != s &&
                                (0, n.jsx)(j.E, { variant: "text-xs/medium", color: "text-default", children: s }),
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
            ((0, L.Y)({ pageType: i, sectionType: m.A.ORB_WALLET_PRIMARY_CARD, ctaObject: s }),
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
                    eb({ analyticsLocations: c });
                }, [c]),
                dismissibleContent: ed.M.ORB_WALLET_SHOP_CTA_CARD,
                ctaObject: m.A.ORB_WALLET_SHOP_CTA,
            },
        );
    return o
        ? null
        : (0, n.jsx)(eS, {
              title: X.intl.string(K.default.v8QrJf),
              imageUrl: l(105644),
              imageAlt: X.intl.string(K.default.qa1xyr),
              subTextDescription: X.intl.string(K.default.HACucK),
              buttonText: X.intl.string(K.default["7raRgL"]),
              buttonIcon: { asset: F.U, type: "icon" },
              onCtaClick: h,
              onClose: u,
          });
}
let eU = { asset: S.t, type: "icon" };
function eM(e) {
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
        { nitroGatedOrbMultiplier: E } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
        })),
        _ = a.useMemo(() => X.intl.format(K.default["Ba/7wO"], { multiplier: E }), [E]);
    return null == E || h
        ? null
        : (0, n.jsx)(eS, {
              title: X.intl.string(K.default.ZqCAos),
              imageUrl: l(780361),
              imageAlt: X.intl.string(K.default.FkfrRH),
              subTextDescription: _,
              buttonText: X.intl.string(K.default.U9UQJE),
              buttonIcon: eU,
              buttonVariant: "expressive",
              onCtaClick: u,
              onClose: d,
              className: ey.ml,
          });
}
var eF = l(123576);
let eB = [
    {
        achievementIdentifier: "challenge_1",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: x.x.COMPLETED,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 1 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_2",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: x.x.NONE,
        orbRewardAmount: 100,
        onDiscoveryClick: () => {
            console.log("Challenge 2 discovery clicked");
        },
    },
    {
        achievementIdentifier: "challenge_3",
        title: "Challenge Task",
        description: "Challenge description",
        achievementStatus: x.x.NONE,
        orbRewardAmount: 100,
    },
];
async function eP(e) {
    (console.log(`Claiming challenge ${e}`), await new Promise((e) => setTimeout(e, 1e3)));
}
function eD(e, t) {
    return e ? (null != t && t >= 1400 ? "shop_orbs" : null) : "nitro_upsell";
}
function eW(e) {
    let {
            userHasPremium: t,
            onClose: l,
            orbBalance: a,
            analyticsPage: s,
            forceVisible: i = !1,
            onCloseWallet: r = ee.tEg,
        } = e,
        c = eD(t, a);
    return "shop_orbs" === c
        ? (0, n.jsx)(eI, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
        : "nitro_upsell" === c
          ? (0, n.jsx)(eM, { onClose: l, analyticsPage: s, forceVisible: i, onCloseWallet: r })
          : null;
}
function ek(e) {
    let { text: t, onClick: l } = e;
    return null == l
        ? (0, n.jsx)("span", { className: eF.dW, children: t })
        : (0, n.jsx)(h.D, { className: i()(eF.dW, eF.or), onClick: l, children: t });
}
function eH(e, t) {
    return X.intl.formatToPlainString(e ? K.default.p9PPYD : K.default["1JZfaU"], { multiplier: t });
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
            ? (0, n.jsx)(es, { text: X.intl.format(K.default["04j3XV"], { orbAmount: 250, days: 16 }) })
            : null,
        renderPrimaryCard: (e) => {
            let { onClose: n } = e;
            return eW({ userHasPremium: t, onClose: n, orbBalance: l, forceVisible: !0 });
        },
        orbChallengesCard: (0, n.jsx)(eo, {
            isLoading: s,
            inlineNoticeProps: a
                ? {
                      type: "warning",
                      message: X.intl.format(K.default.ggLzeg, { underlineHook: (e) => (0, n.jsx)(ek, { text: e }) }),
                      role: "status",
                  }
                : null,
            title: X.intl.string(K.default.H6Ny8N),
            badgeText: X.intl.format(t ? K.default.OHLdjq : K.default.WOMrJf, { multiplier: 1.2 }),
            badgeAccessibilityLabel: eH(t, 1.2),
            challenges: i ? [] : eB,
            onClaim: eP,
        }),
        orbWalletFooter: (0, n.jsx)(eh, {
            onQuestsClick: () => eO(),
            onShopClick: () => eb({ analyticsLocations: [] }),
            totalOrbsRedeemed: r,
        }),
    });
}
function ew(e) {
    return (0, n.jsx)(eG, { ...e, hasNoChallenges: !0 });
}
function ez() {
    let { passesGeneralUIInvariant: e, programReward: t } = (0, g.F)();
    if (!e || null == t) return null;
    let l = Math.max(1, (0, r.default)(new Date(t.next_reward_date), new Date()));
    return (0, n.jsx)(es, { text: X.intl.format(K.default["04j3XV"], { orbAmount: t.reward_amount, days: l }) });
}
function eV() {
    return null != (0, o.bG)([f.A], () => f.A.getPremiumTypeSubscription()) ? (0, n.jsx)(ez, {}) : null;
}
function eY(e) {
    let { analyticsPage: t = m.A.ORB_WALLET, analyticsLocations: s = [], onCloseWallet: i = ee.tEg } = e,
        { challengesForOrbWallet: r, hasFetchedChallenges: c, refetch: h } = (0, O.z)({ shouldFetch: !0 }),
        d = (0, E.L)(ev.PremiumTypes.TIER_2),
        C = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        { nitroGatedOrbMultiplier: _, orbChallengesDisplayError: g } = (0, o.cf)([R.Ay], () => ({
            nitroGatedOrbMultiplier: R.Ay.nitroGatedOrbMultiplier,
            orbChallengesDisplayError: R.Ay.orbChallengesDisplayError,
        })),
        f = null != C && !C.isClaimed(),
        p = a.useMemo(
            () =>
                null != g
                    ? {
                          type: "warning",
                          message:
                              g.errorType === R.EB.CLAIM_CHALLENGE
                                  ? X.intl.string(K.default.FYb5rH)
                                  : X.intl.format(K.default.ggLzeg, {
                                        underlineHook: (e) => (0, n.jsx)(ek, { text: e, onClick: h }),
                                    }),
                          role: "status",
                      }
                    : f
                      ? { type: "info", message: X.intl.string(X.t.qxk9zo), role: "status" }
                      : null,
            [g, h, f],
        ),
        x = a.useCallback(
            () => (
                (0, L.Y)({ pageType: t, sectionType: m.A.ORB_WALLET, ctaObject: m.A.ORB_WALLET_NITRO_BADGE_CLICK }),
                i("navigation"),
                (function (e) {
                    let { nitroGatedOrbMultiplier: t, userIsPremiumTier2: l } = e;
                    if (null == t) return void (0, ef.x)();
                    let n = l ? ep.MA.NITRO : ep.MA.UPSELL,
                        a = l
                            ? { customSubtitle: X.intl.format(K.default["wE4a/r"], { bonusOrbMultiplier: t }) }
                            : void 0;
                    (0, ex.gC)(t, n, a);
                })({ nitroGatedOrbMultiplier: _, userIsPremiumTier2: d })
            ),
            [_, d, t, i],
        ),
        v = a.useMemo(
            () =>
                r.map((e) => {
                    let l = null != e.achievementDefinitionId ? eR[e.achievementDefinitionId] : null,
                        n = { analyticsLocations: s },
                        a =
                            null != l
                                ? () => {
                                      ((0, L.Y)({
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
        b = a.useCallback(() => {
            (0, u.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    l.e("671464"),
                    l.e("112206"),
                    l.e("709998"),
                    l.e("480388"),
                ]).then(l.bind(l, 195759));
                return (t) => {
                    let { onClose: l, ...a } = t;
                    return (0, n.jsx)(e, { ...a, onClose: l, body: X.intl.string(X.t["gP/vPe"]) });
                };
            });
        }, []),
        N = a.useCallback((e) => (f ? (b(), Promise.resolve()) : (0, T.Xz)(e)), [f, b]);
    return (0, n.jsx)(eo, {
        title: X.intl.string(K.default.H6Ny8N),
        isLoading: !c,
        inlineNoticeProps: p,
        challenges: v,
        onClaim: N,
        onClickBadge: x,
        badgeText: X.intl.format(d ? K.default.OHLdjq : K.default.WOMrJf, { multiplier: _ }),
        badgeAccessibilityLabel: eH(d, _),
    });
}
function eK(e) {
    let {
            cardRef: t,
            returnRef: l,
            analyticsPage: s = m.A.ORB_WALLET,
            onCloseWallet: i = ee.tEg,
            isProfilePopout: r,
        } = e,
        { balance: h } = (0, b.W0)(),
        u = (0, v.Hy)({ location: "StatefulOrbWallet" }),
        { totalRedeemed: d } = (0, b.rQ)({ disableFetch: !u }),
        g = (0, E.L)(ev.PremiumTypes.TIER_2),
        { analyticsLocations: A } = (0, C.Ay)(m.A.ORB_WALLET);
    a.useEffect(() => {
        u && (0, T.eX)();
    }, [u]);
    let f = a.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: m.A.ORB_WALLET_FOOTER, ctaObject: m.A.ORB_WALLET_SHOP_CTA }),
                eb({ analyticsLocations: A }),
                i("navigation"));
        }, [A, s, i]),
        O = a.useCallback(() => {
            ((0, L.Y)({ pageType: s, sectionType: m.A.ORB_WALLET_FOOTER, ctaObject: m.A.ORB_WALLET_QUEST_HOME_CTA }),
                eO(),
                i("navigation"));
        }, [s, i]),
        N = a.useMemo(() => eD(g, h), [g, h]),
        { challengesForOrbWallet: y, hasFetchedChallenges: S } = (0, o.cf)([R.Ay], () => ({
            challengesForOrbWallet: R.Ay.challengesForOrbWallet,
            hasFetchedChallenges: R.Ay.hasFetchedChallenges,
        })),
        j = a.useRef(!1);
    a.useEffect(() => {
        if (!S || j.current) return;
        let e = y.map((e) => e.achievementIdentifier),
            t = y.filter((e) => e.achievementStatus === x.x.COMPLETED).map((e) => e.achievementIdentifier);
        (p.default.track(ee.HAw.ORB_WALLET_VIEWED, {
            location_stack: A,
            location_page: s,
            location_section: m.A.ORB_WALLET,
            location_object: m.A.ORB_WALLET,
            wallet_primary_card_type: N,
            wallet_visible_achievements: e,
            wallet_visible_completed_achievements: t,
        }),
            (j.current = !0));
    }, [S, y, N, A, s]);
    let { pathname: I } = (0, c.zy)(),
        U = I.startsWith(ee.BVt.COLLECTIBLES_SHOP),
        M = (0, _.p)(),
        F = a.useMemo(
            () =>
                r ? { onQuestsClick: O, onShopClick: f } : { onQuestsClick: M ? null : O, onShopClick: U ? null : f },
            [M, U, O, f, r],
        );
    return u
        ? (0, n.jsx)(eu, {
              cardRef: t,
              returnRef: l,
              orbBalance: h,
              headerTagsContent: (0, n.jsx)(eV, {}),
              renderPrimaryCard: (e) => {
                  let { onClose: t } = e;
                  return eW({ userHasPremium: g, onClose: t, orbBalance: h, analyticsPage: s, onCloseWallet: i });
              },
              orbChallengesCard: (0, n.jsx)(eY, { analyticsPage: s, analyticsLocations: A, onCloseWallet: i }),
              orbWalletFooter: (0, n.jsx)(eh, { ...F, totalOrbsRedeemed: d }),
          })
        : null;
}
function eX(e) {
    let { cardRef: t, returnRef: l, targetElementRef: s, shouldShow: i, analyticsPage: r, onCloseWallet: c } = e,
        o = a.useCallback(
            () => (0, n.jsx)(eK, { cardRef: t, returnRef: l, analyticsPage: r, onCloseWallet: c }),
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
