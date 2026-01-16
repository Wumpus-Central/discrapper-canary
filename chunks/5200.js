n.d(t, { Y: () => O }), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(81239),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    p = n(556505),
    f = n(513202),
    h = n(981631),
    g = n(388032),
    m = n(218877);
let b = ["embedded_cover"],
    y = {
        tension: 800,
        friction: 24,
    };
var v =
    (((r = v || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (r[(r.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    r);
function O(e) {
    var t;
    let { context: n, activityItem: r, onClick: a, aspectRatio: v = 0, animatedDivClass: O, commandOrigin: j } = e,
        {
            onActivityItemSelected: x,
            imageBackground: C,
            activityAction: E,
            labelType: S,
        } = (0, u.ZP)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: f.Z,
            assetNames: b,
            commandOrigin: j,
        }),
        [_, I] = l.useState(!1),
        P = l.useCallback(() => {
            I(!0);
        }, [I]),
        Z = l.useCallback(() => {
            I(!1);
        }, [I]),
        N = l.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: m.overlayBadge,
                    children: (0, i.jsx)("div", {
                        className: m.badgeContainer,
                        children: (0, i.jsx)(p.Z, { labelType: S }),
                    }),
                }),
            [S],
        ),
        T = l.useMemo(() => {
            switch (E) {
                case u.JS.JOIN:
                    return (0, i.jsx)("div", {
                        className: m.activityAction,
                        children: (0, i.jsx)("div", {
                            className: m.activityActionButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.intl.string(g.t.VJlc0S),
                            }),
                        }),
                    });
                case u.JS.LEAVE:
                    return (0, i.jsx)("div", {
                        className: m.activityAction,
                        children: (0, i.jsx)("div", {
                            className: o()(m.activityActionButton, m.activityActionButtonDanger),
                            children: (0, i.jsx)(c.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: g.intl.string(g.t["wH/wDO"]),
                            }),
                        }),
                    });
                case u.JS.START:
                default:
                    return null;
            }
        }, [E]);
    return (0, i.jsx)(c.P3F, {
        onClick: x,
        onFocus: P,
        onBlur: Z,
        onMouseEnter: P,
        onMouseLeave: Z,
        className: m.activityItemButtonInnerClass,
        children: (0, i.jsx)(c.AMe, {
            config: y,
            from: { value: 0 },
            to: { value: +!!_ },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(c.f6W, {
                    theme: h.BRd.DARK,
                    children: (e) =>
                        (0, i.jsxs)(s.animated.div, {
                            className: o()(e, m.activityItem, O, {
                                [m.activityItem_13_11]: 0 === v,
                                [m.activityItem_16_9]: 1 === v,
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                            },
                            children: [
                                (0, i.jsx)(d.Z, {
                                    imageBackground: C,
                                    applicationName: r.application.name,
                                    imageClassName: m.activitySuggestionImage,
                                    imageNotFoundClassName: m.brokenImageIconWrapper,
                                }),
                                N,
                                T,
                            ],
                        }),
                });
            },
        }),
    });
}
O.AspectRatio = v;
