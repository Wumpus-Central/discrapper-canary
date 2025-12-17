n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    l = n(130341),
    a = n(34112),
    s = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [g, f] = i.useState(""),
        [m, b] = i.useState(o.Cl),
        p = g.trim(),
        h = i.useMemo(() => d.filter((e) => (0, l.uo)(e, p)), [d, p]),
        x = i.useCallback(
            () =>
                (0, r.jsx)(
                    s.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: h,
                        setEditRoleId: t,
                        query: g,
                        setQuery: f,
                        setHeaderHeight: b,
                    },
                    "header",
                ),
            [n, c, h, t, g],
        );
    return (0, r.jsx)(a.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: x,
        headerHeight: m,
        query: g,
    });
}
