n.d(t, { Y: () => v }), n(388685);
var i,
    r = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(236726),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    p = n(556505),
    f = n(513202),
    h = n(981631),
    m = n(388032),
    g = n(218877);
let b = ["embedded_cover"],
    C = {
        tension: 800,
        friction: 24,
    };
var y =
    (((i = y || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (i[(i.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    i);
function v(e) {
    var t;
    let { context: n, activityItem: i, onClick: a, aspectRatio: y = 0, animatedDivClass: v, commandOrigin: x } = e,
        {
            onActivityItemSelected: O,
            imageBackground: E,
            activityAction: j,
            labelType: S,
        } = (0, u.ZP)({
            context: n,
            activityItem: i,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: f.Z,
            assetNames: b,
            commandOrigin: x,
        }),
        [_, P] = l.useState(!1),
        I = l.useCallback(() => {
            P(!0);
        }, [P]),
        Z = l.useCallback(() => {
            P(!1);
        }, [P]),
        T = l.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: g.overlayBadge,
                    children: (0, r.jsx)("div", {
                        className: g.badgeContainer,
                        children: (0, r.jsx)(p.Z, { labelType: S }),
                    }),
                }),
            [S],
        ),
        N = l.useMemo(() => {
            switch (j) {
                case u.JS.JOIN:
                    return (0, r.jsx)("div", {
                        className: g.activityAction,
                        children: (0, r.jsx)("div", {
                            className: g.activityActionButton,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: m.intl.string(m.t.VJlc0S),
                            }),
                        }),
                    });
                case u.JS.LEAVE:
                    return (0, r.jsx)("div", {
                        className: g.activityAction,
                        children: (0, r.jsx)("div", {
                            className: o()(g.activityActionButton, g.activityActionButtonDanger),
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: m.intl.string(m.t["wH/wDO"]),
                            }),
                        }),
                    });
                case u.JS.START:
                default:
                    return null;
            }
        }, [j]);
    return (0, r.jsx)(c.P3F, {
        onClick: O,
        onFocus: I,
        onBlur: Z,
        onMouseEnter: I,
        onMouseLeave: Z,
        className: g.activityItemButtonInnerClass,
        children: (0, r.jsx)(c.AMe, {
            config: C,
            from: { value: 0 },
            to: { value: +!!_ },
            children: (e) => {
                let { value: t } = e;
                return (0, r.jsx)(c.f6W, {
                    theme: h.BRd.DARK,
                    children: (e) =>
                        (0, r.jsxs)(s.animated.div, {
                            className: o()(e, g.activityItem, v, {
                                [g.activityItem_13_11]: 0 === y,
                                [g.activityItem_16_9]: 1 === y,
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                            },
                            children: [
                                (0, r.jsx)(d.Z, {
                                    imageBackground: E,
                                    applicationName: i.application.name,
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
v.AspectRatio = y;
