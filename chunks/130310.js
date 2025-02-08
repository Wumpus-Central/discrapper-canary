n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(785681),
    o = n(231994),
    c = n(388032),
    d = n(187640),
    u = n(232186);
let m = (e) => {
        let { header: t, description: n, icon: s, inModal: a } = e;
        return (0, i.jsxs)('div', {
            className: r()(d.row, u.marginBottom8, { [d.inModal]: a }),
            children: [
                (0, i.jsx)('div', {
                    className: d.iconContainer,
                    children: s
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(l.Text, {
                            className: d.header,
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
            n = (0, a.o)(c.intl.string(c.t.Sm8Gq6), c.intl.string(c.t.YU7aaW)),
            s = (0, a.o)(c.intl.string(c.t['TCzk/f']), c.intl.string(c.t['2OqtJC'])),
            r = (0, a.o)(c.intl.string(c.t.ASf7XF), c.intl.string(c.t['82y87e'])),
            u = (0, a.o)(c.intl.string(c.t['0QDVFB']), c.intl.string(c.t['1xBHHR']));
        return (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(l.Text, {
                    className: d.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: n
                }),
                (0, i.jsx)(m, {
                    header: c.intl.string(c.t['/zMYZW']),
                    description: c.intl.string(c.t.DxFKkZ),
                    icon: (0, i.jsx)(l.iFz, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(m, {
                    header: c.intl.string(c.t['44NEx8']),
                    description: c.intl.string(c.t.WrY56O),
                    icon: (0, i.jsx)(l.dRF, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(m, {
                    header: c.intl.string(c.t['Z3G+8v']),
                    description: c.intl.string(c.t.KBgAra),
                    icon: (0, i.jsx)(o.Z, {
                        width: 20,
                        height: 20,
                        color: l.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, i.jsx)(l.Text, {
                    className: d.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: s
                }),
                (0, i.jsx)(m, {
                    header: r,
                    description: u,
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
