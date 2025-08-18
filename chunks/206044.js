n.d(t, { Z: () => w }), n(388685);
var s = n(951288),
    o = n(647438),
    r = n(120356),
    i = n.n(r),
    a = n(815061),
    l = n(722770),
    u = n(481060),
    c = n(393238),
    d = n(393903),
    m = n(448986),
    p = n(617136),
    h = n(113434),
    g = n(497505),
    x = n(566078),
    C = n(685613),
    j = n(611855),
    f = n(644646),
    b = n(968435),
    y = n(670638),
    v = n(87894),
    N = n(46140),
    O = n(231338),
    q = n(388032),
    E = n(310696);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = (0, a.animated)(u.CJ0),
    w = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: r,
                location: w,
                size: R,
                expansionSpring: M,
                isAnimating: _,
                isExpanded: D,
                contentPosition: Q,
                toggleExpanded: A,
                sourceQuestContent: L,
            } = e,
            { ref: B, height: k } = (0, c.ZP)(),
            [I, Z] = o.useState(null),
            [U, W] = o.useState(null),
            G = (0, m.Z)((e) => {
                let t = e.target;
                Z(t.offsetWidth), W(t.scrollWidth);
            }),
            F = (0, d.y)(G),
            H = (0, v.uq)(w),
            X = w === g.jn.QUESTS_EMBED,
            Y = (0, h.t5)(r, N.dr.QUESTS_CARD, w, L),
            z = (null == (t = r.userStatus) ? void 0 : t.completedAt) != null,
            V = (0, p.O5)(),
            J = (0, h.B6)(r.config.expiresAt),
            K = (0, h.B6)(x.r.build(r.config).rewardsExpireAt),
            $ = o.useMemo(() => null != r.config.cosponsorMetadata, [r]),
            ee = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    A(),
                    V({
                        questId: r.id,
                        questContent: w,
                        questContentCTA: D ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                        questContentPosition: Q,
                        sourceQuestContent: L,
                    });
            },
            et = (0, s.jsx)(C.ZP, {
                className: E.partnerBranding,
                logotypeClassName: $ ? E.partnerBrandingLogotypes : void 0,
                gameTileSize: C.fF.MEDIUM,
                quest: r,
                separatorSpacing: C.US.MEDIUM,
                theme: O.BR.DARK,
                withGameTile: !X || null == r.config.cosponsorMetadata,
            });
        return (0, s.jsxs)("div", {
            className: i()(E.outerContainer, {
                [E.outerContainerGiftInventory]: H,
                [E.outerContainerEmbed]: X,
                [E.outerContainerXs]: "xs" === R,
            }),
            "aria-label": q.intl.string(q.t.dcl9MT),
            style: { height: H ? k : void 0 },
            children: [
                (0, s.jsx)(b.Z, {
                    quest: r,
                    dimensions: {
                        width: 660,
                        height: 185,
                    },
                    className: E.questSplash,
                }),
                (0, s.jsxs)("div", {
                    className: E.header,
                    "aria-expanded": D,
                    children: [
                        (0, s.jsxs)(a.animated.div, {
                            className: i()(E.headerContent, { [E.headerContentEmbed]: X }),
                            style: {
                                y: H
                                    ? M.to({
                                          range: [0, 1],
                                          output: [v.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                H &&
                                    (0, s.jsx)(a.animated.div, {
                                        className: E.headerCollapsedContent,
                                        style: {
                                            opacity: M.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: _ || !D ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !_ && D,
                                        children: (0, s.jsxs)(u.kL8, {
                                            "aria-label": q.intl.string(q.t.dcl9MT),
                                            onClick: ee,
                                            className: E.headerCollapsedClickableContainer,
                                            children: [
                                                (0, s.jsx)("div", {
                                                    className: E.headerCollapsedContentRewardWrapper,
                                                    children: (0, s.jsx)(f.Z, {
                                                        quest: r,
                                                        questContent: w,
                                                        className: E.headerCollapsedRewardTile,
                                                        location: N.dr.QUESTS_CARD,
                                                        sourceQuestContent: L,
                                                    }),
                                                }),
                                                (0, s.jsxs)("div", {
                                                    className: E.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, s.jsxs)("div", {
                                                            className: E.headerCollapsedContentCopyLogos,
                                                            children: [et, (0, s.jsx)(j.Z, { color: "always-white" })],
                                                        }),
                                                        (0, s.jsx)(u.Text, {
                                                            variant: "text-xs/medium",
                                                            children: Y,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, s.jsx)(a.animated.div, {
                                    ref: (e) => {
                                        B.current = e;
                                    },
                                    className: i()(E.headerExpandedContent, {
                                        [E.outerContainerGiftInventory]: H,
                                        [E.outerContainerEmbed]: X,
                                    }),
                                    style: {
                                        opacity: M.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: _ || D ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !_ && !D,
                                    children: (0, s.jsxs)("div", {
                                        className: E.headerExpandedWrapper,
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: E.iconLogotypeContainer,
                                                children: [et, X ? null : (0, s.jsx)(j.Z, { color: "always-white" })],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: E.questInfo,
                                                children: [
                                                    (0, s.jsx)(u.ua7, {
                                                        text: r.config.messages.questName,
                                                        shouldShow: null != I && null != U && I < U,
                                                        children: (e) =>
                                                            (0, s.jsx)(
                                                                u.X6q,
                                                                S(
                                                                    T(
                                                                        {
                                                                            ref: F,
                                                                            variant:
                                                                                "lg" === R
                                                                                    ? "heading-xxl/bold"
                                                                                    : "sm" === R
                                                                                      ? "heading-xl/bold"
                                                                                      : "heading-lg/bold",
                                                                            className: E.heading,
                                                                            color: "always-white",
                                                                        },
                                                                        e,
                                                                    ),
                                                                    {
                                                                        children: q.intl.format(q.t.EAYZAg, {
                                                                            questName: r.config.messages.questName,
                                                                        }),
                                                                    },
                                                                ),
                                                            ),
                                                    }),
                                                    (0, s.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: z
                                                            ? q.intl.formatToPlainString(q.t.APddvL, {
                                                                  expirationDate: K,
                                                              })
                                                            : n
                                                              ? q.intl.formatToPlainString(q.t.v7xMw8, {
                                                                    expirationDate: J,
                                                                })
                                                              : q.intl.formatToPlainString(q.t["pX+fmp"], {
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
                        (0, s.jsxs)(a.animated.div, {
                            className: E.iconsContainer,
                            style: {
                                top: H
                                    ? M.to({
                                          range: [0, 1],
                                          output: [v.DJ / 2 - v.Z$ / 2, v.jc],
                                      })
                                    : v.jc,
                            },
                            children: [
                                (0, s.jsx)(y.r, {
                                    questContent: w,
                                    quest: r,
                                    questContentPosition: Q,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: H,
                                    showShareLink: !n && X,
                                    sourceQuestContent: L,
                                    children: (e) =>
                                        (0, s.jsx)(a.animated.div, {
                                            style: {
                                                opacity: M,
                                                visibility: _ || D ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !_ && !D,
                                            children: (0, s.jsx)(
                                                u.P3F,
                                                S(T({}, e), {
                                                    className: E.iconWrapper,
                                                    "aria-label": q.intl.string(q.t.DEoVWV),
                                                    children: (0, s.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, v.W_)(w) &&
                                    (0, s.jsx)(u.P3F, {
                                        onClick: ee,
                                        className: E.iconWrapper,
                                        "aria-label": D ? q.intl.string(q.t.iTcumZ) : q.intl.string(q.t.dcl9MT),
                                        children: (0, s.jsx)(P, {
                                            style: {
                                                rotate: M.to({
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
