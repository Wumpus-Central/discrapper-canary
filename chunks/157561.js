n.d(t, { v: () => d });
var l = n(64700),
    a = n(416730),
    r = n(620140),
    i = n(412461),
    s = n(310419),
    c = n(656106),
    o = n(652215);
function d(e) {
    let { initialQuery: t = "" } = e,
        n = a.A.useField("query");
    l.useEffect(() => a.A.setState({ query: t }), [t]);
    let d = l.useCallback((e) => {
            a.A.setState({ query: e });
        }, []),
        u = l.useCallback(() => {
            a.A.setState({ query: "" });
        }, []),
        p = l.useCallback(() => {
            let e = (0, r.A)();
            (0, i.TR)(o.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: s.ev.HOME,
                category_id: e.id,
            }),
                (0, c.JX)({ query: n });
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: p,
    };
}
