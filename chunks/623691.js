n.d(t, { Z: () => h }), n(266796), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(481060),
    o = n(749210),
    c = n(63063),
    d = n(714939),
    u = n(494831),
    m = n(981631),
    g = n(388032),
    p = n(587072);
function h(e) {
    let { guild: t, everyoneRole: n, filteredRoles: s, setEditRoleId: a, query: o, setQuery: c, setHeaderHeight: d } = e,
        m = i.useRef(null);
    i.useEffect(() => {
        var e, t;
        d(null != (t = null == (e = m.current) ? void 0 : e.offsetHeight) ? t : u.Cl);
    }, [d]);
    let h = i.useCallback(() => {
        a(n.id);
    }, [a, n.id]);
    return (0, r.jsxs)('div', {
        ref: m,
        children: [
            (0, r.jsx)(l.vwX, {
                tag: l.RB0.H1,
                children: g.NW.string(g.t.LPJmLy)
            }),
            (0, r.jsx)(l.Text, {
                className: p.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: g.NW.string(g.t['1ydhVl'])
            }),
            (0, r.jsx)(f, {
                guild: t,
                everyoneRole: n,
                filteredRoles: s,
                query: o,
                setQuery: c,
                onEveryoneRoleClick: h
            })
        ]
    });
}
function f(e) {
    let { guild: t, everyoneRole: n, filteredRoles: i, query: s, setQuery: o, onEveryoneRoleClick: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Z, {
                role: n,
                onClick: u
            }),
            (0, r.jsx)(b, {
                guild: t,
                query: s,
                setQuery: o
            }),
            (0, r.jsx)(l.Text, {
                className: p.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: g.NW.format(g.t.xkC3YW, { articleURL: c.Z.getArticleURL(m.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, r.jsx)('div', {
                className: p.rolesTable,
                children: (0, r.jsxs)('div', {
                    className: p.tableHeader,
                    children: [
                        (0, r.jsx)('div', { className: p.dragSpacing }),
                        (0, r.jsx)(l.Text, {
                            className: a()(p.tableTitle, p.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: g.NW.format(g.t['38N3V1'], { numRoles: String(i.length) })
                        }),
                        (0, r.jsx)(l.Text, {
                            className: a()(p.tableTitle, p.memberSpacing),
                            variant: 'text-sm/normal',
                            children: g.NW.string(g.t['9Oq93t'])
                        }),
                        (0, r.jsx)('div', { className: p.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function b(e) {
    let { guild: t, query: n, setQuery: s } = e,
        [a, c] = i.useState(!1),
        d = i.useCallback(
            (e) => {
                s(e);
            },
            [s]
        ),
        u = i.useCallback(() => {
            s('');
        }, [s]),
        m = async () => {
            c(!0), await o.Z.createRole(t.id), c(!1);
        };
    return (0, r.jsx)('div', {
        className: p.__invalid_rolesList,
        children: (0, r.jsxs)('div', {
            className: p.searchContainer,
            children: [
                (0, r.jsx)(l.E1j, {
                    size: l.E1j.Sizes.MEDIUM,
                    query: n,
                    onChange: d,
                    onClear: u,
                    placeholder: g.NW.string(g.t.Sojqsr),
                    'aria-label': g.NW.string(g.t.Sojqsr)
                }),
                (0, r.jsx)(l.zxk, {
                    className: p.createButton,
                    size: l.zxk.Sizes.SMALL,
                    onClick: m,
                    submitting: a,
                    children: g.NW.string(g.t.JZZjQE)
                })
            ]
        })
    });
}
