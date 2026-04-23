n.d(t, { A: () => l });
var i = n(64700),
    r = n(970928);
let a = ["embedded_cover", "embedded_background"];
function l(e) {
    let { applicationId: t, size: n, names: l = a, format: s = "png" } = e,
        [o, u] = i.useState(null),
        [_, E] = i.useState(!0),
        A = (0, r.uD)(t, o, n, s),
        c = i.useRef(l);
    return (
        i.useEffect(() => {
            c.current = l;
        }),
        i.useEffect(() => {
            let { current: e } = c;
            null != t &&
                (0, r.Y)(t).then((t) => {
                    for (let [n, i] of (E(!1), Object.entries(t)))
                        if (null != i && "" !== i.id && e.includes(i.name)) return void u(i.id);
                });
        }, [t]),
        { url: A, state: _ ? "loading" : null != A ? "fetched" : "not-found" }
    );
}
