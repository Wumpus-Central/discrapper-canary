n.d(t, { Y: () => x }), n(388685);
var r,
    i = n(54381),
    l = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(81239),
    c = n(636977),
    u = n(481060),
    d = n(633181),
    p = n(542094),
    f = n(182906),
    h = n(556505),
    g = n(513202),
    m = n(981631),
    b = n(388032),
    y = n(218877);
let v = ["embedded_cover"],
    O = {
        tension: 800,
        friction: 24,
    };
var j =
    (((r = j || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"),
    (r[(r.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"),
    r);
function x(e) {
    var t;
    let { context: n, activityItem: r, onClick: a, aspectRatio: j = 0, animatedDivClass: x, commandOrigin: C } = e,
        {
            onActivityItemSelected: E,
            imageBackground: S,
            activityAction: _,
            labelType: I,
        } = (0, p.ZP)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: g.Z,
            assetNames: v,
            commandOrigin: C,
        }),
        [P, Z] = l.useState(!1),
        N = l.useCallback(() => {
            Z(!0);
        }, [Z]),
        T = l.useCallback(() => {
            Z(!1);
        }, [Z]),
        A = l.useMemo(
            () =>
                (0, i.jsx)("div", {
                    className: y.overlayBadge,
                    children: (0, i.jsx)("div", {
                        className: y.badgeContainer,
                        children: (0, i.jsx)(h.Z, { labelType: I }),
                    }),
                }),
            [I],
        ),
        w = l.useMemo(() => {
            switch (_) {
                case p.JS.JOIN:
                    return (0, i.jsx)("div", {
                        className: y.activityAction,
                        children: (0, i.jsx)("div", {
                            className: y.activityActionButton,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: b.intl.string(b.t.VJlc0S),
                            }),
                        }),
                    });
                case p.JS.LEAVE:
                    return (0, i.jsx)("div", {
                        className: y.activityAction,
                        children: (0, i.jsx)("div", {
                            className: o()(y.activityActionButton, y.activityActionButtonDanger),
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: b.intl.string(b.t["wH/wDO"]),
                            }),
                        }),
                    });
                case p.JS.START:
                default:
                    return null;
            }
        }, [_]);
    return (0, i.jsx)(u.P3F, {
        onClick: E,
        onFocus: N,
        onBlur: T,
        onMouseEnter: N,
        onMouseLeave: T,
        className: y.activityItemButtonInnerClass,
        children: (0, i.jsx)(u.AMe, {
            config: O,
            from: { value: 0 },
            to: { value: +!!P },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(u.f6W, {
                    theme: m.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(d.Z, {
                            applicationId: r.application.id,
                            questContent: c.j.ACTIVITY_SUGGESTION,
                            children: (n) =>
                                (0, i.jsxs)(s.animated.div, {
                                    ref: n,
                                    className: o()(e, y.activityItem, x, {
                                        [y.activityItem_13_11]: 0 === j,
                                        [y.activityItem_16_9]: 1 === j,
                                    }),
                                    style: {
                                        transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                                    },
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            imageBackground: S,
                                            applicationName: r.application.name,
                                            imageClassName: y.activitySuggestionImage,
                                            imageNotFoundClassName: y.brokenImageIconWrapper,
                                        }),
                                        A,
                                        w,
                                    ],
                                }),
                        }),
                });
            },
        }),
    });
}
x.AspectRatio = j;
