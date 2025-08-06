(n.d(t, { Y: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(126663),
    l = n(755721),
    c = n(481060),
    u = n(542094),
    d = n(182906),
    f = n(556505),
    _ = n(513202),
    p = n(981631),
    h = n(388032),
    m = n(968216);
let g = ['embedded_cover'],
    E = {
        tension: 800,
        friction: 24
    };
var b = (function (e) {
    return ((e[(e.THIRTEEN_BY_ELEVEN = 0)] = 'THIRTEEN_BY_ELEVEN'), (e[(e.SIXTEEN_BY_NINE = 1)] = 'SIXTEEN_BY_NINE'), e);
})(b || {});
function y(e) {
    var t;
    let { context: n, activityItem: o, onClick: b, aspectRatio: y = 0, animatedDivClass: O, commandOrigin: v } = e,
        {
            onActivityItemSelected: I,
            imageBackground: T,
            activityAction: S,
            labelType: A
        } = (0, u.ZP)({
            context: n,
            activityItem: o,
            guildId: null != (t = n.channel.getGuildId()) ? t : void 0,
            locationObject: {},
            onActivityItemSelected: b,
            embeddedActivitiesManager: _.Z,
            assetNames: g,
            commandOrigin: v
        }),
        [N, C] = i.useState(!1),
        R = i.useCallback(() => {
            C(!0);
        }, [C]),
        P = i.useCallback(() => {
            C(!1);
        }, [C]),
        w = i.useMemo(
            () =>
                (0, r.jsx)('div', {
                    className: m.overlayBadge,
                    children: (0, r.jsx)('div', {
                        className: m.badgeContainer,
                        children: (0, r.jsx)(f.Z, { labelType: A })
                    })
                }),
            [A]
        ),
        D = i.useMemo(() => {
            switch (S) {
                case u.JS.JOIN:
                    return (0, r.jsx)('div', {
                        className: m.activityAction,
                        children: (0, r.jsx)('div', {
                            className: m.activityActionButton,
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: h.intl.string(h.t.VJlc0d)
                            })
                        })
                    });
                case u.JS.LEAVE:
                    return (0, r.jsx)('div', {
                        className: m.activityAction,
                        children: (0, r.jsx)('div', {
                            className: a()(m.activityActionButton, m.activityActionButtonDanger),
                            children: (0, r.jsx)(c.Text, {
                                variant: 'text-sm/medium',
                                color: 'always-white',
                                children: h.intl.string(h.t['wH/wDA'])
                            })
                        })
                    });
                case u.JS.START:
                default:
                    return null;
            }
        }, [S]);
    return (0, r.jsx)(l.zx, {
        onClick: I,
        color: 'transparent',
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.NONE,
        onFocus: R,
        onBlur: P,
        onMouseEnter: R,
        onMouseLeave: P,
        innerClassName: m.activityItemButtonInnerClass,
        children: (0, r.jsx)(c.AMe, {
            config: E,
            from: { value: 0 },
            to: { value: +!!N },
            children: (e) => {
                let { value: t } = e;
                return (0, r.jsx)(c.f6W, {
                    theme: p.BRd.DARK,
                    children: (e) =>
                        (0, r.jsxs)(s.animated.div, {
                            className: a()(e, m.activityItem, O, {
                                [m.activityItem_13_11]: 0 === y,
                                [m.activityItem_16_9]: 1 === y
                            }),
                            style: {
                                transform: t.to([0, 1], [1, 1.05]).to((e) => 'scale('.concat(e, ')'))
                            },
                            children: [
                                (0, r.jsx)(d.Z, {
                                    imageBackground: T,
                                    applicationName: o.application.name,
                                    imageClassName: m.activitySuggestionImage,
                                    imageNotFoundClassName: m.brokenImageIconWrapper
                                }),
                                w,
                                D
                            ]
                        })
                });
            }
        })
    });
}
y.AspectRatio = b;
