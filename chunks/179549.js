n.d(t, { y: () => a });
var r = n(484948),
    i = n(473749);
function a(e, t, n) {
    let a = (0, r.i)(() => {
        n && n(t);
    });
    (0, i.useEffect)(() => {
        var t;
        let n = null == e || null == (t = e.current) ? void 0 : t.form;
        return (
            null == n || n.addEventListener("reset", a),
            () => {
                null == n || n.removeEventListener("reset", a);
            }
        );
    }, [e, a]);
}
