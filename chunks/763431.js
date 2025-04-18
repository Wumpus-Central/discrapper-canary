n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(565138),
    a = n(388032),
    o = n(179979);
let s = (e) => {
    let { guild: t } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(l.X6q, {
                className: o.header,
                variant: 'heading-sm/semibold',
                children: a.NW.string(a.t['0ox7Hh'])
            }),
            (0, r.jsx)('div', {
                className: o.guildContainer,
                children: (0, r.jsxs)('div', {
                    className: o.guildInfo,
                    children: [
                        (0, r.jsx)('div', {
                            className: o.guildIcon,
                            children: (0, r.jsx)(i.Z, {
                                guild: t,
                                size: i.Z.Sizes.LARGE
                            })
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(l.Text, {
                                variant: 'text-md/semibold',
                                color: 'header-primary',
                                children: t.name
                            })
                        })
                    ]
                })
            })
        ]
    });
};
