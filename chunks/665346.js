n.d(t, { A: () => a }), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(775602),
    s = n(555337);
function a(e, t) {
    let [n, a] = r.useState(!1),
        c = (0, i.bG)([s.A], () => s.A.getProps().subsection),
        o = (0, i.bG)([l.A], () => l.A.useReducedMotion);
    r.useEffect(() => {
        n || (null !== e.current && c === t && (a(!0), e.current.scrollIntoView({ behavior: o ? "auto" : "smooth" })));
    }, [n, c, t, o, e]);
}
