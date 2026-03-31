n.d(t, { S: () => d });
var i = n(64700),
    l = n(635377),
    s = n.n(l),
    a = n(998304),
    r = n(515718);
let o = new (s())({ max: 50 });
async function c(e) {
    let t = o.get(e);
    if (null != t) return t;
    let n = await new Promise((t, n) => {
            let i = new Image();
            (i.crossOrigin = "Anonymous"),
                (i.onerror = (e) => {
                    n(e), null != i && ((i.onerror = null), (i.onload = null)), (i = null);
                }),
                (i.onload = () => {
                    null != i
                        ? (t((0, r.Sf)(i, 2, 10)), (i.onerror = null), (i.onload = null), (i = null))
                        : n("image is null");
                }),
                (i.src = e);
        }),
        i = (0, a.Ob)(...n[0]);
    return o.set(e, i), i;
}
function d(e) {
    let [t, n] = i.useState(() => (null != e ? o.get(e) : void 0)),
        [l, s] = i.useState();
    if (null != e && e !== l) {
        s(e);
        let t = o.get(e);
        null != t
            ? n(t)
            : c(e).then((e) => {
                  n(e);
              });
    }
    return t;
}
