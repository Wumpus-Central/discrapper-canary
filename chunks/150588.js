n.d(t, { Z: () => x }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    l = n(692547),
    c = n(28664),
    u = n(481060),
    d = n(393238),
    f = n(393903),
    p = n(448986),
    _ = n(617136),
    m = n(49436),
    h = n(373370),
    g = n(968843),
    E = n(477005),
    b = n(698716),
    y = n(685613),
    O = n(611855),
    v = n(644646),
    S = n(231919),
    I = n(324805),
    T = n(231338),
    C = n(388032),
    A = n(565408);
function N(e, t, n) {
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
function P(e) {
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
                N(e, t, n[t]);
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
function w(e, t) {
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
    x = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: a,
                location: N,
                size: R,
                expansionSpring: x,
                isAnimating: L,
                isExpanded: j,
                isInteracting: M,
                contentPosition: k,
                toggleExpanded: U,
                sourceQuestContent: G,
            } = e,
            { ref: Z, height: F } = (0, d.ZP)(),
            [B, V] = i.useState(null),
            [H, Y] = i.useState(null),
            W = (0, p.Z)((e) => {
                let t = e.target;
                V(t.offsetWidth), Y(t.scrollWidth);
            }),
            K = (0, f.y)(W),
            z = (0, S.uq)(N),
            q = N === m.jn.QUESTS_EMBED,
            Q = (0, h.t5)(a, I.dr.QUESTS_CARD, N, G),
            X = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            J = (0, _.O5)(),
            $ = (0, g.B6)(a.config.expiresAt),
            ee = (0, g.B6)(a.config.rewardsConfig.rewardsExpireAt),
            et = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            en = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    J({
                        questId: a.id,
                        questContent: N,
                        questContentCTA: j ? _.jZ.COLLAPSE : _.jZ.EXPAND,
                        questContentPosition: k,
                        sourceQuestContent: G,
                    });
            },
            er = () => null != B && null != H && B < H,
            ei = (0, r.jsx)(y.ZP, {
                className: A.partnerBranding,
                logotypeClassName: et ? A.partnerBrandingLogotypes : void 0,
                gameTileSize: y.fF.MEDIUM,
                quest: a,
                separatorSpacing: y.US.MEDIUM,
                theme: T.BR.DARK,
                withGameTile: !q || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: o()(A.outerContainer, {
                [A.outerContainerGiftInventory]: z,
                [A.outerContainerEmbed]: q,
                [A.outerContainerXs]: "xs" === R,
            }),
            "aria-label": C.intl.string(C.t.dcl9MQ),
            style: { height: z ? F : void 0 },
            children: [
                (0, r.jsx)(E.Z, {
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
                    "aria-expanded": j,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(A.headerContent, { [A.headerContentEmbed]: q }),
                            style: {
                                y: z
                                    ? x.to({
                                          range: [0, 1],
                                          output: [S.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                z &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: A.headerCollapsedContent,
                                        style: {
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: L || !j ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !L && j,
                                        children: (0, r.jsxs)(u.kL8, {
                                            "aria-label": C.intl.string(C.t.dcl9MQ),
                                            onClick: en,
                                            className: A.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: A.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(v.Z, {
                                                        quest: a,
                                                        questContent: N,
                                                        className: A.headerCollapsedRewardTile,
                                                        location: I.dr.QUESTS_CARD,
                                                        sourceQuestContent: G,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: A.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: A.headerCollapsedContentCopyLogos,
                                                            children: [ei, (0, r.jsx)(O.Z, { color: "always-white" })],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: Q,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        Z.current = e;
                                    },
                                    className: o()(A.headerExpandedContent, {
                                        [A.outerContainerGiftInventory]: z,
                                        [A.outerContainerEmbed]: q,
                                    }),
                                    style: {
                                        opacity: x.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: L || j ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !L && !j,
                                    children: (0, r.jsxs)("div", {
                                        className: A.headerExpandedWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: A.iconLogotypeContainer,
                                                children: [ei, q ? null : (0, r.jsx)(O.Z, { color: "always-white" })],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: A.questInfo,
                                                children: [
                                                    (0, r.jsx)(c.u, {
                                                        __unsupportedReactNodeAsText: a.config.messages.questName,
                                                        shouldShow: er(),
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: K,
                                                            variant:
                                                                "lg" === R
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === R
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: A.heading,
                                                            color: "always-white",
                                                            children: C.intl.format(C.t.EAYZAr, {
                                                                questName: a.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: X
                                                            ? C.intl.formatToPlainString(C.t.APddvF, {
                                                                  expirationDate: ee,
                                                              })
                                                            : n
                                                              ? C.intl.formatToPlainString(C.t.v7xMw7, {
                                                                    expirationDate: $,
                                                                })
                                                              : C.intl.formatToPlainString(C.t["pX+fmn"], {
                                                                    expirationDate: $,
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
                                top: z
                                    ? x.to({
                                          range: [0, 1],
                                          output: [S.DJ / 2 - S.Z$ / 2, S.jc],
                                      })
                                    : S.jc,
                            },
                            children: [
                                (0, r.jsx)(b.i, {
                                    questContent: N,
                                    quest: a,
                                    questContentPosition: k,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: z,
                                    showShareLink: !n && q,
                                    sourceQuestContent: G,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: x,
                                                visibility: L || j ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !L && !j,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                w(P({}, e), {
                                                    className: A.iconWrapper,
                                                    "aria-label": C.intl.string(C.t.DEoVWZ),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: l.Z.colors.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, S.W_)(N) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: en,
                                        className: A.iconWrapper,
                                        "aria-label": j ? C.intl.string(C.t.iTcuma) : C.intl.string(C.t.dcl9MQ),
                                        children: (0, r.jsx)(D, {
                                            style: {
                                                rotate: x.to({
                                                    range: [0, 1],
                                                    output: [0, 180],
                                                }),
                                            },
                                            color: l.Z.colors.WHITE,
                                        }),
                                    }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    };
