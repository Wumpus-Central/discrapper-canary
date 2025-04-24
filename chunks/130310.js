n.d(t, { Z: () => g }), n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(785681),
    o = n(231994),
    c = n(332495),
    d = n(388032),
    u = n(634789),
    m = n(20493);
let p = (e) => {
        let { header: t, description: n, icon: r, inModal: a } = e;
        return (0, i.jsxs)('div', {
            className: s()(u.row, m.marginBottom8, { [u.inModal]: a }),
            children: [
                (0, i.jsx)('div', {
                    className: u.iconContainer,
                    children: r
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: u.header,
                            variant: 'text-sm/bold',
                            color: 'header-primary',
                            children: t
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'header-secondary',
                            children: n
                        })
                    ]
                })
            ]
        });
    },
    g = (e) => {
        let { inModal: t } = e,
            n = (0, a.o)(d.intl.string(c.default.Sm8Gq6), d.intl.string(c.default.YU7aaW)),
            r = (0, a.o)(d.intl.string(c.default['TCzk/f']), d.intl.string(c.default['2OqtJC'])),
            s = (0, a.o)(d.intl.string(c.default.ASf7XF), d.intl.string(c.default['82y87e'])),
            m = (0, a.o)(d.intl.string(c.default['0QDVFB']), d.intl.string(c.default['1xBHHR']));
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(l.Text, {
                    className: u.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: n
                }),
                (0, i.jsx)(p, {
                    header: d.intl.string(c.default['/zMYZW']),
                    description: d.intl.string(c.default.DxFKkZ),
                    icon: (0, i.jsx)(l.iFz, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(p, {
                    header: d.intl.string(c.default['44NEx8']),
                    description: d.intl.string(c.default.WrY56O),
                    icon: (0, i.jsx)(l.dRF, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(p, {
                    header: d.intl.string(c.default['Z3G+8v']),
                    description: d.intl.string(c.default.KBgAra),
                    icon: (0, i.jsx)(o.Z, {
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(l.Text, {
                    className: u.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: r
                }),
                (0, i.jsx)(p, {
                    header: s,
                    description: m,
                    icon: (0, i.jsx)(l.Dio, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                })
            ]
        });
    };
