"use strict";
n.d(t, { A: () => a });
var i = n(64700),
    r = n(970928);
let s = ["embedded_cover", "embedded_background"];
function a(e) {
    let { applicationId: t, size: n, names: a = s, format: o = "png" } = e,
        [l, u] = i.useState(null),
        [c, d] = i.useState(!0),
        _ = (0, r.uD)(t, l, n, o),
        f = i.useRef(a);
    return (
        i.useEffect(() => {
            f.current = a;
        }),
        i.useEffect(() => {
            let { current: e } = f;
            null != t &&
                (0, r.Y)(t).then((t) => {
                    for (let [n, i] of (d(!1), Object.entries(t)))
                        if (null != i && "" !== i.id && e.includes(i.name)) return void u(i.id);
                });
        }, [t]),
        { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
    );
}
