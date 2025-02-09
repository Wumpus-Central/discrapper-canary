n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    s = n(304445),
    l = n(997383);
let r = [];
function a(e) {
    let { visible: t, autocompleterResultTypes: n, autocompleterOptions: a, autocompleterBeforeCreateSearchContext: o } = e,
        [c, d] = i.useState(''),
        [u, h] = i.useState(r),
        m = i.useCallback((e, t) => {
            '' === (t = t.trim()).trim() ? h(r) : h(e);
        }, []);
    i.useEffect(
        () =>
            s.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [g] = i.useState(() => new l.Z(m, n, void 0, a));
    return (
        i.useEffect(() => {
            t ? (null == o || o(g), g.createSearchContext()) : (g.clean(), d(''));
        }, [t, g, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: i.useCallback(
                (e) => {
                    d(e), g.search(e);
                },
                [g]
            )
        }
    );
}
