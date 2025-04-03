n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(228392),
    o = n(404616),
    c = n(710352),
    d = n(921944),
    u = n(388032),
    m = n(683999),
    h = n(297731),
    g = n(602512),
    f = n(504764);
function p(e) {
    let { onDismiss: t } = e;
    return (0, r.jsxs)(l.P3F, {
        onClick: () => {
            open(c.V8), (0, s.GX)({ readGuideCta: !0 });
        },
        className: i()(g.container, h.container, m.mainCard),
        children: [
            (0, r.jsxs)('div', {
                className: h.inline,
                children: [
                    (0, r.jsxs)('div', {
                        className: h.author,
                        children: [
                            (0, r.jsx)(l.gw7, {
                                size: 'custom',
                                width: 28,
                                height: 28,
                                color: 'currentColor',
                                className: h.discordIcon
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: u.NW.string(u.t.uvGmCw)
                            }),
                            (0, r.jsxs)('div', {
                                className: h.notice,
                                children: [
                                    (0, r.jsx)(l.d3s, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.infoIcon
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-secondary',
                                        children: u.NW.string(u.t.t2GkVV)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)(l.P3F, {
                        onClick: (e) => {
                            e.stopPropagation(), t(d.L.DISMISS), (0, s.GX)({ readGuideCta: !1 });
                        },
                        children: (0, r.jsx)(l.Dio, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.closeIcon
                        })
                    })
                ]
            }),
            (0, r.jsx)('hr', { className: h.separator }),
            (0, r.jsxs)('div', {
                className: h.inline,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)(l.X6q, {
                                className: i()(g.__invalid_channelName, h.title),
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: u.NW.string(u.t.JtSpDw)
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: u.NW.string(u.t.Ajhp09)
                            })
                        ]
                    }),
                    (0, r.jsx)('img', {
                        src: f,
                        alt: u.NW.string(u.t.gAlJzc),
                        width: o.TJ,
                        height: o.TJ
                    })
                ]
            })
        ]
    });
}
