n.d(t, { A: () => a }), n(228524);
var r = n(64700);
let i = Symbol();
function a(e, t) {
    let n = r.useRef(i),
        a = r.useRef(t);
    return r.useSyncExternalStore(
        r.useCallback(
            (t) =>
                e(() => {
                    (n.current = i), t();
                }),
            [e],
        ),
        r.useCallback(
            () => (
                a.current !== t && ((a.current = t), (n.current = i)), n.current === i && (n.current = t()), n.current
            ),
            [t],
        ),
    );
}
