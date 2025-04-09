n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    s = n(130341),
    a = n(34112),
    l = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [m, g] = i.useState(''),
        [p, f] = i.useState(o.Cl),
        h = m.trim(),
        b = i.useMemo(() => d.filter((e) => (0, s.uo)(e, h)), [d, h]),
        x = i.useCallback(
            () =>
                (0, r.jsx)(
                    l.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: b,
                        setEditRoleId: t,
                        query: m,
                        setQuery: g,
                        setHeaderHeight: f
                    },
                    'header'
                ),
            [n, c, b, t, m]
        );
    return (0, r.jsx)(a.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: x,
        headerHeight: p,
        query: m
    });
}
