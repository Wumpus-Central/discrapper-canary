(n.d(t, { Z: () => o }), n(388685));
var i = n(73800),
    r = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function o(e) {
    let { applicationId: t, size: n, names: o = l } = e,
        [s, a] = i.useState(null),
        [c, u] = i.useState(!0),
        d = (0, r.xF)(t, s, n),
        _ = i.useRef(o);
    return (
        i.useEffect(() => {
            _.current = o;
        }),
        i.useEffect(() => {
            let { current: e } = _;
            null != t &&
                (0, r.Vh)(t).then((t) => {
                    for (let [n, i] of (u(!1), Object.entries(t))) if (null != i && '' !== i.id && e.includes(i.name)) return void a(i.id);
                });
        }, [t]),
        {
            url: d,
            state: c ? 'loading' : null != d ? 'fetched' : 'not-found'
        }
    );
}
