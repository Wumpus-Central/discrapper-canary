n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(200651),
    i = n(192379),
    l = n(130341),
    s = n(34112),
    a = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: u, setSelectedSection: d } = e,
        [m, g] = i.useState(''),
        [p, f] = i.useState(o.Cl),
        h = m.trim(),
        x = i.useMemo(() => u.filter((e) => (0, l.uo)(e, h)), [u, h]),
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
                        setHeaderHeight: f
                    },
                    'header'
                ),
            [n, c, x, t, m]
        );
    return (0, r.jsx)(s.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: u,
        setSelectedSection: d,
        renderHeader: b,
        headerHeight: p,
        query: m
    });
}
