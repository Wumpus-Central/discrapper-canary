n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(89182),
    s = n(706454),
    o = n(762692),
    d = n(959165),
    c = n(164991),
    u = n(726115),
    h = n(128449),
    m = n(388032);
function p(e) {
    let { loadId: t } = e,
        n = (0, r.e7)([s.default], () => (0, u.Xp)([s.default])),
        p = c.Z.useField('languageCode'),
        g = null != p ? p : n,
        _ = l.useCallback(
            (e) => {
                c.Z.setState({ languageCode: e });
                let n = c.Z.getField('fetchedQuery');
                o.Z.clearSearchResults({ ignoreQueries: [n] }),
                    d.Z.loadCategoryResults({
                        loadId: t,
                        categoryId: c.Z.getField('categoryId'),
                        query: n,
                        languageCode: e
                    });
            },
            [t]
        ),
        f = l.useMemo(
            () =>
                (0, h.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        E = l.useMemo(() => {
            var e;
            let t = (0, h.Cf)().find((e) => e.code === g);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : m.intl.string(m.t.LQLMGB);
        }, [g]);
    return (0, i.jsx)(a.ZP, {
        items: f,
        title: E,
        onSelect: _,
        selected: g,
        'aria-label': m.intl.string(m.t.Ng5cTE)
    });
}
