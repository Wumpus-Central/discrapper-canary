n.d(t, { Y: () => v }), n(47120);
var r,
    i = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    p = n(556505),
    h = n(513202),
    f = n(981631),
    m = n(388032),
    g = n(206950);
let b = ['embedded_cover'],
    _ = {
        tension: 800,
        friction: 24
    };
var C = (((r = C || {})[(r.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (r[(r.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), r);
function v(e) {
    var t;
    let { context: n, activityItem: r, onClick: o, aspectRatio: C = 0, animatedDivClass: v, commandOrigin: y } = e,
        {
            onActivityItemSelected: x,
            imageBackground: j,
            activityAction: O,
            labelType: N
        } = (0, u.ZP)({
            context: n,
            activityItem: r,
            guildId: null !== (t = n.channel.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: o,
            embeddedActivitiesManager: h.Z,
            assetNames: b,
            commandOrigin: y
        }),
        [E, P] = l.useState(!1),
        I = l.useCallback(() => {
            P(!0);
        }, [P]),
        S = l.useCallback(() => {
            P(!1);
        }, [P]),
        Z = l.useMemo(
            () =>
                (0, i.jsx)('div', {
                    className: g.overlayBadge,
                    children: (0, i.jsx)('div', {
                        className: g.badgeContainer,
                        children: (0, i.jsx)(p.Z, {
                            name: r.application.name,
                            labelType: N
                        })
                    })
                }),
            [r.application.name, N]
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
                                children: m.NW.string(m.t.VJlc0d)
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
                                children: m.NW.string(m.t['wH/wDA'])
                            })
                        })
                    });
                case u.JS.START:
                default:
                    return (0, i.jsx)(i.Fragment, {});
            }
        }, [O]);
    return (0, i.jsx)(c.zxk, {
        onClick: x,
        color: 'transparent',
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.NONE,
        onFocus: I,
        onBlur: S,
        onMouseEnter: I,
        onMouseLeave: S,
        innerClassName: g.activityItemButtonInnerClass,
        children: (0, i.jsx)(c.AMe, {
            config: _,
            from: { value: 0 },
            to: { value: +!!E },
            children: (e) => {
                let { value: t } = e;
                return (0, i.jsx)(c.f6W, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, i.jsx)(s.animated.div, {
                            className: a()(e, g.activityItem, v, {
                                [g.activityItem_13_11]: 0 === C,
                                [g.activityItem_16_9]: 1 === C
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(d.Z, {
                                        imageBackground: j,
                                        applicationName: r.application.name,
                                        imageClassName: g.activitySuggestionImage,
                                        imageNotFoundClassName: g.brokenImageIconWrapper
                                    }),
                                    Z,
                                    T
                                ]
                            })
                        })
                });
            }
        })
    });
}
v.AspectRatio = C;
