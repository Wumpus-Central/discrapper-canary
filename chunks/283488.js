u.d(t, { A: () => c });
var n = u(582128),
    d = u(970928);
let r = ["embedded_cover", "embedded_background"];
function c(e) {
    let { applicationId: t, size: u, names: c = r, format: i = "png" } = e,
        [l, s] = n.useState(null),
        [a, f] = n.useState(!0),
        o = (0, d.uD)(t, l, u, i),
        b = n.useRef(c);
    return (
        n.useEffect(() => {
            b.current = c;
        }),
        n.useEffect(() => {
            let { current: e } = b;
            null != t &&
                (0, d.Y)(t).then((t) => {
                    for (let [u, n] of (f(!1), Object.entries(t)))
                        if (null != n && "" !== n.id && e.includes(n.name)) return void s(n.id);
                });
        }, [t]),
        { url: o, state: a ? "loading" : null != o ? "fetched" : "not-found" }
    );
}
