n.d(t, { A: () => i });
var r = n(64700),
    l = n(724442);
function i(e, t) {
    let n = (0, r.useRef)(!1),
        i = (0, r.useRef)(e);
    (0, r.useEffect)(() => {
        (n.current = e !== i.current), (i.current = e);
    }, [e]),
        (0, r.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== (0, l.A)(i),
        s = (0, l.A)(n);
    return a || s;
}
