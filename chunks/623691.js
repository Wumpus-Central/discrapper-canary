n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(749210),
    c = n(63063),
    d = n(714939),
    u = n(494831),
    m = n(981631),
    h = n(388032),
    g = n(147465);
function x(e) {
    let { guild: t, everyoneRole: n, filteredRoles: l, setEditRoleId: s, query: o, setQuery: c, setHeaderHeight: d } = e,
        m = r.useRef(null);
    r.useEffect(() => {
        var e, t;
        d(null !== (t = null === (e = m.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : u.Cl);
    }, [d]);
    let x = r.useCallback(() => {
        s(n.id);
    }, [s, n.id]);
    return (0, i.jsxs)('div', {
        ref: m,
        children: [
            (0, i.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H1,
                children: h.intl.string(h.t.LPJmLy)
            }),
            (0, i.jsx)(a.Text, {
                className: g.description,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: h.intl.string(h.t['1ydhVl'])
            }),
            (0, i.jsx)(p, {
                guild: t,
                everyoneRole: n,
                filteredRoles: l,
                query: o,
                setQuery: c,
                onEveryoneRoleClick: x
            })
        ]
    });
}
function p(e) {
    let { guild: t, everyoneRole: n, filteredRoles: r, query: l, setQuery: o, onEveryoneRoleClick: u } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                role: n,
                onClick: u
            }),
            (0, i.jsx)(f, {
                guild: t,
                query: l,
                setQuery: o
            }),
            (0, i.jsx)(a.Text, {
                className: g.helpText,
                color: 'header-secondary',
                variant: 'text-sm/normal',
                children: h.intl.format(h.t.xkC3YW, { articleURL: c.Z.getArticleURL(m.BhN.PERMISSIONS_TUTORIAL) })
            }),
            (0, i.jsx)('div', {
                className: g.rolesTable,
                children: (0, i.jsxs)('div', {
                    className: g.tableHeader,
                    children: [
                        (0, i.jsx)('div', { className: g.dragSpacing }),
                        (0, i.jsx)(a.Text, {
                            className: s()(g.tableTitle, g.roleNameSpacing),
                            variant: 'text-sm/normal',
                            children: h.intl.format(h.t['38N3V1'], { numRoles: String(r.length) })
                        }),
                        (0, i.jsx)(a.Text, {
                            className: s()(g.tableTitle, g.memberSpacing),
                            variant: 'text-sm/normal',
                            children: h.intl.string(h.t['9Oq93t'])
                        }),
                        (0, i.jsx)('div', { className: g.buttonsSpacing })
                    ]
                })
            })
        ]
    });
}
function f(e) {
    let { guild: t, query: n, setQuery: l } = e,
        [s, c] = r.useState(!1),
        d = r.useCallback(
            (e) => {
                l(e);
            },
            [l]
        ),
        u = r.useCallback(() => {
            l('');
        }, [l]),
        m = async () => {
            c(!0), await o.Z.createRole(t.id), c(!1);
        };
    return (0, i.jsx)('div', {
        className: g.__invalid_rolesList,
        children: (0, i.jsxs)('div', {
            className: g.searchContainer,
            children: [
                (0, i.jsx)(a.SearchBar, {
                    size: a.SearchBar.Sizes.MEDIUM,
                    query: n,
                    onChange: d,
                    onClear: u,
                    placeholder: h.intl.string(h.t.Sojqsr),
                    'aria-label': h.intl.string(h.t.Sojqsr)
                }),
                (0, i.jsx)(a.Button, {
                    className: g.createButton,
                    size: a.Button.Sizes.SMALL,
                    onClick: m,
                    submitting: s,
                    children: h.intl.string(h.t.JZZjQE)
                })
            ]
        })
    });
}
