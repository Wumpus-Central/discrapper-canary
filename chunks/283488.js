"use strict";
n.d(t, { A: () => s });
var i = n(582128),
    r = n(970928);
let a = ["embedded_cover", "embedded_background"];
function s(e) {
    let { applicationId: t, size: n, names: s = a, format: l = "png" } = e,
        [o, d] = i.useState(null),
        [c, u] = i.useState(!0),
        _ = (0, r.uD)(t, o, n, l),
        E = i.useRef(s);
    return (
        i.useEffect(() => {
            E.current = s;
        }),
        i.useEffect(() => {
            let { current: e } = E;
            null != t &&
                (0, r.Y)(t).then((t) => {
                    for (let [n, i] of (u(!1), Object.entries(t)))
                        if (null != i && "" !== i.id && e.includes(i.name)) return void d(i.id);
                });
        }, [t]),
        { url: _, state: c ? "loading" : null != _ ? "fetched" : "not-found" }
    );
}
