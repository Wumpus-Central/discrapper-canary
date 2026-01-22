n.d(t, {
    _: () => a,
});
var r = n(959462),
    i = n(64700);

function a(e, t, n, a) {
    let s = (0, r.J)(n),
        o = null == n;
    (0, i.useEffect)(() => {
        if (o || !e.current) return;
        let n = e.current;
        return (
            n.addEventListener(t, s, a),
            () => {
                n.removeEventListener(t, s, a);
            }
        );
    }, [e, t, a, o, s]);
}
