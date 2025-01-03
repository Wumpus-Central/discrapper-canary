n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(89182),
    s = n(706454),
    o = n(762692),
    c = n(959165),
    d = n(164991),
    u = n(726115),
    h = n(128449),
    m = n(388032);
function p(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([s.default], () => (0, u.Xp)([s.default])),
        p = d.Z.useField('languageCode'),
        g = null != p ? p : n,
        f = r.useCallback(
            (e) => {
                d.Z.setState({ languageCode: e });
                let n = d.Z.getField('fetchedQuery');
                o.Z.clearSearchResults({ ignoreQueries: [n] }),
                    c.Z.loadCategoryResults({
                        loadId: t,
                        categoryId: d.Z.getField('categoryId'),
                        query: n,
                        languageCode: e
                    });
            },
            [t]
        ),
        _ = r.useMemo(
            () =>
                (0, h.Cf)().map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        E = r.useMemo(() => {
            var e;
            let t = (0, h.Cf)().find((e) => e.code === g);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : m.intl.string(m.t.LQLMGB);
        }, [g]);
    return (0, i.jsx)(a.ZP, {
        items: _,
        title: E,
        onSelect: f,
        selected: g,
        'aria-label': m.intl.string(m.t.Ng5cTE)
    });
}
