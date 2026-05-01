n.d(t, { A: () => a });
var i = n(64700),
    l = n(724442);
function a(e, t) {
    let n = (0, i.useRef)(!1),
        a = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== a.current), (a.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let s = e !== (0, l.A)(a),
        r = (0, l.A)(n);
    return s || r;
}
