(n.d(t, { Z: () => h }), n(953529), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(755721),
    o = n(481060),
    c = n(749210),
    d = n(63063),
    u = n(714939),
    m = n(494831),
    g = n(981631),
    p = n(388032),
    f = n(587072);
function h(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, setEditRoleId: s, query: a, setQuery: c, setHeaderHeight: d } = e,
        u = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d(null != (t = null == (e = u.current) ? void 0 : e.offsetHeight) ? t : m.Cl);
    }, [d]);
    let g = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)('div', {
        ref: u,
        children: [
            (0, r.jsx)(o.vwX, {
                tag: o.RB0.H1,
                children: p.intl.string(p.t.LPJmLy)
            }),
            (0, r.jsx)(o.Text, {
                className: f.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: p.intl.string(p.t['1ydhVl'])
            }),
            (0, r.jsx)(x, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: a,
                setQuery: c,
                onEveryoneRoleClick: g
            })
        ]
    });
}
function x(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: a, onEveryoneRoleClick: c } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                role: n,
                onClick: c
            }),
            (0, r.jsx)(b, {
                guild: t,
                query: l,
                setQuery: a
            }),
            (0, r.jsx)(o.Text, {
                className: f.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: p.intl.format(p.t.xkC3YW, { articleURL: d.Z.getArticleURL(g.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, r.jsx)('div', {
                className: f.rolesTable,
                children: (0, r.jsxs)('div', {
                    className: f.tableHeader,
                    children: [
                        (0, r.jsx)('div', { className: f.dragSpacing }),
                        (0, r.jsx)(o.Text, {
                            className: s()(f.tableTitle, f.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: p.intl.format(p.t['38N3V1'], { numRoles: String(i.length) })
                        }),
                        (0, r.jsx)(o.Text, {
                            className: s()(f.tableTitle, f.memberSpacing),
                            variant: 'text-sm/normal',
                            children: p.intl.string(p.t['9Oq93t'])
                        }),
                        (0, r.jsx)('div', { className: f.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function b(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, d] = i.useState(!1),
        u = i.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        m = i.useCallback(() => {
            l('');
        }, [l]),
        g = async () => {
            (d(!0), await c.Z.createRole(t.id), d(!1));
        };
    return (0, r.jsx)('div', {
        className: f.__invalid_rolesList,
        children: (0, r.jsxs)('div', {
            className: f.searchContainer,
            children: [
                (0, r.jsx)(o.E1j, {
                    size: o.E1j.Sizes.MEDIUM,
                    query: n,
                    onChange: u,
                    onClear: m,
                    placeholder: p.intl.string(p.t.Sojqsr),
                    'aria-label': p.intl.string(p.t.Sojqsr)
                }),
                (0, r.jsx)(a.zx, {
                    className: f.createButton,
                    size: a.zx.Sizes.SMALL,
                    onClick: g,
                    submitting: s,
                    children: p.intl.string(p.t.JZZjQE)
                })
            ]
        })
    });
}
