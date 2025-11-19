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
        [f, _] = r.useState(o),
        p = r.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? _(o) : _(e);
        }, []);
    r.useEffect(
        () =>
            i.Z.addRouteChangeListener(() => {
                d(s);
            }),
        [],
    );
    let [h] = r.useState(() => new a.Z(p, n, void 0, l));
    return (
        r.useEffect(() => {
            t ? (null == c || c(h), h.createSearchContext()) : (h.clean(), d(s));
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
