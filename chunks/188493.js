n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(89182),
    s = n(706454),
    o = n(762692),
    c = n(959165),
    u = n(164991),
    d = n(726115),
    p = n(128449),
    f = n(388032);
function h(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([s.default], () => (0, d.Xp)([s.default])),
        h = u.Z.useField("languageCode"),
        g = null != h ? h : n,
        m = i.useCallback(
            (e) => {
                u.Z.setState({ languageCode: e });
                let n = u.Z.getField("fetchedQuery");
                o.Z.clearSearchResults({ ignoreQueries: [n] }),
                    c.Z.loadCategoryResults({
                        loadId: t,
                        categoryId: u.Z.getField("categoryId"),
                        query: n,
                        languageCode: e,
                    });
            },
            [t],
        ),
        _ = i.useMemo(
            () =>
                (0, p.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name,
                })),
            [],
        ),
        b = i.useMemo(() => {
            var e;
            let t = (0, p.Cf)().find((e) => e.code === g);
            return null != (e = null == t ? void 0 : t.name) ? e : f.intl.string(f.t.LQLMGP);
        }, [g]);
    return (0, r.jsx)(a.ZP, {
        items: _,
        title: b,
        onSelect: m,
        selected: g,
        "aria-label": f.intl.string(f.t.Ng5cTK),
    });
}
