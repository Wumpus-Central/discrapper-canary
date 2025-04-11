t.d(n, { Z: () => s });
var r = t(200651);
t(192379);
var i = t(120356),
    l = t.n(i),
    o = t(481060),
    c = t(388032),
    a = t(449774);
function s(e) {
    let { guild: n, speakers: t, speakerCount: i, className: s } = e,
        u = t.slice(0, 5),
        d = u.map((e) => {
            var t, i;
            return (0, r.jsxs)(
                'div',
                {
                    className: a.speakerContainer,
                    children: [
                        (0, r.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: a.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, r.jsx)('div', {
                            className: a.textInGridContainer,
                            children: (0, r.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: a.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (i = e.user) ? void 0 : i.id
            );
        }),
        g = i - u.length;
    return (0, r.jsxs)('div', {
        className: l()(a.grid, s),
        children: [
            d,
            g > 0 &&
                (0, r.jsxs)('div', {
                    className: a.speakerContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: a.iconMicrophone,
                            children: (0, r.jsx)(o.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: a.textInGrid,
                            children: c.NW.format(c.t['185ggI'], { count: g })
                        })
                    ]
                })
        ]
    });
}
