i.d(n, { Z: () => o });
var t = i(200651);
i(192379);
var l = i(120356),
    a = i.n(l),
    r = i(481060),
    s = i(388032),
    c = i(449774);
function o(e) {
    let { guild: n, speakers: i, speakerCount: l, className: o } = e,
        u = i.slice(0, 5),
        d = u.map((e) => {
            var i, l;
            return (0, t.jsxs)(
                'div',
                {
                    className: c.speakerContainer,
                    children: [
                        (0, t.jsx)(r.qEK, {
                            src: null == e || null == (i = e.user) ? void 0 : i.getAvatarURL(n.id, 20),
                            size: r.EFr.SIZE_20,
                            className: c.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, t.jsx)('div', {
                            className: c.textInGridContainer,
                            children: (0, t.jsx)(r.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (l = e.user) ? void 0 : l.id
            );
        }),
        h = l - u.length;
    return (0, t.jsxs)('div', {
        className: a()(c.grid, o),
        children: [
            d,
            h > 0 &&
                (0, t.jsxs)('div', {
                    className: c.speakerContainer,
                    children: [
                        (0, t.jsx)('div', {
                            className: c.iconMicrophone,
                            children: (0, t.jsx)(r.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, t.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: s.NW.format(s.t['185ggI'], { count: h })
                        })
                    ]
                })
        ]
    });
}
