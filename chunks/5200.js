n.d(t, { Y: () => C }), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(803948),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    p = n(556505),
    h = n(513202),
    f = n(981631),
    m = n(388032),
    g = n(748788);
let b = ["embedded_cover"],
    y = {
        tension: 800,
        friction: 24,
    };
var _ =
    (((r = _ || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (r[(r.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    r);
function C(e) {
    var t;
    let { context: n, activityItem: r, onClick: a, aspectRatio: _ = 0, animatedDivClass: C, commandOrigin: x } = e,
        {
            onActivityItemSelected: v,
            imageBackground: O,
            activityAction: j,
            labelType: E,
        } = (0, u.ZP)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: h.Z,
            assetNames: b,
            commandOrigin: x,
        }),
        [S, P] = l.useState(!1),
        I = l.useCallback(() => {
            P(!0);
        }, [P]),
        Z = l.useCallback(() => {
            P(!1);
        }, [P]),
        T = l.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: g.overlayBadge,
                    children: (0, i.jsx)("div", {
                        className: g.badgeContainer,
                        children: (0, i.jsx)(p.Z, { labelType: E }),
                    }),
                }),
            [E],
        ),
        N = l.useMemo(() => {
            switch (j) {
                case u.JS.JOIN:
                    return (0, i.jsx)("div", {
                        className: g.activityAction,
                        children: (0, i.jsx)("div", {
                            className: g.activityActionButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: m.intl.string(m.t.VJlc0d),
                            }),
                        }),
                    });
                case u.JS.LEAVE:
                    return (0, i.jsx)("div", {
                        className: g.activityAction,
                        children: (0, i.jsx)("div", {
                            className: o()(g.activityActionButton, g.activityActionButtonDanger),
                            children: (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: m.intl.string(m.t["wH/wDA"]),
                            }),
                        }),
                    });
                case u.JS.START:
                default:
                    return null;
            }
        }, [j]);
    return (0, i.jsx)(c.P3F, {
        onClick: v,
        onFocus: I,
        onBlur: Z,
        onMouseEnter: I,
        onMouseLeave: Z,
        className: g.activityItemButtonInnerClass,
        children: (0, i.jsx)(c.AMe, {
            config: y,
            from: { value: 0 },
            to: { value: +!!S },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(c.f6W, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, i.jsxs)(s.animated.div, {
                            className: o()(e, g.activityItem, C, {
                                [g.activityItem_13_11]: 0 === _,
                                [g.activityItem_16_9]: 1 === _,
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                            },
                            children: [
                                (0, i.jsx)(d.Z, {
                                    imageBackground: O,
                                    applicationName: r.application.name,
                                    imageClassName: g.activitySuggestionImage,
                                    imageNotFoundClassName: g.brokenImageIconWrapper,
                                }),
                                T,
                                N,
                            ],
                        }),
                });
            },
        }),
    });
}
C.AspectRatio = _;
