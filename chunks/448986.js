n.d(t, {
    Z: function () {
        return r;
    }
}),
    n(47120);
var i = n(192379);
function r(e) {
    let t = i.useRef(e);
    return (
        i.useInsertionEffect(() => {
            t.current = e;
        }),
        i.useCallback(function () {
            for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return t.current(...n);
        }, [])
    );
}
