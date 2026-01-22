n.d(t, {
    S: () => u,
}),
    n(896048);
var l = n(64700),
    a = n(311907),
    r = n(620140),
    i = n(38181),
    s = n(412461),
    c = n(310419),
    o = n(656106),
    d = n(652215);

function u(e) {
    let t = (0, a.bG)([i.A], () => i.A.getCategories()),
        n = (0, r.A)(),
        u = l.useMemo(
            () => [
                {
                    id: n.id.toString(),
                    label: n.name,
                },
                ...t.map((e) => ({
                    id: e.id.toString(),
                    label: e.name,
                })),
            ],
            [t, n],
        ),
        p = (0, c.R4)(),
        h = l.useCallback(
            (e) => {
                let t = u.find((t) => t.id === e);
                null != t &&
                    ((0, s.TR)(d.HAw.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: null == p ? void 0 : p.type,
                    }),
                    (0, o.kq)({
                        categoryId: e,
                    }));
            },
            [null == p ? void 0 : p.type, u],
        ),
        m = null != e && u.some((t) => t.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: m,
        onSelectTab: h,
    };
}
