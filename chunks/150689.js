n.d(t, { Z: () => c }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(130341),
    a = n(34112),
    s = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [m, g] = i.useState(""),
        [p, h] = i.useState(o.Cl),
        f = m.trim(),
        b = i.useMemo(() => d.filter((e) => (0, l.uo)(e, f)), [d, f]),
        x = i.useCallback(
            () =>
                (0, r.jsx)(
                    s.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: b,
                        setEditRoleId: t,
                        query: m,
                        setQuery: g,
                        setHeaderHeight: h,
                    },
                    "header",
                ),
            [n, c, b, t, m],
        );
    return (0, r.jsx)(a.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: x,
        headerHeight: p,
        query: m,
    });
}
