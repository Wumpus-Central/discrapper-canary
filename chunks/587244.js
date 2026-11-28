l.d(t, { C9: () => Z, eT: () => J, B$: () => Y, oZ: () => q, Vv: () => V });
var a = l(477900),
    n = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(821609),
    o = l(646514),
    c = l(403581),
    d = l(834730),
    u = l(866665),
    h = l(885574),
    m = l(140735),
    C = l(939249),
    _ = l(683071),
    E = l(577473),
    A = l(34188),
    g = l(369606),
    f = l(28863),
    p = l(305866),
    L = l(475743),
    b = l(303136),
    x = l(286348),
    O = l(975571),
    T = l(626031),
    R = l(320448),
    v = l(404778),
    y = l(318254),
    S = l(124861),
    N = l(742967),
    j = l(628595),
    I = l(792996),
    U = l(137484),
    B = l(427483);
function F(e) {
    let { achievementStatus: t, animationState: l = "off" } = e,
        n = t === S.x.COMPLETED || t === S.x.CLAIMED,
        s = (0, a.jsx)("div", {
            className: i()(U.TK, { [U.AM]: n }),
            children: (0, a.jsx)(N.x, { className: U.t9, webmAsset: B.A, animationState: l, assetAltText: "" }),
        });
    return n
        ? (0, a.jsxs)("div", {
              className: U.Zs,
              children: [(0, a.jsx)(m.A, { children: I.intl.string(j.default.k6h2J3) }), s],
          })
        : s;
}
function P(e) {
    let { className: t } = e;
    return (0, a.jsx)(v.c, { className: i()(U.Fu, t) });
}
function M(e) {
    let {
            achievementIdentifier: t,
            title: l,
            orbRewardAmount: s,
            achievementStatus: c,
            onClaim: u,
            onDiscoveryClick: h,
            isLastItem: m,
            isFirstItem: _,
        } = e,
        [E, A] = n.useState(!1),
        [g, f] = n.useState(!1),
        p = null != h && c !== S.x.COMPLETED,
        L = i()(U.of, { [U.o4]: _, [U.D8]: E, [U.or]: p }),
        b = (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)("div", {
                    className: U.Ub,
                    children: [
                        (0, a.jsx)(F, { achievementStatus: c, animationState: E ? "on" : "off" }),
                        (0, a.jsxs)("div", {
                            className: U.Du,
                            children: [
                                (0, a.jsx)(d.E, { variant: "body-sm/medium", color: "text-default", children: l }),
                                (0, a.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.format(c === S.x.COMPLETED ? j.default.h2qWpS : j.default.B8Fxns, {
                                        orbAmount: s,
                                        orbIconHook: () =>
                                            (0, a.jsx)(y.OrbsIcon, {
                                                className: U.fN,
                                                size: "xxs",
                                                color: o.A.colors.ICON_SUBTLE,
                                            }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (function (e, t) {
                    let { isClaiming: l, handleClaim: n, hasDiscoveryClick: s } = t,
                        i = (0, a.jsx)(r.$, {
                            variant: "expressive",
                            size: "sm",
                            text: I.intl.string(j.default.WmfVjs),
                            loading: l,
                            onClick: n,
                        });
                    return e === S.x.COMPLETED || l
                        ? i
                        : s
                          ? (0, a.jsx)(R.ChevronSmallRightIcon, { size: "sm", "aria-hidden": !0 })
                          : null;
                })(c, {
                    isHovered: E,
                    isClaiming: g,
                    handleClaim: async function () {
                        null != u && (f(!0), await u(t).finally(() => f(!1)));
                    },
                    hasDiscoveryClick: p,
                }),
            ],
        }),
        x = n.useMemo(() => ({ onMouseEnter: () => A(!0), onMouseLeave: () => A(!1) }), []);
    return p
        ? (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)(C.D, { className: L, ...x, onClick: h, children: b }), !m && (0, a.jsx)(P, {})],
          })
        : (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("div", { className: L, ...x, children: b }), !m && (0, a.jsx)(P, {})],
          });
}
var D = l(652215),
    W = l(735980),
    k = l(653877),
    H = l(268920),
    w = l(633217);
function G() {
    return (0, a.jsx)("div", {
        className: k.s,
        children: (0, a.jsx)(b.A, { src: w.A, fallbackImage: H.A, className: k.Cb }),
    });
}
function V(e) {
    let { nitroIconColor: t = o.A.colors.ICON_SUBTLE, text: l } = e;
    return (0, a.jsxs)("div", {
        className: k.SY,
        children: [
            (0, a.jsx)(c.NitroWheelIcon, { size: "xs", color: t }),
            (0, a.jsx)(d.E, { variant: "body-xs/medium", color: "text-subtle", children: l }),
        ],
    });
}
let Y = (e) => {
    let { text: t } = e,
        l = I.intl.formatToPlainString(W.default.OYakRP, { date: x.Ds });
    return (0, a.jsxs)("div", {
        className: k.SY,
        children: [
            (0, a.jsx)(u.m, {
                text: l,
                position: "top",
                ariaHidden: !0,
                children: (0, a.jsx)("span", {
                    tabIndex: 0,
                    role: "img",
                    "aria-label": l,
                    className: k.tt,
                    children: (0, a.jsx)(h.CircleInformationIcon, { size: "xs", color: o.A.colors.ICON_SUBTLE }),
                }),
            }),
            (0, a.jsx)(d.E, { variant: "body-xs/medium", color: "text-subtle", children: t }),
        ],
    });
};
function z(e) {
    let { orbBalance: t, headerTagsContent: l } = e,
        s = (0, L.Ay)(t),
        i = n.useMemo(
            () => (null != t && !!(t.toString().length > 10)) || (null != s && !!(s.toString().length > 10)),
            [t, s],
        );
    return (0, a.jsxs)("div", {
        className: k.SZ,
        children: [
            (0, a.jsx)(G, {}),
            (0, a.jsxs)("div", {
                className: k.ZX,
                children: [
                    (0, a.jsx)(m.A, {
                        children:
                            null == t
                                ? I.intl.string(I.t.cKwv4k)
                                : I.intl.formatToPlainString(I.t.zPaLL9, { balance: t }),
                    }),
                    (0, a.jsx)(T.t, {
                        ariaHidden: !0,
                        counterInnerClassName: i ? k.F4 : void 0,
                        value: t,
                        onValueChange: D.tEg,
                        onValueReached: D.tEg,
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
function K(e) {
    let { text: t, accessibilityLabel: l, onClick: n } = e,
        s = null != l,
        r = (0, a.jsxs)(a.Fragment, {
            children: [
                s && (0, a.jsx)(m.A, { children: l }),
                (0, a.jsx)(c.NitroWheelIcon, { size: "xxs", color: "white", "aria-hidden": !0 }),
                (0, a.jsx)(d.E, {
                    variant: "body-xs/semibold",
                    color: "text-overlay-light",
                    "aria-hidden": s,
                    children: t,
                }),
            ],
        });
    return null == n
        ? (0, a.jsx)("div", { className: k.lh, children: r })
        : (0, a.jsx)(C.D, { className: i()(k.lh, k.w9), onClick: n, children: r });
}
function X(e) {
    let { numRows: t = 3 } = e,
        l = n.useMemo(() => Array.from({ length: t }), [t]);
    return (0, a.jsx)("div", {
        className: k.gW,
        "aria-hidden": !0,
        children: l.map((e, t) =>
            (0, a.jsxs)(
                "div",
                {
                    className: k.US,
                    children: [
                        (0, a.jsx)("div", { className: i()(k.DO, k.VR) }),
                        (0, a.jsxs)("div", {
                            className: k.A3,
                            children: [
                                (0, a.jsx)("div", { className: i()(k.DO, k.Iz) }),
                                (0, a.jsx)("div", { className: i()(k.DO, k.D_) }),
                            ],
                        }),
                    ],
                },
                t,
            ),
        ),
    });
}
function Z(e) {
    let {
            title: t,
            challenges: l,
            isLoading: s,
            onClaim: i,
            badgeText: r,
            badgeAccessibilityLabel: o,
            onClickBadge: c,
            inlineNoticeProps: u,
        } = e,
        h = l.length > 0,
        m = n.useMemo(
            () =>
                s && null == u
                    ? (0, a.jsx)(X, { numRows: 3 })
                    : h
                      ? (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsxs)("div", {
                                    className: k.$b,
                                    children: [
                                        (0, a.jsx)(d.E, {
                                            variant: "body-xs/medium",
                                            color: "text-subtle",
                                            children: t,
                                        }),
                                        null != r && (0, a.jsx)(K, { text: r, accessibilityLabel: o, onClick: c }),
                                    ],
                                }),
                                (0, a.jsx)("ul", {
                                    className: k.Up,
                                    children: l.map((e, t) =>
                                        (0, a.jsx)(
                                            "li",
                                            {
                                                className: k.tJ,
                                                children: (0, a.jsx)(M, {
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
                      : null != u
                        ? null
                        : (0, a.jsxs)("div", {
                              className: k.GN,
                              children: [
                                  (0, a.jsx)(d.E, {
                                      variant: "body-sm/medium",
                                      color: "text-default",
                                      children: I.intl.string(j.default.xOP5OP),
                                  }),
                                  (0, a.jsx)(d.E, {
                                      variant: "body-xs/normal",
                                      color: "text-subtle",
                                      children: I.intl.string(j.default.XW2CuY),
                                  }),
                              ],
                          }),
            [s, h, t, r, o, c, l, u, i],
        ),
        C = n.useMemo(
            () => (null == u ? null : (0, a.jsx)("div", { className: k.re, children: (0, a.jsx)(_.w, { ...u }) })),
            [u],
        );
    return (0, a.jsxs)("div", { className: k.E6, "aria-busy": s, children: [C, m] });
}
function q(e) {
    let { onQuestsClick: t, onShopClick: l, totalOrbsRedeemed: n } = e;
    return (0, a.jsxs)("div", {
        className: k.VX,
        children: [
            (0, a.jsxs)("div", {
                className: k.W,
                children: [
                    null != t &&
                        (0, a.jsx)(r.$, {
                            text: I.intl.string(I.t.JALI2K),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: E.QuestsIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: t,
                        }),
                    null != l &&
                        (0, a.jsx)(r.$, {
                            text: I.intl.string(I.t.pWG4ze),
                            variant: "secondary",
                            size: "md",
                            icon: { asset: A.ShopIcon, type: "icon" },
                            fullWidth: !0,
                            onClick: l,
                        }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: k.RA,
                children: [
                    null != n &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(g.TrophyIcon, {
                                    size: "xs",
                                    color: o.A.colors.ICON_MUTED,
                                    "aria-hidden": !0,
                                }),
                                (0, a.jsx)(d.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    children: I.intl.format(j.default.B5tZXw, { orbAmount: n }),
                                }),
                                (0, a.jsx)(d.E, {
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    "aria-hidden": !0,
                                    children: "\u2022",
                                }),
                            ],
                        }),
                    (0, a.jsx)(d.E, {
                        variant: "body-xs/normal",
                        children: (0, a.jsx)(f.Anchor, {
                            target: "_blank",
                            rel: "author",
                            href: O.A.getArticleURL(D.MVz.ORBS_WALLET),
                            children: I.intl.string(I.t["5qZv9E"]),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let {
            orbBalance: t,
            headerTagsContent: l,
            renderPrimaryCard: s,
            orbChallengesCard: r,
            orbWalletFooter: o,
            cardRef: c,
            returnRef: d,
        } = e,
        [u, h] = n.useState(!1);
    return (0, a.jsxs)(p.l, {
        className: i()(k.ql, k.Ut),
        ref: c,
        returnRef: d,
        "aria-label": I.intl.string(j.default.XKj5L9),
        children: [
            (0, a.jsxs)("div", {
                className: k.hG,
                children: [
                    (0, a.jsx)(z, { orbBalance: t, headerTagsContent: l }),
                    u ? null : s({ onClose: () => h(!0) }),
                ],
            }),
            (0, a.jsx)("div", { className: k.BA, children: r }),
            o,
        ],
    });
}
