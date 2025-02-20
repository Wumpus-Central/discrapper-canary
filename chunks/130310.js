n.d(t, { Z: () => g }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(785681),
    o = n(231994),
    c = n(388032),
    d = n(788594),
    u = n(455812);
let m = (e) => {
        let { header: t, description: n, icon: i, inModal: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(d.row, u.marginBottom8, { [d.inModal]: l }),
            children: [
                (0, r.jsx)('div', {
                    className: d.iconContainer,
                    children: i
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: d.header,
                            variant: 'text-sm/bold',
                            color: 'header-primary',
                            children: t
                        }),
                        (0, r.jsx)(a.Text, {
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
            n = (0, l.o)(c.NW.string(c.t.Sm8Gq6), c.NW.string(c.t.YU7aaW)),
            i = (0, l.o)(c.NW.string(c.t['TCzk/f']), c.NW.string(c.t['2OqtJC'])),
            s = (0, l.o)(c.NW.string(c.t.ASf7XF), c.NW.string(c.t['82y87e'])),
            u = (0, l.o)(c.NW.string(c.t['0QDVFB']), c.NW.string(c.t['1xBHHR']));
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.Text, {
                    className: d.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: n
                }),
                (0, r.jsx)(m, {
                    header: c.NW.string(c.t['/zMYZW']),
                    description: c.NW.string(c.t.DxFKkZ),
                    icon: (0, r.jsx)(a.iFz, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(m, {
                    header: c.NW.string(c.t['44NEx8']),
                    description: c.NW.string(c.t.WrY56O),
                    icon: (0, r.jsx)(a.dRF, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(m, {
                    header: c.NW.string(c.t['Z3G+8v']),
                    description: c.NW.string(c.t.KBgAra),
                    icon: (0, r.jsx)(o.Z, {
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(a.Text, {
                    className: d.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: i
                }),
                (0, r.jsx)(m, {
                    header: s,
                    description: u,
                    icon: (0, r.jsx)(a.Dio, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                })
            ]
        });
    };
