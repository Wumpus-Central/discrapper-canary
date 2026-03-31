n.d(t, { A: () => s });
var i = n(64700),
    l = n(724442);
function s(e, t) {
    let n = (0, i.useRef)(!1),
        s = (0, i.useRef)(e);
    (0, i.useEffect)(() => {
        (n.current = e !== s.current), (s.current = e);
    }, [e]),
        (0, i.useEffect)(() => {
            let e = setTimeout(() => (n.current = !1), t);
            return () => clearTimeout(e);
        }, [e, t]);
    let a = e !== (0, l.A)(s),
        r = (0, l.A)(n);
    return a || r;
}
