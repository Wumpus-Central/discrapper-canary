n.d(t, { S: () => s });
var i = n(64700),
    r = n(998304),
    a = n(515718);
async function l(e) {
    return (
        await new Promise((t, n) => {
            let i = new Image();
            (i.crossOrigin = "Anonymous"),
                (i.onerror = (e) => {
                    n(e), null != i && ((i.onerror = null), (i.onload = null)), (i = null);
                }),
                (i.onload = () => {
                    null != i
                        ? (t((0, a.Sf)(i, 2, 10)), (i.onerror = null), (i.onload = null), (i = null))
                        : n("image is null");
                }),
                (i.src = e);
        })
    ).map((e) => {
        let [t, n, i] = e;
        return (0, r.Ob)(t, n, i);
    });
}
function s(e) {
    let [t, n] = i.useState(),
        r = i.useRef(!1);
    return (
        null == e ||
            null != t ||
            r.current ||
            ((r.current = !0),
            l(e).then((e) => {
                n(e[0]);
            })),
        t
    );
}
