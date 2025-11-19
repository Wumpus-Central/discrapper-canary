n.d(t, { Z: () => o }), n(388685);
var r = n(473749),
    i = n(81063);
let a = ["embedded_cover", "embedded_background"];
function o(e) {
    let { applicationId: t, size: n, names: o = a } = e,
        [s, l] = r.useState(null),
        [c, u] = r.useState(!0),
        d = (0, i.xF)(t, s, n),
        f = c ? "loading" : null != d ? "fetched" : "not-found",
        _ = r.useRef(o);
    return (
        r.useEffect(() => {
            _.current = o;
        }),
        r.useEffect(() => {
            let { current: e } = _;
            null != t &&
                (0, i.Vh)(t).then((t) => {
                    for (let [n, r] of (u(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void l(r.id);
                });
        }, [t]),
        {
            url: d,
            state: f,
        }
    );
}
