n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(481060),
    c = n(617136),
    u = n(915750),
    d = n(509212),
    f = n(497505),
    _ = n(685613),
    p = n(110560),
    h = n(670638),
    m = n(303385),
    g = n(388032),
    E = n(579605);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = (e) => {
    let {
            quest: t,
            expansionSpring: n,
            onCtxMenuSelect: a,
            onCtxMenuOpen: b,
            onCtxMenuClose: O,
            useReducedMotion: I,
            isExpanded: T,
            isExpansionAnimationComplete: S,
        } = e,
        A = (0, u.aM)(),
        C = i.useCallback(() => {
            (0, p.openDisclosureModal)(t, {
                content: f.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_DISCLOSURE,
                sourceQuestContent: f.jn.QUEST_BAR_V2,
            });
        }, [t]),
        N = i.useCallback(() => {
            (0, d.nc)(t, {
                content: f.jn.QUEST_BAR_V2,
                ctaContent: c.jZ.OPEN_GAME_LINK,
                impressionId: A,
                sourceQuestContent: f.jn.QUEST_BAR_V2,
            });
        }, [A, t]),
        R = T && S,
        P = (0, r.jsx)(l.P3F, {
            onClick: N,
            className: o()(E.clickable, { [E.logo]: R }),
            children: (0, r.jsx)(_.ZP, {
                quest: t,
                logotypeClassName: E.rewardHighlightLogotype,
                withGameTile: !1,
            }),
        });
    return (0, r.jsxs)(s.animated.div, {
        className: o()(E.wrapper, E.rewardHighlightWrapper, { [E.interactable]: R }),
        style: {
            transform: (0, s.to)(
                [
                    n.to({
                        range: [0, 1],
                        output: [8, 0],
                    }),
                ],
                (e) => "translateY(".concat(e, "px"),
            ),
        },
        children: [
            (0, r.jsx)(s.animated.div, {
                className: E.opaqueExpandedBackground,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1],
                    }),
                },
            }),
            (0, r.jsx)(m.Z, {
                quest: t,
                expansionSpring: n,
                isFullyExpanded: R,
                partnerBranding: P,
                useReducedMotion: I,
            }),
            (0, r.jsxs)(s.animated.div, {
                className: E.promotedBadgeWrapper,
                style: {
                    opacity: n.to({
                        range: [0, 1],
                        output: [0, 1],
                    }),
                },
                children: [
                    (0, r.jsxs)(l.P3F, {
                        className: E.promotedBadge,
                        onClick: C,
                        children: [
                            (0, r.jsx)(l.Text, {
                                color: "always-white",
                                variant: "text-xs/normal",
                                children: g.intl.string(g.t.o6FLcH),
                            }),
                            (0, r.jsx)(l.idN, {
                                color: l.TVs.colors.WHITE,
                                className: E.promotedBadgeIcon,
                            }),
                        ],
                    }),
                    (0, r.jsx)(h.r, {
                        onOpen: b,
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
                                v(y({}, e), {
                                    className: E.submenuWrapper,
                                    "aria-label": g.intl.string(g.t.DEoVWV),
                                    children: (0, r.jsx)(l.xhG, {
                                        size: "md",
                                        color: "currentColor",
                                        className: o()(E.submenuIcon, E.white),
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
        ],
    });
};
