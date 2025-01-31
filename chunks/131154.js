t.d(e, { Z: () => _ });
var i = t(200651);
t(192379);
var a = t(120356),
    r = t.n(a),
    o = t(481060),
    l = t(388032),
    d = t(184617);
function _(n) {
    let { guild: e, speakers: t, speakerCount: a, className: _ } = n,
        c = t.slice(0, 5),
        s = c.map((n) => {
            var t, a;
            return (0, i.jsxs)(
                'div',
                {
                    className: d.speakerContainer,
                    children: [
                        (0, i.jsx)(o.qEK, {
                            src: null == n ? void 0 : null === (t = n.user) || void 0 === t ? void 0 : t.getAvatarURL(e.id, 20),
                            size: o.EFr.SIZE_20,
                            className: d.avatar,
                            'aria-label': ''.concat(null == n ? void 0 : n.userNick, '-avatar')
                        }),
                        (0, i.jsx)('div', {
                            className: d.textInGridContainer,
                            children: (0, i.jsx)(o.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                className: d.textInGrid,
                                children: null == n ? void 0 : n.userNick
                            })
                        })
                    ]
                },
                null == n ? void 0 : null === (a = n.user) || void 0 === a ? void 0 : a.id
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
