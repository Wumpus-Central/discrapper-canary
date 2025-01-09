n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(130341),
    s = n(34112),
    a = n(623691),
    o = n(494831);
function c(e) {
    let { setEditRoleId: t, guild: n, everyoneRole: c, otherRoles: d, setSelectedSection: u } = e,
        [m, h] = r.useState(''),
        [g, x] = r.useState(o.Cl),
        p = m.trim(),
        f = r.useMemo(() => d.filter((e) => (0, l.uo)(e, p)), [d, p]),
        C = r.useCallback(
            () =>
                (0, i.jsx)(
                    a.Z,
                    {
                        guild: n,
                        everyoneRole: c,
                        filteredRoles: f,
                        setEditRoleId: t,
                        query: m,
                        setQuery: h,
                        setHeaderHeight: x
                    },
                    'header'
                ),
            [n, c, f, t, m]
        );
    return (0, i.jsx)(s.Z, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: C,
        headerHeight: g,
        query: m
    });
}
