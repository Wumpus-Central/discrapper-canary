n.d(t, { A: () => u });
var r = n(64700);
function u(e) {
    let t = r.useRef(null),
        n = r.useCallback(
            (n) => {
                null != e && ("function" == typeof e ? e(n) : (e.current = n), (t.current = n));
            },
            [e],
        );
    return [t, n];
}
