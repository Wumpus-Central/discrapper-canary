n.d(t, { Z: () => a }), n(388685), n(781311), n(35282);
var i = n(192379),
    r = n(304445),
    s = n(997383);
let l = [];
function a(e) {
    let { visible: t, autocompleterResultTypes: n, autocompleterOptions: a, autocompleterBeforeCreateSearchContext: o } = e,
        [c, d] = i.useState(''),
        [u, m] = i.useState(l),
        g = i.useCallback((e, t) => {
            '' === (t = t.trim()).trim() ? m(l) : m(e);
        }, []);
    i.useEffect(
        () =>
            r.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [p] = i.useState(() => new s.Z(g, n, void 0, a));
    return (
        i.useEffect(() => {
            t ? (null == o || o(p), p.createSearchContext()) : (p.clean(), d(''));
        }, [t, p, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: i.useCallback(
                (e) => {
                    d(e), p.search(e);
                },
                [p]
            )
        }
    );
}
