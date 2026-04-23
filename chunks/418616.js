a.d(t, { A: () => _ });
var s = a(627968),
    l = a(64700),
    r = a(311907),
    i = a(783878),
    n = a(773669),
    c = a(417426),
    o = a(747550),
    d = a(282026),
    u = a(965660),
    h = a(324580),
    g = a(985018),
    A = a(843395);
function _(e) {
    let { loadId: t } = e,
        a = (0, r.bG)([n.default], () => (0, u.Kv)([n.default])),
        _ = d.A.useField("languageCode"),
        m = l.useCallback(
            (e) => {
                d.A.setState({ languageCode: e });
                let a = d.A.getField("fetchedQuery");
                c.A.clearSearchResults({ ignoreQueries: [a] }),
                    o.A.loadCategoryResults({
                        loadId: t,
                        categoryId: d.A.getField("categoryId"),
                        query: a,
                        languageCode: e,
                    });
            },
            [t],
        ),
        C = l.useMemo(() => (0, h.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, s.jsx)("div", {
        className: A.k,
        children: (0, s.jsx)(i.Z, {
            selectionMode: "single",
            label: g.intl.string(g.t.Ng5cTK),
            hideLabel: !0,
            value: _ ?? a,
            options: C,
            onSelectionChange: m,
        }),
    });
}
