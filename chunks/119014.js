t.d(n, {
    i: function () {
        return u;
    }
}),
    t(47120);
var a = t(192379),
    i = t(442837),
    r = t(894653),
    l = t(493646),
    o = t(881294),
    s = t(258971),
    c = t(133743),
    d = t(981631);
function u(e) {
    let n = (0, i.e7)([r.Z], () => r.Z.getCategories()),
        t = (0, l.K)(),
        u = a.useMemo(
            () => [
                {
                    id: t.id.toString(),
                    label: t.name
                },
                ...n.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [n, t]
        ),
        m = (0, s.Xh)(),
        p = a.useCallback(
            (e) => {
                let n = u.find((n) => n.id === e);
                null != n &&
                    ((0, o.zZ)(d.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
                        category: n.label,
                        category_id: Number(n.id),
                        current_page: null == m ? void 0 : m.type
                    }),
                    (0, c.O4)({ categoryId: e }));
            },
            [null == m ? void 0 : m.type, u]
        ),
        _ = null != e && u.some((n) => n.id === e) ? e : u[0].id;
    return {
        tabs: u,
        selectedTab: _,
        onSelectTab: p
    };
}
