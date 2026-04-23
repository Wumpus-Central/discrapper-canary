"use strict";
n.d(t, { A: () => a });
var r = n(64700),
    i = n(139675);
let s = ["embedded_cover", "embedded_background"];
function a(e) {
    let { applicationId: t, size: n, names: a = s, format: o = "png" } = e,
        [l, u] = r.useState(null),
        [c, d] = r.useState(!0),
        _ = (0, i.uD)(t, l, n, o),
        f = r.useRef(a);
    return (
        r.useEffect(() => {
            f.current = a;
        }),
        r.useEffect(() => {
            let { current: e } = f;
            null != t &&
                (0, i.Y)(t).then((t) => {
                    for (let [n, r] of (d(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void u(r.id);
                });
        }, [t]),
        { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
    );
}
