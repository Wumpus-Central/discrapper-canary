n.d(t, { Z: () => r });
var i = n(192379);
function r(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (n) => {
                null != e && ('function' == typeof e ? e(n) : (e.current = n), (t.current = n));
            },
            [e]
        );
    return [t, n];
}
