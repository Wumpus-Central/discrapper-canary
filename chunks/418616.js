n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(773669),
    o = n(417426),
    c = n(747550),
    u = n(282026),
    d = n(965660),
    p = n(324580),
    h = n(985018),
    g = n(678042);

function f(e) {
    let { loadId: t } = e,
        n = (0, l.bG)([s.default], () => (0, d.Kv)([s.default])),
        f = u.A.useField("languageCode"),
        m = i.useCallback(
            (e) => {
                u.A.setState({
                    languageCode: e,
                });
                let n = u.A.getField("fetchedQuery");
                o.A.clearSearchResults({
                    ignoreQueries: [n],
                }),
                    c.A.loadCategoryResults({
                        loadId: t,
                        categoryId: u.A.getField("categoryId"),
                        query: n,
                        languageCode: e,
                    });
            },
            [t],
        ),
        A = i.useMemo(
            () =>
                (0, p.tO)().map((e) => ({
                    id: e.code,
                    value: e.code,
                    label: e.name,
                })),
            [],
        );
    return (0, r.jsx)("div", {
        className: g.k,
        children: (0, r.jsx)(a.ZiE, {
            selectionMode: "single",
            label: h.intl.string(h.t.Ng5cTK),
            hideLabel: !0,
            value: null != f ? f : n,
            options: A,
            onSelectionChange: m,
        }),
    });
}
