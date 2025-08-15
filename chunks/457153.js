n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    s = n(647438),
    o = n(120356),
    a = n.n(o),
    i = n(815061),
    l = n(113434),
    c = n(497505),
    u = n(164495),
    d = n(759853),
    p = n(95985),
    m = n(688927),
    g = n(743294),
    f = n(557579);
let x = s.forwardRef(function (e, t) {
    var n;
    let {
            className: o,
            expansionSpring: x,
            isExpanded: h,
            isExpansionAnimationComplete: b,
            quest: _,
            taskDetails: j,
            useReducedMotion: v,
            onCtxMenuOpen: C,
            onCtxMenuClose: y,
            onCtxMenuSelect: E,
            overlayRef: O,
            shouldShowRewardsCTAWhenCollapsed: S,
        } = e,
        T = (0, l.Jf)(_),
        w = s.useRef(null),
        P = (null == (n = _.userStatus) ? void 0 : n.enrolledAt) != null,
        A = null != T ? T.percentComplete : j.percentComplete,
        [N, R] = s.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            S &&
                (0, r.jsx)(d.Z, {
                    expansionSpring: x,
                    overlayRef: O,
                    progressBarRef: w,
                    quest: _,
                    isExpanded: h,
                    isHovered: N,
                    shouldShowRewardsCTAWhenCollapsed: !0,
                }),
            (0, r.jsx)(i.animated.div, {
                ref: t,
                "aria-hidden": h && b,
                className: a()(o, f.contentCollapsed, {
                    [f.contentCollapsedExpanded]: h,
                    [f.contentCollapsedAccepted]: P,
                }),
                style: {
                    opacity: x.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: S ? "linear-gradient(90deg, ".concat(g.aY, ", ").concat(g.v6, ")") : void 0,
                },
                onMouseEnter: () => R(!0),
                onMouseLeave: () => R(!1),
                children: (0, r.jsxs)("div", {
                    className: f.contentCollapsedWrapper,
                    children: [
                        S &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        quest: _,
                                        onCtxMenuOpen: C,
                                        onCtxMenuClose: y,
                                        onCtxMenuSelect: E,
                                    }),
                                    (0, r.jsx)("div", { className: f.divider }),
                                ],
                            }),
                        P
                            ? (0, r.jsx)(p.Z, {
                                  contentLocation: "collapsed",
                                  quest: _,
                                  progressBarRef: w,
                                  isExpanded: !1,
                                  percentComplete: A,
                              })
                            : null,
                        S &&
                            (0, r.jsx)(u.y, {
                                quest: _,
                                useReducedMotion: v,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: c.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: j,
                                sourceQuestContent: c.jn.QUEST_BAR_V2,
                                shouldShowRewardsCTAWhenCollapsed: !0,
                            }),
                    ],
                }),
            }),
        ],
    });
});
