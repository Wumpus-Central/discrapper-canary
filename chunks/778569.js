n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(81063);
let a = ["embedded_cover", "embedded_background"];
function o(e) {
    let { applicationId: t, size: n, names: o = a, format: s = "png" } = e,
        [l, c] = r.useState(null),
        [u, d] = r.useState(!0),
        f = (0, i.xF)(t, l, n, s),
        _ = u ? "loading" : null != f ? "fetched" : "not-found",
        p = r.useRef(o);
    return (
        r.useEffect(() => {
            p.current = o;
        }),
        r.useEffect(() => {
            let { current: e } = p;
            null != t &&
                (0, i.Vh)(t).then((t) => {
                    for (let [n, r] of (d(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id);
                });
        }, [t]),
        {
            url: f,
            state: _,
        }
    );
}
