t.d(n, { Z: () => _ });
var a = t(200651);
t(192379);
var i = t(120356),
    o = t.n(i),
    r = t(481060),
    c = t(388032),
    l = t(185861);
function _(e) {
    let { guild: n, speakers: t, speakerCount: i, className: _ } = e,
        d = t.slice(0, 5),
        s = d.map((e) => {
            var t, i;
            return (0, a.jsxs)(
                'div',
                {
                    className: l.speakerContainer,
                    children: [
                        (0, a.jsx)(r.qEK, {
                            src: null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
                            size: r.EFr.SIZE_20,
                            className: l.avatar,
                            'aria-label': ''.concat(null == e ? void 0 : e.userNick, '-avatar')
                        }),
                        (0, a.jsx)('div', {
                            className: l.textInGridContainer,
                            children: (0, a.jsx)(r.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: l.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })
                    ]
                },
                null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.id
            );
        }),
        u = i - d.length;
    return (0, a.jsxs)('div', {
        className: o()(l.grid, _),
        children: [
            s,
            u > 0 &&
                (0, a.jsxs)('div', {
                    className: l.speakerContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: l.iconMicrophone,
                            children: (0, a.jsx)(r.S6n, {
                                size: 'custom',
                                color: 'currentColor',
                                height: 12
                            })
                        }),
                        (0, a.jsx)(r.Text, {
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            className: l.textInGrid,
                            children: c.intl.format(c.t['185ggI'], { count: u })
                        })
                    ]
                })
        ]
    });
}
