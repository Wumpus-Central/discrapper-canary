n.d(t, {
    A: () => a,
}),
    n(896048),
    n(733351),
    n(747238);
var r = n(64700),
    i = n(77509),
    l = n(128747);
let s = [];

function a(e) {
    let {
            visible: t,
            autocompleterResultTypes: n,
            autocompleterOptions: a,
            autocompleterBeforeCreateSearchContext: o,
        } = e,
        [c, d] = r.useState(""),
        [u, _] = r.useState(s),
        p = r.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? _(s) : _(e);
        }, []);
    r.useEffect(
        () =>
            i.A.addRouteChangeListener(() => {
                d("");
            }),
        [],
    );
    let [m] = r.useState(() => new l.A(p, n, void 0, a));
    return (
        r.useEffect(() => {
            t ? (null == o || o(m), m.createSearchContext()) : (m.clean(), d(""));
        }, [t, m, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: r.useCallback(
                (e) => {
                    d(e), m.search(e);
                },
                [m],
            ),
        }
    );
}
