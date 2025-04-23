t.d(n, { Z: () => _ });
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(388032),
    d = t(449774);
function _(e) {
    let { guild: n, speakers: t, speakerCount: a, className: _ } = e,
        c = t.slice(0, 5),
        s = c.map((e) => {
            var t, a;
            return (0, i.jsxs)(
                'div',
                {
                    className: d.speakerContainer,
                    children: [
                        (0, i.jsx)(o.qEK, {
                            src: null == e || null == (t = e.user) ? void 0 : t.getAvatarURL(n.id, 20),
                            size: o.EFr.SIZE_20,
                            className: d.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, i.jsx)('div', {
                            className: d.textInGridContainer,
                            children: (0, i.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e || null == (a = e.user) ? void 0 : a.id
            );
        }),
        p = a - c.length;
    return (0, i.jsxs)('div', {
        className: r()(d.grid, _),
        children: [
            s,
            p > 0 &&
                (0, i.jsxs)('div', {
                    className: d.speakerContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: d.iconMicrophone,
                            children: (0, i.jsx)(o.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, i.jsx)(o.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: d.textInGrid,
                            children: l.intl.format(l.t['185ggI'], { count: p })
                        })
                    ]
                })
        ]
    });
}
