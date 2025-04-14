n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    s = n(130341),
    l = n(34112),
    a = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [m, g] = i.useState(''),
        [p, h] = i.useState(o.Cl),
        f = m.trim(),
        x = i.useMemo(() => d.filter((e) => (0, s.uo)(e, f)), [d, f]),
        b = i.useCallback(
            () =>
                (0, r.jsx)(
                    a.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: x,
                        setEditRoleId: t,
                        query: m,
                        setQuery: g,
                        setHeaderHeight: h
                    },
                    'header'
                ),
            [n, c, x, t, m]
        );
    return (0, r.jsx)(l.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: b,
        headerHeight: p,
        query: m
    });
}
