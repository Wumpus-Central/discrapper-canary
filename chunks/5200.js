n.d(t, { Y: () => v }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(642128),
    c = n(481060),
    d = n(542094),
    u = n(182906),
    h = n(556505),
    p = n(513202),
    m = n(981631),
    f = n(388032),
    g = n(801848);
let _ = ['embedded_cover'],
    C = {
        tension: 800,
        friction: 24
    };
var x = (((i = x || {})[(i.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (i[(i.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), i);
function v(e) {
    var t;
    let { context: n, activityItem: i, onClick: r, aspectRatio: x = 0, animatedDivClass: v, commandOrigin: E } = e,
        {
            onActivityItemSelected: I,
            imageBackground: b,
            activityAction: Z,
            labelType: N
        } = (0, d.ZP)({
            context: n,
            activityItem: i,
            guildId: null !== (t = n.channel.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: r,
            embeddedActivitiesManager: p.Z,
            assetNames: _,
            commandOrigin: E
        }),
        [T, S] = a.useState(!1),
        j = a.useCallback(() => {
            S(!0);
        }, [S]),
        y = a.useCallback(() => {
            S(!1);
        }, [S]),
        A = a.useMemo(
            () =>
                (0, l.jsx)('div', {
                    className: g.overlayBadge,
                    children: (0, l.jsx)('div', {
                        className: g.badgeContainer,
                        children: (0, l.jsx)(h.Z, {
                            name: i.application.name,
                            labelType: N
                        })
                    })
                }),
            [i.application.name, N]
        ),
        P = a.useMemo(() => {
            switch (Z) {
                case d.JS.JOIN:
                    return (0, l.jsx)('div', {
                        className: g.activityAction,
                        children: (0, l.jsx)('div', {
                            className: g.activityActionButton,
                            children: (0, l.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.intl.string(f.t.VJlc0d)
                            })
                        })
                    });
                case d.JS.LEAVE:
                    return (0, l.jsx)('div', {
                        className: g.activityAction,
                        children: (0, l.jsx)('div', {
                            className: s()(g.activityActionButton, g.activityActionButtonDanger),
                            children: (0, l.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: f.intl.string(f.t['wH/wDA'])
                            })
                        })
                    });
                case d.JS.START:
                default:
                    return (0, l.jsx)(l.Fragment, {});
            }
        }, [Z]);
    return (0, l.jsx)(c.zxk, {
        onClick: I,
        color: 'transparent',
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.NONE,
        onFocus: j,
        onBlur: y,
        onMouseEnter: j,
        onMouseLeave: y,
        innerClassName: g.activityItemButtonInnerClass,
        children: (0, l.jsx)(c.AMe, {
            config: C,
            from: { value: 0 },
            to: { value: T ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, l.jsx)(c.f6W, {
                    theme: m.BRd.DARK,
                    children: (e) =>
                        (0, l.jsx)(o.animated.div, {
                            className: s()(e, g.activityItem, v, {
                                [g.activityItem_13_11]: 0 === x,
                                [g.activityItem_16_9]: 1 === x
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(u.Z, {
                                        imageBackground: b,
                                        applicationName: i.application.name,
                                        imageClassName: g.activitySuggestionImage,
                                        imageNotFoundClassName: g.brokenImageIconWrapper
                                    }),
                                    A,
                                    P
                                ]
                            })
                        })
                });
            }
        })
    });
}
v.AspectRatio = x;
