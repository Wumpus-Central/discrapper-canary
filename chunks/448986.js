n.d(t, { Z: () => l }), n(47120);
var r = n(192379);
function l(e) {
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
