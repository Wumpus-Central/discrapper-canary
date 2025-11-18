n.d(t, { Z: () => w }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(636606),
    l = n(722770),
    c = n(28664),
    u = n(481060),
    d = n(393238),
    f = n(393903),
    _ = n(448986),
    p = n(617136),
    h = n(113434),
    m = n(497505),
    g = n(477005),
    E = n(685613),
    b = n(611855),
    y = n(644646),
    O = n(670638),
    v = n(724684),
    I = n(46140),
    T = n(231338),
    S = n(388032),
    A = n(815874);
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
let D = (0, s.animated)(u.CJ0),
    w = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: a,
                location: C,
                size: R,
                expansionSpring: w,
                isAnimating: L,
                isExpanded: x,
                isInteracting: M,
                contentPosition: j,
                toggleExpanded: k,
                sourceQuestContent: U,
            } = e,
            { ref: G, height: B } = (0, d.ZP)(),
            [Z, F] = i.useState(null),
            [V, H] = i.useState(null),
            Y = (0, _.Z)((e) => {
                let t = e.target;
                F(t.offsetWidth), H(t.scrollWidth);
            }),
            W = (0, f.y)(Y),
            K = (0, v.uq)(C),
            z = C === m.jn.QUESTS_EMBED,
            q = (0, h.t5)(a, I.dr.QUESTS_CARD, C, U),
            X = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            Q = (0, p.O5)(),
            J = (0, h.B6)(a.config.expiresAt),
            $ = (0, h.B6)(a.config.rewardsConfig.rewardsExpireAt),
            ee = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    k(),
                    Q({
                        questId: a.id,
                        questContent: C,
                        questContentCTA: x ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                        questContentPosition: j,
                        sourceQuestContent: U,
                    });
            },
            en = () => null != Z && null != V && Z < V,
            er = (0, r.jsx)(E.ZP, {
                className: A.partnerBranding,
                logotypeClassName: ee ? A.partnerBrandingLogotypes : void 0,
                gameTileSize: E.fF.MEDIUM,
                quest: a,
                separatorSpacing: E.US.MEDIUM,
                theme: T.BR.DARK,
                withGameTile: !z || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: o()(A.outerContainer, {
                [A.outerContainerGiftInventory]: K,
                [A.outerContainerEmbed]: z,
                [A.outerContainerXs]: "xs" === R,
            }),
            "aria-label": S.intl.string(S.t.dcl9MQ),
            style: { height: K ? B : void 0 },
            children: [
                (0, r.jsx)(g.Z, {
                    quest: a,
                    isInteracting: M,
                    containerClassName: A.questSplashContainer,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: A.questSplashImage,
                }),
                (0, r.jsxs)("div", {
                    className: A.header,
                    "aria-expanded": x,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(A.headerContent, { [A.headerContentEmbed]: z }),
                            style: {
                                y: K
                                    ? w.to({
                                          range: [0, 1],
                                          output: [v.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                K &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: A.headerCollapsedContent,
                                        style: {
                                            opacity: w.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: L || !x ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !L && x,
                                        children: (0, r.jsxs)(u.kL8, {
                                            "aria-label": S.intl.string(S.t.dcl9MQ),
                                            onClick: et,
                                            className: A.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: A.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(y.Z, {
                                                        quest: a,
                                                        questContent: C,
                                                        className: A.headerCollapsedRewardTile,
                                                        location: I.dr.QUESTS_CARD,
                                                        sourceQuestContent: U,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: A.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: A.headerCollapsedContentCopyLogos,
                                                            children: [er, (0, r.jsx)(b.Z, { color: "always-white" })],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: q,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        G.current = e;
                                    },
                                    className: o()(A.headerExpandedContent, {
                                        [A.outerContainerGiftInventory]: K,
                                        [A.outerContainerEmbed]: z,
                                    }),
                                    style: {
                                        opacity: w.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: L || x ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !L && !x,
                                    children: (0, r.jsxs)("div", {
                                        className: A.headerExpandedWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: A.iconLogotypeContainer,
                                                children: [er, z ? null : (0, r.jsx)(b.Z, { color: "always-white" })],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: A.questInfo,
                                                children: [
                                                    (0, r.jsx)(c.u, {
                                                        __unsupportedReactNodeAsText: a.config.messages.questName,
                                                        shouldShow: en(),
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: W,
                                                            variant:
                                                                "lg" === R
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === R
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: A.heading,
                                                            color: "always-white",
                                                            children: S.intl.format(S.t.EAYZAr, {
                                                                questName: a.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: X
                                                            ? S.intl.formatToPlainString(S.t.APddvF, {
                                                                  expirationDate: $,
                                                              })
                                                            : n
                                                              ? S.intl.formatToPlainString(S.t.v7xMw7, {
                                                                    expirationDate: J,
                                                                })
                                                              : S.intl.formatToPlainString(S.t["pX+fmn"], {
                                                                    expirationDate: J,
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
                                top: K
                                    ? w.to({
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
                                    hideLearnMore: K,
                                    showShareLink: !n && z,
                                    sourceQuestContent: U,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: w,
                                                visibility: L || x ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !L && !x,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                P(N({}, e), {
                                                    className: A.iconWrapper,
                                                    "aria-label": S.intl.string(S.t.DEoVWZ),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, v.W_)(C) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: et,
                                        className: A.iconWrapper,
                                        "aria-label": x ? S.intl.string(S.t.iTcuma) : S.intl.string(S.t.dcl9MQ),
                                        children: (0, r.jsx)(D, {
                                            style: {
                                                rotate: w.to({
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
