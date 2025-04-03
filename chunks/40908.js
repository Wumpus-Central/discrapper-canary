n.d(t, { Z: () => l }), n(47120), n(566702), n(301563);
var r = n(192379),
    i = n(304445),
    s = n(997383);
let a = [];
function l(e) {
    let { visible: t, autocompleterResultTypes: n, autocompleterOptions: l, autocompleterBeforeCreateSearchContext: o } = e,
        [c, d] = r.useState(''),
        [u, m] = r.useState(a),
        g = r.useCallback((e, t) => {
            '' === (t = t.trim()).trim() ? m(a) : m(e);
        }, []);
    r.useEffect(
        () =>
            i.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [p] = r.useState(() => new s.Z(g, n, void 0, l));
    return (
        r.useEffect(() => {
            t ? (null == o || o(p), p.createSearchContext()) : (p.clean(), d(''));
        }, [t, p, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: r.useCallback(
                (e) => {
                    d(e), p.search(e);
                },
                [p]
            )
        }
    );
}
