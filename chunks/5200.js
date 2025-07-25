(n.d(t, { Y: () => x }), n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(652141),
    c = n(755721),
    u = n(481060),
    d = n(542094),
    p = n(182906),
    h = n(556505),
    f = n(513202),
    m = n(981631),
    g = n(388032),
    b = n(968216);
let _ = ['embedded_cover'],
    y = {
        tension: 800,
        friction: 24
    };
var C = (((r = C || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (r[(r.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), r);
function x(e) {
    var t;
    let { context: n, activityItem: r, onClick: a, aspectRatio: C = 0, animatedDivClass: x, commandOrigin: v } = e,
        {
            onActivityItemSelected: j,
            imageBackground: O,
            activityAction: E,
            labelType: S
        } = (0, d.ZP)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: a,
            embeddedActivitiesManager: f.Z,
            assetNames: _,
            commandOrigin: v
        }),
        [P, I] = l.useState(!1),
        Z = l.useCallback(() => {
            I(!0);
        }, [I]),
        T = l.useCallback(() => {
            I(!1);
        }, [I]),
        N = l.useMemo(
            () =>
                (0, i.jsx)('div', {
                    className: b.overlayBadge,
                    children: (0, i.jsx)('div', {
                        className: b.badgeContainer,
                        children: (0, i.jsx)(h.Z, { labelType: S })
                    })
                }),
            [S]
        ),
        A = l.useMemo(() => {
            switch (E) {
                case d.JS.JOIN:
                    return (0, i.jsx)('div', {
                        className: b.activityAction,
                        children: (0, i.jsx)('div', {
                            className: b.activityActionButton,
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t.VJlc0d)
                            })
                        })
                    });
                case d.JS.LEAVE:
                    return (0, i.jsx)('div', {
                        className: b.activityAction,
                        children: (0, i.jsx)('div', {
                            className: o()(b.activityActionButton, b.activityActionButtonDanger),
                            children: (0, i.jsx)(u.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t['wH/wDA'])
                            })
                        })
                    });
                case d.JS.START:
                default:
                    return null;
            }
        }, [E]);
    return (0, i.jsx)(c.zx, {
        onClick: j,
        color: 'transparent',
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.NONE,
        onFocus: Z,
        onBlur: T,
        onMouseEnter: Z,
        onMouseLeave: T,
        innerClassName: b.activityItemButtonInnerClass,
        children: (0, i.jsx)(u.AMe, {
            config: y,
            from: { value: 0 },
            to: { value: +!!P },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(u.f6W, {
                    theme: m.BRd.DARK,
                    children: (e) =>
                        (0, i.jsxs)(s.animated.div, {
                            className: o()(e, b.activityItem, x, {
                                [b.activityItem_13_11]: 0 === C,
                                [b.activityItem_16_9]: 1 === C
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: [
                                (0, i.jsx)(p.Z, {
                                    imageBackground: O,
                                    applicationName: r.application.name,
                                    imageClassName: b.activitySuggestionImage,
                                    imageNotFoundClassName: b.brokenImageIconWrapper
                                }),
                                N,
                                A
                            ]
                        })
                });
            }
        })
    });
}
x.AspectRatio = C;
