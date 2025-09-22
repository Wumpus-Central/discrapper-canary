n.d(t, { y: () => a });
var r = n(101741),
    i = n(647438);
function a(e, t, n) {
    let a = (0, i.useRef)(t),
        o = (0, r.i)(() => {
            n && n(a.current);
        });
    (0, i.useEffect)(() => {
        var t;
        let n = null == e || null == (t = e.current) ? void 0 : t.form;
        return (
            null == n || n.addEventListener("reset", o),
            () => {
                null == n || n.removeEventListener("reset", o);
            }
        );
    }, [e, o]);
}
