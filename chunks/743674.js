n.d(t, {
    S: () => s,
}),
    n(896048);
var r = n(64700),
    i = n(998304),
    l = n(515718);
async function a(e) {
    return (
        await new Promise((t, n) => {
            let r = new Image();
            (r.crossOrigin = "Anonymous"),
                (r.onerror = (e) => {
                    n(e), null != r && ((r.onerror = null), (r.onload = null)), (r = null);
                }),
                (r.onload = () => {
                    null != r
                        ? (t((0, l.Sf)(r, 2, 10)), (r.onerror = null), (r.onload = null), (r = null))
                        : n("image is null");
                }),
                (r.src = e);
        })
    ).map((e) => {
        let [t, n, r] = e;
        return (0, i.Ob)(t, n, r);
    });
}

function s(e) {
    let [t, n] = r.useState(),
        i = r.useRef(!1);
    return (
        null == e ||
            null != t ||
            i.current ||
            ((i.current = !0),
            a(e).then((e) => {
                n(e[0]);
            })),
        t
    );
}
