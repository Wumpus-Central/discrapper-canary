n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(388032),
    c = n(449774);
function s(e) {
    let { guild: t, speakers: n, speakerCount: i, className: s } = e,
        d = n.slice(0, 5),
        u = d.map((e) => {
            var n, i;
            return (0, r.jsxs)(
                'div',
                {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)(a.qEK, {
                            src: null == e || null == (n = e.user) ? void 0 : n.getAvatarURL(t.id, 20),
                            size: a.EFr.SIZE_20,
                            className: c.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, r.jsx)('div', {
                            className: c.textInGridContainer,
                            children: (0, r.jsx)(a.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (i = e.user) ? void 0 : i.id
            );
        }),
        h = i - d.length;
    return (0, r.jsxs)('div', {
        className: l()(c.grid, s),
        children: [
            u,
            h > 0 &&
                (0, r.jsxs)('div', {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: c.iconMicrophone,
                            children: (0, r.jsx)(a.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, r.jsx)(a.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: o.NW.format(o.t['185ggI'], { count: h })
                        })
                    ]
                })
        ]
    });
}
