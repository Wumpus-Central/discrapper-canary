var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(785681),
    o = n(231994),
    c = n(388032),
    d = n(187640),
    u = n(232186);
let g = (e) => {
    let { header: t, description: n, icon: r, inModal: l } = e;
    return (0, i.jsxs)('div', {
        className: a()(d.row, u.marginBottom8, { [d.inModal]: l }),
        children: [
            (0, i.jsx)('div', {
                className: d.iconContainer,
                children: r
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.Text, {
                        className: d.header,
                        variant: 'text-sm/bold',
                        color: 'header-primary',
                        children: t
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-xs/medium',
                        color: 'header-secondary',
                        children: n
                    })
                ]
            })
        ]
    });
};
t.Z = (e) => {
    let { inModal: t } = e,
        n = (0, l.o)(c.intl.string(c.t.Sm8Gq6), c.intl.string(c.t.YU7aaW)),
        r = (0, l.o)(c.intl.string(c.t['TCzk/f']), c.intl.string(c.t['2OqtJC'])),
        a = (0, l.o)(c.intl.string(c.t.ASf7XF), c.intl.string(c.t['82y87e'])),
        u = (0, l.o)(c.intl.string(c.t['0QDVFB']), c.intl.string(c.t['1xBHHR']));
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(s.Text, {
                className: d.groupHeader,
                variant: 'text-xxs/bold',
                color: 'header-secondary',
                children: n
            }),
            (0, i.jsx)(g, {
                header: c.intl.string(c.t['/zMYZW']),
                description: c.intl.string(c.t.DxFKkZ),
                icon: (0, i.jsx)(s.FriendsIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: s.tokens.colors.WHITE.css
                }),
                inModal: t
            }),
            (0, i.jsx)(g, {
                header: c.intl.string(c.t['44NEx8']),
                description: c.intl.string(c.t.WrY56O),
                icon: (0, i.jsx)(s.ServerGridIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: s.tokens.colors.WHITE.css
                }),
                inModal: t
            }),
            (0, i.jsx)(g, {
                header: c.intl.string(c.t['Z3G+8v']),
                description: c.intl.string(c.t.KBgAra),
                icon: (0, i.jsx)(o.Z, {
                    width: 20,
                    height: 20,
                    color: s.tokens.colors.WHITE.css
                }),
                inModal: t
            }),
            (0, i.jsx)(s.Text, {
                className: d.groupHeader,
                variant: 'text-xxs/bold',
                color: 'header-secondary',
                children: r
            }),
            (0, i.jsx)(g, {
                header: a,
                description: u,
                icon: (0, i.jsx)(s.XSmallIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: s.tokens.colors.WHITE.css
                }),
                inModal: t
            })
        ]
    });
};
