n.d(t, { Z: () => o }), n(388685);
var r = n(73800),
    i = n(81063);
let l = ['embedded_cover', 'embedded_background'];
function o(e) {
    let { applicationId: t, size: n, names: o = l } = e,
        [a, s] = r.useState(null),
        [c, u] = r.useState(!0),
        E = (0, i.xF)(t, a, n),
        d = r.useRef(o);
    return (
        r.useEffect(() => {
            d.current = o;
        }),
        r.useEffect(() => {
            let { current: e } = d;
            null != t &&
                (0, i.Vh)(t).then((t) => {
                    for (let [n, r] of (u(!1), Object.entries(t))) if (null != r && '' !== r.id && e.includes(r.name)) return void s(r.id);
                });
        }, [t]),
        {
            url: E,
            state: c ? 'loading' : null != E ? 'fetched' : 'not-found'
        }
    );
}
