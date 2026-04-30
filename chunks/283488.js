n.d(t, { A: () => l });
var r = n(64700),
    u = n(970928);
let a = ["embedded_cover", "embedded_background"];
function l(e) {
    let { applicationId: t, size: n, names: l = a, format: o = "png" } = e,
        [i, s] = r.useState(null),
        [c, d] = r.useState(!0),
        _ = (0, u.uD)(t, i, n, o),
        f = r.useRef(l);
    return (
        r.useEffect(() => {
            f.current = l;
        }),
        r.useEffect(() => {
            let { current: e } = f;
            null != t &&
                (0, u.Y)(t).then((t) => {
                    for (let [n, r] of (d(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void s(r.id);
                });
        }, [t]),
        { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
    );
}
