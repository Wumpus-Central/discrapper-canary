n.d(t, { A: () => l });
var i = n(64700),
    a = n(724442);
function l(e, t) {
    let n = (0, i.useRef)(!1),
        l = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== l.current), (l.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let s = e !== (0, a.A)(l),
        r = (0, a.A)(n);
    return s || r;
}
