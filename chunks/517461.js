n.d(t, { V: () => a });
var i = n(64700),
    l = n(506774),
    s = n(964486);
function a(e, t) {
    let [n, a] = i.useState(() => {
        let n = l.w.get(e);
        return null != n ? n : t;
    });
    return (
        (0, s.Ay)(() => {
            null == l.w.get(e) && l.w.set(e, t);
        }),
        [
            n,
            i.useCallback(
                (t) => {
                    a(t), l.w.set(e, t);
                },
                [e],
            ),
        ]
    );
}
