"use strict";
n.d(t, { A: () => r });
var i = n(64700),
    l = n(139675);
let s = ["embedded_cover", "embedded_background"];
function r(e) {
    let { applicationId: t, size: n, names: r = s, format: a = "png" } = e,
        [o, c] = i.useState(null),
        [u, d] = i.useState(!0),
        h = (0, l.uD)(t, o, n, a),
        m = i.useRef(r);
    return (
        i.useEffect(() => {
            m.current = r;
        }),
        i.useEffect(() => {
            let { current: e } = m;
            null != t &&
                (0, l.Y)(t).then((t) => {
                    for (let [n, i] of (d(!1), Object.entries(t)))
                        if (null != i && "" !== i.id && e.includes(i.name)) return void c(i.id);
                });
        }, [t]),
        { url: h, state: u ? "loading" : null != h ? "fetched" : "not-found" }
    );
}
