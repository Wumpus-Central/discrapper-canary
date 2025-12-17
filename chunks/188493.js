n.d(t, { Z: () => g });
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(89182),
    o = n(706454),
    s = n(762692),
    c = n(959165),
    u = n(164991),
    d = n(726115),
    p = n(128449),
    f = n(388032);
function g(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([o.default], () => (0, d.Xp)([o.default])),
        g = u.Z.useField("languageCode"),
        h = null != g ? g : n,
        m = i.useCallback(
            (e) => {
                u.Z.setState({ languageCode: e });
                let n = u.Z.getField("fetchedQuery");
                s.Z.clearSearchResults({ ignoreQueries: [n] }),
                    c.Z.loadCategoryResults({
                        loadId: t,
                        categoryId: u.Z.getField("categoryId"),
                        query: n,
                        languageCode: e,
                    });
            },
            [t],
        ),
        b = i.useMemo(
            () =>
                (0, p.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name,
                })),
            [],
        ),
        _ = i.useMemo(() => {
            var e;
            let t = (0, p.Cf)().find((e) => e.code === h);
            return null != (e = null == t ? void 0 : t.name) ? e : f.intl.string(f.t.LQLMGP);
        }, [h]);
    return (0, r.jsx)(a.ZP, {
        items: b,
        title: _,
        onSelect: m,
        selected: h,
        "aria-label": f.intl.string(f.t.Ng5cTK),
    });
}
