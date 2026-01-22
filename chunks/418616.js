n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(191711),
    s = n(773669),
    o = n(417426),
    c = n(747550),
    u = n(282026),
    d = n(965660),
    p = n(324580),
    f = n(985018);

function h(e) {
    let { loadId: t } = e,
        n = (0, l.bG)([s.default], () => (0, d.Kv)([s.default])),
        h = u.A.useField("languageCode"),
        A = null != h ? h : n,
        g = i.useCallback(
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
        m = i.useMemo(
            () =>
                (0, p.tO)().map((e) => ({
                    id: e.code,
                    label: e.name,
                })),
            [],
        ),
        b = i.useMemo(() => {
            var e;
            let t = (0, p.tO)().find((e) => e.code === A);
            return null != (e = null == t ? void 0 : t.name) ? e : f.intl.string(f.t.LQLMGP);
        }, [A]);
    return (0, r.jsx)(a.Ay, {
        items: m,
        title: b,
        onSelect: g,
        selected: A,
        "aria-label": f.intl.string(f.t.Ng5cTK),
    });
}
