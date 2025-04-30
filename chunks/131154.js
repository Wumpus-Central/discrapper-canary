t.d(n, { Z: () => s });
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(481060),
    c = t(388032),
    a = t(449774);
function s(e) {
    let { guild: n, speakers: t, speakerCount: r, className: s } = e,
        u = t.slice(0, 5),
        d = u.map((e) => {
            var t, r;
            return (0, i.jsxs)(
                'div',
                {
                    className: a.speakerContainer,
                    children: [
                        (0, i.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: a.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, i.jsx)('div', {
                            className: a.textInGridContainer,
                            children: (0, i.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: a.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (r = e.user) ? void 0 : r.id
            );
        }),
        g = r - u.length;
    return (0, i.jsxs)('div', {
        className: l()(a.grid, s),
        children: [
            d,
            g > 0 &&
                (0, i.jsxs)('div', {
                    className: a.speakerContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: a.iconMicrophone,
                            children: (0, i.jsx)(o.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: a.textInGrid,
                            children: c.intl.format(c.t['185ggI'], { count: g })
                        })
                    ]
                })
        ]
    });
}
