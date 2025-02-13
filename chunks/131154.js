i.d(n, { Z: () => o });
var l = i(200651);
i(192379);
var t = i(120356),
    a = i.n(t),
    s = i(481060),
    r = i(388032),
    c = i(947396);
function o(e) {
    let { guild: n, speakers: i, speakerCount: t, className: o } = e,
        d = i.slice(0, 5),
        u = d.map((e) => {
            var i, t;
            return (0, l.jsxs)(
                'div',
                {
                    className: c.speakerContainer,
                    children: [
                        (0, l.jsx)(s.qEK, {
                            src: null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.getAvatarURL(n.id, 20),
                            size: s.EFr.SIZE_20,
                            className: c.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, l.jsx)('div', {
                            className: c.textInGridContainer,
                            children: (0, l.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.id
            );
        }),
        h = t - d.length;
    return (0, l.jsxs)('div', {
        className: a()(c.grid, o),
        children: [
            u,
            h > 0 &&
                (0, l.jsxs)('div', {
                    className: c.speakerContainer,
                    children: [
                        (0, l.jsx)('div', {
                            className: c.iconMicrophone,
                            children: (0, l.jsx)(s.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, l.jsx)(s.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: r.intl.format(r.t['185ggI'], { count: h })
                        })
                    ]
                })
        ]
    });
}
