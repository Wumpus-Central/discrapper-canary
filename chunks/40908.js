n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379),
    r = n(304445),
    s = n(997383);
let a = [];
function l(e) {
    let { visible: t, autocompleterResultTypes: n, autocompleterOptions: l, autocompleterBeforeCreateSearchContext: o } = e,
        [c, d] = i.useState(''),
        [u, m] = i.useState(a),
        g = i.useCallback((e, t) => {
            '' === (t = t.trim()).trim() ? m(a) : m(e);
        }, []);
    i.useEffect(
        () =>
            r.Z.addRouteChangeListener(() => {
                d('');
            }),
        []
    );
    let [h] = i.useState(() => new s.Z(g, n, void 0, l));
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
