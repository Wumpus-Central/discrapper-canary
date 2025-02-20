n.d(t, { Z: () => c }), n(47120), n(566702);
var r = n(200651),
    i = n(192379),
    s = n(130341),
    a = n(34112),
    l = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [m, p] = i.useState(''),
        [g, h] = i.useState(o.Cl),
        f = m.trim(),
        b = i.useMemo(() => d.filter((e) => (0, s.uo)(e, f)), [d, f]),
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
                        setQuery: p,
                        setHeaderHeight: h
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
        headerHeight: g,
        query: m
    });
}
