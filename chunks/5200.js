n.d(t, {
    Y: function () {
        return _;
    }
}),
    n(47120);
var i,
    l,
    r = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(666912),
    d = n(481060),
    u = n(542094),
    h = n(182906),
    p = n(556505),
    m = n(513202),
    f = n(981631),
    g = n(388032),
    C = n(801848);
let x = ['embedded_cover'],
    v = {
        tension: 800,
        friction: 24
    };
function _(e) {
    var t;
    let { channel: n, activityItem: i, onClick: l, aspectRatio: s = 0, animatedDivClass: _, commandOrigin: I } = e,
        {
            onActivityItemSelected: E,
            imageBackground: b,
            activityAction: Z,
            labelType: N
        } = (0, u.ZP)({
            channel: n,
            activityItem: i,
            guildId: null !== (t = n.getGuildId()) && void 0 !== t ? t : void 0,
            locationObject: {},
            onActivityItemSelected: l,
            embeddedActivitiesManager: m.Z,
            assetNames: x,
            commandOrigin: I
        }),
        [S, T] = a.useState(!1),
        j = a.useCallback(() => {
            T(!0);
        }, [T]),
        A = a.useCallback(() => {
            T(!1);
        }, [T]),
        y = a.useMemo(
            () =>
                (0, r.jsx)('div', {
                    className: C.overlayBadge,
                    children: (0, r.jsx)('div', {
                        className: C.badgeContainer,
                        children: (0, r.jsx)(p.Z, {
                            name: i.application.name,
                            labelType: N
                        })
                    })
                }),
            [i.application.name, N]
        ),
        P = a.useMemo(() => {
            switch (Z) {
                case u.JS.JOIN:
                    return (0, r.jsx)('div', {
                        className: C.activityAction,
                        children: (0, r.jsx)('div', {
                            className: C.activityActionButton,
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t.VJlc0d)
                            })
                        })
                    });
                case u.JS.LEAVE:
                    return (0, r.jsx)('div', {
                        className: C.activityAction,
                        children: (0, r.jsx)('div', {
                            className: o()(C.activityActionButton, C.activityActionButtonDanger),
                            children: (0, r.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: g.intl.string(g.t['wH/wDA'])
                            })
                        })
                    });
                case u.JS.START:
                default:
                    return (0, r.jsx)(r.Fragment, {});
            }
        }, [Z]);
    return (0, r.jsx)(d.Button, {
        onClick: E,
        color: 'transparent',
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.NONE,
        onFocus: j,
        onBlur: A,
        onMouseEnter: j,
        onMouseLeave: A,
        innerClassName: C.activityItemButtonInnerClass,
        children: (0, r.jsx)(d.Spring, {
            config: v,
            from: { value: 0 },
            to: { value: S ? 1 : 0 },
            children: (e) => {
                let { value: t } = e;
                return (0, r.jsx)(d.ThemeProvider, {
                    theme: f.BRd.DARK,
                    children: (e) =>
                        (0, r.jsx)(c.animated.div, {
                            className: o()(e, C.activityItem, _, {
                                [C.activityItem_13_11]: 0 === s,
                                [C.activityItem_16_9]: 1 === s
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(h.Z, {
                                        imageBackground: b,
                                        applicationName: i.application.name,
                                        imageClassName: C.activitySuggestionImage,
                                        imageNotFoundClassName: C.brokenImageIconWrapper
                                    }),
                                    y,
                                    P
                                ]
                            })
                        })
                });
            }
        })
    });
}
((l = i || (i = {}))[(l.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (l[(l.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), (_.AspectRatio = i);
