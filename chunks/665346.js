n.d(t, { A: () => a });
var i = n(64700),
    l = n(311907),
    s = n(775602),
    r = n(555337);
function a(e, t) {
    let [n, a] = i.useState(!1),
        o = (0, l.bG)([r.A], () => r.A.getProps().subsection),
        d = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    i.useEffect(() => {
        n || (null !== e.current && o === t && (a(!0), e.current.scrollIntoView({ behavior: d ? "auto" : "smooth" })));
    }, [n, o, t, d, e]);
}
