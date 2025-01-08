n.d(t, {
    ZP: function () {
        return R;
    }
}),
    n(411104),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(149765),
    o = n(442837),
    c = n(481060),
    d = n(144991),
    u = n(496675),
    m = n(594174),
    h = n(626135),
    g = n(233608),
    x = n(700785),
    p = n(764260),
    f = n(631969),
    C = n(95242),
    v = n(420966),
    _ = n(275296),
    N = n(203377),
    I = n(981631),
    T = n(388032),
    j = n(105452),
    b = n(490909);
function S(e) {
    let { guild: t, role: n, locked: l } = e,
        a = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        d = r.useMemo(
            () =>
                x.uB({
                    user: a,
                    context: t
                }),
            [a, t]
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
                    user: a,
                    context: t,
                    roles: u
                }),
            [a, t, u]
        ),
        g = !s.fS(d, h);
    return (0, i.jsx)('div', {
        className: j.clearButtonWrapper,
        children: (0, i.jsx)(c.Tooltip, {
            text: g ? T.intl.string(T.t['IQ/6Sk']) : null,
            position: 'top',
            color: c.Tooltip.Colors.RED,
            children: (e) => {
                let { onMouseEnter: t, onMouseLeave: r } = e;
                return (0, i.jsx)(c.Button, {
                    className: j.clearButton,
                    size: c.Button.Sizes.TINY,
                    look: c.Button.Looks.LINK,
                    color: c.Button.Colors.LINK,
                    onClick: () => (0, p.TY)(n.id),
                    onMouseEnter: t,
                    onMouseLeave: r,
                    disabled: s.fS(n.permissions, x.Hn) || g || l,
                    children: T.intl.string(T.t['UYq7+P'])
                });
            }
        })
    });
}
function E(e) {
    let { guild: t, role: n, specs: r, locked: l } = e;
    if (0 === r.length)
        return (0, i.jsxs)('div', {
            className: j.noResultsContainer,
            children: [
                (0, i.jsx)(f.Z, { className: j.noResults }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    children: T.intl.string(T.t.DEBGqK)
                })
            ]
        });
    function a(e) {
        return u.Z.can(e, t)
            ? !u.Z.can(e, t, null, {
                  [n.id]: {
                      ...n,
                      permissions: s.Od(n.permissions, e)
                  }
              }) && T.intl.string(T.t['K+D+GB'])
            : T.intl.string(T.t.nOtPMD);
    }
    return (0, i.jsxs)('div', {
        className: j.permissionsWrapper,
        children: [
            (0, i.jsx)(S, {
                guild: t,
                role: n,
                locked: l
            }),
            r.map((e, t) =>
                (0, i.jsx)(
                    d.Z,
                    {
                        className: j.permissionsForm,
                        spec: e,
                        permissions: n.permissions,
                        locked: l,
                        onChange: (e, t) => {
                            if ('string' == typeof t) throw Error('Unexpected string `allow`');
                            (0, p.lO)(n.id, e, t);
                        },
                        permissionRender: a
                    },
                    t
                )
            )
        ]
    });
}
function R(e) {
    let { guild: t, role: n, locked: l, setSelectedSection: s, initialSearchQuery: o } = e,
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
        { scrolledToTop: f, handleScroll: S } = (0, v.V)(),
        R = r.useRef(!1);
    return (
        r.useEffect(() => {
            if (!R.current && '' !== d.trimStart()) h.default.track(I.rMx.SEARCH_STARTED, { search_type: 'Permissions' }), (R.current = !0);
        }, [d]),
        (0, i.jsx)(c.AdvancedScrollerAuto, {
            className: j.scroller,
            style: { scrollPaddingTop: x },
            onScroll: S,
            children: (0, i.jsxs)('div', {
                className: b.contentWidth,
                children: [
                    (0, i.jsxs)('div', {
                        className: a()(b.header, b.stickyHeader, { [b.stickyHeaderElevated]: !f }),
                        ref: p,
                        children: [
                            (0, i.jsx)(v.Z, {
                                guild: t,
                                role: n,
                                selectedSection: N.ZI.PERMISSIONS,
                                setSelectedSection: s
                            }),
                            (0, i.jsx)('div', {
                                className: j.noticeContainer,
                                children: (0, i.jsx)(_.Z, { role: n })
                            }),
                            (0, i.jsx)('div', {
                                className: j.searchContainer,
                                children: (0, i.jsx)(c.SearchBar, {
                                    size: c.SearchBar.Sizes.MEDIUM,
                                    query: d,
                                    onChange: u,
                                    onClear: () => u(''),
                                    placeholder: T.intl.string(T.t.OLJAk5),
                                    'aria-label': T.intl.string(T.t.OLJAk5)
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(E, {
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
