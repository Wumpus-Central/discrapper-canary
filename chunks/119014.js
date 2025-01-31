n.d(t, { i: () => u }), n(47120);
var i = n(192379),
    a = n(442837),
    r = n(894653),
    l = n(493646),
    s = n(881294),
    o = n(258971),
    c = n(133743),
    d = n(981631);
function u(e) {
    let t = (0, a.e7)([r.Z], () => r.Z.getCategories()),
        n = (0, l.K)(),
        u = i.useMemo(
            () => [
                {
                    id: n.id.toString(),
                    label: n.name
                },
                ...t.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [t, n]
        ),
        m = (0, o.Xh)(),
        h = i.useCallback(
            (e) => {
                let t = u.find((t) => t.id === e);
                null != t &&
                    ((0, s.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: t.label,
                        category_id: Number(t.id),
                        current_page: null == m ? void 0 : m.type
                    }),
                    (0, c.O4)({ categoryId: e }));
            },
            [null == m ? void 0 : m.type, u]
        ),
        p = null != e && u.some((t) => t.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: p,
        onSelectTab: h
    };
}
