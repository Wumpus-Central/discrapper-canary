a.d(t, { v: () => d });
var n = a(64700),
    i = a(416730),
    s = a(620140),
    l = a(412461),
    r = a(310419),
    o = a(656106),
    c = a(652215);
function d(e) {
    let { initialQuery: t = "" } = e,
        a = i.A.useField("query");
    n.useEffect(() => i.A.setState({ query: t }), [t]);
    let d = n.useCallback((e) => {
            i.A.setState({ query: e });
        }, []),
        u = n.useCallback(() => {
            i.A.setState({ query: "" });
        }, []),
        h = n.useCallback(() => {
            let e = (0, s.A)();
            (0, l.TR)(c.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: a,
                category: e.name,
                current_page: r.ev.HOME,
                category_id: e.id,
            }),
                (0, o.JX)({ query: a });
        }, [a]);
    return { searchQuery: a, onSearchTextChange: d, onClearSearch: u, onSearchSubmit: h };
}
