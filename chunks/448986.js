r.d(t, { Z: () => o }), r(47120);
var n = r(192379);
function o(e) {
    let t = n.useRef(e);
    return (
        n.useInsertionEffect(() => {
            t.current = e;
        }),
        n.useCallback(function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++) r[n] = arguments[n];
            return t.current(...r);
        }, [])
    );
}
