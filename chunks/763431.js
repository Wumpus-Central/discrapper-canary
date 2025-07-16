n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(565138),
    o = n(388032),
    l = n(179979);
let s = (e) => {
    let { guild: t } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: l.header,
                variant: 'heading-sm/semibold',
                children: o.intl.string(o.t['0ox7Hh'])
            }),
            (0, r.jsx)('div', {
                className: l.guildContainer,
                children: (0, r.jsxs)('div', {
                    className: l.guildInfo,
                    children: [
                        (0, r.jsx)('div', {
                            className: l.guildIcon,
                            children: (0, r.jsx)(i.Z, {
                                guild: t,
                                size: i.Z.Sizes.LARGE
                            })
                        }),
                        (0, r.jsx)('div', {
                            children: (0, r.jsx)(a.Text, {
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
