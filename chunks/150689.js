n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(130341),
    s = n(34112),
    a = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [g, m] = i.useState(""),
        [p, f] = i.useState(o.Cl),
        h = g.trim(),
        x = i.useMemo(() => d.filter((e) => (0, l.uo)(e, h)), [d, h]),
        b = i.useCallback(
            () =>
                (0, r.jsx)(
                    a.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: x,
                        setEditRoleId: t,
                        query: g,
                        setQuery: m,
                        setHeaderHeight: f,
                    },
                    "header",
                ),
            [n, c, x, t, g],
        );
    return (0, r.jsx)(s.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: b,
        headerHeight: p,
        query: g,
    });
}
