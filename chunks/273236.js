s.d(t, { Z: () => x }), s(388685);
var n = s(200651),
    i = s(192379),
    r = s(120356),
    a = s.n(r),
    l = s(995295),
    c = s(481060),
    o = s(388032),
    d = s(111657),
    m = s(789231);
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
                        children: o.NW.string(o.t.c0Fhpa)
                    }),
                    (0, n.jsx)(c.Text, {
                        className: m.__invalid_subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.NW.string(o.t.dKPfBQ)
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: d.container,
                children: [
                    (0, n.jsxs)('div', {
                        className: d.tabs,
                        children: [
                            (0, n.jsx)('div', {
                                className: d.tabBackground,
                                style: { left: 'before' === r ? 0 : '50%' }
                            }),
                            (0, n.jsx)(c.P3F, {
                                className: d.tab,
                                onClick: () => _('before'),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'before' === r ? 'header-primary' : 'text-muted',
                                    children: o.NW.string(o.t.sLv7LC)
                                })
                            }),
                            (0, n.jsx)(c.P3F, {
                                className: d.tab,
                                onClick: () => _('after'),
                                children: (0, n.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'after' === r ? 'header-primary' : 'text-muted',
                                    children: o.NW.string(o.t.R8eSY2)
                                })
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: d.previewContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: d.guilds,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: d.unreadGuild,
                                        children: (0, n.jsx)('img', {
                                            src: s(180681),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        className: 'after' === r ? d.guild : d.unreadGuild,
                                        children: (0, n.jsx)('img', {
                                            src: s(390115),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, n.jsx)('div', {
                                        className: 'after' === r ? d.guild : d.unreadGuild,
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
                                className: d.channels,
                                children: [
                                    (0, n.jsx)(u, {
                                        mention: !0,
                                        name: o.NW.string(o.t.WFejRk)
                                    }),
                                    (0, n.jsx)(u, { name: o.NW.string(o.t.jqWm9f) }),
                                    (0, n.jsx)(u, {
                                        grey: 'after' === r,
                                        name: o.NW.string(o.t.p9z9Iy)
                                    }),
                                    (0, n.jsx)(u, {
                                        grey: 'after' === r,
                                        name: o.NW.string(o.t['2bdWDw'])
                                    }),
                                    (0, n.jsx)(u, { name: o.NW.string(o.t['Ci+Our']) }),
                                    (0, n.jsx)(u, {
                                        grey: 'after' === r,
                                        name: o.NW.string(o.t['/7TEdn'])
                                    }),
                                    (0, n.jsx)(u, {
                                        grey: 'after' === r,
                                        name: o.NW.string(o.t['Ime/t7'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)(h, {
                        hidden: x || 'after' === r,
                        className: d.tipBefore1,
                        text: o.NW.string(o.t.WrPMOD)
                    }),
                    (0, n.jsx)(h, {
                        hidden: x || 'after' === r,
                        className: d.tipBefore2,
                        text: o.NW.string(o.t['pApL7+'])
                    }),
                    (0, n.jsx)(h, {
                        hidden: x || 'before' === r,
                        className: d.tipAfter1,
                        text: o.NW.string(o.t.eZb3iY)
                    }),
                    (0, n.jsx)(h, {
                        hidden: x || 'before' === r,
                        className: d.tipAfter2,
                        text: o.NW.string(o.t.M3KrJS)
                    })
                ]
            })
        ]
    });
});
function h(e) {
    let { text: t, className: s, hidden: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(s, d.tip, { [d.hidden]: i }),
        children: [
            (0, n.jsx)(c.Text, {
                className: d.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, n.jsx)('div', { className: d.tipLine })
        ]
    });
}
function u(e) {
    let { grey: t, mention: s, name: i } = e;
    return (0, n.jsxs)('div', {
        className: a()(d.channel, {
            [d.grey]: t,
            [d.mention]: s
        }),
        children: [
            (0, n.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: d.channelIcon
            }),
            (0, n.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: d.channelName,
                children: i
            })
        ]
    });
}
