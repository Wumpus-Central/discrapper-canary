n.d(t, { A: () => l }), n(896048), n(733351), n(747238);
var r = n(64700),
    i = n(77509),
    a = n(128747);
let s = [],
    o = "";
function l(e) {
    let {
            visible: t,
            autocompleterResultTypes: n,
            autocompleterOptions: l,
            autocompleterBeforeCreateSearchContext: c,
        } = e,
        [u, d] = r.useState(o),
        [f, p] = r.useState(s),
        _ = r.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? p(s) : p(e);
        }, []);
    r.useEffect(
        () =>
            i.A.addRouteChangeListener(() => {
                d(o);
            }),
        [],
    );
    let [h] = r.useState(() => new a.A(_, n, void 0, l));
    return (
        r.useEffect(() => {
            t ? (null == c || c(h), h.createSearchContext()) : (h.clean(), d(o));
        }, [t, h, c]),
        {
            queryResults: f,
            query: u,
            updateQuery: r.useCallback(
                (e) => {
                    d(e), h.search(e);
                },
                [h],
            ),
        }
    );
}
