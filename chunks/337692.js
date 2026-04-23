n.d(t, { A: () => r });
var i = n(64700),
    s = n(77509),
    l = n(128747);
let a = [];
function r(e) {
    let {
            visible: t,
            autocompleterResultTypes: n,
            autocompleterOptions: r,
            autocompleterBeforeCreateSearchContext: o,
        } = e,
        [d, u] = i.useState(""),
        [c, g] = i.useState(a),
        m = i.useCallback((e, t) => {
            "" === (t = t.trim()).trim() ? g(a) : g(e);
        }, []);
    i.useEffect(
        () =>
            s.A.addRouteChangeListener(() => {
                u("");
            }),
        [],
    );
    let [_] = i.useState(() => new l.A(m, n, void 0, r));
    return (
        i.useEffect(() => {
            t ? (o?.(_), _.createSearchContext()) : (_.clean(), u(""));
        }, [t, _, o]),
        {
            queryResults: c,
            query: d,
            updateQuery: i.useCallback(
                (e) => {
                    u(e), _.search(e);
                },
                [_],
            ),
        }
    );
}
