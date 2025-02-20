n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(89182),
    a = n(706454),
    s = n(762692),
    c = n(959165),
    u = n(164991),
    d = n(726115),
    p = n(128449),
    h = n(388032);
function g(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([a.default], () => (0, d.Xp)([a.default])),
        g = u.Z.useField('languageCode'),
        f = null != g ? g : n,
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
            let t = (0, p.Cf)().find((e) => e.code === f);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : h.NW.string(h.t.LQLMGB);
        }, [f]);
    return (0, r.jsx)(o.ZP, {
        items: b,
        title: _,
        onSelect: m,
        selected: f,
        'aria-label': h.NW.string(h.t.Ng5cTE)
    });
}
