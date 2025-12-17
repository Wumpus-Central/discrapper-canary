n.d(t, { i: () => u }), n(388685);
var a = n(473749),
    r = n(442837),
    i = n(493646),
    l = n(678694),
    s = n(881294),
    o = n(258971),
    c = n(133743),
    d = n(981631);
function u(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.getCategories()),
        n = (0, i.K)(),
        u = a.useMemo(
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
        p = (0, o.Xh)(),
        m = a.useCallback(
            (e) => {
                let t = u.find((t) => t.id === e);
                null != t &&
                    ((0, s.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: null == p ? void 0 : p.type,
                    }),
                    (0, c.O4)({ categoryId: e }));
            },
            [null == p ? void 0 : p.type, u],
        ),
        h = null != e && u.some((t) => t.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: h,
        onSelectTab: m,
    };
}
