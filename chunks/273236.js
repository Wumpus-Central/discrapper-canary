(n.d(t, { Z: () => u }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(867309),
    c = n(481060),
    o = n(388032),
    d = n(94546),
    m = n(699343);
let u = r.forwardRef(function (e, t) {
    let {} = e,
        [s, a] = r.useState('before'),
        [u, j] = r.useState(!1),
        [g, b] = r.useState(!1);
    r.useImperativeHandle(t, () => ({ maybeChangeToAfterTab: () => (g || f('after'), g) }));
    let f = r.useCallback((e) => {
        (j(!0),
            setTimeout(() => {
                l.unstable_batchedUpdates(() => {
                    ('after' === e && b(!0), j(!1), a(e));
                });
            }, 400));
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
                        children: o.intl.string(o.t.c0Fhpa)
                    }),
                    (0, i.jsx)(c.Text, {
                        className: m.__invalid_subtitle,
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: o.intl.string(o.t.dKPfBQ)
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: d.container,
                children: [
                    (0, i.jsxs)('div', {
                        className: d.tabs,
                        children: [
                            (0, i.jsx)('div', {
                                className: d.tabBackground,
                                style: { left: 'before' === s ? 0 : '50%' }
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: d.tab,
                                onClick: () => f('before'),
                                children: (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'before' === s ? 'header-primary' : 'text-muted',
                                    children: o.intl.string(o.t.sLv7LC)
                                })
                            }),
                            (0, i.jsx)(c.P3F, {
                                className: d.tab,
                                onClick: () => f('after'),
                                children: (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'after' === s ? 'header-primary' : 'text-muted',
                                    children: o.intl.string(o.t.R8eSY2)
                                })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: d.previewContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: d.guilds,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: d.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: n(180681),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: 'after' === s ? d.guild : d.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: n(390115),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    }),
                                    (0, i.jsx)('div', {
                                        className: 'after' === s ? d.guild : d.unreadGuild,
                                        children: (0, i.jsx)('img', {
                                            src: n(536411),
                                            width: 36,
                                            height: 36,
                                            alt: 'Example Guild Icon'
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: d.channels,
                                children: [
                                    (0, i.jsx)(h, {
                                        mention: !0,
                                        name: o.intl.string(o.t.WFejRk)
                                    }),
                                    (0, i.jsx)(h, { name: o.intl.string(o.t.jqWm9f) }),
                                    (0, i.jsx)(h, {
                                        grey: 'after' === s,
                                        name: o.intl.string(o.t.p9z9Iy)
                                    }),
                                    (0, i.jsx)(h, {
                                        grey: 'after' === s,
                                        name: o.intl.string(o.t['2bdWDw'])
                                    }),
                                    (0, i.jsx)(h, { name: o.intl.string(o.t['Ci+Our']) }),
                                    (0, i.jsx)(h, {
                                        grey: 'after' === s,
                                        name: o.intl.string(o.t['/7TEdn'])
                                    }),
                                    (0, i.jsx)(h, {
                                        grey: 'after' === s,
                                        name: o.intl.string(o.t['Ime/t7'])
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(x, {
                        hidden: u || 'after' === s,
                        className: d.tipBefore1,
                        text: o.intl.string(o.t.WrPMOD)
                    }),
                    (0, i.jsx)(x, {
                        hidden: u || 'after' === s,
                        className: d.tipBefore2,
                        text: o.intl.string(o.t['pApL7+'])
                    }),
                    (0, i.jsx)(x, {
                        hidden: u || 'before' === s,
                        className: d.tipAfter1,
                        text: o.intl.string(o.t.eZb3iY)
                    }),
                    (0, i.jsx)(x, {
                        hidden: u || 'before' === s,
                        className: d.tipAfter2,
                        text: o.intl.string(o.t.M3KrJS)
                    })
                ]
            })
        ]
    });
});
function x(e) {
    let { text: t, className: n, hidden: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(n, d.tip, { [d.hidden]: r }),
        children: [
            (0, i.jsx)(c.Text, {
                className: d.__invalid_tipText,
                variant: 'text-sm/normal',
                color: 'text-secondary',
                children: t
            }),
            (0, i.jsx)('div', { className: d.tipLine })
        ]
    });
}
function h(e) {
    let { grey: t, mention: n, name: r } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.channel, {
            [d.grey]: t,
            [d.mention]: n
        }),
        children: [
            (0, i.jsx)(c.VL1, {
                size: 'xs',
                color: 'currentColor',
                className: d.channelIcon
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/medium',
                className: d.channelName,
                children: r
            })
        ]
    });
}
