n.d(t, { A: () => r });
var l = n(582128),
    i = n(970928);
let s = ["embedded_cover", "embedded_background"];
function r(e) {
    let { applicationId: t, size: n, names: r = s, format: a = "png" } = e,
        [o, u] = l.useState(null),
        [c, d] = l.useState(!0),
        m = (0, i.uD)(t, o, n, a),
        h = l.useRef(r);
    return (
        l.useEffect(() => {
            h.current = r;
        }),
        l.useEffect(() => {
            let { current: e } = h;
            null != t &&
                (0, i.Y)(t).then((t) => {
                    for (let [n, l] of (d(!1), Object.entries(t)))
                        if (null != l && "" !== l.id && e.includes(l.name)) return void u(l.id);
                });
        }, [t]),
        { url: m, state: c ? "loading" : null != m ? "fetched" : "not-found" }
    );
}
