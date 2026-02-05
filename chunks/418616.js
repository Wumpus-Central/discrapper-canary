n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(397927),
    s = n(773669),
    o = n(417426),
    d = n(747550),
    c = n(282026),
    u = n(965660),
    A = n(324580),
    h = n(985018),
    _ = n(678042);
function m(e) {
    let { loadId: t } = e,
        n = (0, a.bG)([s.default], () => (0, u.Kv)([s.default])),
        m = c.A.useField("languageCode"),
        p = r.useCallback(
            (e) => {
                c.A.setState({ languageCode: e });
                let n = c.A.getField("fetchedQuery");
                o.A.clearSearchResults({ ignoreQueries: [n] }),
                    d.A.loadCategoryResults({
                        loadId: t,
                        categoryId: c.A.getField("categoryId"),
                        query: n,
                        languageCode: e,
                    });
            },
            [t],
        ),
        g = r.useMemo(() => (0, A.tO)().map((e) => ({ id: e.code, value: e.code, label: e.name })), []);
    return (0, i.jsx)("div", {
        className: _.k,
        children: (0, i.jsx)(l.ZiE, {
            selectionMode: "single",
            label: h.intl.string(h.t.Ng5cTK),
            hideLabel: !0,
            value: m ?? n,
            options: g,
            onSelectionChange: p,
        }),
    });
}
