n.d(t, { V: () => a }), n(896048);
var r = n(64700),
    l = n(506774),
    i = n(964486);
function a(e, t) {
    let [n, a] = r.useState(() => {
        let n = l.w.get(e);
        return null != n ? n : t;
    });
    return (
        (0, i.Ay)(() => {
            null == l.w.get(e) && l.w.set(e, t);
        }),
        [
            n,
            r.useCallback(
                (t) => {
                    a(t), l.w.set(e, t);
                },
                [e],
            ),
        ]
    );
}
