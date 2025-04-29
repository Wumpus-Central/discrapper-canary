n.d(t, { Z: () => h }), n(953529), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(749210),
    c = n(63063),
    u = n(714939),
    d = n(494831),
    m = n(981631),
    g = n(388032),
    p = n(587072);
function h(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, setEditRoleId: s, query: o, setQuery: c, setHeaderHeight: u } = e,
        m = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        u(null != (t = null == (e = m.current) ? void 0 : e.offsetHeight) ? t : d.Cl);
    }, [u]);
    let h = i.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, r.jsxs)('div', {
        ref: m,
        children: [
            (0, r.jsx)(a.vwX, {
                tag: a.RB0.H1,
                children: g.intl.string(g.t.LPJmLy)
            }),
            (0, r.jsx)(a.Text, {
                className: p.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: g.intl.string(g.t['1ydhVl'])
            }),
            (0, r.jsx)(f, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: o,
                setQuery: c,
                onEveryoneRoleClick: h
            })
        ]
    });
}
function f(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: l, setQuery: o, onEveryoneRoleClick: d } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                role: n,
                onClick: d
            }),
            (0, r.jsx)(x, {
                guild: t,
                query: l,
                setQuery: o
            }),
            (0, r.jsx)(a.Text, {
                className: p.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: g.intl.format(g.t.xkC3YW, { articleURL: c.Z.getArticleURL(m.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, r.jsx)('div', {
                className: p.rolesTable,
                children: (0, r.jsxs)('div', {
                    className: p.tableHeader,
                    children: [
                        (0, r.jsx)('div', { className: p.dragSpacing }),
                        (0, r.jsx)(a.Text, {
                            className: s()(p.tableTitle, p.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: g.intl.format(g.t['38N3V1'], { numRoles: String(i.length) })
                        }),
                        (0, r.jsx)(a.Text, {
                            className: s()(p.tableTitle, p.memberSpacing),
                            variant: 'text-sm/normal',
                            children: g.intl.string(g.t['9Oq93t'])
                        }),
                        (0, r.jsx)('div', { className: p.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function x(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, c] = i.useState(!1),
        u = i.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        d = i.useCallback(() => {
            l('');
        }, [l]),
        m = async () => {
            c(!0), await o.Z.createRole(t.id), c(!1);
        };
    return (0, r.jsx)('div', {
        className: p.__invalid_rolesList,
        children: (0, r.jsxs)('div', {
            className: p.searchContainer,
            children: [
                (0, r.jsx)(a.E1j, {
                    size: a.E1j.Sizes.MEDIUM,
                    query: n,
                    onChange: u,
                    onClear: d,
                    placeholder: g.intl.string(g.t.Sojqsr),
                    'aria-label': g.intl.string(g.t.Sojqsr)
                }),
                (0, r.jsx)(a.zxk, {
                    className: p.createButton,
                    size: a.zxk.Sizes.SMALL,
                    onClick: m,
                    submitting: s,
                    children: g.intl.string(g.t.JZZjQE)
                })
            ]
        })
    });
}
