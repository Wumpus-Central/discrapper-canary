n.d(t, { Z: () => o }), n(47120);
var a = n(192379),
    r = n(81063);
let i = ['embedded_cover', 'embedded_background'];
function o(e) {
    let { applicationId: t, size: n, names: o = i } = e,
        [l, c] = a.useState(null),
        [s, u] = a.useState(!0),
        _ = (0, r.xF)(t, l, n),
        d = a.useRef(o);
    return (
        a.useEffect(() => {
            d.current = o;
        }),
        a.useEffect(() => {
            let { current: e } = d;
            null != t &&
                (0, r.Vh)(t).then((t) => {
                    for (let [n, a] of (u(!1), Object.entries(t))) if (null != a && '' !== a.id && e.includes(a.name)) return void c(a.id);
                });
        }, [t]),
        {
            url: _,
            state: s ? 'loading' : null != _ ? 'fetched' : 'not-found'
        }
    );
}
