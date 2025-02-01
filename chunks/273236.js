s.d(t, { Z: () => x }), s(47120);
var i = s(200651),
    n = s(192379),
    a = s(120356),
    r = s.n(a),
    l = s(995295),
    c = s(481060),
    d = s(388032),
    o = s(103849),
    m = s(415562);
let x = n.forwardRef(function (e, t) {
    let {} = e,
        [a, r] = n.useState('before'),
        [x, j] = n.useState(!1),
        [g, _] = n.useState(!1);
    n.useImperativeHandle(t, () => ({ maybeChangeToAfterTab: () => (g || v('after'), g) }));
    let v = n.useCallback((e) => {
        j(!0),
            setTimeout(() => {
                l.unstable_batchedUpdates(() => {
                    'after' === e && _(!0), j(!1), r(e);
                });
            }, 400);
    }, []);
    return (0, i.jsxs)(c.Ttm, {
        className: m.content,
        children: [
            (0, i.jsxs)('div', {
                className: m.header,
                children: [
                    (0, i.jsx)(c.Dkj, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40
                    }),
                    (0, i.jsx)(c.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: d.intl.string(d.t.c0Fhpa)
                    }),
                    (0, i.jsx)(c.Text, {
                        className: m.__invalid_subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.intl.string(d.t.dKPfBQ)
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: o.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: o.tabs,
                        children: [
                            (0, i.jsx)('div', {
                                className: o.tabBackground,
                                style: { left: 'before' === a ? 0 : '50%' }
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => v('before'),
                                children: (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'before' === a ? 'header-primary' : 'text-muted',
                                    children: d.intl.string(d.t.sLv7LC)
                                })
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => v('after'),
                                children: (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'after' === a ? 'header-primary' : 'text-muted',
                                    children: d.intl.string(d.t.R8eSY2)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: o.previewContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: o.guilds,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: o.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: s(180681),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: 'after' === a ? o.guild : o.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: s(390115),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: 'after' === a ? o.guild : o.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: s(536411),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: o.channels,
                                children: [
                                    (0, i.jsx)(u, {
                                        mention: !0,
                                        name: d.intl.string(d.t.WFejRk)
                                    }),
                                    (0, i.jsx)(u, { name: d.intl.string(d.t.jqWm9f) }),
                                    (0, i.jsx)(u, {
                                        grey: 'after' === a,
                                        name: d.intl.string(d.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(u, {
                                        grey: 'after' === a,
                                        name: d.intl.string(d.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(u, { name: d.intl.string(d.t['Ci+Our']) }),
                                    (0, i.jsx)(u, {
                                        grey: 'after' === a,
                                        name: d.intl.string(d.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(u, {
                                        grey: 'after' === a,
                                        name: d.intl.string(d.t['Ime/t7'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || 'after' === a,
                        className: o.tipBefore1,
                        text: d.intl.string(d.t.WrPMOD)
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || 'after' === a,
                        className: o.tipBefore2,
                        text: d.intl.string(d.t['pApL7+'])
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || 'before' === a,
                        className: o.tipAfter1,
                        text: d.intl.string(d.t.eZb3iY)
                    }),
                    (0, i.jsx)(h, {
                        hidden: x || 'before' === a,
                        className: o.tipAfter2,
                        text: d.intl.string(d.t.M3KrJS)
                    })
                ]
            })
        ]
    });
});
function h(e) {
    let { text: t, className: s, hidden: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(s, o.tip, { [o.hidden]: n }),
        children: [
            (0, i.jsx)(c.Text, {
                className: o.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, i.jsx)('div', { className: o.tipLine })
        ]
    });
}
function u(e) {
    let { grey: t, mention: s, name: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(o.channel, {
            [o.grey]: t,
            [o.mention]: s
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: o.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: o.channelName,
                children: n
            })
        ]
    });
}
