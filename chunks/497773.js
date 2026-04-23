a.d(t, { S: () => u });
var n = a(64700),
    l = a(311907),
    i = a(620140),
    s = a(38181),
    r = a(412461),
    o = a(310419),
    c = a(656106),
    d = a(652215);
function u(e) {
    let t = (0, l.bG)([s.A], () => s.A.getCategories()),
        a = (0, i.A)(),
        u = n.useMemo(
            () => [{ id: a.id.toString(), label: a.name }, ...t.map((e) => ({ id: e.id.toString(), label: e.name }))],
            [t, a],
        ),
        h = (0, o.R4)(),
        m = n.useCallback(
            (e) => {
                let t = u.find((t) => t.id === e);
                null != t &&
                    ((0, r.TR)(d.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: h?.type,
                    }),
                    (0, c.kq)({ categoryId: e }));
            },
            [h?.type, u],
        ),
        p = null != e && u.some((t) => t.id === e) ? e : u[0].id;
    return { tabs: u, selectedTab: p, onSelectTab: m };
}
