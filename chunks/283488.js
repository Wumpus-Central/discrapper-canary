n.d(t, {
    A: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(139675);
let a = ["embedded_cover", "embedded_background"];

function s(e) {
    let { applicationId: t, size: n, names: s = a, format: o = "png" } = e,
        [l, c] = r.useState(null),
        [u, d] = r.useState(!0),
        f = (0, i.uD)(t, l, n, o),
        p = u ? "loading" : null != f ? "fetched" : "not-found",
        _ = r.useRef(s);
    return (
        r.useEffect(() => {
            _.current = s;
        }),
        r.useEffect(() => {
            let { current: e } = _;
            null != t &&
                (0, i.Y)(t).then((t) => {
                    for (let [n, r] of (d(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void c(r.id);
                });
        }, [t]),
        {
            url: f,
            state: p,
        }
    );
}
