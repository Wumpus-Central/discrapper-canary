n.d(t, { Z: () => B }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(717976),
    l = n(722770),
    c = n(846519),
    u = n(755721),
    d = n(481060),
    f = n(393238),
    _ = n(393903),
    p = n(448986),
    h = n(572004),
    m = n(617136),
    g = n(509212),
    E = n(113434),
    b = n(497505),
    y = n(566078),
    O = n(685613),
    v = n(611855),
    I = n(644646),
    T = n(968435),
    S = n(670638),
    A = n(87894),
    N = n(46140),
    C = n(231338),
    R = n(388032),
    P = n(982976);
function w(e, t, n) {
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
function D(e) {
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
                w(e, t, n[t]);
            });
    }
    return e;
}
function L(e, t) {
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
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function M(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = j(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let k = 1000,
    U = (0, s.animated)(d.CJ0),
    G = (e) => {
        var { quest: t, location: n, questContentPosition: o, sourceQuestContent: a } = e,
            s = M(e, ["quest", "location", "questContentPosition", "sourceQuestContent"]);
        let [l, f] = i.useState(!1),
            _ = i.useRef(new c.V7()),
            p = (0, m.O5)();
        i.useEffect(() => {
            let e = _.current;
            return function () {
                e.stop();
            };
        }, []);
        let E = () => {
            p({
                questId: t.id,
                questContent: n,
                questContentCTA: m.jZ.COPY_QUEST_URL,
                questContentPosition: o,
                sourceQuestContent: a,
            }),
                (0, h.JG)((0, g.Rs)(t.id), () => {
                    f(!0), _.current.start(k, () => f(!1));
                });
        };
        return (0, r.jsx)(d.ua7, {
            forceOpen: l,
            shouldShow: l,
            color: d.ua7.Colors.GREEN,
            text: R.intl.string(R.t.MSaeTU),
            children: () =>
                (0, r.jsx)(
                    u.zx,
                    x(D({}, s), {
                        className: P.shareButton,
                        color: u.zx.Colors.PRIMARY,
                        size: u.zx.Sizes.SMALL,
                        onClick: E,
                        children: R.intl.string(R.t["5Z6rz8"]),
                    }),
                ),
        });
    },
    B = (e) => {
        var t;
        let {
                isQuestExpired: n,
                quest: o,
                location: c,
                size: u,
                expansionSpring: h,
                isAnimating: g,
                isExpanded: w,
                contentPosition: L,
                toggleExpanded: M,
                sourceQuestContent: j,
            } = e,
            { ref: k, height: B } = (0, f.ZP)(),
            [Z, F] = i.useState(null),
            [V, H] = i.useState(null),
            Y = (0, p.Z)((e) => {
                let t = e.target;
                F(t.offsetWidth), H(t.scrollWidth);
            }),
            W = (0, _.y)(Y),
            K = (0, A.uq)(c),
            z = c === b.jn.QUESTS_EMBED,
            q = (0, E.t5)(o, N.dr.QUESTS_CARD, c, j),
            X = (null == (t = o.userStatus) ? void 0 : t.completedAt) != null,
            Q = (0, m.O5)(),
            J = (0, E.B6)(o.config.expiresAt),
            $ = (0, E.B6)(y.r.build(o.config).rewardsExpireAt),
            ee = i.useMemo(() => null != o.config.cosponsorMetadata, [o]),
            et = (e) => {
                e.stopPropagation(),
                    e.currentTarget.blur(),
                    M(),
                    Q({
                        questId: o.id,
                        questContent: c,
                        questContentCTA: w ? m.jZ.COLLAPSE : m.jZ.EXPAND,
                        questContentPosition: L,
                        sourceQuestContent: j,
                    });
            },
            en = () => null != Z && null != V && Z < V,
            er = (0, r.jsx)(O.ZP, {
                className: P.partnerBranding,
                logotypeClassName: ee ? P.partnerBrandingLogotypes : void 0,
                gameTileSize: O.fF.MEDIUM,
                quest: o,
                separatorSpacing: O.US.MEDIUM,
                theme: C.BR.DARK,
                withGameTile: !z || null == o.config.cosponsorMetadata,
            });
        return (0, r.jsxs)("div", {
            className: a()(P.outerContainer, {
                [P.outerContainerGiftInventory]: K,
                [P.outerContainerEmbed]: z,
                [P.outerContainerXs]: "xs" === u,
            }),
            "aria-label": R.intl.string(R.t.dcl9MT),
            style: { height: K ? B : void 0 },
            children: [
                (0, r.jsx)(T.Z, {
                    quest: o,
                    dimensions: {
                        width: 660,
                        height: 185,
                    },
                    className: P.questSplash,
                }),
                (0, r.jsxs)("div", {
                    className: P.header,
                    "aria-expanded": w,
                    children: [
                        (0, r.jsxs)(s.animated.div, {
                            className: a()(P.headerContent, { [P.headerContentEmbed]: z }),
                            style: {
                                y: K
                                    ? h.to({
                                          range: [0, 1],
                                          output: [A.DJ, 0],
                                      })
                                    : void 0,
                            },
                            children: [
                                K &&
                                    (0, r.jsx)(s.animated.div, {
                                        className: P.headerCollapsedContent,
                                        style: {
                                            opacity: h.to({
                                                range: [0, 1],
                                                output: [1, 0],
                                            }),
                                            visibility: g || !w ? "inherit" : "hidden",
                                        },
                                        "aria-hidden": !g && w,
                                        children: (0, r.jsxs)(d.kL8, {
                                            "aria-label": R.intl.string(R.t.dcl9MT),
                                            onClick: et,
                                            className: P.headerCollapsedClickableContainer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: P.headerCollapsedContentRewardWrapper,
                                                    children: (0, r.jsx)(I.Z, {
                                                        quest: o,
                                                        questContent: c,
                                                        className: P.headerCollapsedRewardTile,
                                                        location: N.dr.QUESTS_CARD,
                                                        sourceQuestContent: j,
                                                    }),
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: P.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, r.jsxs)("div", {
                                                            className: P.headerCollapsedContentCopyLogos,
                                                            children: [er, (0, r.jsx)(v.Z, { color: "always-white" })],
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: "text-xs/medium",
                                                            children: q,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                (0, r.jsxs)(s.animated.div, {
                                    ref: (e) => {
                                        k.current = e;
                                    },
                                    className: a()(P.headerExpandedContent, {
                                        [P.outerContainerGiftInventory]: K,
                                        [P.outerContainerEmbed]: z,
                                    }),
                                    style: {
                                        opacity: h.to({
                                            range: [0, 1],
                                            output: [0, 1],
                                        }),
                                        visibility: g || w ? "inherit" : "hidden",
                                    },
                                    "aria-hidden": !g && !w,
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: P.headerExpandedWrapper,
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: P.iconLogotypeContainer,
                                                    children: [
                                                        er,
                                                        z ? null : (0, r.jsx)(v.Z, { color: "always-white" }),
                                                    ],
                                                }),
                                                (0, r.jsxs)("div", {
                                                    className: P.questInfo,
                                                    children: [
                                                        (0, r.jsx)(d.ua7, {
                                                            text: o.config.messages.questName,
                                                            shouldShow: en(),
                                                            children: (e) =>
                                                                (0, r.jsx)(
                                                                    d.X6q,
                                                                    x(
                                                                        D(
                                                                            {
                                                                                ref: W,
                                                                                variant:
                                                                                    "lg" === u
                                                                                        ? "heading-xxl/bold"
                                                                                        : "sm" === u
                                                                                          ? "heading-xl/bold"
                                                                                          : "heading-lg/bold",
                                                                                className: P.heading,
                                                                                color: "always-white",
                                                                            },
                                                                            e,
                                                                        ),
                                                                        {
                                                                            children: R.intl.format(R.t.EAYZAg, {
                                                                                questName: o.config.messages.questName,
                                                                            }),
                                                                        },
                                                                    ),
                                                                ),
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "always-white",
                                                            children: X
                                                                ? R.intl.formatToPlainString(R.t.APddvL, {
                                                                      expirationDate: $,
                                                                  })
                                                                : n
                                                                  ? R.intl.formatToPlainString(R.t.v7xMw8, {
                                                                        expirationDate: J,
                                                                    })
                                                                  : R.intl.formatToPlainString(R.t["pX+fmp"], {
                                                                        expirationDate: J,
                                                                    }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        !n &&
                                            K &&
                                            (0, r.jsx)(G, {
                                                quest: o,
                                                location: c,
                                                questContentPosition: L,
                                                sourceQuestContent: j,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsxs)(s.animated.div, {
                            className: P.iconsContainer,
                            style: {
                                top: K
                                    ? h.to({
                                          range: [0, 1],
                                          output: [A.DJ / 2 - A.Z$ / 2, A.jc],
                                      })
                                    : A.jc,
                            },
                            children: [
                                (0, r.jsx)(S.r, {
                                    questContent: c,
                                    quest: o,
                                    questContentPosition: L,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: K,
                                    showShareLink: !n && z,
                                    sourceQuestContent: j,
                                    children: (e) =>
                                        (0, r.jsx)(s.animated.div, {
                                            style: {
                                                opacity: h,
                                                visibility: g || w ? "inherit" : "hidden",
                                            },
                                            "aria-hidden": !g && !w,
                                            children: (0, r.jsx)(
                                                d.P3F,
                                                x(D({}, e), {
                                                    className: P.iconWrapper,
                                                    "aria-label": R.intl.string(R.t.DEoVWV),
                                                    children: (0, r.jsx)(d.xhG, {
                                                        size: "md",
                                                        color: l.Z.WHITE,
                                                    }),
                                                }),
                                            ),
                                        }),
                                }),
                                !(0, A.W_)(c) &&
                                    (0, r.jsx)(d.P3F, {
                                        onClick: et,
                                        className: P.iconWrapper,
                                        "aria-label": w ? R.intl.string(R.t.iTcumZ) : R.intl.string(R.t.dcl9MT),
                                        children: (0, r.jsx)(U, {
                                            style: {
                                                rotate: h.to({
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
