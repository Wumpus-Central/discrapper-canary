n.d(t, { Z: () => p }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(785681),
    o = n(231994),
    c = n(332495),
    d = n(388032),
    u = n(634789),
    m = n(20493);
let g = (e) => {
        let { header: t, description: n, icon: i, inModal: l } = e;
        return (0, r.jsxs)('div', {
            className: s()(u.row, m.marginBottom8, { [u.inModal]: l }),
            children: [
                (0, r.jsx)('div', {
                    className: u.iconContainer,
                    children: i
                }),
                (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsx)(a.Text, {
                            className: u.header,
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
    p = (e) => {
        let { inModal: t } = e,
            n = (0, l.o)(d.NW.string(c.Z.Sm8Gq6), d.NW.string(c.Z.YU7aaW)),
            i = (0, l.o)(d.NW.string(c.Z['TCzk/f']), d.NW.string(c.Z['2OqtJC'])),
            s = (0, l.o)(d.NW.string(c.Z.ASf7XF), d.NW.string(c.Z['82y87e'])),
            m = (0, l.o)(d.NW.string(c.Z['0QDVFB']), d.NW.string(c.Z['1xBHHR']));
        return (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)(a.Text, {
                    className: u.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: n
                }),
                (0, r.jsx)(g, {
                    header: d.NW.string(c.Z['/zMYZW']),
                    description: d.NW.string(c.Z.DxFKkZ),
                    icon: (0, r.jsx)(a.iFz, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(g, {
                    header: d.NW.string(c.Z['44NEx8']),
                    description: d.NW.string(c.Z.WrY56O),
                    icon: (0, r.jsx)(a.dRF, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(g, {
                    header: d.NW.string(c.Z['Z3G+8v']),
                    description: d.NW.string(c.Z.KBgAra),
                    icon: (0, r.jsx)(o.Z, {
                        width: 20,
                        height: 20,
                        color: a.TVs.colors.TEXT_PRIMARY.css
                    }),
                    inModal: t
                }),
                (0, r.jsx)(a.Text, {
                    className: u.groupHeader,
                    variant: 'text-xxs/bold',
                    color: 'header-secondary',
                    children: i
                }),
                (0, r.jsx)(g, {
                    header: s,
                    description: m,
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
