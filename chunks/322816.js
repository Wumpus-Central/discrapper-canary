n.d(t, { ZP: () => R }), n(411104), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(144991),
    u = n(496675),
    m = n(594174),
    h = n(626135),
    g = n(233608),
    x = n(700785),
    p = n(764260),
    _ = n(631969),
    C = n(95242),
    f = n(420966),
    v = n(275296),
    N = n(203377),
    j = n(981631),
    I = n(388032),
    E = n(309972),
    b = n(990734);
function T(e) {
    let { guild: t, role: n, locked: l } = e,
        s = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        d = r.useMemo(
            () =>
                x.uB({
                    user: s,
                    context: t
                }),
            [s, t]
        ),
        u = r.useMemo(
            () => ({
                [n.id]: {
                    ...n,
                    permissions: x.Hn
                }
            }),
            [n]
        ),
        h = r.useMemo(
            () =>
                x.uB({
                    user: s,
                    context: t,
                    roles: u
                }),
            [s, t, u]
        ),
        g = !a.fS(d, h);
    return (0, i.jsx)('div', {
        className: E.clearButtonWrapper,
        children: (0, i.jsx)(c.ua7, {
            text: g ? I.intl.string(I.t['IQ/6Sk']) : null,
            position: 'top',
            color: c.ua7.Colors.RED,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: r } = e;
                return (0, i.jsx)(c.zxk, {
                    className: E.clearButton,
                    size: c.zxk.Sizes.TINY,
                    look: c.zxk.Looks.LINK,
                    color: c.zxk.Colors.LINK,
                    onClick: () => (0, p.TY)(n.id),
                    onMouseEnter: t,
                    onMouseLeave: r,
                    disabled: a.fS(n.permissions, x.Hn) || g || l,
                    children: I.intl.string(I.t['UYq7+P'])
                });
            }
        })
    });
}
function S(e) {
    let { guild: t, role: n, specs: r, locked: l } = e;
    if (0 === r.length)
        return (0, i.jsxs)('div', {
            className: E.noResultsContainer,
            children: [
                (0, i.jsx)(_.Z, { className: E.noResults }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: I.intl.string(I.t.DEBGqK)
                })
            ]
        });
    function s(e) {
        return u.Z.can(e, t)
            ? !u.Z.can(e, t, null, {
                  [n.id]: {
                      ...n,
                      permissions: a.Od(n.permissions, e)
                  }
              }) && I.intl.string(I.t['K+D+GB'])
            : I.intl.string(I.t.nOtPMD);
    }
    return (0, i.jsxs)('div', {
        className: E.permissionsWrapper,
        children: [
            (0, i.jsx)(T, {
                guild: t,
                role: n,
                locked: l
            }),
            r.map((e, t) =>
                (0, i.jsx)(
                    d.Z,
                    {
                        className: E.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, p.lO)(n.id, e, t);
                        },
                        permissionRender: s
                    },
                    t
                )
            )
        ]
    });
}
function R(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: a, initialSearchQuery: o } = e,
        [d, u] = r.useState(null != o ? o : ''),
        m = r
            .useMemo(() => g.Z.generateGuildPermissionSpec(t), [t])
            .map((e) => ({
                ...e,
                permissions: e.permissions.filter((e) => {
                    let t = d.trimStart().toLowerCase();
                    return e.title.toLowerCase().includes(t) || (null != e.description && e.description.toString().toLowerCase().includes(t));
                })
            }))
            .filter((e) => e.permissions.length > 0),
        { headerHeight: x, headerRef: p } = (0, C.Z)(0),
        { scrolledToTop: _, handleScroll: T } = (0, f.V)(),
        R = r.useRef(!1);
    return (
        r.useEffect(() => {
            !R.current && '' !== d.trimStart() && (h.default.track(j.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (R.current = !0));
        }, [d]),
        (0, i.jsx)(c.yWw, {
            className: E.scroller,
            style: { scrollPaddingTop: x },
            onScroll: T,
            children: (0, i.jsxs)('div', {
                className: b.contentWidth,
                children: [
                    (0, i.jsxs)('div', {
                        className: s()(b.header, b.stickyHeader, { [b.stickyHeaderElevated]: !_ }),
                        ref: p,
                        children: [
                            (0, i.jsx)(f.Z, {
                                guild: t,
                                role: n,
                                selectedSection: N.ZI.PERMISSIONS,
                                setSelectedSection: a
                            }),
                            (0, i.jsx)('div', {
                                className: E.noticeContainer,
                                children: (0, i.jsx)(v.Z, { role: n })
                            }),
                            (0, i.jsx)('div', {
                                className: E.searchContainer,
                                children: (0, i.jsx)(c.E1j, {
                                    size: c.E1j.Sizes.MEDIUM,
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(''),
                                    placeholder: I.intl.string(I.t.OLJAk5),
                                    'aria-label': I.intl.string(I.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(S, {
                        guild: t,
                        role: n,
                        specs: m,
                        locked: l
                    })
                ]
            })
        })
    );
}
