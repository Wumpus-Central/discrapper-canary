n.d(t, { Z: () => i });
var r = n(192379);
function i(e) {
    let t = r.useRef(null),
        n = r.useCallback(
            (n) => {
                null != e && ('function' == typeof e ? e(n) : (e.current = n), (t.current = n));
            },
            [e]
        );
    return [t, n];
}
