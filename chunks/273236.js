s.d(t, { Z: () => x }), s(47120);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    l = s(995295),
    c = s(481060),
    d = s(388032),
    o = s(94546),
    m = s(699343);
let x = i.forwardRef(function (e, t) {
    let {} = e,
        [r, a] = i.useState('before'),
        [x, j] = i.useState(!1),
        [g, N] = i.useState(!1);
    i.useImperativeHandle(t, () => ({ maybeChangeToAfterTab: () => (g || _('after'), g) }));
    let _ = i.useCallback((e) => {
        j(!0),
            setTimeout(() => {
                l.unstable_batchedUpdates(() => {
                    'after' === e && N(!0), j(!1), a(e);
                });
            }, 400);
    }, []);
    return (0, n.jsxs)(c.Ttm, {
        className: m.content,
        children: [
            (0, n.jsxs)('div', {
                className: m.header,
                children: [
                    (0, n.jsx)(c.Dkj, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40
                    }),
                    (0, n.jsx)(c.X6q, {
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        children: d.NW.string(d.t.c0Fhpa)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: m.__invalid_subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d.NW.string(d.t.dKPfBQ)
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: o.container,
                children: [
                    (0, n.jsxs)('div', {
                        className: o.tabs,
                        children: [
                            (0, n.jsx)('div', {
                                className: o.tabBackground,
                                style: { left: 'before' === r ? 0 : '50%' }
                            }),
                            (0, n.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => _('before'),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'before' === r ? 'header-primary' : 'text-muted',
                                    children: d.NW.string(d.t.sLv7LC)
                                })
                            }),
                            (0, n.jsx)(c.P3F, {
                                className: o.tab,
                                onClick: () => _('after'),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'after' === r ? 'header-primary' : 'text-muted',
                                    children: d.NW.string(d.t.R8eSY2)
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: o.previewContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: o.guilds,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: o.unreadGuild,
                                        children: (0, n.jsx)('img', {
                                            src: s(180681),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        className: 'after' === r ? o.guild : o.unreadGuild,
                                        children: (0, n.jsx)('img', {
                                            src: s(390115),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        className: 'after' === r ? o.guild : o.unreadGuild,
                                        children: (0, n.jsx)('img', {
                                            src: s(536411),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    })
                                ]
                            }),
                            (0, n.jsxs)('div', {
                                className: o.channels,
                                children: [
                                    (0, n.jsx)(h, {
                                        mention: !0,
                                        name: d.NW.string(d.t.WFejRk)
                                    }),
                                    (0, n.jsx)(h, { name: d.NW.string(d.t.jqWm9f) }),
                                    (0, n.jsx)(h, {
                                        grey: 'after' === r,
                                        name: d.NW.string(d.t.p9z9Iy)
                                    }),
                                    (0, n.jsx)(h, {
                                        grey: 'after' === r,
                                        name: d.NW.string(d.t['2bdWDw'])
                                    }),
                                    (0, n.jsx)(h, { name: d.NW.string(d.t['Ci+Our']) }),
                                    (0, n.jsx)(h, {
                                        grey: 'after' === r,
                                        name: d.NW.string(d.t['/7TEdn'])
                                    }),
                                    (0, n.jsx)(h, {
                                        grey: 'after' === r,
                                        name: d.NW.string(d.t['Ime/t7'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(u, {
                        hidden: x || 'after' === r,
                        className: o.tipBefore1,
                        text: d.NW.string(d.t.WrPMOD)
                    }),
                    (0, n.jsx)(u, {
                        hidden: x || 'after' === r,
                        className: o.tipBefore2,
                        text: d.NW.string(d.t['pApL7+'])
                    }),
                    (0, n.jsx)(u, {
                        hidden: x || 'before' === r,
                        className: o.tipAfter1,
                        text: d.NW.string(d.t.eZb3iY)
                    }),
                    (0, n.jsx)(u, {
                        hidden: x || 'before' === r,
                        className: o.tipAfter2,
                        text: d.NW.string(d.t.M3KrJS)
                    })
                ]
            })
        ]
    });
});
function u(e) {
    let { text: t, className: s, hidden: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(s, o.tip, { [o.hidden]: i }),
        children: [
            (0, n.jsx)(c.Text, {
                className: o.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, n.jsx)('div', { className: o.tipLine })
        ]
    });
}
function h(e) {
    let { grey: t, mention: s, name: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(o.channel, {
            [o.grey]: t,
            [o.mention]: s
        }),
        children: [
            (0, n.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: o.channelIcon
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: o.channelName,
                children: i
            })
        ]
    });
}
