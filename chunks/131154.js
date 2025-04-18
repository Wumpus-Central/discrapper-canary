t.d(n, { Z: () => s });
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    l = t(388032),
    c = t(449774);
function s(e) {
    let { guild: n, speakers: t, speakerCount: a, className: s } = e,
        d = t.slice(0, 5),
        u = d.map((e) => {
            var t, a;
            return (0, r.jsxs)(
                'div',
                {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: c.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, r.jsx)('div', {
                            className: c.textInGridContainer,
                            children: (0, r.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: c.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (a = e.user) ? void 0 : a.id
            );
        }),
        _ = a - d.length;
    return (0, r.jsxs)('div', {
        className: i()(c.grid, s),
        children: [
            u,
            _ > 0 &&
                (0, r.jsxs)('div', {
                    className: c.speakerContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: c.iconMicrophone,
                            children: (0, r.jsx)(o.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, r.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: c.textInGrid,
                            children: l.NW.format(l.t['185ggI'], { count: _ })
                        })
                    ]
                })
        ]
    });
}
