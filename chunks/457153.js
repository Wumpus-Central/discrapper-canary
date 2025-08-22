n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(202841),
    l = n(113434),
    c = n(497505),
    u = n(164495),
    d = n(759853),
    f = n(95985),
    _ = n(688927),
    p = n(743294),
    h = n(557579);
let m = i.forwardRef(function (e, t) {
    var n;
    let {
            className: a,
            expansionSpring: m,
            isExpanded: g,
            isExpansionAnimationComplete: E,
            quest: b,
            taskDetails: y,
            useReducedMotion: O,
            onCtxMenuOpen: v,
            onCtxMenuClose: I,
            onCtxMenuSelect: T,
            overlayRef: S,
            shouldShowRewardsCTAWhenCollapsed: A,
        } = e,
        C = (0, l.Jf)(b),
        N = i.useRef(null),
        R = (null == (n = b.userStatus) ? void 0 : n.enrolledAt) != null,
        P = null != C ? C.percentComplete : y.percentComplete,
        [w, D] = i.useState(!1);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            A &&
                (0, r.jsx)(d.Z, {
                    expansionSpring: m,
                    overlayRef: S,
                    progressBarRef: N,
                    quest: b,
                    isExpanded: g,
                    isHovered: w,
                    shouldShowRewardsCTAWhenCollapsed: !0,
                }),
            (0, r.jsx)(s.animated.div, {
                ref: t,
                "aria-hidden": g && E,
                className: o()(a, h.contentCollapsed, {
                    [h.contentCollapsedExpanded]: g,
                    [h.contentCollapsedAccepted]: R,
                }),
                style: {
                    opacity: m.to({
                        range: [0, 1],
                        output: [1, 0],
                    }),
                    backgroundImage: A ? "linear-gradient(90deg, ".concat(p.aY, ", ").concat(p.v6, ")") : void 0,
                },
                onMouseEnter: () => D(!0),
                onMouseLeave: () => D(!1),
                children: (0, r.jsxs)("div", {
                    className: h.contentCollapsedWrapper,
                    children: [
                        A &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        quest: b,
                                        onCtxMenuOpen: v,
                                        onCtxMenuClose: I,
                                        onCtxMenuSelect: T,
                                    }),
                                    (0, r.jsx)("div", { className: h.divider }),
                                ],
                            }),
                        R
                            ? (0, r.jsx)(f.Z, {
                                  contentLocation: "collapsed",
                                  quest: b,
                                  progressBarRef: N,
                                  isExpanded: !1,
                                  percentComplete: P,
                              })
                            : null,
                        A &&
                            (0, r.jsx)(u.y, {
                                quest: b,
                                useReducedMotion: O,
                                isExpanded: !1,
                                awaitingConsoleConnections: !1,
                                hasMadeProgress: !0,
                                isProgressing: !1,
                                activeScreen: c.LI.DESKTOP,
                                showBackButton: !1,
                                onBack: () => {},
                                taskDetails: y,
                                sourceQuestContent: c.jn.QUEST_BAR_V2,
                                shouldShowRewardsCTAWhenCollapsed: !0,
                            }),
                    ],
                }),
            }),
        ],
    });
});
