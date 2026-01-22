n.d(t, { A: () => i }), n(896048);
var r = n(64700);
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
