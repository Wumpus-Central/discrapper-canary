n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(130341),
    a = n(34112),
    s = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [g, m] = i.useState(""),
        [p, f] = i.useState(o.Cl),
        h = g.trim(),
        b = i.useMemo(() => d.filter((e) => (0, l.uo)(e, h)), [d, h]),
        x = i.useCallback(
            () =>
                (0, r.jsx)(
                    s.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: b,
                        setEditRoleId: t,
                        query: g,
                        setQuery: m,
                        setHeaderHeight: f,
                    },
                    "header",
                ),
            [n, c, b, t, g],
        );
    return (0, r.jsx)(a.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: x,
        headerHeight: p,
        query: g,
    });
}
