n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(6383),
    l = n(113434),
    c = n(497505),
    u = n(164495),
    d = n(759853),
    f = n(95985),
    _ = n(688927),
    p = n(743294),
    h = n(557579);
let m = i.forwardRef(function (e, t) {
    var n, a;
    let {
            className: m,
            expansionSpring: g,
            isExpanded: E,
            isExpansionAnimationComplete: b,
            quest: y,
            taskDetails: O,
            useReducedMotion: v,
            onCtxMenuOpen: I,
            onCtxMenuClose: T,
            onCtxMenuSelect: S,
            overlayRef: A,
        } = e,
        C = (null == (n = y.userStatus) ? void 0 : n.completedAt) != null,
        N = (0, l.Jf)(y),
        R = i.useRef(null),
        P = (null == (a = y.userStatus) ? void 0 : a.enrolledAt) != null,
        w = null != N ? N.percentComplete : O.percentComplete,
        [D, x] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C &&
                (0, r.jsx)(d.Z, {
                    expansionSpring: g,
                    overlayRef: A,
                    progressBarRef: R,
                    quest: y,
                    isExpanded: E,
                    isHovered: D,
                }),
            (0, r.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": E && b,
                className: o()(m, h.contentCollapsed, {
                    [h.contentCollapsedExpanded]: E,
                    [h.contentCollapsedAccepted]: P,
                }),
                style: {
                    opacity: g.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: C ? "linear-gradient(90deg, ".concat(p.aY, ", ").concat(p.v6, ")") : void 0,
                },
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                children: (0, r.jsxs)("div", {
                    className: h.contentCollapsedWrapper,
                    children: [
                        C &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        quest: y,
                                        onCtxMenuOpen: I,
                                        onCtxMenuClose: T,
                                        onCtxMenuSelect: S,
                                    }),
                                    (0, r.jsx)("div", { className: h.divider }),
                                ],
                            }),
                        P
                            ? (0, r.jsx)(f.Z, {
                                  contentLocation: "collapsed",
                                  quest: y,
                                  progressBarRef: R,
                                  isExpanded: !1,
                                  percentComplete: w,
                              })
                            : null,
                        C &&
                            (0, r.jsx)(u.y, {
                                quest: y,
                                useReducedMotion: v,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: c.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: O,
                                sourceQuestContent: c.jn.QUEST_BAR_V2,
                            }),
                    ],
                }),
            }),
        ],
    });
});
