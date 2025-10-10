n.d(t, { Z: () => h }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(137317),
    l = n(113434),
    c = n(497505),
    d = n(164495),
    u = n(759853),
    p = n(95985),
    m = n(688927),
    g = n(743294),
    f = n(557579);
let h = s.forwardRef(function (e, t) {
    var n, o;
    let {
            className: h,
            expansionSpring: x,
            isExpanded: _,
            isExpansionAnimationComplete: b,
            quest: v,
            taskDetails: j,
            useReducedMotion: C,
            onCtxMenuOpen: y,
            onCtxMenuClose: E,
            onCtxMenuSelect: O,
            overlayRef: S,
        } = e,
        T = (null == (n = v.userStatus) ? void 0 : n.completedAt) != null,
        w = (0, l.Jf)(v),
        P = s.useRef(null),
        N = (null == (o = v.userStatus) ? void 0 : o.enrolledAt) != null,
        A = null != w ? w.percentComplete : j.percentComplete,
        [R, B] = s.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            T &&
                (0, r.jsx)(u.Z, {
                    expansionSpring: x,
                    overlayRef: S,
                    progressBarRef: P,
                    quest: v,
                    isExpanded: _,
                    isHovered: R,
                }),
            (0, r.jsx)(i.animated.div, {
                ref: t,
                "aria-hidden": _ && b,
                className: a()(h, f.contentCollapsed, {
                    [f.contentCollapsedExpanded]: _,
                    [f.contentCollapsedAccepted]: N,
                }),
                style: {
                    opacity: x.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: T ? "linear-gradient(90deg, ".concat(g.aY, ", ").concat(g.v6, ")") : void 0,
                },
                onMouseEnter: () => B(!0),
                onMouseLeave: () => B(!1),
                children: (0, r.jsxs)("div", {
                    className: f.contentCollapsedWrapper,
                    children: [
                        T &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        quest: v,
                                        onCtxMenuOpen: y,
                                        onCtxMenuClose: E,
                                        onCtxMenuSelect: O,
                                    }),
                                    (0, r.jsx)("div", { className: f.divider }),
                                ],
                            }),
                        N
                            ? (0, r.jsx)(p.Z, {
                                  contentLocation: "collapsed",
                                  quest: v,
                                  progressBarRef: P,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        T &&
                            (0, r.jsx)(d.y, {
                                quest: v,
                                useReducedMotion: C,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: c.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: j,
                                sourceQuestContent: c.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
