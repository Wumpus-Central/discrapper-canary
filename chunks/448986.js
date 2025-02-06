n.d(t, { Z: () => i }), n(47120);
var l = n(192379);
function i(e) {
    let t = l.useRef(e);
    return (
        l.useInsertionEffect(() => {
            t.current = e;
        }),
        l.useCallback(function () {
            for (var e = arguments.length, n = Array(e), l = 0; l < e; l++) n[l] = arguments[l];
            return t.current(...n);
        }, [])
    );
}
