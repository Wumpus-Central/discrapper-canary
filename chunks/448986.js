n.d(t, { Z: () => i }), n(388685);
var r = n(73800);
function i(e) {
    let t = r.useRef(e);
    return (
        r.useInsertionEffect(() => {
            t.current = e;
        }),
        r.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return t.current(...n);
        }, [])
    );
}
