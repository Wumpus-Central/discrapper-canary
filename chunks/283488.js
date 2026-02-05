"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(139675);
let a = ["embedded_cover", "embedded_background"];
function s(e) {
    let { applicationId: t, size: n, names: s = a, format: o = "png" } = e,
        [l, u] = r.useState(null),
        [c, d] = r.useState(!0),
        _ = (0, i.uD)(t, l, n, o),
        f = c ? "loading" : null != _ ? "fetched" : "not-found",
        p = r.useRef(s);
    return (
        r.useEffect(() => {
            p.current = s;
        }),
        r.useEffect(() => {
            let { current: e } = p;
            null != t &&
                (0, i.Y)(t).then((t) => {
                    for (let [n, r] of (d(!1), Object.entries(t)))
                        if (null != r && "" !== r.id && e.includes(r.name)) return void u(r.id);
                });
        }, [t]),
        { url: _, state: f }
    );
}
