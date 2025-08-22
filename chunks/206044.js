n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(722770),
    c = n(481060),
    u = n(393238),
    d = n(393903),
    f = n(448986),
    _ = n(617136),
    p = n(113434),
    h = n(497505),
    m = n(566078),
    g = n(685613),
    E = n(611855),
    b = n(644646),
    y = n(968435),
    O = n(670638),
    v = n(87894),
    I = n(46140),
    T = n(231338),
    S = n(388032),
    A = n(310696);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = (0, s.animated)(c.CJ0),
    D = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: a,
                location: C,
                size: R,
                expansionSpring: D,
                isAnimating: x,
                isExpanded: L,
                contentPosition: j,
                toggleExpanded: M,
                sourceQuestContent: k,
            } = e,
            { ref: U, height: G } = (0, u.ZP)(),
            [B, Z] = i.useState(null),
            [V, F] = i.useState(null),
            H = (0, f.Z)((e) => {
                let t = e.target;
                Z(t.offsetWidth), F(t.scrollWidth);
            }),
            Y = (0, d.y)(H),
            W = (0, v.uq)(C),
            K = C === h.jn.QUESTS_EMBED,
            z = (0, p.t5)(a, I.dr.QUESTS_CARD, C, k),
            q = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            X = (0, _.O5)(),
            Q = (0, p.B6)(a.config.expiresAt),
            J = (0, p.B6)(m.r.build(a.config).rewardsExpireAt),
            $ = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            ee = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    M(),
                    X({
                        questId: a.id,
                        questContent: C,
                        questContentCTA: L ? _.jZ.COLLAPSE : _.jZ.EXPAND,
                        questContentPosition: j,
                        sourceQuestContent: k,
                    });
            },
            et = () => null != B && null != V && B < V,
            en = (0, r.jsx)(g.ZP, {
                className: A.partnerBranding,
                logotypeClassName: $ ? A.partnerBrandingLogotypes : void 0,
                gameTileSize: g.fF.MEDIUM,
                quest: a,
                separatorSpacing: g.US.MEDIUM,
                theme: T.BR.DARK,
                withGameTile: !K || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: o()(A.outerContainer, {
                [A.outerContainerGiftInventory]: W,
                [A.outerContainerEmbed]: K,
                [A.outerContainerXs]: "xs" === R,
            }),
            "aria-label": S.intl.string(S.t.dcl9MT),
            style: { height: W ? G : void 0 },
            children: [
                (0, r.jsx)(y.Z, {
                    quest: a,
                    dimensions: {
                        width: 660,
                        height: 185,
                    },
                    className: A.questSplash,
                }),
                (0, r.jsxs)("div", {
                    className: A.header,
                    "aria-expanded": L,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(A.headerContent, { [A.headerContentEmbed]: K }),
                            style: {
                                y: W
                                    ? D.to({
                                          range: [0, 1],
                                          output: [v.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                W &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: A.headerCollapsedContent,
                                        style: {
                                            opacity: D.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: x || !L ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !x && L,
                                        children: (0, r.jsxs)(c.kL8, {
                                            "aria-label": S.intl.string(S.t.dcl9MT),
                                            onClick: ee,
                                            className: A.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: A.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(b.Z, {
                                                        quest: a,
                                                        questContent: C,
                                                        className: A.headerCollapsedRewardTile,
                                                        location: I.dr.QUESTS_CARD,
                                                        sourceQuestContent: k,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: A.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: A.headerCollapsedContentCopyLogos,
                                                            children: [en, (0, r.jsx)(E.Z, { color: "always-white" })],
                                                        }),
                                                        (0, r.jsx)(c.Text, {
                                                            variant: "text-xs/medium",
                                                            children: z,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        U.current = e;
                                    },
                                    className: o()(A.headerExpandedContent, {
                                        [A.outerContainerGiftInventory]: W,
                                        [A.outerContainerEmbed]: K,
                                    }),
                                    style: {
                                        opacity: D.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: x || L ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !x && !L,
                                    children: (0, r.jsxs)("div", {
                                        className: A.headerExpandedWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: A.iconLogotypeContainer,
                                                children: [en, K ? null : (0, r.jsx)(E.Z, { color: "always-white" })],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: A.questInfo,
                                                children: [
                                                    (0, r.jsx)(c.ua7, {
                                                        text: a.config.messages.questName,
                                                        shouldShow: et(),
                                                        children: (e) =>
                                                            (0, r.jsx)(
                                                                c.X6q,
                                                                P(
                                                                    N(
                                                                        {
                                                                            ref: Y,
                                                                            variant:
                                                                                "lg" === R
                                                                                    ? "heading-xxl/bold"
                                                                                    : "sm" === R
                                                                                      ? "heading-xl/bold"
                                                                                      : "heading-lg/bold",
                                                                            className: A.heading,
                                                                            color: "always-white",
                                                                        },
                                                                        e,
                                                                    ),
                                                                    {
                                                                        children: S.intl.format(S.t.EAYZAg, {
                                                                            questName: a.config.messages.questName,
                                                                        }),
                                                                    },
                                                                ),
                                                            ),
                                                    }),
                                                    (0, r.jsx)(c.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: q
                                                            ? S.intl.formatToPlainString(S.t.APddvL, {
                                                                  expirationDate: J,
                                                              })
                                                            : n
                                                              ? S.intl.formatToPlainString(S.t.v7xMw8, {
                                                                    expirationDate: Q,
                                                                })
                                                              : S.intl.formatToPlainString(S.t["pX+fmp"], {
                                                                    expirationDate: Q,
                                                                }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.animated.div, {
                            className: A.iconsContainer,
                            style: {
                                top: W
                                    ? D.to({
                                          range: [0, 1],
                                          output: [v.DJ / 2 - v.Z$ / 2, v.jc],
                                      })
                                    : v.jc,
                            },
                            children: [
                                (0, r.jsx)(O.r, {
                                    questContent: C,
                                    quest: a,
                                    questContentPosition: j,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: W,
                                    showShareLink: !n && K,
                                    sourceQuestContent: k,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: D,
                                                visibility: x || L ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !x && !L,
                                            children: (0, r.jsx)(
                                                c.P3F,
                                                P(N({}, e), {
                                                    className: A.iconWrapper,
                                                    "aria-label": S.intl.string(S.t.DEoVWV),
                                                    children: (0, r.jsx)(c.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, v.W_)(C) &&
                                    (0, r.jsx)(c.P3F, {
                                        onClick: ee,
                                        className: A.iconWrapper,
                                        "aria-label": L ? S.intl.string(S.t.iTcumZ) : S.intl.string(S.t.dcl9MT),
                                        children: (0, r.jsx)(w, {
                                            style: {
                                                rotate: D.to({
                                                    range: [0, 1],
                                                    output: [0, 180],
                                                }),
                                            },
                                            color: l.Z.WHITE,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
