n.d(t, { Z: () => l }), n(388685), n(781311), n(35282);
var r = n(473749),
    i = n(304445),
    a = n(997383);
let o = [],
    s = "";
function l(e) {
    let {
            visible: t,
            autocompleterResultTypes: n,
            autocompleterOptions: l,
            autocompleterBeforeCreateSearchContext: c,
        } = e,
        [u, d] = r.useState(s),
        [f, p] = r.useState(o),
        _ = r.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? p(o) : p(e);
        }, []);
    r.useEffect(
        () =>
            i.Z.addRouteChangeListener(() => {
                d(s);
            }),
        [],
    );
    let [m] = r.useState(() => new a.Z(_, n, void 0, l));
    return (
        r.useEffect(() => {
            t ? (null == c || c(m), m.createSearchContext()) : (m.clean(), d(s));
        }, [t, m, c]),
        {
            queryResults: f,
            query: u,
            updateQuery: r.useCallback(
                (e) => {
                    d(e), m.search(e);
                },
                [m],
            ),
        }
    );
}
