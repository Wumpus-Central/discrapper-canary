n.d(t, { Z: () => m });
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(89182),
    s = n(706454),
    o = n(762692),
    c = n(959165),
    u = n(164991),
    d = n(726115),
    p = n(128449),
    f = n(388032);
function m(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([s.default], () => (0, d.Xp)([s.default])),
        m = u.Z.useField("languageCode"),
        h = null != m ? m : n,
        g = i.useCallback(
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
            let t = (0, p.Cf)().find((e) => e.code === h);
            return null != (e = null == t ? void 0 : t.name) ? e : f.intl.string(f.t.LQLMGP);
        }, [h]);
    return (0, r.jsx)(a.ZP, {
        items: _,
        title: b,
        onSelect: g,
        selected: h,
        "aria-label": f.intl.string(f.t.Ng5cTK),
    });
}
