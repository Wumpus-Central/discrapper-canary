n.d(t, { Z: () => w }), n(388685);
var r = n(951288),
    o = n(647438),
    s = n(120356),
    i = n.n(s),
    a = n(803948),
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
    O = n(46140),
    E = n(231338),
    q = n(388032),
    N = n(310696);
function S(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
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
                quest: s,
                location: w,
                size: _,
                expansionSpring: M,
                isAnimating: R,
                isExpanded: k,
                contentPosition: D,
                toggleExpanded: Q,
                sourceQuestContent: L,
            } = e,
            { ref: A, height: I } = (0, c.ZP)(),
            [Z, U] = o.useState(null),
            [B, W] = o.useState(null),
            G = (0, m.Z)((e) => {
                let t = e.target;
                U(t.offsetWidth), W(t.scrollWidth);
            }),
            F = (0, d.y)(G),
            H = (0, v.uq)(w),
            z = w === g.jn.QUESTS_EMBED,
            X = (0, h.t5)(s, O.dr.QUESTS_CARD, w, L),
            V = (null == (t = s.userStatus) ? void 0 : t.completedAt) != null,
            Y = (0, p.O5)(),
            K = (0, h.B6)(s.config.expiresAt),
            J = (0, h.B6)(x.r.build(s.config).rewardsExpireAt),
            $ = o.useMemo(() => null != s.config.cosponsorMetadata, [s]),
            ee = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    Q(),
                    Y({
                        questId: s.id,
                        questContent: w,
                        questContentCTA: k ? p.jZ.COLLAPSE : p.jZ.EXPAND,
                        questContentPosition: D,
                        sourceQuestContent: L,
                    });
            },
            et = (0, r.jsx)(C.ZP, {
                className: N.partnerBranding,
                logotypeClassName: $ ? N.partnerBrandingLogotypes : void 0,
                gameTileSize: C.fF.MEDIUM,
                quest: s,
                separatorSpacing: C.US.MEDIUM,
                theme: E.BR.DARK,
                withGameTile: !z || null == s.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: i()(N.outerContainer, {
                [N.outerContainerGiftInventory]: H,
                [N.outerContainerEmbed]: z,
                [N.outerContainerXs]: "xs" === _,
            }),
            "aria-label": q.intl.string(q.t.dcl9MT),
            style: { height: H ? I : void 0 },
            children: [
                (0, r.jsx)(b.Z, {
                    quest: s,
                    dimensions: {
                        width: 660,
                        height: 185,
                    },
                    className: N.questSplash,
                }),
                (0, r.jsxs)("div", {
                    className: N.header,
                    "aria-expanded": k,
                    children: [
                        (0, r.jsxs)(a.animated.div, {
                            className: i()(N.headerContent, { [N.headerContentEmbed]: z }),
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
                                    (0, r.jsx)(a.animated.div, {
                                        className: N.headerCollapsedContent,
                                        style: {
                                            opacity: M.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: R || !k ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !R && k,
                                        children: (0, r.jsxs)(u.kL8, {
                                            "aria-label": q.intl.string(q.t.dcl9MT),
                                            onClick: ee,
                                            className: N.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: N.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(f.Z, {
                                                        quest: s,
                                                        questContent: w,
                                                        className: N.headerCollapsedRewardTile,
                                                        location: O.dr.QUESTS_CARD,
                                                        sourceQuestContent: L,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: N.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: N.headerCollapsedContentCopyLogos,
                                                            children: [et, (0, r.jsx)(j.Z, { color: "always-white" })],
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
                                (0, r.jsx)(a.animated.div, {
                                    ref: (e) => {
                                        A.current = e;
                                    },
                                    className: i()(N.headerExpandedContent, {
                                        [N.outerContainerGiftInventory]: H,
                                        [N.outerContainerEmbed]: z,
                                    }),
                                    style: {
                                        opacity: M.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: R || k ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !R && !k,
                                    children: (0, r.jsxs)("div", {
                                        className: N.headerExpandedWrapper,
                                        children: [
                                            (0, r.jsxs)("div", {
                                                className: N.iconLogotypeContainer,
                                                children: [et, z ? null : (0, r.jsx)(j.Z, { color: "always-white" })],
                                            }),
                                            (0, r.jsxs)("div", {
                                                className: N.questInfo,
                                                children: [
                                                    (0, r.jsx)(u.ua7, {
                                                        text: s.config.messages.questName,
                                                        shouldShow: null != Z && null != B && Z < B,
                                                        children: (e) =>
                                                            (0, r.jsx)(
                                                                u.X6q,
                                                                T(
                                                                    S(
                                                                        {
                                                                            ref: F,
                                                                            variant:
                                                                                "lg" === _
                                                                                    ? "heading-xxl/bold"
                                                                                    : "sm" === _
                                                                                      ? "heading-xl/bold"
                                                                                      : "heading-lg/bold",
                                                                            className: N.heading,
                                                                            color: "always-white",
                                                                        },
                                                                        e,
                                                                    ),
                                                                    {
                                                                        children: q.intl.format(q.t.EAYZAg, {
                                                                            questName: s.config.messages.questName,
                                                                        }),
                                                                    },
                                                                ),
                                                            ),
                                                    }),
                                                    (0, r.jsx)(u.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "always-white",
                                                        children: V
                                                            ? q.intl.formatToPlainString(q.t.APddvL, {
                                                                  expirationDate: J,
                                                              })
                                                            : n
                                                              ? q.intl.formatToPlainString(q.t.v7xMw8, {
                                                                    expirationDate: K,
                                                                })
                                                              : q.intl.formatToPlainString(q.t["pX+fmp"], {
                                                                    expirationDate: K,
                                                                }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, r.jsxs)(a.animated.div, {
                            className: N.iconsContainer,
                            style: {
                                top: H
                                    ? M.to({
                                          range: [0, 1],
                                          output: [v.DJ / 2 - v.Z$ / 2, v.jc],
                                      })
                                    : v.jc,
                            },
                            children: [
                                (0, r.jsx)(y.r, {
                                    questContent: w,
                                    quest: s,
                                    questContentPosition: D,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: H,
                                    showShareLink: !n && z,
                                    sourceQuestContent: L,
                                    children: (e) =>
                                        (0, r.jsx)(a.animated.div, {
                                            style: {
                                                opacity: M,
                                                visibility: R || k ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !R && !k,
                                            children: (0, r.jsx)(
                                                u.P3F,
                                                T(S({}, e), {
                                                    className: N.iconWrapper,
                                                    "aria-label": q.intl.string(q.t.DEoVWV),
                                                    children: (0, r.jsx)(u.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, v.W_)(w) &&
                                    (0, r.jsx)(u.P3F, {
                                        onClick: ee,
                                        className: N.iconWrapper,
                                        "aria-label": k ? q.intl.string(q.t.iTcumZ) : q.intl.string(q.t.dcl9MT),
                                        children: (0, r.jsx)(P, {
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
