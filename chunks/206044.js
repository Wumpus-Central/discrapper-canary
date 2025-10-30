n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(13941),
    l = n(722770),
    c = n(28664),
    u = n(481060),
    d = n(393238),
    f = n(393903),
    _ = n(448986),
    p = n(617136),
    h = n(113434),
    m = n(497505),
    g = n(566078),
    E = n(477005),
    b = n(685613),
    y = n(611855),
    O = n(644646),
    v = n(670638),
    I = n(87894),
    T = n(46140),
    S = n(231338),
    A = n(388032),
    C = n(74576);
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
function R(e) {
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
function P(e, t) {
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
            : P(Object(t)).forEach(function (n) {
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
                size: P,
                expansionSpring: x,
                isAnimating: L,
                isExpanded: M,
                isInteracting: k,
                contentPosition: j,
                toggleExpanded: U,
                sourceQuestContent: G,
            } = e,
            { ref: B, height: Z } = (0, d.ZP)(),
            [F, V] = i.useState(null),
            [H, Y] = i.useState(null),
            W = (0, _.Z)((e) => {
                let t = e.target;
                V(t.offsetWidth), Y(t.scrollWidth);
            }),
            K = (0, f.y)(W),
            z = (0, I.uq)(N),
            q = N === m.jn.QUESTS_EMBED,
            X = (0, h.t5)(a, T.dr.QUESTS_CARD, N, G),
            Q = (null == (t = a.userStatus) ? void 0 : t.completedAt) != null,
            J = (0, p.O5)(),
            $ = (0, h.B6)(a.config.expiresAt),
            ee = (0, h.B6)(g.r.build(a.config).rewardsExpireAt),
            et = i.useMemo(() => null != a.config.cosponsorMetadata, [a]),
            en = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    U(),
                    J({
                        questId: a.id,
                        questContent: N,
                        questContentCTA: M ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                        questContentPosition: j,
                        sourceQuestContent: G,
                    });
            },
            er = () => null != F && null != H && F < H,
            ei = (0, r.jsx)(b.ZP, {
                className: C.partnerBranding,
                logotypeClassName: et ? C.partnerBrandingLogotypes : void 0,
                gameTileSize: b.fF.MEDIUM,
                quest: a,
                separatorSpacing: b.US.MEDIUM,
                theme: S.BR.DARK,
                withGameTile: !q || null == a.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: o()(C.outerContainer, {
                [C.outerContainerGiftInventory]: z,
                [C.outerContainerEmbed]: q,
                [C.outerContainerXs]: "xs" === P,
            }),
            "aria-label": A.intl.string(A.t.dcl9MQ),
            style: { height: z ? Z : void 0 },
            children: [
                (0, r.jsx)(E.Z, {
                    quest: a,
                    isInteracting: k,
                    containerClassName: C.questSplashContainer,
                    imageSize: {
                        width: 660,
                        height: 185,
                    },
                    imageClassName: C.questSplashImage,
                }),
                (0, r.jsxs)("div", {
                    className: C.header,
                    "aria-expanded": M,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(C.headerContent, { [C.headerContentEmbed]: q }),
                            style: {
                                y: z
                                    ? x.to({
                                          range: [0, 1],
                                          output: [I.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                z &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: C.headerCollapsedContent,
                                        style: {
                                            opacity: x.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: L || !M ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !L && M,
                                        children: (0, r.jsxs)(u.kL8, {
                                            "aria-label": A.intl.string(A.t.dcl9MQ),
                                            onClick: en,
                                            className: C.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: C.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(O.Z, {
                                                        quest: a,
                                                        questContent: N,
                                                        className: C.headerCollapsedRewardTile,
                                                        location: T.dr.QUESTS_CARD,
                                                        sourceQuestContent: G,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: C.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: C.headerCollapsedContentCopyLogos,
                                                            children: [ei, (0, r.jsx)(y.Z, { color: "always-white" })],
                                                        }),
                                                        (0, r.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: X,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsx)(s.animated.div, {
                                    ref: (e) => {
                                        B.current = e;
                                    },
                                    className: o()(C.headerExpandedContent, {
                                        [C.outerContainerGiftInventory]: z,
                                        [C.outerContainerEmbed]: q,
                                    }),
                                    style: {
                                        opacity: x.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: L || M ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !L && !M,
                                    children: (0, r.jsxs)("div", {
                                        className: C.headerExpandedWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: C.iconLogotypeContainer,
                                                children: [ei, q ? null : (0, r.jsx)(y.Z, { color: "always-white" })],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: C.questInfo,
                                                children: [
                                                    (0, r.jsx)(c.u, {
                                                        __unsupportedReactNodeAsText: a.config.messages.questName,
                                                        shouldShow: er(),
                                                        children: (0, r.jsx)(u.Heading, {
                                                            ref: K,
                                                            variant:
                                                                "lg" === P
                                                                    ? "heading-xxl/bold"
                                                                    : "sm" === P
                                                                      ? "heading-xl/bold"
                                                                      : "heading-lg/bold",
                                                            className: C.heading,
                                                            color: "always-white",
                                                            children: A.intl.format(A.t.EAYZAr, {
                                                                questName: a.config.messages.questName,
                                                            }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: Q
                                                            ? A.intl.formatToPlainString(A.t.APddvF, {
                                                                  expirationDate: ee,
                                                              })
                                                            : n
                                                              ? A.intl.formatToPlainString(A.t.v7xMw7, {
                                                                    expirationDate: $,
                                                                })
                                                              : A.intl.formatToPlainString(A.t["pX+fmn"], {
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
                            className: C.iconsContainer,
                            style: {
                                top: z
                                    ? x.to({
                                          range: [0, 1],
                                          output: [I.DJ / 2 - I.Z$ / 2, I.jc],
                                      })
                                    : I.jc,
                            },
                            children: [
                                (0, r.jsx)(v.r, {
                                    questContent: N,
                                    quest: a,
                                    questContentPosition: j,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: z,
                                    showShareLink: !n && q,
                                    sourceQuestContent: G,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: x,
                                                visibility: L || M ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !L && !M,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                w(R({}, e), {
                                                    className: C.iconWrapper,
                                                    "aria-label": A.intl.string(A.t.DEoVWZ),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, I.W_)(N) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: en,
                                        className: C.iconWrapper,
                                        "aria-label": M ? A.intl.string(A.t.iTcuma) : A.intl.string(A.t.dcl9MQ),
                                        children: (0, r.jsx)(D, {
                                            style: {
                                                rotate: x.to({
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
