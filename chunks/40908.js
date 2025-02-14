n.d(t, { Z: () => a }), n(47120);
var i = n(192379),
    s = n(304445),
    r = n(997383);
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
            s.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [h] = i.useState(() => new r.Z(g, n, void 0, a));
    return (
        i.useEffect(() => {
            t ? (null == o || o(h), h.createSearchContext()) : (h.clean(), d(''));
        }, [t, h, o]),
        {
            queryResults: u,
            query: c,
            updateQuery: i.useCallback(
                (e) => {
                    d(e), h.search(e);
                },
                [h]
            )
        }
    );
}
