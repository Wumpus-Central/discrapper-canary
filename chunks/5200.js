n.d(t, { Y: () => C }), n(388685);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(272573),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    p = n(556505),
    h = n(513202),
    f = n(981631),
    m = n(388032),
    g = n(968216);
let b = ['embedded_cover'],
    _ = {
        tension: 800,
        friction: 24
    };
var y = (((r = y || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (r[(r.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), r);
function C(e) {
    var t;
    let { context: n, activityItem: r, onClick: o, aspectRatio: y = 0, animatedDivClass: C, commandOrigin: x } = e,
        {
            onActivityItemSelected: v,
            imageBackground: j,
            activityAction: O,
            labelType: E
        } = (0, u.ZP)({
            context: n,
            activityItem: r,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: o,
            embeddedActivitiesManager: h.Z,
            assetNames: b,
            commandOrigin: x
        }),
        [I, S] = l.useState(!1),
        P = l.useCallback(() => {
            S(!0);
        }, [S]),
        Z = l.useCallback(() => {
            S(!1);
        }, [S]),
        N = l.useMemo(
            () =>
                (0, i.jsx)('div', {
                    className: g.overlayBadge,
                    children: (0, i.jsx)('div', {
                        className: g.badgeContainer,
                        children: (0, i.jsx)(p.Z, { labelType: E })
                    })
                }),
            [E]
        ),
        T = l.useMemo(() => {
            switch (O) {
                case u.JS.JOIN:
                    return (0, i.jsx)('div', {
                        className: g.activityAction,
                        children: (0, i.jsx)('div', {
                            className: g.activityActionButton,
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: m.intl.string(m.t.VJlc0d)
                            })
                        })
                    });
                case u.JS.LEAVE:
                    return (0, i.jsx)('div', {
                        className: g.activityAction,
                        children: (0, i.jsx)('div', {
                            className: a()(g.activityActionButton, g.activityActionButtonDanger),
                            children: (0, i.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: m.intl.string(m.t['wH/wDA'])
                            })
                        })
                    });
                case u.JS.START:
                default:
                    return null;
            }
        }, [O]);
    return (0, i.jsx)(c.zxk, {
        onClick: v,
        color: 'transparent',
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.NONE,
        onFocus: P,
        onBlur: Z,
        onMouseEnter: P,
        onMouseLeave: Z,
        innerClassName: g.activityItemButtonInnerClass,
        children: (0, i.jsx)(c.AMe, {
            config: _,
            from: { value: 0 },
            to: { value: +!!I },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(c.f6W, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, i.jsxs)(s.animated.div, {
                            className: a()(e, g.activityItem, C, {
                                [g.activityItem_13_11]: 0 === y,
                                [g.activityItem_16_9]: 1 === y
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: [
                                (0, i.jsx)(d.Z, {
                                    imageBackground: j,
                                    applicationName: r.application.name,
                                    imageClassName: g.activitySuggestionImage,
                                    imageNotFoundClassName: g.brokenImageIconWrapper
                                }),
                                N,
                                T
                            ]
                        })
                });
            }
        })
    });
}
C.AspectRatio = y;
