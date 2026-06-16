s.d(e, { V: () => n });
var u = s(64700),
    a = s(506774),
    l = s(964486);
function n(t, e) {
    let [s, n] = u.useState(() => {
        let s = a.w.get(t);
        return null != s ? s : e;
    });
    return (
        (0, l.Ay)(() => {
            null == a.w.get(t) && a.w.set(t, e);
        }),
        [
            s,
            u.useCallback(
                (e) => {
                    n(e), a.w.set(t, e);
                },
                [t],
            ),
        ]
    );
}
