n.d(t, { Y: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(717976),
    l = n(481060),
    c = n(542094),
    u = n(182906),
    d = n(556505),
    f = n(513202),
    _ = n(981631),
    p = n(388032),
    h = n(748788);
let m = ["embedded_cover"],
    g = {
        tension: 800,
        friction: 24,
    };
var E = (function (e) {
    return (e[(e.THIRTEEN_BY_ELEVEN = 0)] = "THIRTEEN_BY_ELEVEN"), (e[(e.SIXTEEN_BY_NINE = 1)] = "SIXTEEN_BY_NINE"), e;
})(E || {});
function b(e) {
    var t;
    let { context: n, activityItem: o, onClick: E, aspectRatio: b = 0, animatedDivClass: y, commandOrigin: O } = e,
        {
            onActivityItemSelected: v,
            imageBackground: I,
            activityAction: T,
            labelType: S,
        } = (0, c.ZP)({
            context: n,
            activityItem: o,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: E,
            embeddedActivitiesManager: f.Z,
            assetNames: m,
            commandOrigin: O,
        }),
        [A, N] = i.useState(!1),
        C = i.useCallback(() => {
            N(!0);
        }, [N]),
        R = i.useCallback(() => {
            N(!1);
        }, [N]),
        P = i.useMemo(
            () =>
                (0, r.jsx)("div", {
                    className: h.overlayBadge,
                    children: (0, r.jsx)("div", {
                        className: h.badgeContainer,
                        children: (0, r.jsx)(d.Z, { labelType: S }),
                    }),
                }),
            [S],
        ),
        w = i.useMemo(() => {
            switch (T) {
                case c.JS.JOIN:
                    return (0, r.jsx)("div", {
                        className: h.activityAction,
                        children: (0, r.jsx)("div", {
                            className: h.activityActionButton,
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: p.intl.string(p.t.VJlc0d),
                            }),
                        }),
                    });
                case c.JS.LEAVE:
                    return (0, r.jsx)("div", {
                        className: h.activityAction,
                        children: (0, r.jsx)("div", {
                            className: a()(h.activityActionButton, h.activityActionButtonDanger),
                            children: (0, r.jsx)(l.Text, {
                                variant: "text-sm/medium",
                                color: "always-white",
                                children: p.intl.string(p.t["wH/wDA"]),
                            }),
                        }),
                    });
                case c.JS.START:
                default:
                    return null;
            }
        }, [T]);
    return (0, r.jsx)(l.P3F, {
        onClick: v,
        onFocus: C,
        onBlur: R,
        onMouseEnter: C,
        onMouseLeave: R,
        className: h.activityItemButtonInnerClass,
        children: (0, r.jsx)(l.AMe, {
            config: g,
            from: { value: 0 },
            to: { value: +!!A },
            children: (e) => {
                let { value: t } = e;
                return (0, r.jsx)(l.f6W, {
                    theme: _.BRd.DARK,
                    children: (e) =>
                        (0, r.jsxs)(s.animated.div, {
                            className: a()(e, h.activityItem, y, {
                                [h.activityItem_13_11]: 0 === b,
                                [h.activityItem_16_9]: 1 === b,
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => "scale(".concat(e, ")")),
                            },
                            children: [
                                (0, r.jsx)(u.Z, {
                                    imageBackground: I,
                                    applicationName: o.application.name,
                                    imageClassName: h.activitySuggestionImage,
                                    imageNotFoundClassName: h.brokenImageIconWrapper,
                                }),
                                P,
                                w,
                            ],
                        }),
                });
            },
        }),
    });
}
b.AspectRatio = E;
