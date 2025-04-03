n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(89182),
    o = n(706454),
    s = n(762692),
    c = n(959165),
    u = n(164991),
    d = n(726115),
    p = n(128449),
    h = n(388032);
function f(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([o.default], () => (0, d.Xp)([o.default])),
        f = u.Z.useField('languageCode'),
        g = null != f ? f : n,
        m = i.useCallback(
            (e) => {
                u.Z.setState({ languageCode: e });
                let n = u.Z.getField('fetchedQuery');
                s.Z.clearSearchResults({ ignoreQueries: [n] }),
                    c.Z.loadCategoryResults({
                        loadId: t,
                        categoryId: u.Z.getField('categoryId'),
                        query: n,
                        languageCode: e
                    });
            },
            [t]
        ),
        b = i.useMemo(
            () =>
                (0, p.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        _ = i.useMemo(() => {
            var e;
            let t = (0, p.Cf)().find((e) => e.code === g);
            return null != (e = null == t ? void 0 : t.name) ? e : h.NW.string(h.t.LQLMGB);
        }, [g]);
    return (0, r.jsx)(a.ZP, {
        items: b,
        title: _,
        onSelect: m,
        selected: g,
        'aria-label': h.NW.string(h.t.Ng5cTE)
    });
}
