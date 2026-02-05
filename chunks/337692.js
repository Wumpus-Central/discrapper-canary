n.d(t, { A: () => l });
var i = n(64700),
    s = n(77509),
    r = n(128747);
let a = [];
function l(e) {
    let {
            visible: t,
            autocompleterResultTypes: n,
            autocompleterOptions: l,
            autocompleterBeforeCreateSearchContext: o,
        } = e,
        [c, d] = i.useState(""),
        [u, _] = i.useState(a),
        m = i.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? _(a) : _(e);
        }, []);
    i.useEffect(
        () =>
            s.A.addRouteChangeListener(() => {
                d("");
            }),
        [],
    );
    let [A] = i.useState(() => new r.A(m, n, void 0, l));
    return (
        i.useEffect(() => {
            t ? (o?.(A), A.createSearchContext()) : (A.clean(), d(""));
        }, [t, A, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: i.useCallback(
                (e) => {
                    d(e), A.search(e);
                },
                [A],
            ),
        }
    );
}
