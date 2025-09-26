n.d(t, { Z: () => A });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(786920),
    l = n(481060),
    c = n(617136),
    u = n(915750),
    d = n(509212),
    f = n(497505),
    _ = n(685138),
    p = n(685613),
    h = n(110560),
    m = n(670638),
    g = n(303385),
    E = n(46140),
    b = n(388032),
    y = n(579605);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = (0, s.animated)(p.ZP),
    A = (e) => {
        let {
                quest: t,
                expansionSpring: n,
                onCtxMenuSelect: a,
                onCtxMenuOpen: p,
                onCtxMenuClose: O,
                useReducedMotion: I,
                isExpanded: A,
                isExpansionAnimationComplete: C,
            } = e,
            N = (0, u.aM)(),
            { status: R } = (0, _.n)({
                location: E.dr.QUESTS_BAR,
                questConfig: t.config,
            }),
            P = null == R ? void 0 : R.progressBlur,
            w = i.useCallback(() => {
                (0, h.openDisclosureModal)(t, {
                    content: f.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_DISCLOSURE,
                    sourceQuestContent: f.jn.QUEST_BAR_V2,
                });
            }, [t]),
            D = i.useCallback(() => {
                (0, d.nc)(t, {
                    content: f.jn.QUEST_BAR_V2,
                    ctaContent: c.jZ.OPEN_GAME_LINK,
                    impressionId: N,
                    sourceQuestContent: f.jn.QUEST_BAR_V2,
                });
            }, [N, t]),
            x = A && C,
            L = P ? 32 : 24,
            j = P ? 130 : 92,
            M = P ? 0.72 : 1,
            k = (0, r.jsx)(l.P3F, {
                onClick: D,
                className: o()(y.clickable, { [y.logo]: x }),
                children: (0, r.jsx)(S, {
                    quest: t,
                    withGameTile: !1,
                    logotypeClassName: y.partnerBranding,
                    logotypeStyle: {
                        height: L,
                        maxWidth: j,
                        transform: (0, s.to)(
                            [
                                n.to({
                                    range: [0, 1],
                                    output: [1, M],
                                }),
                            ],
                            (e) => "scale(".concat(e, ")"),
                        ),
                    },
                }),
            });
        return (0, r.jsxs)(s.animated.div, {
            className: o()(y.wrapper, y.rewardHighlightWrapper, { [y.interactable]: x }),
            style: {
                transform: (0, s.to)(
                    [
                        n.to({
                            range: [0, 1],
                            output: [P ? 5 : 6, 0],
                        }),
                    ],
                    (e) => "translateY(".concat(e, "px"),
                ),
            },
            children: [
                (0, r.jsx)(s.animated.div, {
                    className: y.opaqueExpandedBackground,
                    style: {
                        opacity: n.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                }),
                (0, r.jsx)(g.Z, {
                    quest: t,
                    expansionSpring: n,
                    isFullyExpanded: x,
                    partnerBranding: k,
                    useReducedMotion: I,
                }),
                (0, r.jsxs)(s.animated.div, {
                    className: y.promotedBadgeWrapper,
                    style: {
                        opacity: n.to({
                            range: [0, 1],
                            output: [0, 1],
                        }),
                    },
                    children: [
                        (0, r.jsxs)(l.P3F, {
                            className: y.promotedBadge,
                            onClick: w,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    color: "always-white",
                                    variant: "text-xs/normal",
                                    children: b.intl.string(b.t.o6FLcH),
                                }),
                                (0, r.jsx)(l.idN, {
                                    color: l.TVs.colors.WHITE,
                                    className: y.promotedBadgeIcon,
                                }),
                            ],
                        }),
                        (0, r.jsx)(m.r, {
                            onOpen: p,
                            onClose: O,
                            onSelect: a,
                            questContent: f.jn.QUEST_BAR_V2,
                            quest: t,
                            shouldShowDisclosure: !0,
                            showShareLink: !0,
                            sourceQuestContent: f.jn.QUEST_BAR_V2,
                            children: (e) =>
                                (0, r.jsx)(
                                    l.P3F,
                                    T(v({}, e), {
                                        className: y.submenuWrapper,
                                        "aria-label": b.intl.string(b.t.DEoVWV),
                                        children: (0, r.jsx)(l.xhG, {
                                            size: "md",
                                            color: "currentColor",
                                            className: o()(y.submenuIcon, y.white),
                                        }),
                                    }),
                                ),
                        }),
                    ],
                }),
            ],
        });
    };
