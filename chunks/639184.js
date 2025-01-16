n.d(t, {
    Z: function () {
        return f;
    }
});
var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(481060),
    s = n(228392),
    o = n(404616),
    c = n(710352),
    d = n(921944),
    u = n(388032),
    m = n(444087),
    h = n(559198),
    g = n(994973),
    x = n(504764);
function f(e) {
    let { onDismiss: t } = e;
    return (0, a.jsxs)(l.Clickable, {
        onClick: () => {
            open(c.V8), (0, s.GX)({ readGuideCta: !0 });
        },
        className: r()(g.container, h.container, m.mainCard),
        children: [
            (0, a.jsxs)('div', {
                className: h.inline,
                children: [
                    (0, a.jsxs)('div', {
                        className: h.author,
                        children: [
                            (0, a.jsx)(l.ClydeIcon, {
                                size: 'custom',
                                width: 28,
                                height: 28,
                                color: 'currentColor',
                                className: h.discordIcon
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: 'text-sm/semibold',
                                color: 'header-primary',
                                children: u.intl.string(u.t.uvGmCw)
                            }),
                            (0, a.jsxs)('div', {
                                className: h.notice,
                                children: [
                                    (0, a.jsx)(l.CircleInformationIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.infoIcon
                                    }),
                                    (0, a.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'header-secondary',
                                        children: u.intl.string(u.t.t2GkVV)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)(l.Clickable, {
                        onClick: (e) => {
                            e.stopPropagation(), t(d.L.DISMISS), (0, s.GX)({ readGuideCta: !1 });
                        },
                        children: (0, a.jsx)(l.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: h.closeIcon
                        })
                    })
                ]
            }),
            (0, a.jsx)('hr', { className: h.separator }),
            (0, a.jsxs)('div', {
                className: h.inline,
                children: [
                    (0, a.jsxs)('div', {
                        children: [
                            (0, a.jsx)(l.Heading, {
                                className: r()(g.__invalid_channelName, h.title),
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                children: u.intl.string(u.t.JtSpDw)
                            }),
                            (0, a.jsx)(l.Text, {
                                variant: 'text-sm/normal',
                                color: 'header-secondary',
                                children: u.intl.string(u.t.Ajhp09)
                            })
                        ]
                    }),
                    (0, a.jsx)('img', {
                        src: x,
                        alt: u.intl.string(u.t.gAlJzc),
                        width: o.TJ,
                        height: o.TJ
                    })
                ]
            })
        ]
    });
}
